// src/components/pages/Packages.jsx
// ─────────────────────────────────────────────────────────────────────────────
// MASTER ANDAMAN TRAILS TOUR PACKAGES PAGE — Complete Modular Luxury Architecture
// Mirrors the exact luxury structure, high-contrast thick UI & sections of Activities.jsx

import React, { useState, useEffect, useMemo, useRef } from 'react';
import PackageHero from '../packages/PackageHero';
import PackageSearch from '../packages/PackageSearch';
import FeaturedPackage from '../packages/FeaturedPackage';
import PackageCategories from '../packages/PackageCategories';
import PackageDurationExplorer from '../packages/PackageDurationExplorer';
import PackageGrid from '../packages/PackageGrid';
import WhyPackages from '../packages/WhyPackages';
import HoneymoonPackageExperience from '../packages/HoneymoonPackageExperience';
import AdventurePackageExperience from '../packages/AdventurePackageExperience';
import FamilyPackageExperience from '../packages/FamilyPackageExperience';
import PackageInclusions from '../packages/PackageInclusions';
import PackageBookingFlow from '../packages/PackageBookingFlow';
import PackageAvailability from '../packages/PackageAvailability';
import PackageTips from '../packages/PackageTips';
import PackageFAQ from '../packages/PackageFAQ';
import PackageReviews from '../packages/PackageReviews';
import PackageCTA from '../packages/PackageCTA';
import FooterBottom from '../FooterBottom';
import { packageService } from '../../api/packageService';

