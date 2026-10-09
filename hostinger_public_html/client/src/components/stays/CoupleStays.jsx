// src/components/stays/CoupleStays.jsx
import React from 'react';
import { Heart, Sun, Sparkles, Anchor, ArrowRight } from 'lucide-react';

export default function CoupleStays({ onExploreCouple }) {
  return (
    <section className="couple-stays-root">
      <style>{`
        .couple-stays-root {
          max-width: 1340px; margin: 0 auto; padding: 60px 24px;
        }

        .couple-card {
          background: #ffffff;
          backdrop-filter: blur(25px); -webkit-backdrop-filter: blur(25px);
          border: 1.5px solid rgba(244, 114, 182, 0.3);
          border-radius: 28px; overflow: hidden;
          display: grid; grid-template-columns: 1fr 1.1fr;
          box-shadow: 0 24px 64px rgba(0, 0, 0, 0.6), 0 0 40px rgba(244, 114, 182, 0.1);
        }
        @media (max-width: 900px) {
          .couple-card { grid-template-columns: 1fr; }
        }

        .couple-img-box {
          position: relative; min-height: 380px; overflow: hidden;
        }
        .couple-img-box img {
          width: 100%; height: 100%; object-fit: cover;
        }

        .couple-body {
          padding: 44px; display: flex; flex-direction: column; justify-content: space-between;
        }
        @media (max-width: 640px) {
          .couple-body { padding: 24px; }
        }

        .couple-eyebrow {
          display: flex; align-items: center; gap: 6px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; color: #f472b6;
          letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 8px;
        }

        .couple-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(32px, 4.5vw, 54px);
          font-weight: 600; color: #0B2545; line-height: 1.1; margin: 0 0 14px;
        }

        .couple-desc {
          font-family: 'Inter', sans-serif;
          font-size: 14px; color: #64748b; line-height: 1.65; margin-bottom: 24px;
        }

        .couple-pill-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 28px;
        }
        .couple-pill {
          font-family: 'Space Grotesk', sans-serif; fontSize: 12; color: #334155; font-weight: 700;
          background: #ffffff; border: 1px solid rgba(244, 114, 182, 0.2);
          padding: 10px 14px; border-radius: 14px; display: flex; align-items: center; gap: 8px;
        }

        .couple-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; letter-spacing: 0.08em;
          color: #334155; background: rgba(244, 114, 182, 0.15);
          border: 1px solid rgba(244, 114, 182, 0.4);
          padding: 13px 26px; border-radius: 14px;
          cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
          transition: all 0.3s ease; align-self: flex-start;
        }
        .couple-btn:hover {
          background: #fdf2f8; color: #db2777;
          box-shadow: 0 8px 24px rgba(244, 114, 182, 0.4);
        }
      `}</style>

      <div className="couple-card">
        <div className="couple-img-box">
          <img
            src="https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&w=900&q=85"
            alt="Couple Honeymoon Stay Andaman"
          />
        </div>

        <div className="couple-body">
          <div>
            <div className="couple-eyebrow">
              <Heart size={14} color="#f472b6" />
              <span>HONEYMOON & ROMANCE</span>
            </div>
            <h2 className="couple-title">MADE FOR TWO</h2>
            <p className="couple-desc">
              Discover stays designed for slow mornings, ocean views, private candlelit beach dining, and unforgettable moments together.
            </p>

            <div className="couple-pill-grid">
              <div className="couple-pill"><Sun size={14} color="#f472b6" /> Private Beach Access</div>
              <div className="couple-pill"><Sparkles size={14} color="#f472b6" /> Private Pool Villas</div>
              <div className="couple-pill"><Heart size={14} color="#f472b6" /> Honeymoon Setup</div>
              <div className="couple-pill"><Anchor size={14} color="#f472b6" /> Candlelit Dining</div>
            </div>
          </div>

          <button onClick={onExploreCouple} className="couple-btn">
            <span>EXPLORE COUPLE STAYS</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}
