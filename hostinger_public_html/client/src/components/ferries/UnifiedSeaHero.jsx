// src/components/ferries/UnifiedSeaHero.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Master Andaman Trails Ferries & Luxury Cruises Unified Hero Component

import React from 'react';
import { Ship, Anchor, Sparkles, ShieldCheck, Clock, Compass, ArrowRight, Navigation, Star } from 'lucide-react';

export default function UnifiedSeaHero({ onBookFerry, onExploreCruises, onViewSchedule }) {
  return (
    <section className="unified-sea-hero-root">
      <style>{`
        .unified-sea-hero-root {
          position: relative;
          min-height: 78vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #07182C 0%, #0B2545 50%, #0D3B66 100%);
          color: #ffffff;
          overflow: hidden;
          padding: 130px 24px 100px;
        }

        .hero-bg-overlay {
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(circle at 20% 30%, rgba(240, 101, 67, 0.15) 0%, transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(22, 217, 255, 0.12) 0%, transparent 45%),
            url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=2000&q=85');
          background-size: cover;
          background-position: center;
          opacity: 0.28;
          mix-blend-mode: luminosity;
          pointer-events: none;
        }

        .hero-mesh-grid {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 40px 40px;
          pointer-events: none;
        }

        .hero-inner-container {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          width: 100%;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .live-status-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(16, 185, 129, 0.12);
          border: 1px solid rgba(16, 185, 129, 0.35);
          backdrop-filter: blur(12px);
          padding: 6px 16px;
          border-radius: 999px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #34D399;
          margin-bottom: 22px;
          animation: pulseGreen 2.5s infinite ease-in-out;
        }

        @keyframes pulseGreen {
          0%, 100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.2); }
          50% { box-shadow: 0 0 0 8px rgba(16, 185, 129, 0); }
        }

        .hero-title-main {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(38px, 6vw, 68px);
          font-weight: 600;
          line-height: 1.08;
          letter-spacing: -0.02em;
          color: #ffffff;
          margin: 0 0 16px;
          text-shadow: 0 4px 20px rgba(0,0,0,0.5);
        }

        .hero-title-main span {
          background: linear-gradient(135deg, #FF8A65 0%, #F06543 50%, #FFB088 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-subtitle-text {
          font-family: 'Inter', sans-serif;
          font-size: clamp(15px, 1.8vw, 19px);
          font-weight: 400;
          line-height: 1.6;
          color: #CBD5E1;
          max-width: 820px;
          margin: 0 0 32px;
        }

        .hero-action-buttons {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 48px;
        }

        .btn-hero-primary {
          background: linear-gradient(135deg, #FF6B4A 0%, #F06543 100%);
          color: #ffffff;
          border: none;
          padding: 15px 30px;
          border-radius: 14px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 14px;
          font-weight: 900;
          letter-spacing: 0.04em;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          box-shadow: 0 8px 24px rgba(240, 101, 67, 0.4);
          transition: all 0.3s ease;
        }

        .btn-hero-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(240, 101, 67, 0.6);
        }

        .btn-hero-secondary {
          background: rgba(255, 255, 255, 0.08);
          color: #ffffff;
          border: 1.5px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(12px);
          padding: 14px 28px;
          border-radius: 14px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 14px;
          font-weight: 800;
          letter-spacing: 0.04em;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          transition: all 0.3s ease;
        }

        .btn-hero-secondary:hover {
          background: rgba(255, 255, 255, 0.16);
          border-color: rgba(255, 255, 255, 0.4);
          transform: translateY(-2px);
        }

        .hero-stats-strip {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          width: 100%;
          max-width: 960px;
          background: rgba(11, 37, 69, 0.65);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 20px;
          padding: 20px 28px;
        }

        @media (max-width: 768px) {
          .hero-stats-strip {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
            padding: 16px;
          }
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .stat-number {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(20px, 2.5vw, 26px);
          font-weight: 900;
          color: #ffffff;
          margin-bottom: 2px;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .stat-label {
          font-family: 'Inter', sans-serif;
          font-size: 11.5px;
          font-weight: 600;
          color: #94A3B8;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }
      `}</style>

      <div className="hero-bg-overlay" />
      <div className="hero-mesh-grid" />

      <div className="hero-inner-container">
        {/* LIVE STATUS BADGE */}
        <div className="live-status-pill">
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#34D399', display: 'inline-block' }} />
          <span>LIVE SAILINGS OPERATING • PORT BLAIR • HAVELOCK • NEIL ISLAND • BARATANG</span>
        </div>

        {/* HERO TITLE */}
        <h1 className="hero-title-main">
          Andaman Inter-Island <span>Ferries & Luxury Cruises</span>
        </h1>

        {/* SUBTITLE */}
        <p className="hero-subtitle-text">
          Book verified live seats across premier catamaran fleets — <strong>Makruzz, Nautika, Green Ocean & ITT Majestic</strong> — alongside sunset yacht sails, harbor dinner cruises and private island charters with instant PNR confirmation.
        </p>

        {/* ACTIONS */}
        <div className="hero-action-buttons">
          <button type="button" onClick={onBookFerry} className="btn-hero-primary">
            <Ship size={18} />
            Book Island Ferry Slot
            <ArrowRight size={16} />
          </button>
          <button type="button" onClick={onExploreCruises} className="btn-hero-secondary">
            <Anchor size={18} />
            Sunset & Luxury Cruises
          </button>
          <button type="button" onClick={onViewSchedule} className="btn-hero-secondary">
            <Clock size={18} />
            Live Daily Timetable
          </button>
        </div>

        {/* KEY HIGHLIGHT STATS */}
        <div className="hero-stats-strip">
          <div className="stat-item">
            <div className="stat-number">
              100%
            </div>
            <div className="stat-label">Confirmed E-Tickets</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">
              4.9 <Star size={16} fill="#F06543" color="#F06543" />
            </div>
            <div className="stat-label">50,000+ Happy Voyagers</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">
              90 Min
            </div>
            <div className="stat-label">Fast Catamaran Transit</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">
              24/7
            </div>
            <div className="stat-label">Jetty Concierge Desk</div>
          </div>
        </div>
      </div>
    </section>
  );
}
