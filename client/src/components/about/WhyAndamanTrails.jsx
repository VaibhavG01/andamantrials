import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { MapPin, Sparkles, CheckCircle2, Compass, ShieldCheck, Zap } from 'lucide-react';

const DEFAULT_WHY_US = [
  { id: 'local', title: 'LOCAL EXPERTS ON GROUND', desc: 'Stationed in Port Blair, Havelock & Neil with 24/7 dedicated on-island concierge assistance.', icon: 'MapPin' },
  { id: 'curated', title: 'HANDPICKED EXPERIENCES', desc: 'Every scuba reef, beach villa, and private sunset boat is personally vetted by our curators.', icon: 'Sparkles' },
  { id: 'booking', title: 'GUARANTEED FERRY SEATS', desc: 'Seamless high-speed catamaran booking (Nautika & Makruzz) with zero standby ticket stress.', icon: 'CheckCircle2' },
  { id: 'custom', title: 'TAILORED TRIP PLANNING', desc: 'Every couple and family itinerary is customized to your preferred pace, style, and budget.', icon: 'Compass' },
  { id: 'transparent', title: 'NO HIDDEN COSTS', desc: 'All-inclusive packages with government entry fees, water permits, and transfers built in.', icon: 'ShieldCheck' },
  { id: 'support', title: 'REALTIME TRAVEL TECH', desc: 'Interactive 3D digital itinerary explorer, instant WhatsApp updates, and seamless support.', icon: 'Zap' },
];

const ICON_MAP = {
  MapPin,
  Sparkles,
  CheckCircle2,
  Compass,
  ShieldCheck,
  Zap,
};

export default function WhyAndamanTrails({ whyUs = DEFAULT_WHY_US }) {
  const cardsRef = useRef(null);

  useEffect(() => {
    if (!cardsRef.current) return;
    gsap.fromTo(
      cardsRef.current.children,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power2.out' }
    );
  }, []);

  return (
    <section className="why-at-root">
      <style>{`
        .why-at-root {
          max-width: 1340px;
          margin: 0 auto;
          padding: 60px 24px 80px;
        }

        .why-at-hdr {
          text-align: center;
          margin-bottom: 44px;
        }

        .why-at-sub {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px;
          font-weight: 800;
          letter-spacing: 0.2em;
          color: #F06543;
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        .why-at-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(30px, 4.5vw, 48px);
          font-weight: 600;
          color: #0B2545;
          margin: 0;
        }

        .why-at-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        @media (max-width: 900px) {
          .why-at-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 580px) {
          .why-at-grid { grid-template-columns: 1fr; }
        }

        .why-at-card {
          background: #ffffff;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1.5px solid #e2e8f0;
          border-radius: 20px;
          padding: 28px 24px;
          transition: all 0.35s ease;
        }
        .why-at-card:hover {
          transform: translateY(-5px);
          border-color: rgba(33, 230, 193, 0.45);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(33, 230, 193, 0.12);
        }

        .why-at-icon-box {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: rgba(33, 230, 193, 0.12);
          color: #F06543;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
        }
      `}</style>

      <div className="why-at-hdr">
        <div className="why-at-sub">THE ANDAMAN TRAILS DIFFERENCE</div>
        <h2 className="why-at-title">WHY TRAVEL WITH ANDAMAN TRAILS?</h2>
      </div>

      <div ref={cardsRef} className="why-at-grid">
        {whyUs.map((item) => {
          const Icon = ICON_MAP[item.icon] || Compass;
          return (
            <div key={item.id} className="why-at-card">
              <div className="why-at-icon-box">
                <Icon size={24} />
              </div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, fontWeight: 800, color: '#334155', letterSpacing: '0.04em', marginBottom: 8 }}>
                {item.title}
              </div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12.5, color: '#64748b', lineHeight: 1.6 }}>
                {item.desc}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
