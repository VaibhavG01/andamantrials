// src/components/stays/StayExperience.jsx
// ─────────────────────────────────────────────────────────────────────────────
// CURATED STAY EXPERIENCES & ATMOSPHERES — Thick Luxury Showcase Cards
// ─────────────────────────────────────────────────────────────────────────────

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Compass, Waves, Trees, Crown, Sunset, Sparkles, Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const EXPERIENCES = [
  {
    id: 'beachfront-living',
    title: 'BEACHFRONT LIVING',
    tag: 'DIRECT OCEAN ACCESS',
    desc: 'Wake up to the ocean breeze and private white sand access.',
    highlights: ['Private Beach Deck', 'Wave Views', 'Barefoot Access'],
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=85',
    icon: Waves,
    accentColor: '#0284C7',
    badgeBg: 'rgba(2, 132, 199, 0.9)',
  },
  {
    id: 'jungle-escapes',
    title: 'JUNGLE ESCAPES',
    tag: 'RAINFOREST CANOPY',
    desc: 'Stay surrounded by lush rainforest, birds and indigenous flora.',
    highlights: ['Canopy Cottages', 'Nature Trails', 'Serene Flora'],
    image: 'https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&w=800&q=85',
    icon: Trees,
    accentColor: '#16A34A',
    badgeBg: 'rgba(22, 163, 74, 0.9)',
  },
  {
    id: 'private-villas',
    title: 'PRIVATE VILLAS',
    tag: 'VIP PLUNGE POOLS',
    desc: 'Enjoy maximum space, private pools, and dedicated butler service.',
    highlights: ['Private Plunge Pool', 'Butler Service', 'King Suites'],
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=85',
    icon: Crown,
    accentColor: '#7C3AED',
    badgeBg: 'rgba(124, 58, 237, 0.9)',
  },
  {
    id: 'sunset-stays',
    title: 'SUNSET STAYS',
    tag: 'GOLDEN HORIZON',
    desc: 'Watch golden sunsets over the Andaman Sea right from your balcony.',
    highlights: ['West Coast Vistas', 'Sunset Cocktail Bar', 'Infinity Decks'],
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=85',
    icon: Sunset,
    accentColor: '#F06543',
    badgeBg: 'rgba(240, 101, 67, 0.9)',
  },
];

