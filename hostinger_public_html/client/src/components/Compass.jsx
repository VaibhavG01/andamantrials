// src/components/Compass.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Interactive compass widget — rotates needle with camera azimuth,
// and points North smoothly when clicked!

import { useRef, useEffect, useState } from 'react';

export default function Compass({ azimuth = 0, visible, isNight, onClick }) {
  const needleRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (needleRef.current) {
      needleRef.current.style.transform = `rotate(${-azimuth}deg)`;
    }
  }, [azimuth]);

  const glassBg = isNight ? 'rgba(4,8,24,0.85)' : 'rgba(5,18,40,0.72)';

  return (
    <div
      style={{
        position: 'absolute',
        top: 88,
        right: 'clamp(10px,1.5vw,22px)',
        zIndex: 100,
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.6s ease 1.2s',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <button
        onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        title="Click to Align North"
        style={{
          background: glassBg,
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: hovered ? '1.5px solid rgba(240, 101, 67, 0.7)' : '1px solid rgba(240, 101, 67, 0.3)',
          borderRadius: '50%',
          width: 68,
          height: 68,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: hovered
            ? '0 0 20px rgba(240, 101, 67, 0.4), 0 4px 24px rgba(0,0,0,0.6)'
            : '0 4px 24px rgba(0,0,0,0.5)',
          cursor: 'pointer',
          padding: 0,
          outline: 'none',
          transition: 'all 0.25s ease',
          transform: hovered ? 'scale(1.06)' : 'scale(1.0)',
        }}
      >
        <div
          style={{
            position: 'relative',
            width: 52,
            height: 52,
            border: '1px solid rgba(240, 101, 67, 0.3)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Cardinal labels */}
          {[
            { label: 'N', pos: { top: 3, left: '50%', transform: 'translateX(-50%)' }, accent: true },
            { label: 'S', pos: { bottom: 3, left: '50%', transform: 'translateX(-50%)' } },
            { label: 'E', pos: { right: 3, top: '50%', transform: 'translateY(-50%)' } },
            { label: 'W', pos: { left: 3, top: '50%', transform: 'translateY(-50%)' } },
          ].map(({ label, pos, accent }) => (
            <span
              key={label}
              style={{
                position: 'absolute',
                fontFamily: "'Space Grotesk',sans-serif",
                fontSize: 12.5,
                fontWeight: 800,
                lineHeight: 1,
                color: accent ? '#F06543' : '#94a3b8',
                ...pos,
              }}
            >
              {label}
            </span>
          ))}

          {/* Needle */}
          <div
            ref={needleRef}
            style={{
              width: 2.5,
              height: 25,
              borderRadius: 2,
              background: 'linear-gradient(to bottom, #F06543 50%, #94a3b8 50%)',
              transformOrigin: 'center center',
              transition: 'transform 0.35s cubic-bezier(0.2, 0, 0, 1)',
              boxShadow: '0 0 8px rgba(240, 101, 67, 0.7)',
            }}
          />
        </div>
      </button>

      {/* Label */}
      <div
        style={{
          textAlign: 'center',
          marginTop: 5,
          fontFamily: "'Space Grotesk',sans-serif",
          fontSize: 12.5,
          color: hovered ? '#F06543' : '#94a3b8',
          letterSpacing: '0.18em',
          fontWeight: 600,
          transition: 'color 0.2s',
          userSelect: 'none',
        }}
      >
        {hovered ? 'RESET NORTH' : 'COMPASS'}
      </div>
    </div>
  );
}
