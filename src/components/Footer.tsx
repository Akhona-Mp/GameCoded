
import React from 'react';
import { Button } from '@/components/ui/button';
import { Globe, Mail, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-gradient-primary flex items-center justify-center">
                <span className="text-white font-bold text-sm">{'{}'}</span>
              </div>
              <h2 className="font-bold text-xl text-gradient">GameCoded</h2>
            </div>
            <p className="text-gray-600 text-sm mb-6">
              Making coding fun and accessible for kids everywhere.
            </p>
            <div className="flex gap-3">
              <Button variant="outline" size="icon" className="rounded-full">
                <Twitter className="h-4 w-4 text-gray-500" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Mail className="h-4 w-4 text-gray-500" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Globe className="h-4 w-4 text-gray-500" />
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-game-purple text-sm">Features</a></li>
              <li><a href="#" className="text-gray-600 hover:text-game-purple text-sm">For Schools</a></li>
              <li><a href="#" className="text-gray-600 hover:text-game-purple text-sm">For Parents</a></li>
              <li><a href="#" className="text-gray-600 hover:text-game-purple text-sm">Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-game-purple text-sm">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-game-purple text-sm">Help Center</a></li>
              <li><a href="#" className="text-gray-600 hover:text-game-purple text-sm">Community</a></li>
              <li><a href="#" className="text-gray-600 hover:text-game-purple text-sm">Lesson Plans</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-game-purple text-sm">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-game-purple text-sm">Partnerships</a></li>
              <li><a href="#" className="text-gray-600 hover:text-game-purple text-sm">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-game-purple text-sm">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} GameCoded. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-game-purple text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-game-purple text-sm">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-game-purple text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
