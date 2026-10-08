// src/components/final-cta/CTAStats.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Section 11 Final CTA Trust Badges with Lucide Icons.

import React from 'react';
import { Clock, Users, Star, Building2 } from 'lucide-react';

const StatsItem = ({ value, label, icon: Icon }) => (
  <div className="flex flex-col items-center justify-center p-4">
    <div className="text-[#F06543] mb-2">
      <Icon size={24} strokeWidth={2} />
    </div>
    <div className="text-2xl md:text-3xl font-extrabold text-[#0B2545] mb-1 font-['Space_Grotesk']">
      {value}
    </div>
    <div className="text-xs md:text-sm text-slate-600 font-bold uppercase tracking-wider text-center font-['Space_Grotesk']">
      {label}
    </div>
  </div>
);

const Divider = () => (
  <div className="hidden md:block w-px h-16 bg-[#e2e8f0]" />
);

const CTAStats = () => {
  return (
    <div className="z-20 relative mt-16 md:mt-24 w-full max-w-5xl mx-auto px-4">
      {/* Glassmorphic Panel */}
      <div className="bg-white/95 backdrop-blur-[20px] border border-slate-200 rounded-2xl p-6 md:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 md:gap-0 items-center justify-between">
          <StatsItem 
            value="15+" 
            label="Years Experience" 
            icon={Clock} 
          />
          
          <div className="hidden md:flex justify-center"><Divider /></div>
          
          <StatsItem 
            value="50K+" 
            label="Happy Travelers" 
            icon={Users} 
          />
          
          <div className="hidden md:flex justify-center"><Divider /></div>
          
          <StatsItem 
            value="4.9★" 
            label="Google Reviews" 
            icon={Star} 
          />

          <div className="hidden md:flex justify-center"><Divider /></div>
          
          <StatsItem 
            value="500+" 
            label="Companies" 
            icon={Building2} 
          />
        </div>
      </div>
    </div>
  );
};

export default CTAStats;
