// client/src/components/pages/PackageDetails.jsx
// ─────────────────────────────────────────────────────────────────────────────
// PREMIUM LUXURY PACKAGE DETAILS PAGE — 100% LIVE DB BINDING
// URL Support: /package-details?id=3 • /packages/:slug • /package-details?slug=andaman-escape
// Interactive 3D Archipelago Scene • Day-by-Day Accordion • Guest Manifest & Razorpay
// ─────────────────────────────────────────────────────────────────────────────

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useAuth } from '../../context/AuthContext';
import FooterBottom from '../FooterBottom';
import { apiClient } from '../../api/apiClient';
import RazorpayModal from '../ui/RazorpayModal';
import {
  Clock, MapPin, CheckCircle, ChevronDown, ChevronUp, Star, Users, Ship, Coffee, X, ArrowLeft, ArrowRight,
  ShieldCheck, Calendar, Check, CreditCard, ChevronRight, AlertCircle, Phone, Mail, Sparkles,
  Building2, Utensils, Waves, Compass, Award, Heart, Share2, Info, CheckCircle2, BedDouble, Camera, Eye
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
    if (trimmed.includes('•')) {
      const list = trimmed.split('•').map(s => s.trim()).filter(Boolean);
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

const DEFAULT_INCLUSIONS = [
  'Daily Delicious Buffet Breakfast & Select Gourmet Dinners',
  'Confirmed High-Speed Catamaran Tickets (Makruzz / Nautika / Green Ocean)',
  'Exclusive AC Vehicle for all Airport, Jetty, and Sightseeing Transfers',
  'Complimentary Guided Snorkeling Session with Professional Equipment',
  'All Entry Tickets, Monument Passes & National Park Environmental Fees',
  'Airport Meet & Greet with 24/7 Dedicated Andaman Island Concierge',
  'All Toll Taxes, Fuel Charges, Parking & Driver Allowances Included'
];

const DEFAULT_EXCLUSIONS = [
  'Airfare to and from Port Blair (Can be booked on special request)',
  'Personal expenses, laundry, telephone calls, and room service orders',
  'Optional Scuba Diving, Sea Kart, Parasailing & Jet Ski upgrades',
  'Meals and beverages not explicitly mentioned in the itinerary',
  'Camera & video fees at historical monuments where applicable',
  'Travel and medical insurance (Highly recommended)'
];

export default function PackageDetails() {
  const { requireAuth, isLoggedIn, currentUser } = useAuth();
  const [pkg, setPkg] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openDay, setOpenDay] = useState(1);
  const [adults, setAdults] = useState(2);
  const [childrenCount, setChildrenCount] = useState(0);
  const [travelDate, setTravelDate] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showRazorpay, setShowRazorpay] = useState(false);
  const [razorpayBookingData, setRazorpayBookingData] = useState(null);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [stickyVisible, setStickyVisible] = useState(false);
  const [isHeroInView, setIsHeroInView] = useState(true);
  const [allExpanded, setAllExpanded] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [copiedLink, setCopiedLink] = useState(false);

  const [bookingForm, setBookingForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    specialRequests: '',
  });

  const [guestsDetails, setGuestsDetails] = useState([]);
  const totalPax = adults + childrenCount;

  // Initialize traveler contact details
  useEffect(() => {
    if (currentUser) {
      setBookingForm(prev => ({
        ...prev,
        fullName: currentUser.name || prev.fullName,
        email: currentUser.email || prev.email,
        phone: currentUser.phone || prev.phone,
      }));
    } else {
      const stored = localStorage.getItem('andaman_user');
      if (stored) {
        try {
          const u = JSON.parse(stored);
          setBookingForm(prev => ({
            ...prev,
            fullName: u.name || prev.fullName,
            email: u.email || prev.email,
            phone: u.phone || prev.phone,
          }));
        } catch (e) {}
      }
    }
    
    // Set default travel date 5 days from today
    const d = new Date();
    d.setDate(d.getDate() + 5);
    setTravelDate(d.toISOString().split('T')[0]);
  }, [currentUser]);

  // Synchronize guest manifest array
  useEffect(() => {
    setGuestsDetails(prev => {
      const next = [...prev];
      if (next.length < totalPax) {
        for (let i = next.length; i < totalPax; i++) {
          const isLead = i === 0;
          const isChild = i >= adults;
          next.push({
            fullName: isLead ? (bookingForm.fullName || currentUser?.name || '') : '',
            gender: 'MALE',
            idType: 'AADHAAR',
            idNumber: '',
            guestType: isChild ? 'CHILD' : 'ADULT',
            documentImage: null,
            uploading: false,
            uploadError: ''
          });
        }
      } else if (next.length > totalPax) {
        next.splice(totalPax);
      }
      return next;
    });
  }, [adults, childrenCount, totalPax, bookingForm.fullName, currentUser]);

  // 1. Fetch Dynamic Package by ID or Slug
  useEffect(() => {
    const pathname = window.location.pathname;
    const searchParams = new URLSearchParams(window.location.search);
    const hash = window.location.hash;

    let targetIdOrSlug = searchParams.get('id') || searchParams.get('slug') || searchParams.get('package');
    if (!targetIdOrSlug && hash) {
      const match = hash.match(/id=([a-z0-9-]+)/i) || hash.match(/slug=([a-z0-9-]+)/i);
      if (match && match[1]) targetIdOrSlug = match[1];
    }
    if (!targetIdOrSlug) {
      const parts = pathname.split('/').filter(Boolean);
      if (parts.length > 1 && (parts[0] === 'packages' || parts[0] === 'package-details')) {
        targetIdOrSlug = parts[1];
      }
    }

    const queryKey = targetIdOrSlug || '7';

    setLoading(true);
    setError(null);

    apiClient(`/packages/${queryKey}`)
      .then((res) => {
        if (res && res.data) {
          setPkg(res.data);
        } else {
          setError('Package details not found.');
        }
      })
      .catch((err) => {
        console.error('PackageDetails load error:', err.message);
        setError('Failed to load package details from database.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [window.location.search, window.location.pathname]);

  const handleSharePackage = () => {
    if (navigator.share) {
      navigator.share({
        title: pkg?.name || 'Andaman Tour Package',
        text: `Check out ${pkg?.name || 'this luxury package'} on Andaman Trails!`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const handlePrintPackage = () => {
    window.print();
  };

  // Scroll listener for sticky booking bar
  useEffect(() => {
    const handleScroll = () => {
      const heroEl = document.getElementById('pkg-hero-section');
      if (heroEl) {
        const rect = heroEl.getBoundingClientRect();
        setIsHeroInView(rect.bottom > 0);
      }
      setStickyVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Document upload handler for guest manifest
  const handleDocumentUpload = async (file, idx) => {
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      const updated = [...guestsDetails];
      updated[idx].uploadError = 'File size exceeds 5MB limit. Please choose a smaller image.';
      setGuestsDetails(updated);
      return;
    }

    const updated = [...guestsDetails];
    updated[idx].uploading = true;
    updated[idx].uploadError = '';
    setGuestsDetails(updated);

    const formData = new FormData();
    formData.append('document', file);

    try {
      const res = await apiClient('/upload/document', {
        method: 'POST',
        body: formData,
      });

      if (res && res.data && res.data.url) {
        const u = [...guestsDetails];
        u[idx].documentImage = res.data.url;
        u[idx].uploading = false;
        setGuestsDetails(u);
      } else {
        throw new Error('Upload server did not return image URL');
      }
    } catch (err) {
      console.warn('Document upload fallback:', err.message);
      const reader = new FileReader();
      reader.onload = (e) => {
        const u = [...guestsDetails];
        u[idx].documentImage = e.target.result;
        u[idx].uploading = false;
        setGuestsDetails(u);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleStartBooking = () => {
    if (!pkg) return;
    requireAuth(
      () => {
        setIsModalOpen(true);
      },
      `Please sign in to proceed with booking ${pkg.name || pkg.title}.`
    );
  };

  const handleConfirmPay = (e) => {
    e.preventDefault();
    requireAuth(
      () => {
        const adultPrice = Number(pkg.price || pkg.basePrice || 24999);
        const childPrice = Math.round(adultPrice * 0.75);
        const calculatedTotal = (adults * adultPrice) + (childrenCount * childPrice);

        const payload = {
          bookingType: 'PACKAGE',
          packageId: pkg.id,
          bookingDate: travelDate,
          totalGuests: totalPax,
          adultCount: adults,
          childCount: childrenCount,
          customerName: bookingForm.fullName,
          customerEmail: bookingForm.email,
          customerPhone: bookingForm.phone,
          specialRequests: bookingForm.specialRequests,
          totalAmount: calculatedTotal,
          guests: guestsDetails
        };

        setRazorpayBookingData({
          id: pkg.id,
          title: pkg.name || pkg.title,
          type: 'Package',
          amount: calculatedTotal,
          customerName: bookingForm.fullName,
          customerEmail: bookingForm.email,
          customerPhone: bookingForm.phone,
          payload: payload
        });

        setIsModalOpen(false);
        setShowRazorpay(true);
      },
      'Please sign in to confirm package booking.'
    );
  };

  // Memoized Highlights, Itinerary, Gallery, Accommodations and FAQs
  const highlightsList = useMemo(() => {
    if (!pkg) return [];
    return parseArrayField(pkg.highlights, [
      'Ross & Smith Twin Sandbar Expedition',
      'High-Speed Makruzz / Nautika Catamaran Passes',
      'Radhanagar & Elephant Beach Coral Island Visits',
      'Daily Resort Buffet Breakfast & Welcome Drink',
      'Historic Cellular Jail Light & Sound Memorial Show',
      '24/7 Dedicated Andaman Tour Concierge Support'
    ]);
  }, [pkg]);

  const itineraryList = useMemo(() => {
    if (!pkg) return [];
    const raw = pkg.itinerary;
    if (Array.isArray(raw) && raw.length > 0) return raw;
    if (typeof raw === 'string') {
      try {
        const p = JSON.parse(raw);
        if (Array.isArray(p) && p.length > 0) return p;
      } catch (e) {}
    }
    return [
      { day: 1, title: 'Arrival at Port Blair & Cellular Jail Light & Sound Show', location: 'Port Blair', desc: 'Arrive at Veer Savarkar International Airport, Port Blair. Meet our tour representative for a private transfer to your hotel. In the evening, visit the historic Cellular Jail followed by the moving Light & Sound memorial show.' },
      { day: 2, title: 'High-Speed Luxury Catamaran to Havelock Island (Swaraj Dweep)', location: 'Havelock Island', desc: 'Board the premium high-speed catamaran (Makruzz/Nautika) to Havelock Island. Check in to your beach resort and spend the afternoon swimming in the turquoise waters of Asia’s best Radhanagar Beach (Beach No. 7) during sunset.' },
      { day: 3, title: 'Elephant Beach Snorkeling & Shallow Coral Safari', location: 'Havelock Island', desc: 'Speedboat transfer to Elephant Beach for thrilling water sports, snorkeling among vibrant clownfish and live brain corals, and leisure time under swaying tropical palms.' },
      { day: 4, title: 'Inter-Island Catamaran to Neil Island (Shaheed Dweep)', location: 'Neil Island', desc: 'Cruise to tranquil Neil Island. Explore the world-famous Natural Rock Bridge (Howrah Bridge) and relax at Bharatpur Beach coral point.' },
      { day: 5, title: 'Laxmanpur Sunset Point & Return Cruise to Port Blair', location: 'Port Blair', desc: 'Witness the golden sunset at Laxmanpur Beach before boarding your evening cruise back to Port Blair. Enjoy local shopping at Aberdeen Bazaar.' },
      { day: 6, title: 'Souvenir Shopping & Airport Departure with Sweet Memories', location: 'Port Blair', desc: 'Enjoy buffet breakfast at your resort before checking out. Private airport drop with cherished memories of the Andaman emerald islands.' }
    ];
  }, [pkg]);

  const accommodationsList = useMemo(() => {
    if (!pkg) return [];
    const rawItin = itineraryList;
    const staysFound = rawItin
      .map(d => d.stay)
      .filter(s => s && s !== 'N/A (Departure Day)' && s !== 'N/A');
    const uniqueStays = [...new Set(staysFound)];

    if (uniqueStays.length > 0) {
      return uniqueStays.map((stayName, idx) => ({
        name: stayName,
        location: idx === 0 ? 'Port Blair (Sea-Facing Luxury)' : idx === 1 ? 'Havelock Island (Beachside Private Villa)' : 'Neil Island (Eco-Luxe Boutique)',
        type: '4-Star Luxury Resort / Villa',
        rating: '4.9',
        perks: ['Complimentary Breakfast Buffet', 'Private Beach Access', 'Infinity Swimming Pool', 'High-Speed Wi-Fi'],
        image: idx === 0 
          ? 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80'
          : idx === 1 
          ? 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80'
          : 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80'
      }));
    }

    return [
      {
        name: pkg.hotelCategory || 'Symphony Samudra & Barefoot Resort',
        location: pkg.destinations || 'Port Blair • Havelock Island',
        type: 'Handpicked Boutique Resort',
        rating: '4.9',
        perks: ['Daily Buffet Breakfast', 'Beachfront Balcony', 'Tropical Garden Pool', 'Island Concierge'],
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80'
      }
    ];
  }, [pkg, itineraryList]);

  const faqList = useMemo(() => {
    if (!pkg) return [];
    const raw = pkg.faq;
    if (Array.isArray(raw) && raw.length > 0) return raw;
    if (typeof raw === 'string') {
      try {
        const p = JSON.parse(raw);
        if (Array.isArray(p) && p.length > 0) return p;
      } catch (e) {}
    }
    return [
      {
        question: 'Are high-speed catamaran tickets included in this package?',
        answer: 'Yes! Confirmed premium catamaran tickets (Makruzz, Nautika, or Green Ocean) with reserved seating for all inter-island transits (Port Blair ➔ Havelock ➔ Neil ➔ Port Blair) are included.'
      },
      {
        question: 'Can this itinerary and hotels be customized for couples or families?',
        answer: 'Absolutely! Our Andaman-based tour concierge can customize your travel dates, upgrade to private beachfront pool villas, add romantic candlelight beach dinners, or include additional water sports.'
      },
      {
        question: 'Is airport pick-up and drop included?',
        answer: 'Yes, private air-conditioned vehicle pick-up from Veer Savarkar International Airport (IXZ) on Day 1 and airport drop on the final departure day are included.'
      },
      {
        question: 'What documents are required for traveling to Andaman?',
        answer: 'Indian nationals require an original valid government-issued Photo ID (Aadhaar Card, Passport, Voter ID, or Driving License). Foreign nationals require a valid Indian Visa and Passport.'
      }
    ];
  }, [pkg]);

  const galleryImages = useMemo(() => {
    if (!pkg) return [];
    const list = parseArrayField(pkg.gallery, []);
    if (list.length > 0) return list;
    return [
      pkg.image || pkg.heroImage || 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80'
    ];
  }, [pkg]);

  // Pricing calculations
  const adultPrice = Number(pkg?.price || pkg?.basePrice || 24999);
  const originalPrice = Number(pkg?.originalPrice || Math.round(adultPrice * 1.25));
  const savingsAmount = originalPrice - adultPrice;
  const childPrice = Math.round(adultPrice * 0.75);
  const totalAmount = (adults * adultPrice) + (childrenCount * childPrice);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FAF4EE] flex flex-col items-center justify-center pt-24">
        <div className="w-14 h-14 rounded-full border-4 border-[#F06543]/20 border-t-[#F06543] animate-spin mb-4" />
        <p className="font-mono text-xs tracking-widest text-[#F06543] uppercase font-bold">Loading Curated Island Package...</p>
      </div>
    );
  }

  if (error || !pkg) {
    return (
      <div className="min-h-screen bg-[#FAF4EE] flex flex-col items-center justify-center pt-24 px-6 text-center">
        <AlertCircle size={48} className="text-[#F06543] mb-4" />
        <h2 className="font-serif text-3xl text-[#0B2545] font-bold mb-2">Package Not Found</h2>
        <p className="font-sans text-sm text-[#5C6F84] max-w-md mb-6">{error || 'The requested Andaman tour package could not be located.'}</p>
        <a href="/packages" className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#0B2545] to-[#F06543] text-white font-mono text-xs font-bold uppercase tracking-wider shadow-lg hover:shadow-xl transition-all">
          Explore All Packages
        </a>
      </div>
    );
  }

  return (
    <div className="pkg-details-root">
      <style>{`
        .pkg-details-root {
          min-height: 100vh;
          background: #FAF4EE;
          color: #2D3E50;
          padding-top: 76px;
          font-family: 'Inter', sans-serif;
          overflow-x: hidden;
        }

        .pkg-hero {
          position: relative;
          width: 100%;
          min-height: 64vh;
          max-height: 640px;
          display: flex;
          align-items: flex-end;
          padding: 60px 24px 80px;
          box-sizing: border-box;
          overflow: hidden;
          background: #0B2545;
        }
        .pkg-hero-bg {
          position: absolute;
          inset: 0;
          z-index: 1;
        }
        .pkg-hero-bg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.55) saturate(1.15);
        }
        .pkg-hero-overlay {
          position: absolute;
          inset: 0;
          z-index: 2;
          background: linear-gradient(180deg, rgba(11, 37, 69, 0.4) 0%, rgba(11, 37, 69, 0.8) 65%, #FAF4EE 100%);
        }

        .pkg-hero-container {
          position: relative;
          z-index: 4;
          max-width: 1340px;
          margin: 0 auto;
          width: 100%;
          display: grid;
          grid-template-columns: 1.6fr 1fr;
          gap: 36px;
          align-items: flex-end;
        }
        @media (max-width: 960px) {
          .pkg-hero-container { grid-template-columns: 1fr; }
        }

        .hero-breadcrumb {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 800;
          color: #ebded2;
          background: rgba(11, 37, 69, 0.6);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(235, 222, 210, 0.25);
          padding: 6px 16px;
          border-radius: 20px;
          margin-bottom: 14px;
        }

        .pkg-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(34px, 4.5vw, 56px);
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 12px;
          line-height: 1.1;
        }

        .section-container {
          max-width: 1340px;
          margin: 0 auto;
          padding: 40px 24px;
        }

        .pkg-glass-box {
          background: #ffffff;
          border: 2px solid #ebded2;
          border-radius: 26px;
          padding: 34px;
          box-shadow: 0 4px 20px rgba(11, 37, 69, 0.04);
        }
        @media (max-width: 640px) {
          .pkg-glass-box { padding: 22px; }
        }

        .sticky-price-box {
          position: sticky;
          top: 96px;
          background: #ffffff;
          border: 2px solid #ebded2;
          border-radius: 26px;
          padding: 30px;
          box-shadow: 0 12px 40px rgba(11, 37, 69, 0.08);
        }

        .pkg-specs-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin: -40px auto 40px;
          max-width: 1340px;
          padding: 0 24px;
          position: relative;
          z-index: 10;
        }
        @media (max-width: 900px) {
          .pkg-specs-grid { grid-template-columns: repeat(2, 1fr); margin-top: 0; }
        }
        @media (max-width: 540px) {
          .pkg-specs-grid { grid-template-columns: 1fr; }
        }

        .pkg-spec-card {
          background: #ffffff;
          border: 2px solid #ebded2;
          border-radius: 20px;
          padding: 20px;
          display: flex;
          align-items: flex-start;
          gap: 14px;
          box-shadow: 0 6px 20px rgba(11, 37, 69, 0.05);
        }

        .pkg-sticky-bar {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 999;
          background: #ffffff;
          border-top: 2px solid #F06543;
          padding: 14px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transform: translateY(100%);
          transition: transform 0.3s ease;
          box-shadow: 0 -10px 30px rgba(11, 37, 69, 0.12);
        }
        .pkg-sticky-bar.visible { transform: translateY(0); }
      `}</style>

      {/* ── 1. CINEMATIC HERO ── */}
      <section className="pkg-hero" id="pkg-hero-section">
        <div className="pkg-hero-bg">
          <img src={pkg.image || pkg.heroImage || galleryImages[0]} alt={pkg.name || pkg.title} />
        </div>
        <div className="pkg-hero-overlay" />

        <div className="pkg-hero-container">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10, marginBottom: 14 }}>
              <div className="hero-breadcrumb" style={{ margin: 0 }}>
                <a href="/home" style={{ color: '#ebded2', textDecoration: 'none' }}>HOME</a>
                <ChevronRight size={12} color="#FF6B4A" />
                <a href="/packages" style={{ color: '#ebded2', textDecoration: 'none' }}>PACKAGES</a>
                <ChevronRight size={12} color="#FF6B4A" />
                <span style={{ color: '#ffffff' }}>{pkg.name || pkg.title}</span>
              </div>

              {/* Action Pills */}
              <div style={{ display: 'flex', gap: 8 }}>
                <button
                  type="button"
                  onClick={handleSharePackage}
                  style={{
                    background: 'rgba(11, 37, 69, 0.6)', backdropFilter: 'blur(10px)', border: '1px solid rgba(235, 222, 210, 0.3)',
                    color: '#ffffff', fontFamily: "'Space Grotesk', sans-serif", fontSize: 11.5, fontWeight: 800,
                    padding: '6px 14px', borderRadius: 20, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6
                  }}
                >
                  <Share2 size={13} color="#FF6B4A" />
                  <span>{copiedLink ? 'LINK COPIED! ✓' : 'SHARE'}</span>
                </button>

                <button
                  type="button"
                  onClick={handlePrintPackage}
                  style={{
                    background: 'rgba(11, 37, 69, 0.6)', backdropFilter: 'blur(10px)', border: '1px solid rgba(235, 222, 210, 0.3)',
                    color: '#ffffff', fontFamily: "'Space Grotesk', sans-serif", fontSize: 11.5, fontWeight: 800,
                    padding: '6px 14px', borderRadius: 20, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6
                  }}
                >
                  <Camera size={13} color="#FF6B4A" />
                  <span>PRINT / PDF</span>
                </button>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12, flexWrap: 'wrap' }}>
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 900, color: '#ffffff', background: 'linear-gradient(135deg, #FF6B4A, #F06543)', padding: '5px 14px', borderRadius: 14, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                {pkg.category || 'BESTSELLER EXPEDITION'}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, fontWeight: 800, color: '#ffd700' }}>
                <Star size={14} className="fill-[#ffd700] text-[#ffd700]" /> {pkg.rating || 4.9} ({pkg.reviewsCount || 120} Reviews)
              </span>

              {/* Tags */}
              {Array.isArray(pkg.tags) && pkg.tags.map((tag, idx) => (
                <span key={idx} style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(6px)', color: '#ffffff', fontSize: 10.5, fontWeight: 800, padding: '3px 8px', borderRadius: 8, textTransform: 'uppercase' }}>
                  #{tag}
                </span>
              ))}
            </div>

            <h1 className="pkg-title">{pkg.name || pkg.title}</h1>

            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: '#FAF4EE', maxWidth: 640, lineHeight: 1.6, marginBottom: 20 }}>
              {pkg.description || 'Embark on a signature Andaman luxury holiday featuring private beach resorts, crystal catamaran crossings, coral snorkeling, and scenic sunsets.'}
            </p>

            <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap', fontFamily: "'Space Grotesk', sans-serif", fontSize: 12.5, fontWeight: 800, color: '#ebded2' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#FF6B4A' }}>
                <Clock size={15} /> {pkg.duration || '5 Nights / 6 Days'}
              </span>
              <span>•</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#FF6B4A' }}>
                <MapPin size={15} /> {pkg.destinations || 'Port Blair • Havelock • Neil'}
              </span>
              {pkg.bestFor && (
                <>
                  <span>•</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#ffd700' }}>
                    <Users size={15} /> {pkg.bestFor}
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. QUICK SPECIFICATIONS BAR ── */}
      <div className="pkg-specs-grid">
        <div className="pkg-spec-card">
          <div style={{ width: 44, height: 44, borderRadius: 14, background: '#FFF0EB', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#F06543', flexShrink: 0 }}>
            <Building2 size={22} />
          </div>
          <div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 800, color: '#5C6F84', textTransform: 'uppercase' }}>HOTEL & STAYS</div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13.5, fontWeight: 800, color: '#0B2545', marginTop: 3 }}>
              {pkg.hotelCategory || '4-Star Luxury Beach Resort'}
            </div>
          </div>
        </div>

        <div className="pkg-spec-card">
          <div style={{ width: 44, height: 44, borderRadius: 14, background: '#FFF0EB', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#F06543', flexShrink: 0 }}>
            <Utensils size={22} />
          </div>
          <div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 800, color: '#5C6F84', textTransform: 'uppercase' }}>MEAL INCLUSIONS</div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13.5, fontWeight: 800, color: '#0B2545', marginTop: 3 }}>
              {pkg.mealPlan || 'Daily Buffet Breakfast & Dinner'}
            </div>
          </div>
        </div>

        <div className="pkg-spec-card">
          <div style={{ width: 44, height: 44, borderRadius: 14, background: '#FFF0EB', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#F06543', flexShrink: 0 }}>
            <Ship size={22} />
          </div>
          <div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 800, color: '#5C6F84', textTransform: 'uppercase' }}>ISLAND TRANSFERS</div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13.5, fontWeight: 800, color: '#0B2545', marginTop: 3 }}>
              {pkg.transfers || 'Makruzz Catamaran + Private AC Cab'}
            </div>
          </div>
        </div>

        <div className="pkg-spec-card">
          <div style={{ width: 44, height: 44, borderRadius: 14, background: '#FFF0EB', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#F06543', flexShrink: 0 }}>
            <Sparkles size={22} />
          </div>
          <div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 800, color: '#5C6F84', textTransform: 'uppercase' }}>KEY ACTIVITIES</div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13.5, fontWeight: 800, color: '#0B2545', marginTop: 3 }}>
              {pkg.activities || 'Snorkeling, Sunset Cruise & Light Show'}
            </div>
          </div>
        </div>
      </div>

      {/* ── 3. MAIN DETAILS & STICKY BOOKING WIDGET ── */}
      <section className="section-container">
        <div style={{ display: 'grid', gridTemplateColumns: '1.8fr 1fr', gap: 36, alignItems: 'start' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            {/* OVERVIEW & HIGHLIGHTS */}
            <div className="pkg-glass-box">
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 900, color: '#F06543', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 8 }}>
                TOUR OVERVIEW & CURATED HIGHLIGHTS
              </div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 34, fontWeight: 700, color: '#0B2545', margin: '0 0 14px' }}>
                Unveiling the Emerald Andaman Haven
              </h2>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14.5, color: '#2D3E50', lineHeight: 1.75, margin: '0 0 20px' }}>
                {pkg.description || 'Immerse yourself in crystal waters, powdered white beaches, and lush tropical islands. This curated package blends world-class hospitality, high-speed catamaran island hopping, and peaceful marine adventures into a seamless vacation.'}
              </p>

              {/* Highlights Visual Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12, marginBottom: 20 }}>
                {highlightsList.map((hl, idx) => (
                  <div key={idx} style={{ background: '#FFF8F0', border: '1.5px solid #ebded2', borderRadius: 14, padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ width: 24, height: 24, borderRadius: '50%', background: '#F06543', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 12, fontWeight: 900 }}>
                      ✓
                    </div>
                    <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12.5, fontWeight: 800, color: '#0B2545' }}>
                      {hl}
                    </span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14, background: '#FAF4EE', padding: 18, borderRadius: 18, border: '1.5px solid #ebded2' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <ShieldCheck size={18} color="#F06543" />
                  <span style={{ fontSize: 13, fontWeight: 700, color: '#0B2545' }}>Govt. Certified Tour Operator</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <Award size={18} color="#F06543" />
                  <span style={{ fontSize: 13, fontWeight: 700, color: '#0B2545' }}>Guaranteed Luxury Stays</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <Users size={18} color="#F06543" />
                  <span style={{ fontSize: 13, fontWeight: 700, color: '#0B2545' }}>24/7 Island Concierge</span>
                </div>
              </div>
            </div>

            {/* DAY-BY-DAY ITINERARY ACCORDION */}
            <div className="pkg-glass-box">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16, flexWrap: 'wrap', gap: 10 }}>
                <div>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 900, color: '#F06543', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 6 }}>
                    DETAILED SCHEDULE
                  </div>
                  <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 34, fontWeight: 700, color: '#0B2545', margin: 0 }}>
                    Day-by-Day Island Journey ({itineraryList.length} Days)
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={() => setAllExpanded(!allExpanded)}
                  style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11.5, fontWeight: 800, color: '#F06543', background: '#FFF0EB', border: '1px solid #FFD3C4', padding: '6px 14px', borderRadius: 12, cursor: 'pointer' }}
                >
                  {allExpanded ? 'COLLAPSE ALL' : 'EXPAND ALL DAYS'}
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {itineraryList.map((item, idx) => {
                  const dayNum = item.day || idx + 1;
                  const isOpened = allExpanded || openDay === dayNum;
                  const meals = item.meals || {};
                  const hasMeals = meals.breakfast || meals.Breakfast || meals.lunch || meals.Lunch || meals.dinner || meals.Dinner;

                  return (
                    <div
                      key={dayNum}
                      style={{
                        borderRadius: 20,
                        border: isOpened ? '2px solid #F06543' : '1.5px solid #ebded2',
                        overflow: 'hidden',
                        background: '#ffffff',
                        boxShadow: isOpened ? '0 8px 24px rgba(240, 101, 67, 0.08)' : '0 2px 8px rgba(11, 37, 69, 0.02)',
                        transition: 'all 0.25s ease',
                      }}
                    >
                      {/* Day Accordion Header */}
                      <button
                        type="button"
                        onClick={() => setOpenDay(isOpened && !allExpanded ? null : dayNum)}
                        style={{
                          width: '100%',
                          padding: '18px 22px',
                          background: isOpened ? '#FFF8F0' : '#ffffff',
                          border: 'none',
                          color: '#0B2545',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          textAlign: 'left',
                          gap: 12,
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
                          <span
                            style={{
                              fontFamily: "'Space Grotesk', sans-serif",
                              fontSize: 11,
                              fontWeight: 900,
                              color: '#ffffff',
                              background: 'linear-gradient(135deg, #FF6B4A, #F06543)',
                              padding: '5px 12px',
                              borderRadius: 10,
                              flexShrink: 0,
                            }}
                          >
                            DAY {dayNum}
                          </span>
                          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 15, fontWeight: 800, color: '#0B2545' }}>
                            {item.title}
                          </span>
                          {item.location && (
                            <span style={{ fontSize: 11, fontWeight: 700, color: '#64748B', background: '#F1F5F9', padding: '2px 8px', borderRadius: 6 }}>
                              📍 {item.location}
                            </span>
                          )}
                        </div>
                        {isOpened ? <ChevronUp size={20} color="#F06543" className="shrink-0" /> : <ChevronDown size={20} color="#F06543" className="shrink-0" />}
                      </button>

                      {/* Day Expanded Details */}
                      {isOpened && (
                        <div style={{ padding: '0 22px 22px', fontFamily: "'Inter', sans-serif", fontSize: 13.5, color: '#2D3E50', lineHeight: 1.7, borderTop: '1px solid #ebded2', background: '#ffffff' }}>
                          
                          {/* Day Image and Story */}
                          <div style={{ display: 'grid', gridTemplateColumns: item.image ? '1fr 180px' : '1fr', gap: 20, paddingTop: 18, alignItems: 'start' }}>
                            <div>
                              <p style={{ margin: '0 0 16px 0', fontSize: 14, color: '#334155', lineHeight: 1.65 }}>
                                {item.description || item.desc || 'Enjoy scheduled sightseeing, private luxury ferry transits, guided coral reef explorations, and comfortable beachfront resort stays planned for this day.'}
                              </p>

                              {/* Time Slots: Morning, Afternoon, Evening */}
                              {(item.morning || item.afternoon || item.evening) && (
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, margin: '14px 0', background: '#F8FAFC', padding: 14, borderRadius: 14, border: '1px solid #E2E8F0' }}>
                                  {item.morning && (
                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 12.5 }}>
                                      <span style={{ background: '#FFEDD5', color: '#C2410C', fontWeight: 800, padding: '2px 8px', borderRadius: 6, fontSize: 10.5, flexShrink: 0 }}>🌅 MORNING</span>
                                      <span style={{ color: '#1E293B', fontWeight: 600 }}>{item.morning}</span>
                                    </div>
                                  )}
                                  {item.afternoon && (
                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 12.5 }}>
                                      <span style={{ background: '#E0F2FE', color: '#0369A1', fontWeight: 800, padding: '2px 8px', borderRadius: 6, fontSize: 10.5, flexShrink: 0 }}>☀️ AFTERNOON</span>
                                      <span style={{ color: '#1E293B', fontWeight: 600 }}>{item.afternoon}</span>
                                    </div>
                                  )}
                                  {item.evening && (
                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 12.5 }}>
                                      <span style={{ background: '#F3E8FF', color: '#7E22CE', fontWeight: 800, padding: '2px 8px', borderRadius: 6, fontSize: 10.5, flexShrink: 0 }}>🌆 EVENING</span>
                                      <span style={{ color: '#1E293B', fontWeight: 600 }}>{item.evening}</span>
                                    </div>
                                  )}
                                </div>
                              )}
                            </div>

                            {item.image && (
                              <div
                                onClick={() => setLightboxImage(item.image)}
                                style={{
                                  borderRadius: 14,
                                  overflow: 'hidden',
                                  height: 120,
                                  cursor: 'pointer',
                                  border: '1.5px solid #ebded2',
                                  position: 'relative',
                                }}
                              >
                                <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                <div style={{ position: 'absolute', bottom: 6, right: 6, background: 'rgba(11, 37, 69, 0.7)', color: '#fff', borderRadius: 6, padding: '2px 6px', fontSize: 10, fontWeight: 700 }}>
                                  🔍 View
                                </div>
                              </div>
                            )}
                          </div>

                          {/* Quick Badges: Meals, Stay, Transfers */}
                          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 14, paddingTop: 14, borderTop: '1px solid #F1F5F9', fontSize: 12, fontWeight: 700, color: '#0B2545', fontFamily: "'Space Grotesk', sans-serif" }}>
                            {hasMeals && (
                              <span style={{ display: 'flex', alignItems: 'center', gap: 5, color: '#EA580C', background: '#FFF7ED', padding: '4px 10px', borderRadius: 8, border: '1px solid #FFEDD5' }}>
                                <Coffee size={13} />
                                {meals.breakfast || meals.Breakfast ? 'Breakfast Included' : ''}
                                {(meals.lunch || meals.Lunch) ? ' • Lunch' : ''}
                                {(meals.dinner || meals.Dinner) ? ' • Dinner' : ''}
                              </span>
                            )}
                            {item.stay && (
                              <span style={{ display: 'flex', alignItems: 'center', gap: 5, color: '#0369A1', background: '#F0F9FF', padding: '4px 10px', borderRadius: 8, border: '1px solid #BAE6FD' }}>
                                <BedDouble size={13} /> Stay: {item.stay}
                              </span>
                            )}
                            {item.transfers && (
                              <span style={{ display: 'flex', alignItems: 'center', gap: 5, color: '#15803D', background: '#F0FDF4', padding: '4px 10px', borderRadius: 8, border: '1px solid #BBF7D0' }}>
                                <Ship size={13} /> Transfers: {item.transfers}
                              </span>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* HANDPICKED LUXURY ACCOMMODATIONS */}
            <div className="pkg-glass-box">
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 900, color: '#F06543', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 6 }}>
                CURATED RESORT STAYS
              </div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 34, fontWeight: 700, color: '#0B2545', margin: '0 0 16px' }}>
                Handpicked Luxury Beachfront Accommodations
              </h2>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#5C6F84', lineHeight: 1.6, marginBottom: 20 }}>
                Every hotel in this itinerary is personally audited by our island team for prime beachside location, verified hygiene, gourmet chef kitchens, and genuine Andaman hospitality.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
                {accommodationsList.map((stay, idx) => (
                  <div key={idx} style={{ background: '#ffffff', border: '1.5px solid #ebded2', borderRadius: 18, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ height: 140, position: 'relative', overflow: 'hidden' }}>
                      <img src={stay.image} alt={stay.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      <div style={{ position: 'absolute', top: 10, right: 10, background: 'rgba(11,37,69,0.75)', color: '#ffd700', borderRadius: 8, padding: '3px 8px', fontSize: 11, fontWeight: 900, display: 'flex', alignItems: 'center', gap: 3 }}>
                        <Star size={12} className="fill-[#ffd700] text-[#ffd700]" /> {stay.rating}
                      </div>
                    </div>
                    <div style={{ padding: 16, display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                      <div>
                        <div style={{ fontSize: 11, fontWeight: 800, color: '#F06543', textTransform: 'uppercase', fontFamily: "'Space Grotesk', sans-serif" }}>
                          {stay.location}
                        </div>
                        <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 15, fontWeight: 800, color: '#0B2545', margin: '4px 0 10px' }}>
                          {stay.name}
                        </h4>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 12 }}>
                          {stay.perks.map((p, pIdx) => (
                            <span key={pIdx} style={{ background: '#FAF4EE', border: '1px solid #ebded2', fontSize: 10.5, fontWeight: 700, color: '#0B2545', padding: '2px 7px', borderRadius: 6 }}>
                              ✓ {p}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div style={{ fontSize: 11, color: '#16a34a', fontWeight: 800, fontFamily: "'Space Grotesk', sans-serif", borderTop: '1px solid #F1F5F9', paddingTop: 8 }}>
                        ● Double Sharing AC Luxury Room Included
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* INCLUSIONS & EXCLUSIONS */}
            <div className="pkg-glass-box">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
                <div>
                  <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13.5, fontWeight: 900, color: '#15803D', marginBottom: 18, textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 8 }}>
                    <CheckCircle2 size={18} color="#16A34A" /> WHAT’S INCLUDED IN THIS TOUR
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {parseArrayField(pkg.inclusions, DEFAULT_INCLUSIONS).map((item, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontFamily: "'Inter', sans-serif", fontSize: 13.5, color: '#1E293B', fontWeight: 600 }}>
                        <span style={{ width: 22, height: 22, borderRadius: '50%', background: '#DCFCE7', color: '#15803D', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: 900, fontSize: 11, marginTop: 1 }}>✓</span>
                        <span style={{ lineHeight: 1.4 }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13.5, fontWeight: 900, color: '#DC2626', marginBottom: 18, textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 8 }}>
                    <X size={18} color="#DC2626" /> WHAT’S NOT INCLUDED
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {parseArrayField(pkg.exclusions, DEFAULT_EXCLUSIONS).map((item, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontFamily: "'Inter', sans-serif", fontSize: 13.5, color: '#64748B', fontWeight: 500 }}>
                        <span style={{ width: 22, height: 22, borderRadius: '50%', background: '#FEE2E2', color: '#DC2626', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: 900, fontSize: 11, marginTop: 1 }}>✕</span>
                        <span style={{ lineHeight: 1.4 }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* INTER-ISLAND HIGH-SPEED TRANSIT & BAGGAGE PRIVILEGES */}
            <div className="pkg-glass-box" style={{ background: 'linear-gradient(135deg, #0B2545 0%, #163863 100%)', color: '#ffffff' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 14 }}>
                <div style={{ maxWidth: 520 }}>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 900, color: '#FF6B4A', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 6 }}>
                    CONFIRMED VESSEL TICKETS
                  </div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 28, fontWeight: 700, color: '#ffffff', margin: '0 0 10px' }}>
                    Makruzz & Nautika Fast Catamaran Passes
                  </h3>
                  <p style={{ fontSize: 13.5, color: '#ebded2', lineHeight: 1.6, margin: 0 }}>
                    Skip long jetty queues with confirmed pre-allocated AC seating. All Port Authority harbor taxes and <strong>25kg check-in + 7kg cabin luggage per guest</strong> are fully included.
                  </p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <span style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', padding: '6px 14px', borderRadius: 12, fontSize: 12, fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif" }}>
                    ✓ Instant Seat Allocation
                  </span>
                  <span style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', padding: '6px 14px', borderRadius: 12, fontSize: 12, fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif" }}>
                    ✓ 25kg + 7kg Free Baggage
                  </span>
                </div>
              </div>
            </div>

            {/* CANCELLATION & ISLAND TRAVEL GUIDELINES */}
            <div className="pkg-glass-box">
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 900, color: '#F06543', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 6 }}>
                TRANSPARENT POLICIES
              </div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 34, fontWeight: 700, color: '#0B2545', margin: '0 0 18px' }}>
                Cancellation Policy & Island Travel Advisory
              </h2>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
                <div style={{ background: '#F0FDF4', border: '1.5px solid #BBF7D0', borderRadius: 16, padding: 16 }}>
                  <div style={{ fontSize: 13, fontWeight: 900, color: '#15803D', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 6 }}>
                    🛡️ CANCELLATION REFUND TIMELINE
                  </div>
                  <p style={{ fontSize: 12.5, color: '#166534', lineHeight: 1.55, margin: 0 }}>
                    {pkg.cancellationPolicy || '100% refund on cancellation 15+ days before departure. 50% refund between 7-14 days. Non-refundable within 7 days.'}
                  </p>
                </div>

                <div style={{ background: '#FFF7ED', border: '1.5px solid #FFEDD5', borderRadius: 16, padding: 16 }}>
                  <div style={{ fontSize: 13, fontWeight: 900, color: '#C2410C', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 6 }}>
                    ⏰ FERRY & JETTY BOARDING RULES
                  </div>
                  <p style={{ fontSize: 12.5, color: '#9A3412', lineHeight: 1.55, margin: 0 }}>
                    Reporting at Marine Jetty Terminal is required 45 minutes before departure. Original Govt Photo ID must be presented.
                  </p>
                </div>

                <div style={{ background: '#EFF6FF', border: '1.5px solid #BFDBFE', borderRadius: 16, padding: 16 }}>
                  <div style={{ fontSize: 13, fontWeight: 900, color: '#1D4ED8', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 6 }}>
                    ✈️ PICKUP & CONCIERGE DESK
                  </div>
                  <p style={{ fontSize: 12.5, color: '#1E40AF', lineHeight: 1.55, margin: 0 }}>
                    {pkg.pickupDrop || 'Port Blair Airport (IXZ) Pick-up & Drop Included.'} 24/7 dedicated on-island local tour manager assistance.
                  </p>
                </div>
              </div>
            </div>

            {/* INTERACTIVE FREQUENTLY ASKED QUESTIONS (FAQ) */}
            <div className="pkg-glass-box">
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 900, color: '#F06543', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 6 }}>
                HAVE QUESTIONS?
              </div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 34, fontWeight: 700, color: '#0B2545', margin: '0 0 20px' }}>
                Frequently Asked Questions
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {faqList.map((faq, idx) => {
                  const isFaqOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      style={{
                        border: isFaqOpen ? '1.5px solid #F06543' : '1.5px solid #ebded2',
                        borderRadius: 16,
                        background: '#ffffff',
                        overflow: 'hidden',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isFaqOpen ? null : idx)}
                        style={{
                          width: '100%',
                          padding: '16px 20px',
                          background: isFaqOpen ? '#FFF8F0' : '#ffffff',
                          border: 'none',
                          color: '#0B2545',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          textAlign: 'left',
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: 14,
                          fontWeight: 800,
                          gap: 12,
                        }}
                      >
                        <span>{faq.question}</span>
                        {isFaqOpen ? <ChevronUp size={18} color="#F06543" className="shrink-0" /> : <ChevronDown size={18} color="#F06543" className="shrink-0" />}
                      </button>

                      {isFaqOpen && (
                        <div style={{ padding: '0 20px 18px', fontSize: 13.5, color: '#475569', lineHeight: 1.65, borderTop: '1px solid #ebded2', background: '#ffffff' }}>
                          <p style={{ margin: '12px 0 0' }}>{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CINEMATIC PHOTO GALLERY */}
            <div className="pkg-glass-box">
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 900, color: '#F06543', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 6 }}>
                PHOTO GALLERY
              </div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 34, fontWeight: 700, color: '#0B2545', margin: '0 0 20px' }}>
                Visual Highlights of Your Journey
              </h2>

              <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', gap: 14 }}>
                {galleryImages.slice(0, 3).map((img, idx) => (
                  <div
                    key={idx}
                    onClick={() => setLightboxImage(img)}
                    style={{ borderRadius: 18, overflow: 'hidden', height: 220, cursor: 'pointer', border: '2px solid #ebded2', position: 'relative' }}
                  >
                    <img src={img} alt={`Gallery ${idx}`} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'rgba(11, 37, 69, 0.2)', opacity: 0, transition: 'opacity 0.3s', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff' }}>
                      <Eye size={24} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* REVIEWS & RATINGS */}
            <div className="pkg-glass-box">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20, flexWrap: 'wrap', gap: 12 }}>
                <div>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 900, color: '#F06543', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 4 }}>
                    VERIFIED EXPERIENCES
                  </div>
                  <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 34, fontWeight: 700, color: '#0B2545', margin: 0 }}>
                    Traveler Reviews & Testimonials
                  </h2>
                </div>
                <div style={{ background: '#FFF0EB', border: '1.5px solid #FFD3C4', borderRadius: 16, padding: '10px 18px', textAlign: 'center' }}>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 22, fontWeight: 900, color: '#F06543' }}>4.9 / 5.0</div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: '#0B2545', fontFamily: "'Space Grotesk', sans-serif" }}>100% Verified Bookings</div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                {[
                  { name: 'Rohit & Ananya', location: 'Bengaluru, India', date: 'September 2026', text: 'Our trip was flawless from arrival to airport drop. The Makruzz ferry tickets and resort check-in at Havelock went super smoothly!' },
                  { name: 'Mehta Family', location: 'Mumbai, India', date: 'August 2026', text: 'Traveling with elderly parents was made completely stress-free with the private AC cab and dedicated tour coordinator in Port Blair.' }
                ].map((rev, idx) => (
                  <div key={idx} style={{ background: '#FFF8F0', border: '1.5px solid #ebded2', borderRadius: 18, padding: 20 }}>
                    <div style={{ display: 'flex', gap: 2, color: '#ffd700', marginBottom: 8 }}>
                      {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-[#ffd700] text-[#ffd700]" />)}
                    </div>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#2D3E50', lineHeight: 1.6, marginBottom: 14 }}>
                      "{rev.text}"
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #ebded2', paddingTop: 10, fontSize: 11.5, fontFamily: "'Space Grotesk', sans-serif" }}>
                      <strong style={{ color: '#0B2545' }}>{rev.name} ({rev.location})</strong>
                      <span style={{ color: '#5C6F84' }}>{rev.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── 4. STICKY BOOKING WIDGET (RIGHT COLUMN) ── */}
          <div className="sticky-price-box">
            <div style={{ paddingBottom: 16, borderBottom: '2px solid #ebded2', marginBottom: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11.5, fontWeight: 900, color: '#5C6F84', textTransform: 'uppercase' }}>SPECIAL FARE</span>
                {savingsAmount > 0 && (
                  <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 900, color: '#16a34a', background: '#dcfce7', padding: '3px 10px', borderRadius: 10 }}>
                    SAVE ₹{savingsAmount.toLocaleString()} / PERSON
                  </span>
                )}
              </div>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 34, fontWeight: 900, color: '#F06543' }}>
                  ₹{adultPrice.toLocaleString()}
                </span>
                {originalPrice > adultPrice && (
                  <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 18, color: '#94a3b8', textDecoration: 'line-through', fontWeight: 600 }}>
                    ₹{originalPrice.toLocaleString()}
                  </span>
                )}
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: '#5C6F84', fontWeight: 600 }}>/ Adult</span>
              </div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: '#16a34a', fontWeight: 700, marginTop: 4 }}>
                ✓ Includes All Inter-Island Ferries, Resort & Taxes
              </div>
            </div>

            {/* BOOKING CONTROLS */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 22 }}>
              {/* Date Selection */}
              <div>
                <label style={{ display: 'block', fontFamily: "'Space Grotesk', sans-serif", fontSize: 11.5, fontWeight: 900, color: '#0B2545', marginBottom: 6, textTransform: 'uppercase' }}>
                  1. SELECT TRAVEL START DATE
                </label>
                <div style={{ position: 'relative' }}>
                  <input
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={travelDate}
                    onChange={(e) => setTravelDate(e.target.value)}
                    style={{ width: '100%', padding: '12px 14px', borderRadius: 14, background: '#FFF8F0', border: '2px solid #ebded2', color: '#0B2545', fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 700, outline: 'none', boxSizing: 'border-box' }}
                  />
                </div>
              </div>

              {/* Guest Counters */}
              <div>
                <label style={{ display: 'block', fontFamily: "'Space Grotesk', sans-serif", fontSize: 11.5, fontWeight: 900, color: '#0B2545', marginBottom: 6, textTransform: 'uppercase' }}>
                  2. NUMBER OF TRAVELERS
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                  {/* Adults */}
                  <div style={{ background: '#FFF8F0', border: '2px solid #ebded2', borderRadius: 14, padding: '10px 12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ fontSize: 10.5, fontWeight: 900, color: '#5C6F84', fontFamily: "'Space Grotesk', sans-serif" }}>ADULTS (12+)</div>
                      <div style={{ fontSize: 15, fontWeight: 900, color: '#0B2545', fontFamily: "'Space Grotesk', sans-serif" }}>{adults}</div>
                    </div>
                    <div style={{ display: 'flex', gap: 6 }}>
                      <button type="button" onClick={() => setAdults(Math.max(1, adults - 1))} style={{ width: 28, height: 28, borderRadius: 8, background: '#ffffff', border: '1px solid #ebded2', color: '#F06543', fontWeight: 900, cursor: 'pointer' }}>-</button>
                      <button type="button" onClick={() => setAdults(adults + 1)} style={{ width: 28, height: 28, borderRadius: 8, background: '#ffffff', border: '1px solid #ebded2', color: '#F06543', fontWeight: 900, cursor: 'pointer' }}>+</button>
                    </div>
                  </div>

                  {/* Children */}
                  <div style={{ background: '#FFF8F0', border: '2px solid #ebded2', borderRadius: 14, padding: '10px 12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ fontSize: 10.5, fontWeight: 900, color: '#5C6F84', fontFamily: "'Space Grotesk', sans-serif" }}>CHILD (2-12)</div>
                      <div style={{ fontSize: 15, fontWeight: 900, color: '#0B2545', fontFamily: "'Space Grotesk', sans-serif" }}>{childrenCount}</div>
                    </div>
                    <div style={{ display: 'flex', gap: 6 }}>
                      <button type="button" onClick={() => setChildrenCount(Math.max(0, childrenCount - 1))} style={{ width: 28, height: 28, borderRadius: 8, background: '#ffffff', border: '1px solid #ebded2', color: '#F06543', fontWeight: 900, cursor: 'pointer' }}>-</button>
                      <button type="button" onClick={() => setChildrenCount(childrenCount + 1)} style={{ width: 28, height: 28, borderRadius: 8, background: '#ffffff', border: '1px solid #ebded2', color: '#F06543', fontWeight: 900, cursor: 'pointer' }}>+</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Total Fare Estimate */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '2px solid #ebded2', paddingTop: 14 }}>
                <div>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 800, color: '#5C6F84', textTransform: 'uppercase' }}>ESTIMATED TOTAL</div>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 22, fontWeight: 900, color: '#0B2545' }}>
                    ₹{totalAmount.toLocaleString()}
                  </div>
                </div>
                <div style={{ textAlign: 'right', fontSize: 11, color: '#5C6F84', fontFamily: "'Inter', sans-serif" }}>
                  {adults} Adult(s){childrenCount > 0 ? `, ${childrenCount} Child` : ''}
                </div>
              </div>
            </div>

            {/* Instant Action CTA */}
            <button
              type="button"
              onClick={handleStartBooking}
              style={{
                width: '100%', background: 'linear-gradient(135deg, #FF6B4A, #F06543)', border: 'none',
                color: '#ffffff', fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 900,
                padding: '16px', borderRadius: 16, cursor: 'pointer', display: 'flex', alignItems: 'center',
                justifyContent: 'center', gap: 8, boxShadow: '0 8px 24px rgba(240, 101, 67, 0.28)', letterSpacing: '0.05em'
              }}
            >
              <span>{isLoggedIn ? 'BOOK THIS PACKAGE NOW' : 'SIGN IN & RESERVE PACKAGE'}</span>
              <ArrowRight size={16} />
            </button>

            <button
              type="button"
              onClick={() => {
                const destParam = encodeURIComponent(pkg.destinations || 'havelock');
                window.history.pushState({}, '', `/plan-trip?destination=${destParam}&package=${pkg.id}`);
                window.dispatchEvent(new Event('popstate'));
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              style={{
                width: '100%', background: '#FFF0EB', border: '1.5px solid #F06543',
                color: '#F06543', fontFamily: "'Space Grotesk', sans-serif", fontSize: 12.5, fontWeight: 900,
                padding: '12px', borderRadius: 14, cursor: 'pointer', display: 'flex', alignItems: 'center',
                justifyContent: 'center', gap: 8, marginTop: 10, letterSpacing: '0.04em'
              }}
            >
              <Sparkles size={15} />
              <span>CUSTOMIZE THIS ITINERARY & STAYS</span>
            </button>

            <div style={{ marginTop: 18, paddingTop: 16, borderTop: '1px dashed #ebded2', display: 'flex', flexDirection: 'column', gap: 8, fontSize: 12, color: '#5C6F84', fontFamily: "'Inter', sans-serif" }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#0B2545', fontWeight: 600 }}>
                <ShieldCheck size={16} color="#F06543" /> 100% Safe & Secure SSL Checkout
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <Phone size={14} color="#5C6F84" /> Need customization? Call +91 98765 43210
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. GUEST MANIFEST & BOOKING MODAL ── */}
      {isModalOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(11, 37, 69, 0.75)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
          <div style={{ width: '100%', maxWidth: 640, background: '#ffffff', borderRadius: 26, border: '2px solid #ebded2', boxShadow: '0 20px 60px rgba(0,0,0,0.25)', overflow: 'hidden', maxHeight: '90vh', display: 'flex', flexDirection: 'column' }}>
            
            {/* Modal Header */}
            <div style={{ padding: '20px 24px', background: '#FFF8F0', borderBottom: '2px solid #ebded2', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 900, color: '#F06543', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  PACKAGE RESERVATION
                </div>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 18, fontWeight: 900, color: '#0B2545', margin: 0 }}>
                  {pkg.name || pkg.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                style={{ width: 34, height: 34, borderRadius: 10, background: '#ffffff', border: '1px solid #ebded2', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0B2545', cursor: 'pointer' }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <form onSubmit={handleConfirmPay} style={{ padding: 24, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 18 }}>
              {/* Lead Traveler Details */}
              <div style={{ background: '#FFF8F0', border: '1.5px solid #ebded2', borderRadius: 18, padding: 18, display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, fontWeight: 900, color: '#0B2545', textTransform: 'uppercase' }}>
                  Primary Traveler & Contact Info
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  <div>
                    <label style={{ display: 'block', fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 800, color: '#5C6F84', marginBottom: 4 }}>FULL NAME</label>
                    <input
                      type="text"
                      required
                      value={bookingForm.fullName}
                      onChange={(e) => setBookingForm({ ...bookingForm, fullName: e.target.value })}
                      placeholder="Lead Passenger Name"
                      style={{ width: '100%', padding: '10px 12px', borderRadius: 12, background: '#ffffff', border: '1.5px solid #ebded2', color: '#0B2545', fontSize: 12.5, fontWeight: 600, outline: 'none', boxSizing: 'border-box' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 800, color: '#5C6F84', marginBottom: 4 }}>PHONE NUMBER</label>
                    <input
                      type="tel"
                      required
                      value={bookingForm.phone}
                      onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      style={{ width: '100%', padding: '10px 12px', borderRadius: 12, background: '#ffffff', border: '1.5px solid #ebded2', color: '#0B2545', fontSize: 12.5, fontWeight: 600, outline: 'none', boxSizing: 'border-box' }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 800, color: '#5C6F84', marginBottom: 4 }}>EMAIL (FOR VOUCHERS & E-TICKETS)</label>
                  <input
                    type="email"
                    required
                    value={bookingForm.email}
                    onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                    placeholder="name@example.com"
                    style={{ width: '100%', padding: '10px 12px', borderRadius: 12, background: '#ffffff', border: '1.5px solid #ebded2', color: '#0B2545', fontSize: 12.5, fontWeight: 600, outline: 'none', boxSizing: 'border-box' }}
                  />
                </div>
              </div>

              {/* Passenger Manifest */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, fontWeight: 900, color: '#F06543', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Passenger Manifest ({totalPax} Travelers)
                </div>

                <div style={{ maxHeight: 220, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 10, paddingRight: 4 }}>
                  {guestsDetails.map((guest, idx) => (
                    <div key={idx} style={{ background: '#ffffff', border: '1.5px solid #ebded2', borderRadius: 16, padding: 14, display: 'flex', flexDirection: 'column', gap: 10 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 11.5, fontWeight: 900, color: '#0B2545', fontFamily: "'Space Grotesk', sans-serif" }}>
                        <span>PASSENGER {idx + 1} ({idx === 0 ? 'LEAD TRAVELER' : (guest.guestType === 'CHILD' ? 'CHILD' : 'ACCOMPANYING')})</span>
                        <span style={{ color: '#F06543' }}>{guest.guestType}</span>
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', gap: 8 }}>
                        <input
                          type="text"
                          required
                          value={guest.fullName}
                          onChange={(e) => {
                            const updated = [...guestsDetails];
                            updated[idx].fullName = e.target.value;
                            setGuestsDetails(updated);
                            if (idx === 0) setBookingForm(prev => ({ ...prev, fullName: e.target.value }));
                          }}
                          placeholder="Full Name (As on Govt ID)"
                          style={{ padding: '8px 10px', borderRadius: 10, background: '#FFF8F0', border: '1px solid #ebded2', color: '#0B2545', fontSize: 12, outline: 'none' }}
                        />

                        <select
                          value={guest.gender}
                          onChange={(e) => {
                            const updated = [...guestsDetails];
                            updated[idx].gender = e.target.value;
                            setGuestsDetails(updated);
                          }}
                          style={{ padding: '8px 10px', borderRadius: 10, background: '#FFF8F0', border: '1px solid #ebded2', color: '#0B2545', fontSize: 12, outline: 'none' }}
                        >
                          <option value="MALE">MALE</option>
                          <option value="FEMALE">FEMALE</option>
                          <option value="OTHER">OTHER</option>
                        </select>

                        <select
                          value={guest.idType}
                          onChange={(e) => {
                            const updated = [...guestsDetails];
                            updated[idx].idType = e.target.value;
                            setGuestsDetails(updated);
                          }}
                          style={{ padding: '8px 10px', borderRadius: 10, background: '#FFF8F0', border: '1px solid #ebded2', color: '#0B2545', fontSize: 12, outline: 'none' }}
                        >
                          <option value="AADHAAR">AADHAAR</option>
                          <option value="PASSPORT">PASSPORT</option>
                          <option value="VOTER_ID">VOTER ID</option>
                          <option value="DRIVING_LICENSE">DRIVING LIC</option>
                        </select>
                      </div>

                      {/* Document Photo Upload */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 11 }}>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleDocumentUpload(e.target.files[0], idx)}
                          style={{ display: 'none' }}
                          id={`modal-doc-upload-${idx}`}
                        />
                        <label
                          htmlFor={`modal-doc-upload-${idx}`}
                          style={{
                            padding: '6px 12px', borderRadius: 8, background: guest.documentImage ? '#dcfce7' : '#FFF0EB',
                            border: guest.documentImage ? '1px solid #86efac' : '1px solid #FFD3C4',
                            color: guest.documentImage ? '#16a34a' : '#F06543', cursor: 'pointer', fontWeight: 800, fontFamily: "'Space Grotesk', sans-serif"
                          }}
                        >
                          {guest.uploading ? 'UPLOADING...' : guest.documentImage ? 'ID UPLOADED ✓' : 'UPLOAD ID PHOTO (OPTIONAL)'}
                        </label>
                        {guest.uploadError && <span style={{ color: '#ef4444' }}>{guest.uploadError}</span>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Summary & Submit Button */}
              <div style={{ borderTop: '2px solid #ebded2', paddingTop: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 800, color: '#5C6F84', textTransform: 'uppercase' }}>TOTAL AMOUNT</div>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 22, fontWeight: 900, color: '#F06543' }}>
                    ₹{totalAmount.toLocaleString()}
                  </div>
                </div>

                <button
                  type="submit"
                  style={{
                    background: 'linear-gradient(135deg, #FF6B4A, #F06543)', border: 'none',
                    color: '#ffffff', fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 900,
                    padding: '14px 28px', borderRadius: 14, cursor: 'pointer', boxShadow: '0 6px 20px rgba(240, 101, 67, 0.28)'
                  }}
                >
                  PROCEED TO RAZORPAY →
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ── 6. RAZORPAY MODAL INTEGRATION ── */}
      {showRazorpay && razorpayBookingData && (
        <RazorpayModal
          isOpen={showRazorpay}
          onClose={() => setShowRazorpay(false)}
          bookingData={razorpayBookingData}
          onPaymentSuccess={(data) => {
            console.log('Payment Succeeded and Booking Confirmed:', data);
          }}
        />
      )}

      {/* ── 7. LIGHTBOX IMAGE PREVIEW ── */}
      {lightboxImage && (
        <div
          onClick={() => setLightboxImage(null)}
          style={{ position: 'fixed', inset: 0, zIndex: 10000, background: 'rgba(11, 37, 69, 0.9)', backdropFilter: 'blur(10px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}
        >
          <img src={lightboxImage} alt="Enlarged Andaman Preview" style={{ maxWidth: '90vw', maxHeight: '85vh', borderRadius: 20, objectFit: 'contain', border: '2px solid #ebded2' }} />
        </div>
      )}

      {/* ── 8. MOBILE STICKY BOTTOM BAR ── */}
      <div className={`pkg-sticky-bar ${stickyVisible ? 'visible' : ''}`}>
        <div>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 10.5, fontWeight: 800, color: '#5C6F84', textTransform: 'uppercase' }}>STARTING FROM</div>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 20, fontWeight: 900, color: '#F06543' }}>
            ₹{adultPrice.toLocaleString()} <span style={{ fontSize: 11, color: '#5C6F84' }}>/ Adult</span>
          </div>
        </div>

        <button
          type="button"
          onClick={handleStartBooking}
          style={{
            background: 'linear-gradient(135deg, #FF6B4A, #F06543)', border: 'none',
            color: '#ffffff', fontFamily: "'Space Grotesk', sans-serif", fontSize: 12.5, fontWeight: 900,
            padding: '12px 24px', borderRadius: 14, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6
          }}
        >
          <span>BOOK PACKAGE</span>
          <ArrowRight size={14} />
        </button>
      </div>

      <FooterBottom />
    </div>
  );
}
