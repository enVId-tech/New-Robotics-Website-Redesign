import { NextRequest, NextResponse } from 'next/server';
import { writeFile, readFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

const PAGES_DIR = path.join(process.cwd(), 'app');
const CONTENT_FILE_PATH = path.join(process.cwd(), 'content', 'site-content.json');

// Create a new dynamic page
export async function POST(request: NextRequest) {
  try {
    const { pageName, pageContent, routePath } = await request.json();
    
    if (!pageName || !pageContent || !routePath) {
      return NextResponse.json(
        { success: false, error: 'Page name, content, and route path are required' },
        { status: 400 }
      );
    }

    // Sanitize route path
    const sanitizedPath = routePath.replace(/[^a-zA-Z0-9-_/]/g, '').toLowerCase();
    const pageDir = path.join(PAGES_DIR, sanitizedPath);
    
    // Create page directory if it doesn't exist
    if (!existsSync(pageDir)) {
      await mkdir(pageDir, { recursive: true });
    }

    // Create page.tsx file
    const pageTemplate = `'use client';

import React from 'react';
import Navbar from '@/app/_components/navbar/navbar';
import Footer from '@/app/_components/footer/footer';
import { useContent } from '@/hooks/useContent';
import styles from './${sanitizedPath.split('/').pop()}.module.scss';

export default function ${pageName.replace(/[^a-zA-Z0-9]/g, '')}Page() {
  const { content } = useContent();
  const pageContent = content?.customPages?.['${sanitizedPath}'];

  return (
    <div className={styles.container}>
      <Navbar isFixed={true} />
      <main className={styles.main}>
        <div className={styles.hero}>
          <h1>{pageContent?.title || '${pageName}'}</h1>
          {pageContent?.subtitle && <p>{pageContent.subtitle}</p>}
        </div>
        
        <div className={styles.content}>
          {pageContent?.sections?.map((section: any, index: number) => (
            <section key={index} className={styles.section}>
              <h2>{section.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: section.content }} />
            </section>
          )) || (
            <div dangerouslySetInnerHTML={{ __html: \`${pageContent.content || '<p>Welcome to the new page!</p>'}\` }} />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}`;

    const pageFilePath = path.join(pageDir, 'page.tsx');
    await writeFile(pageFilePath, pageTemplate);

    // Create CSS module file
    const cssTemplate = `.container {
  min-height: 100vh;
}

.main {
  padding-top: 7vh; // Account for fixed navbar
  min-height: 100vh;
}

.hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
  padding: 4rem 2rem;
  
  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    font-weight: 900;
  }
  
  p {
    font-size: 1.2rem;
    opacity: 0.9;
  }
}

.content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

.section {
  margin-bottom: 3rem;
  
  h2 {
    font-size: 2rem;
    color: #333;
    margin-bottom: 1.5rem;
  }
  
  p {
    line-height: 1.6;
    color: #666;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 2rem 1rem;
    
    h1 {
      font-size: 2rem;
    }
  }
  
  .content {
    padding: 2rem 1rem;
  }
}`;

    const cssFilePath = path.join(pageDir, `${sanitizedPath.split('/').pop()}.module.scss`);
    await writeFile(cssFilePath, cssTemplate);

    // Update site content with new page
    let content = {};
    if (existsSync(CONTENT_FILE_PATH)) {
      const contentData = await readFile(CONTENT_FILE_PATH, 'utf-8');
      content = JSON.parse(contentData);
    }

    // Add custom pages section if it doesn't exist
    if (!(content as any).customPages) {
      (content as any).customPages = {};
    }

    // Add the new page content
    (content as any).customPages[sanitizedPath] = {
      title: pageName,
      subtitle: '',
      content: pageContent,
      sections: []
    };

    // Add to navigation if requested
    if (!(content as any).navigation) {
      (content as any).navigation = { items: [] };
    }

    const existingNavItem = (content as any).navigation.items.find((item: any) => item.href === `/${sanitizedPath}`);
    if (!existingNavItem) {
      (content as any).navigation.items.push({
        name: pageName,
        href: `/${sanitizedPath}`,
        visible: true,
        order: (content as any).navigation.items.length + 1
      });
    }

    // Save updated content
    await writeFile(CONTENT_FILE_PATH, JSON.stringify(content, null, 2));
    
    return NextResponse.json({
      success: true,
      message: 'Page created successfully',
      pagePath: `/${sanitizedPath}`,
      files: [pageFilePath, cssFilePath]
    });
    
  } catch (error) {
    console.error('Error creating page:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create page' },
      { status: 500 }
    );
  }
}

// List all custom pages
export async function GET() {
  try {
    let content = {};
    if (existsSync(CONTENT_FILE_PATH)) {
      const contentData = await readFile(CONTENT_FILE_PATH, 'utf-8');
      content = JSON.parse(contentData);
    }

    const customPages = (content as any).customPages || {};
    
    return NextResponse.json({ 
      success: true, 
      pages: customPages 
    });
  } catch (error) {
    console.error('Error fetching pages:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch pages' },
      { status: 500 }
    );
  }
}