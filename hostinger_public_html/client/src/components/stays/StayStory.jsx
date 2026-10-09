// src/components/stays/StayStory.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Editorial Visual Storytelling Block — "YOUR ROOM SHOULD BE PART OF THE JOURNEY."

import { ArrowRightIcon } from '../navbar/NavIcons';

export default function StayStory() {
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
          boxShadow: '0 20px 60px rgba(5, 20, 40, 0.1)',
          border: '1px solid rgba(0, 201, 212, 0.25)',
        }}
      >
        {/* High-res Luxury Island Resort Background Image */}
        <img
          src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1600&q=85"
          alt="Luxury Island Resort Andaman"
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
            background: 'radial-gradient(ellipse at center, rgba(5,20,40,0.65) 0%, rgba(5,20,40,0.92) 100%)',
          }}
        />

        {/* Content Box */}
        <div style={{ position: 'relative', zIndex: 10, maxWidth: 760, padding: '40px 24px', color: '#334155' }}>
          <div style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 11,
            fontWeight: 800,
            letterSpacing: '0.25em',
            color: '#F06543',
            marginBottom: 12,
            textTransform: 'uppercase',
          }}>
            PARADISE UNLOCKED
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
            YOUR ROOM SHOULD BE PART OF THE JOURNEY.
          </h2>

          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(14px, 1.2vw, 17px)',
            fontWeight: 300,
            color: '#c8dff0',
            marginBottom: 28,
            lineHeight: 1.6,
          }}>
            Fall asleep to the sound of waves. Wake up surrounded by tropical greens. Step outside and find the ocean waiting.
          </p>

          <a
            href="#all-stays"
            style={{
              background: 'linear-gradient(135deg, #F06543 0%, #00b4d8 100%)',
              border: 'none',
              color: '#050d1a',
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 12,
              fontWeight: 800,
              padding: '13px 32px',
              borderRadius: 30,
              textDecoration: 'none',
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
            <span>EXPLORE ALL STAYS</span>
            <ArrowRightIcon size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
