// src/components/stays/StayFilters.jsx
import React from 'react';
import { Filter, RotateCcw, Check, Sparkles, MapPin, Building, IndianRupee } from 'lucide-react';

const STAY_AMENITIES = [
  { id: 'beachfront', label: 'Beachfront' },
  { id: 'pool', label: 'Swimming Pool' },
  { id: 'spa', label: 'Spa & Wellness' },
  { id: 'restaurant', label: 'In-house Restaurant' },
  { id: 'wifi', label: 'Free High-Speed Wi-Fi' },
  { id: 'ac', label: 'Full Air Conditioning' },
  { id: 'scuba', label: 'PADI Scuba Desk' },
  { id: 'bar', label: 'Cocktail Bar' },
];

export default function StayFilters({
  destination,
  setDestination,
  category,
  setCategory,
  maxPrice,
  setMaxPrice,
  selectedAmenities,
  setSelectedAmenities,
  onReset,
}) {
  const toggleAmenity = (label) => {
    if (selectedAmenities.includes(label)) {
      setSelectedAmenities(selectedAmenities.filter(a => a !== label));
    } else {
      setSelectedAmenities([...selectedAmenities, label]);
    }
  };

  const activeFiltersCount = (destination !== 'All' ? 1 : 0) + 
                             (category !== 'All' ? 1 : 0) + 
                             (maxPrice < 40000 ? 1 : 0) + 
                             selectedAmenities.length;

  return (
    <aside className="filters-sidebar">
      <style>{`
        .filters-sidebar {
          background: #ffffff;
          border: 2px solid #E2E8F0;
          border-radius: 24px;
          padding: 24px 20px;
          box-shadow: 0 4px 20px rgba(11, 37, 69, 0.04);
          position: sticky;
          top: 90px;
        }

        .filter-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 16px;
          border-bottom: 1.5px solid #F1F5F9;
          margin-bottom: 22px;
        }

        .filter-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13.5px;
          font-weight: 800;
          color: #0B2545;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .active-pill {
          background: #FFF0EB;
          color: #F06543;
          font-size: 11px;
          font-weight: 800;
          padding: 2px 8px;
          border-radius: 20px;
        }

        .reset-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 800;
          color: #64748B;
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          padding: 5px 12px;
          border-radius: 8px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 5px;
          transition: all 0.2s ease;
        }
        .reset-btn:hover {
          color: #F06543;
          border-color: #F06543;
          background: #FFF5F2;
        }

        .filter-group {
          margin-bottom: 22px;
        }

        .group-lbl {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 800;
          color: #334155;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .filter-select {
          width: 100%;
          padding: 11px 14px;
          border-radius: 12px;
          background: #F8FAFC;
          border: 1.5px solid #E2E8F0;
          color: #0F172A;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 700;
          outline: none;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .filter-select:hover, .filter-select:focus {
          border-color: #F06543;
          background: #ffffff;
        }
        .filter-select option {
          background: #ffffff;
          color: #0F172A;
          padding: 8px;
        }

        .price-slider-box {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          padding: 14px;
          border-radius: 14px;
        }

        .amenity-checkbox-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .checkbox-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 600;
          color: #334155;
          cursor: pointer;
          user-select: none;
          padding: 4px 6px;
          border-radius: 8px;
          transition: background 0.15s ease;
        }
        .checkbox-item:hover {
          background: #F8FAFC;
          color: #0F172A;
        }

        .checkbox-item input {
          accent-color: #F06543;
          width: 16px;
          height: 16px;
          cursor: pointer;
        }
      `}</style>

      {/* Header */}
      <div className="filter-header">
        <div className="filter-title">
          <Filter size={16} color="#F06543" />
          <span>FILTER STAYS</span>
          {activeFiltersCount > 0 && <span className="active-pill">{activeFiltersCount}</span>}
        </div>
        {activeFiltersCount > 0 && (
          <button className="reset-btn" onClick={onReset}>
            <RotateCcw size={12} />
            <span>RESET</span>
          </button>
        )}
      </div>

      {/* DESTINATION */}
      <div className="filter-group">
        <label className="group-lbl">
          <MapPin size={13} color="#F06543" />
          <span>ISLAND LOCATION</span>
        </label>
        <select 
          value={destination} 
          onChange={(e) => setDestination(e.target.value)} 
          className="filter-select"
          aria-label="Filter by destination"
        >
          <option value="All">All Islands (Every Location)</option>
          <option value="Havelock">Havelock Island (Swaraj Dweep)</option>
          <option value="Neil">Neil Island (Shaheed Dweep)</option>
          <option value="Port Blair">Port Blair</option>
          <option value="Baratang">Baratang Island</option>
          <option value="Diglipur">Diglipur (North Andaman)</option>
          <option value="Great Nicobar">Great Nicobar</option>
        </select>
      </div>

      {/* CATEGORY */}
      <div className="filter-group">
        <label className="group-lbl">
          <Building size={13} color="#F06543" />
          <span>STAY CATEGORY</span>
        </label>
        <select 
          value={category} 
          onChange={(e) => setCategory(e.target.value)} 
          className="filter-select"
          aria-label="Filter by stay category"
        >
          <option value="All">All Stay Categories</option>
          <option value="LUXURY_VILLA">👑 Luxury Villas & Suites</option>
          <option value="BEACH_RESORT">🏖️ Beachfront Resorts</option>
          <option value="BOUTIQUE_RESORT">✨ Boutique Resorts</option>
          <option value="ECO_LODGE">🌿 Eco Wilderness Lodges</option>
          <option value="HERITAGE_HOTEL">🏛️ Heritage Hotels</option>
        </select>
      </div>

      {/* PRICE RANGE */}
      <div className="filter-group">
        <div className="price-slider-box">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
            <span className="group-lbl" style={{ marginBottom: 0 }}>
              <IndianRupee size={12} color="#F06543" />
              <span>MAX PRICE</span>
            </span>
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 900, color: '#0B2545' }}>
              ₹{maxPrice.toLocaleString()}
            </span>
          </div>
          <input
            type="range"
            min={3000}
            max={40000}
            step={1000}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            style={{ width: '100%', accentColor: '#F06543', cursor: 'pointer' }}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#94A3B8', marginTop: 4, fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}>
            <span>₹3,000</span>
            <span>₹40,000+</span>
          </div>
        </div>
      </div>

      {/* AMENITIES */}
      <div className="filter-group">
        <label className="group-lbl">
          <Sparkles size={13} color="#F06543" />
          <span>AMENITIES</span>
        </label>
        <div className="amenity-checkbox-list">
          {STAY_AMENITIES.map((a) => (
            <label key={a.id} className="checkbox-item">
              <input
                type="checkbox"
                checked={selectedAmenities.includes(a.label)}
                onChange={() => toggleAmenity(a.label)}
              />
              <span>{a.label}</span>
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
}
