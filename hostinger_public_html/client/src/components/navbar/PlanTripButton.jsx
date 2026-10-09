// src/components/navbar/PlanTripButton.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Ocean turquoise CTA button — rounded pill, glow, hover lift, arrow slide.

import { ArrowRightIcon } from './NavIcons';

export default function PlanTripButton({ onClick, compact = false }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        background: 'linear-gradient(135deg, #ff6b4a 0%, #fa6847 50%, #f06543 100%)',
        border: 'none',
        color: '#ffffff',
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: compact ? 10.5 : 12,
        fontWeight: 800,
        padding: compact ? '8px 18px' : '11px 24px',
        borderRadius: 9999,
        cursor: 'pointer',
        letterSpacing: '0.06em',
        transition: 'all 0.25s ease',
        boxShadow: '0 6px 20px rgba(240, 101, 67, 0.4)',
        whiteSpace: 'nowrap',
        outline: 'none',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 10px 28px rgba(240, 101, 67, 0.55), 0 0 16px rgba(255, 107, 74, 0.35)';
        const svg = e.currentTarget.querySelector('svg');
        if (svg) svg.style.transform = 'translateX(4px)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 6px 20px rgba(240, 101, 67, 0.4)';
        const svg = e.currentTarget.querySelector('svg');
        if (svg) svg.style.transform = 'translateX(0)';
      }}
      aria-label="Plan Your Trip"
    >
      <span>PLAN YOUR TRIP</span>
      <ArrowRightIcon size={14} className="transition-transform duration-200" />
    </button>
  );
}
