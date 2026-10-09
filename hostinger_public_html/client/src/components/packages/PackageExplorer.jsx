// src/components/packages/PackageExplorer.jsx
// ─────────────────────────────────────────────────────────────────────────────
// SECTION 04 — POPULAR ANDAMAN PACKAGES EXPLORER
// Luxury Glassmorphic Cards, Smart Highlight Extractor, Responsive Slider & Filter Tabs.
// ─────────────────────────────────────────────────────────────────────────────

import React, { useState, useRef, useEffect } from 'react';
import {
  Star, Clock, MapPin, ArrowRight, Sparkles, CheckCircle2,
  ChevronLeft, ChevronRight, Flame, Heart, Users, Waves, Layers, ShieldCheck
} from 'lucide-react';
import { apiClient } from '../../api/apiClient';

// ─── UTILITIES ────────────────────────────────────────────────────────────────
const navigateTo = (url, e) => {
  if (e) e.preventDefault();
  window.history.pushState({}, '', url);
  window.dispatchEvent(new Event('popstate'));
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const CATEGORIES = [
  { id: 'all', label: 'All Packages', icon: Layers },
  { id: 'bestseller', label: 'Bestsellers', icon: Flame },
  { id: 'honeymoon', label: 'Honeymoon', icon: Heart },
  { id: 'family', label: 'Family & Group', icon: Users },
  { id: 'adventure', label: 'Scuba & Adventure', icon: Waves },
];

// Helper to extract clean, concise 2-3 highlight chips from long inclusions
const extractShortHighlights = (pkg) => {
  if (pkg.highlights && Array.isArray(pkg.highlights) && pkg.highlights.length > 0) {
    return pkg.highlights.slice(0, 3);
  }

  const raw = pkg.inclusions;
  let items = [];
  if (Array.isArray(raw)) {
    items = raw;
  } else if (typeof raw === 'string') {
    try {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) items = parsed;
    } catch {
      items = raw.split(/[\n,]+/).map(s => s.trim().replace(/^[-*•]\s*/, '')).filter(Boolean);
    }
  }

  if (!items || items.length === 0) {
    return ['4★ Beach Resort', 'Speed Catamaran Ferries', 'Private AC Transfers'];
  }

  const result = [];
  for (const item of items) {
    const clean = String(item).replace(/<[^>]*>/g, '').trim();
    const lower = clean.toLowerCase();
    
    if (lower.includes('hotel') || lower.includes('resort') || lower.includes('stay')) {
      if (!result.includes('Beach Resort Stays')) result.push('Beach Resort Stays');
    } else if (lower.includes('catamaran') || lower.includes('ferry') || lower.includes('makruzz') || lower.includes('nautika')) {
      if (!result.includes('High-Speed Ferries')) result.push('High-Speed Ferries');
    } else if (lower.includes('snorkeling') || lower.includes('scuba') || lower.includes('dive')) {
      if (!result.includes('Snorkeling Included')) result.push('Snorkeling Included');
    } else if (lower.includes('vehicle') || lower.includes('transfers') || lower.includes('cab')) {
      if (!result.includes('Private AC Transfers')) result.push('Private AC Transfers');
    } else if (lower.includes('breakfast') || lower.includes('buffet') || lower.includes('dinner')) {
      if (!result.includes('Daily Buffet Breakfast')) result.push('Daily Buffet Breakfast');
    } else if (lower.includes('ticket') || lower.includes('pass') || lower.includes('entry')) {
      if (!result.includes('Entry Passes Included')) result.push('Entry Passes Included');
    } else if (lower.includes('concierge') || lower.includes('meet') || lower.includes('greet')) {
      if (!result.includes('24/7 Island Concierge')) result.push('24/7 Island Concierge');
    } else if (clean.length > 0 && result.length < 3) {
      result.push(clean.length > 26 ? clean.slice(0, 24) + '...' : clean);
    }

    if (result.length >= 3) break;
  }

  return result.length > 0 ? result : ['Beach Resort Stays', 'High-Speed Ferries', 'Private AC Transfers'];
};

