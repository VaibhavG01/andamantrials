// src/components/destinations/WhyDestinations.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck, Sparkles, Anchor, Building2, HeadphonesIcon } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const REASONS = [
  {
    icon: Anchor,
    title: 'CONFIRMED CATAMARAN FERRIES',
    desc: 'Guaranteed seat reservations on luxury private catamarans (Makruzz, Nautika, Green Ocean) with instant e-tickets.',
  },
  {
    icon: Building2,
    title: 'VERIFIED BEACHFRONT RESORTS',
    desc: 'Handpicked beachfront cottages, boutique dive resorts & 5-star private island villas inspected directly by our local team.',
  },
  {
    icon: ShieldCheck,
    title: 'FOREST & TRIBAL PERMITS',
    desc: 'Authorized permit clearances for Baratang mangrove convoys, Saddle Peak National Park & indigenous biosphere zones.',
  },
  {
    icon: Sparkles,
    title: 'CURATED ISLAND TRAILS',
    desc: 'Bespoke multi-island day-by-day itineraries tailored for honeymooners, scuba divers, families and luxury wanderers.',
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 PORT BLAIR CONCIERGE',
    desc: 'Dedicated on-ground harbour assistance, private jetty transfers, luggage handling and real-time weather monitoring.',
  },
];

export default function WhyDestinations() {
  const cardsRef = useRef(null);

  useEffect(() => {
    if (!cardsRef.current) return;
    const cards = cardsRef.current.querySelectorAll('.why-dest-card');
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
    <section className="why-dest-root">
      <style>{`
        .why-dest-root {
          max-width: 1340px;
          margin: 0 auto;
          padding: 80px 24px;
        }

        .why-dest-eyebrow {
          display: flex; align-items: center; justify-content: center; gap: 6px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; color: #F06543;
          letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 8px;
        }

        .why-dest-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(32px, 4.5vw, 52px);
          font-weight: 700; color: #0B2545; text-align: center;
          margin: 0 0 48px; line-height: 1.1;
        }

        .reasons-dest-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 20px;
        }
        @media (max-width: 1100px) {
          .reasons-dest-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 680px) {
          .reasons-dest-grid { grid-template-columns: 1fr; }
        }

        .why-dest-card {
          background: #ffffff;
          border: 2px solid #e2e8f0;
          border-radius: 22px; padding: 30px 20px;
          display: flex; flex-direction: column; align-items: center; text-align: center;
          transition: all 0.35s ease;
          box-shadow: 0 4px 20px rgba(0, 45, 98, 0.04);
        }
        .why-dest-card:hover {
          transform: translateY(-6px);
          border-color: #F06543;
          box-shadow: 0 16px 40px rgba(0, 45, 98, 0.12);
        }

        .why-dest-icon-box {
          width: 54px; height: 54px; border-radius: 50%;
          background: linear-gradient(135deg, rgba(13, 148, 136, 0.15), rgba(0, 45, 98, 0.08));
          border: 1.5px solid rgba(13, 148, 136, 0.3);
          display: flex; align-items: center; justify-content: center;
          color: #F06543; margin-bottom: 18px;
          transition: transform 0.3s ease;
        }
        .why-dest-card:hover .why-dest-icon-box {
          transform: scale(1.1);
          background: #0B2545;
          color: #ffffff;
          border-color: #0B2545;
        }

        .why-dest-card-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 900; color: #0B2545;
          letter-spacing: 0.08em; text-transform: uppercase; margin: 0 0 10px;
        }

        .why-dest-card-desc {
          font-family: 'Inter', sans-serif;
          font-size: 12.5px; color: #64748b; line-height: 1.6; margin: 0; font-weight: 500;
        }
      `}</style>

      <div className="why-dest-eyebrow">
        <Sparkles size={14} color="#F06543" />
        <span>WHY ISLAND HOP WITH US</span>
      </div>
      <h2 className="why-dest-title">WHY EXPLORE ANDAMAN ISLANDS WITH OUR LOCAL CONCIERGE?</h2>

      <div ref={cardsRef} className="reasons-dest-grid">
        {REASONS.map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <div key={idx} className="why-dest-card">
              <div className="why-dest-icon-box">
                <IconComponent size={24} />
              </div>
              <div className="why-dest-card-title">{item.title}</div>
              <p className="why-dest-card-desc">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
