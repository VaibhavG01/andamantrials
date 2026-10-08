import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ChevronRight, ArrowRight, Compass } from 'lucide-react';

const DEFAULT_HERO = {
  headline: "MORE THAN A JOURNEY.\nIT'S AN EXPERIENCE.",
  subtitle: 'We help travelers discover the Andaman Islands through meaningful experiences, thoughtfully planned journeys and unforgettable moments.',
  primaryCta: 'DISCOVER OUR STORY →',
  secondaryCta: 'EXPLORE ANDAMAN →',
};

export default function AboutHero({ onDiscoverStory, hero = DEFAULT_HERO }) {
  const contentRef = useRef(null);

  useEffect(() => {
    if (!contentRef.current) return;
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 35, scale: 0.96 },
      { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'power2.out', delay: 0.2 }
    );
  }, []);

  return (
    <section className="about-hero-root">
      <style>{`
        .about-hero-root {
          position: relative;
          width: 100%;
          min-height: 68vh;
          max-height: 740px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f8fafc;
          overflow: hidden;
          padding: 110px 24px 70px;
          box-sizing: border-box;
        }

        .about-hero-bg {
          position: absolute;
          inset: 0;
          z-index: 1;
        }
        .about-hero-bg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.55) saturate(1.2);
          transform: scale(1.05);
          transition: transform 12s ease;
        }
        .about-hero-root:hover .about-hero-bg img {
          transform: scale(1.09);
        }

        .about-hero-overlay {
          position: absolute;
          inset: 0;
          z-index: 2;
          background: linear-gradient(
            180deg,
            rgba(2, 14, 22, 0.85) 0%,
            #f8fafc 50%,
            rgba(2, 14, 22, 0.95) 100%
          );
        }

        .about-hero-glow {
          position: absolute;
          top: 35%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 750px;
          height: 400px;
          background: radial-gradient(ellipse at center, rgba(33, 230, 193, 0.16) 0%, rgba(22, 217, 255, 0.08) 45%, transparent 70%);
          z-index: 3;
          pointer-events: none;
        }

        .about-hero-content {
          position: relative;
          z-index: 4;
          max-width: 860px;
          text-align: center;
          margin: 0 auto;
        }

        .about-breadcrumb {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.2em;
          color: #F06543;
          background: #ffffff;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid #e2e8f0;
          padding: 6px 18px;
          border-radius: 30px;
          margin-bottom: 22px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
        }

        .about-hero-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(38px, 5.8vw, 72px);
          font-weight: 600;
          color: #ffffff;
          line-height: 1.05;
          margin: 0 0 18px;
          letter-spacing: -0.01em;
          text-shadow: 0 4px 24px rgba(0, 0, 0, 0.85);
          white-space: pre-line;
        }

        .about-hero-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: clamp(14px, 1.8vw, 16px);
          color: #475569;
          line-height: 1.65;
          margin: 0 auto 34px;
          max-width: 680px;
        }

        .about-hero-btns {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .about-btn-primary {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #ffffff;
          background: linear-gradient(135deg, #FF6B4A, #F06543);
          border: none;
          padding: 14px 30px;
          border-radius: 16px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
          box-shadow: 0 8px 28px rgba(22, 217, 255, 0.35);
          text-decoration: none;
        }
        .about-btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 36px rgba(22, 217, 255, 0.55);
        }

        .about-btn-sec {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #0B2545;
          background: #f1f5f9;
          border: 1px solid #cbd5e1;
          padding: 14px 28px;
          border-radius: 16px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
          text-decoration: none;
          backdrop-filter: blur(12px);
        }
        .about-btn-sec:hover {
          border-color: #F06543;
          color: #F06543;
          background: rgba(33, 230, 193, 0.1);
          transform: translateY(-3px);
        }
      `}</style>

      {/* HERO IMAGE */}
      <div className="about-hero-bg">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=90"
          alt="Andaman Coastal Sunset Visual"
        />
      </div>

      <div className="about-hero-overlay" />
      <div className="about-hero-glow" />

      {/* CONTENT */}
      <div ref={contentRef} className="about-hero-content">
        <div className="about-breadcrumb">
          <a href="/home" style={{ color: '#64748b', textDecoration: 'none' }}>HOME</a>
          <ChevronRight size={12} color="#F06543" />
          <span>ABOUT US</span>
        </div>

        <h1 className="about-hero-title">{hero.headline}</h1>
        <p className="about-hero-subtitle">{hero.subtitle}</p>

        <div className="about-hero-btns">
          <button onClick={onDiscoverStory} className="about-btn-primary">
            <span>{hero.primaryCta}</span>
          </button>

          <a href="/destinations" className="about-btn-sec">
            <Compass size={15} />
            <span>{hero.secondaryCta}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
