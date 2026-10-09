// src/components/packages/PackageGrid.jsx
import React from 'react';
import { Filter, Search, X, RotateCcw, Clock, SlidersHorizontal } from 'lucide-react';
import PackageCard from './PackageCard';

const CATEGORIES = [
  { id: 'ALL', label: 'ALL PACKAGES' },
  { id: 'HONEYMOON', label: 'HONEYMOON' },
  { id: 'FAMILY', label: 'FAMILY & LEISURE' },
  { id: 'ADVENTURE', label: 'ADVENTURE & SCUBA' },
  { id: 'LUXURY', label: '5★ LUXURY' },
  { id: 'BUDGET', label: 'BUDGET' },
];

const DURATIONS = [
  { id: 'ALL', label: 'All Durations' },
  { id: 'SHORT', label: '3–4 Days' },
  { id: 'MEDIUM', label: '5–6 Days' },
  { id: 'LONG', label: '7+ Days' },
];

const ISLAND_DESTINATIONS = [
  { id: 'ALL', label: 'All Islands' },
  { id: 'Port Blair', label: 'Port Blair' },
  { id: 'Havelock', label: 'Havelock Island' },
  { id: 'Neil', label: 'Neil Island' },
  { id: 'Baratang', label: 'Baratang' },
  { id: 'Diglipur', label: 'Diglipur' },
];

