// src/components/ferries/BoardingInformation.jsx
// ─────────────────────────────────────────────────────────────────────────────
// "BEFORE YOU BOARD" Important Boarding Guidelines Component

import React from 'react';
import { Clock, FileText, Luggage, CloudSun } from 'lucide-react';

const GUIDELINES = [
  {
    icon: Clock,
    title: 'ARRIVE EARLY',
    desc: 'Reach the boarding jetty 45 to 60 minutes prior to scheduled departure for ticket validation and security clearance.',
  },
  {
    icon: FileText,
    title: 'TRAVEL DOCUMENTS',
    desc: 'Keep your government-issued photo ID (Aadhaar / Passport / Voter ID) and digital booking voucher handy.',
  },
  {
    icon: Luggage,
    title: 'BAGGAGE RULES',
    desc: 'Standard check-in baggage allowance is 20kg–25kg per passenger depending on class. Hand luggage limit is 7kg.',
  },
  {
    icon: CloudSun,
    title: 'WEATHER DEPENDENT',
    desc: 'Sailings are subject to coastal weather and sea condition advisories issued by port authorities.',
  },
];

export default function BoardingInformation() {
  return (
    <section className="boarding-info-root">
      <style>{`
        .boarding-info-root {
          max-width: 1340px;
          margin: 0 auto;
          padding: 60px 24px 80px;
        }

        .boarding-hdr {
          text-align: center;
          margin-bottom: 44px;
        }

        .boarding-sub {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px;
          font-weight: 800;
          letter-spacing: 0.2em;
          color: #F06543;
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        .boarding-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(30px, 4.5vw, 48px);
          font-weight: 600;
          color: #0B2545;
          margin: 0;
        }

        .boarding-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        @media (max-width: 1024px) {
          .boarding-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 540px) {
          .boarding-grid { grid-template-columns: 1fr; }
        }

        .boarding-card {
          background: #ffffff;
          backdrop-filter: blur(16px);
          border: 1.5px solid #e2e8f0;
          border-radius: 20px;
          padding: 28px 24px;
          transition: all 0.35s ease;
        }
        .boarding-card:hover {
          transform: translateY(-5px);
          border-color: rgba(33, 230, 193, 0.45);
          box-shadow: 0 16px 40px rgba(0,0,0,0.4);
        }

        .boarding-icon {
          width: 44px; height: 44px; border-radius: 14px;
          background: rgba(33, 230, 193, 0.12); color: #F06543;
          display: flex; align-items: center; justify-content: center; margin-bottom: 16px;
        }
      `}</style>

      <div className="boarding-hdr">
        <div className="boarding-sub">SAILING CHECKLIST</div>
        <h2 className="boarding-title">BEFORE YOU BOARD</h2>
      </div>

      <div className="boarding-grid">
        {GUIDELINES.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="boarding-card">
              <div className="boarding-icon">
                <Icon size={22} />
              </div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, fontWeight: 900, color: '#334155', letterSpacing: '0.04em', marginBottom: 8 }}>
                {item.title}
              </div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12.5, color: '#64748b', lineHeight: 1.6 }}>
                {item.desc}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
