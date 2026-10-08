// src/components/activities/ScubaExperience.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Waves, ArrowRight, Camera, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ScubaExperience({ onDiscoverScuba }) {
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
    <section ref={sectionRef} className="scuba-exp-root">
      <style>{`
        .scuba-exp-root {
          position: relative;
          width: 100%;
          min-height: 65vh;
          display: flex; align-items: center; justify-content: center;
          background: #0f172a;
          overflow: hidden;
          padding: 90px 24px; box-sizing: border-box;
          margin: 40px 0;
        }

        .scuba-exp-bg {
          position: absolute; inset: 0; z-index: 1;
        }
        .scuba-exp-bg img {
          width: 100%; height: 100%; object-fit: cover;
          filter: brightness(0.48) saturate(1.3);
        }

        .scuba-exp-overlay {
          position: absolute; inset: 0; z-index: 2;
          background: linear-gradient(
            135deg,
            rgba(2, 14, 22, 0.92) 0%,
            rgba(13, 148, 136, 0.35) 50%,
            rgba(2, 14, 22, 0.95) 100%
          );
        }

        .scuba-exp-glow {
          position: absolute; top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 750px; height: 360px;
          background: radial-gradient(ellipse at center, rgba(45, 212, 191, 0.22) 0%, transparent 70%);
          z-index: 3; pointer-events: none;
        }

        .scuba-exp-content {
          position: relative; z-index: 4; max-width: 820px;
          text-align: center; margin: 0 auto;
        }

        .scuba-exp-eyebrow {
          display: inline-flex; align-items: center; gap: 6px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; color: #2dd4bf;
          letter-spacing: 0.2em; text-transform: uppercase;
          background: rgba(255, 255, 255, 0.12); backdrop-filter: blur(12px);
          border: 1.5px solid rgba(45, 212, 191, 0.4);
          padding: 6px 18px; border-radius: 20px; margin-bottom: 20px;
        }

        .scuba-exp-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(38px, 5.5vw, 68px);
          font-weight: 700; color: #ffffff;
          line-height: 1.05; margin: 0 0 20px;
          text-shadow: 0 4px 28px rgba(0,0,0,0.85);
        }

        .scuba-exp-quote {
          font-family: 'Inter', sans-serif;
          font-style: italic;
          font-size: clamp(16px, 2vw, 20px);
          color: #e2e8f0; opacity: 0.95;
          margin: 0 auto 28px; max-width: 660px; line-height: 1.55;
        }

        .scuba-exp-tags {
          display: flex; align-items: center; justify-content: center;
          gap: 10px; flex-wrap: wrap; margin-bottom: 36px;
        }
        .scuba-tag-pill {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 800; color: #2dd4bf;
          background: rgba(0, 0, 0, 0.45);
          border: 1.5px solid rgba(45, 212, 191, 0.35);
          padding: 6px 16px; border-radius: 16px; text-transform: uppercase;
        }

        .scuba-exp-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 900; letter-spacing: 0.08em;
          color: #ffffff; background: linear-gradient(135deg, #F06543, #FF6B4A);
          border: 1.5px solid rgba(45, 212, 191, 0.5); padding: 15px 32px; border-radius: 16px;
          cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
          transition: all 0.3s ease; box-shadow: 0 8px 28px rgba(13, 148, 136, 0.4);
        }
        .scuba-exp-btn:hover {
          transform: translateY(-3px); box-shadow: 0 12px 36px rgba(13, 148, 136, 0.6);
          border-color: #2dd4bf;
        }
      `}</style>

      <div className="scuba-exp-bg">
        <img
          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1920&q=90"
          alt="Andaman Scuba Diving Coral Sanctuary"
        />
      </div>

      <div className="scuba-exp-overlay" />
      <div className="scuba-exp-glow" />

      <div className="scuba-exp-content">
        <div className="scuba-exp-eyebrow">
          <Waves size={14} color="#2dd4bf" />
          <span>DEEP SEA SCUBA EXPEDITIONS</span>
        </div>

        <h2 className="scuba-exp-title">ENTER THE SILENT BLUE WORLD</h2>

        <p className="scuba-exp-quote">
          "The best moments in the Andaman Sea aren't seen from the shore — they are discovered 12 meters under crystal water."
        </p>

        <div className="scuba-exp-tags">
          <span className="scuba-tag-pill">PADI & SSI CERTIFIED</span>
          <span className="scuba-tag-pill">FREE 4K GOPRO FOOTAGE</span>
          <span className="scuba-tag-pill">NON-SWIMMERS WELCOME</span>
          <span className="scuba-tag-pill">SHORE & BOAT DIVING</span>
        </div>

        <button onClick={onDiscoverScuba} className="scuba-exp-btn">
          <span>DISCOVER SCUBA PACKAGES</span>
          <ArrowRight size={15} />
        </button>
      </div>
    </section>
  );
}
