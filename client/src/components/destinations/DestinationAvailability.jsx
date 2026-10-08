// src/components/destinations/DestinationAvailability.jsx
import React, { useState } from 'react';
import { Ship, Clock, ArrowRight, CheckCircle2, ShieldCheck, Calendar, Sparkles } from 'lucide-react';

const FERRY_ROUTES = [
  {
    id: 'pb-havelock',
    route: 'Port Blair ⇄ Swaraj Dweep (Havelock)',
    duration: '90 Mins',
    vessel: 'Makruzz / Nautika Luxury Catamaran',
    timings: ['06:00 AM', '08:30 AM', '11:30 AM', '02:00 PM'],
    price: '₹1,499',
    status: 'AVAILABLE',
    statusText: '🟢 High Frequency Daily Sailings',
  },
  {
    id: 'havelock-neil',
    route: 'Swaraj Dweep (Havelock) ⇄ Shaheed Dweep (Neil)',
    duration: '60 Mins',
    vessel: 'Nautika / Green Ocean Catamaran',
    timings: ['09:00 AM', '10:30 AM', '02:30 PM', '04:00 PM'],
    price: '₹1,299',
    status: 'AVAILABLE',
    statusText: '🟢 Smooth Lagoon Crossing',
  },
  {
    id: 'neil-pb',
    route: 'Shaheed Dweep (Neil) ⇄ Port Blair',
    duration: '75 Mins',
    vessel: 'Makruzz Pearl / Nautika Lite',
    timings: ['11:00 AM', '02:15 PM', '04:00 PM'],
    price: '₹1,399',
    status: 'AVAILABLE',
    statusText: '🟢 Evening Sunset Sailing',
  },
  {
    id: 'pb-baratang',
    route: 'Port Blair ⇄ Baratang (Mangroves & Caves)',
    duration: '3.0 Hours',
    vessel: 'Private AC Cab + Forest Convoy & Speedboat',
    timings: ['06:00 AM (Early Convoy)', '09:00 AM (Mid Convoy)'],
    price: '₹1,850',
    status: 'AVAILABLE',
    statusText: '🟢 Authorized Jarawa Convoy Pass',
  },
];

export default function DestinationAvailability({ onBookFerry }) {
  const [selectedRoute, setSelectedRoute] = useState(FERRY_ROUTES[0].id);

  return (
    <section className="dest-avail-root">
      <style>{`
        .dest-avail-root {
          max-width: 1340px;
          margin: 0 auto 80px;
          padding: 0 24px;
        }

        .dest-avail-card {
          background: #ffffff;
          border: 2px solid #e2e8f0;
          border-radius: 32px;
          padding: 44px;
          box-shadow: 0 20px 60px rgba(0, 45, 98, 0.08);
        }
        @media (max-width: 768px) {
          .dest-avail-card { padding: 24px; }
        }

        .dest-avail-header {
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: 16px; margin-bottom: 32px;
          padding-bottom: 24px; border-bottom: 2px solid #f1f5f9;
        }

        .dest-routes-list {
          display: grid; grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        @media (max-width: 960px) {
          .dest-routes-list { grid-template-columns: 1fr; }
        }

        .dest-route-item {
          background: #f8fafc;
          border: 2px solid #e2e8f0;
          border-radius: 22px;
          padding: 24px;
          display: flex; flex-direction: column; justify-content: space-between;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .dest-route-item:hover, .dest-route-item.active {
          border-color: #F06543;
          background: #FFF0EB;
          box-shadow: 0 10px 30px rgba(13, 148, 136, 0.12);
        }

        .timing-pill {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11px; font-weight: 800;
          color: #0B2545; background: #ffffff;
          border: 1px solid #e2e8f0;
          padding: 4px 10px; border-radius: 10px;
        }
      `}</style>

      <div className="dest-avail-card">
        <div className="dest-avail-header">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF0EB] border border-[#F06543]/30 text-[#F06543] text-[11px] font-black uppercase tracking-widest font-mono mb-2">
              <Sparkles size={12} />
              <span>REAL-TIME CONNECTIVITY MATRIX</span>
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 700, color: '#0B2545', margin: 0 }}>
              INTER-ISLAND CATAMARAN & TRANSIT TIMINGS
            </h2>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, fontWeight: 800, color: '#F06543' }}>
            <ShieldCheck size={16} />
            <span>Official Makruzz & Nautika Booking Desk</span>
          </div>
        </div>

        <div className="dest-routes-list">
          {FERRY_ROUTES.map((route) => {
            const isSelected = selectedRoute === route.id;
            return (
              <div
                key={route.id}
                className={`dest-route-item${isSelected ? ' active' : ''}`}
                onClick={() => setSelectedRoute(route.id)}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifySelf: 'space-between', justifyContent: 'space-between', marginBottom: 12 }}>
                    <span style={{ fontSize: 11, fontWeight: 800, color: '#F06543', fontFamily: "'Space Grotesk', sans-serif" }}>
                      {route.statusText}
                    </span>
                    <span style={{ fontSize: 12, fontWeight: 800, color: '#64748b', fontFamily: "'Space Grotesk', sans-serif", display: 'flex', alignItems: 'center', gap: 4 }}>
                      <Clock size={13} color="#F06543" /> {route.duration}
                    </span>
                  </div>

                  <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 900, color: '#0B2545', margin: '0 0 6px' }}>
                    {route.route}
                  </h3>

                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12.5, color: '#64748b', margin: '0 0 16px', fontWeight: 500 }}>
                    {route.vessel}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
                    {route.timings.map((t, idx) => (
                      <span key={idx} className="timing-pill">
                        ⏰ {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 16, borderTop: '1.5px solid #e2e8f0' }}>
                  <div>
                    <span style={{ fontSize: 10, color: '#64748b', fontWeight: 800, textTransform: 'uppercase', display: 'block', fontFamily: "'Space Grotesk', sans-serif" }}>
                      Fare From
                    </span>
                    <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 900, color: '#0B2545' }}>
                      {route.price} <span style={{ fontSize: 11, color: '#64748b', fontWeight: 600 }}>/ person</span>
                    </span>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.history.pushState({}, '', '/ferries');
                      window.dispatchEvent(new Event('popstate'));
                    }}
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: 12,
                      fontWeight: 900,
                      color: '#ffffff',
                      background: 'linear-gradient(135deg, #FF6B4A, #F06543)',
                      border: 'none',
                      padding: '10px 20px',
                      borderRadius: 12,
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 6,
                      boxShadow: '0 4px 14px rgba(0, 45, 98, 0.25)',
                    }}
                  >
                    <span>CHECK SEATS</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
