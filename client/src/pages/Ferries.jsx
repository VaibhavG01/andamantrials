// src/pages/Ferries.jsx
// ─────────────────────────────────────────────────────────────────────────────
// MASTER UNIFIED ANDAMAN FERRIES & LUXURY CRUISES PAGE CONTAINER
// Inter-Island Catamarans (Makruzz, Nautika, Green Ocean, ITT Majestic) + Sunset & Yacht Cruises

import React, { useState, useEffect } from 'react';
import UnifiedSeaHero from '../components/ferries/UnifiedSeaHero';
import UnifiedSeaSearch from '../components/ferries/UnifiedSeaSearch';
import PopularInterIslandRoutes from '../components/ferries/PopularInterIslandRoutes';
import UnifiedSlotMatrix from '../components/ferries/UnifiedSlotMatrix';
import LuxuryCruiseShowcase from '../components/ferries/LuxuryCruiseShowcase';
import FleetShowcase from '../components/ferries/FleetShowcase';
import PortTerminalGuide from '../components/ferries/PortTerminalGuide';
import SeaTravelFAQ from '../components/ferries/SeaTravelFAQ';
import UnifiedSlotBookingModal from '../components/ferries/UnifiedSlotBookingModal';
import FooterBottom from '../components/FooterBottom';

import { ferryService } from '../api/ferryService';
import { cruiseService } from '../api/cruiseService';
import { FERRY_SCHEDULE_DATA } from '../data/ferryData';
import { CRUISE_LISTINGS } from '../data/cruiseData';

