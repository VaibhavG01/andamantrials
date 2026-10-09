import React, { useState } from 'react';
import { Sun, Waves, Utensils, Wifi, Wind, Sparkles, Car, Anchor } from 'lucide-react';
const STAY_AMENITIES = [
  { id: 'beachfront', label: 'Beachfront', icon: 'Waves' },
  { id: 'pool', label: 'Infinity Pool', icon: 'Sun' },
  { id: 'spa', label: 'Luxury Spa', icon: 'Sparkles' },
  { id: 'restaurant', label: 'Fine Dining', icon: 'Utensils' },
  { id: 'wifi', label: 'High-Speed Wi-Fi', icon: 'Wifi' },
  { id: 'ac', label: 'Ocean View AC', icon: 'Wind' },
  { id: 'transfer', label: 'Jetty Transfers', icon: 'Car' },
  { id: 'scuba', label: 'Dive Center', icon: 'Anchor' },
];

const ICON_MAP = { Sun, Waves, Utensils, Wifi, Wind, Sparkles, Car, Anchor };

export default function AmenitiesExplorer({ activeAmenity, onSelectAmenity }) {
  return (
    <section className="amenity-explorer-root">
      <style>{`
        .amenity-explorer-root {
          max-width: 1340px; margin: 0 auto; padding: 60px 24px 80px;
        }

        .amenity-eyebrow {
          display: flex; align-items: center; justify-content: center; gap: 6px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; color: #F06543;
          letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 8px;
        }

        .amenity-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(32px, 4.5vw, 52px);
          font-weight: 600; color: #0B2545; text-align: center;
          margin: 0 0 44px; line-height: 1.1;
        }

        .amenity-chips-wrap {
          display: flex; flex-wrap: wrap; gap: 14px; justify-content: center;
        }

        .amenity-chip-btn {
          display: inline-flex; align-items: center; gap: 10px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 800; letter-spacing: 0.04em;
          color: #475569;
          background: #ffffff;
          backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px);
          border: 1.5px solid #e2e8f0;
          padding: 12px 22px; border-radius: 18px;
          cursor: pointer; transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .amenity-chip-btn:hover {
          transform: translateY(-3px);
          border-color: rgba(33, 230, 193, 0.5);
          color: #ffffff;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
        }
        .amenity-chip-btn.active {
          background: linear-gradient(135deg, rgba(22, 217, 255, 0.2), rgba(33, 230, 193, 0.15));
          border-color: #F06543;
          color: #F06543;
          box-shadow: 0 0 20px rgba(33, 230, 193, 0.2);
        }

        .amenity-icon-circle {
          width: 30px; height: 30px; border-radius: 50%;
          background: rgba(22, 217, 255, 0.12);
          display: flex; align-items: center; justify-content: center;
          transition: background 0.25s ease;
        }
        .amenity-chip-btn.active .amenity-icon-circle {
          background: rgba(33, 230, 193, 0.25);
        }
      `}</style>

      <div className="amenity-eyebrow">
        <Sparkles size={14} color="#F06543" />
        <span>AMENITY FILTERS</span>
      </div>
      <h2 className="amenity-title">SEARCH BY WHAT MATTERS</h2>

      <div className="amenity-chips-wrap">
        {STAY_AMENITIES.map((a) => {
          const IconComp = ICON_MAP[a.icon] || Sun;
          const isActive = activeAmenity === a.label;
          return (
            <button
              key={a.id}
              className={`amenity-chip-btn${isActive ? ' active' : ''}`}
              onClick={() => onSelectAmenity(isActive ? null : a.label)}
              aria-label={`Filter stays by ${a.label}`}
            >
              <div className="amenity-icon-circle">
                <IconComp size={15} color={isActive ? '#F06543' : '#F06543'} />
              </div>
              <span>{a.label.toUpperCase()}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
