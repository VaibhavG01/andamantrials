// src/components/navbar/MobileMenu.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Full-screen Dark Ocean Navigation Drawer for Mobile — expandable accordions,
// GSAP staggered entrance, and bottom CTA action bar (Plan, Call, WhatsApp).

import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { LogOut } from 'lucide-react';
import { NAV_CATEGORIES, CONTACT_INFO } from '../../data/navigation';
import { CloseIcon, ChevronDownIcon, PhoneIcon, WhatsAppIcon } from './NavIcons';
import PlanTripButton from './PlanTripButton';
import Link from '../ui/Link';
import { authService } from '../../api/authService';

export default function MobileMenu({ isOpen, onClose, onPlanTrip }) {
  const drawerRef = useRef(null);
  const itemsRef  = useRef([]);
  const [expandedCat, setExpandedCat] = useState(null);

  const currentUser = (() => {
    try {
      const saved = localStorage.getItem('andaman_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  })();

  const rawUser = currentUser?.user || currentUser;
  const firstName = (rawUser?.firstName || '').trim();
  const lastName = (rawUser?.lastName || '').trim();
  const fullName = firstName || lastName
    ? `${firstName} ${lastName}`.trim()
    : (rawUser?.name || rawUser?.fullName || rawUser?.email?.split('@')[0]?.replace(/[._-]+/g, ' ') || 'Traveler');
  
  const initials = (() => {
    if (firstName && lastName) {
      return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
    }
    const parts = fullName.trim().split(/\s+/).filter(Boolean);
    if (parts.length >= 2) return `${parts[0].charAt(0)}${parts[parts.length - 1].charAt(0)}`.toUpperCase();
    if (parts.length === 1 && parts[0].length >= 2) return parts[0].substring(0, 2).toUpperCase();
    if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
    return 'VG';
  })();

  useEffect(() => {
    if (!drawerRef.current) return;
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      gsap.fromTo(drawerRef.current,
        { x: '100%' },
        { x: '0%', duration: 0.4, ease: 'power3.out' }
      );
      if (itemsRef.current.length > 0) {
        gsap.fromTo(itemsRef.current,
          { opacity: 0, x: 25 },
          { opacity: 1, x: 0, duration: 0.35, stagger: 0.05, ease: 'power2.out', delay: 0.15 }
        );
      }
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  const handleClose = () => {
    if (!drawerRef.current) return;
    gsap.to(drawerRef.current, {
      x: '100%', duration: 0.3, ease: 'power3.in',
      onComplete: () => {
        onClose();
        setExpandedCat(null);
      },
    });
  };

  const toggleCategory = (id) => {
    setExpandedCat(prev => prev === id ? null : id);
  };

  if (!isOpen) return null;

  return (
    <div
      ref={drawerRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9995,
        background: '#06182E',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '20px 20px 24px',
        overflowY: 'auto',
        transform: 'translateX(100%)',
      }}
    >
      {/* Top Header Bar */}
      <div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingBottom: 16,
          borderBottom: '1px solid rgba(240, 101, 67, 0.25)',
          marginBottom: 16,
        }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 38, height: 38, borderRadius: 10, background: '#ffffff', padding: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 10px rgba(240, 101, 67, 0.4)', border: '1px solid rgba(240, 101, 67, 0.5)' }}>
              <img src="/logo.png" alt="Andaman Trails Logo" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: 8 }} />
            </div>
            <div>
              <div style={{ display: 'flex', gap: 4, lineHeight: 1.1 }}>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 900, letterSpacing: '0.18em', color: '#ffffff' }}>ANDAMAN</span>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 900, letterSpacing: '0.18em', color: '#F06543' }}>TRAILS</span>
              </div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 7, fontWeight: 700, letterSpacing: '0.12em', color: '#94a3b8', marginTop: 2, textTransform: 'uppercase' }}>
                MEMORIES THAT LAST A LIFETIME
              </div>
            </div>
          </div>

          {/* Close button */}
          <button
            onClick={handleClose}
            style={{
              width: 36, height: 36, borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#ffffff', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            <CloseIcon size={18} />
          </button>
        </div>

        {/* Logged in User Profile Banner */}
        {currentUser && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '10px 14px',
              borderRadius: 14,
              background: 'rgba(11, 37, 69, 0.8)',
              border: '1.5px solid #F06543',
              marginBottom: 16,
              boxShadow: '0 4px 14px rgba(240, 101, 67, 0.2)',
            }}
          >
            <div
              onClick={() => {
                handleClose();
                const path = (currentUser?.role === 'SUPER_ADMIN' || currentUser?.role === 'ADMIN' || currentUser?.role === 'EDITOR')
                  ? '/admin/dashboard'
                  : (currentUser?.role === 'RECEPTIONIST' ? '/reception/dashboard' : '/dashboard');
                window.history.pushState({}, '', path);
                window.dispatchEvent(new Event('popstate'));
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer', flex: 1 }}
            >
              <span
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #FF6B4A, #F06543)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 12,
                  fontWeight: 900,
                  boxShadow: '0 2px 6px rgba(240, 101, 67, 0.4)',
                }}
              >
                {initials}
              </span>
              <div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 800, color: '#ffffff' }}>
                  {fullName}
                </div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: '#FF6B4A', fontWeight: 600 }}>
                  {rawUser?.role || 'Traveler'} • Tap Dashboard
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                authService.logout();
                handleClose();
                window.history.pushState({}, '', '/');
                window.dispatchEvent(new PopStateEvent('popstate'));
              }}
              style={{
                background: 'rgba(255, 80, 80, 0.2)',
                border: '1px solid rgba(255, 80, 80, 0.4)',
                color: '#ff6b6b',
                padding: '6px 10px',
                borderRadius: 10,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 4,
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 11,
                fontWeight: 800,
              }}
            >
              <LogOut size={12} />
              LOGOUT
            </button>
          </div>
        )}

        {/* Categories List Accordion */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {NAV_CATEGORIES.map((cat, i) => {
            const isExp = expandedCat === cat.id;
            return (
              <div
                key={cat.id}
                ref={el => (itemsRef.current[i] = el)}
                style={{
                  background: isExp ? 'rgba(0, 194, 184, 0.12)' : 'rgba(255, 255, 255, 0.05)',
                  border: isExp ? '1px solid rgba(0, 194, 184, 0.4)' : '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: 14,
                  overflow: 'hidden',
                  transition: 'all 0.25s',
                }}
              >
                {/* Category Bar */}
                <button
                  onClick={() => toggleCategory(cat.id)}
                  style={{
                    width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '14px 16px', background: 'none', border: 'none', color: '#ffffff',
                    fontFamily: "'Space Grotesk', sans-serif", fontSize: 15, fontWeight: 800,
                    cursor: 'pointer', textAlign: 'left',
                  }}
                >
                  <span>{cat.label}</span>
                  <ChevronDownIcon size={16} style={{ transform: isExp ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s', color: isExp ? '#FF6B4A' : '#94a3b8' }} />
                </button>

                {/* Sub-items list */}
                {isExp && (
                  <div style={{ padding: '0 16px 14px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <Link
                      to={cat.href}
                      onClick={handleClose}
                      style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        padding: '10px 12px', borderRadius: 10, background: 'rgba(0, 194, 184, 0.2)',
                        color: '#FF6B4A', textDecoration: 'none', fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 800,
                      }}
                    >
                      <span>Explore All {cat.label} →</span>
                    </Link>
                    {cat.items.map(sub => (
                      <Link
                        key={sub.name}
                        to={sub.href}
                        onClick={handleClose}
                        style={{
                          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                          padding: '10px 12px', borderRadius: 10, background: 'rgba(255, 255, 255, 0.04)',
                          color: '#e2e8f0', textDecoration: 'none', fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 500,
                        }}
                      >
                        <span>{sub.name}</span>
                        {sub.badge && (
                          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, color: '#ffffff', background: '#F06543', padding: '2px 8px', borderRadius: 6, fontWeight: 800 }}>
                            {sub.badge}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Action Footer */}
      <div style={{ marginTop: 24, paddingTop: 16, borderTop: '1px solid rgba(0, 194, 184, 0.25)', display: 'flex', flexDirection: 'column', gap: 12 }}>
        {/* Main CTA */}
        <PlanTripButton onClick={() => { handleClose(); onPlanTrip(); }} />

        {/* Call Us & WhatsApp */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          <a
            href={`tel:${CONTACT_INFO.phone}`}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
              background: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: 12, padding: 12, color: '#ffffff', textDecoration: 'none',
              fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, fontWeight: 800,
            }}
          >
            <PhoneIcon size={14} className="text-[#FF6B4A]" />
            CALL US
          </a>

          <a
            href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/[^0-9]/g, '')}`}
            target="_blank" rel="noreferrer"
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
              background: 'rgba(37, 211, 102, 0.2)', border: '1px solid rgba(37, 211, 102, 0.5)',
              borderRadius: 12, padding: 12, color: '#25d366', textDecoration: 'none',
              fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, fontWeight: 800,
            }}
          >
            <WhatsAppIcon size={14} />
            WHATSAPP
          </a>
        </div>
      </div>
    </div>
  );
}
