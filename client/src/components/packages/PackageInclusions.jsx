// src/components/packages/PackageInclusions.jsx
import React from 'react';
import { Check, X, ShieldCheck, HelpCircle } from 'lucide-react';

export default function PackageInclusions() {
  const inclusions = [
    'Confirmed Luxury Private Catamaran Tickets (Makruzz / Nautika / Green Ocean)',
    'Handpicked 4★ & 5★ Beachfront Resort Stays with Daily Buffet Breakfast',
    'Dedicated Private AC Vehicles for all Airport, Jetty & Island Sightseeing Transfers',
    'Complimentary Snorkeling / Scuba Diving Introductory Session (Select Packages)',
    'All Port Clearances, Vehicle Convoy Passes & Forest Department Entry Permits',
    '24/7 On-Ground Island Concierge Desk with Airport Reception & Jetty Coordination',
  ];

  const exclusions = [
    'Domestic / International Flight Tickets to & from Port Blair (Veer Savarkar Airport)',
    'Personal Scuba Diving / Water Sports Activity Upgrades beyond package inclusions',
    'Personal Lunches, Dinners & Beverages not specifically stated in your meal plan',
    'Peak Season Gala Dinner Surcharges (Christmas Eve / New Year Eve where applicable)',
  ];

  return (
    <section className="pkg-inclusions-root">
      <style>{`
        .pkg-inclusions-root {
          max-width: 1340px;
          margin: 0 auto 70px;
          padding: 0 24px;
        }

        .pkg-inclusions-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .pkg-inc-eyebrow {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 900; letter-spacing: 0.18em;
          color: #F06543; text-transform: uppercase; margin-bottom: 8px;
        }

        .pkg-inc-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(30px, 4.5vw, 48px);
          font-weight: 700; color: #0B2545; margin: 0;
        }

        .pkg-inclusions-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        @media (max-width: 860px) {
          .pkg-inclusions-grid { grid-template-columns: 1fr; }
        }

        .pkg-inc-card {
          background: #ffffff;
          border: 2px solid #e2e8f0;
          border-radius: 28px;
          padding: 36px;
          box-shadow: 0 10px 30px rgba(0, 45, 98, 0.05);
        }

        .pkg-inc-card-header {
          display: flex; align-items: center; gap: 12px;
          margin-bottom: 24px; padding-bottom: 18px;
          border-bottom: 1.5px solid #f1f5f9;
        }

        .pkg-inc-list {
          display: flex; flex-direction: column; gap: 14px;
        }

        .pkg-inc-item {
          display: flex; align-items: flex-start; gap: 12px;
          font-family: 'Inter', sans-serif;
          font-size: 13.5px; line-height: 1.55;
          color: #334155; font-weight: 500;
        }
      `}</style>

      <div className="pkg-inclusions-header">
        <div className="pkg-inc-eyebrow">TRANSPARENT PACKAGE INCLUSIONS</div>
        <h2 className="pkg-inc-title">WHAT'S INCLUDED IN YOUR ALL-INCLUSIVE PACKAGE</h2>
      </div>

      <div className="pkg-inclusions-grid">
        {/* Inclusions Card */}
        <div className="pkg-inc-card">
          <div className="pkg-inc-card-header">
            <div className="w-10 h-10 rounded-2xl bg-[#FFF0EB] border-2 border-[#F06543] text-[#F06543] flex items-center justify-center flex-shrink-0">
              <ShieldCheck size={20} className="stroke-[2.5]" />
            </div>
            <div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 900, color: '#0B2545', margin: 0 }}>
                STANDARD PACKAGE INCLUSIONS
              </h3>
              <span style={{ fontSize: 12, color: '#F06543', fontWeight: 700, fontFamily: "'Inter', sans-serif" }}>
                100% Confirmed & Zero Hidden Fees
              </span>
            </div>
          </div>

          <div className="pkg-inc-list">
            {inclusions.map((item, idx) => (
              <div key={idx} className="pkg-inc-item">
                <div className="w-5 h-5 rounded-full bg-[#FFF0EB] border border-[#F06543] text-[#F06543] flex items-center justify-center flex-shrink-0 mt-0.5 font-black text-xs">
                  ✓
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Exclusions Card */}
        <div className="pkg-inc-card">
          <div className="pkg-inc-card-header">
            <div className="w-10 h-10 rounded-2xl bg-slate-100 border-2 border-slate-300 text-slate-500 flex items-center justify-center flex-shrink-0">
              <HelpCircle size={20} className="stroke-[2.5]" />
            </div>
            <div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 900, color: '#0B2545', margin: 0 }}>
                EXCLUSIONS & OPTIONAL UPGRADES
              </h3>
              <span style={{ fontSize: 12, color: '#64748b', fontWeight: 700, fontFamily: "'Inter', sans-serif" }}>
                Add-Ons Available on Demand
              </span>
            </div>
          </div>

          <div className="pkg-inc-list">
            {exclusions.map((item, idx) => (
              <div key={idx} className="pkg-inc-item">
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
