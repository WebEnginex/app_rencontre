
import { cn } from '@/lib/utils';
import { Heart, Home, MessageCircle, User, Users } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface NavigationProps {
  className?: string;
}

export function Navigation({ className }: NavigationProps) {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <div className={cn(
      "fixed bottom-0 left-0 right-0 bg-background/90 backdrop-blur-lg border-t border-gray-200 px-4 py-3 sm:py-4",
      "flex justify-around items-center z-40",
      className
    )}>
      <Link 
        to="/" 
        className={cn(
          "navigation-button flex flex-col items-center gap-1 transition-colors text-muted-foreground",
          isActive('/') && "text-primary active"
        )}
      >
        <Home size={24} />
        <span className="text-xs sm:text-sm font-medium">Swipe</span>
      </Link>
      
      <Link 
        to="/matches" 
        className={cn(
          "navigation-button flex flex-col items-center gap-1 transition-colors text-muted-foreground",
          isActive('/matches') && "text-primary active"
        )}
      >
        <Heart size={24} />
        <span className="text-xs sm:text-sm font-medium">Matches</span>
      </Link>
      
      <Link 
        to="/messages" 
        className={cn(
          "navigation-button flex flex-col items-center gap-1 transition-colors text-muted-foreground",
          isActive('/messages') && "text-primary active"
        )}
      >
        <MessageCircle size={24} />
        <span className="text-xs sm:text-sm font-medium">Messages</span>
      </Link>
      
      <Link 
        to="/activities" 
        className={cn(
          "navigation-button flex flex-col items-center gap-1 transition-colors text-muted-foreground",
          isActive('/activities') && "text-primary active"
        )}
      >
        <Users size={24} />
        <span className="text-xs sm:text-sm font-medium">Activités</span>
      </Link>
      
      <Link 
        to="/profile" 
        className={cn(
          "navigation-button flex flex-col items-center gap-1 transition-colors text-muted-foreground",
          isActive('/profile') && "text-primary active"
        )}
      >
        <User size={24} />
        <span className="text-xs sm:text-sm font-medium">Profile</span>
      </Link>
    </div>
  );
}
