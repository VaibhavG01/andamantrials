import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  MapPin, ArrowRight, Compass, Sparkles, Star,
  ShieldCheck, Award, Building, Waves, Trees
} from 'lucide-react';
import { destinationService } from '../../api/destinationService';

gsap.registerPlugin(ScrollTrigger);

const STATIC_ISLAND_STAYS = [
  {
    id: 'havelock',
    name: 'Havelock Island (Swaraj Dweep)',
    subtitle: 'Radhanagar Beach No. 7 & Scuba Haven',
    tag: '👑 5★ Beachfront Villas',
    startingPrice: 4500,
    staysCount: '24+ Luxury Resorts',
    topResorts: ['Taj Exotica', 'Barefoot', 'Symphony Palms', 'SeaShell'],
    highlights: ['Direct Beach Access', 'Private Plunge Pools', 'PADI Dive Desks'],
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    description: 'Home to Asia’s top-rated Radhanagar Beach, turquoise lagoons, and world-class PADI dive centers with oceanfront private villas.',
  },
  {
    id: 'port-blair',
    name: 'Port Blair (Sri Vijaya Puram)',
    subtitle: 'Capital Gateway & Historical Heritage',
    tag: '🏛️ Heritage & Bay View Stays',
    startingPrice: 3200,
    staysCount: '38+ Premium Hotels',
    topResorts: ['Symphony Samudra', 'Welcomhotel ITC', 'Fortune Bay Island'],
    highlights: ['Harbor Ocean View', 'Airport Transfers', 'Infinity Pools'],
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
    description: 'The historic capital gateway hosting Cellular Memorial, scenic harbor promenades, and luxury hilltop bayview resorts.',
  },
  {
    id: 'neil',
    name: 'Neil Island (Shaheed Dweep)',
    subtitle: 'Turquoise Bays & Natural Rock Bridge',
    tag: '🌿 Boutique Lagoon Retreats',
    startingPrice: 3800,
    staysCount: '16+ Boutique Stays',
    topResorts: ['SeaShell Samssara', 'Summer Sands', 'Silver Sand Neil'],
    highlights: ['Lagoon Pool Access', 'Laxmanpur Sunset Path', 'Organic Dining'],
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80',
    description: 'A tranquil tropical haven of organic farmlands, biological Howrah Rock Bridge arches, and calm turquoise coral beaches.',
  },
  {
    id: 'baratang',
    name: 'Baratang Island',
    subtitle: 'Dense Mangrove Creeks & Limestone Caves',
    tag: '🛶 Rainforest Wilderness Eco-Lodges',
    startingPrice: 3500,
    staysCount: '6+ Eco Lodges',
    topResorts: ['Dew Dale Wilderness Resort', 'Coral Creek Eco Lodge'],
    highlights: ['Forest Canopy', 'Speedboat Jetty Access', 'Guided Cave Treks'],
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80',
    description: 'Thrill-filled tropical wilderness with mangrove creek speedboat expeditions, active mud volcanoes, and limestone caves.',
  },
  {
    id: 'diglipur',
    name: 'Diglipur & North Andaman',
    subtitle: 'Ross & Smith Sandbar & Saddle Peak',
    tag: '⛰️ Twin Island Sandbar Retreats',
    startingPrice: 2900,
    staysCount: '8+ Eco Stays',
    topResorts: ['Pristine Beach Resort', 'Turtle Resort Kalipur', 'Saddle Peak Lodge'],
    highlights: ['Turtle Nesting Beach', 'Twin Island Boats', 'Saddle Peak View'],
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    description: 'Climb Saddle Peak, witness nocturnal turtle nesting at Kalipur Beach, or cross the emerald Ross & Smith sandbar.',
  },
  {
    id: 'great-nicobar',
    name: 'Great Nicobar & Indira Point',
    subtitle: 'UNESCO Biosphere & India’s Southernmost Tip',
    tag: '🌏 Biosphere Eco Frontier Villas',
    startingPrice: 6500,
    staysCount: '4+ Frontier Lodges',
    topResorts: ['Campbell Bay Eco Frontier Lodge', 'Biosphere Eco Cabins'],
    highlights: ['Indira Point Safari', 'Galathea River Boats', 'Full Board Dining'],
    image: 'https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=800&q=80',
    description: 'India’s southernmost geographical frontier, home to Galathea Biosphere Reserve, pristine virgin rainforests, and Indira Point.',
  },
];

