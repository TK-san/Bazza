/**
 * RecentlyViewedContext
 * Provides recently viewed state and actions to the entire app
 */
import { createContext, useContext } from 'react';
import useRecentlyViewed from '../hooks/useRecentlyViewed';

const RecentlyViewedContext = createContext(null);

export const RecentlyViewedProvider = ({ children }) => {
  const recentlyViewed = useRecentlyViewed();

  return (
    <RecentlyViewedContext.Provider value={recentlyViewed}>
      {children}
    </RecentlyViewedContext.Provider>
  );
};

export const useRecentlyViewedContext = () => {
  const context = useContext(RecentlyViewedContext);
  if (!context) {
    throw new Error('useRecentlyViewedContext must be used within a RecentlyViewedProvider');
  }
  return context;
};

export default RecentlyViewedContext;
