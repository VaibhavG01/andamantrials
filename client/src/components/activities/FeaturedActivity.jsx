// src/components/activities/FeaturedActivity.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Clock, ArrowRight, Flame, Users, Check, Star, Shield } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedActivity({ activity, onViewDetails, onBookNow }) {
  const cardRef = useRef(null);

  useEffect(() => {
    if (!cardRef.current) return;
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.8, ease: 'power2.out',
        scrollTrigger: { trigger: cardRef.current, start: 'top 85%' }
      }
    );
  }, []);

  const featuredItem = activity || {
    name: 'PADI Discover Scuba Diving with Photos & Videos',
    category: 'Scuba & Snorkeling',
    location: 'Elephant Beach, Havelock Island',
    duration: '2 Hours (45 Mins Underwater)',
    price: 3500,
    rating: 4.95,
    reviewsCount: 1420,
    overview: 'Dive into world-famous Nemo Reef with 1:1 certified PADI divemasters. Experience crystal clear coral gardens, vibrant clownfish, sea turtles, and receive free 4K underwater GoPro video.',
    bestFor: 'Non-Swimmers, Beginners & Couples',
    features: [
      '1:1 Dedicated Certified PADI Instructor',
      'Free 4K GoPro Underwater Photos & Video',
      'Full Mares & Scubapro Equipment Included',
      'Zero Swimming Skills Required',
    ],
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=85',
  };

  const sellingPrice = Number(featuredItem.price || 3500);
  const originalPrice = Number(featuredItem.originalPrice) || (sellingPrice > 0 ? Math.round(sellingPrice * 1.2) : 4500);
  const discountPercent = originalPrice > sellingPrice ? Math.round(((originalPrice - sellingPrice) / originalPrice) * 100) : 0;
  const formattedPrice = `₹${sellingPrice.toLocaleString('en-IN')}`;
  const formattedOriginalPrice = `₹${originalPrice.toLocaleString('en-IN')}`;

  return (
    <section className="featured-act-root">
      <style>{`
        .featured-act-root {
          max-width: 1340px;
          margin: 0 auto;
          padding: 40px 24px 70px;
        }

        .featured-eyebrow {
          display: flex; align-items: center; justify-content: center; gap: 6px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; color: #F06543;
          letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 8px;
        }

        .featured-main-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(32px, 4.5vw, 54px);
          font-weight: 700; color: #0B2545; text-align: center;
          margin: 0 0 40px; line-height: 1.1;
        }

        .featured-card {
          background: #ffffff;
          border: 2px solid #e2e8f0;
          border-radius: 28px; overflow: hidden;
          display: grid; grid-template-columns: 1.25fr 1fr;
          box-shadow: 0 24px 64px rgba(0, 45, 98, 0.12), 0 0 40px rgba(13, 148, 136, 0.06);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .featured-card:hover {
          border-color: #F06543;
          transform: translateY(-4px);
          box-shadow: 0 30px 70px rgba(0, 45, 98, 0.18);
        }
        @media (max-width: 960px) {
          .featured-card { grid-template-columns: 1fr; }
        }

        .featured-img-box {
          position: relative; min-height: 380px; overflow: hidden; background: #f1f5f9;
        }
        .featured-img-box img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 0.8s ease;
        }
        .featured-card:hover .featured-img-box img {
          transform: scale(1.06);
        }

        .featured-badge {
          position: absolute; top: 20px; left: 20px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11px; font-weight: 900; letter-spacing: 0.1em;
          color: #ffffff; background: linear-gradient(135deg, #FF6B4A, #F06543);
          padding: 6px 16px; border-radius: 20px; text-transform: uppercase;
          box-shadow: 0 4px 14px rgba(0, 45, 98, 0.3);
        }

        .featured-body {
          padding: 40px; display: flex; flex-direction: column; justify-content: space-between;
        }
        @media (max-width: 640px) {
          .featured-body { padding: 24px; }
        }

        .featured-type {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 800; color: #F06543;
          letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 8px;
        }

        .featured-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(26px, 3.2vw, 38px);
          font-weight: 700; color: #0B2545;
          line-height: 1.15; margin: 0 0 14px;
        }

        .featured-excerpt {
          font-family: 'Inter', sans-serif;
          font-size: 14px; color: #64748b;
          line-height: 1.65; margin-bottom: 24px;
        }

        .info-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 12px;
          margin-bottom: 24px; padding: 16px;
          background: #f8fafc;
          border: 1.5px solid #e2e8f0;
          border-radius: 16px;
        }

        .info-item {
          display: flex; align-items: center; gap: 8px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; color: #334155; font-weight: 800;
        }

        .features-list {
          display: flex; flex-direction: column; gap: 9px; margin-bottom: 28px;
        }
        .feature-check-item {
          display: flex; align-items: center; gap: 8px;
          font-family: 'Inter', sans-serif; font-size: 13.5px; color: #475569; font-weight: 500;
        }

        .featured-action-row {
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: 16px; padding-top: 20px; border-top: 1.5px solid #f1f5f9;
        }

        .featured-btns-group {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .featured-btn-view {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 800; letter-spacing: 0.05em;
          color: #0B2545; background: #f8fafc;
          border: 1.5px solid #cbd5e1; padding: 13px 22px; border-radius: 14px;
          cursor: pointer; display: inline-flex; align-items: center; gap: 7px;
          transition: all 0.25s ease; text-transform: uppercase;
        }
        .featured-btn-view:hover {
          background: #0B2545; color: #ffffff; border-color: #0B2545;
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(0, 45, 98, 0.2);
        }

        .featured-btn-book {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 900; letter-spacing: 0.05em;
          color: #ffffff; background: linear-gradient(135deg, #FF6B4A, #F06543);
          border: 1.5px solid transparent; padding: 13px 26px; border-radius: 14px;
          cursor: pointer; display: inline-flex; align-items: center; gap: 7px;
          transition: all 0.25s ease; text-transform: uppercase;
          box-shadow: 0 6px 20px rgba(0, 45, 98, 0.25);
        }
        .featured-btn-book:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(13, 148, 136, 0.45);
          background: linear-gradient(135deg, #F06543, #FF6B4A);
        }

        .featured-price-box {
          display: flex; flex-direction: column;
        }
        .price-sub {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 10px; font-weight: 800; color: #64748b; letter-spacing: 0.08em; text-transform: uppercase;
        }
        .price-val {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 24px; font-weight: 900; color: #0B2545;
        }
      `}</style>

      <div className="featured-eyebrow">
        <Flame size={15} color="#F06543" />
        <span>MUST-EXPERIENCE IN ANDAMAN</span>
      </div>
      <h2 className="featured-main-title">THE ANDAMAN OCEAN SPOTLIGHT</h2>

      <div ref={cardRef} className="featured-card">
        <div className="featured-img-box">
          <img
            src={featuredItem.image || featuredItem.heroImage || 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=85'}
            alt={featuredItem.name}
          />
          <span className="featured-badge">SPOTLIGHT EXPERIENCE</span>
        </div>

        <div className="featured-body">
          <div>
            <div className="featured-type">{featuredItem.category || 'SCUBA & SNORKELING'}</div>
            <h3 className="featured-title">{featuredItem.name}</h3>
            <p className="featured-excerpt">{featuredItem.overview || featuredItem.description || featuredItem.excerpt}</p>

            <div className="info-grid">
              <div className="info-item">
                <Clock size={15} color="#F06543" />
                <span>{featuredItem.duration || '2 Hours'}</span>
              </div>
              <div className="info-item">
                <MapPin size={15} color="#F06543" />
                <span>{featuredItem.location || 'Havelock Island'}</span>
              </div>
              <div className="info-item" style={{ gridColumn: 'span 2' }}>
                <Users size={15} color="#F06543" />
                <span>Best For: {featuredItem.bestFor || 'Beginners, Non-Swimmers & Families'}</span>
              </div>
            </div>

            <div className="features-list">
              {(featuredItem.features || [
                '1:1 Dedicated Certified PADI Instructor',
                'Free 4K GoPro Underwater Photos & Video',
                'Full Mares & Scubapro Equipment Included',
                'Zero Swimming Skills Required',
              ]).map((feat, i) => (
                <div key={i} className="feature-check-item">
                  <Check size={15} color="#F06543" className="shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="featured-action-row">
            <div className="featured-price-box">
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span className="price-sub">ALL-INCLUSIVE FROM</span>
                {discountPercent > 0 && (
                  <span style={{ fontSize: 10, fontWeight: 900, color: '#16a34a', background: '#dcfce7', padding: '1px 6px', borderRadius: 6 }}>
                    {discountPercent}% OFF
                  </span>
                )}
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                <span className="price-val">{formattedPrice} <span className="text-xs font-normal text-slate-500">/ person</span></span>
                {originalPrice > sellingPrice && (
                  <span style={{ fontSize: 13, color: '#94a3b8', textDecoration: 'line-through', fontWeight: 600 }}>
                    {formattedOriginalPrice}
                  </span>
                )}
              </div>
            </div>

            <div className="featured-btns-group">
              <button
                type="button"
                onClick={() => {
                  if (onViewDetails) {
                    onViewDetails(featuredItem);
                  } else {
                    const slug = featuredItem.slug || featuredItem.id || 'scuba-diving';
                    window.history.pushState({}, '', `/activities/${slug}`);
                    window.dispatchEvent(new Event('popstate'));
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className="featured-btn-view"
              >
                <span>View Details</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  if (onBookNow) {
                    onBookNow(featuredItem);
                  } else {
                    const slug = featuredItem.slug || featuredItem.id || 'scuba-diving';
                    window.history.pushState({}, '', `/activity-booking?id=${slug}`);
                    window.dispatchEvent(new Event('popstate'));
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className="featured-btn-book"
              >
                <span>Book Now</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
