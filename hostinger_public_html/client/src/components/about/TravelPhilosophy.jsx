// src/components/about/TravelPhilosophy.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Large Quote-Style Emotional Travel Philosophy Highlight Section

import React from 'react';
import { Quote, Sparkles } from 'lucide-react';

export default function TravelPhilosophy() {
  return (
    <section className="philosophy-root">
      <style>{`
        .philosophy-root {
          position: relative;
          max-width: 1340px;
          margin: 0 auto 80px;
          padding: 0 24px;
        }

        .philosophy-card {
          position: relative;
          border-radius: 28px;
          overflow: hidden;
          padding: 80px 48px;
          text-align: center;
          background: #f8fafc;
          border: 1.5px solid #e2e8f0;
          box-shadow: 0 24px 64px rgba(0, 0, 0, 0.6), 0 0 40px rgba(22, 217, 255, 0.08);
        }
        @media (max-width: 640px) {
          .philosophy-card { padding: 48px 24px; }
        }

        .philosophy-bg {
          position: absolute; inset: 0; z-index: 1;
        }
        .philosophy-bg img {
          width: 100%; height: 100%; object-fit: cover;
          filter: brightness(0.4) saturate(1.2);
        }

        .philosophy-overlay {
          position: absolute; inset: 0; z-index: 2;
          background: linear-gradient(180deg, rgba(2, 14, 22, 0.82) 0%, #f8fafc 100%);
        }

        .philosophy-content {
          position: relative; z-index: 3; max-width: 820px; margin: 0 auto;
        }

        .philosophy-sub {
          display: inline-flex; align-items: center; gap: 6px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; letter-spacing: 0.2em;
          color: #F06543; text-transform: uppercase; margin-bottom: 16px;
        }

        .philosophy-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(34px, 5.5vw, 62px);
          font-weight: 600; color: #0B2545;
          line-height: 1.06; margin: 0 0 20px;
          letter-spacing: -0.01em;
          text-shadow: 0 4px 24px rgba(0,0,0,0.85);
        }

        .philosophy-quote {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(20px, 2.5vw, 28px);
          font-style: italic; color: #F06543;
          line-height: 1.4; margin: 0 auto; max-width: 720px;
        }
      `}</style>

      <div className="philosophy-card">
        <div className="philosophy-bg">
          <img
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1600&q=90"
            alt="Cinematic Ocean Sunset Visual"
          />
        </div>
        <div className="philosophy-overlay" />

        <div className="philosophy-content">
          <div className="philosophy-sub">
            <Sparkles size={13} color="#F06543" />
            <span>OUR TRAVEL PHILOSOPHY</span>
          </div>

          <h2 className="philosophy-title">
            TRAVEL SHOULD NEVER <br />
            <span style={{ color: '#F06543' }}>FEEL LIKE A CHECKLIST.</span>
          </h2>

          <Quote size={32} color="#F06543" style={{ opacity: 0.8, marginBottom: 12 }} />

          <p className="philosophy-quote">
            "It should feel like a collection of meaningful moments you will remember long after you return home."
          </p>
        </div>
      </div>
    </section>
  );
}
