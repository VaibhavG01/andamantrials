// src/components/experiences/ExperienceFilter.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Horizontal Experience Category Navigation Bar — active state & smooth transitions.

const EXPERIENCE_FILTER_OPTIONS = [
  { id: 'ALL', label: 'ALL EXPERIENCES' },
  { id: 'SCUBA', label: 'SCUBA & DIVING' },
  { id: 'WATERSPORTS', label: 'WATER ADVENTURE' },
  { id: 'NATURE', label: 'ECO & MANGROVES' },
  { id: 'ISLAND_HOPPING', label: 'ISLAND HOPPING' },
  { id: 'CRUISES', label: 'SUNSET CRUISES' },
];

export default function ExperienceFilter({ activeFilter, onSelectFilter }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 'clamp(6px, 1.2vw, 16px)',
        flexWrap: 'wrap',
        marginBottom: 48,
        padding: '0 16px',
      }}
    >
      {EXPERIENCE_FILTER_OPTIONS.map((opt) => {
        const isActive = activeFilter === opt.id;
        return (
          <button
            key={opt.id}
            onClick={() => onSelectFilter(opt.id)}
            style={{
              background: isActive
                ? 'rgba(0, 201, 212, 0.15)'
                : '#e2e8f0',
              border: isActive
                ? '1px solid rgba(0, 201, 212, 0.45)'
                : '1px solid #e2e8f0',
              color: isActive ? '#00b4d8' : '#8aa0b8',
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 11,
              fontWeight: isActive ? 800 : 600,
              padding: '9px 18px',
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
