// src/components/gallery/GallerySection.jsx
// ─────────────────────────────────────────────────────────────────────────────
// SECTION 09 — DYNAMIC ANDAMAN PHOTO GALLERY
// Masonry Grid | Dynamic API Categories | Fullscreen Lightbox | Mobile Slider | Likes & Share

import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import {
  Sparkles, X, ChevronLeft, ChevronRight, Expand, Camera,
  Waves, Anchor, Sun, Mountain, Users, Star, Heart, Share2, Copy, Check
} from 'lucide-react';
import { galleryService } from '../../api/galleryService';

// Default Fallback Photos in case of offline/initial load
const FALLBACK_PHOTOS = [
  // BEACHES
  {
    id: 1, category: 'beaches',
    src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=85',
    thumb: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=75',
    title: 'Radhanagar Beach Sunset', location: 'Havelock Island (Swaraj Dweep)', span: 'wide',
    likesCount: 142, isFeatured: true,
  },
  {
    id: 2, category: 'beaches',
    src: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=85',
    thumb: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=600&q=75',
    title: 'Neil Island Shoreline', location: 'Neil Island (Shaheed Dweep)', span: 'normal',
    likesCount: 98, isFeatured: false,
  },
  {
    id: 3, category: 'beaches',
    src: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=85',
    thumb: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=75',
    title: 'Elephant Beach Turquoise Lagoon', location: 'Havelock Island', span: 'normal',
    likesCount: 124, isFeatured: true,
  },
  // UNDERWATER
  {
    id: 4, category: 'underwater',
    src: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1400&q=85',
    thumb: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=75',
    title: 'PADI Nemo Reef Coral Dive', location: 'Havelock Island', span: 'tall',
    likesCount: 289, isFeatured: true,
  },
  {
    id: 5, category: 'underwater',
    src: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&w=1200&q=85',
    thumb: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&w=600&q=75',
    title: 'Sea Turtle & Marine Life Exploration', location: 'North Bay Island Reef', span: 'normal',
    likesCount: 195, isFeatured: true,
  },
  {
    id: 6, category: 'underwater',
    src: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=1400&q=85',
    thumb: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=600&q=75',
    title: 'Jolly Buoy Reef Snorkeling', location: 'Jolly Buoy Island, Wandoor', span: 'wide',
    likesCount: 162, isFeatured: false,
  },
  // SUNSETS
  {
    id: 7, category: 'sunsets',
    src: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1400&q=85',
    thumb: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=600&q=75',
    title: 'Chidiya Tapu Sunset Point', location: 'South Andaman, Port Blair', span: 'wide',
    likesCount: 310, isFeatured: true,
  },
  {
    id: 8, category: 'sunsets',
    src: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=85',
    thumb: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=75',
    title: 'Sunset Catamaran Cruise', location: 'Port Blair Harbor', span: 'normal',
    likesCount: 147, isFeatured: false,
  },
  // ADVENTURES
  {
    id: 9, category: 'adventures',
    src: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=85',
    thumb: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=600&q=75',
    title: 'Bioluminescent Kayaking', location: 'Havelock Mangroves', span: 'normal',
    likesCount: 220, isFeatured: true,
  },
  {
    id: 10, category: 'adventures',
    src: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=85',
    thumb: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=75',
    title: 'Deep Sea Game Fishing Safari', location: 'Cinque Island Oceanic Waters', span: 'tall',
    likesCount: 115, isFeatured: false,
  },
  {
    id: 11, category: 'adventures',
    src: 'https://images.unsplash.com/photo-1540202404-d0c7fe46a087?auto=format&fit=crop&w=1400&q=85',
    thumb: 'https://images.unsplash.com/photo-1540202404-d0c7fe46a087?auto=format&fit=crop&w=600&q=75',
    title: 'Limestone Caves Canopy Trek', location: 'Baratang Island', span: 'wide',
    likesCount: 180, isFeatured: true,
  },
  // NATURE
  {
    id: 12, category: 'nature',
    src: 'https://images.unsplash.com/photo-1559494007-9f5847c49d94?auto=format&fit=crop&w=1200&q=85',
    thumb: 'https://images.unsplash.com/photo-1559494007-9f5847c49d94?auto=format&fit=crop&w=600&q=75',
    title: 'Natural Coral Rock Bridge', location: 'Laxmanpur Beach, Neil Island', span: 'normal',
    likesCount: 168, isFeatured: false,
  },
  {
    id: 13, category: 'nature',
    src: 'https://images.unsplash.com/photo-1474440692490-2e83ae13ba29?auto=format&fit=crop&w=1400&q=85',
    thumb: 'https://images.unsplash.com/photo-1474440692490-2e83ae13ba29?auto=format&fit=crop&w=600&q=75',
    title: 'Dense Tropical Mangrove Creek Safari', location: 'Middle & North Andaman', span: 'wide',
    likesCount: 205, isFeatured: true,
  },
];

