// src/components/about/LocalExperience.jsx
// ─────────────────────────────────────────────────────────────────────────────
// "ROOTED IN ANDAMAN" Image Collage & Floating Glass Tags

import React from 'react';
import { Compass, Sparkles } from 'lucide-react';

const FLOATING_TAGS = [
  { id: 't1', label: 'ISLAND LIFE', color: '#F06543' },
  { id: 't2', label: 'MARINE ADVENTURES', color: '#F06543' },
  { id: 't3', label: 'LOCAL CULTURE', color: '#f0c060' },
  { id: 't4', label: 'TROPICAL ESCAPES', color: '#ff4f7b' },
  { id: 't5', label: 'HIDDEN GEMS', color: '#F06543' },
];

export default function LocalExperience() {
  return (
    <section className="local-exp-root">
      <style>{`
        .local-exp-root {
          max-width: 1340px;
          margin: 0 auto;
          padding: 60px 24px 80px;
        }

        .local-exp-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 40px;
          align-items: center;
        }
        @media (max-width: 900px) {
          .local-exp-grid { grid-template-columns: 1fr; }
        }

        .local-exp-sub {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.2em;
          color: #F06543;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 8px;
        }

        .local-exp-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(32px, 4.5vw, 52px);
          font-weight: 600;
          color: #0B2545;
          line-height: 1.1;
          margin: 0 0 16px;
        }

        .local-exp-desc {
          font-family: 'Inter', sans-serif;
          font-size: 14.5px;
          color: #64748b;
          line-height: 1.7;
          margin: 0 0 24px;
        }

        .local-tag-pills-row {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .local-tag-pill {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px;
          font-weight: 800;
          letter-spacing: 0.08em;
          padding: 7px 16px;
          border-radius: 20px;
          background: #ffffff;
          backdrop-filter: blur(12px);
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
        }

        /* Collage Grid */
        .collage-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          position: relative;
        }
        .collage-img-wrap {
          border-radius: 20px;
          overflow: hidden;
          border: 1.5px solid #e2e8f0;
          box-shadow: 0 12px 32px rgba(0,0,0,0.5);
          height: 180px;
        }
        .collage-img-wrap img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 0.5s ease;
        }
        .collage-img-wrap:hover img {
          transform: scale(1.08);
        }
      `}</style>

      <div className="local-exp-grid">
        {/* LEFT TEXT */}
        <div>
          <div className="local-exp-sub">
            <Compass size={13} color="#F06543" />
            <span>AUTHENTIC ISLAND CONNECTIONS</span>
          </div>
          <h2 className="local-exp-title">ROOTED IN ANDAMAN</h2>
          <p className="local-exp-desc">
            The best way to experience a destination is to truly understand it. We connect you directly with local island culture, native dive masters, coastal seafood traditions, and untouched tropical wilderness.
          </p>

          {/* FLOATING GLASS TAGS */}
          <div className="local-tag-pills-row">
            {FLOATING_TAGS.map((t) => (
              <span key={t.id} className="local-tag-pill" style={{ color: t.color, borderColor: `${t.color}44` }}>
                {t.label}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT COLLAGE */}
        <div className="collage-grid">
          <div className="collage-img-wrap" style={{ height: 210 }}>
            <img src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80" alt="Scuba Diving" />
          </div>
          <div className="collage-img-wrap" style={{ height: 170, marginTop: 40 }}>
            <img src="https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80" alt="Honeymoon Beach" />
          </div>
          <div className="collage-img-wrap" style={{ height: 170 }}>
            <img src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=600&q=80" alt="Island Boats" />
          </div>
          <div className="collage-img-wrap" style={{ height: 210, marginTop: -40 }}>
            <img src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&w=600&q=80" alt="Hidden Gem" />
          </div>
        </div>
      </div>
    </section>
  );
}
