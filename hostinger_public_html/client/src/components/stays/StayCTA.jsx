// src/components/stays/StayCTA.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Compass } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function StayCTA({ onFindStay, onExploreDestinations }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 0.8, ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' }
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="stay-cta-root">
      <style>{`
        .stay-cta-root {
          position: relative; width: 100%; min-height: 480px;
          display: flex; align-items: center; justify-content: center;
          overflow: hidden; padding: 80px 24px; box-sizing: border-box;
        }

        .cta-bg {
          position: absolute; inset: 0; z-index: 1;
        }
        .cta-bg img {
          width: 100%; height: 100%; object-fit: cover;
          filter: brightness(0.45) saturate(1.3);
        }

        .cta-overlay {
          position: absolute; inset: 0; z-index: 2;
          background: linear-gradient(
            180deg,
            rgba(2, 14, 22, 0.92) 0%,
            #f8fafc 50%,
            rgba(2, 14, 22, 0.95) 100%
          );
        }

        .cta-glow {
          position: absolute; top: 40%; left: 50%;
          transform: translate(-50%, -50%);
          width: 700px; height: 350px;
          background: radial-gradient(ellipse at center, rgba(33, 230, 193, 0.15) 0%, transparent 70%);
          z-index: 3; pointer-events: none;
        }

        .cta-content {
          position: relative; z-index: 4; max-width: 720px;
          text-align: center; margin: 0 auto;
        }

        .cta-heading {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(36px, 5.5vw, 68px);
          font-weight: 600; color: #0B2545; line-height: 1.08;
          margin: 0 0 16px;
          text-shadow: 0 4px 28px rgba(0, 0, 0, 0.85);
        }

        .cta-desc {
          font-family: 'Inter', sans-serif;
          font-size: clamp(13px, 1.6vw, 16px);
          color: #475569; line-height: 1.65;
          margin: 0 auto 34px; max-width: 600px;
        }

        .cta-btns {
          display: flex; align-items: center; justify-content: center;
          gap: 16px; flex-wrap: wrap;
        }

        .cta-btn-primary {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 800; letter-spacing: 0.08em;
          color: #ffffff; background: linear-gradient(135deg, #FF6B4A, #F06543);
          border: none; padding: 14px 30px; border-radius: 16px;
          cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
          transition: all 0.3s ease; box-shadow: 0 8px 28px rgba(22, 217, 255, 0.35);
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
        }
        .cta-btn-sec:hover {
          border-color: #F06543; color: #F06543;
          background: rgba(33, 230, 193, 0.1); transform: translateY(-3px);
        }
      `}</style>

      <div className="cta-bg">
        <img
          src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1920&q=90"
          alt="Andaman beachfront resort sunset"
        />
      </div>
      <div className="cta-overlay" />
      <div className="cta-glow" />

      <div className="cta-content">
        <h2 className="cta-heading">
          FIND YOUR PLACE <br />
          <span style={{ color: '#F06543' }}>IN PARADISE</span>
        </h2>
        <p className="cta-desc">
          From beachfront resorts to quiet island escapes, find a stay that becomes part of your Andaman story.
        </p>

        <div className="cta-btns">
          <button onClick={onFindStay} className="cta-btn-primary">
            <span>FIND MY STAY</span>
            <ArrowRight size={15} />
          </button>
          <button onClick={onExploreDestinations} className="cta-btn-sec">
            <Compass size={15} />
            <span>EXPLORE DESTINATIONS</span>
          </button>
        </div>
      </div>
    </section>
  );
}
