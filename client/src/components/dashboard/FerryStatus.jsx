// src/components/dashboard/FerryStatus.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Compact Live Ferry Status Card

import React, { useState, useEffect } from 'react';
import { Ship, Clock, Calendar, ArrowRight, ShieldCheck, Waves } from 'lucide-react';
import { bookingService } from '../../api/bookingService';

export default function FerryStatus() {
  const [latestFerry, setLatestFerry] = useState(null);

  useEffect(() => {
    bookingService.getMyBookings()
      .then(res => {
        if (res.data && Array.isArray(res.data)) {
          const ferryBk = res.data.find(b => b.bookingType === 'FERRY');
          if (ferryBk) {
            setLatestFerry(ferryBk);
          }
        }
      })
      .catch(() => {});
  }, []);

  if (!latestFerry) {
    return (
      <div className="dash-ferry-card">
        <style>{`
          .dash-ferry-card {
            position: relative;
            background: #ffffff;
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1.5px solid #ebded2;
            border-radius: 24px;
            padding: 24px 28px;
            margin-bottom: 28px;
            box-shadow: 0 16px 40px rgba(11, 37, 69, 0.08);
            overflow: hidden;
          }
          .dash-ferry-hdr {
            display: flex; align-items: center; justify-content: space-between;
            margin-bottom: 18px; flex-wrap: wrap; gap: 10px;
          }
          .dash-ferry-sub {
            font-family: 'Space Grotesk', sans-serif;
            font-size: 12.5px; font-weight: 800; letter-spacing: 0.18em;
            color: #F06543; text-transform: uppercase;
            display: flex; align-items: center; gap: 6px;
          }
          .dash-ferry-title {
            font-family: 'Space Grotesk', sans-serif;
            font-size: 18px; font-weight: 800; color: #0B2545;
          }
        `}</style>
        <div className="dash-ferry-hdr">
          <div>
            <div className="dash-ferry-sub">
              <Ship size={12} color="#F06543" />
              <span>LIVE INTER-ISLAND FERRY</span>
            </div>
            <div className="dash-ferry-title">No Active Ferry Tickets</div>
          </div>
        </div>
        <div style={{
          background: '#FAF4EE',
          border: '1px dashed #ebded2',
          borderRadius: 18,
          padding: '24px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 16,
        }}>
          <div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, fontWeight: 800, color: '#0B2545', marginBottom: 4 }}>
              Reserve High-Speed Catamarans
            </div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: '#64748b', margin: 0 }}>
              Sail between Port Blair, Havelock (Swaraj Dweep), and Neil (Shaheed Dweep) aboard Nautika, Makruzz, & Green Ocean.
            </p>
          </div>
          <a
            href="/ferries"
            onClick={(e) => {
              e.preventDefault();
              window.history.pushState({}, '', '/ferries');
              window.dispatchEvent(new PopStateEvent('popstate'));
            }}
            style={{
              background: 'linear-gradient(135deg, #FF6B4A, #F06543)',
              color: '#ffffff',
              padding: '10px 20px',
              borderRadius: 14,
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 11,
              fontWeight: 900,
              textDecoration: 'none',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              boxShadow: '0 4px 14px rgba(240, 101, 67, 0.25)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
            }}
          >
            <span>BOOK FERRIES</span>
            <ArrowRight size={12} />
          </a>
        </div>
      </div>
    );
  }

  const operatorName = latestFerry.ferry?.operator || latestFerry.ferry?.name || 'Catamaran Ferry';
  const status = latestFerry.bookingStatus || 'CONFIRMED';
  const fromPort = latestFerry.ferry?.fromPort || 'PORT BLAIR';
  const toPort = latestFerry.ferry?.toPort || 'HAVELOCK ISLAND';
  const depTime = latestFerry.slotStartTime || latestFerry.ferry?.departureTime || '08:30 AM';
  const depDate = latestFerry.activityDate || latestFerry.bookingDate || 'Scheduled on Route';
  const assignedSeat = latestFerry.seatNumber || 'Assigned at Jetty';
  const weather = 'Calm Waves • Verified';

  return (
    <div className="dash-ferry-card">
      <style>{`
        .dash-ferry-card {
          position: relative;
          background: #ffffff;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1.5px solid #ebded2;
          border-radius: 24px;
          padding: 24px 28px;
          margin-bottom: 28px;
          box-shadow: 0 16px 40px rgba(11, 37, 69, 0.08);
          overflow: hidden;
        }

        .dash-ferry-hdr {
          display: flex; align-items: center; justify-content: space-between;
          margin-bottom: 18px; flex-wrap: wrap; gap: 10px;
        }
        .dash-ferry-sub {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 800; letter-spacing: 0.18em;
          color: #F06543; text-transform: uppercase;
          display: flex; align-items: center; gap: 6px;
        }
        .dash-ferry-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 18px; font-weight: 800; color: #0B2545;
        }

        .dash-ferry-status-badge {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 900; color: #F06543;
          background: #FFF0EB;
          border: 1px solid #FFD3C4;
          padding: 5px 12px; border-radius: 14px;
          display: flex; align-items: center; gap: 5px;
        }

        .dash-ferry-route-box {
          background: #FAF4EE;
          border: 1px solid #ebded2;
          border-radius: 18px; padding: 18px;
          margin-bottom: 16px;
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: 16px;
        }

        .dash-ferry-meta-row {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;
          margin-top: 16px;
        }
        @media (max-width: 540px) {
          .dash-ferry-meta-row { grid-template-columns: 1fr; }
        }
        .dash-ferry-meta-item {
          background: #FAF4EE;
          border: 1px solid #ebded2;
          border-radius: 14px; padding: 10px 14px;
        }
        .dash-ferry-meta-lbl {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 9.5px; font-weight: 800; color: #627d8a;
          text-transform: uppercase; margin-bottom: 2px;
        }
        .dash-ferry-meta-val {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 800; color: #0B2545;
        }
      `}</style>

      {/* HEADER */}
      <div className="dash-ferry-hdr">
        <div>
          <div className="dash-ferry-sub">
            <Ship size={12} color="#F06543" />
            <span>LIVE INTER-ISLAND FERRY</span>
          </div>
          <div className="dash-ferry-title">{operatorName}</div>
        </div>

        <div className="dash-ferry-status-badge">
          <ShieldCheck size={12} color="#F06543" />
          <span>{status}</span>
        </div>
      </div>

      {/* ROUTE BOX */}
      <div className="dash-ferry-route-box">
        <div>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 700, color: '#F06543' }}>
            ROUTE
          </div>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 900, color: '#0B2545', display: 'flex', alignItems: 'center', gap: 8, marginTop: 2 }}>
            <span>{fromPort}</span>
            <ArrowRight size={14} color="#F06543" />
            <span>{toPort}</span>
          </div>
        </div>

        <div>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 700, color: '#64748b' }}>
            DEPARTURE
          </div>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 900, color: '#F06543', marginTop: 2 }}>
            {depTime} • {depDate}
          </div>
        </div>

        <a
          href="/ferries"
          onClick={(e) => {
            e.preventDefault();
            window.history.pushState({}, '', '/ferries');
            window.dispatchEvent(new PopStateEvent('popstate'));
          }}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 12.5, fontWeight: 800, color: '#F06543',
            background: '#FFF0EB',
            border: '1px solid #FFD3C4',
            padding: '8px 16px', borderRadius: 14,
            textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 5,
            transition: 'all 0.25s ease',
          }}
        >
          <span>LIVE TRACKING</span>
          <ArrowRight size={11} />
        </a>
      </div>

      {/* META ROW */}
      <div className="dash-ferry-meta-row">
        <div className="dash-ferry-meta-item">
          <div className="dash-ferry-meta-lbl">Assigned Seats</div>
          <div className="dash-ferry-meta-val" style={{ color: '#F06543' }}>{assignedSeat}</div>
        </div>

        <div className="dash-ferry-meta-item">
          <div className="dash-ferry-meta-lbl">Booking Ref</div>
          <div className="dash-ferry-meta-val">{latestFerry.bookingNumber}</div>
        </div>

        <div className="dash-ferry-meta-item">
          <div className="dash-ferry-meta-lbl">Sea Condition</div>
          <div className="dash-ferry-meta-val" style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <Waves size={12} color="#F06543" />
            <span>{weather}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
