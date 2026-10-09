// src/components/destinations/DestinationExplorer.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Master SECTION 03 — COMPACT INTERACTIVE DESTINATION PANEL.
// 3D/isometric island visuals with direct navigation to island details page.

import { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRightIcon } from '../navbar/NavIcons';
import { destinationService } from '../../api/destinationService';

gsap.registerPlugin(ScrollTrigger);

const COMPACT_DESTINATIONS = [
  {
    id: 'port-blair',
    name: 'PORT BLAIR',
    sub: 'Capital & Heritage',
    icon: '🏛️',
    badge: 'CAPITAL',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80',
    desc: 'Gateway city, Cellular Jail & Ross Island.',
  },
  {
    id: 'havelock',
    name: 'HAVELOCK ISLAND',
    sub: 'Swaraj Dweep',
    icon: '🏝️',
    badge: 'TOP RATED',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
    desc: 'Radhanagar Beach & PADI Scuba Diving.',
  },
  {
    id: 'neil',
    name: 'NEIL ISLAND',
    sub: 'Shaheed Dweep',
    icon: '🪨',
    badge: 'SERENE',
    image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80',
    desc: 'Natural Rock Bridge & organic beaches.',
  },
  {
    id: 'baratang',
    name: 'BARATANG ISLAND',
    sub: 'Middle Andaman',
    icon: '🦇',
    badge: 'ADVENTURE',
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=600&q=80',
    desc: 'Limestone caves & mangrove creeks.',
  },
  {
    id: 'rangat',
    name: 'RANGAT ISLAND',
    sub: 'Middle Andaman',
    icon: '🐢',
    badge: 'ECO TOUR',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80',
    desc: 'Turtle nesting & Cuthbert Bay sanctuary.',
  },
];

