import { NextRequest, NextResponse } from 'next/server';
import { writeFile, readdir, mkdir, unlink } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

// Get all media files
export async function GET() {
  try {
    const publicDir = path.join(process.cwd(), 'public');
    const mediaStructure = await getMediaStructure(publicDir);
    
    return NextResponse.json({ 
      success: true, 
      media: mediaStructure 
    });
  } catch (error) {
    console.error('Error fetching media:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch media files' },
      { status: 500 }
    );
  }
}

// Upload new media file
export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const category = formData.get('category') as string || 'images';
    const subcategory = formData.get('subcategory') as string || '';
    
    if (!file) {
      return NextResponse.json(
        { success: false, error: 'No file provided' },
        { status: 400 }
      );
    }

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml'];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { success: false, error: 'Invalid file type. Only images are allowed.' },
        { status: 400 }
      );
    }

    // Create upload directory path
    const uploadDir = path.join(process.cwd(), 'public', category, subcategory);
    
    // Ensure directory exists
    if (!existsSync(uploadDir)) {
      await mkdir(uploadDir, { recursive: true });
    }

    // Generate unique filename to avoid conflicts
    const timestamp = Date.now();
    const originalName = file.name;
    const extension = path.extname(originalName);
    const baseName = path.basename(originalName, extension);
    const fileName = `${baseName}-${timestamp}${extension}`;
    
    const filePath = path.join(uploadDir, fileName);
    
    // Convert file to buffer and save
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    
    await writeFile(filePath, buffer);
    
    // Return the public URL path
    const publicPath = `/${category}${subcategory ? `/${subcategory}` : ''}/${fileName}`;
    
    return NextResponse.json({
      success: true,
      message: 'File uploaded successfully',
      filePath: publicPath,
      fileName: fileName
    });
    
  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to upload file' },
      { status: 500 }
    );
  }
}

// Delete media file
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const filePath = searchParams.get('path');
    
    if (!filePath) {
      return NextResponse.json(
        { success: false, error: 'No file path provided' },
        { status: 400 }
      );
    }

    const fullPath = path.join(process.cwd(), 'public', filePath);
    
    if (!existsSync(fullPath)) {
      return NextResponse.json(
        { success: false, error: 'File not found' },
        { status: 404 }
      );
    }

    await unlink(fullPath);
    
    return NextResponse.json({
      success: true,
      message: 'File deleted successfully'
    });
    
  } catch (error) {
    console.error('Error deleting file:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete file' },
      { status: 500 }
    );
  }
}

// Helper function to recursively get media structure
async function getMediaStructure(dir: string, relativePath = ''): Promise<any> {
  const items = await readdir(dir, { withFileTypes: true });
  const structure: any = {};
  
  for (const item of items) {
    const itemPath = path.join(dir, item.name);
    const relativeItemPath = path.join(relativePath, item.name);
    
    if (item.isDirectory()) {
      // Skip node_modules and other non-media directories
      if (!['node_modules', '.next', '.git'].includes(item.name)) {
        structure[item.name] = await getMediaStructure(itemPath, relativeItemPath);
      }
    } else {
      // Only include image and media files
      const ext = path.extname(item.name).toLowerCase();
      if (['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.mp4', '.mov', '.avi'].includes(ext)) {
        structure[item.name] = {
          type: 'file',
          path: '/' + relativeItemPath.replace(/\\/g, '/'),
          size: (await readdir(dir, { withFileTypes: true })).find(f => f.name === item.name)
        };
      }
    }
  }
  
  return structure;
}