
import { Profile } from "@/data/mockProfiles";
import { formatDistanceToNow } from "date-fns";
import { fr } from "date-fns/locale";
import { cn } from "@/lib/utils";

interface ConversationListProps {
  conversations: Profile[];
  selectedId: string | null;
  onSelect: (id: string) => void;
}

export function ConversationList({ conversations, selectedId, onSelect }: ConversationListProps) {
  // Let's create mock last message times
  const getRandomTime = (id: string) => {
    // Use the ID to create a deterministic random time in the past week
    const seed = parseInt(id, 10);
    const maxMinutes = 10080; // minutes in a week
    const minutesAgo = (seed * 13) % maxMinutes;
    const date = new Date();
    date.setMinutes(date.getMinutes() - minutesAgo);
    return date;
  };

  return (
    <div className="h-full overflow-y-auto">
      <h2 className="sr-only">Conversations</h2>
      
      {conversations.length > 0 ? (
        <ul className="divide-y">
          {conversations.map((profile) => {
            const lastMessageTime = getRandomTime(profile.id);
            const isSelected = selectedId === profile.id;
            
            return (
              <li key={profile.id}>
                <button
                  onClick={() => onSelect(profile.id)}
                  className={cn(
                    "w-full flex items-center p-4 hover:bg-accent/50 transition-colors",
                    isSelected && "bg-accent"
                  )}
                >
                  <div className="flex-shrink-0 mr-4">
                    <img
                      src={profile.images[0]}
                      alt={profile.name}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1 text-left">
                    <div className="flex justify-between">
                      <p className="font-medium truncate">{profile.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {formatDistanceToNow(lastMessageTime, { 
                          addSuffix: true,
                          locale: fr
                        })}
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground truncate">
                      {/* Mock last message based on profile.id */}
                      {parseInt(profile.id, 10) % 2 === 0 
                        ? `Salut, comment ça va ?` 
                        : `J'adorerais en savoir plus sur tes intérêts en ${profile.interests[0]}`}
                    </p>
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      ) : (
        <div className="flex flex-col items-center justify-center h-full p-4 text-center">
          <p className="text-muted-foreground">Pas encore de conversations</p>
        </div>
      )}
    </div>
  );
}
