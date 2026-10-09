// src/components/packages/PackageCategories.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Heart, Users, Compass, Sparkles, Wallet, Trees } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const PKG_CATEGORIES = [
  {
    id: 'honeymoon',
    filterValue: 'HONEYMOON',
    title: 'Honeymoon & Romantic Escapes',
    desc: 'Private pool villas, candlelit beach dinners by the turquoise surf, flower bed decor and sunset cruises in Havelock & Neil.',
    badge: 'COUPLES CHOICE',
    icon: Heart,
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    itemCount: '12 Curated Packages',
  },
  {
    id: 'family',
    filterValue: 'FAMILY',
    title: 'Family Island Vacations',
    desc: 'Relaxed island hops with kid-friendly shallow beaches, glass-bottom coral boats, Cellular Jail sound & light show, and spacious family suites.',
    badge: 'ALL AGES',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    itemCount: '16 Family Itineraries',
  },
  {
    id: 'adventure',
    filterValue: 'ADVENTURE',
    title: 'Adventure & Scuba Diving',
    desc: 'Adrenaline-packed dive tours, deep sea Dixon’s Pinnacle expeditions, Seakart self-drive, bioluminescent night kayaking and jungle hikes.',
    badge: 'HIGH ADRENALINE',
    icon: Compass,
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
    itemCount: '10 Action Tours',
  },
  {
    id: 'luxury',
    filterValue: 'LUXURY',
    title: '5★ Luxury Private Charters',
    desc: 'Bespoke Taj Exotica & Barefoot luxury retreats, Makruzz Royal Class catamaran cabins, private helicopter transfers & champagne sunset yachts.',
    badge: 'ULTRA LUXURY',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800&q=80',
    itemCount: '8 Exclusive Packages',
  },
  {
    id: 'budget',
    filterValue: 'BUDGET',
    title: 'Value & Backpacker Escapes',
    desc: 'Cost-effective island hopping with verified boutique eco-resorts, scheduled catamaran seats, rented scooters and self-guided beach trails.',
    badge: 'BEST VALUE',
    icon: Wallet,
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80',
    itemCount: '6 Pocket-Friendly Trips',
  },
  {
    id: 'eco-nature',
    filterValue: 'EXPLORER',
    title: 'Wild Eco & Mangrove Safaris',
    desc: 'Offbeat expeditions through Baratang stalactite caves, Ross & Smith twin sandbars in Diglipur, and Cuthbert Bay sea turtle nesting.',
    badge: 'NATURE TRAILS',
    icon: Trees,
    image: 'https://images.unsplash.com/photo-1582298538104-1b778263da24?auto=format&fit=crop&w=800&q=80',
    itemCount: '7 Offbeat Safaris',
  },
];

export default function PackageCategories({ onSelectCategory }) {
  const gridRef = useRef(null);

  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll('.cat-pkg-card');
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
    <section className="pkg-categories-root">
      <style>{`
        .pkg-categories-root {
          max-width: 1340px;
          margin: 0 auto;
          padding: 60px 24px 80px;
        }

        .pkg-cat-eyebrow {
          display: flex; align-items: center; justify-content: center; gap: 6px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; color: #F06543;
          letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 8px;
        }

        .pkg-cat-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(32px, 4.5vw, 52px);
          font-weight: 700; color: #0B2545; text-align: center;
          margin: 0 0 44px; line-height: 1.1;
        }

        .pkg-cat-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 26px;
        }
        @media (max-width: 1024px) {
          .pkg-cat-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .pkg-cat-grid { grid-template-columns: 1fr; }
        }

        .cat-pkg-card {
          background: #ffffff;
          border: 2px solid #e2e8f0;
          border-radius: 24px; overflow: hidden;
          display: flex; flex-direction: column;
          box-shadow: 0 4px 20px rgba(0, 45, 98, 0.05);
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
        }
        .cat-pkg-card:hover {
          transform: translateY(-8px);
          border-color: #F06543;
          box-shadow: 0 20px 45px rgba(0, 45, 98, 0.14);
        }

        .cat-pkg-img-box {
          position: relative; height: 200px; overflow: hidden; background: #f1f5f9;
        }
        .cat-pkg-img-box img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 0.6s ease;
        }
        .cat-pkg-card:hover .cat-pkg-img-box img {
          transform: scale(1.1);
        }

        .cat-pkg-icon-badge {
          position: absolute; top: 16px; left: 16px;
          width: 40px; height: 40px; border-radius: 50%;
          background: linear-gradient(135deg, #FF6B4A, #F06543);
          display: flex; align-items: center; justify-content: center;
          color: #ffffff; box-shadow: 0 4px 14px rgba(0, 45, 98, 0.3);
        }

        .cat-pkg-duration-badge {
          position: absolute; top: 16px; right: 16px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11.5px; font-weight: 800; color: #0B2545;
          background: #ffffff;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          border: 1.5px solid #e2e8f0;
          padding: 4px 12px; border-radius: 14px;
        }

        .cat-pkg-body {
          padding: 24px; flex: 1; display: flex; flex-direction: column; justify-content: space-between;
        }

        .cat-pkg-card-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 17px; font-weight: 900; color: #0B2545;
          margin: 0 0 8px; transition: color 0.25s ease;
        }
        .cat-pkg-card:hover .cat-pkg-card-title { color: #F06543; }

        .cat-pkg-card-desc {
          font-family: 'Inter', sans-serif;
          font-size: 13px; color: #64748b; line-height: 1.6;
          margin-bottom: 20px; font-weight: 500;
        }

        .cat-pkg-card-footer {
          display: flex; align-items: center; justify-content: space-between;
          padding-top: 14px; border-top: 1.5px solid #f1f5f9;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 900; color: #F06543;
          letter-spacing: 0.05em;
        }
      `}</style>

      <div className="pkg-cat-eyebrow">
        <Compass size={14} color="#F06543" />
        <span>HOLIDAY EXPERIENCES & THEMES</span>
      </div>
      <h2 className="pkg-cat-title">CHOOSE YOUR TRAVEL STYLE</h2>

      <div ref={gridRef} className="pkg-cat-grid">
        {PKG_CATEGORIES.map((cat) => {
          const IconComp = cat.icon;
          return (
            <div
              key={cat.id}
              className="cat-pkg-card"
              onClick={() => onSelectCategory && onSelectCategory(cat.filterValue)}
            >
              <div className="cat-pkg-img-box">
                <img src={cat.image} alt={cat.title} />
                <div className="cat-pkg-icon-badge">
                  <IconComp size={18} />
                </div>
                <div className="cat-pkg-duration-badge">
                  {cat.itemCount}
                </div>
              </div>

              <div className="cat-pkg-body">
                <div>
                  <div className="cat-pkg-card-title">{cat.title}</div>
                  <p className="cat-pkg-card-desc">{cat.desc}</p>
                </div>

                <div className="cat-pkg-card-footer">
                  <span>EXPLORE PACKAGES</span>
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
