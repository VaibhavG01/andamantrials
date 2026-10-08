// src/components/ferries/FerryRouteCard.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Popular Ferry Route Card Component with Image, Route Line, and Schedule Action

import React from 'react';
import { ArrowRight, Clock, Ship, Compass } from 'lucide-react';

export default function FerryRouteCard({ route, onViewSchedule }) {
  return (
    <div className="ferry-route-card">
      <style>{`
        .ferry-route-card {
          background: #ffffff;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1.5px solid #e2e8f0;
          border-radius: 20px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .ferry-route-card:hover {
          transform: translateY(-5px);
          border-color: rgba(33, 230, 193, 0.45);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5), 0 0 20px rgba(33, 230, 193, 0.12);
          background: #ffffff;
        }

        .ferry-route-img-box {
          position: relative;
          height: 150px;
          overflow: hidden;
        }
        .ferry-route-img-box img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 0.55s ease;
        }
        .ferry-route-card:hover .ferry-route-img-box img {
          transform: scale(1.08);
        }

        .ferry-route-badge {
          position: absolute; top: 12px; left: 12px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 9.5px; font-weight: 800; letter-spacing: 0.08em;
          color: #F06543; background: #f8fafc;
          backdrop-filter: blur(8px); padding: 4px 12px; border-radius: 14px;
          border: 1px solid rgba(33, 230, 193, 0.3); text-transform: uppercase;
        }

        .ferry-route-body {
          padding: 20px; flex: 1; display: flex; flex-direction: column; justify-content: space-between;
        }

        .ferry-route-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 15px; font-weight: 900; color: #0B2545;
          display: flex; align-items: center; gap: 8px; margin-bottom: 8px;
        }

        .ferry-route-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 800; color: #F06543;
          background: rgba(22, 217, 255, 0.1);
          border: 1px solid rgba(22, 217, 255, 0.3);
          padding: 8px 14px; border-radius: 12px; cursor: pointer;
          display: inline-flex; align-items: center; justify-content: center; gap: 5px;
          transition: all 0.25s ease; width: 100%; margin-top: 14px;
        }
        .ferry-route-card:hover .ferry-route-btn {
          background: linear-gradient(135deg, #0B2545, #F06543); color: #ffffff; border-color: transparent;
          box-shadow: 0 4px 16px rgba(22, 217, 255, 0.4);
        }
      `}</style>

      <div className="ferry-route-img-box">
        <img src={route.image} alt={`${route.from} to ${route.to}`} />
        <span className="ferry-route-badge">{route.ferryCount}</span>
      </div>

      <div className="ferry-route-body">
        <div>
          <div className="ferry-route-title">
            <span>{route.from}</span>
            <ArrowRight size={14} color="#F06543" />
            <span>{route.to}</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 700, color: '#64748b' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <Clock size={12} color="#F06543" />
              {route.duration}
            </span>
            <span style={{ color: '#4a6678' }}>•</span>
            <span style={{ color: '#F06543' }}>Starts from {route.startingPrice}</span>
          </div>
        </div>

        <button className="ferry-route-btn" onClick={() => onViewSchedule && onViewSchedule(route)}>
          <span>VIEW SCHEDULE</span>
          <ArrowRight size={11} />
        </button>
      </div>
    </div>
  );
}
