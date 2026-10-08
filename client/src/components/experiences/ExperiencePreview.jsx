// src/components/experiences/ExperiencePreview.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Quick Experience Preview Modal — large visual, specs breakdown, included items,
// and "ADD TO MY TRIP" / "EXPLORE EXPERIENCE" action buttons with GSAP animations.

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { CloseIcon, ArrowRightIcon } from '../navbar/NavIcons';

export default function ExperiencePreview({ experience, onClose, onAddToTrip }) {
  const modalRef = useRef(null);
  const backdropRef = useRef(null);

  const getExploreHref = (exp) => {
    if (!exp.slug) return '/activities';
    if (exp.slug.startsWith('/')) return exp.slug;
    return `/activity-details?id=${exp.slug}`;
  };

  useEffect(() => {
    if (!experience) return;
    if (modalRef.current && backdropRef.current) {
      document.body.style.overflow = 'hidden';
      gsap.to(backdropRef.current, { opacity: 1, duration: 0.3, ease: 'power2.out' });
      gsap.fromTo(modalRef.current,
        { opacity: 0, y: 30, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.35, ease: 'power3.out', delay: 0.05 }
      );
    }
  }, [experience]);

  const handleClose = () => {
    if (!modalRef.current || !backdropRef.current) {
      onClose();
      return;
    }
    gsap.to(modalRef.current, { opacity: 0, y: 20, scale: 0.96, duration: 0.2, ease: 'power2.in' });
    gsap.to(backdropRef.current, { opacity: 0, duration: 0.25, ease: 'power2.in', onComplete: () => {
      document.body.style.overflow = '';
      onClose();
    }});
  };

  if (!experience) return null;

  return (
    <div
      ref={backdropRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9998,
        background: 'rgba(2, 8, 20, 0.85)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        opacity: 0,
      }}
      onClick={e => e.target === backdropRef.current && handleClose()}
    >
      <div
        ref={modalRef}
        className="glass"
        style={{
          background: 'rgba(5, 18, 40, 0.94)',
          border: '1px solid rgba(0, 201, 212, 0.28)',
          borderRadius: 24,
          maxWidth: 640,
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: '0 24px 80px rgba(0,0,0,0.8), 0 0 40px rgba(0,201,212,0.15)',
          position: 'relative',
          opacity: 0,
          color: '#c8dff0',
        }}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          style={{
            position: 'absolute', top: 16, right: 16, zIndex: 10,
            width: 34, height: 34, borderRadius: '50%',
            background: 'rgba(5,18,40,0.7)', border: '1px solid #e2e8f0',
            color: '#c8dff0', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          <CloseIcon size={16} />
        </button>

        {/* Top Image Banner */}
        <div style={{ position: 'relative', height: 240, overflow: 'hidden' }}>
          <img src={experience.image} alt={experience.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5,18,40,0.95) 0%, transparent 60%)' }} />
          <div style={{ position: 'absolute', bottom: 16, left: 20, right: 20 }}>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12.5, color: '#00b4d8', fontWeight: 700, letterSpacing: '0.15em' }}>
              📍 {experience.location}
            </div>
            <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 28, fontWeight: 600, color: '#0B2545', marginTop: 2 }}>
              {experience.name}
            </h3>
          </div>
        </div>

        {/* Modal Details Content */}
        <div style={{ padding: '24px' }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#c8dff0', lineHeight: 1.6, marginBottom: 20 }}>
            {experience.description}
          </p>

          {/* Key Specs Row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, marginBottom: 20 }}>
            <div style={{ background: '#e2e8f0', border: '1px solid rgba(0,201,212,0.15)', borderRadius: 12, padding: 10, textAlign: 'center' }}>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, color: '#64748b', letterSpacing: '0.1em' }}>DURATION</div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, color: '#334155', fontWeight: 700, marginTop: 2 }}>{experience.duration}</div>
            </div>
            <div style={{ background: '#e2e8f0', border: '1px solid rgba(0,201,212,0.15)', borderRadius: 12, padding: 10, textAlign: 'center' }}>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, color: '#64748b', letterSpacing: '0.1em' }}>DIFFICULTY</div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, color: '#00b4d8', fontWeight: 700, marginTop: 2 }}>{experience.difficulty}</div>
            </div>
            <div style={{ background: '#e2e8f0', border: '1px solid rgba(0,201,212,0.15)', borderRadius: 12, padding: 10, textAlign: 'center' }}>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, color: '#64748b', letterSpacing: '0.1em' }}>PRICE</div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, color: '#F06543', fontWeight: 900, marginTop: 2 }}>₹{experience.price}</div>
            </div>
          </div>

          {/* Included Items */}
          <div style={{ marginBottom: 24 }}>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12.5, fontWeight: 700, color: '#F06543', letterSpacing: '0.12em', marginBottom: 8 }}>
              WHAT IS INCLUDED:
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 6 }}>
              {experience.included?.map((inc, i) => (
                <div key={i} style={{ fontFamily: "'Inter', sans-serif", fontSize: 11.5, color: '#a0c0d8', display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ color: '#00b4d8' }}>✓</span> {inc}
                </div>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div style={{ display: 'flex', gap: 10 }}>
            <button
              onClick={() => { handleClose(); onAddToTrip?.(experience); }}
              style={{
                flex: 1, background: '#e2e8f0',
                border: '1px solid rgba(0, 201, 212, 0.3)', color: '#F06543',
                fontFamily: "'Space Grotesk', sans-serif", fontSize: 11.5, fontWeight: 700,
                padding: 12, borderRadius: 12, cursor: 'pointer', letterSpacing: '0.06em',
              }}
            >
              ADD TO MY TRIP +
            </button>
            <a
              href={getExploreHref(experience)}
              onClick={(e) => {
                e.preventDefault();
                handleClose();
                window.history.pushState({}, '', getExploreHref(experience));
                window.dispatchEvent(new Event('popstate'));
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              style={{
                flex: 1, background: 'linear-gradient(135deg, #F06543, #00b4d8)',
                border: 'none', color: '#050d1a', textDecoration: 'none',
                fontFamily: "'Space Grotesk', sans-serif", fontSize: 11.5, fontWeight: 800,
                padding: 12, borderRadius: 12, cursor: 'pointer', letterSpacing: '0.06em',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
              }}
            >
              <span>EXPLORE EXPERIENCE</span>
              <ArrowRightIcon size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