export default function StayExperience({ onExploreExperiences }) {
  const cardsRef = useRef(null);

  useEffect(() => {
    if (!cardsRef.current) return;
    const cards = cardsRef.current.querySelectorAll('.exp-stay-card');
    gsap.fromTo(
      cards,
      { opacity: 0, y: 35 },
      {
        opacity: 1,
        y: 0,
        duration: 0.65,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 85%',
        },
      }
    );
  }, []);

  const handleClick = (exp) => {
    if (onExploreExperiences) {
      onExploreExperiences(exp);
    } else {
      const el = document.getElementById('stays-listing-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="stay-exp-root" id="stay-experiences-section">
      <style>{`
        .stay-exp-root {
          max-width: 1380px;
          margin: 0 auto;
          padding: 80px 24px 100px;
        }

        .exp-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .exp-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 800;
          color: #F06543;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          background: #FFF0EB;
          border: 1px solid #FFE0D6;
          padding: 6px 18px;
          border-radius: 30px;
          margin-bottom: 14px;
        }

        .exp-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(34px, 4.5vw, 54px);
          font-weight: 700;
          color: #0B2545;
          margin: 0 0 12px;
          line-height: 1.15;
          letter-spacing: -0.02em;
        }

        .exp-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          color: #64748B;
          max-width: 680px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .exp-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 26px;
        }
        @media (max-width: 1120px) {
          .exp-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 600px) {
          .exp-grid {
            grid-template-columns: 1fr;
          }
        }

        .exp-stay-card {
          position: relative;
          height: 440px;
          border-radius: 26px;
          overflow: hidden;
          border: 2px solid #E2E8F0;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 6px 24px rgba(11, 37, 69, 0.06);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: #0B2545;
        }

        .exp-stay-card:hover {
          transform: translateY(-8px);
          border-color: #F06543;
          box-shadow: 0 24px 48px rgba(11, 37, 69, 0.2), 0 0 24px rgba(240, 101, 67, 0.2);
        }

        .exp-card-bg-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.75s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .exp-stay-card:hover .exp-card-bg-img {
          transform: scale(1.1);
        }

        .exp-card-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(11, 37, 69, 0.2) 0%,
            rgba(11, 37, 69, 0.4) 35%,
            rgba(7, 25, 46, 0.95) 80%,
            rgba(5, 18, 33, 0.98) 100%
          );
          pointer-events: none;
        }

        .exp-card-top {
          position: relative;
          z-index: 2;
          padding: 20px 20px 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .exp-tag-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #ffffff;
          padding: 6px 14px;
          border-radius: 30px;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
        }

        .exp-card-body {
          position: relative;
          z-index: 2;
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .exp-card-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 21px;
          font-weight: 900;
          color: #ffffff;
          margin: 0;
          line-height: 1.25;
          letter-spacing: 0.02em;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.6);
        }

        .exp-card-desc {
          font-family: 'Inter', sans-serif;
          font-size: 13.5px;
          color: #E2E8F0;
          line-height: 1.55;
          margin: 0;
          font-weight: 400;
        }

        .exp-chips-row {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 2px;
        }

        .exp-chip {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 10.5px;
          font-weight: 700;
          color: #F8FAFC;
          background: rgba(255, 255, 255, 0.14);
          backdrop-filter: blur(6px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 4px 10px;
          border-radius: 8px;
        }

        .exp-cta-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.06em;
          color: #ffffff;
          background: rgba(255, 255, 255, 0.16);
          backdrop-filter: blur(10px);
          border: 1.5px solid rgba(255, 255, 255, 0.35);
          padding: 11px 18px;
          border-radius: 12px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          cursor: pointer;
          transition: all 0.25s ease;
          margin-top: 6px;
        }

        .exp-stay-card:hover .exp-cta-btn {
          background: #F06543;
          border-color: #F06543;
          box-shadow: 0 6px 20px rgba(240, 101, 67, 0.4);
          transform: translateY(-2px);
        }

        .exp-cta-btn svg {
          transition: transform 0.25s ease;
        }
        .exp-stay-card:hover .exp-cta-btn svg {
          transform: translateX(4px);
        }
      `}</style>

      {/* Section Header */}
      <div className="exp-header">
        <div className="exp-eyebrow">
          <Compass size={15} color="#F06543" />
          <span>CURATED RESORT ATMOSPHERES</span>
        </div>
        <h2 className="exp-title">STAY FOR THE EXPERIENCE</h2>
        <p className="exp-subtitle">
          Whether you desire uninterrupted private beach access, secluded rainforest tranquility, or opulent luxury villas — choose your ideal holiday mood.
        </p>
      </div>

      {/* 4 Experience Showcase Cards */}
      <div ref={cardsRef} className="exp-grid">
        {EXPERIENCES.map((item) => {
          const IconComponent = item.icon;
          return (
            <div
              key={item.id}
              className="exp-stay-card"
              onClick={() => handleClick(item)}
              role="button"
              tabIndex={0}
              aria-label={`Explore ${item.title}`}
              onKeyDown={(e) => { if (e.key === 'Enter') handleClick(item); }}
            >
              {/* Background Image */}
              <img
                src={item.image}
                alt={item.title}
                className="exp-card-bg-img"
                loading="lazy"
              />

              {/* Gradient Overlay */}
              <div className="exp-card-gradient" />

              {/* Top Tag Badge */}
              <div className="exp-card-top">
                <span
                  className="exp-tag-badge"
                  style={{ background: item.badgeBg }}
                >
                  <IconComponent size={13} />
                  <span>{item.tag}</span>
                </span>
              </div>

              {/* Bottom Body Content */}
              <div className="exp-card-body">
                <h3 className="exp-card-title">{item.title}</h3>
                <p className="exp-card-desc">{item.desc}</p>

                {/* Highlights Chips */}
                <div className="exp-chips-row">
                  {item.highlights.map((h, i) => (
                    <span key={i} className="exp-chip">
                      {h}
                    </span>
                  ))}
                </div>

                {/* Interactive CTA */}
                <div className="exp-cta-btn">
                  <span>EXPLORE STAYS</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
