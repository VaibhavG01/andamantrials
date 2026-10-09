// src/components/packages/PackageTips.jsx
import React from 'react';
import { Calendar, Plane, Utensils, ShieldCheck } from 'lucide-react';

const TIPS = [
  {
    icon: Calendar,
    title: 'IDEAL ADVANCE BOOKING WINDOW',
    desc: 'Book your package 30 to 60 days in advance for peak season (Oct–May) to secure premium beachfront villas & preferred catamaran timings.',
  },
  {
    icon: Plane,
    title: 'FLIGHT & FERRY COORDINATION',
    desc: 'Book flights arriving at Port Blair before 11:30 AM to catch same-day afternoon private catamarans directly to Havelock Island without staying overnight.',
  },
  {
    icon: Utensils,
    title: 'MEAL PLAN RECOMMENDATIONS',
    desc: 'Our CP plan (Resort Room with Daily Buffet Breakfast) gives you maximum freedom to explore Havelock & Neil’s fresh seafood beach shacks and beachfront cafes.',
  },
  {
    icon: ShieldCheck,
    title: 'GOVERNMENT ID & PERMIT RULES',
    desc: 'Carry original government photo IDs (Aadhaar / Passport / Voter ID) for all travelers. Our team handles all automated internal forest convoy clearances.',
  },
];

export default function PackageTips() {
  return (
    <section className="pkg-tips-root">
      <style>{`
        .pkg-tips-root {
          max-width: 1340px;
          margin: 0 auto 80px;
          padding: 0 24px;
        }

        .pkg-tips-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .pkg-tips-eyebrow {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 900; letter-spacing: 0.18em;
          color: #F06543; text-transform: uppercase; margin-bottom: 8px;
        }

        .pkg-tips-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(30px, 4.5vw, 48px);
          font-weight: 700; color: #0B2545; margin: 0;
        }

        .pkg-tips-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        @media (max-width: 1024px) {
          .pkg-tips-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 580px) {
          .pkg-tips-grid { grid-template-columns: 1fr; }
        }

        .pkg-tip-card {
          background: #ffffff;
          border: 2px solid #e2e8f0;
          border-radius: 24px;
          padding: 30px 22px;
          display: flex; flex-direction: column;
          box-shadow: 0 8px 24px rgba(0, 45, 98, 0.04);
          transition: all 0.3s ease;
        }
        .pkg-tip-card:hover {
          transform: translateY(-6px);
          border-color: #F06543;
          box-shadow: 0 16px 40px rgba(0, 45, 98, 0.12);
        }

        .pkg-tip-icon {
          width: 48px; height: 48px; border-radius: 14px;
          background: #FFF0EB; border: 1.5px solid #F06543;
          color: #F06543; display: flex; align-items: center; justify-content: center;
          margin-bottom: 18px;
        }
      `}</style>

      <div className="pkg-tips-header">
        <div className="pkg-tips-eyebrow">ESSENTIAL TRAVELER ADVISORY</div>
        <h2 className="pkg-tips-title">PACKAGE PLANNING TIPS & GUIDELINES</h2>
      </div>

      <div className="pkg-tips-grid">
        {TIPS.map((tip, idx) => {
          const IconComponent = tip.icon;
          return (
            <div key={idx} className="pkg-tip-card">
              <div className="pkg-tip-icon">
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
