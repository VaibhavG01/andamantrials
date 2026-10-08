import React, { useState, useEffect } from 'react';
import { Heart, Star, MapPin, ArrowRight, Sparkles } from 'lucide-react';
import { activityService } from '../../api/activityService';

export default function Wishlist() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    activityService.getActivities()
      .then((res) => {
        const list = Array.isArray(res) ? res : (res?.data || []);
        if (list.length > 0) {
          const mapped = list.slice(0, 4).map(act => ({
            id: act.id,
            title: act.name,
            location: act.location || 'Havelock Island',
            rating: Number(act.rating || 4.9),
            reviews: act.reviewsCount || 85,
            price: `₹${parseFloat(act.price || 3500).toLocaleString('en-IN')}`,
            image: act.heroImage || 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80',
            badge: act.badge || 'TOP RATED',
            liked: true,
          }));
          setItems(mapped);
        }
      })
      .catch(() => {});
  }, []);

  const toggleHeart = (id) => {
    setItems(prev => prev.map(item => item.id === id ? { ...item, liked: !item.liked } : item));
  };

  return (
    <div className="dash-wishlist-card">
      <style>{`
        .dash-wishlist-card {
          background: #ffffff;
          border: 1.5px solid #EBDED2;
          border-radius: 24px;
          padding: 28px 32px;
          margin-bottom: 28px;
          box-shadow: 0 4px 20px rgba(11, 37, 69, 0.04);
        }
        @media (max-width: 640px) {
          .dash-wishlist-card { padding: 20px; }
        }

        .dash-wl-hdr {
          display: flex; align-items: center; justify-content: space-between;
          margin-bottom: 24px; flex-wrap: wrap; gap: 12px;
        }
        .dash-wl-sub {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 800; letter-spacing: 0.2em;
          color: #F06543; text-transform: uppercase;
          display: flex; align-items: center; gap: 6px; margin-bottom: 4px;
        }
        .dash-wl-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(24px, 3vw, 32px); font-weight: 600;
          color: #0B2545; margin: 0;
        }

        /* Grid */
        .dash-wl-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
        }
        @media (max-width: 768px) {
          .dash-wl-grid { grid-template-columns: 1fr; }
        }

        .dash-wl-item {
          background: #FAF4EE;
          border: 1px solid #EBDED2;
          border-radius: 20px; overflow: hidden;
          display: flex; flex-direction: column;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .dash-wl-item:hover {
          transform: translateY(-4px);
          border-color: #FFD3C4;
          box-shadow: 0 16px 36px rgba(11, 37, 69, 0.08), 0 0 20px rgba(240, 101, 67, 0.12);
        }

        .dash-wl-img-box {
          position: relative; height: 160px; overflow: hidden;
        }
        .dash-wl-img-box img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 0.5s ease;
        }
        .dash-wl-item:hover .dash-wl-img-box img {
          transform: scale(1.08);
        }

        .dash-wl-heart-btn {
          position: absolute; top: 12px; right: 12px;
          width: 34px; height: 34px; border-radius: 50%;
          background: #ffffff; backdrop-filter: blur(8px);
          border: 1px solid #EBDED2;
          color: #F06543; display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: all 0.25s ease;
        }
        .dash-wl-heart-btn:hover {
          transform: scale(1.1);
        }

        .dash-wl-body {
          padding: 16px; flex: 1; display: flex; flex-direction: column; justify-content: space-between;
        }
      `}</style>

      {/* HEADER */}
      <div className="dash-wl-hdr">
        <div>
          <div className="dash-wl-sub">
            <Heart size={12} color="#F06543" fill="#F06543" />
            <span>SAVED DESTINATIONS</span>
          </div>
          <h3 className="dash-wl-title">Your Wishlist</h3>
        </div>

        <div style={{
          fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 800, color: '#F06543',
          background: '#FFF0EB', border: '1px solid #FFD3C4',
          padding: '6px 14px', borderRadius: 20,
        }}>
          {items.filter(i => i.liked).length} SAVED ITEMS
        </div>
      </div>

      {/* GRID */}
      <div className="dash-wl-grid">
        {items.map(item => (
          <div key={item.id} className="dash-wl-item">
            <div className="dash-wl-img-box">
              <img src={item.image} alt={item.title} />
              <button
                className="dash-wl-heart-btn"
                onClick={() => toggleHeart(item.id)}
                title={item.liked ? 'Remove from wishlist' : 'Add to wishlist'}
              >
                <Heart size={16} fill={item.liked ? '#F06543' : 'none'} color="#F06543" />
              </button>

              <span style={{
                position: 'absolute', bottom: 10, left: 10,
                fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, fontWeight: 900,
                color: '#0B2545', background: '#ffffff',
                padding: '3px 9px', borderRadius: 12, border: '1px solid #EBDED2',
              }}>
                {item.badge || 'FEATURED'}
              </span>
            </div>

            <div className="dash-wl-body">
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontFamily: "'Space Grotesk', sans-serif", fontSize: 12.5, fontWeight: 700, color: '#F06543', marginBottom: 2 }}>
                  <MapPin size={10} />
                  <span>{item.location}</span>
                </div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 15, fontWeight: 800, color: '#0B2545', marginBottom: 6 }}>
                  {item.title}
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 12, paddingTop: 12, borderTop: '1px solid #EBDED2' }}>
                <div>
                  <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 900, color: '#F06543' }}>{item.price}</span>
                  <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, color: '#5C6F84', textDecoration: 'line-through', marginLeft: 6 }}>{item.originalPrice}</span>
                </div>

                <a
                  href="/destinations"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif", fontSize: 12.5, fontWeight: 800, color: '#F06543',
                    background: '#FFF0EB', border: '1px solid #FFD3C4',
                    padding: '7px 14px', borderRadius: 12, textDecoration: 'none',
                    display: 'inline-flex', alignItems: 'center', gap: 4, transition: 'all 0.25s ease',
                  }}
                >
                  <span>EXPLORE</span>
                  <ArrowRight size={10} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
