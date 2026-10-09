// src/components/cruises/CruiseCTA.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Anchor, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function CruiseCTA({ onExploreCruises, onPlanTrip }) {
  const rootRef = useRef(null);

  useEffect(() => {
    if (!rootRef.current) return;
    gsap.fromTo(
      rootRef.current,
      { opacity: 0, scale: 0.96 },
      {
        opacity: 1, scale: 1, duration: 0.8, ease: 'power2.out',
        scrollTrigger: { trigger: rootRef.current, start: 'top 85%' }
      }
    );
  }, []);

  return (
    <section ref={rootRef} className="cta-root">
      <style>{`
        .cta-root {
          position: relative;
          width: 100%;
          min-height: 60vh;
          display: flex; align-items: center; justify-content: center;
          background: #f8fafc;
          overflow: hidden;
          padding: 90px 24px; box-sizing: border-box;
        }

        .cta-bg {
          position: absolute; inset: 0; z-index: 1;
        }
        .cta-bg img {
          width: 100%; height: 100%; object-fit: cover;
          filter: brightness(0.5) saturate(1.3);
        }

        .cta-overlay {
          position: absolute; inset: 0; z-index: 2;
          background: linear-gradient(
            180deg,
            rgba(2, 14, 22, 0.85) 0%,
            #f8fafc 50%,
            rgba(2, 14, 22, 0.95) 100%
          );
        }

        .cta-glow {
          position: absolute; top: 40%; left: 50%;
          transform: translate(-50%, -50%);
          width: 750px; height: 380px;
          background: radial-gradient(ellipse at center, rgba(22, 217, 255, 0.18) 0%, rgba(33, 230, 193, 0.1) 45%, transparent 70%);
          z-index: 3; pointer-events: none;
        }

        .cta-content {
          position: relative; z-index: 4; max-width: 800px;
          text-align: center; margin: 0 auto;
        }

        .cta-eyebrow {
          display: inline-flex; align-items: center; gap: 6px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; color: #F06543;
          letter-spacing: 0.2em; text-transform: uppercase;
          background: #ffffff; backdrop-filter: blur(12px);
          border: 1px solid #e2e8f0;
          padding: 6px 18px; border-radius: 30px; margin-bottom: 20px;
        }

        .cta-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(38px, 5.5vw, 68px);
          font-weight: 600; color: #0B2545;
          line-height: 1.05; margin: 0 0 16px;
          text-shadow: 0 4px 28px rgba(0,0,0,0.85);
        }

        .cta-desc {
          font-family: 'Inter', sans-serif;
          font-size: clamp(14px, 1.8vw, 16px);
          color: #475569; line-height: 1.65;
          margin: 0 auto 34px; max-width: 620px;
        }

        .cta-btns {
          display: flex; align-items: center; justify-content: center;
          gap: 16px; flex-wrap: wrap; margin-bottom: 32px;
        }

        .cta-btn-primary {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 800; letter-spacing: 0.08em;
          color: #ffffff; background: linear-gradient(135deg, #FF6B4A, #F06543);
          border: none; padding: 14px 30px; border-radius: 16px;
          cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
          transition: all 0.3s ease; box-shadow: 0 8px 28px rgba(22, 217, 255, 0.35);
          text-decoration: none;
        }
        .cta-btn-primary:hover {
          transform: translateY(-3px); box-shadow: 0 12px 36px rgba(22, 217, 255, 0.55);
        }

        .cta-btn-sec {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 800; letter-spacing: 0.08em;
          color: #0B2545; background: #f1f5f9;
          border: 1px solid #cbd5e1;
          padding: 14px 28px; border-radius: 16px;
          cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
          transition: all 0.3s ease; backdrop-filter: blur(12px);
          text-decoration: none;
        }
        .cta-btn-sec:hover {
          border-color: #F06543; color: #F06543;
          background: rgba(33, 230, 193, 0.1); transform: translateY(-3px);
        }

        .cta-stats-row {
          display: flex; align-items: center; justify-content: center;
          gap: 20px; flex-wrap: wrap;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 800; color: #64748b;
          letter-spacing: 0.1em; text-transform: uppercase;
        }
      `}</style>

      <div className="cta-bg">
        <img
          src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1920&q=90"
          alt="Luxury Yacht Sunset Cruise"
        />
      </div>

      <div className="cta-overlay" />
      <div className="cta-glow" />

      <div className="cta-content">
        <div className="cta-eyebrow">
          <Anchor size={14} color="#F06543" />
          <span>SET SAIL WITH US</span>
        </div>

        <h2 className="cta-title">
          READY TO SAIL INTO <br />
          <span style={{ color: '#F06543' }}>THE ANDAMAN?</span>
        </h2>

        <p className="cta-desc">
          Your next unforgettable ocean experience is waiting. Explore our curated cruise options or request a custom itinerary.
        </p>

        <div className="cta-btns">
          <button onClick={onExploreCruises} className="cta-btn-primary">
            <span>EXPLORE CRUISES</span>
            <ArrowRight size={15} />
          </button>

          <a href="/plan-trip" className="cta-btn-sec">
            <span>PLAN MY TRIP</span>
          </a>
        </div>

        <div className="cta-stats-row">
          <span>6 CRUISE TYPES</span>
          <span>•</span>
          <span>PRIVATE OPTIONS AVAILABLE</span>
          <span>•</span>
          <span>YEAR-ROUND SAILING</span>
        </div>
      </div>
    </section>
  );
}
