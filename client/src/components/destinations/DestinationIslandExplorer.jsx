// src/components/destinations/DestinationIslandExplorer.jsx
import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Compass, Check, ArrowRight, Clock, Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const DEST_ISLAND_HUBS = [
  {
    id: 'havelock',
    name: 'HAVELOCK ISLAND',
    alias: 'Swaraj Dweep',
    filterValue: 'South Andaman',
    ferryTime: '90 min Catamaran',
    badge: 'MUST VISIT #1',
    rating: '4.9',
    desc: 'Asia’s premier white-sand lagoon, home to Radhanagar Beach No. 7, Elephant Beach coral walks and deep PADI scuba diving.',
    topSpots: ['Radhanagar Beach No. 7', 'Elephant Beach Reef', 'Dixon’s Pinnacle Scuba'],
    startingPrice: '₹1,499',
  },
  {
    id: 'neil',
    name: 'NEIL ISLAND',
    alias: 'Shaheed Dweep',
    filterValue: 'South Andaman',
    ferryTime: '60 min from Havelock',
    badge: 'TRANQUIL HAVEN',
    rating: '4.8',
    desc: 'The tranquil vegetable bowl of the Andamans, boasting the 3D biological Howrah Rock Bridge and breathtaking Laxmanpur sunsets.',
    topSpots: ['Natural Rock Bridge', 'Laxmanpur Sunset Point', 'Bharatpur Snorkel Bay'],
    startingPrice: '₹1,299',
  },
  {
    id: 'port-blair',
    name: 'PORT BLAIR',
    alias: 'Capital Gateway',
    filterValue: 'South Andaman',
    ferryTime: 'Airport Hub (0 min)',
    badge: 'HISTORIC HUB',
    rating: '4.7',
    desc: 'The historic capital gateway hosting the Cellular Jail National Memorial, colonial Ross Island ruins and harbor promenades.',
    topSpots: ['Cellular Jail Memorial', 'Netaji Subhash Bose Island', 'Corbyn’s Cove Beach'],
    startingPrice: '₹899',
  },
  {
    id: 'baratang',
    name: 'BARATANG ISLAND',
    alias: 'Middle Andaman',
    filterValue: 'Middle Andaman',
    ferryTime: '3 hrs Road & Boat',
    badge: 'ECO MANGROVES',
    rating: '4.6',
    desc: 'Thrilling high-speed boat safaris through dense tropical mangrove creeks, million-year-old limestone stalactite caves & mud volcanoes.',
    topSpots: ['Limestone Caves Safari', 'Mud Volcano Formations', 'Parrot Island Sunset'],
    startingPrice: '₹1,850',
  },
];

export default function DestinationIslandExplorer({ onSelectIsland }) {
  const [activeHubId, setActiveHubId] = useState(DEST_ISLAND_HUBS[0].id);
  const gridRef = useRef(null);

  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll('.dest-hub-card');
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
    <section className="dest-islands-root">
      <style>{`
        .dest-islands-root {
          max-width: 1340px;
          margin: 0 auto;
          padding: 60px 24px 80px;
        }

        .dest-islands-eyebrow {
          display: flex; align-items: center; justify-content: center; gap: 6px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; color: #F06543;
          letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 8px;
        }

        .dest-islands-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(32px, 4.5vw, 52px);
          font-weight: 700; color: #0B2545; text-align: center;
          margin: 0 0 44px; line-height: 1.1;
        }

        .dest-islands-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
        }
        @media (max-width: 1120px) {
          .dest-islands-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .dest-islands-grid { grid-template-columns: 1fr; }
        }

        .dest-hub-card {
          background: #ffffff;
          border: 2px solid #e2e8f0;
          border-radius: 24px; padding: 24px 20px;
          display: flex; flex-direction: column; justify-content: space-between;
          transition: all 0.35s ease; cursor: pointer;
          box-shadow: 0 4px 20px rgba(0, 45, 98, 0.05);
        }
        .dest-hub-card:hover, .dest-hub-card.active {
          transform: translateY(-6px);
          border-color: #F06543;
          box-shadow: 0 16px 40px rgba(0, 45, 98, 0.14);
        }
        .dest-hub-card.active {
          background: #FFF0EB;
        }

        .dest-hub-badge {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 10px; font-weight: 900; letter-spacing: 0.08em;
          color: #F06543; background: #FFF0EB;
          padding: 4px 10px; border-radius: 12px;
          border: 1px solid rgba(13, 148, 136, 0.3);
          display: inline-block; margin-bottom: 12px; text-transform: uppercase;
        }

        .dest-hub-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 16px; font-weight: 900; color: #0B2545;
          line-height: 1.3; margin: 0 0 4px;
        }

        .dest-hub-spot {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11.5px; font-weight: 800; color: #F06543;
          display: flex; align-items: center; gap: 4px;
          margin-bottom: 12px; text-transform: uppercase;
        }

        .dest-hub-desc {
          font-family: 'Inter', sans-serif;
          font-size: 12.5px; color: #64748b; line-height: 1.55;
          margin-bottom: 16px; font-weight: 500;
        }

        .dest-top-spots-list {
          display: flex; flex-direction: column; gap: 6px; margin-bottom: 20px;
          padding-top: 12px; border-top: 1.5px solid #f1f5f9;
        }
        .dest-top-spot-item {
          display: flex; align-items: center; gap: 6px;
          font-family: 'Inter', sans-serif; font-size: 12px; color: #334155; font-weight: 600;
        }

        .dest-hub-footer {
          display: flex; align-items: center; justify-content: space-between;
          padding-top: 14px; border-top: 1.5px solid #f1f5f9;
          font-family: 'Space Grotesk', sans-serif; font-size: 12px; font-weight: 900;
        }
      `}</style>

      <div className="dest-islands-eyebrow">
        <Compass size={14} color="#F06543" />
        <span>ISLAND HUBS & TRANSIT PORTS</span>
      </div>
      <h2 className="dest-islands-title">EXPLORE THE ARCHIPELAGO BY ISLAND</h2>

      <div ref={gridRef} className="dest-islands-grid">
        {DEST_ISLAND_HUBS.map((hub) => {
          const isActive = activeHubId === hub.id;
          return (
            <div
              key={hub.id}
              className={`dest-hub-card${isActive ? ' active' : ''}`}
              onClick={() => {
                setActiveHubId(hub.id);
                if (onSelectIsland) onSelectIsland(hub.filterValue);
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="dest-hub-badge">{hub.badge}</span>
                  <div className="flex items-center gap-1 text-[#ffd700] text-xs font-mono font-bold">
                    <Star size={11} className="fill-[#ffd700]" />
                    <span>{hub.rating}</span>
                  </div>
                </div>

                <div className="dest-hub-title">{hub.name}</div>
                <div className="dest-hub-spot">
                  <MapPin size={11} />
                  <span>{hub.alias}</span>
                </div>

                <p className="dest-hub-desc">{hub.desc}</p>

                <div className="dest-top-spots-list">
                  {hub.topSpots.map((spot, i) => (
                    <div key={i} className="dest-top-spot-item">
                      <Check size={12} color="#F06543" />
                      <span>{spot}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="dest-hub-footer">
                <span style={{ color: '#F06543', display: 'flex', alignItems: 'center', gap: 4, fontFamily: "'Inter', sans-serif", fontSize: 11.5, fontWeight: 700 }}>
                  <Clock size={12} />
                  {hub.ferryTime}
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
