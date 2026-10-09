// src/components/packages/PackageFilter.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Horizontal Package Filter Bar — category selection with turquoise indicator.

const PACKAGE_FILTER_OPTIONS = [
  { id: 'ALL', label: 'ALL PACKAGES' },
  { id: 'HONEYMOON', label: 'HONEYMOON' },
  { id: 'FAMILY', label: 'FAMILY' },
  { id: 'ADVENTURE', label: 'ADVENTURE' },
  { id: 'LUXURY', label: 'LUXURY' },
  { id: 'BUDGET', label: 'BUDGET' },
];

export default function PackageFilter({ activeFilter, onSelectFilter }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 'clamp(6px, 1.2vw, 18px)',
        flexWrap: 'wrap',
        marginBottom: 48,
        padding: '0 16px',
      }}
    >
      {PACKAGE_FILTER_OPTIONS.map((opt) => {
        const isActive = activeFilter === opt.id;
        return (
          <button
            key={opt.id}
            onClick={() => onSelectFilter(opt.id)}
            style={{
              background: isActive
                ? '#051428'
                : 'rgba(5, 20, 40, 0.05)',
              border: isActive
                ? '1px solid #F06543'
                : '1px solid rgba(5, 20, 40, 0.12)',
              color: isActive ? '#00b4d8' : '#4a657c',
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
              boxShadow: isActive ? '0 6px 20px rgba(0, 201, 212, 0.25)' : 'none',
            }}
            onMouseEnter={e => {
              if (!isActive) {
                e.currentTarget.style.color = '#051428';
                e.currentTarget.style.borderColor = 'rgba(0, 201, 212, 0.4)';
              }
            }}
            onMouseLeave={e => {
              if (!isActive) {
                e.currentTarget.style.color = '#4a657c';
                e.currentTarget.style.borderColor = 'rgba(5, 20, 40, 0.12)';
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
