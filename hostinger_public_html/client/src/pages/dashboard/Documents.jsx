// src/pages/dashboard/Documents.jsx
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import TravelDocuments from '../../components/dashboard/TravelDocuments';

export default function DocumentsPage({ onBack }) {
  return (
    <div>
      <button
        onClick={onBack}
        style={{
          fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 800,
          color: '#F06543', background: 'rgba(22, 217, 255, 0.1)',
          border: '1px solid rgba(22, 217, 255, 0.3)', padding: '6px 14px',
          borderRadius: 20, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 6,
          marginBottom: 16,
        }}
      >
        <ArrowLeft size={12} /> Back to Dashboard
      </button>

      <TravelDocuments />
    </div>
  );
}
