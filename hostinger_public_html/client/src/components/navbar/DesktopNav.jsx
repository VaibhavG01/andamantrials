// src/components/navbar/DesktopNav.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Travel-Tech Dashboard Navigation Header Links — thick UI, no overlap, cyan glow accents.

import { useRef, useState } from 'react';
import { DASHBOARD_NAV_ITEMS, NAV_CATEGORIES } from '../../data/navigation';
import { ChevronDownIcon } from './NavIcons';
import MegaMenu from './MegaMenu';
import Link from '../ui/Link';
import { Image, Info, Phone, Compass, BookOpen } from 'lucide-react';

const PRIMARY_ITEMS = [
  { id: 'destinations', label: 'Destinations', href: '/destinations' },
  { id: 'packages', label: 'Packages', href: '/packages' },
  { id: 'activities', label: 'Activities', href: '/activities' },
  { id: 'ferries', label: 'Ferries & Cruises', href: '/ferries' },
  { id: 'stays', label: 'Stays', href: '/stays' },
  { id: 'blog', label: 'Blog', href: '/blog' },
];

const MORE_ITEMS = [
  { id: 'gallery', label: 'Photo Gallery', desc: 'High-res tropical island captures', href: '/gallery', icon: Image },
  { id: 'about', label: 'About Us', desc: 'Our story & local island team', href: '/about', icon: Info },
  { id: 'contact', label: 'Contact & Support', desc: '24/7 concierge & Port Blair desk', href: '/contact', icon: Phone },
];

