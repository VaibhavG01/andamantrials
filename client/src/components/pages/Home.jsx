// src/components/pages/Home.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Master Homepage Page Component importing all 11 continuous sections.

import React, { lazy, Suspense } from 'react';
import HeroSection from '../HeroSection';
import TrustBar from '../TrustBar';

const DestinationExplorer = lazy(() => import('../destinations/DestinationExplorer'));
const PlacesToVisit = lazy(() => import('../places/PlacesToVisit'));
const PackageExplorer = lazy(() => import('../packages/PackageExplorer'));
const ExperienceExplorer = lazy(() => import('../experiences/ExperienceExplorer'));
const PopularCruise = lazy(() => import('../cruise/PopularCruise'));
const StayExplorer = lazy(() => import('../stays/StayExplorer'));
const WhyTravelWithUs = lazy(() => import('../trust/WhyTravelWithUs'));
const TravelerStories = lazy(() => import('../testimonials/TravelerStories'));
const GallerySection = lazy(() => import('../gallery/GallerySection'));
const WatchAndamanFilm = lazy(() => import('../film/WatchAndamanFilm'));
const PopularBlogs = lazy(() => import('../blogs/PopularBlogs'));
const FAQSection = lazy(() => import('../faq/FAQSection'));
const ContactSection = lazy(() => import('../contact/ContactSection'));
const FooterModules = lazy(() => import('../FooterModules'));
const TechnologySection = lazy(() => import('../technology/TechnologySection'));
const FinalCTA = lazy(() => import('../final-cta/FinalCTA'));
const FooterBottom = lazy(() => import('../FooterBottom'));

const SectionLoadingFallback = () => (
  <div style={{ width: '100%', padding: '60px 20px', textAlign: 'center', background: '#ffffff', color: '#F06543', fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '0.15em' }}>
    LOADING SECTION...
  </div>
);

export default function Home({ onDestinationSelect }) {
  return (
    <div style={{ width: '100%', minHeight: '100vh', overflowX: 'hidden', background: '#ffffff' }}>
      {/* SECTION 01: 3D INTERACTIVE HERO MAP */}
      <HeroSection onDestinationSelect={onDestinationSelect} />

      {/* TRUST & SOCIAL PROOF BAR */}
      <TrustBar />

      <Suspense fallback={<SectionLoadingFallback />}>
        {/* SECTION 03: DESTINATION EXPLORER */}
        <DestinationExplorer />

        {/* SECTION 04: PLACES TO VISIT */}
        {/* <PlacesToVisit /> */}

        {/* SECTION 05: PACKAGES */}
        <PackageExplorer />

        {/* SECTION 05: ACTIVITIES & EXPERIENCES */}
        <ExperienceExplorer />

        {/* SECTION 06: POPULAR CRUISE */}
        <PopularCruise />

        {/* SECTION 07: SMART TRAVEL TOOLS & RESORTS */}
        {/* <StayExplorer /> */}

        {/* SECTION 08: WHY TRAVEL WITH US */}
        <WhyTravelWithUs />

        {/* SECTION 08: REAL TRAVELER STORIES */}
        <TravelerStories />

        {/* SECTION 09: PHOTO GALLERY */}
        <GallerySection isHomePage={true} />

        {/* SECTION 10: CINEMATIC FILM */}
        <WatchAndamanFilm />

        {/* SECTION 11: POPULAR BLOGS */}
        <PopularBlogs />

        {/* SECTION 11: FAQ */}
        <FAQSection />

        {/* SECTION 12: CONTACT US */}
        <ContactSection />

        {/* SECTION 09: FAQ ACCORDION */}
        {/* <FooterModules /> */}

        {/* SECTION 10: TECHNOLOGY WE USE */}
        {/* <TechnologySection /> */}

        {/* SECTION 11: FINAL CINEMATIC CTA */}
        {/* <FinalCTA /> */}

        {/* FOOTER */}
        <FooterBottom />
      </Suspense>
    </div>
  );
}
