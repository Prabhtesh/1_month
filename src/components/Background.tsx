import React, { useEffect, useState } from 'react';

interface Heart {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  delay: number;
}

export const Background: React.FC = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const createHearts = () => {
      const newHearts: Heart[] = [];
      const count = Math.floor(window.innerWidth / 30); // Responsive number of hearts

      for (let i = 0; i < count; i++) {
        newHearts.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 20 + 10,
          opacity: Math.random() * 0.5 + 0.1,
          speed: Math.random() * 50 + 30,
          delay: Math.random() * 5
        });
      }

      setHearts(newHearts);
    };

    createHearts();
    window.addEventListener('resize', createHearts);

    return () => {
      window.removeEventListener('resize', createHearts);
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-float"
          style={{
            left: `${heart.x}%`,
            top: `${heart.y}%`,
            animationDuration: `${heart.speed}s`,
            animationDelay: `${heart.delay}s`,
            opacity: heart.opacity
          }}
        >
          <svg
            width={heart.size}
            height={heart.size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              fill={`rgba(255, 105, 180, ${heart.opacity + 0.3})`}
            />
          </svg>
        </div>
      ))}
    </div>
  );
};