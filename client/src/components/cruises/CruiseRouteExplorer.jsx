// src/components/cruises/CruiseRouteExplorer.jsx
import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, ArrowDown, Compass, Clock } from 'lucide-react';
import { cruiseService } from '../../api/cruiseService';

gsap.registerPlugin(ScrollTrigger);

const DEFAULT_CRUISE_ROUTES = [
  {
    id: 'port-blair-havelock',
    from: 'Port Blair Harbour',
    to: 'Havelock (Swaraj Dweep)',
    via: 'Open Ocean Route',
    duration: '2h 15m',
    color: '#F06543',
    description: 'Scenic high-speed catamaran route gliding through open turquoise waters with flying fish sightings.',
  },
  {
    id: 'havelock-neil',
    from: 'Havelock Jetty',
    to: 'Neil (Shaheed Dweep)',
    via: 'Coral Strait Route',
    duration: '1h 15m',
    color: '#00b4d8',
    description: 'Short ocean cruise along shallow coral reefs connecting the twin island jewels.',
  },
  {
    id: 'neil-port-blair',
    from: 'Neil Island Jetty',
    to: 'Port Blair Phoenix Bay',
    via: 'Sunset Coastal Path',
    duration: '1h 30m',
    color: '#20b490',
    description: 'Breathtaking golden-hour sunset cruise returning to the historic capital harbor.',
  },
  {
    id: 'port-blair-barren',
    from: 'Port Blair',
    to: 'Barren Island Volcano',
    via: 'Deep Sea Expedition',
    duration: 'Full Day Cruise',
    color: '#f0c060',
    description: 'Exclusive oceanic expedition towards India’s only active volcano with dolphin pods.',
  },
];

export default function CruiseRouteExplorer({ onSelectRoute }) {
  const [routes, setRoutes] = useState(DEFAULT_CRUISE_ROUTES);
  const [activeRouteId, setActiveRouteId] = useState(DEFAULT_CRUISE_ROUTES[0].id);
  const gridRef = useRef(null);

  useEffect(() => {
    const fetchPromise = typeof cruiseService.getAllCruises === 'function'
      ? cruiseService.getAllCruises()
      : typeof cruiseService.getCruises === 'function'
      ? cruiseService.getCruises()
      : Promise.resolve({ data: [] });

    fetchPromise
      .then((res) => {
        const list = res?.data || res || [];
        if (Array.isArray(list) && list.length > 0) {
          const mapped = list.slice(0, 4).map((c, idx) => ({
            id: c.slug || `cruise-route-${c.id}`,
            from: c.departureLocation || 'Port Blair',
            to: c.destination || 'Havelock Island',
            via: c.routeName || 'Scenic Sea Route',
            duration: c.duration || '2 Hours',
            color: DEFAULT_CRUISE_ROUTES[idx % DEFAULT_CRUISE_ROUTES.length].color,
            description: c.shortDescription || c.description || 'Luxury cruise through pristine tropical waters.',
          }));
          setRoutes(mapped);
          if (mapped.length > 0) setActiveRouteId(mapped[0].id);
        }
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll('.route-card');
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
    <section className="routes-root">
      <style>{`
        .routes-root {
          max-width: 1340px;
          margin: 0 auto;
          padding: 60px 24px 80px;
        }

        .routes-eyebrow {
          display: flex; align-items: center; justify-content: center; gap: 6px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; color: #F06543;
          letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 8px;
        }

        .routes-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(32px, 4.5vw, 52px);
          font-weight: 600; color: #0B2545; text-align: center;
          margin: 0 0 44px; line-height: 1.1;
        }

        .routes-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        @media (max-width: 1100px) {
          .routes-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .routes-grid { grid-template-columns: 1fr; }
        }

        .route-card {
          background: #ffffff;
          backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px);
          border: 1.5px solid #e2e8f0;
          border-radius: 22px; padding: 28px 22px;
          display: flex; flex-direction: column; justify-content: space-between;
          transition: all 0.35s ease; cursor: pointer;
        }
        .route-card:hover, .route-card.active {
          transform: translateY(-6px);
          border-color: rgba(33, 230, 193, 0.5);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5), 0 0 24px rgba(33, 230, 193, 0.15);
        }
        .route-card.active {
          background: #f1f5f9;
        }

        .location-step {
          display: flex; flex-direction: column; align-items: center; text-align: center;
        }

        .location-name {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; color: #0B2545;
          letter-spacing: 0.05em; margin-top: 4px;
        }

        .connector-line {
          width: 2px; height: 32px;
          margin: 10px auto; border-radius: 2px;
          position: relative;
        }

        .via-pill {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 9.5px; font-weight: 800; letter-spacing: 0.08em;
          padding: 4px 12px; border-radius: 12px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          text-transform: uppercase; margin: 4px 0;
        }

        .route-desc {
          font-family: 'Inter', sans-serif;
          font-size: 12.5px; color: #64748b; line-height: 1.55;
          margin: 18px 0; text-align: center;
        }

        .route-footer {
          display: flex; align-items: center; justify-content: space-between;
          padding-top: 14px; border-top: 1px solid #e2e8f0;
          font-family: 'Space Grotesk', sans-serif; fontSize: '13.5px'; font-weight: 800;
        }
      `}</style>

      <div className="routes-eyebrow">
        <Compass size={14} color="#F06543" />
        <span>SCENIC SEA PATHS</span>
      </div>
      <h2 className="routes-title">EXPLORE CRUISE ROUTES</h2>

      <div ref={gridRef} className="routes-grid">
        {routes.map((route) => {
          const isActive = activeRouteId === route.id;
          return (
            <div
              key={route.id}
              className={`route-card${isActive ? ' active' : ''}`}
              onClick={() => {
                setActiveRouteId(route.id);
                if (onSelectRoute) onSelectRoute(route);
              }}
            >
              <div>
                {/* FROM */}
                <div className="location-step">
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12.5, color: '#64748b', letterSpacing: '0.1em' }}>START</div>
                  <div className="location-name">{route.from}</div>
                </div>

                {/* CONNECTOR LINE */}
                <div className="connector-line" style={{ background: `linear-gradient(180deg, ${route.color || '#F06543'}, rgba(33,230,193,0.3))` }} />

                {/* VIA */}
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <span className="via-pill" style={{ color: route.color || '#F06543' }}>
                    {route.via}
                  </span>
                </div>

                {/* CONNECTOR LINE 2 */}
                <div className="connector-line" style={{ background: `linear-gradient(180deg, rgba(33,230,193,0.3), ${route.color || '#F06543'})` }} />

                {/* TO */}
                <div className="location-step">
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12.5, color: '#64748b', letterSpacing: '0.1em' }}>DESTINATION</div>
                  <div className="location-name">{route.to}</div>
                </div>

                <p className="route-desc">{route.description}</p>
              </div>

              <div className="route-footer">
                <span style={{ color: '#64748b', display: 'flex', alignItems: 'center', gap: 4 }}>
                  <Clock size={12} color="#F06543" />
                  {route.duration}
                </span>
                <span style={{ color: route.color || '#F06543' }}>
                  {isActive ? 'SELECTED' : 'SELECT ROUTE'}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
