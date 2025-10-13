"use client";
import React, { useState, useRef } from 'react';
import { useEditMode } from '@/contexts/EditModeContext';
import styles from './EditableImage.module.scss';
import Image from 'next/image';

interface EditableImageProps {
  src: string;
  alt: string;
  path: string; // JSON path like "homepage.hero.backgroundImage"
  onChange?: (src: string) => void;
  className?: string;
  width?: number;
  height?: number;
  fill?: boolean;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  useNextImage?: boolean;
}

export default function EditableImage({
  src,
  alt,
  path,
  onChange,
  className = '',
  width,
  height,
  fill,
  objectFit = 'cover',
  useNextImage = false,
}: EditableImageProps) {
  const { isEditMode, addPendingChange, pendingChanges } = useEditMode();
  const [localSrc, setLocalSrc] = useState(src);
  const [isHovered, setIsHovered] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const hasChanges = pendingChanges.has(path);

  const handleReplaceClick = () => {
    if (isEditMode) {
      fileInputRef.current?.click();
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      alert('Please select an image file');
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert('Image must be less than 5MB');
      return;
    }

    setIsUploading(true);

    try {
      // Upload to media API
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/api/media', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      const data = await response.json();
      const newSrc = data.url;

      // Update local state
      setLocalSrc(newSrc);
      
      // Add to pending changes
      addPendingChange(path, newSrc);
      
      // Call onChange callback
      onChange?.(newSrc);
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Failed to upload image. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  const wrapperClassName = `
    ${styles.editableImage}
    ${isEditMode ? styles.editable : ''}
    ${hasChanges ? styles.hasChanges : ''}
  `.trim();

  return (
    <div
      className={wrapperClassName}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-path={path}
      data-editable="image"
    >
      {useNextImage ? (
        fill ? (
          <Image
            src={localSrc}
            alt={alt}
            fill
            style={{ objectFit }}
            className={className}
          />
        ) : (
          <Image
            src={localSrc}
            alt={alt}
            width={width || 500}
            height={height || 300}
            style={{ objectFit }}
            className={className}
          />
        )
      ) : (
        <img
          src={localSrc}
          alt={alt}
          className={className}
          style={{ objectFit, width: width ? `${width}px` : 'auto', height: height ? `${height}px` : 'auto' }}
        />
      )}

      {isEditMode && (
        <>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
          
          {(isHovered || isUploading) && (
            <div className={styles.overlay}>
              <button
                className={styles.replaceButton}
                onClick={handleReplaceClick}
                disabled={isUploading}
              >
                {isUploading ? (
                  <>
                    <span className={styles.spinner}>⏳</span>
                    Uploading...
                  </>
                ) : (
                  <>
                    🖼️ Replace Image
                  </>
                )}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
