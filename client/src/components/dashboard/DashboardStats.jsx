// src/components/dashboard/DashboardStats.jsx
import React, { useState, useEffect } from 'react';
import { Compass, Calendar, Heart, Award, TrendingUp } from 'lucide-react';
// ─────────────────────────────────────────────────────────────────────────────
// 4 Compact Glass Cards — My Trips, Upcoming, Wishlist, Rewards

import { bookingService } from '../../api/bookingService';

const ICON_MAP = {
  Compass,
  Calendar,
  Heart,
  Award,
};

export default function DashboardStats({ onStatClick }) {
  const [stats, setStats] = useState([
    { id: 'trips', label: 'Total Bookings', value: '0 Bookings', trend: 'Live Bookings', icon: 'Compass', color: '#F06543' },
    { id: 'upcoming', label: 'Active Trips', value: '0 Upcoming', trend: 'Verified Itinerary', icon: 'Calendar', color: '#20b490' },
    { id: 'wishlist', label: 'Saved Wishlist', value: '3 Experiences', trend: 'Custom Trails', icon: 'Heart', color: '#f06080' },
  ]);

  useEffect(() => {
    bookingService.getMyBookings()
      .then(res => {
        const bookings = res.data || [];
        if (Array.isArray(bookings)) {
          const total = bookings.length;
          const active = bookings.filter(b => b.status === 'CONFIRMED' || b.status === 'PAID' || b.status === 'PENDING').length;
          setStats([
            { id: 'trips', label: 'Total Bookings', value: `${total} ${total === 1 ? 'Booking' : 'Bookings'}`, trend: 'Confirmed on DB', icon: 'Compass', color: '#F06543' },
            { id: 'upcoming', label: 'Active Trips', value: `${active} Active`, trend: 'Verified Itinerary', icon: 'Calendar', color: '#20b490' },
            { id: 'wishlist', label: 'Saved Wishlist', value: 'Ready to Book', trend: 'Custom Trails', icon: 'Heart', color: '#f06080' },
          ]);
        }
      })
      .catch(() => {});
  }, []);

  const statsData = stats;
  return (
    <div className="dash-stats-grid">
      <style>{`
        .dash-stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-bottom: 28px;
        }
        @media (max-width: 1024px) {
          .dash-stats-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 480px) {
          .dash-stats-grid { grid-template-columns: 1fr; }
        }

        .dash-stat-card {
          background: #ffffff;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid #ebded2;
          border-radius: 20px;
          padding: 20px;
          display: flex;
          align-items: center;
          gap: 16px;
          cursor: pointer;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .dash-stat-card:hover {
          transform: translateY(-4px);
          border-color: #F06543;
          box-shadow: 0 16px 36px rgba(11, 37, 69, 0.08), 0 0 20px rgba(240, 101, 67, 0.1);
          background: #FAF4EE;
        }

        .dash-stat-icon-box {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .dash-stat-label {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px;
          font-weight: 800;
          letter-spacing: 0.12em;
          color: #627d8a;
          text-transform: uppercase;
          margin-bottom: 2px;
        }
        .dash-stat-val {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 22px;
          font-weight: 900;
          color: #0B2545;
          line-height: 1;
          margin-bottom: 4px;
        }
        .dash-stat-trend {
          font-family: 'Inter', sans-serif;
          font-size: 12.5px;
          color: #64748b;
          display: flex;
          align-items: center;
          gap: 4px;
        }
      `}</style>

      {statsData.map((stat) => {
        const Icon = ICON_MAP[stat.icon] || Compass;
        return (
          <div
            key={stat.id}
            className="dash-stat-card"
            onClick={() => onStatClick && onStatClick(stat.id)}
          >
            <div
              className="dash-stat-icon-box"
              style={{
                background: `${stat.color}15`,
                border: `1px solid ${stat.color}35`,
              }}
            >
              <Icon size={22} color={stat.color} />
            </div>

            <div>
              <div className="dash-stat-label">{stat.label}</div>
              <div className="dash-stat-val">{stat.value}</div>
              <div className="dash-stat-trend">
                <TrendingUp size={11} color={stat.color} />
                <span>{stat.trend}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
