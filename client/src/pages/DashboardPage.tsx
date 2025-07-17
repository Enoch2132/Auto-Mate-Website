import { HeaderSection } from "./sections/HeaderSection";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PlusIcon, SearchIcon, SendIcon, SparklesIcon } from "lucide-react";

export function DashboardPage() {
  const [message, setMessage] = useState("");

  const suggestions = [
    "Make me a Gmail API",
    "Which one of my projects is performing the best?",
    "Can you make me a [insert API]???"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20">
      <HeaderSection />
      
      {/* Main Dashboard Content */}
      <div className="pt-24 flex h-screen">
        {/* Sidebar */}
        <div className="w-64 bg-black/80 backdrop-blur-sm border-r border-white/10 flex flex-col">
          <div className="p-4 space-y-3">
            <Button className="w-full justify-start gap-2 bg-white/10 hover:bg-white/20 text-white border-none">
              <PlusIcon className="w-4 h-4" />
              New chat
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2 text-white hover:bg-white/10">
              <SearchIcon className="w-4 h-4" />
              Search
            </Button>
          </div>
        </div>

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col">
          <div className="flex-1 flex flex-col items-center justify-center p-8">
            {/* Sparkle Icon */}
            <div className="mb-8">
              <SparklesIcon className="w-12 h-12 text-blue-400" />
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl font-medium text-white mb-2 text-center">
              Ask <span className="text-blue-400 font-bold">Auto-Mate</span> anything
            </h1>

            {/* Suggestions */}
            <div className="mt-12 mb-8">
              <p className="text-gray-400 text-sm mb-4 text-center">Suggestions on what to ask Our AI</p>
              <div className="flex flex-wrap gap-3 justify-center max-w-2xl">
                {suggestions.map((suggestion, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="bg-white/5 border-white/20 text-white hover:bg-white/10 text-sm px-4 py-2"
                    onClick={() => setMessage(suggestion)}
                  >
                    {suggestion}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-6 bg-white/5 backdrop-blur-sm border-t border-white/10">
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ask me anything about your projects"
                  className="w-full bg-white/10 border-white/20 text-white placeholder:text-gray-400 pr-12 py-3 rounded-xl"
                />
                <Button
                  size="sm"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-500 hover:bg-blue-600 p-2"
                >
                  <SendIcon className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}