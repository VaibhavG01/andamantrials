// src/components/destinations/DestinationStory.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Editorial Storytelling Block — "MORE THAN A DESTINATION, It's a feeling."

export default function DestinationStory() {
  return (
    <div
      style={{
        background: 'linear-gradient(135deg, rgba(0, 201, 212, 0.08) 0%, rgba(0, 229, 160, 0.05) 100%)',
        border: '1px solid rgba(0, 201, 212, 0.18)',
        borderRadius: 20,
        padding: '24px 28px',
        margin: '28px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative quotes background */}
      <div
        style={{
          position: 'absolute',
          top: -10,
          right: 20,
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 120,
          fontWeight: 700,
          color: 'rgba(0, 201, 212, 0.06)',
          lineHeight: 1,
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      >
        “
      </div>

      <div style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 12.5,
          fontWeight: 800,
          letterSpacing: '0.22em',
          color: '#F06543',
          marginBottom: 4,
          textTransform: 'uppercase',
        }}>
          MORE THAN A DESTINATION
        </div>

        <h4 style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 22,
          fontStyle: 'italic',
          fontWeight: 600,
          color: '#334155',
          marginBottom: 10,
          lineHeight: 1.2,
        }}>
          It&apos;s a feeling.
        </h4>

        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 12.5,
          fontWeight: 300,
          color: '#c8dff0',
          lineHeight: 1.65,
          margin: 0,
        }}>
          Wake up to turquoise waters, follow the rhythm of the waves, dive into another world and end the day beneath a tropical sunset.
        </p>
      </div>
    </div>
  );
}
