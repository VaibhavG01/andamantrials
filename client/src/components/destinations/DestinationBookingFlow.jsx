// src/components/destinations/DestinationBookingFlow.jsx
import React from 'react';
import { ArrowRight, Compass, Anchor, Building2, CheckCircle2 } from 'lucide-react';

const STEPS = [
  {
    step: '01',
    icon: Compass,
    title: 'SELECT DESIRED ISLANDS',
    desc: 'Choose your preferred island combination from Havelock, Neil, Port Blair, Baratang or Diglipur.',
  },
  {
    step: '02',
    icon: Anchor,
    title: 'RESERVE CATAMARAN FERRIES',
    desc: 'Select preferred sailing schedules on Makruzz or Nautika with real-time seat inventory.',
  },
  {
    step: '03',
    icon: Building2,
    title: 'ADD RESORTS & ACTIVITIES',
    desc: 'Pick verified beachfront resorts, PADI scuba diving slots, kayak trips and private cabs.',
  },
  {
    step: '04',
    icon: CheckCircle2,
    title: 'RECEIVE DIGITAL PASS',
    desc: 'Instant booking confirmation, automated forest permits and barcode voucher sent to your phone.',
  },
];

export default function DestinationBookingFlow({ onStartPlanning }) {
  return (
    <section className="dest-flow-root">
      <style>{`
        .dest-flow-root {
          max-width: 1340px;
          margin: 0 auto 80px;
          padding: 0 24px;
        }

        .dest-flow-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .dest-flow-eyebrow {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 900; letter-spacing: 0.18em;
          color: #F06543; text-transform: uppercase; margin-bottom: 8px;
        }

        .dest-flow-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(30px, 4.5vw, 48px);
          font-weight: 700; color: #0B2545; margin: 0;
        }

        .dest-flow-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          position: relative;
        }
        @media (max-width: 1024px) {
          .dest-flow-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 580px) {
          .dest-flow-grid { grid-template-columns: 1fr; }
        }

        .dest-flow-card {
          background: #ffffff;
          border: 2px solid #e2e8f0;
          border-radius: 24px;
          padding: 30px 22px;
          display: flex; flex-direction: column;
          position: relative;
          box-shadow: 0 8px 24px rgba(0, 45, 98, 0.04);
          transition: all 0.3s ease;
        }
        .dest-flow-card:hover {
          transform: translateY(-6px);
          border-color: #F06543;
          box-shadow: 0 16px 40px rgba(0, 45, 98, 0.12);
        }

        .dest-step-num {
          position: absolute; top: 20px; right: 20px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 28px; font-weight: 900;
          color: #e2e8f0; line-height: 1;
        }

        .dest-step-icon {
          width: 50px; height: 50px; border-radius: 16px;
          background: #FFF0EB; border: 1.5px solid #F06543;
          color: #F06543; display: flex; align-items: center; justify-content: center;
          margin-bottom: 20px;
        }
      `}</style>

      <div className="dest-flow-header">
        <div className="dest-flow-eyebrow">SEAMLESS 4-STEP RESERVATION</div>
        <h2 className="dest-flow-title">HOW ISLAND HOPPING WORKS</h2>
      </div>

      <div className="dest-flow-grid">
        {STEPS.map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <div key={idx} className="dest-flow-card">
              <span className="dest-step-num">{item.step}</span>
              <div className="dest-step-icon">
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
