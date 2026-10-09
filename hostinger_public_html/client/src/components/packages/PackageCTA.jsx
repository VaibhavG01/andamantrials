// src/components/packages/PackageCTA.jsx
import React from 'react';
import { ArrowRight, Sparkles, Phone, Compass } from 'lucide-react';

export default function PackageCTA({ onPlanTrip, onContactExpert }) {
  return (
    <section className="pkg-cta-root">
      <style>{`
        .pkg-cta-root {
          max-width: 1340px;
          margin: 0 auto 90px;
          padding: 0 24px;
        }

        .pkg-cta-box {
          background: #ffffff;
          border: 2px solid #e2e8f0;
          border-radius: 32px;
          padding: 54px 36px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 45, 98, 0.08);
          text-align: center;
        }
        @media (max-width: 640px) {
          .pkg-cta-box { padding: 36px 20px; }
        }

        .pkg-cta-glow-1 {
          position: absolute; top: -80px; right: -80px;
          width: 260px; height: 260px; border-radius: 50%;
          background: rgba(13, 148, 136, 0.12);
          filter: blur(50px); pointer-events: none;
        }
        .pkg-cta-glow-2 {
          position: absolute; bottom: -80px; left: -80px;
          width: 260px; height: 260px; border-radius: 50%;
          background: rgba(0, 45, 98, 0.08);
          filter: blur(50px); pointer-events: none;
        }

        .pkg-cta-btn-primary {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 900; letter-spacing: 0.08em;
          color: #ffffff; background: linear-gradient(135deg, #FF6B4A 0%, #F06543 100%);
          border: 2px solid #F06543; padding: 16px 34px; border-radius: 16px;
          cursor: pointer; display: inline-flex; align-items: center; justify-content: center;
          gap: 8px; transition: all 0.3s ease; box-shadow: 0 8px 28px rgba(13, 148, 136, 0.35);
        }
        .pkg-cta-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 36px rgba(13, 148, 136, 0.5);
          background: linear-gradient(135deg, #F06543 0%, #0B2545 100%);
        }

        .pkg-cta-btn-secondary {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 900; letter-spacing: 0.08em;
          color: #0B2545; background: #FFF0EB;
          border: 2px solid #F06543; padding: 16px 32px; border-radius: 16px;
          cursor: pointer; display: inline-flex; align-items: center; justify-content: center;
          gap: 8px; transition: all 0.3s ease;
        }
        .pkg-cta-btn-secondary:hover {
          background: #0B2545; color: #ffffff; border-color: #0B2545;
          box-shadow: 0 8px 24px rgba(0, 45, 98, 0.25);
        }
      `}</style>

      <div className="pkg-cta-box">
        <div className="pkg-cta-glow-1" />
        <div className="pkg-cta-glow-2" />

        <div style={{ position: 'relative', zIndex: 2, maxWidth: 740, margin: '0 auto' }}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF0EB] border-2 border-[#F06543]/30 text-[#F06543] text-[11px] font-black uppercase tracking-widest font-mono mb-4">
            <Sparkles size={14} className="text-[#ffd700]" />
            <span>24/7 ISLAND VACATION CONCIERGE</span>
          </div>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(30px, 4.5vw, 50px)', fontWeight: 700, color: '#0B2545', margin: '0 0 16px', lineHeight: 1.15 }}>
            Need a Customized Andaman Island Package?
          </h2>

          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#64748b', lineHeight: 1.65, margin: '0 auto 34px', maxWidth: 640 }}>
            Tell our local island specialists about your dream travel dates, budget, and preferences. We'll craft a customized day-by-day plan with confirmed luxury catamarans and beachfront resorts in under 2 hours.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
            <button
              onClick={() => {
                if (onPlanTrip) onPlanTrip();
                else {
                  window.history.pushState({}, '', '/plan-trip');
                  window.dispatchEvent(new Event('popstate'));
                }
              }}
              className="pkg-cta-btn-primary"
            >
              <span>BUILD CUSTOM HOLIDAY TRIP</span>
              <ArrowRight size={15} />
            </button>

            <button
              onClick={() => {
                if (onContactExpert) onContactExpert();
                else {
                  window.history.pushState({}, '', '/contact');
                  window.dispatchEvent(new Event('popstate'));
                }
              }}
              className="pkg-cta-btn-secondary"
            >
              <Phone size={15} />
              <span>TALK TO LOCAL SPECIALIST</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
