
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Globe, Volume2 } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-white to-purple-50 pt-16 pb-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 bg-white shadow-sm rounded-full py-2 px-4 w-fit">
              <span className="text-game-purple font-semibold text-sm">New</span>
              <span className="text-gray-600 text-sm">AI-powered learning</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Learn to <span className="text-gradient">Code</span> Through <span className="text-game-pink">Play</span>
            </h1>
            
            <p className="text-gray-600 text-lg">
              GameCoded helps kids aged 8-14 learn coding through fun, 
              interactive challenges with a personalized AI assistant.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button size="lg" className="bg-game-purple hover:bg-game-dark-purple text-white">
                Start Learning <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-game-purple text-game-purple">
                For Parents & Teachers
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-6 mt-2">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-game-yellow" />
                <span className="text-gray-600">Personalized AI Tutor</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-game-blue" />
                <span className="text-gray-600">Multiple Languages</span>
              </div>
              <div className="flex items-center gap-2">
                <Volume2 className="w-5 h-5 text-game-green" />
                <span className="text-gray-600">Voice Instructions</span>
              </div>
            </div>
          </div>
          
          <div className="relative aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 bg-game-purple/10 rounded-full animate-pulse-gentle"></div>
            </div>
            <div className="relative z-10 bg-white rounded-2xl shadow-game p-6 max-w-sm mx-auto animate-float">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-bold text-lg text-game-purple">Coding Challenge</h3>
                  <p className="text-gray-500 text-sm">Level 1: Basics</p>
                </div>
                <div className="bg-game-yellow/20 text-game-orange font-medium text-xs px-2.5 py-1 rounded-full">
                  Beginner
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <p className="text-gray-700">Help the robot collect all stars by creating a path with code blocks!</p>
              </div>
              
              <div className="flex gap-2 justify-end">
                <Button variant="outline" size="sm">Skip</Button>
                <Button size="sm" className="bg-game-purple">Start</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
