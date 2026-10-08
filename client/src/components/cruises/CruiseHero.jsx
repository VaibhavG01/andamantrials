// src/components/cruises/CruiseHero.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ChevronRight, ArrowRight, Anchor, Compass } from 'lucide-react';

export default function CruiseHero({ onExploreCruises, onPlanExperience }) {
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
    <section className="cruise-hero-root">
      <style>{`
        .cruise-hero-root {
          position: relative;
          width: 100%;
          min-height: 75vh;
          max-height: 780px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f8fafc;
          overflow: hidden;
          padding: 100px 24px 90px;
          box-sizing: border-box;
        }

        .cruise-hero-bg {
          position: absolute; inset: 0; z-index: 1;
        }
        .cruise-hero-bg img {
          width: 100%; height: 100%; object-fit: cover;
          filter: brightness(0.55) saturate(1.25);
          transform: scale(1.04); transition: transform 10s ease;
        }
        .cruise-hero-root:hover .cruise-hero-bg img {
          transform: scale(1.08);
        }

        .cruise-hero-overlay {
          position: absolute; inset: 0; z-index: 2;
          background: linear-gradient(
            180deg,
            rgba(2, 14, 22, 0.85) 0%,
            #f8fafc 50%,
            rgba(2, 14, 22, 0.97) 100%
          );
        }

        .cruise-hero-glow {
          position: absolute; top: 35%; left: 50%;
          transform: translate(-50%, -50%);
          width: 800px; height: 420px;
          background: radial-gradient(ellipse at center, rgba(255, 180, 50, 0.18) 0%, rgba(22, 217, 255, 0.12) 45%, transparent 70%);
          z-index: 3; pointer-events: none;
        }

        /* Floating ocean particles */
        .ocean-particle {
          position: absolute; width: 3px; height: 3px;
          background: rgba(33, 230, 193, 0.6); border-radius: 50%;
          z-index: 3; pointer-events: none;
          animation: floatParticle 8s infinite ease-in-out;
        }
        @keyframes floatParticle {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.3; }
          50% { transform: translateY(-25px) scale(1.4); opacity: 0.8; }
        }

        .cruise-hero-content {
          position: relative; z-index: 4; max-width: 860px;
          text-align: center; margin: 0 auto;
        }

        .cruise-breadcrumb {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; letter-spacing: 0.2em;
          color: #F06543; background: #ffffff;
          backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
          border: 1px solid #e2e8f0;
          padding: 6px 18px; border-radius: 30px; margin-bottom: 20px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
        }

        .cruise-hero-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(40px, 6.2vw, 76px);
          font-weight: 600; color: #ffffff;
          line-height: 1.05; margin: 0 0 16px;
          letter-spacing: -0.01em;
          text-shadow: 0 4px 28px rgba(0, 0, 0, 0.85);
        }

        .cruise-hero-desc {
          font-family: 'Inter', sans-serif;
          font-size: clamp(14px, 1.8vw, 16px);
          color: #475569; line-height: 1.65;
          margin: 0 auto 34px; max-width: 680px;
        }

        .cruise-hero-btns {
          display: flex; align-items: center; justify-content: center;
          gap: 16px; flex-wrap: wrap;
        }

        .cruise-btn-primary {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 800; letter-spacing: 0.08em;
          color: #ffffff; background: linear-gradient(135deg, #FF6B4A, #F06543);
          border: none; padding: 14px 30px; border-radius: 16px;
          cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
          transition: all 0.3s ease; box-shadow: 0 8px 28px rgba(22, 217, 255, 0.35);
        }
        .cruise-btn-primary:hover {
          transform: translateY(-3px); box-shadow: 0 12px 36px rgba(22, 217, 255, 0.55);
        }

        .cruise-btn-sec {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 800; letter-spacing: 0.08em;
          color: #0B2545; background: #f1f5f9;
          border: 1px solid #cbd5e1;
          padding: 14px 28px; border-radius: 16px;
          cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
          transition: all 0.3s ease; backdrop-filter: blur(12px);
        }
        .cruise-btn-sec:hover {
          border-color: #F06543; color: #F06543;
          background: rgba(33, 230, 193, 0.1); transform: translateY(-3px);
        }
      `}</style>

      {/* BACKGROUND IMAGE */}
      <div className="cruise-hero-bg">
        <img
          src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1920&q=90"
          alt="Luxury Cruise Andaman Ocean"
        />
      </div>

      <div className="cruise-hero-overlay" />
      <div className="cruise-hero-glow" />

      {/* Ocean particles */}
      <div className="ocean-particle" style={{ top: '25%', left: '20%', animationDelay: '0s' }} />
      <div className="ocean-particle" style={{ top: '65%', left: '15%', animationDelay: '2s' }} />
      <div className="ocean-particle" style={{ top: '40%', left: '80%', animationDelay: '4s' }} />
      <div className="ocean-particle" style={{ top: '70%', left: '75%', animationDelay: '1s' }} />
      <div className="ocean-particle" style={{ top: '30%', left: '60%', animationDelay: '3s' }} />

      {/* CONTENT */}
      <div ref={contentRef} className="cruise-hero-content">
        <div className="cruise-breadcrumb">
          <a href="/home" style={{ color: '#64748b', textDecoration: 'none' }}>HOME</a>
          <ChevronRight size={12} color="#F06543" />
          <span>CRUISES</span>
        </div>

        <h1 className="cruise-hero-title">
          SAIL INTO <br />
          <span style={{ color: '#F06543' }}>THE EXTRAORDINARY</span>
        </h1>

        <p className="cruise-hero-desc">
          Experience the Andaman Sea from a different perspective with unforgettable cruises, sunsets and ocean adventures.
        </p>

        <div className="cruise-hero-btns">
          <button onClick={onExploreCruises} className="cruise-btn-primary">
            <span>EXPLORE CRUISES</span>
            <ArrowRight size={15} />
          </button>

          <button onClick={onPlanExperience} className="cruise-btn-sec">
            <Compass size={15} />
            <span>PLAN MY EXPERIENCE</span>
          </button>
        </div>
      </div>
    </section>
  );
}
