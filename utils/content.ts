import { readFile } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

// Style properties for images
export interface ImageStyle {
  width?: string;
  height?: string;
  borderRadius?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
}

// Style properties for text
export interface TextStyle {
  fontSize?: string;
  fontFamily?: 'Titillium Web' | 'Montserrat' | 'Arial' | 'Helvetica' | 'sans-serif';
  fontWeight?: '300' | '400' | '500' | '600' | '700' | '900';
  lineHeight?: string;
  whiteSpace?: 'normal' | 'pre-line' | 'pre-wrap';
}

export interface SiteContent {
  site: {
    title: string;
    tagline: string;  
    description: string;
    keywords: string;
  };
  customPages?: {
    [key: string]: {
      title: string;
      subtitle?: string;
      content: string;
      sections?: Array<{
        title: string;
        content: string;
      }>;
    };
  };
  homepage: {
    hero: {
      title: string;
      subtitle: string;
      backgroundImage: string;
      overlayImage: string;
    };
    aboutBrief: {
      title: string;
      description: string;
      image: string;
      imageStyle?: ImageStyle;
      textStyle?: TextStyle;
    };
    stats: {
      title: string;
      items: Array<{
        id: string;
        label: string;
        value: string;
        description: string;
        icon: string;
      }>;
    };
    goals: {
      title: string;
      description: string;
      images: string[];
    };
  };
  navigation: {
    items: Array<{
      name: string;
      href: string;
      visible: boolean;
      order: number;
    }>;
  };
  about: {
    hero: {
      title: string;
      subtitle: string;
      backgroundImage: string;
    };
    sections: Array<{
      id: string;
      title: string;
      content: string;
      type: string;
    }>;
  };
  contact: {
    hero: {
      title: string;
      subtitle: string;
      backgroundImage: string;
    };
    form: {
      title: string;
      subtitle: string;
      fields: Array<{
        name: string;
        label: string;
        type: string;
        required: boolean;
        placeholder: string;
      }>;
      submitText: string;
    };
    info: {
      address: string;
      email: string;
      meetingTimes: string;
    };
  };
  teams: {
    frc: {
      title: string;
      subtitle: string;
      description: string;
      backgroundImage: string;
      stats: Record<string, string>;
    };
    ftc: {
      title: string;
      subtitle: string;
      description: string;
      backgroundImage: string;
      stats: Record<string, string>;
    };
    vex: {
      title: string;
      subtitle: string;
      description: string;
      backgroundImage: string;
      stats: Record<string, string>;
    };
  };
}

// Server-side function to read content (for SSR/SSG)
export async function getServerContent(): Promise<SiteContent | null> {
  try {
    const contentPath = path.join(process.cwd(), 'content', 'site-content.json');
    
    if (!existsSync(contentPath)) {
      console.warn('Content file not found at:', contentPath);
      return null;
    }
    
    const contentData = await readFile(contentPath, 'utf-8');
    return JSON.parse(contentData);
  } catch (error) {
    console.error('Error reading server content:', error);
    return null;
  }
}