import { NextRequest, NextResponse } from 'next/server';
import { readFile, writeFile } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

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
    
    if (!section || !data) {
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
    }

    // Update specific section
    if (section === 'full') {
      // Replace entire content (for full content updates)
      content = data;
    } else {
      // Update specific section
      const sectionPath = section.split('.');
      let current = content as any;
      
      // Navigate to the correct section
      for (let i = 0; i < sectionPath.length - 1; i++) {
        if (!current[sectionPath[i]]) {
          current[sectionPath[i]] = {};
        }
        current = current[sectionPath[i]];
      }
      
      // Update the final section
      current[sectionPath[sectionPath.length - 1]] = data;
    }

    // Write updated content back to file
    await writeFile(CONTENT_FILE_PATH, JSON.stringify(content, null, 2));
    
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