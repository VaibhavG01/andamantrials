// src/components/blog/BlogCategories.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Horizontal Category Filter Pills Component with GSAP Animations

import React, { useState, useEffect } from 'react';
import { blogService } from '../../api/blogService';

const DEFAULT_BLOG_CATEGORIES = [
  'All Articles',
  'Island Guides',
  'Scuba & Watersports',
  'Ferries & Transport',
  'Honeymoon & Luxury',
  'Itineraries',
  'Local Culture',
];

export default function BlogCategories({ activeCategory, onSelectCategory }) {
  const [categories, setCategories] = useState(DEFAULT_BLOG_CATEGORIES);

  useEffect(() => {
    blogService.getCategories?.()
      ?.then((res) => {
        const list = res.data || [];
        if (Array.isArray(list) && list.length > 0) {
          const names = ['All Articles', ...list.map(c => c.name || c)];
          setCategories(names);
        }
      })
      ?.catch(() => {});
  }, []);
  return (
    <div className="blog-categories-root">
      <style>{`
        .blog-categories-root {
          max-width: 1340px;
          margin: 0 auto 24px;
          padding: 0 24px;
        }

        .category-hdr-lbl {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px;
          font-weight: 800;
          letter-spacing: 0.2em;
          color: #F06543;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .category-pills-row {
          display: flex;
          align-items: center;
          gap: 10px;
          overflow-x: auto;
          padding-bottom: 8px;
          scrollbar-width: none;
        }
        .category-pills-row::-webkit-scrollbar {
          display: none;
        }

        .cat-pill-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.05em;
          padding: 8px 18px;
          border-radius: 20px;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.25s ease;
          border: 1px solid #e2e8f0;
          background: #ffffff;
          color: #334155;
          box-shadow: 0 1px 3px rgba(0,0,0,0.04);
        }

        .cat-pill-btn:hover {
          border-color: #F06543;
          color: #0B2545;
          background: #FFF0EB;
          transform: translateY(-2px);
        }

        .cat-pill-btn.active {
          background: linear-gradient(135deg, #FF6B4A 0%, #F06543 100%);
          color: #ffffff;
          border-color: transparent;
          box-shadow: 0 4px 16px rgba(13, 148, 136, 0.35);
        }
      `}</style>

      <div className="category-hdr-lbl">EXPLORE STORIES BY TOPIC</div>
      <div className="category-pills-row">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              className={`cat-pill-btn${isActive ? ' active' : ''}`}
              onClick={() => onSelectCategory(cat)}
            >
              {cat}
            </button>
          );
        })}
      </div>
    </div>
  );
}
