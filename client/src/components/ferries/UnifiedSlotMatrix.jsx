// src/components/ferries/UnifiedSlotMatrix.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Real-time Master Slot & Sailing Matrix Component for Ferries & Cruises

import React, { useState } from 'react';
import { 
  Ship, Anchor, Clock, MapPin, ArrowRight, ShieldCheck, 
  Sparkles, CheckCircle2, AlertCircle, Filter, ChevronDown, 
  Wind, Coffee, Info, Check, Star, Users
} from 'lucide-react';

export default function UnifiedSlotMatrix({ 
  items = [], 
  searchParams = {}, 
  onSelectSlot, 
  onViewDetails 
}) {
  const [operatorFilter, setOperatorFilter] = useState('ALL');
  const [timeFilter, setTimeFilter] = useState('ALL'); // 'ALL', 'MORNING', 'MIDDAY', 'AFTERNOON'
  const [classFilter, setClassFilter] = useState('ALL');
  const [sortBy, setSortBy] = useState('EARLIEST');

  // Filter & Sort Logic
  const filteredItems = items.filter((item) => {
    // Operator
    if (operatorFilter !== 'ALL') {
      const op = (item.operator || item.name || '').toLowerCase();
      if (!op.includes(operatorFilter.toLowerCase())) return false;
    }

    // Time of Day
    if (timeFilter !== 'ALL') {
      const depTime = item.departure || item.departureTime || '08:00';
      const hour = parseInt(depTime.split(':')[0], 10) || 8;
      const isPM = depTime.toLowerCase().includes('pm');
      const normalizedHour = isPM && hour < 12 ? hour + 12 : (!isPM && hour === 12 ? 0 : hour);

      if (timeFilter === 'MORNING' && (normalizedHour < 5 || normalizedHour >= 11)) return false;
      if (timeFilter === 'MIDDAY' && (normalizedHour < 11 || normalizedHour >= 14)) return false;
      if (timeFilter === 'AFTERNOON' && normalizedHour < 14) return false;
    }

    return true;
  }).sort((a, b) => {
    if (sortBy === 'PRICE_LOW') {
      return (Number(a.price) || 0) - (Number(b.price) || 0);
    }
    if (sortBy === 'FASTEST') {
      return (a.duration || '').localeCompare(b.duration || '');
    }
    // Default Earliest
    return (a.departure || a.departureTime || '').localeCompare(b.departure || b.departureTime || '');
  });

  return (
    <section id="sailing-slots-matrix" className="slot-matrix-root">
      <style>{`
        .slot-matrix-root {
          max-width: 1240px;
          margin: 0 auto;
          padding: 10px 24px 70px;
        }

        .matrix-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 24px;
          flex-wrap: wrap;
          gap: 16px;
        }

        .matrix-sub {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.18em;
          color: #F06543;
          text-transform: uppercase;
          margin-bottom: 4px;
        }

        .matrix-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(28px, 4vw, 42px);
          font-weight: 600;
          color: #0B2545;
          margin: 0;
        }

        .filters-container {
          background: #ffffff;
          border: 1.5px solid #E2E8F0;
          border-radius: 20px;
          padding: 16px 20px;
          margin-bottom: 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 14px;
          box-shadow: 0 4px 20px rgba(11, 37, 69, 0.04);
        }

        .filter-group-row {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .filter-btn-pill {
          background: #F8FAFC;
          border: 1px solid #CBD5E1;
          color: #475569;
          padding: 6px 14px;
          border-radius: 10px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11.5px;
          font-weight: 800;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .filter-btn-pill.active {
          background: #0B2545;
          color: #ffffff;
          border-color: #0B2545;
          box-shadow: 0 2px 8px rgba(11, 37, 69, 0.2);
        }

        .sort-select {
          background: #F8FAFC;
          border: 1px solid #CBD5E1;
          border-radius: 10px;
          padding: 6px 12px;
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          font-weight: 700;
          color: #0B2545;
          outline: none;
          cursor: pointer;
        }

        .slot-card {
          background: #ffffff;
          border: 1.5px solid #E2E8F0;
          border-radius: 22px;
          padding: 24px;
          margin-bottom: 20px;
          box-shadow: 0 6px 24px rgba(11, 37, 69, 0.04);
          transition: all 0.25s ease;
          display: grid;
          grid-template-columns: 2fr 2.5fr 2fr 1.6fr;
          align-items: center;
          gap: 24px;
        }

        .slot-card:hover {
          border-color: #F06543;
          transform: translateY(-2px);
          box-shadow: 0 14px 40px rgba(11, 37, 69, 0.08), 0 0 20px rgba(240, 101, 67, 0.05);
        }

        @media (max-width: 1080px) {
          .slot-card {
            grid-template-columns: 1fr 1fr;
            gap: 20px;
          }
        }

        @media (max-width: 680px) {
          .slot-card {
            grid-template-columns: 1fr;
            padding: 18px;
            gap: 16px;
          }
        }

        .vessel-info-col {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .vessel-operator-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          padding: 4px 10px;
          border-radius: 8px;
          width: fit-content;
        }

        .badge-makruzz { background: #FFF1EE; color: #F06543; }
        .badge-nautika { background: #E0F2FE; color: #0284C7; }
        .badge-green-ocean { background: #ECFDF5; color: #059669; }
        .badge-cruise { background: #FAF5FF; color: #9333EA; }

        .vessel-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 17px;
          font-weight: 900;
          color: #0B2545;
          margin: 0;
        }

        .vessel-feature-tags {
          display: flex;
          align-items: center;
          gap: 6px;
          flex-wrap: wrap;
        }

        .feature-tag {
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          color: #64748B;
          background: #F1F5F9;
          padding: 2px 8px;
          border-radius: 6px;
        }

        .timing-route-col {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          padding: 14px 18px;
        }

        .time-block {
          display: flex;
          flex-direction: column;
        }

        .time-val {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 18px;
          font-weight: 900;
          color: #0B2545;
        }

        .time-loc {
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          font-weight: 700;
          color: #64748B;
          max-width: 110px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .route-arrow-mid {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
        }

        .duration-text {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11px;
          font-weight: 800;
          color: #F06543;
        }

        .arrow-line {
          width: 55px;
          height: 2px;
          background: linear-gradient(90deg, #F06543, #FF8A65);
          position: relative;
        }

        .arrow-line::after {
          content: '▶';
          position: absolute;
          right: -4px;
          top: -6px;
          font-size: 8px;
          color: #FF8A65;
        }

        .classes-pricing-col {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .seat-tier-box {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #ffffff;
          border: 1px solid #E2E8F0;
          border-radius: 10px;
          padding: 6px 10px;
        }

        .tier-name {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11.5px;
          font-weight: 800;
          color: #334155;
        }

        .tier-price {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 900;
          color: #0B2545;
        }

        .action-col {
          display: flex;
          flex-direction: column;
          gap: 8px;
          align-items: stretch;
        }

        .btn-select-slot {
          background: linear-gradient(135deg, #FF6B4A, #F06543);
          border: none;
          color: #ffffff;
          padding: 12px 18px;
          border-radius: 12px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 900;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          box-shadow: 0 4px 14px rgba(240, 101, 67, 0.35);
          transition: all 0.2s ease;
        }

        .btn-select-slot:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(240, 101, 67, 0.5);
        }

        .btn-view-spec {
          background: #F8FAFC;
          border: 1px solid #CBD5E1;
          color: #475569;
          padding: 8px 14px;
          border-radius: 10px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11.5px;
          font-weight: 800;
          cursor: pointer;
          transition: all 0.2s ease;
          text-align: center;
        }

        .btn-view-spec:hover {
          background: #EEF2F6;
          color: #0B2545;
        }
      `}</style>

      {/* MATRIX TITLE & ROUTE SUMMARY */}
      <div className="matrix-header">
        <div>
          <div className="matrix-sub">REAL-TIME ISLAND DEPARTURES & SLOTS</div>
          <h2 className="matrix-title">Available Sailings & Cruise Slots</h2>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: '#64748B' }}>
          <ShieldCheck size={16} color="#10B981" />
          <span>Showing <strong>{filteredItems.length} verified sailings</strong></span>
        </div>
      </div>

      {/* FILTERS & SORTING BAR */}
      <div className="filters-container">
        {/* OPERATOR FILTERS */}
        <div className="filter-group-row">
          <span style={{ fontSize: 11, fontWeight: 800, color: '#64748B', textTransform: 'uppercase' }}>Fleet:</span>
          <button
            type="button"
            className={`filter-btn-pill ${operatorFilter === 'ALL' ? 'active' : ''}`}
            onClick={() => setOperatorFilter('ALL')}
          >
            All Fleets
          </button>
          <button
            type="button"
            className={`filter-btn-pill ${operatorFilter === 'Makruzz' ? 'active' : ''}`}
            onClick={() => setOperatorFilter('Makruzz')}
          >
            Makruzz
          </button>
          <button
            type="button"
            className={`filter-btn-pill ${operatorFilter === 'Nautika' ? 'active' : ''}`}
            onClick={() => setOperatorFilter('Nautika')}
          >
            Nautika
          </button>
          <button
            type="button"
            className={`filter-btn-pill ${operatorFilter === 'Green Ocean' ? 'active' : ''}`}
            onClick={() => setOperatorFilter('Green Ocean')}
          >
            Green Ocean
          </button>
          <button
            type="button"
            className={`filter-btn-pill ${operatorFilter === 'ITT Majestic' ? 'active' : ''}`}
            onClick={() => setOperatorFilter('ITT Majestic')}
          >
            ITT Majestic
          </button>
          <button
            type="button"
            className={`filter-btn-pill ${operatorFilter === 'Cruise' ? 'active' : ''}`}
            onClick={() => setOperatorFilter('Cruise')}
          >
            Sunset & Yachts
          </button>
        </div>

        {/* TIME OF DAY FILTER & SORT */}
        <div className="filter-group-row">
          <span style={{ fontSize: 11, fontWeight: 800, color: '#64748B', textTransform: 'uppercase' }}>Slot:</span>
          <button
            type="button"
            className={`filter-btn-pill ${timeFilter === 'ALL' ? 'active' : ''}`}
            onClick={() => setTimeFilter('ALL')}
          >
            All Day
          </button>
          <button
            type="button"
            className={`filter-btn-pill ${timeFilter === 'MORNING' ? 'active' : ''}`}
            onClick={() => setTimeFilter('MORNING')}
          >
            Morning (06:00 - 11:00)
          </button>
          <button
            type="button"
            className={`filter-btn-pill ${timeFilter === 'MIDDAY' ? 'active' : ''}`}
            onClick={() => setTimeFilter('MIDDAY')}
          >
            Midday (11:00 - 14:00)
          </button>
          <button
            type="button"
            className={`filter-btn-pill ${timeFilter === 'AFTERNOON' ? 'active' : ''}`}
            onClick={() => setTimeFilter('AFTERNOON')}
          >
            Sunset (14:00+)
          </button>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="sort-select"
          >
            <option value="EARLIEST">Earliest Departure</option>
            <option value="PRICE_LOW">Lowest Price</option>
            <option value="FASTEST">Fastest Transit</option>
          </select>
        </div>
      </div>

      {/* LIST OF SLOTS */}
      {filteredItems.length > 0 ? (
        <div>
          {filteredItems.map((item) => {
            const operator = item.operator || 'Catamaran Liner';
            const isMakruzz = operator.toLowerCase().includes('makruzz');
            const isNautika = operator.toLowerCase().includes('nautika');
            const isGreenOcean = operator.toLowerCase().includes('green ocean');
            const isCruise = item.category === 'CRUISE' || item.type?.toLowerCase().includes('sunset') || item.type?.toLowerCase().includes('private');

            let badgeClass = 'badge-makruzz';
            if (isNautika) badgeClass = 'badge-nautika';
            if (isGreenOcean) badgeClass = 'badge-green-ocean';
            if (isCruise) badgeClass = 'badge-cruise';

            const basePrice = Number(item.price) || 1650;
            const depTime = item.departure || item.departureTime || '08:30 AM';
            const arrTime = item.arrival || item.arrivalTime || '10:00 AM';
            const fromName = item.from || searchParams.from || 'Port Blair';
            const toName = item.to || searchParams.to || 'Havelock Island';
            const duration = item.duration || '90 mins';
            const availableSeats = Number(item.availableSeats || item.seatsAvailable || 42);

            return (
              <div key={item.id} className="slot-card">
                {/* 1. VESSEL DETAILS */}
                <div className="vessel-info-col">
                  <div className={`vessel-operator-badge ${badgeClass}`}>
                    {isCruise ? <Anchor size={12} /> : <Ship size={12} />}
                    <span>{operator}</span>
                  </div>
                  <h3 className="vessel-title">
                    {item.name || item.ferryName || 'High-Speed Luxury Liner'}
                  </h3>
                  <div className="vessel-feature-tags">
                    <span className="feature-tag">AC Deck</span>
                    <span className="feature-tag">Cafeteria</span>
                    <span className="feature-tag">Panoramic Sea Windows</span>
                    {availableSeats <= 25 && (
                      <span style={{ fontSize: 10.5, fontWeight: 800, color: '#EF4444', background: '#FEF2F2', padding: '2px 6px', borderRadius: 4 }}>
                        ⚡ Only {availableSeats} seats left
                      </span>
                    )}
                  </div>
                </div>

                {/* 2. TIMING & ROUTE */}
                <div className="timing-route-col">
                  <div className="time-block">
                    <span className="time-val">{depTime}</span>
                    <span className="time-loc" title={fromName}>{fromName}</span>
                  </div>

                  <div className="route-arrow-mid">
                    <span className="duration-text">{duration}</span>
                    <div className="arrow-line" />
                    <span style={{ fontSize: 10, color: '#94A3B8', fontWeight: 600 }}>Non-Stop</span>
                  </div>

                  <div className="time-block" style={{ textAlign: 'right' }}>
                    <span className="time-val">{arrTime}</span>
                    <span className="time-loc" title={toName}>{toName}</span>
                  </div>
                </div>

                {/* 3. SEATING TIERS & LIVE PRICE */}
                <div className="classes-pricing-col">
                  <div className="seat-tier-box">
                    <span className="tier-name">
                      {operator.toLowerCase().includes('green ocean')
                        ? 'Economy / Executive'
                        : operator.toLowerCase().includes('nautika')
                        ? 'Luxury Class'
                        : operator.toLowerCase().includes('majestic')
                        ? 'Silver Class'
                        : 'Premium / Deluxe'}
                    </span>
                    <span className="tier-price">₹{basePrice.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="seat-tier-box" style={{ background: '#FFF1EE', borderColor: '#FFD7CC' }}>
                    <span className="tier-name" style={{ color: '#F06543' }}>
                      {operator.toLowerCase().includes('majestic')
                        ? '👑 Majesty Deck'
                        : '👑 Royal VIP Lounge'}
                    </span>
                    <span className="tier-price" style={{ color: '#F06543' }}>
                      ₹{(basePrice + (operator.toLowerCase().includes('nautika') || operator.toLowerCase().includes('majestic') ? 300 : 600)).toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                {/* 4. DIRECT SLOT BOOKING CTA */}
                <div className="action-col">
                  <button
                    type="button"
                    onClick={() => onSelectSlot(item, operator.toLowerCase().includes('green ocean') ? 'Economy' : operator.toLowerCase().includes('nautika') ? 'Luxury' : 'Premium')}
                    className="btn-select-slot"
                  >
                    <span>Book Slot</span>
                    <ArrowRight size={15} />
                  </button>
                  <button
                    type="button"
                    onClick={() => onViewDetails(item)}
                    className="btn-view-spec"
                  >
                    Vessel Specs & Deck
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div style={{
          background: '#ffffff',
          borderRadius: 20,
          border: '1.5px dashed #CBD5E1',
          padding: '48px 24px',
          textAlign: 'center'
        }}>
          <AlertCircle size={36} color="#F06543" style={{ margin: '0 auto 12px' }} />
          <h3 style={{ fontSize: 18, fontWeight: 900, color: '#0B2545', margin: '0 0 6px' }}>
            No Matching Sailings Found
          </h3>
          <p style={{ fontSize: 13, color: '#64748B', maxWidth: 460, margin: '0 auto 18px' }}>
            Try selecting an alternate date, removing filters, or choosing one of our popular inter-island routes above.
          </p>
          <button
            type="button"
            onClick={() => {
              setOperatorFilter('ALL');
              setTimeFilter('ALL');
            }}
            style={{
              background: '#0B2545',
              color: '#ffffff',
              border: 'none',
              padding: '10px 20px',
              borderRadius: 12,
              fontSize: 12,
              fontWeight: 800,
              cursor: 'pointer'
            }}
          >
            Reset All Filters
          </button>
        </div>
      )}
    </section>
  );
}
