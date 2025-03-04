
import { useState } from 'react';
import { mockProfiles } from '@/data/mockProfiles';
import { SwipeCard } from '@/components/SwipeCard';
import { ActionButtons } from '@/components/ActionButtons';
import { toast } from "sonner";
import { Heart } from 'lucide-react';
import { Navigation } from '@/components/Navigation';

const Index = () => {
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  const [swipedProfiles, setSwipedProfiles] = useState<string[]>([]);
  const [likedProfiles, setLikedProfiles] = useState<string[]>([]);

  const availableProfiles = mockProfiles.filter(profile => !swipedProfiles.includes(profile.id));
  const currentProfile = availableProfiles[currentProfileIndex];

  const handleSwipeLeft = () => {
    if (!currentProfile) return;
    
    setSwipedProfiles(prev => [...prev, currentProfile.id]);
    
    // Reset to first card if we've gone through all cards
    if (currentProfileIndex >= availableProfiles.length - 1) {
      setCurrentProfileIndex(0);
    }
  };

  const handleSwipeRight = () => {
    if (!currentProfile) return;
    
    setSwipedProfiles(prev => [...prev, currentProfile.id]);
    setLikedProfiles(prev => [...prev, currentProfile.id]);
    
    // Show match toast
    toast(
      <div className="flex items-center gap-2">
        <Heart size={18} className="text-primary animate-pulse-heart" fill="currentColor" />
        <span>Vous avez liké {currentProfile.name}!</span>
      </div>,
      {
        position: "top-center"
      }
    );
    
    // Reset to first card if we've gone through all cards
    if (currentProfileIndex >= availableProfiles.length - 1) {
      setCurrentProfileIndex(0);
    }
  };

  return (
    <div className="flex flex-col min-h-screen relative pb-20">
      <header className="p-4 text-center">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-pink-400 bg-clip-text text-transparent">
          Lovable
        </h1>
      </header>
      
      <main className="flex-1 flex flex-col items-center justify-center p-4">
        {currentProfile ? (
          <>
            <div className="w-full max-w-md h-[70vh] mb-5">
              <SwipeCard 
                profile={currentProfile}
                onSwipeLeft={handleSwipeLeft}
                onSwipeRight={handleSwipeRight}
              />
            </div>
            
            <ActionButtons 
              onDislike={handleSwipeLeft}
              onLike={handleSwipeRight}
              className="mt-4"
            />
          </>
        ) : (
          <div className="text-center p-8 rounded-xl bg-muted/30 max-w-md">
            <h2 className="text-xl font-semibold mb-2">Pas de nouveaux profils</h2>
            <p className="text-muted-foreground">
              Revenez plus tard pour découvrir de nouveaux profils
            </p>
          </div>
        )}
      </main>
      
      <Navigation />
    </div>
  );
};

export default Index;
