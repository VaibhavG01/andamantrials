// src/components/cruises/FeaturedCruise.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Clock, ArrowRight, Sunset, Users, Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedCruise({ cruise, onViewDetails }) {
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

  const rawFeatures = cruise?.features;
  const parsedFeatures = Array.isArray(rawFeatures)
    ? rawFeatures
    : (typeof rawFeatures === 'string'
        ? (() => { try { const p = JSON.parse(rawFeatures); return Array.isArray(p) ? p : rawFeatures.split(',').map(s=>s.trim()).filter(Boolean); } catch { return rawFeatures.split(',').map(s=>s.trim()).filter(Boolean); } })()
        : null);

  const featuredItem = {
    name: cruise?.name || 'ANDAMAN SUNSET SAIL',
    type: cruise?.type || 'Sunset Cruise',
    location: cruise?.location || cruise?.departurePoint || 'Port Blair Harbour',
    duration: cruise?.duration || '2 Hours',
    excerpt: cruise?.excerpt || cruise?.shortDescription || 'Watch the Andaman horizon transform as the sun disappears into the sea. A timeless ocean experience.',
    bestFor: cruise?.bestFor || 'Couples & Solo Travelers',
    features: (parsedFeatures && parsedFeatures.length > 0) ? parsedFeatures : ['Golden Hour Sky Views', 'Relaxed Sailing', 'Onboard Safety Crew', 'Complimentary Refreshments'],
    image: cruise?.coverImage || cruise?.heroImage || cruise?.image || 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85',
  };

  return (
    <section className="featured-cruise-root">
      <style>{`
        .featured-cruise-root {
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
          font-weight: 600; color: #0B2545; text-align: center;
          margin: 0 0 40px; line-height: 1.1;
        }

        .featured-card {
          background: #ffffff;
          backdrop-filter: blur(25px); -webkit-backdrop-filter: blur(25px);
          border: 1.5px solid #e2e8f0;
          border-radius: 28px; overflow: hidden;
          display: grid; grid-template-columns: 1.25fr 1fr;
          box-shadow: 0 24px 64px rgba(0, 0, 0, 0.6), 0 0 40px rgba(22, 217, 255, 0.08);
          transition: border-color 0.4s ease;
        }
        .featured-card:hover {
          border-color: rgba(33, 230, 193, 0.5);
        }
        @media (max-width: 900px) {
          .featured-card { grid-template-columns: 1fr; }
        }

        .featured-img-box {
          position: relative; min-height: 380px; overflow: hidden;
        }
        .featured-img-box img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 0.8s ease;
        }
        .featured-card:hover .featured-img-box img {
          transform: scale(1.05);
        }

        .featured-badge {
          position: absolute; top: 20px; left: 20px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 900; letter-spacing: 0.1em;
          color: #ffffff; background: linear-gradient(135deg, #0B2545, #F06543);
          padding: 6px 16px; border-radius: 20px; text-transform: uppercase;
        }

        .featured-body {
          padding: 40px; display: flex; flex-direction: column; justify-content: space-between;
        }
        @media (max-width: 640px) {
          .featured-body { padding: 24px; }
        }

        .featured-type {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; color: #F06543;
          letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 8px;
        }

        .featured-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(28px, 3.5vw, 42px);
          font-weight: 600; color: #0B2545;
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
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
        }

        .info-item {
          display: flex; align-items: center; gap: 8px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; color: #334155; font-weight: 700;
        }

        .features-list {
          display: flex; flex-direction: column; gap: 8px; margin-bottom: 28px;
        }
        .feature-check-item {
          display: flex; align-items: center; gap: 8px;
          font-family: 'Inter', sans-serif; font-size: 13px; color: #475569;
        }

        .featured-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; letter-spacing: 0.08em;
          color: #ffffff; background: linear-gradient(135deg, #0B2545, #F06543);
          border: none; padding: 13px 26px; border-radius: 14px;
          cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
          transition: all 0.3s ease; align-self: flex-start;
          box-shadow: 0 4px 20px rgba(22, 217, 255, 0.35);
        }
        .featured-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(22, 217, 255, 0.55);
        }
      `}</style>

      <div className="featured-eyebrow">
        <Sunset size={14} color="#F06543" />
        <span>FEATURED CRUISE EXPERIENCE</span>
      </div>
      <h2 className="featured-main-title">THE ANDAMAN SEA, YOUR WAY</h2>

      <div ref={cardRef} className="featured-card">
        <div className="featured-img-box">
          <img src={featuredItem.image} alt={featuredItem.name} />
          <span className="featured-badge">FEATURED EXPERIENCE</span>
        </div>

        <div className="featured-body">
          <div>
            <div className="featured-type">{featuredItem.type}</div>
            <h3 className="featured-title">{featuredItem.name}</h3>
            <p className="featured-excerpt">{featuredItem.excerpt}</p>

            <div className="info-grid">
              <div className="info-item">
                <Clock size={14} color="#F06543" />
                <span>{featuredItem.duration}</span>
              </div>
              <div className="info-item">
                <MapPin size={14} color="#F06543" />
                <span>{featuredItem.location}</span>
              </div>
              <div className="info-item" style={{ gridColumn: 'span 2' }}>
                <Users size={14} color="#F06543" />
                <span>Best For: {featuredItem.bestFor}</span>
              </div>
            </div>

            <div className="features-list">
              {featuredItem.features.map((feat, i) => (
                <div key={i} className="feature-check-item">
                  <Check size={14} color="#F06543" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => onViewDetails && onViewDetails(featuredItem)}
            className="featured-btn"
          >
            <span>VIEW EXPERIENCE</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}
