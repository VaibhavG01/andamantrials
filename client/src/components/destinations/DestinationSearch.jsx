// src/components/destinations/DestinationSearch.jsx
import React, { useState } from 'react';
import { Search, Users, Calendar, MapPin, Compass, Clock } from 'lucide-react';

export default function DestinationSearch({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [region, setRegion] = useState('All Regions');
  const [vibe, setVibe] = useState('All Island Vibes');
  const [date, setDate] = useState('');
  const [adults, setAdults] = useState(2);
  const [childrenCount, setChildrenCount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch({
        searchQuery,
        region,
        vibe,
        date,
        adults,
        childrenCount,
      });
    }
  };

  return (
    <div className="dest-search-wrapper">
      <style>{`
        .dest-search-wrapper {
          position: relative;
          z-index: 20;
          max-width: 1180px;
          margin: -60px auto 70px;
          padding: 0 24px;
        }

        .dest-search-card {
          background: #ffffff;
          backdrop-filter: blur(25px);
          -webkit-backdrop-filter: blur(25px);
          border: 2px solid #e2e8f0;
          border-radius: 26px;
          padding: 32px 36px;
          box-shadow: 0 24px 60px rgba(0, 45, 98, 0.14), 0 0 30px rgba(13, 148, 136, 0.08);
        }
        @media (max-width: 768px) {
          .dest-search-card { padding: 22px; }
        }

        .dest-search-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 900; color: #F06543;
          letter-spacing: 0.15em; text-transform: uppercase;
          display: flex; align-items: center; justify-content: space-between;
          margin-bottom: 20px;
        }

        .dest-search-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr 1fr 1fr;
          gap: 16px; margin-bottom: 24px;
        }
        @media (max-width: 1024px) {
          .dest-search-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 580px) {
          .dest-search-grid { grid-template-columns: 1fr; }
        }

        .dest-search-field {
          display: flex; flex-direction: column; gap: 6px;
        }

        .dest-field-label {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 800; color: #64748b;
          letter-spacing: 0.08em; text-transform: uppercase;
        }

        .dest-field-input-box {
          background: #f8fafc;
          border: 1.5px solid #e2e8f0;
          border-radius: 14px; padding: 12px 14px;
          font-family: 'Inter', sans-serif; font-size: 13px; color: #0B2545;
          outline: none; transition: all 0.25s ease;
          display: flex; align-items: center; gap: 10px; width: 100%;
          box-sizing: border-box;
        }
        .dest-field-input-box:focus-within {
          border-color: #F06543;
          background: #ffffff;
          box-shadow: 0 0 0 3px rgba(13, 148, 136, 0.12);
        }

        .dest-field-select {
          background: transparent; color: #0B2545; border: none;
          font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 600;
          width: 100%; outline: none; cursor: pointer;
        }
        .dest-field-select option {
          background: #ffffff; color: #0B2545;
        }

        .dest-counter-btn {
          width: 26px; height: 26px; border-radius: 8px;
          background: rgba(13, 148, 136, 0.12); border: 1.5px solid rgba(13, 148, 136, 0.3);
          color: #F06543; font-weight: 900; cursor: pointer;
          display: inline-flex; align-items: center; justify-content: center;
          transition: all 0.2s ease;
        }
        .dest-counter-btn:hover { background: #F06543; color: #ffffff; }

        .dest-search-submit-btn {
          width: 100%;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 900; letter-spacing: 0.08em;
          color: #ffffff; background: linear-gradient(135deg, #FF6B4A, #F06543);
          border: none; padding: 15px 28px; border-radius: 14px;
          cursor: pointer; display: inline-flex; align-items: center; justify-content: center;
          gap: 8px; transition: all 0.3s ease;
          box-shadow: 0 6px 22px rgba(0, 45, 98, 0.28);
        }
        .dest-search-submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0, 45, 98, 0.4);
          background: linear-gradient(135deg, #F06543, #FF6B4A);
        }
      `}</style>

      <form className="dest-search-card" onSubmit={handleSubmit}>
        <div className="dest-search-title">
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Search size={15} color="#F06543" />
            <span>FIND YOUR ANDAMAN ISLAND ESCAPE</span>
          </div>
          <span style={{ fontSize: 11, color: '#64748b', fontWeight: 700, fontFamily: "'Inter', sans-serif" }}>
            Real-Time Island Explorer
          </span>
        </div>

        <div className="dest-search-grid">
          {/* FIELD 1: REGION */}
          <div className="dest-search-field">
            <label className="dest-field-label">ISLAND REGION</label>
            <div className="dest-field-input-box">
              <MapPin size={16} color="#F06543" style={{ flexShrink: 0 }} />
              <select
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className="dest-field-select"
              >
                <option value="All Regions">All Regions (572 Isles)</option>
                <option value="South Andaman">South Andaman (Havelock, Neil, PB)</option>
                <option value="Middle Andaman">Middle Andaman (Baratang, Rangat)</option>
                <option value="North Andaman">North Andaman (Diglipur, Mayabunder)</option>
                <option value="Nicobar">Nicobar Archipelago</option>
              </select>
            </div>
          </div>

          {/* FIELD 2: ISLAND VIBE */}
          <div className="dest-search-field">
            <label className="dest-field-label">ISLAND VIBE</label>
            <div className="dest-field-input-box">
              <Compass size={16} color="#F06543" style={{ flexShrink: 0 }} />
              <select
                value={vibe}
                onChange={(e) => setVibe(e.target.value)}
                className="dest-field-select"
              >
                <option value="All Island Vibes">All Island Vibes</option>
                <option value="Beaches & Scuba">Beaches & Scuba Diving</option>
                <option value="Heritage & Capital">Heritage & Capital Gateway</option>
                <option value="Eco Mangrove Safari">Eco Mangrove Safaris</option>
                <option value="Peaks & Sandbars">Peaks & Twin Sandbars</option>
              </select>
            </div>
          </div>

          {/* FIELD 3: TRAVEL MONTH */}
          <div className="dest-search-field">
            <label className="dest-field-label">TRAVEL DATE / MONTH</label>
            <div className="dest-field-input-box">
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

          {/* FIELD 4: GUEST TRAVELERS */}
          <div className="dest-search-field">
            <label className="dest-field-label">GUEST TRAVELERS</label>
            <div className="dest-field-input-box" style={{ justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <Users size={16} color="#F06543" />
                <span style={{ fontSize: 13, fontWeight: 700, color: '#0B2545' }}>
                  {adults} Ad{childrenCount > 0 ? `, ${childrenCount} Ch` : ''}
                </span>
              </div>
              <div style={{ display: 'flex', gap: 4 }}>
                <button
                  type="button"
                  className="dest-counter-btn"
                  onClick={() => setAdults(Math.max(1, adults - 1))}
                  title="Decrease Adults"
                >
                  -
                </button>
                <button
                  type="button"
                  className="dest-counter-btn"
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
        <button type="submit" className="dest-search-submit-btn">
          <span>SEARCH ISLAND DESTINATIONS</span>
          <Search size={15} />
        </button>
      </form>
    </div>
  );
}
