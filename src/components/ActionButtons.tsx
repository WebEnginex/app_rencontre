
import { Heart, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ActionButtonsProps {
  onLike: () => void;
  onDislike: () => void;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function ActionButtons({ onLike, onDislike, size = 'md', className }: ActionButtonsProps) {
  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return {
          container: 'gap-3',
          dislike: 'w-12 h-12',
          like: 'w-12 h-12',
          icon: 16
        };
      case 'lg':
        return {
          container: 'gap-6',
          dislike: 'w-20 h-20',
          like: 'w-20 h-20',
          icon: 32
        };
      default:
        return {
          container: 'gap-4',
          dislike: 'w-16 h-16',
          like: 'w-16 h-16',
          icon: 24
        };
    }
  };

  const sizeClasses = getSizeClasses();

  return (
    <div className={cn('flex items-center justify-center', sizeClasses.container, className)}>
      <button 
        onClick={onDislike}
        className={cn(
          'rounded-full flex items-center justify-center bg-white shadow-lg border border-gray-100 transition-transform hover:scale-110 active:scale-95',
          'like-button',
          sizeClasses.dislike
        )}
      >
        <X size={sizeClasses.icon} className="text-gray-700" />
      </button>
      
      <button 
        onClick={onLike}
        className={cn(
          'rounded-full flex items-center justify-center bg-white shadow-lg border border-gray-100 transition-transform hover:scale-110 active:scale-95',
          'like-button',
          sizeClasses.like
        )}
      >
        <Heart 
          size={sizeClasses.icon} 
          className="text-primary" 
          fill="currentColor"
        />
      </button>
    </div>
  );
}
