// src/components/activities/ActivitySearch.jsx
import React, { useState } from 'react';
import { Search, Users, Calendar, MapPin, SlidersHorizontal } from 'lucide-react';

export default function ActivitySearch({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [island, setIsland] = useState('All Locations');
  const [category, setCategory] = useState('All');
  const [date, setDate] = useState('');
  const [adults, setAdults] = useState(2);
  const [childrenCount, setChildrenCount] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch({
        searchQuery,
        island,
        category,
        date,
        adults,
        childrenCount,
        maxPrice,
      });
    }
  };

  return (
    <div className="act-search-wrapper">
      <style>{`
        .act-search-wrapper {
          position: relative;
          z-index: 20;
          max-width: 1180px;
          margin: -60px auto 70px;
          padding: 0 24px;
        }

        .act-search-card {
          background: #ffffff;
          backdrop-filter: blur(25px);
          -webkit-backdrop-filter: blur(25px);
          border: 2px solid #e2e8f0;
          border-radius: 26px;
          padding: 32px 36px;
          box-shadow: 0 24px 60px rgba(0, 45, 98, 0.14), 0 0 30px rgba(13, 148, 136, 0.08);
        }
        @media (max-width: 768px) {
          .act-search-card { padding: 22px; }
        }

        .search-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 900; color: #F06543;
          letter-spacing: 0.15em; text-transform: uppercase;
          display: flex; align-items: center; justify-content: space-between;
          margin-bottom: 20px;
        }

        .search-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr 1fr 1fr;
          gap: 16px; margin-bottom: 24px;
        }
        @media (max-width: 1024px) {
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
          font-size: 12px; font-weight: 800; color: #64748b;
          letter-spacing: 0.08em; text-transform: uppercase;
        }

        .field-input-box {
          background: #f8fafc;
          border: 1.5px solid #e2e8f0;
          border-radius: 14px; padding: 12px 14px;
          font-family: 'Inter', sans-serif; font-size: 13px; color: #0B2545;
          outline: none; transition: all 0.25s ease;
          display: flex; align-items: center; gap: 10px; width: 100%;
          box-sizing: border-box;
        }
        .field-input-box:focus-within {
          border-color: #F06543;
          background: #ffffff;
          box-shadow: 0 0 0 3px rgba(13, 148, 136, 0.12);
        }

        .field-input {
          background: transparent; color: #0B2545; border: none;
          font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 600;
          width: 100%; outline: none;
        }

        .field-select {
          background: transparent; color: #0B2545; border: none;
          font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 600;
          width: 100%; outline: none; cursor: pointer;
        }
        .field-select option {
          background: #ffffff; color: #0B2545;
        }

        .counter-btn {
          width: 26px; height: 26px; border-radius: 8px;
          background: rgba(13, 148, 136, 0.12); border: 1.5px solid rgba(13, 148, 136, 0.3);
          color: #F06543; font-weight: 900; cursor: pointer;
          display: inline-flex; align-items: center; justify-content: center;
          transition: all 0.2s ease;
        }
        .counter-btn:hover { background: #F06543; color: #ffffff; }

        .search-submit-btn {
          width: 100%;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 900; letter-spacing: 0.08em;
          color: #ffffff; background: linear-gradient(135deg, #FF6B4A, #F06543);
          border: none; padding: 15px 28px; border-radius: 14px;
          cursor: pointer; display: inline-flex; align-items: center; justify-content: center;
          gap: 8px; transition: all 0.3s ease;
          box-shadow: 0 6px 22px rgba(0, 45, 98, 0.28);
        }
        .search-submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0, 45, 98, 0.4);
          background: linear-gradient(135deg, #F06543, #FF6B4A);
        }
      `}</style>

      <form className="act-search-card" onSubmit={handleSubmit}>
        <div className="search-title">
          <div className="flex items-center gap-2">
            <Search size={16} color="#F06543" />
            <span>FIND YOUR ISLAND ADVENTURE</span>
          </div>
          <span className="text-[11px] font-mono text-slate-400 font-bold hidden sm:inline">LIVE AVAILABILITY</span>
        </div>

        <div className="search-grid">
          {/* FIELD 1: SEARCH / ACTIVITY */}
          <div className="search-field">
            <label className="field-label">EXPERIENCE / KEYWORD</label>
            <div className="field-input-box">
              <Search size={15} className="text-[#F06543] shrink-0" />
              <input
                type="text"
                placeholder="Scuba, Kayak, Sea Walk..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="field-input"
              />
            </div>
          </div>

          {/* FIELD 2: ISLAND LOCATION */}
          <div className="search-field">
            <label className="field-label">SELECT ISLAND</label>
            <div className="field-input-box">
              <MapPin size={15} className="text-[#F06543] shrink-0" />
              <select
                value={island}
                onChange={(e) => setIsland(e.target.value)}
                className="field-select"
              >
                <option value="All Locations">All Islands</option>
                <option value="Havelock">Havelock Island (Swaraj Dweep)</option>
                <option value="Port Blair">Port Blair & Corbyn's Cove</option>
                <option value="Neil Island">Neil Island (Shaheed Dweep)</option>
                <option value="North Bay">North Bay Lighthouse</option>
              </select>
            </div>
          </div>

          {/* FIELD 3: DATE */}
          <div className="search-field">
            <label className="field-label">PREFERRED DATE</label>
            <div className="field-input-box">
              <Calendar size={15} className="text-[#F06543] shrink-0" />
              <input
                type="date"
                min={new Date().toISOString().split('T')[0]}
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="field-input"
              />
            </div>
          </div>

          {/* FIELD 4: GUESTS */}
          <div className="search-field">
            <label className="field-label">PARTICIPANTS</label>
            <div className="field-input-box" style={{ justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <Users size={15} className="text-[#F06543]" />
                <span style={{ fontSize: 13, fontWeight: 700, color: '#0B2545' }}>{adults} Adults{childrenCount > 0 ? `, ${childrenCount} Ch` : ''}</span>
              </div>
              <div style={{ display: 'flex', gap: 4 }}>
                <button type="button" className="counter-btn" onClick={() => setAdults(Math.max(1, adults - 1))}>-</button>
                <button type="button" className="counter-btn" onClick={() => setAdults(adults + 1)}>+</button>
              </div>
            </div>
          </div>
        </div>

        <button type="submit" className="search-submit-btn">
          <span>FIND ADVENTURE SLOTS</span>
          <Search size={15} />
        </button>
      </form>
    </div>
  );
}
