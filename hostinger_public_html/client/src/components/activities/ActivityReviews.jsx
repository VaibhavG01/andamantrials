// src/components/activities/ActivityReviews.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, MessageCircle, Star } from 'lucide-react';
import { testimonialService } from '../../api/testimonialService';

gsap.registerPlugin(ScrollTrigger);

const DEFAULT_REVIEWS = [
  {
    id: 'rev-1',
    name: 'Ananya & Rohan Sharma',
    activityType: 'PADI Scuba Diving',
    location: 'Nemo Reef, Havelock Island',
    rating: 5,
    quote: 'As complete non-swimmers, we were nervous at first. The dive master made us feel so safe and calm underwater. Seeing live clownfish and sea turtles was breathtaking!',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 'rev-2',
    name: 'Vikram Malhotra',
    activityType: 'Night Mangrove Kayaking',
    location: 'Havelock Island',
    rating: 5,
    quote: 'Paddling in total pitch darkness while the water sparkled electric blue with every stroke was like stepping into Avatar. An unforgettable memory!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 'rev-3',
    name: 'Pooja & Sameer Deshmukh',
    activityType: 'Underwater Sea Walk',
    location: 'Elephant Beach, Havelock',
    rating: 5,
    quote: 'Walking 7 meters under the ocean bed with a breathing helmet while hundreds of zebra fish swam right in front of our masks was magical.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
  },
];

export default function ActivityReviews() {
  const [reviews, setReviews] = React.useState(DEFAULT_REVIEWS);
  const cardsRef = useRef(null);

  useEffect(() => {
    testimonialService.getTestimonials('ACTIVITY')
      .then((res) => {
        const items = res.data || [];
        if (Array.isArray(items) && items.length > 0) {
          const mapped = items.map((t, i) => ({
            id: t.id || `rev-${i}`,
            name: t.name || t.author || 'Verified Traveler',
            activityType: t.activityType || t.category || 'Island Adventure',
            location: t.location || 'Andaman Sea',
            rating: t.rating || 5,
            quote: t.content || t.comment || t.quote || 'An unforgettable experience with crystal clear waters and amazing guides.',
            avatar: t.avatar || DEFAULT_REVIEWS[i % DEFAULT_REVIEWS.length].avatar,
          }));
          setReviews(mapped);
        }
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (!cardsRef.current) return;
    const cards = cardsRef.current.querySelectorAll('.review-act-card');
    gsap.fromTo(
      cards,
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power2.out',
        scrollTrigger: { trigger: cardsRef.current, start: 'top 85%' }
      }
    );
  }, [reviews]);

  return (
    <section className="reviews-act-root">
      <style>{`
        .reviews-act-root {
          max-width: 1340px;
          margin: 0 auto;
          padding: 80px 24px;
        }

        .reviews-act-eyebrow {
          display: flex; align-items: center; justify-content: center; gap: 6px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; color: #F06543;
          letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 8px;
        }

        .reviews-act-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(32px, 4.5vw, 52px);
          font-weight: 700; color: #0B2545; text-align: center;
          margin: 0 0 10px; line-height: 1.1;
        }

        .reviews-act-note {
          font-family: 'Inter', sans-serif;
          font-size: 13px; color: #64748b; font-style: italic; text-align: center;
          margin-bottom: 44px;
        }

        .reviews-act-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 26px;
        }
        @media (max-width: 960px) {
          .reviews-act-grid { grid-template-columns: 1fr; }
        }

        .review-act-card {
          background: #ffffff;
          border: 2px solid #e2e8f0;
          border-radius: 24px; padding: 34px;
          display: flex; flex-direction: column; justify-content: space-between;
          transition: all 0.35s ease; position: relative;
          box-shadow: 0 4px 20px rgba(0, 45, 98, 0.05);
        }
        .review-act-card:hover {
          transform: translateY(-6px);
          border-color: #F06543;
          box-shadow: 0 18px 45px rgba(0, 45, 98, 0.12);
        }

        .quote-symbol {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 76px; line-height: 1; color: #F06543; opacity: 0.2;
          position: absolute; top: 14px; right: 24px; pointer-events: none;
        }

        .review-quote {
          font-family: 'Inter', sans-serif;
          font-style: italic; font-size: 14px; color: #334155;
          line-height: 1.7; margin-bottom: 24px; position: relative; z-index: 2;
          font-weight: 500;
        }

        .review-stars {
          display: flex; gap: 3px; margin-bottom: 16px;
        }

        .review-author-row {
          display: flex; align-items: center; gap: 14px;
          padding-top: 18px; border-top: 1.5px solid #f1f5f9;
        }

        .review-avatar {
          width: 48px; height: 48px; border-radius: 50%;
          object-fit: cover; border: 2px solid #F06543;
        }

        .review-author-name {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 14px; font-weight: 900; color: #0B2545;
        }

        .review-act-type {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 800; color: #F06543; margin-top: 2px;
        }

        .review-location {
          display: flex; align-items: center; gap: 4px;
          font-family: 'Inter', sans-serif; font-size: 11.5px; color: #64748b; margin-top: 2px;
          font-weight: 500;
        }
      `}</style>

      <div className="reviews-act-eyebrow">
        <MessageCircle size={14} color="#F06543" />
        <span>TRAVELER STORIES</span>
      </div>
      <h2 className="reviews-act-title">THE OCEAN, THROUGH THEIR EYES</h2>
      <p className="reviews-act-note">
        Real stories from travelers who conquered their fears and explored Andaman with us.
      </p>

      <div ref={cardsRef} className="reviews-act-grid">
        {reviews.map((t) => (
          <div key={t.id} className="review-act-card">
            <span className="quote-symbol">“</span>
            
            <div>
              <div className="review-stars">
                {[...Array(t.rating || 5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-[#ffd700] text-[#ffd700]" />
                ))}
              </div>
              <p className="review-quote">"{t.quote}"</p>
            </div>

            <div className="review-author-row">
              <img src={t.avatar} alt={t.name} className="review-avatar" />
              <div>
                <div className="review-author-name">{t.name}</div>
                <div className="review-act-type">{t.activityType}</div>
                <div className="review-location">
                  <MapPin size={11} color="#F06543" />
                  <span>{t.location}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
