// src/components/ferries/FerryResultCard.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Ferry Result Card Component for Mobile & Desktop Schedule View

import React from 'react';
import { ArrowRight, Clock, ShieldCheck, Ship, Info } from 'lucide-react';

export default function FerryResultCard({ ferry, onViewDetails, onBookNow }) {
  const getStatusBadgeStyle = (statusType) => {
    switch (statusType) {
      case 'warning':
        return { color: '#ffb74d', bg: 'rgba(255, 183, 77, 0.15)', border: 'rgba(255, 183, 77, 0.3)' };
      case 'info':
        return { color: '#F06543', bg: 'rgba(22, 217, 255, 0.15)', border: 'rgba(22, 217, 255, 0.3)' };
      default:
        return { color: '#F06543', bg: 'rgba(33, 230, 193, 0.15)', border: 'rgba(33, 230, 193, 0.3)' };
    }
  };

  const badgeStyle = getStatusBadgeStyle(ferry.statusType);

  return (
    <div className="ferry-result-card">
      <style>{`
        .ferry-result-card {
          background: #ffffff;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1.5px solid #e2e8f0;
          border-radius: 20px;
          padding: 24px;
          display: grid;
          grid-template-columns: 1.5fr 2fr 1.2fr auto;
          gap: 20px;
          align-items: center;
          transition: all 0.3s ease;
          margin-bottom: 16px;
        }
        .ferry-result-card:hover {
          transform: translateY(-3px);
          border-color: rgba(33, 230, 193, 0.45);
          box-shadow: 0 12px 36px rgba(0, 0, 0, 0.45), 0 0 20px rgba(33, 230, 193, 0.1);
        }
        @media (max-width: 900px) {
          .ferry-result-card {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }

        .ferry-operator-name {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 16px;
          font-weight: 900;
          color: #0B2545;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .ferry-class-sub {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: #64748b;
          margin-top: 4px;
        }

        .time-route-box {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        .time-text {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 18px;
          font-weight: 800;
          color: #334155;
        }

        .loc-sub {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: #F06543;
        }

        .duration-pill {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px;
          font-weight: 800;
          color: #64748b;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          padding: 4px 10px;
          border-radius: 12px;
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }

        .price-text {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 22px;
          font-weight: 900;
          color: #334155;
        }

        .btn-details {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 800;
          color: #F06543;
          background: rgba(22, 217, 255, 0.1);
          border: 1px solid rgba(22, 217, 255, 0.3);
          padding: 10px 16px;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.25s ease;
        }
        .btn-details:hover {
          background: rgba(22, 217, 255, 0.2);
          border-color: #F06543;
        }

        .btn-book {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 800;
          color: #ffffff; background: linear-gradient(135deg, #0B2545, #F06543);
          border: none;
          padding: 10px 20px;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.25s ease;
          box-shadow: 0 4px 16px rgba(22, 217, 255, 0.35);
        }
        .btn-book:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(22, 217, 255, 0.5);
        }
      `}</style>

      {/* OPERATOR INFO */}
      <div>
        <div className="ferry-operator-name">
          <Ship size={18} color="#F06543" />
          <span>{ferry.operator}</span>
        </div>
        <div className="ferry-class-sub">{ferry.vesselClass}</div>
        <div
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 12.5,
            fontWeight: 800,
            color: badgeStyle.color,
            background: badgeStyle.bg,
            border: `1px solid ${badgeStyle.border}`,
            padding: '3px 10px',
            borderRadius: 10,
            display: 'inline-block',
            marginTop: 8,
          }}
        >
          {ferry.status}
        </div>
      </div>

      {/* ROUTE & TIMINGS */}
      <div className="time-route-box">
        <div>
          <div className="time-text">{ferry.departure}</div>
          <div className="loc-sub">{ferry.from}</div>
        </div>

        <div style={{ textCenter: 'center', textAlign: 'center', padding: '0 8px' }}>
          <span className="duration-pill">
            <Clock size={10} color="#F06543" />
            {ferry.duration}
          </span>
          <div style={{ width: 80, height: 1.5, background: 'linear-gradient(90deg, #F06543, #F06543)', margin: '6px auto 0' }} />
        </div>

        <div>
          <div className="time-text">{ferry.arrival}</div>
          <div className="loc-sub">{ferry.to}</div>
        </div>
      </div>

      {/* FARE & SEATS */}
      <div>
        <div className="price-text">₹{ferry.price.toLocaleString()}</div>
        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: '#64748b' }}>
          per passenger
        </div>
        <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12.5, fontWeight: 700, color: '#F06543', marginTop: 4 }}>
          {ferry.seatsAvailable} seats left
        </div>
      </div>

      {/* ACTIONS */}
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <button onClick={() => onViewDetails(ferry)} className="btn-details">
          DETAILS
        </button>
        <button onClick={() => onBookNow(ferry)} className="btn-book">
          BOOK NOW →
        </button>
      </div>
    </div>
  );
}
