// src/components/pages/Activities.jsx
// ─────────────────────────────────────────────────────────────────────────────
// MASTER ANDAMAN TRAILS ACTIVITIES PAGE — 19 Complete Sections with Rich 3D & GSAP
// Mirrors the luxury structure of the Cruises page with full live MySQL DB connectivity.

import React, { useState, useEffect, useMemo, useRef } from 'react';
import ActivityHero from '../activities/ActivityHero';
import ActivitySearch from '../activities/ActivitySearch';
import FeaturedActivity from '../activities/FeaturedActivity';
import ActivityCategories from '../activities/ActivityCategories';
import ActivityIslandExplorer from '../activities/ActivityIslandExplorer';
import ActivityGrid from '../activities/ActivityGrid';
import WhyActivities from '../activities/WhyActivities';
import ScubaExperience from '../activities/ScubaExperience';
import NightKayakExperience from '../activities/NightKayakExperience';
import SeaKartExperience from '../activities/SeaKartExperience';
import ActivityInclusions from '../activities/ActivityInclusions';
import ActivityBookingFlow from '../activities/ActivityBookingFlow';
import ActivityAvailability from '../activities/ActivityAvailability';
import ActivityTips from '../activities/ActivityTips';
import ActivityFAQ from '../activities/ActivityFAQ';
import ActivityReviews from '../activities/ActivityReviews';
import ActivityCTA from '../activities/ActivityCTA';
import ActivityBookingModal from '../activities/ActivityBookingModal';
import FooterBottom from '../FooterBottom';
import { activityService } from '../../api/activityService';

