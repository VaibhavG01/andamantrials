// src/components/stays/StayIntro.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Section 06 Intro Header — Eyebrow, Editorial Heading, Subtitle & Divider.

export default function StayIntro() {
  return (
    <div style={{ textAlign: 'center', maxWidth: 840, margin: '0 auto 44px', padding: '0 20px' }}>
      {/* Eyebrow */}
      <div
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 11,
          fontWeight: 800,
          letterSpacing: '0.25em',
          color: '#00a3ad',
          marginBottom: 12,
          textTransform: 'uppercase',
        }}
      >
        STAY IN PARADISE
      </div>

      {/* Main Heading */}
      <h2
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 'clamp(32px, 4.5vw, 64px)',
          fontWeight: 600,
          color: '#051428',
          lineHeight: 1.05,
          letterSpacing: '-0.01em',
          marginBottom: 16,
        }}
      >
        WAKE UP TO THE ISLANDS
      </h2>

      {/* Supporting text */}
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 'clamp(13px, 1.1vw, 16px)',
          fontWeight: 400,
          color: '#4a657c',
          lineHeight: 1.65,
          maxWidth: 640,
          margin: '0 auto 24px',
        }}
      >
        From beachfront villas to hidden tropical retreats, find a stay that makes your Andaman journey even more unforgettable.
      </p>

      {/* Animated line/divider */}
      <div
        style={{
          width: 80,
          height: 2,
          background: 'linear-gradient(90deg, transparent, #F06543, #00b4d8, transparent)',
          margin: '0 auto',
          borderRadius: 2,
        }}
      />
    </div>
  );
}
