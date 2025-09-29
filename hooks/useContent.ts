'use client';

import { useState, useEffect } from 'react';
import { SiteContent } from '@/utils/content';

export function useContent() {
  const [content, setContent] = useState<SiteContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchContent = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/content');
      const data = await response.json();
      
      if (data.success) {
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
    }
  };

  useEffect(() => {
    fetchContent();
  }, []);

  const updateContent = async (section: string, data: any) => {
    try {
      console.log('updateContent called with:', { section, data });
      
      const response = await fetch('/api/content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ section, data }),
      });

      const result = await response.json();
      console.log('API response:', result);
      
      if (result.success) {
        await fetchContent(); // Refresh content
        return { success: true };
      } else {
        return { success: false, error: result.error };
      }
    } catch (err) {
      console.error('updateContent error:', err);
      return { success: false, error: 'Failed to update content' };
    }
  };

  const addContent = async (section: string, item: any) => {
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
        await fetchContent(); // Refresh content
        return { success: true };
      } else {
        return { success: false, error: result.error };
      }
    } catch (err) {
      return { success: false, error: 'Failed to add content' };
    }
  };

  const deleteContent = async (section: string, itemId?: string) => {
    try {
      const url = itemId 
        ? `/api/content?section=${encodeURIComponent(section)}&itemId=${encodeURIComponent(itemId)}`
        : `/api/content?section=${encodeURIComponent(section)}`;
        
      const response = await fetch(url, {
        method: 'DELETE',
      });

      const result = await response.json();
      if (result.success) {
        await fetchContent(); // Refresh content
        return { success: true };
      } else {
        return { success: false, error: result.error };
      }
    } catch (err) {
      return { success: false, error: 'Failed to delete content' };
    }
  };

  return {
    content,
    loading,
    error,
    updateContent,
    addContent,
    deleteContent,
    refreshContent: fetchContent,
  };
}