// src/components/stays/StayComparison.jsx
// ─────────────────────────────────────────────────────────────────────────────
// High-Contrast Luxury Stay Comparison & Category Matrix

import React from 'react';
import {
  Compass, Check, Crown, Waves, Trees, Building,
  Star, ArrowRight, Sparkles, ShieldCheck
} from 'lucide-react';

const COMPARISONS = [
  {
    id: 'luxury-villas',
    title: '5★ LUXURY STAYS',
    badge: '👑 ROYAL VIP TIER',
    bestFor: 'Couples, Honeymooners & VIP Travelers',
    icon: Crown,
    features: [
      '5-Star Hospitality & Concierge',
      'Private Plunge Pools & Jacuzzis',
      'Gourmet Fine Dining & Butler Service',
      'Direct Private Beach & Spa Trails',
    ],
    topStays: 'Taj Exotica • Symphony Samudra',
    price: '₹25,000',
    priceSuffix: '/ night',
    color: '#7C3AED',
    bgBadge: '#F5F3FF',
    borderColor: '#DDD6FE',
  },
  {
    id: 'beachfront-resorts',
    title: 'BEACHFRONT RESORTS',
    badge: '⭐ 4★ PREMIUM OCEAN',
    bestFor: 'Ocean & Sun Lovers, Families',
    icon: Waves,
    features: [
      'Direct White Sand Beach Access',
      'Ocean-View Balconies & Chalets',
      'Sunset Deck Bar & Fresh Seafood',
      'On-Site Water Sports & Scuba Desks',
    ],
    topStays: 'SeaShell • Summer Sands • Silver Sand',
    price: '₹12,000',
    priceSuffix: '/ night',
    color: '#0284C7',
    bgBadge: '#F0F9FF',
    borderColor: '#BAE6FD',
  },
  {
    id: 'boutique-villas',
    title: 'BOUTIQUE & ECO VILLAS',
    badge: '🌿 TRANQUIL NATURE',
    bestFor: 'Unique, Peaceful & Wellness Stays',
    icon: Trees,
    features: [
      'Nicobari Teak & Eco-Cottages',
      'Ayurvedic Spa & Daily Yoga Decks',
      'Organic Farm-to-Table Dining',
      'Intimate Tropical Forest Setting',
    ],
    topStays: 'Barefoot • Dew Dale • Flying Elephant',
    price: '₹9,000',
    priceSuffix: '/ night',
    color: '#059669',
    bgBadge: '#ECFDF5',
    borderColor: '#A7F3D0',
  },
  {
    id: 'budget-friendly',
    title: 'COMFORT & VALUE STAYS',
    badge: '🏨 3★ DELUXE COMFORT',
    bestFor: 'Smart, Solo & Group Travelers',
    icon: Building,
    features: [
      'Spacious AC Rooms & Plush Beds',
      'Close to Ferry Jetties & Markets',
      'Complimentary Morning Breakfast',
      'High Value Comfort & Tour Desk',
    ],
    topStays: 'TSG Grand • Dolphin • Tango Beach',
    price: '₹4,500',
    priceSuffix: '/ night',
    color: '#D97706',
    bgBadge: '#FFFBEB',
    borderColor: '#FDE68A',
  },
];

