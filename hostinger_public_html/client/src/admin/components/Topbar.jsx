import React, { useState, useEffect } from 'react';
import { Menu, Sun, Moon } from 'lucide-react';
import AdminSearch from './AdminSearch';
import AdminProfileMenu from './AdminProfileMenu';

export default function Topbar({ onToggleSidebar }) {
  const [theme, setTheme] = useState(() => localStorage.getItem('andaman_admin_theme') || 'dark');

  useEffect(() => {
    localStorage.setItem('andaman_admin_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <header className="admin-topbar">
      <style>{`
        .admin-topbar {
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
          gap: 16px;
        }
        @media (max-width: 768px) {
          .admin-topbar { padding: 0 16px; height: 64px; }
        }

        .adm-menu-toggle {
          display: none;
          background: #ffffff;
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
          .adm-menu-toggle { display: flex; }
        }
      `}</style>

      {/* LEFT: MOBILE TOGGLE & GLOBAL SEARCH */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, flex: 1 }}>
        <button className="adm-menu-toggle" onClick={onToggleSidebar} aria-label="Toggle Navigation Drawer">
          <Menu size={20} />
        </button>

        <AdminSearch />
      </div>

      {/* RIGHT: THEME TOGGLE, NOTIFICATIONS, PROFILE MENU */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        {/* Dark/Light Mode Theme Toggle */}
        <button
          onClick={toggleTheme}
          style={{
            width: 38,
            height: 38,
            borderRadius: '50%',
            background: '#ffffff',
            border: '1px solid #e2e8f0',
            color: theme === 'dark' ? '#ffab00' : '#F06543',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
          title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
        >
          {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
        </button>

        {/* Admin Profile Dropdown */}
        <AdminProfileMenu />
      </div>
    </header>
  );
}
