// src/components/activities/WhyActivities.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck, Sparkles, Waves, Award, HeadphonesIcon } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const REASONS = [
  {
    icon: ShieldCheck,
    title: 'PADI & SSI CERTIFIED',
    desc: 'Dedicated 1:1 certified divemasters guide you every second underwater for unmatched personal safety.',
  },
  {
    icon: Sparkles,
    title: 'FREE 4K HD MEDIA',
    desc: 'Complimentary high-definition underwater GoPro photos and videos captured and transferred instantly.',
  },
  {
    icon: Waves,
    title: 'ZERO SWIMMING NEEDED',
    desc: 'Specially engineered shallow-to-deep programs designed specifically for non-swimmers and first-timers.',
  },
  {
    icon: Award,
    title: 'TOP-TIER EQUIPMENT',
    desc: 'World-class Mares and Scubapro diving gear sanitized before every session to global standards.',
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 HARBOUR SUPPORT',
    desc: 'On-ground island concierge desks with instant rescheduling in case of adverse ocean weather.',
  },
];

export default function WhyActivities() {
  const cardsRef = useRef(null);

  useEffect(() => {
    if (!cardsRef.current) return;
    const cards = cardsRef.current.querySelectorAll('.why-act-card');
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
    <section className="why-act-root">
      <style>{`
        .why-act-root {
          max-width: 1340px;
          margin: 0 auto;
          padding: 80px 24px;
        }

        .why-act-eyebrow {
          display: flex; align-items: center; justify-content: center; gap: 6px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; color: #F06543;
          letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 8px;
        }

        .why-act-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(32px, 4.5vw, 52px);
          font-weight: 700; color: #0B2545; text-align: center;
          margin: 0 0 48px; line-height: 1.1;
        }

        .reasons-act-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 20px;
        }
        @media (max-width: 1100px) {
          .reasons-act-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 680px) {
          .reasons-act-grid { grid-template-columns: 1fr; }
        }

        .why-act-card {
          background: #ffffff;
          border: 2px solid #e2e8f0;
          border-radius: 22px; padding: 30px 20px;
          display: flex; flex-direction: column; align-items: center; text-align: center;
          transition: all 0.35s ease;
          box-shadow: 0 4px 20px rgba(0, 45, 98, 0.04);
        }
        .why-act-card:hover {
          transform: translateY(-6px);
          border-color: #F06543;
          box-shadow: 0 16px 40px rgba(0, 45, 98, 0.12);
        }

        .why-act-icon-box {
          width: 54px; height: 54px; border-radius: 50%;
          background: linear-gradient(135deg, rgba(13, 148, 136, 0.15), rgba(0, 45, 98, 0.08));
          border: 1.5px solid rgba(13, 148, 136, 0.3);
          display: flex; align-items: center; justify-content: center;
          color: #F06543; margin-bottom: 18px;
          transition: transform 0.3s ease;
        }
        .why-act-card:hover .why-act-icon-box {
          transform: scale(1.1);
          background: #0B2545;
          color: #ffffff;
          border-color: #0B2545;
        }

        .why-act-card-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 900; color: #0B2545;
          letter-spacing: 0.08em; text-transform: uppercase; margin: 0 0 10px;
        }

        .why-act-card-desc {
          font-family: 'Inter', sans-serif;
          font-size: 12.5px; color: #64748b; line-height: 1.6; margin: 0; font-weight: 500;
        }
      `}</style>

      <div className="why-act-eyebrow">
        <Sparkles size={14} color="#F06543" />
        <span>WHY DIVE WITH US</span>
      </div>
      <h2 className="why-act-title">WHY BOOK ACTIVITIES WITH ANDAMAN TRAILS?</h2>

      <div ref={cardsRef} className="reasons-act-grid">
        {REASONS.map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <div key={idx} className="why-act-card">
              <div className="why-act-icon-box">
                <IconComponent size={22} />
              </div>
              <h3 className="why-act-card-title">{item.title}</h3>
              <p className="why-act-card-desc">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
