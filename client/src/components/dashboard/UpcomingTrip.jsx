// src/components/dashboard/UpcomingTrip.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Master Upcoming Trip Featured Card with Progress Bar, Route & Actions

import React, { useState, useEffect } from 'react';
import {
  Calendar, MapPin, ArrowRight, ShieldCheck, Clock,
  FileText, CheckCircle2, Navigation, Compass, Sparkles
} from 'lucide-react';
import { bookingService } from '../../api/bookingService';

export default function UpcomingTrip({ onViewTrip, onViewItinerary }) {
  const [latestBooking, setLatestBooking] = useState(null);

  useEffect(() => {
    bookingService.getMyBookings()
      .then(res => {
        if (res.data && Array.isArray(res.data) && res.data.length > 0) {
          setLatestBooking(res.data[0]);
        }
      })
      .catch(() => {});
  }, []);

  const tripData = latestBooking ? {
    title: latestBooking.activity?.name 
      || latestBooking.package?.name 
      || latestBooking.ferry?.name 
      || latestBooking.cruise?.name 
      || latestBooking.stay?.name 
      || `${latestBooking.bookingType || 'Adventure'} Passage`,
    subtitle: `Confirmed Travel for ${latestBooking.totalGuests || ((latestBooking.adultCount || 1) + (latestBooking.childCount || 0))} Guest(s) • Andaman Trails`,
    dates: latestBooking.activityDate || latestBooking.bookingDate || '25 Sep 2026',
    timeSlot: latestBooking.slotStartTime || latestBooking.timeSlot || '09:00 AM',
    location: latestBooking.activityLocation?.locationName || latestBooking.activity?.location || latestBooking.location || "Corbyn's Cove Beach, Port Blair",
    bookingId: latestBooking.bookingNumber,
    status: latestBooking.bookingStatus || 'CONFIRMED',
    coverImage: latestBooking.activity?.heroImage || latestBooking.stay?.heroImage || latestBooking.cruise?.heroImage || latestBooking.heroImage || 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
    route: [
      latestBooking.activityLocation?.locationName || latestBooking.activity?.location || 'Port Blair',
      latestBooking.activityLocation?.meetingPoint || 'Marina Pier',
      'Ocean Coordinates'
    ],
    progress: 100,
  } : null;

  if (!tripData) {
    return (
      <div style={{
        background: '#ffffff',
        backdropFilter: 'blur(20px)',
        border: '1.5px solid #ebded2',
        borderRadius: 24,
        padding: '32px',
        marginBottom: 24,
        boxShadow: '0 16px 40px rgba(11, 37, 69, 0.08)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 20,
      }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: "'Space Grotesk', sans-serif", fontSize: 12.5, fontWeight: 800, color: '#F06543', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 6 }}>
            <Compass size={12} color="#F06543" />
            <span>ACTIVE TRIP STATUS</span>
          </div>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 22, fontWeight: 800, color: '#0B2545', margin: '0 0 6px' }}>
            No Active Bookings in Database
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#64748b', margin: 0 }}>
            You haven't reserved an Andaman trip yet. Explore luxury catamaran ferries, beachfront resorts, and scuba diving tours to begin!
          </p>
        </div>

        <a
          href="/plan-trip"
          onClick={(e) => {
            e.preventDefault();
            window.history.pushState({}, '', '/plan-trip');
            window.dispatchEvent(new PopStateEvent('popstate'));
          }}
          style={{
            background: 'linear-gradient(135deg, #FF6B4A, #F06543)',
            color: '#ffffff',
            padding: '12px 24px',
            borderRadius: 24,
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 11,
            fontWeight: 900,
            textDecoration: 'none',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            whiteSpace: 'nowrap',
            boxShadow: '0 6px 20px rgba(240, 101, 67, 0.3)',
          }}
        >
          PLAN MY TRIP NOW →
        </a>
      </div>
    );
  }
  return (
    <div className="upcoming-trip-card">
      <style>{`
        .upcoming-trip-card {
          position: relative;
          width: 100%;
          background: #ffffff;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1.5px solid #ebded2;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(11, 37, 69, 0.08);
          margin-bottom: 24px;
          display: grid;
          grid-template-columns: 1.1fr 1fr;
        }
        @media (max-width: 900px) {
          .upcoming-trip-card { grid-template-columns: 1fr; }
        }

        /* Image Box */
        .upcoming-img-box {
          position: relative;
          min-height: 280px;
          overflow: hidden;
        }
        .upcoming-img-box img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 0.6s ease;
        }
        .upcoming-trip-card:hover .upcoming-img-box img {
          transform: scale(1.05);
        }
        .upcoming-img-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to right, #ffffff 0%, #ffffff 60%, transparent 100%);
        }
        @media (max-width: 900px) {
          .upcoming-img-overlay {
            background: linear-gradient(to top, #ffffff 0%, transparent 60%);
          }
        }

        .upcoming-badge-top {
          position: absolute; top: 18px; left: 18px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 900; letter-spacing: 0.1em;
          color: #ffffff; background: linear-gradient(135deg, #0B2545, #F06543);
          padding: 6px 14px; border-radius: 20px;
          box-shadow: 0 4px 16px rgba(240, 101, 67, 0.3);
        }
        .upcoming-status-top {
          position: absolute; top: 18px; right: 18px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 800; color: #F06543;
          background: #FFF0EB; backdrop-filter: blur(8px);
          padding: 5px 12px; border-radius: 14px;
          border: 1px solid #FFD3C4;
          display: flex; align-items: center; gap: 5px;
        }

        /* Body Box */
        .upcoming-body {
          padding: 32px 32px 28px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        @media (max-width: 640px) {
          .upcoming-body { padding: 24px; }
        }

        .upcoming-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(26px, 3.5vw, 38px);
          font-weight: 600; color: #0B2545;
          line-height: 1.1; margin-bottom: 4px;
        }
        .upcoming-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: 13px; color: #F06543;
          margin-bottom: 18px;
        }

        /* Route Strip */
        .upcoming-route-box {
          background: #FAF4EE;
          border: 1px solid #ebded2;
          border-radius: 16px;
          padding: 14px 16px;
          margin-bottom: 20px;
        }
        .upcoming-route-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 800; color: #627d8a;
          letter-spacing: 0.1em; text-transform: uppercase;
          margin-bottom: 8px;
          display: flex; align-items: center; gap: 5px;
        }
        .upcoming-route-cities {
          display: flex; align-items: center; gap: 8px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; color: #0B2545;
          flex-wrap: wrap;
        }

        /* Preparation Progress Bar */
        .upcoming-prep-box {
          margin-bottom: 24px;
        }
        .upcoming-prep-header {
          display: flex; align-items: center; justify-content: space-between;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; color: #64748b;
          margin-bottom: 6px;
        }
        .upcoming-progress-track {
          width: 100%; height: 6px;
          background: #ebded2;
          border-radius: 6px; overflow: hidden;
        }
        .upcoming-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #FF6B4A, #F06543);
          border-radius: 6px;
          box-shadow: 0 0 12px rgba(240, 101, 67, 0.4);
          transition: width 0.6s ease;
        }

        /* Actions */
        .upcoming-actions {
          display: flex; align-items: center; gap: 12px; flex-wrap: wrap;
        }
        .upcoming-btn-primary {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; letter-spacing: 0.06em;
          color: #ffffff; background: linear-gradient(135deg, #FF6B4A, #F06543);
          border: none; padding: 11px 22px; border-radius: 14px;
          cursor: pointer; display: inline-flex; align-items: center; gap: 7px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 18px rgba(240, 101, 67, 0.35);
        }
        .upcoming-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 26px rgba(240, 101, 67, 0.5);
        }
        .upcoming-btn-secondary {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; letter-spacing: 0.04em;
          color: #F06543; background: #FFF0EB;
          border: 1px solid #FFD3C4;
          padding: 11px 20px; border-radius: 14px;
          cursor: pointer; display: inline-flex; align-items: center; gap: 6px;
          transition: all 0.3s ease;
        }
        .upcoming-btn-secondary:hover {
          background: #FFE5DC;
          border-color: #F06543;
        }
      `}</style>

      {/* LEFT: Cinematic Cover Image */}
      <div className="upcoming-img-box">
        <img src={tripData.coverImage} alt={tripData.title} />
        <div className="upcoming-img-overlay" />
        <span className="upcoming-badge-top">UPCOMING TRIP</span>
        <span className="upcoming-status-top">
          <CheckCircle2 size={12} color="#F06543" />
          {tripData.status}
        </span>
      </div>

      {/* RIGHT: Content & Actions */}
      <div className="upcoming-body">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 700, color: '#64748b', marginBottom: 6 }}>
            <Calendar size={13} color="#F06543" />
            <span>{tripData.dates}</span>
            <span style={{ color: '#ebded2' }}>•</span>
            <span style={{ color: '#F06543' }}>Booking ID: {tripData.bookingId}</span>
          </div>

          <h2 className="upcoming-title">{tripData.title}</h2>
          <p className="upcoming-subtitle">{tripData.subtitle}</p>

          {/* Route */}
          <div className="upcoming-route-box">
            <div className="upcoming-route-title">
              <Navigation size={11} color="#F06543" />
              <span>ISLAND ROUTE</span>
            </div>
            <div className="upcoming-route-cities">
              {tripData.route.map((city, idx) => (
                <React.Fragment key={idx}>
                  <span>{city}</span>
                  {idx < tripData.route.length - 1 && (
                    <ArrowRight size={12} color="#F06543" style={{ opacity: 0.6 }} />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Preparation Progress Bar */}
          <div className="upcoming-prep-box">
            <div className="upcoming-prep-header">
              <span>TRIP PREPARATION</span>
              <span style={{ color: '#F06543' }}>{tripData.progress}% COMPLETE</span>
            </div>
            <div className="upcoming-progress-track">
              <div
                className="upcoming-progress-fill"
                style={{ width: `${tripData.progress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="upcoming-actions">
          <button className="upcoming-btn-primary" onClick={onViewTrip}>
            <span>VIEW TRIP DETAILS</span>
            <ArrowRight size={13} />
          </button>
          <button className="upcoming-btn-secondary" onClick={onViewItinerary}>
            <FileText size={13} />
            <span>VIEW ITINERARY</span>
          </button>
        </div>
      </div>
    </div>
  );
}
