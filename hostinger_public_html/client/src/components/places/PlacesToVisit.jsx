// src/components/places/PlacesToVisit.jsx
// ─────────────────────────────────────────────────────────────────────────────
// PLACES TO VISIT SECTION — Featured Destination Cards with Filter Tabs

import React, { useState, useRef, useEffect } from 'react';
import {
  Sparkles, ChevronLeft, ChevronRight, ArrowRight,
  MapPin, Clock, Star, Camera, Compass, Waves,
  Anchor, Sun, Mountain, TreePine, Navigation,
} from 'lucide-react';
import { apiClient } from '../../api/apiClient';

// ─── PLACES DATA ──────────────────────────────────────────────────────────────
const PLACES = [
  {
    id: 'radhanagar-beach',
    name: 'Radhanagar Beach',
    tagline: 'Asia\'s Finest Sunset Beach',
    category: 'beaches',
    island: 'Havelock Island',
    travelTime: '2.5 hrs from Port Blair',
    rating: 4.97,
    reviews: '8.4K',
    mustSee: true,
    description: 'Ranked Asia\'s best beach by Time Magazine. Pristine white sand stretching 2km, turquoise waters, and legendary crimson sunsets.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=85',
    badge: '#7 ASIA',
    badgeBg: 'linear-gradient(135deg, #f5af02, #e41d24)',
    icon: Sun,
    tags: ['Beach', 'Sunset', 'Swimming'],
  },
  {
    id: 'cellular-jail',
    name: 'Cellular Jail',
    tagline: 'The Colonial Dark History',
    category: 'historical',
    island: 'Port Blair',
    travelTime: 'In Port Blair',
    rating: 4.9,
    reviews: '12.1K',
    mustSee: true,
    description: 'A haunting colonial prison turned national monument. The Light & Sound show every evening brings India\'s struggle for independence alive.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1000&q=85',
    badge: 'MUST VISIT',
    badgeBg: 'linear-gradient(135deg, #F06543, #0070f3)',
    icon: Anchor,
    tags: ['Heritage', 'History', 'Light Show'],
  },
  {
    id: 'elephant-beach',
    name: 'Elephant Beach',
    tagline: 'Vibrant Coral Reef Paradise',
    category: 'beaches',
    island: 'Havelock Island',
    travelTime: '3 hrs from Port Blair',
    rating: 4.88,
    reviews: '5.6K',
    mustSee: false,
    description: 'A boat-only accessible beach famous for shallow coral reefs. Perfect for first-time snorkelers with calm, crystal-clear waters.',
    image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1000&q=85',
    badge: 'SNORKEL HUB',
    badgeBg: 'linear-gradient(135deg, #F06543, #059669)',
    icon: Waves,
    tags: ['Snorkeling', 'Coral', 'Boat Access'],
  },
  {
    id: 'ross-island',
    name: 'Ross Island',
    tagline: 'Ruins of the Colonial Capital',
    category: 'historical',
    island: 'Near Port Blair',
    travelTime: '20 mins boat ride',
    rating: 4.85,
    reviews: '4.2K',
    mustSee: true,
    description: 'Once the British administrative headquarters, now overgrown by jungle roots. Deer roam freely through crumbling colonial structures.',
    image: 'https://images.unsplash.com/photo-1559494007-9f5847c49d94?auto=format&fit=crop&w=1000&q=85',
    badge: 'HERITAGE ISLE',
    badgeBg: 'linear-gradient(135deg, #8b5cf6, #6366f1)',
    icon: Compass,
    tags: ['Ruins', 'History', 'Deer'],
  },
  {
    id: 'neil-island',
    name: 'Neil Island',
    tagline: 'The Peaceful Green Gem',
    category: 'islands',
    island: 'Neil Island',
    travelTime: '2 hrs from Port Blair',
    rating: 4.91,
    reviews: '3.8K',
    mustSee: true,
    description: 'Smaller and quieter than Havelock, Neil Island offers lush paddy fields, natural bridge formations, and uncrowded pristine beaches.',
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1000&q=85',
    badge: 'HIDDEN GEM',
    badgeBg: 'linear-gradient(135deg, #FF6B4A, #F06543)',
    icon: TreePine,
    tags: ['Quiet', 'Nature', 'Beaches'],
  },
  {
    id: 'baratang-island',
    name: 'Baratang Island',
    tagline: 'Limestone Caves & Mudvolcanoes',
    category: 'nature',
    island: 'Baratang Island',
    travelTime: '3.5 hrs from Port Blair',
    rating: 4.82,
    reviews: '2.9K',
    mustSee: false,
    description: 'A dramatic landscape of limestone sea caves, active mud volcanoes, and dense mangrove creeks. Reached via a thrilling jungle convoy.',
    image: 'https://images.unsplash.com/photo-1474440692490-2e83ae13ba29?auto=format&fit=crop&w=1000&q=85',
    badge: 'ADVENTURE',
    badgeBg: 'linear-gradient(135deg, #ff4f7b, #dc2743)',
    icon: Mountain,
    tags: ['Caves', 'Mud Volcano', 'Jungle'],
  },
  {
    id: 'north-bay-island',
    name: 'North Bay Island',
    tagline: 'The Water Sports Capital',
    category: 'water-sports',
    island: 'Near Port Blair',
    travelTime: '30 mins from Port Blair',
    rating: 4.87,
    reviews: '6.1K',
    mustSee: false,
    description: 'The go-to island for sea walking, glass bottom boat rides, and scuba diving. Crystal clear lagoons with the richest coral in South Andaman.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=85',
    badge: 'WATER SPORTS',
    badgeBg: 'linear-gradient(135deg, #FF6B4A, #F06543)',
    icon: Waves,
    tags: ['Sea Walk', 'Scuba', 'Coral'],
  },
  {
    id: 'jolly-buoy',
    name: 'Jolly Buoy Island',
    tagline: 'Pristine National Park Beach',
    category: 'islands',
    island: 'Mahatma Gandhi Marine Park',
    travelTime: '1.5 hrs from Port Blair',
    rating: 4.93,
    reviews: '4.7K',
    mustSee: true,
    description: 'Part of a protected national marine park, accessible only in season. Untouched beaches, vibrant coral gardens, and sea turtles nesting.',
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1000&q=85',
    badge: 'PROTECTED ISLE',
    badgeBg: 'linear-gradient(135deg, #F06543, #059669)',
    icon: TreePine,
    tags: ['National Park', 'Turtles', 'Coral'],
  },
];

