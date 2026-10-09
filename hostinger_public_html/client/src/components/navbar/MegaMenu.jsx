// src/components/navbar/MegaMenu.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Luxury Glassmorphism Mega Menu Panel with GSAP entrance, feature card & items grid.

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ArrowRightIcon } from './NavIcons';

export default function MegaMenu({ category, isVisible, onClose }) {
  const panelRef = useRef(null);

  useEffect(() => {
    if (!panelRef.current) return;
    if (isVisible) {
      gsap.fromTo(panelRef.current,
        { opacity: 0, y: -10, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.3, ease: 'power2.out' }
      );
    }
  }, [isVisible, category]);

  if (!isVisible || !category) return null;

  const { featured, items } = category;

  return (
    <div
      ref={panelRef}
      style={{
        position: 'absolute',
        top: 'calc(100% + 12px)',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'min(1100px, 94vw)',
        zIndex: 500,
        opacity: 0,
        pointerEvents: 'auto',
      }}
      onMouseLeave={onClose}
    >
      <div
        className="glass"
        style={{
          background: '#ffffff',
          backdropFilter: 'blur(28px)',
          WebkitBackdropFilter: 'blur(28px)',
          border: '1px solid rgba(0, 45, 98, 0.12)',
          borderRadius: 20,
          padding: 24,
          boxShadow: '0 24px 80px rgba(0, 45, 98, 0.16), 0 4px 20px rgba(0, 0, 0, 0.06)',
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr',
          gap: 24,
        }}
      >
        {/* LEFT: Menu Items Grid */}
        <div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 16,
            paddingBottom: 10,
            borderBottom: '1px solid #e2e8f0',
          }}>
            <div style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 12.5,
              fontWeight: 800,
              letterSpacing: '0.2em',
              color: '#F06543',
              textTransform: 'uppercase',
            }}>
              EXPLORE {category.label}
            </div>
            <div style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 12.5,
              color: '#64748b',
              fontWeight: 600,
            }}>
              {items.length} Options Available
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 10,
          }}>
            {items.map((item) => {
              const handleItemClick = (e) => {
                e.preventDefault();
                onClose();
                window.history.pushState({}, '', item.href);
                window.dispatchEvent(new Event('popstate'));
                window.scrollTo({ top: 0, behavior: 'smooth' });
              };
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={handleItemClick}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '10px 12px',
                    borderRadius: 12,
                    textDecoration: 'none',
                    background: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(0, 150, 136, 0.08)';
                    e.currentTarget.style.borderColor = 'rgba(0, 150, 136, 0.35)';
                    e.currentTarget.style.transform = 'translateY(-1px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = '#f8fafc';
                    e.currentTarget.style.borderColor = '#e2e8f0';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 2 }}>
                  <span style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 12,
                    fontWeight: 700,
                    color: '#002d62',
                  }}>
                    {item.name}
                  </span>
                  {item.badge && (
                    <span style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: 12.5,
                      fontWeight: 800,
                      color: '#F06543',
                      background: 'rgba(0, 150, 136, 0.12)',
                      border: '1px solid rgba(0, 150, 136, 0.25)',
                      padding: '1px 6px',
                      borderRadius: 8,
                      letterSpacing: '0.08em',
                    }}>
                      {item.badge}
                    </span>
                  )}
                </div>

                <span style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 12.5,
                  color: '#64748b',
                  lineHeight: 1.35,
                }}>
                  {item.desc}
                </span>
              </a>
            );
          })}
        </div>
        </div>

        {/* RIGHT: Large Feature Card */}
        {featured && (
          <div style={{
            background: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: 16,
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            boxShadow: '0 4px 14px rgba(0, 45, 98, 0.05)',
          }}>
            {/* Image */}
            <div style={{ height: 150, overflow: 'hidden', position: 'relative' }}>
              <img
                src={featured.image}
                alt={featured.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.4s ease',
                }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to bottom, transparent 40%, rgba(0, 45, 98, 0.75))',
              }} />
              <div style={{
                position: 'absolute',
                top: 10,
                left: 10,
                background: 'linear-gradient(135deg, #F06543, #00bcd4)',
                color: '#ffffff',
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 12,
                fontWeight: 800,
                padding: '3px 8px',
                borderRadius: 10,
                letterSpacing: '0.1em',
              }}>
                {featured.badge}
              </div>
            </div>

            {/* Content */}
            <div style={{ padding: 16, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 12.5,
                  fontWeight: 800,
                  color: '#F06543',
                  letterSpacing: '0.1em',
                  marginBottom: 4,
                  textTransform: 'uppercase',
                }}>
                  {featured.subtitle}
                </div>
                <h4 style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: 18,
                  fontWeight: 600,
                  color: '#002d62',
                  lineHeight: 1.2,
                  marginBottom: 6,
                }}>
                  {featured.title}
                </h4>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 11,
                  color: '#64748b',
                  lineHeight: 1.5,
                  fontWeight: 400,
                }}>
                  {featured.description}
                </p>
              </div>

              {/* Bottom CTA Link */}
              <a
                href={featured.linkHref}
                onClick={onClose}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  color: '#F06543',
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 11,
                  fontWeight: 800,
                  textDecoration: 'none',
                  marginTop: 12,
                  transition: 'gap 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.gap = '10px'; }}
                onMouseLeave={e => { e.currentTarget.style.gap = '6px'; }}
              >
                <span>{featured.linkText}</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
