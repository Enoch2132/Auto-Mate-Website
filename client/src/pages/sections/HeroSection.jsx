import React from "react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center pt-32 pb-20 px-4 bg-gradient-to-b from-transparent to-zinc-900/50">
      <div className="text-center max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Build APIs with{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Natural Language
          </span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Transform your ideas into powerful APIs using plain English. No coding required.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-6 text-lg">
            Get Started Free
          </Button>
          <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg">
            Watch Demo
          </Button>
        </div>
      </div>
    </div>
  );
}