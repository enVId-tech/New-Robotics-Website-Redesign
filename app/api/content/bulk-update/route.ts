import { NextRequest, NextResponse } from 'next/server';
import { readFile, writeFile } from 'fs/promises';
import path from 'path';
import { cookies } from 'next/headers';
import { clearContentCache } from '@/utils/content';

export async function POST(request: NextRequest) {
  try {
    // Check authentication
    const cookieStore = await cookies();
    const session = cookieStore.get('admin_session');
    
    if (!session) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { changes } = await request.json();

    if (!changes || typeof changes !== 'object') {
      return NextResponse.json(
        { error: 'Invalid changes format' },
        { status: 400 }
      );
    }

    // Read current content
    const contentPath = path.join(process.cwd(), 'content', 'site-content.json');
    const contentData = await readFile(contentPath, 'utf-8');
    const content = JSON.parse(contentData);

    // Apply all changes
    Object.entries(changes).forEach(([jsonPath, value]) => {
      // Parse path like "homepage.hero.title" or "news.articles[0].title" into nested object access
      const keys = jsonPath.split('.').flatMap(key => {
        // Handle array notation like "articles[0]"
        const arrayMatch = key.match(/^([^\[]+)\[(\d+)\]$/);
        if (arrayMatch) {
          return [arrayMatch[1], arrayMatch[2]];
        }
        return key;
      });
      
      let current: any = content;

      // Navigate to the parent of the target property
      for (let i = 0; i < keys.length - 1; i++) {
        const key = keys[i];
        
        // If current is a string and we're trying to access nested properties, convert to object
        if (typeof current === 'string') {
          console.error(`Cannot navigate into string value at path: ${keys.slice(0, i).join('.')}`);
          return; // Skip this update
        }
        
        if (!(key in current)) {
          // Check if next key is a number (array index)
          const nextKey = keys[i + 1];
          if (!isNaN(Number(nextKey))) {
            current[key] = [];
          } else {
            current[key] = {};
          }
        }
        current = current[key];
      }

      // Set the value
      const lastKey = keys[keys.length - 1];
      
      // If current is a string, we can't set properties on it
      if (typeof current === 'string') {
        console.error(`Cannot set property '${lastKey}' on string value at path: ${keys.slice(0, -1).join('.')}`);
        return; // Skip this update
      }
      
      // Special handling for style properties
      if (lastKey === 'style') {
        // Get the parent property (one level up)
        const parentKey = keys[keys.length - 2];
        
        // Navigate to the grandparent to access the parent value
        let grandparent: any = content;
        for (let i = 0; i < keys.length - 2; i++) {
          grandparent = grandparent[keys[i]];
        }
        
        const parentValue = grandparent[parentKey];
        
        // If parent is a string, convert it to an object with value and style
        if (typeof parentValue === 'string') {
          grandparent[parentKey] = {
            value: parentValue,
            style: value
          };
        } else if (typeof parentValue === 'object' && parentValue !== null) {
          // Parent is already an object, just set the style
          grandparent[parentKey].style = value;
        } else {
          // Parent doesn't exist or is null, create new object
          grandparent[parentKey] = {
            value: '',
            style: value
          };
        }
      } else {
        // Regular value update
        // If we're updating a value that has a style, preserve the style
        if (typeof current[lastKey] === 'object' && current[lastKey] !== null && 'style' in current[lastKey]) {
          current[lastKey].value = value;
        } else {
          current[lastKey] = value;
        }
      }
    });

    // Write updated content
    await writeFile(contentPath, JSON.stringify(content, null, 2), 'utf-8');

    // Clear the content cache
    clearContentCache();

    return NextResponse.json({
      success: true,
      changesApplied: Object.keys(changes).length,
    });
  } catch (error) {
    console.error('Error updating content:', error);
    return NextResponse.json(
      { error: 'Failed to update content' },
      { status: 500 }
    );
  }
}
