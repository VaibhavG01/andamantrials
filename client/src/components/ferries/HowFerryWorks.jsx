// src/components/ferries/HowFerryWorks.jsx
// ─────────────────────────────────────────────────────────────────────────────
// "YOUR FERRY JOURNEY, MADE SIMPLE" 4 Steps Component

import React from 'react';
import { Search, ArrowRight, Ship, Compass } from 'lucide-react';

const STEPS = [
  { num: '01', title: 'SEARCH', desc: 'Choose your departure island, destination reef, and travel date.' },
  { num: '02', title: 'COMPARE', desc: 'Compare Nautika, Makruzz, & Green Ocean departure times & classes.' },
  { num: '03', title: 'BOOK', desc: 'Select your preferred seats and receive instant digital e-vouchers.' },
  { num: '04', title: 'SAIL', desc: 'Arrive at the jetty, show your barcode voucher, and cross the Andaman Sea.' },
];

export default function HowFerryWorks() {
  return (
    <section className="how-works-root">
      <style>{`
        .how-works-root {
          max-width: 1340px;
          margin: 0 auto;
          padding: 60px 24px 80px;
        }

        .how-works-hdr {
          text-align: center;
          margin-bottom: 48px;
        }

        .how-works-sub {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px;
          font-weight: 800;
          letter-spacing: 0.2em;
          color: #F06543;
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        .how-works-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(30px, 4.5vw, 48px);
          font-weight: 600;
          color: #0B2545;
          margin: 0;
        }

        .how-works-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        @media (max-width: 1024px) {
          .how-works-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 540px) {
          .how-works-grid { grid-template-columns: 1fr; }
        }

        .how-works-card {
          background: #ffffff;
          backdrop-filter: blur(16px);
          border: 1.5px solid #e2e8f0;
          border-radius: 20px;
          padding: 28px 20px;
          transition: all 0.35s ease;
          position: relative;
        }
        .how-works-card:hover {
          transform: translateY(-5px);
          border-color: rgba(33, 230, 193, 0.45);
          box-shadow: 0 16px 40px rgba(0,0,0,0.4);
        }

        .how-works-num {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 32px;
          font-weight: 900;
          color: rgba(22, 217, 255, 0.3);
          margin-bottom: 12px;
        }
      `}</style>

      <div className="how-works-hdr">
        <div className="how-works-sub">EFFORTLESS ISLAND TRAVEL</div>
        <h2 className="how-works-title">YOUR FERRY JOURNEY, MADE SIMPLE</h2>
      </div>

      <div className="how-works-grid">
        {STEPS.map((step) => (
          <div key={step.num} className="how-works-card">
            <div className="how-works-num">{step.num}</div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 15, fontWeight: 900, color: '#334155', letterSpacing: '0.06em', marginBottom: 8 }}>
              {step.title}
            </div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12.5, color: '#64748b', lineHeight: 1.6, margin: 0 }}>
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
