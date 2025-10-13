"use client";
import React, { useState, useRef, useEffect } from 'react';
import { useEditMode } from '@/contexts/EditModeContext';
import styles from './EditableText.module.scss';

interface EditableTextProps {
  value: string;
  path: string; // JSON path like "homepage.hero.title"
  onChange?: (value: string) => void;
  className?: string;
  multiline?: boolean;
  placeholder?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
}

export default function EditableText({
  value,
  path,
  onChange,
  className = '',
  multiline = false,
  placeholder = 'Click to edit...',
  as: Component = 'div',
}: EditableTextProps) {
  const { isEditMode, addPendingChange, pendingChanges } = useEditMode();
  const [isEditing, setIsEditing] = useState(false);
  const [localValue, setLocalValue] = useState(value);
  const [hasChanges, setHasChanges] = useState(false);
  const editRef = useRef<HTMLDivElement>(null);

  // Update local value when prop changes
  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  // Check if this field has pending changes
  useEffect(() => {
    setHasChanges(pendingChanges.has(path));
  }, [pendingChanges, path]);

  const handleClick = () => {
    if (isEditMode && !isEditing) {
      setIsEditing(true);
    }
  };

  const handleBlur = () => {
    setIsEditing(false);
    if (localValue !== value) {
      addPendingChange(path, localValue);
      onChange?.(localValue);
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

  // Focus and select all text when entering edit mode
  useEffect(() => {
    if (isEditing && editRef.current) {
      editRef.current.focus();
      // Select all text
      const range = document.createRange();
      range.selectNodeContents(editRef.current);
      const selection = window.getSelection();
      selection?.removeAllRanges();
      selection?.addRange(range);
    }
  }, [isEditing]);

  const combinedClassName = `
    ${className}
    ${isEditMode ? styles.editable : ''}
    ${isEditing ? styles.editing : ''}
    ${hasChanges ? styles.hasChanges : ''}
  `.trim();

  return (
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
    >
      {localValue || placeholder}
    </Component>
  );
}