export default function StayDestinations({ onSelectDestination }) {
  const [destinations, setDestinations] = useState(STATIC_ISLAND_STAYS);
  const [activeFilter, setActiveFilter] = useState('ALL');
  const gridRef = useRef(null);

  useEffect(() => {
    destinationService.getDestinations()
      .then((res) => {
        if (res && res.data && Array.isArray(res.data) && res.data.length > 0) {
          // Merge API data with static rich resort info
          const merged = STATIC_ISLAND_STAYS.map((staticItem) => {
            const found = res.data.find(
              (d) => d.slug === staticItem.id || d.name?.toLowerCase().includes(staticItem.id)
            );
            if (found) {
              return {
                ...staticItem,
                name: found.name || staticItem.name,
                image: found.heroImage || found.image || staticItem.image,
                description: found.shortDescription || found.description || staticItem.description,
              };
            }
            return staticItem;
          });
          setDestinations(merged);
        }
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll('.stay-dest-card');
    if (cards.length > 0) {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: { trigger: gridRef.current, start: 'top 85%' },
        }
      );
    }
  }, [destinations, activeFilter]);

  const filteredDestinations = activeFilter === 'ALL'
    ? destinations
    : destinations.filter(d => d.id === activeFilter || d.name.toLowerCase().includes(activeFilter.toLowerCase()));

  const handleCardClick = (dest) => {
    if (onSelectDestination) {
      onSelectDestination(dest.name);
    } else {
      const el = document.getElementById('stays-listing-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="dest-root" id="stay-destinations-section">
      <style>{`
        .dest-root {
          max-width: 1340px;
          margin: 0 auto;
          padding: 50px 24px 80px;
          font-family: 'Inter', sans-serif;
        }

        .dest-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11.5px;
          font-weight: 900;
          color: #F06543;
          background: #FFF0EB;
          border: 1px solid rgba(240, 101, 67, 0.35);
          padding: 6px 16px;
          border-radius: 30px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .dest-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(32px, 4.5vw, 50px);
          font-weight: 700;
          color: #0B2545;
          text-align: center;
          margin: 0 0 10px;
          line-height: 1.15;
        }

        .dest-subtitle {
          font-size: clamp(14px, 1.8vw, 16px);
          color: #64748b;
          text-align: center;
          max-width: 680px;
          margin: 0 auto 36px;
          line-height: 1.6;
        }

        .dest-filter-tabs {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 36px;
        }

        .dest-tab-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px;
          font-weight: 800;
          padding: 8px 18px;
          border-radius: 20px;
          border: 1.5px solid #EBDED2;
          background: #ffffff;
          color: #0B2545;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .dest-tab-btn.active {
          background: #0B2545;
          border-color: #0B2545;
          color: #ffffff;
          box-shadow: 0 4px 14px rgba(11, 37, 69, 0.25);
        }
        .dest-tab-btn:hover:not(.active) {
          border-color: #F06543;
          color: #F06543;
        }

        .dest-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        @media (max-width: 1040px) {
          .dest-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .dest-grid { grid-template-columns: 1fr; }
        }

        .stay-dest-card {
          position: relative;
          height: 380px;
          border-radius: 26px;
          overflow: hidden;
          border: 2px solid #EBDED2;
          background: #0B2545;
          cursor: pointer;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 10px 30px rgba(11, 37, 69, 0.08);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .stay-dest-card:hover {
          transform: translateY(-8px);
          border-color: #F06543;
          box-shadow: 0 20px 50px rgba(240, 101, 67, 0.25), 0 0 20px rgba(240, 101, 67, 0.15);
        }

        .stay-dest-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .stay-dest-card:hover .stay-dest-bg {
          transform: scale(1.08);
        }

        .stay-dest-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(11, 37, 69, 0.2) 0%, rgba(11, 37, 69, 0.6) 45%, rgba(6, 24, 46, 0.96) 100%);
          transition: opacity 0.3s ease;
        }

        .stay-dest-top {
          position: relative;
          z-index: 3;
          padding: 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 8px;
        }

        .stay-vibe-tag {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11px;
          font-weight: 900;
          color: #ffffff;
          background: rgba(11, 37, 69, 0.85);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          padding: 5px 12px;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.25);
          letter-spacing: 0.03em;
        }

        .stay-price-tag {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 900;
          color: #ffffff;
          background: linear-gradient(135deg, #FF6B4A, #F06543);
          padding: 5px 12px;
          border-radius: 20px;
          box-shadow: 0 4px 12px rgba(240, 101, 67, 0.4);
        }

        .stay-dest-bottom {
          position: relative;
          z-index: 3;
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .stay-dest-name {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 22px;
          font-weight: 900;
          color: #ffffff;
          margin: 0;
          line-height: 1.2;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
        }

        .stay-resorts-chip {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11.5px;
          font-weight: 800;
          color: #38bdf8;
          text-shadow: 0 1px 4px rgba(0,0,0,0.5);
        }

        .stay-dest-desc {
          font-size: 12.5px;
          color: #e2e8f0;
          line-height: 1.5;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .stay-highlights-row {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 2px;
        }

        .stay-highlight-pill {
          background: rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(4px);
          border: 1px solid rgba(255, 255, 255, 0.18);
          color: #f8fafc;
          font-size: 10px;
          font-weight: 700;
          padding: 3px 8px;
          border-radius: 6px;
        }

        .stay-dest-footer-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 12px;
          border-top: 1px solid rgba(255, 255, 255, 0.15);
          margin-top: 4px;
        }

        .stay-count-lbl {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 900;
          color: #FF8A5B;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .stay-action-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11.5px;
          font-weight: 900;
          color: #ffffff;
          background: #F06543;
          border: none;
          padding: 7px 14px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 6px;
          box-shadow: 0 4px 12px rgba(240, 101, 67, 0.4);
          transition: all 0.2s ease;
        }
        .stay-dest-card:hover .stay-action-btn {
          background: #ffffff;
          color: #0B2545;
          box-shadow: 0 4px 16px rgba(255, 255, 255, 0.4);
        }
      `}</style>

      {/* Header */}
      <div style={{ textAlign: 'center' }}>
        <div className="dest-eyebrow">
          <Compass size={14} color="#F06543" />
          <span>HANDPICKED LUXURY STAYS</span>
        </div>
        <h2 className="dest-title">CHOOSE YOUR ISLAND DESTINATION</h2>
        <p className="dest-subtitle">
          From Radhanagar 5-star private pool villas in Havelock to peaceful lagoon retreats in Neil and colonial bayview suites in Port Blair.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="dest-filter-tabs">
        {[
          { id: 'ALL', label: 'All Island Stays' },
          { id: 'havelock', label: 'Havelock (Swaraj Dweep)' },
          { id: 'port-blair', label: 'Port Blair' },
          { id: 'neil', label: 'Neil Island (Shaheed Dweep)' },
          { id: 'baratang', label: 'Baratang Island' },
          { id: 'diglipur', label: 'Diglipur' },
          { id: 'great-nicobar', label: 'Great Nicobar' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveFilter(tab.id)}
            className={`dest-tab-btn ${activeFilter === tab.id ? 'active' : ''}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Destination Grid */}
      <div ref={gridRef} className="dest-grid">
        {filteredDestinations.map((dest) => (
          <div
            key={dest.id}
            className="stay-dest-card"
            onClick={() => handleCardClick(dest)}
          >
            <img src={dest.image} alt={dest.name} className="stay-dest-bg" />
            <div className="stay-dest-overlay" />

            {/* Top Pill Badges */}
            <div className="stay-dest-top">
              <span className="stay-vibe-tag">
                {dest.tag}
              </span>
              <span className="stay-price-tag">
                From ₹{dest.startingPrice.toLocaleString()}/nt
              </span>
            </div>

            {/* Bottom Content */}
            <div className="stay-dest-bottom">
              <div>
                <h3 className="stay-dest-name">{dest.name}</h3>
                <div className="stay-resorts-chip">
                  <Star size={12} className="fill-[#38bdf8] text-[#38bdf8]" />
                  <span>{dest.topResorts.slice(0, 3).join(' • ')}</span>
                </div>
              </div>

              <p className="stay-dest-desc">
                {dest.description}
              </p>

              <div className="stay-highlights-row">
                {dest.highlights.map((h, i) => (
                  <span key={i} className="stay-highlight-pill">
                    ✓ {h}
                  </span>
                ))}
              </div>

              {/* Action Bar */}
              <div className="stay-dest-footer-bar">
                <span className="stay-count-lbl">
                  {dest.staysCount}
                </span>

                <button type="button" className="stay-action-btn">
                  <span>EXPLORE STAYS</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
