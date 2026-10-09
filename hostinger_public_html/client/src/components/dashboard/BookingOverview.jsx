// src/components/dashboard/BookingOverview.jsx
// ─────────────────────────────────────────────────────────────────────────────
// My Bookings Section with Filter Tabs & Download / Details Actions

import React, { useState, useEffect } from 'react';
import { CreditCard, Calendar, Download, Eye, ShieldCheck, Tag } from 'lucide-react';
import { bookingService } from '../../api/bookingService';

const TABS = ['ALL', 'UPCOMING', 'COMPLETED', 'CANCELLED'];

export default function BookingOverview({ onViewBookingDetails }) {
  const [activeTab, setActiveTab] = useState('ALL');
  const [liveBookings, setLiveBookings] = useState([]);

  useEffect(() => {
    bookingService.getMyBookings()
      .then(res => {
        if (res.data && Array.isArray(res.data) && res.data.length > 0) {
          const mapped = res.data.map(b => {
            const isConfirmed = b.bookingStatus === 'CONFIRMED' || b.paymentStatus === 'PAID';
            const isPending = b.bookingStatus === 'PENDING' && b.paymentStatus !== 'PAID';
            
            let statusLabel = b.bookingStatus || 'CONFIRMED';
            if (isConfirmed) statusLabel = 'UPCOMING';
            if (isPending) statusLabel = 'PENDING PAYMENT';

            let statusBg = 'rgba(255, 171, 0, 0.15)';
            let statusColor = '#ffab00';

            if (isConfirmed) {
              statusBg = '#FFF0EB';
              statusColor = '#F06543';
            } else if (isPending) {
              statusBg = 'rgba(239, 68, 68, 0.15)';
              statusColor = '#ef4444';
            }

            const title = b.activity?.name 
              || b.package?.name 
              || b.ferry?.name 
              || b.cruise?.name 
              || b.stay?.name 
              || (b.bookingType ? `${b.bookingType} Reserve Pass` : 'Andaman Experience');

            const guestCount = b.totalGuests || ((b.adultCount || 1) + (b.childCount || 0));
            const image = b.activity?.heroImage || b.stay?.heroImage || b.cruise?.heroImage || b.heroImage || 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=400&q=80';
            const location = b.activityLocation?.locationName || b.activity?.location || b.location || 'Andaman & Nicobar';

            return {
              id: b.bookingNumber,
              bookingType: b.bookingType || 'ACTIVITY',
              packageName: title,
              location,
              image,
              details: `Date: ${b.activityDate || b.bookingDate} ${b.slotStartTime ? `• ⏰ ${b.slotStartTime}` : ''} • ${guestCount} Guest(s)`,
              price: `₹${parseFloat(b.totalAmount || 0).toLocaleString('en-IN')}`,
              date: b.activityDate || b.bookingDate,
              status: statusLabel,
              statusBg,
              statusColor,
              rawBooking: b,
            };
          });
          setLiveBookings(mapped);
        }
      })
      .catch(() => {});
  }, []);

  const bookingList = liveBookings;

  const filtered = activeTab === 'ALL'
    ? bookingList
    : bookingList.filter(b => b.status === activeTab);

  const displayedBookings = filtered.slice(0, 5);

  return (
    <div className="dash-bookings-card">
      <style>{`
        .dash-bookings-card {
          background: #ffffff;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1.5px solid #ebded2;
          border-radius: 24px;
          padding: 28px 32px;
          margin-bottom: 28px;
          box-shadow: 0 16px 40px rgba(11, 37, 69, 0.08);
        }
        @media (max-width: 640px) {
          .dash-bookings-card { padding: 20px; }
        }

        .dash-bk-hdr {
          display: flex; align-items: flex-end;
          justify-content: space-between; flex-wrap: wrap;
          gap: 16px; margin-bottom: 24px;
        }
        .dash-bk-sub {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 800; letter-spacing: 0.2em;
          color: #F06543; text-transform: uppercase; margin-bottom: 4px;
        }
        .dash-bk-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(24px, 3vw, 32px); font-weight: 600;
          color: #0B2545; margin: 0;
        }

        /* Filter Tabs */
        .dash-bk-tabs {
          display: flex; gap: 8px; flex-wrap: wrap;
        }
        .dash-bk-tab-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 800;
          padding: 7px 16px; border-radius: 20px; cursor: pointer;
          border: 1px solid #ebded2;
          background: #FAF4EE;
          color: #64748b; transition: all 0.25s ease;
        }
        .dash-bk-tab-btn:hover {
          color: #F06543; border-color: #FFD3C4;
        }
        .dash-bk-tab-btn.active {
          background: #FFF0EB;
          border-color: #F06543; color: #F06543;
          box-shadow: 0 4px 16px rgba(240, 101, 67, 0.2);
        }

        /* Grid */
        .dash-bk-grid {
          display: flex; flex-direction: column; gap: 14px;
        }

        .dash-bk-item {
          background: #ffffff;
          border: 1px solid #ebded2;
          border-radius: 18px; padding: 20px;
          display: flex; align-items: center;
          justify-content: space-between; flex-wrap: wrap; gap: 16px;
          transition: all 0.3s ease;
        }
        .dash-bk-item:hover {
          border-color: #FFD3C4;
          background: #FAF4EE;
          transform: translateY(-2px);
        }

        .dash-bk-badge {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 9.5px; font-weight: 900; letter-spacing: 0.06em;
          padding: 4px 10px; border-radius: 12px;
          display: inline-flex; align-items: center; gap: 4px;
        }

        .dash-bk-btn-sm {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 800;
          padding: 8px 14px; border-radius: 12px; cursor: pointer;
          display: inline-flex; align-items: center; gap: 5px;
          transition: all 0.25s ease;
        }
        .dash-bk-btn-primary {
          background: #FFF0EB;
          border: 1px solid #FFD3C4;
          color: #F06543;
        }
        .dash-bk-btn-primary:hover {
          background: linear-gradient(135deg, #FF6B4A, #F06543); color: #ffffff;
        }
        .dash-bk-btn-sec {
          background: #FAF4EE;
          border: 1px solid #ebded2;
          color: #64748b;
        }
        .dash-bk-btn-sec:hover {
          color: #0B2545; border-color: #F06543;
        }
      `}</style>

      {/* HEADER */}
      <div className="dash-bk-hdr">
        <div>
          <div className="dash-bk-sub">RESERVATIONS & CONFIRMATIONS</div>
          <h3 className="dash-bk-title">My Bookings</h3>
        </div>

        {/* TABS */}
        <div className="dash-bk-tabs">
          {TABS.map(tab => (
            <button
              key={tab}
              className={`dash-bk-tab-btn${activeTab === tab ? ' active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* LIST */}
      <div className="dash-bk-grid">
        {displayedBookings.length === 0 ? (
          <div style={{
            background: '#ffffff',
            border: '1px dashed #ebded2',
            borderRadius: 18,
            padding: '36px 24px',
            textAlign: 'center',
          }}>
            <CreditCard size={32} color="#F06543" style={{ margin: '0 auto 12px', opacity: 0.8 }} />
            <h4 style={{ color: '#0B2545', fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, margin: '0 0 6px', fontWeight: 800 }}>No Active Bookings Found in Database</h4>
            <p style={{ color: '#64748b', fontFamily: "'Inter', sans-serif", fontSize: 12, margin: '0 0 18px' }}>
              You haven't reserved any catamaran ferries, ocean cruises, or beach resorts yet.
            </p>
            <a
              href="/ferries"
              onClick={(e) => {
                e.preventDefault();
                window.history.pushState({}, '', '/ferries');
                window.dispatchEvent(new PopStateEvent('popstate'));
              }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                background: 'linear-gradient(135deg, #FF6B4A, #F06543)',
                color: '#ffffff',
                padding: '9px 20px',
                borderRadius: 20,
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 11,
                fontWeight: 900,
                textDecoration: 'none',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              BOOK HIGH-SPEED FERRY →
            </a>
          </div>
        ) : (
          displayedBookings.map(bk => (
            <div key={bk.id} className="dash-bk-item" style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              {/* Thumbnail */}
              <img
                src={bk.image}
                alt={bk.packageName}
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: 14,
                  objectFit: 'cover',
                  border: '1px solid #EBDED2',
                  flexShrink: 0,
                }}
              />

              {/* Info */}
              <div style={{ flex: 1, minWidth: 220 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4, flexWrap: 'wrap' }}>
                  <span
                    className="dash-bk-badge"
                    style={{ background: bk.statusBg, color: bk.statusColor, border: `1px solid ${bk.statusColor}44` }}
                  >
                    <ShieldCheck size={11} />
                    {bk.status}
                  </span>

                  <span style={{
                    background: '#FAF4EE',
                    color: '#0B2545',
                    fontSize: 10,
                    fontWeight: 800,
                    padding: '2px 8px',
                    borderRadius: 6,
                    border: '1px solid #EBDED2',
                    textTransform: 'uppercase',
                  }}>
                    {bk.bookingType === 'ACTIVITY' ? '🌊 OCEAN ACTIVITY' : (bk.bookingType === 'STAY' ? '🏨 STAY' : (bk.bookingType === 'FERRY' ? '🚢 FERRY' : bk.bookingType))}
                  </span>

                  <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 700, color: '#627d8a' }}>
                    ID: {bk.id}
                  </span>
                </div>

                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 15.5, fontWeight: 800, color: '#0B2545', marginBottom: 2 }}>
                  {bk.packageName}
                </div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: '#64748b' }}>
                  {bk.details}
                </div>
              </div>

              {/* Price & Date */}
              <div style={{ textAlign: 'right', minWidth: 110 }}>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 17, fontWeight: 900, color: '#F06543' }}>
                  {bk.price}
                </div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: '#64748b', marginTop: 2 }}>
                  {bk.date}
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <button
                  className="dash-bk-btn-sm dash-bk-btn-primary"
                  onClick={() => {
                    if (onViewBookingDetails) {
                      onViewBookingDetails(bk);
                    } else {
                      window.history.pushState({}, '', `/booking-confirmation/${bk.id}`);
                      window.dispatchEvent(new Event('popstate'));
                    }
                  }}
                >
                  <Eye size={12} />
                  <span>DETAILS</span>
                </button>
                
                {/* Show PASS / VOUCHER ONLY if Confirmed & Paid */}
                {(bk.status === 'UPCOMING' || bk.status === 'CONFIRMED' || bk.rawBooking?.bookingStatus === 'CONFIRMED' || bk.rawBooking?.paymentStatus === 'PAID') && bk.status !== 'PENDING PAYMENT' && bk.rawBooking?.paymentStatus !== 'PENDING' && (
                  <button
                    className="dash-bk-btn-sm dash-bk-btn-sec"
                    onClick={() => {
                      window.history.pushState({}, '', `/booking-confirmation/${bk.id}`);
                      window.dispatchEvent(new Event('popstate'));
                    }}
                  >
                    <Download size={12} />
                    <span>PASS / VOUCHER</span>
                  </button>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
