
import { useRef } from 'react';
import { cn } from '@/lib/utils';
import { ProfileCard } from './ProfileCard';
import { useSwipe } from '@/hooks/useSwipe';
import { Profile } from '@/data/mockProfiles';

interface SwipeCardProps {
  profile: Profile;
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
  className?: string;
}

export function SwipeCard({ profile, onSwipeLeft, onSwipeRight, className }: SwipeCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { 
    cardRef, 
    handlers, 
    getCardStyle, 
    swipeLeft, 
    swipeRight,
    swipeState
  } = useSwipe({
    threshold: 100,
    rotationFactor: 0.05,
    onSwipeLeft,
    onSwipeRight,
  });

  return (
    <div 
      ref={containerRef}
      className={cn(
        "swipe-card-container relative w-full h-full",
        className
      )}
    >
      <div
        ref={cardRef}
        className={cn(
          "swipe-card absolute inset-0 w-full h-full",
          swipeState.isDragging && "swipe-card-dragging"
        )}
        style={getCardStyle()}
        {...handlers}
      >
        <ProfileCard profile={profile} className="h-full" />
        
        {/* Direction indicators */}
        <div 
          className={cn(
            "absolute top-4 left-4 bg-destructive text-destructive-foreground py-1 px-4 rounded-full font-bold tracking-wider opacity-0 transition-opacity",
            swipeState.direction === 'left' && Math.abs(swipeState.offsetX) > 50 && "opacity-100"
          )}
        >
          NOPE
        </div>
        
        <div 
          className={cn(
            "absolute top-4 right-4 bg-primary text-primary-foreground py-1 px-4 rounded-full font-bold tracking-wider opacity-0 transition-opacity",
            swipeState.direction === 'right' && Math.abs(swipeState.offsetX) > 50 && "opacity-100"
          )}
        >
          LIKE
        </div>
      </div>
    </div>
  );
}
