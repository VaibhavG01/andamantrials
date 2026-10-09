// src/components/cruises/CruiseGrid.jsx
import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Compass } from 'lucide-react';
import CruiseCard from './CruiseCard';
import { cruiseService } from '../../api/cruiseService';

gsap.registerPlugin(ScrollTrigger);

const FILTER_TYPES = [
  { label: 'All Cruises', value: 'ALL' },
  { label: 'Sunset Cruise', value: 'SUNSET_SAIL' },
  { label: 'Private Cruise', value: 'PRIVATE' },
  { label: 'Luxury Cruise', value: 'LUXURY' },
  { label: 'Couple Cruise', value: 'COUPLE' },
  { label: 'Family Cruise', value: 'FAMILY' },
  { label: 'Sightseeing Cruise', value: 'SIGHTSEEING' }
];

export default function CruiseGrid({ onViewDetails }) {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [cruises, setCruises] = useState([]);
  const [loading, setLoading] = useState(false);
  const gridRef = useRef(null);

  useEffect(() => {
    setLoading(true);
    cruiseService.getCruises()
      .then((res) => {
        if (res.data && Array.isArray(res.data)) {
          const mapped = res.data.map((c) => ({
            id: String(c.id),
            name: c.name || '',
            slug: c.slug || '',
            type: c.type || 'SUNSET_SAIL',
            duration: c.duration || '3 Hours',
            departurePoint: c.departurePoint || 'Port Blair Harbor',
            capacity: c.capacity || 80,
            price: Number(c.price || 3500),
            startingPrice: Number(c.price || 3500),
            location: c.departurePoint || 'Port Blair Harbor',
            image: c.heroImage || 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
            description: c.description || '',
            excerpt: c.shortDescription || c.description || '',
            shortDescription: c.shortDescription || '',
            features: c.features || []
          }));
          setCruises(mapped);
        }
      })
      .catch((e) => console.error('Failed to load cruises:', e))
      .finally(() => setLoading(false));
  }, []);

  const filteredCruises = activeFilter === 'ALL'
    ? cruises
    : cruises.filter(c => c.type === activeFilter);

  useEffect(() => {
    if (!gridRef.current || loading) return;
    const cards = gridRef.current.querySelectorAll('.cruise-card-root');
    gsap.fromTo(
      cards,
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: gridRef.current, start: 'top 85%' }
      }
    );
  }, [activeFilter, cruises, loading]);

  return (
    <section className="grid-root">
      <style>{`
        .grid-root {
          max-width: 1340px;
          margin: 0 auto;
          padding: 60px 24px 80px;
        }

        .grid-eyebrow {
          display: flex; align-items: center; justify-content: center; gap: 6px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; color: #F06543;
          letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 8px;
        }

        .grid-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(32px, 4.5vw, 52px);
          font-weight: 600; color: #0B2545; text-align: center;
          margin: 0 0 16px; line-height: 1.1;
        }

        .grid-desc {
          font-family: 'Inter', sans-serif;
          font-size: 14px; color: #64748b; text-align: center;
          margin: 0 auto 36px; max-width: 600px;
        }

        .filter-tabs {
          display: flex; align-items: center; justify-content: center;
          gap: 10px; flex-wrap: wrap; margin-bottom: 44px;
        }

        .filter-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800;
          padding: 8px 18px; border-radius: 20px; cursor: pointer;
          border: 1px solid #e2e8f0;
          background: #ffffff; color: #64748b;
          transition: all 0.3s ease; backdrop-filter: blur(8px);
        }
        .filter-btn:hover {
          color: #F06543; border-color: rgba(33, 230, 193, 0.45);
          background: rgba(33, 230, 193, 0.08);
        }
        .filter-btn.active {
          background: linear-gradient(135deg, rgba(22, 217, 255, 0.2), rgba(33, 230, 193, 0.15));
          border-color: #F06543; color: #F06543;
          box-shadow: 0 4px 18px rgba(33, 230, 193, 0.25);
        }

        .cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        @media (max-width: 1024px) {
          .cards-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .cards-grid { grid-template-columns: 1fr; }
        }

        .no-data-msg {
          text-align: center;
          color: #64748b;
          font-size: 14px;
          padding: 40px 0;
          grid-column: span 3;
        }
      `}</style>

      <div className="grid-eyebrow">
        <Compass size={14} color="#F06543" />
        <span>CRUISE EXPERIENCES</span>
      </div>
      <h2 className="grid-title">EXPLORE OUR CRUISES</h2>
      <p className="grid-desc">
        Select from our collection of curated ocean journeys — from romantic sunset sails to full-day luxury charters.
      </p>

      {/* FILTER TABS */}
      <div className="filter-tabs">
        {FILTER_TYPES.map((filter) => (
          <button
            key={filter.value}
            className={`filter-btn${activeFilter === filter.value ? ' active' : ''}`}
            onClick={() => setActiveFilter(filter.value)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* CARDS GRID */}
      <div ref={gridRef} className="cards-grid">
        {loading ? (
          <div className="no-data-msg">Loading cruises...</div>
        ) : filteredCruises.length === 0 ? (
          <div className="no-data-msg">No cruises listed under this category.</div>
        ) : (
          filteredCruises.map((cruise, idx) => (
            <CruiseCard
              key={`${cruise.id || 'cruise'}-${idx}`}
              cruise={cruise}
              onViewDetails={onViewDetails}
            />
          ))
        )}
      </div>
    </section>
  );
}
