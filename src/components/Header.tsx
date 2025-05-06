
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="py-4 px-6 bg-white shadow-sm sticky top-0 z-20">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-game-purple to-game-blue flex items-center justify-center text-white font-bold text-xl">
            G
          </div>
          <span className="text-xl font-bold text-gray-900">GameCoded</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex gap-6">
            <Link to="/" className="text-gray-700 hover:text-game-purple transition-colors">
              Home
            </Link>
            <Link to="/courses" className="text-gray-700 hover:text-game-purple transition-colors">
              Courses
            </Link>
            <Link to="#features" className="text-gray-700 hover:text-game-purple transition-colors">
              Features
            </Link>
            <Link to="#how-it-works" className="text-gray-700 hover:text-game-purple transition-colors">
              How It Works
            </Link>
          </nav>
          
          <div className="flex items-center gap-4">
            <Button variant="outline" className="border-game-purple text-game-purple hover:bg-game-purple/10">
              Log In
            </Button>
            <Button className="bg-game-purple hover:bg-game-dark-purple">
              Sign Up
            </Button>
          </div>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 py-4 px-6 bg-white border-t">
          <nav className="flex flex-col gap-4 mb-6">
            <Link to="/" className="text-gray-700" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/courses" className="text-gray-700" onClick={() => setIsMenuOpen(false)}>
              Courses
            </Link>
            <Link to="#features" className="text-gray-700" onClick={() => setIsMenuOpen(false)}>
              Features
            </Link>
            <Link to="#how-it-works" className="text-gray-700" onClick={() => setIsMenuOpen(false)}>
              How It Works
            </Link>
          </nav>
          
          <div className="flex flex-col gap-3">
            <Button variant="outline" className="w-full border-game-purple text-game-purple">
              Log In
            </Button>
            <Button className="w-full bg-game-purple hover:bg-game-dark-purple">
              Sign Up
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
