
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Camera, Heart, Image, LogOut, Settings, Share2 } from "lucide-react";
import { Navigation } from "@/components/Navigation";

const Profile = () => {
  return (
    <div className="flex flex-col min-h-screen pb-20">
      <header className="p-4 border-b flex justify-between items-center">
        <h1 className="text-xl font-semibold">Mon Profil</h1>
        <Button variant="ghost" size="icon">
          <Settings size={20} />
        </Button>
      </header>
      
      <main className="flex-1 p-4 space-y-6 max-w-lg mx-auto w-full">
        <div className="flex flex-col items-center">
          <div className="relative">
            <Avatar className="w-24 h-24 border-4 border-background">
              <img 
                src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1887&auto=format&fit=crop"
                alt="Profile" 
              />
            </Avatar>
            <Button size="icon" variant="secondary" className="absolute -bottom-2 -right-2 rounded-full w-8 h-8">
              <Camera size={14} />
            </Button>
          </div>
          <h2 className="text-lg font-semibold mt-4">Alexandre, 29</h2>
          <p className="text-muted-foreground text-sm">Paris</p>
          
          <div className="flex gap-3 mt-5">
            <Button variant="outline" size="sm" className="gap-2">
              <Share2 size={14} />
              <span>Partager</span>
            </Button>
            <Button size="sm" className="gap-2">
              <Image size={14} />
              <span>Modifier</span>
            </Button>
          </div>
        </div>
        
        <Card>
          <CardHeader className="pb-2">
            <h3 className="font-medium">À propos de moi</h3>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Passionné de photographie, voyages et bonnes discussions. À la recherche de nouvelles rencontres et expériences.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <h3 className="font-medium">Mes centres d'intérêt</h3>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {["Photographie", "Voyages", "Cuisine", "Randonnée", "Cinéma", "Musique"].map((interest) => (
                <div 
                  key={interest}
                  className="bg-secondary rounded-full px-3 py-1 text-xs"
                >
                  {interest}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <h3 className="font-medium">Statistiques</h3>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Heart size={16} className="text-primary" />
                <span className="text-sm">Matches</span>
              </div>
              <span className="font-medium">12</span>
            </div>
            <Separator />
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Heart size={16} className="text-muted-foreground" />
                <span className="text-sm">Likes envoyés</span>
              </div>
              <span className="font-medium">42</span>
            </div>
          </CardContent>
        </Card>
        
        <Button variant="outline" className="w-full gap-2 mt-8">
          <LogOut size={16} />
          <span>Déconnexion</span>
        </Button>
      </main>
      
      <Navigation />
    </div>
  );
};

export default Profile;
