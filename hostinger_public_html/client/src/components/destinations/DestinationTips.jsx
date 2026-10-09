// src/components/destinations/DestinationTips.jsx
import React from 'react';
import { Smartphone, Wallet, Ship, SunMedium, Sparkles, ShieldAlert } from 'lucide-react';

const TIPS = [
  {
    icon: Smartphone,
    title: 'MOBILE SIM & DATA COVERAGE',
    desc: 'Airtel and BSNL have the strongest 4G networks in Port Blair, Havelock & Neil. Jio/Vi coverage is limited in remote beach zones.',
  },
  {
    icon: Wallet,
    title: 'CASH & ATM BACKUP',
    desc: 'While resorts and major cafes accept UPI and cards, island beach shacks & auto-rickshaws require cash. Withdraw sufficient cash in Port Blair.',
  },
  {
    icon: Ship,
    title: 'FERRY CHECK-IN TIMINGS',
    desc: 'Arrive at the jetty 45 minutes prior to scheduled catamaran departure. Carry physical or digital copies of government photo IDs.',
  },
  {
    icon: SunMedium,
    title: 'SUNSET & SUNRISE HOURS',
    desc: 'The tropical sun rises early around 05:15 AM (best at Kalapathar & Vijaynagar) and sets around 05:10 PM (best at Radhanagar & Laxmanpur).',
  },
];

export default function DestinationTips() {
  return (
    <section className="dest-tips-root">
      <style>{`
        .dest-tips-root {
          max-width: 1340px;
          margin: 0 auto 80px;
          padding: 0 24px;
        }

        .dest-tips-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .dest-tips-eyebrow {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 900; letter-spacing: 0.18em;
          color: #F06543; text-transform: uppercase; margin-bottom: 8px;
        }

        .dest-tips-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(30px, 4.5vw, 48px);
          font-weight: 700; color: #0B2545; margin: 0;
        }

        .dest-tips-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        @media (max-width: 1024px) {
          .dest-tips-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 580px) {
          .dest-tips-grid { grid-template-columns: 1fr; }
        }

        .dest-tip-card {
          background: #ffffff;
          border: 2px solid #e2e8f0;
          border-radius: 24px;
          padding: 30px 22px;
          display: flex; flex-direction: column;
          box-shadow: 0 8px 24px rgba(0, 45, 98, 0.04);
          transition: all 0.3s ease;
        }
        .dest-tip-card:hover {
          transform: translateY(-6px);
          border-color: #F06543;
          box-shadow: 0 16px 40px rgba(0, 45, 98, 0.12);
        }

        .dest-tip-icon {
          width: 48px; height: 48px; border-radius: 14px;
          background: #FFF0EB; border: 1.5px solid #F06543;
          color: #F06543; display: flex; align-items: center; justify-content: center;
          margin-bottom: 18px;
        }
      `}</style>

      <div className="dest-tips-header">
        <div className="dest-tips-eyebrow">ESSENTIAL TRAVELER ADVISORY</div>
        <h2 className="dest-tips-title">LOCAL ISLAND TRAVEL TIPS</h2>
      </div>

      <div className="dest-tips-grid">
        {TIPS.map((tip, idx) => {
          const IconComponent = tip.icon;
          return (
            <div key={idx} className="dest-tip-card">
              <div className="dest-tip-icon">
                <IconComponent size={22} className="stroke-[2.5]" />
              </div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 900, color: '#0B2545', letterSpacing: '0.04em', margin: '0 0 8px' }}>
                {tip.title}
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12.5, color: '#64748b', lineHeight: 1.6, margin: 0, fontWeight: 500 }}>
                {tip.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
