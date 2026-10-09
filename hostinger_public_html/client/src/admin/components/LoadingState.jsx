import React from 'react';
import { Loader2 } from 'lucide-react';

export default function LoadingState({ message = 'Loading dataset...' }) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '60px 24px',
      gap: 14,
    }}>
      <Loader2 size={32} color="#F06543" className="animate-spin" style={{ animation: 'spin 1s linear infinite' }} />
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
      <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 700, color: '#64748b', letterSpacing: '0.08em' }}>
        {message.toUpperCase()}
      </span>
    </div>
  );
}
