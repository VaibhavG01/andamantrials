// src/components/pages/FerryDetails.jsx
// ─────────────────────────────────────────────────────────────────────────────
// PREMIUM DYNAMIC FERRY DETAILS PAGE — URL Structure: /ferries/:slug
// Route First • Schedule & Terminal • Multi-Step Passenger Booking • Login-First Guarded

import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../../context/AuthContext';
import { getFerryBySlug, getAllFerries } from '../../services/ferryService';
import { FERRY_SCHEDULE_DATA } from '../../data/ferryData';
import UnifiedSlotBookingModal from '../ferries/UnifiedSlotBookingModal';
import FooterBottom from '../FooterBottom';
import {
  ChevronRight, MapPin, Clock, Ship, CheckCircle2, ShieldCheck, AlertCircle, ArrowRight,
  User, Mail, Phone, Calendar, Info, FileText, Check, Shield, Lock, CreditCard, ChevronDown,
  Compass, Navigation, Anchor, Luggage, Briefcase, Zap, Sparkles, CheckCircle
} from 'lucide-react';
import { openRazorpayCheckout } from '../../utils/razorpay';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function normalizeFerry(rawData, slug = '') {
  const data = rawData || {};
  const isNautika = slug.toLowerCase().includes('nautika') || (data.name || data.ferryName || data.operator || '').toLowerCase().includes('nautika');
  
  const fromName = data.from || data.fromDestination?.name || data.routes?.[0]?.fromDestination?.name || 'Port Blair';
  const toName = data.to || data.toDestination?.name || data.routes?.[0]?.toDestination?.name || 'Havelock Island (Swaraj Dweep)';
  const ferryName = data.ferryName || data.name || (isNautika ? 'Nautika Lite Catamaran' : 'Makruzz Gold Catamaran');
  const operator = data.operator || (isNautika ? 'Nautika' : 'Makruzz Lines');
  const vesselClass = data.vesselClass || data.type?.replace(/_/g, ' ') || (isNautika ? 'Royal / Luxury' : 'Royal / Deluxe');
  const departure = data.departure || data.schedules?.[0]?.departureTime || (isNautika ? '06:30 AM' : '08:30 AM');
  const arrival = data.arrival || data.schedules?.[0]?.arrivalTime || (isNautika ? '08:00 AM' : '10:00 AM');
  const duration = data.duration || data.routes?.[0]?.duration || '90 Min';
  const price = Number(data.price || data.schedules?.[0]?.price || (isNautika ? 1650 : 1850));
  const status = data.status || 'ACTIVE';
  const heroImage = data.heroImage || data.image || (isNautika ? 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=85' : 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1600&q=80');
  const boardingPoint = data.boardingPoint || (isNautika ? 'Phoenix Bay Jetty, Port Blair' : 'Haddo Wharf Passenger Terminal, Port Blair');
  const destinationPoint = data.destinationPoint || 'Havelock Island Marine Jetty No. 2';
  const baggageAllowance = data.baggageAllowance || '25kg check-in baggage + 7kg hand cabin luggage per passenger included free.';
  const route = Array.isArray(data.route) && data.route.length > 0 ? data.route : [
    { step: '01', title: isNautika ? 'Phoenix Bay Jetty Check-in' : 'Haddo Wharf Check-in', time: isNautika ? '05:45 AM' : '07:30 AM', desc: 'Report at Marine Terminal with government photo ID proof.' },
    { step: '02', title: 'Boarding & Cast-off', time: isNautika ? '06:15 AM' : '08:15 AM', desc: 'VIP boarding priority and baggage check-in to lower luggage bay.' },
    { step: '03', title: 'High-Speed Ocean Crossing', time: isNautika ? '06:30 AM - 08:00 AM' : '08:30 AM - 10:00 AM', desc: 'Air-conditioned luxury seating with panoramic ocean views & onboard cafe.' },
    { step: '04', title: 'Arrival at Havelock Jetty', time: isNautika ? '08:00 AM' : '10:00 AM', desc: 'Disembark at destination jetty with baggage collection.' },
  ];

  return {
    ...data,
    from: fromName,
    to: toName,
    ferryName,
    operator,
    vesselClass,
    departure,
    arrival,
    duration,
    price,
    status,
    heroImage,
    boardingPoint,
    destinationPoint,
    baggageAllowance,
    route,
  };
}

