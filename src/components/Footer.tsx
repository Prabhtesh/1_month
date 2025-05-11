import React from 'react';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-gradient-to-b from-pink-50 to-pink-100 text-center">
      <div className="max-w-md mx-auto px-4">
        <div className="flex items-center justify-center text-gray-700 mb-2">
          <span>Made with</span>
          <Heart className="h-5 w-5 text-red-500 mx-1 animate-pulse" fill="currentColor" />
          <span>from your Amitesh</span>
        </div>
        
        <p className="text-sm text-gray-500">
          A little digital gift to celebrate our first month together. Many more to come.
        </p>
      </div>
    </footer>
  );
};