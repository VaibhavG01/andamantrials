// src/components/testimonials/TravelerStories.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Master SECTION 08 — REAL TRAVELER STORIES Component.
// 2-column glassmorphism panel, video card, testimonial quote, controls & media strip.

import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, MessageSquare } from 'lucide-react';

import TravelerStoryCard from './TravelerStoryCard';
import TravelerTestimonial from './TravelerTestimonial';
import TestimonialControls from './TestimonialControls';
import TravelerMediaStrip from './TravelerMediaStrip';
import { testimonialService } from '../../api/testimonialService';

gsap.registerPlugin(ScrollTrigger);

export default function TravelerStories() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const loadStories = async () => {
      setLoading(true);
      try {
        const res = await testimonialService.getTestimonials();
        if (res && res.data && Array.isArray(res.data) && res.data.length > 0) {
          setTestimonials(res.data);
        }
      } catch (err) {
        console.error('Failed to load testimonials from DB:', err);
      } finally {
        setLoading(false);
      }
    };
    loadStories();
  }, []);

  // GSAP ScrollTrigger viewport reveal
  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'top 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handlePrev = () => {
    if (testimonials.length === 0) return;
    setCurrentIndex(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    if (testimonials.length === 0) return;
    setCurrentIndex(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const activeTestimonial = testimonials[currentIndex] || testimonials[0] || null;

  return (
    <section
      ref={sectionRef}
      id="testimonials-section"
      className="ts-stories-section"
    >
      <style>{`
        .ts-stories-section {
          position: relative;
          width: 100%;
          background: #f8fafc;
          color: #334155;
          padding: 70px 0 80px;
          border-bottom: 1px solid #e2e8f0;
          overflow: hidden;
        }

        .ts-ambient-glow {
          position: absolute;
          top: 30%;
          left: 50%;
          transform: translateX(-50%);
          width: 700px;
          height: 400px;
          background: radial-gradient(ellipse at center, rgba(22, 217, 255, 0.05) 0%, rgba(3, 21, 31, 0) 70%);
          pointer-events: none;
        }

        .ts-container {
          max-width: 1380px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
          z-index: 2;
        }

        .ts-header-sub {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.22em;
          color: #F06543;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 6px;
        }

        .ts-header-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(28px, 3.5vw, 42px);
          font-weight: 600;
          color: #0B2545;
          margin-bottom: 6px;
          line-height: 1.15;
        }

        .ts-master-card {
          background: #ffffff;
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1.5px solid #e2e8f0;
          border-radius: 24px;
          box-shadow: 0 10px 30px rgba(0, 45, 98, 0.06);
          padding: clamp(20px, 3vw, 36px);
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 28px;
          align-items: stretch;
        }
      `}</style>

      {/* Ambient background light */}
      <div className="ts-ambient-glow" />

      <div ref={contentRef} className="ts-container">
        {/* Section Header */}
        <div style={{ marginBottom: 32 }}>
          <div className="ts-header-sub">
            <Sparkles size={13} color="#F06543" />
            <span>REAL TRAVELER STORIES</span>
          </div>
          <h3 className="ts-header-title">
            See What Our Travelers Say
          </h3>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14.5, color: '#64748b', maxWidth: 580, margin: 0, lineHeight: 1.5 }}>
            Real journeys. Real memories. Verified experiences shared by travelers who explored the Andaman Islands with us.
          </p>
        </div>

        {/* 2-Column Glassmorphism Master Panel */}
        <div className="ts-master-card">
          {/* LEFT: Video Story Card */}
          <div>
            <TravelerStoryCard testimonial={activeTestimonial} />
          </div>

          {/* RIGHT: Testimonial Quote & Info */}
          <div>
            <TravelerTestimonial testimonial={activeTestimonial} />

            {/* Controls */}
            <TestimonialControls
              currentIndex={currentIndex}
              totalItems={testimonials.length}
              onPrev={handlePrev}
              onNext={handleNext}
              onSelectIndex={setCurrentIndex}
            />
          </div>
        </div>

        {/* Compact Horizontal Traveler Media Strip */}
        <TravelerMediaStrip
          testimonials={testimonials}
          activeIndex={currentIndex}
          onSelectIndex={setCurrentIndex}
        />
      </div>
    </section>
  );
}
