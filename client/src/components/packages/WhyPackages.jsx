// src/components/packages/WhyPackages.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck, Sparkles, Ship, Building2, HeadphonesIcon } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const REASONS = [
  {
    icon: Ship,
    title: 'CONFIRMED LUXURY CATAMARANS',
    desc: 'Instant confirmed seat reservations on Makruzz & Nautika luxury catamarans with hassle-free jetty baggage handling.',
  },
  {
    icon: Building2,
    title: 'HANDPICKED 4★ & 5★ RESORTS',
    desc: 'Strictly vetted beachfront cottages, private pool villas and luxury heritage retreats with daily complimentary breakfast.',
  },
  {
    icon: ShieldCheck,
    title: 'TRANSPARENT ZERO HIDDEN COST',
    desc: 'All inter-island ferry passes, port entrance permits, private AC transfers and monument entries are 100% included upfront.',
  },
  {
    icon: Sparkles,
    title: '100% TAILOR-MADE FLEXIBILITY',
    desc: 'Customize any day-by-day plan: add scuba diving, private candlelit beach dinners, night kayaking or extra nights seamlessly.',
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 GROUND ISLAND DESK',
    desc: 'Dedicated Port Blair local concierge desk providing private airport receptions, jetty coordination and live weather monitoring.',
  },
];

export default function WhyPackages() {
  const cardsRef = useRef(null);

  useEffect(() => {
    if (!cardsRef.current) return;
    const cards = cardsRef.current.querySelectorAll('.why-pkg-card');
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
    <section className="why-pkg-root">
      <style>{`
        .why-pkg-root {
          max-width: 1340px;
          margin: 0 auto;
          padding: 80px 24px;
        }

        .why-pkg-eyebrow {
          display: flex; align-items: center; justify-content: center; gap: 6px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; color: #F06543;
          letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 8px;
        }

        .why-pkg-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(32px, 4.5vw, 52px);
          font-weight: 700; color: #0B2545; text-align: center;
          margin: 0 0 48px; line-height: 1.1;
        }

        .reasons-pkg-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 20px;
        }
        @media (max-width: 1100px) {
          .reasons-pkg-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 680px) {
          .reasons-pkg-grid { grid-template-columns: 1fr; }
        }

        .why-pkg-card {
          background: #ffffff;
          border: 2px solid #e2e8f0;
          border-radius: 22px; padding: 30px 20px;
          display: flex; flex-direction: column; align-items: center; text-align: center;
          transition: all 0.35s ease;
          box-shadow: 0 4px 20px rgba(0, 45, 98, 0.04);
        }
        .why-pkg-card:hover {
          transform: translateY(-6px);
          border-color: #F06543;
          box-shadow: 0 16px 40px rgba(0, 45, 98, 0.12);
        }

        .why-pkg-icon-box {
          width: 54px; height: 54px; border-radius: 50%;
          background: linear-gradient(135deg, rgba(13, 148, 136, 0.15), rgba(0, 45, 98, 0.08));
          border: 1.5px solid rgba(13, 148, 136, 0.3);
          display: flex; align-items: center; justify-content: center;
          color: #F06543; margin-bottom: 18px;
          transition: transform 0.3s ease;
        }
        .why-pkg-card:hover .why-pkg-icon-box {
          transform: scale(1.1);
          background: #0B2545;
          color: #ffffff;
          border-color: #0B2545;
        }

        .why-pkg-card-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 900; color: #0B2545;
          letter-spacing: 0.08em; text-transform: uppercase; margin: 0 0 10px;
        }

        .why-pkg-card-desc {
          font-family: 'Inter', sans-serif;
          font-size: 12.5px; color: #64748b; line-height: 1.6; margin: 0; font-weight: 500;
        }
      `}</style>

      <div className="why-pkg-eyebrow">
        <Sparkles size={14} color="#F06543" />
        <span>WHY TRAVEL WITH US</span>
      </div>
      <h2 className="why-pkg-title">WHY BOOK HOLIDAY PACKAGES WITH ANDAMAN TRAILS?</h2>

      <div ref={cardsRef} className="reasons-pkg-grid">
        {REASONS.map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <div key={idx} className="why-pkg-card">
              <div className="why-pkg-icon-box">
                <IconComponent size={24} />
              </div>
              <div className="why-pkg-card-title">{item.title}</div>
              <p className="why-pkg-card-desc">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
