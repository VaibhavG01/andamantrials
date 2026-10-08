// src/components/packages/PackageBookingFlow.jsx
import React from 'react';
import { Compass, SlidersHorizontal, CreditCard, CheckCircle2 } from 'lucide-react';

const STEPS = [
  {
    step: '01',
    icon: Compass,
    title: 'CHOOSE YOUR PACKAGE',
    desc: 'Browse our collection of 25+ curated holiday packages by theme, duration, and island destinations.',
  },
  {
    step: '02',
    icon: SlidersHorizontal,
    title: 'CUSTOMIZE YOUR TRIP',
    desc: 'Add scuba diving, upgrade resort room tiers, include romantic candlelight dinners, or tweak dates.',
  },
  {
    step: '03',
    icon: CreditCard,
    title: 'SECURE TOKEN PAYMENT',
    desc: 'Pay a minimal token advance via Razorpay 256-bit encrypted checkout to confirm all ferry and hotel vouchers.',
  },
  {
    step: '04',
    icon: CheckCircle2,
    title: 'INSTANT DIGITAL PASS',
    desc: 'Receive verified digital hotel confirmation vouchers, Makruzz ferry tickets and private driver contacts instantly.',
  },
];

export default function PackageBookingFlow({ onStartPlanning }) {
  return (
    <section className="pkg-flow-root">
      <style>{`
        .pkg-flow-root {
          max-width: 1340px;
          margin: 0 auto 80px;
          padding: 0 24px;
        }

        .pkg-flow-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .pkg-flow-eyebrow {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 900; letter-spacing: 0.18em;
          color: #F06543; text-transform: uppercase; margin-bottom: 8px;
        }

        .pkg-flow-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(30px, 4.5vw, 48px);
          font-weight: 700; color: #0B2545; margin: 0;
        }

        .pkg-flow-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          position: relative;
        }
        @media (max-width: 1024px) {
          .pkg-flow-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 580px) {
          .pkg-flow-grid { grid-template-columns: 1fr; }
        }

        .pkg-flow-card {
          background: #ffffff;
          border: 2px solid #e2e8f0;
          border-radius: 24px;
          padding: 30px 22px;
          display: flex; flex-direction: column;
          position: relative;
          box-shadow: 0 8px 24px rgba(0, 45, 98, 0.04);
          transition: all 0.3s ease;
        }
        .pkg-flow-card:hover {
          transform: translateY(-6px);
          border-color: #F06543;
          box-shadow: 0 16px 40px rgba(0, 45, 98, 0.12);
        }

        .pkg-step-num {
          position: absolute; top: 20px; right: 20px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 28px; font-weight: 900;
          color: #e2e8f0; line-height: 1;
        }

        .pkg-step-icon {
          width: 50px; height: 50px; border-radius: 16px;
          background: #FFF0EB; border: 1.5px solid #F06543;
          color: #F06543; display: flex; align-items: center; justify-content: center;
          margin-bottom: 20px;
        }
      `}</style>

      <div className="pkg-flow-header">
        <div className="pkg-flow-eyebrow">SEAMLESS 4-STEP RESERVATION</div>
        <h2 className="pkg-flow-title">HOW PACKAGE BOOKING WORKS</h2>
      </div>

      <div className="pkg-flow-grid">
        {STEPS.map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <div key={idx} className="pkg-flow-card">
              <span className="pkg-step-num">{item.step}</span>
              <div className="pkg-step-icon">
                <IconComponent size={22} className="stroke-[2.5]" />
              </div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13.5, fontWeight: 900, color: '#0B2545', letterSpacing: '0.04em', margin: '0 0 8px' }}>
                {item.title}
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12.5, color: '#64748b', lineHeight: 1.6, margin: 0, fontWeight: 500 }}>
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
