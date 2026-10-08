// src/components/activities/SeaKartExperience.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flame, ArrowRight, ShieldCheck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function SeaKartExperience({ onDiscoverSeaKart }) {
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
    <section ref={sectionRef} className="seakart-root">
      <style>{`
        .seakart-root {
          position: relative;
          width: 100%;
          min-height: 65vh;
          display: flex; align-items: center; justify-content: center;
          background: #0B2545;
          overflow: hidden;
          padding: 90px 24px; box-sizing: border-box;
          margin: 40px 0;
        }

        .seakart-bg {
          position: absolute; inset: 0; z-index: 1;
        }
        .seakart-bg img {
          width: 100%; height: 100%; object-fit: cover;
          filter: brightness(0.48) saturate(1.3);
        }

        .seakart-overlay {
          position: absolute; inset: 0; z-index: 2;
          background: linear-gradient(
            135deg,
            rgba(0, 45, 98, 0.92) 0%,
            rgba(13, 148, 136, 0.4) 50%,
            rgba(0, 45, 98, 0.96) 100%
          );
        }

        .seakart-glow {
          position: absolute; top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 720px; height: 360px;
          background: radial-gradient(ellipse at center, rgba(255, 180, 50, 0.22) 0%, transparent 70%);
          z-index: 3; pointer-events: none;
        }

        .seakart-content {
          position: relative; z-index: 4; max-width: 820px;
          text-align: center; margin: 0 auto;
        }

        .seakart-eyebrow {
          display: inline-flex; align-items: center; gap: 6px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; color: #ffd700;
          letter-spacing: 0.2em; text-transform: uppercase;
          background: rgba(255, 255, 255, 0.12); backdrop-filter: blur(12px);
          border: 1.5px solid rgba(255, 215, 0, 0.4);
          padding: 6px 18px; border-radius: 20px; margin-bottom: 20px;
        }

        .seakart-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(38px, 5.5vw, 68px);
          font-weight: 700; color: #ffffff;
          line-height: 1.05; margin: 0 0 20px;
          text-shadow: 0 4px 28px rgba(0,0,0,0.85);
        }

        .seakart-quote {
          font-family: 'Inter', sans-serif;
          font-style: italic;
          font-size: clamp(16px, 2vw, 20px);
          color: #f8fafc; opacity: 0.95;
          margin: 0 auto 28px; max-width: 660px; line-height: 1.55;
        }

        .seakart-tags {
          display: flex; align-items: center; justify-content: center;
          gap: 10px; flex-wrap: wrap; margin-bottom: 36px;
        }
        .seakart-tag-pill {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 800; color: #ffd700;
          background: rgba(0, 0, 0, 0.5);
          border: 1.5px solid rgba(255, 215, 0, 0.35);
          padding: 6px 16px; border-radius: 16px; text-transform: uppercase;
        }

        .seakart-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 900; letter-spacing: 0.08em;
          color: #ffffff; background: linear-gradient(135deg, #F06543, #FF6B4A);
          border: 1.5px solid rgba(255, 215, 0, 0.5); padding: 15px 32px; border-radius: 16px;
          cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
          transition: all 0.3s ease; box-shadow: 0 8px 28px rgba(255, 215, 0, 0.3);
        }
        .seakart-btn:hover {
          transform: translateY(-3px); box-shadow: 0 12px 36px rgba(255, 215, 0, 0.5);
          border-color: #ffd700;
        }
      `}</style>

      <div className="seakart-bg">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=90"
          alt="Self-drive SeaKart Adventure at Corbyn's Cove Beach"
        />
      </div>

      <div className="seakart-overlay" />
      <div className="seakart-glow" />

      <div className="seakart-content">
        <div className="seakart-eyebrow">
          <Flame size={14} color="#ffd700" />
          <span>EXCLUSIVE WATER SPORTS ADVENTURE</span>
        </div>

        <h2 className="seakart-title">SELF-DRIVE SEAKART AT CORBYN'S COVE</h2>

        <p className="seakart-quote">
          "Take the wheel of a hybrid jet-boat in the open sea. Complete control, high thrill, and 100% unsinkable safety."
        </p>

        <div className="seakart-tags">
          <span className="seakart-tag-pill">YOU DRIVE THE SEAKART</span>
          <span className="seakart-tag-pill">UNSINKABLE DESIGN</span>
          <span className="seakart-tag-pill">CORBYN'S COVE, PORT BLAIR</span>
          <span className="seakart-tag-pill">FREE HD VIDEO</span>
        </div>

        <button onClick={onDiscoverSeaKart} className="seakart-btn">
          <span>BOOK SEAKART EXPERIENCE</span>
          <ArrowRight size={15} />
        </button>
      </div>
    </section>
  );
}
