// src/components/cruises/CruiseTips.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Clock, Cloud, Package, Droplets } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const TIPS = [
  { icon: Clock, title: 'ARRIVE EARLY', desc: 'Please arrive at the departure point at least 15–20 minutes before the scheduled time. Bring your booking confirmation.' },
  { icon: Cloud, title: 'CHECK CONDITIONS', desc: 'Ocean conditions may affect cruise schedules. Our team will notify you if any changes are needed due to weather.' },
  { icon: Package, title: 'TRAVEL LIGHT', desc: 'Carry only essential belongings. Large luggage is generally not suitable for cruise experiences.' },
  { icon: Droplets, title: 'STAY HYDRATED', desc: 'Keep drinking water with you, especially during daytime departures. Reef-safe sunscreen is also recommended.' },
];

export default function CruiseTips() {
  const cardsRef = useRef(null);

  useEffect(() => {
    if (!cardsRef.current) return;
    const cards = cardsRef.current.querySelectorAll('.tip-card');
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
    <section className="tips-root">
      <style>{`
        .tips-root {
          max-width: 1100px;
          margin: 0 auto;
          padding: 60px 24px 80px;
        }

        .tips-eyebrow {
          display: flex; align-items: center; justify-content: center; gap: 6px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; color: #F06543;
          letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 8px;
        }

        .tips-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(32px, 4.5vw, 52px);
          font-weight: 600; color: #0B2545; text-align: center;
          margin: 0 0 44px; line-height: 1.1;
        }

        .tips-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        @media (max-width: 900px) {
          .tips-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 500px) {
          .tips-grid { grid-template-columns: 1fr; }
        }

        .tip-card {
          background: #ffffff;
          backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px);
          border: 1px solid #e2e8f0;
          border-radius: 20px; padding: 28px 20px;
          display: flex; flex-direction: column; align-items: center; text-align: center;
          transition: all 0.35s ease; position: relative;
        }
        .tip-card:hover {
          transform: translateY(-6px);
          border-color: rgba(33, 230, 193, 0.45);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5), 0 0 20px rgba(33, 230, 193, 0.12);
        }

        .tip-num {
          position: absolute; top: 14px; right: 14px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 800; color: #F06543; opacity: 0.8;
        }

        .tip-icon-box {
          width: 50px; height: 50px; border-radius: 50%;
          background: linear-gradient(135deg, rgba(22, 217, 255, 0.2), rgba(33, 230, 193, 0.15));
          border: 1px solid rgba(33, 230, 193, 0.3);
          display: flex; align-items: center; justify-content: center;
          color: #F06543; margin-bottom: 16px;
        }

        .tip-card-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 900; color: #0B2545;
          letter-spacing: 0.08em; text-transform: uppercase; margin: 0 0 8px;
        }

        .tip-card-desc {
          font-family: 'Inter', sans-serif;
          font-size: 12.5px; color: #64748b; line-height: 1.6; margin: 0;
        }
      `}</style>

      <div className="tips-eyebrow">
        <Clock size={14} color="#F06543" />
        <span>ESSENTIAL ADVICE</span>
      </div>
      <h2 className="tips-title">BEFORE YOU SAIL</h2>

      <div ref={cardsRef} className="tips-grid">
        {TIPS.map((tip, idx) => {
          const IconComp = tip.icon;
          return (
            <div key={idx} className="tip-card">
              <span className="tip-num">0{idx + 1}</span>
              <div className="tip-icon-box">
                <IconComp size={20} />
              </div>
              <h3 className="tip-card-title">{tip.title}</h3>
              <p className="tip-card-desc">{tip.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
