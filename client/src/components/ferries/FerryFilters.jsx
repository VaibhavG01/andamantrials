// src/components/ferries/FerryFilters.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Smart Ferry Filters & Sorting Controls Component

import React from 'react';
import { Funnel, ArrowUpDown, RefreshCw } from 'lucide-react';

export default function FerryFilters({
  operatorFilter,
  setOperatorFilter,
  sortBy,
  setSortBy,
  onResetFilters,
}) {
  return (
    <div className="ferry-filters-root">
      <style>{`
        .ferry-filters-root {
          max-width: 1340px;
          margin: 0 auto 24px;
          padding: 0 24px;
        }

        .ferry-filters-bar {
          background: #ffffff;
          backdrop-filter: blur(16px);
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          padding: 16px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
        }

        .filter-group {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .filter-lbl {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 800;
          color: #64748b;
          letter-spacing: 0.08em;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .filter-select {
          font-family: 'Inter', sans-serif;
          font-size: 12.5px;
          color: #0f172a;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 8px 14px;
          outline: none;
          cursor: pointer;
        }
        .filter-select:focus {
          border-color: #F06543;
        }

        .reset-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px;
          font-weight: 800;
          color: #F06543;
          background: rgba(22, 217, 255, 0.1);
          border: 1px solid rgba(22, 217, 255, 0.3);
          padding: 8px 14px;
          border-radius: 12px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 5px;
        }
      `}</style>

      <div className="ferry-filters-bar">
        <div className="filter-group">
          <span className="filter-lbl">
            <Funnel size={13} color="#F06543" />
            OPERATOR:
          </span>
          <select
            value={operatorFilter}
            onChange={(e) => setOperatorFilter(e.target.value)}
            className="filter-select"
          >
            <option value="ALL">All Operators</option>
            <option value="Nautika">Nautika</option>
            <option value="Makruzz">Makruzz</option>
            <option value="Green Ocean">Green Ocean</option>
            <option value="ITT Majestic">ITT Majestic</option>
          </select>
        </div>

        <div className="filter-group">
          <span className="filter-lbl">
            <ArrowUpDown size={13} color="#F06543" />
            SORT BY:
          </span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="filter-select"
          >
            <option value="EARLIEST">Earliest Departure</option>
            <option value="LOWEST_PRICE">Lowest Price</option>
            <option value="SHORTEST">Shortest Duration</option>
          </select>

          <button onClick={onResetFilters} className="reset-btn">
            <RefreshCw size={11} />
            RESET
          </button>
        </div>
      </div>
    </div>
  );
}
