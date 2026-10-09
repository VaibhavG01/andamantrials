// src/components/trust/TrustVisual.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Cinematic Andaman Visual Component — aerial island visual with floating badges.

export default function TrustVisual() {
  return (
    <div
      style={{
        position: 'relative',
        borderRadius: 20,
        overflow: 'hidden',
        minHeight: 340,
        height: '100%',
        boxShadow: '0 16px 48px rgba(0, 0, 0, 0.6)',
        border: '1px solid #e2e8f0',
      }}
    >
      {/* High-res Aerial Island Visual */}
      <img
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80"
        alt="Andaman Islands Cinematic Experience"
        style={{
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
          background: 'linear-gradient(to top, #f8fafc 0%, transparent 60%)',
        }}
      />

      {/* Top Floating Badge */}
      <div
        style={{
          position: 'absolute',
          top: 16,
          left: 16,
          background: 'rgba(255, 255, 255, 0.92)',
          backdropFilter: 'blur(12px)',
          border: '1.5px solid rgba(240, 101, 67, 0.35)',
          borderRadius: 20,
          padding: '6px 14px',
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          boxShadow: '0 4px 14px rgba(0, 0, 0, 0.1)',
        }}
      >
        <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12.5, fontWeight: 800, color: '#F06543', letterSpacing: '0.1em' }}>
          TRUSTED ANDAMAN EXPERTS
        </span>
      </div>

      {/* Bottom Floating Stats Badge */}
      <div
        style={{
          position: 'absolute',
          bottom: 16,
          left: 16,
          right: 16,
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(16px)',
          border: '1.5px solid #EBDED2',
          borderRadius: 16,
          padding: '12px 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxShadow: '0 10px 25px rgba(11, 37, 69, 0.08)',
        }}
      >
        <div>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 900, color: '#F06543' }}>
            50,000+
          </div>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12.5, color: '#5C6F84', fontWeight: 600 }}>
            Happy Island Travelers
          </div>
        </div>

        <div style={{ display: 'flex', gap: 4 }}>
          <span style={{ color: '#F06543', fontSize: 12 }}>★★★★★</span>
        </div>
      </div>
    </div>
  );
}
