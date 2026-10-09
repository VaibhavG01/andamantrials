// src/components/stays/StayExplorer.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Master SECTION 06 — SMART TRAVEL TOOLS DASHBOARD MODULE.
// 4 Compact Dashboard Cards: AI Trip Planner, Live Ferry Availability, Package Calculator & 360° Gallery.

import { useState } from 'react';
import { ArrowRightIcon } from '../navbar/NavIcons';

export default function StayExplorer() {
  // Package Calculator State
  const [travelers, setTravelers] = useState(2);
  const [days, setDays]           = useState(5);
  const [category, setCategory]   = useState('DELUXE');

  // 360° Gallery State
  const [activeThumb, setActiveThumb] = useState(0);
  const galleryItems = [
    { title: 'Radhanagar Beach 360°', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80' },
    { title: 'Cellular Jail Heritage 360°', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80' },
    { title: 'Elephant Beach Reef 360°', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80' },
  ];

  // Dynamic Price Calculation
  const baseRate = category === 'LUXURY' ? 5999 : category === 'DELUXE' ? 3999 : 2499;
  const totalPrice = (travelers * days * baseRate).toLocaleString('en-IN');

  return (
    <section
      id="smart-tools-section"
      style={{
        position: 'relative',
        width: '100%',
        background: '#ffffff',
        color: '#f5fafc',
        padding: '60px 0 80px',
      }}
    >
      <div style={{ maxWidth: 1340, margin: '0 auto', padding: '0 20px' }}>
        {/* Section Header */}
        <div style={{ marginBottom: 28 }}>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12.5, fontWeight: 800, letterSpacing: '0.22em', color: '#F06543', textTransform: 'uppercase', marginBottom: 2 }}>
            TRAVEL TECHNOLOGY
          </div>
          <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 600, color: '#f5fafc' }}>
            Smart Travel Tools
          </h3>
        </div>

        {/* 4 Compact Dashboard Cards Row (4 in 1 row desktop, 2x2 tablet, 1 col mobile) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 18 }}>
          {/* CARD 1: AI TRIP PLANNER */}
          <div className="glass-panel glass-card-hover" style={{ padding: 20, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: 320 }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12.5, fontWeight: 800, color: '#F06543', background: 'rgba(33, 230, 193, 0.15)', border: '1px solid rgba(33, 230, 193, 0.3)', padding: '2px 8px', borderRadius: 8 }}>
                  🤖 AI ASSISTANT
                </span>
                <span style={{ fontSize: 24 }}>✨</span>
              </div>
              <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 18, fontWeight: 800, color: '#f5fafc', marginBottom: 6 }}>
                AI Trip Planner
              </h4>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11.5, color: '#64748b', lineHeight: 1.5 }}>
                Get your Personalized Andaman Itinerary tailored to your pace, budget, and travel preferences instantly.
              </p>
            </div>

            <div style={{ background: 'rgba(22, 217, 255, 0.06)', border: '1px border rgba(22, 217, 255, 0.15)', borderRadius: 12, padding: 12, marginBottom: 12 }}>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12.5, color: '#F06543', fontWeight: 700 }}>
                💡 Instant Custom Itinerary Generator
              </div>
            </div>

            <button
              style={{
                width: '100%', background: 'linear-gradient(135deg, #FF6B4A, #F06543)', border: 'none',
                color: '#ffffff', fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 800,
                padding: '11px', borderRadius: 12, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
              }}
            >
              <span>PLAN WITH AI</span>
              <ArrowRightIcon size={12} />
            </button>
          </div>

          {/* CARD 2: LIVE FERRY AVAILABILITY */}
          <div className="glass-panel glass-card-hover" style={{ padding: 20, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: 320 }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12.5, fontWeight: 800, color: '#F06543', background: 'rgba(22, 217, 255, 0.15)', border: '1px solid rgba(22, 217, 255, 0.3)', padding: '2px 8px', borderRadius: 8 }}>
                  ⛵ LIVE STATUS
                </span>
                <span style={{ fontSize: 20 }}>🚢</span>
              </div>
              <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 18, fontWeight: 800, color: '#f5fafc', marginBottom: 4 }}>
                Live Ferry Availability
              </h4>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, color: '#F06543', fontWeight: 700, marginBottom: 10 }}>
                Port Blair ➔ Havelock Island
              </div>

              {/* Timings List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 12 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', background: '#e2e8f0', padding: '6px 10px', borderRadius: 8, fontSize: 12.5 }}>
                  <span style={{ color: '#334155', fontWeight: 700 }}>06:00 AM • Makruzz</span>
                  <span style={{ color: '#F06543', fontWeight: 800 }}>24 Seats Left</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', background: '#e2e8f0', padding: '6px 10px', borderRadius: 8, fontSize: 12.5 }}>
                  <span style={{ color: '#334155', fontWeight: 700 }}>08:30 AM • Nautika</span>
                  <span style={{ color: '#F06543', fontWeight: 800 }}>12 Seats Left</span>
                </div>
              </div>
            </div>

            <button
              style={{
                width: '100%', background: 'rgba(22, 217, 255, 0.12)', border: '1px solid rgba(22, 217, 255, 0.3)',
                color: '#F06543', fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 800,
                padding: '11px', borderRadius: 12, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
              }}
            >
              <span>VIEW ALL FERRIES</span>
              <ArrowRightIcon size={12} />
            </button>
          </div>

          {/* CARD 3: PACKAGE CALCULATOR */}
          <div className="glass-panel glass-card-hover" style={{ padding: 20, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: 320 }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12.5, fontWeight: 800, color: '#f0c060', background: 'rgba(240, 192, 96, 0.15)', border: '1px solid rgba(240, 192, 96, 0.3)', padding: '2px 8px', borderRadius: 8 }}>
                  🧮 PRICE ESTIMATOR
                </span>
                <span style={{ fontSize: 20 }}>💰</span>
              </div>
              <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 18, fontWeight: 800, color: '#f5fafc', marginBottom: 10 }}>
                Package Calculator
              </h4>

              {/* Dynamic Inputs */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 10 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 12.5, color: '#64748b' }}>Guests:</span>
                  <select value={travelers} onChange={e => setTravelers(Number(e.target.value))} style={{ background: '#f1f5f9', color: '#0f172a', border: '1px solid #e2e8f0', borderRadius: 6, padding: '2px 8px', fontSize: 12.5 }}>
                    <option value={1}>1 Person</option>
                    <option value={2}>2 Persons</option>
                    <option value={4}>4 Persons</option>
                  </select>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 12.5, color: '#64748b' }}>Duration:</span>
                  <select value={days} onChange={e => setDays(Number(e.target.value))} style={{ background: '#f1f5f9', color: '#0f172a', border: '1px solid #e2e8f0', borderRadius: 6, padding: '2px 8px', fontSize: 12.5 }}>
                    <option value={4}>4 Days</option>
                    <option value={5}>5 Days</option>
                    <option value={7}>7 Days</option>
                  </select>
                </div>
              </div>

              {/* Price Calculation Output */}
              <div style={{ background: 'rgba(33, 230, 193, 0.1)', border: '1px solid rgba(33, 230, 193, 0.3)', borderRadius: 10, padding: 8, textAlign: 'center' }}>
                <div style={{ fontSize: 12, color: '#64748b', letterSpacing: '0.1em' }}>ESTIMATED TOTAL PRICE</div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 18, fontWeight: 900, color: '#F06543' }}>₹{totalPrice}</div>
              </div>
            </div>

            <button
              style={{
                width: '100%', background: 'rgba(22, 217, 255, 0.12)', border: '1px solid rgba(22, 217, 255, 0.3)',
                color: '#F06543', fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 800,
                padding: '11px', borderRadius: 12, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
              }}
            >
              <span>CALCULATE PRICE</span>
              <ArrowRightIcon size={12} />
            </button>
          </div>

          {/* CARD 4: 360° DESTINATION GALLERY */}
          <div className="glass-panel glass-card-hover" style={{ padding: 20, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: 320 }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12.5, fontWeight: 800, color: '#F06543', background: 'rgba(22, 217, 255, 0.15)', border: '1px solid rgba(22, 217, 255, 0.3)', padding: '2px 8px', borderRadius: 8 }}>
                  🌐 360° PANORAMA
                </span>
                <span style={{ fontSize: 16 }}>🕶️</span>
              </div>
              <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 18, fontWeight: 800, color: '#f5fafc', marginBottom: 8 }}>
                360° Destination Gallery
              </h4>
            </div>

            {/* Panorama Image Box */}
            <div style={{ position: 'relative', height: 130, borderRadius: 12, overflow: 'hidden', marginBottom: 8 }}>
              <img src={galleryItems[activeThumb].image} alt="360 view" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ background: '#f8fafc', border: '1px solid #F06543', color: '#F06543', fontSize: 12.5, fontWeight: 800, padding: '4px 10px', borderRadius: 12 }}>
                  🔄 360° INTERACTIVE
                </span>
              </div>
            </div>

            {/* Controls Row */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: 12.5, color: '#64748b' }}>{galleryItems[activeThumb].title}</span>
              <div style={{ display: 'flex', gap: 4 }}>
                <button onClick={() => setActiveThumb(prev => (prev === 0 ? galleryItems.length - 1 : prev - 1))} style={{ background: 'none', border: '1px solid rgba(255,255,255,0.2)', color: '#334155', borderRadius: 6, padding: '2px 8px', fontSize: 11, cursor: 'pointer' }}>‹</button>
                <button onClick={() => setActiveThumb(prev => (prev === galleryItems.length - 1 ? 0 : prev + 1))} style={{ background: 'none', border: '1px solid rgba(255,255,255,0.2)', color: '#334155', borderRadius: 6, padding: '2px 8px', fontSize: 11, cursor: 'pointer' }}>›</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
