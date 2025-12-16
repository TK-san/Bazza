/**
 * useFavorites Hook
 * Manages favorite/saved items with localStorage persistence
 */
import { useState, useCallback, useEffect } from 'react';

const STORAGE_KEY = 'bazza_favorites';

const useFavorites = () => {
  const [favorites, setFavorites] = useState(() => {
    // Load from localStorage on init
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : { offers: [], requests: [] };
    } catch {
      return { offers: [], requests: [] };
    }
  });

  // Persist to localStorage whenever favorites change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
    } catch (e) {
      console.error('Failed to save favorites:', e);
    }
  }, [favorites]);

  // Check if an item is favorited
  const isFavorite = useCallback((type, id) => {
    return favorites[type]?.includes(id) || false;
  }, [favorites]);

  // Toggle favorite status
  const toggleFavorite = useCallback((type, id) => {
    setFavorites(prev => {
      const list = prev[type] || [];
      const isFav = list.includes(id);

      return {
        ...prev,
        [type]: isFav
          ? list.filter(itemId => itemId !== id)
          : [...list, id]
      };
    });
  }, []);

  // Add to favorites
  const addFavorite = useCallback((type, id) => {
    setFavorites(prev => {
      const list = prev[type] || [];
      if (list.includes(id)) return prev;
      return { ...prev, [type]: [...list, id] };
    });
  }, []);

  // Remove from favorites
  const removeFavorite = useCallback((type, id) => {
    setFavorites(prev => ({
      ...prev,
      [type]: (prev[type] || []).filter(itemId => itemId !== id)
    }));
  }, []);

  // Get count of favorites
  const getFavoriteCount = useCallback((type) => {
    if (type) {
      return favorites[type]?.length || 0;
    }
    return (favorites.offers?.length || 0) + (favorites.requests?.length || 0);
  }, [favorites]);

  // Clear all favorites
  const clearFavorites = useCallback((type) => {
    if (type) {
      setFavorites(prev => ({ ...prev, [type]: [] }));
    } else {
      setFavorites({ offers: [], requests: [] });
    }
  }, []);

  return {
    favorites,
    isFavorite,
    toggleFavorite,
    addFavorite,
    removeFavorite,
    getFavoriteCount,
    clearFavorites,
  };
};

export default useFavorites;
