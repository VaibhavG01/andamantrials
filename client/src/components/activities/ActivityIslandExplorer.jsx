// src/components/activities/ActivityIslandExplorer.jsx
import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Compass, Check, ArrowRight } from 'lucide-react';
import { destinationService } from '../../api/destinationService';

gsap.registerPlugin(ScrollTrigger);

const DEFAULT_HUBS = [
  {
    id: 'havelock',
    name: 'Havelock (Swaraj Dweep)',
    badge: 'SCUBA CAPITAL',
    heroSpot: 'Elephant Beach & Nemo Reef',
    filterValue: 'havelock',
    description: 'Premier scuba diving reefs, bioluminescent night kayaking, and calm crystal lagoon waters.',
    topActivities: ['PADI Discover Scuba Diving', 'Night Mangrove Kayaking', 'Elephant Beach Sea Walk'],
  },
  {
    id: 'neil',
    name: 'Neil Island (Shaheed Dweep)',
    badge: 'CORAL REEF SANCTUARY',
    heroSpot: 'Bharatpur & Laxmanpur Beach',
    filterValue: 'neil',
    description: 'Vibrant live coral garden snorkeling, glass bottom boating, and scenic sunset reef walks.',
    topActivities: ['Live Coral Snorkeling', 'Glass Bottom Boat Safari', 'Natural Rock Bridge Walk'],
  },
  {
    id: 'port-blair',
    name: 'Port Blair & Surrounds',
    badge: 'COASTAL WATERSPORTS',
    heroSpot: 'Corbyn’s Cove & North Bay',
    filterValue: 'port-blair',
    description: 'High adrenaline jet skiing, speedboating, sea karts, parasailing, and light & sound tours.',
    topActivities: ['Parasailing over Bay', 'Jet Skiing & Speedboats', 'Semi-Submarine Coral Safari'],
  },
  {
    id: 'baratang',
    name: 'Baratang & Middle Andaman',
    badge: 'ECO EXPEDITIONS',
    heroSpot: 'Limestone Caves & Mangroves',
    filterValue: 'baratang',
    description: 'High-speed fiber boat safari through dense mangrove tunnels and ancient stalactite caves.',
    topActivities: ['Mangrove Creek Speedboat', 'Limestone Cave Trek', 'Parrot Island Sunset Cruise'],
  },
];

export default function ActivityIslandExplorer({ onSelectIsland }) {
  const [hubs, setHubs] = useState(DEFAULT_HUBS);
  const [activeHubId, setActiveHubId] = useState(DEFAULT_HUBS[0].id);
  const gridRef = useRef(null);

  useEffect(() => {
    destinationService.getDestinations()
      .then((res) => {
        const dests = res.data || [];
        if (Array.isArray(dests) && dests.length > 0) {
          const mapped = dests.slice(0, 4).map((d, i) => ({
            id: d.slug || `dest-${d.id}`,
            name: d.name,
            badge: d.isFeatured ? 'TOP RATED HUB' : 'ISLAND ADVENTURE',
            heroSpot: d.name,
            filterValue: d.slug || d.name.toLowerCase().replace(/\s+/g, '-'),
            description: d.shortDescription || d.description || 'Pristine coastal waters and verified excursion points.',
            topActivities: ['Scuba & Snorkeling', 'Guided Island Safari', 'Beach Watersports'],
          }));
          setHubs(mapped);
          if (mapped.length > 0) setActiveHubId(mapped[0].id);
        }
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll('.island-hub-card');
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
    <section className="islands-root">
      <style>{`
        .islands-root {
          max-width: 1340px;
          margin: 0 auto;
          padding: 60px 24px 80px;
        }

        .islands-eyebrow {
          display: flex; align-items: center; justify-content: center; gap: 6px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; color: #F06543;
          letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 8px;
        }

        .islands-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(32px, 4.5vw, 52px);
          font-weight: 700; color: #0B2545; text-align: center;
          margin: 0 0 44px; line-height: 1.1;
        }

        .islands-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
        }
        @media (max-width: 1120px) {
          .islands-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .islands-grid { grid-template-columns: 1fr; }
        }

        .island-hub-card {
          background: #ffffff;
          border: 2px solid #e2e8f0;
          border-radius: 24px; padding: 24px 20px;
          display: flex; flex-direction: column; justify-content: space-between;
          transition: all 0.35s ease; cursor: pointer;
          box-shadow: 0 4px 20px rgba(0, 45, 98, 0.05);
        }
        .island-hub-card:hover, .island-hub-card.active {
          transform: translateY(-6px);
          border-color: #F06543;
          box-shadow: 0 16px 40px rgba(0, 45, 98, 0.14);
        }
        .island-hub-card.active {
          background: #FFF0EB;
        }

        .hub-badge {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 10px; font-weight: 900; letter-spacing: 0.08em;
          color: #F06543; background: #FFF0EB;
          padding: 4px 10px; border-radius: 12px;
          border: 1px solid rgba(13, 148, 136, 0.3);
          display: inline-block; margin-bottom: 12px; text-transform: uppercase;
        }

        .hub-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 16px; font-weight: 900; color: #0B2545;
          line-height: 1.3; margin: 0 0 6px;
        }

        .hub-spot {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 800; color: #F06543;
          display: flex; align-items: center; gap: 4px;
          margin-bottom: 14px;
        }

        .hub-desc {
          font-family: 'Inter', sans-serif;
          font-size: 12.5px; color: #64748b; line-height: 1.55;
          margin-bottom: 18px;
        }

        .top-acts-list {
          display: flex; flex-direction: column; gap: 6px; margin-bottom: 20px;
          padding-top: 12px; border-top: 1.5px solid #f1f5f9;
        }
        .top-act-item {
          display: flex; align-items: center; gap: 6px;
          font-family: 'Inter', sans-serif; font-size: 12px; color: #334155; font-weight: 600;
        }

        .hub-footer {
          display: flex; align-items: center; justify-content: space-between;
          padding-top: 14px; border-top: 1.5px solid #f1f5f9;
          font-family: 'Space Grotesk', sans-serif; font-size: 12px; font-weight: 900;
        }
      `}</style>

      <div className="islands-eyebrow">
        <Compass size={14} color="#F06543" />
        <span>ISLAND ADVENTURE HUBS</span>
      </div>
      <h2 className="islands-title">EXPLORE ACTIVITIES BY ISLAND</h2>

      <div ref={gridRef} className="islands-grid">
        {hubs.map((hub) => {
          const isActive = activeHubId === hub.id;
          return (
            <div
              key={hub.id}
              className={`island-hub-card${isActive ? ' active' : ''}`}
              onClick={() => {
                setActiveHubId(hub.id);
                if (onSelectIsland) onSelectIsland(hub.filterValue);
              }}
            >
              <div>
                <span className="hub-badge">{hub.badge}</span>
                <h3 className="hub-title">{hub.name}</h3>
                <div className="hub-spot">
                  <MapPin size={12} color="#F06543" />
                  <span>{hub.heroSpot}</span>
                </div>
                <p className="hub-desc">{hub.description}</p>

                <div className="top-acts-list">
                  {hub.topActivities.map((act, i) => (
                    <div key={i} className="top-act-item">
                      <Check size={12} color="#F06543" className="shrink-0" />
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hub-footer">
                <span style={{ color: '#64748b' }}>VIEW ISLAND SLOTS</span>
                <span style={{ color: '#F06543', display: 'flex', alignItems: 'center', gap: 4 }}>
                  {isActive ? 'SELECTED' : 'FILTER'}
                  <ArrowRight size={12} />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
