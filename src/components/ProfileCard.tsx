import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { Profile } from '@/data/mockProfiles';
import { Badge } from '@/components/ui/badge';

interface ProfileCardProps {
  profile: Profile;
  className?: string;
}

export function ProfileCard({ profile, className }: ProfileCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [profile]);
  
  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentImageIndex < profile.images.length - 1) {
      setCurrentImageIndex(prev => prev + 1);
    }
  };
  
  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentImageIndex > 0) {
      setCurrentImageIndex(prev => prev - 1);
    }
  };

  return (
    <div 
      className={cn(
        "overflow-hidden rounded-3xl bg-card relative h-full flex flex-col", 
        className
      )}
    >
      <div className="relative w-full h-[70%] bg-gray-200 overflow-hidden">
        {profile.images.length > 0 && (
          <img
            src={profile.images[currentImageIndex]}
            alt={`${profile.name}`}
            className="w-full h-full object-cover object-center transition-opacity"
            style={{ objectPosition: "50% 30%" }}
          />
        )}
        
        {profile.images.length > 1 && (
          <>
            <div className="absolute top-0 left-0 right-0 p-2 flex justify-center gap-1">
              {profile.images.map((_, idx) => (
                <div 
                  key={idx} 
                  className={cn(
                    "w-full h-1 rounded-full bg-white/30",
                    idx === currentImageIndex && "bg-white"
                  )}
                />
              ))}
            </div>
            
            <button 
              onClick={prevImage}
              className={cn(
                "absolute top-1/2 left-2 -translate-y-1/2 w-8 h-8 rounded-full glass-morphism flex items-center justify-center text-foreground",
                currentImageIndex === 0 && "opacity-50 cursor-default"
              )}
              disabled={currentImageIndex === 0}
            >
              <ChevronLeft size={20} />
            </button>
            
            <button 
              onClick={nextImage}
              className={cn(
                "absolute top-1/2 right-2 -translate-y-1/2 w-8 h-8 rounded-full glass-morphism flex items-center justify-center text-foreground",
                currentImageIndex === profile.images.length - 1 && "opacity-50 cursor-default"
              )}
              disabled={currentImageIndex === profile.images.length - 1}
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}
      </div>
      
      <div className="p-4 flex-1 flex flex-col">
        <div className="flex items-start justify-between mb-1">
          <div>
            <h2 className="text-2xl font-bold">{profile.name}, {profile.age}</h2>
            <div className="flex items-center text-muted-foreground mt-1">
              <MapPin size={14} className="mr-1" />
              <span className="text-sm">{profile.location} · {profile.distance} km</span>
            </div>
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground my-3 line-clamp-2">{profile.bio}</p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {profile.interests.map(interest => (
            <Badge key={interest} variant="secondary" className="rounded-full">
              {interest}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
