// src/components/MapControls.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Sleek, high-contrast, thick vertical map control panel — mobile responsive.

import { useState } from 'react';

const CONTROLS = [
  {
    id: 'rotate',
    label: 'Auto Rotate',
    shortLabel: 'ROTATE',
    toggle: true,
    icon: (active) => (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={active ? 2.5 : 2.0}>
        <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/>
        <path d="M21 3v5h-5"/>
      </svg>
    ),
  },
  {
    id: 'zoom-in',
    label: 'Zoom In',
    shortLabel: 'ZOOM +',
    icon: () => (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.0">
        <circle cx="11" cy="11" r="8"/>
        <path d="m21 21-4.35-4.35M11 8v6M8 11h6"/>
      </svg>
    ),
  },
  {
    id: 'zoom-out',
    label: 'Zoom Out',
    shortLabel: 'ZOOM −',
    icon: () => (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.0">
        <circle cx="11" cy="11" r="8"/>
        <path d="m21 21-4.35-4.35M8 11h6"/>
      </svg>
    ),
  },
  {
    id: 'tilt',
    label: 'Tilt View',
    shortLabel: 'TILT',
    toggle: true,
    icon: () => (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.0">
        <ellipse cx="12" cy="12" rx="10" ry="5"/>
        <path d="M2 12h20"/>
      </svg>
    ),
  },
  {
    id: 'reset',
    label: 'Reset View',
    shortLabel: 'RESET',
    icon: () => (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.0">
        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
        <path d="M3 3v5h5"/>
      </svg>
    ),
  },
  {
    id: 'fullscreen',
    label: 'Fullscreen',
    shortLabel: 'FULL',
    icon: () => (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.0">
        <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
      </svg>
    ),
  },
];

export default function MapControls({
  visible = true,
  isNight,
  isRotating = true,
  onRotate,
  onZoomIn,
  onZoomOut,
  onTilt,
  onReset,
  onFullscreen,
}) {
  const [activeIds, setActiveIds] = useState(() => new Set(['rotate']));
  const [hovered, setHovered]     = useState(null);

  const handleClick = (ctrl) => {
    if (ctrl.toggle) {
      setActiveIds(prev => {
        const next = new Set(prev);
        if (next.has(ctrl.id)) next.delete(ctrl.id);
        else next.add(ctrl.id);
        return next;
      });
    }

    switch (ctrl.id) {
      case 'rotate':     onRotate?.();     break;
      case 'zoom-in':    onZoomIn?.();    break;
      case 'zoom-out':   onZoomOut?.();   break;
      case 'tilt':       onTilt?.();      break;
      case 'reset':      onReset?.();     break;
      case 'fullscreen': onFullscreen?.();break;
      default: break;
    }
  };

  const glassBg = isNight ? 'rgba(4, 10, 26, 0.92)' : 'rgba(5, 18, 40, 0.88)';

  return (
    <div
      className="map-controls-container"
      style={{
        position: 'absolute',
        top: '50%',
        right: 'clamp(10px, 2vw, 24px)',
        transform: 'translateY(-50%)',
        zIndex: 100,
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.6s ease',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <style>{`
        .map-controls-card {
          width: 74px;
          padding: 8px;
        }
        .map-control-btn {
          height: 48px;
        }
        @media (max-width: 767px) {
          .map-controls-container {
            right: 6px !important;
          }
          .map-controls-card {
            width: 58px !important;
            padding: 6px !important;
            gap: 5px !important;
          }
          .map-control-btn {
            height: 42px !important;
            padding: 3px !important;
          }
          .map-control-btn span {
            font-size: 7px !important;
          }
        }
      `}</style>

      <div
        className="map-controls-card"
        style={{
          background: glassBg,
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          border: '1.5px solid rgba(240, 101, 67, 0.4)',
          borderRadius: 18,
          display: 'flex',
          flexDirection: 'column',
          gap: '6px',
          boxShadow: '0 16px 48px rgba(0,0,0,0.7), 0 0 20px rgba(240, 101, 67, 0.15)',
          alignItems: 'center',
        }}
      >
        {CONTROLS.map((ctrl) => {
          const isActive  = activeIds.has(ctrl.id);
          const isHovered = hovered === ctrl.id;
          return (
            <div key={ctrl.id} style={{ position: 'relative', width: '100%' }}>
              {/* Tooltip */}
              {isHovered && (
                <div style={{
                  position: 'absolute', right: '115%', top: '50%',
                  transform: 'translateY(-50%)',
                  background: glassBg,
                  backdropFilter: 'blur(16px)',
                  border: '1.5px solid rgba(240, 101, 67, 0.5)',
                  borderRadius: 8, padding: '5px 10px',
                  whiteSpace: 'nowrap',
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 12.5, color: '#FF6B4A',
                  fontWeight: 700,
                  pointerEvents: 'none',
                  boxShadow: '0 6px 20px rgba(0,0,0,0.6), 0 0 12px rgba(240,101,67,0.2)',
                }}>
                  {ctrl.label}
                  {ctrl.toggle && (
                    <span style={{ marginLeft: 6, color: isActive ? '#FF6B4A' : '#94a3b8', fontSize: 12, fontWeight: 800 }}>
                      {isActive ? 'ON' : 'OFF'}
                    </span>
                  )}
                </div>
              )}

              {/* Thick Control Button */}
              <button
                className="map-control-btn"
                onClick={() => handleClick(ctrl)}
                onMouseEnter={() => setHovered(ctrl.id)}
                onMouseLeave={() => setHovered(null)}
                title={ctrl.label}
                style={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 3,
                  background: isActive
                    ? 'rgba(240, 101, 67, 0.25)'
                    : isHovered
                      ? 'rgba(240, 101, 67, 0.14)'
                      : 'rgba(255, 255, 255, 0.05)',
                  border: isActive
                    ? '2px solid #F06543'
                    : isHovered
                      ? '1.5px solid rgba(240, 101, 67, 0.6)'
                      : '1.5px solid rgba(240, 101, 67, 0.25)',
                  borderRadius: 12,
                  color: isActive || isHovered ? '#FF6B4A' : '#c8dff0',
                  cursor: 'pointer',
                  transition: 'all 0.22s ease',
                  boxShadow: isActive ? '0 0 20px rgba(240, 101, 67, 0.4)' : 'none',
                }}
              >
                {ctrl.icon(isActive)}
                <span style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 12,
                  letterSpacing: '0.06em',
                  fontWeight: 800,
                  lineHeight: 1,
                  whiteSpace: 'nowrap',
                  textTransform: 'uppercase',
                }}>
                  {ctrl.shortLabel}
                </span>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
