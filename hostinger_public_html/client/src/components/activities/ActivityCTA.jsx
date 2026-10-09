// src/components/activities/ActivityCTA.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Waves, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ActivityCTA({ onExploreActivities, onPlanTrip }) {
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
    <section ref={rootRef} className="act-cta-root">
      <style>{`
        .act-cta-root {
          position: relative;
          width: 100%;
          min-height: 60vh;
          display: flex; align-items: center; justify-content: center;
          background: #0f172a;
          overflow: hidden;
          padding: 90px 24px; box-sizing: border-box;
        }

        .act-cta-bg {
          position: absolute; inset: 0; z-index: 1;
        }
        .act-cta-bg img {
          width: 100%; height: 100%; object-fit: cover;
          filter: brightness(0.48) saturate(1.3);
        }

        .act-cta-overlay {
          position: absolute; inset: 0; z-index: 2;
          background: linear-gradient(
            180deg,
            rgba(2, 14, 22, 0.88) 0%,
            rgba(2, 14, 22, 0.5) 50%,
            rgba(2, 14, 22, 0.96) 100%
          );
        }

        .act-cta-glow {
          position: absolute; top: 40%; left: 50%;
          transform: translate(-50%, -50%);
          width: 780px; height: 380px;
          background: radial-gradient(ellipse at center, rgba(45, 212, 191, 0.2) 0%, rgba(13, 148, 136, 0.1) 45%, transparent 70%);
          z-index: 3; pointer-events: none;
        }

        .act-cta-content {
          position: relative; z-index: 4; max-width: 820px;
          text-align: center; margin: 0 auto;
        }

        .act-cta-eyebrow {
          display: inline-flex; align-items: center; gap: 6px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; color: #2dd4bf;
          letter-spacing: 0.2em; text-transform: uppercase;
          background: rgba(255, 255, 255, 0.12); backdrop-filter: blur(12px);
          border: 1.5px solid rgba(45, 212, 191, 0.35);
          padding: 6px 18px; border-radius: 30px; margin-bottom: 20px;
        }

        .act-cta-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(38px, 5.5vw, 68px);
          font-weight: 700; color: #ffffff;
          line-height: 1.05; margin: 0 0 16px;
          text-shadow: 0 4px 28px rgba(0,0,0,0.85);
        }

        .act-cta-desc {
          font-family: 'Inter', sans-serif;
          font-size: clamp(14px, 1.8vw, 16px);
          color: #e2e8f0; line-height: 1.65;
          margin: 0 auto 34px; max-width: 640px; font-weight: 400;
        }

        .act-cta-btns {
          display: flex; align-items: center; justify-content: center;
          gap: 16px; flex-wrap: wrap; margin-bottom: 32px;
        }

        .act-cta-btn-primary {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 900; letter-spacing: 0.08em;
          color: #ffffff; background: linear-gradient(135deg, #F06543, #FF6B4A);
          border: 1.5px solid rgba(45, 212, 191, 0.4); padding: 15px 32px; border-radius: 16px;
          cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
          transition: all 0.3s ease; box-shadow: 0 8px 28px rgba(13, 148, 136, 0.4);
          text-decoration: none;
        }
        .act-cta-btn-primary:hover {
          transform: translateY(-3px); box-shadow: 0 12px 36px rgba(13, 148, 136, 0.6);
          border-color: #2dd4bf;
        }

        .act-cta-btn-sec {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 900; letter-spacing: 0.08em;
          color: #ffffff; background: rgba(255, 255, 255, 0.12);
          border: 1.5px solid rgba(255, 255, 255, 0.3);
          padding: 15px 30px; border-radius: 16px;
          cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
          transition: all 0.3s ease; backdrop-filter: blur(12px);
          text-decoration: none;
        }
        .act-cta-btn-sec:hover {
          border-color: #2dd4bf; color: #2dd4bf;
          background: rgba(45, 212, 191, 0.15); transform: translateY(-3px);
        }

        .act-cta-stats-row {
          display: flex; align-items: center; justify-content: center;
          gap: 20px; flex-wrap: wrap;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 800; color: #94a3b8;
          letter-spacing: 0.1em; text-transform: uppercase;
        }
      `}</style>

      <div className="act-cta-bg">
        <img
          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1920&q=90"
          alt="Andaman Ocean Adventures Ready"
        />
      </div>

      <div className="act-cta-overlay" />
      <div className="act-cta-glow" />

      <div className="act-cta-content">
        <div className="act-cta-eyebrow">
          <Waves size={14} color="#2dd4bf" />
          <span>START YOUR EXPEDITION</span>
        </div>

        <h2 className="act-cta-title">
          READY TO DIVE INTO <br />
          <span style={{ color: '#2dd4bf' }}>THE ANDAMAN SEA?</span>
        </h2>

        <p className="act-cta-desc">
          Your next unforgettable underwater adventure awaits. Book certified scuba, night kayaking, or custom multi-activity passes today.
        </p>

        <div className="act-cta-btns">
          <button onClick={onExploreActivities} className="act-cta-btn-primary">
            <span>EXPLORE ALL ACTIVITIES</span>
            <ArrowRight size={15} />
          </button>

          <a href="/plan-trip" className="act-cta-btn-sec">
            <span>PLAN CUSTOM TRIP</span>
          </a>
        </div>

        <div className="act-cta-stats-row">
          <span>1:1 PADI DIVE MASTERS</span>
          <span>•</span>
          <span>FREE 4K GOPRO HD VIDEO</span>
          <span>•</span>
          <span>100% BAD WEATHER REFUND</span>
        </div>
      </div>
    </section>
  );
}
