// src/components/packages/PackageHero.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ChevronRight, ArrowRight, Compass, Sparkles, ShieldCheck, Ship, Building2, MapPin } from 'lucide-react';

export default function PackageHero({ onExplorePackages, onPlanTrip }) {
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
    <section className="pkg-hero-root">
      <style>{`
        .pkg-hero-root {
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

        .pkg-hero-bg {
          position: absolute; inset: 0; z-index: 1;
        }
        .pkg-hero-bg img {
          width: 100%; height: 100%; object-fit: cover;
          filter: brightness(0.5) saturate(1.3);
          transform: scale(1.04); transition: transform 10s ease;
        }
        .pkg-hero-root:hover .pkg-hero-bg img {
          transform: scale(1.08);
        }

        .pkg-hero-overlay {
          position: absolute; inset: 0; z-index: 2;
          background: linear-gradient(
            180deg,
            rgba(2, 12, 22, 0.88) 0%,
            rgba(2, 14, 22, 0.48) 50%,
            rgba(2, 12, 22, 0.96) 100%
          );
        }

        .pkg-hero-glow {
          position: absolute; top: 35%; left: 50%;
          transform: translate(-50%, -50%);
          width: 820px; height: 440px;
          background: radial-gradient(ellipse at center, rgba(45, 212, 191, 0.22) 0%, rgba(13, 148, 136, 0.12) 45%, transparent 70%);
          z-index: 3; pointer-events: none;
        }

        /* Floating ocean particles */
        .pkg-particle {
          position: absolute; width: 3.5px; height: 3.5px;
          background: rgba(45, 212, 191, 0.7); border-radius: 50%;
          z-index: 3; pointer-events: none;
          animation: floatPkgParticle 8s infinite ease-in-out;
        }
        @keyframes floatPkgParticle {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.3; }
          50% { transform: translateY(-25px) scale(1.4); opacity: 0.85; }
        }

        .pkg-hero-content {
          position: relative; z-index: 4; max-width: 900px;
          text-align: center; margin: 0 auto;
        }

        .pkg-breadcrumb {
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

        .pkg-hero-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(38px, 6vw, 74px);
          font-weight: 700; color: #ffffff;
          line-height: 1.06; margin: 0 0 18px;
          letter-spacing: -0.01em;
          text-shadow: 0 4px 28px rgba(0, 0, 0, 0.85);
        }

        .pkg-hero-desc {
          font-family: 'Inter', sans-serif;
          font-size: clamp(14px, 1.8vw, 16.5px);
          color: #e2e8f0; line-height: 1.65;
          margin: 0 auto 34px; max-width: 720px;
          font-weight: 400;
        }

        .pkg-hero-btns {
          display: flex; align-items: center; justify-content: center;
          gap: 16px; flex-wrap: wrap; margin-bottom: 30px;
        }

        .pkg-btn-primary {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 900; letter-spacing: 0.08em;
          color: #ffffff; background: linear-gradient(135deg, #F06543, #FF6B4A);
          border: 1.5px solid rgba(45, 212, 191, 0.4); padding: 14px 30px; border-radius: 16px;
          cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
          transition: all 0.3s ease; box-shadow: 0 8px 28px rgba(13, 148, 136, 0.4);
        }
        .pkg-btn-primary:hover {
          transform: translateY(-3px); box-shadow: 0 12px 36px rgba(13, 148, 136, 0.6);
          border-color: #2dd4bf;
        }

        .pkg-btn-sec {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 900; letter-spacing: 0.08em;
          color: #ffffff; background: rgba(255, 255, 255, 0.12);
          border: 1.5px solid rgba(255, 255, 255, 0.3);
          padding: 14px 28px; border-radius: 16px;
          cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
          transition: all 0.3s ease; backdrop-filter: blur(12px);
        }
        .pkg-btn-sec:hover {
          border-color: #2dd4bf; color: #2dd4bf;
          background: rgba(45, 212, 191, 0.15); transform: translateY(-3px);
        }

        .pkg-stats-pill-row {
          display: flex; align-items: center; justify-content: center;
          gap: 16px; flex-wrap: wrap;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11.5px; font-weight: 800; color: #cbd5e1;
          letter-spacing: 0.08em; text-transform: uppercase;
        }
        .pkg-stat-pill {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(0, 0, 0, 0.35); padding: 5px 14px;
          border-radius: 20px; border: 1px solid rgba(255, 255, 255, 0.15);
        }
      `}</style>

      {/* BACKGROUND IMAGE */}
      <div className="pkg-hero-bg">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=90"
          alt="Andaman Luxury Holiday Packages"
        />
      </div>

      <div className="pkg-hero-overlay" />
      <div className="pkg-hero-glow" />

      {/* FLOATING OCEAN PARTICLES */}
      <div className="pkg-particle" style={{ top: '25%', left: '15%', animationDelay: '0s' }} />
      <div className="pkg-particle" style={{ top: '65%', left: '22%', animationDelay: '2s' }} />
      <div className="pkg-particle" style={{ top: '35%', right: '18%', animationDelay: '4s' }} />
      <div className="pkg-particle" style={{ top: '75%', right: '28%', animationDelay: '1.5s' }} />

      <div ref={contentRef} className="pkg-hero-content">
        {/* BREADCRUMB */}
        <div className="pkg-breadcrumb">
          <a href="/" style={{ color: '#cbd5e1', textDecoration: 'none' }}>Home</a>
          <ChevronRight size={13} color="#2dd4bf" />
          <span>HOLIDAY PACKAGES</span>
        </div>

        {/* HERO TITLE */}
        <h1 className="pkg-hero-title">
          HANDCRAFTED <br />
          <span style={{ color: '#2dd4bf' }}>ANDAMAN TOUR PACKAGES</span>
        </h1>

        {/* SUBTITLE */}
        <p className="pkg-hero-desc">
          All-inclusive tropical holiday itineraries with confirmed luxury catamaran ferry passes, beachfront resort stays, PADI scuba diving permits & private island transfers.
        </p>

        {/* CTA BUTTONS */}
        <div className="pkg-hero-btns">
          <button
            onClick={onExplorePackages}
            className="pkg-btn-primary"
          >
            <span>EXPLORE ALL PACKAGES</span>
            <ArrowRight size={15} />
          </button>

          <button
            onClick={onPlanTrip}
            className="pkg-btn-sec"
          >
            <Compass size={15} />
            <span>CUSTOM TRIP BUILDER</span>
          </button>
        </div>

        {/* STAT PILLS */}
        <div className="pkg-stats-pill-row">
          <div className="pkg-stat-pill">
            <Ship size={13} color="#2dd4bf" />
            <span>100% Confirmed Catamarans</span>
          </div>
          <div className="pkg-stat-pill">
            <Building2 size={13} color="#ffd700" />
            <span>Verified 4★ & 5★ Beach Resorts</span>
          </div>
          <div className="pkg-stat-pill">
            <ShieldCheck size={13} color="#2dd4bf" />
            <span>Zero Hidden Fees Guaranteed</span>
          </div>
        </div>
      </div>
    </section>
  );
}
