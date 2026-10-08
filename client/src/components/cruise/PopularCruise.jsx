// src/components/cruise/PopularCruise.jsx
// ─────────────────────────────────────────────────────────────────────────────
// POPULAR CRUISE SECTION — Ultra-Luxury Andaman Cruise Cards + Horizontal Slider
// Features dynamic API loading with defensive fallbacks, discount badges, 
// category filters, smooth SPA navigation, and modern responsive design.
// ─────────────────────────────────────────────────────────────────────────────

import React, { useState, useRef, useEffect } from 'react';
import {
  Sparkles, ChevronLeft, ChevronRight, ArrowRight,
  Clock, MapPin, Star, Users, Anchor, Ship, Waves,
  ShieldCheck, Coffee, Heart, Check, Tag, Compass
} from 'lucide-react';
import { cruiseService } from '../../api/cruiseService';

// ─── UTILITIES ────────────────────────────────────────────────────────────────
const navigateTo = (url, e) => {
  if (e) e.preventDefault();
  window.history.pushState({}, '', url);
  window.dispatchEvent(new Event('popstate'));
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const parseFeatures = (features) => {
  if (!features) return ['Scenic Ocean Views', 'Safety Certified', 'Onboard Refreshments'];
  if (Array.isArray(features) && features.length > 0) return features.slice(0, 3);
  if (typeof features === 'string') {
    try {
      const parsed = JSON.parse(features);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed.slice(0, 3);
    } catch {
      const list = features.split(/[\n,]+/).map(s => s.trim().replace(/^[-*•]\s*/, '')).filter(Boolean);
      if (list.length > 0) return list.slice(0, 3);
    }
  }
  return ['Scenic Ocean Views', 'Safety Certified', 'Onboard Refreshments'];
};

// ─── CURATED CRUISE DATA ──────────────────────────────────────────────────────
const DEFAULT_CRUISES = [
  {
    id: 'andaman-sunset-sail',
    slug: 'andaman-sunset-sail',
    name: 'Andaman Sunset Dinner Sail',
    subtitle: 'Romantic Twilight Harbour & Open Ocean Dining',
    category: 'Sunset Sail',
    type: 'SUNSET_SAIL',
    duration: '3 Hours',
    departure: 'Port Blair Harbour',
    route: 'Port Blair → Open Sea',
    rating: 4.95,
    reviews: 1420,
    price: 3500,
    originalPrice: 4500,
    discount: '22% OFF',
    badge: 'POPULAR',
    badgeBg: 'linear-gradient(135deg, #FF6B4A, #F06543)',
    capacity: '40 Guests',
    image: 'https://images.unsplash.com/photo-1548690596-f1722c190938?auto=format&fit=crop&w=900&q=85',
    highlights: ['Buffet Coastal Dinner', 'Live Acoustic Music', 'Golden Hour Deck'],
    icon: Ship,
  },
  {
    id: 'couple-escape-cruise',
    slug: 'couple-escape-cruise',
    name: 'Couple Escape Luxury Cruise',
    subtitle: 'Private Ocean Deck with Sunset Champagne for Two',
    category: 'Couple Romance',
    type: 'COUPLE_ESCAPE',
    duration: '2.5 Hours',
    departure: 'Port Blair / Havelock',
    route: 'Port Blair → Scenic Waters',
    rating: 4.98,
    reviews: 860,
    price: 4500,
    originalPrice: 5800,
    discount: '22% OFF',
    badge: 'ROMANTIC',
    badgeBg: 'linear-gradient(135deg, #E11D48, #BE123C)',
    capacity: '12 Guests',
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=900&q=85',
    highlights: ['Couple-Focused Romance', 'Golden Hour Sunset Deck', 'Sparkling Drinks & Snacks'],
    icon: Heart,
  },
  {
    id: 'havelock-island-sightseeing',
    slug: 'havelock-island-sightseeing',
    name: 'Havelock Island Sightseeing Cruise',
    subtitle: 'Panoramic Coastal Reefs, Cliffs & Marine Horizons',
    category: 'Sightseeing',
    type: 'SIGHTSEEING',
    duration: '3.5 Hours',
    departure: 'Havelock Island Jetty',
    route: 'Havelock → Coral Reefs',
    rating: 4.88,
    reviews: 1150,
    price: 2400,
    originalPrice: 3200,
    discount: '25% OFF',
    badge: 'BESTSELLER',
    badgeBg: 'linear-gradient(135deg, #0D9488, #0F766E)',
    capacity: '50 Guests',
    image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=900&q=85',
    highlights: ['Coastal Views', 'Coral Reef Spotting', 'Upper Observation Deck'],
    icon: Waves,
  },
  {
    id: 'private-ocean-charter',
    slug: 'private-ocean-charter',
    name: 'Private VIP Ocean Yacht Charter',
    subtitle: 'Bespoke Island Hopping & Custom Snorkeling Anchoring',
    category: 'Private Charter',
    type: 'PRIVATE_OCEAN_CHARTER',
    duration: '4–6 Hours',
    departure: 'Chatham Wharf / Havelock',
    route: 'Custom Island Route',
    rating: 5.0,
    reviews: 320,
    price: 15000,
    originalPrice: 19500,
    discount: '23% OFF',
    badge: 'VIP CHARTER',
    badgeBg: 'linear-gradient(135deg, #7C3AED, #6D28D9)',
    capacity: '10 Guests',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=900&q=85',
    highlights: ['Private Catamaran Yacht', 'Captain & Service Staff', 'Snorkeling Gear Included'],
    icon: Anchor,
  },
  {
    id: 'neil-island-day-cruise',
    slug: 'neil-island-day-cruise',
    name: 'Neil Island Scenic Day Cruise',
    subtitle: 'Tranquil Lagoon Exploration & Natural Coral Bridge',
    category: 'Island Hopping',
    type: 'ISLAND_HOPPING',
    duration: '2.5 Hours',
    departure: 'Phoenix Bay Jetty',
    route: 'Port Blair → Neil Island',
    rating: 4.86,
    reviews: 940,
    price: 1800,
    originalPrice: 2400,
    discount: '25% OFF',
    badge: 'SCENIC PICK',
    badgeBg: 'linear-gradient(135deg, #0284C7, #0369A1)',
    capacity: '80 Guests',
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=900&q=85',
    highlights: ['Lagoon Views', 'Natural Bridge Stop', 'Air-Conditioned Saloon'],
    icon: Compass,
  },
];

const CATEGORIES = ['All', 'Sunset Sail', 'Couple Romance', 'Sightseeing', 'Private Charter', 'Island Hopping'];

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function PopularCruise() {
  const sliderRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [cruises, setCruises] = useState(DEFAULT_CRUISES);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    cruiseService.getCruises()
      .then((res) => {
        if (res && res.data && Array.isArray(res.data) && res.data.length > 0) {
          const mapped = res.data.map((c, index) => {
            let category = 'Sightseeing';
            let badge = 'POPULAR';
            let badgeBg = 'linear-gradient(135deg, #FF6B4A, #F06543)';
            let icon = Ship;

            const nameLower = (c.name || '').toLowerCase();
            const typeLower = (c.type || '').toLowerCase();

            if (nameLower.includes('sunset') || typeLower.includes('sunset')) {
              category = 'Sunset Sail';
              badge = 'ROMANTIC';
              badgeBg = 'linear-gradient(135deg, #FF6B4A, #F06543)';
              icon = Ship;
            } else if (nameLower.includes('couple') || typeLower.includes('couple')) {
              category = 'Couple Romance';
              badge = 'COUPLE';
              badgeBg = 'linear-gradient(135deg, #E11D48, #BE123C)';
              icon = Heart;
            } else if (nameLower.includes('charter') || nameLower.includes('vip') || typeLower.includes('charter')) {
              category = 'Private Charter';
              badge = 'VIP CHARTER';
              badgeBg = 'linear-gradient(135deg, #7C3AED, #6D28D9)';
              icon = Anchor;
            } else if (nameLower.includes('neil') || nameLower.includes('hop') || typeLower.includes('hop')) {
              category = 'Island Hopping';
              badge = 'SCENIC';
              badgeBg = 'linear-gradient(135deg, #0284C7, #0369A1)';
              icon = Compass;
            } else if (nameLower.includes('sightseeing') || typeLower.includes('sightseeing')) {
              category = 'Sightseeing';
              badge = 'SIGHTSEEING';
              badgeBg = 'linear-gradient(135deg, #0D9488, #0F766E)';
              icon = Waves;
            }

            // Route determination
            let route = 'Port Blair → Open Sea';
            if (c.routes && Array.isArray(c.routes) && c.routes.length > 0) {
              route = `${c.routes[0].from || 'Port Blair'} → ${c.routes[0].to || 'Open Sea'}`;
            } else if (nameLower.includes('havelock')) {
              route = 'Havelock → Coral Reefs';
            } else if (nameLower.includes('neil')) {
              route = 'Port Blair → Neil Island';
            } else if (c.departurePoint) {
              route = `${c.departurePoint} → Open Waters`;
            }

            // Price calculations
            const numPrice = Number(c.price || c.basePrice || c.startingPrice || 3500);
            const numOriginal = Math.round(numPrice * 1.25);
            const discountPercent = Math.round(((numOriginal - numPrice) / numOriginal) * 100);

            // Highlights
            const highlights = parseFeatures(c.features || c.inclusions);

            // Image selection
            let coverImg = c.heroImage || c.image;
            if (!coverImg && Array.isArray(c.gallery) && c.gallery.length > 0) {
              coverImg = c.gallery[0];
            }
            if (!coverImg) {
              coverImg = DEFAULT_CRUISES[index % DEFAULT_CRUISES.length]?.image || DEFAULT_CRUISES[0].image;
            }

            return {
              id: c.slug || c.id,
              slug: c.slug || `cruise-${c.id}`,
              name: c.name,
              subtitle: c.shortDescription || (c.type ? c.type.replace(/_/g, ' ') : 'Scenic Andaman Cruise Experience'),
              category,
              type: c.type || 'CRUISE',
              duration: c.duration || '3 Hours',
              departure: c.departurePoint || 'Port Blair Harbour',
              route,
              rating: Number(c.rating || 4.9).toFixed(1),
              reviews: c.reviewsCount || c.reviews || (110 + index * 35),
              price: numPrice,
              originalPrice: numOriginal,
              discount: `${discountPercent}% OFF`,
              badge,
              badgeBg,
              capacity: `${c.capacity || 40} Guests`,
              image: coverImg,
              highlights,
              icon,
            };
          });
          setCruises(mapped);
        } else {
          setCruises(DEFAULT_CRUISES);
        }
      })
      .catch(() => {
        setCruises(DEFAULT_CRUISES);
      })
      .finally(() => setLoading(false));
  }, []);

  const filteredCruises = activeCategory === 'All'
    ? cruises
    : cruises.filter(c => c.category?.toLowerCase() === activeCategory.toLowerCase());

  const scrollLeft = () => sliderRef.current?.scrollBy({ left: -360, behavior: 'smooth' });
  const scrollRight = () => sliderRef.current?.scrollBy({ left: 360, behavior: 'smooth' });

  return (
    <section id="cruise-section" className="cruise-section">
      <style>{`
        .cruise-section {
          position: relative;
          width: 100%;
          background: #ffffff;
          color: #1e293b;
          padding: 76px 0 92px;
          border-bottom: 1px solid #e2e8f0;
          overflow: hidden;
        }

        .cruise-glow-l {
          position: absolute; top: 10%; left: -6%;
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(240, 101, 67, 0.05) 0%, transparent 70%);
          pointer-events: none;
        }
        .cruise-glow-r {
          position: absolute; bottom: 10%; right: -6%;
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(13, 148, 136, 0.05) 0%, transparent 70%);
          pointer-events: none;
        }

        .cruise-container {
          max-width: 1380px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
          z-index: 2;
        }

        /* Header */
        .cruise-header-row {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 24px;
          margin-bottom: 32px;
        }
        .cruise-header-sub {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.18em;
          color: #F06543;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
        }
        .cruise-header-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(30px, 4vw, 46px);
          font-weight: 700;
          color: #0B2545;
          line-height: 1.15;
          margin: 0 0 8px;
          letter-spacing: -0.01em;
        }
        .cruise-header-desc {
          font-family: 'Inter', sans-serif;
          font-size: 14.5px;
          color: #64748b;
          line-height: 1.6;
          max-width: 560px;
          margin: 0;
        }

        /* Nav arrows + CTA */
        .cruise-nav-row {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .cruise-arrow {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          color: #0B2545;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
        }
        .cruise-arrow:hover {
          background: #0B2545;
          color: #ffffff;
          border-color: #0B2545;
          box-shadow: 0 6px 20px rgba(11, 37, 69, 0.25);
          transform: translateY(-2px);
        }
        .cruise-viewall {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 800;
          color: #F06543;
          background: #FFF0EB;
          border: 1.5px solid #F06543;
          padding: 10px 22px;
          border-radius: 30px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
          box-shadow: 0 2px 8px rgba(240, 101, 67, 0.12);
        }
        .cruise-viewall:hover {
          background: #0B2545;
          color: #ffffff;
          border-color: #0B2545;
          box-shadow: 0 6px 20px rgba(11, 37, 69, 0.25);
          transform: translateY(-2px);
        }

        /* Category Filter Tabs */
        .cruise-filters {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 28px;
        }
        .cruise-filter-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 800;
          padding: 8px 18px;
          border-radius: 30px;
          cursor: pointer;
          transition: all 0.25s ease;
          border: 1.5px solid #e2e8f0;
          background: #ffffff;
          color: #475569;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.03);
        }
        .cruise-filter-btn:hover {
          border-color: #F06543;
          color: #F06543;
          background: #FFF0EB;
        }
        .cruise-filter-btn.active {
          background: linear-gradient(135deg, #0B2545 0%, #173b6c 100%);
          border-color: #0B2545;
          color: #ffffff;
          box-shadow: 0 4px 16px rgba(11, 37, 69, 0.25);
        }

        /* Slider Track */
        .cruise-slider-track {
          display: flex;
          gap: 24px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scrollbar-width: none;
          padding: 8px 4px 28px;
        }
        .cruise-slider-track::-webkit-scrollbar { display: none; }

        .cruise-card-wrap {
          flex: 0 0 calc(33.333% - 16px);
          min-width: 320px;
          scroll-snap-align: start;
        }
        @media (max-width: 1100px) {
          .cruise-card-wrap { flex: 0 0 calc(50% - 12px); min-width: 290px; }
        }
        @media (max-width: 680px) {
          .cruise-card-wrap { flex: 0 0 90%; min-width: 280px; }
        }

        /* Card */
        .cruise-card {
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 22px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.38s cubic-bezier(0.16, 1, 0.3, 1);
          height: 100%;
          display: flex;
          flex-direction: column;
          text-decoration: none;
          color: inherit;
          box-shadow: 0 4px 16px rgba(11, 37, 69, 0.04);
        }
        .cruise-card:hover {
          transform: translateY(-8px);
          border-color: #F06543;
          box-shadow: 0 18px 36px rgba(11, 37, 69, 0.12);
        }

        /* Image area */
        .cruise-img-box {
          position: relative;
          height: 210px;
          overflow: hidden;
          flex-shrink: 0;
          background: #0B2545;
        }
        .cruise-img-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .cruise-card:hover .cruise-img-box img { transform: scale(1.08); }
        .cruise-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(11, 37, 69, 0.5) 0%, transparent 60%);
        }

        .cruise-badge {
          position: absolute;
          top: 14px;
          left: 14px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.06em;
          color: #fff;
          padding: 5px 12px;
          border-radius: 20px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.25);
          backdrop-filter: blur(6px);
        }
        .cruise-duration-pill {
          position: absolute;
          top: 14px;
          right: 14px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11.5px;
          font-weight: 800;
          color: #0f172a;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(8px);
          padding: 5px 11px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          gap: 5px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.12);
        }

        /* Card body */
        .cruise-body {
          padding: 22px 22px 14px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .cruise-route-line {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 800;
          color: #F06543;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          display: flex;
          align-items: center;
          gap: 5px;
          margin-bottom: 8px;
        }
        .cruise-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 17.5px;
          font-weight: 800;
          color: #0B2545;
          line-height: 1.35;
          margin-bottom: 6px;
          transition: color 0.25s ease;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .cruise-card:hover .cruise-title {
          color: #F06543;
        }
        .cruise-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: #64748b;
          line-height: 1.5;
          margin-bottom: 14px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Highlights */
        .cruise-highlights {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 16px;
        }
        .cruise-highlight-tag {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11.5px;
          font-weight: 700;
          color: #334155;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          padding: 4px 10px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          gap: 5px;
        }

        /* Meta row */
        .cruise-meta-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: auto;
          padding-top: 10px;
          border-top: 1px dashed #e2e8f0;
        }
        .cruise-rating {
          display: flex;
          align-items: center;
          gap: 4px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 800;
          color: #d97706;
        }
        .cruise-reviews {
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          color: #64748b;
          font-weight: 500;
        }
        .cruise-capacity {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px;
          font-weight: 700;
          color: #64748b;
          display: flex;
          align-items: center;
          gap: 5px;
        }

        /* Footer */
        .cruise-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 22px 20px;
          border-top: 1px solid #f1f5f9;
          background: #ffffff;
        }
        .cruise-price-label {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11px;
          color: #64748b;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          display: block;
          margin-bottom: 2px;
          font-weight: 800;
        }
        .cruise-price-curr {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 20px;
          font-weight: 900;
          color: #0B2545;
          line-height: 1;
        }
        .cruise-price-old {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          color: #94a3b8;
          text-decoration: line-through;
          margin-left: 6px;
          font-weight: 600;
        }
        .cruise-book-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px;
          font-weight: 800;
          letter-spacing: 0.04em;
          color: #ffffff;
          background: linear-gradient(135deg, #FF6B4A 0%, #F06543 100%);
          border: none;
          padding: 9px 18px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          transition: all 0.28s ease;
          box-shadow: 0 4px 14px rgba(240, 101, 67, 0.3);
        }
        .cruise-card:hover .cruise-book-btn {
          box-shadow: 0 6px 20px rgba(240, 101, 67, 0.45);
          transform: translateY(-2px);
        }

        /* Stats strip */
        .cruise-stats-strip {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-top: 52px;
        }
        .cruise-stat-item {
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 18px;
          padding: 22px 24px;
          display: flex;
          align-items: center;
          gap: 16px;
          box-shadow: 0 4px 16px rgba(11, 37, 69, 0.04);
          transition: transform 0.3s ease;
        }
        .cruise-stat-item:hover {
          transform: translateY(-3px);
          border-color: #cbd5e1;
        }
        .cruise-stat-icon-box {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          background: #FFF0EB;
          color: #F06543;
        }
        .cruise-stat-num {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 24px;
          font-weight: 900;
          color: #0B2545;
          line-height: 1;
        }
        .cruise-stat-label {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: #64748b;
          margin-top: 4px;
          font-weight: 600;
        }
        @media (max-width: 900px) {
          .cruise-stats-strip { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 480px) {
          .cruise-stats-strip { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* Subtle Background Glows */}
      <div className="cruise-glow-l" />
      <div className="cruise-glow-r" />

      <div className="cruise-container">

        {/* ── SECTION HEADER ── */}
        <div className="cruise-header-row">
          <div>
            <div className="cruise-header-sub">
              <Sparkles size={14} color="#F06543" />
              <span>POPULAR CRUISE</span>
            </div>
            <h2 className="cruise-header-title">
              Sail the Andaman Waters
            </h2>
            <p className="cruise-header-desc">
              From romantic sunset dinners at sea to thrilling island-hop ferries — hand-picked cruise experiences for every traveler.
            </p>
          </div>

          <div className="cruise-nav-row">
            <button onClick={scrollLeft} className="cruise-arrow" aria-label="Scroll Left">
              <ChevronLeft size={22} />
            </button>
            <button onClick={scrollRight} className="cruise-arrow" aria-label="Scroll Right">
              <ChevronRight size={22} />
            </button>
            <a
              href="/cruises"
              onClick={(e) => navigateTo('/cruises', e)}
              className="cruise-viewall"
            >
              <span>VIEW ALL</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </div>

        {/* ── CATEGORY FILTER TABS ── */}
        <div className="cruise-filters">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`cruise-filter-btn${activeCategory === cat ? ' active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── HORIZONTAL SLIDER ── */}
        <div ref={sliderRef} className="cruise-slider-track">
          {filteredCruises.map((cruise, idx) => {
            const IconComp = cruise.icon || Ship;
            const detailUrl = `/cruises/${cruise.slug || cruise.id}`;

            return (
              <div key={`${cruise.id || 'cruise'}-${idx}`} className="cruise-card-wrap">
                <a
                  href={detailUrl}
                  onClick={(e) => navigateTo(detailUrl, e)}
                  className="cruise-card"
                >
                  {/* Image Box */}
                  <div className="cruise-img-box">
                    <img
                      src={cruise.image}
                      alt={cruise.name}
                      loading="lazy"
                    />
                    <div className="cruise-img-overlay" />

                    {/* Badge */}
                    <span className="cruise-badge" style={{ background: cruise.badgeBg }}>
                      {cruise.badge}
                    </span>

                    {/* Duration */}
                    <span className="cruise-duration-pill">
                      <Clock size={11} color="#F06543" />
                      <span>{cruise.duration}</span>
                    </span>
                  </div>

                  {/* Body */}
                  <div className="cruise-body">
                    {/* Route */}
                    <div className="cruise-route-line">
                      <MapPin size={12} color="#F06543" />
                      <span>{cruise.route}</span>
                    </div>

                    {/* Title & Subtitle */}
                    <div className="cruise-title">{cruise.name}</div>
                    <div className="cruise-subtitle">{cruise.subtitle}</div>

                    {/* Highlights */}
                    <div className="cruise-highlights">
                      {cruise.highlights.map((h, i) => (
                        <span key={i} className="cruise-highlight-tag">
                          <ShieldCheck size={11} color="#0D9488" />
                          <span>{h}</span>
                        </span>
                      ))}
                    </div>

                    {/* Meta: Rating + Capacity */}
                    <div className="cruise-meta-row">
                      <div className="cruise-rating">
                        <Star size={13} fill="#d97706" stroke="#d97706" />
                        <span>{cruise.rating}</span>
                        <span className="cruise-reviews">({cruise.reviews} reviews)</span>
                      </div>
                      <div className="cruise-capacity">
                        <Users size={12} color="#64748b" />
                        <span>{cruise.capacity}</span>
                      </div>
                    </div>
                  </div>

                  {/* Footer: Price + CTA */}
                  <div className="cruise-footer">
                    <div>
                      <span className="cruise-price-label">PER PERSON</span>
                      <div style={{ display: 'flex', alignItems: 'baseline' }}>
                        <span className="cruise-price-curr">₹{Number(cruise.price).toLocaleString('en-IN')}</span>
                        <span className="cruise-price-old">₹{Number(cruise.originalPrice).toLocaleString('en-IN')}</span>
                      </div>
                    </div>

                    <div className="cruise-book-btn">
                      <span>BOOK NOW</span>
                      <ArrowRight size={12} />
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
        </div>

        {/* ── STATS STRIP ── */}
        <div className="cruise-stats-strip">
          {[
            { icon: Ship, color: '#F06543', bg: '#FFF0EB', num: '15+', label: 'Cruise Routes Available' },
            { icon: Users, color: '#0D9488', bg: 'rgba(13,148,136,0.1)', num: '50K+', label: 'Happy Cruisers Yearly' },
            { icon: ShieldCheck, color: '#d97706', bg: 'rgba(217,119,6,0.1)', num: '100%', label: 'Safety Certified Vessels' },
            { icon: Coffee, color: '#7C3AED', bg: 'rgba(124,58,237,0.1)', num: '365', label: 'Days of Island Sailings' },
          ].map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="cruise-stat-item">
                <div className="cruise-stat-icon-box" style={{ background: stat.bg, color: stat.color }}>
                  <Icon size={22} color={stat.color} />
                </div>
                <div>
                  <div className="cruise-stat-num">{stat.num}</div>
                  <div className="cruise-stat-label">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