export default function Packages() {
  const [packagesList, setPackagesList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Wishlist state
  const [savedWishlist, setSavedWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('andaman_package_wishlist');
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      return {};
    }
  });

  const toggleWishlist = (pkgId, e) => {
    if (e) e.stopPropagation();
    setSavedWishlist((prev) => {
      const next = { ...prev, [pkgId]: !prev[pkgId] };
      try {
        localStorage.setItem('andaman_package_wishlist', JSON.stringify(next));
      } catch (err) {}
      return next;
    });
  };

  // Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDestination, setSelectedDestination] = useState('ALL');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [selectedDuration, setSelectedDuration] = useState('ALL');
  const [selectedDate, setSelectedDate] = useState('');
  const [sortBy, setSortBy] = useState('RECOMMENDED');

  // 1. Fetch live packages from backend API
  const fetchPackagesData = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await packageService.getPackages();
      if (res && res.data && Array.isArray(res.data)) {
        setPackagesList(res.data);
      }
    } catch (err) {
      console.error('Failed to load packages from DB:', err);
      setError('Unable to load packages from server.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPackagesData();
  }, []);

  // Filtered & Sorted Packages
  const filteredPackages = useMemo(() => {
    let result = (packagesList || []).filter((pkg) => {
      const matchesDestination =
        selectedDestination === 'ALL' ||
        (pkg.destinations && pkg.destinations.toLowerCase().includes(selectedDestination.toLowerCase())) ||
        (pkg.itinerary && Array.isArray(pkg.itinerary) && pkg.itinerary.some(day => (day.location || '').toLowerCase().includes(selectedDestination.toLowerCase())));

      const matchesCategory =
        selectedCategory === 'ALL' ||
        (pkg.category && pkg.category.toUpperCase().includes(selectedCategory.toUpperCase())) ||
        (pkg.theme && pkg.theme.toUpperCase().includes(selectedCategory.toUpperCase()));

      const query = searchQuery.toLowerCase().trim();
      const tagsArray = Array.isArray(pkg.tags)
        ? pkg.tags
        : typeof pkg.tags === 'string'
        ? pkg.tags.split(',').map((s) => s.trim())
        : [];

      const matchesSearch =
        !query ||
        (pkg.name && pkg.name.toLowerCase().includes(query)) ||
        (pkg.destinations && pkg.destinations.toLowerCase().includes(query)) ||
        (pkg.description && pkg.description.toLowerCase().includes(query)) ||
        tagsArray.some((tag) => String(tag).toLowerCase().includes(query));

      let matchesDuration = true;
      const days = parseInt(pkg.duration) || 5;
      if (selectedDuration === 'SHORT') matchesDuration = days <= 4;
      else if (selectedDuration === 'MEDIUM') matchesDuration = days === 5 || days === 6;
      else if (selectedDuration === 'LONG') matchesDuration = days >= 7;

      return matchesDestination && matchesCategory && matchesSearch && matchesDuration;
    });

    // Sorting
    result.sort((a, b) => {
      const priceA = typeof a.price === 'number' ? a.price : parseInt(String(a.price || 0).replace(/,/g, '')) || 0;
      const priceB = typeof b.price === 'number' ? b.price : parseInt(String(b.price || 0).replace(/,/g, '')) || 0;

      if (sortBy === 'PRICE_LOW') return priceA - priceB;
      if (sortBy === 'PRICE_HIGH') return priceB - priceA;
      if (sortBy === 'RATING') return (Number(b.rating) || 0) - (Number(a.rating) || 0);
      return 0;
    });

    return result;
  }, [packagesList, selectedDestination, selectedCategory, selectedDuration, searchQuery, sortBy]);

  // Featured Package Spotlight
  const topFeaturedPackage = useMemo(() => {
    if (!packagesList || packagesList.length === 0) return null;
    return packagesList.find((p) => p.featured) || packagesList[0];
  }, [packagesList]);

  const handleViewDetails = (pkg) => {
    const targetId = pkg?.id || pkg?._id || pkg;
    window.history.pushState({}, '', `/package-details?id=${targetId}`);
    window.dispatchEvent(new Event('popstate'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const clearAllFilters = () => {
    setSearchQuery('');
    setSelectedDestination('ALL');
    setSelectedCategory('ALL');
    setSelectedDuration('ALL');
    setSelectedDate('');
    setSortBy('RECOMMENDED');
  };

  const scrollToGrid = () => {
    const el = document.getElementById('packages-grid-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Search filter handler from floating PackageSearch bar
  const handleSearchSubmit = ({ searchQuery: q, destination: dest, category: c, duration: dur, date: d }) => {
    if (q !== undefined) setSearchQuery(q);
    if (dest) setSelectedDestination(dest);
    if (c) setSelectedCategory(c);
    if (dur) setSelectedDuration(dur);
    if (d) setSelectedDate(d);
    scrollToGrid();
  };

  // Category card filter trigger
  const handleSelectCategory = (catKey) => {
    setSelectedCategory(catKey);
    scrollToGrid();
  };

  // Duration hub filter trigger
  const handleSelectDuration = (durKey) => {
    setSelectedDuration(durKey);
    scrollToGrid();
  };

  return (
    <div className="packages-page-root">
      <style>{`
        .packages-page-root {
          width: 100%;
          min-height: 100vh;
          background: #f8fafc;
          color: #334155;
          overflow-x: hidden;
          font-family: 'Inter', sans-serif;
        }
      `}</style>

      {/* 1. PACKAGE HERO */}
      <PackageHero
        onExplorePackages={scrollToGrid}
        onPlanTrip={() => {
          window.history.pushState({}, '', '/plan-trip');
          window.dispatchEvent(new Event('popstate'));
        }}
      />

      {/* 2. FLOATING SEARCH / TRIP PANEL */}
      <PackageSearch onSearch={handleSearchSubmit} />

      {/* 3. FEATURED PACKAGE SPOTLIGHT (6D/5N LUXURY BESTSELLER) */}
      <FeaturedPackage
        pkg={topFeaturedPackage}
        onViewDetails={handleViewDetails}
        onPlanTrip={() => {
          window.history.pushState({}, '', '/plan-trip');
          window.dispatchEvent(new Event('popstate'));
        }}
      />

      {/* 4. PACKAGE THEMES & CATEGORIES */}
      <PackageCategories onSelectCategory={handleSelectCategory} />

      {/* 5. CURATED TRIP DURATIONS EXPLORER */}
      <PackageDurationExplorer onSelectDuration={handleSelectDuration} />

      {/* 6. MAIN LIVE PACKAGES LISTING GRID */}
      <div id="packages-grid-section">
        <PackageGrid
          packages={filteredPackages}
          loading={loading}
          error={error}
          selectedDestination={selectedDestination}
          onSelectDestination={setSelectedDestination}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          selectedDuration={selectedDuration}
          onSelectDuration={setSelectedDuration}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          sortBy={sortBy}
          onChangeSortBy={setSortBy}
          onResetFilters={clearAllFilters}
          savedWishlist={savedWishlist}
          onToggleWishlist={toggleWishlist}
          onViewDetails={handleViewDetails}
          onRetry={fetchPackagesData}
        />
      </div>

      {/* 7. WHY BOOK PACKAGES WITH US */}
      <WhyPackages />

      {/* 8. SPOTLIGHT 1: HONEYMOON & ROMANTIC PACKAGE */}
      <HoneymoonPackageExperience onDiscoverHoneymoon={() => handleSelectCategory('HONEYMOON')} />

      {/* 9. SPOTLIGHT 2: ADVENTURE & SCUBA PACKAGE */}
      <AdventurePackageExperience onDiscoverAdventure={() => handleSelectCategory('ADVENTURE')} />

      {/* 10. SPOTLIGHT 3: FAMILY ISLAND VACATION PACKAGE */}
      <FamilyPackageExperience onDiscoverFamily={() => handleSelectCategory('FAMILY')} />

      {/* 11. WHAT'S INCLUDED IN EVERY PACKAGE */}
      <PackageInclusions />

      {/* 12. EASY 4-STEP PACKAGE BOOKING FLOW */}
      <PackageBookingFlow onStartPlanning={() => {
        window.history.pushState({}, '', '/plan-trip');
        window.dispatchEvent(new Event('popstate'));
      }} />

      {/* 13. REAL-TIME DEPARTURE SLOTS & SEASONAL CALENDAR */}
      <PackageAvailability onOpenCustomizer={() => {
        window.history.pushState({}, '', '/plan-trip');
        window.dispatchEvent(new Event('popstate'));
      }} />

      {/* 14. LOCAL PACKAGE PLANNING TIPS & GUIDELINES */}
      <PackageTips />

      {/* 15. TOUR PACKAGE FAQ ACCORDION */}
      <PackageFAQ />

      {/* 16. TRAVELER REVIEWS & STORIES */}
      {/* <PackageReviews /> */}

      {/* 17. FINAL CONVERSION CTA */}
      <PackageCTA
        onPlanTrip={() => {
          window.history.pushState({}, '', '/plan-trip');
          window.dispatchEvent(new Event('popstate'));
        }}
        onContactExpert={() => {
          window.history.pushState({}, '', '/contact');
          window.dispatchEvent(new Event('popstate'));
        }}
      />

      {/* 18. FOOTER */}
      <FooterBottom />
    </div>
  );
}
