"use client";
import React, { useState, useRef } from 'react';
import { useEditMode } from '@/contexts/EditModeContext';
import styles from './EditableImage.module.scss';
import Image from 'next/image';
import StyleEditor from './StyleEditor';
import { ImageStyle } from '@/utils/content';

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
  style?: ImageStyle;
  onStyleChange?: (style: ImageStyle) => void;
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
  style: initialStyle = {},
  onStyleChange,
}: EditableImageProps) {
  const { isEditMode, addPendingChange, pendingChanges } = useEditMode();
  const [localSrc, setLocalSrc] = useState(src);
  const [isHovered, setIsHovered] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [showStyleEditor, setShowStyleEditor] = useState(false);
  const [styleEditorPosition, setStyleEditorPosition] = useState({ x: 0, y: 0 });
  const [localStyle, setLocalStyle] = useState<ImageStyle>(initialStyle);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const hasChanges = pendingChanges.has(path) || pendingChanges.has(`${path}.style`);

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

  const handleStyleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!showStyleEditor && imageRef.current) {
      const rect = imageRef.current.getBoundingClientRect();
      setStyleEditorPosition({
        x: rect.right + 10,
        y: rect.top
      });
    }
    setShowStyleEditor(!showStyleEditor);
  };

  const handleStyleChange = (newStyle: ImageStyle) => {
    setLocalStyle(newStyle);
    addPendingChange(`${path}.style`, newStyle);
    onStyleChange?.(newStyle);
  };

  const wrapperClassName = `
    ${styles.editableImage}
    ${isEditMode ? styles.editable : ''}
    ${hasChanges ? styles.hasChanges : ''}
  `.trim();

  const imageStyle = {
    width: localStyle.width || (width ? `${width}px` : 'auto'),
    height: localStyle.height || (height ? `${height}px` : 'auto'),
    borderRadius: localStyle.borderRadius,
    objectFit: localStyle.objectFit || objectFit,
  };

  return (
    <>
      <div
        ref={imageRef}
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
              style={{ objectFit: imageStyle.objectFit as any, borderRadius: imageStyle.borderRadius }}
              className={className}
            />
          ) : (
            <Image
              src={localSrc}
              alt={alt}
              width={width || 500}
              height={height || 300}
              style={{ objectFit: imageStyle.objectFit as any, borderRadius: imageStyle.borderRadius }}
              className={className}
            />
          )
        ) : (
          <img
            src={localSrc}
            alt={alt}
            className={className}
            style={imageStyle as any}
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
                <button
                  className={styles.styleButton}
                  onClick={handleStyleButtonClick}
                  title="Edit styles"
                >
                  🎨 Style
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {showStyleEditor && (
        <StyleEditor
          type="image"
          currentStyles={localStyle}
          onStyleChange={handleStyleChange}
          onClose={() => setShowStyleEditor(false)}
          position={styleEditorPosition}
        />
      )}
    </>
  );
}
