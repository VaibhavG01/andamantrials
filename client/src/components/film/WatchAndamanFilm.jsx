// src/components/film/WatchAndamanFilm.jsx
// ─────────────────────────────────────────────────────────────────────────────
// WATCH ANDAMAN FILM SECTION — Cinematic 4K Video Showcase & Modal Player

import React, { useState, useEffect } from 'react';
import {
  Play, Sparkles, X, Film, Clock, Eye,
  Maximize2, Volume2, Waves, Compass, Camera, Share2,
  ChevronRight, ChevronLeft, Award, Tv, ShieldCheck,
} from 'lucide-react';
import { apiClient } from '../../api/apiClient';

// ─── CHAPTER / SCENE DATA ─────────────────────────────────────────────────────
const CHAPTERS = [
  {
    id: 'ch1',
    time: '0:15',
    title: 'Aerial Over Havelock',
    location: 'Radhanagar Beach',
    thumb: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=75',
    videoId: 'dQw4w9WgXcQ', // Sample video ID or trailer URL
  },
  {
    id: 'ch2',
    time: '1:02',
    title: 'Coral Reef Scuba Dive',
    location: 'Elephant Beach Reef',
    thumb: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=500&q=75',
    videoId: 'dQw4w9WgXcQ',
  },
  {
    id: 'ch3',
    time: '2:15',
    title: 'Bioluminescent Kayaking',
    location: 'Havelock Mangrove Creek',
    thumb: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=500&q=75',
    videoId: 'dQw4w9WgXcQ',
  },
  {
    id: 'ch4',
    time: '3:10',
    title: 'Sunset Cruise Horizons',
    location: 'Port Blair Bay',
    thumb: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=500&q=75',
    videoId: 'dQw4w9WgXcQ',
  },
];

// Film statistics
const FILM_STATS = [
  { label: 'Resolution', value: '4K Ultra HD' },
  { label: 'Duration', value: '3 Min 45 Sec' },
  { label: 'Audio', value: 'Dolby Atmos 5.1' },
  { label: 'Views', value: '250K+ Views' },
];

