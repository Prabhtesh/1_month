import React, { useEffect, useState } from 'react';
import { Calendar, Clock } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const meetingDate = new Date('2025-06-29T00:00:00').getTime();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('countdown-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = meetingDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [meetingDate]);

  return (
    <section 
      id="countdown-section"
      className="py-16 px-4 bg-gradient-to-b from-pink-50 to-white"
    >
      <div 
        className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="mb-8 flex justify-center">
          <Calendar className="h-10 w-10 text-pink-500" />
        </div>
        
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
          "Counting the days until I can finally Hug you"
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <div className="bg-white rounded-xl shadow-lg p-6 min-w-[120px]">
            <div className="text-4xl md:text-5xl font-bold text-pink-600 mb-2">{timeLeft.days}</div>
            <div className="text-gray-600">Days</div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 min-w-[120px]">
            <div className="text-4xl md:text-5xl font-bold text-pink-600 mb-2">{timeLeft.hours}</div>
            <div className="text-gray-600">Hours</div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 min-w-[120px]">
            <div className="text-4xl md:text-5xl font-bold text-pink-600 mb-2">{timeLeft.minutes}</div>
            <div className="text-gray-600">Minutes</div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 min-w-[120px]">
            <div className="text-4xl md:text-5xl font-bold text-pink-600 mb-2">{timeLeft.seconds}</div>
            <div className="text-gray-600">Seconds</div>
          </div>
        </div>
        
        <div className="flex justify-center items-center text-gray-600">
          <Clock className="h-5 w-5 mr-2" />
          <span>Until June 29, 2025</span>
        </div>
      </div>
    </section>
  );
};