// src/components/activities/ActivityTips.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Clock, Plane, Shirt, ShieldCheck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const TIPS = [
  {
    icon: Clock,
    title: 'EARLY MORNING WATER CLARITY',
    desc: 'Morning 06:30 AM to 09:00 AM offers the highest underwater visibility, calmest swells, and most active marine life.',
  },
  {
    icon: Plane,
    title: 'NO-FLY DIVING WINDOW',
    desc: 'Always keep an 18 to 24-hour gap between your last scuba dive and your return flight to prevent decompression issues.',
  },
  {
    icon: Shirt,
    title: 'COMFORTABLE SWIM ATTIRE',
    desc: 'Wear quick-dry beachwear or synthetic t-shirts. Towels and changing locker rooms are available at all partner dive hubs.',
  },
  {
    icon: ShieldCheck,
    title: 'NON-SWIMMER REASSURANCE',
    desc: 'Over 85% of our scuba divers and sea walkers are complete non-swimmers. Dedicated 1:1 divemasters hold you the entire time.',
  },
];

export default function ActivityTips() {
  const cardsRef = useRef(null);

  useEffect(() => {
    if (!cardsRef.current) return;
    const cards = cardsRef.current.querySelectorAll('.tip-act-card');
    gsap.fromTo(
      cards,
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: cardsRef.current, start: 'top 85%' }
      }
    );
  }, []);

  return (
    <section className="tips-act-root">
      <style>{`
        .tips-act-root {
          max-width: 1100px;
          margin: 0 auto;
          padding: 60px 24px 80px;
        }

        .tips-act-eyebrow {
          display: flex; align-items: center; justify-content: center; gap: 6px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; color: #F06543;
          letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 8px;
        }

        .tips-act-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(32px, 4.5vw, 52px);
          font-weight: 700; color: #0B2545; text-align: center;
          margin: 0 0 44px; line-height: 1.1;
        }

        .tips-act-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        @media (max-width: 900px) {
          .tips-act-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 500px) {
          .tips-act-grid { grid-template-columns: 1fr; }
        }

        .tip-act-card {
          background: #ffffff;
          border: 2px solid #e2e8f0;
          border-radius: 20px; padding: 28px 20px;
          display: flex; flex-direction: column; align-items: center; text-align: center;
          transition: all 0.35s ease; position: relative;
          box-shadow: 0 4px 20px rgba(0, 45, 98, 0.04);
        }
        .tip-act-card:hover {
          transform: translateY(-6px);
          border-color: #F06543;
          box-shadow: 0 16px 40px rgba(0, 45, 98, 0.12);
        }

        .tip-act-num {
          position: absolute; top: 14px; right: 14px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 900; color: #F06543; opacity: 0.8;
        }

        .tip-act-icon-box {
          width: 50px; height: 50px; border-radius: 50%;
          background: linear-gradient(135deg, rgba(13, 148, 136, 0.15), rgba(0, 45, 98, 0.08));
          border: 1.5px solid rgba(13, 148, 136, 0.3);
          display: flex; align-items: center; justify-content: center;
          color: #F06543; margin-bottom: 16px;
        }

        .tip-act-card-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 900; color: #0B2545;
          letter-spacing: 0.08em; text-transform: uppercase; margin: 0 0 8px;
        }

        .tip-act-card-desc {
          font-family: 'Inter', sans-serif;
          font-size: 12.5px; color: #64748b; line-height: 1.6; margin: 0; font-weight: 500;
        }
      `}</style>

      <div className="tips-act-eyebrow">
        <Clock size={14} color="#F06543" />
        <span>ESSENTIAL TRAVEL ADVICE</span>
      </div>
      <h2 className="tips-act-title">BEFORE YOU DIVE & EXPLORE</h2>

      <div ref={cardsRef} className="tips-act-grid">
        {TIPS.map((tip, idx) => {
          const IconComp = tip.icon;
          return (
            <div key={idx} className="tip-act-card">
              <span className="tip-act-num">0{idx + 1}</span>
              <div className="tip-act-icon-box">
                <IconComp size={20} />
              </div>
              <h3 className="tip-act-card-title">{tip.title}</h3>
              <p className="tip-act-card-desc">{tip.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
