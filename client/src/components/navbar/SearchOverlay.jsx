// src/components/navbar/SearchOverlay.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Full-width Glass Search Overlay — suggested search pills, live filtering & GSAP reveal.

import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { SearchIcon, CloseIcon, ArrowRightIcon } from './NavIcons';
import { destinationService } from '../../api/destinationService';
import { packageService } from '../../api/packageService';
import { activityService } from '../../api/activityService';

const SUGGESTED_SEARCHES = [
  'Havelock Island',
  'Neil Island',
  'Scuba Diving',
  'Honeymoon Packages',
  'Nautika Ferry',
  'Radhanagar Beach',
];

export default function SearchOverlay({ isOpen, onClose }) {
  const overlayRef = useRef(null);
  const inputRef   = useRef(null);
  const [query, setQuery] = useState('');
  const [dbItems, setDbItems] = useState([]);

  useEffect(() => {
    Promise.allSettled([
      destinationService.getDestinations(),
      packageService.getPackages(),
      activityService.getActivities(),
    ]).then(([destRes, pkgRes, actRes]) => {
      const all = [];
      if (destRes.status === 'fulfilled' && destRes.value?.data) {
        destRes.value.data.forEach(d => {
          all.push({
            title: d.name,
            sub: d.region || 'Andaman Islands',
            type: 'Destination',
            image: d.heroImage || 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
            href: `/destinations`,
          });
        });
      }
      if (pkgRes.status === 'fulfilled' && pkgRes.value?.data) {
        pkgRes.value.data.forEach(p => {
          all.push({
            title: p.name,
            sub: `${p.durationDays || 5} Days • ${p.category || 'Package'}`,
            type: 'Package',
            image: p.heroImage || 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
            href: `/package-details?slug=${p.slug || p.id}`,
          });
        });
      }
      if (actRes.status === 'fulfilled' && actRes.value?.data) {
        actRes.value.data.forEach(a => {
          all.push({
            title: a.title || a.name,
            sub: a.category || 'Island Activity',
            type: 'Activity',
            image: a.image || 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
            href: `/activities`,
          });
        });
      }
      setDbItems(all);
    }).catch(() => {});
  }, []);

  useEffect(() => {
    if (!overlayRef.current) return;
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      gsap.fromTo(overlayRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' }
      );
      setTimeout(() => inputRef.current?.focus(), 150);
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  const handleClose = () => {
    if (!overlayRef.current) return;
    gsap.to(overlayRef.current, {
      opacity: 0, y: -15, duration: 0.25, ease: 'power2.in',
      onComplete: () => {
        onClose();
        setQuery('');
      },
    });
  };

  if (!isOpen) return null;

  // Filter live DB destinations & packages by search query
  const q = query.trim().toLowerCase();
  const searchResults = q ? dbItems.filter(item =>
    item.title?.toLowerCase().includes(q) ||
    item.sub?.toLowerCase().includes(q) ||
    item.type?.toLowerCase().includes(q)
  ) : [];

  return (
    <div
      ref={overlayRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9990,
        background: 'rgba(2, 8, 20, 0.90)',
        backdropFilter: 'blur(28px)',
        WebkitBackdropFilter: 'blur(28px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '80px 24px 40px',
        opacity: 0,
      }}
    >
      {/* Close button */}
      <button
        onClick={handleClose}
        style={{
          position: 'absolute',
          top: 24,
          right: 32,
          width: 40,
          height: 40,
          borderRadius: '50%',
          background: '#e2e8f0',
          border: '1px solid #e2e8f0',
          color: '#c8dff0',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.2s',
        }}
        onMouseEnter={e => { e.currentTarget.style.color = '#ff6060'; e.currentTarget.style.background = 'rgba(255,60,60,0.15)'; }}
        onMouseLeave={e => { e.currentTarget.style.color = '#c8dff0'; e.currentTarget.style.background = '#e2e8f0'; }}
        aria-label="Close search"
      >
        <CloseIcon size={20} />
      </button>

      {/* Main Search Container */}
      <div style={{ maxWidth: 720, width: '100%' }}>
        {/* Input bar */}
        <div style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          marginBottom: 24,
        }}>
          <SearchIcon size={24} className="absolute left-4 text-[#F06543]" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Where do you want to explore? (e.g. Havelock, Scuba, Cruise)"
            value={query}
            onChange={e => setQuery(e.target.value)}
            style={{
              width: '100%',
              background: '#ffffff',
              border: '2px solid #F06543',
              borderRadius: 30,
              padding: '16px 24px 16px 54px',
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 17,
              fontWeight: 600,
              color: '#0f172a',
              outline: 'none',
              boxShadow: '0 12px 36px rgba(0,0,0,0.5)',
            }}
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              style={{
                position: 'absolute', right: 18, background: 'none', border: 'none', color: '#64748b', cursor: 'pointer',
              }}
            >
              <CloseIcon size={16} />
            </button>
          )}
        </div>

        {/* Suggested Searches */}
        {!query && (
          <div>
            <div style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: '0.15em',
              color: '#94a3b8',
              marginBottom: 12,
              textTransform: 'uppercase',
            }}>
              SUGGESTED SEARCHES
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {SUGGESTED_SEARCHES.map(s => (
                <button
                  key={s}
                  onClick={() => setQuery(s)}
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: 20,
                    padding: '8px 18px',
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 13,
                    fontWeight: 700,
                    color: '#ffffff',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = '#F06543';
                    e.currentTarget.style.borderColor = '#F06543';
                    e.currentTarget.style.color = '#ffffff';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                    e.currentTarget.style.color = '#ffffff';
                  }}
                >
                  🔍 {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Search Results List */}
        {query && (
          <div style={{
            maxHeight: '55vh',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
          }}>
            {searchResults.length > 0 ? (
              searchResults.map((res, i) => (
                <a
                  key={i}
                  href={res.href}
                  onClick={handleClose}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: 16,
                    padding: 14,
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = '#F06543';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = '#e2e8f0';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <div style={{ width: 48, height: 48, borderRadius: 12, overflow: 'hidden', flexShrink: 0 }}>
                      <img src={res.image} alt={res.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div>
                      <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 15, fontWeight: 800, color: '#0B2545' }}>{res.title}</div>
                      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: '#475569', fontWeight: 500, marginTop: 2 }}>{res.sub} • <span style={{ color: '#F06543', fontWeight: 700 }}>{res.type}</span></div>
                    </div>
                  </div>
                  <ArrowRightIcon size={18} className="text-[#F06543]" />
                </a>
              ))
            ) : (
              <div style={{ textAlign: 'center', padding: '40px 0', color: '#94a3b8', fontFamily: "'Space Grotesk', sans-serif", fontSize: 15 }}>
                No results found for &quot;{query}&quot;. Try searching for &quot;Havelock&quot;, &quot;Scuba&quot;, or &quot;Resort&quot;.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
