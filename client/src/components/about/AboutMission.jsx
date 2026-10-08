import React from 'react';
import { Target, Sparkles } from 'lucide-react';

const DEFAULT_MISSION = {
  title: 'OUR MISSION',
  headline: 'MAKE EVERY ANDAMAN JOURNEY FEEL PERSONAL.',
  subtitle: 'We believe travel should not be about following a template. It should be about discovering the places, experiences and moments that matter to you.',
};

export default function AboutMission({ mission = DEFAULT_MISSION }) {
  return (
    <section className="about-mission-root">
      <style>{`
        .about-mission-root {
          position: relative;
          max-width: 1340px;
          margin: 0 auto 80px;
          padding: 0 24px;
        }

        .about-mission-card {
          position: relative;
          border-radius: 28px;
          overflow: hidden;
          padding: 80px 48px;
          text-align: center;
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          box-shadow: 0 24px 64px rgba(0, 0, 0, 0.6), 0 0 40px rgba(33, 230, 193, 0.08);
        }
        @media (max-width: 640px) {
          .about-mission-card { padding: 48px 24px; }
        }

        .about-mission-bg {
          position: absolute; inset: 0; z-index: 1;
        }
        .about-mission-bg img {
          width: 100%; height: 100%; object-fit: cover;
          filter: brightness(0.4) saturate(1.2);
        }

        .about-mission-overlay {
          position: absolute; inset: 0; z-index: 2;
          background: linear-gradient(180deg, rgba(2, 14, 22, 0.8) 0%, #f8fafc 100%);
        }

        .about-mission-content {
          position: relative; z-index: 3; max-width: 780px; margin: 0 auto;
        }

        .about-mission-sub {
          display: inline-flex; align-items: center; gap: 6px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; letter-spacing: 0.2em;
          color: #F06543; text-transform: uppercase; margin-bottom: 14px;
        }

        .about-mission-headline {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(34px, 5.5vw, 60px);
          font-weight: 600; color: #0B2545;
          line-height: 1.06; margin: 0 0 18px;
          text-shadow: 0 4px 20px rgba(0,0,0,0.8);
        }

        .about-mission-desc {
          font-family: 'Inter', sans-serif;
          font-size: 15px; color: #475569;
          line-height: 1.7; margin: 0;
        }
      `}</style>

      <div className="about-mission-card">
        <div className="about-mission-bg">
          <img
            src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1600&q=90"
            alt="Scuba Coral Reef Mission Visual"
          />
        </div>
        <div className="about-mission-overlay" />

        <div className="about-mission-content">
          <div className="about-mission-sub">
            <Target size={13} color="#F06543" />
            <span>{mission.title}</span>
          </div>

          <h2 className="about-mission-headline">
            {mission.headline}
          </h2>

          <p className="about-mission-desc">
            {mission.subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