// ─── FILTER CATEGORIES ─────────────────────────────────────────────────────────
const FILTERS = [
  { id: 'all', label: 'All Places', icon: Compass },
  { id: 'beaches', label: 'Beaches', icon: Sun },
  { id: 'islands', label: 'Islands', icon: Anchor },
  { id: 'historical', label: 'Historical', icon: Navigation },
  { id: 'nature', label: 'Nature', icon: TreePine },
  { id: 'water-sports', label: 'Water Sports', icon: Waves },
];

const CATEGORY_ICONS = {
  beaches: Sun,
  historical: Anchor,
  islands: Anchor,
  nature: Mountain,
  'water-sports': Waves,
};

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function PlacesToVisit() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [places, setPlaces] = useState([]);
  const sliderRef = useRef(null);

  useEffect(() => {
    const loadPlaces = async () => {
      try {
        const res = await apiClient('/places');
        if (res && res.data) {
          setPlaces(res.data);
        }
      } catch (err) {
        console.error('Failed to load places:', err);
      }
    };
    loadPlaces();
  }, []);

  const displayPlaces = places.length > 0 ? places : PLACES;

  const filtered = activeFilter === 'all'
    ? displayPlaces
    : displayPlaces.filter(p => p.category === activeFilter);

  const scrollLeft = () => sliderRef.current?.scrollBy({ left: -380, behavior: 'smooth' });
  const scrollRight = () => sliderRef.current?.scrollBy({ left: 380, behavior: 'smooth' });

  const getSlugFromName = (name) => {
    if (!name) return '';
    return name.toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-');
  };

  const handleExploreClick = (e, idOrSlug) => {
    e.preventDefault();
    let slug = idOrSlug;
    if (!isNaN(idOrSlug)) {
      const match = places.find(p => p.id === Number(idOrSlug));
      if (match && match.name) {
        slug = getSlugFromName(match.name);
      }
    }
    window.history.pushState({}, '', `/place-details?id=${slug}`);
    window.dispatchEvent(new Event('popstate'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getSafeTags = (tags) => {
    if (!tags) return [];
    if (Array.isArray(tags)) return tags;
    try {
      if (typeof tags === 'string') {
        const parsed = JSON.parse(tags);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch (e) {
      console.warn('Failed to parse tags:', e);
    }
    return [];
  };

  return (
    <section id="places-section" className="ptv-section">
      <style>{`
        .ptv-section {
          position: relative;
          width: 100%;
          background: #f8fafc;
          color: #1e293b;
          padding: 60px 0 80px;
          border-bottom: 1px solid #e2e8f0;
          overflow: hidden;
        }
        .ptv-glow-tl {
          position: absolute; top: -5%; left: -5%;
          width: 600px; height: 600px;
          background: radial-gradient(circle, rgba(13, 148, 136, 0.05) 0%, transparent 65%);
          pointer-events: none;
        }
        .ptv-glow-br {
          position: absolute; bottom: -5%; right: -5%;
          width: 600px; height: 600px;
          background: radial-gradient(circle, rgba(0, 45, 98, 0.05) 0%, transparent 65%);
          pointer-events: none;
        }
        .ptv-container {
          max-width: 1380px; margin: 0 auto; padding: 0 24px;
          position: relative; z-index: 2;
        }

        /* Header */
        .ptv-header-row {
          display: flex; align-items: flex-end;
          justify-content: space-between;
          flex-wrap: wrap; gap: 20px;
          margin-bottom: 30px;
        }
        .ptv-header-sub {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; letter-spacing: 0.18em;
          color: #F06543; text-transform: uppercase;
          display: flex; align-items: center; gap: 7px;
          margin-bottom: 7px;
        }
        .ptv-header-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(28px, 3.5vw, 44px); font-weight: 900;
          color: #0B2545; line-height: 1.15; margin: 0 0 8px;
          letter-spacing: -0.02em;
        }
        .ptv-header-desc {
          font-family: 'Inter', sans-serif;
          font-size: 14px; color: #475569;
          line-height: 1.6; max-width: 540px; margin: 0;
        }

        /* Nav */
        .ptv-nav-row {
          display: flex; align-items: center; gap: 10px;
        }
        .ptv-arrow {
          width: 40px; height: 40px; border-radius: 50%;
          background: #ffffff;
          border: 1.5px solid #cbd5e1;
          color: #0B2545;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: all 0.3s ease;
          box-shadow: 0 2px 8px rgba(0, 45, 98, 0.06);
        }
        .ptv-arrow:hover {
          background: #0B2545; color: #ffffff;
          border-color: #0B2545;
          box-shadow: 0 6px 18px rgba(0, 45, 98, 0.25);
          transform: scale(1.05);
        }
        .ptv-viewall {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 900; color: #ffffff;
          background: #0B2545;
          border: none;
          padding: 9px 18px; border-radius: 12px;
          text-decoration: none;
          display: inline-flex; align-items: center; gap: 6px;
          transition: all 0.25s ease; margin-left: 8px;
          box-shadow: 0 4px 12px rgba(0, 45, 98, 0.2);
        }
        .ptv-viewall:hover {
          background: #F06543;
        }

        /* Filter Tabs */
        .ptv-filters {
          display: flex; align-items: center; gap: 10px;
          flex-wrap: wrap; margin-bottom: 32px;
        }
        .ptv-filter-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; letter-spacing: 0.04em;
          padding: 8px 18px; border-radius: 30px; cursor: pointer;
          display: inline-flex; align-items: center; gap: 7px;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          border: 1.5px solid #cbd5e1;
          background: #ffffff;
          color: #475569;
          box-shadow: 0 2px 6px rgba(0,0,0,0.02);
        }
        .ptv-filter-btn:hover {
          border-color: #F06543;
          color: #0B2545; background: #FFF0EB;
        }
        .ptv-filter-btn.active {
          background: #0B2545;
          border-color: #0B2545; color: #ffffff;
          box-shadow: 0 4px 14px rgba(0, 45, 98, 0.3);
        }

        /* Slider */
        .ptv-slider {
          display: flex; gap: 20px;
          overflow-x: auto; scroll-snap-type: x mandatory;
          scrollbar-width: none; padding: 8px 4px 24px;
        }
        .ptv-slider::-webkit-scrollbar { display: none; }

        .ptv-card-wrap {
          flex: 0 0 calc(33.333% - 14px);
          min-width: 300px; scroll-snap-align: start;
        }
        @media (max-width: 1100px) {
          .ptv-card-wrap { flex: 0 0 calc(50% - 10px); min-width: 280px; }
        }
        @media (max-width: 640px) {
          .ptv-card-wrap { flex: 0 0 88%; min-width: 260px; }
        }

        /* Card */
        .ptv-card {
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 22px; overflow: hidden;
          cursor: pointer; height: 100%;
          display: flex; flex-direction: column; justify-content: space-between;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 4px 20px rgba(0, 45, 98, 0.06);
        }
        .ptv-card:hover {
          transform: translateY(-6px);
          border-color: #F06543;
          box-shadow: 0 16px 36px rgba(0, 45, 98, 0.12), 0 0 16px rgba(13, 148, 136, 0.12);
        }

        /* Card image */
        .ptv-img-box {
          position: relative; height: 210px; overflow: hidden; flex-shrink: 0;
          background: #f1f5f9;
        }
        .ptv-img-box img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 0.55s ease;
        }
        .ptv-card:hover .ptv-img-box img { transform: scale(1.08); }

        .ptv-badge {
          position: absolute; top: 12px; left: 12px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 10px; font-weight: 900; letter-spacing: 0.06em;
          color: #ffffff; padding: 4px 12px; border-radius: 20px;
          box-shadow: 0 4px 14px rgba(0,0,0,0.3);
          text-shadow: 0 1px 2px rgba(0,0,0,0.4);
        }
        .ptv-must-see {
          position: absolute; top: 12px; right: 12px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11px; font-weight: 900; letter-spacing: 0.08em;
          color: #0B2545;
          background: rgba(255, 255, 255, 0.95);
          border: 1px solid #e2e8f0;
          backdrop-filter: blur(8px);
          padding: 4px 10px; border-radius: 12px;
          display: flex; align-items: center; gap: 4px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.12);
        }
        .ptv-travel-pill {
          position: absolute; bottom: 12px; right: 12px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 10.5px; font-weight: 800; color: #0B2545;
          background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(8px);
          padding: 4px 10px; border-radius: 12px;
          border: 1px solid #e2e8f0;
          display: flex; align-items: center; gap: 4px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.12);
        }

        /* Card body */
        .ptv-body {
          padding: 18px 18px 0; flex: 1; display: flex; flex-direction: column;
        }
        .ptv-location-row {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 800; color: #F06543;
          text-transform: uppercase; letter-spacing: 0.05em;
          display: flex; align-items: center; gap: 5px;
          margin-bottom: 6px;
        }
        .ptv-name {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 18px; font-weight: 900; color: #0B2545;
          line-height: 1.25; margin-bottom: 4px;
        }
        .ptv-tagline {
          font-family: 'Inter', sans-serif;
          font-size: 13px; color: #F06543; font-weight: 600; font-style: italic;
          margin-bottom: 10px;
        }
        .ptv-description {
          font-family: 'Inter', sans-serif;
          font-size: 13px; color: #334155;
          line-height: 1.55; margin-bottom: 14px;
          display: -webkit-box;
          -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;
          min-height: 40px;
        }

        /* Tags */
        .ptv-tags {
          display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 16px;
        }
        .ptv-tag {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11.5px; font-weight: 700; color: #334155;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          padding: 3px 9px; border-radius: 12px;
        }

        /* Footer */
        .ptv-footer {
          display: flex; align-items: center; justify-content: space-between;
          padding: 14px 18px 18px;
          border-top: 1px solid #f1f5f9;
          margin-top: auto;
        }
        .ptv-rating {
          display: flex; align-items: center; gap: 5px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 900; color: #f59e0b;
        }
        .ptv-reviews {
          font-family: 'Inter', sans-serif;
          font-size: 12px; color: #64748b; margin-left: 2px;
          font-weight: 600;
        }
        .ptv-explore-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 900; color: #ffffff;
          background: #0B2545;
          border: none;
          padding: 8px 16px; border-radius: 12px;
          display: flex; align-items: center; gap: 5px;
          cursor: pointer; transition: all 0.25s ease;
          box-shadow: 0 4px 12px rgba(0, 45, 98, 0.2);
        }
        .ptv-card:hover .ptv-explore-btn {
          background: #F06543;
          box-shadow: 0 4px 16px rgba(13, 148, 136, 0.4);
        }

        /* Featured full-width card at top */
        .ptv-featured-wrap {
          margin-bottom: 24px;
          border-radius: 24px; overflow: hidden;
          position: relative; height: 340px; cursor: pointer;
          border: 1.5px solid #e2e8f0;
          transition: all 0.4s ease;
          box-shadow: 0 4px 20px rgba(0, 45, 98, 0.08);
        }
        .ptv-featured-wrap:hover {
          border-color: #F06543;
          box-shadow: 0 20px 40px rgba(0, 45, 98, 0.2);
          transform: translateY(-4px);
        }
        .ptv-featured-wrap img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 0.55s ease;
        }
        .ptv-featured-wrap:hover img { transform: scale(1.05); }
        .ptv-featured-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to right, rgba(4, 19, 34, 0.92) 0%, rgba(4, 19, 34, 0.75) 50%, transparent 100%);
          display: flex; flex-direction: column; justify-content: center;
          padding: 40px;
        }
        @media (max-width: 640px) {
          .ptv-featured-wrap { height: 280px; }
          .ptv-featured-overlay { padding: 24px; }
        }
      `}</style>

      {/* Ambient glows */}
      <div className="ptv-glow-tl" />
      <div className="ptv-glow-br" />

      <div className="ptv-container">

        {/* ── HEADER ── */}
        <div className="ptv-header-row">
          <div>
            <div className="ptv-header-sub">
              <Sparkles size={13} color="#F06543" />
              <span>PLACES TO VISIT</span>
            </div>
            <h2 className="ptv-header-title">
              Discover the Andaman Islands
            </h2>
            <p className="ptv-header-desc">
              From legendary beaches and colonial ruins to hidden island gems — every corner of Andaman tells a story worth exploring.
            </p>
          </div>

          <div className="ptv-nav-row">
            <button onClick={scrollLeft} className="ptv-arrow" aria-label="Scroll Left">
              <ChevronLeft size={20} />
            </button>
            <button onClick={scrollRight} className="ptv-arrow" aria-label="Scroll Right">
              <ChevronRight size={20} />
            </button>
            <a href="/destinations" className="ptv-viewall">
              <span>VIEW ALL</span>
              <ArrowRight size={13} />
            </a>
          </div>
        </div>

        {/* ── FEATURED HERO CARD (first mustSee place) ── */}
        {(() => {
          const featured = displayPlaces.find(p => p.mustSee);
          if (!featured) return null;
          const Icon = featured.icon || CATEGORY_ICONS[featured.category] || Compass;
          return (
            <div className="ptv-featured-wrap">
              <img src={featured.image} alt={featured.name} loading="lazy" />
              <div className="ptv-featured-overlay">
                {/* Badge */}
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 11.5, fontWeight: 900, letterSpacing: '0.08em',
                  color: '#ffffff', background: featured.badgeBg,
                  padding: '5px 14px', borderRadius: 20,
                  width: 'fit-content', marginBottom: 12,
                  boxShadow: '0 4px 14px rgba(0,0,0,0.4)',
                  textShadow: '0 1px 2px rgba(0,0,0,0.4)',
                }}>
                  <Icon size={13} />
                  {featured.badge}
                </span>

                <div style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 900,
                  color: '#ffffff', lineHeight: 1.15, marginBottom: 6,
                  textShadow: '0 2px 10px rgba(0,0,0,0.6)',
                }}>
                  {featured.name}
                </div>
                <div style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 13.5, color: '#2dd4bf', fontWeight: 600, fontStyle: 'italic', marginBottom: 12,
                }}>
                  {featured.tagline}
                </div>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 13.5, color: '#e2e8f0', lineHeight: 1.6,
                  maxWidth: 520, margin: '0 0 20px',
                }}>
                  {featured.description}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 800, color: '#f59e0b' }}>
                    <Star size={14} fill="#f59e0b" stroke="#f59e0b" />
                    <span>{featured.rating}</span>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: '#cbd5e1', fontWeight: 500 }}>({featured.reviews} reviews)</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, fontWeight: 800, color: '#e2e8f0' }}>
                    <Clock size={13} color="#2dd4bf" />
                    <span>{featured.travelTime}</span>
                  </div>
                  <a href={`/place-details?id=${isNaN(featured.id) ? featured.id : getSlugFromName(featured.name)}`} onClick={(e) => handleExploreClick(e, featured.id)} style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 12, fontWeight: 900, color: '#ffffff',
                    background: '#F06543', border: 'none',
                    padding: '9px 20px', borderRadius: 12,
                    textDecoration: 'none',
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                    transition: 'all 0.25s ease',
                    boxShadow: '0 4px 14px rgba(13, 148, 136, 0.4)',
                  }}>
                    <span>EXPLORE NOW</span>
                    <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            </div>
          );
        })()}

        {/* ── FILTER TABS ── */}
        <div className="ptv-filters">
          {FILTERS.map(f => {
            const Icon = f.icon;
            return (
              <button
                key={f.id}
                className={`ptv-filter-btn${activeFilter === f.id ? ' active' : ''}`}
                onClick={() => setActiveFilter(f.id)}
              >
                <Icon size={13} />
                <span>{f.label}</span>
              </button>
            );
          })}
        </div>

        {/* ── HORIZONTAL SLIDER ── */}
        <div ref={sliderRef} className="ptv-slider">
          {filtered.map((place, idx) => {
            const Icon = place.icon || CATEGORY_ICONS[place.category] || Compass;
            return (
              <div key={`${place.id || 'place'}-${idx}`} className="ptv-card-wrap">
                <div className="ptv-card" onClick={(e) => handleExploreClick(e, place.id)}>

                  {/* Image */}
                  <div className="ptv-img-box">
                    <img src={place.image} alt={place.name} loading="lazy" />
                    <div className="ptv-img-gradient" />
                    <span className="ptv-badge" style={{ background: place.badgeBg }}>
                      {place.badge}
                    </span>
                    {place.mustSee && (
                      <span className="ptv-must-see">
                        <Star size={9} fill="#f0c060" stroke="#f0c060" />
                        MUST SEE
                      </span>
                    )}
                    <span className="ptv-travel-pill">
                      <Clock size={10} color="#F06543" />
                      <span>{place.travelTime}</span>
                    </span>
                  </div>

                  {/* Body */}
                  <div className="ptv-body">
                    <div className="ptv-location-row">
                      <MapPin size={11} color="#F06543" />
                      <span>{place.island}</span>
                    </div>
                    <div className="ptv-name">{place.name}</div>
                    <div className="ptv-tagline">{place.tagline}</div>
                    <p className="ptv-description">{place.description}</p>
                    <div className="ptv-tags">
                      {getSafeTags(place.tags).map((t, i) => (
                        <span key={i} className="ptv-tag">{t}</span>
                      ))}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="ptv-footer">
                    <div className="ptv-rating">
                      <Star size={13} fill="#f0c060" stroke="#f0c060" />
                      <span>{place.rating}</span>
                      <span className="ptv-reviews">({place.reviews})</span>
                    </div>
                    <button className="ptv-explore-btn">
                      <Icon size={12} />
                      <span>EXPLORE</span>
                      <ArrowRight size={11} />
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
