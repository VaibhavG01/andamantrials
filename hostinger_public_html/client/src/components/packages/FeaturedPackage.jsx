// src/components/packages/FeaturedPackage.jsx
import React from 'react';
import { Sparkles, MapPin, Clock, Star, ArrowRight, Flame, Ship, Building2, Utensils, Check } from 'lucide-react';

export default function FeaturedPackage({ pkg, onViewDetails, onPlanTrip }) {
  if (!pkg) return null;

  const pkgName = pkg.name || '6D/5N Classic Havelock & Neil Luxury Escape';
  const duration = pkg.duration || '6 Days / 5 Nights';
  const rating = Number(pkg.rating || 4.9).toFixed(1);
  const reviewsCount = pkg.reviewsCount || 380;
  const image = pkg.heroImage || pkg.image || 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85';
  const price = typeof pkg.price === 'number' ? pkg.price : parseInt(String(pkg.price || '28500').replace(/,/g, ''));
  const originalPrice = pkg.originalPrice ? Number(pkg.originalPrice) : Math.round(price * 1.25);

  const tags = Array.isArray(pkg.tags) ? pkg.tags : [
    'Private Catamaran Transfers',
    '4★ Beachfront Luxury Resort',
    'Radhanagar Sunset Tour',
    'Complimentary Scuba Dive Trial'
  ];

  return (
    <section className="featured-pkg-root">
      <style>{`
        .featured-pkg-root {
          max-width: 1340px;
          margin: 0 auto 70px;
          padding: 0 24px;
        }

        .featured-pkg-card {
          background: #ffffff;
          border: 2px solid #e2e8f0;
          border-radius: 28px;
          padding: 36px;
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 36px;
          align-items: center;
          box-shadow: 0 20px 50px rgba(0, 45, 98, 0.08);
          transition: all 0.35s ease;
        }
        .featured-pkg-card:hover {
          border-color: #F06543;
          box-shadow: 0 25px 60px rgba(0, 45, 98, 0.14);
        }
        @media (max-width: 960px) {
          .featured-pkg-card { grid-template-columns: 1fr; padding: 24px; }
        }

        .featured-pkg-img-box {
          position: relative;
          height: 380px;
          border-radius: 22px;
          overflow: hidden;
          background: #f1f5f9;
          border: 2px solid #e2e8f0;
        }
        .featured-pkg-img-box img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 0.65s ease;
        }
        .featured-pkg-card:hover .featured-pkg-img-box img {
          transform: scale(1.06);
        }

        .featured-pkg-badges {
          position: absolute; top: 16px; left: 16px;
          display: flex; align-items: center; gap: 8px; z-index: 2;
        }

        .pkg-fire-badge {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11px; font-weight: 900; letter-spacing: 0.08em;
          color: #ffffff; background: linear-gradient(135deg, #FF6B4A, #F06543);
          padding: 6px 14px; border-radius: 20px;
          display: inline-flex; align-items: center; gap: 6px;
          box-shadow: 0 4px 14px rgba(0, 45, 98, 0.3);
          text-transform: uppercase;
        }

        .pkg-sub-badge {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 10px; font-weight: 800; letter-spacing: 0.08em;
          color: #F06543; background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(8px);
          padding: 6px 12px; border-radius: 20px;
          border: 1px solid #e2e8f0;
          text-transform: uppercase;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        }

        .pkg-img-footer {
          position: absolute; bottom: 16px; left: 16px; right: 16px;
          background: rgba(255, 255, 255, 0.96);
          backdrop-filter: blur(12px);
          padding: 12px 18px; border-radius: 16px;
          border: 1.5px solid #e2e8f0;
          display: flex; align-items: center; justify-content: space-between;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          z-index: 2;
        }

        .pkg-metrics-grid {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 12px; margin: 18px 0;
        }

        .pkg-metric-box {
          background: #f8fafc; border: 1.5px solid #e2e8f0;
          border-radius: 16px; padding: 12px; text-align: center;
        }

        .pkg-spotlight-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 900; letter-spacing: 0.08em;
          color: #ffffff; background: linear-gradient(135deg, #FF6B4A 0%, #F06543 100%);
          border: 2px solid #F06543; padding: 15px 28px; border-radius: 16px;
          cursor: pointer; display: inline-flex; align-items: center; justify-content: center;
          gap: 8px; transition: all 0.3s ease; width: 100%;
          box-shadow: 0 8px 28px rgba(0, 45, 98, 0.25);
        }
        .pkg-spotlight-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 36px rgba(0, 45, 98, 0.4);
          background: linear-gradient(135deg, #F06543 0%, #0B2545 100%);
        }
      `}</style>

      <div className="featured-pkg-card">
        {/* Left Visual Box */}
        <div className="featured-pkg-img-box">
          <img src={image} alt={pkgName} />

          <div className="featured-pkg-badges">
            <div className="pkg-fire-badge">
              <Flame size={13} className="fill-white" />
              <span>BESTSELLER ITINERARY</span>
            </div>
            <div className="pkg-sub-badge">
              100% CUSTOMIZABLE
            </div>
          </div>

          <div className="pkg-img-footer">
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <Clock size={14} color="#F06543" />
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, fontWeight: 800, color: '#0B2545' }}>
                {duration}
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <Star size={14} className="fill-[#ffd700] text-[#ffd700]" />
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 900, color: '#0B2545' }}>
                {rating} ({reviewsCount} reviews)
              </span>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF0EB] border-2 border-[#F06543]/30 text-[#F06543] text-[11px] font-black uppercase tracking-widest font-mono mb-2 shadow-sm">
            <Sparkles size={12} className="text-[#ffd700]" />
            <span>ITINERARY SPOTLIGHT</span>
          </div>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 700, color: '#0B2545', margin: '4px 0 8px', lineHeight: 1.15 }}>
            {pkgName}
          </h2>

          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, fontWeight: 800, color: '#F06543', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>
            <MapPin size={13} color="#F06543" />
            <span>{pkg.destinations || 'Port Blair • Havelock • Neil Island'}</span>
          </div>

          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13.5, color: '#64748b', lineHeight: 1.6, marginBottom: 16 }}>
            {pkg.description || 'Explore Asia’s top-rated Radhanagar Beach, witness Howrah Natural Rock Bridge arches, take high-speed catamaran ferries & relax in luxury oceanfront resorts.'}
          </p>

          {/* Mini Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
            {tags.slice(0, 4).map((tag, idx) => (
              <span key={idx} style={{ display: 'inline-flex', alignItems: 'center', gap: 4, background: '#FFF0EB', border: '1px solid rgba(13,148,136,0.3)', color: '#F06543', fontSize: 11.5, fontWeight: 700, padding: '4px 10px', borderRadius: 10 }}>
                <Check size={12} />
                <span>{tag}</span>
              </span>
            ))}
          </div>

          {/* 3 Metrics */}
          <div className="pkg-metrics-grid">
            <div className="pkg-metric-box">
              <div style={{ fontSize: 10, fontWeight: 800, color: '#64748b', textTransform: 'uppercase', fontFamily: "'Space Grotesk', sans-serif", display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4, marginBottom: 4 }}>
                <Ship size={12} color="#F06543" /> Catamaran
              </div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, fontWeight: 900, color: '#0B2545' }}>
                Makruzz / Nautika
              </div>
            </div>

            <div className="pkg-metric-box">
              <div style={{ fontSize: 10, fontWeight: 800, color: '#64748b', textTransform: 'uppercase', fontFamily: "'Space Grotesk', sans-serif", display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4, marginBottom: 4 }}>
                <Building2 size={12} color="#F06543" /> Stay Tier
              </div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, fontWeight: 900, color: '#0B2545' }}>
                4★ & 5★ Resorts
              </div>
            </div>

            <div className="pkg-metric-box">
              <div style={{ fontSize: 10, fontWeight: 800, color: '#64748b', textTransform: 'uppercase', fontFamily: "'Space Grotesk', sans-serif", display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4, marginBottom: 4 }}>
                <Utensils size={12} color="#F06543" /> Meal Plan
              </div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, fontWeight: 900, color: '#F06543' }}>
                Daily Breakfast
              </div>
            </div>
          </div>

          {/* Pricing & CTA Button */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16, paddingTop: 10, borderTop: '1.5px solid #f1f5f9' }}>
            <div>
              <span style={{ fontSize: 11, color: '#94a3b8', textDecoration: 'line-through', display: 'block', fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif" }}>
                ₹{originalPrice.toLocaleString()}
              </span>
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 24, fontWeight: 900, color: '#0B2545' }}>
                ₹{price.toLocaleString()}{' '}
                <span style={{ fontSize: 12, color: '#64748b', fontWeight: 600 }}>/ adult</span>
              </span>
            </div>

            <span style={{ background: '#FFF0EB', border: '1.5px solid #F06543', color: '#F06543', fontSize: 11, fontWeight: 900, padding: '5px 12px', borderRadius: 12, fontFamily: "'Space Grotesk', sans-serif" }}>
              SAVE 20% TODAY
            </span>
          </div>

          <button
            onClick={() => {
              if (onViewDetails) onViewDetails(pkg);
            }}
            className="pkg-spotlight-btn"
          >
            <span>VIEW FULL DAY-BY-DAY ITINERARY</span>
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </section>
  );
}
