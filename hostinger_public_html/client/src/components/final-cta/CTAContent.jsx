import React from 'react';

const CTAContent = () => {
  return (
    <div className="text-center z-20 relative max-w-4xl mx-auto px-4 flex flex-col items-center">
      {/* Eyebrow */}
      <span className="font-['Space_Grotesk'] font-extrabold text-[#2dd4bf] text-xs sm:text-sm tracking-[0.25em] mb-4 block uppercase">
        YOUR JOURNEY STARTS HERE
      </span>
      
      {/* Heading */}
      <h2 className="font-['Cormorant_Garamond'] font-bold text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight text-white drop-shadow-md">
        Let's Build Something Extraordinary
      </h2>
      
      {/* Subtitle */}
      <p className="text-slate-200 text-base md:text-xl max-w-2xl mx-auto font-normal leading-relaxed drop-shadow">
        From hidden islands to unforgettable experiences, let us create an Andaman journey made for you.
      </p>
    </div>
  );
};

export default CTAContent;
