import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Compass, Sun, Sparkles, Home, ShieldCheck, Heart } from 'lucide-react';
import { apiClient } from '../../api/apiClient';

gsap.registerPlugin(ScrollTrigger);

const ICON_MAP = { Sun, Sparkles, Compass, Home, ShieldCheck, Heart };

export default function StayCategories({ onSelectCategory }) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const gridRef = useRef(null);

  useEffect(() => {
    apiClient('/master/categories?type=STAY')
      .then((res) => {
        if (res && res.data && Array.isArray(res.data) && res.data.length > 0) {
          setCategories(res.data);
        } else {
          // Default categories derived from stay types
          setCategories([
            { id: 'cat-1', title: 'Luxury Beachfront Resorts', description: 'Private beach access, world-class spas, and sunset views.', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80', icon: 'Sparkles' },
            { id: 'cat-2', title: 'Eco Villas & Cottages', description: 'Sustainable timber villas immersed in rainforest canopy.', image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80', icon: 'Home' },
            { id: 'cat-3', title: 'Boutique Island Hotels', description: 'Handcrafted stays offering authentic Andaman hospitality.', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80', icon: 'Sun' },
          ]);
        }
      })
      .catch(() => {
        setCategories([
          { id: 'cat-1', title: 'Luxury Beachfront Resorts', description: 'Private beach access, world-class spas, and sunset views.', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80', icon: 'Sparkles' },
          { id: 'cat-2', title: 'Eco Villas & Cottages', description: 'Sustainable timber villas immersed in rainforest canopy.', image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80', icon: 'Home' },
          { id: 'cat-3', title: 'Boutique Island Hotels', description: 'Handcrafted stays offering authentic Andaman hospitality.', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80', icon: 'Sun' },
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
    <section className="stay-cat-root">
      <style>{`
        .stay-cat-root {
          max-width: 1340px; margin: 0 auto; padding: 60px 24px 80px;
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
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;
        }
        @media (max-width: 1024px) {
          .cat-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .cat-grid { grid-template-columns: 1fr; }
        }

        .cat-card {
          background: #ffffff; backdrop-filter: blur(18px);
          border: 1px solid #e2e8f0; border-radius: 24px; overflow: hidden;
          display: flex; flex-direction: column; cursor: pointer; transition: all 0.35s ease;
        }
        .cat-card:hover {
          transform: translateY(-8px); border-color: rgba(33, 230, 193, 0.5);
          box-shadow: 0 18px 45px rgba(0,0,0,0.5), 0 0 25px rgba(33,230,193,0.12);
        }

        .cat-img-box {
          position: relative; height: 180px; overflow: hidden;
        }
        .cat-img-box img {
          width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s ease;
        }
        .cat-card:hover .cat-img-box img { transform: scale(1.1); }

        .cat-icon-badge {
          position: absolute; top: 16px; left: 16px;
          width: 38px; height: 38px; border-radius: 50%;
          background: linear-gradient(135deg, rgba(22, 217, 255, 0.9), rgba(33, 230, 193, 0.9));
          display: flex; align-items: center; justify-content: center; color: #ffffff;
        }

        .cat-body {
          padding: 24px; flex: 1; display: flex; flex-direction: column; justify-content: space-between;
        }

        .cat-card-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 16px; font-weight: 800; color: #0B2545; margin: 0 0 8px;
        }

        .cat-card-desc {
          font-family: 'Inter', sans-serif;
          font-size: 13px; color: #64748b; line-height: 1.6; margin-bottom: 20px;
        }

        .cat-card-footer {
          display: flex; align-items: center; justify-content: space-between;
          padding-top: 14px; border-top: 1px solid #e2e8f0;
          font-family: 'Space Grotesk', sans-serif; font-size: 13px; font-weight: 800; color: #F06543;
        }
      `}</style>

      <div className="cat-eyebrow">
        <Compass size={14} color="#F06543" />
        <span>STAY CATEGORIES</span>
      </div>
      <h2 className="cat-title">CHOOSE YOUR STAY</h2>

      <div ref={gridRef} className="cat-grid">
        {categories.map((cat) => {
          const IconComp = ICON_MAP[cat.icon] || Compass;
          return (
            <div
              key={cat.id || cat.title}
              className="cat-card"
              onClick={() => onSelectCategory && onSelectCategory(cat.title || cat.name)}
            >
              <div className="cat-img-box">
                <img src={cat.image || 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80'} alt={cat.title || cat.name} />
                <div className="cat-icon-badge">
                  <IconComp size={18} />
                </div>
              </div>

              <div className="cat-body">
                <div>
                  <h3 className="cat-card-title">{cat.title || cat.name}</h3>
                  <p className="cat-card-desc">{cat.description}</p>
                </div>

                <div className="cat-card-footer">
                  <span>EXPLORE STAYS</span>
                  <ArrowRight size={13} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
