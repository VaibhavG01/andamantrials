import React from 'react';
import { FolderOpen } from 'lucide-react';

export default function EmptyState({
  title = 'No Data Found',
  message = 'No items match your current query or filters.',
  icon: Icon = FolderOpen,
  actionText,
  onAction,
}) {
  return (
    <div style={{
      background: '#ffffff',
      border: '1.5px dashed #e2e8f0',
      borderRadius: 24,
      padding: '48px 24px',
      textAlign: 'center',
      margin: '20px 0',
    }}>
      <div style={{
        width: 56,
        height: 56,
        borderRadius: 20,
        background: 'rgba(22, 217, 255, 0.1)',
        border: '1px solid rgba(22, 217, 255, 0.2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#F06543',
        margin: '0 auto 16px',
      }}>
        <Icon size={28} />
      </div>

      <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 18, fontWeight: 800, color: '#0B2545', margin: '0 0 8px' }}>
        {title}
      </h4>

      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#64748b', margin: '0 0 20px', maxWidth: 400, marginLeft: 'auto', marginRight: 'auto' }}>
        {message}
      </p>

      {actionText && onAction && (
        <button
          onClick={onAction}
          style={{
            background: 'linear-gradient(135deg, #FF6B4A, #F06543)',
            color: '#ffffff',
            border: 'none',
            padding: '10px 22px',
            borderRadius: 20,
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 11,
            fontWeight: 900,
            cursor: 'pointer',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            boxShadow: '0 6px 20px rgba(22, 217, 255, 0.3)',
          }}
        >
          {actionText}
        </button>
      )}
    </div>
  );
}
