// src/components/destinations/DestinationCard.jsx
import React from 'react';
import { MapPin, Clock, Star, ArrowRight, Heart, Check, Compass } from 'lucide-react';

export default function DestinationCard({
  destination,
  isWishlisted,
  onToggleWishlist,
  onViewDetails,
}) {
  if (!destination) return null;

  const handleCardClick = () => {
    if (onViewDetails) {
      onViewDetails(destination.id || destination.slug);
    } else {
      window.history.pushState({}, '', `/destination-details?id=${destination.id || destination.slug}`);
      window.dispatchEvent(new Event('popstate'));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const name = destination.name || 'HAVELOCK ISLAND';
  const alias = destination.alias || 'Swaraj Dweep';
  const region = destination.region || 'South Andaman';
  const rating = Number(destination.rating || 4.8).toFixed(1);
  const reviewsCount = destination.reviews || 350;
  const ferryTime = destination.ferryTime || '90 min';
  const startingPrice = destination.startingPrice || '1,499';
  const image = destination.image || destination.heroImage || 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?auto=format&fit=crop&w=800&q=80';

  const tags = destination.tags || ['Turquoise Lagoons', 'PADI Scuba Reefs'];

  return (
    <div className="dest-card-root" onClick={handleCardClick}>
      <style>{`
        .dest-card-root {
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

        .dest-card-root:hover {
          transform: translateY(-8px);
          border-color: #F06543;
          box-shadow: 0 20px 45px rgba(0, 45, 98, 0.14);
        }

        .dest-card-img-box {
          position: relative;
          height: 210px;
          overflow: hidden;
          background: #f1f5f9;
        }
        .dest-card-img-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .dest-card-root:hover .dest-card-img-box img {
          transform: scale(1.08);
        }

        .dest-card-badge {
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

        .dest-card-wishlist {
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
        .dest-card-wishlist:hover {
          color: #ff4f7b;
          background: #ffffff;
          border-color: #ff4f7b;
          transform: scale(1.1);
        }

        .dest-card-body {
          padding: 22px;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .dest-card-location {
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

        .dest-card-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 17px;
          font-weight: 900;
          color: #0B2545;
          margin-bottom: 6px;
          line-height: 1.3;
          transition: color 0.25s ease;
        }
        .dest-card-root:hover .dest-card-title {
          color: #F06543;
        }

        .dest-card-desc {
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

        .dest-card-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 16px;
        }
        .dest-chip {
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

        .dest-card-meta {
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

        .dest-card-btn {
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

        .dest-card-root:hover .dest-card-btn {
          background: #0B2545;
          color: #ffffff;
          border-color: #0B2545;
          box-shadow: 0 6px 20px rgba(0, 45, 98, 0.28);
        }
      `}</style>

      {/* Image Box */}
      <div className="dest-card-img-box">
        <img src={image} alt={name} />
        <span className="dest-card-badge">{destination.category || region}</span>

        <button
          onClick={(e) => {
            e.stopPropagation();
            if (onToggleWishlist) onToggleWishlist(destination.id, e);
          }}
          className="dest-card-wishlist"
          title="Save to Wishlist"
        >
          <Heart className={`w-3.5 h-3.5 ${isWishlisted ? 'fill-[#ff4f7b] text-[#ff4f7b]' : ''}`} />
        </button>
      </div>

      {/* Card Body */}
      <div className="dest-card-body">
        <div>
          <div className="dest-card-location">
            <MapPin size={11} color="#F06543" />
            <span>{alias} • {region}</span>
          </div>

          <div className="dest-card-title">{name}</div>
          <p className="dest-card-desc">{destination.description || destination.shortDescription}</p>

          <div className="dest-card-chips">
            {tags.slice(0, 2).map((tag, idx) => (
              <span key={idx} className="dest-chip">
                <Check size={11} color="#F06543" />
                <span>{tag}</span>
              </span>
            ))}
          </div>

          <div className="dest-card-meta">
            <span className="flex items-center gap-1">
              <Clock size={12} color="#F06543" />
              {ferryTime}
            </span>
            <span style={{ color: '#94a3b8' }}>•</span>
            <span className="flex items-center gap-1">
              <Star size={12} className="fill-[#ffd700] text-[#ffd700]" />
              {rating} ({reviewsCount})
            </span>
            <span style={{ color: '#94a3b8' }}>•</span>
            <span className="font-mono text-sm font-black text-[#0B2545]">
              Starts ₹{startingPrice}
            </span>
          </div>
        </div>

        <button
          className="dest-card-btn"
          onClick={(e) => {
            e.stopPropagation();
            handleCardClick();
          }}
        >
          <span>EXPLORE ISLAND GUIDE</span>
          <ArrowRight size={13} />
        </button>
      </div>
    </div>
  );
}
