// src/components/dashboard/DashboardSidebar.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Premium Dark Glass Sidebar with Lucide Icons and Active Cyan Glow Indicators

import React from 'react';
import {
  Compass, LayoutDashboard, Map, Calendar, Ship, Heart,
  FileText, User, LogOut, Sparkles, MessageCircle,
  HelpCircle, CreditCard, Award, ChevronRight, X, Anchor, Wallet,
} from 'lucide-react';
import { authService } from '../../api/authService';

const MAIN_NAV = [
  { id: 'dashboard', label: 'Overview', icon: LayoutDashboard, path: '/dashboard' },
  { id: 'bookings', label: 'My Bookings', icon: Award, path: '/dashboard/bookings' },
  { id: 'payments', label: 'Payment History', icon: Wallet, path: '/dashboard/payments' },
  { id: 'trips', label: 'My Trips', icon: Compass, path: '/dashboard/trips' },
  { id: 'itinerary', label: 'Trip Itinerary', icon: Calendar, path: '/dashboard/itinerary' },
];

const ACCOUNT_NAV = [
  { id: 'profile', label: 'Profile Settings', icon: User, path: '/dashboard/profile' },
  { id: 'support', label: 'Support & Help', icon: HelpCircle, path: '/dashboard/support' },
];

export default function DashboardSidebar({ activeTab = 'dashboard', onSelectTab, isOpen, onClose }) {
  const handleNavClick = (id, path) => {
    if (onSelectTab) onSelectTab(id, path);
    if (onClose) onClose();
  };

  return (
    <>
      <aside className={`dash-sidebar${isOpen ? ' open' : ''}`}>
        <style>{`
          .dash-sidebar {
            width: 260px;
            height: 100vh;
            position: fixed;
            top: 0;
            left: 0;
            background: rgba(4, 16, 26, 0.95);
            backdrop-filter: blur(24px);
            -webkit-backdrop-filter: blur(24px);
            border-right: 1px solid #e2e8f0;
            display: flex;
            flex-direction: column;
            z-index: 1000;
            transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
            overflow-y: auto;
            scrollbar-width: none;
          }
          .dash-sidebar::-webkit-scrollbar { display: none; }

          @media (max-width: 1024px) {
            .dash-sidebar {
              position: fixed;
              transform: translateX(-100%);
              box-shadow: 12px 0 40px rgba(0,0,0,0.8);
            }
            .dash-sidebar.open {
              transform: translateX(0);
            }
          }

          /* Logo */
          .dash-sidebar-logo {
            padding: 24px 20px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid #e2e8f0;
          }

          /* Section Header */
          .dash-nav-section-hdr {
            font-family: 'Space Grotesk', sans-serif;
            font-size: 9.5px;
            font-weight: 800;
            letter-spacing: 0.18em;
            color: #627d8a;
            text-transform: uppercase;
            padding: 18px 20px 8px;
          }

          /* Nav List */
          .dash-nav-list {
            list-style: none;
            padding: 0 10px;
            margin: 0;
            display: flex;
            flex-direction: column;
            gap: 4px;
          }

          /* Nav Item */
          .dash-nav-btn {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 10px 14px;
            border-radius: 12px;
            border: none;
            background: transparent;
            font-family: 'Space Grotesk', sans-serif;
            font-size: 12.5px;
            font-weight: 600;
            color: #64748b;
            cursor: pointer;
            text-decoration: none;
            transition: all 0.25s ease;
            position: relative;
            box-sizing: border-box;
          }
          .dash-nav-btn:hover {
            color: #0b2545;
            background: rgba(240, 101, 67, 0.08);
          }
          .dash-nav-btn.active {
            color: #0b2545;
            background: rgba(240, 101, 67, 0.12);
            border: 1px solid rgba(240, 101, 67, 0.35);
            box-shadow: 0 4px 16px rgba(240, 101, 67, 0.15);
          }
          .dash-nav-btn.active::before {
            content: '';
            position: absolute;
            left: 0;
            top: 20%;
            bottom: 20%;
            width: 3.5px;
            border-radius: 0 4px 4px 0;
            background: linear-gradient(180deg, #ff6b4a, #f06543);
            box-shadow: 0 0 10px #f06543;
          }

          .dash-nav-badge {
            margin-left: auto;
            font-family: 'Space Grotesk', sans-serif;
            font-size: 9.5px;
            font-weight: 800;
            color: #ffffff;
            background: #f06543;
            padding: 2px 7px;
            border-radius: 10px;
          }

          /* Bottom Actions */
          .dash-sidebar-footer {
            margin-top: auto;
            padding: 16px 10px 24px;
            border-top: 1px solid #e2e8f0;
            display: flex;
            flex-direction: column;
            gap: 4px;
          }
        `}</style>

        {/* LOGO */}
        <div className="dash-sidebar-logo">
          <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <div style={{
              width: 36, height: 36, borderRadius: 12,
              background: 'linear-gradient(135deg, #ff6b4a, #f06543)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#ffffff', boxShadow: '0 0 16px rgba(240,101,67,0.4)',
            }}>
              <Compass size={20} strokeWidth={2.2} />
            </div>
            <div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 15, fontWeight: 900, color: '#0b2545', letterSpacing: '0.08em' }}>
                ANDAMAN TRAILS
              </div>
              <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 12.5, fontStyle: 'italic', color: '#f06543' }}>
                Traveler Command Center
              </div>
            </div>
          </a>

          {onClose && (
            <button
              onClick={onClose}
              style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer' }}
            >
              <X size={20} />
            </button>
          )}
        </div>

        {/* NAVIGATION SECTIONS */}
        <div style={{ flex: 1 }}>
          {/* MAIN */}
          <div className="dash-nav-section-hdr">MAIN</div>
          <ul className="dash-nav-list">
            {MAIN_NAV.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <li key={item.id}>
                  <button
                    className={`dash-nav-btn${isActive ? ' active' : ''}`}
                    onClick={() => handleNavClick(item.id, item.path)}
                  >
                    <Icon size={16} color={isActive ? '#F06543' : '#9cb3bd'} />
                    <span>{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* ACCOUNT */}
          <div className="dash-nav-section-hdr">ACCOUNT</div>
          <ul className="dash-nav-list">
            {ACCOUNT_NAV.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <li key={item.id}>
                  <button
                    className={`dash-nav-btn${isActive ? ' active' : ''}`}
                    onClick={() => handleNavClick(item.id, item.path)}
                  >
                    <Icon size={16} color={isActive ? '#F06543' : '#9cb3bd'} />
                    <span>{item.label}</span>
                    {item.badge && <span className="dash-nav-badge">{item.badge}</span>}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* BOTTOM: LOGOUT */}
        <div className="dash-sidebar-footer">
          <button
            onClick={() => {
              authService.logout();
              window.history.pushState({}, '', '/');
              window.dispatchEvent(new PopStateEvent('popstate'));
            }}
            className="dash-nav-btn"
            style={{ color: '#ff6060', cursor: 'pointer', background: 'transparent', border: 'none', width: '100%', textAlign: 'left' }}
          >
            <LogOut size={16} color="#ff6060" />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
}
