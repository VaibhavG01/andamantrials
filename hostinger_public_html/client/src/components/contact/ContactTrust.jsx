import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Compass, Sparkles, Award, ShieldCheck } from 'lucide-react';

const DEFAULT_TRUST_POINTS = [
  { id: 'local-intel', title: 'REAL LOCAL INTELLIGENCE', desc: 'Stationed on the islands, providing up-to-the-minute weather, ferry schedule, and water visibility advice.', icon: 'Compass' },
  { id: 'fast-response', title: '1-ON-1 DEDICATED EXPERT', desc: 'No robotic call centers. Speak directly with a dedicated Andaman holiday planner for your entire journey.', icon: 'Sparkles' },
  { id: 'transparent', title: 'CLEAR & HONEST PRICING', desc: 'Itemized transparent quotes with zero hidden jetty fees, permit charges, or surprise tourist markups.', icon: 'ShieldCheck' },
  { id: 'custom-craft', title: '100% CUSTOMIZABLE PLANS', desc: 'Tailor-made itineraries configured around your specific dates, budget, flight timing, and pace.', icon: 'Award' },
];

const ICON_MAP = {
  Compass,
  Sparkles,
  Award,
  ShieldCheck,
};

export default function ContactTrust({ trustPoints = DEFAULT_TRUST_POINTS }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    gsap.fromTo(
      containerRef.current.children,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power2.out' }
    );
  }, []);

  return (
    <section className="contact-trust-section">
      <style>{`
        .contact-trust-section {
          max-width: 1340px;
          margin: 0 auto;
          padding: 60px 24px;
        }

        .trust-hdr {
          text-align: center;
          margin-bottom: 40px;
        }

        .trust-sub {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px;
          font-weight: 800;
          letter-spacing: 0.2em;
          color: #F06543;
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        .trust-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(28px, 4vw, 44px);
          font-weight: 600;
          color: #0B2545;
          margin: 0;
        }

        .trust-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        @media (max-width: 1024px) {
          .trust-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 540px) {
          .trust-grid { grid-template-columns: 1fr; }
        }

        .trust-card {
          background: #ffffff;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1.5px solid #e2e8f0;
          border-radius: 20px;
          padding: 28px 24px;
          transition: all 0.35s ease;
        }
        .trust-card:hover {
          transform: translateY(-5px);
          border-color: rgba(33, 230, 193, 0.45);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(33, 230, 193, 0.12);
        }

        .trust-icon-box {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: rgba(33, 230, 193, 0.12);
          color: #F06543;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
        }
      `}</style>

      <div className="trust-hdr">
        <div className="trust-sub">THE ANDAMAN TRAILS ADVANTAGE</div>
        <h2 className="trust-title">WHY TALK TO US?</h2>
      </div>

      <div ref={containerRef} className="trust-grid">
        {trustPoints.map((point) => {
          const Icon = ICON_MAP[point.icon] || Compass;
          return (
            <div key={point.id} className="trust-card">
              <div className="trust-icon-box">
                <Icon size={24} />
              </div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, fontWeight: 800, color: '#334155', letterSpacing: '0.04em', marginBottom: 8 }}>
                {point.title}
              </div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12.5, color: '#64748b', lineHeight: 1.6 }}>
                {point.desc}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
