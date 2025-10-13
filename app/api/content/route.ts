import { NextRequest, NextResponse } from 'next/server';
import { readFile, writeFile } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { clearContentCache } from '@/utils/content';

const CONTENT_FILE_PATH = path.join(process.cwd(), 'content', 'site-content.json');

// Get all site content
export async function GET() {
  try {
    if (!existsSync(CONTENT_FILE_PATH)) {
      return NextResponse.json(
        { success: false, error: 'Content file not found' },
        { status: 404 }
      );
    }

    const contentData = await readFile(CONTENT_FILE_PATH, 'utf-8');
    const content = JSON.parse(contentData);
    
    return NextResponse.json({ 
      success: true, 
      content 
    });
  } catch (error) {
    console.error('Error fetching content:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch content' },
      { status: 500 }
    );
  }
}

// Update site content
export async function POST(request: NextRequest) {
  try {
    const { section, data } = await request.json();
    
    console.log('API received:', { section, data });
    
    if (!section || data === undefined) {
      console.log('Missing section or data');
      return NextResponse.json(
        { success: false, error: 'Section and data are required' },
        { status: 400 }
      );
    }

    // Read current content
    let content = {};
    if (existsSync(CONTENT_FILE_PATH)) {
      const contentData = await readFile(CONTENT_FILE_PATH, 'utf-8');
      content = JSON.parse(contentData);
      console.log('Current content loaded');
    } else {
      console.log('Content file does not exist, creating new');
    }

    // Update specific section
    if (section === 'full') {
      // Replace entire content (for full content updates)
      content = data;
      console.log('Replacing full content');
    } else {
      // Update specific section
      const sectionPath = section.split('.');
      console.log('Section path:', sectionPath);
      let current = content as any;
      
      // Navigate to the correct section
      for (let i = 0; i < sectionPath.length - 1; i++) {
        const pathSegment = sectionPath[i];
        
        // Check if this segment is a number (array index)
        if (!isNaN(Number(pathSegment))) {
          const index = Number(pathSegment);
          if (!Array.isArray(current)) {
            console.error('Trying to access array index on non-array:', current);
            return NextResponse.json(
              { success: false, error: `Path segment ${pathSegment} expects an array but found ${typeof current}` },
              { status: 400 }
            );
          }
          current = current[index];
        } else {
          // Regular object property
          if (!current[pathSegment]) {
            current[pathSegment] = {};
          }
          current = current[pathSegment];
        }
      }
      
      const finalKey = sectionPath[sectionPath.length - 1];
      console.log('Setting value at path:', finalKey, 'to:', data);
      
      // Handle final segment (could be array index or object key)
      if (!isNaN(Number(finalKey))) {
        const index = Number(finalKey);
        if (!Array.isArray(current)) {
          console.error('Trying to set array index on non-array:', current);
          return NextResponse.json(
            { success: false, error: `Final path segment ${finalKey} expects an array but found ${typeof current}` },
            { status: 400 }
          );
        }
        current[index] = data;
      } else {
        current[finalKey] = data;
      }
    }

    console.log('Writing content to file...');
    // Write updated content back to file
    await writeFile(CONTENT_FILE_PATH, JSON.stringify(content, null, 2));
    console.log('Content written successfully');
    
    // Clear the server-side cache so next request gets fresh data
    clearContentCache();
    
    return NextResponse.json({
      success: true,
      message: 'Content updated successfully',
      section,
      updatedData: data
    });
    
  } catch (error) {
    console.error('Error updating content:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update content' },
      { status: 500 }
    );
  }
}

// Add new navigation item or content section
export async function PUT(request: NextRequest) {
  try {
    const { section, item } = await request.json();
    
    if (!section || !item) {
      return NextResponse.json(
        { success: false, error: 'Section and item are required' },
        { status: 400 }
      );
    }

    // Read current content
    let content = {};
    if (existsSync(CONTENT_FILE_PATH)) {
      const contentData = await readFile(CONTENT_FILE_PATH, 'utf-8');
      content = JSON.parse(contentData);
    }

    // Add new item to specified section
    const sectionPath = section.split('.');
    let current = content as any;
    
    // Navigate to the correct section
    for (const part of sectionPath) {
      if (!current[part]) {
        current[part] = {};
      }
      current = current[part];
    }
    
    // Add the new item
    if (Array.isArray(current)) {
      current.push(item);
    } else if (section === 'navigation.items') {
      if (!current.items) current.items = [];
      current.items.push(item);
    } else {
      // For non-array sections, merge the item
      Object.assign(current, item);
    }

    // Write updated content back to file
    await writeFile(CONTENT_FILE_PATH, JSON.stringify(content, null, 2));
    
    // Clear the server-side cache
    clearContentCache();
    
    return NextResponse.json({
      success: true,
      message: 'Item added successfully',
      section,
      addedItem: item
    });
    
  } catch (error) {
    console.error('Error adding item:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to add item' },
      { status: 500 }
    );
  }
}

// Delete content section or item
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const section = searchParams.get('section');
    const itemId = searchParams.get('itemId');
    
    if (!section) {
      return NextResponse.json(
        { success: false, error: 'Section is required' },
        { status: 400 }
      );
    }

    // Read current content
    if (!existsSync(CONTENT_FILE_PATH)) {
      return NextResponse.json(
        { success: false, error: 'Content file not found' },
        { status: 404 }
      );
    }

    const contentData = await readFile(CONTENT_FILE_PATH, 'utf-8');
    const content = JSON.parse(contentData);

    // Navigate to section and delete
    const sectionPath = section.split('.');
    let current = content as any;
    let parent = null;
    let lastKey = '';
    
    for (let i = 0; i < sectionPath.length; i++) {
      if (i === sectionPath.length - 1) {
        lastKey = sectionPath[i];
        break;
      }
      parent = current;
      current = current[sectionPath[i]];
      if (!current) {
        return NextResponse.json(
          { success: false, error: 'Section not found' },
          { status: 404 }
        );
      }
    }

    // Delete specific item or entire section
    if (itemId && Array.isArray(current[lastKey])) {
      // Remove specific item from array
      current[lastKey] = current[lastKey].filter((item: any) => 
        item.id !== itemId && item.name !== itemId
      );
    } else {
      // Delete entire section
      delete current[lastKey];
    }

    // Write updated content back to file
    await writeFile(CONTENT_FILE_PATH, JSON.stringify(content, null, 2));
    
    // Clear the server-side cache
    clearContentCache();
    
    return NextResponse.json({
      success: true,
      message: itemId ? 'Item deleted successfully' : 'Section deleted successfully'
    });
    
  } catch (error) {
    console.error('Error deleting content:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete content' },
      { status: 500 }
    );
  }
}