const ICON_MAP = {
  all: Camera,
  beaches: Anchor,
  underwater: Waves,
  sunsets: Sun,
  adventures: Mountain,
  nature: Star,
  stays: Camera,
  resorts: Camera,
  cruises: Anchor,
  ferries: Anchor,
};

// ─── LIGHTBOX COMPONENT ───────────────────────────────────────────────────────
function Lightbox({ photos, activeIndex, onClose, onNext, onPrev, onLike, isLiked }) {
  const photo = photos[activeIndex];
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose, onNext, onPrev]);

  if (!photo) return null;

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(
      `🏝️ Andaman Photo: "${photo.title}" at ${photo.location}\n\nExplore Andaman Trails Gallery: ${window.location.origin}/gallery`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(photo.src);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 999999,
        background: 'rgba(4, 19, 34, 0.95)',
        backdropFilter: 'blur(22px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        animation: 'lbFadeIn 0.25s ease',
      }}
    >
      <style>{`
        @keyframes lbFadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes lbImgIn { from { opacity: 0; transform: scale(0.93) } to { opacity: 1; transform: scale(1) } }
      `}</style>

      {/* Close Button */}
      <button
        onClick={onClose}
        style={{
          position: 'absolute', top: 20, right: 20,
          width: 44, height: 44, borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.15)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          color: '#ffffff', display: 'flex', alignItems: 'center',
          justifyContent: 'center', cursor: 'pointer', zIndex: 10,
          transition: 'all 0.25s ease',
        }}
        onMouseEnter={e => { e.currentTarget.style.background = '#F06543'; }}
        onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)'; }}
      >
        <X size={20} />
      </button>

      {/* Prev Button */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        style={{
          position: 'absolute', left: 20, top: '50%', transform: 'translateY(-50%)',
          width: 48, height: 48, borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.15)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          color: '#ffffff', display: 'flex', alignItems: 'center',
          justifyContent: 'center', cursor: 'pointer', zIndex: 10,
          transition: 'all 0.25s ease',
        }}
        onMouseEnter={e => { e.currentTarget.style.background = '#F06543'; }}
        onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)'; }}
      >
        <ChevronLeft size={22} />
      </button>

      {/* Next Button */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        style={{
          position: 'absolute', right: 20, top: '50%', transform: 'translateY(-50%)',
          width: 48, height: 48, borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.15)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          color: '#ffffff', display: 'flex', alignItems: 'center',
          justifyContent: 'center', cursor: 'pointer', zIndex: 10,
          transition: 'all 0.25s ease',
        }}
        onMouseEnter={e => { e.currentTarget.style.background = '#F06543'; }}
        onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)'; }}
      >
        <ChevronRight size={22} />
      </button>

      {/* Image Container */}
      <div
        onClick={e => e.stopPropagation()}
        style={{
          position: 'relative', maxWidth: '88vw', maxHeight: '88vh',
          borderRadius: 22, overflow: 'hidden',
          border: '1.5px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 32px 80px rgba(0, 0, 0, 0.9)',
          animation: 'lbImgIn 0.3s ease',
          background: '#0B2545',
        }}
      >
        <img
          key={photo.id}
          src={photo.src}
          alt={photo.title}
          style={{
            display: 'block',
            maxWidth: '88vw',
            maxHeight: '78vh',
            width: 'auto',
            height: 'auto',
            objectFit: 'contain',
          }}
        />

        {/* Caption overlay */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          background: 'linear-gradient(to top, rgba(6, 24, 46, 0.96) 0%, rgba(6, 24, 46, 0.7) 60%, transparent 100%)',
          padding: '28px 24px 20px',
          display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 14,
        }}>
          <div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 19, fontWeight: 800, color: '#ffffff', marginBottom: 4 }}>
              {photo.title}
            </div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12.5, color: '#2dd4bf', display: 'flex', alignItems: 'center', gap: 6 }}>
              <Camera size={13} color="#2dd4bf" />
              <span>{photo.location}</span>
              <span style={{ color: '#94a3b8', marginLeft: 8 }}>
                {activeIndex + 1} of {photos.length}
              </span>
            </div>
          </div>

          {/* Action Pills */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <button
              onClick={() => onLike(photo.id)}
              style={{
                background: isLiked(photo.id) ? '#F06543' : 'rgba(255, 255, 255, 0.15)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                color: '#ffffff',
                padding: '7px 14px',
                borderRadius: 20,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 12,
                fontWeight: 800,
                transition: 'all 0.2s',
              }}
            >
              <Heart size={14} fill={isLiked(photo.id) ? '#ffffff' : 'none'} />
              <span>{photo.likesCount || 0}</span>
            </button>

            <button
              onClick={handleShareWhatsApp}
              style={{
                background: '#25D366',
                border: 'none',
                color: '#ffffff',
                padding: '7px 14px',
                borderRadius: 20,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 12,
                fontWeight: 800,
              }}
            >
              <Share2 size={13} />
              <span>Share</span>
            </button>

            <button
              onClick={handleCopyLink}
              title="Copy Image URL"
              style={{
                background: 'rgba(255, 255, 255, 0.15)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                color: '#ffffff',
                padding: '7px 10px',
                borderRadius: 20,
                cursor: 'pointer',
              }}
            >
              {copied ? <Check size={14} color="#2dd4bf" /> : <Copy size={14} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── MAIN GALLERY SECTION ─────────────────────────────────────────────────────
export default function GallerySection({ isHomePage = false }) {
  const [photos, setPhotos] = useState(FALLBACK_PHOTOS);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [likedMap, setLikedMap] = useState({});
  const mobileSliderRef = useRef(null);

  // Fetch photos from API
  useEffect(() => {
    let isMounted = true;
    galleryService.getPhotos()
      .then((res) => {
        if (!isMounted) return;
        const data = res?.data || res?.data?.data || res;
        if (Array.isArray(data) && data.length > 0) {
          const normalized = data.map(p => ({
            id: p.id,
            title: p.title,
            location: p.location || 'Andaman Islands',
            category: (p.category || 'beaches').toLowerCase(),
            src: p.src,
            thumb: p.thumb || p.src,
            span: p.span || 'normal',
            likesCount: Number(p.likesCount || 0),
            isFeatured: !!p.isFeatured,
            status: p.status || 'ACTIVE',
          }));
          setPhotos(normalized);
        }
      })
      .catch((err) => {
        console.warn('Live gallery fetch failed, showing fallback portfolio:', err);
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => { isMounted = false; };
  }, []);

  // Initialize liked map from localStorage
  useEffect(() => {
    const map = {};
    photos.forEach(p => {
      if (localStorage.getItem(`liked_photo_${p.id}`) === 'true') {
        map[p.id] = true;
      }
    });
    setLikedMap(map);
  }, [photos]);

  const handleLike = useCallback(async (photoId) => {
    const isAlreadyLiked = likedMap[photoId];
    
    // Update local state immediately for responsive feel
    setPhotos(prev => prev.map(p => {
      if (p.id === photoId) {
        return {
          ...p,
          likesCount: isAlreadyLiked ? Math.max(0, p.likesCount - 1) : p.likesCount + 1
        };
      }
      return p;
    }));

    setLikedMap(prev => {
      const next = { ...prev, [photoId]: !isAlreadyLiked };
      if (!isAlreadyLiked) {
        localStorage.setItem(`liked_photo_${photoId}`, 'true');
      } else {
        localStorage.removeItem(`liked_photo_${photoId}`);
      }
      return next;
    });

    if (!isAlreadyLiked) {
      try {
        await galleryService.likePhoto(photoId);
      } catch (err) {
        console.warn('Like photo sync failed:', err);
      }
    }
  }, [likedMap]);

  const isLiked = useCallback((photoId) => !!likedMap[photoId], [likedMap]);

  // Dynamically extract categories with photo counts
  const dynamicCategories = useMemo(() => {
    const counts = { all: photos.length };
    photos.forEach((p) => {
      const cat = p.category ? p.category.toLowerCase() : 'other';
      counts[cat] = (counts[cat] || 0) + 1;
    });

    const categoryKeys = Object.keys(counts);
    return categoryKeys.map((catKey) => {
      const Icon = ICON_MAP[catKey] || Camera;
      return {
        id: catKey,
        label: catKey === 'all' ? 'All Photos' : (catKey.charAt(0).toUpperCase() + catKey.slice(1)),
        count: counts[catKey],
        icon: Icon,
      };
    });
  }, [photos]);

  // Filtered List
  const filtered = useMemo(() => {
    if (isHomePage) {
      const featured = photos.filter(p => p.isFeatured);
      return (featured.length >= 6 ? featured : photos).slice(0, 6);
    }
    if (activeCategory === 'all') {
      return photos;
    }
    return photos.filter(p => p.category === activeCategory);
  }, [photos, activeCategory, isHomePage]);

  const openLightbox = useCallback((idx) => setLightboxIndex(idx), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const nextPhoto = useCallback(() => setLightboxIndex(i => (i + 1) % filtered.length), [filtered.length]);
  const prevPhoto = useCallback(() => setLightboxIndex(i => (i - 1 + filtered.length) % filtered.length), [filtered.length]);

  return (
    <section id="gallery-section" className="glr-section">
      <style>{`
        .glr-section {
          position: relative;
          width: 100%;
          background: #ffffff;
          color: #334155;
          padding: 72px 0 88px;
          border-bottom: 1px solid #e2e8f0;
          overflow: hidden;
        }

        .glr-ambient-l {
          position: absolute; top: 20%; left: -10%;
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(240, 101, 67, 0.04) 0%, transparent 70%);
          pointer-events: none;
        }
        .glr-ambient-r {
          position: absolute; bottom: 20%; right: -10%;
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(45, 212, 191, 0.05) 0%, transparent 70%);
          pointer-events: none;
        }

        .glr-container {
          max-width: 1380px; margin: 0 auto; padding: 0 24px;
          position: relative; z-index: 2;
        }

        /* Header */
        .glr-header-sub {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; letter-spacing: 0.22em;
          color: #F06543; text-transform: uppercase;
          display: flex; align-items: center; gap: 6px; margin-bottom: 6px;
        }
        .glr-header-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(28px, 3.5vw, 44px); font-weight: 600;
          color: #0B2545; line-height: 1.1; margin-bottom: 6px;
        }
        .glr-header-desc {
          font-family: 'Inter', sans-serif;
          font-size: 13px; color: #64748b; line-height: 1.55; max-width: 560px;
        }

        /* Filter Tabs */
        .glr-filters {
          display: flex; align-items: center; gap: 10px;
          flex-wrap: wrap; margin-top: 28px; margin-bottom: 36px;
        }
        .glr-filter-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; letter-spacing: 0.04em;
          padding: 8px 18px; border-radius: 30px; cursor: pointer;
          display: inline-flex; align-items: center; gap: 7px;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          border: 1px solid #e2e8f0;
          background: #ffffff;
          color: #334155;
          box-shadow: 0 1px 3px rgba(0,0,0,0.04);
        }
        .glr-filter-btn:hover {
          border-color: #F06543;
          color: #0B2545;
          background: #FFF0EB;
        }
        .glr-filter-btn.active {
          background: linear-gradient(135deg, #FF6B4A 0%, #F06543 100%);
          border-color: transparent;
          color: #ffffff;
          box-shadow: 0 4px 16px rgba(240, 101, 67, 0.35);
        }

        /* ── DESKTOP MASONRY GRID ── */
        .glr-masonry {
          columns: 3;
          column-gap: 20px;
          display: block;
        }
        @media (max-width: 1024px) {
          .glr-masonry { columns: 2; }
        }
        @media (max-width: 640px) {
          .glr-masonry { display: none; }
          .glr-mobile-slider { display: flex !important; }
        }

        .glr-masonry-item {
          break-inside: avoid;
          margin-bottom: 20px;
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          border: 1.5px solid #e2e8f0;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          background: #0B2545;
        }
        .glr-masonry-item:hover {
          transform: translateY(-5px) scale(1.01);
          border-color: #F06543;
          box-shadow: 0 20px 45px rgba(0, 45, 98, 0.14);
        }
        .glr-masonry-item img {
          display: block; width: 100%; height: auto;
          transition: transform 0.6s ease;
        }
        .glr-masonry-item:hover img { transform: scale(1.06); }

        /* Hover overlay */
        .glr-img-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(6, 24, 46, 0.95) 0%, rgba(6, 24, 46, 0.4) 55%, transparent 100%);
          opacity: 0;
          transition: opacity 0.35s ease;
          display: flex; flex-direction: column; justify-content: flex-end;
          padding: 20px;
        }
        .glr-masonry-item:hover .glr-img-overlay { opacity: 1; }

        .glr-expand-icon {
          position: absolute; top: 14px; right: 14px;
          width: 36px; height: 36px; border-radius: 50%;
          background: rgba(255, 255, 255, 0.92);
          border: 1px solid #e2e8f0;
          color: #0B2545;
          display: flex; align-items: center; justify-content: center;
          opacity: 0; transition: opacity 0.3s ease;
        }
        .glr-masonry-item:hover .glr-expand-icon { opacity: 1; }

        .glr-photo-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 14.5px; font-weight: 800; color: #ffffff; margin-bottom: 3px;
        }
        .glr-photo-loc {
          font-family: 'Inter', sans-serif;
          font-size: 12px; color: #2dd4bf;
          display: flex; align-items: center; gap: 5px;
        }

        /* ── MOBILE SLIDER ── */
        .glr-mobile-slider {
          display: none;
          gap: 14px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scrollbar-width: none;
          padding: 4px 4px 16px;
        }
        .glr-mobile-slider::-webkit-scrollbar { display: none; }
        .glr-mobile-slide {
          flex: 0 0 84%;
          scroll-snap-align: start;
          position: relative;
          border-radius: 20px; overflow: hidden; cursor: pointer;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 16px rgba(0, 45, 98, 0.08);
          background: #0B2545;
        }
        .glr-mobile-slide img {
          width: 100%; height: 260px; object-fit: cover; display: block;
        }
        .glr-mobile-caption {
          position: absolute; bottom: 0; left: 0; right: 0;
          background: linear-gradient(to top, rgba(6, 24, 46, 0.92) 0%, transparent 100%);
          padding: 24px 16px 14px;
        }

        /* Count badge */
        .glr-count-badge {
          display: inline-flex; align-items: center; gap: 6px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 800; color: #0B2545;
          background: #FFF0EB; border: 1px solid rgba(240, 101, 67, 0.25);
          padding: 6px 14px; borderRadius: 20px;
          margin-top: 6px;
        }

        .glr-item-heart-btn {
          position: absolute;
          top: 14px;
          left: 14px;
          background: rgba(0, 0, 0, 0.55);
          backdrop-filter: blur(4px);
          border: 1px solid rgba(255, 255, 255, 0.25);
          color: #ffffff;
          padding: 5px 9px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          gap: 4px;
          font-family: "'Space Grotesk', sans-serif";
          font-size: 11px;
          font-weight: 800;
          opacity: 0.9;
          transition: transform 0.2s, background 0.2s;
        }
        .glr-item-heart-btn:hover {
          transform: scale(1.08);
          background: #F06543;
        }
      `}</style>

      {/* Ambient glows */}
      <div className="glr-ambient-l" />
      <div className="glr-ambient-r" />

      <div className="glr-container">

        {/* ── HEADER ── */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16 }}>
          <div>
            <div className="glr-header-sub">
              <Sparkles size={13} color="#F06543" />
              <span>PHOTO GALLERY</span>
            </div>
            <h2 className="glr-header-title">
              Andaman Through Our Lens
            </h2>
            <p className="glr-header-desc">
              Breathtaking moments captured across the Andaman archipelago — beaches, coral reefs, island sunsets, and wild adventures.
            </p>
          </div>

          <div className="glr-count-badge">
            <Camera size={13} color="#F06543" />
            <span>{filtered.length} PHOTOS</span>
          </div>
        </div>

        {/* ── FILTER TABS ── */}
        {!isHomePage && (
          <div className="glr-filters">
            {dynamicCategories.map(cat => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  className={`glr-filter-btn${isActive ? ' active' : ''}`}
                  onClick={() => { setActiveCategory(cat.id); setLightboxIndex(null); }}
                >
                  <Icon size={13} />
                  <span>{cat.label} ({cat.count})</span>
                </button>
              );
            })}
          </div>
        )}

        {/* ── DESKTOP MASONRY GRID ── */}
        <div className="glr-masonry">
          {filtered.map((photo, idx) => (
            <div
              key={photo.id}
              className="glr-masonry-item"
              onClick={() => openLightbox(idx)}
            >
              <img src={photo.thumb || photo.src} alt={photo.title} loading="lazy" />

              {/* Heart Likes Counter Badge */}
              <div
                className="glr-item-heart-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  handleLike(photo.id);
                }}
              >
                <Heart size={12} fill={isLiked(photo.id) ? '#F06543' : 'none'} color={isLiked(photo.id) ? '#F06543' : '#ffffff'} />
                <span>{photo.likesCount || 0}</span>
              </div>

              {/* Hover Overlay */}
              <div className="glr-img-overlay">
                <div className="glr-expand-icon">
                  <Expand size={16} />
                </div>
                <div className="glr-photo-title">{photo.title}</div>
                <div className="glr-photo-loc">
                  <Camera size={11} />
                  <span>{photo.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── MOBILE SLIDER ── */}
        <div ref={mobileSliderRef} className="glr-mobile-slider">
          {filtered.map((photo, idx) => (
            <div
              key={photo.id}
              className="glr-mobile-slide"
              onClick={() => openLightbox(idx)}
            >
              <img src={photo.thumb || photo.src} alt={photo.title} loading="lazy" />

              <div
                className="glr-item-heart-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  handleLike(photo.id);
                }}
              >
                <Heart size={12} fill={isLiked(photo.id) ? '#F06543' : 'none'} color={isLiked(photo.id) ? '#F06543' : '#ffffff'} />
                <span>{photo.likesCount || 0}</span>
              </div>

              <div className="glr-mobile-caption">
                <div className="glr-photo-title" style={{ fontSize: 15 }}>{photo.title}</div>
                <div className="glr-photo-loc">
                  <Camera size={11} />
                  <span>{photo.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── INSTAGRAM CTA ── */}
        <div style={{
          marginTop: 40,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: 16, flexWrap: 'wrap',
        }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 10,
            background: '#ffffff', backdropFilter: 'blur(16px)',
            border: '1px solid #e2e8f0', borderRadius: 24,
            padding: '14px 28px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Camera size={20} color="#F06543" />
              <div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 800, color: '#0B2545' }}>
                  @andamantrails
                </div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: '#64748b' }}>
                  120K+ Explorers on Instagram
                </div>
              </div>
            </div>

            <div style={{ width: 1, height: 36, background: '#e2e8f0', margin: '0 8px' }} />

            <a
              href="https://instagram.com/andamantrails"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 11, fontWeight: 800, color: '#0B2545',
                textDecoration: 'none',
                background: '#FFF0EB',
                border: '1px solid #F06543',
                padding: '8px 18px', borderRadius: 20,
                display: 'inline-flex', alignItems: 'center', gap: 6,
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#0B2545'; e.currentTarget.style.color = '#ffffff'; e.currentTarget.style.borderColor = '#0B2545'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#FFF0EB'; e.currentTarget.style.color = '#0B2545'; e.currentTarget.style.borderColor = '#F06543'; }}
            >
              <Users size={13} />
              <span>FOLLOW US</span>
            </a>
          </div>

          {isHomePage && (
            <a
              href="/gallery"
              onClick={(e) => {
                e.preventDefault();
                window.history.pushState({}, '', '/gallery');
                window.dispatchEvent(new Event('popstate'));
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 12, fontWeight: 800, color: '#ffffff',
                textDecoration: 'none',
                background: 'linear-gradient(135deg, #FF6B4A 0%, #F06543 100%)',
                border: 'none',
                padding: '16px 32px', borderRadius: 24,
                display: 'inline-flex', alignItems: 'center', gap: 8,
                boxShadow: '0 4px 18px rgba(0, 45, 98, 0.25)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.03)';
                e.currentTarget.style.boxShadow = '0 8px 26px rgba(0, 45, 98, 0.35)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'scale(1.0)';
                e.currentTarget.style.boxShadow = '0 4px 18px rgba(0, 45, 98, 0.25)';
              }}
            >
              <Expand size={14} color="#ffffff" />
              <span>EXPLORE FULL GALLERY</span>
            </a>
          )}
        </div>

      </div>

      {/* ── LIGHTBOX ── */}
      {lightboxIndex !== null && (
        <Lightbox
          photos={filtered}
          activeIndex={lightboxIndex}
          onClose={closeLightbox}
          onNext={nextPhoto}
          onPrev={prevPhoto}
          onLike={handleLike}
          isLiked={isLiked}
        />
      )}
    </section>
  );
}
