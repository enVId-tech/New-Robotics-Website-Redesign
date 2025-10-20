'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { SiteContent } from '@/utils/content';

interface ContentContextType {
  content: SiteContent | null;
  loading: boolean;
  error: string | null;
  updateContent: (section: string, data: any) => Promise<{ success: boolean; error?: string }>;
  addContent: (section: string, item: any) => Promise<{ success: boolean; error?: string }>;
  deleteContent: (section: string, itemId?: string) => Promise<{ success: boolean; error?: string }>;
  refreshContent: () => Promise<void>;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

let contentCache: SiteContent | null = null;
let fetchPromise: Promise<void> | null = null;
let isFetching = false;

export function ContentProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<SiteContent | null>(contentCache);
  const [loading, setLoading] = useState(!contentCache);
  const [error, setError] = useState<string | null>(null);

  const fetchContent = useCallback(async () => {
    // If already fetching, wait for the existing promise
    if (fetchPromise) {
      return fetchPromise;
    }

    // If we have cached content and not currently fetching, use cache
    if (contentCache && !isFetching) {
      setContent(contentCache);
      setLoading(false);
      return;
    }

    // Create new fetch promise
    isFetching = true;
    fetchPromise = (async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/content', {
          cache: 'no-store' // Ensure fresh data
        });
        const data = await response.json();
        
        if (data.success) {
          contentCache = data.content;
          setContent(data.content);
          setError(null);
        } else {
          setError(data.error);
        }
      } catch (err) {
        setError('Failed to fetch content');
        console.error('Content fetch error:', err);
      } finally {
        setLoading(false);
        isFetching = false;
        fetchPromise = null;
      }
    })();

    return fetchPromise;
  }, []);

  useEffect(() => {
    // Only fetch if we don't have cached content
    if (!contentCache) {
      fetchContent();
    }
  }, [fetchContent]);

  const updateContent = useCallback(async (section: string, data: any) => {
    try {
      const response = await fetch('/api/content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ section, data }),
      });

      const result = await response.json();
      
      if (result.success) {
        // Clear cache and refetch
        contentCache = null;
        await fetchContent();
        return { success: true };
      } else {
        return { success: false, error: result.error };
      }
    } catch (err) {
      console.error('updateContent error:', err);
      return { success: false, error: 'Failed to update content' };
    }
  }, [fetchContent]);

  const addContent = useCallback(async (section: string, item: any) => {
    try {
      const response = await fetch('/api/content', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ section, item }),
      });

      const result = await response.json();
      if (result.success) {
        // Clear cache and refetch
        contentCache = null;
        await fetchContent();
        return { success: true };
      } else {
        return { success: false, error: result.error };
      }
    } catch (err) {
      return { success: false, error: 'Failed to add content' };
    }
  }, [fetchContent]);

  const deleteContent = useCallback(async (section: string, itemId?: string) => {
    try {
      const url = itemId 
        ? `/api/content?section=${encodeURIComponent(section)}&itemId=${encodeURIComponent(itemId)}`
        : `/api/content?section=${encodeURIComponent(section)}`;
        
      const response = await fetch(url, {
        method: 'DELETE',
      });

      const result = await response.json();
      if (result.success) {
        // Clear cache and refetch
        contentCache = null;
        await fetchContent();
        return { success: true };
      } else {
        return { success: false, error: result.error };
      }
    } catch (err) {
      return { success: false, error: 'Failed to delete content' };
    }
  }, [fetchContent]);

  const refreshContent = useCallback(async () => {
    contentCache = null;
    await fetchContent();
  }, [fetchContent]);

  return (
    <ContentContext.Provider
      value={{
        content,
        loading,
        error,
        updateContent,
        addContent,
        deleteContent,
        refreshContent,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
}
