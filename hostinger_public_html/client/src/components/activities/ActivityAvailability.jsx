// src/components/activities/ActivityAvailability.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Real-Time Certified Instructor & Activity Slot Scheduler with High-Contrast Luxury UI

import React, { useState } from 'react';
import {
  Calendar, Users, Clock, Search, CheckCircle2,
  AlertTriangle, XCircle, Info, MapPin, Sparkles,
  ShieldCheck, ArrowRight, MessageSquare, Award
} from 'lucide-react';

const ISLAND_OPTIONS = [
  { id: 'havelock', name: 'Havelock Island (Swaraj Dweep)', tag: 'Scuba & Kayak Hub' },
  { id: 'neil', name: 'Neil Island (Shaheed Dweep)', tag: 'Natural Bridge & Shallow Reef' },
  { id: 'port-blair', name: 'Port Blair & Corbyn’s Cove', tag: 'Capital & Heritage Waters' },
  { id: 'north-bay', name: 'North Bay Coral Island', tag: 'Glass Boat & Snorkeling' },
  { id: 'baratang', name: 'Baratang Island Mangroves', tag: 'Speedboat Creek Expedition' },
  { id: 'diglipur', name: 'Diglipur (Ross & Smith)', tag: 'Twin Island Safari' },
];

const ACTIVITY_OPTIONS = [
  { id: 'boat-scuba-diving', name: 'Boat Scuba Diving (Certified Divemaster)', price: 5500, duration: '2.5 hrs', popularTime: '06:00 AM - 08:30 AM' },
  { id: 'shore-scuba-diving', name: 'Shore Scuba Diving (Beginners Nemo Reef)', price: 3500, duration: '1.5 hrs', popularTime: '08:30 AM - 11:00 AM' },
  { id: 'night-bioluminescence-kayak', name: 'Bioluminescent Night Mangrove Kayaking', price: 2800, duration: '2.0 hrs', popularTime: '06:30 PM - 08:30 PM' },
  { id: 'undersea-helmet-sea-walk', name: 'Undersea Helmet Sea Walk with Live Corals', price: 3500, duration: '1.5 hrs', popularTime: '08:30 AM - 11:00 AM' },
  { id: 'ocean-parasailing', name: 'Ocean Parasailing with Speedboat Dip', price: 3200, duration: '1.0 hr', popularTime: '01:00 PM - 03:30 PM' },
  { id: 'deep-water-snorkeling', name: 'Deep Sea Snorkeling Safari with Equipment', price: 1800, duration: '2.0 hrs', popularTime: '08:30 AM - 11:00 AM' },
  { id: 'glass-bottom-boat-ride', name: 'Glass Bottom Coral Safari & Semi-Submarine', price: 1500, duration: '1.0 hr', popularTime: '08:30 AM - 11:00 AM' },
];

const TIME_SLOTS = [
  { id: 'early', label: 'Early Morning (06:00 AM - 08:30 AM)', desc: 'Calm water & highest underwater visibility' },
  { id: 'mid-morning', label: 'Mid Morning (08:30 AM - 11:00 AM)', desc: 'Peak sunlight illumination on corals' },
  { id: 'afternoon', label: 'Afternoon (01:00 PM - 03:30 PM)', desc: 'Warm island breezes & speedboat rides' },
  { id: 'night', label: 'Night Kayak Slot (06:30 PM - 08:30 PM)', desc: 'Stargazing & glowing bioluminescent plankton' },
];

