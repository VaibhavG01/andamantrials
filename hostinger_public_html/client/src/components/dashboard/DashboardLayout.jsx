// src/components/dashboard/DashboardLayout.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Master Dashboard Layout Container with Sidebar, Navbar, GSAP Entrance & Mobile Drawer

import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import DashboardSidebar from './DashboardSidebar';
import DashboardNavbar from './DashboardNavbar';
import NotificationPanel from './NotificationPanel';
import FooterBottom from '../FooterBottom';

export default function DashboardLayout({ children, activeTab = 'dashboard', onSelectTab }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const mainAreaRef = useRef(null);

  // GSAP entrance animation for dashboard page content
  useEffect(() => {
    if (mainAreaRef.current) {
      gsap.fromTo(
        mainAreaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
      );
    }
  }, [activeTab]);

  return (
    <div className="dash-layout-root">
      <style>{`
        .dash-layout-root {
          width: 100%;
          min-height: 100vh;
          background: #FAF4EE;
          color: #0B2545;
          display: flex;
          position: relative;
          overflow-x: hidden;
        }

        .dash-main-area {
          flex: 1;
          display: flex;
          flex-direction: column;
          min-width: 0;
          position: relative;
        }
        @media (min-width: 1025px) {
          .dash-main-area {
            margin-left: 260px;
          }
        }

        .dash-content-container {
          flex: 1;
          max-width: 1380px;
          width: 100%;
          margin: 0 auto;
          padding: 28px 28px 60px;
          box-sizing: border-box;
        }
        @media (max-width: 768px) {
          .dash-content-container { padding: 16px 16px 40px; }
        }
      `}</style>

      {/* LEFT SIDEBAR */}
      <DashboardSidebar
        activeTab={activeTab}
        onSelectTab={onSelectTab}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* MAIN BODY */}
      <div className="dash-main-area">
        {/* TOP NAVBAR */}
        <DashboardNavbar
          activeTab={activeTab}
          onSelectTab={onSelectTab}
          onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
          onToggleNotifications={() => setNotificationsOpen(!notificationsOpen)}
        />

        {/* PAGE CONTENT */}
        <main ref={mainAreaRef} className="dash-content-container">
          {children}
        </main>

        {/* FOOTER */}
        <FooterBottom />
      </div>

      {/* NOTIFICATIONS DRAWER */}
      <NotificationPanel
        isOpen={notificationsOpen}
        onClose={() => setNotificationsOpen(false)}
      />
    </div>
  );
}
