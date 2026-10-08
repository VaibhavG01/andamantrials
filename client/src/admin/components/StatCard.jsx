import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

export default function StatCard({ title, value, change, comparison = 'vs previous period', icon: Icon, color = '#F06543', onClick }) {
  const isPositive = !change || change.startsWith('+');

  return (
    <div
      onClick={onClick}
      style={{
        background: '#ffffff',
        backdropFilter: 'blur(16px)',
        border: '1px solid #e2e8f0',
        borderRadius: 20,
        padding: '20px 22px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.35)',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'transform 0.2s ease, border-color 0.2s ease',
      }}
      onMouseEnter={(e) => {
        if (onClick) {
          e.currentTarget.style.transform = 'translateY(-3px)';
          e.currentTarget.style.borderColor = 'rgba(22, 217, 255, 0.4)';
        }
      }}
      onMouseLeave={(e) => {
        if (onClick) {
          e.currentTarget.style.transform = 'none';
          e.currentTarget.style.borderColor = '#e2e8f0';
        }
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
        <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 800, color: '#627d8a', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          {title}
        </span>
        <div style={{
          width: 36,
          height: 36,
          borderRadius: 12,
          background: `${color}18`,
          border: `1px solid ${color}33`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: color,
        }}>
          {Icon && <Icon size={18} />}
        </div>
      </div>

      <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 26, fontWeight: 900, color: '#334155', letterSpacing: '-0.02em', marginBottom: 8 }}>
        {value}
      </div>

      {change && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11.5, fontFamily: "'Inter', sans-serif" }}>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 2,
            fontWeight: 700,
            color: isPositive ? '#F06543' : '#ff4f7b',
            background: isPositive ? 'rgba(33, 230, 193, 0.12)' : 'rgba(255, 79, 123, 0.12)',
            padding: '2px 8px',
            borderRadius: 12,
          }}>
            {isPositive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
            {change}
          </span>
          <span style={{ color: '#627d8a' }}>{comparison}</span>
        </div>
      )}
    </div>
  );
}
