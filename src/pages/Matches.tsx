
import { Navigation } from "@/components/Navigation";
import { matches } from "@/data/mockProfiles";
import { MatchCard } from "@/components/MatchCard";

const Matches = () => {
  return (
    <div className="flex flex-col min-h-screen pb-20">
      <header className="p-4 border-b">
        <h1 className="text-xl font-semibold">Mes Matches</h1>
      </header>
      
      <main className="flex-1 p-4">
        {matches.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {matches.map((profile) => (
              <MatchCard key={profile.id} profile={profile} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="bg-muted/30 p-8 rounded-xl max-w-md">
              <h2 className="text-xl font-semibold mb-2">Pas encore de matches</h2>
              <p className="text-muted-foreground">
                Continuez à swiper pour trouver des matches!
              </p>
            </div>
          </div>
        )}
      </main>
      
      <Navigation />
    </div>
  );
};

export default Matches;