export default function FerryDetails() {
  const { requireAuth, isLoggedIn, currentUser } = useAuth();

  const [ferry, setFerry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Slot Booking Modal State
  const [slotModalOpen, setSlotModalOpen] = useState(false);
  const [selectedSlotTime, setSelectedSlotTime] = useState(null);
  const [selectedClassTier, setSelectedClassTier] = useState('Luxury');

  // Booking Flow State
  const [travelDate, setTravelDate] = useState('2026-08-20');
  const [adults, setAdults] = useState(2);
  const [childrenCount, setChildrenCount] = useState(0);
  const [infantsCount, setInfantsCount] = useState(0);
  const [vesselClass, setVesselClass] = useState('Royal / Deluxe');
  const [currentStep, setCurrentStep] = useState(1); // 1: Select -> 2: Passenger Info -> 3: Review & Confirm
  const [stickyVisible, setStickyVisible] = useState(false);
  const [isBookedConfirmed, setIsBookedConfirmed] = useState(false);

  // Passenger Form
  const [passenger, setPassenger] = useState({
    fullName: currentUser?.name || '',
    age: '28',
    gender: 'Male',
    idType: 'Aadhaar',
    idNumber: 'XXXX-XXXX-1234',
    phone: currentUser?.phone || '+91 98765 43210',
    email: currentUser?.email || '',
  });

  useEffect(() => {
    // Resolve slug from URL path or query params
    const pathname = window.location.pathname;
    const searchParams = new URLSearchParams(window.location.search);

    let slug = searchParams.get('slug') || searchParams.get('id');
    if (!slug) {
      const parts = pathname.split('/').filter(Boolean);
      if (parts.length > 1 && (parts[0] === 'ferries' || parts[0] === 'ferry-details')) {
        slug = parts[1];
      }
    }
    if (!slug) slug = 'nautika-lite';

    async function loadFerry() {
      setLoading(true);
      try {
        let res = await getFerryBySlug(slug);
        let foundData = res?.data;

        if (!foundData) {
          const allRes = await getAllFerries();
          const apiList = (allRes?.data && Array.isArray(allRes.data) && allRes.data.length > 0) ? allRes.data : [];
          const combinedList = [...apiList, ...FERRY_SCHEDULE_DATA];
          const cleanSlug = slug.toLowerCase().replace(/[^a-z0-9]/g, '');
          
          foundData = combinedList.find(f => {
            const fSlug = (f.slug || '').toLowerCase().replace(/[^a-z0-9]/g, '');
            const fName = (f.name || f.ferryName || '').toLowerCase().replace(/[^a-z0-9]/g, '');
            const fOp = (f.operator || '').toLowerCase().replace(/[^a-z0-9]/g, '');
            return fSlug === cleanSlug || 
                   String(f.id) === slug || 
                   fName.includes(cleanSlug) || 
                   cleanSlug.includes(fSlug) ||
                   (cleanSlug.includes('nautika') && (fName.includes('nautika') || fOp.includes('nautika')));
          }) || combinedList[0];
        }

        if (foundData) {
          setFerry(normalizeFerry(foundData, slug));
        } else {
          setFerry(normalizeFerry({}, slug));
        }
      } catch (err) {
        console.error('Failed to load ferry details:', err);
        setFerry(normalizeFerry({}, slug));
      } finally {
        setLoading(false);
      }
    }
    loadFerry();
  }, []);

  const handleOpenSlotModal = (slotTime, classTier) => {
    if (slotTime) setSelectedSlotTime(slotTime);
    if (classTier) setSelectedClassTier(classTier);
    setSlotModalOpen(true);
  };

  // Sync user info if logged in
  useEffect(() => {
    if (currentUser) {
      setPassenger(prev => ({
        ...prev,
        fullName: prev.fullName || currentUser.name || '',
        phone: prev.phone || currentUser.phone || '',
        email: prev.email || currentUser.email || '',
      }));
    }
  }, [currentUser]);

  // Scroll listener for sticky bar
  useEffect(() => {
    const handleScroll = () => setStickyVisible(window.scrollY > 450);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleStartBooking = () => {
    // LOGIN FIRST GUARD
    requireAuth(
      () => {
        const target = document.getElementById('ferry-booking-section');
        if (target) target.scrollIntoView({ behavior: 'smooth' });
        setCurrentStep(2);
      },
      'Please sign in or create an account to book your ferry tickets.'
    );
  };

  const handleConfirmFinalBooking = (e) => {
    e.preventDefault();
    requireAuth(
      async () => {
        const pnr = `AND-${Math.floor(100000 + Math.random() * 900000)}`;
        await openRazorpayCheckout({
          orderData: {
            bookingNumber: pnr,
            totalAmount: totalPrice,
            title: `${ferry.ferryName} (${ferry.from} → ${ferry.to})`,
            customerName: passenger.fullName || currentUser?.name,
            customerEmail: passenger.email || currentUser?.email,
            customerPhone: passenger.phone || currentUser?.phone,
          },
          onSuccess: (resp) => {
            setIsBookedConfirmed(true);
            setCurrentStep(3);
          },
          onFailure: (err) => {
            alert(err?.description || 'Razorpay payment was cancelled or failed.');
          }
        });
      },
      'Please sign in to confirm your ferry passenger details.'
    );
  };

  if (loading) {
    return (
      <div style={{ width: '100%', minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#ffffff', color: '#F06543' }}>
        <div style={{ width: 44, height: 44, borderRadius: '50%', border: '3px solid rgba(22,217,255,0.2)', borderTopColor: '#F06543', animation: 'spin 0.8s linear infinite', marginBottom: 16 }} />
        <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
        <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, fontWeight: 800, letterSpacing: '0.2em', color: '#64748b' }}>
          LOADING FERRY SCHEDULE & ROUTE...
        </span>
      </div>
    );
  }

  if (error || !ferry) {
    return (
      <div style={{ width: '100%', minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#ffffff', color: '#f5fafc', padding: 24, textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 42, color: '#F06543', marginBottom: 12 }}>
          FERRY ROUTE NOT FOUND
        </h2>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#64748b', marginBottom: 24 }}>
          The requested inter-island ferry schedule is currently unavailable.
        </p>
        <a href="/ferries" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, fontWeight: 800, color: '#ffffff', background: 'linear-gradient(135deg, #FF6B4A, #F06543)', padding: '12px 28px', borderRadius: 16, textDecoration: 'none' }}>
          BACK TO FERRY SCHEDULES →
        </a>
      </div>
    );
  }

  const totalPrice = (adults + childrenCount * 0.8) * ferry.price;

  return (
    <div className="ferry-details-root">
      <style>{`
        .ferry-details-root {
          min-height: 100vh; background: #ffffff; color: #334155;
          padding-top: 90px; overflow-x: hidden; font-family: 'Inter', sans-serif;
        }

        .fd-hero {
          position: relative; width: 100%; min-height: 68vh; max-height: 680px;
          display: flex; align-items: flex-end; padding: 60px 24px 70px;
          box-sizing: border-box; overflow: hidden; background: #f8fafc;
        }
        .fd-hero-bg {
          position: absolute; inset: 0; z-index: 1;
        }
        .fd-hero-bg img {
          width: 100%; height: 100%; object-fit: cover;
          filter: brightness(0.5) saturate(1.2);
        }

        .fd-hero-overlay {
          position: absolute; inset: 0; z-index: 2;
          background: linear-gradient(180deg, rgba(2,14,22,0.7) 0%, #f8fafc 50%, #f8fafc 100%);
        }

        .fd-hero-container {
          position: relative; z-index: 4; max-width: 1340px; margin: 0 auto; width: 100%;
          display: grid; grid-template-columns: 1fr 380px; gap: 40px; align-items: flex-end;
        }
        @media (max-width: 960px) {
          .fd-hero-container { grid-template-columns: 1fr; }
        }

        .summary-card {
          background: #ffffff;
          backdrop-filter: blur(25px); -webkit-backdrop-filter: blur(25px);
          border: 1.5px solid #e2e8f0; border-radius: 24px;
          padding: 28px; boxShadow: 0 24px 64px rgba(0,0,0,0.8);
        }

        .section-container {
          max-width: 1340px; margin: 0 auto; padding: 50px 24px;
        }

        .glass-box {
          background: #ffffff; backdrop-filter: blur(18px);
          border: 1px solid #e2e8f0; border-radius: 24px; padding: 32px;
        }

        .sticky-ferry-bar {
          position: fixed; bottom: 0; left: 0; right: 0; z-index: 999;
          background: #ffffff; backdrop-filter: blur(20px);
          border-top: 1px solid rgba(22, 217, 255, 0.3); padding: 14px 24px;
          display: flex; align-items: center; justify-content: space-between;
          transform: translateY(100%); transition: transform 0.3s ease;
        }
        .sticky-ferry-bar.visible { transform: translateY(0); }
      `}</style>

      {/* ── 1. ROUTE-FOCUSED FERRY HERO ── */}
      <section className="fd-hero">
        <div className="fd-hero-bg">
          <img src={ferry.heroImage} alt={ferry.ferryName} />
        </div>
        <div className="fd-hero-overlay" />

        <div className="fd-hero-container">
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: "'Space Grotesk', sans-serif", fontSize: 12.5, fontWeight: 800, color: '#F06543', background: '#ffffff', border: '1px solid #e2e8f0', padding: '5px 16px', borderRadius: 20, marginBottom: 16 }}>
              <a href="/home" style={{ color: '#64748b', textDecoration: 'none' }}>HOME</a>
              <ChevronRight size={12} color="#F06543" />
              <a href="/ferries" style={{ color: '#64748b', textDecoration: 'none' }}>FERRIES</a>
              <ChevronRight size={12} color="#F06543" />
              <span>{ferry.from || 'Port Blair'} → {ferry.to || 'Havelock Island'}</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 900, color: '#ffffff', background: 'linear-gradient(135deg, #FF6B4A, #F06543)', padding: '4px 14px', borderRadius: 14, letterSpacing: '0.08em' }}>
                {ferry.operator || 'Makruzz Lines'}
              </span>
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 800, color: '#F06543' }}>
                {ferry.vesselClass || 'Royal / Deluxe'}
              </span>
            </div>

            <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(36px, 5.5vw, 64px)', fontWeight: 600, color: '#0B2545', margin: '0 0 16px', lineHeight: 1.05 }}>
              {(ferry.from || 'Port Blair').toUpperCase()} → {(ferry.to || 'Havelock Island').toUpperCase()}
            </h1>

            {/* ROUTE INDICATOR LINE */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, background: '#ffffff', border: '1px solid #e2e8f0', padding: '12px 20px', borderRadius: 16, maxWidth: 520, marginBottom: 20 }}>
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 900, color: '#334155' }}>{ferry.from || 'Port Blair'}</span>
              <div style={{ flex: 1, height: 2, background: 'linear-gradient(90deg, #F06543, #F06543)', position: 'relative' }} />
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 900, color: '#334155' }}>{ferry.to || 'Havelock Island'}</span>
            </div>

            <div style={{ display: 'flex', gap: 16, fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, fontWeight: 700, color: '#64748b' }}>
              <span>DEPART: {ferry.departure || '08:30 AM'}</span>
              <span>•</span>
              <span>ARRIVE: {ferry.arrival || '10:00 AM'}</span>
              <span>•</span>
              <span style={{ color: '#F06543' }}>{ferry.duration || '90 Min'} TRANSIT</span>
            </div>
          </div>

          {/* ── 2. SUMMARY CARD ── */}
          <div className="summary-card">
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 900, color: '#F06543', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 14 }}>
              FERRY TRANSIT SUMMARY
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 14, borderBottom: '1px solid #e2e8f0', paddingBottom: 12 }}>
              <div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12.5, color: '#64748b' }}>VESSEL</div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, fontWeight: 800, color: '#334155' }}>{ferry.ferryName}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12.5, color: '#64748b' }}>STATUS</div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 800, color: '#F06543' }}>● {ferry.status}</div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 16 }}>
              <div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12.5, color: '#64748b' }}>DEPARTURE</div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, fontWeight: 800, color: '#F06543' }}>{ferry.departure}</div>
              </div>
              <div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12.5, color: '#64748b' }}>ARRIVAL</div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, fontWeight: 800, color: '#F06543' }}>{ferry.arrival}</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18, paddingTop: 12, borderTop: '1px solid #e2e8f0' }}>
              <div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12.5, color: '#64748b' }}>TICKET FARE</div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 22, fontWeight: 900, color: '#F06543' }}>₹{ferry.price}</div>
              </div>

              {!isLoggedIn && (
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12.5, color: '#ffd700', display: 'flex', alignItems: 'center', gap: 4 }}>
                  <Shield size={12} /> Login Required
                </div>
              )}
            </div>

            <button 
              onClick={() => handleOpenSlotModal()} 
              style={{ 
                width: '100%', 
                background: 'linear-gradient(135deg, #FF6B4A, #F06543)', 
                border: 'none', 
                color: '#ffffff', 
                fontFamily: "'Space Grotesk', sans-serif", 
                fontSize: 13, 
                fontWeight: 900, 
                padding: '14px 20px', 
                borderRadius: 14, 
                cursor: 'pointer', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                gap: 8, 
                boxShadow: '0 4px 20px rgba(240, 101, 67, 0.4)',
                letterSpacing: '0.04em'
              }}
            >
              <Zap size={16} fill="#ffffff" />
              <span>BOOK DEPARTURE SLOT</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </section>

      {/* ── 2.5 AVAILABLE DEPARTURE SLOTS & SEATING CLASSES MATRIX ── */}
      <section className="section-container" style={{ paddingBottom: 20 }}>
        <div style={{ background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: 28, padding: '36px 32px', boxShadow: '0 12px 36px -8px rgba(0,0,0,0.05)' }}>
          {/* Section Header */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 16, marginBottom: 28 }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 900, color: '#F06543', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 6 }}>
                <Clock size={14} />
                LIVE SAILING SCHEDULE & SLOTS
              </div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 700, color: '#0B2545', margin: 0 }}>
                Choose Departure Slot & Seating Class
              </h2>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13.5, color: '#64748b', margin: '6px 0 0' }}>
                Confirmed e-tickets with instant seat allocation & port authority baggage allowance included.
              </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#ecfdf5', color: '#059669', fontSize: 12, fontWeight: 800, padding: '6px 14px', borderRadius: 20, border: '1px solid #a7f3d0', fontFamily: "'Space Grotesk', sans-serif" }}>
                <CheckCircle size={14} /> LIVE SLOTS OPEN
              </span>
            </div>
          </div>

          {/* DEPARTURE SLOTS GRID */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, marginBottom: 32 }}>
            {[
              { time: '06:30 AM', arrival: '08:00 AM', label: 'First Morning Catamaran', seats: 42, class: 'Luxury / Royal', badge: 'Available', badgeColor: '#059669', popular: false },
              { time: '09:00 AM', arrival: '10:30 AM', label: 'High-Speed Morning Express', seats: 18, class: 'Luxury / Royal', badge: 'High Demand', badgeColor: '#ea580c', popular: true },
              { time: '12:15 PM', arrival: '01:45 PM', label: 'Midday Ocean Crossing', seats: 36, class: 'Luxury / Royal', badge: 'Available', badgeColor: '#059669', popular: false },
              { time: '03:00 PM', arrival: '04:30 PM', label: 'Sunset Island Transfer', seats: 24, class: 'Luxury / Royal', badge: 'Available', badgeColor: '#059669', popular: false },
            ].map((slot, idx) => (
              <div 
                key={idx} 
                style={{ 
                  background: slot.popular ? 'linear-gradient(180deg, #fff7ed 0%, #ffffff 100%)' : '#f8fafc', 
                  border: slot.popular ? '2px solid #fdba74' : '1.5px solid #e2e8f0', 
                  borderRadius: 20, 
                  padding: '20px 20px', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'space-between',
                  transition: 'all 0.25s ease',
                  position: 'relative'
                }}
              >
                {slot.popular && (
                  <span style={{ position: 'absolute', top: -11, right: 16, background: '#ea580c', color: '#ffffff', fontSize: 10, fontWeight: 900, padding: '3px 10px', borderRadius: 12, letterSpacing: '0.05em', fontFamily: "'Space Grotesk', sans-serif" }}>
                    🔥 MOST POPULAR
                  </span>
                )}

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                    <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 800, color: slot.badgeColor, background: `${slot.badgeColor}15`, padding: '3px 8px', borderRadius: 8 }}>
                      ● {slot.badge}
                    </span>
                    <span style={{ fontSize: 11.5, color: '#64748b', fontWeight: 600 }}>
                      {slot.seats} seats left
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 4 }}>
                    <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 24, fontWeight: 900, color: '#0B2545' }}>
                      {slot.time}
                    </span>
                    <span style={{ fontSize: 12, color: '#94a3b8', fontWeight: 700 }}>➔ {slot.arrival}</span>
                  </div>

                  <div style={{ fontSize: 12, fontWeight: 700, color: '#F06543', marginBottom: 6 }}>
                    {slot.label}
                  </div>

                  <div style={{ fontSize: 12, color: '#64748b', lineHeight: 1.4 }}>
                    {ferry.from} ➔ {ferry.to} ({ferry.duration || '90 Min'})
                  </div>
                </div>

                <div style={{ marginTop: 18, paddingTop: 14, borderTop: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ fontSize: 10.5, color: '#94a3b8', fontWeight: 700 }}>FROM</div>
                    <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 900, color: '#0B2545' }}>₹{ferry.price}</div>
                  </div>

                  <button 
                    onClick={() => handleOpenSlotModal(slot.time, 'Luxury')}
                    style={{ 
                      background: 'linear-gradient(135deg, #FF6B4A, #F06543)', 
                      border: 'none', 
                      color: '#ffffff', 
                      fontFamily: "'Space Grotesk', sans-serif", 
                      fontSize: 11.5, 
                      fontWeight: 800, 
                      padding: '8px 16px', 
                      borderRadius: 10, 
                      cursor: 'pointer', 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      gap: 6,
                      boxShadow: '0 2px 10px rgba(240, 101, 67, 0.3)'
                    }}
                  >
                    <Zap size={13} fill="#ffffff" />
                    <span>Book Slot</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* SEATING CLASSES BREAKDOWN */}
          <div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, fontWeight: 900, color: '#0B2545', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 14 }}>
              AVAILABLE SEATING TIERS FOR THIS VESSEL
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 16 }}>
              {/* Luxury Deck */}
              <div style={{ border: '1.5px solid #e2e8f0', borderRadius: 18, padding: '20px 22px', background: '#f8fafc', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                    <div>
                      <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 900, color: '#0B2545', margin: '0 0 2px' }}>
                        Luxury Class (Main AC Deck)
                      </h4>
                      <span style={{ fontSize: 11.5, color: '#059669', fontWeight: 700 }}>● Instant Confirmed Seating</span>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 20, fontWeight: 900, color: '#0B2545' }}>₹{ferry.price}</div>
                      <div style={{ fontSize: 10.5, color: '#94a3b8' }}>per passenger</div>
                    </div>
                  </div>

                  <p style={{ fontSize: 12.5, color: '#64748b', lineHeight: 1.5, margin: '8px 0 14px' }}>
                    Spacious pushback cushioned seating, wide panoramic sea-view windows, lower deck cafeteria access, and 25kg free baggage allowance.
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
                    {['AC Saloon', 'Pushback Seats', 'Sea Windows', 'Cafeteria Access', '25kg Luggage'].map((perk, i) => (
                      <span key={i} style={{ background: '#ffffff', border: '1px solid #e2e8f0', color: '#475569', fontSize: 11, fontWeight: 700, padding: '3px 8px', borderRadius: 8 }}>
                        ✓ {perk}
                      </span>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={() => handleOpenSlotModal(null, 'Luxury')}
                  style={{ width: '100%', background: '#ffffff', border: '1.5px solid #F06543', color: '#F06543', fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, fontWeight: 800, padding: 11, borderRadius: 12, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}
                >
                  <span>Select Luxury Class</span>
                  <ArrowRight size={14} />
                </button>
              </div>

              {/* Royal VIP Deck */}
              <div style={{ border: '2px solid #f97316', borderRadius: 18, padding: '20px 22px', background: 'linear-gradient(180deg, #fff7ed 0%, #ffffff 100%)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 900, color: '#0B2545', margin: 0 }}>
                          👑 Royal Luxury VIP Lounge
                        </h4>
                      </div>
                      <span style={{ fontSize: 11.5, color: '#ea580c', fontWeight: 800 }}>★ VIP Priority Choice</span>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 20, fontWeight: 900, color: '#ea580c' }}>
                        ₹{(ferry.operator || '').toLowerCase().includes('nautika') ? Number(ferry.price) + 300 : Number(ferry.price) + 600}
                      </div>
                      <div style={{ fontSize: 10.5, color: '#94a3b8' }}>per passenger</div>
                    </div>
                  </div>

                  <p style={{ fontSize: 12.5, color: '#64748b', lineHeight: 1.5, margin: '8px 0 14px' }}>
                    Private upper bridge luxury lounge, plush leather executive recliners, complimentary tropical welcome beverage, VIP boarding line & dedicated baggage handling.
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
                    {['VIP Bridge View', 'Leather Recliners', 'Complimentary Drink', 'Priority Boarding', 'Luggage Escort'].map((perk, i) => (
                      <span key={i} style={{ background: '#fffbeb', border: '1px solid #fef3c7', color: '#b45309', fontSize: 11, fontWeight: 800, padding: '3px 8px', borderRadius: 8 }}>
                        ★ {perk}
                      </span>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={() => handleOpenSlotModal(null, 'Royal')}
                  style={{ width: '100%', background: 'linear-gradient(135deg, #FF6B4A, #F06543)', border: 'none', color: '#ffffff', fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, fontWeight: 900, padding: 11, borderRadius: 12, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, boxShadow: '0 4px 14px rgba(240, 101, 67, 0.35)' }}
                >
                  <Sparkles size={14} fill="#ffffff" />
                  <span>Book Royal VIP Slot</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. ROUTE TIMELINE & 3D MAP ── */}
      <section className="section-container" style={{ paddingTop: 20 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 36, alignItems: 'center' }}>
          <div className="glass-box">
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 800, color: '#F06543', letterSpacing: '0.15em', marginBottom: 8 }}>
              ROUTE VISUALIZATION
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 36, color: '#0B2545', margin: '0 0 16px' }}>
              YOUR FERRY ROUTE
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {ferry.route.map((step, idx) => (
                <div key={idx} style={{ display: 'flex', gap: 14 }}>
                  <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'rgba(240,101,67,0.1)', border: '1px solid #F06543', color: '#F06543', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 800, flexShrink: 0 }}>
                    {step.step}
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, fontWeight: 800, color: '#334155' }}>{step.title} ({step.time})</div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12.5, color: '#64748b', marginTop: 2 }}>{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ROUTE SUMMARY & VESSEL CARD */}
          <div style={{ borderRadius: 24, overflow: 'hidden', background: '#ffffff', border: '1px solid #e2e8f0', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)', padding: 28 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 40, height: 40, borderRadius: 12, background: 'rgba(240, 101, 67, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#F06543' }}>
                  <Compass size={22} />
                </div>
                <div>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 800, color: '#0B2545' }}>Marine Transit Route</div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: '#64748b' }}>Andaman Inter-Island Express Corridor</div>
                </div>
              </div>
              <span style={{ background: '#ecfdf5', color: '#059669', fontSize: 11, fontWeight: 700, padding: '4px 10px', borderRadius: 20, border: '1px solid #a7f3d0' }}>
                LIVE RUNTIME
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', background: '#f8fafc', borderRadius: 16, border: '1px solid #f1f5f9', marginBottom: 20 }}>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Origin</div>
                <div style={{ fontSize: 16, fontWeight: 800, color: '#0B2545' }}>{ferry.from}</div>
                <div style={{ fontSize: 12, color: '#64748b' }}>Departs: {ferry.departure}</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                <Navigation size={18} color="#F06543" style={{ transform: 'rotate(90deg)' }} />
                <span style={{ fontSize: 11, fontWeight: 700, color: '#F06543' }}>{ferry.duration}</span>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Destination</div>
                <div style={{ fontSize: 16, fontWeight: 800, color: '#0B2545' }}>{ferry.to}</div>
                <div style={{ fontSize: 12, color: '#64748b' }}>Arrives: {ferry.arrival}</div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              <div style={{ padding: '12px 16px', background: '#fafafa', borderRadius: 12, border: '1px solid #f1f5f9' }}>
                <div style={{ fontSize: 11, color: '#64748b', fontWeight: 600 }}>Vessel Type</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#0B2545', marginTop: 2 }}>{ferry.vesselClass}</div>
              </div>
              <div style={{ padding: '12px 16px', background: '#fafafa', borderRadius: 12, border: '1px solid #f1f5f9' }}>
                <div style={{ fontSize: 11, color: '#64748b', fontWeight: 600 }}>Operator</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#0B2545', marginTop: 2 }}>{ferry.operator}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. BOARDING & BAGGAGE INFORMATION ── */}
      <section className="section-container" style={{ paddingTop: 0, paddingBottom: 40 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: 28 }}>
          {/* BOARDING INFORMATION CARD */}
          <div style={{ background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: 24, padding: '32px 28px', boxShadow: '0 10px 30px -5px rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 14, background: 'rgba(240, 101, 67, 0.1)', color: '#F06543', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Ship size={22} />
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 900, color: '#F06543', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                      Terminal & Jetty Guide
                    </div>
                    <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 26, fontWeight: 700, color: '#0B2545', margin: 0 }}>
                      BOARDING INFORMATION
                    </h3>
                  </div>
                </div>
                <span style={{ background: '#f1f5f9', color: '#475569', fontSize: 11, fontWeight: 800, padding: '4px 10px', borderRadius: 20, fontFamily: "'Space Grotesk', sans-serif" }}>
                  PORT AUTHORITY
                </span>
              </div>

              {/* POINTS */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 24 }}>
                {/* Boarding Point */}
                <div style={{ display: 'flex', gap: 14, padding: '16px', background: '#f8fafc', borderRadius: 16, border: '1px solid #edf2f7' }}>
                  <div style={{ width: 38, height: 38, borderRadius: 12, background: '#fee2e2', color: '#dc2626', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Boarding Point
                    </div>
                    <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 15, fontWeight: 800, color: '#0B2545', marginTop: 2 }}>
                      {ferry.boardingPoint || 'Haddo Wharf Passenger Terminal, Port Blair'}
                    </div>
                    <div style={{ fontSize: 12, color: '#64748b', marginTop: 4, lineHeight: 1.5 }}>
                      • Terminal security check-in: 45–60 mins before cast-off<br />
                      • Boarding gates close strictly 20 mins prior to departure
                    </div>
                  </div>
                </div>

                {/* Disembarkation Point */}
                <div style={{ display: 'flex', gap: 14, padding: '16px', background: '#f8fafc', borderRadius: 16, border: '1px solid #edf2f7' }}>
                  <div style={{ width: 38, height: 38, borderRadius: 12, background: '#dcfce7', color: '#15803d', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Anchor size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Disembarkation Point
                    </div>
                    <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 15, fontWeight: 800, color: '#0B2545', marginTop: 2 }}>
                      {ferry.destinationPoint || 'Havelock Island Marine Jetty No. 2'}
                    </div>
                    <div style={{ fontSize: 12, color: '#64748b', marginTop: 4, lineHeight: 1.5 }}>
                      • Dedicated luggage collection bay at arrival jetty<br />
                      • Prepaid taxi desks and scooter rental assistance nearby
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Note badge */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 16px', background: '#fffbeb', borderRadius: 12, border: '1px solid #fef3c7', color: '#92400e', fontSize: 12 }}>
              <ShieldCheck size={18} color="#d97706" style={{ flexShrink: 0 }} />
              <span><strong>Mandatory:</strong> Carry valid Govt photo ID (Aadhaar / Passport / Voter ID) for port authority verification.</span>
            </div>
          </div>

          {/* BAGGAGE POLICY CARD */}
          <div style={{ background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: 24, padding: '32px 28px', boxShadow: '0 10px 30px -5px rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 14, background: 'rgba(5, 150, 105, 0.1)', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Luggage size={22} />
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 900, color: '#059669', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                      Free Included Allowance
                    </div>
                    <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 26, fontWeight: 700, color: '#0B2545', margin: 0 }}>
                      BAGGAGE POLICY
                    </h3>
                  </div>
                </div>
                <span style={{ background: '#ecfdf5', color: '#059669', fontSize: 11, fontWeight: 800, padding: '4px 10px', borderRadius: 20, fontFamily: "'Space Grotesk', sans-serif", border: '1px solid #a7f3d0' }}>
                  FREE INCLUDED
                </span>
              </div>

              {/* ALLOWANCE SPLIT CARDS */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 20 }}>
                {/* Check-in Baggage */}
                <div style={{ padding: '18px 16px', background: '#f8fafc', borderRadius: 16, border: '1.5px solid #e2e8f0', textAlign: 'center' }}>
                  <div style={{ width: 38, height: 38, borderRadius: 12, background: '#e0f2fe', color: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px' }}>
                    <Luggage size={18} />
                  </div>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 24, fontWeight: 900, color: '#0B2545' }}>
                    25 KG
                  </div>
                  <div style={{ fontSize: 12, fontWeight: 800, color: '#F06543', textTransform: 'uppercase', marginTop: 2 }}>
                    Check-in Baggage
                  </div>
                  <div style={{ fontSize: 11.5, color: '#64748b', marginTop: 4 }}>
                    Stored safely in lower vessel luggage hold
                  </div>
                </div>

                {/* Hand / Cabin Luggage */}
                <div style={{ padding: '18px 16px', background: '#f8fafc', borderRadius: 16, border: '1.5px solid #e2e8f0', textAlign: 'center' }}>
                  <div style={{ width: 38, height: 38, borderRadius: 12, background: '#f3e8ff', color: '#9333ea', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px' }}>
                    <Briefcase size={18} />
                  </div>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 24, fontWeight: 900, color: '#0B2545' }}>
                    7 KG
                  </div>
                  <div style={{ fontSize: 12, fontWeight: 800, color: '#059669', textTransform: 'uppercase', marginTop: 2 }}>
                    Cabin / Hand Bag
                  </div>
                  <div style={{ fontSize: 11.5, color: '#64748b', marginTop: 4 }}>
                    Allowed inside AC passenger seating lounge
                  </div>
                </div>
              </div>

              {/* Main Policy Text */}
              <div style={{ padding: '14px 18px', background: '#f0fdf4', borderRadius: 14, border: '1px solid #bbf7d0', marginBottom: 20 }}>
                <div style={{ fontSize: 13, color: '#166534', lineHeight: 1.6, fontWeight: 600 }}>
                  ✓ {ferry.baggageAllowance || '25kg check-in baggage + 7kg hand cabin luggage per passenger included free.'}
                </div>
              </div>
            </div>

            {/* Note badge */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 16px', background: '#f8fafc', borderRadius: 12, border: '1px solid #e2e8f0', color: '#64748b', fontSize: 12 }}>
              <CheckCircle2 size={16} color="#059669" style={{ flexShrink: 0 }} />
              <span>Excess luggage charges: ₹50 per extra kg if weight exceeds free allowance.</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. MULTI-STEP PASSENGER BOOKING SYSTEM (LOGIN GUARDED) ── */}
      <section id="ferry-booking-section" className="section-container">
        <div className="glass-box" style={{ maxWidth: 840, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 28 }}>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 900, color: '#F06543', letterSpacing: '0.15em', marginBottom: 6 }}>
              OFFICIAL FERRY RESERVATION
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 36, color: '#0B2545', margin: 0 }}>
              Passenger Ticket Booking
            </h2>
          </div>

          {!isLoggedIn ? (
            <div style={{ background: 'rgba(22, 217, 255, 0.1)', border: '1px solid rgba(22, 217, 255, 0.3)', padding: 28, borderRadius: 20, textAlign: 'center' }}>
              <Shield size={36} color="#F06543" style={{ margin: '0 auto 12px' }} />
              <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 20, color: '#0B2545', margin: '0 0 8px' }}>
                LOGIN REQUIRED TO BOOK TICKETS
              </h4>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#64748b', marginBottom: 20, maxWidth: 540, margin: '0 auto 20px' }}>
                In accordance with Andaman Port Authority regulations, valid passenger authentication is mandatory before issuing inter-island ferry passes.
              </p>
              <button onClick={handleStartBooking} style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 900, color: '#ffffff', background: 'linear-gradient(135deg, #FF6B4A, #F06543)', border: 'none', padding: '14px 32px', borderRadius: 16, cursor: 'pointer', boxShadow: '0 4px 20px rgba(22, 217, 255, 0.4)' }}>
                SIGN IN / REGISTER TO CONTINUE BOOKING
              </button>
            </div>
          ) : (
            <div>
              {/* PROGRESS INDICATOR */}
              <div style={{ display: 'flex', borderBottom: '1px solid #e2e8f0', paddingBottom: 16, marginBottom: 24 }}>
                <div style={{ flex: 1, textAlign: 'center', color: currentStep >= 1 ? '#F06543' : '#9cb3bd', fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 800 }}>
                  01. SELECTION
                </div>
                <div style={{ flex: 1, textAlign: 'center', color: currentStep >= 2 ? '#F06543' : '#9cb3bd', fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 800 }}>
                  02. PASSENGER INFO
                </div>
                <div style={{ flex: 1, textAlign: 'center', color: currentStep >= 3 ? '#F06543' : '#9cb3bd', fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 800 }}>
                  03. CONFIRMATION
                </div>
              </div>

              {isBookedConfirmed ? (
                <div style={{ background: 'rgba(33, 230, 193, 0.15)', border: '1px solid rgba(33, 230, 193, 0.4)', padding: 28, borderRadius: 20, textAlign: 'center', color: '#F06543' }}>
                  <CheckCircle2 size={42} style={{ margin: '0 auto 14px' }} />
                  <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 24, margin: '0 0 8px', color: '#0B2545' }}>
                    FERRY TICKET RESERVED!
                  </h3>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13.5, color: '#e2f0f8', marginBottom: 16 }}>
                    Ticket for <strong>{passenger.fullName}</strong> on {ferry.ferryName} ({ferry.from} → {ferry.to}) has been placed.
                  </p>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, color: '#F06543' }}>
                    TOTAL FARE: ₹{totalPrice.toLocaleString()} • E-PASS ISSUED TO {passenger.email || currentUser.email}
                  </div>
                </div>
              ) : (
                <form onSubmit={handleConfirmFinalBooking} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                    <div>
                      <label style={{ display: 'block', fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 800, color: '#64748b', marginBottom: 4 }}>PASSENGER NAME</label>
                      <input
                        type="text"
                        value={passenger.fullName}
                        onChange={(e) => setPassenger({ ...passenger, fullName: e.target.value })}
                        required
                        style={{ width: '100%', padding: '11px 14px', borderRadius: 12, background: '#ffffff', border: '1px solid #e2e8f0', color: '#334155', outline: 'none', boxSizing: 'border-box' }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 800, color: '#64748b', marginBottom: 4 }}>GOVERNMENT ID TYPE</label>
                      <select value={passenger.idType} onChange={(e) => setPassenger({ ...passenger, idType: e.target.value })} style={{ width: '100%', padding: '11px 14px', borderRadius: 12, background: '#f1f5f9', border: '1px solid #e2e8f0', color: '#334155', outline: 'none' }}>
                        <option value="Aadhaar">Aadhaar Card</option>
                        <option value="Passport">Passport</option>
                        <option value="Driving License">Driving License</option>
                      </select>
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                    <div>
                      <label style={{ display: 'block', fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 800, color: '#64748b', marginBottom: 4 }}>PHONE NUMBER</label>
                      <input
                        type="tel"
                        value={passenger.phone}
                        onChange={(e) => setPassenger({ ...passenger, phone: e.target.value })}
                        required
                        style={{ width: '100%', padding: '11px 14px', borderRadius: 12, background: '#ffffff', border: '1px solid #e2e8f0', color: '#334155', outline: 'none', boxSizing: 'border-box' }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 800, color: '#64748b', marginBottom: 4 }}>EMAIL FOR PASS</label>
                      <input
                        type="email"
                        value={passenger.email}
                        onChange={(e) => setPassenger({ ...passenger, email: e.target.value })}
                        required
                        style={{ width: '100%', padding: '11px 14px', borderRadius: 12, background: '#ffffff', border: '1px solid #e2e8f0', color: '#334155', outline: 'none', boxSizing: 'border-box' }}
                      />
                    </div>
                  </div>

                  <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', padding: 16, borderRadius: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, color: '#F06543', fontWeight: 800 }}>TOTAL TICKET FARE</div>
                      <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 22, fontWeight: 900, color: '#334155' }}>₹{totalPrice.toLocaleString()}</div>
                    </div>
                    <button type="submit" style={{ background: 'linear-gradient(135deg, #FF6B4A, #F06543)', border: 'none', color: '#ffffff', fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 900, padding: '12px 28px', borderRadius: 14, cursor: 'pointer' }}>
                      CONFIRM FERRY TICKET →
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>
      </section>

      {/* ── STICKY BAR ── */}
      <div className={`sticky-ferry-bar${stickyVisible ? ' visible' : ''}`}>
        <div>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, fontWeight: 800, color: '#334155' }}>
            {ferry.ferryName || `${ferry.from} → ${ferry.to}`}
          </div>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, color: '#F06543', fontWeight: 700 }}>
            {ferry.from} ➔ {ferry.to} • From ₹{ferry.price}
          </div>
        </div>

        <button 
          onClick={() => handleOpenSlotModal()} 
          style={{ 
            fontFamily: "'Space Grotesk', sans-serif", 
            fontSize: 12, 
            fontWeight: 900, 
            color: '#ffffff', 
            background: 'linear-gradient(135deg, #FF6B4A, #F06543)', 
            border: 'none', 
            padding: '11px 24px', 
            borderRadius: 14, 
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            boxShadow: '0 4px 14px rgba(240, 101, 67, 0.35)'
          }}
        >
          <Zap size={14} fill="#ffffff" />
          <span>BOOK SLOT</span>
        </button>
      </div>

      {/* ── UNIFIED DYNAMIC SLOT BOOKING MODAL ── */}
      {slotModalOpen && (
        <UnifiedSlotBookingModal
          vessel={{
            ...ferry,
            name: ferry.ferryName || ferry.name,
            operator: ferry.operator,
            departure: selectedSlotTime || ferry.departure,
            price: ferry.price
          }}
          searchParams={{
            departureDate: travelDate,
            from: ferry.from,
            to: ferry.to,
            adults: adults,
            children: childrenCount,
            infants: infantsCount,
            totalPassengers: adults + childrenCount || 2,
          }}
          initialSlotTime={selectedSlotTime || ferry.departure || '06:30 AM'}
          initialClass={selectedClassTier || 'Luxury'}
          onClose={() => setSlotModalOpen(false)}
          onBookingSuccess={(bookingResult) => {
            setIsBookedConfirmed(true);
            setSlotModalOpen(false);
          }}
        />
      )}

      <FooterBottom />
    </div>
  );
}
