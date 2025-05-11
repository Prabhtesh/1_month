import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

export const LandingPage: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 text-center bg-gradient-to-b from-pink-50 to-white">
      <div 
        className={`transition-all duration-1000 ease-out transform ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <Heart className="h-16 w-16 text-pink-500 mx-auto mb-4 animate-pulse" />
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-red-600 text-transparent bg-clip-text">
          Happy One Month Anniversary <br />
          <span className="font-cursive italic">Prabhati</span>
        </h1>

        <div className="max-w-2xl mx-auto mb-8">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            This past month has been the most beautiful thing in my life. 
            Every moment with you feels like a dream I never want to wake up from.
            I am not there to give any special gifts so this is for my girl.
            Again thank to DLCA wale sir, I was able to confess, Aise bhi kar toh deta hi, but fir bhi.
          </p>
        </div>

        <div className="animate-bounce mt-8">
          <svg 
            className="w-6 h-6 mx-auto text-pink-500" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </div>
      </div>
    </section>
  );
};