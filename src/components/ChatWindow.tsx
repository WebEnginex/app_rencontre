
import { useState } from "react";
import { Profile } from "@/data/mockProfiles";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Send } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface ChatWindowProps {
  conversation: Profile;
  onBack: () => void;
}

// Mock message interface
interface Message {
  id: string;
  content: string;
  sender: "user" | "match";
  timestamp: Date;
}

export function ChatWindow({ conversation, onBack }: ChatWindowProps) {
  const [inputValue, setInputValue] = useState("");
  
  // Generate some mock messages based on conversation.id
  const generateMockMessages = (profileId: string): Message[] => {
    const seed = parseInt(profileId, 10);
    const messageCount = (seed % 5) + 3; // 3-7 messages
    const messages: Message[] = [];
    
    // Generate welcome message
    messages.push({
      id: "welcome",
      content: `Salut ! Merci pour le match, j'adore ton profil ! 😊`,
      sender: "match",
      timestamp: new Date(Date.now() - 86400000) // 1 day ago
    });
    
    // Generate some random messages
    const templates = [
      "Comment ça va aujourd'hui ?",
      `J'ai vu que tu t'intéresses à ${conversation.interests[0]}, moi aussi !`,
      "Tu habites à Paris depuis longtemps ?",
      "Tu fais quoi ce weekend ?",
      `J'aimerais bien découvrir ${conversation.interests[1]} avec toi !`,
      "Tu préfères sortir ou rester à la maison ?",
    ];
    
    for (let i = 1; i < messageCount; i++) {
      const isUser = i % 2 === 0;
      const messageTemplate = templates[(seed + i) % templates.length];
      
      messages.push({
        id: `msg-${i}`,
        content: isUser ? `Bien sûr ! ${messageTemplate}` : messageTemplate,
        sender: isUser ? "user" : "match",
        timestamp: new Date(Date.now() - (messageCount - i) * 3600000) // Progressive times
      });
    }
    
    return messages.sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime());
  };
  
  const [messages] = useState<Message[]>(() => generateMockMessages(conversation.id));
  
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    
    // In a real app, we would send this message to the backend
    // For now, we just clear the input
    setInputValue("");
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b flex items-center gap-3">
        <Button 
          onClick={onBack} 
          size="icon" 
          variant="ghost" 
          className="md:hidden"
        >
          <ArrowLeft size={20} />
          <span className="sr-only">Retour</span>
        </Button>
        
        <img
          src={conversation.images[0]}
          alt={conversation.name}
          className="h-10 w-10 rounded-full object-cover"
        />
        <div>
          <h2 className="font-medium">{conversation.name}</h2>
          <p className="text-xs text-muted-foreground">En ligne aujourd'hui</p>
        </div>
      </div>
      
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div 
            key={message.id}
            className={cn(
              "flex",
              message.sender === "user" ? "justify-end" : "justify-start"
            )}
          >
            <div 
              className={cn(
                "max-w-[80%] p-3 rounded-lg",
                message.sender === "user" 
                  ? "bg-primary text-primary-foreground rounded-br-none" 
                  : "bg-muted rounded-bl-none"
              )}
            >
              <p>{message.content}</p>
              <div 
                className={cn(
                  "text-xs mt-1",
                  message.sender === "user" ? "text-primary-foreground/70" : "text-muted-foreground"
                )}
              >
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <Separator />
      
      {/* Input area */}
      <form onSubmit={handleSendMessage} className="p-4 flex gap-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Écrivez un message..."
          className="flex-1 min-w-0 rounded-full bg-muted px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        />
        <Button type="submit" size="icon" className="rounded-full">
          <Send size={18} />
          <span className="sr-only">Envoyer</span>
        </Button>
      </form>
    </div>
  );
}
