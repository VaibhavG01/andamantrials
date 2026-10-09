// src/components/cruises/WhyCruise.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Eye, Sparkles, Lock, Map, HeadphonesIcon } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const REASONS = [
  { icon: Eye, title: 'UNFORGETTABLE VIEWS', desc: 'Experience the Andaman Islands from the open sea — a perspective that cannot be found on land.' },
  { icon: Sparkles, title: 'CURATED EXPERIENCES', desc: 'Thoughtfully selected cruise experiences designed around the beauty and rhythm of the Andaman Sea.' },
  { icon: Lock, title: 'PRIVATE OPTIONS', desc: 'Choose experiences designed exclusively around your group, whether a couple, family, or private celebration.' },
  { icon: Map, title: 'SCENIC ROUTES', desc: 'Discover the Andaman coastline, reefs, and islands from a completely new vantage point.' },
  { icon: HeadphonesIcon, title: 'TRAVEL SUPPORT', desc: 'Our team is here before and during your experience to ensure everything goes smoothly.' },
];

export default function WhyCruise() {
  const cardsRef = useRef(null);

  useEffect(() => {
    if (!cardsRef.current) return;
    const cards = cardsRef.current.querySelectorAll('.reason-card');
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
    <section className="why-root">
      <style>{`
        .why-root {
          max-width: 1340px;
          margin: 0 auto;
          padding: 80px 24px;
        }

        .why-eyebrow {
          display: flex; align-items: center; justify-content: center; gap: 6px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; color: #F06543;
          letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 8px;
        }

        .why-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(32px, 4.5vw, 52px);
          font-weight: 600; color: #0B2545; text-align: center;
          margin: 0 0 48px; line-height: 1.1;
        }

        .reasons-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 20px;
        }
        @media (max-width: 1100px) {
          .reasons-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 680px) {
          .reasons-grid { grid-template-columns: 1fr; }
        }

        .reason-card {
          background: #ffffff;
          backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px);
          border: 1px solid #e2e8f0;
          border-radius: 22px; padding: 30px 20px;
          display: flex; flex-direction: column; align-items: center; text-align: center;
          transition: all 0.35s ease;
        }
        .reason-card:hover {
          transform: translateY(-6px);
          border-color: rgba(33, 230, 193, 0.45);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5), 0 0 20px rgba(33, 230, 193, 0.12);
        }

        .reason-icon-box {
          width: 52px; height: 52px; border-radius: 50%;
          background: linear-gradient(135deg, rgba(22, 217, 255, 0.2), rgba(33, 230, 193, 0.15));
          border: 1px solid rgba(33, 230, 193, 0.3);
          display: flex; align-items: center; justify-content: center;
          color: #F06543; margin-bottom: 18px;
          transition: transform 0.3s ease;
        }
        .reason-card:hover .reason-icon-box {
          transform: scale(1.1); color: #F06543;
        }

        .reason-card-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 900; color: #0B2545;
          letter-spacing: 0.08em; text-transform: uppercase; margin: 0 0 10px;
        }

        .reason-card-desc {
          font-family: 'Inter', sans-serif;
          font-size: 12.5px; color: #64748b; line-height: 1.6; margin: 0;
        }
      `}</style>

      <div className="why-eyebrow">
        <Sparkles size={14} color="#F06543" />
        <span>WHY SAIL WITH US</span>
      </div>
      <h2 className="why-title">WHY CRUISE WITH ANDAMAN TRAILS?</h2>

      <div ref={cardsRef} className="reasons-grid">
        {REASONS.map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <div key={idx} className="reason-card">
              <div className="reason-icon-box">
                <IconComponent size={22} />
              </div>
              <h3 className="reason-card-title">{item.title}</h3>
              <p className="reason-card-desc">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
