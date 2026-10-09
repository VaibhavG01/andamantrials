// src/components/contact/ContactCTA.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Final Cinematic Contact CTA Component

import React from 'react';
import { ArrowRight, Compass } from 'lucide-react';

export default function ContactCTA({ onStartPlanning }) {
  return (
    <section className="contact-cta-section">
      <style>{`
        .contact-cta-section {
          max-width: 1340px;
          margin: 0 auto 80px;
          padding: 0 24px;
        }

        .contact-cta-card {
          position: relative;
          border-radius: 28px;
          overflow: hidden;
          padding: 60px 48px;
          text-align: center;
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          box-shadow: 0 24px 64px rgba(0, 0, 0, 0.6), 0 0 40px rgba(22, 217, 255, 0.1);
        }
        @media (max-width: 640px) {
          .contact-cta-card { padding: 40px 24px; }
        }

        .contact-cta-bg {
          position: absolute;
          inset: 0;
          z-index: 1;
        }
        .contact-cta-bg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.4) saturate(1.2);
        }

        .contact-cta-overlay {
          position: absolute;
          inset: 0;
          z-index: 2;
          background: linear-gradient(180deg, rgba(2, 14, 22, 0.75) 0%, #f8fafc 100%);
        }

        .contact-cta-content {
          position: relative;
          z-index: 3;
          max-width: 720px;
          margin: 0 auto;
        }

        .contact-cta-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(32px, 4.8vw, 54px);
          font-weight: 600;
          color: #0B2545;
          line-height: 1.1;
          margin: 0 0 14px;
        }

        .contact-cta-desc {
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          color: #475569;
          line-height: 1.65;
          margin: 0 auto 32px;
        }

        .contact-cta-btns {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .contact-cta-btn-primary {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #ffffff;
          background: linear-gradient(135deg, #FF6B4A, #F06543);
          border: none;
          padding: 14px 30px;
          border-radius: 16px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
          box-shadow: 0 8px 24px rgba(22, 217, 255, 0.35);
          text-decoration: none;
        }
        .contact-cta-btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 36px rgba(22, 217, 255, 0.55);
        }

        .contact-cta-btn-sec {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #0B2545;
          background: #f1f5f9;
          border: 1px solid #cbd5e1;
          padding: 14px 28px;
          border-radius: 16px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
          text-decoration: none;
          backdrop-filter: blur(12px);
        }
        .contact-cta-btn-sec:hover {
          border-color: #F06543;
          color: #F06543;
          background: rgba(33, 230, 193, 0.1);
          transform: translateY(-3px);
        }
      `}</style>

      <div className="contact-cta-card">
        <div className="contact-cta-bg">
          <img
            src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1600&q=90"
            alt="Scuba & Ocean CTA"
          />
        </div>
        <div className="contact-cta-overlay" />

        <div className="contact-cta-content">
          <h2 className="contact-cta-title">
            READY TO START YOUR <br />
            <span style={{ color: '#F06543' }}>ANDAMAN ADVENTURE?</span>
          </h2>
          <p className="contact-cta-desc">
            Tell us what you're dreaming of. We'll help you turn it into an unforgettable tropical island journey.
          </p>

          <div className="contact-cta-btns">
            <button onClick={onStartPlanning} className="contact-cta-btn-primary">
              <span>START PLANNING</span>
              <ArrowRight size={15} />
            </button>

            <a href="/destinations" className="contact-cta-btn-sec">
              <Compass size={15} />
              <span>EXPLORE DESTINATIONS</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
