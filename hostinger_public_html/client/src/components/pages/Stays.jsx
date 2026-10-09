// src/components/pages/Stays.jsx
// ─────────────────────────────────────────────────────────────────────────────
// PREMIUM ANDAMAN STAYS PAGE — Complete Discovery & Booking Experience
// Hotels • Resorts • Beach Resorts • Boutique • Luxury Villas • Budget • Couple • Family
// ─────────────────────────────────────────────────────────────────────────────

import React, { useState, useEffect } from 'react';
import StayHero from '../stays/StayHero';
import StaySearch from '../stays/StaySearch';
import StayDestinations from '../stays/StayDestinations';
import FeaturedStay from '../stays/FeaturedStay';
import StayCategories from '../stays/StayCategories';
import StayGrid from '../stays/StayGrid';
import StayExperience from '../stays/StayExperience';
import CoupleStays from '../stays/CoupleStays';
import FamilyStays from '../stays/FamilyStays';
import StayComparison from '../stays/StayComparison';
import AmenitiesExplorer from '../stays/AmenitiesExplorer';
import StayBookingInfo from '../stays/StayBookingInfo';
import StayNewsletter from '../stays/StayNewsletter';
import StayFAQ from '../stays/StayFAQ';
import StayCTA from '../stays/StayCTA';
import FooterBottom from '../FooterBottom';

export default function Stays() {
  const [searchFilter, setSearchFilter] = useState(null);
  const [activeAmenity, setActiveAmenity] = useState(null);

  // SEO
  useEffect(() => {
    document.title = 'Andaman Hotels & Resorts | Places to Stay | Andaman Trails';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Discover hotels, beachfront resorts, villas and unique stays across Port Blair, Havelock, Neil Island and the Andaman Islands.'
      );
    }
    window.scrollTo(0, 0);
  }, []);

  const scrollToSearch = () => {
    const el = document.querySelector('.stay-search-wrapper');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToDestinations = () => {
    const el = document.querySelector('.dest-root');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToListing = () => {
    const el = document.getElementById('stays-listing-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSearchSubmit = (params) => {
    setSearchFilter(params);
    setTimeout(() => {
      const el = document.getElementById('stays-listing-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleSelectDestination = (destinationName) => {
    setSearchFilter({ destination: destinationName });
    setTimeout(() => {
      const el = document.getElementById('stays-listing-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleSelectCategory = (categoryName) => {
    setSearchFilter({ category: categoryName });
    setTimeout(() => {
      const el = document.getElementById('stays-listing-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleViewStay = (stay) => {
    window.location.href = `/stays/${stay.slug || stay.id}`;
  };

  const handleAmenitySelect = (amenity) => {
    setActiveAmenity(amenity);
    setTimeout(() => {
      const el = document.getElementById('stays-listing-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="stays-master-page">
      <style>{`
        .stays-master-page {
          min-height: 100vh;
          background: #f8fafc;
          color: #334155;
          font-family: 'Inter', sans-serif;
          position: relative;
          overflow-x: hidden;
        }
      `}</style>

      {/* 1. CINEMATIC HERO */}
      <StayHero
        onFindStay={scrollToSearch}
        onExploreDestinations={scrollToDestinations}
      />

      {/* 2. FLOATING SEARCH PANEL */}
      <StaySearch onSearch={handleSearchSubmit} />

      {/* 3. QUICK DESTINATIONS */}
      <StayDestinations onSelectDestination={handleSelectDestination} />

      {/* 4. FEATURED STAY */}
      <FeaturedStay onViewStay={handleViewStay} />

      {/* 5. STAY CATEGORIES */}
      <StayCategories onSelectCategory={handleSelectCategory} />

      {/* 6–9. FULL STAY LISTING (Filters + Sort + Grid + Map) */}
      <StayGrid
        onViewStay={handleViewStay}
        searchFilter={searchFilter}
      />

      {/* 12. SPECIAL STAY EXPERIENCES */}
      <StayExperience onExploreExperiences={scrollToListing} />

      {/* 13. COUPLE / HONEYMOON STAYS */}
      <CoupleStays onExploreCouple={() => handleSelectCategory('Couple Escapes')} />

      {/* 14. FAMILY STAYS */}
      <FamilyStays onExploreFamily={() => handleSelectCategory('Family Stays')} />

      {/* 15. STAY COMPARISON */}
      <StayComparison onExplore={scrollToListing} />

      {/* 16. AMENITIES EXPLORER */}
      <AmenitiesExplorer
        activeAmenity={activeAmenity}
        onSelectAmenity={handleAmenitySelect}
      />

      {/* 17. BOOKING INFORMATION */}
      <StayBookingInfo />

      {/* 19. NEWSLETTER (Commented out per user request) */}
      {/* <StayNewsletter /> */}

      {/* 20. FAQ */}
      <StayFAQ />

      {/* 21. FINAL CTA */}
      <StayCTA
        onFindStay={scrollToSearch}
        onExploreDestinations={scrollToDestinations}
      />

      {/* FOOTER */}
      <FooterBottom />
    </div>
  );
}
