import React from 'react';
import { Trees, Users, Recycle, Waves, ShieldCheck } from 'lucide-react';

const DEFAULT_SUSTAINABLE = [
  { id: 'reef', title: 'CORAL REEF PROTECTION', desc: 'Promoting reef-safe sunscreens, anchor-free mooring zones, and eco-certified dive operations.', icon: 'Waves' },
  { id: 'community', title: 'SUPPORTING LOCAL COMMUNITIES', desc: 'Partnering with local boat captains, island guides, and family-owned seafood kitchens.', icon: 'Users' },
  { id: 'waste', title: 'ZERO PLASTIC INITIATIVE', desc: 'Supplying reusable stainless steel bottles and organizing beach cleanups across remote sandbars.', icon: 'Recycle' },
  { id: 'forest', title: 'RAINFOREST CONSERVATION', desc: 'Respecting indigenous tribal reserves and protected mangrove biospheres across all journeys.', icon: 'Trees' },
];

const ICON_MAP = {
  Trees,
  Users,
  Recycle,
  Waves,
};

export default function SustainableTravel({ sustainable = DEFAULT_SUSTAINABLE }) {
  return (
    <section className="sustainable-root">
      <style>{`
        .sustainable-root {
          max-width: 1340px;
          margin: 0 auto;
          padding: 60px 24px 80px;
        }

        .sustainable-hdr {
          text-align: center;
          max-width: 720px;
          margin: 0 auto 44px;
        }

        .sustainable-sub {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px;
          font-weight: 800;
          letter-spacing: 0.2em;
          color: #F06543;
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        .sustainable-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(30px, 4.5vw, 48px);
          font-weight: 600;
          color: #0B2545;
          margin: 0 0 12px;
        }

        .sustainable-desc {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          color: #64748b;
          line-height: 1.6;
          margin: 0;
        }

        .sustainable-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        @media (max-width: 1024px) {
          .sustainable-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 540px) {
          .sustainable-grid { grid-template-columns: 1fr; }
        }

        .sustainable-card {
          background: #ffffff;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1.5px solid #e2e8f0;
          border-radius: 20px;
          padding: 28px 24px;
          transition: all 0.35s ease;
        }
        .sustainable-card:hover {
          transform: translateY(-5px);
          border-color: rgba(33, 230, 193, 0.45);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(33, 230, 193, 0.12);
        }

        .sustainable-icon {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: rgba(33, 230, 193, 0.12);
          color: #F06543;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
        }
      `}</style>

      <div className="sustainable-hdr">
        <div className="sustainable-sub">RESPONSIBLE TOURISM</div>
        <h2 className="sustainable-title">TRAVEL WITH PURPOSE</h2>
        <p className="sustainable-desc">
          The Andaman Islands are more than a destination. They are a fragile ecosystem that deserves to be explored responsibly and preserved for future generations.
        </p>
      </div>

      <div className="sustainable-grid">
        {sustainable.map((item) => {
          const Icon = ICON_MAP[item.icon] || ShieldCheck;
          return (
            <div key={item.id} className="sustainable-card">
              <div className="sustainable-icon">
                <Icon size={24} />
              </div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, fontWeight: 800, color: '#334155', letterSpacing: '0.04em', marginBottom: 8 }}>
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
