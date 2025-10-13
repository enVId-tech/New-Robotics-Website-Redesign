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
    logo: string;
    logoAlt: string;
    organizationName: string;
    organizationFullName?: string;
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
      slogans: Array<{
        id: string;
        text: string;
        image: string;
      }>;
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
  teamsOverview: Array<{
    id: string;
    logo: string;
    name: string;
    description: string;
    founded: string;
    link: string;
    logoStyle?: ImageStyle;
    nameStyle?: TextStyle;
    descriptionStyle?: TextStyle;
  }>;
  teamMembers: Array<{
    id: string;
    name: string;
    role: string;
    grade: string;
    bio: string;
    skills: string[];
    team: string;
    image: string;
    imageStyle?: ImageStyle;
    nameStyle?: TextStyle;
    roleStyle?: TextStyle;
    bioStyle?: TextStyle;
  }>;
  footer: {
    branding: {
      logo: string;
      logoAlt: string;
      organizationName: string;
      teamName: string;
      schoolName: string;
    };
    contact: {
      address: string;
      addressLine2?: string;
    };
    quickLinks: Array<{
      name: string;
      href: string;
    }>;
    social: Array<{
      platform: string;
      url: string;
      icon: string;
    }>;
    legal: {
      copyright: string;
      websiteDeveloper?: string;
      betaNotice?: string;
    };
  };
}

// Cache for content to avoid repeated file reads
let contentCache: SiteContent | null = null;
let cacheTimestamp: number = 0;
const CACHE_TTL = 1000; // Cache for 1 second (allows hot reload in dev, fast in production)

// Server-side function to read content (for SSR/SSG) with caching
export async function getServerContent(): Promise<SiteContent | null> {
  try {
    const now = Date.now();
    
    // Return cached content if it's still fresh
    if (contentCache && (now - cacheTimestamp) < CACHE_TTL) {
      return contentCache;
    }
    
    const contentPath = path.join(process.cwd(), 'content', 'site-content.json');
    
    if (!existsSync(contentPath)) {
      console.warn('Content file not found at:', contentPath);
      return null;
    }
    
    const contentData = await readFile(contentPath, 'utf-8');
    const parsedContent = JSON.parse(contentData);
    
    // Update cache
    contentCache = parsedContent;
    cacheTimestamp = now;
    
    return parsedContent;
  } catch (error) {
    console.error('Error reading server content:', error);
    return null;
  }
}

// Function to clear the cache (useful after content updates)
export function clearContentCache(): void {
  contentCache = null;
  cacheTimestamp = 0;
}