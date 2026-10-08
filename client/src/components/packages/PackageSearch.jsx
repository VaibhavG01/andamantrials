// src/components/packages/PackageSearch.jsx
import React, { useState } from 'react';
import { Search, Users, Calendar, Clock, SlidersHorizontal, Heart, MapPin } from 'lucide-react';

export default function PackageSearch({ onSearch }) {
  const [destination, setDestination] = useState('ALL');
  const [category, setCategory] = useState('ALL');
  const [duration, setDuration] = useState('ALL');
  const [date, setDate] = useState('');
  const [adults, setAdults] = useState(2);
  const [childrenCount, setChildrenCount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch({
        destination,
        category,
        duration,
        date,
        adults,
        childrenCount,
      });
    }
  };

  return (
    <div className="pkg-search-wrapper">
      <style>{`
        .pkg-search-wrapper {
          position: relative;
          z-index: 20;
          max-width: 1240px;
          margin: -60px auto 70px;
          padding: 0 24px;
        }

        .pkg-search-card {
          background: #ffffff;
          backdrop-filter: blur(25px);
          -webkit-backdrop-filter: blur(25px);
          border: 2px solid #e2e8f0;
          border-radius: 26px;
          padding: 32px 36px;
          box-shadow: 0 24px 60px rgba(0, 45, 98, 0.14), 0 0 30px rgba(240, 101, 67, 0.08);
        }
        @media (max-width: 768px) {
          .pkg-search-card { padding: 22px; }
        }

        .pkg-search-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 900; color: #F06543;
          letter-spacing: 0.15em; text-transform: uppercase;
          display: flex; align-items: center; justify-content: space-between;
          margin-bottom: 20px;
        }

        .pkg-search-grid {
          display: grid;
          grid-template-columns: 1.2fr 1.1fr 1fr 1fr 1fr;
          gap: 14px; margin-bottom: 24px;
        }
        @media (max-width: 1100px) {
          .pkg-search-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 580px) {
          .pkg-search-grid { grid-template-columns: 1fr; }
        }

        .pkg-search-field {
          display: flex; flex-direction: column; gap: 6px;
        }

        .pkg-field-label {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11.5px; font-weight: 800; color: #64748b;
          letter-spacing: 0.08em; text-transform: uppercase;
        }

        .pkg-field-input-box {
          background: #f8fafc;
          border: 1.5px solid #e2e8f0;
          border-radius: 14px; padding: 12px 14px;
          font-family: 'Inter', sans-serif; font-size: 13px; color: #0B2545;
          outline: none; transition: all 0.25s ease;
          display: flex; align-items: center; gap: 10px; width: 100%;
          box-sizing: border-box;
        }
        .pkg-field-input-box:focus-within {
          border-color: #F06543;
          background: #ffffff;
          box-shadow: 0 0 0 3px rgba(240, 101, 67, 0.12);
        }

        .pkg-field-select {
          background: transparent; color: #0B2545; border: none;
          font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 600;
          width: 100%; outline: none; cursor: pointer;
        }
        .pkg-field-select option {
          background: #ffffff; color: #0B2545;
        }

        .pkg-counter-btn {
          width: 26px; height: 26px; border-radius: 8px;
          background: rgba(240, 101, 67, 0.12); border: 1.5px solid rgba(240, 101, 67, 0.3);
          color: #F06543; font-weight: 900; cursor: pointer;
          display: inline-flex; align-items: center; justify-content: center;
          transition: all 0.2s ease;
        }
        .pkg-counter-btn:hover { background: #F06543; color: #ffffff; }

        .pkg-search-submit-btn {
          width: 100%;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 900; letter-spacing: 0.08em;
          color: #ffffff; background: linear-gradient(135deg, #FF6B4A, #F06543);
          border: none; padding: 15px 28px; border-radius: 14px;
          cursor: pointer; display: inline-flex; align-items: center; justify-content: center;
          gap: 8px; transition: all 0.3s ease;
          box-shadow: 0 6px 22px rgba(240, 101, 67, 0.28);
        }
        .pkg-search-submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(240, 101, 67, 0.4);
          background: linear-gradient(135deg, #F06543, #FF6B4A);
        }
      `}</style>

      <form className="pkg-search-card" onSubmit={handleSubmit}>
        <div className="pkg-search-title">
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Search size={15} color="#F06543" />
            <span>FIND YOUR DREAM ANDAMAN PACKAGE</span>
          </div>
          <span style={{ fontSize: 11, color: '#64748b', fontWeight: 700, fontFamily: "'Inter', sans-serif" }}>
            Real-Time Tour Itineraries
          </span>
        </div>

        <div className="pkg-search-grid">
          {/* FIELD 1: DESTINATION */}
          <div className="pkg-search-field">
            <label className="pkg-field-label">DESTINATION / ISLAND</label>
            <div className="pkg-field-input-box">
              <MapPin size={16} color="#F06543" style={{ flexShrink: 0 }} />
              <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="pkg-field-select"
              >
                <option value="ALL">All Destinations & Islands</option>
                <option value="Port Blair">Port Blair</option>
                <option value="Havelock">Havelock Island (Swaraj Dweep)</option>
                <option value="Neil">Neil Island (Shaheed Dweep)</option>
                <option value="Baratang">Baratang Island</option>
                <option value="Diglipur">Diglipur & North Andaman</option>
                <option value="Ross">Ross Island (Netaji Dweep)</option>
              </select>
            </div>
          </div>

          {/* FIELD 2: THEME / CATEGORY */}
          <div className="pkg-search-field">
            <label className="pkg-field-label">HOLIDAY THEME</label>
            <div className="pkg-field-input-box">
              <Heart size={16} color="#F06543" style={{ flexShrink: 0 }} />
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="pkg-field-select"
              >
                <option value="ALL">All Themes & Packages</option>
                <option value="HONEYMOON">Honeymoon & Romantic (Beachfront Villa)</option>
                <option value="FAMILY">Family & Relaxed Island Vacation</option>
                <option value="ADVENTURE">Adventure & Scuba Diving Tours</option>
                <option value="LUXURY">Luxury Private Island Charters</option>
                <option value="BUDGET">Budget & Backpackers Escapes</option>
              </select>
            </div>
          </div>

          {/* FIELD 3: DURATION */}
          <div className="pkg-search-field">
            <label className="pkg-field-label">TRIP DURATION</label>
            <div className="pkg-field-input-box">
              <Clock size={16} color="#F06543" style={{ flexShrink: 0 }} />
              <select
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="pkg-field-select"
              >
                <option value="ALL">All Durations</option>
                <option value="SHORT">Short Break (3–4 Days)</option>
                <option value="MEDIUM">Standard Vacation (5–6 Days)</option>
                <option value="LONG">Grand Island Hop (7+ Days)</option>
              </select>
            </div>
          </div>

          {/* FIELD 4: TRAVEL MONTH */}
          <div className="pkg-search-field">
            <label className="pkg-field-label">TRAVEL DATE / MONTH</label>
            <div className="pkg-field-input-box">
              <Calendar size={16} color="#F06543" style={{ flexShrink: 0 }} />
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#0B2545',
                  outline: 'none',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 13,
                  fontWeight: 600,
                  width: '100%',
                }}
              />
            </div>
          </div>

          {/* FIELD 5: GUEST TRAVELERS */}
          <div className="pkg-search-field">
            <label className="pkg-field-label">GUEST TRAVELERS</label>
            <div className="pkg-field-input-box" style={{ justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <Users size={16} color="#F06543" />
                <span style={{ fontSize: 13, fontWeight: 700, color: '#0B2545' }}>
                  {adults} Ad{childrenCount > 0 ? `, ${childrenCount} Ch` : ''}
                </span>
              </div>
              <div style={{ display: 'flex', gap: 4 }}>
                <button
                  type="button"
                  className="pkg-counter-btn"
                  onClick={() => setAdults(Math.max(1, adults - 1))}
                  title="Decrease Adults"
                >
                  -
                </button>
                <button
                  type="button"
                  className="pkg-counter-btn"
                  onClick={() => setAdults(adults + 1)}
                  title="Increase Adults"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* SUBMIT BUTTON */}
        <button type="submit" className="pkg-search-submit-btn">
          <span>SEARCH HOLIDAY PACKAGES</span>
          <Search size={15} />
        </button>
      </form>
    </div>
  );
}
