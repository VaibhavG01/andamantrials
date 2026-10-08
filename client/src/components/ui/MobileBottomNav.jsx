// src/components/ui/MobileBottomNav.jsx
// ─────────────────────────────────────────────────────────────────────────────
// MODERN IPHONE iOS FLOATING ISLAND DOCK — Floating Glass Capsule with Bottom Gap
// 5 Core App Tabs • Dark Ocean Glassmorphism • Active Pill Glow • iOS Micro-Animations

import React, { useState, useEffect } from 'react';
import { Home, Compass, Sparkles, Package, Ship } from 'lucide-react';

export default function MobileBottomNav() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleUrlChange = () => {
      const rawRoute = window.location.hash ? window.location.hash.replace('#', '/') : window.location.pathname;
      const route = rawRoute || '/home';
      setCurrentPath(route);
      checkVisibility(route);
    };

    const checkVisibility = (routeOverride) => {
      const route = routeOverride || (window.location.hash ? window.location.hash.replace('#', '/') : window.location.pathname) || '/home';
      const isHome = route === '/' || route === '/home' || route === '';

      if (!isHome) {
        setIsVisible(true);
      } else {
        const threshold = Math.min(window.innerHeight * 0.45, 380);
        setIsVisible(window.scrollY > threshold);
      }
    };

    const handleScroll = () => {
      checkVisibility();
    };

    window.addEventListener('popstate', handleUrlChange);
    window.addEventListener('hashchange', handleUrlChange);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    handleUrlChange();

    return () => {
      window.removeEventListener('popstate', handleUrlChange);
      window.removeEventListener('hashchange', handleUrlChange);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navigateTo = (path) => {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new Event('popstate'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    {
      id: 'home',
      label: 'Home',
      path: '/home',
      icon: Home,
    },
    {
      id: 'destinations',
      label: 'Explore',
      path: '/destinations',
      icon: Compass,
    },
    {
      id: 'plan-trip',
      label: 'Plan Trip',
      path: '/plan-trip',
      icon: Sparkles,
      isSpecial: true,
    },
    {
      id: 'packages',
      label: 'Packages',
      path: '/packages',
      icon: Package,
    },
    {
      id: 'ferries',
      label: 'Ferries',
      path: '/ferries',
      icon: Ship,
    },
  ];

  const isTabActive = (itemPath) => {
    if (itemPath === '/home') {
      return currentPath === '/' || currentPath === '/home' || currentPath === '';
    }
    if (itemPath === '/destinations') {
      return currentPath.startsWith('/destinations') || currentPath.startsWith('/destination-details');
    }
    if (itemPath === '/packages') {
      return currentPath.startsWith('/packages') || currentPath.startsWith('/package-details');
    }
    if (itemPath === '/ferries') {
      return currentPath.startsWith('/ferries') || currentPath.startsWith('/ferry-details') || currentPath.startsWith('/cruises') || currentPath.startsWith('/cruise-details');
    }
    return currentPath.startsWith(itemPath);
  };

  return (
    <nav className={`mobile-bottom-nav ${isVisible ? 'nav-visible' : ''}`}>
      <style>{`
        .mobile-bottom-nav {
          display: flex;
          position: fixed;
          bottom: calc(14px + env(safe-area-inset-bottom, 0px));
          left: 14px;
          right: 14px;
          margin: 0 auto;
          max-width: 440px;
          z-index: 1000;
          background: #ffffff;
          backdrop-filter: blur(28px) saturate(210%);
          -webkit-backdrop-filter: blur(28px) saturate(210%);
          border: 1.5px solid #ebded2;
          border-radius: 36px;
          box-shadow: 0 20px 50px rgba(11, 37, 69, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.22);
          padding: 6px 8px;
          align-items: center;
          justify-content: space-around;
          transform: translateY(160%);
          opacity: 0;
          pointer-events: none;
          transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease;
        }

        .mobile-bottom-nav.nav-visible {
          transform: translateY(0);
          opacity: 1;
          pointer-events: auto;
        }

        @media (min-width: 769px) {
          .mobile-bottom-nav {
            display: none !important;
          }
        }

        .mobile-nav-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: 1px solid transparent;
          color: #64748b;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px;
          font-weight: 800;
          letter-spacing: 0.02em;
          padding: 6px 12px;
          border-radius: 24px;
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          outline: none;
          -webkit-tap-highlight-color: transparent;
        }

        .mobile-nav-item:active {
          transform: scale(0.92);
        }

        .mobile-nav-item.active {
          color: #f06543;
          background: rgba(240, 101, 67, 0.15);
          border-color: rgba(240, 101, 67, 0.4);
          box-shadow: 0 4px 16px rgba(240, 101, 67, 0.2);
        }

        /* Center Prominent Special Floating CTA Button */
        .mobile-nav-special {
          background: linear-gradient(135deg, #ff6b4a 0%, #f06543 100%) !important;
          color: #ffffff !important;
          border-radius: 30px !important;
          padding: 8px 14px !important;
          margin-top: -16px;
          box-shadow: 0 8px 24px rgba(240, 101, 67, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3) !important;
          border: 2px solid #ffffff !important;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }

        .mobile-nav-special span {
          font-weight: 900 !important;
          color: #ffffff !important;
          font-size: 9.5px !important;
          letter-spacing: 0.04em !important;
          text-transform: uppercase;
        }

        .mobile-nav-special.active {
          transform: scale(1.05) translateY(-2px) !important;
          box-shadow: 0 10px 30px rgba(240, 101, 67, 0.6) !important;
        }
      `}</style>

      {navItems.map((item) => {
        const IconComponent = item.icon;
        const active = isTabActive(item.path);

        if (item.isSpecial) {
          return (
            <button
              key={item.id}
              onClick={() => navigateTo(item.path)}
              className={`mobile-nav-item mobile-nav-special ${active ? 'active' : ''}`}
            >
              <IconComponent size={19} color="#ffffff" strokeWidth={2.8} />
              <span style={{ marginTop: 2 }}>{item.label}</span>
            </button>
          );
        }

        return (
          <button
            key={item.id}
            onClick={() => navigateTo(item.path)}
            className={`mobile-nav-item ${active ? 'active' : ''}`}
          >
            <IconComponent
              size={20}
              color={active ? '#f06543' : '#9cb3bd'}
              strokeWidth={active ? 2.6 : 2}
            />
            <span style={{ marginTop: 3 }}>{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}

