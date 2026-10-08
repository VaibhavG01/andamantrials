// src/components/destinations/DestinationGrid.jsx
import React, { useState } from 'react';
import { Filter, Search, X, RotateCcw, Map, Grid } from 'lucide-react';
import DestinationCard from './DestinationCard';
import RealMap from '../RealMap';

const REGIONS = ['ALL', 'SOUTH ANDAMAN', 'MIDDLE ANDAMAN', 'NORTH ANDAMAN', 'NICOBAR'];

export default function DestinationGrid({
  destinations = [],
  loading = false,
  error = '',
  selectedRegion = 'ALL',
  onSelectRegion,
  searchQuery = '',
  onSearchChange,
  sortBy = 'popular',
  onChangeSortBy,
  onResetFilters,
  savedWishlist = {},
  onToggleWishlist,
  onViewDetails,
  onRetry,
}) {
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'map'

  return (
    <section className="dest-grid-section-root">
      <style>{`
        .dest-grid-section-root {
          max-width: 1340px;
          margin: 0 auto;
          padding: 20px 24px 80px;
        }

        .dest-grid-filter-bar {
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
          margin-bottom: 36px;
        }

        .dest-filter-tabs {
          display: flex;
          align-items: center;
          gap: 8px;
          overflow-x: auto;
          scrollbar-width: none;
        }

        .dest-tab-btn {
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
        .dest-tab-btn:hover {
          color: #0B2545;
          border-color: #F06543;
          background: #FFF0EB;
        }
        .dest-tab-btn.active {
          color: #ffffff;
          background: #0B2545;
          border-color: #0B2545;
          box-shadow: 0 4px 14px rgba(0, 45, 98, 0.25);
        }

        .dest-search-box {
          position: relative;
          display: flex;
          align-items: center;
        }

        .dest-grid-search-input {
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
        .dest-grid-search-input:focus {
          border-color: #F06543;
          background: #ffffff;
          width: 260px;
          box-shadow: 0 0 0 3px rgba(13, 148, 136, 0.15);
        }

        .dest-sort-select {
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
        .dest-sort-select:focus {
          border-color: #F06543;
        }

        .dest-results-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        @media (max-width: 1200px) {
          .dest-results-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 820px) {
          .dest-results-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 540px) {
          .dest-results-grid { grid-template-columns: 1fr; }
        }

        .dest-section-title-wrap {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 24px;
        }
      `}</style>

      {/* FILTER BAR */}
      <div className="dest-grid-filter-bar">
        {/* Region Tabs */}
        <div className="dest-filter-tabs">
          <span className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest mr-1 font-mono flex items-center gap-1">
            <Filter size={12} color="#F06543" /> REGION:
          </span>
          {REGIONS.map((reg) => (
            <button
              key={reg}
              type="button"
              onClick={() => onSelectRegion && onSelectRegion(reg)}
              className={`dest-tab-btn ${selectedRegion === reg ? 'active' : ''}`}
            >
              {reg}
            </button>
          ))}
        </div>

        {/* Right Controls: Search + Sort + Map View Toggle */}
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="dest-search-box flex-1 sm:flex-none">
            <input
              type="text"
              placeholder="Search islands or spots..."
              value={searchQuery}
              onChange={(e) => onSearchChange && onSearchChange(e.target.value)}
              className="dest-grid-search-input"
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
            className="dest-sort-select"
          >
            <option value="popular">Most Popular</option>
            <option value="rating">Highest Rated</option>
            <option value="reviews">Most Reviews</option>
            <option value="priceAsc">Price: Low to High</option>
          </select>

          <button
            type="button"
            onClick={() => setViewMode(viewMode === 'grid' ? 'map' : 'grid')}
            className={`dest-tab-btn flex items-center gap-1.5 ${viewMode === 'map' ? 'active' : ''}`}
          >
            {viewMode === 'grid' ? <Map size={13} /> : <Grid size={13} />}
            <span className="hidden sm:inline">{viewMode === 'grid' ? 'MAP VIEW' : 'GRID VIEW'}</span>
          </button>
        </div>
      </div>

      {/* SECTION HEADER & COUNT */}
      <div className="dest-section-title-wrap">
        <div>
          <span className="text-[11px] font-black uppercase tracking-widest text-[#F06543] font-mono block mb-1">
            VERIFIED ISLAND DIRECTORY
          </span>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 700, color: '#0B2545', margin: 0 }}>
            {selectedRegion === 'ALL' ? 'ALL ANDAMAN ISLAND DESTINATIONS' : `${selectedRegion} ISLES`}
          </h2>
        </div>
        <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 800, color: '#64748b' }}>
          Showing <strong style={{ color: '#0B2545' }}>{destinations.length}</strong> Islands
        </div>
      </div>

      {/* MAP VIEW */}
      {viewMode === 'map' && (
        <div className="w-full h-[540px] rounded-3xl overflow-hidden border-2 border-[#e2e8f0] relative shadow-xl mb-12">
          <RealMap visible={true} isNight={true} />
        </div>
      )}

      {/* LOADING STATE */}
      {loading && (
        <div className="py-20 text-center">
          <div className="w-10 h-10 border-4 border-[#F06543] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="font-mono text-xs font-bold text-[#0B2545] uppercase tracking-wider">
            Loading Island Destinations...
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
      {!loading && !error && destinations.length === 0 && (
        <div className="text-center py-20 bg-white rounded-3xl border-2 border-[#e2e8f0] p-8 shadow-sm">
          <div className="w-16 h-16 rounded-full bg-[#FFF0EB] border-2 border-[#F06543] flex items-center justify-center mx-auto mb-4 text-[#F06543]">
            <Search size={28} />
          </div>
          <h3 className="text-xl font-bold text-[#0B2545] mb-2 font-serif">No Islands Found</h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto mb-6">
            We couldn't find any destinations matching your current filters. Try changing your region or search keywords.
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
      {!loading && !error && viewMode === 'grid' && destinations.length > 0 && (
        <div className="dest-results-grid">
          {destinations.map((dest, index) => (
            <DestinationCard
              key={`${dest.id || dest.slug || 'dest'}-${index}`}
              destination={dest}
              isWishlisted={Boolean(savedWishlist[dest.id])}
              onToggleWishlist={onToggleWishlist}
              onViewDetails={onViewDetails}
            />
          ))}
        </div>
      )}
    </section>
  );
}
