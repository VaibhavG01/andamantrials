// src/components/destinations/DestinationInclusions.jsx
import React from 'react';
import { Check, X, ShieldCheck, HelpCircle } from 'lucide-react';

export default function DestinationInclusions() {
  const inclusions = [
    'Confirmed Luxury Private Catamaran Ferry Tickets (Makruzz / Nautika / Green Ocean)',
    'On-Ground Jetty Assistance & Dedicated Port Blair Harbour Escort',
    'Official Forest Department & Restricted Area Permits (RAP) Clearances',
    'Private AC Vehicle Transfers between Hotel, Jetty & Island Sightseeing Points',
    'Certified Local Island Guides for Baratang Caves & Heritage Sites',
    '24/7 Island Concierge with Instant Weather Monitoring & Schedule Rebooking',
  ];

  const exclusions = [
    'Personal Scuba Diving / Water Sports Activity Fees (Optional add-ons available)',
    'Camera / Video Permits at Specific Historic Monument Zones (where applicable)',
    'Personal Meals & Beverages not specifically stated in your itinerary',
    'Peak Season Hotel Surcharge on select Christmas / New Year dates',
  ];

  return (
    <section className="dest-inclusions-root">
      <style>{`
        .dest-inclusions-root {
          max-width: 1340px;
          margin: 0 auto 70px;
          padding: 0 24px;
        }

        .dest-inclusions-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .dest-inc-eyebrow {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 900; letter-spacing: 0.18em;
          color: #F06543; text-transform: uppercase; margin-bottom: 8px;
        }

        .dest-inc-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(30px, 4.5vw, 48px);
          font-weight: 700; color: #0B2545; margin: 0;
        }

        .dest-inclusions-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        @media (max-width: 860px) {
          .dest-inclusions-grid { grid-template-columns: 1fr; }
        }

        .dest-inc-card {
          background: #ffffff;
          border: 2px solid #e2e8f0;
          border-radius: 28px;
          padding: 36px;
          box-shadow: 0 10px 30px rgba(0, 45, 98, 0.05);
        }

        .dest-inc-card-header {
          display: flex; align-items: center; gap: 12px;
          margin-bottom: 24px; padding-bottom: 18px;
          border-bottom: 1.5px solid #f1f5f9;
        }

        .dest-inc-list {
          display: flex; flex-direction: column; gap: 14px;
        }

        .dest-inc-item {
          display: flex; align-items: flex-start; gap: 12px;
          font-family: 'Inter', sans-serif;
          font-size: 13.5px; line-height: 1.55;
          color: #334155; font-weight: 500;
        }
      `}</style>

      <div className="dest-inclusions-header">
        <div className="dest-inc-eyebrow">TRANSPARENT ISLAND LOGISTICS</div>
        <h2 className="dest-inc-title">WHAT'S INCLUDED IN YOUR ISLAND ESCAPE</h2>
      </div>

      <div className="dest-inclusions-grid">
        {/* Inclusions Card */}
        <div className="dest-inc-card">
          <div className="dest-inc-card-header">
            <div className="w-10 h-10 rounded-2xl bg-[#FFF0EB] border-2 border-[#F06543] text-[#F06543] flex items-center justify-center flex-shrink-0">
              <ShieldCheck size={20} className="stroke-[2.5]" />
            </div>
            <div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 900, color: '#0B2545', margin: 0 }}>
                STANDARD ISLAND INCLUSIONS
              </h3>
              <span style={{ fontSize: 12, color: '#F06543', fontWeight: 700, fontFamily: "'Inter', sans-serif" }}>
                100% Guaranteed & Seamless
              </span>
            </div>
          </div>

          <div className="dest-inc-list">
            {inclusions.map((item, idx) => (
              <div key={idx} className="dest-inc-item">
                <div className="w-5 h-5 rounded-full bg-[#FFF0EB] border border-[#F06543] text-[#F06543] flex items-center justify-center flex-shrink-0 mt-0.5 font-black text-xs">
                  ✓
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Exclusions Card */}
        <div className="dest-inc-card">
          <div className="dest-inc-card-header">
            <div className="w-10 h-10 rounded-2xl bg-slate-100 border-2 border-slate-300 text-slate-500 flex items-center justify-center flex-shrink-0">
              <HelpCircle size={20} className="stroke-[2.5]" />
            </div>
            <div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 900, color: '#0B2545', margin: 0 }}>
                EXCLUSIONS & OPTIONAL ADD-ONS
              </h3>
              <span style={{ fontSize: 12, color: '#64748b', fontWeight: 700, fontFamily: "'Inter', sans-serif" }}>
                Customized Upon Request
              </span>
            </div>
          </div>

          <div className="dest-inc-list">
            {exclusions.map((item, idx) => (
              <div key={idx} className="dest-inc-item">
                <div className="w-5 h-5 rounded-full bg-slate-100 border border-slate-300 text-slate-400 flex items-center justify-center flex-shrink-0 mt-0.5 font-black text-xs">
                  ✕
                </div>
                <span style={{ color: '#64748b' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
