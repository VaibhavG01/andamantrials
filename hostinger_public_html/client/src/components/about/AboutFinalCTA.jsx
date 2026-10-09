// src/components/about/AboutFinalCTA.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Final Brand Statement & Call To Action Component

import React from 'react';
import { ArrowRight, Compass } from 'lucide-react';

export default function AboutFinalCTA({ onStartJourney }) {
  return (
    <section className="about-final-cta-root">
      <style>{`
        .about-final-cta-root {
          max-width: 1340px;
          margin: 0 auto 80px;
          padding: 0 24px;
        }

        .about-final-card {
          position: relative;
          border-radius: 28px;
          overflow: hidden;
          padding: 70px 48px;
          text-align: center;
          background: #f8fafc;
          border: 1.5px solid #e2e8f0;
          box-shadow: 0 24px 64px rgba(0, 0, 0, 0.6), 0 0 40px rgba(33, 230, 193, 0.1);
        }
        @media (max-width: 640px) {
          .about-final-card { padding: 48px 24px; }
        }

        .about-final-bg {
          position: absolute; inset: 0; z-index: 1;
        }
        .about-final-bg img {
          width: 100%; height: 100%; object-fit: cover;
          filter: brightness(0.4) saturate(1.2);
        }

        .about-final-overlay {
          position: absolute; inset: 0; z-index: 2;
          background: linear-gradient(180deg, rgba(2, 14, 22, 0.75) 0%, #f8fafc 100%);
        }

        .about-final-content {
          position: relative; z-index: 3; max-width: 760px; margin: 0 auto;
        }

        .about-final-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(34px, 5.5vw, 60px);
          font-weight: 600; color: #0B2545;
          line-height: 1.06; margin: 0 0 16px;
        }

        .about-final-desc {
          font-family: 'Inter', sans-serif;
          font-size: 15px; color: #475569;
          line-height: 1.65; margin: 0 auto 32px;
        }

        .about-final-btns {
          display: flex; align-items: center; justify-content: center;
          gap: 16px; flex-wrap: wrap;
        }

        .about-final-btn-primary {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 800; letter-spacing: 0.08em;
          color: #ffffff; background: linear-gradient(135deg, #FF6B4A, #F06543);
          border: none; padding: 14px 30px; border-radius: 16px;
          cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
          transition: all 0.3s ease; box-shadow: 0 8px 24px rgba(22, 217, 255, 0.35);
          text-decoration: none;
        }
        .about-final-btn-primary:hover {
          transform: translateY(-3px); box-shadow: 0 12px 36px rgba(22, 217, 255, 0.55);
        }

        .about-final-btn-sec {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 800; letter-spacing: 0.08em;
          color: #0B2545; background: #f1f5f9;
          border: 1px solid #cbd5e1;
          padding: 14px 28px; border-radius: 16px;
          cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
          transition: all 0.3s ease; text-decoration: none; backdrop-filter: blur(12px);
        }
        .about-final-btn-sec:hover {
          border-color: #F06543; color: #F06543; background: rgba(33, 230, 193, 0.1);
          transform: translateY(-3px);
        }
      `}</style>

      <div className="about-final-card">
        <div className="about-final-bg">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=90"
            alt="Tropical Andaman Sunset"
          />
        </div>
        <div className="about-final-overlay" />

        <div className="about-final-content">
          <h2 className="about-final-title">
            ANDAMAN ISN'T JUST A PLACE YOU VISIT. <br />
            <span style={{ color: '#F06543' }}>IT'S A PLACE YOU EXPERIENCE.</span>
          </h2>
          <p className="about-final-desc">
            Andaman Trails is here to help you discover it your way. Let's create your perfect island story together.
          </p>

          <div className="about-final-btns">
            <a href="/plan-trip" className="about-final-btn-primary">
              <span>START YOUR JOURNEY</span>
              <ArrowRight size={15} />
            </a>

            <a href="/destinations" className="about-final-btn-sec">
              <Compass size={15} />
              <span>EXPLORE DESTINATIONS</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
