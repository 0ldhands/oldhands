import { useEffect, useState } from 'react';

export default function CartoonDoodleHi() {
  const [wave, setWave] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setWave(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center justify-center h-25 bg-amber-50 w-25 rounded-full ">
      <svg
        width="250"
        height="350"
        viewBox="0 0 250 350"
        className="cartoon-doodle"

        style={{position:'relative',top:'20px'}}
      >
        {/* Head */}
        <circle cx="125" cy="80" r="30" stroke="#000000" strokeWidth="4" fill="#FFD966" />

        {/* Eyes */}
        <circle cx="115" cy="75" r="5" fill="#000" />
        <circle cx="135" cy="75" r="5" fill="#000" />

        {/* Smile */}
        <path d="M110,90 Q125,110 140,90" stroke="#000" strokeWidth="3" fill="none" />

        {/* Body */}
        <line x1="125" y1="110" x2="125" y2="210" stroke="#000000" strokeWidth="5" />
       

        {/* Left Leg */}

        {/* Left Arm */}
        <line x1="125" y1="140" x2="85" y2="170" stroke="#000000" strokeWidth="5" />

        {/* Right Arm (animated wave) */}
        <line
          x1="125"
          y1="140"
          x2={wave ? "165" : "145"}
          y2={wave ? "100" : "120"}
          stroke="#000000"
          strokeWidth="5"
          className={wave ? 'wave-hand' : ''}
        />

        {/* "Hi!" text */}
        {wave && (
          <text
            x="185"
            y="100"
            textAnchor="middle"
            fontFamily="Patrick Hand, cursive"
            fontSize="26"
            fill="#000000"
          >
            Hi!
          </text>
        )}
      </svg>

      <style jsx>{`
        @keyframes wave {
          0% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(-20deg);
          }
          50% {
            transform: rotate(20deg);
          }
          75% {
            transform: rotate(-15deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }

        .wave-hand {
          transform-origin: 125px 140px;
          animation: wave 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}  