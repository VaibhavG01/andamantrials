import React, { useState, useRef, useEffect } from 'react';
import { Star, Clock, MapPin, ArrowRight, Sparkles, ChevronLeft, ChevronRight, Waves, Compass, Eye, Navigation, Anchor, Target, Heart } from 'lucide-react';
import ExperiencePreview from './ExperiencePreview';
import { apiClient } from '../../api/apiClient';

const ACTIVITY_ICONS = {
  'Underwater Adventure': Waves,
  'Coral Reef Walking': Compass,
  'Shallow Water Snorkeling': Eye,
  'Night Sea Adventure': Navigation,
  'Marine Park Cruise': Anchor,
  'Extreme Sport Fishing': Target
};

export default function ExperienceExplorer() {
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const sliderRef = useRef(null);

  useEffect(() => {
    const loadActivities = async () => {
      setLoading(true);
      try {
        const res = await apiClient('/activities');
        if (res && res.data && Array.isArray(res.data)) {
          const mapped = res.data.map(act => {
            let parsedIncluded = [];
            try {
              parsedIncluded = Array.isArray(act.inclusions) 
                ? act.inclusions 
                : (typeof act.inclusions === 'string' ? JSON.parse(act.inclusions) : []);
            } catch (e) {
              parsedIncluded = [];
            }

            const mainLocation = act.locations && act.locations.length > 0
              ? act.locations.map(l => l.locationName.replace(/ Island/gi, '').replace(/ Beach/gi, '')).join(' • ').toUpperCase()
              : (act.location ? act.location.toUpperCase().replace(/\s*&\s*/g, ' • ') : 'PORT BLAIR • HAVELOCK');

            return {
              ...act,
              location: mainLocation,
              description: act.overview || act.tagline || '',
              included: parsedIncluded.length > 0 ? parsedIncluded : ['Certified Instructor Guidance', 'Safety vests & gear', 'Port permit included'],
              difficulty: act.category?.includes('Extreme') ? 'Challenging' : (act.category?.includes('Night') ? 'Moderate' : 'Easy'),
              slug: `/activity-details?id=${act.slug || act.id}`,
              badge: act.featured ? 'MUST TRY' : (act.category?.toUpperCase() || 'ADVENTURE'),
            };
          });
          setActivities(mapped);
        }
      } catch (err) {
        console.error('Failed to load activities from DB:', err);
      } finally {
        setLoading(false);
      }
    };
    loadActivities();
  }, []);

  const formatPrice = (p) => {
    if (p === undefined || p === null) return '';
    const num = typeof p === 'string' ? Number(p.replace(/,/g, '')) : Number(p);
    return isNaN(num) ? p : num.toLocaleString('en-IN');
  };

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <section id="experiences-section" className="exp-explorer-section">
      <style>{`
        .exp-explorer-section {
          position: relative;
          width: 100%;
          background: #f8fafc;
          color: #1e293b;
          padding: 60px 0 80px;
          border-bottom: 1px solid #e2e8f0;
          overflow: hidden;
        }

        .exp-ambient-glow {
          position: absolute;
          top: 40%;
          left: 5%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(13, 148, 136, 0.05) 0%, rgba(248, 250, 252, 0) 70%);
          pointer-events: none;
        }

        .exp-container {
          max-width: 1380px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
          z-index: 2;
        }

        /* Header styling */
        .exp-header-wrapper {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
          margin-bottom: 32px;
        }

        .exp-header-sub {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.18em;
          color: #f06543;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 6px;
        }

        .exp-header-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(28px, 3.5vw, 42px);
          font-weight: 900;
          color: #0b2545;
          line-height: 1.15;
          letter-spacing: -0.02em;
        }

        /* Header Actions & Arrows */
        .exp-header-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .exp-slider-arrow {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #ffffff;
          border: 1.5px solid #ebded2;
          color: #0b2545;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 2px 8px rgba(11, 37, 69, 0.06);
        }

        .exp-slider-arrow:hover {
          background: #0b2545;
          color: #ffffff;
          border-color: #0b2545;
          box-shadow: 0 6px 18px rgba(11, 37, 69, 0.25);
          transform: scale(1.05);
        }

        .exp-viewall-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 900;
          color: #ffffff;
          background: #0b2545;
          border: none;
          padding: 9px 18px;
          border-radius: 12px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: all 0.25s ease;
          box-shadow: 0 4px 12px rgba(11, 37, 69, 0.2);
        }

        .exp-viewall-btn:hover {
          background: #f06543;
        }

        /* Horizontal Carousel Slider Track */
        .exp-slider-container {
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        .exp-cards-slider {
          display: flex;
          gap: 20px;
          overflow-x: auto;
          scroll-behavior: smooth;
          scroll-snap-type: x mandatory;
          scrollbar-width: none;
          -ms-overflow-style: none;
          padding: 8px 4px 20px 4px;
        }

        .exp-cards-slider::-webkit-scrollbar {
          display: none;
        }

        .exp-card-item {
          flex: 0 0 calc(33.333% - 14px);
          min-width: 280px;
          scroll-snap-align: start;
        }

        @media (max-width: 1024px) {
          .exp-card-item {
            flex: 0 0 calc(50% - 10px);
            min-width: 270px;
          }
        }

        @media (max-width: 640px) {
          .exp-card-item {
            flex: 0 0 88%;
            min-width: 250px;
          }
        }

        /* Activity Glass Card */
        .exp-card {
          height: 100%;
          background: #ffffff;
          border: 1.5px solid #ebded2;
          border-radius: 22px;
          padding: 18px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
          cursor: pointer;
          box-shadow: 0 4px 20px rgba(11, 37, 69, 0.06);
        }

        .exp-card:hover {
          transform: translateY(-6px);
          border-color: #f06543;
          box-shadow: 0 16px 36px rgba(11, 37, 69, 0.12), 0 0 16px rgba(240, 101, 67, 0.2);
        }

        .exp-img-box {
          position: relative;
          height: 170px;
          border-radius: 16px;
          overflow: hidden;
          margin-bottom: 14px;
          background: #f1f5f9;
        }

        .exp-img-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .exp-card:hover .exp-img-box img {
          transform: scale(1.08);
        }

        .exp-badge-tag {
          position: absolute;
          top: 10px;
          left: 10px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 0.06em;
          color: #ffffff;
          background: linear-gradient(135deg, #ff6b4a, #f06543);
          padding: 4px 10px;
          border-radius: 20px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.35);
          text-shadow: 0 1px 2px rgba(0,0,0,0.4);
        }

        .exp-duration-pill {
          position: absolute;
          bottom: 10px;
          right: 10px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11px;
          font-weight: 800;
          color: #0b2545;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(8px);
          padding: 4px 10px;
          border-radius: 12px;
          border: 1px solid #ebded2;
          display: flex;
          align-items: center;
          gap: 4px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.12);
        }

        .exp-location-line {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 800;
          color: #f06543;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          display: flex;
          align-items: center;
          gap: 4px;
          margin-bottom: 6px;
        }

        .exp-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 16.5px;
          font-weight: 900;
          color: #0b2545;
          line-height: 1.3;
          margin-bottom: 6px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          min-height: 43px;
        }

        .exp-tagline {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: #2d3e50;
          line-height: 1.5;
          margin-bottom: 16px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          min-height: 38px;
        }

        .exp-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 14px;
          border-top: 1px solid #f1f5f9;
          margin-top: auto;
        }

        .exp-price-curr {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 20px;
          font-weight: 900;
          color: #0b2545;
          line-height: 1;
        }

        .exp-price-old {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          color: #94a3b8;
          text-decoration: line-through;
          margin-left: 6px;
          font-weight: 600;
        }

        .exp-action-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 900;
          color: #ffffff;
          background: #0b2545;
          border: none;
          padding: 8px 16px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 4px;
          transition: all 0.25s ease;
          box-shadow: 0 4px 12px rgba(11, 37, 69, 0.2);
        }

        .exp-card:hover .exp-action-btn {
          background: #f06543;
          box-shadow: 0 4px 16px rgba(240, 101, 67, 0.4);
        }
      `}</style>

      {/* Ambient background light */}
      <div className="exp-ambient-glow" />

      <div className="exp-container">
        {/* Section Header */}
        <div className="exp-header-wrapper">
          <div>
            <div className="exp-header-sub">
              <Sparkles size={13} color="#f06543" />
              <span>ACTIVITIES & EXPERIENCES</span>
            </div>
            <h2 className="exp-header-title">
              Unforgettable Island Adventures
            </h2>
          </div>

          <div className="exp-header-actions">
            <button onClick={scrollLeft} className="exp-slider-arrow" aria-label="Previous Activity">
              <ChevronLeft size={20} />
            </button>
            <button onClick={scrollRight} className="exp-slider-arrow" aria-label="Next Activity">
              <ChevronRight size={20} />
            </button>

            <a
              href="/activities"
              onClick={(e) => {
                e.preventDefault();
                window.history.pushState({}, '', '/activities');
                window.dispatchEvent(new Event('popstate'));
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="exp-viewall-btn"
              style={{ marginLeft: 8 }}
            >
              <span>VIEW ALL</span>
              <ArrowRight size={13} />
            </a>
          </div>
        </div>

        {/* Horizontal Carousel Slider Track */}
        <div className="exp-slider-container">
          <div ref={sliderRef} className="exp-cards-slider">
            {loading ? (
              [1, 2, 3, 4].map(n => (
                <div key={n} className="exp-card-item">
                  <div className="exp-card animate-pulse" style={{ minHeight: 380, background: '#ffffff' }}>
                    <div style={{ height: 170, background: '#e2e8f0', borderRadius: 16, marginBottom: 14 }} />
                    <div style={{ height: 16, background: '#e2e8f0', borderRadius: 6, width: '40%', marginBottom: 10 }} />
                    <div style={{ height: 20, background: '#cbd5e1', borderRadius: 6, width: '85%', marginBottom: 10 }} />
                    <div style={{ height: 14, background: '#f1f5f9', borderRadius: 6, width: '95%', marginBottom: 6 }} />
                    <div style={{ height: 14, background: '#f1f5f9', borderRadius: 6, width: '70%', marginBottom: 20 }} />
                    <div style={{ height: 40, background: '#e2e8f0', borderRadius: 12, marginTop: 'auto' }} />
                  </div>
                </div>
              ))
            ) : activities.map((act, idx) => {
              const IconComp = act.icon || ACTIVITY_ICONS[act.category] || Waves;
              return (
                <div key={`${act.id || 'act'}-${idx}`} className="exp-card-item">
                  <div
                    className="exp-card"
                    onClick={() => setSelectedActivity(act)}
                  >
                    <div>
                      {/* Image Box */}
                      <div className="exp-img-box">
                        <img src={act.image || act.heroImage || 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80'} alt={act.name} loading="lazy" />
                        <span className="exp-badge-tag" style={{ background: 'linear-gradient(135deg, #FF6B4A, #F06543)' }}>
                          {act.badge || 'ADVENTURE'}
                        </span>
                        <span className="exp-duration-pill">
                          <Clock size={11} color="#F06543" />
                          <span>{act.duration || '45 Mins / 1 Hr'}</span>
                        </span>
                      </div>

                      {/* Location & Rating */}
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
                        <div className="exp-location-line">
                          <MapPin size={11} color="#F06543" />
                          <span>{act.location}</span>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: 3, fontSize: 12.5, fontWeight: 800, color: '#f0c060', fontFamily: "'Space Grotesk', sans-serif" }}>
                          <Star size={10} fill="#f0c060" stroke="#f0c060" />
                          <span>{Number(act.rating || 5.0).toFixed(2)}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h4 className="exp-title">{act.name}</h4>

                      {/* Tagline */}
                      <p className="exp-tagline">{act.tagline || act.overview || act.description}</p>
                    </div>

                    {/* Price & CTA */}
                    <div className="exp-footer">
                      <div>
                        <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, color: '#64748b', display: 'block', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 800 }}>
                          STARTING FROM
                        </span>
                        <div>
                          <span className="exp-price-curr">₹{formatPrice(act.price)}</span>
                        </div>
                      </div>

                      <div className="exp-action-btn">
                        <IconComp size={12} />
                        <span>EXPLORE</span>
                        <ArrowRight size={10} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* MODAL / PREVIEW DIALOG */}
      {selectedActivity && (
        <ExperiencePreview experience={selectedActivity} onClose={() => setSelectedActivity(null)} />
      )}
    </section>
  );
}

