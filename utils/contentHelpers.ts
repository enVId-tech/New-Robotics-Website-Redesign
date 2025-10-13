// Client-safe helper functions for content normalization
// These can be imported in client components

import { TextStyle } from './content';

// Helper to normalize content values that may be strings or objects with value/style
export function normalizeContentValue(value: any): { value: string; style?: TextStyle } {
  if (typeof value === 'string') {
    return { value };
  }
  if (typeof value === 'object' && value !== null) {
    return {
      value: value.value || '',
      style: value.style
    };
  }
  return { value: '' };
}

// Helper to extract just the string value from normalized content
export function getContentValue(value: any): string {
  return normalizeContentValue(value).value;
}

// Helper to extract style from normalized content
export function getContentStyle(value: any): TextStyle | undefined {
  return normalizeContentValue(value).style;
}
