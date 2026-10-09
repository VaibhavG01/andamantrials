// src/components/navbar/Navbar.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Master Premium Cinematic Navbar Component — transparent floating initial state,
// smooth scroll glass transformation, mega menus, search overlay, auth modal & dashboard.

import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { User } from 'lucide-react';
import Logo from './Logo';
import DesktopNav from './DesktopNav';
import PlanTripButton from './PlanTripButton';
import SearchOverlay from './SearchOverlay';
import PlanTripModal from './PlanTripModal';
import MobileMenu from './MobileMenu';
import AuthModal from '../auth/AuthModal';
import UserDashboard from '../dashboard/UserDashboard';
import { SearchIcon, MenuIcon } from './NavIcons';
import { authService } from '../../api/authService';

// Helper function to extract user details and initials (e.g. Vaibhav Gautam -> VG)
function getUserDetails(user) {
  if (!user) return { fullName: 'Traveler', initials: 'VG', role: 'Traveler' };
  
  const rawUser = user?.user || user;
  
  const firstName = (rawUser.firstName || '').trim();
  const lastName = (rawUser.lastName || '').trim();
  let fullName = '';
  
  if (firstName || lastName) {
    fullName = `${firstName} ${lastName}`.trim();
  } else if (typeof rawUser.name === 'string' && rawUser.name.trim()) {
    fullName = rawUser.name.trim();
  } else if (typeof rawUser.fullName === 'string' && rawUser.fullName.trim()) {
    fullName = rawUser.fullName.trim();
  } else if (typeof rawUser.email === 'string') {
    fullName = rawUser.email.split('@')[0].replace(/[._-]+/g, ' ');
  } else {
    fullName = 'Traveler';
  }

  // Calculate dynamic initials: 1st char of First Name + 1st char of Last Name (e.g. Vaibhav Gautam -> VG)
  let initials = '';
  if (firstName && lastName) {
    initials = `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  } else {
    const parts = fullName.split(/\s+/).filter(Boolean);
    if (parts.length >= 2) {
      initials = `${parts[0].charAt(0)}${parts[parts.length - 1].charAt(0)}`.toUpperCase();
    } else if (parts.length === 1 && parts[0].length >= 2) {
      initials = parts[0].substring(0, 2).toUpperCase();
    } else if (parts.length === 1) {
      initials = parts[0].charAt(0).toUpperCase();
    } else {
      initials = 'VG';
    }
  }

  return {
    fullName,
    initials: initials || 'VG',
    role: rawUser.role || 'Traveler',
  };
}

function toTitleCase(str) {
  if (!str) return '';
  return str
    .split(' ')
    .map(word => word ? (word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) : '')
    .join(' ');
}

export default function Navbar({ isNight = false }) {
  const navbarRef = useRef(null);
  const containerRef = useRef(null);

  const [isScrolled, setIsScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [tripModalOpen, setTripModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Auth & Dashboard States
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [dashboardOpen, setDashboardOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const saved = localStorage.getItem('andaman_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  // ── Scroll Listener for Glass Transformation & Auth State Sync
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 40;
      setIsScrolled(scrolled);
    };

    const syncUser = () => {
      try {
        const saved = localStorage.getItem('andaman_user');
        setCurrentUser(saved ? JSON.parse(saved) : null);
      } catch {
        setCurrentUser(null);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('storage', syncUser);
    window.addEventListener('popstate', syncUser);
    window.addEventListener('auth-change', syncUser);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('storage', syncUser);
      window.removeEventListener('popstate', syncUser);
      window.removeEventListener('auth-change', syncUser);
    };
  }, []);

  // ── GSAP Navbar Initial Entrance Animation
  useEffect(() => {
    if (!navbarRef.current) return;
    gsap.fromTo(
      navbarRef.current,
      { opacity: 0, y: -24 },
      { opacity: 1, y: 0, duration: 0.9, ease: 'power2.out', delay: 1.8 }
    );
  }, []);

  // ── Global ESC Key Listener to Close Overlays
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveCategory(null);
        setSearchOpen(false);
        setTripModalOpen(false);
        setMobileMenuOpen(false);
        setAuthModalOpen(false);
        setDashboardOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const glassContainerStyle = {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: isScrolled ? '10px 22px' : '14px 28px',
    borderRadius: isScrolled ? 22 : 28,
    background: isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(4, 19, 34, 0.92)',
    backdropFilter: 'blur(28px)',
    WebkitBackdropFilter: 'blur(28px)',
    border: isScrolled ? '2px solid #e2e8f0' : '2px solid rgba(0, 194, 184, 0.45)',
    boxShadow: isScrolled
      ? '0 16px 40px rgba(0, 45, 98, 0.12), 0 2px 8px rgba(0, 0, 0, 0.04)'
      : '0 20px 50px rgba(0, 0, 0, 0.65), 0 0 28px rgba(0, 194, 184, 0.28)',
    transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
    width: '100%',
    boxSizing: 'border-box',
  };

  return (
    <>
      <style>{`
        .master-navbar-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 8px 10px;
          pointer-events: none;
          box-sizing: border-box;
        }
        @media (min-width: 640px) {
          .master-navbar-header {
            padding: 12px 16px;
          }
        }

        .master-nav-inner {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: ${isScrolled ? '8px 14px' : '10px 14px'};
          border-radius: 24px;
          background: ${isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(4, 19, 34, 0.94)'};
          backdrop-filter: blur(28px);
          -webkit-backdrop-filter: blur(28px);
          border: ${isScrolled ? '2px solid #e2e8f0' : '2px solid rgba(0, 194, 184, 0.45)'};
          box-shadow: ${
            isScrolled
              ? '0 16px 40px rgba(0, 45, 98, 0.12), 0 2px 8px rgba(0, 0, 0, 0.04)'
              : '0 20px 50px rgba(0, 0, 0, 0.65), 0 0 28px rgba(0, 194, 184, 0.28)'
          };
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          width: 100%;
          box-sizing: border-box;
        }
        @media (min-width: 640px) {
          .master-nav-inner {
            padding: ${isScrolled ? '10px 22px' : '14px 28px'};
            border-radius: ${isScrolled ? '22px' : '28px'};
          }
        }
      `}</style>

      <header
        ref={navbarRef}
        id="master-navbar"
        className="master-navbar-header"
      >
        <div
          ref={containerRef}
          style={{
            maxWidth: 1440,
            margin: '0 auto',
            pointerEvents: 'auto',
          }}
        >
          <nav aria-label="Main Navigation" className="master-nav-inner">
            {/* ── LEFT: Logo ── */}
            <Logo isScrolled={isScrolled} />

            {/* ── CENTER: Desktop Navigation Mega Menu Items (Desktop Only) ── */}
            <div className="hidden lg:block">
              <DesktopNav
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                isScrolled={isScrolled}
              />
            </div>

            {/* ── RIGHT: Search + Auth/Dashboard + Plan My Trip CTA + Mobile Hamburger ── */}
            <div className="flex items-center gap-1.5 sm:gap-2.5 flex-shrink-0">
              {/* Search Button */}
              <button
                onClick={() => setSearchOpen(true)}
                className="w-8.5 h-8.5 sm:w-10 sm:h-10 rounded-full flex items-center justify-center cursor-pointer transition-all outline-none flex-shrink-0 shadow-sm"
                style={{
                  background: isScrolled ? '#f1f5f9' : 'rgba(255, 255, 255, 0.12)',
                  border: isScrolled ? '2px solid #cbd5e1' : '2px solid rgba(255, 255, 255, 0.35)',
                  color: isScrolled ? '#0B2545' : '#ffffff',
                }}
                aria-label="Search destinations, packages, activities"
                title="Search (Esc to exit)"
              >
                <SearchIcon size={15} />
              </button>

              {/* Account / Dashboard Button: Displays ONLY dynamic user initials (e.g. VG for Vaibhav Gautam) */}
              {currentUser ? (
                (() => {
                  const { fullName, initials, role } = getUserDetails(currentUser);
                  const displayFormattedName = toTitleCase(fullName);
                  return (
                    <button
                      onClick={() => {
                        const path = (currentUser?.role === 'SUPER_ADMIN' || currentUser?.role === 'ADMIN' || currentUser?.role === 'EDITOR')
                          ? '/admin/dashboard'
                          : (currentUser?.role === 'RECEPTIONIST' ? '/reception/dashboard' : '/dashboard');
                        window.history.pushState({}, '', path);
                        window.dispatchEvent(new Event('popstate'));
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="w-8.5 h-8.5 sm:w-10 sm:h-10 rounded-full flex items-center justify-center cursor-pointer transition-all flex-shrink-0 hover:scale-105 active:scale-95"
                      style={{
                        background: 'linear-gradient(135deg, #FF6B4A, #F06543)',
                        border: isScrolled ? '2px solid #F06543' : '2px solid rgba(255, 255, 255, 0.45)',
                        color: '#ffffff',
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: 13,
                        fontWeight: 900,
                        letterSpacing: '0.04em',
                        boxShadow: '0 4px 14px rgba(240, 101, 67, 0.35)',
                        whiteSpace: 'nowrap',
                      }}
                      title={`${displayFormattedName} (${role}) — Open Dashboard`}
                      aria-label={`Open Dashboard for ${displayFormattedName}`}
                    >
                      {initials}
                    </button>
                  );
                })()
              ) : (
                <button
                  onClick={() => setAuthModalOpen(true)}
                  className="w-8.5 h-8.5 sm:w-auto sm:h-10 sm:px-4 rounded-full flex items-center justify-center gap-1.5 cursor-pointer transition-all flex-shrink-0 hover:scale-[1.03] active:scale-[0.98]"
                  style={{
                    background: isScrolled ? '#0B2545' : 'rgba(11, 37, 69, 0.95)',
                    border: '1.5px solid #F06543',
                    color: '#ffffff',
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 12.5,
                    fontWeight: 900,
                    boxShadow: '0 4px 14px rgba(240, 101, 67, 0.25)',
                    whiteSpace: 'nowrap',
                  }}
                  title="Sign In / Register Account"
                >
                  <User size={15} color="#FF6B4A" />
                  <span className="hidden sm:inline">SIGN IN</span>
                </button>
              )}

              {/* Plan My Trip CTA Button (Desktop) */}
              <div className="hidden lg:block flex-shrink-0">
                <PlanTripButton onClick={() => setTripModalOpen(true)} compact={false} />
              </div>

              {/* Mobile Hamburger Menu Button (Mobile & Tablet Only) */}
              <button
                className="flex lg:hidden items-center justify-center w-8.5 h-8.5 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-[#F06543]/30 border-2 border-[#F06543] text-white transition-all outline-none flex-shrink-0 cursor-pointer shadow-md"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open mobile menu"
              >
                <MenuIcon size={16} />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* ── Search Overlay Component ── */}
      <SearchOverlay
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
      />

      {/* ── Luxury Trip Planner Modal ── */}
      <PlanTripModal
        isOpen={tripModalOpen}
        onClose={() => setTripModalOpen(false)}
      />

      {/* ── User Registration / Auth Modal ── */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        onLoginSuccess={(user) => {
          setCurrentUser(user);
          if (user && (user.role === 'ADMIN' || user.role === 'EDITOR')) {
            window.history.pushState({}, '', '/admin/dashboard');
            window.dispatchEvent(new PopStateEvent('popstate'));
          } else {
            setDashboardOpen(true);
          }
        }}
      />

      {/* ── Interactive User Dashboard ── */}
      <UserDashboard
        isOpen={dashboardOpen}
        onClose={() => setDashboardOpen(false)}
        user={currentUser}
        onLogout={() => {
          authService.logout();
          setCurrentUser(null);
          setDashboardOpen(false);
          window.history.pushState({}, '', '/');
          window.dispatchEvent(new PopStateEvent('popstate'));
        }}
      />

      {/* ── Mobile Navigation Drawer ── */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onPlanTrip={() => setTripModalOpen(true)}
      />
    </>
  );
}
