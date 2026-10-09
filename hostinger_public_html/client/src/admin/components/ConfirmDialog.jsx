import React from 'react';
import { AlertTriangle, X } from 'lucide-react';

export default function ConfirmDialog({
  isOpen,
  title = 'Delete Confirmation',
  message = 'Are you sure you want to delete this item? This action cannot be undone.',
  confirmText = 'DELETE',
  cancelText = 'CANCEL',
  onConfirm,
  onCancel,
}) {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 2000,
      background: 'rgba(2, 11, 18, 0.85)',
      backdropFilter: 'blur(12px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 16,
    }}>
      <div style={{
        width: '100%',
        maxWidth: 420,
        background: '#ffffff',
        border: '1.5px solid rgba(255, 79, 123, 0.3)',
        borderRadius: 24,
        padding: 28,
        boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9)',
        position: 'relative',
      }}>
        <button
          onClick={onCancel}
          style={{ position: 'absolute', right: 18, top: 18, background: 'none', border: 'none', color: '#64748b', cursor: 'pointer' }}
        >
          <X size={18} />
        </button>

        <div style={{
          width: 48,
          height: 48,
          borderRadius: 16,
          background: 'rgba(255, 79, 123, 0.15)',
          border: '1px solid rgba(255, 79, 123, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#ff4f7b',
          marginBottom: 16,
        }}>
          <AlertTriangle size={24} />
        </div>

        <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 18, fontWeight: 800, color: '#0B2545', margin: '0 0 8px' }}>
          {title}
        </h3>

        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#64748b', margin: '0 0 24px', lineHeight: 1.5 }}>
          {message}
        </p>

        <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end' }}>
          <button
            onClick={onCancel}
            style={{
              background: '#e2e8f0',
              border: '1px solid #e2e8f0',
              color: '#334155',
              padding: '9px 20px',
              borderRadius: 14,
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 11,
              fontWeight: 800,
              cursor: 'pointer',
            }}
          >
            {cancelText}
          </button>

          <button
            onClick={onConfirm}
            style={{
              background: 'linear-gradient(135deg, #ff4f7b, #ff6b6b)',
              border: 'none',
              color: '#334155',
              padding: '9px 20px',
              borderRadius: 14,
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 11,
              fontWeight: 900,
              cursor: 'pointer',
              boxShadow: '0 6px 20px rgba(255, 79, 123, 0.3)',
            }}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}
