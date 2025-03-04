
import { Navigation } from "@/components/Navigation";
import { useState } from "react";
import { matches } from "@/data/mockProfiles";
import { ConversationList } from "@/components/ConversationList";
import { ChatWindow } from "@/components/ChatWindow";
import { useToast } from "@/hooks/use-toast";

const Messages = () => {
  const [selectedConversation, setSelectedConversation] = useState<string | null>(null);
  const { toast } = useToast();
  
  // Function to handle selecting a conversation
  const handleSelectConversation = (id: string) => {
    setSelectedConversation(id);
    
    // On mobile, we can show a toast to confirm selection
    if (window.innerWidth < 768) {
      toast({
        title: "Conversation ouverte",
        description: `Vous discutez maintenant avec ${matches.find(m => m.id === id)?.name}`,
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen pb-20">
      <header className="p-4 border-b">
        <h1 className="text-xl font-semibold">Messages</h1>
      </header>
      
      <main className="flex-1 flex flex-col md:flex-row overflow-hidden">
        {/* Conversation list */}
        <div className={`${selectedConversation && 'hidden md:block'} w-full md:w-1/3 lg:w-1/4 border-r`}>
          <ConversationList 
            conversations={matches} 
            selectedId={selectedConversation}
            onSelect={handleSelectConversation}
          />
        </div>
        
        {/* Chat window */}
        <div className={`${!selectedConversation && 'hidden md:flex'} flex-1 flex flex-col`}>
          {selectedConversation ? (
            <ChatWindow 
              conversation={matches.find(m => m.id === selectedConversation)!}
              onBack={() => setSelectedConversation(null)}
            />
          ) : (
            <div className="flex-1 flex items-center justify-center text-center p-4">
              <div className="max-w-md">
                <h2 className="text-xl font-semibold mb-2">Sélectionnez une conversation</h2>
                <p className="text-muted-foreground">
                  Choisissez un match dans la liste pour commencer à discuter
                </p>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Navigation />
    </div>
  );
};

export default Messages;
