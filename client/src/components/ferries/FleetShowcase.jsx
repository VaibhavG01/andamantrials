// src/components/ferries/FleetShowcase.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Master Andaman Catamaran & Vessel Fleet Showcase Component

import React, { useState } from 'react';
import { Ship, Wind, Coffee, Users, ShieldCheck, Check, Sparkles } from 'lucide-react';

const FLEET = [
  {
    id: 'makruzz',
    name: 'Makruzz Catamarans',
    tagline: 'Pioneer of Private Luxury Passenger Catamarans in Andaman',
    speed: '28–30 Knots',
    capacity: '250–330 Passengers',
    tiers: ['Premium Class', 'Deluxe Class', 'Royal Luxury Bridge'],
    description: 'Twin-hull high-speed hydrofoil catamarans built to international safety standards, featuring plush pushback seats, panoramic ocean windows, and air-conditioned passenger decks.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    features: ['100% Fully Air-Conditioned', 'Onboard Hot Snack Bar', 'Live Entertainment Screens', 'VIP Bridge Lounge', 'Luggage Check-in Hold'],
  },
  {
    id: 'nautika',
    name: 'Nautika & Nautika Lite',
    tagline: 'State-of-the-Art Modern Catamaran Vessels',
    speed: '30 Knots Express',
    capacity: '210–280 Passengers',
    tiers: ['Luxury Class', 'Royal Class'],
    description: 'Built by Damen Shipyards Netherlands, Nautika delivers smooth ocean stabilization with reduced seasickness, whisper-quiet cabin acoustics, and high-speed transit.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    features: ['Active Motion Ride Control', 'Plush Ergonomic Recliners', 'Cafeteria & Juice Bar', 'Panoramic Viewports', 'Priority Baggage Tagging'],
  },
  {
    id: 'green-ocean',
    name: 'Green Ocean 1 & 2',
    tagline: 'The Only Catamaran with Open Sun Deck & Ocean Music',
    speed: '24 Knots',
    capacity: '200–290 Passengers',
    tiers: ['Executive Class', 'Premium Class', 'Open Deck'],
    description: 'For voyagers who love open-air sea breezes, photography, and open ocean music decks, Green Ocean offers both air-conditioned lower cabins and breezy upper open decks.',
    image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80',
    features: ['Open-Air Ocean View Deck', 'Live Music & Dancing', 'AC Lower Cabins', 'Snack Counter', 'Family Group Seating'],
  },
  {
    id: 'itt-majestic',
    name: 'ITT Majestic',
    tagline: 'Australian-Designed Sleek High-Speed Express Liner',
    speed: '32 Knots High-Speed',
    capacity: '200 Passengers',
    tiers: ['Silver Class', 'Majestic Gold'],
    description: 'Fastest transit times across Port Blair and Swaraj Dweep with aircraft-style interiors, wide aisles, and panoramic sea views throughout.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
    features: ['Fastest Crossing Speeds', 'Aviation Style Seating', 'Refreshment Kiosk', 'Clean Restrooms', 'Express Terminal Boarding'],
  },
];

export default function FleetShowcase({ onSelectFleet }) {
  const [activeTab, setActiveTab] = useState('makruzz');
  const activeVessel = FLEET.find(f => f.id === activeTab) || FLEET[0];

  return (
    <section className="fleet-showcase-root">
      <style>{`
        .fleet-showcase-root {
          max-width: 1240px;
          margin: 0 auto;
          padding: 40px 24px 80px;
        }

        .fleet-hdr {
          text-align: center;
          margin-bottom: 36px;
        }

        .fleet-sub {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.2em;
          color: #F06543;
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        .fleet-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(30px, 4.5vw, 46px);
          font-weight: 600;
          color: #0B2545;
          margin: 0;
        }

        .fleet-nav-tabs {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-bottom: 32px;
          flex-wrap: wrap;
        }

        .fleet-nav-btn {
          background: #ffffff;
          border: 1.5px solid #CBD5E1;
          color: #475569;
          padding: 10px 22px;
          border-radius: 14px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 800;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .fleet-nav-btn.active {
          background: #0B2545;
          color: #ffffff;
          border-color: #0B2545;
          box-shadow: 0 4px 14px rgba(11, 37, 69, 0.25);
        }

        .fleet-detail-card {
          background: #ffffff;
          border: 1.5px solid #E2E8F0;
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(11, 37, 69, 0.06);
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          align-items: stretch;
        }

        @media (max-width: 900px) {
          .fleet-detail-card { grid-template-columns: 1fr; }
        }

        .fleet-img-col {
          position: relative;
          min-height: 340px;
        }

        .fleet-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .fleet-content-col {
          padding: 36px 32px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .fleet-name-main {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 24px;
          font-weight: 900;
          color: #0B2545;
          margin: 0 0 6px;
        }

        .fleet-tagline {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: #F06543;
          font-weight: 700;
          margin-bottom: 16px;
        }

        .fleet-specs-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          margin-bottom: 20px;
          background: #F8FAFC;
          border-radius: 16px;
          padding: 14px 18px;
        }

        .fleet-spec-item {
          font-size: 12.5px;
        }

        .fleet-features-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
          margin-bottom: 24px;
        }

        .feature-bullet {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12.5px;
          color: #334155;
          font-weight: 600;
        }
      `}</style>

      <div className="fleet-hdr">
        <div className="fleet-sub">THE ANDAMAN MARITIME FLEET</div>
        <h2 className="fleet-title">World-Class Catamarans & Luxury Liners</h2>
      </div>

      <div className="fleet-nav-tabs">
        {FLEET.map((f) => (
          <button
            key={f.id}
            type="button"
            className={`fleet-nav-btn ${activeTab === f.id ? 'active' : ''}`}
            onClick={() => setActiveTab(f.id)}
          >
            {f.name}
          </button>
        ))}
      </div>

      <div className="fleet-detail-card">
        <div className="fleet-img-col">
          <img src={activeVessel.image} alt={activeVessel.name} className="fleet-img" />
        </div>

        <div className="fleet-content-col">
          <h3 className="fleet-name-main">{activeVessel.name}</h3>
          <div className="fleet-tagline">{activeVessel.tagline}</div>
          <p style={{ fontSize: 13.5, color: '#64748B', lineHeight: 1.6, margin: '0 0 20px' }}>
            {activeVessel.description}
          </p>

          <div className="fleet-specs-grid">
            <div className="fleet-spec-item">
              <span style={{ color: '#64748B' }}>Cruising Speed: </span>
              <strong style={{ color: '#0B2545' }}>{activeVessel.speed}</strong>
            </div>
            <div className="fleet-spec-item">
              <span style={{ color: '#64748B' }}>Deck Capacity: </span>
              <strong style={{ color: '#0B2545' }}>{activeVessel.capacity}</strong>
            </div>
          </div>

          <div className="fleet-features-list">
            {activeVessel.features.map((feat) => (
              <div key={feat} className="feature-bullet">
                <Check size={14} color="#10B981" />
                <span>{feat}</span>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => onSelectFleet(activeVessel.name.split(' ')[0])}
            style={{
              background: '#0B2545', color: '#ffffff', border: 'none',
              padding: '12px 24px', borderRadius: 12, fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 13, fontWeight: 800, cursor: 'pointer', width: 'fit-content'
            }}
          >
            Find {activeVessel.name} Sailings →
          </button>
        </div>
      </div>
    </section>
  );
}
