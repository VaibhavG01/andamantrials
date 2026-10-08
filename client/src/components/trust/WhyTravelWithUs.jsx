// src/components/trust/WhyTravelWithUs.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Master SECTION 07 — WHY TRAVEL WITH US? Component.
// 2-column glassmorphism panel, 6 benefit mini-cards grid, cinematic visual & trust stats.

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import TrustBenefit from './TrustBenefit';
import TrustVisual from './TrustVisual';
import TrustStats from './TrustStats';

const DEFAULT_TRUST_BENEFITS = [
  {
    id: 'local-experts',
    title: 'LOCAL EXPERT TEAM',
    description: 'Local knowledge that helps you discover Andaman better.',
    iconType: 'users',
    accentColor: '#F06543',
  },
  {
    id: 'best-price',
    title: 'BEST PRICE GUARANTEE',
    description: 'Thoughtfully priced packages without compromising the experience.',
    iconType: 'tag',
    accentColor: '#FF6B4A',
  },
  {
    id: '247-support',
    title: '24/7 SUPPORT',
    description: 'Assistance before, during and after your trip.',
    iconType: 'headphones',
    accentColor: '#F06543',
  },
  {
    id: 'customizable',
    title: 'CUSTOMIZABLE PACKAGES',
    description: 'Build your itinerary around your interests and schedule.',
    iconType: 'sliders',
    accentColor: '#FF6B4A',
  },
  {
    id: 'safe-secure',
    title: 'SAFE & SECURE',
    description: 'Reliable planning and trusted travel assistance.',
    iconType: 'shield',
    accentColor: '#F06543',
  },
  {
    id: 'satisfaction',
    title: '100% SATISFACTION',
    description: 'Every journey designed around memorable experiences.',
    iconType: 'star',
    accentColor: '#FF6B4A',
  },
];

gsap.registerPlugin(ScrollTrigger);

export default function WhyTravelWithUs({ benefits = DEFAULT_TRUST_BENEFITS }) {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  // GSAP ScrollTrigger viewport reveal
  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'top 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="trust-section"
      style={{
        position: 'relative',
        width: '100%',
        background: '#FAF4EE',
        color: '#0B2545',
        padding: '60px 0 70px',
        borderBottom: '1.5px solid #EBDED2',
      }}
    >
      <div ref={contentRef} style={{ maxWidth: 1340, margin: '0 auto', padding: '0 20px' }}>
        {/* Section Header */}
        <div style={{ marginBottom: 28 }}>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13.5, fontWeight: 800, letterSpacing: '0.22em', color: '#F06543', textTransform: 'uppercase', marginBottom: 2 }}>
            WHY TRAVEL WITH US?
          </div>
          <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 700, color: '#0B2545', marginBottom: 6 }}>
            TRAVEL WITH CONFIDENCE.
          </h3>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14.5, color: '#5C6F84', maxWidth: 540 }}>
            Local expertise, carefully crafted journeys and support throughout your Andaman experience.
          </p>
        </div>

        {/* Master 2-Column Glassmorphism Panel */}
        <div
          className="glass-panel"
          style={{
            padding: 'clamp(18px, 2.5vw, 32px)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 24,
            alignItems: 'stretch',
          }}
        >
          {/* LEFT: 6 Benefit Mini Cards Grid (2 x 3 Layout) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: 14,
              alignContent: 'center',
            }}
          >
            {benefits.map((benefit) => (
              <TrustBenefit key={benefit.id} benefit={benefit} />
            ))}
          </div>

          {/* RIGHT: Cinematic Visual Showcase */}
          <div>
            <TrustVisual />
          </div>
        </div>

        {/* Bottom Trust Statistics Strip */}
        <TrustStats />
      </div>
    </section>
  );
}