export default function DestinationExplorer({ onDestinationSelect }) {
  const sectionRef = useRef(null);
  const scrollRef  = useRef(null);
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    destinationService.getDestinations()
      .then((res) => {
        if (res.data && Array.isArray(res.data) && res.data.length > 0) {
          const mapped = res.data.map((d, idx) => {
            let icon = '🏝️';
            let badge = 'POPULAR';
            let sub = 'Andaman Islands';

            const nameLower = (d.name || '').toLowerCase();
            if (nameLower.includes('port blair')) {
              icon = '🏛️';
              badge = 'CAPITAL';
              sub = 'Capital & Heritage';
            } else if (nameLower.includes('havelock') || nameLower.includes('swaraj')) {
              icon = '🏝️';
              badge = 'TOP RATED';
              sub = 'Swaraj Dweep';
            } else if (nameLower.includes('neil') || nameLower.includes('shaheed')) {
              icon = '🪨';
              badge = 'SERENE';
              sub = 'Shaheed Dweep';
            } else if (nameLower.includes('baratang')) {
              icon = '🦇';
              badge = 'ADVENTURE';
              sub = 'Middle Andaman';
            } else if (nameLower.includes('rangat')) {
              icon = '🐢';
              badge = 'ECO TOUR';
              sub = 'Eco Sanctuary';
            } else if (nameLower.includes('diglipur')) {
              icon = '⛰️';
              badge = 'PEAK WONDER';
              sub = 'North Andaman';
            } else if (nameLower.includes('nicobar')) {
              icon = '🌊';
              badge = 'BIOSPHERE';
              sub = 'Great Nicobar';
            }

            return {
              id: d.slug || (d.id ? `dest-${d.id}` : `dest-${idx}`),
              name: (d.name || 'Destination').split(' (')[0].toUpperCase(),
              sub,
              icon,
              badge,
              image: d.image || d.heroImage || 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
              desc: d.shortDescription || d.description || '',
            };
          });
          setDestinations(mapped);
        } else {
          setDestinations(COMPACT_DESTINATIONS);
        }
      })
      .catch(() => {
        setDestinations(COMPACT_DESTINATIONS);
      })
      .finally(() => setLoading(false));
  }, []);

  const handleScroll = (direction) => {
    if (!scrollRef.current) return;
    const amount = direction === 'left' ? -320 : 320;
    scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      id="destinations-explorer"
      style={{
        position: 'relative',
        width: '100%',
        background: '#faf4ee',
        color: '#2d3e50',
        padding: '60px 0 70px',
        borderTop: '1px solid #ebded2',
        borderBottom: '1px solid #ebded2',
      }}
    >
      <div style={{ maxWidth: 1340, margin: '0 auto', padding: '0 20px' }}>
        {/* Compact Header & Navigation Arrows */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
          <div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12.5, fontWeight: 800, letterSpacing: '0.22em', color: '#f06543', textTransform: 'uppercase', marginBottom: 2 }}>
              POPULAR DESTINATIONS
            </div>
            <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(26px, 3.2vw, 40px)', fontWeight: 700, color: '#0b2545', lineHeight: 1.1 }}>
              Discover Our Top Destinations
            </h3>
          </div>

          {/* Left / Right Nav Arrows */}
          <div style={{ display: 'flex', gap: 8 }}>
            <button
              onClick={() => handleScroll('left')}
              style={{
                width: 36, height: 36, borderRadius: '50%',
                background: '#ffffff', border: '1px solid #ebded2',
                color: '#0b2545', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'all 0.2s', outline: 'none', boxShadow: '0 2px 6px rgba(11,37,69,0.06)',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#f06543'; e.currentTarget.style.color = '#f06543'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#ebded2'; e.currentTarget.style.color = '#0b2545'; }}
              aria-label="Previous islands"
            >
              ←
            </button>
            <button
              onClick={() => handleScroll('right')}
              style={{
                width: 36, height: 36, borderRadius: '50%',
                background: '#ffffff', border: '1px solid #ebded2',
                color: '#0b2545', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'all 0.2s', outline: 'none', boxShadow: '0 2px 6px rgba(11,37,69,0.06)',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#f06543'; e.currentTarget.style.color = '#f06543'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#ebded2'; e.currentTarget.style.color = '#0b2545'; }}
              aria-label="Next islands"
            >
              →
            </button>
          </div>
        </div>

        {/* Horizontal 3D/Isometric Island Composition Track */}
        <div
          ref={scrollRef}
          style={{
            display: 'grid',
            gridAutoFlow: 'column',
            gridAutoColumns: 'clamp(240px, 22vw, 290px)',
            gap: 16,
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            paddingBottom: 10,
            scrollbarWidth: 'none',
          }}
        >
          {destinations.map((dest, idx) => (
            <a
              key={`${dest.id || 'dest'}-${idx}`}
              href={`/destination-details?id=${dest.id}`}
              className="glass-card-hover"
              style={{
                position: 'relative',
                borderRadius: 18,
                overflow: 'hidden',
                cursor: 'pointer',
                height: 240,
                scrollSnapAlign: 'start',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'between',
                padding: 16,
                textDecoration: 'none',
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                boxShadow: '0 8px 24px rgba(0, 45, 98, 0.08)',
              }}
            >
              {/* Image background with gradient overlay */}
              <img
                src={dest.image}
                alt={dest.name}
                style={{
                  position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
                  opacity: 0.85, transition: 'transform 0.4s ease',
                }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0, 45, 98, 0.95) 0%, rgba(0, 45, 98, 0.35) 60%, transparent 100%)' }} />

              {/* Top Header info */}
              <div style={{ position: 'relative', zIndex: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 900, color: '#ffffff', background: 'linear-gradient(135deg, #ff6b4a, #f06543)', padding: '3px 9px', borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.4)', textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>
                  {dest.badge}
                </span>
                <span style={{ fontSize: 18, filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.5))' }}>{dest.icon}</span>
              </div>

              {/* Bottom Label & Info */}
              <div style={{ position: 'relative', zIndex: 2, marginTop: 'auto' }}>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11.5, fontWeight: 800, color: '#ffa07a', letterSpacing: '0.12em', textTransform: 'uppercase', textShadow: '0 1px 4px rgba(0,0,0,0.8)' }}>
                  {dest.sub}
                </div>
                <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 19, fontWeight: 900, color: '#ffffff', lineHeight: 1.1, margin: '2px 0 4px', textShadow: '0 2px 10px rgba(0,0,0,0.9)' }}>
                  {dest.name}
                </h4>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#faf4ee', lineHeight: 1.35, marginBottom: 8, textShadow: '0 1px 6px rgba(0,0,0,0.8)' }}>
                  {dest.desc}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: 5, color: '#ff6b4a', fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, fontWeight: 800, letterSpacing: '0.04em' }}>
                  <span>VIEW DETAILS</span>
                  <ArrowRightIcon size={13} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
