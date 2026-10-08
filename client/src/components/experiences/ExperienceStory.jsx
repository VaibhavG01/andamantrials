// src/components/experiences/ExperienceStory.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Emotional Visual Storytelling Block — "SOME MEMORIES AREN'T MEANT TO STAY ON YOUR CAMERA ROLL."

import { ArrowRightIcon } from '../navbar/NavIcons';

export default function ExperienceStory({ onPlanTrip }) {
  return (
    <div
      style={{
        maxWidth: 1280,
        margin: '0 auto 64px',
        padding: '0 20px',
      }}
    >
      <div
        style={{
          position: 'relative',
          borderRadius: 28,
          overflow: 'hidden',
          minHeight: 380,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.7)',
          border: '1px solid rgba(0, 201, 212, 0.25)',
        }}
      >
        {/* High-res Underwater Background Image */}
        <img
          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1600&q=85"
          alt="Andaman Underwater Ocean Experience"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />

        {/* Dark Vignette Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at center, rgba(2,8,20,0.6) 0%, rgba(2,8,20,0.92) 100%)',
          }}
        />

        {/* Content Box */}
        <div style={{ position: 'relative', zIndex: 10, maxWidth: 760, padding: '40px 24px' }}>
          <div style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 11,
            fontWeight: 800,
            letterSpacing: '0.25em',
            color: '#F06543',
            marginBottom: 12,
            textTransform: 'uppercase',
          }}>
            MEMORIES THAT LAST FOREVER
          </div>

          <h2 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(28px, 4vw, 52px)',
            fontWeight: 600,
            color: '#334155',
            lineHeight: 1.1,
            marginBottom: 16,
            letterSpacing: '-0.01em',
          }}>
            SOME MEMORIES AREN&apos;T MEANT TO STAY ON YOUR CAMERA ROLL.
          </h2>

          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(14px, 1.2vw, 17px)',
            fontStyle: 'italic',
            fontWeight: 300,
            color: '#00b4d8',
            marginBottom: 28,
            lineHeight: 1.6,
          }}>
            Dive deeper. Wander farther. Feel the islands beyond the postcard.
          </p>

          <button
            onClick={onPlanTrip}
            style={{
              background: 'linear-gradient(135deg, #F06543 0%, #00b4d8 100%)',
              border: 'none',
              color: '#050d1a',
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 12,
              fontWeight: 800,
              padding: '13px 32px',
              borderRadius: 30,
              cursor: 'pointer',
              letterSpacing: '0.08em',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              boxShadow: '0 8px 30px rgba(0, 201, 212, 0.45)',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 201, 212, 0.65)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 201, 212, 0.45)';
            }}
          >
            <span>PLAN YOUR EXPERIENCE</span>
            <ArrowRightIcon size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
