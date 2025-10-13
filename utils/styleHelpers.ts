import { ImageStyle, TextStyle } from './content';

/**
 * Converts ImageStyle object to React CSSProperties
 */
export function getImageStyleProps(imageStyle?: ImageStyle): React.CSSProperties {
  if (!imageStyle) return {};
  
  return {
    width: imageStyle.width || 'auto',
    height: imageStyle.height || 'auto',
    borderRadius: imageStyle.borderRadius || '0',
    objectFit: imageStyle.objectFit || 'cover',
  };
}

/**
 * Converts TextStyle object to React CSSProperties
 */
export function getTextStyleProps(textStyle?: TextStyle): React.CSSProperties {
  if (!textStyle) return {};
  
  return {
    fontSize: textStyle.fontSize || '16px',
    fontFamily: textStyle.fontFamily || 'inherit',
    fontWeight: textStyle.fontWeight || '400',
    lineHeight: textStyle.lineHeight || 'normal',
    whiteSpace: textStyle.whiteSpace || 'normal',
  };
}

/**
 * Gets font class name from globalFonts based on font family and weight
 */
export function getFontClassName(fontFamily?: string, fontWeight?: string): string {
  if (!fontFamily) return '';
  
  // Map font family and weight to global font classes
  if (fontFamily === 'Titillium Web') {
    switch (fontWeight) {
      case '300': return 'TW_300';
      case '600': return 'TW_600';
      case '700': return 'TW_700';
      case '900': return 'TW_900';
      default: return 'TW_600'; // Default to 600 for Titillium Web
    }
  } else if (fontFamily === 'Montserrat') {
    switch (fontWeight) {
      case '300': return 'M_300';
      case '500': return 'M_500';
      default: return 'M_500'; // Default to 500 for Montserrat
    }
  }
  
  return '';
}

/**
 * Helper to apply both text style props and font class
 */
export function getTextStyleConfig(textStyle?: TextStyle): {
  style: React.CSSProperties;
  className: string;
} {
  const style = getTextStyleProps(textStyle);
  const className = getFontClassName(textStyle?.fontFamily, textStyle?.fontWeight);
  
  return { style, className };
}
