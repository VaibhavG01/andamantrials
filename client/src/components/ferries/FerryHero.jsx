// src/components/ferries/FerryHero.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Cinematic 60-70vh Ferry Hero Component with Dark Ocean Background & GSAP

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ChevronRight, ArrowRight, Ship, Compass } from 'lucide-react';

export default function FerryHero({ onCheckSchedule, onExploreRoutes }) {
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
    <section className="ferry-hero-root">
      <style>{`
        .ferry-hero-root {
          position: relative;
          width: 100%;
          min-height: 64vh;
          max-height: 720px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f8fafc;
          overflow: hidden;
          padding: 100px 24px 80px;
          box-sizing: border-box;
        }

        .ferry-hero-bg {
          position: absolute; inset: 0; z-index: 1;
        }
        .ferry-hero-bg img {
          width: 100%; height: 100%; object-fit: cover;
          filter: brightness(0.55) saturate(1.2);
          transform: scale(1.04); transition: transform 10s ease;
        }
        .ferry-hero-root:hover .ferry-hero-bg img {
          transform: scale(1.08);
        }

        .ferry-hero-overlay {
          position: absolute; inset: 0; z-index: 2;
          background: linear-gradient(
            180deg,
            rgba(2, 14, 22, 0.82) 0%,
            #f8fafc 50%,
            rgba(2, 14, 22, 0.95) 100%
          );
        }

        .ferry-hero-glow {
          position: absolute; top: 35%; left: 50%;
          transform: translate(-50%, -50%);
          width: 750px; height: 380px;
          background: radial-gradient(ellipse at center, rgba(22, 217, 255, 0.16) 0%, rgba(33, 230, 193, 0.08) 45%, transparent 70%);
          z-index: 3; pointer-events: none;
        }

        .ferry-hero-content {
          position: relative; z-index: 4; max-width: 840px;
          text-align: center; margin: 0 auto;
        }

        .ferry-breadcrumb {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; letter-spacing: 0.2em;
          color: #F06543; background: #ffffff;
          backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
          border: 1px solid #e2e8f0;
          padding: 6px 18px; border-radius: 30px; margin-bottom: 20px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
        }

        .ferry-hero-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(38px, 5.8vw, 70px);
          font-weight: 600; color: #ffffff;
          line-height: 1.05; margin: 0 0 16px;
          letter-spacing: -0.01em;
          text-shadow: 0 4px 24px rgba(0, 0, 0, 0.85);
        }

        .ferry-hero-desc {
          font-family: 'Inter', sans-serif;
          font-size: clamp(14px, 1.8vw, 16px);
          color: #475569; line-height: 1.65;
          margin: 0 auto 32px; max-width: 660px;
        }

        .ferry-hero-btns {
          display: flex; align-items: center; justify-content: center;
          gap: 16px; flex-wrap: wrap;
        }

        .ferry-btn-primary {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 800; letter-spacing: 0.08em;
          color: #ffffff; background: linear-gradient(135deg, #FF6B4A, #F06543);
          border: none; padding: 14px 28px; border-radius: 16px;
          cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
          transition: all 0.3s ease; box-shadow: 0 8px 28px rgba(22, 217, 255, 0.35);
        }
        .ferry-btn-primary:hover {
          transform: translateY(-3px); box-shadow: 0 12px 36px rgba(22, 217, 255, 0.55);
        }

        .ferry-btn-sec {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 800; letter-spacing: 0.08em;
          color: #0B2545; background: #f1f5f9;
          border: 1px solid #cbd5e1;
          padding: 14px 26px; border-radius: 16px;
          cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
          transition: all 0.3s ease; backdrop-filter: blur(12px);
        }
        .ferry-btn-sec:hover {
          border-color: #F06543; color: #F06543;
          background: rgba(33, 230, 193, 0.1); transform: translateY(-3px);
        }
      `}</style>

      {/* BACKGROUND IMAGE */}
      <div className="ferry-hero-bg">
        <img
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1920&q=90"
          alt="Andaman Sea Catamaran Ferry"
        />
      </div>

      <div className="ferry-hero-overlay" />
      <div className="ferry-hero-glow" />

      {/* CONTENT */}
      <div ref={contentRef} className="ferry-hero-content">
        <div className="ferry-breadcrumb">
          <a href="/home" style={{ color: '#64748b', textDecoration: 'none' }}>HOME</a>
          <ChevronRight size={12} color="#F06543" />
          <span>FERRIES</span>
        </div>

        <h1 className="ferry-hero-title">
          EXPLORE ANDAMAN <br />
          <span style={{ color: '#F06543' }}>BY SEA</span>
        </h1>

        <p className="ferry-hero-desc">
          Discover high-speed catamaran ferry routes connecting Port Blair, Swaraj Dweep (Havelock), and Shaheed Dweep (Neil) across the azure Andaman Sea.
        </p>

        <div className="ferry-hero-btns">
          <button onClick={onCheckSchedule} className="ferry-btn-primary">
            <span>CHECK FERRY SCHEDULE</span>
            <ArrowRight size={15} />
          </button>

          <button onClick={onExploreRoutes} className="ferry-btn-sec">
            <Compass size={15} />
            <span>EXPLORE ROUTES</span>
          </button>
        </div>
      </div>
    </section>
  );
}
