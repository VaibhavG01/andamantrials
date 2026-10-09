// src/components/ferries/LuxuryCruiseShowcase.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Luxury Sunset, Dinner & Private Yacht Cruise Showcase Section

import React from 'react';
import { Anchor, Sparkles, Clock, MapPin, Users, Star, ArrowRight, ShieldCheck } from 'lucide-react';
import { CRUISE_LISTINGS } from '../../data/cruiseData';

export default function LuxuryCruiseShowcase({ onBookCruise, onViewCruiseDetails }) {
  return (
    <section className="luxury-cruise-showcase-root">
      <style>{`
        .luxury-cruise-showcase-root {
          background: linear-gradient(180deg, #07182C 0%, #0B2545 100%);
          color: #ffffff;
          padding: 80px 24px;
        }

        .cruise-inner-wrap {
          max-width: 1240px;
          margin: 0 auto;
        }

        .cruise-hdr-row {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 40px;
          flex-wrap: wrap;
          gap: 20px;
        }

        .cruise-sub {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.2em;
          color: #FF8A65;
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        .cruise-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(30px, 4.5vw, 48px);
          font-weight: 600;
          color: #ffffff;
          margin: 0;
        }

        .cruises-grid-3col {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 24px;
        }

        .cruise-exp-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(16px);
          border: 1.5px solid rgba(255, 255, 255, 0.12);
          border-radius: 24px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: all 0.3s ease;
        }

        .cruise-exp-card:hover {
          transform: translateY(-4px);
          border-color: rgba(240, 101, 67, 0.6);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5), 0 0 20px rgba(240, 101, 67, 0.2);
        }

        .cruise-card-img-wrap {
          position: relative;
          height: 220px;
          overflow: hidden;
        }

        .cruise-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .cruise-exp-card:hover .cruise-card-img {
          transform: scale(1.06);
        }

        .cruise-type-badge {
          position: absolute;
          top: 14px;
          left: 14px;
          background: rgba(11, 37, 69, 0.85);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 4px 12px;
          border-radius: 999px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11px;
          font-weight: 800;
          color: #FFB088;
        }

        .cruise-card-body {
          padding: 24px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .cruise-card-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 18px;
          font-weight: 900;
          color: #ffffff;
          margin: 0 0 6px;
        }

        .cruise-card-desc {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: #CBD5E1;
          line-height: 1.5;
          margin-bottom: 20px;
        }

        .cruise-meta-strip {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          padding: 10px 14px;
          margin-bottom: 20px;
          font-size: 12px;
          color: #94A3B8;
        }

        .btn-book-cruise-slot {
          background: linear-gradient(135deg, #FF6B4A, #F06543);
          border: none;
          color: #ffffff;
          padding: 12px 20px;
          border-radius: 12px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 900;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          box-shadow: 0 4px 14px rgba(240, 101, 67, 0.4);
          transition: all 0.2s ease;
          width: 100%;
        }

        .btn-book-cruise-slot:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(240, 101, 67, 0.6);
        }
      `}</style>

      <div className="cruise-inner-wrap">
        <div className="cruise-hdr-row">
          <div>
            <div className="cruise-sub">GOLDEN HOUR & EXCLUSIVE VOYAGES</div>
            <h2 className="cruise-title">Sunset, Starlight & Private Yacht Cruises</h2>
          </div>
          <p style={{ maxWidth: 420, color: '#CBD5E1', fontSize: 13, margin: 0 }}>
            Indulge in harbor sunsets, candlelight yacht charters, and coral exploration sails across the Andaman Sea.
          </p>
        </div>

        <div className="cruises-grid-3col">
          {CRUISE_LISTINGS.map((cruise) => (
            <div key={cruise.id} className="cruise-exp-card">
              <div className="cruise-card-img-wrap">
                <img src={cruise.coverImage || cruise.image} alt={cruise.name} className="cruise-card-img" />
                <div className="cruise-type-badge">
                  {cruise.type}
                </div>
              </div>

              <div className="cruise-card-body">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
                  <div style={{ fontSize: 11, fontWeight: 800, color: '#FF8A65', textTransform: 'uppercase' }}>
                    {cruise.location}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, color: '#FCD34D', fontWeight: 800 }}>
                    <Star size={13} fill="#FCD34D" />
                    <span>{cruise.rating || 4.9}</span>
                  </div>
                </div>

                <h3 className="cruise-card-title">{cruise.name}</h3>
                <p className="cruise-card-desc">{cruise.excerpt || cruise.description}</p>

                <div className="cruise-meta-strip">
                  <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                    <Clock size={13} color="#FF8A65" />
                    <span>{cruise.duration}</span>
                  </div>
                  <div>
                    <span>Starting </span>
                    <strong style={{ color: '#ffffff', fontSize: 14 }}>₹{cruise.startingPrice.toLocaleString('en-IN')}</strong>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onBookCruise({ ...cruise, price: cruise.startingPrice, category: 'CRUISE' })}
                  className="btn-book-cruise-slot"
                >
                  <Anchor size={15} />
                  <span>Book Cruise Slot</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
