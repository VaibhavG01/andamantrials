// src/components/DestinationPanel.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Premium glassmorphism island destination card — mobile sheet responsive.

import { useRef, useEffect, useCallback } from 'react';
import { openPanel, closePanel } from '../animations/markerAnimations';

export default function DestinationPanel({ destination, onClose, isNight }) {
  const panelRef = useRef(null);

  useEffect(() => {
    if (!panelRef.current) return;
    if (destination) {
      openPanel(panelRef.current);
    }
  }, [destination]);

  const handleClose = useCallback(() => {
    if (!panelRef.current) return;
    closePanel(panelRef.current, () => onClose?.());
  }, [onClose]);

  if (!destination) return null;

  const glassBg = isNight ? 'rgba(4, 10, 26, 0.90)' : 'rgba(5, 18, 40, 0.85)';

  return (
    <div
      ref={panelRef}
      className="destination-panel-container"
      style={{
        position: 'absolute',
        zIndex: 150,
        opacity: 0,
      }}
    >
      <style>{`
        .destination-panel-container {
          bottom: 24px;
          left: clamp(12px, 2vw, 32px);
          width: min(420px, 92vw);
        }
        @media (max-width: 767px) {
          .destination-panel-container {
            left: 12px;
            right: 12px;
            bottom: 12px;
            width: calc(100vw - 24px);
          }
          .destination-panel-card {
            padding: 12px !important;
            gap: 12px !important;
          }
          .destination-panel-img {
            width: 90px !important;
            height: 90px !important;
          }
          .destination-panel-title {
            font-size: 18px !important;
          }
        }
      `}</style>

      {/* Main Glass Card matching reference image */}
      <div
        className="glass destination-panel-card"
        style={{
          background: 'rgba(11, 37, 69, 0.95)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          border: '1.5px solid rgba(240, 101, 67, 0.4)',
          borderRadius: 18,
          padding: 16,
          boxShadow: '0 24px 60px rgba(0,0,0,0.7), 0 0 20px rgba(240, 101, 67, 0.15)',
          display: 'flex',
          gap: 16,
          alignItems: 'center',
          position: 'relative',
        }}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          style={{
            position: 'absolute',
            top: 10,
            right: 10,
            width: 24,
            height: 24,
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '50%',
            color: '#c8dff0',
            fontSize: 11,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s',
            zIndex: 5,
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'rgba(240, 101, 67, 0.4)';
            e.currentTarget.style.color = '#ffffff';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
            e.currentTarget.style.color = '#c8dff0';
          }}
        >
          ✕
        </button>

        {/* Thumbnail Image */}
        <div
          className="destination-panel-img"
          style={{
            width: 130,
            height: 130,
            borderRadius: 14,
            overflow: 'hidden',
            flexShrink: 0,
            boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
            position: 'relative',
          }}
        >
          <img
            src={destination.image}
            alt={destination.name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
          {/* Badge */}
          <div style={{
            position: 'absolute',
            top: 6,
            left: 6,
            background: 'linear-gradient(135deg, #FF6B4A, #F06543)',
            color: '#ffffff',
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 12,
            fontWeight: 800,
            letterSpacing: '0.08em',
            padding: '2px 8px',
            borderRadius: 10,
            textTransform: 'uppercase',
            boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
          }}>
            {destination.badge}
          </div>
        </div>

        {/* Content */}
        <div style={{ flex: 1, paddingRight: 12 }}>
          <h3
            className="destination-panel-title"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 22,
              fontWeight: 700,
              color: '#ffffff',
              lineHeight: 1.1,
              marginBottom: 2,
            }}
          >
            {destination.name}
          </h3>

          <p style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 12.5,
            color: '#FF6B4A',
            letterSpacing: '0.1em',
            fontWeight: 700,
            marginBottom: 6,
          }}>
            {destination.subtitle}
          </p>

          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 12.5,
            color: '#cbd5e1',
            lineHeight: 1.4,
            fontWeight: 400,
            marginBottom: 10,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}>
            {destination.description}
          </p>

          {/* CTA Button */}
          <a
            href={`/destination-details?id=${destination.id}`}
            style={{
              background: 'linear-gradient(135deg, #FF6B4A, #F06543)',
              border: 'none',
              color: '#ffffff',
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 12.5,
              fontWeight: 800,
              padding: '7px 16px',
              borderRadius: 20,
              cursor: 'pointer',
              letterSpacing: '0.05em',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              transition: 'all 0.25s',
              boxShadow: '0 4px 16px rgba(240, 101, 67, 0.4)',
              textDecoration: 'none',
            }}
          >
            Explore More
            <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
