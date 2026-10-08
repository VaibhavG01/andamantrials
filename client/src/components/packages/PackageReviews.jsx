// src/components/packages/PackageReviews.jsx
import React from 'react';
import { Star, MapPin, Quote, ShieldCheck } from 'lucide-react';

const REVIEWS = [
  {
    name: 'Vikram & Sneha Roy',
    from: 'New Delhi',
    pkgTitle: '6D/5N Honeymoon Luxury Escape',
    rating: 5,
    text: 'Our honeymoon in Havelock and Neil was straight out of a movie! The private pool villa at Symphony Palms, candlelit beach dinner with waves lapping at our feet, and Makruzz catamaran Royal Class seats were sensational.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    date: 'February 2026',
  },
  {
    name: 'The Kapoor Family (6 Members)',
    from: 'Pune, Maharashtra',
    pkgTitle: '5D/4N Family Relaxed Island Hop',
    rating: 5,
    text: 'Traveling with my elderly parents and young kids was made effortless by Andaman Trails. The private AC Tempo Traveller in Port Blair and dedicated coordinators at every jetty took care of all our luggage without us lifting a finger.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    date: 'January 2026',
  },
  {
    name: 'Arjun & Aditya Rao',
    from: 'Hyderabad, Telangana',
    pkgTitle: '7D/6N Ultimate Scuba & Adventure',
    rating: 5,
    text: 'Best dive holiday ever! 2 boat dives at Dixon’s Pinnacle with manta rays and reef sharks, plus bioluminescent night kayaking in Havelock. Every transfer and permit was 100% on point.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    date: 'March 2026',
  },
];

export default function PackageReviews() {
  return (
    <section className="pkg-reviews-root">
      <style>{`
        .pkg-reviews-root {
          max-width: 1340px;
          margin: 0 auto 80px;
          padding: 0 24px;
        }

        .pkg-reviews-header {
          text-align: center;
          margin-bottom: 48px;
        }

        .pkg-rev-eyebrow {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 900; letter-spacing: 0.18em;
          color: #F06543; text-transform: uppercase; margin-bottom: 8px;
        }

        .pkg-rev-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(30px, 4.5vw, 48px);
          font-weight: 700; color: #0B2545; margin: 0;
        }

        .pkg-reviews-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        @media (max-width: 960px) {
          .pkg-reviews-grid { grid-template-columns: 1fr; }
        }

        .pkg-rev-card {
          background: #ffffff;
          border: 2px solid #e2e8f0;
          border-radius: 28px;
          padding: 34px;
          display: flex; flex-direction: column; justify-content: space-between;
          box-shadow: 0 8px 24px rgba(0, 45, 98, 0.04);
          transition: all 0.3s ease;
        }
        .pkg-rev-card:hover {
          transform: translateY(-6px);
          border-color: #F06543;
          box-shadow: 0 16px 40px rgba(0, 45, 98, 0.12);
        }
      `}</style>

      <div className="pkg-reviews-header">
        <div className="pkg-rev-eyebrow">VERIFIED TRAVELER EXPERIENCES</div>
        <h2 className="pkg-rev-title">WHAT OUR TRAVELERS SAY ABOUT US</h2>
      </div>

      <div className="pkg-reviews-grid">
        {REVIEWS.map((rev, idx) => (
          <div key={idx} className="pkg-rev-card">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                <div style={{ display: 'flex', gap: 2 }}>
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={15} className="fill-[#ffd700] text-[#ffd700]" />
                  ))}
                </div>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 800, color: '#F06543', background: '#FFF0EB', border: '1px solid rgba(13,148,136,0.3)', padding: '3px 10px', borderRadius: 12 }}>
                  {rev.pkgTitle}
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
