
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CodePlayground from '@/components/CodePlayground';
import AIAssistant from '@/components/AIAssistant';
import ProgressTracker from '@/components/ProgressTracker';
import Footer from '@/components/Footer';
import FeatureCard from '@/components/FeatureCard';
import { Puzzle, Sparkles, Globe, Volume2, Rocket, Award } from 'lucide-react';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <Hero />
        
        {/* Features Section */}
        <section id="features" className="py-20 px-4 md:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Designed for Young Learners</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                GameCoded makes learning to code a fun adventure with features specifically designed for children aged 8-14.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <FeatureCard
                title="Game-Based Learning"
                description="Turn coding lessons into exciting games and challenges that keep children engaged and motivated."
                icon={Puzzle}
                color="game-purple"
                delay={100}
              />
              <FeatureCard
                title="AI Tutor Assistant"
                description="A friendly AI assistant provides personalized guidance, adapting to each child's learning pace."
                icon={Sparkles}
                color="game-blue"
                delay={200}
              />
              <FeatureCard
                title="Multiple Languages"
                description="Learn in your preferred language with support for multiple languages and localized content."
                icon={Globe}
                color="game-teal"
                delay={300}
              />
              <FeatureCard
                title="Voice Instructions"
                description="Audio guidance helps children follow along, even if they're still developing their reading skills."
                icon={Volume2}
                color="game-pink"
                delay={400}
              />
              <FeatureCard
                title="Progressive Learning"
                description="Start with simple concepts and gradually build up to more complex coding principles."
                icon={Rocket}
                color="game-orange"
                delay={500}
              />
              <FeatureCard
                title="Achievements & Rewards"
                description="Earn badges, unlock new levels, and track progress to celebrate learning milestones."
                icon={Award}
                color="game-green"
                delay={600}
              />
            </div>
          </div>
        </section>
        
        {/* Interactive Demo Section */}
        <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-white to-purple-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Try It Yourself</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Experience how GameCoded makes learning to code intuitive and fun with our interactive demo.
              </p>
            </div>
            
            <CodePlayground />
          </div>
        </section>
        
        {/* Progress Tracking Section */}
        <section id="how-it-works" className="py-20 px-4 md:px-8 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Track Your Progress</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Watch your coding skills grow with our engaging progress tracking system.
              </p>
            </div>
            
            <ProgressTracker />
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-20 px-4 md:px-8 bg-game-purple text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Coding?</h2>
            <p className="text-lg mb-8 opacity-90">
              Join thousands of young learners discovering the joy of coding with GameCoded.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-game-purple px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
                Get Started for Free
              </button>
              <button className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      
      {/* AI Assistant (Fixed Position) */}
      <AIAssistant />
    </div>
  );
};

export default Index;
