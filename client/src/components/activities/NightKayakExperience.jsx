// src/components/activities/NightKayakExperience.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Compass, Sparkles, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function NightKayakExperience({ onDiscoverNightKayak }) {
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
    <section ref={sectionRef} className="night-kayak-root">
      <style>{`
        .night-kayak-root {
          position: relative;
          width: 100%;
          min-height: 65vh;
          display: flex; align-items: center; justify-content: center;
          background: #020b14;
          overflow: hidden;
          padding: 90px 24px; box-sizing: border-box;
          margin: 40px 0;
        }

        .night-kayak-bg {
          position: absolute; inset: 0; z-index: 1;
        }
        .night-kayak-bg img {
          width: 100%; height: 100%; object-fit: cover;
          filter: brightness(0.42) saturate(1.4);
        }

        .night-kayak-overlay {
          position: absolute; inset: 0; z-index: 2;
          background: linear-gradient(
            135deg,
            rgba(2, 11, 20, 0.94) 0%,
            rgba(2, 44, 80, 0.45) 50%,
            rgba(2, 11, 20, 0.96) 100%
          );
        }

        .night-kayak-glow {
          position: absolute; top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 720px; height: 360px;
          background: radial-gradient(ellipse at center, rgba(34, 211, 238, 0.25) 0%, transparent 70%);
          z-index: 3; pointer-events: none;
        }

        .night-kayak-content {
          position: relative; z-index: 4; max-width: 820px;
          text-align: center; margin: 0 auto;
        }

        .night-kayak-eyebrow {
          display: inline-flex; align-items: center; gap: 6px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; color: #22d3ee;
          letter-spacing: 0.2em; text-transform: uppercase;
          background: rgba(255, 255, 255, 0.12); backdrop-filter: blur(12px);
          border: 1.5px solid rgba(34, 211, 238, 0.4);
          padding: 6px 18px; border-radius: 20px; margin-bottom: 20px;
        }

        .night-kayak-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(38px, 5.5vw, 68px);
          font-weight: 700; color: #ffffff;
          line-height: 1.05; margin: 0 0 20px;
          text-shadow: 0 4px 28px rgba(0,0,0,0.85);
        }

        .night-kayak-quote {
          font-family: 'Inter', sans-serif;
          font-style: italic;
          font-size: clamp(16px, 2vw, 20px);
          color: #e0f2fe; opacity: 0.95;
          margin: 0 auto 28px; max-width: 660px; line-height: 1.55;
        }

        .night-kayak-tags {
          display: flex; align-items: center; justify-content: center;
          gap: 10px; flex-wrap: wrap; margin-bottom: 36px;
        }
        .night-kayak-tag-pill {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 800; color: #38bdf8;
          background: rgba(0, 0, 0, 0.55);
          border: 1.5px solid rgba(56, 189, 248, 0.35);
          padding: 6px 16px; border-radius: 16px; text-transform: uppercase;
        }

        .night-kayak-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 900; letter-spacing: 0.08em;
          color: #ffffff; background: linear-gradient(135deg, #0284c7, #0B2545);
          border: 1.5px solid rgba(56, 189, 248, 0.5); padding: 15px 32px; border-radius: 16px;
          cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
          transition: all 0.3s ease; box-shadow: 0 8px 28px rgba(2, 132, 199, 0.4);
        }
        .night-kayak-btn:hover {
          transform: translateY(-3px); box-shadow: 0 12px 36px rgba(2, 132, 199, 0.6);
          border-color: #38bdf8;
        }
      `}</style>

      <div className="night-kayak-bg">
        <img
          src="https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?auto=format&fit=crop&w=1920&q=90"
          alt="Bioluminescence Night Kayaking in Havelock Mangroves"
        />
      </div>

      <div className="night-kayak-overlay" />
      <div className="night-kayak-glow" />

      <div className="night-kayak-content">
        <div className="night-kayak-eyebrow">
          <Sparkles size={14} color="#22d3ee" />
          <span>MAGICAL NIGHT EXPEDITION</span>
        </div>

        <h2 className="night-kayak-title">BIOLUMINESCENT NIGHT KAYAKING</h2>

        <p className="night-kayak-quote">
          "Paddle through star-lit mangrove creeks where every dip of your paddle sparks an ethereal blue neon ocean glow."
        </p>

        <div className="night-kayak-tags">
          <span className="night-kayak-tag-pill">NEON GLOWING PLANKTON</span>
          <span className="night-kayak-tag-pill">STARGAZING LAGOONS</span>
          <span className="night-kayak-tag-pill">CERTIFIED NIGHT GUIDES</span>
          <span className="night-kayak-tag-pill">HAVELOCK & PORT BLAIR</span>
        </div>

        <button onClick={onDiscoverNightKayak} className="night-kayak-btn">
          <span>EXPLORE NIGHT KAYAKING</span>
          <ArrowRight size={15} />
        </button>
      </div>
    </section>
  );
}
