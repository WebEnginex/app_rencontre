
import { Profile } from '@/data/mockProfiles';
import { cn } from '@/lib/utils';
import { MessageCircle, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MatchCardProps {
  profile: Profile;
  className?: string;
}

export function MatchCard({ profile, className }: MatchCardProps) {
  return (
    <div 
      className={cn(
        "bg-card rounded-xl overflow-hidden border transition-all duration-300 hover:shadow-md",
        "animate-enter",
        className
      )}
    >
      <div className="aspect-[3/4] relative">
        <img 
          src={profile.images[0]}
          alt={profile.name}
          className="w-full h-full object-cover object-center"
        />
        
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 pt-12">
          <h3 className="text-white font-semibold text-lg">
            {profile.name}, {profile.age}
          </h3>
          <div className="flex items-center text-white/80 mt-1">
            <MapPin size={12} className="mr-1" />
            <span className="text-xs">{profile.location} · {profile.distance} km</span>
          </div>
        </div>
      </div>
      
      <div className="p-3">
        <Button className="w-full gap-2" variant="secondary" size="sm">
          <MessageCircle size={16} />
          <span>Message</span>
        </Button>
      </div>
    </div>
  );
}
