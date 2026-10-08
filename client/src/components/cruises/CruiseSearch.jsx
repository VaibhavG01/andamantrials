// src/components/cruises/CruiseSearch.jsx
import React, { useState } from 'react';
import { Search, Users, Calendar, Clock } from 'lucide-react';

export default function CruiseSearch({ onSearch }) {
  const [cruiseType, setCruiseType] = useState('All Cruises');
  const [date, setDate] = useState('');
  const [adults, setAdults] = useState(2);
  const [childrenCount, setChildrenCount] = useState(0);
  const [duration, setDuration] = useState('Any Duration');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch({ cruiseType, date, adults, childrenCount, duration });
    }
  };

  return (
    <div className="cruise-search-wrapper">
      <style>{`
        .cruise-search-wrapper {
          position: relative;
          z-index: 10;
          max-width: 1100px;
          margin: -60px auto 70px;
          padding: 0 24px;
        }

        .cruise-search-card {
          background: #f8fafc;
          backdrop-filter: blur(25px);
          -webkit-backdrop-filter: blur(25px);
          border: 1.5px solid #e2e8f0;
          border-radius: 24px;
          padding: 32px 36px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(22, 217, 255, 0.08);
        }
        @media (max-width: 768px) {
          .cruise-search-card { padding: 24px; }
        }

        .search-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; color: #F06543;
          letter-spacing: 0.15em; text-transform: uppercase;
          display: flex; align-items: center; gap: 8px;
          margin-bottom: 20px;
        }

        .search-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px; margin-bottom: 24px;
        }
        @media (max-width: 960px) {
          .search-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 580px) {
          .search-grid { grid-template-columns: 1fr; }
        }

        .search-field {
          display: flex; flex-direction: column; gap: 6px;
        }

        .field-label {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 800; color: #64748b;
          letter-spacing: 0.08em; text-transform: uppercase;
        }

        .field-input-box {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 14px; padding: 12px 14px;
          font-family: 'Inter', sans-serif; fontSize: 13; color: #334155;
          outline: none; transition: border-color 0.25s ease;
          display: flex; align-items: center; gap: 10px; width: 100%;
          box-sizing: border-box;
        }
        .field-input-box:focus-within {
          border-color: #F06543;
          box-shadow: 0 0 16px rgba(33, 230, 193, 0.2);
        }

        .field-select {
          background: transparent; color: #0f172a; border: none; color: #0f172a;
          font-family: 'Inter', sans-serif; font-size: 13px;
          width: 100%; outline: none; cursor: pointer;
        }
        .field-select option {
          background: #ffffff; color: #ffffff;
        }

        .counter-btn {
          width: 26px; height: 26px; border-radius: 8px;
          background: rgba(22, 217, 255, 0.15); border: 1px solid rgba(22, 217, 255, 0.3);
          color: #F06543; font-weight: bold; cursor: pointer;
          display: inline-flex; align-items: center; justify-content: center;
        }
        .counter-btn:hover { background: rgba(22, 217, 255, 0.3); }

        .search-submit-btn {
          width: 100%;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 800; letter-spacing: 0.1em;
          color: #ffffff; background: linear-gradient(135deg, #FF6B4A, #F06543);
          border: none; padding: 14px 28px; border-radius: 14px;
          cursor: pointer; display: inline-flex; align-items: center; justify-content: center;
          gap: 8px; transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(22, 217, 255, 0.35);
        }
        .search-submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(22, 217, 255, 0.55);
        }
      `}</style>

      <form className="cruise-search-card" onSubmit={handleSubmit}>
        <div className="search-title">
          <Search size={15} color="#F06543" />
          <span>FIND YOUR CRUISE</span>
        </div>

        <div className="search-grid">
          {/* FIELD 1: CRUISE TYPE */}
          <div className="search-field">
            <label className="field-label">CRUISE TYPE</label>
            <div className="field-input-box">
              <select
                value={cruiseType}
                onChange={(e) => setCruiseType(e.target.value)}
                className="field-select"
              >
                <option value="All Cruises">All Cruise Types</option>
                <option value="Sunset Cruise">Sunset Cruise</option>
                <option value="Luxury Cruise">Luxury Cruise</option>
                <option value="Private Cruise">Private Cruise</option>
                <option value="Couple Cruise">Couple / Honeymoon</option>
                <option value="Family Cruise">Family Cruise</option>
                <option value="Sightseeing Cruise">Island Sightseeing</option>
              </select>
            </div>
          </div>

          {/* FIELD 2: DATE */}
          <div className="search-field">
            <label className="field-label">PREFERRED DATE</label>
            <div className="field-input-box">
              <Calendar size={15} color="#F06543" />
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                style={{ background: 'transparent', border: 'none', color: '#0f172a', outline: 'none', fontFamily: "'Inter', sans-serif", fontSize: 12.5, width: '100%' }}
              />
            </div>
          </div>

          {/* FIELD 3: TRAVELERS */}
          <div className="search-field">
            <label className="field-label">TRAVELERS</label>
            <div className="field-input-box" style={{ justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <Users size={15} color="#F06543" />
                <span style={{ fontSize: 12 }}>{adults} Ad, {childrenCount} Ch</span>
              </div>
              <div style={{ display: 'flex', gap: 4 }}>
                <button type="button" className="counter-btn" onClick={() => setAdults(Math.max(1, adults - 1))}>-</button>
                <button type="button" className="counter-btn" onClick={() => setAdults(adults + 1)}>+</button>
              </div>
            </div>
          </div>

          {/* FIELD 4: DURATION */}
          <div className="search-field">
            <label className="field-label">DURATION</label>
            <div className="field-input-box">
              <Clock size={15} color="#F06543" />
              <select
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="field-select"
              >
                <option value="Any Duration">Any Duration</option>
                <option value="1–2 Hours">1–2 Hours</option>
                <option value="2–4 Hours">2–4 Hours</option>
                <option value="Half Day">Half Day</option>
                <option value="Full Day">Full Day</option>
              </select>
            </div>
          </div>
        </div>

        <button type="submit" className="search-submit-btn">
          <span>SEARCH CRUISES</span>
          <Search size={14} />
        </button>
      </form>
    </div>
  );
}
