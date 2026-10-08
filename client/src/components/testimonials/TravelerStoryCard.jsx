// src/components/testimonials/TravelerStoryCard.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Left Video/Story Card Component — video thumbnail, play button & duration badge.

import React from 'react';
import { Play, Video } from 'lucide-react';

export default function TravelerStoryCard({ testimonial }) {
  if (!testimonial) return null;

  return (
    <div
      style={{
        position: 'relative',
        borderRadius: 22,
        overflow: 'hidden',
        height: 320,
        width: '100%',
        boxShadow: '0 16px 48px rgba(0, 0, 0, 0.65)',
        border: '1.5px solid #e2e8f0',
      }}
    >
      {/* High-res Video Thumbnail */}
      <img
        src={testimonial.videoThumbnail}
        alt={testimonial.name}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />

      {/* Dark Vignette Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(4, 19, 34, 0.85) 0%, rgba(4, 19, 34, 0.4) 50%, transparent 100%)',
        }}
      />

      {/* Top Tag Badge */}
      <div style={{ position: 'absolute', top: 16, left: 16, display: 'flex', gap: 6 }}>
        <span
          style={{
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            border: '1px solid #e2e8f0',
            color: '#0B2545',
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 11.5,
            fontWeight: 800,
            padding: '5px 12px',
            borderRadius: 20,
            letterSpacing: '0.08em',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
          }}
        >
          <Video size={13} color="#F06543" />
          <span>{testimonial.tag}</span>
        </span>
      </div>

      {/* Central Play Button */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 12,
        }}
      >
        <button
          style={{
            width: 60,
            height: 60,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #0B2545, #F06543)',
            border: '2px solid rgba(255, 255, 255, 0.4)',
            color: '#ffffff',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 30px rgba(0, 45, 98, 0.6), 0 0 20px rgba(13, 148, 136, 0.3)',
            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            paddingLeft: 3,
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.12)'; e.currentTarget.style.boxShadow = '0 12px 36px rgba(13, 148, 136, 0.8)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1.0)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 45, 98, 0.6)'; }}
          aria-label="Play video testimonial"
        >
          <Play size={22} fill="#ffffff" color="#ffffff" />
        </button>

        <span
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 11.5,
            fontWeight: 800,
            color: '#ffffff',
            letterSpacing: '0.12em',
            background: 'rgba(4, 19, 34, 0.85)',
            backdropFilter: 'blur(8px)',
            padding: '5px 14px',
            borderRadius: 14,
            border: '1px solid rgba(255, 255, 255, 0.25)',
            boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
          }}
        >
          WATCH VIDEO ({testimonial.videoDuration})
        </span>
      </div>
    </div>
  );
}

