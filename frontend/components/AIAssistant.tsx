
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Avatar } from '@/components/ui/avatar';
import { Bot, Send, ChevronUp, ChevronDown, Volume2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const AIAssistant: React.FC = () => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState('');
  const [conversation, setConversation] = useState<{type: 'user' | 'ai', text: string}[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!message.trim()) return;
    
    // Add user message to conversation
    setConversation(prev => [...prev, {type: 'user', text: message}]);
    setMessage('');
    
    // Simulate AI typing
    setIsTyping(true);
    
    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "You're doing great! Remember that the robot needs to move forward to reach the star.",
        "Try using the collectStar() function when the robot is at the star's position.",
        "That's a good start! Now think about what command the robot needs to complete its task.",
        "You're on the right track. What should the robot do after collecting the star?"
      ];
      
      const aiResponse = responses[Math.floor(Math.random() * responses.length)];
      setConversation(prev => [...prev, {type: 'ai', text: aiResponse}]);
      setIsTyping(false);
    }, 1000);
  };

  // Add initial AI greeting
  useEffect(() => {
    setTimeout(() => {
      setConversation([
        {type: 'ai', text: "Hi there! I'm Cody, your AI assistant. Need help with the coding challenge?"}
      ]);
    }, 1000);
  }, []);

  return (
    <div className={cn(
      "fixed bottom-4 right-4 z-50 bg-white rounded-xl shadow-game transition-all duration-300",
      isMinimized ? "w-48" : "w-80 md:w-96"
    )}>
      <div 
        className="bg-game-purple text-white p-3 rounded-t-xl flex items-center justify-between cursor-pointer"
        onClick={toggleMinimize}
      >
        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8 bg-white text-game-purple">
            <Bot className="h-4 w-4" />
          </Avatar>
          <h3 className="font-medium">Cody - AI Assistant</h3>
        </div>
        {isMinimized ? (
          <ChevronUp className="h-5 w-5" />
        ) : (
          <ChevronDown className="h-5 w-5" />
        )}
      </div>
      
      {!isMinimized && (
        <>
          <div className="p-4 h-64 overflow-y-auto flex flex-col gap-3">
            {conversation.map((msg, index) => (
              <div 
                key={index}
                className={cn(
                  "max-w-[85%] p-3 rounded-lg",
                  msg.type === 'user' 
                    ? "bg-gray-100 ml-auto" 
                    : "bg-game-purple/10 mr-auto"
                )}
              >
                {msg.type === 'ai' && (
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-medium text-game-purple">Cody</span>
                    <Volume2 className="h-3 w-3 text-game-purple cursor-pointer" />
                  </div>
                )}
                <p className={msg.type === 'user' ? "text-gray-800" : "text-gray-700"}>
                  {msg.text}
                </p>
              </div>
            ))}
            
            {isTyping && (
              <div className="bg-game-purple/10 p-3 rounded-lg mr-auto">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-game-purple rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-game-purple rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-game-purple rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            )}
          </div>
          
          <form onSubmit={handleSubmit} className="p-3 border-t border-gray-100 flex gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask for help..."
              className="flex-1 rounded-lg bg-gray-100 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-game-purple"
            />
            <Button 
              type="submit" 
              size="icon"
              className="bg-game-purple hover:bg-game-dark-purple"
              disabled={!message.trim()}
            >
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </>
      )}
    </div>
  );
};

export default AIAssistant;
