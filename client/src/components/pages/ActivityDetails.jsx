// client/src/components/pages/ActivityDetails.jsx
// ─────────────────────────────────────────────────────────────────────────────
// PREMIUM DYNAMIC ACTIVITY DETAILS PAGE — URL: /activities/:slug
// Full Mirror of CruiseDetails Architecture: 3D Scene • Multi-Step Booking • Real-Time DB

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useAuth } from '../../context/AuthContext';
import { activityService } from '../../api/activityService';
import FooterBottom from '../FooterBottom';
import ActivityBookingModal from '../activities/ActivityBookingModal';
import {
  ChevronRight, MapPin, Clock, Star, Users, Check, X as CloseIcon, Shield, Calendar as CalendarIcon,
  ArrowRight, Waves, Anchor, Camera, Utensils, Info, Sparkles, MessageCircle, HelpCircle,
  Flame, Play, ShieldCheck, Lock, Share2, Heart
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const parseArrayField = (field, fallback = []) => {
  if (!field) return fallback;
  if (Array.isArray(field)) return field.length > 0 ? field : fallback;
  if (typeof field === 'string') {
    const trimmed = field.trim();
    if (!trimmed) return fallback;
    if (trimmed.startsWith('[') && trimmed.endsWith(']')) {
      try {
        const parsed = JSON.parse(trimmed);
        if (Array.isArray(parsed)) return parsed.length > 0 ? parsed : fallback;
      } catch (e) {}
    }
    if (trimmed.includes('\n')) {
      const list = trimmed.split('\n').map(s => s.trim().replace(/^[-*•]\s*/, '')).filter(Boolean);
      if (list.length > 0) return list;
    }
    if (trimmed.includes(',')) {
      const list = trimmed.split(',').map(s => s.trim().replace(/^[-*•]\s*/, '')).filter(Boolean);
      if (list.length > 0) return list;
    }
    return [trimmed];
  }
  return fallback;
};

export default function ActivityDetails() {
  const { requireAuth, isLoggedIn } = useAuth();
  const [activity, setActivity] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Booking Form State
  const [bookingDate, setBookingDate] = useState('');
  const [adults, setAdults] = useState(2);
  const [childrenCount, setChildCount] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [slots, setSlots] = useState([]);
  const [loadingSlots, setLoadingSlots] = useState(false);

  // Sticky & Lightbox
  const [stickyVisible, setStickyVisible] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  // Quick Modal
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  // Extract slug from URL e.g. /activities/seakart-adventure or ?id=seakart-adventure
  const pathname = window.location.pathname;
  const searchParams = new URLSearchParams(window.location.search);
  const pathParts = pathname.split('/').filter(Boolean);
  const slug = (pathParts[0] === 'activities' && pathParts[1])
    ? pathParts[1]
    : (searchParams.get('slug') || searchParams.get('id') || 'seakart-adventure');

  // 1. Fetch Activity Details from Backend API
  useEffect(() => {
    async function loadData() {
      setLoading(true);
      setError(null);
      try {
        const act = await activityService.getActivityBySlug(slug);
        if (act) {
          setActivity(act);
          const locs = Array.isArray(act.locations) ? act.locations : [];
          if (locs.length > 0) {
            setSelectedLocation(locs[0]);
          }
          const defaultDate = new Date().toISOString().split('T')[0];
          setBookingDate(defaultDate);
        } else {
          setError('ACTIVITY NOT FOUND');
        }
      } catch (err) {
        console.error('Failed to load activity details:', err);
        setError('Activity details could not be found.');
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, [slug]);

  // 2. Load Slots when Location or Date changes
  useEffect(() => {
    if (!activity || !bookingDate) return;

    const loadSlots = async () => {
      setLoadingSlots(true);
      try {
        const slotsData = await activityService.getActivitySlots(
          activity.slug || activity.id,
          selectedLocation ? selectedLocation.id : null,
          bookingDate
        );
        setSlots(slotsData || []);
        const firstAvail = (slotsData || []).find(s => s.status === 'AVAILABLE' || s.status === 'LOW_SEATS');
        setSelectedSlot(firstAvail || null);
      } catch (err) {
        console.warn('Slots load note:', err);
      } finally {
        setLoadingSlots(false);
      }
    };

    loadSlots();
  }, [activity, selectedLocation, bookingDate]);

  // Sticky Bar Listener
  useEffect(() => {
    const handleScroll = () => {
      setStickyVisible(window.scrollY > 450);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBookClick = () => {
    if (!activity) return;
    const params = new URLSearchParams();
    params.set('id', activity.slug || activity.id);
    if (selectedLocation?.id) params.set('location', selectedLocation.id);
    if (bookingDate) params.set('date', bookingDate);
    if (selectedSlot?.id) params.set('slot', selectedSlot.id);
    if (adults) params.set('adults', adults);
    if (childrenCount) params.set('children', childrenCount);

    window.history.pushState({}, '', `/activity-booking?${params.toString()}`);
    window.dispatchEvent(new Event('popstate'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Pricing calculations
  const startingPrice = useMemo(() => {
    if (!activity) return 2500;
    const locs = Array.isArray(activity.locations) ? activity.locations : [];
    if (locs.length > 0) {
      const prices = locs.map(l => Number(l.adultPrice)).filter(p => !isNaN(p) && p > 0);
      if (prices.length > 0) return Math.min(...prices);
    }
    return Number(activity.price || 2500);
  }, [activity]);

  const adultPrice = selectedSlot?.priceOverride
    ? Number(selectedSlot.priceOverride)
    : (selectedLocation?.adultPrice !== undefined && selectedLocation?.adultPrice !== null
        ? Number(selectedLocation.adultPrice)
        : startingPrice);

  const adultOriginalPrice = useMemo(() => {
    if (activity?.originalPrice && Number(activity.originalPrice) > adultPrice) {
      return Number(activity.originalPrice);
    }
    return Math.round(adultPrice * 1.2);
  }, [activity, adultPrice]);

  const discountPercent = adultOriginalPrice > adultPrice
    ? Math.round(((adultOriginalPrice - adultPrice) / adultOriginalPrice) * 100)
    : 0;

  const childPrice = selectedSlot?.childPriceOverride
    ? Number(selectedSlot.childPriceOverride)
    : (selectedLocation?.childPrice !== undefined && selectedLocation?.childPrice !== null
        ? Number(selectedLocation.childPrice)
        : (activity?.childPrice ? Number(activity.childPrice) : 0));

  const totalAmount = (adults * adultPrice) + (childrenCount * childPrice);
  const totalOriginalAmount = (adults * adultOriginalPrice) + (childrenCount * Math.round(adultOriginalPrice * 0.75));

  const galleryImages = useMemo(() => {
    if (!activity) return [];
    const parsed = parseArrayField(activity.gallery, []);
    if (parsed.length > 0) return parsed;
    return [
      activity.heroImage || activity.image || 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80',
    ];
  }, [activity]);

  const inclusionsList = useMemo(() => {
    return parseArrayField(activity?.inclusions, [
      'Certified Professional Guide & Instructor',
      'Complete Mares/Scubapro Safety Gear & Lifejackets',
      'Complimentary 4K Underwater Photos & HD Video',
      'Safety Briefing & Training Session',
      'Emergency Oxygen & First Aid Support'
    ]);
  }, [activity?.inclusions]);

  const exclusionsList = useMemo(() => {
    return parseArrayField(activity?.exclusions, [
      'Hotel Pickup and Drop-off (Available on request)',
      'Personal Souvenirs & Gratuities',
      'Optional Wet Suit Rental (₹300)'
    ]);
  }, [activity?.exclusions]);

  const requirementsList = useMemo(() => {
    return parseArrayField(activity?.requirements || activity?.safetyGuidelines, [
      'Minimum Age: 10 Years for Scuba & SeaKart, 6 Years for Snorkeling.',
      'No prior swimming experience required for Discover Scuba, SeaKart, or Sea Walk.',
      'Participants must complete a standard medical declaration form before entering water.',
      'Please avoid flying on an aircraft within 18 hours after deep scuba diving sessions.'
    ]);
  }, [activity?.requirements, activity?.safetyGuidelines]);

  if (loading) {
    return (
      <div style={{ width: '100%', minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#FAF4EE', color: '#0B2545' }}>
        <div style={{ width: 44, height: 44, borderRadius: '50%', border: '3px solid rgba(240, 101, 67, 0.2)', borderTopColor: '#F06543', animation: 'spin 0.8s linear infinite', marginBottom: 16 }} />
        <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
        <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, fontWeight: 900, letterSpacing: '0.2em', color: '#5C6F84' }}>
          LOADING ACTIVITY EXPERIENCE...
        </span>
      </div>
    );
  }

  if (error || !activity) {
    return (
      <div style={{ width: '100%', minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#FAF4EE', color: '#0B2545', padding: 24, textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 42, fontWeight: 700, color: '#0B2545', marginBottom: 12 }}>
          ACTIVITY NOT FOUND
        </h2>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#5C6F84', marginBottom: 24 }}>
          The requested island adventure experience could not be located.
        </p>
        <a href="/activities" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, fontWeight: 900, color: '#ffffff', background: 'linear-gradient(135deg, #FF6B4A, #F06543)', padding: '12px 28px', borderRadius: 16, textDecoration: 'none' }}>
          BACK TO ACTIVITIES →
        </a>
      </div>
    );
  }

  return (
    <div className="activity-details-root">
      <style>{`
        .activity-details-root {
          min-height: 100vh; background: #FAF4EE; color: #2D3E50;
          padding-top: 85px; overflow-x: hidden; font-family: 'Inter', sans-serif;
        }

        .act-details-hero {
          position: relative; width: 100%; min-height: 75vh; max-height: 740px;
          display: flex; align-items: flex-end; padding: 60px 24px 80px;
          box-sizing: border-box; overflow: hidden; background: #06182E;
        }
        .act-details-hero-bg {
          position: absolute; inset: 0; z-index: 1;
        }
        .act-details-hero-bg img {
          width: 100%; height: 100%; object-fit: cover;
          filter: brightness(0.52) saturate(1.25);
          transform: scale(1.04); transition: transform 8s ease;
        }
        .act-details-hero:hover .act-details-hero-bg img { transform: scale(1.08); }

        .act-details-hero-overlay {
          position: absolute; inset: 0; z-index: 2;
          background: linear-gradient(
            180deg,
            rgba(6, 24, 46, 0.85) 0%,
            rgba(6, 24, 46, 0.45) 50%,
            rgba(6, 24, 46, 0.95) 100%
          );
        }

        .act-details-hero-container {
          position: relative; z-index: 4; max-width: 1340px; margin: 0 auto; width: 100%;
          display: grid; grid-template-columns: 1fr 400px; gap: 40px; align-items: flex-end;
        }
        @media (max-width: 1024px) {
          .act-details-hero-container { grid-template-columns: 1fr; }
        }

        .act-breadcrumb-pill {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'Space Grotesk', sans-serif; font-size: 12px; font-weight: 800;
          color: #FF6B4A; background: rgba(255, 255, 255, 0.12); backdrop-filter: blur(16px);
          border: 1.5px solid rgba(255, 255, 255, 0.25); padding: 5px 16px; border-radius: 20px; margin-bottom: 16px;
        }

        .act-hero-main-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(36px, 5.5vw, 64px); font-weight: 700; color: #ffffff;
          line-height: 1.06; margin: 0 0 14px; text-shadow: 0 4px 24px rgba(0,0,0,0.8);
        }

        /* Floating Booking Card (Mirrors Cruise Details) */
        .act-booking-glass-card {
          background: #ffffff;
          border: 2px solid #ebded2; border-radius: 26px;
          padding: 30px; box-shadow: 0 24px 64px rgba(11, 37, 69, 0.12), 0 0 30px rgba(240, 101, 67, 0.08);
        }

        .act-quick-info-bar {
          max-width: 1340px; margin: -30px auto 60px; padding: 0 24px;
          position: relative; z-index: 10;
        }
        .act-quick-info-grid {
          display: grid; grid-template-columns: repeat(5, 1fr); gap: 16px;
          background: #ffffff; border: 2px solid #ebded2;
          border-radius: 22px; padding: 22px 28px;
          box-shadow: 0 10px 30px rgba(11, 37, 69, 0.06);
        }
        @media (max-width: 900px) {
          .act-quick-info-grid { grid-template-columns: repeat(2, 1fr); }
        }

        .act-section-container {
          max-width: 1340px; margin: 0 auto; padding: 50px 24px;
        }

        .act-glass-box {
          background: #ffffff; border: 2px solid #ebded2;
          border-radius: 26px; padding: 38px;
          box-shadow: 0 4px 20px rgba(11, 37, 69, 0.04);
        }

        .act-sticky-bar {
          position: fixed; bottom: 0; left: 0; right: 0; z-index: 999;
          background: #ffffff;
          border-top: 2px solid #F06543; padding: 14px 28px;
          display: flex; align-items: center; justify-content: space-between;
          transform: translateY(100%); transition: transform 0.3s ease;
          box-shadow: 0 -10px 30px rgba(11, 37, 69, 0.12);
        }
        .act-sticky-bar.visible { transform: translateY(0); }
      `}</style>

      {/* ── 1. CINEMATIC HERO ── */}
      <section className="act-details-hero">
        <div className="act-details-hero-bg">
          <img src={activity.heroImage || activity.image || galleryImages[0]} alt={activity.name} />
        </div>
        <div className="act-details-hero-overlay" />

        <div className="act-details-hero-container">
          <div>
            <div className="act-breadcrumb-pill">
              <a href="/home" style={{ color: '#ebded2', textDecoration: 'none' }}>HOME</a>
              <ChevronRight size={12} color="#FF6B4A" />
              <a href="/activities" style={{ color: '#ebded2', textDecoration: 'none' }}>ACTIVITIES</a>
              <ChevronRight size={12} color="#FF6B4A" />
              <span>{activity.name}</span>
            </div>

            <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontBold: 900, color: '#ffffff', background: 'linear-gradient(135deg, #FF6B4A, #F06543)', padding: '5px 14px', borderRadius: 14, letterSpacing: '0.1em', display: 'inline-block', marginBottom: 12, border: '1px solid rgba(255, 107, 74, 0.4)', textTransform: 'uppercase' }}>
              {activity.category || 'PREMIER WATER SPORTS'}
            </span>

            <h1 className="act-hero-main-title">{activity.name}</h1>

            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15.5, color: '#FAF4EE', maxWidth: 660, lineHeight: 1.6, marginBottom: 22, fontWeight: 400 }}>
              {activity.overview || activity.tagline || activity.description}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, fontWeight: 800, color: '#ebded2' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 5, color: '#FF6B4A' }}>
                <MapPin size={14} /> {selectedLocation?.locationName || activity.location || 'Havelock Island'}
              </span>
              <span>•</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 5, color: '#FF6B4A' }}>
                <Clock size={14} /> {activity.duration || '2 Hours'}
              </span>
              <span>•</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 5, color: '#ffd700' }}>
                <Star size={14} className="fill-[#ffd700] text-[#ffd700]" /> {activity.rating || 4.9} ({activity.reviewsCount || 140} Reviews)
              </span>
              <span>•</span>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
                <span style={{ color: '#ffd700', fontWeight: 900 }}>
                  From ₹{adultPrice.toLocaleString('en-IN')} / adult
                </span>
                {adultOriginalPrice > adultPrice && (
                  <span style={{ color: '#cbd5e1', textDecoration: 'line-through', fontSize: 11, fontWeight: 600 }}>
                    ₹{adultOriginalPrice.toLocaleString('en-IN')}
                  </span>
                )}
                {discountPercent > 0 && (
                  <span style={{ background: '#dcfce7', color: '#15803d', fontSize: 10, fontWeight: 900, padding: '1px 6px', borderRadius: 6 }}>
                    {discountPercent}% OFF
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* ── 2. FLOATING BOOKING CARD ── */}
          <div className="act-booking-glass-card">
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12.5, fontWeight: 900, color: '#F06543', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span className="flex items-center gap-1.5"><Sparkles size={15} /> PLAN YOUR ACTIVITY</span>
              <span className="text-[10.5px] font-mono text-emerald-600 font-black bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">🟢 SLOTS ACTIVE</span>
            </div>

            {/* Location Selector if multiple */}
            {Array.isArray(activity.locations) && activity.locations.length > 1 && (
              <div style={{ marginBottom: 14 }}>
                <label style={{ display: 'block', fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, fontWeight: 800, color: '#5C6F84', marginBottom: 6 }}>LOCATION & JETTY</label>
                <select
                  value={selectedLocation?.id || ''}
                  onChange={(e) => {
                    const loc = activity.locations.find(l => String(l.id) === e.target.value);
                    if (loc) setSelectedLocation(loc);
                  }}
                  style={{ width: '100%', padding: '12px 14px', borderRadius: 14, background: '#FFF8F0', border: '2px solid #ebded2', color: '#0B2545', outline: 'none', fontWeight: 700, fontSize: 13, cursor: 'pointer' }}
                >
                  {activity.locations.map(l => (
                    <option key={l.id} value={l.id}>
                      {l.locationName} (₹{Number(l.adultPrice).toLocaleString()} / adult)
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Date Input */}
            <div style={{ marginBottom: 14 }}>
              <label style={{ display: 'block', fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, fontWeight: 800, color: '#5C6F84', marginBottom: 6 }}>SELECT DATE</label>
              <input
                type="date"
                min={new Date().toISOString().split('T')[0]}
                value={bookingDate}
                onChange={(e) => setBookingDate(e.target.value)}
                style={{ width: '100%', padding: '12px 14px', borderRadius: 14, background: '#FFF8F0', border: '2px solid #ebded2', color: '#0B2545', outline: 'none', fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 700, boxSizing: 'border-box' }}
              />
            </div>

            {/* Guests Input */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 14 }}>
              <div>
                <label style={{ display: 'block', fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, fontWeight: 800, color: '#5C6F84', marginBottom: 6 }}>ADULTS</label>
                <select value={adults} onChange={(e) => setAdults(Number(e.target.value))} style={{ width: '100%', padding: '12px 12px', borderRadius: 14, background: '#FFF8F0', border: '2px solid #ebded2', color: '#0B2545', outline: 'none', fontWeight: 700, fontSize: 13, cursor: 'pointer' }}>
                  <option value={1}>1 Adult</option>
                  <option value={2}>2 Adults</option>
                  <option value={3}>3 Adults</option>
                  <option value={4}>4 Adults</option>
                  <option value={6}>6+ Group</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, fontWeight: 800, color: '#5C6F84', marginBottom: 6 }}>CHILDREN</label>
                <select value={childrenCount} onChange={(e) => setChildCount(Number(e.target.value))} style={{ width: '100%', padding: '12px 12px', borderRadius: 14, background: '#FFF8F0', border: '2px solid #ebded2', color: '#0B2545', outline: 'none', fontWeight: 700, fontSize: 13, cursor: 'pointer' }}>
                  <option value={0}>0 Child</option>
                  <option value={1}>1 Child</option>
                  <option value={2}>2 Children</option>
                </select>
              </div>
            </div>

            {/* Timing Slots */}
            <div style={{ marginBottom: 18 }}>
              <label style={{ display: 'block', fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, fontWeight: 800, color: '#5C6F84', marginBottom: 6 }}>TIME SLOT</label>
              <select
                value={selectedSlot?.id || ''}
                onChange={(e) => {
                  const s = slots.find(item => item.id === Number(e.target.value));
                  if (s) setSelectedSlot(s);
                }}
                style={{ width: '100%', padding: '12px 14px', borderRadius: 14, background: '#FFF8F0', border: '2px solid #ebded2', color: '#0B2545', outline: 'none', fontWeight: 700, fontSize: 13, cursor: 'pointer' }}
              >
                {slots.length > 0 ? (
                  slots.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.startTime}{s.endTime ? ` – ${s.endTime}` : ''} ({s.remainingCapacity} seats left)
                    </option>
                  ))
                ) : (
                  <option value="">Morning Session (07:00 AM - 10:00 AM)</option>
                )}
              </select>
            </div>

            {/* Fare Summary */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18, paddingTop: 14, borderTop: '2px solid #ebded2' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 2 }}>
                  <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 800, color: '#5C6F84', textTransform: 'uppercase' }}>TOTAL ESTIMATE</span>
                  {discountPercent > 0 && (
                    <span style={{ fontSize: 10, fontWeight: 900, color: '#16a34a', background: '#dcfce7', padding: '1px 6px', borderRadius: 6 }}>
                      {discountPercent}% OFF
                    </span>
                  )}
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                  <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 24, fontWeight: 900, color: '#0B2545' }}>
                    ₹{totalAmount.toLocaleString('en-IN')}
                  </span>
                  {totalOriginalAmount > totalAmount && (
                    <span style={{ fontSize: 13, color: '#94a3b8', textDecoration: 'line-through', fontWeight: 600 }}>
                      ₹{totalOriginalAmount.toLocaleString('en-IN')}
                    </span>
                  )}
                </div>
              </div>

              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: '#F06543', fontWeight: 800, display: 'flex', alignItems: 'center', gap: 4 }}>
                <ShieldCheck size={14} /> Certified Gear Included
              </div>
            </div>

            <button
              onClick={handleBookClick}
              style={{
                width: '100%', background: 'linear-gradient(135deg, #FF6B4A 0%, #F06543 100%)', border: '2px solid #F06543',
                color: '#ffffff', fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 900,
                padding: '15px', borderRadius: 16, cursor: 'pointer', display: 'flex', alignItems: 'center',
                justifyContent: 'center', gap: 8, boxShadow: '0 6px 22px rgba(240, 101, 67, 0.28)', letterSpacing: '0.05em'
              }}
            >
              <span>INSTANT BOOKING</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ── 3. QUICK INFO BAR ── */}
      <div className="act-quick-info-bar">
        <div className="act-quick-info-grid">
          <div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11.5, fontWeight: 800, color: '#F06543', textTransform: 'uppercase' }}>DURATION</div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, fontWeight: 900, color: '#0B2545' }}>{activity.duration || '2 Hours'}</div>
          </div>
          <div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11.5, fontWeight: 800, color: '#0B2545', textTransform: 'uppercase' }}>ISLAND LOCATION</div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, fontWeight: 900, color: '#0B2545' }}>{selectedLocation?.locationName || activity.location || 'Havelock Island'}</div>
          </div>
          <div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11.5, fontWeight: 800, color: '#F06543', textTransform: 'uppercase' }}>CATEGORY</div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, fontWeight: 900, color: '#0B2545' }}>{activity.category || 'Water Sports'}</div>
          </div>
          <div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11.5, fontWeight: 800, color: '#0B2545', textTransform: 'uppercase' }}>BEST FOR</div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, fontWeight: 900, color: '#0B2545' }}>{activity.difficulty || 'Non-Swimmers & Beginners'}</div>
          </div>
          <div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11.5, fontWeight: 800, color: '#F06543', textTransform: 'uppercase' }}>SAFETY CREW</div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, fontWeight: 900, color: '#0B2545' }}>1:1 PADI Divemasters</div>
          </div>
        </div>
      </div>

      {/* ── 4. EXPERIENCE DESCRIPTION ── */}
      <section className="act-section-container">
        <div className="act-glass-box" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 36, alignItems: 'center' }}>
          <div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 900, color: '#F06543', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 8 }}>
              AN EXPERIENCE BEYOND THE SHORE
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 38, fontWeight: 700, color: '#0B2545', margin: '0 0 16px', lineHeight: 1.15 }}>
              Immerse Yourself in the Andaman Ocean
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14.5, color: '#5C6F84', lineHeight: 1.7, marginBottom: 24, fontWeight: 500 }}>
              {activity.overview || activity.description || 'Explore breathtaking crystal-clear waters with world-class certified instructors, high-grade safety equipment, and complimentary 4K underwater video included.'}
            </p>
            <button onClick={handleBookClick} style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, fontWeight: 900, color: '#ffffff', background: 'linear-gradient(135deg, #FF6B4A, #F06543)', border: 'none', padding: '13px 26px', borderRadius: 14, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <span>START PLANNING YOUR ADVENTURE</span>
              <ArrowRight size={14} />
            </button>
          </div>

          <div style={{ borderRadius: 22, overflow: 'hidden', height: 320, border: '2px solid #ebded2', background: '#FFF8F0' }}>
            <img src={galleryImages[1] || galleryImages[0]} alt="Andaman Adventure Experience" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* ── 5. CINEMATIC GALLERY ── */}
      <section className="act-section-container">
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 900, color: '#F06543', letterSpacing: '0.15em' }}>CINEMATIC GALLERY</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 36, fontWeight: 700, color: '#0B2545', margin: '4px 0 0' }}>Glimpse of Your Ocean Journey</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', gap: 18 }}>
          {galleryImages.slice(0, 3).map((img, idx) => (
            <div key={idx} onClick={() => setLightboxIndex(idx)} style={{ borderRadius: 22, overflow: 'hidden', height: 260, cursor: 'pointer', border: '2px solid #ebded2' }}>
              <img src={img} alt={`Gallery ${idx}`} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} />
            </div>
          ))}
        </div>
      </section>

      {/* ── 7. INCLUSIONS & EXCLUSIONS ── */}
      <section className="act-section-container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          <div className="act-glass-box">
            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, fontWeight: 900, color: '#F06543', marginBottom: 18, textTransform: 'uppercase' }}>WHAT'S INCLUDED</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {inclusionsList.map((inc, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: 12, fontFamily: "'Inter', sans-serif", fontSize: 13.5, color: '#2D3E50', fontWeight: 600 }}>
                  <span style={{ width: 24, height: 24, borderRadius: '50%', background: '#FFF0EB', color: '#F06543', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: 900, fontSize: 12 }}>✓</span>
                  <span>{inc}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="act-glass-box">
            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, fontWeight: 900, color: '#ef4444', marginBottom: 18, textTransform: 'uppercase' }}>NOT INCLUDED</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {exclusionsList.map((exc, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: 12, fontFamily: "'Inter', sans-serif", fontSize: 13.5, color: '#5C6F84', fontWeight: 500 }}>
                  <span style={{ width: 24, height: 24, borderRadius: '50%', background: '#fee2e2', color: '#ef4444', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: 900, fontSize: 12 }}>✕</span>
                  <span>{exc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. SAFETY GUIDELINES ── */}
      <section className="act-section-container">
        <div className="act-glass-box">
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 900, color: '#F06543', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 8 }}>
            SAFETY & GUIDELINES
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 34, fontWeight: 700, color: '#0B2545', marginBottom: 20 }}>
            Essential Requirements & Advisory
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {requirementsList.map((req, idx) => (
              <div key={idx} style={{ padding: '16px 20px', borderRadius: 18, background: '#FFF8F0', border: '1.5px solid #ebded2', display: 'flex', alignItems: 'flex-start', gap: 12, fontSize: 13, color: '#2D3E50', fontWeight: 600, lineHeight: 1.5 }}>
                <span style={{ width: 24, height: 24, borderRadius: '50%', background: '#ebded2', color: '#0B2545', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 11, fontWeight: 900 }}>{idx + 1}</span>
                <span>{req}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. VIDEO SECTION IF AVAILABLE ── */}
      {activity.videoUrl && (
        <section className="act-section-container">
          <div className="act-glass-box">
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 34, fontWeight: 700, color: '#0B2545', marginBottom: 18, display: 'flex', alignItems: 'center', gap: 10 }}>
              <Play size={22} className="text-[#F06543] fill-[#F06543]" />
              Video Preview
            </h2>
            <div style={{ width: '100%', height: 420, borderRadius: 22, overflow: 'hidden', border: '2px solid #ebded2' }}>
              <iframe
                src={activity.videoUrl.replace('watch?v=', 'embed/')}
                title={`${activity.name} Preview Video`}
                style={{ width: '100%', height: '100%', border: 0 }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>
      )}

      {/* ── 10. RESERVATION CALLOUT ── */}
      <section className="act-section-container">
        <div className="act-glass-box" style={{ maxWidth: 840, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 900, color: '#F06543', letterSpacing: '0.15em', marginBottom: 8, textTransform: 'uppercase' }}>
            OFFICIAL RESERVATION SYSTEM
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 38, fontWeight: 700, color: '#0B2545', marginBottom: 12 }}>
            Reserve Your Experience Pass
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#5C6F84', marginBottom: 24, fontWeight: 500 }}>
            Instant booking confirmation with zero convenience fees. 100% full refund policy if weather restricts water activity.
          </p>

          <button
            onClick={handleBookClick}
            style={{
              fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 900, color: '#ffffff',
              background: 'linear-gradient(135deg, #FF6B4A, #F06543)', border: 'none', padding: '16px 36px',
              borderRadius: 16, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 8,
              boxShadow: '0 8px 24px rgba(240, 101, 67, 0.25)', letterSpacing: '0.05em'
            }}
          >
            <span>CONFIRM & BOOK THIS ACTIVITY NOW</span>
            <ArrowRight size={15} />
          </button>
        </div>
      </section>

      {/* ── 11. STICKY BOTTOM BAR FOR MOBILE/DESKTOP ── */}
      <div className={`act-sticky-bar${stickyVisible ? ' visible' : ''}`}>
        <div>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 15, fontWeight: 900, color: '#0B2545' }}>{activity.name}</div>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 800, color: '#F06543' }}>
            From ₹{adultPrice.toLocaleString()} / person
          </div>
        </div>

        <button
          onClick={handleBookClick}
          style={{
            fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, fontWeight: 900, color: '#ffffff',
            background: 'linear-gradient(135deg, #FF6B4A, #F06543)', border: 'none', padding: '11px 24px',
            borderRadius: 14, cursor: 'pointer'
          }}
        >
          BOOK NOW →
        </button>
      </div>

      <FooterBottom />

      {/* ── REAL-TIME BOOKING MODAL (RAZORPAY INTEGRATED) ── */}
      <ActivityBookingModal
        activity={activity}
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialLocationId={selectedLocation?.id}
        initialDate={bookingDate}
        initialSlotId={selectedSlot?.id}
      />
    </div>
  );
}