export default function WatchAndamanFilm() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeChapter, setActiveChapter] = useState(0);
  const [chapters, setChapters] = useState([]);
  const sliderRef = React.useRef(null);

  const scrollSlider = (direction) => {
    const container = sliderRef.current;
    if (container) {
      const scrollAmount = 300;
      if (direction === 'left') {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    const loadChapters = async () => {
      try {
        const res = await apiClient('/film-chapters');
        if (res && res.data && res.data.length > 0) {
          setChapters(res.data);
        }
      } catch (err) {
        console.warn('Failed to load dynamic film chapters:', err);
      }
    };
    loadChapters();
  }, []);

  const displayChapters = (chapters.length > 0 ? chapters : CHAPTERS).map((ch, idx) => {
    const getYouTubeId = (url) => {
      if (!url) return 'dQw4w9WgXcQ';
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
      const match = url.match(regExp);
      return (match && match[2].length === 11) ? match[2] : url;
    };
    return {
      id: ch.id,
      chapterId: ch.chapterId || `ch${idx + 1}`,
      time: ch.time || `Scene ${idx + 1}`,
      title: ch.title || `Andaman Highlight ${idx + 1}`,
      location: ch.location || 'Tropical Bay of Bengal',
      thumb: ch.thumb,
      type: ch.type || '4K ULTRA HD',
      description: ch.description || 'Immerse yourself in crystal turquoise waters, untouched white sand beaches, coral marine life, and golden sunsets captured in breathtaking high-definition film.',
      videoId: ch.videoId || getYouTubeId(ch.videoUrl)
    };
  });

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsPlaying(false);
    };
    if (isPlaying) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isPlaying]);

  return (
    <section id="watch-film-section" className="film-section">
      <style>{`
        .film-section {
          position: relative;
          width: 100%;
          background: #f8fafc;
          color: #334155;
          padding: 80px 0 96px;
          border-bottom: 1px solid #e2e8f0;
          overflow: hidden;
        }

        /* Ambient Glow & Waves */
        .film-glow-center {
          position: absolute;
          top: 30%; left: 50%;
          transform: translate(-50%, -50%);
          width: 800px; height: 500px;
          background: radial-gradient(ellipse at center, rgba(13, 148, 136, 0.06) 0%, rgba(0, 45, 98, 0.03) 45%, transparent 70%);
          pointer-events: none;
        }

        .film-container {
          max-width: 1380px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
          z-index: 2;
        }

        /* Header */
        .film-header {
          text-align: center;
          max-width: 680px;
          margin: 0 auto 44px;
        }
        .film-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.22em;
          color: #F06543;
          background: #FFF0EB;
          border: 1px solid rgba(13, 148, 136, 0.25);
          padding: 6px 16px;
          border-radius: 30px;
          text-transform: uppercase;
          margin-bottom: 14px;
          backdrop-filter: blur(8px);
        }
        .film-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(32px, 4.5vw, 54px);
          font-weight: 600;
          color: #0B2545;
          line-height: 1.1;
          margin: 0 0 14px;
        }
        .film-desc {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          color: #64748b;
          line-height: 1.6;
          margin: 0;
        }

        /* Hero Video Showcase Card */
        .film-hero-card {
          position: relative;
          width: 100%;
          height: clamp(360px, 50vw, 580px);
          border-radius: 28px;
          overflow: hidden;
          border: 1.5px solid #e2e8f0;
          box-shadow: 0 24px 64px rgba(0, 0, 0, 0.65), 0 0 40px rgba(22, 217, 255, 0.08);
          background: #f8fafc;
          cursor: pointer;
          transition: transform 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease;
        }
        .film-hero-card:hover {
          transform: translateY(-4px);
          border-color: rgba(33, 230, 193, 0.5);
          box-shadow: 0 32px 80px rgba(0, 0, 0, 0.75), 0 0 50px rgba(22, 217, 255, 0.15);
        }

        .film-poster {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .film-hero-card:hover .film-poster {
          transform: scale(1.04);
        }

        .film-poster-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0, 45, 98, 0.4) 0%, rgba(0, 45, 98, 0.2) 50%, rgba(0, 45, 98, 0.8) 100%);
        }

        /* Floating Spec Pills Top Left */
        .film-top-tags {
          position: absolute;
          top: 24px;
          left: 24px;
          display: flex;
          align-items: center;
          gap: 10px;
          z-index: 3;
        }
        .film-tag-pill {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #ffffff;
          background: rgba(8, 27, 51, 0.85);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          padding: 6px 14px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .film-tag-pill.cyan {
          color: #2dd4bf;
          border-color: rgba(45, 212, 191, 0.5);
          background: rgba(8, 27, 51, 0.85);
        }
        .film-tag-pill.gold {
          color: #f59e0b;
          border-color: rgba(245, 158, 11, 0.5);
          background: rgba(8, 27, 51, 0.85);
        }

        /* Center Play Button with Ripple Animation */
        .film-play-trigger {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 4;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }
        .film-play-btn-circle {
          position: relative;
          width: 88px;
          height: 88px;
          border-radius: 50%;
          background: linear-gradient(135deg, #FF6B4A 0%, #F06543 100%);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 12px 40px rgba(240, 101, 67, 0.5), 0 0 0 12px rgba(240, 101, 67, 0.2);
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .film-hero-card:hover .film-play-btn-circle {
          transform: scale(1.12);
          box-shadow: 0 16px 50px rgba(240, 101, 67, 0.7), 0 0 0 18px rgba(240, 101, 67, 0.3);
        }
        .film-play-btn-circle::before {
          content: '';
          position: absolute;
          inset: -20px;
          border-radius: 50%;
          border: 1.5px solid rgba(45, 212, 191, 0.5);
          animation: pulseRing 2.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
        }
        @keyframes pulseRing {
          0% { transform: scale(0.85); opacity: 0.8; }
          100% { transform: scale(1.4); opacity: 0; }
        }

        .film-play-text {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.18em;
          color: #ffffff;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.8);
          background: rgba(8, 27, 51, 0.85);
          backdrop-filter: blur(8px);
          padding: 6px 18px;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.25);
        }

        /* Bottom Info Overlay inside Hero Card */
        .film-hero-bottom-info {
          position: absolute;
          bottom: 28px;
          left: 28px;
          right: 28px;
          z-index: 3;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
        }
        .film-film-title-sub {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(22px, 3vw, 34px);
          font-weight: 700;
          color: #ffffff;
          text-shadow: 0 2px 12px rgba(0, 0, 0, 0.9);
          margin-bottom: 6px;
          line-height: 1.1;
        }
        .film-film-location-row {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px;
          font-weight: 800;
          color: #2dd4bf;
          text-shadow: 0 1px 4px rgba(0,0,0,0.8);
          display: flex;
          align-items: center;
          gap: 6px;
        }



        /* Chapter Navigation Header */
        .film-chapters-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }
        .film-chapters-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 14px;
          font-weight: 800;
          letter-spacing: 0.1em;
          color: #0B2545;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        /* Chapter Cards Grid replaced with slider */
        .film-chapters-scroll-container {
          display: flex;
          gap: 18px;
          overflow-x: auto;
          scroll-behavior: smooth;
          scrollbar-width: none;
          padding: 10px 4px;
        }
        .film-chapters-scroll-container::-webkit-scrollbar {
          display: none;
        }
        .film-slider-arrow-btn {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          color: #0B2545;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .film-slider-arrow-btn:hover {
          background: #002d62;
          border-color: #002d62;
          color: #ffffff;
        }

        .film-chapter-card {
          flex: 0 0 280px;
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 18px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.35s ease;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 14px rgba(0, 45, 98, 0.05);
        }
        .film-chapter-card:hover, .film-chapter-card.active {
          border-color: #F06543;
          transform: translateY(-4px);
          box-shadow: 0 14px 32px rgba(0, 45, 98, 0.12);
          background: #ffffff;
        }
        .film-chapter-thumb-box {
          position: relative;
          height: 140px;
          overflow: hidden;
        }
        .film-chapter-thumb-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .film-chapter-card:hover .film-chapter-thumb-box img {
          transform: scale(1.08);
        }
        .film-chapter-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0, 45, 98, 0.4) 0%, transparent 60%);
        }
        .film-time-pill {
          position: absolute;
          bottom: 10px;
          right: 10px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11.5px;
          font-weight: 800;
          color: #0f172a;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(6px);
          padding: 4px 10px;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          gap: 4px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.1);
        }
        .film-chapter-play-icon {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: #F06543;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease, transform 0.3s ease;
          box-shadow: 0 4px 12px rgba(13, 148, 136, 0.4);
        }
        .film-chapter-card:hover .film-chapter-play-icon {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1.08);
        }

        .film-chapter-body {
          padding: 14px 16px;
        }
        .film-chapter-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 14px;
          font-weight: 800;
          color: #0B2545;
          margin-bottom: 4px;
        }
        .film-chapter-loc {
          font-family: 'Inter', sans-serif;
          font-size: 12.5px;
          color: #F06543;
          display: flex;
          align-items: center;
          gap: 4px;
        }  color: #0B2545;
          margin-bottom: 4px;
        }
        .film-chapter-loc {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: #F06543;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        /* Fullscreen Video Modal */
        .film-modal {
          position: fixed;
          inset: 0;
          z-index: 999999;
          background: #ffffff;
          backdrop-filter: blur(24px);
          display: flex;
          align-items: center;
          justify-content: center;
          animation: modalFadeIn 0.3s ease;
        }
        @keyframes modalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .film-modal-content {
          position: relative;
          width: 90vw;
          max-width: 1100px;
          aspect-ratio: 16/9;
          border-radius: 24px;
          overflow: hidden;
          border: 1px solid #e2e8f0;
          box-shadow: 0 32px 90px rgba(0, 0, 0, 0.85), 0 0 50px rgba(22, 217, 255, 0.15);
          background: #000;
        }
        .film-close-btn {
          position: absolute;
          top: 24px;
          right: 24px;
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background: rgba(22, 217, 255, 0.15);
          border: 1px solid rgba(22, 217, 255, 0.35);
          color: #F06543;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          transition: all 0.25s ease;
        }
        .film-close-btn:hover {
          background: #F06543;
          color: #ffffff;
          transform: rotate(90deg);
        }
      `}</style>

      {/* Background Ambient Element */}
      <div className="film-glow-center" />

      <div className="film-container">

        {/* ── SECTION HEADER ── */}
        <div className="film-header">
          <div className="film-badge">
            <Film size={13} color="#F06543" />
            <span>CINEMATIC SHOWCASE</span>
          </div>
          <h2 className="film-title">
            Experience Andaman in 4K
          </h2>
          <p className="film-desc">
            {displayChapters[activeChapter]?.description}
          </p>
        </div>

        {/* ── HERO VIDEO SHOWCASE CARD ── */}
        <div
          className="film-hero-card"
          onClick={() => setIsPlaying(true)}
          role="button"
          aria-label="Play Andaman Film"
        >
          {/* Main Cover Image */}
          <img
            src={displayChapters[activeChapter]?.thumb || "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=90"}
            alt="Andaman Film Cinematic Cover"
            className="film-poster"
          />
          <div className="film-poster-overlay" />

          {/* Top Feature Badges */}
          <div className="film-top-tags">
            <span className="film-tag-pill cyan">
              <Tv size={12} />
              {displayChapters[activeChapter]?.type}
            </span>
            <span className="film-tag-pill gold">
              <Award size={12} />
              OFFICIAL FILM
            </span>
            <span className="film-tag-pill">
              <Clock size={12} />
              {displayChapters[activeChapter]?.time}
            </span>
          </div>

          {/* Center Play Button */}
          <div className="film-play-trigger">
            <div className="film-play-btn-circle">
              <Play size={36} style={{ marginLeft: '4px' }} fill="#0B2545" />
            </div>
            <span className="film-play-text">WATCH FULL FILM</span>
          </div>

          {/* Bottom Card Title & Sub */}
          <div className="film-hero-bottom-info">
            <div>
              <div className="film-film-title-sub">
                {displayChapters[activeChapter]?.title}
              </div>
              <div className="film-film-location-row">
                <Compass size={13} color="#F06543" />
                <span>Havelock • Neil • Port Blair • Baratang</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 6,
                fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 700, color: '#64748b',
                background: '#f8fafc', padding: '6px 14px', borderRadius: 20,
                border: '1px solid #e2e8f0', backdropFilter: 'blur(8px)'
              }}>
                <Eye size={12} color="#F06543" />
                <span>250K+ Views</span>
              </div>
            </div>
          </div>
        </div>



        {/* ── SCENE CHAPTERS ── */}
        <div>
          <div className="film-chapters-header">
            <div>
              <div className="film-chapters-title">
                <Sparkles size={14} color="#F06543" />
                <span>CHAPTER HIGHLIGHTS</span>
              </div>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: '#64748b', marginTop: 4, display: 'block' }}>
                Select a chapter to jump to scene
              </span>
            </div>

            {/* Slider Arrow Controls */}
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <button 
                onClick={() => scrollSlider('left')}
                className="film-slider-arrow-btn"
                aria-label="Scroll Left"
              >
                <ChevronLeft size={16} />
              </button>
              <button 
                onClick={() => scrollSlider('right')}
                className="film-slider-arrow-btn"
                aria-label="Scroll Right"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <div className="film-chapters-slider-wrapper">
            <div className="film-chapters-scroll-container" ref={sliderRef}>
              {displayChapters.map((ch, idx) => (
                <div
                  key={ch.chapterId || ch.id}
                  className={`film-chapter-card${activeChapter === idx ? ' active' : ''}`}
                  onClick={() => {
                    setActiveChapter(idx);
                    setIsPlaying(true);
                  }}
                >
                  <div className="film-chapter-thumb-box">
                    <img src={ch.thumb} alt={ch.title} loading="lazy" />
                    <div className="film-chapter-overlay" />
                    <span className="film-time-pill">
                      <Clock size={10} color="#F06543" />
                      {ch.time}
                    </span>
                    <div className="film-chapter-play-icon">
                      <Play size={16} fill="#0B2545" style={{ marginLeft: '2px' }} />
                    </div>
                  </div>

                  <div className="film-chapter-body">
                    <div className="film-chapter-title">{ch.title}</div>
                    <div className="film-chapter-loc">
                      <Camera size={11} />
                      <span>{ch.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* ── FULLSCREEN VIDEO MODAL ── */}
      {isPlaying && (
        <div className="film-modal" onClick={() => setIsPlaying(false)}>
          <button
            className="film-close-btn"
            onClick={() => setIsPlaying(false)}
            aria-label="Close video"
          >
            <X size={22} />
          </button>

          <div className="film-modal-content" onClick={(e) => e.stopPropagation()}>
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube-nocookie.com/embed/${displayChapters[activeChapter]?.videoId || 'dQw4w9WgXcQ'}?autoplay=1&rel=0&modestbranding=1`}
              title="Andaman Islands Official Cinematic Film"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ display: 'block', borderRadius: 24 }}
            />
          </div>
        </div>
      )}
    </section>
  );
}
