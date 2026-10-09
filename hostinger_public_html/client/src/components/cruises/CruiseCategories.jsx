import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Sunset, Anchor, Star, Heart, Users, Compass, Clock } from 'lucide-react';
import { apiClient } from '../../api/apiClient';

gsap.registerPlugin(ScrollTrigger);

const ICON_MAP = {
  Sunset,
  Anchor,
  Star,
  Heart,
  Users,
  Compass,
};

export default function CruiseCategories({ onSelectCategory }) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const gridRef = useRef(null);

  useEffect(() => {
    apiClient('/master/categories?type=CRUISE')
      .then((res) => {
        if (res && res.data && Array.isArray(res.data) && res.data.length > 0) {
          setCategories(res.data);
        } else {
          setCategories([
            { id: 'cat-1', title: 'Sunset Sails', slug: 'SUNSET_SAIL', duration: '2-3 Hours', description: 'Golden hour sailing across tranquil Andaman harbor.', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80', icon: 'Sunset' },
            { id: 'cat-2', title: 'Private Charters', slug: 'PRIVATE', duration: 'Half / Full Day', description: 'Exclusive catamaran charter for private celebrations.', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80', icon: 'Anchor' },
            { id: 'cat-3', title: 'Island Hopping', slug: 'LUXURY', duration: 'Full Day', description: 'Cruise between Havelock, Neil and secret coves.', image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800&q=80', icon: 'Compass' },
          ]);
        }
      })
      .catch(() => {
        setCategories([
          { id: 'cat-1', title: 'Sunset Sails', slug: 'SUNSET_SAIL', duration: '2-3 Hours', description: 'Golden hour sailing across tranquil Andaman harbor.', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80', icon: 'Sunset' },
          { id: 'cat-2', title: 'Private Charters', slug: 'PRIVATE', duration: 'Half / Full Day', description: 'Exclusive catamaran charter for private celebrations.', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80', icon: 'Anchor' },
          { id: 'cat-3', title: 'Island Hopping', slug: 'LUXURY', duration: 'Full Day', description: 'Cruise between Havelock, Neil and secret coves.', image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800&q=80', icon: 'Compass' },
        ]);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (!gridRef.current || loading) return;
    const cards = gridRef.current.querySelectorAll('.cat-card');
    if (cards.length > 0) {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power2.out',
          scrollTrigger: { trigger: gridRef.current, start: 'top 85%' }
        }
      );
    }
  }, [categories, loading]);

  return (
    <section className="categories-root">
      <style>{`
        .categories-root {
          max-width: 1340px;
          margin: 0 auto;
          padding: 60px 24px 80px;
        }

        .cat-eyebrow {
          display: flex; align-items: center; justify-content: center; gap: 6px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; color: #F06543;
          letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 8px;
        }

        .cat-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(32px, 4.5vw, 52px);
          font-weight: 600; color: #0B2545; text-align: center;
          margin: 0 0 44px; line-height: 1.1;
        }

        .cat-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        @media (max-width: 1024px) {
          .cat-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .cat-grid { grid-template-columns: 1fr; }
        }

        .cat-card {
          background: #ffffff;
          backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px);
          border: 1px solid #e2e8f0;
          border-radius: 24px; overflow: hidden;
          display: flex; flex-direction: column;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
        }
        .cat-card:hover {
          transform: translateY(-8px);
          border-color: rgba(33, 230, 193, 0.5);
          box-shadow: 0 18px 45px rgba(0, 0, 0, 0.5), 0 0 25px rgba(33, 230, 193, 0.12);
        }

        .cat-img-box {
          position: relative; height: 190px; overflow: hidden;
        }
        .cat-img-box img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 0.6s ease;
        }
        .cat-card:hover .cat-img-box img {
          transform: scale(1.1);
        }

        .cat-icon-badge {
          position: absolute; top: 16px; left: 16px;
          width: 38px; height: 38px; border-radius: 50%;
          background: linear-gradient(135deg, rgba(22, 217, 255, 0.9), rgba(33, 230, 193, 0.9));
          display: flex; align-items: center; justify-content: center;
          color: #ffffff; background: linear-gradient(135deg, #0B2545, #F06543); box-shadow: 0 4px 14px rgba(0, 45, 98, 0.25);
        }

        .cat-duration-badge {
          position: absolute; top: 16px; right: 16px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 800; color: #ffffff;
          background: #f8fafc; backdrop-filter: blur(8px);
          border: 1px solid #e2e8f0;
          padding: 4px 12px; border-radius: 12px;
          display: flex; align-items: center; gap: 4px;
        }

        .cat-body {
          padding: 24px; flex: 1; display: flex; flex-direction: column; justify-content: space-between;
        }

        .cat-card-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 16px; font-weight: 800; color: #0B2545;
          margin: 0 0 8px; transition: color 0.25s ease;
        }
        .cat-card:hover .cat-card-title { color: #F06543; }

        .cat-card-desc {
          font-family: 'Inter', sans-serif;
          font-size: 13px; color: #64748b; line-height: 1.6;
          margin-bottom: 20px;
        }

        .cat-card-footer {
          display: flex; align-items: center; justify-content: space-between;
          padding-top: 14px; border-top: 1px solid #e2e8f0;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; color: #F06543;
        }

        .cat-arrow {
          transition: transform 0.3s ease;
        }
        .cat-card:hover .cat-arrow {
          transform: translateX(5px);
        }
      `}</style>

      <div className="cat-eyebrow">
        <Compass size={14} color="#F06543" />
        <span>CHOOSE YOUR EXPERIENCE</span>
      </div>
      <h2 className="cat-title">SELECT A CRUISE STYLE</h2>

      <div ref={gridRef} className="cat-grid">
        {categories.map((cat) => {
          const IconComp = ICON_MAP[cat.icon] || Compass;
          return (
            <div
              key={cat.id || cat.slug || cat.title}
              className="cat-card"
              onClick={() => onSelectCategory && onSelectCategory(cat.slug || cat.title)}
            >
              <div className="cat-img-box">
                <img src={cat.image || 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'} alt={cat.title} />
                <div className="cat-icon-badge">
                  <IconComp size={18} />
                </div>
                <div className="cat-duration-badge">
                  <Clock size={11} color="#F06543" />
                  <span>{cat.duration || '2-3 Hours'}</span>
                </div>
              </div>

              <div className="cat-body">
                <div>
                  <h3 className="cat-card-title">{cat.title || cat.name}</h3>
                  <p className="cat-card-desc">{cat.description}</p>
                </div>

                <div className="cat-card-footer">
                  <span>VIEW EXPERIENCE</span>
                  <ArrowRight size={13} className="cat-arrow" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
