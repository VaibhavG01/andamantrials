// src/components/stays/StaySearch.jsx
import React, { useState } from 'react';
import { Search, MapPin, Calendar, Users, Home } from 'lucide-react';

export default function StaySearch({ onSearch }) {
  const [destination, setDestination] = useState('All');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [adults, setAdults] = useState(2);
  const [rooms, setRooms] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch({ destination, checkIn, checkOut, adults, rooms });
    }
  };

  return (
    <div className="stay-search-wrapper">
      <style>{`
        .stay-search-wrapper {
          position: relative; z-index: 10;
          max-width: 1100px; margin: -60px auto 70px; padding: 0 24px;
        }

        .stay-search-card {
          background: #f8fafc;
          backdrop-filter: blur(25px); -webkit-backdrop-filter: blur(25px);
          border: 1.5px solid #e2e8f0;
          border-radius: 20px; padding: 32px 36px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(22, 217, 255, 0.08);
        }
        @media (max-width: 768px) {
          .stay-search-card { padding: 24px; }
        }

        .search-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; color: #F06543;
          letter-spacing: 0.15em; text-transform: uppercase;
          display: flex; align-items: center; gap: 8px; margin-bottom: 20px;
        }

        .search-grid {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 24px;
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

        .field-box {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 14px; padding: 12px 14px;
          font-family: 'Inter', sans-serif; font-size: 13px; color: #0f172a;
          outline: none; transition: border-color 0.25s ease;
          display: flex; align-items: center; gap: 10px; width: 100%; box-sizing: border-box;
        }
        .field-box:focus-within {
          border-color: #F06543; box-shadow: 0 0 16px rgba(33, 230, 193, 0.2);
        }

        .field-select {
          background: transparent; color: #0f172a; border: none; color: #0f172a;
          font-family: 'Inter', sans-serif; font-size: 13px;
          width: 100%; outline: none; cursor: pointer;
        }
        .field-select option { background: #ffffff; color: #ffffff; }

        .search-submit-btn {
          width: 100%;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 800; letter-spacing: 0.1em;
          color: #ffffff; background: linear-gradient(135deg, #FF6B4A, #F06543);
          border: none; padding: 14px 28px; border-radius: 14px;
          cursor: pointer; display: inline-flex; align-items: center; justify-content: center;
          gap: 8px; transition: all 0.3s ease; box-shadow: 0 4px 20px rgba(22, 217, 255, 0.35);
        }
        .search-submit-btn:hover {
          transform: translateY(-2px); box-shadow: 0 8px 28px rgba(22, 217, 255, 0.55);
        }
      `}</style>

      <form className="stay-search-card" onSubmit={handleSubmit}>
        <div className="search-title">
          <Search size={15} color="#F06543" />
          <span>FIND YOUR PERFECT STAY</span>
        </div>

        <div className="search-grid">
          {/* DESTINATION */}
          <div className="search-field">
            <label className="field-label">DESTINATION</label>
            <div className="field-box">
              <MapPin size={15} color="#F06543" />
              <select value={destination} onChange={(e) => setDestination(e.target.value)} className="field-select">
                <option value="All">All Destinations</option>
                <option value="Port Blair">Port Blair</option>
                <option value="Havelock Island">Havelock Island</option>
                <option value="Neil Island">Neil Island</option>
                <option value="Baratang">Baratang</option>
                <option value="Rangat">Rangat</option>
                <option value="Diglipur">Diglipur</option>
              </select>
            </div>
          </div>

          {/* CHECK-IN */}
          <div className="search-field">
            <label className="field-label">CHECK-IN</label>
            <div className="field-box">
              <Calendar size={15} color="#F06543" />
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                style={{ background: 'transparent', border: 'none', color: '#0f172a', outline: 'none', width: '100%', fontSize: 12.5 }}
              />
            </div>
          </div>

          {/* CHECK-OUT */}
          <div className="search-field">
            <label className="field-label">CHECK-OUT</label>
            <div className="field-box">
              <Calendar size={15} color="#F06543" />
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                style={{ background: 'transparent', border: 'none', color: '#0f172a', outline: 'none', width: '100%', fontSize: 12.5 }}
              />
            </div>
          </div>

          {/* GUESTS & ROOMS */}
          <div className="search-field">
            <label className="field-label">GUESTS & ROOMS</label>
            <div className="field-box">
              <Users size={15} color="#F06543" />
              <select value={`${adults}-${rooms}`} onChange={(e) => {
                const [a, r] = e.target.value.split('-');
                setAdults(Number(a)); setRooms(Number(r));
              }} className="field-select">
                <option value="1-1">1 Guest, 1 Room</option>
                <option value="2-1">2 Guests, 1 Room</option>
                <option value="4-2">4 Guests, 2 Rooms</option>
                <option value="6-3">6+ Family Stay</option>
              </select>
            </div>
          </div>
        </div>

        <button type="submit" className="search-submit-btn">
          <span>SEARCH STAYS</span>
          <Search size={14} />
        </button>
      </form>
    </div>
  );
}
