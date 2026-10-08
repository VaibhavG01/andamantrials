import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Sparkles, ArrowRight, MessageSquare, Compass, ChevronRight } from 'lucide-react';

const DEFAULT_WHATSAPP = {
  number: '919137835433',
  defaultMessage: 'Hello Andaman Trails! I would like to plan a trip to the Andaman Islands.',
};

export default function ContactHero({ onStartPlanning, whatsapp = DEFAULT_WHATSAPP }) {
  const heroRef = useRef(null);
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
    <section ref={heroRef} className="contact-hero-root">
      <style>{`
        .contact-hero-root {
          position: relative;
          width: 100%;
          min-height: 62vh;
          max-height: 720px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f8fafc;
          overflow: hidden;
          padding: 100px 24px 60px;
          box-sizing: border-box;
        }

        .contact-hero-bg {
          position: absolute;
          inset: 0;
          z-index: 1;
        }
        .contact-hero-bg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.65) saturate(1.15);
          transform: scale(1.04);
          transition: transform 10s ease;
        }
        .contact-hero-root:hover .contact-hero-bg img {
          transform: scale(1.08);
        }

        .contact-hero-overlay {
          position: absolute;
          inset: 0;
          z-index: 2;
          background: linear-gradient(180deg, rgba(0, 45, 98, 0.88) 0%, rgba(15, 23, 42, 0.92) 100%);
        }

        .contact-hero-glow {
          position: absolute;
          top: 30%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 700px;
          height: 380px;
          background: radial-gradient(ellipse at center, rgba(22, 217, 255, 0.16) 0%, rgba(33, 230, 193, 0.08) 45%, transparent 70%);
          z-index: 3;
          pointer-events: none;
        }

        .contact-hero-content {
          position: relative;
          z-index: 4;
          max-width: 820px;
          text-align: center;
          margin: 0 auto;
        }

        .contact-breadcrumb {
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
          margin-bottom: 20px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
        }

        .contact-hero-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(38px, 5.5vw, 68px);
          font-weight: 600;
          color: #ffffff;
          line-height: 1.06;
          margin: 0 0 16px;
          letter-spacing: -0.01em;
          text-shadow: 0 4px 24px rgba(0, 0, 0, 0.8);
        }

        .contact-hero-desc {
          font-family: 'Inter', sans-serif;
          font-size: clamp(14px, 1.8vw, 16px);
          color: #e2e8f0;
          line-height: 1.65;
          margin: 0 auto 32px;
          max-width: 680px;
        }

        .contact-hero-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .contact-btn-primary {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #ffffff;
          background: linear-gradient(135deg, #0B2545, #F06543);
          border: none;
          padding: 14px 28px;
          border-radius: 16px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
          box-shadow: 0 8px 28px rgba(22, 217, 255, 0.35);
          text-decoration: none;
        }
        .contact-btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 36px rgba(22, 217, 255, 0.55);
        }

        .contact-btn-whatsapp {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #25d366;
          background: rgba(37, 211, 102, 0.12);
          border: 1px solid rgba(37, 211, 102, 0.35);
          padding: 14px 26px;
          border-radius: 16px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
          text-decoration: none;
          backdrop-filter: blur(12px);
        }
        .contact-btn-whatsapp:hover {
          background: #25d366;
          color: #ffffff;
          border-color: #25d366;
          box-shadow: 0 8px 28px rgba(37, 211, 102, 0.4);
          transform: translateY(-3px);
        }
      `}</style>

      {/* BACKGROUND IMAGE */}
      <div className="contact-hero-bg">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=90"
          alt="Andaman Ocean Hero Visual"
        />
      </div>

      <div className="contact-hero-overlay" />
      <div className="contact-hero-glow" />

      {/* CONTENT */}
      <div ref={contentRef} className="contact-hero-content">
        {/* BREADCRUMB */}
        <div className="contact-breadcrumb">
          <a href="/home" style={{ color: '#64748b', textDecoration: 'none' }}>HOME</a>
          <ChevronRight size={12} color="#F06543" />
          <span>CONTACT</span>
        </div>

        {/* HEADLINE */}
        <h1 className="contact-hero-title">
          LET'S PLAN YOUR <br />
          <span style={{ color: '#F06543' }}>ANDAMAN JOURNEY</span>
        </h1>

        {/* SUPPORTING TEXT */}
        <p className="contact-hero-desc">
          Have a question, need help choosing the right package, or want a completely customized trip? Our travel experts are here to help turn your island vision into reality.
        </p>

        {/* CTAs */}
        <div className="contact-hero-actions">
          <button onClick={onStartPlanning} className="contact-btn-primary">
            <span>START PLANNING</span>
            <ArrowRight size={15} />
          </button>

          <a
            href={`https://wa.me/${whatsapp.number}?text=${encodeURIComponent(whatsapp.defaultMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn-whatsapp"
          >
            <MessageSquare size={15} />
            <span>WHATSAPP US</span>
          </a>
        </div>
      </div>
    </section>
  );
}
