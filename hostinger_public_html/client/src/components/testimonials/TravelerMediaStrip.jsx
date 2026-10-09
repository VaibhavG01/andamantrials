// src/components/testimonials/TravelerMediaStrip.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Compact Horizontal Traveler Media Strip — clickable thumbnails to switch stories.

export default function TravelerMediaStrip({ testimonials, activeIndex, onSelectIndex }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        overflowX: 'auto',
        paddingTop: 16,
        scrollbarWidth: 'none',
      }}
    >
      <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12.5, fontWeight: 700, color: '#64748b', letterSpacing: '0.1em', whiteSpace: 'nowrap' }}>
        FEATURED STORIES:
      </span>

      {testimonials.map((item, idx) => {
        const isActive = activeIndex === idx;
        return (
          <div
            key={item.id}
            onClick={() => onSelectIndex(idx)}
            style={{
              position: 'relative',
              width: 90,
              height: 60,
              borderRadius: 12,
              overflow: 'hidden',
              cursor: 'pointer',
              border: isActive ? '2px solid #F06543' : '1px solid #e2e8f0',
              opacity: isActive ? 1 : 0.65,
              transition: 'all 0.25s ease',
              flexShrink: 0,
            }}
          >
            <img src={item.videoThumbnail} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #f8fafc 0%, transparent 60%)' }} />
            <div style={{ position: 'absolute', bottom: 4, left: 6, right: 6, fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, fontWeight: 700, color: '#334155', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {item.name.split(' ')[0]}
            </div>
          </div>
        );
      })}
    </div>
  );
}
