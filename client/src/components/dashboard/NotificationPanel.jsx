// src/components/dashboard/NotificationPanel.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Travel Notification Panel Drawer / Modal

import React, { useState, useEffect } from 'react';
import { Bell, X, Check, Ship, FileText, Calendar, Sparkles, CheckCircle2 } from 'lucide-react';
import { bookingService } from '../../api/bookingService';

const ICON_MAP = {
  Ship, FileText, Calendar, Sparkles, CheckCircle2
};

export default function NotificationPanel({ isOpen, onClose }) {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isOpen) return;

    setLoading(true);
    bookingService.getMyBookings()
      .then(res => {
        const dbBookings = (res && res.data && Array.isArray(res.data)) ? res.data : [];
        
        // Generate notifications from bookings
        const dynamicNotifs = dbBookings.map((b, idx) => {
          const isConfirmed = b.bookingStatus === 'CONFIRMED' || b.paymentStatus === 'PAID';
          const name = b.activity?.name || b.package?.name || b.ferry?.name || b.cruise?.name || b.stay?.name || `${b.bookingType || 'Adventure'} Experience`;
          return {
            id: `notif-bk-${b.id || b.bookingNumber}`,
            title: isConfirmed ? 'Booking Confirmed ✓' : 'Payment Pending ⚠',
            message: isConfirmed 
              ? `Your reservation for "${name}" (Ref: ${b.bookingNumber}) is confirmed for ${b.activityDate || b.bookingDate}.`
              : `Order placed for "${name}" (${b.bookingNumber}). Total: ₹${Number(b.totalAmount || 0).toLocaleString('en-IN')}.`,
            icon: isConfirmed ? 'CheckCircle2' : 'Calendar',
            time: idx === 0 ? 'Just Now' : 'Recent',
            read: false,
          };
        });

        // Add welcome notification
        dynamicNotifs.push({
          id: 'notif-welcome',
          title: 'Welcome to Andaman Trails!',
          message: 'Explore and book premium ferries, luxury cruises, scuba diving and beach stay getaways.',
          icon: 'Sparkles',
          time: 'System',
          read: true,
        });

        setList(dynamicNotifs);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching dynamic notifications:', err);
        setList([
          {
            id: 'notif-welcome',
            title: 'Welcome to Andaman Trails!',
            message: 'Explore and book premium ferries, luxury cruises, scuba diving and beach stay getaways.',
            icon: 'Sparkles',
            time: 'System',
            read: false,
          }
        ]);
        setLoading(false);
      });
  }, [isOpen]);

  if (!isOpen) return null;

  const markAllRead = () => {
    setList(prev => prev.map(n => ({ ...n, read: true })));
  };

  return (
    <div className="dash-notif-backdrop" onClick={onClose}>
      <style>{`
        .dash-notif-backdrop {
          position: fixed; inset: 0; z-index: 99999;
          background: #ffffff;
          backdrop-filter: blur(8px);
          display: flex; justify-content: flex-end;
          animation: notifFadeIn 0.25s ease;
        }
        @keyframes notifFadeIn { from { opacity: 0; } to { opacity: 1; } }

        .dash-notif-drawer {
          width: 380px; max-width: 90vw; height: 100vh;
          background: #ffffff;
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border-left: 1.5px solid #e2e8f0;
          box-shadow: -16px 0 50px rgba(0,0,0,0.7);
          padding: 24px;
          display: flex; flex-direction: column;
          animation: slideInRight 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }

        .dash-notif-hdr {
          display: flex; align-items: center; justify-content: space-between;
          padding-bottom: 16px; border-bottom: 1px solid #e2e8f0;
          margin-bottom: 16px;
        }

        .dash-notif-list {
          flex: 1; overflow-y: auto; scrollbar-width: none;
          display: flex; flex-direction: column; gap: 10px;
        }
        .dash-notif-list::-webkit-scrollbar { display: none; }

        .dash-notif-item {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px; padding: 14px 16px;
          transition: all 0.25s ease;
        }
        .dash-notif-item.unread {
          border-color: rgba(22, 217, 255, 0.4);
          background: rgba(22, 217, 255, 0.06);
        }

        .dash-notif-icon-box {
          width: 34px; height: 34px; border-radius: 10px;
          background: rgba(22, 217, 255, 0.12); color: #F06543;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
      `}</style>

      <div className="dash-notif-drawer" onClick={e => e.stopPropagation()}>
        <div className="dash-notif-hdr">
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Bell size={20} color="#F06543" />
            <div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 800, color: '#334155' }}>
                Notifications
              </div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: '#64748b' }}>
                {list.filter(n => !n.read).length} unread alerts
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <button
              onClick={markAllRead}
              style={{
                fontFamily: "'Space Grotesk', sans-serif", fontSize: 12.5, fontWeight: 800,
                color: '#F06543', background: 'none', border: 'none', cursor: 'pointer',
              }}
            >
              Mark all read
            </button>
            <button
              onClick={onClose}
              style={{
                width: 32, height: 32, borderRadius: '50%', background: '#e2e8f0',
                border: '1px solid #e2e8f0', color: '#64748b', display: 'flex',
                alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
              }}
            >
              <X size={16} />
            </button>
          </div>
        </div>

        <div className="dash-notif-list">
          {loading ? (
            <div style={{ color: '#627d8a', fontSize: 12, textAlign: 'center', padding: '40px 20px', fontFamily: "'Space Grotesk', sans-serif" }}>
              LOADING NOTIFICATIONS...
            </div>
          ) : list.length === 0 ? (
            <div style={{ color: '#627d8a', fontSize: 12, textAlign: 'center', padding: '40px 20px', fontFamily: "'Space Grotesk', sans-serif" }}>
              No notifications yet.
            </div>
          ) : (
            list.map(n => {
              const Icon = ICON_MAP[n.icon] || Bell;
              return (
                <div key={n.id} className={`dash-notif-item${n.read ? '' : ' unread'}`}>
                  <div style={{ display: 'flex', gap: 12 }}>
                    <div className="dash-notif-icon-box">
                      <Icon size={16} />
                    </div>
                    <div>
                      <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 800, color: '#334155', marginBottom: 2 }}>
                        {n.title}
                      </div>
                      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11.5, color: '#64748b', lineHeight: 1.4, marginBottom: 6 }}>
                        {n.message}
                      </div>
                      <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12.5, color: '#627d8a', fontWeight: 700 }}>
                        {n.time}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
