// src/components/blog/FeaturedBlog.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Large Featured Blog Card Component

import React from 'react';
import { ArrowRight, Clock, Calendar, Sparkles } from 'lucide-react';

export default function FeaturedBlog({ article, onReadArticle }) {
  if (!article) return null;

  return (
    <section className="featured-blog-root">
      <style>{`
        .featured-blog-root {
          max-width: 1340px;
          margin: 0 auto 56px;
          padding: 0 24px;
        }

        .featured-blog-card {
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 28px;
          overflow: hidden;
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 0;
          box-shadow: 0 4px 24px rgba(0, 45, 98, 0.06);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .featured-blog-card:hover {
          border-color: #F06543;
          box-shadow: 0 16px 40px rgba(0, 45, 98, 0.12);
          transform: translateY(-4px);
        }
        @media (max-width: 900px) {
          .featured-blog-card { grid-template-columns: 1fr; }
        }

        .featured-img-box {
          position: relative; overflow: hidden; min-height: 340px;
        }
        .featured-img-box img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 0.6s ease;
        }
        .featured-blog-card:hover .featured-img-box img {
          transform: scale(1.06);
        }

        .featured-badge {
          position: absolute; top: 20px; left: 20px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 800; letter-spacing: 0.15em;
          color: #ffffff; background: linear-gradient(135deg, #FF6B4A, #F06543);
          padding: 6px 14px; border-radius: 16px; text-transform: uppercase;
          box-shadow: 0 4px 12px rgba(0, 45, 98, 0.3);
        }

        .featured-content-box {
          padding: 44px; display: flex; flex-direction: column; justify-content: space-between;
        }
        @media (max-width: 640px) {
          .featured-content-box { padding: 28px 24px; }
        }

        .featured-cat-tag {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 800; letter-spacing: 0.18em;
          color: #F06543; text-transform: uppercase; margin-bottom: 12px;
          display: flex; align-items: center; gap: 6px;
        }

        .featured-headline {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(28px, 3.8vw, 44px);
          font-weight: 600; color: #0B2545;
          line-height: 1.1; margin: 0 0 16px;
        }

        .featured-excerpt {
          font-family: 'Inter', sans-serif;
          font-size: 14.5px; color: #475569;
          line-height: 1.7; margin: 0 0 24px;
        }

        .featured-meta-row {
          display: flex; align-items: center; gap: 16px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 700; color: #64748b; flex-wrap: wrap;
        }

        .featured-read-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 800; letter-spacing: 0.08em;
          color: #ffffff; background: linear-gradient(135deg, #FF6B4A, #F06543);
          border: none; padding: 13px 26px; border-radius: 14px;
          cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
          transition: all 0.3s ease; box-shadow: 0 4px 16px rgba(0, 45, 98, 0.25);
          text-decoration: none; margin-top: 24px; align-self: flex-start;
        }
        .featured-read-btn:hover {
          transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0, 45, 98, 0.35);
        }
      `}</style>

      <div className="featured-blog-card" onClick={() => onReadArticle && onReadArticle(article)}>
        <div className="featured-img-box">
          <img src={article.featuredImage} alt={article.title} />
          <span className="featured-badge">FEATURED STORY</span>
        </div>

        <div className="featured-content-box">
          <div>
            <div className="featured-cat-tag">
              <Sparkles size={13} color="#F06543" />
              <span>{article.category}</span>
            </div>

            <h2 className="featured-headline">{article.title}</h2>
            <p className="featured-excerpt">{article.excerpt}</p>

            <div className="featured-meta-row">
              <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                <Clock size={13} color="#F06543" />
                {article.readingTime}
              </span>
              <span>•</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                <Calendar size={13} color="#F06543" />
                {article.date}
              </span>
            </div>
          </div>

          <button className="featured-read-btn" onClick={() => onReadArticle && onReadArticle(article)}>
            <span>READ STORY</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}
