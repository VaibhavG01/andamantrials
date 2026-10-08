// src/components/cruises/SunsetExperience.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sun, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function SunsetExperience({ onDiscoverSunset }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, scale: 0.97 },
      {
        opacity: 1, scale: 1, duration: 0.8, ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="sunset-root">
      <style>{`
        .sunset-root {
          position: relative;
          width: 100%;
          min-height: 65vh;
          display: flex; align-items: center; justify-content: center;
          background: #f8fafc;
          overflow: hidden;
          padding: 90px 24px; box-sizing: border-box;
          margin: 40px 0;
        }

        .sunset-bg {
          position: absolute; inset: 0; z-index: 1;
        }
        .sunset-bg img {
          width: 100%; height: 100%; object-fit: cover;
          filter: brightness(0.55) saturate(1.3);
        }

        .sunset-overlay {
          position: absolute; inset: 0; z-index: 2;
          background: linear-gradient(
            135deg,
            rgba(2, 14, 22, 0.90) 0%,
            rgba(30, 15, 5, 0.65) 50%,
            rgba(2, 14, 22, 0.90) 100%
          );
        }

        .sunset-glow {
          position: absolute; top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 700px; height: 350px;
          background: radial-gradient(ellipse at center, rgba(255, 180, 50, 0.22) 0%, transparent 70%);
          z-index: 3; pointer-events: none;
        }

        .sunset-content {
          position: relative; z-index: 4; max-width: 800px;
          text-align: center; margin: 0 auto;
        }

        .sunset-eyebrow {
          display: inline-flex; align-items: center; gap: 6px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; color: #ffd700;
          letter-spacing: 0.2em; text-transform: uppercase;
          background: #f8fafc; backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 215, 0, 0.3);
          padding: 6px 16px; border-radius: 20px; margin-bottom: 20px;
        }

        .sunset-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(38px, 5.5vw, 68px);
          font-weight: 600; color: #0B2545;
          line-height: 1.05; margin: 0 0 20px;
          text-shadow: 0 4px 28px rgba(0,0,0,0.85);
        }

        .sunset-quote {
          font-family: 'Inter', sans-serif;
          font-style: italic;
          font-size: clamp(16px, 2vw, 20px);
          color: #334155; opacity: 0.9;
          margin: 0 auto 28px; max-width: 620px; line-height: 1.5;
        }

        .sunset-tags {
          display: flex; align-items: center; justify-content: center;
          gap: 10px; flex-wrap: wrap; margin-bottom: 36px;
        }
        .tag-pill {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 800; color: #ffd700;
          background: #ffffff;
          border: 1px solid rgba(255, 215, 0, 0.25);
          padding: 5px 14px; border-radius: 14px; text-transform: uppercase;
        }

        .sunset-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 800; letter-spacing: 0.08em;
          color: #ffffff; background: linear-gradient(135deg, #0B2545, #F06543);
          border: none; padding: 14px 30px; border-radius: 16px;
          cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
          transition: all 0.3s ease; box-shadow: 0 8px 28px rgba(255, 215, 0, 0.35);
        }
        .sunset-btn:hover {
          transform: translateY(-3px); box-shadow: 0 12px 36px rgba(255, 215, 0, 0.55);
        }
      `}</style>

      <div className="sunset-bg">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=90"
          alt="Andaman Sunset Ocean Sail"
        />
      </div>

      <div className="sunset-overlay" />
      <div className="sunset-glow" />

      <div className="sunset-content">
        <div className="sunset-eyebrow">
          <Sun size={14} color="#ffd700" />
          <span>SUNSET CRUISE EXPERIENCE</span>
        </div>

        <h2 className="sunset-title">CHASE THE LAST LIGHT</h2>

        <p className="sunset-quote">
          "Some sunsets are better experienced from the middle of the sea."
        </p>

        <div className="sunset-tags">
          <span className="tag-pill">GOLDEN HOUR</span>
          <span className="tag-pill">OCEAN VIEWS</span>
          <span className="tag-pill">RELAXED SAILING</span>
          <span className="tag-pill">OPEN HORIZON</span>
        </div>

        <button onClick={onDiscoverSunset} className="sunset-btn">
          <span>DISCOVER SUNSET CRUISES</span>
          <ArrowRight size={15} />
        </button>
      </div>
    </section>
  );
}
