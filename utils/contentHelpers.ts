// Client-safe helper functions for content normalization
// These can be imported in client components

import { TextStyle, ImageStyle } from './content';

// Helper to normalize content values that may be strings or objects with value/style
export function normalizeContentValue(value: any): { value: string; style?: TextStyle } {
  // Handle null or undefined
  if (value === null || value === undefined) {
    return { value: '' };
  }
  
  // If it's a string, return as-is
  if (typeof value === 'string') {
    return { value };
  }
  
  // If it's an object with a value property
  if (typeof value === 'object' && value !== null) {
    // Handle both { value: ..., style: ... } and { src: ..., style: ... } formats
    if ('value' in value) {
      return {
        value: String(value.value || ''),
        style: value.style
      };
    }
    // For image objects with src
    if ('src' in value) {
      return {
        value: String(value.src || ''),
        style: value.style
      };
    }
  }
  
  // Fallback: convert to string
  return { value: String(value) };
}

// Helper to extract just the string value from normalized content
export function getContentValue(value: any): string {
  const normalized = normalizeContentValue(value);
  return normalized.value;
}

// Helper to extract style from normalized content
export function getContentStyle(value: any): TextStyle | undefined {
  return normalizeContentValue(value).style;
}

// Helper to extract image style from normalized content
export function getContentImageStyle(value: any): ImageStyle | undefined {
  if (typeof value === 'object' && value !== null && value.style) {
    return value.style as ImageStyle;
  }
  return undefined;
}
