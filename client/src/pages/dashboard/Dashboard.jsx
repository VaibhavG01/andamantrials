// src/pages/dashboard/Dashboard.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Master Traveler Command Center Dashboard Page Component

import React, { useState } from 'react';
import DashboardLayout from '../../components/dashboard/DashboardLayout';
import DashboardWelcome from '../../components/dashboard/DashboardWelcome';
import UpcomingTrip from '../../components/dashboard/UpcomingTrip';
import DashboardStats from '../../components/dashboard/DashboardStats';
import TripTimeline from '../../components/dashboard/TripTimeline';
import BookingOverview from '../../components/dashboard/BookingOverview';
import FerryStatus from '../../components/dashboard/FerryStatus';
import Wishlist from '../../components/dashboard/Wishlist';
import RecommendedExperiences from '../../components/dashboard/RecommendedExperiences';
import TripPreparation from '../../components/dashboard/TripPreparation';
import AITravelAssistant from '../../components/dashboard/AITravelAssistant';
import ProfileSummary from '../../components/dashboard/ProfileSummary';
import DashboardMap from '../../components/dashboard/DashboardMap';

// Subpages
import MyTrips from './MyTrips';
import Bookings from './Bookings';
import Itinerary from './Itinerary';
import WishlistPage from './Wishlist';
import PaymentsPage from './Payments';
import ProfilePage from './Profile';
import SupportPage from './Support';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState(() => {
    const path = window.location.pathname;
    if (path.includes('/dashboard/trips') || path === '/my-trips') return 'trips';
    if (path.includes('/dashboard/bookings') || path === '/bookings' || path === '/my-bookings') return 'bookings';
    if (path.includes('/dashboard/itinerary')) return 'itinerary';
    if (path.includes('/dashboard/wishlist')) return 'wishlist';
    if (path.includes('/dashboard/payments')) return 'payments';
    if (path.includes('/dashboard/profile') || path.includes('/dashboard/settings')) return 'profile';
    if (path.includes('/dashboard/support')) return 'support';
    return 'dashboard';
  });
  const [selectedBooking, setSelectedBooking] = useState(null);

  const handleSelectTab = (tabId, path) => {
    setActiveTab(tabId);
    if (path && path.startsWith('/dashboard/')) {
      window.history.pushState(null, '', path);
    }
  };

  const renderActiveTabContent = () => {
    switch (activeTab) {
      case 'trips':
        return <MyTrips onBack={() => setActiveTab('dashboard')} />;
      case 'bookings':
        return <Bookings onBack={() => setActiveTab('dashboard')} />;
      case 'itinerary':
        return <Itinerary onBack={() => setActiveTab('dashboard')} />;
      case 'wishlist':
        return <WishlistPage onBack={() => setActiveTab('dashboard')} />;
      case 'payments':
        return <PaymentsPage onBack={() => setActiveTab('dashboard')} />;
      case 'profile':
        return <ProfilePage onBack={() => setActiveTab('dashboard')} />;
      case 'support':
        return <SupportPage onBack={() => setActiveTab('dashboard')} />;

      case 'dashboard':
      default:
        return (
          <>
            {/* 1. WELCOME HEADER */}
            <DashboardWelcome />

            {/* 2. UPCOMING TRIP (MAIN CARD ABOVE THE FOLD) */}
            <UpcomingTrip
              onViewTrip={() => setActiveTab('trips')}
              onViewItinerary={() => setActiveTab('itinerary')}
            />

            {/* 3. 4 QUICK STATS CARDS */}
            <DashboardStats onStatClick={(id) => setActiveTab(id)} />

            {/* 4. MASTER 2-COLUMN DASHBOARD GRID */}
            <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 24, alignItems: 'start' }} className="dash-grid-responsive">
              <style>{`
                @media (max-width: 1024px) {
                  .dash-grid-responsive { grid-template-columns: 1fr !important; }
                }
              `}</style>

              {/* LEFT COLUMN: LIVE BOOKINGS & FERRY STATUS */}
              <div>
                {/* My Bookings (Live DB Reservations) */}
                <BookingOverview
                  onViewBookingDetails={(bk) => {
                    setSelectedBooking(bk);
                    setActiveTab('bookings');
                  }}
                />

                {/* Live Ferry Catamaran Status */}
                <FerryStatus />
              </div>

              {/* RIGHT COLUMN: 3D ISLAND MAP & PROFILE */}
              <div>
                {/* 3D Island Route Map Visual */}
                <div style={{
                  background: '#ffffff',
                  backdropFilter: 'blur(20px)',
                  border: '1.5px solid #e2e8f0',
                  borderRadius: 24, padding: 16, marginBottom: 28,
                  boxShadow: '0 16px 40px rgba(0, 0, 0, 0.4)',
                }}>
                  <DashboardMap />
                </div>

                {/* User Profile Summary */}
                <ProfileSummary onEditProfile={() => setActiveTab('profile')} />
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <DashboardLayout activeTab={activeTab} onSelectTab={handleSelectTab}>
      {renderActiveTabContent()}
    </DashboardLayout>
  );
}
