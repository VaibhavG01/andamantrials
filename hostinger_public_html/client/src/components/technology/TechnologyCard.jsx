// src/components/technology/TechnologyCard.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Compact glass card component for individual technology item with Lucide Icons.

import React from 'react';
import {
  Code2,
  Box,
  Zap,
  Sparkles,
  Palette,
  Server,
  Rocket,
  Database,
  RefreshCw,
  Cloud,
  Archive,
  Lock,
  Cpu,
  Globe,
  Compass,
  Anchor,
  Layers,
} from 'lucide-react';

function getLucideIcon(iconType, color = '#F06543') {
  const props = { size: 20, color, strokeWidth: 2 };
  switch (iconType) {
    case 'react': return <Code2 {...props} />;
    case 'cube': return <Box {...props} />;
    case 'zap': return <Zap {...props} />;
    case 'sparkles': return <Sparkles {...props} />;
    case 'palette': return <Palette {...props} />;
    case 'server': return <Server {...props} />;
    case 'rocket': return <Rocket {...props} />;
    case 'database': return <Database {...props} />;
    case 'refresh': return <RefreshCw {...props} />;
    case 'cloud': return <Cloud {...props} />;
    case 'archive': return <Archive {...props} />;
    case 'lock': return <Lock {...props} />;
    case 'cpu': return <Cpu {...props} />;
    case 'globe': return <Globe {...props} />;
    case 'compass': return <Compass {...props} />;
    case 'anchor': return <Anchor {...props} />;
    default: return <Layers {...props} />;
  }
}

export default function TechnologyCard({ item }) {
  const { name, purpose, iconType, accent } = item;

  return (
    <div
      className="tech-card transition-all duration-300"
      style={{
        background: '#ffffff',
        border: '1.5px solid #e2e8f0',
        borderRadius: '16px',
        padding: '14px 16px',
        display: 'flex',
        alignItems: 'center',
        gap: '14px',
        cursor: 'default',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 2px 8px rgba(0, 45, 98, 0.04)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-3px)';
        e.currentTarget.style.borderColor = '#F06543';
        e.currentTarget.style.boxShadow = '0 10px 24px rgba(0, 45, 98, 0.08)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.borderColor = '#e2e8f0';
        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 45, 98, 0.04)';
      }}
    >
      {/* Icon Box */}
      <div
        style={{
          width: '42px',
          height: '42px',
          borderRadius: '12px',
          background: '#FFF0EB',
          border: '1px solid rgba(13, 148, 136, 0.25)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          transition: 'all 0.3s ease',
          color: '#F06543',
        }}
      >
        {getLucideIcon(iconType, '#F06543')}
      </div>

      {/* Info */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <h4
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '14px',
            fontWeight: 800,
            color: '#0B2545',
            letterSpacing: '0.02em',
            marginBottom: '2px',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {name}
        </h4>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '12.5px',
            fontWeight: 400,
            color: '#64748b',
            lineHeight: 1.2,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {purpose}
        </p>
      </div>

      {/* Corner Accent Dot */}
      <div
        style={{
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          backgroundColor: '#F06543',
          opacity: 0.8,
        }}
      />
    </div>
  );
}
