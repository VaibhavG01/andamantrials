// src/components/destinations/DestinationStats.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Quick stats grid for featured destination — Best Season, Famous For, Experience, Ideal Stay.

export default function DestinationStats({ destination }) {
  if (!destination) return null;

  const stats = [
    { icon: '🌊', label: 'Best Season', value: destination.bestSeason || 'Oct – May' },
    { icon: '🏝️', label: 'Famous For', value: destination.famousFor || 'Pristine Beaches' },
    { icon: '🤿', label: 'Experience', value: destination.activities?.[0] || 'Scuba Diving' },
    { icon: '⏱️', label: 'Ideal Stay', value: destination.idealStay || '3 – 4 Days' },
  ];

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
        gap: 12,
        margin: '24px 0',
      }}
    >
      {stats.map((s) => (
        <div
          key={s.label}
          style={{
            background: '#e2e8f0',
            border: '1px solid rgba(0, 201, 212, 0.15)',
            borderRadius: 14,
            padding: '12px 14px',
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            transition: 'border-color 0.2s, background 0.2s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = 'rgba(0, 201, 212, 0.35)';
            e.currentTarget.style.background = 'rgba(0, 201, 212, 0.06)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'rgba(0, 201, 212, 0.15)';
            e.currentTarget.style.background = '#e2e8f0';
          }}
        >
          <span style={{ fontSize: 18, flexShrink: 0 }}>{s.icon}</span>
          <div>
            <div style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 12.5,
              fontWeight: 700,
              color: '#64748b',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}>
              {s.label}
            </div>
            <div style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 11.5,
              fontWeight: 700,
              color: '#334155',
              lineHeight: 1.2,
              marginTop: 2,
            }}>
              {s.value}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
