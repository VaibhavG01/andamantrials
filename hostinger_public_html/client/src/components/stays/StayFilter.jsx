// src/components/stays/StayFilter.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Stay Filter Bar — Category navigation & Destination selector pills.

const STAY_FILTER_OPTIONS = [
  { id: 'ALL', label: 'ALL STAYS' },
  { id: 'LUXURY', label: 'LUXURY RESORTS' },
  { id: 'BEACHFRONT', label: 'BEACHFRONT VILLAS' },
  { id: 'BOUTIQUE', label: 'BOUTIQUE HOTELS' },
  { id: 'BUDGET', label: 'ECO COTTAGES' },
];

const STAY_DESTINATION_OPTIONS = [
  { id: 'ALL', label: 'ALL ISLANDS' },
  { id: 'havelock', label: 'HAVELOCK ISLAND' },
  { id: 'neil', label: 'NEIL ISLAND' },
  { id: 'port-blair', label: 'PORT BLAIR' },
  { id: 'baratang', label: 'BARATANG' },
  { id: 'diglipur', label: 'DIGLIPUR' },
];

export default function StayFilter({
  activeCategory,
  onSelectCategory,
  activeDestination,
  onSelectDestination,
}) {
  return (
    <div style={{ marginBottom: 48, padding: '0 16px' }}>
      {/* Category Tabs */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 'clamp(6px, 1.2vw, 16px)',
          flexWrap: 'wrap',
          marginBottom: 16,
        }}
      >
        {STAY_FILTER_OPTIONS.map((opt) => {
          const isActive = activeCategory === opt.id;
          return (
            <button
              key={opt.id}
              onClick={() => onSelectCategory(opt.id)}
              style={{
                background: isActive ? '#051428' : 'rgba(5, 20, 40, 0.05)',
                border: isActive ? '1px solid #F06543' : '1px solid rgba(5, 20, 40, 0.12)',
                color: isActive ? '#00b4d8' : '#4a657c',
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
            >
              {opt.label}
              {isActive && (
                <div
                  style={{
                    position: 'absolute', bottom: -2, left: '50%', transform: 'translateX(-50%)',
                    width: '60%', height: 2, background: 'linear-gradient(90deg, #F06543, #00b4d8)',
                    borderRadius: 2, boxShadow: '0 0 8px #F06543',
                  }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Destination Pills Selector */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
          flexWrap: 'wrap',
        }}
      >
        <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12.5, fontWeight: 700, color: '#64748b', letterSpacing: '0.1em', marginRight: 4 }}>
          FILTER DESTINATION:
        </span>
        {STAY_DESTINATION_OPTIONS.map((dest, idx) => {
          const isActive = activeDestination === dest.id;
          return (
            <button
              key={`${dest.id}-${idx}`}
              onClick={() => onSelectDestination(dest.id)}
              style={{
                background: isActive ? 'rgba(0, 201, 212, 0.15)' : 'transparent',
                border: isActive ? '1px solid #00a3ad' : '1px solid transparent',
                color: isActive ? '#00a3ad' : '#6a8aaa',
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 12.5,
                fontWeight: 700,
                padding: '4px 12px',
                borderRadius: 20,
                cursor: 'pointer',
                letterSpacing: '0.06em',
                transition: 'all 0.2s',
              }}
            >
              {dest.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
