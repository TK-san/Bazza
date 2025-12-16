/**
 * usePullToRefresh Hook
 * Handles pull-to-refresh gesture detection and state
 */
import { useState, useCallback, useRef } from 'react';

const usePullToRefresh = (onRefresh, options = {}) => {
  const {
    threshold = 80,        // Pull distance to trigger refresh
    maxPull = 120,         // Maximum pull distance
    refreshDuration = 1500 // Simulated refresh time (ms)
  } = options;

  const [pullDistance, setPullDistance] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isPulling, setIsPulling] = useState(false);

  const startY = useRef(0);
  const currentY = useRef(0);
  const containerRef = useRef(null);

  // Check if container is at top (scrollTop === 0)
  const isAtTop = useCallback(() => {
    if (!containerRef.current) return true;
    return containerRef.current.scrollTop <= 0;
  }, []);

  const handleTouchStart = useCallback((e) => {
    if (isRefreshing) return;
    if (!isAtTop()) return;

    startY.current = e.touches[0].clientY;
    setIsPulling(true);
  }, [isRefreshing, isAtTop]);

  const handleTouchMove = useCallback((e) => {
    if (!isPulling || isRefreshing) return;
    if (!isAtTop()) {
      setPullDistance(0);
      return;
    }

    currentY.current = e.touches[0].clientY;
    const diff = currentY.current - startY.current;

    if (diff > 0) {
      // Apply resistance - pull gets harder as you go
      const resistance = 0.5;
      const distance = Math.min(diff * resistance, maxPull);
      setPullDistance(distance);
    }
  }, [isPulling, isRefreshing, isAtTop, maxPull]);

  const handleTouchEnd = useCallback(async () => {
    if (!isPulling) return;
    setIsPulling(false);

    if (pullDistance >= threshold && !isRefreshing) {
      // Trigger refresh
      setIsRefreshing(true);
      setPullDistance(60); // Keep indicator visible during refresh

      // Call the refresh callback
      if (onRefresh) {
        await onRefresh();
      }

      // Simulate minimum refresh duration for UX
      await new Promise(resolve => setTimeout(resolve, refreshDuration));

      setIsRefreshing(false);
      setPullDistance(0);
    } else {
      // Snap back
      setPullDistance(0);
    }
  }, [isPulling, pullDistance, threshold, isRefreshing, onRefresh, refreshDuration]);

  // Calculate progress (0 to 1) for UI feedback
  const progress = Math.min(pullDistance / threshold, 1);

  return {
    containerRef,
    pullDistance,
    isRefreshing,
    isPulling,
    progress,
    handlers: {
      onTouchStart: handleTouchStart,
      onTouchMove: handleTouchMove,
      onTouchEnd: handleTouchEnd,
    },
  };
};

export default usePullToRefresh;
