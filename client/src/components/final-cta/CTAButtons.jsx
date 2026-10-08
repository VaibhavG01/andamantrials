// src/components/final-cta/CTAButtons.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Section 11 Primary & Secondary CTA Buttons with Lucide Icons.

import React from 'react';
import { ArrowRight, Compass } from 'lucide-react';

const CTAButtons = () => {
  const handlePrimaryClick = () => {
    window.location.href = '#hero-section';
  };

  const handleSecondaryClick = () => {
    const el = document.getElementById('destinations-explorer');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    else window.location.href = '#destinations-explorer';
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 z-20 relative mt-8">
      {/* Primary CTA */}
      <button
        onClick={handlePrimaryClick}
        className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#F06543] to-[#F06543] text-white font-['Space_Grotesk'] font-extrabold text-sm sm:text-base tracking-wider uppercase flex items-center justify-center gap-3 shadow-[0_4px_20px_rgba(13,148,136,0.5)] hover:shadow-[0_8px_30px_rgba(13,148,136,0.7)] hover:scale-105 transition-all duration-300 group cursor-pointer"
        aria-label="Start your Andaman trip planning journey"
      >
        <span>START THE JOURNEY</span>
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
      </button>

      {/* Secondary CTA */}
      <button
        onClick={handleSecondaryClick}
        className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white font-['Space_Grotesk'] font-bold text-sm sm:text-base tracking-wider uppercase flex items-center justify-center gap-3 hover:bg-white/20 hover:border-white/50 hover:text-teal-200 hover:scale-105 transition-all duration-300 cursor-pointer"
        aria-label="Explore island destinations"
      >
        <Compass className="w-5 h-5 text-teal-300" />
        <span>EXPLORE DESTINATIONS</span>
      </button>
    </div>
  );
};

export default CTAButtons;
