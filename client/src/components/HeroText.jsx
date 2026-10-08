// src/components/HeroText.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Cinematic hero typography — mobile-optimized responsive layout.

import { useRef, useEffect } from 'react';
import { revealHeroText } from '../animations/markerAnimations';

export default function HeroText({ onExplore, onFilm, selectedId, isNight }) {
  const eyebrowRef = useRef(null);
  const line1Ref   = useRef(null);
  const line2Ref   = useRef(null);
  const line3Ref   = useRef(null);
  const subRef     = useRef(null);
  const cta1Ref    = useRef(null);
  const cta2Ref    = useRef(null);

  useEffect(() => {
    revealHeroText({
      eyebrow: eyebrowRef, line1: line1Ref, line2: line2Ref,
      line3: line3Ref, sub: subRef, cta1: cta1Ref, cta2: cta2Ref,
    });
  }, []);

  return (
    <div
      className="absolute z-20 flex flex-col justify-center hero-text-container"
      style={{
        pointerEvents: selectedId ? 'none' : 'auto',
        opacity: selectedId ? 0.15 : 1,
        transition: 'opacity 0.5s ease',
      }}
    >
      <style>{`
        .hero-text-container {
          left: clamp(16px, 4vw, 56px);
          top: 50%;
          transform: translateY(-50%);
          max-width: clamp(280px, 34vw, 460px);
        }
        @media (max-width: 767px) {
          .hero-text-container {
            left: 16px;
            right: 16px;
            top: clamp(100px, 14vh, 130px);
            transform: none;
            max-width: calc(100vw - 32px);
          }
        }
      `}</style>

      {/* Eyebrow */}
      <div ref={eyebrowRef} style={{
        opacity:0,
        fontFamily:"'Cormorant Garamond','Georgia',serif",
        fontSize:'clamp(16px, 2vw, 26px)',
        fontStyle:'italic',
        fontWeight:600,
        color: '#f06543',
        textShadow: '0 2px 12px rgba(0,0,0,0.8)',
        marginBottom:4,
      }}>
        Explore The
      </div>

      {/* Main Title */}
      <div style={{ fontFamily:"'Space Grotesk',sans-serif", lineHeight:0.95, marginBottom:14 }}>
        <div ref={line2Ref} style={{
          opacity:0, transform:'translateY(20px)',
          fontSize:'clamp(28px, 4.5vw, 62px)', fontWeight:900, color: '#ffffff', letterSpacing:'-0.02em',
          textShadow: '0 4px 24px rgba(0,0,0,0.85)',
        }}>
          ANDAMAN
        </div>
        <div ref={line3Ref} style={{
          opacity:0, transform:'translateY(20px)',
          fontSize:'clamp(28px, 4.5vw, 62px)', fontWeight:900, letterSpacing:'-0.02em',
          background: 'linear-gradient(135deg, #ff6b4a 0%, #fa6847 50%, #f06543 100%)',
          WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent',
          backgroundClip:'text',
          filter: 'drop-shadow(0 4px 16px rgba(240, 101, 67, 0.45))',
        }}>
          ISLANDS
        </div>
      </div>

      {/* Subtitle */}
      <p ref={subRef} style={{
        opacity:0, transform:'translateY(16px)',
        fontFamily:"'Inter',sans-serif",
        fontSize: 'clamp(13.5px, 1.25vw, 16px)', fontWeight:400,
        color: '#faf4ee',
        textShadow: '0 2px 10px rgba(0,0,0,0.8)',
        lineHeight:1.55, marginBottom:18, letterSpacing:'0.01em',
      }}>
        Discover untouched beauty, thrilling adventures and<br className="hidden md:block" /> unforgettable memories.
      </p>

      {/* Watch Andaman Film CTA */}
      <div>
        <button
          ref={cta2Ref}
          onClick={onFilm}
          style={{
            opacity:0, display:'inline-flex', alignItems:'center', gap:8,
            background:'rgba(11, 37, 69, 0.85)', backdropFilter:'blur(16px)',
            WebkitBackdropFilter:'blur(16px)',
            border:'1.5px solid rgba(240, 101, 67, 0.6)', color:'#ffffff',
            fontFamily:"'Space Grotesk',sans-serif",
            fontSize: 13, fontWeight:700,
            padding:'10px 20px', borderRadius:30, cursor:'pointer',
            letterSpacing:'0.04em', transition:'all 0.25s',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5), 0 0 16px rgba(240, 101, 67, 0.3)',
            whiteSpace:'nowrap',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor='#ff6b4a';
            e.currentTarget.style.color='#ff6b4a';
            e.currentTarget.style.transform='translateY(-2px)';
            e.currentTarget.style.boxShadow='0 12px 28px rgba(240, 101, 67, 0.45)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor='rgba(240, 101, 67, 0.6)';
            e.currentTarget.style.color='#ffffff';
            e.currentTarget.style.transform='translateY(0)';
            e.currentTarget.style.boxShadow='0 8px 24px rgba(0, 0, 0, 0.5), 0 0 16px rgba(240, 101, 67, 0.3)';
          }}
        >
          <div style={{
            width:20, height:20, borderRadius:'50%',
            background:'linear-gradient(135deg, #ff6b4a, #f06543)',
            display:'flex', alignItems:'center', justifyContent:'center',
            fontSize: 11, color:'#ffffff',
            boxShadow: '0 0 10px rgba(240, 101, 67, 0.6)',
          }}>
            ▶
          </div>
          Watch Andaman Film
        </button>
      </div>
    </div>
  );
}
