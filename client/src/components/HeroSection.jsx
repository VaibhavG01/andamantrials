// src/components/HeroSection.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Master hero section matching reference image layout — Canvas 3D + UI overlays.

import { useState, useCallback, useRef, useEffect, useMemo, Suspense } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { gsap } from 'gsap';

import AndamanScene     from './3d/AndamanScene';
import Navigation       from './Navigation';
import HeroText         from './HeroText';
import DestinationPanel from './DestinationPanel';
import MapControls      from './MapControls';
import Compass          from './Compass';
import { destinationService } from '../api/destinationService';
import { DESTINATIONS as FALLBACK_DESTINATIONS } from '../data/destinations';

// ── Detect day/night from system clock
function getIsNight() {
  const h = new Date().getHours();
  return h >= 19 || h < 6;
}

// ── Loading screen overlay
function LoadingOverlay({ onReady, isNight }) {
  const [pct, setPct]   = useState(40);
  const [hint, setHint] = useState('Raising the islands…');
  const bg = isNight
    ? 'radial-gradient(ellipse at 50% 60%, #040c22 0%, #010812 100%)'
    : 'radial-gradient(ellipse at 50% 60%, #071e3d 0%, #020c1a 100%)';

  useEffect(() => {
    let cur = 40;
    const iv = setInterval(() => {
      cur += 30;
      if (cur >= 100) {
        cur = 100;
        clearInterval(iv);
        setHint('Ready to explore!');
        setTimeout(onReady, 100);
      }
      setPct(Math.min(cur, 100));
    }, 60);
    return () => clearInterval(iv);
  }, [onReady]);

  return (
    <div style={{ position:'absolute', inset:0, background: bg, display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', gap:28 }}>
      <div style={{ position:'absolute', inset:0, overflow:'hidden', pointerEvents:'none' }}>
        {Array.from({ length: 28 }, (_, i) => (
          <div key={i} style={{
            position:'absolute', width:2, height:2, borderRadius:'50%',
            background: isNight ? '#ff6b4a' : '#f06543',
            left:`${Math.random()*100}%`, top:`${55+Math.random()*45}%`,
            animation:`floatPar ${3+Math.random()*3}s ease-in-out ${Math.random()*4}s infinite`, opacity:0,
          }} />
        ))}
      </div>
      <div style={{ textAlign:'center', zIndex:2 }}>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:12, marginBottom:32 }}>
          <div style={{ width:44, height:44, borderRadius:12, background:'linear-gradient(135deg,#ff6b4a,#f06543)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:22, boxShadow:'0 0 20px rgba(240,101,67,0.5)' }}>⛵</div>
          <div>
            <div style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:14, fontWeight:800, letterSpacing:'0.28em', color: '#ffffff' }}>ANDAMAN</div>
            <div style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:14, fontWeight:800, letterSpacing:'0.28em', color:'#f06543' }}>TRAILS</div>
          </div>
        </div>
        <div style={{ width:260, height:2, background:'rgba(255,255,255,0.2)', borderRadius:2, overflow:'hidden', margin:'0 auto 14px' }}>
          <div style={{ height:'100%', width:`${pct}%`, background:'linear-gradient(90deg,#ff6b4a,#f06543)', borderRadius:2, transition:'width 0.3s ease', boxShadow:'0 0 12px #f06543' }} />
        </div>
        <div style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize: 12.5, letterSpacing:'0.15em', color: '#faf4ee' }}>{hint}</div>
      </div>
      <style>{`@keyframes floatPar{0%{opacity:0;transform:translateY(40px)}20%{opacity:0.6}80%{opacity:0.3}100%{opacity:0;transform:translateY(-60px)}}`}</style>
    </div>
  );
}

// ── Prominent Scroll Down Button for all devices
function ScrollDownButton() {
  const handleScrollDown = () => {
    const nextEl = document.getElementById('destinations-explorer') || 
                   document.getElementById('packages-section') || 
                   document.getElementById('trust-bar');
    if (nextEl) {
      nextEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={handleScrollDown}
      style={{
        position: 'absolute',
        bottom: 24,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 60,
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        background: '#ffffff',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1.5px solid rgba(240, 101, 67, 0.5)',
        borderRadius: 30,
        padding: '10px 22px',
        color: '#f06543',
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: 11,
        fontWeight: 800,
        letterSpacing: '0.12em',
        cursor: 'pointer',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), 0 0 16px rgba(240, 101, 67, 0.25)',
        transition: 'all 0.3s ease',
        outline: 'none',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = '#f06543';
        e.currentTarget.style.transform = 'translateX(-50%) translateY(-3px)';
        e.currentTarget.style.boxShadow = '0 12px 40px rgba(240, 101, 67, 0.45)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(240, 101, 67, 0.5)';
        e.currentTarget.style.transform = 'translateX(-50%) translateY(0)';
        e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.4), 0 0 16px rgba(240, 101, 67, 0.25)';
      }}
      aria-label="Scroll Down to next section"
    >
      <span>SCROLL DOWN</span>
      <span className="scroll-bounce" style={{ display: 'inline-block', fontSize: 13 }}>↓</span>
    </button>
  );
}

