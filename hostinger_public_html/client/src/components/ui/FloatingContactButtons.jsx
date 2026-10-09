// src/components/ui/FloatingContactButtons.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Floating Action Buttons — Direct WhatsApp & Direct Phone Call.
// Professional Bold Spheres with High Z-Index, Glowing Pulse, and Active Shifts.

import React, { useState, useEffect } from 'react';
import { PhoneCall } from 'lucide-react';

export default function FloatingContactButtons() {
  const [isVisible, setIsVisible] = useState(false);
  const [navActive, setNavActive] = useState(false);
  const whatsappNumber = '919137835433';
  const phoneNumber = '+919137835433';
  const defaultMsg = encodeURIComponent('Hello Andaman Trails! I want to plan an Andaman trip.');

  useEffect(() => {
    const checkScrollState = () => {
      const route = (window.location.hash ? window.location.hash.replace('#', '/') : window.location.pathname) || '/home';
      const isHome = route === '/' || route === '/home' || route === '';

      if (!isHome) {
        setIsVisible(true);
        setNavActive(true);
      } else {
        const threshold = Math.min(window.innerHeight * 0.6, 450);
        const pastMap = window.scrollY > threshold;
        setIsVisible(pastMap);
        setNavActive(pastMap);
      }
    };

    window.addEventListener('scroll', checkScrollState, { passive: true });
    window.addEventListener('popstate', checkScrollState);
    window.addEventListener('hashchange', checkScrollState);
    checkScrollState();

    return () => {
      window.removeEventListener('scroll', checkScrollState);
      window.removeEventListener('popstate', checkScrollState);
      window.removeEventListener('hashchange', checkScrollState);
    };
  }, []);

  return (
    <div className={`floating-contacts-wrapper ${isVisible ? 'icons-visible' : ''} ${navActive ? 'nav-active' : ''}`}>
      <style>{`
        .floating-contacts-wrapper {
          position: fixed !important;
          bottom: 24px !important;
          right: 20px !important;
          z-index: 999999 !important;
          display: flex !important;
          flex-direction: column !important;
          align-items: flex-end !important;
          gap: 14px !important;
          pointer-events: none !important;
          opacity: 0 !important;
          transform: translateY(60px) scale(0.8) !important;
          transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease, bottom 0.45s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }

        .floating-contacts-wrapper.icons-visible {
          opacity: 1 !important;
          pointer-events: auto !important;
          transform: translateY(0) scale(1) !important;
        }

        .floating-contacts-wrapper.icons-visible.nav-active {
          bottom: 88px !important;
        }

        @media (min-width: 769px) {
          .floating-contacts-wrapper,
          .floating-contacts-wrapper.icons-visible,
          .floating-contacts-wrapper.icons-visible.nav-active {
            bottom: 32px !important;
            right: 32px !important;
            gap: 16px !important;
          }
        }

        .floating-btn {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          text-decoration: none;
          position: relative;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          border: 2px solid rgba(255, 255, 255, 0.35);
          cursor: pointer;
        }

        @media (min-width: 769px) {
          .floating-btn {
            width: 60px;
            height: 60px;
          }
        }

        .floating-btn-whatsapp {
          background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
          box-shadow: 0 10px 28px rgba(37, 211, 102, 0.45), 0 0 20px rgba(37, 211, 102, 0.3);
        }
        .floating-btn-whatsapp::before {
          content: '';
          position: absolute;
          inset: -6px;
          border-radius: 50%;
          background: rgba(37, 211, 102, 0.45);
          z-index: -1;
          animation: whatsappPulse 2s infinite;
        }

        .floating-btn-call {
          background: linear-gradient(135deg, #ff6b4a 0%, #f06543 100%);
          box-shadow: 0 10px 28px rgba(240, 101, 67, 0.45), 0 0 20px rgba(240, 101, 67, 0.3);
        }
        .floating-btn-call::before {
          content: '';
          position: absolute;
          inset: -6px;
          border-radius: 50%;
          background: rgba(240, 101, 67, 0.4);
          z-index: -1;
          animation: callPulse 2s infinite 0.4s;
        }

        .floating-btn:hover {
          transform: scale(1.14) translateY(-4px);
          box-shadow: 0 14px 36px rgba(0, 0, 0, 0.75);
        }

        .floating-tooltip {
          position: absolute;
          right: 74px;
          background: #ffffff;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          color: #0B2545;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.05em;
          padding: 7px 14px;
          border-radius: 10px;
          border: 1.5px solid #ebded2;
          white-space: nowrap;
          box-shadow: 0 8px 28px rgba(11, 37, 69, 0.15);
          opacity: 0;
          visibility: hidden;
          transform: translateX(10px);
          transition: all 0.25s ease;
          pointer-events: none;
        }

        .floating-btn:hover .floating-tooltip {
          opacity: 1;
          visibility: visible;
          transform: translateX(0);
        }

        @keyframes whatsappPulse {
          0% { transform: scale(0.95); opacity: 0.8; }
          50% { transform: scale(1.22); opacity: 0; }
          100% { transform: scale(0.95); opacity: 0; }
        }

        @keyframes callPulse {
          0% { transform: scale(0.95); opacity: 0.8; }
          50% { transform: scale(1.22); opacity: 0; }
          100% { transform: scale(0.95); opacity: 0; }
        }
      `}</style>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${defaultMsg}`}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn floating-btn-whatsapp"
        aria-label="Chat on WhatsApp"
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.521.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.461c-1.85 0-3.628-.497-5.18-1.442l-.372-.224-3.847 1.009 1.027-3.748-.244-.388a10.297 10.297 0 0 1-1.576-5.467c0-5.69 4.63-10.32 10.32-10.32 2.757 0 5.349 1.074 7.297 3.024A10.252 10.252 0 0 1 22.37 11.6c0 5.691-4.63 10.321-10.319 10.321m0-18.73c-6.607 0-11.98 5.373-11.98 11.98 0 2.111.551 4.17 1.597 5.98l-1.697 6.199 6.342-1.663a11.93 11.93 0 0 0 5.738 1.464h.005c6.607 0 11.98-5.373 11.98-11.98 0-3.203-1.247-6.213-3.51-8.477A11.904 11.904 0 0 0 12.051 3.11" fill="#ffffff"/>
        </svg>
        <span className="floating-tooltip">Chat on WhatsApp</span>
      </a>

      {/* Call Button */}
      <a
        href={`tel:${phoneNumber}`}
        className="floating-btn floating-btn-call"
        aria-label="Call Andaman Trails"
      >
        <PhoneCall size={26} color="#ffffff" strokeWidth={2.4} style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }} />
        <span className="floating-tooltip">Call Us: +91 99320 88855</span>
      </a>
    </div>
  );
}


