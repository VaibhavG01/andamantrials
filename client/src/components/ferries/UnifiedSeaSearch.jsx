// src/components/ferries/UnifiedSeaSearch.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Unified Universal Search & Slot Engine for Inter-Island Ferries & Luxury Cruises

import React, { useState } from 'react';
import { 
  Ship, Anchor, Search, Calendar, Users, MapPin, ArrowRightLeft, 
  Sparkles, CheckCircle2, ChevronDown, Compass, Plus, Minus, Info
} from 'lucide-react';

const FERRY_LOCATIONS = [
  'Port Blair',
  'Havelock Island (Swaraj Dweep)',
  'Neil Island (Shaheed Dweep)',
  'Baratang Island',
  'Rangat / Middle Andaman',
  'Diglipur / North Andaman',
];

const CRUISE_EXPERIENCES = [
  'All Sunset & Scenic Cruises',
  'Andaman Sunset Sail (Port Blair Harbour)',
  'Private Ocean Yacht Charter',
  'Havelock Island Coastal Sightseeing',
  'Romantic Couple Escape Cruise',
  'Coral Safari Semi-Submarine Reef Cruise',
  'Evening Dinner & Starlight Cruise',
];

export default function UnifiedSeaSearch({ onSearch, activeCategory = 'FERRY', onCategoryChange }) {
  const [category, setCategory] = useState(activeCategory); // 'FERRY' or 'CRUISE'
  const [tripType, setTripType] = useState('ONE_WAY'); // 'ONE_WAY' or 'ROUND_TRIP'
  
  // Ferry fields
  const [fromLoc, setFromLoc] = useState('Port Blair');
  const [toLoc, setToLoc] = useState('Havelock Island (Swaraj Dweep)');
  const [departureDate, setDepartureDate] = useState(() => {
    const today = new Date();
    today.setDate(today.getDate() + 1);
    return today.toISOString().split('T')[0];
  });
  const [returnDate, setReturnDate] = useState(() => {
    const today = new Date();
    today.setDate(today.getDate() + 3);
    return today.toISOString().split('T')[0];
  });

  // Cruise fields
  const [cruisePort, setCruisePort] = useState('Port Blair Harbour');
  const [cruiseExperience, setCruiseExperience] = useState('All Sunset & Scenic Cruises');

  // Passenger state
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [passengerDropdownOpen, setPassengerDropdownOpen] = useState(false);

  const totalPassengers = adults + children + infants;

  const handleSwap = () => {
    const temp = fromLoc;
    setFromLoc(toLoc);
    setToLoc(temp);
  };

  const handleCategorySwitch = (cat) => {
    setCategory(cat);
    if (onCategoryChange) onCategoryChange(cat);
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    setPassengerDropdownOpen(false);

    if (category === 'FERRY') {
      onSearch({
        category: 'FERRY',
        tripType,
        from: fromLoc,
        to: toLoc,
        departureDate,
        returnDate: tripType === 'ROUND_TRIP' ? returnDate : null,
        adults,
        children,
        infants,
        totalPassengers,
      });
    } else {
      onSearch({
        category: 'CRUISE',
        port: cruisePort,
        experience: cruiseExperience,
        date: departureDate,
        adults,
        children,
        infants,
        totalPassengers,
      });
    }
  };

  const handleQuickRoute = (from, to, cat = 'FERRY') => {
    setCategory(cat);
    setFromLoc(from);
    setToLoc(to);
    onSearch({
      category: cat,
      tripType: 'ONE_WAY',
      from,
      to,
      departureDate,
      adults,
      children,
      infants,
      totalPassengers,
    });
  };

  return (
    <div id="unified-sea-search-panel" className="unified-search-root">
      <style>{`
        .unified-search-root {
          max-width: 1240px;
          margin: -50px auto 40px;
          padding: 0 24px;
          position: relative;
          z-index: 20;
        }

        .search-main-card {
          background: #ffffff;
          border-radius: 28px;
          border: 1.5px solid #E2E8F0;
          box-shadow: 0 20px 60px rgba(11, 37, 69, 0.12), 0 0 40px rgba(240, 101, 67, 0.05);
          overflow: hidden;
        }

        .search-tab-bar {
          display: flex;
          align-items: center;
          background: #F8FAFC;
          border-bottom: 1.5px solid #E2E8F0;
          padding: 8px 16px;
          gap: 10px;
          flex-wrap: wrap;
        }

        .tab-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          border-radius: 14px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 800;
          border: none;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .tab-btn.active {
          background: #0B2545;
          color: #ffffff;
          box-shadow: 0 4px 14px rgba(11, 37, 69, 0.25);
        }

        .tab-btn.inactive {
          background: transparent;
          color: #64748B;
        }

        .tab-btn.inactive:hover {
          background: #EEF2F6;
          color: #0B2545;
        }

        .trip-type-toggle {
          margin-left: auto;
          display: flex;
          align-items: center;
          background: #ffffff;
          border: 1px solid #CBD5E1;
          border-radius: 10px;
          padding: 3px;
          gap: 4px;
        }

        .toggle-btn {
          border: none;
          background: transparent;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11.5px;
          font-weight: 800;
          padding: 5px 12px;
          border-radius: 8px;
          cursor: pointer;
          color: #64748B;
          transition: all 0.2s ease;
        }

        .toggle-btn.active {
          background: #F06543;
          color: #ffffff;
        }

        .search-form-body {
          padding: 24px 28px;
        }

        .search-fields-grid {
          display: grid;
          grid-template-columns: 1.3fr 1.3fr 1fr 1fr auto;
          gap: 14px;
          align-items: flex-end;
        }

        @media (max-width: 1080px) {
          .search-fields-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .search-fields-grid {
            grid-template-columns: 1fr;
          }
        }

        .field-group {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .field-label {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #64748B;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .field-input-box {
          position: relative;
          display: flex;
          align-items: center;
          background: #F8FAFC;
          border: 1.5px solid #E2E8F0;
          border-radius: 14px;
          padding: 0 14px;
          min-height: 52px;
          transition: all 0.2s ease;
        }

        .field-input-box:focus-within {
          border-color: #F06543;
          background: #ffffff;
          box-shadow: 0 0 0 3px rgba(240, 101, 67, 0.12);
        }

        .field-select, .field-input {
          width: 100%;
          border: none;
          background: transparent;
          font-family: 'Inter', sans-serif;
          font-size: 13.5px;
          font-weight: 700;
          color: #0B2545;
          outline: none;
          cursor: pointer;
        }

        .swap-loc-btn {
          position: absolute;
          right: -12px;
          top: 36px;
          z-index: 5;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #ffffff;
          border: 1.5px solid #CBD5E1;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #64748B;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          transition: all 0.2s ease;
        }

        .swap-loc-btn:hover {
          background: #F06543;
          color: #ffffff;
          border-color: #F06543;
          transform: rotate(180deg);
        }

        @media (max-width: 1080px) {
          .swap-loc-btn { display: none; }
        }

        .btn-search-trigger {
          background: linear-gradient(135deg, #FF6B4A, #F06543);
          border: none;
          color: #ffffff;
          padding: 0 28px;
          min-height: 52px;
          border-radius: 14px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 14px;
          font-weight: 900;
          letter-spacing: 0.04em;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          box-shadow: 0 8px 24px rgba(240, 101, 67, 0.35);
          transition: all 0.25s ease;
          width: 100%;
        }

        .btn-search-trigger:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(240, 101, 67, 0.5);
        }

        .passengers-popover {
          position: absolute;
          top: calc(100% + 8px);
          left: 0;
          width: 290px;
          background: #ffffff;
          border: 1.5px solid #E2E8F0;
          border-radius: 20px;
          box-shadow: 0 20px 50px rgba(11, 37, 69, 0.18);
          padding: 18px;
          z-index: 100;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .pax-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .pax-counter {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .counter-btn {
          width: 32px;
          height: 32px;
          border-radius: 10px;
          border: 1.5px solid #CBD5E1;
          background: #F8FAFC;
          color: #0B2545;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .counter-btn:hover:not(:disabled) {
          background: #0B2545;
          color: #ffffff;
          border-color: #0B2545;
        }

        .counter-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .quick-routes-bar {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 18px;
          padding-top: 16px;
          border-top: 1px dashed #E2E8F0;
          flex-wrap: wrap;
        }

        .quick-route-pill {
          background: #F1F5F9;
          border: 1px solid #E2E8F0;
          border-radius: 10px;
          padding: 5px 12px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11.5px;
          font-weight: 800;
          color: #0B2545;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .quick-route-pill:hover {
          background: #FFF1EE;
          border-color: #FFB088;
          color: #F06543;
          transform: translateY(-1px);
        }
      `}</style>

      <div className="search-main-card">
        {/* TAB BAR (FERRIES vs SUNSET CRUISES) */}
        <div className="search-tab-bar">
          <button
            type="button"
            className={`tab-btn ${category === 'FERRY' ? 'active' : 'inactive'}`}
            onClick={() => handleCategorySwitch('FERRY')}
          >
            <Ship size={16} />
            Inter-Island Ferry Transfers
          </button>
          <button
            type="button"
            className={`tab-btn ${category === 'CRUISE' ? 'active' : 'inactive'}`}
            onClick={() => handleCategorySwitch('CRUISE')}
          >
            <Anchor size={16} />
            Sunset, Dinner & Luxury Cruises
          </button>

          {category === 'FERRY' && (
            <div className="trip-type-toggle">
              <button
                type="button"
                className={`toggle-btn ${tripType === 'ONE_WAY' ? 'active' : ''}`}
                onClick={() => setTripType('ONE_WAY')}
              >
                One Way
              </button>
              <button
                type="button"
                className={`toggle-btn ${tripType === 'ROUND_TRIP' ? 'active' : ''}`}
                onClick={() => setTripType('ROUND_TRIP')}
              >
                Round Trip
              </button>
            </div>
          )}
        </div>

        {/* SEARCH FORM FIELDS */}
        <form onSubmit={handleSubmit} className="search-form-body">
          {category === 'FERRY' ? (
            <div className="search-fields-grid">
              {/* DEPARTURE ISLAND */}
              <div className="field-group">
                <label className="field-label">
                  <MapPin size={13} color="#F06543" />
                  Departure Island (From)
                </label>
                <div className="field-input-box">
                  <select
                    value={fromLoc}
                    onChange={(e) => setFromLoc(e.target.value)}
                    className="field-select"
                  >
                    {FERRY_LOCATIONS.map((loc) => (
                      <option key={loc} value={loc}>{loc}</option>
                    ))}
                  </select>
                </div>
                <button
                  type="button"
                  title="Swap Origin and Destination"
                  onClick={handleSwap}
                  className="swap-loc-btn"
                >
                  <ArrowRightLeft size={13} />
                </button>
              </div>

              {/* DESTINATION ISLAND */}
              <div className="field-group">
                <label className="field-label">
                  <MapPin size={13} color="#F06543" />
                  Arrival Island (To)
                </label>
                <div className="field-input-box">
                  <select
                    value={toLoc}
                    onChange={(e) => setToLoc(e.target.value)}
                    className="field-select"
                  >
                    {FERRY_LOCATIONS.filter(l => l !== fromLoc).map((loc) => (
                      <option key={loc} value={loc}>{loc}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* TRAVEL DATE */}
              <div className="field-group">
                <label className="field-label">
                  <Calendar size={13} color="#0B2545" />
                  {tripType === 'ROUND_TRIP' ? 'Depart Date' : 'Travel Date'}
                </label>
                <div className="field-input-box">
                  <input
                    type="date"
                    required
                    value={departureDate}
                    onChange={(e) => setDepartureDate(e.target.value)}
                    className="field-input"
                  />
                </div>
              </div>

              {/* PASSENGERS PICKER */}
              <div className="field-group">
                <label className="field-label">
                  <Users size={13} color="#0B2545" />
                  Voyagers / Class
                </label>
                <div
                  className="field-input-box"
                  onClick={() => setPassengerDropdownOpen(!passengerDropdownOpen)}
                  style={{ cursor: 'pointer', justifyContent: 'space-between' }}
                >
                  <span style={{ fontSize: 13, fontWeight: 800, color: '#0B2545' }}>
                    {totalPassengers} Traveler{totalPassengers > 1 ? 's' : ''}
                  </span>
                  <ChevronDown size={15} color="#64748B" />
                </div>

                {passengerDropdownOpen && (
                  <div className="passengers-popover">
                    <div className="pax-row">
                      <div>
                        <div style={{ fontSize: 13, fontWeight: 800, color: '#0B2545' }}>Adults</div>
                        <div style={{ fontSize: 11, color: '#64748B' }}>Age 12+ years</div>
                      </div>
                      <div className="pax-counter">
                        <button
                          type="button"
                          className="counter-btn"
                          disabled={adults <= 1}
                          onClick={() => setAdults(adults - 1)}
                        >
                          <Minus size={13} />
                        </button>
                        <span style={{ fontWeight: 800, minWidth: 16, textAlign: 'center' }}>{adults}</span>
                        <button
                          type="button"
                          className="counter-btn"
                          onClick={() => setAdults(adults + 1)}
                        >
                          <Plus size={13} />
                        </button>
                      </div>
                    </div>

                    <div className="pax-row">
                      <div>
                        <div style={{ fontSize: 13, fontWeight: 800, color: '#0B2545' }}>Children</div>
                        <div style={{ fontSize: 11, color: '#64748B' }}>Age 2–12 years</div>
                      </div>
                      <div className="pax-counter">
                        <button
                          type="button"
                          className="counter-btn"
                          disabled={children <= 0}
                          onClick={() => setChildren(children - 1)}
                        >
                          <Minus size={13} />
                        </button>
                        <span style={{ fontWeight: 800, minWidth: 16, textAlign: 'center' }}>{children}</span>
                        <button
                          type="button"
                          className="counter-btn"
                          onClick={() => setChildren(children + 1)}
                        >
                          <Plus size={13} />
                        </button>
                      </div>
                    </div>

                    <div className="pax-row">
                      <div>
                        <div style={{ fontSize: 13, fontWeight: 800, color: '#0B2545' }}>Infants</div>
                        <div style={{ fontSize: 11, color: '#64748B' }}>Below 2 years (Free)</div>
                      </div>
                      <div className="pax-counter">
                        <button
                          type="button"
                          className="counter-btn"
                          disabled={infants <= 0}
                          onClick={() => setInfants(infants - 1)}
                        >
                          <Minus size={13} />
                        </button>
                        <span style={{ fontWeight: 800, minWidth: 16, textAlign: 'center' }}>{infants}</span>
                        <button
                          type="button"
                          className="counter-btn"
                          onClick={() => setInfants(infants + 1)}
                        >
                          <Plus size={13} />
                        </button>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setPassengerDropdownOpen(false)}
                      style={{
                        background: '#0B2545', color: '#ffffff', border: 'none',
                        padding: '8px 14px', borderRadius: 10, fontSize: 12, fontWeight: 800, cursor: 'pointer'
                      }}
                    >
                      Done
                    </button>
                  </div>
                )}
              </div>

              {/* SEARCH SUBMIT BUTTON */}
              <div>
                <button type="submit" className="btn-search-trigger">
                  <Search size={16} />
                  Find Live Sailings
                </button>
              </div>
            </div>
          ) : (
            <div className="search-fields-grid">
              {/* CRUISE HARBOUR / PORT */}
              <div className="field-group">
                <label className="field-label">
                  <Anchor size={13} color="#F06543" />
                  Departure Port / Harbour
                </label>
                <div className="field-input-box">
                  <select
                    value={cruisePort}
                    onChange={(e) => setCruisePort(e.target.value)}
                    className="field-select"
                  >
                    <option value="Port Blair Harbour">Port Blair Harbour (Phoenix Bay / Haddo)</option>
                    <option value="Havelock Island">Havelock Island (Radhanagar & Coastline)</option>
                    <option value="Neil Island">Neil Island (Bharatpur Sunset)</option>
                  </select>
                </div>
              </div>

              {/* CRUISE EXPERIENCE TYPE */}
              <div className="field-group">
                <label className="field-label">
                  <Sparkles size={13} color="#F06543" />
                  Cruise Experience
                </label>
                <div className="field-input-box">
                  <select
                    value={cruiseExperience}
                    onChange={(e) => setCruiseExperience(e.target.value)}
                    className="field-select"
                  >
                    {CRUISE_EXPERIENCES.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* CRUISE DATE */}
              <div className="field-group">
                <label className="field-label">
                  <Calendar size={13} color="#0B2545" />
                  Sailing Date
                </label>
                <div className="field-input-box">
                  <input
                    type="date"
                    required
                    value={departureDate}
                    onChange={(e) => setDepartureDate(e.target.value)}
                    className="field-input"
                  />
                </div>
              </div>

              {/* GUEST COUNT */}
              <div className="field-group">
                <label className="field-label">
                  <Users size={13} color="#0B2545" />
                  Guests
                </label>
                <div className="field-input-box">
                  <select
                    value={adults}
                    onChange={(e) => setAdults(Number(e.target.value))}
                    className="field-select"
                  >
                    {[1, 2, 3, 4, 5, 6, 8, 10, 15, 20].map((num) => (
                      <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* SUBMIT CRUISE SEARCH */}
              <div>
                <button type="submit" className="btn-search-trigger">
                  <Search size={16} />
                  Find Cruise Slots
                </button>
              </div>
            </div>
          )}

          {/* QUICK ROUTE SHORTCUTS */}
          <div className="quick-routes-bar">
            <span style={{ fontSize: 11, fontWeight: 800, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Popular Routes:
            </span>
            <button
              type="button"
              className="quick-route-pill"
              onClick={() => handleQuickRoute('Port Blair', 'Havelock Island (Swaraj Dweep)')}
            >
              Port Blair ➔ Havelock (90m)
            </button>
            <button
              type="button"
              className="quick-route-pill"
              onClick={() => handleQuickRoute('Havelock Island (Swaraj Dweep)', 'Neil Island (Shaheed Dweep)')}
            >
              Havelock ➔ Neil Island (45m)
            </button>
            <button
              type="button"
              className="quick-route-pill"
              onClick={() => handleQuickRoute('Neil Island (Shaheed Dweep)', 'Port Blair')}
            >
              Neil Island ➔ Port Blair (60m)
            </button>
            <button
              type="button"
              className="quick-route-pill"
              onClick={() => {
                setCategory('CRUISE');
                onSearch({ category: 'CRUISE', experience: 'Andaman Sunset Sail (Port Blair Harbour)', date: departureDate, totalPassengers });
              }}
            >
              🌅 Sunset Catamaran Sail
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
