// src/components/stays/StayCard.jsx
import React, { useState } from 'react';
import { MapPin, Star, Heart, ArrowRight, Check, Wifi, Waves, Utensils, Sparkles, ShieldCheck } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

// Helper to format stay types nicely with luxury badges & colors
const formatStayType = (type) => {
  const t = String(type || '').toUpperCase();
  switch (t) {
    case 'LUXURY_VILLA':
    case 'LUXURY VILLA':
    case 'LUXURY STAYS':
      return { label: 'Luxury Villa', bg: '#FAF5FF', color: '#7C3AED', border: '#E9D5FF', icon: '👑' };
    case 'BEACH_RESORT':
    case 'BEACH RESORT':
    case 'BEACHFRONT RESORTS':
      return { label: 'Beach Resort', bg: '#F0F9FF', color: '#0284C7', border: '#BAE6FD', icon: '🏖️' };
    case 'BOUTIQUE_RESORT':
    case 'BOUTIQUE RESORT':
    case 'BOUTIQUE HOTELS':
      return { label: 'Boutique Resort', bg: '#ECFDF5', color: '#059669', border: '#A7F3D0', icon: '✨' };
    case 'ECO_LODGE':
    case 'ECO LODGE':
    case 'ECO WILDERNESS LODGE':
      return { label: 'Eco Lodge', bg: '#F0FDF4', color: '#16A34A', border: '#BBF7D0', icon: '🌿' };
    case 'HERITAGE_HOTEL':
    case 'HERITAGE HOTEL':
      return { label: 'Heritage Hotel', bg: '#FFFBEB', color: '#D97706', border: '#FDE68A', icon: '🏛️' };
    default:
      return { 
        label: (type || 'Island Stay').replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()), 
        bg: '#F8FAFC', 
        color: '#475569', 
        border: '#E2E8F0', 
        icon: '🏨' 
      };
  }
};

