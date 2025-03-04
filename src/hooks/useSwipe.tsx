
import { useState, useEffect, useRef } from 'react';

interface SwipeState {
  startX: number;
  startY: number;
  currentX: number;
  currentY: number;
  offsetX: number;
  offsetY: number;
  isDragging: boolean;
  direction: 'left' | 'right' | null;
}

interface UseSwipeOptions {
  threshold?: number;
  rotationFactor?: number;
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
}

export function useSwipe({
  threshold = 100,
  rotationFactor = 0.1,
  onSwipeLeft,
  onSwipeRight
}: UseSwipeOptions = {}) {
  const [swipeState, setSwipeState] = useState<SwipeState>({
    startX: 0,
    startY: 0,
    currentX: 0,
    currentY: 0,
    offsetX: 0,
    offsetY: 0,
    isDragging: false,
    direction: null,
  });
  
  const cardRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  
  useEffect(() => {
    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    let clientX: number;
    let clientY: number;
    
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }
    
    setSwipeState({
      startX: clientX,
      startY: clientY,
      currentX: clientX,
      currentY: clientY,
      offsetX: 0,
      offsetY: 0,
      isDragging: true,
      direction: null,
    });
  };

  const handleTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (!swipeState.isDragging) return;
    
    let clientX: number;
    let clientY: number;
    
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }
    
    const offsetX = clientX - swipeState.startX;
    const offsetY = clientY - swipeState.startY;
    const direction = offsetX > 0 ? 'right' : 'left';
    
    setSwipeState({
      ...swipeState,
      currentX: clientX,
      currentY: clientY,
      offsetX,
      offsetY,
      direction,
    });
  };

  const handleTouchEnd = () => {
    if (!swipeState.isDragging) return;
    
    // Check if swipe exceeds threshold
    if (Math.abs(swipeState.offsetX) > threshold) {
      // Swipe completed
      if (swipeState.direction === 'left' && onSwipeLeft) {
        onSwipeLeft();
      } else if (swipeState.direction === 'right' && onSwipeRight) {
        onSwipeRight();
      }
    }
    
    // Reset state
    setSwipeState({
      startX: 0,
      startY: 0,
      currentX: 0,
      currentY: 0,
      offsetX: 0,
      offsetY: 0,
      isDragging: false,
      direction: null,
    });
  };

  // Calculate transform style for card based on swipe state
  const getCardStyle = () => {
    if (!swipeState.isDragging) return {};
    
    const rotate = swipeState.offsetX * rotationFactor;
    
    return {
      transform: `translateX(${swipeState.offsetX}px) rotate(${rotate}deg)`,
      opacity: Math.max(1 - Math.abs(swipeState.offsetX) / (threshold * 3), 0.7),
    };
  };

  const swipeLeft = () => {
    if (cardRef.current && onSwipeLeft) {
      cardRef.current.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
      cardRef.current.style.transform = 'translateX(-200%) rotate(-30deg)';
      cardRef.current.style.opacity = '0';
      
      setTimeout(() => {
        onSwipeLeft();
        if (cardRef.current) {
          cardRef.current.style.transition = 'none';
          cardRef.current.style.transform = '';
          cardRef.current.style.opacity = '';
        }
      }, 500);
    }
  };

  const swipeRight = () => {
    if (cardRef.current && onSwipeRight) {
      cardRef.current.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
      cardRef.current.style.transform = 'translateX(200%) rotate(30deg)';
      cardRef.current.style.opacity = '0';
      
      setTimeout(() => {
        onSwipeRight();
        if (cardRef.current) {
          cardRef.current.style.transition = 'none';
          cardRef.current.style.transform = '';
          cardRef.current.style.opacity = '';
        }
      }, 500);
    }
  };

  return {
    cardRef,
    swipeState,
    handlers: {
      onTouchStart: handleTouchStart,
      onTouchMove: handleTouchMove,
      onTouchEnd: handleTouchEnd,
      onMouseDown: handleTouchStart,
      onMouseMove: handleTouchMove,
      onMouseUp: handleTouchEnd,
      onMouseLeave: handleTouchEnd,
    },
    getCardStyle,
    swipeLeft,
    swipeRight,
  };
}
