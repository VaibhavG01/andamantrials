import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CinematicBackground from './CinematicBackground';
import CTAVisual from './CTAVisual';
import CTAContent from './CTAContent';
import CTAButtons from './CTAButtons';
import CTAStats from './CTAStats';

gsap.registerPlugin(ScrollTrigger);

const FinalCTA = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    const content = contentRef.current;

    // Simple scroll animation for the content
    gsap.fromTo(
      content.children,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full min-h-[75vh] md:min-h-[85vh] flex flex-col items-center justify-center py-24 overflow-hidden bg-[#03151F]"
      aria-label="Final Call to Action"
    >
      <CinematicBackground />
      <CTAVisual />
      
      <div ref={contentRef} className="relative z-20 w-full flex flex-col items-center">
        <CTAContent />
        <CTAButtons />
        <CTAStats />
      </div>

      {/* Bottom Micro Copy */}
      <div className="absolute bottom-6 left-0 w-full text-center z-20">
        <p className="text-teal-100/70 text-xs font-bold tracking-[0.2em] font-sans">
          DISCOVER. EXPLORE. EXPERIENCE ANDAMAN.
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