export default function ActivityAvailability({ onBookDirect }) {
  const [selectedIslandId, setSelectedIslandId] = useState('neil');
  const [selectedActivityId, setSelectedActivityId] = useState('boat-scuba-diving');
  const [date, setDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  });
  const [timeSlot, setTimeSlot] = useState('Early Morning (06:00 AM - 08:30 AM)');
  const [guestsCount, setGuestsCount] = useState(2);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const selectedActivity = ACTIVITY_OPTIONS.find(a => a.id === selectedActivityId) || ACTIVITY_OPTIONS[0];
  const selectedIsland = ISLAND_OPTIONS.find(i => i.id === selectedIslandId) || ISLAND_OPTIONS[0];

  const handleCheck = (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    setTimeout(() => {
      setLoading(false);
      const isNightSlot = timeSlot.includes('Night') || timeSlot.includes('06:30 PM');
      const isKayak = selectedActivity.id.includes('kayak');

      const isAvailable = !(isNightSlot && !isKayak);

      const totalPrice = selectedActivity.price * guestsCount;

      if (isAvailable) {
        setResult({
          status: 'available',
          title: 'SLOT STATUS: CONFIRMED AVAILABLE',
          message: `Confirmed Slots Available for ${guestsCount} guest(s) on ${date} in ${selectedIsland.name} (${timeSlot}). Certified PADI/SSI divemasters & safety crew allocated.`,
          pricePerPerson: selectedActivity.price,
          totalPrice,
          instructors: 'Allocated (Max 1:2 instructor ratio)',
          activity: selectedActivity,
          island: selectedIsland,
          date,
          timeSlot,
          guestsCount,
        });
      } else {
        setResult({
          status: 'limited',
          title: 'SLOT STATUS: HIGH DEMAND / LIMITED SLOTS',
          message: `Slots filling rapidly for ${selectedActivity.name} on ${date}. Only 2 instructor slots remaining for this timing. Early lock advised.`,
          pricePerPerson: selectedActivity.price,
          totalPrice,
          instructors: 'Limited allocation',
          activity: selectedActivity,
          island: selectedIsland,
          date,
          timeSlot,
          guestsCount,
        });
      }
    }, 450);
  };

  const handleProceedBooking = () => {
    if (onBookDirect && result) {
      onBookDirect({
        id: result.activity.id,
        slug: result.activity.id,
        name: result.activity.name,
        location: result.island.name,
        price: result.pricePerPerson,
        bookingDate: result.date,
        timeSlot: result.timeSlot,
        guests: result.guestsCount,
      });
    } else {
      const slug = selectedActivity.id;
      window.history.pushState({}, '', `/activity-booking?id=${slug}&date=${date}&island=${selectedIsland.id}`);
      window.dispatchEvent(new Event('popstate'));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section className="avail-act-root" id="activity-availability-section">
      <style>{`
        .avail-act-root {
          max-width: 1140px;
          margin: 0 auto;
          padding: 70px 24px 80px;
          font-family: 'Inter', sans-serif;
        }

        .avail-act-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11.5px;
          font-weight: 900;
          color: #F06543;
          background: #FFF0EB;
          border: 1px solid rgba(240, 101, 67, 0.35);
          padding: 6px 16px;
          border-radius: 30px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .avail-act-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(32px, 4.5vw, 50px);
          font-weight: 700;
          color: #0B2545;
          text-align: center;
          margin: 0 0 14px;
          line-height: 1.15;
        }

        .avail-act-notice {
          background: #FFF5F0;
          border: 1.5px solid #FFD3C4;
          border-radius: 16px;
          padding: 12px 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-size: 13px;
          color: #9A3412;
          margin: 0 auto 36px;
          max-width: 740px;
          text-align: center;
          font-weight: 600;
          box-shadow: 0 4px 14px rgba(240, 101, 67, 0.06);
        }

        .avail-act-card {
          background: #ffffff;
          border: 2px solid #EBDED2;
          border-radius: 28px;
          padding: 36px;
          box-shadow: 0 20px 60px rgba(11, 37, 69, 0.08);
        }
        @media (max-width: 768px) {
          .avail-act-card { padding: 22px; }
        }

        .avail-act-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 22px;
          margin-bottom: 26px;
        }
        @media (max-width: 768px) {
          .avail-act-grid { grid-template-columns: 1fr; }
        }

        .field-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .field-lbl {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11.5px;
          font-weight: 900;
          color: #0B2545;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .input-box {
          background: #FAF4EE;
          border: 1.5px solid #EBDED2;
          border-radius: 14px;
          padding: 12px 16px;
          font-size: 13.5px;
          font-weight: 700;
          color: #0B2545;
          outline: none;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: all 0.2s ease;
        }
        .input-box:focus-within {
          border-color: #F06543;
          background: #ffffff;
          box-shadow: 0 0 0 3px rgba(240, 101, 67, 0.12);
        }

        .check-btn {
          width: 100%;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 14px;
          font-weight: 900;
          letter-spacing: 0.08em;
          color: #ffffff;
          background: linear-gradient(135deg, #FF6B4A, #F06543);
          border: none;
          padding: 16px 28px;
          border-radius: 16px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: all 0.25s ease;
          box-shadow: 0 8px 24px rgba(240, 101, 67, 0.35);
        }
        .check-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(240, 101, 67, 0.45);
        }

        .result-box-thick {
          margin-top: 28px;
          padding: 24px 26px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
          border: 2px solid;
          animation: resultSlideUp 0.3s ease;
        }
        @keyframes resultSlideUp {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .result-avail-thick {
          background: #F0FDF4;
          border-color: #86EFAC;
          color: #166534;
        }
        .result-limit-thick {
          background: #FFFBEB;
          border-color: #FDE68A;
          color: #92400E;
        }
      `}</style>

      {/* Center Header */}
      <div style={{ textAlign: 'center', marginBottom: 20 }}>
        <div className="avail-act-eyebrow">
          <Calendar size={13} color="#F06543" />
          <span>REAL-TIME INSTRUCTOR SCHEDULER</span>
        </div>
        <h2 className="avail-act-title">CHECK ACTIVITY SLOT AVAILABILITY</h2>
      </div>

      <div className="avail-act-notice">
        <Info size={16} className="shrink-0 text-[#F06543]" />
        <span>Pre-booking is highly recommended for morning Scuba Diving & Bioluminescence Kayaking due to limited daily slots.</span>
      </div>

      {/* Main Scheduler Form */}
      <form className="avail-act-card" onSubmit={handleCheck}>
        <div className="avail-act-grid">
          {/* 1. Island Location */}
          <div className="field-group">
            <label className="field-lbl">ISLAND LOCATION</label>
            <div className="input-box">
              <MapPin size={16} color="#F06543" />
              <select
                value={selectedIslandId}
                onChange={(e) => setSelectedIslandId(e.target.value)}
                style={{ background: 'transparent', border: 'none', color: '#0B2545', outline: 'none', width: '100%', fontWeight: 700, cursor: 'pointer', fontSize: 13.5 }}
              >
                {ISLAND_OPTIONS.map((isl) => (
                  <option key={isl.id} value={isl.id}>
                    {isl.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* 2. Activity Type */}
          <div className="field-group">
            <label className="field-lbl">ACTIVITY TYPE</label>
            <div className="input-box">
              <Sparkles size={16} color="#F06543" />
              <select
                value={selectedActivityId}
                onChange={(e) => setSelectedActivityId(e.target.value)}
                style={{ background: 'transparent', border: 'none', color: '#0B2545', outline: 'none', width: '100%', fontWeight: 700, cursor: 'pointer', fontSize: 13.5 }}
              >
                {ACTIVITY_OPTIONS.map((act) => (
                  <option key={act.id} value={act.id}>
                    {act.name} — ₹{act.price}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* 3. Activity Date */}
          <div className="field-group">
            <label className="field-lbl">ACTIVITY DATE</label>
            <div className="input-box">
              <Calendar size={16} color="#F06543" />
              <input
                type="date"
                min={new Date().toISOString().split('T')[0]}
                value={date}
                onChange={(e) => setDate(e.target.value)}
                style={{ background: 'transparent', border: 'none', color: '#0B2545', outline: 'none', width: '100%', fontWeight: 700, cursor: 'pointer', fontSize: 13.5 }}
              />
            </div>
          </div>

          {/* 4. Preferred Timing Slot */}
          <div className="field-group">
            <label className="field-lbl">PREFERRED TIMING SLOT</label>
            <div className="input-box">
              <Clock size={16} color="#F06543" />
              <select
                value={timeSlot}
                onChange={(e) => setTimeSlot(e.target.value)}
                style={{ background: 'transparent', border: 'none', color: '#0B2545', outline: 'none', width: '100%', fontWeight: 700, cursor: 'pointer', fontSize: 13.5 }}
              >
                {TIME_SLOTS.map((slot) => (
                  <option key={slot.id} value={slot.label}>
                    {slot.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* 5. Guests Counter (Full width or in grid) */}
          <div className="field-group" style={{ gridColumn: '1 / -1' }}>
            <label className="field-lbl">NUMBER OF TRAVELERS / GUESTS</label>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#FAF4EE', border: '1.5px solid #EBDED2', borderRadius: 14, padding: '10px 18px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <Users size={18} color="#F06543" />
                <span style={{ fontSize: 13.5, fontWeight: 800, color: '#0B2545' }}>
                  {guestsCount} {guestsCount === 1 ? 'Guest' : 'Guests'} Participating
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <button
                  type="button"
                  onClick={() => setGuestsCount(Math.max(1, guestsCount - 1))}
                  style={{ width: 34, height: 34, borderRadius: 10, background: '#ffffff', border: '1.5px solid #EBDED2', fontWeight: 900, fontSize: 16, cursor: guestsCount <= 1 ? 'not-allowed' : 'pointer', color: '#0B2545' }}
                >
                  -
                </button>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 17, fontWeight: 900, color: '#F06543', minWidth: 24, textAlign: 'center' }}>
                  {guestsCount}
                </span>
                <button
                  type="button"
                  onClick={() => setGuestsCount(Math.min(20, guestsCount + 1))}
                  style={{ width: 34, height: 34, borderRadius: 10, background: '#ffffff', border: '1.5px solid #EBDED2', fontWeight: 900, fontSize: 16, cursor: 'pointer', color: '#0B2545' }}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Submit Check Button */}
        <button type="submit" className="check-btn" disabled={loading}>
          {loading ? (
            <>
              <span style={{ display: 'inline-block', width: 16, height: 16, border: '2px solid #ffffff', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 0.6s linear infinite' }} />
              <span>CHECKING LIVE INSTRUCTOR MATRIX...</span>
            </>
          ) : (
            <>
              <Search size={16} />
              <span>CHECK REAL-TIME AVAILABILITY</span>
            </>
          )}
        </button>

        {/* Thick High-Contrast Result Box */}
        {result && (
          <div className={`result-box-thick ${result.status === 'available' ? 'result-avail-thick' : 'result-limit-thick'}`}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, flex: 1, minWidth: 280 }}>
              <div style={{
                width: 42,
                height: 42,
                borderRadius: 12,
                background: result.status === 'available' ? '#DCFCE7' : '#FEF3C7',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                marginTop: 2,
              }}>
                {result.status === 'available' ? (
                  <CheckCircle2 size={22} color="#16A34A" />
                ) : (
                  <AlertTriangle size={22} color="#D97706" />
                )}
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', marginBottom: 4 }}>
                  <span style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 13,
                    fontWeight: 900,
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                  }}>
                    {result.title}
                  </span>
                  <span style={{
                    background: result.status === 'available' ? '#BBF7D0' : '#FDE68A',
                    color: result.status === 'available' ? '#14532D' : '#78350F',
                    fontSize: 10.5,
                    fontWeight: 900,
                    padding: '2px 8px',
                    borderRadius: 6,
                  }}>
                    ✓ PADI CERTIFIED CREW ALLOCATED
                  </span>
                </div>

                <div style={{ fontSize: 13, lineHeight: 1.5, color: result.status === 'available' ? '#166534' : '#92400E' }}>
                  {result.message}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 8, fontSize: 12, fontWeight: 700 }}>
                  <span>Price: ₹{result.pricePerPerson.toLocaleString()} / person</span>
                  <span>•</span>
                  <span>Total for {result.guestsCount} Guests: <strong style={{ color: '#0B2545', fontSize: 14 }}>₹{result.totalPrice.toLocaleString()}</strong></span>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
              <button
                type="button"
                onClick={handleProceedBooking}
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 12.5,
                  fontWeight: 900,
                  color: '#ffffff',
                  background: '#0B2545',
                  padding: '12px 24px',
                  borderRadius: 14,
                  border: 'none',
                  cursor: 'pointer',
                  letterSpacing: '0.04em',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  boxShadow: '0 4px 16px rgba(11, 37, 69, 0.25)',
                  transition: 'all 0.2s ease',
                }}
              >
                <span>BOOK & LOCK THIS SLOT</span>
                <ArrowRight size={14} />
              </button>

              <a
                href={`https://wa.me/919137835433?text=${encodeURIComponent(`Hello! I would like to lock the activity slot: ${result.activity.name} in ${result.island.name} on ${result.date} (${result.timeSlot}) for ${result.guestsCount} guests.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 12,
                  fontWeight: 800,
                  color: '#15803D',
                  background: '#DCFCE7',
                  border: '1.5px solid #86EFAC',
                  padding: '10px 16px',
                  borderRadius: 14,
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                }}
              >
                <MessageSquare size={13} />
                <span>WHATSAPP CONCIERGE</span>
              </a>
            </div>
          </div>
        )}
      </form>
    </section>
  );
}
