// src/pages/About.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Master About Us Brand Story Page Container Component

import React, { useEffect } from 'react';
import AboutHero from '../components/about/AboutHero';
import BrandIntroduction from '../components/about/BrandIntroduction';
import StoryTimeline from '../components/about/StoryTimeline';
import AboutMapExperience from '../components/about/AboutMapExperience';
import AboutMission from '../components/about/AboutMission';
import AboutVision from '../components/about/AboutVision';
import WhyAndamanTrails from '../components/about/WhyAndamanTrails';
import AboutValues from '../components/about/AboutValues';
import LocalExperience from '../components/about/LocalExperience';
import TravelPhilosophy from '../components/about/TravelPhilosophy';
import TeamSection from '../components/about/TeamSection';
import AboutStats from '../components/about/AboutStats';
import SustainableTravel from '../components/about/SustainableTravel';
import AboutTestimonials from '../components/about/AboutTestimonials';
import AboutFinalCTA from '../components/about/AboutFinalCTA';
import FooterBottom from '../components/FooterBottom';

export default function About() {
  // SEO Page Title & Meta Tags
  useEffect(() => {
    document.title = 'About Andaman Trails | Discover Our Story';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Learn about Andaman Trails, our travel philosophy, personalized experiences and vision for creating unforgettable journeys across the Andaman Islands.'
      );
    }
  }, []);

  const handleDiscoverStory = () => {
    const el = document.getElementById('brand-intro-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="about-master-page">
      <style>{`
        .about-master-page {
          min-height: 100vh;
          background: #FAF4EE;
          color: #0B2545;
          font-family: 'Inter', sans-serif;
          position: relative;
          overflow-x: hidden;
        }
      `}</style>

      {/* 1. HERO SECTION (65-75vh) */}
      <AboutHero onDiscoverStory={handleDiscoverStory} />

      {/* 2. BRAND INTRODUCTION */}
      <BrandIntroduction />

      {/* 3. OUR STORY TIMELINE */}
      <StoryTimeline />

      {/* 4. SEE ANDAMAN DIFFERENTLY (3D MAP) */}
      {/* <AboutMapExperience /> */}

      {/* 5. OUR MISSION */}
      <AboutMission />

      {/* 6. OUR VISION */}
      <AboutVision />

      {/* 7. WHY TRAVEL WITH ANDAMAN TRAILS */}
      <WhyAndamanTrails />

      {/* 8. WHAT WE BELIEVE IN (VALUES) */}
      <AboutValues />

      {/* 9. ROOTED IN ANDAMAN */}
      <LocalExperience />

      {/* 10. TRAVEL PHILOSOPHY */}
      <TravelPhilosophy />

      {/* 11. THE PEOPLE BEHIND THE JOURNEY */}
      <TeamSection />

      {/* 12. TRUST / IMPACT STATS */}
      <AboutStats />

      {/* 13. SUSTAINABLE TRAVEL */}
      <SustainableTravel />

      {/* 14. TRAVELER STORIES PREVIEW - Commented out */}
      {/* <AboutTestimonials /> */}

      {/* 15. FINAL BRAND STATEMENT */}
      <AboutFinalCTA />

      {/* 16. FOOTER */}
      <FooterBottom />
    </div>
  );
}
