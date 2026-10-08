import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Sparkles, CheckCircle2, Compass, Heart, ShieldCheck } from 'lucide-react';

const DEFAULT_VALUES_DATA = [
  { number: '01', title: 'AUTHENTICITY', desc: 'Real island recommendations rooted in deep local knowledge and firsthand experiences.', icon: 'Compass' },
  { number: '02', title: 'TRANSPARENCY', desc: 'Clear honest pricing with no hidden ferry markups or surprise tour restrictions.', icon: 'CheckCircle2' },
  { number: '03', title: 'SUSTAINABILITY', desc: 'Dedicated to reef protection, eco-certified stays, and zero plastic coastal tourism.', icon: 'ShieldCheck' },
  { number: '04', title: 'PASSION', desc: 'Crafting every itinerary with genuine care, attention to detail, and island love.', icon: 'Heart' },
  { number: '05', title: 'EXCELLENCE', desc: 'Uncompromising 5-star service standards from airport arrival to island departure.', icon: 'Sparkles' },
];

const ICON_MAP = {
  Sparkles,
  CheckCircle2,
  Compass,
  Heart,
  ShieldCheck,
};

export default function AboutValues({ values = DEFAULT_VALUES_DATA }) {
  const listRef = useRef(null);

  useEffect(() => {
    if (!listRef.current) return;
    gsap.fromTo(
      listRef.current.children,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power2.out' }
    );
  }, []);

  return (
    <section className="about-values-root">
      <style>{`
        .about-values-root {
          max-width: 1340px;
          margin: 0 auto;
          padding: 60px 24px 80px;
        }

        .values-hdr {
          text-align: center;
          margin-bottom: 44px;
        }

        .values-sub {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px;
          font-weight: 800;
          letter-spacing: 0.2em;
          color: #F06543;
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        .values-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(30px, 4.5vw, 48px);
          font-weight: 600;
          color: #0B2545;
          margin: 0;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px;
        }
        @media (max-width: 1024px) {
          .values-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 640px) {
          .values-grid { grid-template-columns: 1fr; }
        }

        .values-card {
          background: #ffffff;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1.5px solid #e2e8f0;
          border-radius: 20px;
          padding: 24px 18px;
          transition: all 0.35s ease;
          position: relative;
        }
        .values-card:hover {
          transform: translateY(-5px);
          border-color: rgba(33, 230, 193, 0.45);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(33, 230, 193, 0.12);
        }

        .values-number {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 28px;
          font-weight: 900;
          color: rgba(22, 217, 255, 0.3);
          line-height: 1;
          margin-bottom: 8px;
        }

        .values-card-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13.5px;
          font-weight: 900;
          color: #0B2545;
          letter-spacing: 0.06em;
          margin-bottom: 8px;
        }

        .values-card-desc {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: #64748b;
          line-height: 1.55;
          margin: 0;
        }
      `}</style>

      <div className="values-hdr">
        <div className="values-sub">OUR CORE GUIDING PRINCIPLES</div>
        <h2 className="values-title">WHAT WE BELIEVE IN</h2>
      </div>

      <div ref={listRef} className="values-grid">
        {values.map((item) => {
          const Icon = ICON_MAP[item.icon] || Sparkles;
          return (
            <div key={item.number} className="values-card">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                <div className="values-number">{item.number}</div>
                <Icon size={20} color="#F06543" />
              </div>
              <div className="values-card-title">{item.title}</div>
              <p className="values-card-desc">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
