// src/components/about/AboutTestimonials.jsx
// ─────────────────────────────────────────────────────────────────────────────
// "THE JOURNEY THROUGH THEIR EYES" Traveler Stories Preview Component

import React, { useState, useEffect } from 'react';
import { Star, Quote, ArrowRight } from 'lucide-react';
import { testimonialService } from '../../api/testimonialService';

const DEFAULT_ABOUT_TESTIMONIALS = [
  {
    id: 't-1',
    name: 'Priya & Vikram Malhotra',
    destination: 'Havelock & Neil Islands',
    rating: 5,
    quote: 'Our honeymoon was planned to absolute perfection. The sunset cruise and the beachside candlelight dinner at Havelock were pure magic.',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
  },
  {
    id: 't-2',
    name: 'Sameer & Family',
    destination: 'Complete Island Tour',
    rating: 5,
    quote: 'Traveling with elderly parents can be stressful, but Andaman Trails made it seamless with priority ferry seating and private AC transfers.',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
  },
  {
    id: 't-3',
    name: 'Aakash Verma',
    destination: 'Scuba & Diving Expedition',
    rating: 5,
    quote: 'The PADI dive masters were exceptional. Swam with sea turtles and explored vibrant live coral gardens. Truly world-class!',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
  },
];

export default function AboutTestimonials() {
  const [testimonials, setTestimonials] = useState(DEFAULT_ABOUT_TESTIMONIALS);

  useEffect(() => {
    testimonialService.getTestimonials()
      .then((res) => {
        const list = res.data || [];
        if (Array.isArray(list) && list.length > 0) {
          const mapped = list.slice(0, 3).map((t, idx) => ({
            id: t.id || `testi-${idx}`,
            name: t.name || t.author || 'Verified Traveler',
            destination: t.destination || t.tripName || 'Andaman Islands',
            rating: t.rating || 5,
            quote: t.content || t.comment || t.quote || 'An unforgettable experience curated with local expertise.',
            photo: t.avatar || t.image || DEFAULT_ABOUT_TESTIMONIALS[idx % DEFAULT_ABOUT_TESTIMONIALS.length].photo,
          }));
          setTestimonials(mapped);
        }
      })
      .catch(() => {});
  }, []);
  return (
    <section className="testimonials-root">
      <style>{`
        .testimonials-root {
          max-width: 1340px;
          margin: 0 auto;
          padding: 60px 24px 80px;
        }

        .testi-hdr {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 40px;
          flex-wrap: wrap;
          gap: 16px;
        }

        .testi-sub {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px;
          font-weight: 800;
          letter-spacing: 0.2em;
          color: #F06543;
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        .testi-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(30px, 4.5vw, 48px);
          font-weight: 600;
          color: #0B2545;
          margin: 0;
        }

        .testi-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        @media (max-width: 900px) {
          .testi-grid { grid-template-columns: 1fr; }
        }

        .testi-card {
          background: #ffffff;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1.5px solid #e2e8f0;
          border-radius: 22px;
          padding: 28px 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: all 0.35s ease;
        }
        .testi-card:hover {
          transform: translateY(-5px);
          border-color: rgba(33, 230, 193, 0.45);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.45), 0 0 20px rgba(33, 230, 193, 0.12);
        }

        .testi-stars {
          display: flex; gap: 4px; color: #f0c060; margin-bottom: 14px;
        }
      `}</style>

      <div className="testi-hdr">
        <div>
          <div className="testi-sub">VERIFIED TRAVELER REVIEWS</div>
          <h2 className="testi-title">THE JOURNEY THROUGH THEIR EYES</h2>
        </div>

        <a
          href="/traveler-stories"
          style={{
            fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 800, color: '#F06543',
            background: 'rgba(22, 217, 255, 0.12)', border: '1px solid rgba(22, 217, 255, 0.35)',
            padding: '10px 20px', borderRadius: 14, textDecoration: 'none',
            display: 'inline-flex', alignItems: 'center', gap: 6, transition: 'all 0.25s ease',
          }}
        >
          <span>READ TRAVELER STORIES</span>
          <ArrowRight size={13} />
        </a>
      </div>

      <div className="testi-grid">
        {testimonials.map((t) => (
          <div key={t.id} className="testi-card">
            <div>
              <div className="testi-stars">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={14} fill="#f0c060" stroke="#f0c060" />
                ))}
              </div>

              <Quote size={20} color="#F06543" style={{ opacity: 0.7, marginBottom: 8 }} />
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#c0d8e6', lineHeight: 1.6, margin: '0 0 20px' }}>
                "{t.quote}"
              </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingTop: 16, borderTop: '1px solid #e2e8f0' }}>
              <img src={t.photo} alt={t.name} style={{ width: 38, height: 38, borderRadius: '50%', objectFit: 'cover', border: '1.5px solid #F06543' }} />
              <div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 800, color: '#334155' }}>
                  {t.name}
                </div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12.5, color: '#F06543' }}>
                  {t.destination}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
