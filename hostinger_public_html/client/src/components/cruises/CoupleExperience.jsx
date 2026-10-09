// src/components/cruises/CoupleExperience.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Heart, Anchor, Sun, Users, Camera, Utensils, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const FEATURES = [
  { icon: Anchor, label: 'Private Sailing' },
  { icon: Sun, label: 'Sunset Views' },
  { icon: Heart, label: 'Romantic Setting' },
  { icon: Users, label: 'Dedicated Crew' },
  { icon: Camera, label: 'Photography Moments (Optional)' },
  { icon: Utensils, label: 'Optional Dining' },
];

export default function CoupleExperience({ onExploreCouple }) {
  const rootRef = useRef(null);

  useEffect(() => {
    if (!rootRef.current) return;
    gsap.fromTo(
      rootRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 0.8, ease: 'power2.out',
        scrollTrigger: { trigger: rootRef.current, start: 'top 80%' }
      }
    );
  }, []);

  return (
    <section ref={rootRef} className="couple-root">
      <style>{`
        .couple-root {
          max-width: 1340px;
          margin: 0 auto;
          padding: 80px 24px;
        }

        .couple-card {
          background: #ffffff;
          backdrop-filter: blur(25px); -webkit-backdrop-filter: blur(25px);
          border: 1.5px solid rgba(244, 114, 182, 0.3);
          border-radius: 28px; overflow: hidden;
          display: grid; grid-template-columns: 1fr 1.1fr;
          box-shadow: 0 24px 64px rgba(0, 0, 0, 0.6), 0 0 40px rgba(244, 114, 182, 0.1);
        }
        @media (max-width: 900px) {
          .couple-card { grid-template-columns: 1fr; }
        }

        .couple-img-box {
          position: relative; min-height: 380px; overflow: hidden;
        }
        .couple-img-box img {
          width: 100%; height: 100%; object-fit: cover;
        }

        .couple-floating-badge {
          position: absolute; bottom: 20px; left: 20px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 800; color: #f472b6;
          background: #f8fafc; backdrop-filter: blur(8px);
          border: 1px solid rgba(244, 114, 182, 0.3);
          padding: 6px 16px; border-radius: 20px; text-transform: uppercase;
        }

        .couple-body {
          padding: 44px; display: flex; flex-direction: column; justify-content: space-between;
        }
        @media (max-width: 640px) {
          .couple-body { padding: 24px; }
        }

        .couple-eyebrow {
          display: flex; align-items: center; gap: 6px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; color: #f472b6;
          letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 8px;
        }

        .couple-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(32px, 4.5vw, 54px);
          font-weight: 600; color: #0B2545;
          line-height: 1.1; margin: 0 0 14px;
        }

        .couple-desc {
          font-family: 'Inter', sans-serif;
          font-size: 14px; color: #64748b;
          line-height: 1.65; margin-bottom: 24px;
        }

        .couple-feat-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 12px;
          margin-bottom: 24px;
        }
        .couple-feat-item {
          display: flex; align-items: center; gap: 8px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; color: #334155; font-weight: 700;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          padding: 10px 14px; border-radius: 14px;
        }

        .couple-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; letter-spacing: 0.08em;
          color: #334155; background: rgba(244, 114, 182, 0.15);
          border: 1px solid rgba(244, 114, 182, 0.4);
          padding: 13px 26px; border-radius: 14px;
          cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
          transition: all 0.3s ease; align-self: flex-start;
        }
        .couple-btn:hover {
          background: #fdf2f8; color: #db2777; border: 1px solid #fbcfe8;
          box-shadow: 0 8px 24px rgba(244, 114, 182, 0.4);
        }
      `}</style>

      <div className="couple-card">
        <div className="couple-img-box">
          <img
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=900&q=85"
            alt="Couple Sunset Cruise Andaman"
          />
          <span className="couple-floating-badge">✦ COUPLE ESCAPE</span>
        </div>

        <div className="couple-body">
          <div>
            <div className="couple-eyebrow">
              <Heart size={14} color="#f472b6" />
              <span>HONEYMOON & ROMANCE</span>
            </div>
            <h2 className="couple-title">A CRUISE MADE FOR TWO</h2>
            <p className="couple-desc">
              Sail through golden waters, watch the horizon turn amber, and create quiet memories built around the Andaman Sea.
            </p>

            <div className="couple-feat-grid">
              {FEATURES.map((f, i) => {
                const IconComponent = f.icon;
                return (
                  <div key={i} className="couple-feat-item">
                    <IconComponent size={14} color="#f472b6" />
                    <span>{f.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11.5, color: '#64748b', fontStyle: 'italic', marginBottom: 14 }}>
              Optional features subject to availability and advance arrangement.
            </div>
            <button onClick={onExploreCouple} className="couple-btn">
              <span>EXPLORE COUPLE CRUISES</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
