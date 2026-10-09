// src/components/destinations/DestinationIntro.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Section Intro Header — Eyebrow, Editorial Heading, Subtitle & Divider.

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

export default function DestinationIntro() {
  const introRef   = useRef(null);
  const eyebrowRef = useRef(null);
  const titleRef   = useRef(null);
  const subRef     = useRef(null);
  const lineRef    = useRef(null);

  useEffect(() => {
    if (!introRef.current) return;

    // Simple GSAP entrance animation on load
    const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.8 } });
    tl.fromTo(eyebrowRef.current, { opacity: 0, y: 15 }, { opacity: 1, y: 0 })
      .fromTo(titleRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0 }, '-=0.6')
      .fromTo(subRef.current, { opacity: 0, y: 15 }, { opacity: 1, y: 0 }, '-=0.6')
      .fromTo(lineRef.current, { scaleX: 0 }, { scaleX: 1, duration: 0.8 }, '-=0.4');
  }, []);

  return (
    <div ref={introRef} style={{ textAlign: 'center', maxWidth: 840, margin: '0 auto 40px', padding: '0 20px' }}>
      {/* Eyebrow */}
      <div
        ref={eyebrowRef}
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 11,
          fontWeight: 800,
          letterSpacing: '0.25em',
          color: '#F06543',
          marginBottom: 12,
          textTransform: 'uppercase',
          opacity: 0,
        }}
      >
        DISCOVER ANDAMAN
      </div>

      {/* Main Heading */}
      <h2
        ref={titleRef}
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 'clamp(32px, 4.5vw, 64px)',
          fontWeight: 600,
          color: '#334155',
          lineHeight: 1.05,
          letterSpacing: '-0.01em',
          marginBottom: 16,
          opacity: 0,
        }}
      >
        ISLANDS WORTH GETTING LOST IN
      </h2>

      {/* Supporting text */}
      <p
        ref={subRef}
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 'clamp(13px, 1.1vw, 16px)',
          fontWeight: 300,
          color: '#a0c0d8',
          lineHeight: 1.65,
          maxWidth: 620,
          margin: '0 auto 24px',
          opacity: 0,
        }}
      >
        From vibrant marine life to untouched beaches, discover the places that make Andaman unforgettable.
      </p>

      {/* Animated line/divider */}
      <div
        ref={lineRef}
        style={{
          width: 80,
          height: 2,
          background: 'linear-gradient(90deg, transparent, #F06543, #00b4d8, transparent)',
          margin: '0 auto',
          borderRadius: 2,
          transformOrigin: 'center',
        }}
      />
    </div>
  );
}
