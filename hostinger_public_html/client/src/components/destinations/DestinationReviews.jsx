// src/components/destinations/DestinationReviews.jsx
import React from 'react';
import { Star, MapPin, Quote, ShieldCheck } from 'lucide-react';

const REVIEWS = [
  {
    name: 'Ananya & Rohan Deshmukh',
    from: 'Mumbai, Maharashtra',
    island: 'Havelock & Neil Island',
    rating: 5,
    text: 'Our 6-day island hopping trip was flawlessly coordinated. The catamaran ferry seats were pre-confirmed, the private pickup at Havelock jetty was right on time, and Radhanagar sunset was unforgettable!',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    date: 'February 2026',
  },
  {
    name: 'Dr. Siddharth Verma',
    from: 'Bengaluru, Karnataka',
    island: 'Baratang & Diglipur',
    rating: 5,
    text: 'Visiting Ross & Smith sandbar in Diglipur was a bucket-list dream come true. The Andaman Trails team arranged all our forest permits and private convoy escorts without any hiccups.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    date: 'January 2026',
  },
  {
    name: 'Meera Sengupta',
    from: 'Kolkata, West Bengal',
    island: 'Shaheed Dweep (Neil)',
    rating: 5,
    text: 'Neil Island is heaven on earth. The natural rock bridge walk during low tide and Laxmanpur Beach sunset were mesmerizing. Highly recommend booking through this team!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    date: 'March 2026',
  },
];

export default function DestinationReviews() {
  return (
    <section className="dest-reviews-root">
      <style>{`
        .dest-reviews-root {
          max-width: 1340px;
          margin: 0 auto 80px;
          padding: 0 24px;
        }

        .dest-reviews-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .dest-rev-eyebrow {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 900; letter-spacing: 0.18em;
          color: #F06543; text-transform: uppercase; margin-bottom: 8px;
        }

        .dest-rev-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(30px, 4.5vw, 48px);
          font-weight: 700; color: #0B2545; margin: 0;
        }

        .dest-reviews-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        @media (max-width: 960px) {
          .dest-reviews-grid { grid-template-columns: 1fr; }
        }

        .dest-rev-card {
          background: #ffffff;
          border: 2px solid #e2e8f0;
          border-radius: 28px;
          padding: 34px;
          display: flex; flex-direction: column; justify-content: space-between;
          box-shadow: 0 8px 24px rgba(0, 45, 98, 0.04);
          transition: all 0.3s ease;
        }
        .dest-rev-card:hover {
          transform: translateY(-6px);
          border-color: #F06543;
          box-shadow: 0 16px 40px rgba(0, 45, 98, 0.12);
        }
      `}</style>

      <div className="dest-reviews-header">
        <div className="dest-rev-eyebrow">VERIFIED TRAVELER EXPERIENCES</div>
        <h2 className="dest-rev-title">STORIES FROM THE EMERALD ISLES</h2>
      </div>

      <div className="dest-reviews-grid">
        {REVIEWS.map((rev, idx) => (
          <div key={idx} className="dest-rev-card">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                <div style={{ display: 'flex', gap: 2 }}>
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={15} className="fill-[#ffd700] text-[#ffd700]" />
                  ))}
                </div>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 800, color: '#F06543', background: '#FFF0EB', border: '1px solid rgba(13,148,136,0.3)', padding: '3px 10px', borderRadius: 12 }}>
                  {rev.island}
                </span>
              </div>

              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13.5, color: '#475569', lineHeight: 1.65, marginBottom: 24, fontStyle: 'italic' }}>
                "{rev.text}"
              </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 14, paddingTop: 18, borderTop: '1.5px solid #f1f5f9' }}>
              <img
                src={rev.avatar}
                alt={rev.name}
                style={{ width: 44, height: 44, borderRadius: '50%', objectFit: 'cover', border: '2px solid #F06543' }}
              />
              <div>
                <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13.5, fontWeight: 900, color: '#0B2545', margin: 0 }}>
                  {rev.name}
                </h4>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11.5, color: '#64748b', fontFamily: "'Inter', sans-serif" }}>
                  <span>{rev.from}</span>
                  <span>•</span>
                  <span>{rev.date}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
