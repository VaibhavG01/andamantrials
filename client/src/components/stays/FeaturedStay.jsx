// src/components/stays/FeaturedStay.jsx
import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Star, ArrowRight, Sparkles, Check } from 'lucide-react';
import { stayService } from '../../api/stayService';

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedStay({ stay: initialStay, onViewStay }) {
  const [featuredStay, setFeaturedStay] = useState(initialStay || null);
  const cardRef = useRef(null);

  useEffect(() => {
    stayService.getStays()
      .then((res) => {
        const stays = res.data || [];
        if (Array.isArray(stays) && stays.length > 0) {
          const featured = stays.find(s => s.isFeatured || s.featured) || stays[0];
          if (featured) {
            setFeaturedStay({
              id: featured.id,
              name: featured.name,
              slug: featured.slug,
              type: featured.type || featured.category || 'Luxury Resort',
              destination: typeof featured.destination === 'object' && featured.destination !== null ? (featured.destination.name || 'Havelock Island') : (featured.destination || featured.location || 'Havelock Island'),
              location: featured.location || 'Radhanagar Beach, Havelock',
              heroImage: featured.heroImage || 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=85',
              rating: parseFloat(featured.rating || 4.9),
              reviewCount: featured.reviewCount || 128,
              pricePerNight: parseFloat(featured.pricePerNight || 32000),
              shortDescription: featured.shortDescription || 'Occupying lush rainforest along Radhanagar Beach, offering eco-luxury villas.',
              amenities: ['Beach Access', 'Swimming Pool', 'Spa', 'Restaurant', 'Wi-Fi'],
            });
          }
        }
      })
      .catch(() => {});
  }, []);

  const stay = featuredStay || {
    name: 'Taj Exotica Resort & Spa',
    slug: 'taj-exotica-resort-spa',
    type: 'Eco Luxury Resort',
    destination: 'Havelock Island',
    location: 'Radhanagar Beach, Havelock',
    heroImage: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=85',
    rating: 4.9,
    reviewCount: 128,
    pricePerNight: 32000,
    shortDescription: 'Occupying lush rainforest along Radhanagar Beach, offering eco-luxury villas with private plunge pools.',
    amenities: ['Beach Access', 'Swimming Pool', 'Spa', 'Restaurant', 'Wi-Fi'],
  };

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
  }, [stay]);

  return (
    <section className="feat-stay-root">
      <style>{`
        .feat-stay-root {
          max-width: 1340px; margin: 0 auto; padding: 40px 24px 80px;
        }

        .feat-eyebrow {
          display: flex; align-items: center; justify-content: center; gap: 6px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; color: #F06543;
          letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 8px;
        }

        .feat-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(32px, 4.5vw, 52px);
          font-weight: 600; color: #0B2545; text-align: center;
          margin: 0 0 40px; line-height: 1.1;
        }

        .feat-card {
          background: #ffffff;
          backdrop-filter: blur(25px); -webkit-backdrop-filter: blur(25px);
          border: 1.5px solid #e2e8f0;
          border-radius: 28px; overflow: hidden;
          display: grid; grid-template-columns: 1.25fr 1fr;
          box-shadow: 0 24px 64px rgba(0, 0, 0, 0.6);
        }
        @media (max-width: 900px) {
          .feat-card { grid-template-columns: 1fr; }
        }

        .feat-img-box {
          position: relative; min-height: 380px; overflow: hidden;
        }
        .feat-img-box img {
          width: 100%; height: 100%; object-fit: cover; transition: transform 0.8s ease;
        }
        .feat-card:hover .feat-img-box img { transform: scale(1.05); }

        .feat-badge {
          position: absolute; top: 20px; left: 20px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 900; letter-spacing: 0.1em;
          color: #ffffff; background: linear-gradient(135deg, #0B2545, #F06543);
          padding: 6px 16px; border-radius: 20px; text-transform: uppercase;
        }

        .feat-body {
          padding: 40px; display: flex; flex-direction: column; justify-content: space-between;
        }
        @media (max-width: 640px) {
          .feat-body { padding: 24px; }
        }

        .feat-type {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; color: #F06543;
          letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 8px;
        }

        .feat-stay-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(28px, 3.5vw, 42px);
          font-weight: 600; color: #0B2545; line-height: 1.15; margin: 0 0 14px;
        }

        .feat-desc {
          font-family: 'Inter', sans-serif;
          font-size: 14px; color: #64748b; line-height: 1.65; margin-bottom: 24px;
        }

        .amenities-list {
          display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 28px;
        }
        .amenity-chip {
          font-family: 'Inter', sans-serif; font-size: 12px; color: #475569;
          background: #ffffff; border: 1px solid #e2e8f0;
          padding: 5px 12px; border-radius: 12px; display: flex; align-items: center; gap: 6px;
        }

        .feat-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; letter-spacing: 0.08em;
          color: #ffffff; background: linear-gradient(135deg, #0B2545, #F06543);
          border: none; padding: 13px 26px; border-radius: 14px;
          cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
          transition: all 0.3s ease; align-self: flex-start;
          box-shadow: 0 4px 20px rgba(22, 217, 255, 0.35);
        }
        .feat-btn:hover {
          transform: translateY(-2px); box-shadow: 0 8px 28px rgba(22, 217, 255, 0.55);
        }
      `}</style>

      <div className="feat-eyebrow">
        <Sparkles size={14} color="#F06543" />
        <span>HANDPICKED FOR YOU</span>
      </div>
      <h2 className="feat-title">STAYS WE LOVE</h2>

      <div ref={cardRef} className="feat-card">
        <div className="feat-img-box">
          <img src={stay.heroImage} alt={stay.name} />
          <span className="feat-badge">FEATURED RESORT</span>
        </div>

        <div className="feat-body">
          <div>
            <div className="feat-type">{stay.type}</div>
            <h3 className="feat-stay-title">{stay.name}</h3>
            <p className="feat-desc">{stay.shortDescription}</p>

            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20, fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, color: '#64748b' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 4, color: '#F06543' }}>
                <MapPin size={13} color="#F06543" /> {typeof stay.destination === 'string' ? stay.destination : (stay.destination?.name || stay.location || 'Havelock Island')}
              </span>
              <span>•</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 4, color: '#ffd700' }}>
                <Star size={13} fill="#ffd700" color="#ffd700" /> {stay.rating} ({stay.reviewCount} reviews)
              </span>
            </div>

            <div className="amenities-list">
              {stay.amenities.map((a, i) => (
                <span key={i} className="amenity-chip">
                  <Check size={12} color="#F06543" /> {a}
                </span>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyBetween: 'space-between' }}>
            <div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12.5, color: '#64748b' }}>STARTING FROM</div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 20, fontWeight: 900, color: '#F06543' }}>
                ₹{stay.pricePerNight.toLocaleString()} <span style={{ fontSize: 11, fontWeight: 600, color: '#64748b' }}>/ night</span>
              </div>
            </div>

            <button onClick={() => onViewStay && onViewStay(stay)} className="feat-btn">
              <span>VIEW STAY</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