export default function StayComparison({ onExplore }) {
  const handleCardAction = (categoryTitle) => {
    if (onExplore) {
      onExplore(categoryTitle);
    } else {
      const el = document.getElementById('stays-listing-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="comp-root" id="stay-comparison-section">
      <style>{`
        .comp-root {
          max-width: 1340px;
          margin: 0 auto;
          padding: 60px 24px 80px;
          font-family: 'Inter', sans-serif;
        }

        .comp-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11.5px;
          font-weight: 900;
          color: #F06543;
          background: #FFF0EB;
          border: 1px solid rgba(240, 101, 67, 0.35);
          padding: 6px 16px;
          border-radius: 30px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .comp-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(32px, 4.5vw, 50px);
          font-weight: 700;
          color: #0B2545;
          text-align: center;
          margin: 0 0 10px;
          line-height: 1.15;
        }

        .comp-subtitle {
          font-size: clamp(14px, 1.8vw, 16px);
          color: #64748b;
          text-align: center;
          max-width: 680px;
          margin: 0 auto 44px;
          line-height: 1.6;
        }

        .comp-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
        }
        @media (max-width: 1120px) {
          .comp-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .comp-grid { grid-template-columns: 1fr; }
        }

        .comp-card {
          background: #ffffff;
          border: 2px solid #EBDED2;
          border-radius: 26px;
          padding: 28px 22px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-shadow: 0 10px 30px rgba(11, 37, 69, 0.04);
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }
        .comp-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 50px rgba(11, 37, 69, 0.12);
        }

        .comp-top-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 10.5px;
          font-weight: 900;
          padding: 4px 10px;
          border-radius: 8px;
          letter-spacing: 0.04em;
          margin-bottom: 14px;
        }

        .comp-card-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 18px;
          font-weight: 900;
          color: #0B2545;
          margin: 0 0 4px;
          line-height: 1.25;
        }

        .comp-best-for {
          font-size: 12px;
          color: #64748b;
          margin-bottom: 18px;
          font-weight: 600;
          line-height: 1.4;
        }

        .comp-feat-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 22px;
          padding-top: 14px;
          border-top: 1.5px solid #F5ECE5;
        }

        .comp-feat-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 13px;
          color: #1E293B;
          font-weight: 600;
          line-height: 1.4;
        }

        .comp-bottom-area {
          padding-top: 18px;
          border-top: 1.5px solid #F5ECE5;
          margin-top: 6px;
        }

        .comp-price-row {
          display: flex;
          align-items: baseline;
          gap: 4px;
          margin-bottom: 14px;
        }

        .comp-price-val {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 22px;
          font-weight: 900;
          color: #0B2545;
        }

        .comp-price-sfx {
          font-size: 12px;
          color: #64748b;
          font-weight: 600;
        }

        .comp-btn {
          width: 100%;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.05em;
          padding: 12px 14px;
          border-radius: 14px;
          border: 1.5px solid;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          transition: all 0.25s ease;
        }
      `}</style>

      {/* Section Header */}
      <div style={{ textAlign: 'center' }}>
        <div className="comp-eyebrow">
          <Sparkles size={14} color="#F06543" />
          <span>STAY CATEGORIES & TIERS</span>
        </div>
        <h2 className="comp-title">WHICH STAY IS RIGHT FOR YOU?</h2>
        <p className="comp-subtitle">
          Whether you crave 5-star oceanfront seclusion, family beachside chalets, or smart transit comfort — explore verified Andaman accommodations.
        </p>
      </div>

      {/* 4 Cards Grid */}
      <div className="comp-grid">
        {COMPARISONS.map((c) => {
          const IconComp = c.icon || Compass;

          return (
            <div
              key={c.id}
              className="comp-card"
              style={{
                borderColor: '#EBDED2',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = c.color;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#EBDED2';
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span
                    className="comp-top-badge"
                    style={{
                      background: c.bgBadge,
                      color: c.color,
                      border: `1px solid ${c.borderColor}`,
                    }}
                  >
                    {c.badge}
                  </span>

                  <div style={{
                    width: 34,
                    height: 34,
                    borderRadius: 10,
                    background: c.bgBadge,
                    color: c.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <IconComp size={18} />
                  </div>
                </div>

                <h3 className="comp-card-title">{c.title}</h3>
                <div className="comp-best-for">
                  <strong style={{ color: '#0B2545' }}>Best for:</strong> {c.bestFor}
                </div>

                {/* Features List */}
                <div className="comp-feat-list">
                  {c.features.map((f, i) => (
                    <div key={i} className="comp-feat-item">
                      <div style={{
                        width: 18,
                        height: 18,
                        borderRadius: 6,
                        background: c.bgBadge,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginTop: 2,
                      }}>
                        <Check size={12} color={c.color} strokeWidth={3} />
                      </div>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>

                {/* Top Resorts */}
                <div style={{ fontSize: 11, color: '#64748b', marginBottom: 12 }}>
                  <strong style={{ color: '#0B2545' }}>Featured:</strong> {c.topStays}
                </div>
              </div>

              {/* Bottom Area: Pricing & Action */}
              <div className="comp-bottom-area">
                <div className="comp-price-row">
                  <span style={{ fontSize: 11, fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>From</span>
                  <span className="comp-price-val" style={{ color: c.color }}>{c.price}</span>
                  <span className="comp-price-sfx">{c.priceSuffix}</span>
                </div>

                <button
                  type="button"
                  className="comp-btn"
                  onClick={() => handleCardAction(c.title)}
                  style={{
                    background: c.bgBadge,
                    color: c.color,
                    borderColor: c.borderColor,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = c.color;
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.borderColor = c.color;
                    e.currentTarget.style.boxShadow = `0 6px 18px ${c.color}40`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = c.bgBadge;
                    e.currentTarget.style.color = c.color;
                    e.currentTarget.style.borderColor = c.borderColor;
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <span>EXPLORE {c.title.replace('5★ ', '').replace(' & VALUE', '')}</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
