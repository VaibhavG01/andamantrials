// src/components/stays/StaySort.jsx
import React from 'react';
import { LayoutGrid, Map, ArrowUpDown } from 'lucide-react';

export default function StaySort({ sortBy, setSortBy, resultCount, isMapView, setIsMapView }) {
  return (
    <div className="stay-sort-bar">
      <style>{`
        .stay-sort-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 28px;
          flex-wrap: wrap;
          gap: 16px;
          background: #ffffff;
          padding: 16px 20px;
          border-radius: 20px;
          border: 2px solid #E2E8F0;
          box-shadow: 0 4px 16px rgba(11, 37, 69, 0.03);
        }

        .results-count-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13.5px;
          font-weight: 800;
          color: #0B2545;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          padding: 8px 16px;
          border-radius: 12px;
        }

        .count-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #F06543;
          display: inline-block;
          box-shadow: 0 0 10px rgba(240, 101, 67, 0.6);
        }

        .sort-controls-wrapper {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        .view-segmented-switch {
          display: flex;
          gap: 4px;
          background: #F1F5F9;
          padding: 4px;
          border-radius: 14px;
          border: 1px solid #E2E8F0;
        }

        .view-toggle-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 800;
          padding: 7px 16px;
          border-radius: 10px;
          cursor: pointer;
          border: none;
          background: transparent;
          color: #64748B;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          letter-spacing: 0.05em;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .view-toggle-btn:hover {
          color: #0B2545;
        }

        .view-toggle-btn.active {
          background: #0B2545;
          color: #ffffff;
          box-shadow: 0 2px 8px rgba(11, 37, 69, 0.2);
        }

        .sort-dropdown-container {
          position: relative;
          display: flex;
          align-items: center;
        }

        .sort-select-input {
          background: #ffffff;
          border: 1.5px solid #CBD5E1;
          border-radius: 12px;
          padding: 9px 36px 9px 14px;
          color: #0B2545;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 700;
          outline: none;
          cursor: pointer;
          appearance: none;
          -webkit-appearance: none;
          transition: all 0.2s ease;
        }

        .sort-select-input:hover, .sort-select-input:focus {
          border-color: #F06543;
          box-shadow: 0 0 0 3px rgba(240, 101, 67, 0.1);
        }

        .sort-select-input option {
          background: #ffffff;
          color: #0F172A;
          font-size: 13px;
          padding: 6px;
        }

        .sort-select-icon {
          position: absolute;
          right: 12px;
          pointer-events: none;
          color: #64748B;
        }
      `}</style>

      {/* Results Count Badge */}
      <div className="results-count-badge">
        <span className="count-dot" />
        <span>{resultCount} STAYS FOUND</span>
      </div>

      {/* Controls */}
      <div className="sort-controls-wrapper">
        {/* Segmented View Switcher */}
        <div className="view-segmented-switch">
          <button
            type="button"
            className={`view-toggle-btn${!isMapView ? ' active' : ''}`}
            onClick={() => setIsMapView(false)}
          >
            <LayoutGrid size={14} />
            <span>LIST VIEW</span>
          </button>
          <button
            type="button"
            className={`view-toggle-btn${isMapView ? ' active' : ''}`}
            onClick={() => setIsMapView(true)}
          >
            <Map size={14} />
            <span>MAP VIEW</span>
          </button>
        </div>

        {/* Sort Select */}
        <div className="sort-dropdown-container">
          <select 
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value)} 
            className="sort-select-input"
            aria-label="Sort stays"
          >
            <option value="RECOMMENDED">SORT: Recommended</option>
            <option value="LOW_TO_HIGH">Price: Low to High</option>
            <option value="HIGH_TO_LOW">Price: High to Low</option>
            <option value="RATING">Highest Rating</option>
          </select>
          <ArrowUpDown size={13} className="sort-select-icon" />
        </div>
      </div>
    </div>
  );
}