export default function DesktopNav({ activeCategory, setActiveCategory, isScrolled }) {
  const timeoutRef = useRef(null);
  const [moreMenuOpen, setMoreMenuOpen] = useState(false);
  const moreTimeoutRef = useRef(null);

  const handleMouseEnter = (catId) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (NAV_CATEGORIES.some(c => c.id === catId)) {
      setActiveCategory(catId);
    } else {
      setActiveCategory(null);
    }
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveCategory(null);
    }, 220);
  };

  const handleMoreEnter = () => {
    if (moreTimeoutRef.current) clearTimeout(moreTimeoutRef.current);
    setActiveCategory(null);
    setMoreMenuOpen(true);
  };

  const handleMoreLeave = () => {
    moreTimeoutRef.current = setTimeout(() => {
      setMoreMenuOpen(false);
    }, 200);
  };

  const currentCategoryData = NAV_CATEGORIES.find(c => c.id === activeCategory);
  const currentPath = window.location.pathname;
  const isMoreActive = MORE_ITEMS.some(item => currentPath === item.href || currentPath.startsWith(item.href));

  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        gap: 'clamp(3px, 0.5vw, 7px)',
        flexShrink: 0,
      }}
      onMouseLeave={handleMouseLeave}
    >
      {/* Primary 7 Booking & Explore Navigation Items */}
      {PRIMARY_ITEMS.map((item) => {
        const hasDropdown = NAV_CATEGORIES.some(c => c.id === item.id);
        const isHoverActive = activeCategory === item.id;
        const isRouteActive = currentPath === item.href || (item.href !== '/' && currentPath.startsWith(item.href));
        const isActive = isHoverActive || isRouteActive;

        return (
          <div
            key={item.id}
            onMouseEnter={() => handleMouseEnter(item.id)}
            style={{ position: 'relative', flexShrink: 0 }}
          >
            <Link
              to={item.href}
              onClick={() => setActiveCategory(null)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 4,
                background: isActive 
                  ? (isScrolled ? '#fff0eb' : 'rgba(240, 101, 67, 0.22)') 
                  : 'transparent',
                border: isActive
                  ? (isScrolled ? '1.5px solid #f06543' : '1.5px solid rgba(255, 107, 74, 0.65)')
                  : '1.5px solid transparent',
                color: isActive 
                  ? (isScrolled ? '#f06543' : '#ffffff')
                  : (isScrolled ? '#0b2545' : '#ffffff'),
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 13,
                fontWeight: isActive ? 900 : 700,
                padding: '6px 11px',
                borderRadius: 14,
                cursor: 'pointer',
                letterSpacing: '0.02em',
                textDecoration: 'none',
                transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                outline: 'none',
                whiteSpace: 'nowrap',
                boxShadow: isActive ? '0 2px 8px rgba(240, 101, 67, 0.2)' : 'none',
              }}
              onMouseEnter={e => {
                if (!isActive) {
                  e.currentTarget.style.color = isScrolled ? '#f06543' : '#ff8a65';
                  e.currentTarget.style.background = isScrolled ? '#fff8f0' : 'rgba(255, 255, 255, 0.10)';
                  e.currentTarget.style.borderColor = isScrolled ? '#ebded2' : 'rgba(255, 255, 255, 0.2)';
                }
              }}
              onMouseLeave={e => {
                if (!isActive) {
                  e.currentTarget.style.color = isScrolled ? '#0b2545' : '#ffffff';
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.borderColor = 'transparent';
                }
              }}
            >
              <span>{item.label}</span>
              {hasDropdown && (
                <ChevronDownIcon
                  size={11}
                  className="transition-transform duration-300"
                  style={{
                    transform: isHoverActive ? 'rotate(180deg)' : 'rotate(0deg)',
                    color: isActive ? '#f06543' : (isScrolled ? '#5c6f84' : '#cbd5e1'),
                    strokeWidth: 2.5,
                  }}
                />
              )}
            </Link>
          </div>
        );
      })}

      {/* Secondary More Dropdown Menu (Prevents Overflow & Overlap) */}
      <div
        onMouseEnter={handleMoreEnter}
        onMouseLeave={handleMoreLeave}
        style={{ position: 'relative', flexShrink: 0 }}
      >
        <button
          type="button"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 4,
            background: isMoreActive || moreMenuOpen
              ? (isScrolled ? '#fff0eb' : 'rgba(240, 101, 67, 0.22)')
              : 'transparent',
            border: isMoreActive || moreMenuOpen
              ? (isScrolled ? '1.5px solid #f06543' : '1.5px solid rgba(255, 107, 74, 0.65)')
              : '1.5px solid transparent',
            color: isMoreActive || moreMenuOpen
              ? (isScrolled ? '#f06543' : '#ffffff')
              : (isScrolled ? '#0b2545' : '#ffffff'),
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 13,
            fontWeight: isMoreActive || moreMenuOpen ? 900 : 700,
            padding: '6px 11px',
            borderRadius: 14,
            cursor: 'pointer',
            letterSpacing: '0.02em',
            transition: 'all 0.2s ease',
            outline: 'none',
            whiteSpace: 'nowrap',
          }}
          onMouseEnter={e => {
            if (!isMoreActive && !moreMenuOpen) {
              e.currentTarget.style.color = isScrolled ? '#F06543' : '#38bdf8';
              e.currentTarget.style.background = isScrolled ? '#f8fafc' : 'rgba(255, 255, 255, 0.10)';
              e.currentTarget.style.borderColor = isScrolled ? '#e2e8f0' : 'rgba(255, 255, 255, 0.2)';
            }
          }}
          onMouseLeave={e => {
            if (!isMoreActive && !moreMenuOpen) {
              e.currentTarget.style.color = isScrolled ? '#0B2545' : '#ffffff';
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.borderColor = 'transparent';
            }
          }}
        >
          <span>More</span>
          <ChevronDownIcon
            size={11}
            style={{
              transform: moreMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              color: isMoreActive || moreMenuOpen ? '#F06543' : (isScrolled ? '#64748b' : '#cbd5e1'),
              strokeWidth: 2.5,
              transition: 'transform 0.2s ease',
            }}
          />
        </button>

        {/* More Dropdown Panel */}
        {moreMenuOpen && (
          <div
            style={{
              position: 'absolute',
              top: 'calc(100% + 10px)',
              right: 0,
              width: 260,
              background: '#ffffff',
              border: '2px solid #e2e8f0',
              borderRadius: 20,
              padding: 10,
              boxShadow: '0 20px 50px rgba(0, 45, 98, 0.16), 0 4px 12px rgba(0, 0, 0, 0.05)',
              zIndex: 600,
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
            }}
          >
            {MORE_ITEMS.map((item) => {
              const IconComponent = item.icon;
              const isItemActive = currentPath === item.href;
              return (
                <Link
                  key={item.id}
                  to={item.href}
                  onClick={() => setMoreMenuOpen(false)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    padding: '10px 14px',
                    borderRadius: 14,
                    textDecoration: 'none',
                    background: isItemActive ? '#FFF0EB' : 'transparent',
                    border: isItemActive ? '1.5px solid #F06543' : '1.5px solid transparent',
                    transition: 'all 0.15s ease',
                  }}
                  onMouseEnter={e => {
                    if (!isItemActive) {
                      e.currentTarget.style.background = '#f8fafc';
                      e.currentTarget.style.borderColor = '#e2e8f0';
                    }
                  }}
                  onMouseLeave={e => {
                    if (!isItemActive) {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.borderColor = 'transparent';
                    }
                  }}
                >
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 10,
                      background: isItemActive ? '#F06543' : '#f1f5f9',
                      color: isItemActive ? '#ffffff' : '#F06543',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <IconComponent size={16} />
                  </div>
                  <div>
                    <div style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: 13,
                      fontWeight: 800,
                      color: '#0B2545',
                      lineHeight: 1.2,
                    }}>
                      {item.label}
                    </div>
                    <div style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 11,
                      color: '#64748b',
                      fontWeight: 600,
                      marginTop: 2,
                    }}>
                      {item.desc}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>

      {/* Shared Mega Menu Dropdown */}
      <MegaMenu
        category={currentCategoryData}
        isVisible={!!activeCategory}
        onClose={() => setActiveCategory(null)}
      />
    </div>
  );
}
