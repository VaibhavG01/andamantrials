// src/components/destinations/DestinationCTA.jsx
import React from 'react';
import { ArrowRight, Sparkles, Compass, Ship } from 'lucide-react';

export default function DestinationCTA({ onPlanTrip, onExploreFerries }) {
  return (
    <section className="dest-cta-root">
      <style>{`
        .dest-cta-root {
          max-width: 1340px;
          margin: 0 auto 90px;
          padding: 0 24px;
        }

        .dest-cta-box {
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
          .dest-cta-box { padding: 36px 20px; }
        }

        .dest-cta-glow-1 {
          position: absolute; top: -80px; right: -80px;
          width: 260px; height: 260px; border-radius: 50%;
          background: rgba(13, 148, 136, 0.12);
          filter: blur(50px); pointer-events: none;
        }
        .dest-cta-glow-2 {
          position: absolute; bottom: -80px; left: -80px;
          width: 260px; height: 260px; border-radius: 50%;
          background: rgba(0, 45, 98, 0.08);
          filter: blur(50px); pointer-events: none;
        }

        .dest-cta-btn-primary {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 900; letter-spacing: 0.08em;
          color: #ffffff; background: linear-gradient(135deg, #FF6B4A 0%, #F06543 100%);
          border: 2px solid #F06543; padding: 16px 34px; border-radius: 16px;
          cursor: pointer; display: inline-flex; align-items: center; justify-content: center;
          gap: 8px; transition: all 0.3s ease; box-shadow: 0 8px 28px rgba(13, 148, 136, 0.35);
        }
        .dest-cta-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 36px rgba(13, 148, 136, 0.5);
          background: linear-gradient(135deg, #F06543 0%, #0B2545 100%);
        }

        .dest-cta-btn-secondary {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 900; letter-spacing: 0.08em;
          color: #0B2545; background: #FFF0EB;
          border: 2px solid #F06543; padding: 16px 32px; border-radius: 16px;
          cursor: pointer; display: inline-flex; align-items: center; justify-content: center;
          gap: 8px; transition: all 0.3s ease;
        }
        .dest-cta-btn-secondary:hover {
          background: #0B2545; color: #ffffff; border-color: #0B2545;
          box-shadow: 0 8px 24px rgba(0, 45, 98, 0.25);
        }
      `}</style>

      <div className="dest-cta-box">
        <div className="dest-cta-glow-1" />
        <div className="dest-cta-glow-2" />

        <div style={{ position: 'relative', zIndex: 2, maxWidth: 740, margin: '0 auto' }}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF0EB] border-2 border-[#F06543]/30 text-[#F06543] text-[11px] font-black uppercase tracking-widest font-mono mb-4">
            <Sparkles size={14} className="text-[#ffd700]" />
            <span>24/7 ISLAND CONCIERGE DESK</span>
          </div>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(30px, 4.5vw, 50px)', fontWeight: 700, color: '#0B2545', margin: '0 0 16px', lineHeight: 1.15 }}>
            Ready to Experience the Emerald Andaman Islands?
          </h2>

          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#64748b', lineHeight: 1.65, margin: '0 auto 34px', maxWidth: 640 }}>
            Connect with our Port Blair travel specialists for customized multi-island itineraries, confirmed catamaran ferry passes, verified beachfront resort bookings, and private jetty transfers.
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
              className="dest-cta-btn-primary"
            >
              <span>BUILD CUSTOM ISLAND TRIP</span>
              <ArrowRight size={15} />
            </button>

            <button
              onClick={() => {
                if (onExploreFerries) onExploreFerries();
                else {
                  window.history.pushState({}, '', '/ferries');
                  window.dispatchEvent(new Event('popstate'));
                }
              }}
              className="dest-cta-btn-secondary"
            >
              <Ship size={15} />
              <span>CHECK FERRY SCHEDULES</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