export default function Ferries() {
  const [sailingsList, setSailingsList] = useState([]);
  const [cruisesList, setCruisesList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeCategory, setActiveCategory] = useState('FERRY'); // 'FERRY' or 'CRUISE'

  // Current active search filter state
  const [searchParams, setSearchParams] = useState({
    category: 'FERRY',
    tripType: 'ONE_WAY',
    from: 'Port Blair',
    to: 'Havelock Island (Swaraj Dweep)',
    departureDate: new Date().toISOString().split('T')[0],
    adults: 2,
    children: 0,
    infants: 0,
    totalPassengers: 2,
  });

  // Booking Modal State
  const [selectedBookingVessel, setSelectedBookingVessel] = useState(null);
  const [selectedBookingClass, setSelectedBookingClass] = useState('Premium');
  const [bookingToast, setBookingToast] = useState(null);

  // Load Sailings from API & static fallback
  const loadData = () => {
    setLoading(true);

    // 1. Fetch Ferries
    ferryService.getFerries()
      .then((res) => {
        if (res.data && Array.isArray(res.data) && res.data.length > 0) {
          const mapped = res.data.map((s, idx) => ({
            id: String(s.id || `ferry-${idx}`),
            slug: s.slug || 'ferry',
            name: s.name || 'Catamaran Liner',
            operator: s.operator || 'Makruzz',
            from: s.routes?.[0]?.fromDestination?.name || 'Port Blair',
            to: s.routes?.[0]?.toDestination?.name || 'Havelock Island (Swaraj Dweep)',
            departure: idx % 2 === 0 ? '08:30 AM' : '11:30 AM',
            arrival: idx % 2 === 0 ? '10:00 AM' : '01:00 PM',
            duration: s.routes?.[0]?.duration || '90 mins',
            price: Number(s.price || 1650),
            availableSeats: Number(s.capacity || 220),
            category: 'FERRY',
            status: s.status || 'ACTIVE'
          }));
          setSailingsList(mapped);
        } else {
          setSailingsList(FERRY_SCHEDULE_DATA);
        }
      })
      .catch((e) => {
        console.warn('API sailings fallback:', e.message);
        setSailingsList(FERRY_SCHEDULE_DATA);
      })
      .finally(() => setLoading(false));

    // 2. Fetch Cruises
    cruiseService.getCruises()
      .then((res) => {
        if (res.data && Array.isArray(res.data) && res.data.length > 0) {
          setCruisesList(res.data);
        } else {
          setCruisesList(CRUISE_LISTINGS);
        }
      })
      .catch((e) => {
        console.warn('API cruise fallback:', e.message);
        setCruisesList(CRUISE_LISTINGS);
      });
  };

  useEffect(() => {
    loadData();
    document.title = 'Andaman Ferries & Luxury Cruises | Book Live Slots & Schedules';
  }, []);

  const handleSearch = (newParams) => {
    setSearchParams(newParams);
    setActiveCategory(newParams.category || 'FERRY');

    // Scroll smoothly to slot matrix
    const matrixEl = document.getElementById('sailing-slots-matrix');
    if (matrixEl) {
      matrixEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectSlot = (item, seatClass = 'Premium') => {
    setSelectedBookingVessel(item);
    setSelectedBookingClass(seatClass);
  };

  const handleViewDetails = (item) => {
    if (item.category === 'CRUISE' || item.type?.toLowerCase().includes('sunset')) {
      window.history.pushState({}, '', `/cruises/${item.slug || 'andaman-sunset-sail'}`);
    } else {
      window.history.pushState({}, '', `/ferries/${item.slug || 'port-blair-to-havelock'}`);
    }
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  const handleScrollToSearch = () => {
    const el = document.getElementById('unified-sea-search-panel');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToCruises = () => {
    setActiveCategory('CRUISE');
    const el = document.getElementById('unified-sea-search-panel');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToMatrix = () => {
    const el = document.getElementById('sailing-slots-matrix');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Current display items based on category
  const displayItems = activeCategory === 'CRUISE'
    ? cruisesList.map(c => ({
        ...c,
        category: 'CRUISE',
        departure: c.departureTimes?.[0] || '17:00 (Sunset)',
        arrival: '19:00',
        from: c.location || 'Port Blair Harbour',
        to: 'Harbour / Coastal Cruise',
        price: c.startingPrice || c.price || 2500,
        operator: 'Sunset Cruise Lines',
      }))
    : sailingsList;

  return (
    <div className="unified-ferries-cruises-page">
      <style>{`
        .unified-ferries-cruises-page {
          min-height: 100vh;
          background: #FAF4EE;
          color: #0B2545;
          font-family: 'Inter', sans-serif;
          position: relative;
          overflow-x: hidden;
        }

        .booking-toast-box {
          position: fixed;
          top: 90px;
          right: 24px;
          z-index: 3000;
          background: linear-gradient(135deg, #10B981, #059669);
          color: #ffffff;
          padding: 14px 22px;
          border-radius: 16px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 800;
          box-shadow: 0 10px 30px rgba(16, 185, 129, 0.4);
          animation: slideInToast 0.3s ease;
        }

        @keyframes slideInToast {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `}</style>

      {/* TOAST POPUP */}
      {bookingToast && (
        <div className="booking-toast-box">
          ✓ {bookingToast}
        </div>
      )}

      {/* 1. HERO SECTION */}
      <UnifiedSeaHero
        onBookFerry={handleScrollToSearch}
        onExploreCruises={handleScrollToCruises}
        onViewSchedule={handleScrollToMatrix}
      />

      {/* 2. UNIVERSAL FLOATING SEARCH & SLOT FINDER */}
      <UnifiedSeaSearch
        onSearch={handleSearch}
        activeCategory={activeCategory}
        onCategoryChange={(cat) => setActiveCategory(cat)}
      />

      {/* 3. POPULAR INTER-ISLAND ROUTES */}
      <PopularInterIslandRoutes
        onSelectRoute={(route) => {
          handleSearch({
            category: 'FERRY',
            tripType: 'ONE_WAY',
            from: route.from,
            to: route.to,
            departureDate: searchParams.departureDate,
            adults: searchParams.adults,
            children: searchParams.children,
            infants: searchParams.infants,
            totalPassengers: searchParams.totalPassengers,
          });
        }}
      />

      {/* 4. REAL-TIME SAILING & SLOT MATRIX */}
      <UnifiedSlotMatrix
        items={displayItems}
        searchParams={searchParams}
        onSelectSlot={handleSelectSlot}
        onViewDetails={handleViewDetails}
      />

      {/* 5. LUXURY SUNSET & YACHT CRUISE SHOWCASE */}
      <LuxuryCruiseShowcase
        onBookCruise={(cruise) => handleSelectSlot(cruise, 'Royal')}
        onViewCruiseDetails={handleViewDetails}
      />

      {/* 6. FLEET SHOWCASE */}
      <FleetShowcase
        onSelectFleet={(operator) => {
          handleScrollToMatrix();
        }}
      />

      {/* 7. PORT & JETTY TERMINAL GUIDE */}
      <PortTerminalGuide />

      {/* 8. FREQUENTLY ASKED QUESTIONS */}
      <SeaTravelFAQ />

      {/* 9. FOOTER */}
      <FooterBottom />

      {/* 10. INTERACTIVE SLOT BOOKING MODAL */}
      {selectedBookingVessel && (
        <UnifiedSlotBookingModal
          vessel={selectedBookingVessel}
          searchParams={searchParams}
          initialClass={selectedBookingClass}
          onClose={() => setSelectedBookingVessel(null)}
          onBookingSuccess={(bookingData) => {
            setBookingToast(`Booking confirmed! PNR: ${bookingData.pnr}`);
            setTimeout(() => setBookingToast(null), 6000);
          }}
        />
      )}
    </div>
  );
}
