import React, { useState } from 'react';
import { CheckCircle2, Circle, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

const DEFAULT_PREP_ITEMS = [
  { id: 'prep-1', label: 'Government Photo ID / Aadhaar / Passport uploaded', category: 'PERMITS', completed: true },
  { id: 'prep-2', label: 'Confirm Hotel & Beach Resort Check-in Vouchers', category: 'STAY', completed: true },
  { id: 'prep-3', label: 'Download Catamaran Fast-track Boarding E-Passes', category: 'FERRY', completed: false },
  { id: 'prep-4', label: 'Scuba Diving / Snorkeling Medical Self-Declaration', category: 'ACTIVITY', completed: false },
  { id: 'prep-5', label: 'Pack Reef-safe Sunscreen & Lightweight Tropical Wear', category: 'PACKING', completed: false },
];

export default function TripPreparation() {
  const [items, setItems] = useState(DEFAULT_PREP_ITEMS);

  const toggleItem = (id) => {
    setItems(prev => prev.map(item => item.id === id ? { ...item, completed: !item.completed } : item));
  };

  const completedCount = items.filter(i => i.completed).length;
  const percentage = Math.round((completedCount / items.length) * 100);

  return (
    <div className="dash-prep-card">
      <style>{`
        .dash-prep-card {
          background: #ffffff;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1.5px solid #ebded2;
          border-radius: 24px;
          padding: 28px 32px;
          margin-bottom: 28px;
          box-shadow: 0 16px 40px rgba(11, 37, 69, 0.08);
        }
        @media (max-width: 640px) {
          .dash-prep-card { padding: 20px; }
        }

        .dash-prep-hdr {
          display: flex; align-items: flex-end; justify-content: space-between;
          margin-bottom: 20px; flex-wrap: wrap; gap: 12px;
        }
        .dash-prep-sub {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 800; letter-spacing: 0.2em;
          color: #F06543; text-transform: uppercase;
          display: flex; align-items: center; gap: 6px; margin-bottom: 4px;
        }
        .dash-prep-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(24px, 3vw, 32px); font-weight: 600;
          color: #0B2545; margin: 0;
        }

        .dash-prep-track {
          width: 100%; height: 8px;
          background: #ebded2;
          border-radius: 8px; overflow: hidden; margin-bottom: 20px;
        }
        .dash-prep-fill {
          height: 100%;
          background: linear-gradient(90deg, #FF6B4A, #F06543);
          border-radius: 8px; box-shadow: 0 0 12px rgba(240, 101, 67, 0.4);
          transition: width 0.4s ease;
        }

        .dash-prep-list {
          display: flex; flex-direction: column; gap: 8px;
        }
        .dash-prep-item {
          display: flex; align-items: center; justify-content: space-between;
          background: #FAF4EE;
          border: 1px solid #ebded2;
          border-radius: 14px; padding: 12px 16px;
          cursor: pointer; transition: all 0.25s ease;
        }
        .dash-prep-item:hover {
          border-color: #FFD3C4;
          background: #FFF0EB;
        }
        .dash-prep-item.done {
          opacity: 0.75;
        }
      `}</style>

      {/* HEADER */}
      <div className="dash-prep-hdr">
        <div>
          <div className="dash-prep-sub">
            <Sparkles size={12} color="#F06543" />
            <span>TRAVEL READINESS</span>
          </div>
          <h3 className="dash-prep-title">Get Ready For Your Trip</h3>
        </div>

        <div style={{
          fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 900, color: '#F06543',
          background: '#FFF0EB', border: '1px solid #FFD3C4',
          padding: '6px 16px', borderRadius: 20,
        }}>
          {percentage}% COMPLETE ({completedCount}/{items.length})
        </div>
      </div>

      {/* PROGRESS TRACK */}
      <div className="dash-prep-track">
        <div className="dash-prep-fill" style={{ width: `${percentage}%` }} />
      </div>

      {/* CHECKLIST LIST */}
      <div className="dash-prep-list">
        {items.map(item => (
          <div
            key={item.id}
            className={`dash-prep-item${item.completed ? ' done' : ''}`}
            onClick={() => toggleItem(item.id)}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              {item.completed ? (
                <CheckCircle2 size={18} color="#F06543" />
              ) : (
                <Circle size={18} color="#94a3b8" />
              )}
              <span style={{
                fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 600,
                color: item.completed ? '#94a3b8' : '#0B2545',
                textDecoration: item.completed ? 'line-through' : 'none',
              }}>
                {item.label}
              </span>
            </div>

            <span style={{
              fontFamily: "'Space Grotesk', sans-serif", fontSize: 12.5, fontWeight: 800,
              color: '#F06543', background: '#FFF0EB',
              padding: '3px 9px', borderRadius: 10, border: '1px solid #FFD3C4',
            }}>
              {item.category}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
