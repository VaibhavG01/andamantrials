// src/components/trust/TrustBenefit.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Mini Benefit Card Component — Lucide Vector Icons, title, description & hover glow.

import { useState } from 'react';
import { Users, Tag, Headphones, Sliders, ShieldCheck, Star } from 'lucide-react';

function getTrustLucideIcon(iconType, color = '#F06543') {
  const props = { size: 18, color, strokeWidth: 2 };
  switch (iconType) {
    case 'users': return <Users {...props} />;
    case 'tag': return <Tag {...props} />;
    case 'headphones': return <Headphones {...props} />;
    case 'sliders': return <Sliders {...props} />;
    case 'shield': return <ShieldCheck {...props} />;
    case 'star': return <Star {...props} />;
    default: return <ShieldCheck {...props} />;
  }
}

export default function TrustBenefit({ benefit }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? '#FFF0EB' : '#FAF4EE',
        border: hovered ? '1.5px solid #F06543' : '1.5px solid #EBDED2',
        borderRadius: 14,
        padding: 14,
        transition: 'all 0.25s ease',
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
        boxShadow: hovered ? '0 10px 24px rgba(240, 101, 67, 0.15)' : '0 2px 8px rgba(11, 37, 69, 0.03)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
        <div style={{
          width: 32,
          height: 32,
          borderRadius: 8,
          background: 'rgba(240, 101, 67, 0.1)',
          border: '1px solid rgba(240, 101, 67, 0.25)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          {getTrustLucideIcon(benefit.iconType, benefit.accentColor)}
        </div>
        <h5 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, fontWeight: 800, color: hovered ? '#F06543' : '#0B2545', letterSpacing: '0.04em', margin: 0 }}>
          {benefit.title}
        </h5>
      </div>
      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#5C6F84', lineHeight: 1.4, margin: 0 }}>
        {benefit.description}
      </p>
    </div>
  );
}
