// src/components/destinations/DestinationFilter.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Horizontal destination filter bar — category selection with turquoise indicator.

const FILTER_OPTIONS = [
  { id: 'ALL', label: 'ALL ISLANDS' },
  { id: 'SOUTH ANDAMAN', label: 'SOUTH ANDAMAN' },
  { id: 'MIDDLE ANDAMAN', label: 'MIDDLE ANDAMAN' },
  { id: 'NORTH ANDAMAN', label: 'NORTH ANDAMAN' },
  { id: 'ISLAND ESCAPES', label: 'ISLAND ESCAPES' },
];

export default function DestinationFilter({ activeFilter, onSelectFilter }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 'clamp(8px, 1.5vw, 24px)',
        flexWrap: 'wrap',
        marginBottom: 48,
        padding: '0 16px',
      }}
    >
      {FILTER_OPTIONS.map((opt) => {
        const isActive = activeFilter === opt.id;
        return (
          <button
            key={opt.id}
            onClick={() => onSelectFilter(opt.id)}
            style={{
              background: isActive
                ? 'rgba(0, 201, 212, 0.12)'
                : '#e2e8f0',
              border: isActive
                ? '1px solid rgba(0, 201, 212, 0.4)'
                : '1px solid #e2e8f0',
              color: isActive ? '#00b4d8' : '#8aa0b8',
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 11.5,
              fontWeight: isActive ? 800 : 600,
              padding: '10px 20px',
              borderRadius: 30,
              cursor: 'pointer',
              letterSpacing: '0.08em',
              transition: 'all 0.25s ease',
              position: 'relative',
              outline: 'none',
              boxShadow: isActive ? '0 4px 18px rgba(0, 201, 212, 0.25)' : 'none',
            }}
            onMouseEnter={e => {
              if (!isActive) {
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.borderColor = 'rgba(0, 201, 212, 0.25)';
              }
            }}
            onMouseLeave={e => {
              if (!isActive) {
                e.currentTarget.style.color = '#8aa0b8';
                e.currentTarget.style.borderColor = '#e2e8f0';
              }
            }}
          >
            {opt.label}

            {/* Active Indicator Underline */}
            {isActive && (
              <div
                style={{
                  position: 'absolute',
                  bottom: -2,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '60%',
                  height: 2,
                  background: 'linear-gradient(90deg, #F06543, #00b4d8)',
                  borderRadius: 2,
                  boxShadow: '0 0 8px #F06543',
                }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}
