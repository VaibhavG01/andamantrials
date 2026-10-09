// src/components/testimonials/TestimonialControls.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Testimonial Controls Component — Previous / Next buttons & pagination dots.

import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function TestimonialControls({
  currentIndex,
  totalItems,
  onPrev,
  onNext,
  onSelectIndex,
}) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 22 }}>
      {/* Pagination Dots */}
      <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
        {Array.from({ length: totalItems }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => onSelectIndex(idx)}
            style={{
              width: idx === currentIndex ? 24 : 8,
              height: 8,
              borderRadius: 4,
              background: idx === currentIndex ? 'linear-gradient(90deg, #F06543, #F06543)' : 'rgba(255, 255, 255, 0.2)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Prev / Next Nav Buttons */}
      <div style={{ display: 'flex', gap: 10 }}>
        <button
          onClick={onPrev}
          style={{
            width: 38,
            height: 38,
            borderRadius: '50%',
            background: '#ffffff',
            border: '1px solid #e2e8f0',
            color: '#F06543',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            backdropFilter: 'blur(8px)',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#0B2545'; e.currentTarget.style.color = '#ffffff'; }}
          onMouseLeave={e => { e.currentTarget.style.background = '#ffffff'; e.currentTarget.style.color = '#F06543'; }}
          aria-label="Previous Testimonial"
        >
          <ChevronLeft size={18} />
        </button>

        <button
          onClick={onNext}
          style={{
            width: 38,
            height: 38,
            borderRadius: '50%',
            background: '#ffffff',
            border: '1px solid #e2e8f0',
            color: '#F06543',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            backdropFilter: 'blur(8px)',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#0B2545'; e.currentTarget.style.color = '#ffffff'; }}
          onMouseLeave={e => { e.currentTarget.style.background = '#ffffff'; e.currentTarget.style.color = '#F06543'; }}
          aria-label="Next Testimonial"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}

