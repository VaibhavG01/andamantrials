// src/pages/dashboard/Itinerary.jsx
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import TripTimeline from '../../components/dashboard/TripTimeline';

export default function Itinerary({ onBack }) {
  return (
    <div>
      <button
        onClick={onBack}
        style={{
          fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 800,
          color: '#F06543', background: '#FFF0EB',
          border: '1px solid #FFD3C4', padding: '6px 14px',
          borderRadius: 20, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 6,
          marginBottom: 16,
        }}
      >
        <ArrowLeft size={12} /> Back to Dashboard
      </button>

      <TripTimeline />
    </div>
  );
}
