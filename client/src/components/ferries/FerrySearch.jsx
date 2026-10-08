// src/components/ferries/FerrySearch.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Floating Premium Glass Ferry Search Panel Component

import React, { useState } from 'react';
import { Search, Calendar, Users, MapPin, Loader2, RefreshCw, Ship } from 'lucide-react';

const LOCATIONS = [
  'Port Blair',
  'Havelock Island',
  'Neil Island',
  'Baratang',
  'Rangat',
  'Diglipur',
];

export default function FerrySearch({ onSearch, isSearching }) {
  const [fromLoc, setFromLoc] = useState('Port Blair');
  const [toLoc, setToLoc] = useState('Havelock Island');
  const [travelDate, setTravelDate] = useState('2026-08-20');
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch({
        from: fromLoc,
        to: toLoc,
        date: travelDate,
        travelers: `${adults} Adult${adults > 1 ? 's' : ''}${children > 0 ? `, ${children} Child` : ''}`,
      });
    }
  };

  const handleSwap = () => {
    const temp = fromLoc;
    setFromLoc(toLoc);
    setToLoc(temp);
  };

  return (
    <div id="ferry-search-panel" className="ferry-search-root">
      <style>{`
        .ferry-search-root {
          max-width: 1240px;
          margin: -50px auto 48px;
          padding: 0 24px;
          position: relative;
          z-index: 10;
        }

        .ferry-search-card {
          background: #f8fafc;
          backdrop-filter: blur(25px);
          -webkit-backdrop-filter: blur(25px);
          border: 1.5px solid #e2e8f0;
          border-radius: 24px;
          padding: 28px 32px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6), 0 0 30px rgba(22, 217, 255, 0.1);
        }
        @media (max-width: 640px) {
          .ferry-search-card { padding: 20px 18px; margin-top: -30px; }
        }

        .ferry-search-title-row {
          display: flex; align-items: center; justify-content: space-between;
          margin-bottom: 20px; flex-wrap: wrap; gap: 12px;
        }

        .ferry-search-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1.2fr auto;
          gap: 14px; align-items: end;
        }
        @media (max-width: 1024px) {
          .ferry-search-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .ferry-search-grid { grid-template-columns: 1fr; }
        }

        .search-field-box {
          display: flex; flex-direction: column; gap: 6px;
        }
        .search-field-lbl {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 800;
          letter-spacing: 0.12em; color: #b0c9d6; text-transform: uppercase;
        }

        .search-select, .search-input {
          font-family: 'Inter', sans-serif;
          font-size: 13.5px; color: #334155;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 14px; padding: 12px 14px;
          outline: none; transition: all 0.25s ease; width: 100%; box-sizing: border-box;
        }
        .search-select:focus, .search-input:focus {
          border-color: #F06543; box-shadow: 0 0 16px rgba(22, 217, 255, 0.25);
        }

        .search-submit-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; letter-spacing: 0.08em;
          color: #ffffff; background: linear-gradient(135deg, #FF6B4A, #F06543);
          border: none; padding: 13px 24px; border-radius: 14px;
          cursor: pointer; display: inline-flex; align-items: center; justify-content: center; gap: 6px;
          transition: all 0.3s ease; box-shadow: 0 6px 20px rgba(22, 217, 255, 0.3); height: 45px;
        }
        .search-submit-btn:hover:not(:disabled) {
          transform: translateY(-2px); box-shadow: 0 10px 28px rgba(22, 217, 255, 0.5);
        }
      `}</style>

      <div className="ferry-search-card">
        <div className="ferry-search-title-row">
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Ship size={18} color="#F06543" />
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 800, color: '#334155', letterSpacing: '0.04em' }}>
              FIND YOUR FERRY
            </span>
          </div>

          <button
            onClick={handleSwap}
            style={{
              fontFamily: "'Space Grotesk', sans-serif", fontSize: 12.5, fontWeight: 800,
              color: '#F06543', background: 'rgba(33, 230, 193, 0.1)', border: '1px solid rgba(33, 230, 193, 0.3)',
              padding: '5px 12px', borderRadius: 12, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 5,
            }}
          >
            <RefreshCw size={11} /> SWAP ROUTE
          </button>
        </div>

        <form onSubmit={handleSearchSubmit} className="ferry-search-grid">
          {/* FROM */}
          <div className="search-field-box">
            <label className="search-field-lbl">FROM</label>
            <select value={fromLoc} onChange={(e) => setFromLoc(e.target.value)} className="search-select">
              {LOCATIONS.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>

          {/* TO */}
          <div className="search-field-box">
            <label className="search-field-lbl">TO</label>
            <select value={toLoc} onChange={(e) => setToLoc(e.target.value)} className="search-select">
              {LOCATIONS.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>

          {/* DATE */}
          <div className="search-field-box">
            <label className="search-field-lbl">TRAVEL DATE</label>
            <input
              type="date"
              value={travelDate}
              onChange={(e) => setTravelDate(e.target.value)}
              className="search-input"
            />
          </div>

          {/* TRAVELERS */}
          <div className="search-field-box">
            <label className="search-field-lbl">PASSENGERS</label>
            <div style={{ display: 'flex', gap: 6 }}>
              <select
                value={adults}
                onChange={(e) => setAdults(Number(e.target.value))}
                className="search-select"
                style={{ padding: '12px 8px' }}
              >
                <option value={1}>1 Adult</option>
                <option value={2}>2 Adults</option>
                <option value={3}>3 Adults</option>
                <option value={4}>4 Adults</option>
                <option value={5}>5+ Adults</option>
              </select>
              <select
                value={children}
                onChange={(e) => setChildren(Number(e.target.value))}
                className="search-select"
                style={{ padding: '12px 8px' }}
              >
                <option value={0}>0 Child</option>
                <option value={1}>1 Child</option>
                <option value={2}>2 Children</option>
              </select>
            </div>
          </div>

          {/* SUBMIT BUTTON */}
          <button type="submit" disabled={isSearching} className="search-submit-btn">
            {isSearching ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                <span>SEARCHING...</span>
              </>
            ) : (
              <>
                <Search size={15} />
                <span>SEARCH FERRIES</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
