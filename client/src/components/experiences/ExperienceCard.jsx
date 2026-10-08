// src/components/experiences/ExperienceCard.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Individual Experience Card — cinematic image zoom, overlay darken, title lift,
// cyan glow hover effects, location badge, and arrow CTA.

import { useState } from 'react';
import { ArrowRightIcon } from '../navbar/NavIcons';

export default function ExperienceCard({ experience, onSelect }) {
  const [hovered, setHovered] = useState(false);

  if (!experience) return null;

  return (
    <div
      onClick={() => onSelect?.(experience)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'block',
        position: 'relative',
        borderRadius: 20,
        overflow: 'hidden',
        cursor: 'pointer',
        height: 360,
        border: hovered ? '1px solid rgba(0, 201, 212, 0.5)' : '1px solid rgba(0, 201, 212, 0.16)',
        boxShadow: hovered
          ? '0 20px 48px rgba(0, 0, 0, 0.7), 0 0 24px rgba(0, 201, 212, 0.3)'
          : '0 8px 32px rgba(0, 0, 0, 0.5)',
        transition: 'all 0.35s cubic-bezier(0.2, 0, 0, 1)',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
      }}
    >
      {/* High-res Background Image */}
      <img
        src={experience.image}
        alt={experience.name}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transform: hovered ? 'scale(1.06)' : 'scale(1.0)',
          transition: 'transform 0.5s cubic-bezier(0.2, 0, 0, 1)',
        }}
      />

      {/* Dark Gradient Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: hovered
            ? 'linear-gradient(to top, rgba(2, 8, 20, 0.95) 0%, rgba(2, 8, 20, 0.5) 50%, rgba(2, 8, 20, 0.2) 100%)'
            : 'linear-gradient(to top, rgba(2, 8, 20, 0.85) 0%, rgba(2, 8, 20, 0.3) 60%, transparent 100%)',
          transition: 'background 0.35s ease',
        }}
      />

      {/* Top Badges */}
      <div style={{ position: 'absolute', top: 16, left: 16, right: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span
          style={{
            background: 'rgba(5, 18, 40, 0.75)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(0, 201, 212, 0.25)',
            color: '#F06543',
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 12.5,
            fontWeight: 800,
            padding: '4px 10px',
            borderRadius: 12,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
          }}
        >
          {experience.category}
        </span>

        {experience.price && (
          <span
            style={{
              background: 'rgba(0, 229, 160, 0.15)',
              border: '1px solid rgba(0, 229, 160, 0.4)',
              color: '#00b4d8',
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 12,
              fontWeight: 800,
              padding: '3px 8px',
              borderRadius: 10,
            }}
          >
            From ₹{experience.price}
          </span>
        )}
      </div>

      {/* Card Content (Bottom) */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: 20,
          transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
          transition: 'transform 0.35s cubic-bezier(0.2, 0, 0, 1)',
        }}
      >
        <div
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 12.5,
            fontWeight: 700,
            letterSpacing: '0.18em',
            color: '#00b4d8',
            marginBottom: 4,
            textTransform: 'uppercase',
          }}
        >
          📍 {experience.location.split('(')[0]}
        </div>

        <h3
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 24,
            fontWeight: 600,
            color: '#334155',
            lineHeight: 1.1,
            marginBottom: 8,
          }}
        >
          {experience.name}
        </h3>

        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 11,
            fontWeight: 300,
            color: '#a0c0d8',
            lineHeight: 1.4,
            marginBottom: 14,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {experience.shortDescription}
        </p>

        {/* 2 Buttons: View Details & Book Now */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 8,
            marginTop: 10,
          }}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onSelect?.(experience);
            }}
            style={{
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              color: '#ffffff',
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 11,
              fontWeight: 800,
              padding: '8px 10px',
              borderRadius: 10,
              cursor: 'pointer',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 4,
              transition: 'all 0.2s ease',
            }}
          >
            <span>View Details</span>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              const slug = experience.slug ? experience.slug.replace('/experiences/', '').replace('/activities/', '') : experience.id;
              window.history.pushState({}, '', `/activity-booking?id=${slug}`);
              window.dispatchEvent(new Event('popstate'));
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            style={{
              background: 'linear-gradient(135deg, #F06543 0%, #0B2545 100%)',
              border: '1px solid rgba(45, 212, 191, 0.5)',
              color: '#ffffff',
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 11,
              fontWeight: 900,
              padding: '8px 10px',
              borderRadius: 10,
              cursor: 'pointer',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 4,
              boxShadow: '0 4px 12px rgba(13, 148, 136, 0.3)',
              transition: 'all 0.2s ease',
            }}
          >
            <span>Book Now</span>
            <ArrowRightIcon size={12} />
          </button>
        </div>
      </div>
    </div>
  );
}
