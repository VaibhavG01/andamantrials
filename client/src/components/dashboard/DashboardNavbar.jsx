// src/components/dashboard/DashboardNavbar.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Top Navigation Bar for Traveler Command Center — Glassmorphism, Search & Profile

import React, { useState, useRef, useEffect } from 'react';
import {
  Bell, Heart, Search, ChevronDown, User,
  Compass, LogOut, ShieldCheck, Menu, Sparkles, X,
} from 'lucide-react';
import { authService } from '../../api/authService';

export default function DashboardNavbar({
  activeTab = 'dashboard',
  onSelectTab,
  onToggleSidebar,
  onToggleNotifications,
  unreadCount = 2,
}) {
  const [profileDropdown, setProfileDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setProfileDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const getBreadcrumb = () => {
    switch (activeTab) {
      case 'trips': return 'My Trips';
      case 'bookings': return 'My Bookings';
      case 'itinerary': return 'Trip Itinerary';
      case 'wishlist': return 'Saved Wishlist';
      case 'payments': return 'Payment History';
      case 'documents': return 'Travel Documents';
      case 'profile': return 'My Profile';
      case 'support': return 'Support & Help';
      case 'dashboard':
      default: return 'Overview';
    }
  };

  return (
    <header className="dash-navbar">
      <style>{`
        .dash-navbar {
          height: 72px;
          position: sticky;
          top: 0;
          z-index: 990;
          background: #f8fafc;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 28px;
          gap: 20px;
        }
        @media (max-width: 768px) {
          .dash-navbar { padding: 0 16px; height: 64px; }
        }

        /* Left Breadcrumb */
        .dash-breadcrumb-row {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .dash-menu-toggle {
          display: none;
          background: #e2e8f0;
          border: 1px solid #e2e8f0;
          color: #F06543;
          width: 38px;
          height: 38px;
          border-radius: 12px;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        @media (max-width: 1024px) {
          .dash-menu-toggle { display: flex; }
        }

        .dash-crumb-root {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 700;
          color: #627d8a;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        .dash-crumb-sep {
          color: #4a6678;
          font-size: 12px;
        }
        .dash-crumb-active {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 14px;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: 0.02em;
        }

        /* Center Search */
        .dash-search-box {
          position: relative;
          max-width: 320px;
          width: 100%;
        }
        @media (max-width: 768px) {
          .dash-search-box { display: none; }
        }

        .dash-search-input {
          font-family: 'Inter', sans-serif;
          font-size: 12.5px;
          color: #334155;
          background: #e2e8f0;
          border: 1px solid #e2e8f0;
          padding: 8px 14px 8px 36px;
          border-radius: 20px;
          outline: none;
          width: 100%;
          box-sizing: border-box;
          transition: all 0.25s ease;
        }
        .dash-search-input::placeholder { color: #64748b; }
        .dash-search-input:focus {
          border-color: #F06543;
          background: rgba(22, 217, 255, 0.06);
          box-shadow: 0 0 16px rgba(22, 217, 255, 0.15);
        }

        /* Right Actions */
        .dash-actions-row {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .dash-icon-btn {
          position: relative;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #e2e8f0;
          border: 1px solid #e2e8f0;
          color: #64748b;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.25s ease;
          text-decoration: none;
        }
        .dash-icon-btn:hover {
          color: #F06543;
          border-color: rgba(22, 217, 255, 0.5);
          background: rgba(22, 217, 255, 0.08);
          transform: translateY(-2px);
        }

        .dash-notif-dot {
          position: absolute;
          top: 8px;
          right: 8px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #ff4f7b;
          box-shadow: 0 0 8px #ff4f7b;
        }

        /* Profile Dropdown Button */
        .dash-profile-trigger {
          display: flex;
          align-items: center;
          gap: 10px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          padding: 5px 12px 5px 6px;
          border-radius: 30px;
          cursor: pointer;
          transition: all 0.25s ease;
        }
        .dash-profile-trigger:hover {
          border-color: #F06543;
          box-shadow: 0 4px 18px rgba(33, 230, 193, 0.2);
        }
        .dash-avatar-img {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          object-fit: cover;
          border: 1.5px solid #F06543;
        }

        /* Profile Dropdown Menu */
        .dash-dropdown-menu {
          position: absolute;
          top: calc(100% + 10px);
          right: 28px;
          width: 230px;
          background: #ffffff;
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          padding: 8px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.7);
          animation: dropFade 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 1000;
        }
        @keyframes dropFade {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .dash-dropdown-header {
          padding: 12px 14px;
          border-bottom: 1px solid #e2e8f0;
          margin-bottom: 4px;
        }
        .dash-dropdown-name {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 800;
          color: #0B2545;
        }
        .dash-dropdown-email {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: #64748b;
        }

        .dash-dropdown-item {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 9px 12px;
          border-radius: 10px;
          border: none;
          background: transparent;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 600;
          color: #64748b;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.2s ease;
          box-sizing: border-box;
        }
        .dash-dropdown-item:hover {
          color: #ffffff;
          background: rgba(33, 230, 193, 0.1);
        }
      `}</style>

      {/* LEFT: BREADCRUMB + MOBILE MENU BUTTON */}
      <div className="dash-breadcrumb-row">
        <button
          className="dash-menu-toggle"
          onClick={onToggleSidebar}
          aria-label="Toggle Sidebar"
        >
          <Menu size={20} />
        </button>

        <span className="dash-crumb-root">DASHBOARD</span>
        <span className="dash-crumb-sep">/</span>
        <span className="dash-crumb-active">{getBreadcrumb()}</span>
      </div>

      {/* CENTER: SEARCH INPUT */}
      <div className="dash-search-box">
        <Search
          size={15}
          color="#5a7a9a"
          style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)' }}
        />
        <input
          type="text"
          placeholder="Search destinations, packages, tickets..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="dash-search-input"
        />
      </div>

      {/* RIGHT: NOTIFICATIONS, PROFILE DROPDOWN */}
      <div className="dash-actions-row" ref={dropdownRef}>

        {/* Notifications Bell */}
        <button
          className="dash-icon-btn"
          onClick={onToggleNotifications}
          title="Notifications"
        >
          <Bell size={18} />
          {unreadCount > 0 && <span className="dash-notif-dot" />}
        </button>

        {/* Profile Dropdown Trigger */}
        <div
          className="dash-profile-trigger"
          onClick={() => setProfileDropdown(!profileDropdown)}
        >
          {(() => {
            const currentUser = (() => {
              try {
                const saved = localStorage.getItem('andaman_user');
                return saved ? JSON.parse(saved) : null;
              } catch {
                return null;
              }
            })();

            const strName = typeof currentUser?.name === 'string'
              ? currentUser.name
              : (typeof currentUser?.user?.name === 'string' ? currentUser.user.name : 'Traveler');

            const strEmail = typeof currentUser?.email === 'string'
              ? currentUser.email
              : (typeof currentUser?.user?.email === 'string' ? currentUser.user.email : 'traveler@andamantrails.com');

            const strRole = typeof currentUser?.role === 'string'
              ? currentUser.role
              : (typeof currentUser?.user?.role === 'string' ? currentUser.user.role : 'Member');

            const displayName = strName;
            const fullDisplayName = strName;
            const userEmail = strEmail;
            const userRole = strRole;

            const getInitials = (fullName) => {
              if (!fullName) return 'TR';
              const parts = fullName.trim().split(/\s+/).filter(Boolean);
              if (parts.length >= 2) {
                return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
              }
              if (parts.length === 1 && parts[0].length >= 2) {
                return parts[0].substring(0, 2).toUpperCase();
              }
              return fullName.substring(0, 2).toUpperCase();
            };

            return (
              <>
                <div style={{
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
                  fontWeight: 950,
                  border: '1.5px solid #F06543',
                  boxShadow: '0 0 10px rgba(240, 101, 67, 0.35)',
                  flexShrink: 0
                }}>
                  {getInitials(fullDisplayName)}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 800, color: '#0B2545', lineHeight: 1 }}>
                    {displayName}
                  </span>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: '#F06543', marginTop: 2, fontWeight: 600 }}>
                    {userRole}
                  </span>
                </div>
                <ChevronDown size={14} color="#9cb3bd" />

                {/* Profile Dropdown Menu */}
                {profileDropdown && (
                  <div className="dash-dropdown-menu">
                    <div className="dash-dropdown-header">
                      <div className="dash-dropdown-name">{fullDisplayName}</div>
                      <div className="dash-dropdown-email">{userEmail}</div>
                    </div>

                    <button
                      className="dash-dropdown-item"
                      onClick={() => {
                        onSelectTab && onSelectTab('profile', '/dashboard/profile');
                        setProfileDropdown(false);
                      }}
                    >
                      <User size={14} />
                      <span>My Profile</span>
                    </button>



                    <button
                      className="dash-dropdown-item"
                      style={{ color: '#ff6b6b' }}
                      onClick={() => {
                        authService.logout();
                        window.history.pushState({}, '', '/');
                        window.dispatchEvent(new PopStateEvent('popstate'));
                      }}
                    >
                      <LogOut size={14} />
                      <span>Logout Account</span>
                    </button>
                  </div>
                )}
              </>
            );
          })()}
        </div>
      </div>
    </header>
  );
}
