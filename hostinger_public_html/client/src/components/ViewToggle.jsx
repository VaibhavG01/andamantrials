// src/components/ViewToggle.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Premium floating toggle — switch between 3D Globe and Real Map views.

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

export default function ViewToggle({ current, onChange, isNight, visible }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(ref.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', delay: 2.2 }
    );
  }, []);

  const glassBg  = isNight ? 'rgba(4,8,24,0.85)'  : 'rgba(5,18,40,0.85)';
  const glassB   = 'rgba(240, 101, 67, 0.3)';

  const BTNs = [
    { id: '3d',  label: '3D Globe', icon: '🌐' },
    { id: 'map', label: 'Real Map', icon: '🗺️' },
  ];

  return (
    <div
      ref={ref}
      style={{
        position: 'absolute',
        top: 18,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 200,
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.4s',
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      <div style={{
        background: glassBg,
        backdropFilter:'blur(20px)',
        WebkitBackdropFilter:'blur(20px)',
        border:`1.5px solid ${glassB}`,
        borderRadius:50,
        padding:4,
        display:'flex',
        gap:0,
        boxShadow:'0 8px 40px rgba(0,0,0,0.55), 0 0 15px rgba(240, 101, 67, 0.15)',
      }}>
        {BTNs.map((btn) => {
          const active = current === btn.id;
          return (
            <button
              key={btn.id}
              onClick={() => onChange(btn.id)}
              style={{
                display:'flex', alignItems:'center', gap:8,
                background: active
                  ? 'linear-gradient(135deg, #FF6B4A, #F06543)'
                  : 'transparent',
                border:'none',
                color: active ? '#ffffff' : '#cbd5e1',
                fontFamily:"'Space Grotesk',sans-serif",
                fontSize:11.5, fontWeight: active ? 800 : 600,
                padding:'9px 22px',
                borderRadius:50, cursor:'pointer',
                letterSpacing:'0.06em',
                transition:'all 0.3s ease',
                boxShadow: active ? '0 4px 18px rgba(240, 101, 67, 0.4)' : 'none',
                whiteSpace:'nowrap',
              }}
            >
              <span style={{ fontSize:15 }}>{btn.icon}</span>
              {btn.label.toUpperCase()}
            </button>
          );
        })}
      </div>
    </div>
  );
}