// ── Camera azimuth tracker
function AzimuthTracker({ onUpdate }) {
  const { camera } = useThree();
  useFrame(() => {
    const az = Math.atan2(camera.position.x, camera.position.z) * (180 / Math.PI);
    onUpdate(az);
  });
  return null;
}

// ══════════════════════════════════════════════════════════════
// MAIN HERO SECTION
// ══════════════════════════════════════════════════════════════
export default function HeroSection({ onDestinationSelect }) {
  const isNight = useMemo(() => getIsNight(), []);

  const [loading,        setLoading]        = useState(true);
  const [uiVisible,      setUiVisible]      = useState(true);
  const [destinationsList, setDestinationsList] = useState(FALLBACK_DESTINATIONS);
  const [selectedDest,   setSelectedDest]   = useState(null);
  const [hoveredDest,    setHoveredDest]    = useState(null);
  const [azimuth,        setAzimuth]        = useState(0);
  const [isRotating,     setIsRotating]     = useState(true);

  const sceneRef     = useRef(null);
  const loadingRef   = useRef(null);
  const containerRef = useRef(null);

  // ── Fetch dynamic destinations from DB API
  useEffect(() => {
    destinationService.getDestinations()
      .then((res) => {
        if (res && res.data && Array.isArray(res.data) && res.data.length > 0) {
          // Merge DB content with 3D coordinate map
          const merged = res.data.map((dbDest) => {
            const fallback = FALLBACK_DESTINATIONS.find(
              (f) => f.id === dbDest.slug || f.name.toLowerCase() === dbDest.name.toLowerCase()
            ) || FALLBACK_DESTINATIONS[0];

            return {
              ...fallback,
              id: dbDest.slug || fallback.id,
              name: dbDest.name || fallback.name,
              subtitle: dbDest.subtitle || fallback.subtitle,
              description: dbDest.description || fallback.description,
              shortDescription: dbDest.shortDescription || fallback.shortDescription,
              image: dbDest.heroImage || fallback.image,
              famousFor: dbDest.famousFor || fallback.famousFor,
              bestSeason: dbDest.bestTime || fallback.bestSeason,
              idealStay: dbDest.idealStay || fallback.idealStay,
              badge: dbDest.badge || fallback.badge,
            };
          });
          setDestinationsList(merged);
        }
      })
      .catch(() => {});
  }, []);

  // ── Hide loading screen
  const handleLoadingDone = useCallback(() => {
    const el = loadingRef.current;
    if (!el) return;
    gsap.to(el, { opacity:0, duration:0.8, ease:'power2.inOut', onComplete: () => setLoading(false) });
  }, []);

  const handleIntroComplete = useCallback(() => {
    setUiVisible(true);
  }, []);

  // ── Island click
  const handleIslandClick = useCallback((destination) => {
    setSelectedDest(destination);
  }, []);

  // Expose destination selection if handler provided
  useEffect(() => {
    if (onDestinationSelect) {
      onDestinationSelect((destId) => {
        const found = destinationsList.find(d => d.id === destId);
        if (found) handleIslandClick(found);
      });
    }
  }, [onDestinationSelect, handleIslandClick, destinationsList]);

  // ── Panel close
  const handlePanelClose = useCallback(() => {
    setSelectedDest(null);
    sceneRef.current?.resetView();
  }, []);

  const handleExplore = useCallback(() => {
    const havelock = destinationsList.find(d => d.id === 'havelock' || d.id === 'havelock-island') || destinationsList[0];
    handleIslandClick(havelock);
  }, [handleIslandClick, destinationsList]);

  // ── Control handlers
  const handleRotate = useCallback((val) => {
    const next = val ?? !isRotating;
    setIsRotating(next);
    sceneRef.current?.toggleRotate(next);
  }, [isRotating]);

  const handleZoomIn     = useCallback(() => { sceneRef.current?.zoomIn();  }, []);
  const handleZoomOut    = useCallback(() => { sceneRef.current?.zoomOut(); }, []);
  const handleTilt       = useCallback(() => { sceneRef.current?.tilt();    }, []);
  const handleReset      = useCallback(() => {
    setSelectedDest(null);
    sceneRef.current?.resetView();
  }, []);
  const handleCompassClick = useCallback(() => {
    sceneRef.current?.alignNorth();
  }, []);
  const handleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) containerRef.current?.requestFullscreen?.();
    else document.exitFullscreen?.();
  }, []);

  const sceneBg = isNight ? '#010812' : '#010d1f';
  const godRayColor = isNight
    ? 'conic-gradient(from 155deg at 50% 0%, transparent 10deg, rgba(100,130,200,0.015) 12deg, transparent 14deg)'
    : 'conic-gradient(from 155deg at 50% 0%, transparent 10deg, rgba(240,192,96,0.025) 12deg, transparent 14deg, transparent 22deg, rgba(240,192,96,0.03) 24deg, transparent 26deg)';

  const [showFilmModal, setShowFilmModal] = useState(false);
  const [isHeroInView, setIsHeroInView] = useState(true);

  // Stop WebGL draw calls when Hero is not in viewport (boosts scroll performance to 120fps)
  useEffect(() => {
    if (!containerRef.current || typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroInView(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const handleFilmClick = useCallback(() => {
    setShowFilmModal(true);
  }, []);

  return (
    <div
      id="hero-section"
      ref={containerRef}
      style={{ position:'relative', width:'100vw', height:'100vh', minHeight:600, overflow:'hidden', background: sceneBg }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,600&family=Inter:wght@300;400;500&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
        @keyframes godRay { 0%,100%{opacity:0.45} 50%{opacity:0.9} }
        @keyframes scrollBounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(5px)} }
        * { -webkit-tap-highlight-color: transparent; }
      `}</style>

      {/* ── THREE.JS CANVAS ── */}
      <Canvas
        style={{ position:'absolute', inset:0 }}
        shadows={{ type: THREE.PCFShadowMap }}
        gl={{ antialias: true, alpha: false, powerPreference: 'high-performance', stencil: false, preserveDrawingBuffer: false }}
        camera={{ fov: 55, near: 0.1, far: 200 }}
        frameloop={isHeroInView ? 'always' : 'never'}
        onCreated={({ gl }) => {
          gl.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = isNight ? 0.85 : 1.1;
          gl.shadowMap.enabled = true;
          gl.shadowMap.type = THREE.PCFShadowMap;
        }}
        dpr={[1, 1.5]}
      >
        <Suspense fallback={null}>
          <AndamanScene
            ref={sceneRef}
            destinations={destinationsList}
            selectedId={selectedDest?.id}
            hoveredId={hoveredDest?.id}
            onIslandClick={handleIslandClick}
            onIslandHover={setHoveredDest}
            onIntroComplete={handleIntroComplete}
            isNight={isNight}
          />
        </Suspense>
        <AzimuthTracker onUpdate={setAzimuth} />
      </Canvas>

      {/* Vignette */}
      <div style={{ position:'absolute', inset:0, pointerEvents:'none', zIndex:5, background:'radial-gradient(ellipse at center, transparent 52%, rgba(1,8,18,0.6) 100%)' }} />

      {/* God rays */}
      <div style={{ position:'absolute', top:'-5%', left:'55%', width:'70%', height:'65%', background: godRayColor, pointerEvents:'none', zIndex:4, animation:'godRay 8s ease-in-out infinite' }} />

      {/* ── UI OVERLAY LAYER ── */}
      {/* Top Navigation */}
      <Navigation isNight={isNight} />

      {/* Hero Typography (Left Side) */}
      <HeroText
        onExplore={handleExplore}
        onFilm={handleFilmClick}
        selectedId={selectedDest?.id}
        isNight={isNight}
      />

      {/* Destination Card (Bottom Left) */}
      {selectedDest && (
        <DestinationPanel
          destination={selectedDest}
          onClose={handlePanelClose}
          isNight={isNight}
        />
      )}

      {/* Map Controls (Middle Right Vertical Card) */}
      <MapControls
        visible={uiVisible}
        isNight={isNight}
        isRotating={isRotating}
        onRotate={handleRotate}
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onTilt={handleTilt}
        onReset={handleReset}
        onFullscreen={handleFullscreen}
      />

      {/* Compass (Top Right) */}
      <Compass azimuth={azimuth} visible={uiVisible} isNight={isNight} onClick={handleCompassClick} />

      {/* Prominent Scroll Down Button for all devices */}
      <ScrollDownButton />

      {/* Loading Screen */}
      {loading && (
        <div ref={loadingRef} style={{ position:'absolute', inset:0, zIndex:9999 }}>
          <LoadingOverlay onReady={handleLoadingDone} isNight={isNight} />
        </div>
      )}

      {/* Direct Hero Video Modal Overlay */}
      {showFilmModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999999,
            background: 'rgba(0, 45, 98, 0.88)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'heroModalFade 0.3s ease',
          }}
          onClick={() => setShowFilmModal(false)}
        >
          <style>{`
            @keyframes heroModalFade { from { opacity: 0; } to { opacity: 1; } }
          `}</style>

          {/* Close button */}
          <button
            onClick={() => setShowFilmModal(false)}
            style={{
              position: 'absolute',
              top: 24,
              right: 24,
              width: 48,
              height: 48,
              borderRadius: '50%',
              background: '#FFF0EB',
              border: '1px solid #FFD3C4',
              color: '#F06543',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10,
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#F06543'; e.currentTarget.style.color = '#ffffff'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#FFF0EB'; e.currentTarget.style.color = '#F06543'; }}
            aria-label="Close Film Modal"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>

          {/* Video Container */}
          <div
            style={{
              position: 'relative',
              width: '90vw',
              maxWidth: 1100,
              aspectRatio: '16/9',
              borderRadius: 24,
              overflow: 'hidden',
              border: '1px solid #e2e8f0',
              boxShadow: '0 32px 90px rgba(0, 0, 0, 0.85), 0 0 50px rgba(22, 217, 255, 0.18)',
              background: '#000',
            }}
            onClick={e => e.stopPropagation()}
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0&modestbranding=1"
              title="Andaman 4K Cinematic Experience"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ display: 'block', borderRadius: 24 }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