export default function PackageGrid({
  packages = [],
  loading = false,
  error = '',
  selectedCategory = 'ALL',
  onSelectCategory,
  selectedDuration = 'ALL',
  onSelectDuration,
  selectedDestination = 'ALL',
  onSelectDestination,
  searchQuery = '',
  onSearchChange,
  sortBy = 'RECOMMENDED',
  onChangeSortBy,
  onResetFilters,
  savedWishlist = {},
  onToggleWishlist,
  onViewDetails,
  onRetry,
}) {
  return (
    <section className="pkg-grid-section-root">
      <style>{`
        .pkg-grid-section-root {
          max-width: 1340px;
          margin: 0 auto;
          padding: 20px 24px 80px;
        }

        .pkg-grid-filter-bar {
          background: #ffffff;
          border: 2px solid #e2e8f0;
          border-radius: 20px;
          padding: 14px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
          box-shadow: 0 10px 30px rgba(0, 45, 98, 0.05);
          margin-bottom: 24px;
        }

        .pkg-filter-tabs {
          display: flex;
          align-items: center;
          gap: 8px;
          overflow-x: auto;
          scrollbar-width: none;
        }

        .pkg-tab-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #64748b;
          background: #f8fafc;
          border: 1.5px solid #e2e8f0;
          padding: 8px 16px;
          border-radius: 14px;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.25s ease;
          outline: none;
        }
        .pkg-tab-btn:hover {
          color: #0B2545;
          border-color: #F06543;
          background: #FFF0EB;
        }
        .pkg-tab-btn.active {
          color: #ffffff;
          background: #0B2545;
          border-color: #0B2545;
          box-shadow: 0 4px 14px rgba(0, 45, 98, 0.25);
        }

        .pkg-search-box {
          position: relative;
          display: flex;
          align-items: center;
        }

        .pkg-grid-search-input {
          font-family: 'Inter', sans-serif;
          font-size: 12.5px;
          font-weight: 600;
          color: #0B2545;
          background: #f8fafc;
          border: 1.5px solid #e2e8f0;
          border-radius: 14px;
          padding: 9px 14px 9px 36px;
          outline: none;
          width: 220px;
          transition: all 0.25s ease;
        }
        .pkg-grid-search-input:focus {
          border-color: #F06543;
          background: #ffffff;
          width: 260px;
          box-shadow: 0 0 0 3px rgba(13, 148, 136, 0.15);
        }

        .pkg-sort-select {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 800;
          color: #0B2545;
          background: #f8fafc;
          border: 1.5px solid #e2e8f0;
          border-radius: 14px;
          padding: 9px 14px;
          outline: none;
          cursor: pointer;
          transition: all 0.25s ease;
        }
        .pkg-sort-select:focus {
          border-color: #F06543;
        }

        .pkg-duration-sub-bar {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 28px;
          flex-wrap: wrap;
        }
        .pkg-dur-pill {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11.5px;
          font-weight: 800;
          color: #64748b;
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          padding: 6px 14px;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .pkg-dur-pill:hover {
          border-color: #F06543;
          color: #0B2545;
        }
        .pkg-dur-pill.active {
          background: #F06543;
          color: #ffffff;
          border-color: #F06543;
          box-shadow: 0 2px 8px rgba(13, 148, 136, 0.25);
        }

        .pkg-results-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        @media (max-width: 1200px) {
          .pkg-results-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 820px) {
          .pkg-results-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 540px) {
          .pkg-results-grid { grid-template-columns: 1fr; }
        }

        .pkg-section-title-wrap {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 24px;
        }
      `}</style>

      {/* FILTER BAR */}
      <div className="pkg-grid-filter-bar">
        {/* Category Tabs */}
        <div className="pkg-filter-tabs">
          <span className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest mr-1 font-mono flex items-center gap-1">
            <Filter size={12} color="#F06543" /> THEME:
          </span>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => onSelectCategory && onSelectCategory(cat.id)}
              className={`pkg-tab-btn ${selectedCategory === cat.id ? 'active' : ''}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Right Controls: Search + Sort */}
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="pkg-search-box flex-1 sm:flex-none">
            <input
              type="text"
              placeholder="Search packages, islands..."
              value={searchQuery}
              onChange={(e) => onSearchChange && onSearchChange(e.target.value)}
              className="pkg-grid-search-input"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#F06543] w-3.5 h-3.5" />
            {searchQuery && (
              <button
                type="button"
                onClick={() => onSearchChange && onSearchChange('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
              >
                <X size={14} />
              </button>
            )}
          </div>

          <select
            value={sortBy}
            onChange={(e) => onChangeSortBy && onChangeSortBy(e.target.value)}
            className="pkg-sort-select"
          >
            <option value="RECOMMENDED">Recommended</option>
            <option value="RATING">Highest Rated</option>
            <option value="PRICE_LOW">Price: Low to High</option>
            <option value="PRICE_HIGH">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* DESTINATION & DURATION SUB-FILTER PILLS */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
        {/* Destination Filter */}
        <div className="pkg-duration-sub-bar" style={{ marginBottom: 0 }}>
          <span style={{ fontSize: 11, fontWeight: 800, color: '#64748b', textTransform: 'uppercase', fontFamily: "'Space Grotesk', sans-serif", display: 'flex', alignItems: 'center', gap: 4, marginRight: 6 }}>
            <span style={{ color: '#F06543' }}>📍</span> Island:
          </span>
          {ISLAND_DESTINATIONS.map((dest) => (
            <button
              key={dest.id}
              type="button"
              onClick={() => onSelectDestination && onSelectDestination(dest.id)}
              className={`pkg-dur-pill ${selectedDestination === dest.id ? 'active' : ''}`}
            >
              {dest.label}
            </button>
          ))}
        </div>

        {/* Duration Filter */}
        <div className="pkg-duration-sub-bar" style={{ marginBottom: 0 }}>
          <span style={{ fontSize: 11, fontWeight: 800, color: '#64748b', textTransform: 'uppercase', fontFamily: "'Space Grotesk', sans-serif", display: 'flex', alignItems: 'center', gap: 4, marginRight: 6 }}>
            <Clock size={13} color="#F06543" /> Duration:
          </span>
          {DURATIONS.map((dur) => (
            <button
              key={dur.id}
              type="button"
              onClick={() => onSelectDuration && onSelectDuration(dur.id)}
              className={`pkg-dur-pill ${selectedDuration === dur.id ? 'active' : ''}`}
            >
              {dur.label}
            </button>
          ))}
        </div>
      </div>

      {/* SECTION HEADER & COUNT */}
      <div className="pkg-section-title-wrap">
        <div>
          <span className="text-[11px] font-black uppercase tracking-widest text-[#F06543] font-mono block mb-1">
            CONFIRMED ISLAND ITINERARIES
          </span>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 700, color: '#0B2545', margin: 0 }}>
            {selectedCategory === 'ALL' ? 'ALL ANDAMAN HOLIDAY PACKAGES' : `${selectedCategory} TOUR PACKAGES`}
          </h2>
        </div>
        <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 800, color: '#64748b' }}>
          Showing <strong style={{ color: '#0B2545' }}>{packages.length}</strong> Packages
        </div>
      </div>

      {/* LOADING STATE */}
      {loading && (
        <div className="py-20 text-center">
          <div className="w-10 h-10 border-4 border-[#F06543] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="font-mono text-xs font-bold text-[#0B2545] uppercase tracking-wider">
            Loading Holiday Packages...
          </p>
        </div>
      )}

      {/* ERROR STATE */}
      {!loading && error && (
        <div className="p-8 rounded-3xl bg-red-50 border-2 border-red-200 text-center max-w-lg mx-auto my-12">
          <p className="text-sm font-bold text-red-700 mb-4">{error}</p>
          {onRetry && (
            <button
              onClick={onRetry}
              className="px-6 py-2.5 rounded-xl bg-red-600 text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-red-700 transition-colors"
            >
              Retry
            </button>
          )}
        </div>
      )}

      {/* EMPTY RESULTS STATE */}
      {!loading && !error && packages.length === 0 && (
        <div className="text-center py-20 bg-white rounded-3xl border-2 border-[#e2e8f0] p-8 shadow-sm">
          <div className="w-16 h-16 rounded-full bg-[#FFF0EB] border-2 border-[#F06543] flex items-center justify-center mx-auto mb-4 text-[#F06543]">
            <Search size={28} />
          </div>
          <h3 className="text-xl font-bold text-[#0B2545] mb-2 font-serif">No Packages Found</h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto mb-6">
            We couldn't find any tour packages matching your current filters. Try resetting your theme or duration filters.
          </p>
          <button
            onClick={onResetFilters}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#0B2545] to-[#F06543] text-white font-mono text-xs font-black uppercase tracking-wider shadow-md hover:scale-105 transition-all inline-flex items-center gap-2 cursor-pointer"
          >
            <RotateCcw size={14} />
            <span>Reset All Filters</span>
          </button>
        </div>
      )}

      {/* GRID VIEW */}
      {!loading && !error && packages.length > 0 && (
        <div className="pkg-results-grid">
          {packages.map((pkg) => (
            <PackageCard
              key={pkg.id || pkg._id}
              pkg={pkg}
              isWishlisted={Boolean(savedWishlist[pkg.id || pkg._id])}
              onToggleWishlist={onToggleWishlist}
              onViewDetails={onViewDetails}
            />
          ))}
        </div>
      )}
    </section>
  );
}
