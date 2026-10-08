// src/components/blog/BlogSearch.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Premium Glass Search Bar Component for Blog Filtering

import React from 'react';
import { Search, X } from 'lucide-react';

export default function BlogSearch({ searchQuery, setSearchQuery }) {
  return (
    <div className="blog-search-root">
      <style>{`
        .blog-search-root {
          max-width: 1340px;
          margin: 0 auto 36px;
          padding: 0 24px;
        }

        .blog-search-box {
          position: relative;
          max-width: 600px;
          margin: 0 auto;
        }

        .blog-search-input {
          width: 100%;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          color: #334155;
          background: #f8fafc;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1.5px solid #e2e8f0;
          border-radius: 20px;
          padding: 14px 48px;
          outline: none;
          transition: all 0.25s ease;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
          box-sizing: border-box;
        }

        .blog-search-input:focus {
          border-color: #F06543;
          box-shadow: 0 10px 36px rgba(22, 217, 255, 0.25);
        }

        .search-icon-left {
          position: absolute; left: 16px; top: 50%;
          transform: translateY(-50%); color: #F06543; pointer-events: none;
        }

        .search-clear-btn {
          position: absolute; right: 16px; top: 50%;
          transform: translateY(-50%); background: transparent; color: #0f172a;
          border: none; color: #64748b; cursor: pointer; display: flex; align-items: center;
        }
        .search-clear-btn:hover { color: #ffffff; }
      `}</style>

      <div className="blog-search-box">
        <Search size={18} className="search-icon-left" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search Andaman stories, guides, and island experiences..."
          className="blog-search-input"
        />
        {searchQuery && (
          <button onClick={() => setSearchQuery('')} className="search-clear-btn">
            <X size={16} />
          </button>
        )}
      </div>
    </div>
  );
}
