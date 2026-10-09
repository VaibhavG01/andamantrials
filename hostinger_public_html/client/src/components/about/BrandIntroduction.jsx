import React from 'react';
import { Sparkles, Quote } from 'lucide-react';

const DEFAULT_INTRO = {
  headline: "WE DON'T JUST PLAN TRIPS.\nWE CREATE MEMORIES.",
  body: 'Andaman Trails was created with a simple idea — exploring the Andaman Islands should feel as extraordinary as the destination itself.\n\nFrom the first idea of a trip to the final moment of your journey, we bring destinations, experiences and travel planning together in one seamless experience.',
};

export default function BrandIntroduction({ intro = DEFAULT_INTRO }) {
  return (
    <section id="brand-intro-section" className="brand-intro-root">
      <style>{`
        .brand-intro-root {
          max-width: 1340px;
          margin: 0 auto;
          padding: 80px 24px;
        }

        .brand-intro-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
        }
        @media (max-width: 900px) {
          .brand-intro-grid { grid-template-columns: 1fr; gap: 32px; }
        }

        .brand-intro-sub {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.2em;
          color: #F06543;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 12px;
        }

        .brand-intro-headline {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(34px, 4.5vw, 56px);
          font-weight: 600;
          color: #0B2545;
          line-height: 1.08;
          margin: 0;
          white-space: pre-line;
        }

        .brand-intro-card {
          background: #ffffff;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1.5px solid #e2e8f0;
          border-radius: 24px;
          padding: 40px;
          box-shadow: 0 16px 48px rgba(0, 0, 0, 0.45);
          position: relative;
        }
        @media (max-width: 640px) {
          .brand-intro-card { padding: 24px; }
        }

        .brand-intro-body {
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          color: #475569;
          line-height: 1.8;
          white-space: pre-line;
          margin: 0;
        }
      `}</style>

      <div className="brand-intro-grid">
        {/* LEFT EDITORIAL HEADLINE */}
        <div>
          <div className="brand-intro-sub">
            <Sparkles size={13} color="#F06543" />
            <span>WHO WE ARE</span>
          </div>
          <h2 className="brand-intro-headline">
            {intro.headline}
          </h2>
        </div>

        {/* RIGHT STORY CARD */}
        <div className="brand-intro-card">
          <Quote size={28} color="#F06543" style={{ marginBottom: 16, opacity: 0.8 }} />
          <p className="brand-intro-body">{intro.body}</p>
        </div>
      </div>
    </section>
  );
}
