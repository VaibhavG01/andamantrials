// src/components/packages/PackageAvailability.jsx
import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';

const DEPARTURE_SLOTS = [
  {
    season: 'PEAK SEASON (OCT – MAY)',
    statusText: '🟢 High Demand • Daily Departures Open',
    highlight: 'Crystal Clear Lagoons & 25m Underwater Scuba Visibility',
    startingFare: '₹18,500 / adult',
    slots: ['Immediate Confirmed Dates', 'Flexible Weekend Sailings', 'Custom Holiday Dates'],
    badge: 'BEST TRAVEL WINDOW',
  },
  {
    season: 'MONSOON TROPICAL ESCAPES (JUN – SEP)',
    statusText: '🟢 Green Lush Forests • Special 30% Off',
    highlight: 'Serene Rainforest Atmosphere, Empty Beaches & Luxury Pool Villas',
    startingFare: '₹13,999 / adult',
    slots: ['Daily Flights Available', 'Monsoon Special Discounts', 'Zero Crowd Experience'],
    badge: 'OFF-SEASON VALUE',
  },
];

export default function PackageAvailability({ onOpenCustomizer }) {
  return (
    <section className="pkg-avail-root">
      <style>{`
        .pkg-avail-root {
          max-width: 1340px;
          margin: 0 auto 80px;
          padding: 0 24px;
        }

        .pkg-avail-card {
          background: #ffffff;
          border: 2px solid #e2e8f0;
          border-radius: 32px;
          padding: 44px;
          box-shadow: 0 20px 60px rgba(0, 45, 98, 0.08);
        }
        @media (max-width: 768px) {
          .pkg-avail-card { padding: 24px; }
        }

        .pkg-avail-header {
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: 16px; margin-bottom: 32px;
          padding-bottom: 24px; border-bottom: 2px solid #f1f5f9;
        }

        .pkg-slots-grid {
          display: grid; grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        @media (max-width: 900px) {
          .pkg-slots-grid { grid-template-columns: 1fr; }
        }

        .pkg-slot-item {
          background: #f8fafc;
          border: 2px solid #e2e8f0;
          border-radius: 24px;
          padding: 28px;
          display: flex; flex-direction: column; justify-content: space-between;
          transition: all 0.3s ease;
        }
        .pkg-slot-item:hover {
          border-color: #F06543;
          background: #FFF0EB;
          box-shadow: 0 10px 30px rgba(13, 148, 136, 0.12);
        }
      `}</style>

      <div className="pkg-avail-card">
        <div className="pkg-avail-header">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF0EB] border border-[#F06543]/30 text-[#F06543] text-[11px] font-black uppercase tracking-widest font-mono mb-2">
              <Sparkles size={12} />
              <span>SEASONAL AVAILABILITY & SLOTS</span>
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 700, color: '#0B2545', margin: 0 }}>
              ALL-YEAR-ROUND DEPARTURE CALENDAR
            </h2>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, fontWeight: 800, color: '#F06543' }}>
            <ShieldCheck size={16} />
            <span>100% Instant Catamaran & Hotel Confirmation</span>
          </div>
        </div>

        <div className="pkg-slots-grid">
          {DEPARTURE_SLOTS.map((slot, idx) => (
            <div key={idx} className="pkg-slot-item">
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                  <span style={{ fontSize: 10.5, fontWeight: 900, color: '#F06543', fontFamily: "'Space Grotesk', sans-serif", background: '#ffffff', border: '1px solid #e2e8f0', padding: '4px 10px', borderRadius: 12 }}>
                    {slot.badge}
                  </span>
                  <span style={{ fontSize: 12, fontWeight: 800, color: '#0B2545', fontFamily: "'Space Grotesk', sans-serif" }}>
                    {slot.statusText}
                  </span>
                </div>

                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 17, fontWeight: 900, color: '#0B2545', margin: '0 0 8px' }}>
                  {slot.season}
                </h3>

                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#64748b', margin: '0 0 18px', lineHeight: 1.55, fontWeight: 500 }}>
                  {slot.highlight}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
                  {slot.slots.map((s, i) => (
                    <span key={i} style={{ background: '#ffffff', border: '1px solid #e2e8f0', color: '#0B2545', fontSize: 11.5, fontWeight: 700, padding: '4px 10px', borderRadius: 10, fontFamily: "'Inter', sans-serif" }}>
                      ✓ {s}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 18, borderTop: '1.5px solid #e2e8f0' }}>
                <div>
                  <span style={{ fontSize: 10, color: '#64748b', fontWeight: 800, textTransform: 'uppercase', display: 'block', fontFamily: "'Space Grotesk', sans-serif" }}>
                    Starting From
                  </span>
                  <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 17, fontWeight: 900, color: '#0B2545' }}>
                    {slot.startingFare}
                  </span>
                </div>

                <button
                  onClick={() => {
                    if (onOpenCustomizer) onOpenCustomizer();
                    else {
                      window.history.pushState({}, '', '/plan-trip');
                      window.dispatchEvent(new Event('popstate'));
                    }
                  }}
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 12,
                    fontWeight: 900,
                    color: '#ffffff',
                    background: 'linear-gradient(135deg, #FF6B4A, #F06543)',
                    border: 'none',
                    padding: '11px 22px',
                    borderRadius: 14,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    boxShadow: '0 4px 14px rgba(0, 45, 98, 0.25)',
                  }}
                >
                  <span>CHECK DEPARTURES</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
