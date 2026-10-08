import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Compass, Calendar, Sparkles, Waves, Heart, Eye } from 'lucide-react';

const DEFAULT_VISION = {
  title: 'OUR VISION',
  headline: 'TO BUILD THE MOST IMMERSIVE WAY TO EXPERIENCE ANDAMAN.',
  subtitle: 'Bringing together travel expertise, technology, personalization, local experiences, and interactive discovery into one seamless platform.',
  cards: [
    { id: 'explore', label: 'EXPLORE', desc: 'Interactive 3D maps and deep island guides', icon: 'Compass' },
    { id: 'plan', label: 'PLAN', desc: 'Custom day-by-day itineraries tailored to your pace', icon: 'Calendar' },
    { id: 'discover', label: 'DISCOVER', desc: 'Uncover secret reefs, quiet beaches, and local food', icon: 'Sparkles' },
    { id: 'experience', label: 'EXPERIENCE', desc: 'PADI dive sessions, private ferries, and beachfront stays', icon: 'Waves' },
    { id: 'remember', label: 'REMEMBER', desc: 'Moments that stay with you long after returning home', icon: 'Heart' },
  ],
};

const ICON_MAP = {
  Compass,
  Calendar,
  Sparkles,
  Waves,
  Heart,
};

export default function AboutVision({ vision = DEFAULT_VISION }) {
  const cardsRef = useRef(null);

  useEffect(() => {
    if (!cardsRef.current) return;
    gsap.fromTo(
      cardsRef.current.children,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power2.out' }
    );
  }, []);

  return (
    <section className="about-vision-root">
      <style>{`
        .about-vision-root {
          max-width: 1340px;
          margin: 0 auto;
          padding: 60px 24px 80px;
        }

        .vision-hdr {
          text-align: center;
          max-width: 720px;
          margin: 0 auto 48px;
        }

        .vision-sub {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px;
          font-weight: 800;
          letter-spacing: 0.2em;
          color: #F06543;
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        .vision-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(30px, 4.5vw, 48px);
          font-weight: 600;
          color: #0B2545;
          margin: 0 0 12px;
        }

        .vision-desc {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          color: #64748b;
          line-height: 1.6;
          margin: 0;
        }

        .vision-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px;
        }
        @media (max-width: 1024px) {
          .vision-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 640px) {
          .vision-grid { grid-template-columns: 1fr; }
        }

        .vision-card {
          background: #ffffff;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1.5px solid #e2e8f0;
          border-radius: 20px;
          padding: 24px 18px;
          text-align: center;
          transition: all 0.35s ease;
        }

        .vision-card:hover {
          transform: translateY(-5px);
          border-color: rgba(33, 230, 193, 0.45);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(33, 230, 193, 0.12);
        }

        .vision-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 14px;
          background: rgba(22, 217, 255, 0.12);
          color: #F06543;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 14px;
        }
        .vision-card:hover .vision-icon-box {
          background: linear-gradient(135deg, #0B2545, #F06543);
          color: #ffffff;
        }
      `}</style>

      <div className="vision-hdr">
        <div className="vision-sub">{vision.title}</div>
        <h2 className="vision-title">{vision.headline}</h2>
        <p className="vision-desc">{vision.subtitle}</p>
      </div>

      <div ref={cardsRef} className="vision-grid">
        {vision.cards.map((card) => {
          const Icon = ICON_MAP[card.icon] || Compass;
          return (
            <div key={card.id} className="vision-card">
              <div className="vision-icon-box">
                <Icon size={22} />
              </div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 900, color: '#334155', letterSpacing: '0.08em', marginBottom: 6 }}>
                {card.label}
              </div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11.5, color: '#64748b', lineHeight: 1.5 }}>
                {card.desc}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
