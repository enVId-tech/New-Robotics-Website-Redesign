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
      // Parse path like "homepage.hero.title" into nested object access
      const keys = jsonPath.split('.');
      let current: any = content;

      // Navigate to the parent of the target property
      for (let i = 0; i < keys.length - 1; i++) {
        if (!(keys[i] in current)) {
          current[keys[i]] = {};
        }
        current = current[keys[i]];
      }

      // Set the value
      const lastKey = keys[keys.length - 1];
      current[lastKey] = value;
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
