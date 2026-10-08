import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, User, Settings, LogOut, ShieldCheck } from 'lucide-react';

export default function AdminProfileMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const currentUser = (() => {
    try {
      const u = localStorage.getItem('andaman_user');
      return u ? JSON.parse(u) : null;
    } catch {
      return null;
    }
  })();

  const adminName = typeof currentUser?.name === 'string'
    ? currentUser.name
    : (typeof currentUser?.user?.name === 'string' ? currentUser.user.name : 'Platform Administrator');

  const adminEmail = typeof currentUser?.email === 'string'
    ? currentUser.email
    : (typeof currentUser?.user?.email === 'string' ? currentUser.user.email : 'admin@andaman-trails.com');

  const adminRole = typeof currentUser?.role === 'string'
    ? currentUser.role
    : (typeof currentUser?.user?.role === 'string' ? currentUser.user.role : 'ADMIN');

  const handleLogout = () => {
    localStorage.removeItem('andaman_token');
    localStorage.removeItem('andaman_user');
    window.dispatchEvent(new CustomEvent('auth-change'));
    window.location.href = '/admin/login';
  };

  const handleNavigate = (path) => {
    setOpen(false);
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <div style={{ position: 'relative' }} ref={menuRef}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          background: '#ffffff',
          border: '1px solid #e2e8f0',
          padding: '4px 12px 4px 6px',
          borderRadius: 24,
          cursor: 'pointer',
          outline: 'none',
        }}
      >
        <div style={{
          width: 32,
          height: 32,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #FF6B4A, #F06543)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 900,
          color: '#ffffff',
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 13,
        }}>
          {adminName.charAt(0)}
        </div>

        <div style={{ textAlign: 'left' }}>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12.5, fontWeight: 800, color: '#334155', lineHeight: 1 }}>
            {adminName}
          </div>
          <div style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 11,
            marginTop: 2,
            fontWeight: 800,
            color: adminRole === 'SUPER_ADMIN' ? '#7C3AED' : adminRole === 'EDITOR' ? '#D97706' : '#2563EB'
          }}>
            {adminRole === 'SUPER_ADMIN' ? '👑 Super Admin' : adminRole === 'EDITOR' ? '✍️ Content Editor' : '🛡️ Administrator'}
          </div>
        </div>

        <ChevronDown size={14} color="#9cb3bd" />
      </button>

      {open && (
        <div style={{
          position: 'absolute',
          top: 'calc(100% + 10px)',
          right: 0,
          width: 220,
          background: '#ffffff',
          border: '1px solid #e2e8f0',
          borderRadius: 16,
          boxShadow: '0 20px 50px rgba(0,0,0,0.8)',
          zIndex: 1100,
          padding: 8,
        }}>
          <div style={{ padding: '10px 12px', borderBottom: '1px solid #e2e8f0', marginBottom: 6 }}>
            <div style={{ fontSize: 13, fontWeight: 800, color: '#334155', fontFamily: "'Space Grotesk', sans-serif" }}>
              {adminName}
            </div>
            <div style={{ fontSize: 11, color: '#64748b', marginTop: 2 }}>
              {adminEmail}
            </div>
          </div>

          <button
            onClick={() => handleNavigate('/admin/profile')}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: '9px 12px',
              background: 'transparent',
              border: 'none',
              borderRadius: 10,
              color: '#64748b',
              fontSize: 12.5,
              fontWeight: 600,
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#9cb3bd'}
          >
            <User size={15} color="#F06543" />
            <span>Profile</span>
          </button>

          {adminRole === 'SUPER_ADMIN' && (
            <button
              onClick={() => handleNavigate('/admin/settings')}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '9px 12px',
                background: 'transparent',
                border: 'none',
                borderRadius: 10,
                color: '#64748b',
                fontSize: 12.5,
                fontWeight: 600,
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#9cb3bd'}
            >
              <Settings size={15} color="#F06543" />
              <span>Platform Settings</span>
            </button>
          )}

          <div style={{ height: 1, background: '#e2e8f0', margin: '6px 0' }} />

          <button
            onClick={handleLogout}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: '9px 12px',
              background: 'transparent',
              border: 'none',
              borderRadius: 10,
              color: '#ff4f7b',
              fontSize: 12.5,
              fontWeight: 700,
              cursor: 'pointer',
            }}
          >
            <LogOut size={15} color="#ff4f7b" />
            <span>Logout</span>
          </button>
        </div>
      )}
    </div>
  );
}
