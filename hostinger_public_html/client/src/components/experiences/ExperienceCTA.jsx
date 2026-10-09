// src/components/experiences/ExperienceCTA.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Bottom Section CTA Component — "EXPLORE ALL EXPERIENCES →".

import { ArrowRightIcon } from '../navbar/NavIcons';

export default function ExperienceCTA() {
  return (
    <div style={{ textAlign: 'center', padding: '10px 0 0' }}>
      <a
        href="#all-experiences"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 10,
          color: '#334155',
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 13,
          fontWeight: 800,
          letterSpacing: '0.12em',
          textDecoration: 'none',
          padding: '12px 28px',
          borderRadius: 30,
          background: 'rgba(5, 18, 40, 0.65)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(0, 201, 212, 0.35)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
          transition: 'all 0.25s ease',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = 'rgba(0, 201, 212, 0.7)';
          e.currentTarget.style.color = '#F06543';
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 201, 212, 0.25)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = 'rgba(0, 201, 212, 0.35)';
          e.currentTarget.style.color = '#ffffff';
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.5)';
        }}
      >
        <span>EXPLORE ALL EXPERIENCES</span>
        <ArrowRightIcon size={16} />
      </a>
    </div>
  );
}
