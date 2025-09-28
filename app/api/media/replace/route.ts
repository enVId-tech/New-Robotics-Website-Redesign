import { NextRequest, NextResponse } from 'next/server';
import { writeFile, unlink } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

// Replace existing media file
export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const existingPath = formData.get('existingPath') as string;
    
    if (!file) {
      return NextResponse.json(
        { success: false, error: 'No file provided' },
        { status: 400 }
      );
    }

    if (!existingPath) {
      return NextResponse.json(
        { success: false, error: 'No existing file path provided' },
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

    // Get the full path of existing file
    const existingFullPath = path.join(process.cwd(), 'public', existingPath);
    
    if (!existsSync(existingFullPath)) {
      return NextResponse.json(
        { success: false, error: 'Existing file not found' },
        { status: 404 }
      );
    }

    // Create backup of existing file (optional)
    const backupDir = path.join(process.cwd(), 'public', '.backups');
    if (!existsSync(backupDir)) {
      await require('fs/promises').mkdir(backupDir, { recursive: true });
    }
    
    const timestamp = Date.now();
    const existingFileName = path.basename(existingPath);
    const backupPath = path.join(backupDir, `${timestamp}-${existingFileName}`);
    
    try {
      await require('fs/promises').copyFile(existingFullPath, backupPath);
    } catch (backupError) {
      console.warn('Could not create backup:', backupError);
    }

    // Replace the file
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    
    await writeFile(existingFullPath, buffer);
    
    return NextResponse.json({
      success: true,
      message: 'File replaced successfully',
      filePath: `/${existingPath}`,
      backupCreated: true
    });
    
  } catch (error) {
    console.error('Error replacing file:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to replace file' },
      { status: 500 }
    );
  }
}