// src/components/ferries/PopularInterIslandRoutes.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Popular Andaman Inter-Island Sea Routes Matrix

import React from 'react';
import { Ship, Clock, ArrowRight, MapPin, Sparkles } from 'lucide-react';

const ROUTES = [
  {
    id: 'pb-havelock',
    title: 'Port Blair ➔ Havelock (Swaraj Dweep)',
    subtitle: 'The Most Popular Tourist Route in Andaman',
    duration: '90 Minutes',
    distance: '38 Nautical Miles',
    frequency: '8+ Sailings Daily (06:00 AM - 02:00 PM)',
    startingPrice: '₹1,650',
    operators: ['Makruzz', 'Nautika', 'Green Ocean', 'ITT Majestic'],
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    from: 'Port Blair',
    to: 'Havelock Island (Swaraj Dweep)',
    highlights: ['Radhanagar Beach', 'Elephant Beach Scuba', 'Bioluminescent Kayaking'],
  },
  {
    id: 'havelock-neil',
    title: 'Havelock ➔ Neil Island (Shaheed Dweep)',
    subtitle: 'Short Scenic Ocean Crossing',
    duration: '45 Minutes',
    distance: '18 Nautical Miles',
    frequency: '6+ Sailings Daily (09:00 AM - 03:30 PM)',
    startingPrice: '₹1,450',
    operators: ['Nautika', 'Makruzz', 'Green Ocean'],
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    from: 'Havelock Island (Swaraj Dweep)',
    to: 'Neil Island (Shaheed Dweep)',
    highlights: ['Natural Coral Bridge', 'Laxmanpur Sunset Beach', 'Bharatpur Water Sports'],
  },
  {
    id: 'neil-pb',
    title: 'Neil Island ➔ Port Blair',
    subtitle: 'Direct Return to Capital Terminal',
    duration: '60 Minutes',
    distance: '24 Nautical Miles',
    frequency: '5+ Sailings Daily (10:30 AM - 04:30 PM)',
    startingPrice: '₹1,500',
    operators: ['Makruzz', 'Green Ocean', 'ITT Majestic'],
    image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800&q=80',
    from: 'Neil Island (Shaheed Dweep)',
    to: 'Port Blair',
    highlights: ['Cellular Jail Light & Sound', 'Corbyn’s Cove', 'Airport Transfers'],
  },
  {
    id: 'pb-baratang',
    title: 'Port Blair ➔ Baratang & Middle Andaman',
    subtitle: 'Mangrove Creeks & Limestone Caves Gateway',
    duration: '2h 15m',
    distance: '55 Nautical Miles',
    frequency: 'Daily Express Service',
    startingPrice: '₹1,800',
    operators: ['Green Ocean', 'Govt DSS Express'],
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80',
    from: 'Port Blair',
    to: 'Baratang Island',
    highlights: ['Limestone Caves', 'Mud Volcano', 'Tribal Reserve Buffer Zone'],
  },
];

export default function PopularInterIslandRoutes({ onSelectRoute }) {
  return (
    <section className="popular-routes-root">
      <style>{`
        .popular-routes-root {
          max-width: 1240px;
          margin: 0 auto;
          padding: 40px 24px 70px;
        }

        .routes-hdr-center {
          text-align: center;
          margin-bottom: 36px;
        }

        .routes-sub {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.2em;
          color: #F06543;
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        .routes-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(30px, 4.5vw, 46px);
          font-weight: 600;
          color: #0B2545;
          margin: 0;
        }

        .routes-grid-2col {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        @media (max-width: 860px) {
          .routes-grid-2col { grid-template-columns: 1fr; }
        }

        .route-card {
          background: #ffffff;
          border: 1.5px solid #E2E8F0;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 8px 30px rgba(11, 37, 69, 0.04);
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .route-card:hover {
          transform: translateY(-4px);
          border-color: #F06543;
          box-shadow: 0 16px 40px rgba(11, 37, 69, 0.1);
        }

        .route-card-img-wrap {
          position: relative;
          height: 190px;
          overflow: hidden;
        }

        .route-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .route-card:hover .route-card-img {
          transform: scale(1.05);
        }

        .route-pill-duration {
          position: absolute;
          bottom: 14px;
          left: 14px;
          background: rgba(11, 37, 69, 0.85);
          backdrop-filter: blur(10px);
          color: #ffffff;
          padding: 4px 12px;
          border-radius: 999px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11px;
          font-weight: 800;
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .route-pill-price {
          position: absolute;
          bottom: 14px;
          right: 14px;
          background: #F06543;
          color: #ffffff;
          padding: 4px 12px;
          border-radius: 999px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 900;
        }

        .route-card-body {
          padding: 22px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .route-card-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 17px;
          font-weight: 900;
          color: #0B2545;
          margin: 0 0 4px;
        }

        .route-card-sub {
          font-family: 'Inter', sans-serif;
          font-size: 12.5px;
          color: #64748B;
          margin-bottom: 16px;
        }

        .route-specs-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #F8FAFC;
          border-radius: 12px;
          padding: 10px 14px;
          margin-bottom: 16px;
          font-size: 12px;
        }

        .btn-book-route {
          margin-top: auto;
          background: #F1F5F9;
          border: 1.5px solid #CBD5E1;
          color: #0B2545;
          padding: 10px 18px;
          border-radius: 12px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 800;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: all 0.2s ease;
        }

        .btn-book-route:hover {
          background: linear-gradient(135deg, #FF6B4A, #F06543);
          color: #ffffff;
          border-color: #F06543;
          box-shadow: 0 4px 14px rgba(240, 101, 67, 0.35);
        }
      `}</style>

      <div className="routes-hdr-center">
        <div className="routes-sub">INTER-ISLAND MARITIME CONNECTIONS</div>
        <h2 className="routes-title">Popular Sea Routes in Andaman</h2>
      </div>

      <div className="routes-grid-2col">
        {ROUTES.map((route) => (
          <div key={route.id} className="route-card">
            <div className="route-card-img-wrap">
              <img src={route.image} alt={route.title} className="route-card-img" />
              <div className="route-pill-duration">
                <Clock size={12} />
                <span>{route.duration}</span>
              </div>
              <div className="route-pill-price">
                From {route.startingPrice}
              </div>
            </div>

            <div className="route-card-body">
              <h3 className="route-card-title">{route.title}</h3>
              <div className="route-card-sub">{route.subtitle}</div>

              <div className="route-specs-row">
                <div>
                  <span style={{ color: '#64748B' }}>Daily Frequency: </span>
                  <strong style={{ color: '#0B2545' }}>{route.frequency.split(' ')[0]} Sailings</strong>
                </div>
                <div>
                  <span style={{ color: '#64748B' }}>Operators: </span>
                  <strong style={{ color: '#0B2545' }}>{route.operators.join(', ')}</strong>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onSelectRoute(route)}
                className="btn-book-route"
              >
                <span>View Live Departure Slots</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
