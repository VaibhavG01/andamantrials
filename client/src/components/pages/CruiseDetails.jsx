// src/components/pages/CruiseDetails.jsx
// ─────────────────────────────────────────────────────────────────────────────
// PREMIUM DYNAMIC CRUISE DETAILS PAGE — URL Structure: /cruises/:slug
// Experience First • Defensive Array Normalization • Multi-Step Booking Flow • Login-First Guarded

import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { getCruiseBySlug, getAllCruises } from '../../services/cruiseService';
import { CRUISE_LISTINGS } from '../../data/cruiseData';
import FooterBottom from '../FooterBottom';
import {
  ChevronRight, MapPin, Clock, Star, Users, Check, X, Shield, Calendar,
  ArrowRight, Sunset, Anchor, Camera, Utensils, Info, Sparkles, MessageCircle,
  HelpCircle, Compass, Navigation, ChevronLeft
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { openRazorpayCheckout } from '../../utils/razorpay';

gsap.registerPlugin(ScrollTrigger);

// Safe Array Parser Helper
const parseArrayField = (field, fallback = []) => {
  if (!field) return fallback;
  if (Array.isArray(field)) return field.length > 0 ? field : fallback;
  if (typeof field === 'string') {
    try {
      const parsed = JSON.parse(field);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    } catch (e) {
      const list = field.split(/[\n,]+/).map(s => s.trim().replace(/^[-*•]\s*/, '')).filter(Boolean);
      if (list.length > 0) return list;
    }
  }
  return fallback;
};

export default function CruiseDetails() {
  const { requireAuth, isLoggedIn, user } = useAuth();
  const [cruise, setCruise] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Booking Form State
  const [bookingDate, setBookingDate] = useState('');
  const [adults, setAdults] = useState(2);
  const [childrenCount, setChildrenCount] = useState(0);
  const [selectedTime, setSelectedTime] = useState('');
  const [bookingStep, setBookingStep] = useState(1);
  const [isBookedSuccess, setIsBookedSuccess] = useState(false);
  const [stickyVisible, setStickyVisible] = useState(false);

  // Lightbox State
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    // Resolve slug from URL path or query params
    const pathname = window.location.pathname;
    const searchParams = new URLSearchParams(window.location.search);

    let slug = searchParams.get('slug') || searchParams.get('id');
    if (!slug) {
      const parts = pathname.split('/').filter(Boolean);
      if (parts.length > 1 && (parts[0] === 'cruises' || parts[0] === 'cruise-details')) {
        slug = parts[1];
      }
    }
    if (!slug) slug = 'andaman-sunset-sail';

    async function loadData() {
      setLoading(true);
      try {
        const res = await getCruiseBySlug(slug);
        if (res.success && res.data) {
          setCruise(res.data);
        } else {
          // Fallback to static cruise catalog if API has not seeded this slug
          const fallback = CRUISE_LISTINGS.find(
            c => c.slug === slug || c.id === slug || c.slug.includes(slug) || slug.includes(c.slug)
          ) || CRUISE_LISTINGS[0];
          if (fallback) {
            setCruise(fallback);
          } else {
            setError('CRUISE NOT FOUND');
          }
        }
      } catch (err) {
        console.error('Error loading cruise details:', err);
        const fallback = CRUISE_LISTINGS[0];
        setCruise(fallback);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  // Sticky Bar Listener
  useEffect(() => {
    const handleScroll = () => {
      setStickyVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBookClick = () => {
    // LOGIN FIRST GUARD
    requireAuth(
      () => {
        const availabilityEl = document.getElementById('booking-section');
        if (availabilityEl) availabilityEl.scrollIntoView({ behavior: 'smooth' });
        setBookingStep(2);
      },
      'Please sign in or create an account to book your cruise experience.'
    );
  };

  const handleConfirmBooking = (e) => {
    e.preventDefault();
    requireAuth(
      async () => {
        const pnr = `AND-${Math.floor(100000 + Math.random() * 900000)}`;
        const totalAmount = (Number(cruise?.startingPrice || cruise?.price || 2500) * adults) + (Number(cruise?.startingPrice || cruise?.price || 2500) * 0.7 * childrenCount);

        await openRazorpayCheckout({
          orderData: {
            bookingNumber: pnr,
            totalAmount: Math.round(totalAmount),
            title: `${cruise.name} (Slot: ${selectedTime || '17:00'})`,
            customerName: user?.name || user?.fullName || 'Valued Voyager',
            customerEmail: user?.email || 'voyager@andaman.com',
            customerPhone: user?.phone || '+91 98765 43210',
          },
          onSuccess: () => {
            setIsBookedSuccess(true);
            setBookingStep(3);
          },
          onFailure: (err) => {
            alert(err?.description || 'Razorpay payment was cancelled or failed.');
          }
        });
      },
      'Please sign in to complete your cruise reservation.'
    );
  };

  if (loading) {
    return (
      <div style={{ width: '100%', minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#ffffff', color: '#F06543' }}>
        <div style={{ width: 44, height: 44, borderRadius: '50%', border: '3px solid rgba(240, 101, 67, 0.2)', borderTopColor: '#F06543', animation: 'spin 0.8s linear infinite', marginBottom: 16 }} />
        <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
        <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, fontWeight: 800, letterSpacing: '0.2em', color: '#64748b' }}>
          LOADING CRUISE EXPERIENCE...
        </span>
      </div>
    );
  }

  if (error || !cruise) {
    return (
      <div style={{ width: '100%', minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#ffffff', color: '#0f172a', padding: 24, textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 42, fontWeight: 600, color: '#F06543', marginBottom: 12 }}>
          CRUISE NOT FOUND
        </h2>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#64748b', marginBottom: 24 }}>
          The requested luxury cruise experience could not be located.
        </p>
        <a href="/cruises" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, fontWeight: 800, color: '#ffffff', background: 'linear-gradient(135deg, #FF6B4A, #F06543)', padding: '12px 28px', borderRadius: 16, textDecoration: 'none' }}>
          BACK TO CRUISES →
        </a>
      </div>
    );
  }

  // Defensive Normalizations
  const name = cruise.name || 'Andaman Luxury Cruise';
  const type = cruise.type || 'Sunset Cruise';
  const duration = cruise.duration || '2.5 Hours';
  const location = cruise.location || cruise.departurePoint || 'Port Blair Harbour';
  const bestFor = cruise.bestFor || 'Couples, Families & Leisure Travelers';
  const price = cruise.startingPrice || cruise.price || 2500;
  const excerpt = cruise.excerpt || cruise.shortDescription || (cruise.description ? cruise.description.slice(0, 160) + '...' : 'Immerse yourself in a luxurious Andaman sea journey.');
  const description = cruise.description || cruise.shortDescription || excerpt;

  const coverImage = cruise.coverImage || cruise.heroImage || cruise.image || 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=90';

  const rawGallery = parseArrayField(cruise.gallery, []);
  const galleryImages = [
    coverImage,
    ...(rawGallery.length > 0 ? rawGallery : [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80',
    ])
  ].filter(Boolean);

  const departureTimes = (() => {
    const list = parseArrayField(cruise.departureTimes, []);
    if (list.length > 0) return list;
    if (Array.isArray(cruise.schedules) && cruise.schedules.length > 0) {
      const scheduleTimes = cruise.schedules.map(s => s.departureTime || s.time).filter(Boolean);
      if (scheduleTimes.length > 0) return scheduleTimes;
    }
    return ['04:30 PM (Sunset)', '05:45 PM (Twilight)', '07:15 PM (Starlight)'];
  })();

  const activeSelectedTime = selectedTime || departureTimes[0] || '04:30 PM';

  const inclusions = parseArrayField(cruise.inclusions, [
    'Welcome Mocktail / Island Tender Refreshment',
    '360° Open Ocean Viewing Deck Access',
    'Certified Marine Safety Vests & First Aid Support',
    'Live Acoustic Sunset Music Onboard',
    'Port & Harbour Passenger Clearance Permits'
  ]);

  const exclusions = parseArrayField(cruise.exclusions, [
    'Hotel Pick-up and Drop transfers (Available as Add-on)',
    'Special A La Carte Gourmet Dishes & Spirits',
    'Private Drone & DSLR Photo/Video Shoots'
  ]);

  return (
    <div className="cruise-details-root">
      <style>{`
        .cruise-details-root {
          min-height: 100vh; background: #f8fafc; color: #334155;
          padding-top: 90px; overflow-x: hidden; font-family: 'Inter', sans-serif;
        }

        .cd-hero {
          position: relative; width: 100%; min-height: 72vh; max-height: 720px;
          display: flex; align-items: flex-end; padding: 60px 24px 80px;
          box-sizing: border-box; overflow: hidden; background: #0B2545;
        }
        .cd-hero-bg {
          position: absolute; inset: 0; z-index: 1;
        }
        .cd-hero-bg img {
          width: 100%; height: 100%; object-fit: cover;
          filter: brightness(0.6) saturate(1.2);
          transform: scale(1.04); transition: transform 8s ease;
        }
        .cd-hero:hover .cd-hero-bg img { transform: scale(1.08); }

        .cd-hero-overlay {
          position: absolute; inset: 0; z-index: 2;
          background: linear-gradient(180deg, rgba(11,37,69,0.4) 0%, rgba(11,37,69,0.85) 75%, #f8fafc 100%);
        }

        .cd-hero-container {
          position: relative; z-index: 4; max-width: 1340px; margin: 0 auto; width: 100%;
          display: grid; grid-template-columns: 1fr 380px; gap: 40px; align-items: flex-end;
        }
        @media (max-width: 960px) {
          .cd-hero-container { grid-template-columns: 1fr; }
        }

        .breadcrumb-pill {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'Space Grotesk', sans-serif; font-size: 12px; font-weight: 800;
          color: #F06543; background: rgba(255, 255, 255, 0.9); backdrop-filter: blur(16px);
          border: 1px solid #e2e8f0; padding: 5px 16px; border-radius: 20px; margin-bottom: 16px;
        }

        .cd-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(36px, 5.5vw, 64px); font-weight: 700; color: #ffffff;
          line-height: 1.08; margin: 0 0 14px; text-shadow: 0 4px 24px rgba(0,0,0,0.6);
        }

        /* Floating Booking Card */
        .booking-glass-card {
          background: #ffffff;
          border: 1px solid #e2e8f0; border-radius: 24px;
          padding: 28px; box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12);
        }

        .quick-info-bar {
          max-width: 1340px; margin: -30px auto 40px; padding: 0 24px;
          position: relative; z-index: 10;
        }
        .quick-info-grid {
          display: grid; grid-template-columns: repeat(5, 1fr); gap: 16px;
          background: #ffffff;
          border: 1px solid #e2e8f0; border-radius: 20px; padding: 20px 24px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.06);
        }
        @media (max-width: 900px) {
          .quick-info-grid { grid-template-columns: repeat(2, 1fr); }
        }

        .section-container {
          max-width: 1340px; margin: 0 auto; padding: 40px 24px;
        }

        .glass-box {
          background: #ffffff;
          border: 1px solid #e2e8f0; border-radius: 24px; padding: 36px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.04);
        }

        .sticky-bar {
          position: fixed; bottom: 0; left: 0; right: 0; z-index: 999;
          background: rgba(255, 255, 255, 0.96); backdrop-filter: blur(20px);
          border-top: 1px solid #e2e8f0; padding: 14px 24px;
          display: flex; align-items: center; justify-content: space-between;
          transform: translateY(100%); transition: transform 0.3s ease;
          box-shadow: 0 -8px 24px rgba(0,0,0,0.08);
        }
        .sticky-bar.visible { transform: translateY(0); }
      `}</style>

      {/* ── 1. CINEMATIC HERO ── */}
      <section className="cd-hero">
        <div className="cd-hero-bg">
          <img src={coverImage} alt={name} />
        </div>
        <div className="cd-hero-overlay" />

        <div className="cd-hero-container">
          <div>
            <div className="breadcrumb-pill">
              <a href="/home" style={{ color: '#0B2545', textDecoration: 'none' }}>HOME</a>
              <ChevronRight size={12} color="#F06543" />
              <a href="/cruises" style={{ color: '#0B2545', textDecoration: 'none' }}>CRUISES</a>
              <ChevronRight size={12} color="#F06543" />
              <span style={{ color: '#F06543' }}>{name}</span>
            </div>

            <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 900, color: '#ffffff', background: 'linear-gradient(135deg, #FF6B4A, #F06543)', padding: '4px 14px', borderRadius: 14, letterSpacing: '0.1em', display: 'inline-block', marginBottom: 12 }}>
              {type}
            </span>

            <h1 className="cd-title">{name}</h1>

            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: '#f1f5f9', maxWidth: 640, lineHeight: 1.6, marginBottom: 20 }}>
              {excerpt}
            </p>

            <div style={{ display: 'flex', gap: 16, fontFamily: "'Space Grotesk', sans-serif", fontSize: 12.5, fontWeight: 700, color: '#e2e8f0', flexWrap: 'wrap' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 5, color: '#F06543' }}>
                <MapPin size={14} /> {location}
              </span>
              <span>•</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 5, color: '#F06543' }}>
                <Clock size={14} /> {duration}
              </span>
              <span>•</span>
              <span style={{ color: '#cbd5e1' }}>BEST FOR: {bestFor}</span>
            </div>
          </div>

          {/* ── 2. FLOATING BOOKING CARD ── */}
          <div className="booking-glass-card">
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, fontWeight: 900, color: '#F06543', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 6 }}>
              <Sparkles size={14} />
              <span>PLAN YOUR CRUISE</span>
            </div>

            <div style={{ marginBottom: 14 }}>
              <label style={{ display: 'block', fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, fontWeight: 800, color: '#64748b', marginBottom: 6 }}>SELECT DATE</label>
              <input
                type="date"
                value={bookingDate}
                onChange={(e) => setBookingDate(e.target.value)}
                style={{ width: '100%', padding: '10px 14px', borderRadius: 12, background: '#ffffff', border: '1px solid #cbd5e1', color: '#1e293b', outline: 'none', fontFamily: "'Inter', sans-serif", fontSize: 13, boxSizing: 'border-box' }}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 14 }}>
              <div>
                <label style={{ display: 'block', fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, fontWeight: 800, color: '#64748b', marginBottom: 6 }}>ADULTS</label>
                <select value={adults} onChange={(e) => setAdults(Number(e.target.value))} style={{ width: '100%', padding: '10px', borderRadius: 12, background: '#f8fafc', border: '1px solid #cbd5e1', color: '#0f172a', outline: 'none', fontWeight: 600 }}>
                  <option value={1}>1 Adult</option>
                  <option value={2}>2 Adults</option>
                  <option value={4}>4 Adults</option>
                  <option value={6}>6 Adults</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, fontWeight: 800, color: '#64748b', marginBottom: 6 }}>CHILDREN</label>
                <select value={childrenCount} onChange={(e) => setChildrenCount(Number(e.target.value))} style={{ width: '100%', padding: '10px', borderRadius: 12, background: '#f8fafc', border: '1px solid #cbd5e1', color: '#0f172a', outline: 'none', fontWeight: 600 }}>
                  <option value={0}>0 Child</option>
                  <option value={1}>1 Child</option>
                  <option value={2}>2 Children</option>
                </select>
              </div>
            </div>

            <div style={{ marginBottom: 20 }}>
              <label style={{ display: 'block', fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, fontWeight: 800, color: '#64748b', marginBottom: 6 }}>DEPARTURE TIME</label>
              <select value={activeSelectedTime} onChange={(e) => setSelectedTime(e.target.value)} style={{ width: '100%', padding: '10px 14px', borderRadius: 12, background: '#f8fafc', border: '1px solid #cbd5e1', color: '#1e293b', outline: 'none', fontWeight: 600 }}>
                {departureTimes.map((t, idx) => (
                  <option key={idx} value={t}>{t} Departure</option>
                ))}
              </select>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
              <div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 800, color: '#64748b' }}>STARTING FARE</div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 22, fontWeight: 900, color: '#F06543' }}>
                  {price ? `₹${Number(price).toLocaleString('en-IN')}` : 'ENQUIRE FOR PRICE'}
                </div>
              </div>

              {!isLoggedIn && (
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11.5, color: '#e67e22', display: 'flex', alignItems: 'center', gap: 4, fontWeight: 700 }}>
                  <Shield size={13} /> Sign in to Book
                </div>
              )}
            </div>

            <button onClick={handleBookClick} style={{ width: '100%', background: 'linear-gradient(135deg, #FF6B4A, #F06543)', border: 'none', color: '#ffffff', fontFamily: "'Space Grotesk', sans-serif", fontSize: 12.5, fontWeight: 900, padding: 14, borderRadius: 14, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, boxShadow: '0 4px 16px rgba(240, 101, 67, 0.35)' }}>
              <span>{isLoggedIn ? 'PROCEED TO BOOKING' : 'LOGIN TO BOOK NOW'}</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </section>

      {/* ── 3. QUICK INFO BAR ── */}
      <div className="quick-info-bar">
        <div className="quick-info-grid">
          <div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 800, color: '#F06543' }}>DURATION</div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 800, color: '#0B2545' }}>{duration}</div>
          </div>
          <div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 800, color: '#F06543' }}>LOCATION</div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 800, color: '#0B2545' }}>{location}</div>
          </div>
          <div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 800, color: '#F06543' }}>CRUISE TYPE</div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 800, color: '#0B2545' }}>{type}</div>
          </div>
          <div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 800, color: '#F06543' }}>BEST SUITED FOR</div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 800, color: '#0B2545' }}>{bestFor}</div>
          </div>
          <div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 800, color: '#F06543' }}>TIMINGS</div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 800, color: '#0B2545' }}>{departureTimes[0] || '17:00'}</div>
          </div>
        </div>
      </div>

      {/* ── 4. EXPERIENCE DESCRIPTION ── */}
      <section className="section-container">
        <div className="glass-box" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 36, alignItems: 'center' }}>
          <div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 800, color: '#F06543', letterSpacing: '0.15em', marginBottom: 8 }}>
              AN EXPERIENCE BEYOND THE SHORE
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 38, fontWeight: 600, color: '#0B2545', margin: '0 0 16px', lineHeight: 1.15 }}>
              Immerse Yourself in the Rhythm of the Ocean
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14.5, color: '#475569', lineHeight: 1.7, marginBottom: 24 }}>
              {description}
            </p>
            <button onClick={handleBookClick} style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11.5, fontWeight: 800, color: '#ffffff', background: 'linear-gradient(135deg, #FF6B4A, #F06543)', border: 'none', padding: '12px 24px', borderRadius: 14, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <span>START PLANNING YOUR CRUISE</span>
              <ArrowRight size={14} />
            </button>
          </div>

          <div style={{ borderRadius: 20, overflow: 'hidden', height: 320, border: '1px solid #e2e8f0', boxShadow: '0 8px 24px rgba(0,0,0,0.06)' }}>
            <img src={galleryImages[1] || coverImage} alt="Andaman Ocean Experience" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* ── 5. CINEMATIC GALLERY ── */}
      <section className="section-container">
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 800, color: '#F06543', letterSpacing: '0.15em' }}>CINEMATIC GALLERY</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 36, color: '#0B2545', margin: '4px 0 0' }}>Glimpse of Your Ocean Journey</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
          {galleryImages.slice(0, 4).map((img, idx) => (
            <div key={idx} onClick={() => setLightboxIndex(idx)} style={{ borderRadius: 20, overflow: 'hidden', height: 240, cursor: 'pointer', border: '1px solid #e2e8f0', position: 'relative' }}>
              <img src={img} alt={`Gallery ${idx}`} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} />
              <div style={{ position: 'absolute', bottom: 12, right: 12, background: 'rgba(0,0,0,0.6)', color: '#ffffff', padding: '4px 8px', borderRadius: 8, fontSize: 11, display: 'flex', alignItems: 'center', gap: 4 }}>
                <Camera size={12} /> View Photo
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── LIGHTBOX MODAL ── */}
      {lightboxIndex !== null && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(0, 0, 0, 0.92)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }} onClick={() => setLightboxIndex(null)}>
          <button style={{ position: 'absolute', top: 24, right: 24, background: 'none', border: 'none', color: '#ffffff', cursor: 'pointer', fontSize: 24 }} onClick={() => setLightboxIndex(null)}>
            <X size={32} />
          </button>
          <img src={galleryImages[lightboxIndex]} alt="Enlarged gallery photo" style={{ maxWidth: '90vw', maxHeight: '85vh', borderRadius: 12, objectFit: 'contain', boxShadow: '0 20px 60px rgba(0,0,0,0.8)' }} onClick={(e) => e.stopPropagation()} />
        </div>
      )}

      {/* ── 6. 3D INTERACTIVE ROUTE MAP ── */}
      <section className="section-container">
        <div className="glass-box" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 36, alignItems: 'center' }}>
          <div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 800, color: '#F06543', letterSpacing: '0.15em', marginBottom: 8 }}>
              SEA EXPEDITION TRAJECTORY
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 36, color: '#0B2545', margin: '0 0 14px' }}>
              FOLLOW THE JOURNEY
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#64748b', lineHeight: 1.6, marginBottom: 20 }}>
              Experience the tranquility of sailing across the crystal-clear waters of the Andaman Sea with curated viewing decks, sunset points, and ocean breeze lounges.
            </p>
            <div style={{ background: '#f8fafc', padding: 16, borderRadius: 16, border: '1px solid #e2e8f0' }}>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, fontWeight: 800, color: '#F06543', marginBottom: 6 }}>CRUISE PATHWAY</div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#334155', fontWeight: 600 }}>Port Blair Harbour → Open Andaman Sea → Golden Hour Sunset Point → Return</div>
            </div>
          </div>

          <div style={{ borderRadius: 20, overflow: 'hidden', background: '#ffffff', border: '1px solid #e2e8f0', padding: 24, boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 38, height: 38, borderRadius: 12, background: 'rgba(240, 101, 67, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#F06543' }}>
                  <Compass size={20} />
                </div>
                <div>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 15, fontWeight: 800, color: '#0B2545' }}>Voyage Waypoints</div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: '#64748b' }}>Scenic Coastal & Deep Sea Navigations</div>
                </div>
              </div>
              <span style={{ background: '#ecfdf5', color: '#059669', fontSize: 11, fontWeight: 700, padding: '4px 10px', borderRadius: 20, border: '1px solid #a7f3d0' }}>
                CONFIRMED ROUTE
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 14px', background: '#f8fafc', borderRadius: 12 }}>
                <div style={{ width: 28, height: 28, borderRadius: 8, background: '#0B2545', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 800 }}>1</div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: '#0B2545' }}>Embarkation & Welcome Toast</div>
                  <div style={{ fontSize: 11.5, color: '#64748b' }}>Passenger Jetty, Port Blair Harbour</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 14px', background: '#f8fafc', borderRadius: 12 }}>
                <div style={{ width: 28, height: 28, borderRadius: 8, background: '#F06543', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 800 }}>2</div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: '#0B2545' }}>Deep Sea Sunset Horizon</div>
                  <div style={{ fontSize: 11.5, color: '#64748b' }}>Panoramic 360° deck ocean cruise & live music</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 14px', background: '#f8fafc', borderRadius: 12 }}>
                <div style={{ width: 28, height: 28, borderRadius: 8, background: '#0B2545', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 800 }}>3</div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: '#0B2545' }}>Dinner / Starlight Return</div>
                  <div style={{ fontSize: 11.5, color: '#64748b' }}>Harbour lights approach and dockside return</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. INCLUSIONS & EXCLUSIONS ── */}
      <section className="section-container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          <div className="glass-box">
            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, fontWeight: 900, color: '#059669', marginBottom: 16 }}>WHAT'S INCLUDED</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {inclusions.map((inc, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: "'Inter', sans-serif", fontSize: 13.5, color: '#334155' }}>
                  <Check size={16} color="#059669" />
                  <span>{inc}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-box">
            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, fontWeight: 900, color: '#dc2626', marginBottom: 16 }}>NOT INCLUDED</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {exclusions.map((exc, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: "'Inter', sans-serif", fontSize: 13.5, color: '#64748b' }}>
                  <X size={16} color="#dc2626" />
                  <span>{exc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. BOOKING SECTION WITH LOGIN GUARD ── */}
      <section id="booking-section" className="section-container">
        <div className="glass-box" style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 900, color: '#F06543', letterSpacing: '0.15em', marginBottom: 8 }}>
            RESERVATION SYSTEM
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 36, color: '#0B2545', marginBottom: 12 }}>
            Reserve Your Cruise Experience
          </h2>

          {!isLoggedIn ? (
            <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', padding: 24, borderRadius: 20, marginTop: 24 }}>
              <Shield size={32} color="#F06543" style={{ margin: '0 auto 12px' }} />
              <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 18, color: '#0B2545', margin: '0 0 6px' }}>Login Required to Book</h4>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#64748b', marginBottom: 18 }}>
                To ensure secure ticket issuance and passenger verification, please sign in or register before completing your cruise reservation.
              </p>
              <button onClick={handleBookClick} style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, fontWeight: 900, color: '#ffffff', background: 'linear-gradient(135deg, #FF6B4A, #F06543)', border: 'none', padding: '12px 30px', borderRadius: 14, cursor: 'pointer' }}>
                SIGN IN / REGISTER TO BOOK NOW
              </button>
            </div>
          ) : (
            <div style={{ marginTop: 24 }}>
              {isBookedSuccess ? (
                <div style={{ background: '#ecfdf5', border: '1px solid #a7f3d0', padding: 24, borderRadius: 20, color: '#065f46' }}>
                  <Check size={36} style={{ margin: '0 auto 12px', color: '#059669' }} />
                  <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 20, margin: '0 0 6px', color: '#065f46' }}>RESERVATION CONFIRMED!</h4>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#047857' }}>
                    Your booking request for {name} on {bookingDate || 'selected date'} has been placed. Our concierge team will reach out via WhatsApp & Email.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleConfirmBooking} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div style={{ textAlign: 'left', background: '#f8fafc', padding: 18, borderRadius: 16, border: '1px solid #e2e8f0' }}>
                    <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, color: '#F06543', fontWeight: 800, marginBottom: 4 }}>
                      BOOKING SUMMARY
                    </div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#0B2545', fontWeight: 600 }}>
                      {name} • {adults} Adult(s) {childrenCount > 0 ? `• ${childrenCount} Child(ren)` : ''} • {activeSelectedTime} Departure
                    </div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#64748b', marginTop: 4 }}>
                      Passenger: {user?.fullName || user?.name || user?.email || 'Registered Guest'}
                    </div>
                  </div>

                  <button type="submit" style={{ width: '100%', background: 'linear-gradient(135deg, #FF6B4A, #F06543)', border: 'none', color: '#ffffff', fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 900, padding: 15, borderRadius: 14, cursor: 'pointer', boxShadow: '0 4px 16px rgba(240, 101, 67, 0.35)' }}>
                    CONFIRM & BOOK THIS CRUISE NOW
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      </section>

      {/* ── STICKY BOTTOM BAR FOR MOBILE/DESKTOP ── */}
      <div className={`sticky-bar${stickyVisible ? ' visible' : ''}`}>
        <div>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, fontWeight: 800, color: '#0B2545' }}>{name}</div>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, color: '#F06543', fontWeight: 800 }}>
            {price ? `From ₹${Number(price).toLocaleString('en-IN')}` : 'Price on Request'}
          </div>
        </div>

        <button onClick={handleBookClick} style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11.5, fontWeight: 900, color: '#ffffff', background: 'linear-gradient(135deg, #FF6B4A, #F06543)', border: 'none', padding: '10px 22px', borderRadius: 12, cursor: 'pointer' }}>
          {isLoggedIn ? 'BOOK NOW' : 'LOGIN & BOOK'}
        </button>
      </div>

      <FooterBottom />
    </div>
  );
}
