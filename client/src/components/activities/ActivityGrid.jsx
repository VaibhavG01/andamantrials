// src/components/activities/ActivityGrid.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Compass, Sparkles, SlidersHorizontal, X, MapPin } from 'lucide-react';
import ActivityCard from './ActivityCard';

gsap.registerPlugin(ScrollTrigger);

const CATEGORIES = [
  'All',
  'Water Sports',
  'Adventure',
  'Scuba & Snorkeling',
  'Marine Life',
  'Boat Activities',
];

export default function ActivityGrid({
  activities = [],
  loading = false,
  error = '',
  selectedCategory = 'All',
  onSelectCategory,
  selectedLocation = 'All Locations',
  onSelectLocation,
  priceRange = 10000,
  onChangePriceRange,
  sortBy = 'popular',
  onChangeSortBy,
  onResetFilters,
  savedWishlist = {},
  onToggleWishlist,
  onOpenBooking,
  onViewDetails,
  onRetry,
}) {
  const gridRef = useRef(null);

  useEffect(() => {
    if (!gridRef.current || loading) return;
    const cards = gridRef.current.querySelectorAll('.act-card-root');
    gsap.fromTo(
      cards,
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power2.out',
        scrollTrigger: { trigger: gridRef.current, start: 'top 85%' }
      }
    );
  }, [activities, loading, selectedCategory, selectedLocation]);

  const hasActiveFilters = selectedCategory !== 'All' || selectedLocation !== 'All Locations' || priceRange < 10000 || sortBy !== 'popular';

  return (
    <section className="grid-section-root" id="activity-grid-section">
      <style>{`
        .grid-section-root {
          max-width: 1340px;
          margin: 0 auto;
          padding: 60px 24px 90px;
        }

        .act-grid-eyebrow {
          display: flex; align-items: center; justify-content: center; gap: 6px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; color: #F06543;
          letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 8px;
        }

        .act-grid-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(32px, 4.5vw, 52px);
          font-weight: 700; color: #0B2545; text-align: center;
          margin: 0 0 14px; line-height: 1.1;
        }

        .act-grid-desc {
          font-family: 'Inter', sans-serif;
          font-size: 14px; color: #64748b; text-align: center;
          margin: 0 auto 36px; max-width: 620px; font-weight: 500;
        }

        .filter-capsules-wrap {
          display: flex; flex-direction: column; align-items: center; gap: 16px;
          margin-bottom: 44px;
        }

        .cat-pills-row {
          display: flex; align-items: center; justify-content: center;
          gap: 10px; flex-wrap: wrap; width: 100%;
        }

        .cat-filter-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 900; letter-spacing: 0.04em;
          text-transform: uppercase; padding: 10px 22px; border-radius: 30px;
          cursor: pointer; transition: all 0.25s ease; border: 2px solid #e2e8f0;
          background: #ffffff; color: #334155; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
        }
        .cat-filter-btn:hover {
          color: #0B2545; border-color: #cbd5e1; background: #f8fafc;
        }
        .cat-filter-btn.active {
          background: #0B2545; color: #ffffff; border-color: #0B2545;
          box-shadow: 0 6px 18px rgba(0, 45, 98, 0.22);
        }

        .controls-sub-row {
          display: flex; align-items: center; justify-content: center;
          gap: 12px; flex-wrap: wrap; width: 100%;
        }

        .control-capsule {
          background: #ffffff; border: 2px solid #e2e8f0;
          border-radius: 16px; padding: 8px 16px;
          display: flex; align-items: center; gap: 10px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
          transition: border-color 0.2s ease;
        }
        .control-capsule:hover {
          border-color: #F06543;
        }

        .act-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }
        @media (max-width: 1080px) {
          .act-cards-grid { grid-template-columns: repeat(2, 1fr); gap: 24px; }
        }
        @media (max-width: 640px) {
          .act-cards-grid { grid-template-columns: 1fr; gap: 20px; }
        }
      `}</style>

      {/* HEADER */}
      <div className="act-grid-eyebrow">
        <Sparkles size={14} color="#F06543" />
        <span>CURATED ACTIVITY CATALOG</span>
      </div>
      <h2 className="act-grid-title">ALL ANDAMAN EXPERIENCES</h2>
      <p className="act-grid-desc">
        Showing <span style={{ fontWeight: 800, color: '#0B2545' }}>{activities.length} verified activities</span> with live slot booking, certified equipment, and instant confirmation.
      </p>

      {/* FILTER CAPSULES (CENTERED & THICK) */}
      <div className="filter-capsules-wrap">
        {/* Category Pills */}
        <div className="cat-pills-row">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => onSelectCategory(cat)}
                className={`cat-filter-btn${isSelected ? ' active' : ''}`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Sub-controls: Island, Max Price, Sort & Reset */}
        <div className="controls-sub-row">
          {/* Island Filter */}
          <div className="control-capsule">
            <MapPin size={14} className="text-[#F06543]" />
            <select
              value={selectedLocation}
              onChange={(e) => onSelectLocation(e.target.value)}
              className="bg-transparent text-xs font-black text-[#0B2545] focus:outline-none cursor-pointer"
            >
              <option value="All Locations">All Islands</option>
              <option value="Havelock">Havelock Island</option>
              <option value="Port Blair">Port Blair</option>
              <option value="Neil Island">Neil Island</option>
              <option value="North Bay">North Bay</option>
            </select>
          </div>

          {/* Max Price Slider */}
          <div className="control-capsule">
            <span className="text-slate-400 uppercase text-[10px] font-black tracking-wider">Max:</span>
            <span className="text-[#0B2545] font-mono font-black text-xs min-w-[65px]">₹{priceRange.toLocaleString()}</span>
            <input
              type="range"
              min="500"
              max="10000"
              step="500"
              value={priceRange}
              onChange={(e) => onChangePriceRange(Number(e.target.value))}
              className="w-24 sm:w-32 h-1.5 accent-[#F06543] bg-slate-200 rounded-lg cursor-pointer"
            />
          </div>

          {/* Sort Dropdown */}
          <div className="control-capsule">
            <SlidersHorizontal size={14} className="text-[#F06543]" />
            <select
              value={sortBy}
              onChange={(e) => onChangeSortBy(e.target.value)}
              className="bg-transparent text-xs font-black text-[#0B2545] focus:outline-none cursor-pointer"
            >
              <option value="popular">Most Popular</option>
              <option value="rating">Highest Rated</option>
              <option value="price_asc">Price: Low to High</option>
              <option value="price_desc">Price: High to Low</option>
            </select>
          </div>

          {/* Reset Filters button */}
          {hasActiveFilters && (
            <button
              onClick={onResetFilters}
              className="text-xs font-black text-red-600 hover:text-red-700 flex items-center gap-1.5 px-4 py-2 rounded-2xl bg-red-50 hover:bg-red-100 border-2 border-red-200 transition-all cursor-pointer shadow-sm"
            >
              <X size={13} />
              <span>Reset</span>
            </button>
          )}
        </div>
      </div>

      {/* LOADING STATE */}
      {loading && (
        <div className="act-cards-grid">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div key={n} className="bg-white border-2 border-slate-200 rounded-3xl overflow-hidden shadow-sm animate-pulse">
              <div className="h-48 bg-slate-200" />
              <div className="p-6 space-y-4">
                <div className="h-6 bg-slate-200 rounded-lg w-3/4" />
                <div className="h-3.5 bg-slate-100 rounded w-full" />
                <div className="h-3.5 bg-slate-100 rounded w-5/6" />
                <div className="pt-4 flex justify-between items-center border-t border-slate-100">
                  <div className="h-7 bg-slate-200 rounded w-1/3" />
                  <div className="h-10 bg-slate-200 rounded-xl w-1/3" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ERROR STATE */}
      {!loading && error && (
        <div className="py-16 text-center bg-white border-2 border-slate-200 rounded-3xl p-8 max-w-lg mx-auto shadow-md">
          <p className="text-slate-600 text-sm mb-5 font-semibold">{error}</p>
          <button
            onClick={onRetry}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#0B2545] to-[#F06543] text-white font-black text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-all cursor-pointer"
          >
            Try Again
          </button>
        </div>
      )}

      {/* EMPTY STATE */}
      {!loading && !error && activities.length === 0 && (
        <div className="py-16 text-center bg-white border-2 border-slate-200 rounded-3xl p-8 max-w-md mx-auto shadow-md space-y-4">
          <Compass className="w-14 h-14 text-slate-300 mx-auto" />
          <h3 className="text-2xl font-black text-[#0B2545] font-serif">No Activities Found</h3>
          <p className="text-xs text-slate-500 font-medium leading-relaxed">
            We couldn't find any activities matching your selected filters. Try broadening your location or price range.
          </p>
          <button
            onClick={onResetFilters}
            className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 border-2 border-slate-200 text-[#0B2545] font-black text-xs uppercase tracking-wider transition-all cursor-pointer"
          >
            Clear All Filters
          </button>
        </div>
      )}

      {/* MAIN CARDS GRID */}
      {!loading && !error && activities.length > 0 && (
        <div ref={gridRef} className="act-cards-grid">
          {activities.map((act, idx) => (
            <ActivityCard
              key={`${act.id || 'act'}-${idx}`}
              activity={act}
              isWishlisted={savedWishlist[act.id]}
              onToggleWishlist={onToggleWishlist}
              onOpenBooking={onOpenBooking}
              onViewDetails={onViewDetails}
            />
          ))}
        </div>
      )}
    </section>
  );
}
