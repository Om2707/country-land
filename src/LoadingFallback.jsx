import { useEffect, useState } from 'react';

const LoadingFallback = () => {
  const [dots, setDots] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev < 3 ? prev + 1 : 1);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-green-50 to-lime-50 text-slate-800">
      <div className="relative w-32 h-32 flex items-center justify-center mb-8">
        {/* SVG Plant Animation */}
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="plantGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#34d399" /> {/* Emerald 400 */}
              <stop offset="100%" stopColor="#84cc16" /> {/* Lime 500 */}
            </linearGradient>
          </defs>
          {/* Stem */}
          <path
            d="M50 90 V10"
            fill="none"
            stroke="url(#plantGradient)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray="80"
            strokeDashoffset="80"
            className="animate-stem"
          />
          {/* Leaf 1 */}
          <path
            d="M50 50 Q65 35 75 50 Q65 65 50 50"
            fill="url(#plantGradient)"
            className="animate-leaf-1"
            style={{ transformOrigin: '50% 50%', opacity: 0 }}
          />
          {/* Leaf 2 */}
          <path
            d="M50 50 Q35 35 25 50 Q35 65 50 50"
            fill="url(#plantGradient)"
            className="animate-leaf-2"
            style={{ transformOrigin: '50% 50%', opacity: 0 }}
          />
        </svg>
      </div>

      <div className="text-center text-2xl font-semibold text-green-700">
        Loading Country Land{'.'.repeat(dots)}
      </div>

      <style jsx>{`
        @keyframes stemGrowth {
          0% {
            stroke-dashoffset: 80;
          }
          50% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }

        @keyframes leafAppearance {
          0% {
            opacity: 0;
            transform: scale(0.5);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-stem {
          animation: stemGrowth 2s ease-out infinite;
        }

        .animate-leaf-1 {
          animation: leafAppearance 0.8s ease-out infinite;
          animation-delay: 1.5s; /* Start leaf animation after stem is mostly grown */
        }

        .animate-leaf-2 {
          animation: leafAppearance 0.8s ease-out infinite;
          animation-delay: 1.8s; /* Stagger second leaf */
        }
      `}</style>
    </div>
  );
};

export default LoadingFallback;