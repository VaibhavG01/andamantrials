// src/components/OverviewWidget.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Overview Map Widget (Bottom Right) matching reference image!

import { DESTINATIONS as FALLBACK_DESTINATIONS } from '../data/destinations';

export default function OverviewWidget({ destinations = FALLBACK_DESTINATIONS, visible, isNight, selectedId, onSelect }) {
  const glassBg = isNight ? 'rgba(4, 10, 26, 0.82)' : 'rgba(5, 18, 40, 0.72)';

  return (
    <div
      style={{
        position: 'absolute',
        bottom: 24,
        right: 'clamp(12px, 1.8vw, 24px)',
        zIndex: 120,
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.6s ease 1.6s',
        pointerEvents: visible ? 'auto' : 'none',
      }}
      className="hidden md:block"
    >
      <div
        className="glass"
        style={{
          background: glassBg,
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          border: '1.5px solid rgba(240, 101, 67, 0.4)',
          borderRadius: 20,
          padding: '16px 20px',
          width: 260,
          boxShadow: '0 16px 48px rgba(0, 0, 0, 0.65), 0 0 20px rgba(240, 101, 67, 0.15)',
        }}
      >
        {/* Title */}
        <div style={{ marginBottom: 14, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: '0.18em',
              color: '#ffffff',
              lineHeight: 1.1,
            }}>
              ANDAMAN
            </div>
            <div style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: '0.18em',
              color: '#FF6B4A',
              lineHeight: 1.1,
            }}>
              ISLANDS
            </div>
          </div>
          <div style={{
            background: 'rgba(240, 101, 67, 0.15)',
            border: '1px solid rgba(240, 101, 67, 0.35)',
            borderRadius: 12,
            padding: '3px 8px',
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 12,
            color: '#FF6B4A',
            fontWeight: 800,
          }}>
            MAP
          </div>
        </div>

        {/* Vector SVG Outline Map of Andaman Archipelago */}
        <div style={{
          position: 'relative',
          height: 90,
          background: 'rgba(2, 12, 28, 0.5)',
          borderRadius: 12,
          border: '1px solid rgba(240, 101, 67, 0.2)',
          marginBottom: 14,
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <svg width="100%" height="100%" viewBox="0 0 200 90" fill="none">
            {/* Grid lines */}
            <path d="M0 30h200M0 60h200M50 0v90M100 0v90M150 0v90" stroke="rgba(240,101,67,0.1)" strokeWidth="0.8" />

            {/* Island Chain Vector Path */}
            <path
              d="M30 65 Q 45 50 60 55 T 90 40 T 120 35 T 150 25 T 175 20"
              stroke="rgba(240,101,67,0.4)" strokeWidth="1.5" strokeDasharray="3 3"
            />

            {/* Island Dots matching 8 destinations */}
            {[
              { x: 35, y: 65, name: 'PB' },
              { x: 60, y: 55, name: 'NL' },
              { x: 75, y: 48, name: 'HV' },
              { x: 95, y: 42, name: 'BT' },
              { x: 118, y: 36, name: 'RG' },
              { x: 138, y: 30, name: 'MB' },
              { x: 158, y: 24, name: 'DG' },
              { x: 178, y: 18, name: 'NA' },
            ].map((pt, i) => {
              const isSel = selectedId === DESTINATIONS[i]?.id;
              return (
                <g key={i} style={{ cursor: 'pointer' }} onClick={() => onSelect?.(DESTINATIONS[i])}>
                  <circle cx={pt.x} cy={pt.y} r={isSel ? 5 : 3} fill={isSel ? '#FF6B4A' : '#F06543'} />
                  <circle cx={pt.x} cy={pt.y} r={isSel ? 9 : 6} fill="none" stroke={isSel ? '#FF6B4A' : '#F06543'} strokeWidth="0.8" opacity={isSel ? 0.9 : 0.5} />
                </g>
              );
            })}
          </svg>
        </div>

        {/* 4 Stat Items matching reference image */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {[
            { icon: '🏝️', label: '8 Major Islands' },
            { icon: '⭐', label: '572+ Attractions' },
            { icon: '🤿', label: '50+ Activities' },
            { icon: '💖', label: 'Endless Memories' },
          ].map((item) => (
            <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontSize: 13 }}>{item.icon}</span>
              <span style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 11,
                color: '#c8dff0',
                fontWeight: 500,
                letterSpacing: '0.03em',
              }}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
