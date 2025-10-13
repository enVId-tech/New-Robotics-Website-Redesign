"use client";
import React, { useState, useRef, useEffect } from 'react';
import { useEditMode } from '@/contexts/EditModeContext';
import styles from './EditableText.module.scss';
import StyleEditor from './StyleEditor';
import { TextStyle } from '@/utils/content';

interface EditableTextProps {
  value: string;
  path: string; // JSON path like "homepage.hero.title"
  onChange?: (value: string) => void;
  className?: string;
  multiline?: boolean;
  placeholder?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  style?: TextStyle;
  onStyleChange?: (style: TextStyle) => void;
}

export default function EditableText({
  value,
  path,
  onChange,
  className = '',
  multiline = false,
  placeholder = 'Click to edit...',
  as: Component = 'div',
  style: initialStyle = {},
  onStyleChange,
}: EditableTextProps) {
  const { isEditMode, addPendingChange, pendingChanges } = useEditMode();
  const [isEditing, setIsEditing] = useState(false);
  const [localValue, setLocalValue] = useState(value);
  const [hasChanges, setHasChanges] = useState(false);
  const [showStyleEditor, setShowStyleEditor] = useState(false);
  const [styleEditorPosition, setStyleEditorPosition] = useState({ x: 0, y: 0 });
  const [localStyle, setLocalStyle] = useState<TextStyle>(initialStyle);
  const editRef = useRef<HTMLDivElement>(null);
  const prevStyleRef = useRef<string>('');

  // Update local value when prop changes
  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  // Update local style when prop changes (use JSON comparison to avoid infinite loops)
  useEffect(() => {
    const styleString = JSON.stringify(initialStyle);
    if (styleString !== prevStyleRef.current) {
      setLocalStyle(initialStyle);
      prevStyleRef.current = styleString;
    }
  }, [initialStyle]);

  // Check if this field has pending changes
  useEffect(() => {
    setHasChanges(pendingChanges.has(path) || pendingChanges.has(`${path}.style`));
  }, [pendingChanges, path]);

  const handleClick = () => {
    if (isEditMode && !isEditing) {
      setIsEditing(true);
      // Clear placeholder on first click
      if (editRef.current && !localValue) {
        editRef.current.textContent = '';
      }
    }
  };

  const handleBlur = () => {
    setIsEditing(false);
    const currentText = editRef.current?.textContent || '';
    if (currentText !== value) {
      setLocalValue(currentText);
      addPendingChange(path, currentText);
      onChange?.(currentText);
    }
  };

  const handleInput = (e: React.FormEvent<HTMLDivElement>) => {
    const newValue = e.currentTarget.textContent || '';
    setLocalValue(newValue);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' && !multiline) {
      e.preventDefault();
      editRef.current?.blur();
    }
    if (e.key === 'Escape') {
      setLocalValue(value); // Revert changes
      editRef.current?.blur();
    }
  };

  const handleStyleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!showStyleEditor && editRef.current) {
      const rect = editRef.current.getBoundingClientRect();
      setStyleEditorPosition({
        x: rect.right + 10,
        y: rect.top
      });
    }
    setShowStyleEditor(!showStyleEditor);
  };

  const handleStyleChange = (newStyle: TextStyle) => {
    setLocalStyle(newStyle);
    addPendingChange(`${path}.style`, newStyle);
    onStyleChange?.(newStyle);
  };

  // Focus when entering edit mode and position cursor at the end
  useEffect(() => {
    if (isEditing && editRef.current) {
      editRef.current.focus();
      
      if (!localValue) {
        // Clear placeholder text when entering edit mode
        editRef.current.textContent = '';
      } else {
        // Move cursor to the end of the text instead of selecting all
        const range = document.createRange();
        const selection = window.getSelection();
        range.selectNodeContents(editRef.current);
        range.collapse(false); // Collapse to end (true = start, false = end)
        selection?.removeAllRanges();
        selection?.addRange(range);
      }
    }
  }, [isEditing, localValue]);

  const combinedClassName = `
    ${className}
    ${isEditMode ? styles.editable : ''}
    ${isEditing ? styles.editing : ''}
    ${hasChanges ? styles.hasChanges : ''}
  `.trim();

  const inlineStyle = {
    fontSize: localStyle.fontSize,
    fontFamily: localStyle.fontFamily,
    fontWeight: localStyle.fontWeight,
    lineHeight: localStyle.lineHeight,
    whiteSpace: localStyle.whiteSpace,
  };

  return (
    <>
      <div className={styles.editableTextWrapper} style={{ position: 'relative', display: 'inline-block' }}>
        <Component
          ref={editRef as any}
          className={combinedClassName}
          contentEditable={isEditMode && isEditing}
          suppressContentEditableWarning
          onClick={handleClick}
          onBlur={handleBlur}
          onInput={handleInput}
          onKeyDown={handleKeyDown}
          data-path={path}
          data-editable="text"
          data-placeholder={!localValue && isEditMode ? placeholder : undefined}
          style={inlineStyle}
        >
          {localValue}
        </Component>

        {isEditMode && !isEditing && (
          <button
            className={styles.styleButton}
            onClick={handleStyleButtonClick}
            title="Edit styles"
          >
            🎨
          </button>
        )}
      </div>

      {showStyleEditor && (
        <StyleEditor
          type="text"
          currentStyles={localStyle}
          onStyleChange={handleStyleChange}
          onClose={() => setShowStyleEditor(false)}
          position={styleEditorPosition}
        />
      )}
    </>
  );
}