export default function Activities() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Wishlist state
  const [savedWishlist, setSavedWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('andaman_activity_wishlist');
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      return {};
    }
  });

  const toggleWishlist = (actId, e) => {
    if (e) e.stopPropagation();
    setSavedWishlist((prev) => {
      const next = { ...prev, [actId]: !prev[actId] };
      try {
        localStorage.setItem('andaman_activity_wishlist', JSON.stringify(next));
      } catch (err) {}
      return next;
    });
  };

  // Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All Locations');
  const [selectedDate, setSelectedDate] = useState('');
  const [priceRange, setPriceRange] = useState(10000);
  const [sortBy, setSortBy] = useState('popular');

  // Modal State for Quick Booking
  const [bookingModalActivity, setBookingModalActivity] = useState(null);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  // 1. Fetch Activities from Backend API
  const fetchActivitiesData = async () => {
    setLoading(true);
    setError('');
    try {
      const data = await activityService.getActivities({
        category: selectedCategory,
        location: selectedLocation,
        maxPrice: priceRange,
        date: selectedDate,
        search: searchQuery,
        sort: sortBy,
      });
      setActivities(data || []);
    } catch (err) {
      console.error('Failed to load activities:', err);
      setError('Unable to load activities. Please check your network connection.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchActivitiesData();
  }, [selectedCategory, selectedLocation, priceRange, selectedDate, sortBy]);

  // Handle Search submit / debounce
  useEffect(() => {
    const handler = setTimeout(() => {
      fetchActivitiesData();
    }, 350);
    return () => clearTimeout(handler);
  }, [searchQuery]);

  // Featured Activity derived dynamically from live loaded data
  const topFeaturedActivity = useMemo(() => {
    if (!activities || activities.length === 0) return null;
    return activities.find((a) => a.featured || Number(a.rating) >= 4.8) || activities[0];
  }, [activities]);

  const handleOpenBooking = (act) => {
    if (!act) return;
    const slug = act.slug || act.id;
    window.history.pushState({}, '', `/activity-booking?id=${slug}`);
    window.dispatchEvent(new Event('popstate'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewDetails = (slug) => {
    window.history.pushState({}, '', `/activities/${slug}`);
    window.dispatchEvent(new Event('popstate'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const clearAllFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedLocation('All Locations');
    setSelectedDate('');
    setPriceRange(10000);
    setSortBy('popular');
  };

  const scrollToGrid = () => {
    const el = document.getElementById('activity-grid-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAvailability = () => {
    const el = document.getElementById('activity-availability-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Search filter handler from floating ActivitySearch bar
  const handleSearchSubmit = ({ searchQuery: q, island, category, date, maxPrice }) => {
    if (q !== undefined) setSearchQuery(q);
    if (island) setSelectedLocation(island);
    if (category) setSelectedCategory(category);
    if (date) setSelectedDate(date);
    if (maxPrice) setPriceRange(maxPrice);
    scrollToGrid();
  };

  // Category card filter trigger
  const handleSelectCategory = (catKey) => {
    setSelectedCategory(catKey);
    scrollToGrid();
  };

  // Island hub filter trigger
  const handleSelectIsland = (islandKey) => {
    setSelectedLocation(islandKey);
    scrollToGrid();
  };

  return (
    <div className="activities-page-root">
      <style>{`
        .activities-page-root {
          width: 100%;
          min-height: 100vh;
          background: #f8fafc;
          color: #334155;
          overflow-x: hidden;
          font-family: 'Inter', sans-serif;
        }
      `}</style>

      {/* 1. ACTIVITY HERO */}
      <ActivityHero
        onExploreActivities={scrollToGrid}
        onPlanExperience={scrollToAvailability}
      />

      {/* 2. FLOATING SEARCH / EXPERIENCE PANEL */}
      <ActivitySearch onSearch={handleSearchSubmit} />

      {/* 3. FEATURED ACTIVITY SPOTLIGHT (DYNAMIC DB DATA) */}
      <FeaturedActivity
        activity={topFeaturedActivity}
        onViewDetails={(item) => handleViewDetails(item.slug || 'padi-discover-scuba-diving')}
        onBookNow={handleOpenBooking}
      />

      {/* 4. ACTIVITY CATEGORIES */}
      <ActivityCategories onSelectCategory={handleSelectCategory} />

      {/* 5. ISLAND ADVENTURE EXPLORER */}
      <ActivityIslandExplorer onSelectIsland={handleSelectIsland} />

      {/* 6. MAIN LIVE ACTIVITY LISTING GRID */}
      <div id="activity-grid-section">
        <ActivityGrid
          activities={activities}
          loading={loading}
          error={error}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          selectedLocation={selectedLocation}
          onSelectLocation={setSelectedLocation}
          priceRange={priceRange}
          onChangePriceRange={setPriceRange}
          sortBy={sortBy}
          onChangeSortBy={setSortBy}
          onResetFilters={clearAllFilters}
          savedWishlist={savedWishlist}
          onToggleWishlist={toggleWishlist}
          onOpenBooking={handleOpenBooking}
          onViewDetails={handleViewDetails}
          onRetry={fetchActivitiesData}
        />
      </div>

      {/* 7. WHY BOOK ACTIVITIES WITH US */}
      <WhyActivities />

      {/* 8. SPOTLIGHT 1: DEEP SEA SCUBA EXPEDITION */}
      <ScubaExperience onDiscoverScuba={() => handleSelectCategory('Scuba & Snorkeling')} />

      {/* 9. SPOTLIGHT 2: BIOLUMINESCENT NIGHT KAYAKING */}
      <NightKayakExperience onDiscoverNightKayak={() => handleSelectCategory('Adventure')} />

      {/* 10. SPOTLIGHT 3: SEAKART ADVENTURE */}
      <SeaKartExperience onDiscoverSeaKart={() => handleSelectCategory('Water Sports')} />

      {/* 11. WHAT'S INCLUDED & SAFETY ASSURANCE */}
      <ActivityInclusions />

      {/* 12. EASY 4-STEP BOOKING FLOW */}
      <ActivityBookingFlow onStartBooking={scrollToAvailability} />

      {/* 13. REAL-TIME SLOT AVAILABILITY CHECKER */}
      <div id="activity-availability-section">
        <ActivityAvailability onBookDirect={handleOpenBooking} />
      </div>

      {/* 14. TRAVEL TIPS BEFORE YOU DIVE */}
      <ActivityTips />

      {/* 15. ACTIVITY FAQ */}
      <ActivityFAQ />

      {/* 16. TRAVELER REVIEWS */}
      <ActivityReviews />

      {/* 17. FINAL CONVERSION CTA */}
      <ActivityCTA
        onExploreActivities={scrollToGrid}
        onPlanTrip={() => {
          window.history.pushState({}, '', '/plan-trip');
          window.dispatchEvent(new Event('popstate'));
        }}
      />

      {/* 18. QUICK BOOKING MODAL (RAZORPAY INTEGRATED) */}
      <ActivityBookingModal
        activity={bookingModalActivity}
        isOpen={bookingModalOpen}
        onClose={() => {
          setBookingModalOpen(false);
          setBookingModalActivity(null);
        }}
      />

      {/* 19. FOOTER */}
      <FooterBottom />
    </div>
  );
}
