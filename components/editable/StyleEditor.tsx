"use client";
import React, { useState, useEffect } from 'react';
import styles from './StyleEditor.module.scss';
import { ImageStyle, TextStyle } from '@/utils/content';

interface StyleEditorProps {
  type: 'text' | 'image';
  currentStyles: any;
  onStyleChange: (styles: any) => void;
  onClose: () => void;
  position: { x: number; y: number };
}

export default function StyleEditor({
  type,
  currentStyles,
  onStyleChange,
  onClose,
  position
}: StyleEditorProps) {
  const [localStyles, setLocalStyles] = useState(currentStyles);

  useEffect(() => {
    setLocalStyles(currentStyles);
  }, [currentStyles]);

  const handleChange = (property: string, value: string) => {
    const updated = { ...localStyles, [property]: value };
    setLocalStyles(updated);
    onStyleChange(updated);
  };

  const handleReset = (property: string) => {
    const updated = { ...localStyles };
    delete (updated as any)[property];
    setLocalStyles(updated);
    onStyleChange(updated);
  };

  return (
    <div 
      className={styles.styleEditor}
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px` 
      }}
    >
      <div className={styles.header}>
        <h4>Style Properties</h4>
        <button onClick={onClose} className={styles.closeBtn}>×</button>
      </div>

      <div className={styles.content}>
        {type === 'text' ? (
          <>
            {/* Font Size */}
            <div className={styles.property}>
              <label>Font Size</label>
              <div className={styles.inputGroup}>
                <input
                  type="text"
                  value={(localStyles as TextStyle).fontSize || ''}
                  onChange={(e) => handleChange('fontSize', e.target.value)}
                  placeholder="e.g., 16px, 1.5rem"
                />
                <button onClick={() => handleReset('fontSize')} title="Reset">↺</button>
              </div>
            </div>

            {/* Font Family */}
            <div className={styles.property}>
              <label>Font Family</label>
              <div className={styles.inputGroup}>
                <select
                  value={(localStyles as TextStyle).fontFamily || ''}
                  onChange={(e) => handleChange('fontFamily', e.target.value)}
                >
                  <option value="">Default</option>
                  <option value="Titillium Web">Titillium Web</option>
                  <option value="Montserrat">Montserrat</option>
                  <option value="Arial">Arial</option>
                  <option value="Helvetica">Helvetica</option>
                  <option value="sans-serif">Sans-serif</option>
                </select>
                <button onClick={() => handleReset('fontFamily')} title="Reset">↺</button>
              </div>
            </div>

            {/* Font Weight */}
            <div className={styles.property}>
              <label>Font Weight</label>
              <div className={styles.inputGroup}>
                <select
                  value={(localStyles as TextStyle).fontWeight || ''}
                  onChange={(e) => handleChange('fontWeight', e.target.value)}
                >
                  <option value="">Default</option>
                  <option value="300">Light (300)</option>
                  <option value="400">Regular (400)</option>
                  <option value="500">Medium (500)</option>
                  <option value="600">Semi-Bold (600)</option>
                  <option value="700">Bold (700)</option>
                  <option value="900">Black (900)</option>
                </select>
                <button onClick={() => handleReset('fontWeight')} title="Reset">↺</button>
              </div>
            </div>

            {/* Line Height */}
            <div className={styles.property}>
              <label>Line Height</label>
              <div className={styles.inputGroup}>
                <input
                  type="text"
                  value={(localStyles as TextStyle).lineHeight || ''}
                  onChange={(e) => handleChange('lineHeight', e.target.value)}
                  placeholder="e.g., 1.5, 24px"
                />
                <button onClick={() => handleReset('lineHeight')} title="Reset">↺</button>
              </div>
            </div>

            {/* White Space */}
            <div className={styles.property}>
              <label>White Space</label>
              <div className={styles.inputGroup}>
                <select
                  value={(localStyles as TextStyle).whiteSpace || ''}
                  onChange={(e) => handleChange('whiteSpace', e.target.value)}
                >
                  <option value="">Default</option>
                  <option value="normal">Normal</option>
                  <option value="pre-line">Pre-line</option>
                  <option value="pre-wrap">Pre-wrap</option>
                </select>
                <button onClick={() => handleReset('whiteSpace')} title="Reset">↺</button>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Width */}
            <div className={styles.property}>
              <label>Width</label>
              <div className={styles.inputGroup}>
                <input
                  type="text"
                  value={(localStyles as ImageStyle).width || ''}
                  onChange={(e) => handleChange('width', e.target.value)}
                  placeholder="e.g., 300px, 50%, auto"
                />
                <button onClick={() => handleReset('width')} title="Reset">↺</button>
              </div>
            </div>

            {/* Height */}
            <div className={styles.property}>
              <label>Height</label>
              <div className={styles.inputGroup}>
                <input
                  type="text"
                  value={(localStyles as ImageStyle).height || ''}
                  onChange={(e) => handleChange('height', e.target.value)}
                  placeholder="e.g., 200px, auto"
                />
                <button onClick={() => handleReset('height')} title="Reset">↺</button>
              </div>
            </div>

            {/* Border Radius */}
            <div className={styles.property}>
              <label>Border Radius</label>
              <div className={styles.inputGroup}>
                <input
                  type="text"
                  value={(localStyles as ImageStyle).borderRadius || ''}
                  onChange={(e) => handleChange('borderRadius', e.target.value)}
                  placeholder="e.g., 8px, 50%, 0"
                />
                <button onClick={() => handleReset('borderRadius')} title="Reset">↺</button>
              </div>
            </div>

            {/* Object Fit */}
            <div className={styles.property}>
              <label>Object Fit</label>
              <div className={styles.inputGroup}>
                <select
                  value={(localStyles as ImageStyle).objectFit || ''}
                  onChange={(e) => handleChange('objectFit', e.target.value)}
                >
                  <option value="">Default</option>
                  <option value="cover">Cover</option>
                  <option value="contain">Contain</option>
                  <option value="fill">Fill</option>
                  <option value="none">None</option>
                  <option value="scale-down">Scale Down</option>
                </select>
                <button onClick={() => handleReset('objectFit')} title="Reset">↺</button>
              </div>
            </div>
          </>
        )}
      </div>

      <div className={styles.footer}>
        <small>Changes save automatically</small>
      </div>
    </div>
  );
}
