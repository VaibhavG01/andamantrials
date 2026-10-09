import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Sparkles, Ship } from 'lucide-react';
import { ferryService } from '../../api/ferryService';
import FerryRouteCard from './FerryRouteCard';

export default function RouteCards({ onViewRouteSchedule }) {
  const [routes, setRoutes] = useState([]);
  const [loading, setLoading] = useState(true);
  const cardsRef = useRef(null);

  useEffect(() => {
    ferryService.getRoutes()
      .then((res) => {
        if (res && res.data && Array.isArray(res.data) && res.data.length > 0) {
          const mapped = res.data.map(r => ({
            id: r.id,
            from: r.fromDestination?.name || 'Port Blair',
            to: r.toDestination?.name || 'Havelock Island',
            duration: r.duration || '90 mins',
            distance: r.distance || '38 km',
            startingPrice: r.basePrice || 1500,
            image: r.fromDestination?.heroImage || 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80',
            ferryCount: 4,
          }));
          setRoutes(mapped);
        } else {
          setRoutes([
            { id: 1, from: 'Port Blair', to: 'Havelock Island', duration: '90 mins', distance: '38 km', startingPrice: 1500, image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80', ferryCount: 4 },
            { id: 2, from: 'Havelock Island', to: 'Neil Island', duration: '60 mins', distance: '18 km', startingPrice: 1200, image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80', ferryCount: 4 },
            { id: 3, from: 'Neil Island', to: 'Port Blair', duration: '75 mins', distance: '36 km', startingPrice: 1400, image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80', ferryCount: 4 },
          ]);
        }
      })
      .catch(() => {
        setRoutes([
          { id: 1, from: 'Port Blair', to: 'Havelock Island', duration: '90 mins', distance: '38 km', startingPrice: 1500, image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80', ferryCount: 4 },
          { id: 2, from: 'Havelock Island', to: 'Neil Island', duration: '60 mins', distance: '18 km', startingPrice: 1200, image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80', ferryCount: 4 },
          { id: 3, from: 'Neil Island', to: 'Port Blair', duration: '75 mins', distance: '36 km', startingPrice: 1400, image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80', ferryCount: 4 },
        ]);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (!cardsRef.current || loading) return;
    if (cardsRef.current.children.length > 0) {
      gsap.fromTo(
        cardsRef.current.children,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power2.out' }
      );
    }
  }, [routes, loading]);

  return (
    <section className="popular-routes-section">
      <style>{`
        .popular-routes-section {
          max-width: 1340px;
          margin: 0 auto;
          padding: 40px 24px 60px;
        }

        .routes-hdr {
          text-align: center;
          margin-bottom: 40px;
        }

        .routes-sub {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px;
          font-weight: 800;
          letter-spacing: 0.2em;
          color: #F06543;
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        .routes-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(30px, 4.5vw, 48px);
          font-weight: 600;
          color: #0B2545;
          margin: 0;
        }

        .routes-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        @media (max-width: 1024px) {
          .routes-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 580px) {
          .routes-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="routes-hdr">
        <div className="routes-sub">ISLAND CONNECTIONS</div>
        <h2 className="routes-title">POPULAR FERRY ROUTES</h2>
      </div>

      <div ref={cardsRef} className="routes-grid">
        {routes.map((route) => (
          <FerryRouteCard key={route.id} route={route} onViewSchedule={onViewRouteSchedule} />
        ))}
      </div>
    </section>
  );
}
