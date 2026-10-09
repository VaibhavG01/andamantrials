// src/components/destinations/DestinationCategories.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Waves, Building2, Compass, Anchor, Trees, Flame } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const DEST_CATEGORIES = [
  {
    id: 'beaches-scuba',
    filterValue: 'Beaches & Scuba',
    title: 'Beaches & Scuba Lagoons',
    desc: 'World-famous Radhanagar white sands, turquoise coral lagoons, and Asia’s premier PADI dive centers in Havelock & Neil.',
    badge: 'TOP CHOICE',
    icon: Waves,
    image: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?auto=format&fit=crop&w=800&q=80',
    islandsCount: '2 Major Isles',
  },
  {
    id: 'heritage-capital',
    filterValue: 'Heritage & Capital',
    title: 'Heritage & Capital Hub',
    desc: 'National Cellular Jail memorial, Netaji Subhash Chandra Bose Island ruins, vibrant marine museums and harbor walks in Port Blair.',
    badge: 'HISTORIC GATEWAY',
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1584285406798-842245b0a394?auto=format&fit=crop&w=800&q=80',
    islandsCount: 'Capital Port',
  },
  {
    id: 'eco-mangroves',
    filterValue: 'Eco Mangrove Safari',
    title: 'Eco Mangroves & Caves',
    desc: 'Offbeat high-speed mangrove boat rides through dense creeks, stalactite caves, mud volcanoes & parrot island sanctuaries.',
    badge: 'ECO ADVENTURE',
    icon: Compass,
    image: 'https://images.unsplash.com/photo-1582298538104-1b778263da24?auto=format&fit=crop&w=800&q=80',
    islandsCount: 'Middle Andaman',
  },
  {
    id: 'peaks-sandbars',
    filterValue: 'Peaks & Sandbars',
    title: 'Twin Sandbars & Peaks',
    desc: 'The natural white sandbar linking Ross & Smith twin islands, Saddle Peak summit rainforest treks & turtle nesting beaches.',
    badge: 'HIGHEST PEAK',
    icon: Trees,
    image: 'https://images.unsplash.com/photo-1610014766858-69315bc32b4f?auto=format&fit=crop&w=800&q=80',
    islandsCount: 'North Andaman',
  },
  {
    id: 'biosphere-frontier',
    filterValue: 'Biosphere',
    title: 'Biosphere & Indira Point',
    desc: 'India’s southernmost frontier hosting the UNESCO Great Nicobar Biosphere Reserve and giant leatherback sea turtle nesting.',
    badge: 'FRONTIER ISLE',
    icon: Anchor,
    image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800&q=80',
    islandsCount: 'Nicobar Archipelago',
  },
  {
    id: 'volcanic-jewels',
    filterValue: 'Adventure',
    title: 'Volcanoes & Remote Atolls',
    desc: 'Live active Barren Island volcano charters, uninhabited Cinque Island reef systems & untouched Long Island Lalaji Bay.',
    badge: 'EXCLUSIVE ATROLLS',
    icon: Flame,
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80',
    islandsCount: 'Outer Atolls',
  },
];

export default function DestinationCategories({ onSelectCategory }) {
  const gridRef = useRef(null);

  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll('.cat-dest-card');
    gsap.fromTo(
      cards,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: gridRef.current, start: 'top 85%' }
      }
    );
  }, []);

  return (
    <section className="dest-categories-root">
      <style>{`
        .dest-categories-root {
          max-width: 1340px;
          margin: 0 auto;
          padding: 60px 24px 80px;
        }

        .dest-cat-eyebrow {
          display: flex; align-items: center; justify-content: center; gap: 6px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; color: #F06543;
          letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 8px;
        }

        .dest-cat-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(32px, 4.5vw, 52px);
          font-weight: 700; color: #0B2545; text-align: center;
          margin: 0 0 44px; line-height: 1.1;
        }

        .dest-cat-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 26px;
        }
        @media (max-width: 1024px) {
          .dest-cat-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .dest-cat-grid { grid-template-columns: 1fr; }
        }

        .cat-dest-card {
          background: #ffffff;
          border: 2px solid #e2e8f0;
          border-radius: 24px; overflow: hidden;
          display: flex; flex-direction: column;
          box-shadow: 0 4px 20px rgba(0, 45, 98, 0.05);
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
        }
        .cat-dest-card:hover {
          transform: translateY(-8px);
          border-color: #F06543;
          box-shadow: 0 20px 45px rgba(0, 45, 98, 0.14);
        }

        .cat-dest-img-box {
          position: relative; height: 200px; overflow: hidden; background: #f1f5f9;
        }
        .cat-dest-img-box img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 0.6s ease;
        }
        .cat-dest-card:hover .cat-dest-img-box img {
          transform: scale(1.1);
        }

        .cat-dest-icon-badge {
          position: absolute; top: 16px; left: 16px;
          width: 40px; height: 40px; border-radius: 50%;
          background: linear-gradient(135deg, #FF6B4A, #F06543);
          display: flex; align-items: center; justify-content: center;
          color: #ffffff; box-shadow: 0 4px 14px rgba(0, 45, 98, 0.3);
        }

        .cat-dest-duration-badge {
          position: absolute; top: 16px; right: 16px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11.5px; font-weight: 800; color: #0B2545;
          background: #ffffff;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          border: 1.5px solid #e2e8f0;
          padding: 4px 12px; border-radius: 14px;
        }

        .cat-dest-body {
          padding: 24px; flex: 1; display: flex; flex-direction: column; justify-content: space-between;
        }

        .cat-dest-card-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 17px; font-weight: 900; color: #0B2545;
          margin: 0 0 8px; transition: color 0.25s ease;
        }
        .cat-dest-card:hover .cat-dest-card-title { color: #F06543; }

        .cat-dest-card-desc {
          font-family: 'Inter', sans-serif;
          font-size: 13px; color: #64748b; line-height: 1.6;
          margin-bottom: 20px; font-weight: 500;
        }

        .cat-dest-card-footer {
          display: flex; align-items: center; justify-content: space-between;
          padding-top: 14px; border-top: 1.5px solid #f1f5f9;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 900; color: #F06543;
          letter-spacing: 0.05em;
        }
      `}</style>

      <div className="dest-cat-eyebrow">
        <Compass size={14} color="#F06543" />
        <span>ISLAND EXPERIENCES & VIBES</span>
      </div>
      <h2 className="dest-cat-title">CHOOSE YOUR ISLAND ATMOSPHERE</h2>

      <div ref={gridRef} className="dest-cat-grid">
        {DEST_CATEGORIES.map((cat) => {
          const IconComp = cat.icon;
          return (
            <div
              key={cat.id}
              className="cat-dest-card"
              onClick={() => onSelectCategory && onSelectCategory(cat.filterValue)}
            >
              <div className="cat-dest-img-box">
                <img src={cat.image} alt={cat.title} />
                <div className="cat-dest-icon-badge">
                  <IconComp size={18} />
                </div>
                <div className="cat-dest-duration-badge">
                  {cat.islandsCount}
                </div>
              </div>

              <div className="cat-dest-body">
                <div>
                  <div className="cat-dest-card-title">{cat.title}</div>
                  <p className="cat-dest-card-desc">{cat.desc}</p>
                </div>

                <div className="cat-dest-card-footer">
                  <span>EXPLORE ISLANDS</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