const DEFAULT_PACKAGES = [
  {
    id: 'andaman-escape',
    slug: 'andaman-escape',
    category: 'bestseller',
    name: 'Andaman Escape Luxury Tour',
    duration: '5 Nights / 6 Days',
    destinations: 'Port Blair • Havelock • Neil Island',
    price: 24999,
    originalPrice: 29999,
    discount: '17% OFF',
    rating: 4.9,
    reviewsCount: 142,
    badge: 'BESTSELLER',
    badgeBg: 'linear-gradient(135deg, #FF6B4A, #F06543)',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    highlights: ['Beach Resort Stays', 'High-Speed Ferries', 'Snorkeling Included'],
  },
  {
    id: 'island-romance',
    slug: 'island-romance',
    category: 'honeymoon',
    name: 'Island Romance Honeymoon Special',
    duration: '4 Nights / 5 Days',
    destinations: 'Port Blair • Havelock • Neil',
    price: 29999,
    originalPrice: 34999,
    discount: '15% OFF',
    rating: 5.0,
    reviewsCount: 198,
    badge: 'HONEYMOON SPECIAL',
    badgeBg: 'linear-gradient(135deg, #E11D48, #BE123C)',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    highlights: ['Candlelight Dinner', 'Private Beach Villa', 'Sunset Cruise Deck'],
  },
  {
    id: 'andaman-family-escape',
    slug: 'andaman-family-escape',
    category: 'family',
    name: 'Andaman Family Holiday Escape',
    duration: '5 Nights / 6 Days',
    destinations: 'Port Blair • Havelock',
    price: 22499,
    originalPrice: 26999,
    discount: '17% OFF',
    rating: 4.8,
    reviewsCount: 116,
    badge: 'FAMILY FAVORITE',
    badgeBg: 'linear-gradient(135deg, #0D9488, #0F766E)',
    image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=800&q=80',
    highlights: ['Beach Resort Stays', 'Glass Bottom Boat', 'Private AC Cab'],
  },
  {
    id: 'andaman-adventure',
    slug: 'andaman-adventure',
    category: 'adventure',
    name: 'Andaman Scuba & Cave Adventure',
    duration: '6 Nights / 7 Days',
    destinations: 'Port Blair • Havelock • Neil • Baratang',
    price: 27999,
    originalPrice: 34999,
    discount: '20% OFF',
    rating: 4.9,
    reviewsCount: 135,
    badge: 'ADVENTURE DIVE',
    badgeBg: 'linear-gradient(135deg, #7C3AED, #6D28D9)',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
    highlights: ['PADI Scuba Included', 'Baratang Cave Trek', 'Speedboat Safaris'],
  },
];

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function PackageExplorer() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [packages, setPackages] = useState(DEFAULT_PACKAGES);
  const sliderRef = useRef(null);

  useEffect(() => {
    const loadPackages = async () => {
      try {
        const res = await apiClient('/packages');
        if (res && res.data && Array.isArray(res.data) && res.data.length > 0) {
          const mapped = res.data.map((pkg, idx) => {
            const numPrice = Number(pkg.price || 24999);
            const numOriginal = Number(pkg.originalPrice || Math.round(numPrice * 1.22));
            const discountPercent = Math.round(((numOriginal - numPrice) / numOriginal) * 100);

            // Category matching
            let category = 'bestseller';
            let badge = 'POPULAR';
            let badgeBg = 'linear-gradient(135deg, #FF6B4A, #F06543)';

            const catLower = (pkg.category || '').toLowerCase();
            const nameLower = (pkg.name || '').toLowerCase();

            if (catLower.includes('honeymoon') || nameLower.includes('romance') || nameLower.includes('couple')) {
              category = 'honeymoon';
              badge = 'HONEYMOON SPECIAL';
              badgeBg = 'linear-gradient(135deg, #E11D48, #BE123C)';
            } else if (catLower.includes('family') || nameLower.includes('family') || nameLower.includes('group')) {
              category = 'family';
              badge = 'FAMILY FAVORITE';
              badgeBg = 'linear-gradient(135deg, #0D9488, #0F766E)';
            } else if (catLower.includes('adventure') || catLower.includes('scuba') || nameLower.includes('dive') || nameLower.includes('adventure')) {
              category = 'adventure';
              badge = 'ADVENTURE DIVE';
              badgeBg = 'linear-gradient(135deg, #7C3AED, #6D28D9)';
            } else {
              category = 'bestseller';
              badge = 'BESTSELLER';
              badgeBg = 'linear-gradient(135deg, #FF6B4A, #F06543)';
            }

            // Image selection
            let coverImg = pkg.heroImage || pkg.image;
            if (!coverImg && Array.isArray(pkg.gallery) && pkg.gallery.length > 0) {
              coverImg = pkg.gallery[0];
            }
            if (!coverImg) {
              coverImg = DEFAULT_PACKAGES[idx % DEFAULT_PACKAGES.length]?.image || DEFAULT_PACKAGES[0].image;
            }

            return {
              id: pkg.slug || pkg.id,
              slug: pkg.slug || `package-${pkg.id}`,
              name: pkg.name,
              category,
              duration: pkg.duration || '5 Nights / 6 Days',
              destinations: pkg.destinations || pkg.route || 'Port Blair • Havelock • Neil Island',
              price: numPrice,
              originalPrice: numOriginal,
              discount: `${discountPercent > 0 ? discountPercent : 20}% OFF`,
              rating: Number(pkg.rating || 4.9).toFixed(1),
              reviewsCount: pkg.reviewsCount || (120 + idx * 25),
              badge: pkg.badge || badge,
              badgeBg: pkg.badgeBg || badgeBg,
              image: coverImg,
              highlights: extractShortHighlights(pkg),
            };
          });
          setPackages(mapped);
        } else {
          setPackages(DEFAULT_PACKAGES);
        }
      } catch (err) {
        console.error('Failed to load packages:', err);
        setPackages(DEFAULT_PACKAGES);
      }
    };
    loadPackages();
  }, []);

  const filteredPackages = activeCategory === 'all'
    ? packages
    : packages.filter(pkg => {
        const pkgCat = (pkg.category || '').toLowerCase();
        const activeCat = activeCategory.toLowerCase();
        return pkgCat === activeCat || (activeCat === 'bestseller' && (pkg.badge || '').includes('BEST'));
      });

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -360, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 360, behavior: 'smooth' });
    }
  };

  return (
    <section id="packages-section" className="pkg-explorer-section">
      <style>{`
        .pkg-explorer-section {
          position: relative;
          width: 100%;
          background: #ffffff;
          color: #1e293b;
          padding: 76px 0 92px;
          border-bottom: 1px solid #e2e8f0;
          overflow: hidden;
        }

        .pkg-ambient-glow {
          position: absolute;
          top: 20%;
          right: -6%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(240, 101, 67, 0.05) 0%, transparent 70%);
          pointer-events: none;
        }

        .pkg-ambient-glow-l {
          position: absolute;
          bottom: 10%;
          left: -6%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(13, 148, 136, 0.05) 0%, transparent 70%);
          pointer-events: none;
        }

        .pkg-container {
          max-width: 1380px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
          z-index: 2;
        }

        /* Header styling */
        .pkg-header-wrapper {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 24px;
          margin-bottom: 32px;
        }

        .pkg-header-sub {
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

        .pkg-header-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(30px, 4vw, 46px);
          font-weight: 700;
          color: #0B2545;
          line-height: 1.15;
          margin: 0 0 8px;
          letter-spacing: -0.01em;
        }

        .pkg-header-desc {
          font-family: 'Inter', sans-serif;
          font-size: 14.5px;
          color: #64748b;
          line-height: 1.6;
          max-width: 560px;
          margin: 0;
        }

        /* Header Actions & Slider Arrows */
        .pkg-header-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .pkg-slider-arrow {
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

        .pkg-slider-arrow:hover {
          background: #0B2545;
          color: #ffffff;
          border-color: #0B2545;
          box-shadow: 0 6px 20px rgba(11, 37, 69, 0.25);
          transform: translateY(-2px);
        }

        .pkg-view-all-btn {
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

        .pkg-view-all-btn:hover {
          background: #0B2545;
          color: #ffffff;
          border-color: #0B2545;
          box-shadow: 0 6px 20px rgba(11, 37, 69, 0.25);
          transform: translateY(-2px);
        }

        /* Filter Tabs */
        .pkg-tabs-row {
          display: flex;
          align-items: center;
          gap: 10px;
          overflow-x: auto;
          scrollbar-width: none;
          padding-bottom: 4px;
          margin-bottom: 30px;
        }
        .pkg-tabs-row::-webkit-scrollbar { display: none; }

        .pkg-tab-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 800;
          color: #475569;
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          padding: 8px 18px;
          border-radius: 30px;
          cursor: pointer;
          transition: all 0.25s ease;
          white-space: nowrap;
          display: inline-flex;
          align-items: center;
          gap: 7px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.03);
        }

        .pkg-tab-btn:hover {
          border-color: #F06543;
          color: #F06543;
          background: #FFF0EB;
        }

        .pkg-tab-btn.active {
          background: linear-gradient(135deg, #0B2545 0%, #173b6c 100%);
          border-color: #0B2545;
          color: #ffffff;
          box-shadow: 0 4px 16px rgba(11, 37, 69, 0.25);
        }

        /* Slider Track */
        .pkg-slider-container {
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        .pkg-cards-slider {
          display: flex;
          gap: 24px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scrollbar-width: none;
          padding: 8px 4px 28px 4px;
        }

        .pkg-cards-slider::-webkit-scrollbar {
          display: none;
        }

        .pkg-card-item {
          flex: 0 0 calc(33.333% - 16px);
          min-width: 320px;
          scroll-snap-align: start;
        }

        @media (max-width: 1150px) {
          .pkg-card-item {
            flex: 0 0 calc(50% - 12px);
            min-width: 290px;
          }
        }

        @media (max-width: 680px) {
          .pkg-card-item {
            flex: 0 0 90%;
            min-width: 280px;
          }
        }

        /* Individual Package Card */
        .pkg-card {
          height: 100%;
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 22px;
          padding: 18px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: all 0.38s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
          text-decoration: none;
          color: inherit;
          box-shadow: 0 4px 16px rgba(11, 37, 69, 0.04);
          cursor: pointer;
        }

        .pkg-card:hover {
          transform: translateY(-8px);
          border-color: #F06543;
          box-shadow: 0 18px 36px rgba(11, 37, 69, 0.12);
        }

        .pkg-img-box {
          position: relative;
          height: 200px;
          border-radius: 16px;
          overflow: hidden;
          margin-bottom: 16px;
          background: #0B2545;
        }

        .pkg-img-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .pkg-card:hover .pkg-img-box img {
          transform: scale(1.08);
        }

        .pkg-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(11, 37, 69, 0.5) 0%, transparent 60%);
        }

        .pkg-badge-tag {
          position: absolute;
          top: 12px;
          left: 12px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.05em;
          color: #ffffff;
          padding: 5px 12px;
          border-radius: 20px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
          backdrop-filter: blur(6px);
        }

        .pkg-discount-tag {
          position: absolute;
          top: 12px;
          right: 12px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11px;
          font-weight: 900;
          color: #ffffff;
          background: #F06543;
          padding: 4px 9px;
          border-radius: 10px;
          box-shadow: 0 2px 8px rgba(240, 101, 67, 0.35);
        }

        .pkg-duration-pill {
          position: absolute;
          bottom: 12px;
          right: 12px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11.5px;
          font-weight: 800;
          color: #0f172a;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(8px);
          padding: 4px 10px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 4px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.12);
        }

        .pkg-route-line {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 800;
          color: #F06543;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          display: flex;
          align-items: center;
          gap: 4px;
          margin-bottom: 6px;
        }

        .pkg-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 17.5px;
          font-weight: 800;
          color: #0B2545;
          line-height: 1.35;
          margin: 0 0 12px;
          transition: color 0.25s ease;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          min-height: 46px;
        }

        .pkg-card:hover .pkg-title {
          color: #F06543;
        }

        .pkg-inclusions-list {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 18px;
        }

        .pkg-inc-tag {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11.5px;
          font-weight: 700;
          color: #334155;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          padding: 4px 9px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .pkg-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 14px;
          border-top: 1px solid #f1f5f9;
          margin-top: auto;
        }

        .pkg-price-curr {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 20px;
          font-weight: 900;
          color: #0B2545;
          line-height: 1;
        }

        .pkg-price-old {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          color: #94a3b8;
          text-decoration: line-through;
          margin-left: 6px;
          font-weight: 600;
        }

        .pkg-action-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px;
          font-weight: 800;
          letter-spacing: 0.04em;
          color: #ffffff;
          background: linear-gradient(135deg, #FF6B4A 0%, #F06543 100%);
          border: none;
          padding: 9px 18px;
          border-radius: 12px;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: all 0.28s ease;
          box-shadow: 0 4px 14px rgba(240, 101, 67, 0.3);
        }

        .pkg-card:hover .pkg-action-btn {
          box-shadow: 0 6px 20px rgba(240, 101, 67, 0.45);
          transform: translateY(-2px);
        }
      `}</style>

      {/* Ambient background light */}
      <div className="pkg-ambient-glow" />
      <div className="pkg-ambient-glow-l" />

      <div className="pkg-container">
        {/* Section Header */}
        <div className="pkg-header-wrapper">
          <div>
            <div className="pkg-header-sub">
              <Sparkles size={14} color="#F06543" />
              <span>HANDCRAFTED TOUR ITINERARIES</span>
            </div>
            <h2 className="pkg-header-title">
              Popular Andaman Packages
            </h2>
            <p className="pkg-header-desc">
              All-inclusive island holiday packages curated by local Andaman travel experts with ferries, beach stays & guided tours.
            </p>
          </div>

          <div className="pkg-header-actions">
            <button onClick={scrollLeft} className="pkg-slider-arrow" aria-label="Previous Package">
              <ChevronLeft size={22} />
            </button>
            <button onClick={scrollRight} className="pkg-slider-arrow" aria-label="Next Package">
              <ChevronRight size={22} />
            </button>

            <a
              href="/packages"
              onClick={(e) => navigateTo('/packages', e)}
              className="pkg-view-all-btn"
            >
              <span>VIEW ALL</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="pkg-tabs-row">
          {CATEGORIES.map((cat) => {
            const IconComponent = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`pkg-tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
              >
                <IconComponent size={14} color={activeCategory === cat.id ? '#ffffff' : '#F06543'} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Horizontal Slider */}
        <div className="pkg-slider-container">
          <div ref={sliderRef} className="pkg-cards-slider">
            {filteredPackages.map((pkg, idx) => {
              const detailUrl = `/package-details?id=${pkg.slug || pkg.id}`;

              return (
                <div key={`${pkg.id || 'pkg'}-${idx}`} className="pkg-card-item">
                  <a
                    href={detailUrl}
                    onClick={(e) => navigateTo(detailUrl, e)}
                    className="pkg-card"
                  >
                    <div>
                      {/* Thumbnail Image Box */}
                      <div className="pkg-img-box">
                        <img
                          src={pkg.image}
                          alt={pkg.name}
                          loading="lazy"
                        />
                        <div className="pkg-img-overlay" />

                        <span className="pkg-badge-tag" style={{ background: pkg.badgeBg }}>
                          {pkg.badge}
                        </span>
                        
                        <span className="pkg-discount-tag">
                          {pkg.discount}
                        </span>

                        <span className="pkg-duration-pill">
                          <Clock size={11} color="#F06543" />
                          <span>{pkg.duration}</span>
                        </span>
                      </div>

                      {/* Route & Rating */}
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
                        <div className="pkg-route-line">
                          <MapPin size={12} color="#F06543" />
                          <span style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                            {pkg.destinations}
                          </span>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: 3, fontSize: 13, fontWeight: 800, color: '#d97706', fontFamily: "'Space Grotesk', sans-serif" }}>
                          <Star size={12} fill="#d97706" stroke="#d97706" />
                          <span>{pkg.rating}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="pkg-title">{pkg.name}</h3>

                      {/* Clean Inclusions Chips (Max 3) */}
                      <div className="pkg-inclusions-list">
                        {(pkg.highlights || []).map((inc, i) => (
                          <span key={i} className="pkg-inc-tag">
                            <CheckCircle2 size={11} color="#0D9488" />
                            <span>{inc}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Price & CTA Footer */}
                    <div className="pkg-footer">
                      <div>
                        <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 800, color: '#64748b', display: 'block', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 2 }}>
                          STARTING FROM
                        </span>
                        <div style={{ display: 'flex', alignItems: 'baseline' }}>
                          <span className="pkg-price-curr">₹{Number(pkg.price).toLocaleString('en-IN')}</span>
                          <span className="pkg-price-old">₹{Number(pkg.originalPrice).toLocaleString('en-IN')}</span>
                        </div>
                      </div>

                      <div className="pkg-action-btn">
                        <span>EXPLORE</span>
                        <ArrowRight size={12} />
                      </div>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
