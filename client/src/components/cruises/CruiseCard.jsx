// src/components/cruises/CruiseCard.jsx
import React from 'react';
import { MapPin, Clock, ArrowRight, Check } from 'lucide-react';

export default function CruiseCard({ cruise, onViewDetails }) {
  if (!cruise) return null;

  const handleCardClick = (e) => {
    if (e) e.stopPropagation();
    if (onViewDetails) {
      onViewDetails(cruise);
    }
    const targetUrl = `/cruise-details?id=${cruise.slug}`;
    window.history.pushState({}, '', targetUrl);
    window.dispatchEvent(new Event('popstate'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="cruise-card-root" onClick={handleCardClick} style={{ cursor: 'pointer' }}>
      <style>{`
        .cruise-card-root {
          background: #ffffff;
          backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px);
          border: 1px solid #e2e8f0;
          border-radius: 24px; overflow: hidden;
          display: flex; flex-direction: column;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .cruise-card-root:hover {
          transform: translateY(-8px);
          border-color: rgba(33, 230, 193, 0.45);
          box-shadow: 0 18px 45px rgba(0, 0, 0, 0.5), 0 0 25px rgba(33, 230, 193, 0.12);
        }

        .cruise-card-img-box {
          position: relative; height: 210px; overflow: hidden;
        }
        .cruise-card-img-box img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 0.6s ease;
        }
        .cruise-card-root:hover .cruise-card-img-box img {
          transform: scale(1.08);
        }

        .cruise-card-cat-badge {
          position: absolute; top: 14px; left: 14px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 9.5px; font-weight: 800; letter-spacing: 0.08em;
          color: #F06543; background: #f8fafc;
          backdrop-filter: blur(8px); padding: 4px 12px; border-radius: 14px;
          border: 1px solid rgba(33, 230, 193, 0.3); text-transform: uppercase;
        }

        .cruise-card-body {
          padding: 22px; flex: 1; display: flex; flex-direction: column; justify-content: space-between;
        }

        .cruise-card-meta {
          display: flex; align-items: center; gap: 12px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 700; color: #64748b; margin-bottom: 8px;
        }

        .cruise-card-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 16px; font-weight: 800; color: #0B2545;
          line-height: 1.3; margin: 0 0 8px; transition: color 0.25s ease;
        }
        .cruise-card-root:hover .cruise-card-title { color: #F06543; }

        .cruise-card-excerpt {
          font-family: 'Inter', sans-serif;
          font-size: 12.5px; color: #64748b; line-height: 1.6;
          margin-bottom: 16px; display: -webkit-box;
          -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;
        }

        .cruise-card-features {
          display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 18px;
        }
        .feature-chip {
          font-family: 'Inter', sans-serif;
          font-size: 13px; color: #475569;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          padding: 3px 10px; border-radius: 10px;
          display: flex; align-items: center; gap: 4px;
        }

        .cruise-card-footer {
          display: flex; align-items: center; justify-content: space-between;
          padding-top: 14px; border-top: 1px solid #e2e8f0;
        }

        .price-label {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 700; color: #64748b;
        }

        .details-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 800; color: #F06543;
          background: rgba(22, 217, 255, 0.1);
          border: 1px solid rgba(22, 217, 255, 0.3);
          padding: 7px 16px; border-radius: 12px;
          cursor: pointer; display: inline-flex; align-items: center; gap: 5px;
          transition: all 0.25s ease;
        }
        .details-btn:hover {
          background: linear-gradient(135deg, #0B2545, #F06543); color: #ffffff;
        }
      `}</style>

      <div className="cruise-card-img-box">
        <img src={cruise.image} alt={cruise.name} />
        <span className="cruise-card-cat-badge">{cruise.type}</span>
      </div>

      <div className="cruise-card-body">
        <div>
          <div className="cruise-card-meta">
            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <MapPin size={11} color="#F06543" />
              {cruise.location}
            </span>
            <span style={{ color: '#4a6678' }}>•</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <Clock size={11} color="#F06543" />
              {cruise.duration}
            </span>
          </div>

          <h3 className="cruise-card-title">{cruise.name}</h3>
          <p className="cruise-card-excerpt">{cruise.excerpt}</p>

          <div className="cruise-card-features">
            {Array.isArray(cruise.features) ? (
              cruise.features.slice(0, 2).map((feat, i) => (
                <span key={i} className="feature-chip">
                  <Check size={10} color="#F06543" />
                  {feat}
                </span>
              ))
            ) : (typeof cruise.features === 'string' ? (
              (() => {
                try {
                  const parsed = JSON.parse(cruise.features);
                  if (Array.isArray(parsed)) {
                    return parsed.slice(0, 2).map((feat, i) => (
                      <span key={i} className="feature-chip">
                        <Check size={10} color="#F06543" />
                        {feat}
                      </span>
                    ));
                  }
                } catch (e) {}
                return cruise.features.split(',').slice(0, 2).map((feat, i) => (
                  <span key={i} className="feature-chip">
                    <Check size={10} color="#F06543" />
                    {feat.trim()}
                  </span>
                ));
              })()
            ) : null)}
          </div>
        </div>

        <div className="cruise-card-footer">
          <div className="price-label">
            {cruise.startingPrice ? `FROM ₹${cruise.startingPrice}` : 'ENQUIRE FOR PRICE'}
          </div>

          <button
            onClick={handleCardClick}
            className="details-btn"
          >
            <span>VIEW DETAILS</span>
            <ArrowRight size={11} />
          </button>
        </div>
      </div>
    </div>
  );
}
