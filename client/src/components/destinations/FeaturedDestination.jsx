// src/components/destinations/FeaturedDestination.jsx
import React from 'react';
import { Sparkles, MapPin, Clock, Star, ArrowRight, Flame, Zap, Thermometer, Eye, Check } from 'lucide-react';

export default function FeaturedDestination({ destination, onViewDetails, onPlanTrip }) {
  if (!destination) return null;

  const destName = destination.name || 'HAVELOCK ISLAND';
  const alias = destination.alias || 'Swaraj Dweep';
  const region = destination.region || 'South Andaman';
  const rating = Number(destination.rating || 4.9).toFixed(1);
  const reviewsCount = destination.reviews || 420;
  const ferryText = destination.ferryText || '90 min Catamaran from Port Blair';
  const image = destination.image || 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?auto=format&fit=crop&w=1200&q=85';

  const tags = destination.tags || [
    'Radhanagar Beach No. 7',
    'Elephant Reef Scuba Diving',
    'Bioluminescence Night Kayaking',
    'Vijaynagar Sunrise Coast'
  ];

  return (
    <section className="featured-dest-root">
      <style>{`
        .featured-dest-root {
          max-width: 1340px;
          margin: 0 auto 70px;
          padding: 0 24px;
        }

        .featured-dest-card {
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
        .featured-dest-card:hover {
          border-color: #F06543;
          box-shadow: 0 25px 60px rgba(0, 45, 98, 0.14);
        }
        @media (max-width: 960px) {
          .featured-dest-card { grid-template-columns: 1fr; padding: 24px; }
        }

        .featured-dest-img-box {
          position: relative;
          height: 380px;
          border-radius: 22px;
          overflow: hidden;
          background: #f1f5f9;
          border: 2px solid #e2e8f0;
        }
        .featured-dest-img-box img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 0.65s ease;
        }
        .featured-dest-card:hover .featured-dest-img-box img {
          transform: scale(1.06);
        }

        .featured-dest-badges {
          position: absolute; top: 16px; left: 16px;
          display: flex; align-items: center; gap: 8px; z-index: 2;
        }

        .dest-fire-badge {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11px; font-weight: 900; letter-spacing: 0.08em;
          color: #ffffff; background: linear-gradient(135deg, #FF6B4A, #F06543);
          padding: 6px 14px; border-radius: 20px;
          display: inline-flex; align-items: center; gap: 6px;
          box-shadow: 0 4px 14px rgba(0, 45, 98, 0.3);
          text-transform: uppercase;
        }

        .dest-sub-badge {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 10px; font-weight: 800; letter-spacing: 0.08em;
          color: #F06543; background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(8px);
          padding: 6px 12px; border-radius: 20px;
          border: 1px solid #e2e8f0;
          text-transform: uppercase;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        }

        .dest-img-footer {
          position: absolute; bottom: 16px; left: 16px; right: 16px;
          background: rgba(255, 255, 255, 0.96);
          backdrop-filter: blur(12px);
          padding: 12px 18px; border-radius: 16px;
          border: 1.5px solid #e2e8f0;
          display: flex; align-items: center; justify-content: space-between;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          z-index: 2;
        }

        .dest-metrics-grid {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 12px; margin: 18px 0;
        }

        .dest-metric-box {
          background: #f8fafc; border: 1.5px solid #e2e8f0;
          border-radius: 16px; padding: 12px; text-align: center;
        }

        .dest-spotlight-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 900; letter-spacing: 0.08em;
          color: #ffffff; background: linear-gradient(135deg, #FF6B4A 0%, #F06543 100%);
          border: 2px solid #F06543; padding: 15px 28px; border-radius: 16px;
          cursor: pointer; display: inline-flex; align-items: center; justify-content: center;
          gap: 8px; transition: all 0.3s ease; width: 100%;
          box-shadow: 0 8px 28px rgba(0, 45, 98, 0.25);
        }
        .dest-spotlight-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 36px rgba(0, 45, 98, 0.4);
          background: linear-gradient(135deg, #F06543 0%, #0B2545 100%);
        }
      `}</style>

      <div className="featured-dest-card">
        {/* Left Visual Box */}
        <div className="featured-dest-img-box">
          <img src={image} alt={destName} />

          <div className="featured-dest-badges">
            <div className="dest-fire-badge">
              <Flame size={13} className="fill-white" />
              <span>MOST POPULAR ISLE</span>
            </div>
            <div className="dest-sub-badge">
              ASIA'S TOP BEACH #7
            </div>
          </div>

          <div className="dest-img-footer">
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <Clock size={14} color="#F06543" />
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, fontWeight: 800, color: '#0B2545' }}>
                {ferryText}
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
            <span>DESTINATION SPOTLIGHT</span>
          </div>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, color: '#0B2545', margin: '4px 0 8px', lineHeight: 1.15 }}>
            {destName}
          </h2>

          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, fontWeight: 800, color: '#F06543', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>
            <MapPin size={13} color="#F06543" />
            <span>{alias} • {region}</span>
          </div>

          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13.5, color: '#64748b', lineHeight: 1.6, marginBottom: 16 }}>
            {destination.description || 'Home to world-famous Radhanagar Beach (Asia’s Top Beach No. 7), turquoise coral lagoons, Dixon’s Pinnacle deep scuba diving & bioluminescent night kayak expeditions.'}
          </p>

          {/* Mini Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
            {tags.map((tag, idx) => (
              <span key={idx} style={{ display: 'inline-flex', alignItems: 'center', gap: 4, background: '#FFF0EB', border: '1px solid rgba(13,148,136,0.3)', color: '#F06543', fontSize: 11.5, fontWeight: 700, padding: '4px 10px', borderRadius: 10 }}>
                <Check size={12} />
                <span>{tag}</span>
              </span>
            ))}
          </div>

          {/* 3 Metrics */}
          <div className="dest-metrics-grid">
            <div className="dest-metric-box">
              <div style={{ fontSize: 10, fontWeight: 800, color: '#64748b', textTransform: 'uppercase', fontFamily: "'Space Grotesk', sans-serif", display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4, marginBottom: 4 }}>
                <Zap size={12} color="#F06543" /> Scuba Score
              </div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 15, fontWeight: 900, color: '#0B2545' }}>
                {destination.scubaScore || '98% Top'}
              </div>
            </div>

            <div className="dest-metric-box">
              <div style={{ fontSize: 10, fontWeight: 800, color: '#64748b', textTransform: 'uppercase', fontFamily: "'Space Grotesk', sans-serif", display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4, marginBottom: 4 }}>
                <Thermometer size={12} color="#F06543" /> Water Temp
              </div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 15, fontWeight: 900, color: '#0B2545' }}>
                {destination.waterTemp || '28°C Warm'}
              </div>
            </div>

            <div className="dest-metric-box">
              <div style={{ fontSize: 10, fontWeight: 800, color: '#64748b', textTransform: 'uppercase', fontFamily: "'Space Grotesk', sans-serif", display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4, marginBottom: 4 }}>
                <Eye size={12} color="#F06543" /> Water Clarity
              </div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 900, color: '#F06543' }}>
                {destination.clarity || 'Crystal (25m+)'}
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => {
              if (onViewDetails) onViewDetails(destination.id || 'havelock');
            }}
            className="dest-spotlight-btn"
          >
            <span>EXPLORE {destName} GUIDE & TOURS</span>
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </section>
  );
}
