// src/components/testimonials/TravelerTestimonial.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Right Side Traveler Quote & Info Component with Lucide Icons.

import React from 'react';
import { Star, Camera, MapPin } from 'lucide-react';

export default function TravelerTestimonial({ testimonial }) {
  if (!testimonial) return null;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        padding: '10px 0',
      }}
    >
      <div>
        {/* Rating Stars & Social Tag */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ display: 'flex', gap: 3, color: '#f0c060' }}>
              {Array.from({ length: 5 }, (_, i) => (
                <Star key={i} size={14} fill="#f0c060" stroke="#f0c060" />
              ))}
            </div>
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, fontWeight: 900, color: '#0B2545' }}>
              {testimonial.rating}
            </span>
          </div>

          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 12.5,
              fontWeight: 700,
              color: '#F06543',
              letterSpacing: '0.08em',
              background: 'rgba(33, 230, 193, 0.12)',
              border: '1px solid rgba(33, 230, 193, 0.3)',
              padding: '3px 10px',
              borderRadius: 10,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 5,
            }}
          >
            <Camera size={11} color="#F06543" />
            @andamantrails
          </span>
        </div>

        {/* Quote */}
        <p
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(20px, 2.4vw, 30px)',
            fontWeight: 600,
            color: '#0B2545',
            lineHeight: 1.25,
            marginBottom: 20,
            fontStyle: 'italic',
          }}
        >
          &ldquo;{testimonial.quote}&rdquo;
        </p>

        {/* Traveler Details Box */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            background: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: 14,
            padding: 14,
          }}
        >
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            style={{
              width: 44,
              height: 44,
              borderRadius: '50%',
              objectFit: 'cover',
              border: '1.5px solid #F06543',
            }}
          />
          <div>
            <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 800, color: '#0B2545', margin: 0 }}>
              {testimonial.name}
            </h4>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 13.5, color: '#F06543', marginTop: 2 }}>
              {testimonial.tripType} • {testimonial.duration}
            </div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12.5, color: '#64748b', marginTop: 2, display: 'flex', alignItems: 'center', gap: 4 }}>
              <MapPin size={10} color="#F06543" />
              {testimonial.destinations}
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: 16, fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, color: '#64748b', letterSpacing: '0.1em' }}>
        SHARED BY OUR TRAVELERS
      </div>
    </div>
  );
}
