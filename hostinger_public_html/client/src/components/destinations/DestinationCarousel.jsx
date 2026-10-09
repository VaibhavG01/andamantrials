// src/components/destinations/DestinationCarousel.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Horizontal destination cards explorer — responsive grid/scroll with prev/next navigation.

import { useRef } from 'react';
import DestinationCard from './DestinationCard';

export default function DestinationCarousel({ destinations, onSelectDestination }) {
  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    if (!scrollRef.current) return;
    const amount = direction === 'left' ? -340 : 340;
    scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
  };

  if (!destinations || destinations.length === 0) return null;

  return (
    <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 20px' }}>
      {/* Section Header & Navigation Controls */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 24,
        }}
      >
        <div>
          <div style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 12.5,
            fontWeight: 800,
            letterSpacing: '0.2em',
            color: '#F06543',
            marginBottom: 2,
            textTransform: 'uppercase',
          }}>
            ARCHIPELAGO EXPLORER
          </div>
          <h3 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 26,
            fontWeight: 600,
            color: '#334155',
          }}>
            Major Andaman Islands
          </h3>
        </div>

        {/* Prev / Next Buttons */}
        <div style={{ display: 'flex', gap: 8 }}>
          <button
            onClick={() => handleScroll('left')}
            style={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              background: '#e2e8f0',
              border: '1px solid rgba(0, 201, 212, 0.2)',
              color: '#c8dff0',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 16,
              transition: 'all 0.2s ease',
              outline: 'none',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(0, 201, 212, 0.5)';
              e.currentTarget.style.color = '#F06543';
              e.currentTarget.style.background = 'rgba(0, 201, 212, 0.12)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(0, 201, 212, 0.2)';
              e.currentTarget.style.color = '#c8dff0';
              e.currentTarget.style.background = '#e2e8f0';
            }}
            aria-label="Previous destinations"
          >
            ←
          </button>

          <button
            onClick={() => handleScroll('right')}
            style={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              background: '#e2e8f0',
              border: '1px solid rgba(0, 201, 212, 0.2)',
              color: '#c8dff0',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 16,
              transition: 'all 0.2s ease',
              outline: 'none',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(0, 201, 212, 0.5)';
              e.currentTarget.style.color = '#F06543';
              e.currentTarget.style.background = 'rgba(0, 201, 212, 0.12)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(0, 201, 212, 0.2)';
              e.currentTarget.style.color = '#c8dff0';
              e.currentTarget.style.background = '#e2e8f0';
            }}
            aria-label="Next destinations"
          >
            →
          </button>
        </div>
      </div>

      {/* Horizontal Cards Scroll Track */}
      <div
        ref={scrollRef}
        style={{
          display: 'grid',
          gridAutoFlow: 'column',
          gridAutoColumns: 'clamp(280px, 28vw, 340px)',
          gap: 20,
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          paddingBottom: 24,
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {destinations.map((dest, idx) => (
          <div key={`${dest.id || dest.slug || 'dest'}-${idx}`} style={{ scrollSnapAlign: 'start' }}>
            <DestinationCard destination={dest} onSelect={onSelectDestination} />
          </div>
        ))}
      </div>
    </div>
  );
}
