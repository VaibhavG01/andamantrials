// src/components/packages/PackageDurationExplorer.jsx
import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Clock, Compass, Check, ArrowRight, Star, Ship } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const DURATION_HUBS = [
  {
    id: 'short',
    filterValue: 'SHORT',
    duration: '3D / 2N Express',
    name: 'SHORT ISLAND BREAK',
    badge: 'QUICK GETAWAY',
    rating: '4.8',
    desc: 'Perfect weekend escape covering Cellular Jail, Ross Island ruins, and a day trip to world-famous Radhanagar Beach in Havelock.',
    highlights: ['Port Blair & Havelock Ferry', 'Radhanagar Sunset', 'Cellular Jail Memorial'],
    startingPrice: '₹12,999',
  },
  {
    id: 'medium',
    filterValue: 'MEDIUM',
    duration: '5D / 4N Highlights',
    name: 'CLASSIC ISLAND TRIO',
    badge: 'MOST POPULAR',
    rating: '4.9',
    desc: 'The essential Andaman holiday covering Port Blair, 2 nights in Havelock & 1 night in tranquil Neil Island with private catamarans.',
    highlights: ['Havelock Beach Resort', 'Neil Howrah Rock Bridge', 'Elephant Reef Snorkel'],
    startingPrice: '₹21,500',
  },
  {
    id: 'bestseller',
    filterValue: 'MEDIUM',
    duration: '6D / 5N Bestseller',
    name: 'LUXURY ISLAND HOP',
    badge: 'BESTSELLER #1',
    rating: '4.9',
    desc: 'Our flagship luxury holiday: 2N Havelock, 1N Neil & 2N Port Blair with complimentary scuba trial, candlelit dinner & sunrise cruises.',
    highlights: ['Makruzz Luxury Catamarans', '4★ Beachfront Resorts', 'Complimentary Scuba Dive'],
    startingPrice: '₹28,500',
  },
  {
    id: 'long',
    filterValue: 'LONG',
    duration: '7D / 6N Grand Hop',
    name: 'GRAND ARCHIPELAGO',
    badge: 'COMPLETE EXPEDITION',
    rating: '4.9',
    desc: 'Complete expedition including Port Blair, Havelock, Neil and a wild jungle day safari to Baratang limestone caves & mud volcanoes.',
    highlights: ['Baratang Mangrove Safari', 'Limestone Caves Trek', 'Deep Reef Scuba Dives'],
    startingPrice: '₹36,999',
  },
];

export default function PackageDurationExplorer({ onSelectDuration }) {
  const [activeDurationId, setActiveDurationId] = useState(DURATION_HUBS[2].id);
  const gridRef = useRef(null);

  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll('.pkg-hub-card');
    gsap.fromTo(
      cards,
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power2.out',
        scrollTrigger: { trigger: gridRef.current, start: 'top 85%' }
      }
    );
  }, []);

  return (
    <section className="pkg-duration-root">
      <style>{`
        .pkg-duration-root {
          max-width: 1340px;
          margin: 0 auto;
          padding: 60px 24px 80px;
        }

        .pkg-duration-eyebrow {
          display: flex; align-items: center; justify-content: center; gap: 6px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; color: #F06543;
          letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 8px;
        }

        .pkg-duration-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(32px, 4.5vw, 52px);
          font-weight: 700; color: #0B2545; text-align: center;
          margin: 0 0 44px; line-height: 1.1;
        }

        .pkg-duration-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
        }
        @media (max-width: 1120px) {
          .pkg-duration-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .pkg-duration-grid { grid-template-columns: 1fr; }
        }

        .pkg-hub-card {
          background: #ffffff;
          border: 2px solid #e2e8f0;
          border-radius: 24px; padding: 24px 20px;
          display: flex; flex-direction: column; justify-content: space-between;
          transition: all 0.35s ease; cursor: pointer;
          box-shadow: 0 4px 20px rgba(0, 45, 98, 0.05);
        }
        .pkg-hub-card:hover, .pkg-hub-card.active {
          transform: translateY(-6px);
          border-color: #F06543;
          box-shadow: 0 16px 40px rgba(0, 45, 98, 0.14);
        }
        .pkg-hub-card.active {
          background: #FFF0EB;
        }

        .pkg-hub-badge {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 10px; font-weight: 900; letter-spacing: 0.08em;
          color: #F06543; background: #FFF0EB;
          padding: 4px 10px; border-radius: 12px;
          border: 1px solid rgba(13, 148, 136, 0.3);
          display: inline-block; margin-bottom: 12px; text-transform: uppercase;
        }

        .pkg-hub-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 16px; font-weight: 900; color: #0B2545;
          line-height: 1.3; margin: 0 0 4px;
        }

        .pkg-hub-spot {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11.5px; font-weight: 800; color: #F06543;
          display: flex; align-items: center; gap: 4px;
          margin-bottom: 12px; text-transform: uppercase;
        }

        .pkg-hub-desc {
          font-family: 'Inter', sans-serif;
          font-size: 12.5px; color: #64748b; line-height: 1.55;
          margin-bottom: 16px; font-weight: 500;
        }

        .pkg-highlights-list {
          display: flex; flex-direction: column; gap: 6px; margin-bottom: 20px;
          padding-top: 12px; border-top: 1.5px solid #f1f5f9;
        }
        .pkg-highlight-item {
          display: flex; align-items: center; gap: 6px;
          font-family: 'Inter', sans-serif; font-size: 12px; color: #334155; font-weight: 600;
        }

        .pkg-hub-footer {
          display: flex; align-items: center; justify-content: space-between;
          padding-top: 14px; border-top: 1.5px solid #f1f5f9;
          font-family: 'Space Grotesk', sans-serif; font-size: 12px; font-weight: 900;
        }
      `}</style>

      <div className="pkg-duration-eyebrow">
        <Clock size={14} color="#F06543" />
        <span>CURATED TRIP DURATIONS</span>
      </div>
      <h2 className="pkg-duration-title">EXPLORE PACKAGES BY DURATION</h2>

      <div ref={gridRef} className="pkg-duration-grid">
        {DURATION_HUBS.map((hub) => {
          const isActive = activeDurationId === hub.id;
          return (
            <div
              key={hub.id}
              className={`pkg-hub-card${isActive ? ' active' : ''}`}
              onClick={() => {
                setActiveDurationId(hub.id);
                if (onSelectDuration) onSelectDuration(hub.filterValue);
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="pkg-hub-badge">{hub.badge}</span>
                  <div className="flex items-center gap-1 text-[#ffd700] text-xs font-mono font-bold">
                    <Star size={11} className="fill-[#ffd700]" />
                    <span>{hub.rating}</span>
                  </div>
                </div>

                <div className="pkg-hub-title">{hub.name}</div>
                <div className="pkg-hub-spot">
                  <Clock size={11} />
                  <span>{hub.duration}</span>
                </div>

                <p className="pkg-hub-desc">{hub.desc}</p>

                <div className="pkg-highlights-list">
                  {hub.highlights.map((h, i) => (
                    <div key={i} className="pkg-highlight-item">
                      <Check size={12} color="#F06543" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pkg-hub-footer">
                <span style={{ color: '#F06543', display: 'flex', alignItems: 'center', gap: 4, fontFamily: "'Inter', sans-serif", fontSize: 11.5, fontWeight: 700 }}>
                  Starts {hub.startingPrice}
                </span>
                <span style={{ color: '#0B2545', display: 'flex', alignItems: 'center', gap: 4 }}>
                  <span>FILTER</span>
                  <ArrowRight size={13} />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
