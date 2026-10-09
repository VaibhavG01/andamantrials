// src/components/activities/ActivityInclusions.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, Camera, Users, Award, HeartHandshake, Compass } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const INCLUSIONS = [
  {
    icon: Award,
    title: 'CERTIFIED DIVE GEAR',
    desc: 'Sanitized Mares/Scubapro regulator, BCD, mask, fins, and safety flotation life jackets included.',
  },
  {
    icon: Users,
    title: '1:1 PADI DIVE MASTER',
    desc: 'A dedicated certified instructor holds you underwater throughout the entire dive duration.',
  },
  {
    icon: Camera,
    title: 'FREE 4K HD GOPRO MEDIA',
    desc: 'Underwater high-resolution photos and video recordings transferred to your phone at no extra charge.',
  },
  {
    icon: Compass,
    title: 'SHORE / BOAT TRANSFERS',
    desc: 'Speed boat transfer to pristine outer reefs (Nemo Reef / Elephant Beach / North Bay).',
  },
  {
    icon: Shield,
    title: 'SAFETY & FIRST AID',
    desc: 'Comprehensive briefing, medical oxygen on standby, and full marine activity insurance coverage.',
  },
  {
    icon: HeartHandshake,
    title: 'CHANGING ROOMS & LOCKERS',
    desc: 'Access to clean freshwater showers, changing cabins, and secure equipment lockers at dive stations.',
  },
];

export default function ActivityInclusions() {
  const gridRef = useRef(null);

  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll('.inc-act-card');
    gsap.fromTo(
      cards,
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: gridRef.current, start: 'top 85%' }
      }
    );
  }, []);

  return (
    <section className="inclusions-act-root">
      <style>{`
        .inclusions-act-root {
          max-width: 1340px;
          margin: 0 auto;
          padding: 80px 24px;
        }

        .inc-act-eyebrow {
          display: flex; align-items: center; justify-content: center; gap: 6px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; color: #F06543;
          letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 8px;
        }

        .inc-act-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(32px, 4.5vw, 52px);
          font-weight: 700; color: #0B2545; text-align: center;
          margin: 0 0 10px; line-height: 1.1;
        }

        .inc-act-note {
          font-family: 'Inter', sans-serif;
          font-size: 13px; color: #64748b; font-style: italic; text-align: center;
          margin-bottom: 44px;
        }

        .inc-act-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        @media (max-width: 960px) {
          .inc-act-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 580px) {
          .inc-act-grid { grid-template-columns: 1fr; }
        }

        .inc-act-card {
          background: #ffffff;
          border: 2px solid #e2e8f0;
          border-radius: 22px; padding: 32px 24px; text-align: center;
          display: flex; flex-direction: column; align-items: center;
          transition: all 0.35s ease;
          box-shadow: 0 4px 20px rgba(0, 45, 98, 0.04);
        }
        .inc-act-card:hover {
          transform: translateY(-6px);
          border-color: #F06543;
          box-shadow: 0 16px 40px rgba(0, 45, 98, 0.12);
        }

        .inc-act-icon-box {
          width: 56px; height: 56px; border-radius: 50%;
          background: linear-gradient(135deg, rgba(13, 148, 136, 0.15), rgba(0, 45, 98, 0.08));
          border: 1.5px solid rgba(13, 148, 136, 0.3);
          display: flex; align-items: center; justify-content: center;
          color: #F06543; margin-bottom: 18px; transition: transform 0.3s ease;
        }
        .inc-act-card:hover .inc-act-icon-box {
          transform: scale(1.1);
          background: #0B2545;
          color: #ffffff;
          border-color: #0B2545;
        }

        .inc-act-card-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 900; color: #0B2545;
          letter-spacing: 0.08em; text-transform: uppercase; margin: 0 0 10px;
        }

        .inc-act-card-desc {
          font-family: 'Inter', sans-serif;
          font-size: 13px; color: #64748b; line-height: 1.6; margin: 0; font-weight: 500;
        }
      `}</style>

      <div className="inc-act-eyebrow">
        <Compass size={14} color="#F06543" />
        <span>WHAT TO EXPECT</span>
      </div>
      <h2 className="inc-act-title">ACTIVITY INCLUSIONS & SAFETY ASSURANCE</h2>
      <p className="inc-act-note">
        All activity bookings include certified gear, safety briefings, and complimentary 4K media.
      </p>

      <div ref={gridRef} className="inc-act-grid">
        {INCLUSIONS.map((item, idx) => {
          const IconComp = item.icon;
          return (
            <div key={idx} className="inc-act-card">
              <div className="inc-act-icon-box">
                <IconComp size={24} />
              </div>
              <h3 className="inc-act-card-title">{item.title}</h3>
              <p className="inc-act-card-desc">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
