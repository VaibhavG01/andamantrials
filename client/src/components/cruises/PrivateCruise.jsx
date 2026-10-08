// src/components/cruises/PrivateCruise.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Anchor, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const GROUPS = ['Couples', 'Families', 'Friends', 'Celebrations', 'Corporate Groups'];

export default function PrivateCruise({ onRequestPrivate }) {
  const cardRef = useRef(null);

  useEffect(() => {
    if (!cardRef.current) return;
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 0.8, ease: 'power2.out',
        scrollTrigger: { trigger: cardRef.current, start: 'top 80%' }
      }
    );
  }, []);

  return (
    <section className="private-root">
      <style>{`
        .private-root {
          max-width: 1340px;
          margin: 0 auto;
          padding: 60px 24px 80px;
        }

        .private-card {
          position: relative;
          background: #ffffff;
          backdrop-filter: blur(25px); -webkit-backdrop-filter: blur(25px);
          border: 1.5px solid #e2e8f0;
          border-radius: 28px; overflow: hidden;
          padding: 60px 40px; text-align: center;
          box-shadow: 0 24px 64px rgba(0, 0, 0, 0.6), 0 0 40px rgba(22, 217, 255, 0.08);
        }
        @media (max-width: 640px) {
          .private-card { padding: 40px 20px; }
        }

        .private-bg-img {
          position: absolute; inset: 0; z-index: 1; opacity: 0.18;
          pointer-events: none;
        }
        .private-bg-img img {
          width: 100%; height: 100%; object-fit: cover;
        }

        .private-content {
          position: relative; z-index: 2; max-width: 760px; margin: 0 auto;
        }

        .private-eyebrow {
          display: inline-flex; align-items: center; gap: 6px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; color: #F06543;
          letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 12px;
        }

        .private-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(38px, 5.5vw, 66px);
          font-weight: 600; color: #0B2545;
          line-height: 1.05; margin: 0 0 16px;
        }

        .private-desc {
          font-family: 'Inter', sans-serif;
          font-size: 15px; color: #475569;
          line-height: 1.65; margin: 0 auto 28px; max-width: 620px;
        }

        .group-pills {
          display: flex; align-items: center; justify-content: center;
          gap: 10px; flex-wrap: wrap; margin-bottom: 36px;
        }
        .group-pill {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; color: #F06543;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          padding: 6px 18px; border-radius: 20px;
        }

        .private-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 800; letter-spacing: 0.08em;
          color: #ffffff; background: linear-gradient(135deg, #0B2545, #F06543);
          border: none; padding: 15px 34px; border-radius: 16px;
          cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
          transition: all 0.3s ease; box-shadow: 0 8px 28px rgba(22, 217, 255, 0.35);
        }
        .private-btn:hover {
          transform: translateY(-3px); box-shadow: 0 12px 36px rgba(22, 217, 255, 0.55);
        }
      `}</style>

      <div ref={cardRef} className="private-card">
        <div className="private-bg-img">
          <img
            src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1600&q=80"
            alt="Private Yacht"
          />
        </div>

        <div className="private-content">
          <div className="private-eyebrow">
            <Anchor size={14} color="#F06543" />
            <span>EXCLUSIVE CHARTER</span>
          </div>

          <h2 className="private-title">
            YOUR SEA. <br />
            <span style={{ color: '#F06543' }}>YOUR MOMENT.</span>
          </h2>

          <p className="private-desc">
            Make the ocean your own with a private cruise experience designed around your journey. Choose your route, schedule, and vessel.
          </p>

          <div className="group-pills">
            {GROUPS.map((g, i) => (
              <span key={i} className="group-pill">✦ {g}</span>
            ))}
          </div>

          <button onClick={onRequestPrivate} className="private-btn">
            <span>REQUEST PRIVATE CRUISE</span>
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </section>
  );
}
