// src/components/technology/TechnologySection.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Master Section 10 Wrapper — Technology We Use.

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TechnologyVisual from './TechnologyVisual';
import TechnologyCategory from './TechnologyCategory';
import TechnologyFlow from './TechnologyFlow';
import TechnologyHighlight from './TechnologyHighlight';

const DEFAULT_TECH_CATEGORIES = [
  {
    id: 'frontend',
    title: 'FRONTEND',
    subtitle: 'Interactive UI & 3D Web Graphics',
    items: [
      { id: 'react', name: 'React.js', purpose: 'Interactive UI', iconType: 'react', accent: '#61dafb' },
      { id: 'three', name: 'Three.js', purpose: '3D Experiences', iconType: 'cube', accent: '#F06543' },
      { id: 'r3f', name: 'React Three Fiber', purpose: 'Declarative 3D', iconType: 'zap', accent: '#00b4d8' },
      { id: 'gsap', name: 'GSAP', purpose: 'Cinematic Animations', iconType: 'sparkles', accent: '#88ce02' },
      { id: 'tailwind', name: 'Tailwind CSS', purpose: 'Glassmorphic Styling', iconType: 'palette', accent: '#38bdf8' },
    ],
  },
  {
    id: 'backend',
    title: 'BACKEND',
    subtitle: 'Core Engine & Data Pipelines',
    items: [
      { id: 'node', name: 'Node.js', purpose: 'Backend Infrastructure', iconType: 'server', accent: '#68a063' },
      { id: 'express', name: 'Express.js', purpose: 'RESTful Routing', iconType: 'layers', accent: '#a8b2d1' },
      { id: 'mysql', name: 'MySQL & Sequelize', purpose: 'Relational Database', iconType: 'database', accent: '#00758f' },
      { id: 'jwt', name: 'JWT Auth', purpose: 'Secure Access Tokens', iconType: 'lock', accent: '#e63946' },
    ],
  },
  {
    id: 'infra',
    title: 'INFRASTRUCTURE',
    subtitle: 'Real-Time APIs & Payments',
    items: [
      { id: 'razorpay', name: 'Razorpay Gateway', purpose: 'Instant Payment Escrow', iconType: 'credit-card', accent: '#3395ff' },
      { id: 'vite', name: 'Vite Build Engine', purpose: 'Ultra-Fast HMR', iconType: 'zap', accent: '#bd34fe' },
    ],
  },
];

gsap.registerPlugin(ScrollTrigger);

const TechnologySection = ({ categories = DEFAULT_TECH_CATEGORIES }) => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const categoriesRef = useRef(null);
  const flowRef = useRef(null);
  const highlightRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.from(headerRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 85%',
        }
      });

      // Categories Animation
      if (categoriesRef.current) {
        gsap.from(categoriesRef.current.children, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.18,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: categoriesRef.current,
            start: 'top 80%',
          }
        });
      }

      // Flow Diagram Animation
      if (flowRef.current) {
        gsap.from(flowRef.current, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: flowRef.current,
            start: 'top 85%',
          }
        });
      }

      // Highlight Feature Card Animation
      if (highlightRef.current) {
        gsap.from(highlightRef.current, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: highlightRef.current,
            start: 'top 90%',
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="technology-section"
      ref={sectionRef}
      className="relative w-full py-20 bg-[#f8fafc] text-[#334155] overflow-hidden border-t border-[#e2e8f0]"
    >
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#F06543]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#0B2545]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-['Space_Grotesk'] text-xs sm:text-sm font-extrabold tracking-[0.25em] text-[#F06543] uppercase block mb-3">
            POWERING THE EXPERIENCE
          </span>
          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0B2545] mb-4">
            TECHNOLOGY WE USE
          </h2>
          <p className="font-['Inter'] text-sm sm:text-base text-[#475569] font-normal leading-relaxed">
            Built with modern technology to make your Andaman journey smarter, faster and more immersive.
          </p>
        </div>

        {/* Desktop & Tablet Layout: 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* LEFT: 3D Visualization */}
          <div className="lg:col-span-5 h-[420px] sm:h-[480px] lg:h-[560px] sticky top-24">
            <TechnologyVisual />
          </div>

          {/* RIGHT: Technology Stack Categories */}
          <div ref={categoriesRef} className="lg:col-span-7 space-y-6">
            {categories.map((category) => (
              <TechnologyCategory key={category.id} category={category} />
            ))}
          </div>
        </div>

        {/* Technology Data Pipeline Flow */}
        <div ref={flowRef} className="mb-16">
          <TechnologyFlow />
        </div>

        {/* Feature Highlight Card */}
        <div ref={highlightRef}>
          <TechnologyHighlight />
        </div>

      </div>
    </section>
  );
};

export default TechnologySection;
