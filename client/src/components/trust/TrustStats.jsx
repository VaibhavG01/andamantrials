import React from 'react';

const DEFAULT_TRUST_STATS = [
  { value: '15+', label: 'Years Experience' },
  { value: '50K+', label: 'Happy Travelers' },
  { value: '4.9★', label: 'Google Rating' },
  { value: '4.8★', label: 'Tripadvisor' },
];

export default function TrustStats({ stats = DEFAULT_TRUST_STATS }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
        gap: 12,
        marginTop: 24,
      }}
    >
      {stats.map((stat, idx) => (
        <div
          key={idx}
          style={{
            background: '#FAF4EE',
            border: '1.5px solid #EBDED2',
            borderRadius: 14,
            padding: '12px 16px',
            textAlign: 'center',
          }}
        >
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 20, fontWeight: 900, color: '#F06543' }}>
            {stat.value}
          </div>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12.5, color: '#5C6F84', marginTop: 2, fontWeight: 500 }}>
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
