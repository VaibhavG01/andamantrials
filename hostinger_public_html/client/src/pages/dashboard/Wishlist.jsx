// src/pages/dashboard/Wishlist.jsx
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import WishlistWidget from '../../components/dashboard/Wishlist';

export default function WishlistPage({ onBack }) {
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

      <WishlistWidget />
    </div>
  );
}
