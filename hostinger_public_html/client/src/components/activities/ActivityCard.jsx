// src/components/activities/ActivityCard.jsx
import React from 'react';
import { MapPin, Clock, Star, ArrowRight, Heart, Check, ShieldCheck, Eye, Sparkles } from 'lucide-react';

export default function ActivityCard({
  activity,
  isWishlisted,
  onToggleWishlist,
  onOpenBooking,
  onViewDetails,
}) {
  if (!activity) return null;

  const handleCardClick = () => {
    if (onViewDetails) {
      onViewDetails(activity.slug);
    } else {
      window.history.pushState({}, '', `/activities/${activity.slug}`);
      window.dispatchEvent(new Event('popstate'));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBookNowClick = (e) => {
    if (e) e.stopPropagation();
    if (onOpenBooking) {
      onOpenBooking(activity);
    } else {
      const slug = activity.slug || activity.id;
      window.history.pushState({}, '', `/activity-booking?id=${slug}`);
      window.dispatchEvent(new Event('popstate'));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const getFormattedLocation = () => {
    if (activity.locations && activity.locations.length > 0) {
      return activity.locations.map(l => l.locationName.replace(/ Island/gi, '').replace(/ Beach/gi, '')).join(' • ').toUpperCase();
    }
    if (activity.location) {
      return activity.location.toUpperCase().replace(/\s*&\s*/g, ' • ').replace(/,\s*/g, ' • ');
    }
    return 'HAVELOCK • PORT BLAIR';
  };

  const getFormattedDescription = () => {
    if (activity.overview) return activity.overview;
    if (activity.tagline) return activity.tagline;
    if (activity.description) return activity.description;
    return 'Explore pristine underwater corals and crystal ocean waters with certified safety gear included.';
  };

  const rating = Number(activity.rating || 5.0).toFixed(2);
  const reviewsCount = activity.reviewsCount || activity.reviewCount || 98;
  const sellingPrice = Number(activity.price || 0);
  const originalPrice = Number(activity.originalPrice) || (sellingPrice > 0 ? Math.round(sellingPrice * 1.2) : 0);
  const discountPercent = (originalPrice > sellingPrice && originalPrice > 0)
    ? Math.round(((originalPrice - sellingPrice) / originalPrice) * 100)
    : 0;

  // Parse features safely
  let featuresList = ['Certified Instructor', 'Free 4K HD Video'];
  if (Array.isArray(activity.features) && activity.features.length > 0) {
    featuresList = activity.features;
  } else if (typeof activity.features === 'string' && activity.features.trim()) {
    try {
      const parsed = JSON.parse(activity.features);
      if (Array.isArray(parsed)) featuresList = parsed;
    } catch (e) {
      featuresList = activity.features.split(',').map(s => s.trim());
    }
  }

  return (
    <div className="act-card-root" onClick={handleCardClick}>
      <style>{`
        .act-card-root {
          background: #ffffff;
          border: 2px solid #ebded2;
          border-radius: 24px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 20px rgba(11, 37, 69, 0.05);
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
          position: relative;
        }

        .act-card-root:hover {
          transform: translateY(-8px);
          border-color: #f06543;
          box-shadow: 0 20px 45px rgba(11, 37, 69, 0.14);
        }

        .act-card-img-box {
          position: relative;
          height: 210px;
          overflow: hidden;
          background: #f1f5f9;
        }
        .act-card-img-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .act-card-root:hover .act-card-img-box img {
          transform: scale(1.08);
        }

        .act-card-badge {
          position: absolute;
          top: 14px;
          left: 14px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 0.08em;
          color: #0b2545;
          background: #ffffff;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
          padding: 5px 14px;
          border-radius: 16px;
          border: 1.5px solid #ebded2;
          text-transform: uppercase;
        }

        .act-card-wishlist {
          position: absolute;
          top: 14px;
          right: 14px;
          width: 34px;
          height: 34px;
          background: #ffffff;
          border: 1.5px solid #ebded2;
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
        .act-card-wishlist:hover {
          color: #f06543;
          background: #ffffff;
          border-color: #f06543;
          transform: scale(1.1);
        }

        .act-card-body {
          padding: 22px;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .act-card-location {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11px;
          font-weight: 800;
          color: #f06543;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 6px;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .act-card-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 17px;
          font-weight: 900;
          color: #0b2545;
          margin-bottom: 6px;
          line-height: 1.3;
          transition: color 0.25s ease;
        }
        .act-card-root:hover .act-card-title {
          color: #f06543;
        }

        .act-card-desc {
          font-size: 13px;
          font-weight: 500;
          color: #5c6f84;
          line-height: 1.55;
          margin-bottom: 14px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .act-card-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 16px;
        }
        .act-chip {
          font-family: 'Inter', sans-serif;
          font-size: 11.5px;
          font-weight: 600;
          color: #2d3e50;
          background: #fff8f0;
          border: 1px solid #ebded2;
          padding: 3px 9px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .act-card-meta {
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

        .act-card-actions {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-top: 16px;
        }

        .act-btn-view {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.04em;
          color: #0b2545;
          background: #faf4ee;
          border: 1.5px solid #ebded2;
          padding: 11px 10px;
          border-radius: 13px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          transition: all 0.25s ease;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .act-btn-view:hover {
          background: #0b2545;
          color: #ffffff;
          border-color: #0b2545;
          transform: translateY(-2px);
          box-shadow: 0 4px 14px rgba(11, 37, 69, 0.2);
        }

        .act-btn-book {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.04em;
          color: #ffffff;
          background: linear-gradient(135deg, #ff6b4a 0%, #f06543 100%);
          border: 1.5px solid transparent;
          padding: 11px 10px;
          border-radius: 13px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          transition: all 0.25s ease;
          text-transform: uppercase;
          white-space: nowrap;
          box-shadow: 0 4px 14px rgba(240, 101, 67, 0.35);
        }

        .act-btn-book:hover {
          background: linear-gradient(135deg, #f06543 0%, #d64525 100%);
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(240, 101, 67, 0.5);
        }
      `}</style>

      {/* Image Box */}
      <div className="act-card-img-box">
        <img
          src={activity.image || activity.heroImage || 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80'}
          alt={activity.name}
        />
        <div style={{ position: 'absolute', top: 14, left: 14, display: 'flex', gap: 6, alignItems: 'center', zIndex: 2 }}>
          <span className="act-card-badge" style={{ position: 'static' }}>{activity.category || 'ADVENTURE'}</span>
          {discountPercent > 0 && (
            <span style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 10,
              fontWeight: 900,
              color: '#ffffff',
              background: '#16a34a',
              boxShadow: '0 2px 8px rgba(22, 163, 74, 0.4)',
              padding: '4px 8px',
              borderRadius: 12,
              letterSpacing: '0.04em'
            }}>
              {discountPercent}% OFF
            </span>
          )}
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            if (onToggleWishlist) onToggleWishlist(activity.id, e);
          }}
          className="act-card-wishlist"
          title="Save to Wishlist"
        >
          <Heart className={`w-3.5 h-3.5 ${isWishlisted ? 'fill-[#ff4f7b] text-[#ff4f7b]' : ''}`} />
        </button>
      </div>

      {/* Card Body */}
      <div className="act-card-body">
        <div>
          <div className="act-card-location">
            <MapPin size={11} color="#F06543" />
            <span>{getFormattedLocation()}</span>
          </div>

          <div className="act-card-title">{activity.name}</div>
          <p className="act-card-desc">{getFormattedDescription()}</p>

          <div className="act-card-chips">
            {featuresList.slice(0, 2).map((feat, idx) => (
              <span key={idx} className="act-chip">
                <Check size={11} color="#F06543" />
                <span>{feat}</span>
              </span>
            ))}
          </div>

          <div className="act-card-meta">
            <span className="flex items-center gap-1">
              <Clock size={12} color="#F06543" />
              {activity.duration || '45 Mins / 1 Hr'}
            </span>
            <span style={{ color: '#94a3b8' }}>•</span>
            <span className="flex items-center gap-1">
              <Star size={12} className="fill-[#ffd700] text-[#ffd700]" />
              {rating} ({reviewsCount})
            </span>
            <span style={{ color: '#94a3b8' }}>•</span>
            <div style={{ display: 'inline-flex', alignItems: 'baseline', gap: 5, flexWrap: 'wrap' }}>
              <span className="font-mono text-sm font-black text-[#0B2545]">
                ₹{sellingPrice > 0 ? sellingPrice.toLocaleString('en-IN') : 'Enquire'}
              </span>
              {originalPrice > sellingPrice && (
                <span style={{ fontSize: 11, color: '#94a3b8', textDecoration: 'line-through', fontWeight: 600 }}>
                  ₹{originalPrice.toLocaleString('en-IN')}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* 2 Action Buttons: View Details & Book Now */}
        <div className="act-card-actions">
          <button
            type="button"
            className="act-btn-view"
            onClick={(e) => {
              e.stopPropagation();
              handleCardClick();
            }}
            title={`View details of ${activity.name}`}
          >
            <Eye size={13} />
            <span>View Details</span>
          </button>

          <button
            type="button"
            className="act-btn-book"
            onClick={handleBookNowClick}
            title={`Book ${activity.name} now`}
          >
            <span>Book Now</span>
            <ArrowRight size={13} />
          </button>
        </div>
      </div>
    </div>
  );
}
