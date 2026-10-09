// src/components/dashboard/DashboardWelcome.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Dashboard Welcome Hero Header with Glass Card & Next Adventure Status

import React, { useState, useEffect } from 'react';
import { Sparkles, Calendar, Compass, ShieldCheck } from 'lucide-react';
import { bookingService } from '../../api/bookingService';

export default function DashboardWelcome() {
  const [latestBooking, setLatestBooking] = useState(null);
  const [bookingCount, setBookingCount] = useState(0);

  useEffect(() => {
    bookingService.getMyBookings()
      .then(res => {
        if (res.data && Array.isArray(res.data)) {
          setBookingCount(res.data.length);
          if (res.data.length > 0) {
            setLatestBooking(res.data[0]);
          }
        }
      })
      .catch(() => {});
  }, []);

  const currentUser = (() => {
    try {
      const saved = localStorage.getItem('andaman_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  })();

  const rawName = typeof currentUser?.name === 'string'
    ? currentUser.name
    : (typeof currentUser?.user?.name === 'string' ? currentUser.user.name : USER_PROFILE.name || 'VALUED TRAVELER');

  const userName = String(rawName).toUpperCase();

  const nextDestination = latestBooking 
    ? `${latestBooking.bookingType} Reserve`
    : 'No Active Bookings';

  const nextDates = latestBooking
    ? latestBooking.bookingDate
    : 'Ready to book a new trip';

  return (
    <div className="dash-welcome-card">
      <style>{`
        .dash-welcome-card {
          position: relative;
          width: 100%;
          background: #ffffff;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1.5px solid #e2e8f0;
          border-radius: 24px;
          padding: 28px 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4);
          overflow: hidden;
          margin-bottom: 24px;
        }

        .dash-welcome-glow {
          position: absolute;
          top: -30%;
          left: -10%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(22, 217, 255, 0.08) 0%, transparent 70%);
          pointer-events: none;
        }

        .dash-welcome-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(22px, 3vw, 32px);
          font-weight: 800;
          color: #0B2545;
          margin-bottom: 4px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .dash-welcome-sub {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: #64748b;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .dash-next-adventure-pill {
          background: #ffffff;
          border: 1px solid rgba(33, 230, 193, 0.35);
          border-radius: 18px;
          padding: 12px 20px;
          display: flex;
          align-items: center;
          gap: 14px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
        }
        .dash-adv-icon-box {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background: rgba(33, 230, 193, 0.15);
          color: #F06543;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .dash-adv-label {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 9.5px;
          font-weight: 800;
          letter-spacing: 0.1em;
          color: #F06543;
          margin-bottom: 2px;
        }
        .dash-adv-main {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 14px;
          font-weight: 800;
          color: #ffffff;
        }
        .dash-adv-dates {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: #64748b;
        }
      `}</style>

      <div className="dash-welcome-glow" />

      {/* Left Text */}
      <div>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          fontFamily: "'Space Grotesk', sans-serif", fontSize: 12.5, fontWeight: 800,
          color: '#F06543', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 6,
        }}>
          <Sparkles size={12} color="#F06543" />
          <span>TRAVELER COMMAND CENTER</span>
        </div>
        <h1 className="dash-welcome-title">
          WELCOME BACK, {userName} 👋
        </h1>
        <p className="dash-welcome-sub">
          <span>Ready for your next Andaman adventure?</span>
          <span style={{ color: '#F06543', fontWeight: 600 }}>• {bookingCount} {bookingCount === 1 ? 'Trip' : 'Trips'} Active</span>
        </p>
      </div>

      {/* Right Next Adventure Badge */}
      <div className="dash-next-adventure-pill">
        <div className="dash-adv-icon-box">
          <Compass size={22} color="#F06543" />
        </div>
        <div>
          <div className="dash-adv-label">YOUR NEXT ADVENTURE</div>
          <div className="dash-adv-main">{nextDestination}</div>
          <div className="dash-adv-dates">
            <Calendar size={11} color="#F06543" style={{ display: 'inline', marginRight: 4, verticalAlign: 'middle' }} />
            {nextDates}
          </div>
        </div>
      </div>
    </div>
  );
}