export default function StayCard({ stay, onViewStay }) {
  const { requireAuth } = useAuth();
  const [isWishlisted, setIsWishlisted] = useState(false);

  if (!stay) return null;

  const typeInfo = formatStayType(stay.type || stay.category);

  const getDestinationName = () => {
    if (typeof stay.destination === 'string') return stay.destination;
    return stay.destination?.name || stay.location || 'Havelock Island';
  };

  const amenitiesList = Array.isArray(stay.amenities) && stay.amenities.length > 0
    ? stay.amenities.slice(0, 3)
    : ['Beach Access', 'Ocean View', 'Free Wi-Fi'];

  return (
    <div className="stay-card-root" onClick={() => onViewStay && onViewStay(stay)}>
      <style>{`
        .stay-card-root {
          background: #ffffff;
          border: 2px solid #E2E8F0;
          border-radius: 24px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
          box-shadow: 0 4px 20px rgba(11, 37, 69, 0.05);
          position: relative;
        }

        .stay-card-root:hover {
          transform: translateY(-6px);
          border-color: #F06543;
          box-shadow: 0 20px 40px rgba(11, 37, 69, 0.12), 0 0 20px rgba(240, 101, 67, 0.12);
        }

        .stay-card-img-box {
          position: relative;
          height: 220px;
          overflow: hidden;
          background: #0f172a;
        }
        .stay-card-img-box img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 0.65s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .stay-card-root:hover .stay-card-img-box img {
          transform: scale(1.08);
        }

        .stay-card-gradient-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(180deg, rgba(11, 37, 69, 0.25) 0%, rgba(11, 37, 69, 0) 40%, rgba(11, 37, 69, 0.65) 100%);
          pointer-events: none;
        }

        .stay-type-badge {
          position: absolute; top: 14px; left: 14px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11.5px; font-weight: 800; letter-spacing: 0.05em;
          padding: 6px 14px; border-radius: 30px;
          display: inline-flex; align-items: center; gap: 5px;
          backdrop-filter: blur(10px);
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);
          z-index: 2;
        }

        .wishlist-btn {
          position: absolute; top: 14px; right: 14px;
          width: 36px; height: 36px; border-radius: 50%;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.6);
          display: flex; align-items: center; justify-content: center;
          color: #64748b; cursor: pointer; transition: all 0.25s ease;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          z-index: 2;
        }
        .wishlist-btn:hover {
          color: #ef4444; background: #ffffff; transform: scale(1.1);
        }

        .rating-chip {
          position: absolute; bottom: 12px; right: 14px;
          background: rgba(11, 37, 69, 0.88);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #ffffff;
          padding: 4px 10px; border-radius: 20px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 800;
          display: flex; align-items: center; gap: 4px;
          z-index: 2;
        }

        .stay-card-body {
          padding: 22px; flex: 1; display: flex; flex-direction: column; justify-content: space-between;
          background: #ffffff;
        }

        .stay-card-route {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 800; color: #F06543;
          letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 6px;
          display: flex; align-items: center; gap: 5px;
        }

        .stay-card-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 18.5px; font-weight: 900; color: #0B2545;
          margin-bottom: 8px; line-height: 1.3;
          display: -webkit-box; -webkit-line-clamp: 1;
          -webkit-box-orient: vertical; overflow: hidden;
        }

        .stay-card-desc {
          font-family: 'Inter', sans-serif;
          font-size: 13px; color: #475569; line-height: 1.55;
          margin-bottom: 14px; display: -webkit-box; -webkit-line-clamp: 2;
          -webkit-box-orient: vertical; overflow: hidden;
        }

        .amenities-row {
          display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 18px;
        }
        .amenity-chip {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11px; font-weight: 700; color: #334155;
          background: #F1F5F9; border: 1px solid #E2E8F0;
          padding: 3px 10px; border-radius: 8px;
        }

        .stay-card-footer {
          display: flex; align-items: center; justify-content: space-between;
          padding-top: 14px; border-top: 1.5px solid #F1F5F9;
          margin-top: auto; gap: 12px;
        }

        .price-label {
          font-family: 'Inter', sans-serif; font-size: 11px; font-weight: 600; color: #64748b;
          text-transform: uppercase; letter-spacing: 0.05em; display: block;
        }
        .price-value {
          font-family: 'Space Grotesk', sans-serif; font-size: 19px; font-weight: 900; color: #0B2545;
        }
        .price-period {
          font-size: 12px; font-weight: 600; color: #64748b;
        }

        .stay-card-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 900; color: #ffffff;
          background: #0B2545;
          border: none;
          padding: 10px 18px; border-radius: 12px; cursor: pointer;
          display: inline-flex; align-items: center; justify-content: center; gap: 6px;
          letter-spacing: 0.04em;
          transition: all 0.25s ease;
          box-shadow: 0 4px 14px rgba(11, 37, 69, 0.15);
          white-space: nowrap;
        }

        .stay-card-root:hover .stay-card-btn {
          background: #F06543; color: #ffffff;
          box-shadow: 0 6px 18px rgba(240, 101, 67, 0.35);
          transform: translateY(-1px);
        }
      `}</style>

      {/* Image Box */}
      <div className="stay-card-img-box">
        <img src={stay.heroImage || stay.image} alt={stay.name} loading="lazy" />
        <div className="stay-card-gradient-overlay" />
        
        {/* Type Badge */}
        <span 
          className="stay-type-badge" 
          style={{ background: typeInfo.bg, color: typeInfo.color, border: `1px solid ${typeInfo.border}` }}
        >
          <span>{typeInfo.icon}</span>
          <span>{typeInfo.label}</span>
        </span>
        
        {/* Wishlist Button */}
        <button
          className="wishlist-btn"
          aria-label="Wishlist resort"
          onClick={(e) => {
            e.stopPropagation();
            setIsWishlisted(!isWishlisted);
          }}
        >
          <Heart size={16} fill={isWishlisted ? '#ef4444' : 'none'} color={isWishlisted ? '#ef4444' : '#64748b'} />
        </button>

        {/* Rating Floating Chip */}
        <div className="rating-chip">
          <Star size={12} className="fill-[#F59E0B] text-[#F59E0B]" />
          <span>{stay.rating || '4.8'}</span>
          <span style={{ opacity: 0.6, fontSize: 10 }}>({stay.reviewCount || stay.reviewsCount || 85})</span>
        </div>
      </div>

      {/* Card Body */}
      <div className="stay-card-body">
        <div>
          {/* Location */}
          <div className="stay-card-route">
            <MapPin size={13} color="#F06543" />
            <span>{getDestinationName()}</span>
          </div>

          {/* Title */}
          <h3 className="stay-card-title" title={stay.name}>
            {stay.name}
          </h3>

          {/* Description */}
          <p className="stay-card-desc">
            {stay.shortDescription || stay.tagline || stay.description || 'Experience serene tropical luxury, world-class island hospitality, and breathtaking coastal vistas.'}
          </p>

          {/* Amenities Badges */}
          <div className="amenities-row">
            {amenitiesList.map((amenity, i) => (
              <span key={i} className="amenity-chip">
                {amenity}
              </span>
            ))}
          </div>
        </div>

        {/* Footer with Price & Button */}
        <div className="stay-card-footer">
          <div>
            <span className="price-label">Per Night</span>
            <div className="price-value">
              ₹{(stay.pricePerNight || 8500).toLocaleString()}
              <span className="price-period"> /night</span>
            </div>
          </div>

          <button
            className="stay-card-btn"
            onClick={(e) => {
              e.stopPropagation();
              onViewStay && onViewStay(stay);
            }}
          >
            <span>EXPLORE RESORT</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
