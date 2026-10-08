// src/components/stays/StayHero.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ChevronRight, ArrowRight, Compass, Sun, MapPin } from 'lucide-react';

export default function StayHero({ onFindStay, onExploreDestinations }) {
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
    <section className="stay-hero-root">
      <style>{`
        .stay-hero-root {
          position: relative; width: 100%; min-height: 72vh; max-height: 760px;
          display: flex; align-items: center; justify-content: center;
          background: #f8fafc; overflow: hidden;
          padding: 140px 24px 90px; box-sizing: border-box;
        }

        .stay-hero-bg {
          position: absolute; inset: 0; z-index: 1;
        }
        .stay-hero-bg img {
          width: 100%; height: 100%; object-fit: cover;
          filter: brightness(0.55) saturate(1.25);
          transform: scale(1.04); transition: transform 10s ease;
        }
        .stay-hero-root:hover .stay-hero-bg img { transform: scale(1.08); }

        .stay-hero-overlay {
          position: absolute; inset: 0; z-index: 2;
          background: linear-gradient(
            180deg,
            rgba(2, 14, 22, 0.85) 0%,
            #f8fafc 50%,
            rgba(2, 14, 22, 0.97) 100%
          );
        }

        .stay-hero-glow {
          position: absolute; top: 35%; left: 50%;
          transform: translate(-50%, -50%);
          width: 800px; height: 420px;
          background: radial-gradient(ellipse at center, rgba(240, 101, 67, 0.18) 0%, rgba(11, 37, 69, 0.12) 45%, transparent 70%);
          z-index: 3; pointer-events: none;
        }

        .stay-hero-content {
          position: relative; z-index: 4; max-width: 860px;
          text-align: center; margin: 0 auto;
        }

        .stay-breadcrumb {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; letter-spacing: 0.15em;
          color: #F06543; background: #ffffff;
          border: 1px solid #ebded2;
          padding: 6px 18px; border-radius: 30px; margin-bottom: 20px;
          box-shadow: 0 4px 16px rgba(11, 37, 69, 0.08);
        }

        .stay-hero-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(40px, 6.2vw, 76px);
          font-weight: 700; color: #ffffff;
          line-height: 1.05; margin: 0 0 16px; letter-spacing: -0.01em;
          text-shadow: 0 4px 28px rgba(0, 0, 0, 0.6);
        }

        .stay-hero-desc {
          font-family: 'Inter', sans-serif;
          font-size: clamp(14px, 1.8vw, 16.5px);
          color: #ebded2; line-height: 1.65;
          margin: 0 auto 34px; max-width: 680px;
        }

        .stay-hero-btns {
          display: flex; align-items: center; justify-content: center;
          gap: 16px; flex-wrap: wrap;
        }

        .btn-primary {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 800; letter-spacing: 0.08em;
          color: #ffffff; background: linear-gradient(135deg, #FF6B4A, #F06543);
          border: none; padding: 14px 30px; border-radius: 16px;
          cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
          transition: all 0.3s ease; box-shadow: 0 8px 24px rgba(240, 101, 67, 0.3);
        }
        .btn-primary:hover {
          transform: translateY(-3px); box-shadow: 0 12px 32px rgba(240, 101, 67, 0.45);
        }

        .btn-sec {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 800; letter-spacing: 0.08em;
          color: #0B2545; background: #ffffff;
          border: 1.5px solid #ebded2;
          padding: 14px 28px; border-radius: 16px;
          cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
          transition: all 0.3s ease; box-shadow: 0 4px 14px rgba(11, 37, 69, 0.06);
        }
        .btn-sec:hover {
          border-color: #F06543; color: #F06543;
          background: #FFF0EB; transform: translateY(-3px);
        }
      `}</style>

      <div className="stay-hero-bg">
        <img
          src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1920&q=90"
          alt="Andaman Beachfront Luxury Resort"
        />
      </div>

      <div className="stay-hero-overlay" />
      <div className="stay-hero-glow" />

      <div ref={contentRef} className="stay-hero-content">
        <div className="stay-breadcrumb">
          <a href="/home" style={{ color: '#64748b', textDecoration: 'none' }}>HOME</a>
          <ChevronRight size={12} color="#F06543" />
          <span>STAYS</span>
        </div>

        <h1 className="stay-hero-title">
          STAY WHERE <br />
          <span style={{ color: '#F06543' }}>ANDAMAN BEGINS</span>
        </h1>

        <p className="stay-hero-desc">
          Discover handpicked stays, beachfront resorts, eco villas and unforgettable places to stay across the Andaman Islands.
        </p>

        <div className="stay-hero-btns">
          <button onClick={onFindStay} className="btn-primary">
            <span>FIND YOUR STAY</span>
            <ArrowRight size={15} />
          </button>

          <button onClick={onExploreDestinations} className="btn-sec">
            <Compass size={15} />
            <span>EXPLORE DESTINATIONS</span>
          </button>
        </div>
      </div>
    </section>
  );
}
