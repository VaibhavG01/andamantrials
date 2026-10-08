import React, { useState, useEffect } from 'react';
import { Star, MapPin, ArrowRight, Sparkles, Clock, Waves } from 'lucide-react';
import { activityService } from '../../api/activityService';

export default function RecommendedExperiences() {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    activityService.getActivities()
      .then((res) => {
        const list = Array.isArray(res) ? res : (res?.data || []);
        if (list.length > 0) {
          const mapped = list.map(act => ({
            id: act.id,
            title: act.name,
            location: act.location || 'Havelock Island',
            duration: act.duration || '2-3 Hours',
            rating: Number(act.rating || 4.9),
            reviews: act.reviewsCount || 90,
            price: `₹${parseFloat(act.price || 3500).toLocaleString('en-IN')}`,
            image: act.heroImage || 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80',
            badge: act.badge || 'POPULAR',
            tagline: act.tagline || 'Experience the magic of Andaman crystal waters.',
          }));
          setExperiences(mapped);
        }
      })
      .catch(() => {});
  }, []);
  return (
    <div className="dash-rec-card">
      <style>{`
        .dash-rec-card {
          background: #ffffff;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1.5px solid #ebded2;
          border-radius: 24px;
          padding: 28px 32px;
          margin-bottom: 28px;
          box-shadow: 0 16px 40px rgba(11, 37, 69, 0.08);
        }
        @media (max-width: 640px) {
          .dash-rec-card { padding: 20px; }
        }

        .dash-rec-hdr {
          display: flex; align-items: flex-end; justify-content: space-between;
          margin-bottom: 24px; flex-wrap: wrap; gap: 12px;
        }
        .dash-rec-sub {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 800; letter-spacing: 0.2em;
          color: #F06543; text-transform: uppercase;
          display: flex; align-items: center; gap: 6px; margin-bottom: 4px;
        }
        .dash-rec-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(24px, 3vw, 32px); font-weight: 600;
          color: #0B2545; margin: 0;
        }

        /* Slider Track */
        .dash-rec-slider {
          display: flex; gap: 16px;
          overflow-x: auto; scroll-snap-type: x mandatory;
          scrollbar-width: none; padding: 4px 4px 16px;
        }
        .dash-rec-slider::-webkit-scrollbar { display: none; }

        .dash-rec-item-wrap {
          flex: 0 0 calc(33.333% - 11px);
          min-width: 270px; scroll-snap-align: start;
        }
        @media (max-width: 1024px) {
          .dash-rec-item-wrap { flex: 0 0 calc(50% - 8px); }
        }
        @media (max-width: 640px) {
          .dash-rec-item-wrap { flex: 0 0 85%; }
        }

        .dash-rec-item {
          background: #ffffff;
          border: 1px solid #ebded2;
          border-radius: 20px; overflow: hidden;
          height: 100%; display: flex; flex-direction: column;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .dash-rec-item:hover {
          transform: translateY(-6px);
          border-color: #F06543;
          box-shadow: 0 16px 36px rgba(11, 37, 69, 0.08), 0 0 20px rgba(240, 101, 67, 0.12);
          background: #FAF4EE;
        }

        .dash-rec-img-box {
          position: relative; height: 160px; overflow: hidden;
        }
        .dash-rec-img-box img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 0.55s ease;
        }
        .dash-rec-item:hover .dash-rec-img-box img {
          transform: scale(1.09);
        }

        .dash-rec-badge {
          position: absolute; top: 10px; left: 10px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 900; letter-spacing: 0.06em;
          color: #ffffff; background: linear-gradient(135deg, #0B2545, #F06543);
          padding: 4px 10px; border-radius: 12px;
          box-shadow: 0 4px 12px rgba(11, 37, 69, 0.3);
        }

        .dash-rec-body {
          padding: 16px; flex: 1; display: flex; flex-direction: column; justify-content: space-between;
        }

        .dash-rec-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 800; color: #F06543;
          background: #FFF0EB;
          border: 1px solid #FFD3C4;
          padding: 8px 14px; border-radius: 12px;
          display: flex; align-items: center; justify-content: center; gap: 5px;
          cursor: pointer; transition: all 0.25s ease; width: 100%;
          text-decoration: none; box-sizing: border-box; margin-top: 12px;
        }
        .dash-rec-item:hover .dash-rec-btn {
          background: linear-gradient(135deg, #FF6B4A, #F06543); color: #ffffff; border-color: #F06543;
          box-shadow: 0 4px 16px rgba(240, 101, 67, 0.35);
        }
      `}</style>

      {/* HEADER */}
      <div className="dash-rec-hdr">
        <div>
          <div className="dash-rec-sub">
            <Sparkles size={12} color="#F06543" />
            <span>CURATED FOR YOU</span>
          </div>
          <h3 className="dash-rec-title">Recommended Experiences</h3>
        </div>

        <a
          href="/activities"
          style={{
            fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 800, color: '#F06543',
            background: '#FFF0EB', border: '1px solid #FFD3C4',
            padding: '7px 16px', borderRadius: 20, textDecoration: 'none',
            display: 'inline-flex', alignItems: 'center', gap: 5, transition: 'all 0.25s ease',
          }}
        >
          <span>VIEW ALL EXPERIENCES</span>
          <ArrowRight size={12} />
        </a>
      </div>

      {/* SLIDER */}
      <div className="dash-rec-slider">
        {experiences.map((item) => (
          <div key={item.id} className="dash-rec-item-wrap">
            <div className="dash-rec-item">
              <div className="dash-rec-img-box">
                <img src={item.image} alt={item.title} loading="lazy" />
                <span className="dash-rec-badge">{item.badge}</span>
                <span style={{
                  position: 'absolute', bottom: 10, right: 10,
                  fontFamily: "'Space Grotesk', sans-serif", fontSize: 12.5, fontWeight: 800,
                  color: '#0B2545', background: '#ffffff', backdropFilter: 'blur(6px)',
                  padding: '3px 9px', borderRadius: 10, border: '1px solid #ebded2',
                  display: 'flex', alignItems: 'center', gap: 4,
                }}>
                  <Clock size={10} color="#F06543" />
                  {item.duration}
                </span>
              </div>

              <div className="dash-rec-body">
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontFamily: "'Space Grotesk', sans-serif", fontSize: 12.5, fontWeight: 700, color: '#F06543', marginBottom: 2 }}>
                    <MapPin size={10} />
                    <span>{item.location}</span>
                  </div>

                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 15, fontWeight: 800, color: '#0B2545', marginBottom: 6, lineHeight: 1.25 }}>
                    {item.title}
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 8 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, fontWeight: 900, color: '#f0c060' }}>
                      <Star size={12} fill="#f0c060" stroke="#f0c060" />
                      <span>{item.rating}</span>
                      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12.5, color: '#627d8a', fontWeight: 400 }}>({item.reviews})</span>
                    </div>

                    <div>
                      <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 15, fontWeight: 900, color: '#F06543' }}>₹{item.price}</span>
                    </div>
                  </div>

                  <a href="/activities" className="dash-rec-btn">
                    <Waves size={12} />
                    <span>VIEW EXPERIENCE</span>
                    <ArrowRight size={11} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
