// src/components/experiences/FeaturedExperience.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Large Cinematic Featured Experience Showcase (Scuba Diving) — 60/40 split,
// underwater visual, overlay badges, pricing, highlights & action CTAs.

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ArrowRightIcon } from '../navbar/NavIcons';

export default function FeaturedExperience({ experience, onSelectExperience }) {
  const imageRef = useRef(null);

  useEffect(() => {
    if (!imageRef.current) return;
    gsap.fromTo(imageRef.current,
      { scale: 1.0 },
      { scale: 1.05, duration: 6, ease: 'sine.inOut', repeat: -1, yoyo: true }
    );
  }, [experience]);

  if (!experience) return null;

  return (
    <div
      style={{
        maxWidth: 1280,
        margin: '0 auto 64px',
        padding: '0 20px',
      }}
    >
      <div
        className="glass"
        style={{
          background: 'rgba(4, 14, 30, 0.82)',
          backdropFilter: 'blur(28px)',
          WebkitBackdropFilter: 'blur(28px)',
          border: '1px solid rgba(0, 201, 212, 0.25)',
          borderRadius: 28,
          padding: 'clamp(20px, 3vw, 36px)',
          boxShadow: '0 24px 80px rgba(0, 0, 0, 0.75), 0 0 40px rgba(0, 201, 212, 0.12)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 'clamp(24px, 3.5vw, 48px)',
          alignItems: 'center',
        }}
      >
        {/* LEFT: 60% Split Underwater Visual */}
        <div
          style={{
            position: 'relative',
            borderRadius: 20,
            overflow: 'hidden',
            aspectRatio: '4/3',
            boxShadow: '0 16px 48px rgba(0, 0, 0, 0.7)',
          }}
        >
          <img
            ref={imageRef}
            src={experience.image}
            alt={experience.name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />

          {/* Vignette Overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom, transparent 40%, rgba(2, 8, 20, 0.88))',
            }}
          />

          {/* Top Left Badges */}
          <div style={{ position: 'absolute', top: 16, left: 16, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            <span
              style={{
                background: 'linear-gradient(135deg, #F06543, #00b4d8)',
                color: '#050d1a',
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 12,
                fontWeight: 800,
                padding: '4px 12px',
                borderRadius: 14,
                letterSpacing: '0.12em',
              }}
            >
              ⭐ MUST EXPERIENCE
            </span>
            <span
              style={{
                background: 'rgba(5, 18, 40, 0.8)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(0, 201, 212, 0.3)',
                color: '#F06543',
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 12,
                fontWeight: 700,
                padding: '4px 10px',
                borderRadius: 14,
              }}
            >
              {experience.difficulty}
            </span>
          </div>

          {/* Bottom Left Image Info */}
          <div style={{ position: 'absolute', bottom: 20, left: 20, right: 20, color: '#334155' }}>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 700, color: '#00b4d8', letterSpacing: '0.15em' }}>
              📍 {experience.location}
            </div>
            <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 24, fontWeight: 600, marginTop: 2 }}>
              {experience.name}
            </div>
          </div>
        </div>

        {/* RIGHT: 40% Experience Information Area */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 11,
            fontWeight: 800,
            letterSpacing: '0.22em',
            color: '#F06543',
            marginBottom: 4,
            textTransform: 'uppercase',
          }}>
            {experience.tagline}
          </div>

          <h3 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(28px, 3.2vw, 44px)',
            fontWeight: 800,
            color: '#334155',
            lineHeight: 1.05,
            marginBottom: 16,
          }}>
            {experience.name.toUpperCase()}
          </h3>

          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(12px, 1vw, 14.5px)',
            fontWeight: 300,
            color: '#c8dff0',
            lineHeight: 1.65,
            marginBottom: 20,
          }}>
            {experience.description}
          </p>

          {/* Quick Experience Badges Row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, marginBottom: 20 }}>
            <div style={{ background: '#e2e8f0', border: '1px solid rgba(0,201,212,0.15)', borderRadius: 12, padding: 10, textAlign: 'center' }}>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, color: '#64748b', letterSpacing: '0.1em' }}>DURATION</div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, color: '#334155', fontWeight: 700, marginTop: 2 }}>{experience.duration}</div>
            </div>
            <div style={{ background: '#e2e8f0', border: '1px solid rgba(0,201,212,0.15)', borderRadius: 12, padding: 10, textAlign: 'center' }}>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, color: '#64748b', letterSpacing: '0.1em' }}>DIFFICULTY</div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, color: '#00b4d8', fontWeight: 700, marginTop: 2 }}>{experience.difficulty.split(' ')[0]}</div>
            </div>
            <div style={{ background: '#e2e8f0', border: '1px solid rgba(0,201,212,0.15)', borderRadius: 12, padding: 10, textAlign: 'center' }}>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, color: '#64748b', letterSpacing: '0.1em' }}>STARTING FROM</div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, color: '#F06543', fontWeight: 900, marginTop: 2 }}>₹{experience.price}</div>
            </div>
          </div>

          {/* Highlights */}
          <div style={{ marginBottom: 24 }}>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12.5, fontWeight: 700, color: '#64748b', letterSpacing: '0.15em', marginBottom: 8, textTransform: 'uppercase' }}>
              WHAT YOU WILL EXPERIENCE
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 6 }}>
              {experience.highlights?.map((h, i) => (
                <div key={i} style={{ fontFamily: "'Inter', sans-serif", fontSize: 11.5, color: '#c8dff0', display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ color: '#00b4d8', fontWeight: 800 }}>✓</span> {h}
                </div>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
            <button
              onClick={() => onSelectExperience?.(experience)}
              style={{
                background: 'linear-gradient(135deg, #F06543 0%, #00b4d8 100%)',
                border: 'none',
                color: '#050d1a',
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 12,
                fontWeight: 800,
                padding: '12px 26px',
                borderRadius: 30,
                cursor: 'pointer',
                letterSpacing: '0.08em',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                transition: 'all 0.25s ease',
                boxShadow: '0 4px 20px rgba(0, 201, 212, 0.35)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 201, 212, 0.55)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 201, 212, 0.35)';
              }}
            >
              <span>DISCOVER {experience.name.toUpperCase()}</span>
              <ArrowRightIcon size={14} />
            </button>

            <button
              onClick={() => onSelectExperience?.(experience)}
              style={{
                background: '#e2e8f0',
                border: '1px solid rgba(0, 201, 212, 0.25)',
                color: '#c8dff0',
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 12,
                fontWeight: 700,
                padding: '12px 22px',
                borderRadius: 30,
                cursor: 'pointer',
                letterSpacing: '0.06em',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(0, 201, 212, 0.6)';
                e.currentTarget.style.color = '#F06543';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(0, 201, 212, 0.25)';
                e.currentTarget.style.color = '#c8dff0';
              }}
            >
              ADD TO MY TRIP +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
