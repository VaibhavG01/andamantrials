// src/components/ferries/FerrySchedule.jsx
// ─────────────────────────────────────────────────────────────────────────────
// "TODAY'S FERRY SCHEDULE" Master List Component

import React from 'react';
import { Info, Ship, AlertCircle } from 'lucide-react';
import FerryResultCard from './FerryResultCard';

export default function FerrySchedule({ ferries, onViewDetails, onBookNow }) {
  return (
    <section id="ferry-schedule-section" className="schedule-section-root">
      <style>{`
        .schedule-section-root {
          max-width: 1340px;
          margin: 0 auto;
          padding: 20px 24px 80px;
        }

        .schedule-hdr {
          text-align: center;
          margin-bottom: 32px;
        }

        .schedule-sub {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px;
          font-weight: 800;
          letter-spacing: 0.2em;
          color: #F06543;
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        .schedule-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(30px, 4.5vw, 48px);
          font-weight: 600;
          color: #0B2545;
          margin: 0;
        }

        .demo-notice-banner {
          background: rgba(22, 217, 255, 0.08);
          border: 1px solid rgba(22, 217, 255, 0.25);
          border-radius: 14px;
          padding: 12px 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-bottom: 24px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 700;
          color: #F06543;
          letter-spacing: 0.04em;
        }

        .no-ferries-box {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          padding: 48px 24px;
          text-align: center;
        }
      `}</style>

      <div className="schedule-hdr">
        <div className="schedule-sub">REAL-TIME ISLAND SAILINGS</div>
        <h2 className="schedule-title">TODAY'S FERRY SCHEDULE</h2>
      </div>

      {/* SAMPLE / DEMO DATA NOTICE */}
      <div className="demo-notice-banner">
        <Info size={15} color="#F06543" />
        <span>SAMPLE SCHEDULE DISPLAY • LIVE API CONNECTIONS WILL AUTO-UPDATE ON OPERATOR DISPATCH</span>
      </div>

      {/* SCHEDULE LIST */}
      {ferries && ferries.length > 0 ? (
        <div>
          {ferries.map((ferry) => (
            <FerryResultCard
              key={ferry.id}
              ferry={ferry}
              onViewDetails={onViewDetails}
              onBookNow={onBookNow}
            />
          ))}
        </div>
      ) : (
        <div className="no-ferries-box">
          <AlertCircle size={36} color="#F06543" style={{ margin: '0 auto 12px' }} />
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 18, fontWeight: 900, color: '#334155', marginBottom: 6 }}>
            NO FERRIES FOUND
          </div>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#64748b', margin: 0 }}>
            Try selecting a different date or route combination above.
          </p>
        </div>
      )}
    </section>
  );
}
