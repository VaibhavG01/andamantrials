import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, MessageCircle } from 'lucide-react';
import { testimonialService } from '../../api/testimonialService';

gsap.registerPlugin(ScrollTrigger);

export default function CruiseReviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const cardsRef = useRef(null);

  useEffect(() => {
    testimonialService.getTestimonials()
      .then((res) => {
        if (res && res.data && Array.isArray(res.data) && res.data.length > 0) {
          setReviews(res.data);
        }
      })
      .catch((err) => console.error('Failed to load cruise reviews:', err))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (!cardsRef.current || loading) return;
    const cards = cardsRef.current.querySelectorAll('.review-card');
    if (cards.length > 0) {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power2.out',
          scrollTrigger: { trigger: cardsRef.current, start: 'top 85%' }
        }
      );
    }
  }, [reviews, loading]);

  return (
    <section className="reviews-root">
      <style>{`
        .reviews-root {
          max-width: 1340px;
          margin: 0 auto;
          padding: 80px 24px;
        }

        .reviews-eyebrow {
          display: flex; align-items: center; justify-content: center; gap: 6px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; color: #F06543;
          letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 8px;
        }

        .reviews-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(32px, 4.5vw, 52px);
          font-weight: 600; color: #0B2545; text-align: center;
          margin: 0 0 10px; line-height: 1.1;
        }

        .reviews-note {
          font-family: 'Inter', sans-serif;
          font-size: 12px; color: #64748b; font-style: italic; text-align: center;
          margin-bottom: 44px;
        }

        .reviews-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        @media (max-width: 900px) {
          .reviews-grid { grid-template-columns: 1fr; }
        }

        .review-card {
          background: #ffffff;
          backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px);
          border: 1px solid #e2e8f0;
          border-radius: 24px; padding: 32px;
          display: flex; flex-direction: column; justify-content: space-between;
          transition: all 0.35s ease; position: relative;
        }
        .review-card:hover {
          transform: translateY(-6px);
          border-color: rgba(33, 230, 193, 0.45);
          box-shadow: 0 18px 45px rgba(0, 0, 0, 0.5), 0 0 25px rgba(33, 230, 193, 0.12);
        }

        .quote-symbol {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 72px; line-height: 1; color: #F06543; opacity: 0.25;
          position: absolute; top: 14px; right: 24px; pointer-events: none;
        }

        .review-quote {
          font-family: 'Inter', sans-serif;
          font-style: italic; font-size: 14.5px; color: #e2f0f8;
          line-height: 1.7; margin-bottom: 24px; position: relative; z-index: 2;
        }

        .review-author-row {
          display: flex; align-items: center; gap: 14px;
          padding-top: 18px; border-top: 1px solid #e2e8f0;
        }

        .review-avatar {
          width: 44px; height: 44px; border-radius: 50%;
          object-fit: cover; border: 2px solid #F06543;
        }

        .review-author-name {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13.5px; font-weight: 800; color: #0B2545;
        }

        .review-cruise-type {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 700; color: #F06543; margin-top: 2px;
        }

        .review-location {
          display: flex; align-items: center; gap: 4px;
          font-family: 'Inter', sans-serif; font-size: 13px; color: #64748b; margin-top: 2px;
        }
      `}</style>

      <div className="reviews-eyebrow">
        <MessageCircle size={14} color="#F06543" />
        <span>TRAVELER EXPERIENCES</span>
      </div>
      <h2 className="reviews-title">THE SEA, THROUGH THEIR EYES</h2>
      <p className="reviews-note">
        * Testimonial placeholders shown below will be updated with verified customer reviews.
      </p>

      <div ref={cardsRef} className="reviews-grid">
        {reviews.map((t, i) => (
          <div key={t.id || i} className="review-card">
            <span className="quote-symbol">“</span>
            <p className="review-quote">"{t.content || t.comment || t.quote || 'An unforgettable Andaman sea experience with breathtaking views and flawless hospitality.'}"</p>

            <div className="review-author-row">
              <img src={t.user?.avatar || t.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'} alt={t.userName || t.name} className="review-avatar" />
              <div>
                <div className="review-author-name">{t.userName || t.name || t.user?.name || 'Verified Traveler'}</div>
                <div className="review-cruise-type">{t.targetName || t.cruiseType || 'Luxury Cruise Experience'}</div>
                <div className="review-location">
                  <MapPin size={10} color="#9cb3bd" />
                  <span>{t.location || 'Port Blair, Andaman'}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
