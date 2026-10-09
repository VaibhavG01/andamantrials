import React, { useState, useRef, useEffect } from 'react';
import { Bell, CreditCard, MessageSquare, User, AlertTriangle, CheckCircle2 } from 'lucide-react';

const INITIAL_NOTIFICATIONS = [
  { id: '1', title: 'New Ferry Booking', desc: 'AT-FRY-2026-000123 confirmed for Port Blair → Havelock.', time: '2 mins ago', icon: CreditCard, unread: true },
  { id: '2', title: 'Pending Honeymoon Inquiry', desc: 'Custom trip inquiry received from Vikram Malhotra.', time: '15 mins ago', icon: MessageSquare, unread: true },
  { id: '3', title: 'New User Registered', desc: 'neha.singh@gmail.com created a traveler account.', time: '1 hour ago', icon: User, unread: true },
  { id: '4', title: 'Low Seat Availability Warning', desc: 'Makruzz Gold 09:00 AM Havelock route has only 4 seats left.', time: '3 hours ago', icon: AlertTriangle, unread: false },
];

export default function NotificationDropdown() {
  const [notifications, setNotifications] = useState(INITIAL_NOTIFICATIONS);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const unreadCount = notifications.filter((n) => n.unread).length;

  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, unread: false })));
  };

  return (
    <div style={{ position: 'relative' }} ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: 40,
          height: 40,
          borderRadius: '50%',
          background: '#ffffff',
          border: '1px solid #e2e8f0',
          color: '#64748b',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          position: 'relative',
        }}
        title="Admin Notifications"
      >
        <Bell size={18} />
        {unreadCount > 0 && (
          <span style={{
            position: 'absolute',
            top: 7,
            right: 7,
            width: 9,
            height: 9,
            borderRadius: '50%',
            background: '#ff4f7b',
            boxShadow: '0 0 8px #ff4f7b',
          }} />
        )}
      </button>

      {open && (
        <div style={{
          position: 'absolute',
          top: 'calc(100% + 10px)',
          right: 0,
          width: 320,
          background: '#ffffff',
          border: '1px solid #e2e8f0',
          borderRadius: 18,
          boxShadow: '0 20px 50px rgba(0,0,0,0.8)',
          zIndex: 1100,
          padding: 12,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: 10, borderBottom: '1px solid #e2e8f0', marginBottom: 8 }}>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 800, color: '#334155' }}>
              Notifications ({unreadCount} unread)
            </div>
            {unreadCount > 0 && (
              <button
                onClick={markAllRead}
                style={{ background: 'none', border: 'none', color: '#F06543', fontSize: 11, fontWeight: 700, cursor: 'pointer' }}
              >
                Mark all read
              </button>
            )}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, maxHeight: 280, overflowY: 'auto' }}>
            {notifications.map((n) => {
              const Icon = n.icon;
              return (
                <div
                  key={n.id}
                  style={{
                    display: 'flex',
                    gap: 10,
                    padding: 10,
                    borderRadius: 12,
                    background: n.unread ? 'rgba(22, 217, 255, 0.08)' : 'transparent',
                    border: n.unread ? '1px solid rgba(22, 217, 255, 0.2)' : '1px solid transparent',
                  }}
                >
                  <div style={{
                    width: 32, height: 32, borderRadius: 10, background: 'rgba(22, 217, 255, 0.15)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#F06543', flexShrink: 0,
                  }}>
                    <Icon size={16} />
                  </div>
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 700, color: '#334155' }}>{n.title}</div>
                    <div style={{ fontSize: 11, color: '#64748b', marginTop: 2 }}>{n.desc}</div>
                    <div style={{ fontSize: 12.5, color: '#527588', marginTop: 4 }}>{n.time}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
