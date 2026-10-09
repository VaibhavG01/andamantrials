// src/components/packages/PackageCard.jsx
import React from 'react';
import { MapPin, Clock, Star, ArrowRight, Heart, Check, Ship, Building2 } from 'lucide-react';

export default function PackageCard({
  pkg,
  isWishlisted,
  onToggleWishlist,
  onViewDetails,
}) {
  if (!pkg) return null;

  const handleCardClick = () => {
    if (onViewDetails) {
      onViewDetails(pkg);
    } else {
      window.history.pushState({}, '', `/package-details?id=${pkg.id || pkg._id}`);
      window.dispatchEvent(new Event('popstate'));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const name = pkg.name || 'Classic Andaman Island Hop';
  const duration = pkg.duration || '6D / 5N';
  const category = (pkg.category || 'BESTSELLER').toUpperCase();
  const rating = Number(pkg.rating || 4.9).toFixed(1);
  const reviewsCount = pkg.reviewsCount || 120;
  const destinations = pkg.destinations || 'Port Blair • Havelock • Neil';
  const price = typeof pkg.price === 'number' ? pkg.price : parseInt(String(pkg.price || '28500').replace(/,/g, ''));
  const originalPrice = pkg.originalPrice ? Number(pkg.originalPrice) : Math.round(price * 1.25);
  const image = pkg.image || pkg.heroImage || 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80';

  let tags = ['Catamaran Ferry', '4★ Beach Resort'];
  if (Array.isArray(pkg.tags) && pkg.tags.length > 0) {
    tags = pkg.tags;
  } else if (typeof pkg.tags === 'string' && pkg.tags.trim()) {
    try {
      const parsed = JSON.parse(pkg.tags);
      if (Array.isArray(parsed)) tags = parsed;
    } catch (e) {
      tags = pkg.tags.split(',').map(s => s.trim());
    }
  }

  return (
    <div className="pkg-card-root" onClick={handleCardClick}>
      <style>{`
        .pkg-card-root {
          background: #ffffff;
          border: 2px solid #e2e8f0;
          border-radius: 24px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 20px rgba(0, 45, 98, 0.05);
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
          position: relative;
        }

        .pkg-card-root:hover {
          transform: translateY(-8px);
          border-color: #F06543;
          box-shadow: 0 20px 45px rgba(0, 45, 98, 0.14);
        }

        .pkg-card-img-box {
          position: relative;
          height: 210px;
          overflow: hidden;
          background: #f1f5f9;
        }
        .pkg-card-img-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .pkg-card-root:hover .pkg-card-img-box img {
          transform: scale(1.08);
        }

        .pkg-card-badge {
          position: absolute;
          top: 14px;
          left: 14px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 0.08em;
          color: #0B2545;
          background: #ffffff;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
          padding: 5px 14px;
          border-radius: 16px;
          border: 1.5px solid #e2e8f0;
          text-transform: uppercase;
        }

        .pkg-card-wishlist {
          position: absolute;
          top: 14px;
          right: 14px;
          width: 34px;
          height: 34px;
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #64748b;
          cursor: pointer;
          transition: all 0.2s ease;
          border-radius: 50%;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
          z-index: 5;
        }
        .pkg-card-wishlist:hover {
          color: #ff4f7b;
          background: #ffffff;
          border-color: #ff4f7b;
          transform: scale(1.1);
        }

        .pkg-card-body {
          padding: 22px;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .pkg-card-location {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11px;
          font-weight: 800;
          color: #F06543;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 6px;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .pkg-card-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 17px;
          font-weight: 900;
          color: #0B2545;
          margin-bottom: 6px;
          line-height: 1.3;
          transition: color 0.25s ease;
        }
        .pkg-card-root:hover .pkg-card-title {
          color: #F06543;
        }

        .pkg-card-desc {
          font-size: 13px;
          font-weight: 500;
          color: #64748b;
          line-height: 1.55;
          margin-bottom: 14px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .pkg-card-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 16px;
        }
        .pkg-chip {
          font-family: 'Inter', sans-serif;
          font-size: 11.5px;
          font-weight: 600;
          color: #334155;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          padding: 3px 9px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .pkg-card-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 800;
          color: #475569;
          padding-top: 14px;
          border-top: 1.5px solid #f1f5f9;
        }

        .pkg-card-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px;
          font-weight: 900;
          color: #0B2545;
          background: #FFF0EB;
          border: 2px solid #F06543;
          padding: 12px 16px;
          border-radius: 14px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: all 0.25s ease;
          width: 100%;
          margin-top: 14px;
          letter-spacing: 0.04em;
        }

        .pkg-card-root:hover .pkg-card-btn {
          background: #0B2545;
          color: #ffffff;
          border-color: #0B2545;
          box-shadow: 0 6px 20px rgba(0, 45, 98, 0.28);
        }
      `}</style>

      {/* Image Box */}
      <div className="pkg-card-img-box">
        <img src={image} alt={name} />
        <span className="pkg-card-badge">{category}</span>

        <button
          onClick={(e) => {
            e.stopPropagation();
            if (onToggleWishlist) onToggleWishlist(pkg.id || pkg._id, e);
          }}
          className="pkg-card-wishlist"
          title="Save to Wishlist"
        >
          <Heart className={`w-3.5 h-3.5 ${isWishlisted ? 'fill-[#ff4f7b] text-[#ff4f7b]' : ''}`} />
        </button>
      </div>

      {/* Card Body */}
      <div className="pkg-card-body">
        <div>
          <div className="pkg-card-location">
            <MapPin size={11} color="#F06543" />
            <span>{destinations}</span>
          </div>

          <div className="pkg-card-title">{name}</div>
          <p className="pkg-card-desc">{pkg.description || 'All-inclusive Andaman itinerary featuring confirmed private catamarans, luxury resort stays & guided beach excursions.'}</p>

          <div className="pkg-card-chips">
            {tags.slice(0, 2).map((tag, idx) => (
              <span key={idx} className="pkg-chip">
                <Check size={11} color="#F06543" />
                <span>{tag}</span>
              </span>
            ))}
          </div>

          <div className="pkg-card-meta">
            <span className="flex items-center gap-1">
              <Clock size={12} color="#F06543" />
              {duration}
            </span>
            <span style={{ color: '#94a3b8' }}>•</span>
            <span className="flex items-center gap-1">
              <Star size={12} className="fill-[#ffd700] text-[#ffd700]" />
              {rating} ({reviewsCount})
            </span>
            <span style={{ color: '#94a3b8' }}>•</span>
            <span className="font-mono text-sm font-black text-[#0B2545]">
              ₹{price > 0 ? price.toLocaleString() : 'Enquire'}
            </span>
          </div>
        </div>

        <button
          className="pkg-card-btn"
          onClick={(e) => {
            e.stopPropagation();
            handleCardClick();
          }}
        >
          <span>EXPLORE ITINERARY</span>
          <ArrowRight size={13} />
        </button>
      </div>
    </div>
  );
}
