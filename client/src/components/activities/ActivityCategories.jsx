// src/components/activities/ActivityCategories.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Waves, Flame, Compass, Anchor, Wind, Eye, Clock } from 'lucide-react';
import { masterService } from '../../api/masterService';
import { activityService } from '../../api/activityService';

gsap.registerPlugin(ScrollTrigger);

const ICON_MAP = {
  Waves,
  Flame,
  Compass,
  Anchor,
  Wind,
  Eye,
};

const DEFAULT_CATEGORIES = [
  {
    id: 'scuba-diving',
    title: 'Scuba & Reef Diving',
    categoryKey: 'SCUBA_DIVING',
    description: 'PADI certified dive programs across Havelock, Neil & Barren Island reefs.',
    icon: 'Anchor',
    duration: '2-4 Hours',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'water-sports',
    title: 'Water Sports & Parasailing',
    categoryKey: 'WATER_SPORTS',
    description: 'High-speed jet skiing, banana rides, speedboats, and parasailing over coral bays.',
    icon: 'Waves',
    duration: '1-2 Hours',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'kayaking',
    title: 'Mangrove & Night Kayaking',
    categoryKey: 'KAYAKING',
    description: 'Paddle through dense mangrove lagoons and experience glowing bioluminescence.',
    icon: 'Compass',
    duration: '2 Hours',
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'sea-walk',
    title: 'Underwater Sea Walk',
    categoryKey: 'SEA_WALK',
    description: 'Walk on the ocean bed surrounded by vibrant tropical clownfish and parrotfish.',
    icon: 'Eye',
    duration: '45 Mins',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'snorkeling',
    title: 'Coral Reef Snorkeling',
    categoryKey: 'SNORKELING',
    description: 'Shallow crystal waters filled with intact coral formations at Elephant & Bharatpur beaches.',
    icon: 'Wind',
    duration: '1 Hour',
    image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'game-fishing',
    title: 'Deep Sea Game Fishing',
    categoryKey: 'FISHING',
    description: 'Sport fishing expeditions for Giant Trevally, Tuna, and Marlin in deep oceanic trenches.',
    icon: 'Flame',
    duration: 'Half / Full Day',
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80',
  },
];

export default function ActivityCategories({ onSelectCategory }) {
  const [categories, setCategories] = React.useState(DEFAULT_CATEGORIES);
  const gridRef = useRef(null);

  useEffect(() => {
    masterService.getCategories('ACTIVITY')
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          const mapped = data.map((c, i) => ({
            id: c.slug || `cat-${c.id}`,
            title: c.name,
            categoryKey: c.slug ? c.slug.toUpperCase().replace(/-/g, '_') : c.name,
            description: c.description || 'Experience extraordinary island adventure in the Andaman Sea.',
            icon: c.icon || (i % 2 === 0 ? 'Waves' : 'Compass'),
            duration: '1-3 Hours',
            image: DEFAULT_CATEGORIES[i % DEFAULT_CATEGORIES.length].image,
          }));
          setCategories(mapped);
        }
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll('.cat-card');
    gsap.fromTo(
      cards,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: gridRef.current, start: 'top 85%' }
      }
    );
  }, [categories]);

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
          font-weight: 700; color: #0B2545; text-align: center;
          margin: 0 0 44px; line-height: 1.1;
        }

        .cat-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 26px;
        }
        @media (max-width: 1024px) {
          .cat-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .cat-grid { grid-template-columns: 1fr; }
        }

        .cat-card {
          background: #ffffff;
          border: 2px solid #e2e8f0;
          border-radius: 24px; overflow: hidden;
          display: flex; flex-direction: column;
          box-shadow: 0 4px 20px rgba(0, 45, 98, 0.05);
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
        }
        .cat-card:hover {
          transform: translateY(-8px);
          border-color: #F06543;
          box-shadow: 0 20px 45px rgba(0, 45, 98, 0.14);
        }

        .cat-img-box {
          position: relative; height: 200px; overflow: hidden; background: #f1f5f9;
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
          width: 40px; height: 40px; border-radius: 50%;
          background: linear-gradient(135deg, #FF6B4A, #F06543);
          display: flex; align-items: center; justify-content: center;
          color: #ffffff; box-shadow: 0 4px 14px rgba(0, 45, 98, 0.3);
        }

        .cat-duration-badge {
          position: absolute; top: 16px; right: 16px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11.5px; font-weight: 800; color: #0B2545;
          background: #ffffff;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          border: 1.5px solid #e2e8f0;
          padding: 4px 12px; border-radius: 14px;
          display: flex; align-items: center; gap: 4px;
        }

        .cat-body {
          padding: 24px; flex: 1; display: flex; flex-direction: column; justify-content: space-between;
        }

        .cat-card-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 16px; font-weight: 900; color: #0B2545;
          margin: 0 0 8px; transition: color 0.25s ease;
        }
        .cat-card:hover .cat-card-title { color: #F06543; }

        .cat-card-desc {
          font-family: 'Inter', sans-serif;
          font-size: 13px; color: #64748b; line-height: 1.6;
          margin-bottom: 20px; font-weight: 500;
        }

        .cat-card-footer {
          display: flex; align-items: center; justify-content: space-between;
          padding-top: 14px; border-top: 1.5px solid #f1f5f9;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 900; color: #F06543;
          letter-spacing: 0.05em;
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
      <h2 className="cat-title">SELECT AN ACTIVITY STYLE</h2>

      <div ref={gridRef} className="cat-grid">
        {categories.map((cat) => {
          const IconComp = ICON_MAP[cat.icon] || Compass;
          return (
            <div
              key={cat.id}
              className="cat-card"
              onClick={() => onSelectCategory && onSelectCategory(cat.categoryKey || cat.title)}
            >
              <div className="cat-img-box">
                <img src={cat.image} alt={cat.title} />
                <div className="cat-icon-badge">
                  <IconComp size={18} />
                </div>
                <div className="cat-duration-badge">
                  <Clock size={11} color="#F06543" />
                  <span>{cat.duration}</span>
                </div>
              </div>

              <div className="cat-body">
                <div>
                  <h3 className="cat-card-title">{cat.title}</h3>
                  <p className="cat-card-desc">{cat.description}</p>
                </div>

                <div className="cat-card-footer">
                  <span>EXPLORE ACTIVITIES</span>
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
