// src/components/technology/TechnologyCategory.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Technology Category group component rendering cards in a responsive grid.

import React from 'react';
import TechnologyCard from './TechnologyCard';

export default function TechnologyCategory({ category }) {
  const { title, subtitle, items } = category;

  return (
    <div
      className="tech-category-group"
      style={{
        background: '#f8fafc',
        border: '1px solid #e2e8f0',
        borderRadius: '20px',
        padding: '20px',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      {/* Category Header */}
      <div style={{ marginBottom: '14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '13.5px',
              fontWeight: 800,
              color: '#0B2545',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
            }}
          >
            {title}
          </span>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '13px',
              color: '#64748b',
              marginTop: '2px',
            }}
          >
            {subtitle}
          </p>
        </div>
        <span
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '12px',
            fontWeight: 800,
            color: '#F06543',
            background: '#FFF0EB',
            padding: '4px 10px',
            borderRadius: '12px',
            border: '1px solid rgba(13, 148, 136, 0.25)',
          }}
        >
          {items.length} MODULES
        </span>
      </div>

      {/* Cards Grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3"
      >
        {items.map((item) => (
          <TechnologyCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
