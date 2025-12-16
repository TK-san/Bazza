/**
 * useRecentlyViewed Hook
 * Tracks recently viewed items with localStorage persistence
 */
import { useState, useCallback, useEffect } from 'react';

const STORAGE_KEY = 'bazza_recently_viewed';
const MAX_ITEMS = 10; // Maximum items to keep per type

const useRecentlyViewed = () => {
  const [recentlyViewed, setRecentlyViewed] = useState(() => {
    // Load from localStorage on init
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : { offers: [], requests: [] };
    } catch {
      return { offers: [], requests: [] };
    }
  });

  // Persist to localStorage whenever recentlyViewed changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(recentlyViewed));
    } catch (e) {
      console.error('Failed to save recently viewed:', e);
    }
  }, [recentlyViewed]);

  // Add an item to recently viewed
  const addToRecentlyViewed = useCallback((type, id) => {
    setRecentlyViewed(prev => {
      const list = prev[type] || [];
      // Remove if already exists (will be moved to front)
      const filtered = list.filter(itemId => itemId !== id);
      // Add to front, limit to MAX_ITEMS
      const updated = [id, ...filtered].slice(0, MAX_ITEMS);

      return {
        ...prev,
        [type]: updated
      };
    });
  }, []);

  // Get recently viewed items for a type
  const getRecentlyViewed = useCallback((type) => {
    return recentlyViewed[type] || [];
  }, [recentlyViewed]);

  // Get count of recently viewed items
  const getRecentCount = useCallback((type) => {
    if (type) {
      return recentlyViewed[type]?.length || 0;
    }
    return (recentlyViewed.offers?.length || 0) + (recentlyViewed.requests?.length || 0);
  }, [recentlyViewed]);

  // Clear recently viewed
  const clearRecentlyViewed = useCallback((type) => {
    if (type) {
      setRecentlyViewed(prev => ({ ...prev, [type]: [] }));
    } else {
      setRecentlyViewed({ offers: [], requests: [] });
    }
  }, []);

  // Check if an item was recently viewed
  const isRecentlyViewed = useCallback((type, id) => {
    return recentlyViewed[type]?.includes(id) || false;
  }, [recentlyViewed]);

  return {
    recentlyViewed,
    addToRecentlyViewed,
    getRecentlyViewed,
    getRecentCount,
    clearRecentlyViewed,
    isRecentlyViewed,
  };
};

export default useRecentlyViewed;
