import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Compass, Sparkles, Map, Globe, Target, ArrowRight } from 'lucide-react';

const DEFAULT_TIMELINE = [
  { id: 'idea', phase: 'THE IDEA', title: 'A Vision for Immersive Travel', desc: 'A vision to make discovering the Andaman archipelago simpler, more personal and more immersive for travelers around the world.', icon: 'Compass' },
  { id: 'beginning', phase: 'THE BEGINNING', title: 'Connecting Travelers to Islands', desc: 'Andaman Trails begins connecting travelers with handpicked island experiences, private catamarans, and local marine specialists.', icon: 'Sparkles' },
  { id: 'growth', phase: 'THE JOURNEY', title: 'Expanding Island Coverage', desc: 'The platform evolves around personalized day-wise planning, hidden reef discoveries, and luxury beachfront resort partnerships.', icon: 'Map' },
  { id: 'experience', phase: 'THE EXPERIENCE', title: 'Tech & Travel Fusion', desc: 'Technology and local island expertise come together into one seamless real-time booking and interactive 3D route planning experience.', icon: 'Globe' },
  { id: 'future', phase: 'THE FUTURE', title: 'Smarter Island Exploration', desc: 'Building a smarter, eco-responsible, and deeply personal way to explore every corner of the Andaman and Nicobar Islands.', icon: 'Target' },
];

const ICON_MAP = {
  Compass,
  Sparkles,
  Map,
  Globe,
  Target,
};

export default function StoryTimeline({ timeline = DEFAULT_TIMELINE }) {
  const listRef = useRef(null);

  useEffect(() => {
    if (!listRef.current) return;
    gsap.fromTo(
      listRef.current.children,
      { opacity: 0, y: 25 },
      { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power2.out' }
    );
  }, []);

  return (
    <section className="timeline-section-root">
      <style>{`
        .timeline-section-root {
          max-width: 1340px;
          margin: 0 auto;
          padding: 60px 24px 80px;
        }

        .timeline-hdr {
          text-align: center;
          margin-bottom: 48px;
        }

        .timeline-sub {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px;
          font-weight: 800;
          letter-spacing: 0.2em;
          color: #F06543;
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        .timeline-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(30px, 4.5vw, 48px);
          font-weight: 600;
          color: #0B2545;
          margin: 0;
        }

        /* Desktop Horizontal Timeline Track */
        .timeline-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px;
          position: relative;
        }

        @media (max-width: 1024px) {
          .timeline-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }

        .timeline-card {
          background: #ffffff;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1.5px solid #e2e8f0;
          border-radius: 20px;
          padding: 24px 20px;
          transition: all 0.35s ease;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
        }

        .timeline-card:hover {
          transform: translateY(-5px);
          border-color: rgba(33, 230, 193, 0.45);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.45), 0 0 20px rgba(33, 230, 193, 0.12);
        }

        .timeline-phase-tag {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px;
          font-weight: 900;
          letter-spacing: 0.12em;
          color: #F06543;
          background: rgba(33, 230, 193, 0.12);
          border: 1px solid rgba(33, 230, 193, 0.3);
          padding: 4px 10px;
          border-radius: 12px;
          display: inline-block;
          margin-bottom: 12px;
        }

        .timeline-card-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 14px;
          font-weight: 800;
          color: #0B2545;
          margin-bottom: 8px;
        }

        .timeline-card-desc {
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          color: #64748b;
          line-height: 1.6;
          margin: 0;
        }
      `}</style>

      <div className="timeline-hdr">
        <div className="timeline-sub">EVOLUTION & MILESTONES</div>
        <h2 className="timeline-title">OUR JOURNEY</h2>
      </div>

      <div ref={listRef} className="timeline-grid">
        {timeline.map((item) => {
          const Icon = ICON_MAP[item.icon] || Compass;
          return (
            <div key={item.id} className="timeline-card">
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                  <span className="timeline-phase-tag">{item.phase}</span>
                  <Icon size={18} color="#F06543" />
                </div>
                <div className="timeline-card-title">{item.title}</div>
                <p className="timeline-card-desc">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
