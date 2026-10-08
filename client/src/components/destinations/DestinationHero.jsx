// src/components/destinations/DestinationHero.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ChevronRight, ArrowRight, MapPin, Compass, Sparkles, ShieldCheck, Waves, Anchor } from 'lucide-react';

export default function DestinationHero({ onExploreDestinations, onPlanTrip }) {
  const contentRef = useRef(null);

  useEffect(() => {
    if (!contentRef.current) return;
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 30, scale: 0.97 },
      { opacity: 1, y: 0, scale: 1, duration: 0.9, ease: 'power2.out', delay: 0.2 }
    );
  }, []);

  return (
    <section className="dest-hero-root">
      <style>{`
        .dest-hero-root {
          position: relative;
          width: 100%;
          min-height: 75vh;
          max-height: 780px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #020c16;
          overflow: hidden;
          padding: 110px 24px 90px;
          box-sizing: border-box;
        }

        .dest-hero-bg {
          position: absolute; inset: 0; z-index: 1;
        }
        .dest-hero-bg img {
          width: 100%; height: 100%; object-fit: cover;
          filter: brightness(0.5) saturate(1.3);
          transform: scale(1.04); transition: transform 10s ease;
        }
        .dest-hero-root:hover .dest-hero-bg img {
          transform: scale(1.08);
        }

        .dest-hero-overlay {
          position: absolute; inset: 0; z-index: 2;
          background: linear-gradient(
            180deg,
            rgba(2, 12, 22, 0.88) 0%,
            rgba(2, 14, 22, 0.48) 50%,
            rgba(2, 12, 22, 0.96) 100%
          );
        }

        .dest-hero-glow {
          position: absolute; top: 35%; left: 50%;
          transform: translate(-50%, -50%);
          width: 820px; height: 440px;
          background: radial-gradient(ellipse at center, rgba(45, 212, 191, 0.22) 0%, rgba(13, 148, 136, 0.12) 45%, transparent 70%);
          z-index: 3; pointer-events: none;
        }

        /* Floating ocean particles */
        .dest-particle {
          position: absolute; width: 3.5px; height: 3.5px;
          background: rgba(45, 212, 191, 0.7); border-radius: 50%;
          z-index: 3; pointer-events: none;
          animation: floatDestParticle 8s infinite ease-in-out;
        }
        @keyframes floatDestParticle {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.3; }
          50% { transform: translateY(-25px) scale(1.4); opacity: 0.85; }
        }

        .dest-hero-content {
          position: relative; z-index: 4; max-width: 900px;
          text-align: center; margin: 0 auto;
        }

        .dest-breadcrumb {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 900; letter-spacing: 0.18em;
          color: #2dd4bf; background: rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
          border: 1.5px solid rgba(255, 255, 255, 0.25);
          padding: 6px 18px; border-radius: 30px; margin-bottom: 20px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
          text-transform: uppercase;
        }

        .dest-hero-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(38px, 6vw, 74px);
          font-weight: 700; color: #ffffff;
          line-height: 1.06; margin: 0 0 18px;
          letter-spacing: -0.01em;
          text-shadow: 0 4px 28px rgba(0, 0, 0, 0.85);
        }

        .dest-hero-desc {
          font-family: 'Inter', sans-serif;
          font-size: clamp(14px, 1.8vw, 16.5px);
          color: #e2e8f0; line-height: 1.65;
          margin: 0 auto 34px; max-width: 720px;
          font-weight: 400;
        }

        .dest-hero-btns {
          display: flex; align-items: center; justify-content: center;
          gap: 16px; flex-wrap: wrap; margin-bottom: 30px;
        }

        .dest-btn-primary {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 900; letter-spacing: 0.08em;
          color: #ffffff; background: linear-gradient(135deg, #F06543, #FF6B4A);
          border: 1.5px solid rgba(45, 212, 191, 0.4); padding: 14px 30px; border-radius: 16px;
          cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
          transition: all 0.3s ease; box-shadow: 0 8px 28px rgba(13, 148, 136, 0.4);
        }
        .dest-btn-primary:hover {
          transform: translateY(-3px); box-shadow: 0 12px 36px rgba(13, 148, 136, 0.6);
          border-color: #2dd4bf;
        }

        .dest-btn-sec {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 900; letter-spacing: 0.08em;
          color: #ffffff; background: rgba(255, 255, 255, 0.12);
          border: 1.5px solid rgba(255, 255, 255, 0.3);
          padding: 14px 28px; border-radius: 16px;
          cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
          transition: all 0.3s ease; backdrop-filter: blur(12px);
        }
        .dest-btn-sec:hover {
          border-color: #2dd4bf; color: #2dd4bf;
          background: rgba(45, 212, 191, 0.15); transform: translateY(-3px);
        }

        .dest-stats-pill-row {
          display: flex; align-items: center; justify-content: center;
          gap: 16px; flex-wrap: wrap;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11.5px; font-weight: 800; color: #cbd5e1;
          letter-spacing: 0.08em; text-transform: uppercase;
        }
        .dest-stat-pill {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(0, 0, 0, 0.35); padding: 5px 14px;
          border-radius: 20px; border: 1px solid rgba(255, 255, 255, 0.15);
        }
      `}</style>

      {/* BACKGROUND IMAGE */}
      <div className="dest-hero-bg">
        <img
          src="https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?auto=format&fit=crop&w=1920&q=90"
          alt="Andaman Tropical Islands Archipelago"
        />
      </div>

      <div className="dest-hero-overlay" />
      <div className="dest-hero-glow" />

      {/* FLOATING OCEAN PARTICLES */}
      <div className="dest-particle" style={{ top: '25%', left: '15%', animationDelay: '0s' }} />
      <div className="dest-particle" style={{ top: '65%', left: '22%', animationDelay: '2s' }} />
      <div className="dest-particle" style={{ top: '35%', right: '18%', animationDelay: '4s' }} />
      <div className="dest-particle" style={{ top: '75%', right: '28%', animationDelay: '1.5s' }} />

      <div ref={contentRef} className="dest-hero-content">
        {/* BREADCRUMB */}
        <div className="dest-breadcrumb">
          <a href="/" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Home</a>
          <ChevronRight size={13} color="#2dd4bf" />
          <span>ISLAND DESTINATIONS</span>
        </div>

        {/* HERO TITLE */}
        <h1 className="dest-hero-title">
          EXPLORE THE <br />
          <span style={{ color: '#2dd4bf' }}>ANDAMAN ISLANDS</span>
        </h1>

        {/* SUBTITLE */}
        <p className="dest-hero-desc">
          From the white-sand turquoise lagoons of Swaraj Dweep (Havelock) to Shaheed Dweep (Neil), mangrove safaris in Baratang & twin sandbars in Diglipur — curate your bespoke island escape.
        </p>

        {/* CTA BUTTONS */}
        <div className="dest-hero-btns">
          <button
            onClick={onExploreDestinations}
            className="dest-btn-primary"
          >
            <span>EXPLORE ALL ISLANDS</span>
            <ArrowRight size={15} />
          </button>

          <button
            onClick={onPlanTrip}
            className="dest-btn-sec"
          >
            <Compass size={15} />
            <span>CUSTOM TRIP PLANNER</span>
          </button>
        </div>

        {/* STAT PILLS */}
        <div className="dest-stats-pill-row">
          <div className="dest-stat-pill">
            <MapPin size={13} color="#2dd4bf" />
            <span>572+ Tropical Islands</span>
          </div>
          <div className="dest-stat-pill">
            <Anchor size={13} color="#ffd700" />
            <span>100% Confirmed Catamaran Ferries</span>
          </div>
          <div className="dest-stat-pill">
            <ShieldCheck size={13} color="#2dd4bf" />
            <span>Official Forest & Tribal Permits</span>
          </div>
        </div>
      </div>
    </section>
  );
}
