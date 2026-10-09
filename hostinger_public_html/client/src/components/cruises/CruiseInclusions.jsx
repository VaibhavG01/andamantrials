// src/components/cruises/CruiseInclusions.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Ship, Map, Shield, Users, Music, Coffee, Compass } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const INCLUSIONS = [
  { icon: Ship, title: 'CRUISE EXPERIENCE', desc: 'A scenic ocean journey aboard a well-maintained vessel with experienced crew.' },
  { icon: Map, title: 'SCENIC ROUTES', desc: 'Carefully selected routes showcasing the best of the Andaman coastline.' },
  { icon: Shield, title: 'SAFETY FIRST', desc: 'Certified life jackets, safety briefings, and onboard safety protocols.' },
  { icon: Users, title: 'ONBOARD CREW', desc: 'Dedicated marine crew and hospitality support throughout your journey.' },
  { icon: Music, title: 'RELAXED ATMOSPHERE', desc: 'A calm, unhurried ocean environment to enjoy the journey.' },
  { icon: Coffee, title: 'ONBOARD REFRESHMENTS', desc: 'Basic refreshments available on select cruise types. Confirmed at booking.' },
];

export default function CruiseInclusions() {
  const gridRef = useRef(null);

  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll('.inc-card');
    gsap.fromTo(
      cards,
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: gridRef.current, start: 'top 85%' }
      }
    );
  }, []);

  return (
    <section className="inclusions-root">
      <style>{`
        .inclusions-root {
          max-width: 1340px;
          margin: 0 auto;
          padding: 80px 24px;
        }

        .inc-eyebrow {
          display: flex; align-items: center; justify-content: center; gap: 6px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; color: #F06543;
          letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 8px;
        }

        .inc-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(32px, 4.5vw, 52px);
          font-weight: 600; color: #0B2545; text-align: center;
          margin: 0 0 10px; line-height: 1.1;
        }

        .inc-note {
          font-family: 'Inter', sans-serif;
          font-size: 12.5px; color: #64748b; font-style: italic; text-align: center;
          margin-bottom: 44px;
        }

        .inc-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        @media (max-width: 960px) {
          .inc-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 580px) {
          .inc-grid { grid-template-columns: 1fr; }
        }

        .inc-card {
          background: #ffffff;
          backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px);
          border: 1px solid #e2e8f0;
          border-radius: 22px; padding: 32px 24px; text-align: center;
          display: flex; flex-direction: column; align-items: center;
          transition: all 0.35s ease;
        }
        .inc-card:hover {
          transform: translateY(-6px);
          border-color: rgba(33, 230, 193, 0.45);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5), 0 0 20px rgba(33, 230, 193, 0.12);
        }

        .inc-icon-box {
          width: 56px; height: 56px; border-radius: 50%;
          background: linear-gradient(135deg, rgba(22, 217, 255, 0.2), rgba(33, 230, 193, 0.15));
          border: 1px solid rgba(33, 230, 193, 0.3);
          display: flex; align-items: center; justify-content: center;
          color: #F06543; margin-bottom: 18px; transition: transform 0.3s ease;
        }
        .inc-card:hover .inc-icon-box {
          transform: scale(1.1); color: #F06543;
        }

        .inc-card-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 900; color: #0B2545;
          letter-spacing: 0.08em; text-transform: uppercase; margin: 0 0 10px;
        }

        .inc-card-desc {
          font-family: 'Inter', sans-serif;
          font-size: 13px; color: #64748b; line-height: 1.6; margin: 0;
        }
      `}</style>

      <div className="inc-eyebrow">
        <Compass size={14} color="#F06543" />
        <span>WHAT TO EXPECT</span>
      </div>
      <h2 className="inc-title">WHAT TO EXPECT ONBOARD</h2>
      <p className="inc-note">
        Exact inclusions vary by cruise type and are confirmed at time of booking.
      </p>

      <div ref={gridRef} className="inc-grid">
        {INCLUSIONS.map((item, idx) => {
          const IconComp = item.icon;
          return (
            <div key={idx} className="inc-card">
              <div className="inc-icon-box">
                <IconComp size={24} />
              </div>
              <h3 className="inc-card-title">{item.title}</h3>
              <p className="inc-card-desc">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
