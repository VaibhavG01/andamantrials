// src/components/ferries/FerryStatus.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Ferry Live Status Overview Component

import React from 'react';
import { Activity, CheckCircle2, Clock, AlertTriangle, XCircle } from 'lucide-react';

const STATUS_ITEMS = [
  {
    route: 'PORT BLAIR → HAVELOCK',
    time: '06:00 AM',
    status: 'ON TIME',
    icon: CheckCircle2,
    color: '#F06543',
    note: 'Gate open. Boarding starts 30 mins before departure.',
  },
  {
    route: 'PORT BLAIR → HAVELOCK',
    time: '08:30 AM',
    status: 'BOARDING NOW',
    icon: Activity,
    color: '#F06543',
    note: 'Passengers in terminal hall proceeding to gangway.',
  },
  {
    route: 'PORT BLAIR → BARATANG',
    time: '07:00 AM',
    status: 'DELAYED (15M)',
    icon: AlertTriangle,
    color: '#ffb74d',
    note: 'Slight delay due to high tide creek clearance.',
  },
];

export default function FerryStatus() {
  return (
    <section className="ferry-status-root">
      <style>{`
        .ferry-status-root {
          max-width: 1340px;
          margin: 0 auto;
          padding: 40px 24px 70px;
        }

        .status-hdr {
          text-align: center;
          margin-bottom: 36px;
        }

        .status-sub {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px;
          font-weight: 800;
          letter-spacing: 0.2em;
          color: #F06543;
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        .status-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(30px, 4.5vw, 48px);
          font-weight: 600;
          color: #0B2545;
          margin: 0;
        }

        .status-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        @media (max-width: 900px) {
          .status-grid { grid-template-columns: 1fr; }
        }

        .status-card {
          background: #ffffff;
          backdrop-filter: blur(16px);
          border: 1.5px solid #e2e8f0;
          border-radius: 20px;
          padding: 24px;
          transition: all 0.3s ease;
        }
        .status-card:hover {
          transform: translateY(-4px);
          border-color: rgba(33, 230, 193, 0.4);
          box-shadow: 0 12px 36px rgba(0,0,0,0.4);
        }
      `}</style>

      <div className="status-hdr">
        <div className="status-sub">TERMINAL DISPATCH ALERTS</div>
        <h2 className="status-title">FERRY STATUS</h2>
      </div>

      <div className="status-grid">
        {STATUS_ITEMS.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="status-card">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 900, color: '#334155' }}>
                  {item.route}
                </span>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 800, color: '#F06543' }}>
                  {item.time}
                </span>
              </div>

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 12.5,
                  fontWeight: 900,
                  color: item.color,
                  background: `${item.color}18`,
                  border: `1px solid ${item.color}44`,
                  padding: '4px 12px',
                  borderRadius: 12,
                  marginBottom: 12,
                }}
              >
                <Icon size={13} />
                <span>{item.status}</span>
              </div>

              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: '#64748b', lineHeight: 1.5, margin: 0 }}>
                {item.note}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
