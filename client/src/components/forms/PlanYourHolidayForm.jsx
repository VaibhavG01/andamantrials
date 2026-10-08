// client/src/components/forms/PlanYourHolidayForm.jsx
import React, { useState, useEffect } from 'react';
import {
  Send,
  Plane,
  CheckCircle2,
  Calendar,
  Users,
  MapPin,
  Package,
  Clock,
  ShieldCheck,
  Building,
  Utensils,
  Sparkles,
  Phone,
  Mail,
  User,
  MessageSquare,
  Plus,
  Minus,
  MessageCircle,
  Loader2,
  AlertCircle
} from 'lucide-react';
import { inquiryService } from '../../api/inquiryService';
import { useAuth } from '../../context/AuthContext';

export default function PlanYourHolidayForm({ onSuccess, isModal = false }) {
  const { currentUser } = useAuth();

  const [formData, setFormData] = useState({
    name: currentUser?.name || '',
    phone: currentUser?.phone || '',
    email: currentUser?.email || '',
    destination: '',
    package: '',
    travelMonth: '',
    duration: '5 Days / 4 Nights',
    adults: 2,
    children: 0,
    infants: 0,
    rooms: 1,
    hotelCategory: '4★ Deluxe',
    mealPlan: 'CP',
    travelType: 'Couple',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [inquiryResult, setInquiryResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (currentUser) {
      setFormData((prev) => ({
        ...prev,
        name: prev.name || currentUser.name || '',
        phone: prev.phone || currentUser.phone || '',
        email: prev.email || currentUser.email || '',
      }));
    }
  }, [currentUser]);

  const totalPax = (Number(formData.adults) || 0) + (Number(formData.children) || 0) + (Number(formData.infants) || 0);

  const hotelOptions = [
    { id: '3★ Standard', title: '3★ Standard', desc: 'Comfort / Cozy', icon: '🏨' },
    { id: '4★ Deluxe', title: '4★ Deluxe', desc: 'Deluxe / Premium', icon: '✨' },
    { id: '5★ Luxury', title: '5★ Luxury', desc: 'Luxury / Heritage', icon: '👑' },
  ];

  const mealPlanOptions = [
    { id: 'EP', code: 'EP', title: 'Room Only', desc: 'No meals included' },
    { id: 'CP', code: 'CP', title: 'Breakfast Included', desc: 'Complimentary morning buffet' },
    { id: 'MAP', code: 'MAP', title: 'Breakfast + Dinner/Lunch', desc: 'Half Board' },
    { id: 'AP', code: 'AP', title: 'All Meals Included', desc: 'Full Board (B+L+D)' },
  ];

  const travelTypeOptions = ['Couple', 'Family', 'Group', 'Corporate', 'Other'];

  const monthOptions = [
    'October 2026',
    'November 2026',
    'December 2026',
    'January 2027',
    'February 2027',
    'March 2027',
    'April 2027',
    'May 2027',
    'June - August (Monsoon Wellness)',
    'September 2027',
    'Flexible Dates (Next 6 Months)',
  ];

  const destinationOptions = [
    'All Islands (Port Blair + Havelock + Neil)',
    'Havelock Island (Swaraj Dweep)',
    'Port Blair (Capital Gateway)',
    'Neil Island (Shaheed Dweep)',
    'Baratang Island & Limestone Caves',
    'Diglipur & Ross-Smith Twin Islands',
    'Little Andaman & Butler Bay',
    'Great Nicobar & Indira Point',
  ];

  const packageOptions = [
    'Custom Personalized Package',
    'Andaman Escape (5N / 6D)',
    'Island Romance — Honeymoon (4N / 5D)',
    'Family Island Odyssey (6N / 7D)',
    'Ultimate Adventure & Scuba (7N / 8D)',
    'Quick Andaman Discovery (3N / 4D)',
    'Great Nicobar & Southernmost Tip (5N / 6D)',
  ];

  const updateCounter = (field, delta, min = 0, max = 20) => {
    setFormData((prev) => ({
      ...prev,
      [field]: Math.min(max, Math.max(min, (Number(prev[field]) || 0) + delta)),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!formData.phone.trim()) {
      setErrorMessage('Please enter your phone number so our team can reach you.');
      return;
    }

    setLoading(true);

    try {
      const payload = {
        name: formData.name.trim(),
        fullName: formData.name.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim() || `${formData.name.toLowerCase().replace(/\s+/g, '')}@guest.andamantrails.com`,
        destination: formData.destination || 'All Andaman Islands',
        packageName: formData.package || 'Custom Personalized Holiday',
        travelMonth: formData.travelMonth || 'Upcoming Season',
        duration: formData.duration || '5 Days / 4 Nights',
        adults: formData.adults,
        children: formData.children,
        infants: formData.infants,
        rooms: formData.rooms,
        hotelCategory: formData.hotelCategory,
        mealPlan: formData.mealPlan,
        travelType: formData.travelType,
        message: formData.message,
      };

      const res = await inquiryService.createInquiry(payload);
      const resData = res?.data || res;
      setInquiryResult(resData);
      setSubmitted(true);
      if (onSuccess) onSuccess(resData);
    } catch (err) {
      console.error('Holiday enquiry submission error:', err);
      setErrorMessage(err.message || 'Failed to submit enquiry. Please try again or WhatsApp us directly.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setInquiryResult(null);
    setFormData({
      name: currentUser?.name || '',
      phone: currentUser?.phone || '',
      email: currentUser?.email || '',
      destination: '',
      package: '',
      travelMonth: '',
      duration: '5 Days / 4 Nights',
      adults: 2,
      children: 0,
      infants: 0,
      rooms: 1,
      hotelCategory: '4★ Deluxe',
      mealPlan: 'CP',
      travelType: 'Couple',
      message: '',
    });
  };

  if (submitted) {
    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    const waText = encodeURIComponent(
      `Hi Andaman Trails! I just submitted a holiday enquiry for ${formData.name} (${formData.destination || 'Andaman'}, ${totalPax} Pax, ${formData.duration}). Reference ID: #${inquiryResult?.id || 'NEW'}`
    );

    return (
      <div style={{
        background: '#ffffff',
        borderRadius: 24,
        padding: isModal ? '32px 24px' : '44px 36px',
        border: '1.5px solid #EBDED2',
        boxShadow: '0 20px 45px rgba(11, 37, 69, 0.08)',
        textAlign: 'center',
        maxWidth: 720,
        margin: '0 auto',
      }}>
        <div style={{
          width: 72,
          height: 72,
          borderRadius: '50%',
          background: '#ECFDF5',
          border: '2px solid #10B981',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#10B981',
          margin: '0 auto 20px',
          boxShadow: '0 8px 24px rgba(16, 185, 129, 0.25)',
        }}>
          <CheckCircle2 size={40} />
        </div>

        <span style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 12,
          fontWeight: 800,
          color: '#F06543',
          background: '#FFF0EB',
          padding: '4px 14px',
          borderRadius: 20,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          display: 'inline-block',
          marginBottom: 12,
        }}>
          ENQUIRY CONFIRMED ✈️
        </span>

        <h2 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: isModal ? 24 : 30,
          fontWeight: 900,
          color: '#0B2545',
          margin: '0 0 10px',
        }}>
          Thank You, {formData.name}!
        </h2>

        <p style={{
          fontSize: 15,
          color: '#5C6F84',
          maxWidth: 520,
          margin: '0 auto 24px',
          lineHeight: 1.6,
        }}>
          Your holiday request has been securely delivered to our Andaman Island Concierge Desk. An automated confirmation email has been dispatched to <strong>{formData.email || 'your email'}</strong>.
        </p>

        {/* SUMMARY CARD */}
        <div style={{
          background: '#FAF4EE',
          border: '1.5px solid #EBDED2',
          borderRadius: 18,
          padding: 22,
          marginBottom: 28,
          textAlign: 'left',
        }}>
          <div style={{
            fontSize: 11.5,
            fontWeight: 800,
            color: '#F06543',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: 14,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
            <span>ENQUIRY SPECIFICATIONS</span>
            <span style={{ color: '#0B2545' }}>REF #{inquiryResult?.id || Date.now().toString().slice(-6)}</span>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 12,
            fontSize: 13.5,
          }}>
            <div>
              <span style={{ color: '#5C6F84', fontSize: 12 }}>Destination:</span>
              <div style={{ fontWeight: 700, color: '#0B2545' }}>{formData.destination || 'All Islands'}</div>
            </div>
            <div>
              <span style={{ color: '#5C6F84', fontSize: 12 }}>Travel Timing:</span>
              <div style={{ fontWeight: 700, color: '#0B2545' }}>{formData.travelMonth || 'Upcoming Season'} ({formData.duration})</div>
            </div>
            <div>
              <span style={{ color: '#5C6F84', fontSize: 12 }}>Travelers & Rooms:</span>
              <div style={{ fontWeight: 700, color: '#0B2545' }}>{formData.adults} Adults, {formData.children} Children • {formData.rooms} Room(s)</div>
            </div>
            <div>
              <span style={{ color: '#5C6F84', fontSize: 12 }}>Hotel & Meal Plan:</span>
              <div style={{ fontWeight: 700, color: '#F06543' }}>{formData.hotelCategory} • {formData.mealPlan}</div>
            </div>
          </div>
        </div>

        {/* FAST ACTION CTAS */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center' }}>
          <a
            href={`https://wa.me/919137835433?text=${waText}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: '#25D366',
              color: '#ffffff',
              padding: '14px 28px',
              borderRadius: 14,
              fontWeight: 800,
              fontSize: 14,
              fontFamily: "'Space Grotesk', sans-serif",
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              boxShadow: '0 8px 20px rgba(37, 211, 102, 0.3)',
            }}
          >
            <MessageCircle size={18} /> Chat with Specialist on WhatsApp
          </a>

          <button
            onClick={handleReset}
            style={{
              background: '#0B2545',
              color: '#ffffff',
              padding: '14px 24px',
              borderRadius: 14,
              fontWeight: 800,
              fontSize: 14,
              fontFamily: "'Space Grotesk', sans-serif",
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Plan Another Trip ✈
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      background: '#ffffff',
      borderRadius: 24,
      padding: isModal ? '28px 20px' : '44px 36px',
      border: '1.5px solid #EBDED2',
      boxShadow: '0 20px 50px rgba(11, 37, 69, 0.07)',
      maxWidth: 820,
      margin: '0 auto',
      color: '#0B2545',
      fontFamily: "'Inter', sans-serif",
    }}>
      {/* ── HEADER ── */}
      <div style={{ marginBottom: 28, textAlign: 'center' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          background: '#FFF0EB',
          padding: '6px 16px',
          borderRadius: 20,
          marginBottom: 10,
          border: '1px solid #FFD3C4',
        }}>
          <Plane size={15} color="#F06543" />
          <span style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 12,
            fontWeight: 800,
            color: '#F06543',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
          }}>
            CUSTOM ISLAND ITINERARY
          </span>
        </div>

        <h2 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: isModal ? 26 : 34,
          fontWeight: 900,
          color: '#0B2545',
          margin: '0 0 8px',
          letterSpacing: '-0.02em',
        }}>
          Plan Your Holiday ✈
        </h2>

        <p style={{
          fontSize: 14.5,
          color: '#5C6F84',
          margin: 0,
          maxWidth: 580,
          marginLeft: 'auto',
          marginRight: 'auto',
          lineHeight: 1.5,
        }}>
          Fill in the details below — our island architects will craft a personalised quote within 2 hours.
        </p>
      </div>

      {errorMessage && (
        <div style={{
          background: '#FEF2F2',
          border: '1px solid #F87171',
          borderRadius: 14,
          padding: '12px 16px',
          fontSize: 13.5,
          color: '#B91C1C',
          marginBottom: 24,
          display: 'flex',
          alignItems: 'center',
          gap: 10,
        }}>
          <AlertCircle size={18} className="shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        {/* ── 1. PERSONAL DETAILS ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 16,
        }}>
          {/* Name */}
          <div>
            <label style={{ display: 'block', fontSize: 12.5, fontWeight: 700, color: '#0B2545', marginBottom: 6 }}>
              Your Name <span style={{ color: '#F06543' }}>*</span>
            </label>
            <div style={{ position: 'relative' }}>
              <User size={16} color="#94A3B8" style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="text"
                required
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                style={{
                  width: '100%',
                  padding: '12px 14px 12px 40px',
                  borderRadius: 12,
                  border: '1.5px solid #EBDED2',
                  fontSize: 14,
                  color: '#0B2545',
                  outline: 'none',
                  background: '#FAF4EE',
                  transition: 'border 0.2s',
                  boxSizing: 'border-box',
                }}
                onFocus={(e) => e.target.style.borderColor = '#F06543'}
                onBlur={(e) => e.target.style.borderColor = '#EBDED2'}
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label style={{ display: 'block', fontSize: 12.5, fontWeight: 700, color: '#0B2545', marginBottom: 6 }}>
              Phone <span style={{ color: '#F06543' }}>*</span>
            </label>
            <div style={{ position: 'relative' }}>
              <Phone size={16} color="#94A3B8" style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="tel"
                required
                placeholder="+91 XXXXX XXXXX"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                style={{
                  width: '100%',
                  padding: '12px 14px 12px 40px',
                  borderRadius: 12,
                  border: '1.5px solid #EBDED2',
                  fontSize: 14,
                  color: '#0B2545',
                  outline: 'none',
                  background: '#FAF4EE',
                  transition: 'border 0.2s',
                  boxSizing: 'border-box',
                }}
                onFocus={(e) => e.target.style.borderColor = '#F06543'}
                onBlur={(e) => e.target.style.borderColor = '#EBDED2'}
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label style={{ display: 'block', fontSize: 12.5, fontWeight: 700, color: '#0B2545', marginBottom: 6 }}>
              Email
            </label>
            <div style={{ position: 'relative' }}>
              <Mail size={16} color="#94A3B8" style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                style={{
                  width: '100%',
                  padding: '12px 14px 12px 40px',
                  borderRadius: 12,
                  border: '1.5px solid #EBDED2',
                  fontSize: 14,
                  color: '#0B2545',
                  outline: 'none',
                  background: '#FAF4EE',
                  transition: 'border 0.2s',
                  boxSizing: 'border-box',
                }}
                onFocus={(e) => e.target.style.borderColor = '#F06543'}
                onBlur={(e) => e.target.style.borderColor = '#EBDED2'}
              />
            </div>
          </div>
        </div>

        {/* ── 2. DESTINATION & PACKAGE SELECTORS ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 16,
        }}>
          {/* Destination */}
          <div>
            <label style={{ display: 'block', fontSize: 12.5, fontWeight: 700, color: '#0B2545', marginBottom: 6 }}>
              Destination
            </label>
            <div style={{ position: 'relative' }}>
              <MapPin size={16} color="#94A3B8" style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
              <select
                value={formData.destination}
                onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                style={{
                  width: '100%',
                  padding: '12px 14px 12px 40px',
                  borderRadius: 12,
                  border: '1.5px solid #EBDED2',
                  fontSize: 13.5,
                  color: formData.destination ? '#0B2545' : '#64748B',
                  outline: 'none',
                  background: '#FAF4EE',
                  appearance: 'none',
                  cursor: 'pointer',
                  boxSizing: 'border-box',
                }}
              >
                <option value="">Select Destination (Optional)</option>
                {destinationOptions.map((opt) => (
                  <option key={opt} value={opt} style={{ color: '#0B2545' }}>{opt}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Package */}
          <div>
            <label style={{ display: 'block', fontSize: 12.5, fontWeight: 700, color: '#0B2545', marginBottom: 6 }}>
              Package
            </label>
            <div style={{ position: 'relative' }}>
              <Package size={16} color="#94A3B8" style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
              <select
                value={formData.package}
                onChange={(e) => setFormData({ ...formData, package: e.target.value })}
                style={{
                  width: '100%',
                  padding: '12px 14px 12px 40px',
                  borderRadius: 12,
                  border: '1.5px solid #EBDED2',
                  fontSize: 13.5,
                  color: formData.package ? '#0B2545' : '#64748B',
                  outline: 'none',
                  background: '#FAF4EE',
                  appearance: 'none',
                  cursor: 'pointer',
                  boxSizing: 'border-box',
                }}
              >
                <option value="">Select Package (Optional)</option>
                {packageOptions.map((opt) => (
                  <option key={opt} value={opt} style={{ color: '#0B2545' }}>{opt}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* ── 3. TRAVEL MONTH & DURATION ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 16,
        }}>
          {/* Travel Month */}
          <div>
            <label style={{ display: 'block', fontSize: 12.5, fontWeight: 700, color: '#0B2545', marginBottom: 6 }}>
              Travel Month
            </label>
            <div style={{ position: 'relative' }}>
              <Calendar size={16} color="#94A3B8" style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
              <select
                value={formData.travelMonth}
                onChange={(e) => setFormData({ ...formData, travelMonth: e.target.value })}
                style={{
                  width: '100%',
                  padding: '12px 14px 12px 40px',
                  borderRadius: 12,
                  border: '1.5px solid #EBDED2',
                  fontSize: 13.5,
                  color: formData.travelMonth ? '#0B2545' : '#64748B',
                  outline: 'none',
                  background: '#FAF4EE',
                  appearance: 'none',
                  cursor: 'pointer',
                  boxSizing: 'border-box',
                }}
              >
                <option value="">Select Month</option>
                {monthOptions.map((m) => (
                  <option key={m} value={m} style={{ color: '#0B2545' }}>{m}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Duration */}
          <div>
            <label style={{ display: 'block', fontSize: 12.5, fontWeight: 700, color: '#0B2545', marginBottom: 6 }}>
              Duration
            </label>
            <div style={{ position: 'relative' }}>
              <Clock size={16} color="#94A3B8" style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="text"
                placeholder="e.g. 5 Days / 4 Nights"
                value={formData.duration}
                onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                style={{
                  width: '100%',
                  padding: '12px 14px 12px 40px',
                  borderRadius: 12,
                  border: '1.5px solid #EBDED2',
                  fontSize: 14,
                  color: '#0B2545',
                  outline: 'none',
                  background: '#FAF4EE',
                  transition: 'border 0.2s',
                  boxSizing: 'border-box',
                }}
                onFocus={(e) => e.target.style.borderColor = '#F06543'}
                onBlur={(e) => e.target.style.borderColor = '#EBDED2'}
              />
            </div>
          </div>
        </div>

        {/* ── 4. GUESTS & ROOM REQUIREMENT COUNTERS ── */}
        <div style={{
          background: '#FAF4EE',
          border: '1.5px solid #EBDED2',
          borderRadius: 18,
          padding: 20,
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 16,
            flexWrap: 'wrap',
            gap: 8,
          }}>
            <div style={{ fontSize: 13, fontWeight: 800, color: '#0B2545', fontFamily: "'Space Grotesk', sans-serif" }}>
              Guests & Room Requirement
            </div>
            <div style={{
              fontSize: 12,
              fontWeight: 800,
              color: '#F06543',
              background: '#FFF0EB',
              padding: '4px 12px',
              borderRadius: 20,
              border: '1px solid #FFD3C4',
            }}>
              {formData.adults} Adults • {formData.rooms} Room{formData.rooms > 1 ? 's' : ''} • {totalPax} Total Pax
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(135px, 1fr))',
            gap: 14,
          }}>
            {/* Adults */}
            <div style={{
              background: '#ffffff',
              border: '1px solid #EBDED2',
              borderRadius: 14,
              padding: '12px 14px',
              textAlign: 'center',
            }}>
              <div style={{ fontWeight: 800, fontSize: 13, color: '#0B2545' }}>Adults</div>
              <div style={{ fontSize: 11, color: '#64748B', marginBottom: 8 }}>12+ years</div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
                <button
                  type="button"
                  onClick={() => updateCounter('adults', -1, 1, 20)}
                  style={{
                    width: 28, height: 28, borderRadius: '50%', border: '1px solid #CBD5E1',
                    background: '#F1F5F9', color: '#0B2545', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer', fontWeight: 800,
                  }}
                >
                  <Minus size={14} />
                </button>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 900, minWidth: 20 }}>
                  {formData.adults}
                </span>
                <button
                  type="button"
                  onClick={() => updateCounter('adults', 1, 1, 20)}
                  style={{
                    width: 28, height: 28, borderRadius: '50%', border: 'none',
                    background: '#F06543', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer', fontWeight: 800,
                  }}
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Children */}
            <div style={{
              background: '#ffffff',
              border: '1px solid #EBDED2',
              borderRadius: 14,
              padding: '12px 14px',
              textAlign: 'center',
            }}>
              <div style={{ fontWeight: 800, fontSize: 13, color: '#0B2545' }}>Children</div>
              <div style={{ fontSize: 11, color: '#64748B', marginBottom: 8 }}>5 to 12 yrs</div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
                <button
                  type="button"
                  onClick={() => updateCounter('children', -1, 0, 10)}
                  style={{
                    width: 28, height: 28, borderRadius: '50%', border: '1px solid #CBD5E1',
                    background: '#F1F5F9', color: '#0B2545', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer', fontWeight: 800,
                  }}
                >
                  <Minus size={14} />
                </button>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 900, minWidth: 20 }}>
                  {formData.children}
                </span>
                <button
                  type="button"
                  onClick={() => updateCounter('children', 1, 0, 10)}
                  style={{
                    width: 28, height: 28, borderRadius: '50%', border: 'none',
                    background: '#F06543', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer', fontWeight: 800,
                  }}
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Infants */}
            <div style={{
              background: '#ffffff',
              border: '1px solid #EBDED2',
              borderRadius: 14,
              padding: '12px 14px',
              textAlign: 'center',
            }}>
              <div style={{ fontWeight: 800, fontSize: 13, color: '#0B2545' }}>Infants</div>
              <div style={{ fontSize: 11, color: '#64748B', marginBottom: 8 }}>0 to 5 yrs</div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
                <button
                  type="button"
                  onClick={() => updateCounter('infants', -1, 0, 10)}
                  style={{
                    width: 28, height: 28, borderRadius: '50%', border: '1px solid #CBD5E1',
                    background: '#F1F5F9', color: '#0B2545', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer', fontWeight: 800,
                  }}
                >
                  <Minus size={14} />
                </button>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 900, minWidth: 20 }}>
                  {formData.infants}
                </span>
                <button
                  type="button"
                  onClick={() => updateCounter('infants', 1, 0, 10)}
                  style={{
                    width: 28, height: 28, borderRadius: '50%', border: 'none',
                    background: '#F06543', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer', fontWeight: 800,
                  }}
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* No. of Rooms */}
            <div style={{
              background: '#ffffff',
              border: '1px solid #EBDED2',
              borderRadius: 14,
              padding: '12px 14px',
              textAlign: 'center',
            }}>
              <div style={{ fontWeight: 800, fontSize: 13, color: '#0B2545' }}>No. of Rooms</div>
              <div style={{ fontSize: 11, color: '#64748B', marginBottom: 8 }}>Hotel Rooms</div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
                <button
                  type="button"
                  onClick={() => updateCounter('rooms', -1, 1, 10)}
                  style={{
                    width: 28, height: 28, borderRadius: '50%', border: '1px solid #CBD5E1',
                    background: '#F1F5F9', color: '#0B2545', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer', fontWeight: 800,
                  }}
                >
                  <Minus size={14} />
                </button>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 900, minWidth: 20 }}>
                  {formData.rooms}
                </span>
                <button
                  type="button"
                  onClick={() => updateCounter('rooms', 1, 1, 10)}
                  style={{
                    width: 28, height: 28, borderRadius: '50%', border: 'none',
                    background: '#F06543', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer', fontWeight: 800,
                  }}
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ── 5. HOTEL CATEGORY ── */}
        <div>
          <label style={{ display: 'block', fontSize: 12.5, fontWeight: 700, color: '#0B2545', marginBottom: 10 }}>
            Hotel Category (Optional)
          </label>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: 12,
          }}>
            {hotelOptions.map((opt) => {
              const active = formData.hotelCategory === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setFormData({ ...formData, hotelCategory: opt.id })}
                  style={{
                    padding: '14px 16px',
                    borderRadius: 14,
                    border: `1.5px solid ${active ? '#F06543' : '#EBDED2'}`,
                    background: active ? '#FFF0EB' : '#FAF4EE',
                    textAlign: 'left',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontWeight: 800, fontSize: 14, color: active ? '#F06543' : '#0B2545' }}>
                      {opt.title}
                    </span>
                    <span style={{ fontSize: 16 }}>{opt.icon}</span>
                  </div>
                  <div style={{ fontSize: 12, color: '#64748B', marginTop: 4 }}>
                    {opt.desc}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── 6. MEAL PLAN ── */}
        <div>
          <label style={{ display: 'block', fontSize: 12.5, fontWeight: 700, color: '#0B2545', marginBottom: 10 }}>
            Meal Plan (EP / CP / MAP / AP)
          </label>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: 12,
          }}>
            {mealPlanOptions.map((opt) => {
              const active = formData.mealPlan === opt.code;
              return (
                <button
                  key={opt.code}
                  type="button"
                  onClick={() => setFormData({ ...formData, mealPlan: opt.code })}
                  style={{
                    padding: '12px 14px',
                    borderRadius: 14,
                    border: `1.5px solid ${active ? '#F06543' : '#EBDED2'}`,
                    background: active ? '#FFF0EB' : '#FAF4EE',
                    textAlign: 'left',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                >
                  <div style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 900,
                    fontSize: 15,
                    color: active ? '#F06543' : '#0B2545',
                  }}>
                    {opt.code}
                  </div>
                  <div style={{ fontSize: 12.5, fontWeight: 700, color: '#0B2545', marginTop: 2 }}>
                    {opt.title}
                  </div>
                  <div style={{ fontSize: 11, color: '#64748B', marginTop: 2 }}>
                    {opt.desc}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── 7. TRAVEL TYPE ── */}
        <div>
          <label style={{ display: 'block', fontSize: 12.5, fontWeight: 700, color: '#0B2545', marginBottom: 10 }}>
            Travel Type
          </label>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {travelTypeOptions.map((t) => {
              const active = formData.travelType === t;
              return (
                <button
                  key={t}
                  type="button"
                  onClick={() => setFormData({ ...formData, travelType: t })}
                  style={{
                    padding: '8px 18px',
                    borderRadius: 20,
                    border: `1.5px solid ${active ? '#F06543' : '#EBDED2'}`,
                    background: active ? '#F06543' : '#FAF4EE',
                    color: active ? '#ffffff' : '#0B2545',
                    fontSize: 13,
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                >
                  {t}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── 8. MESSAGE / SPECIAL REQUIREMENTS ── */}
        <div>
          <label style={{ display: 'block', fontSize: 12.5, fontWeight: 700, color: '#0B2545', marginBottom: 6 }}>
            Message / Special Requirements
          </label>
          <textarea
            rows={3}
            placeholder="Tell us about your dream trip, preferred stay style, or specific activities..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            style={{
              width: '100%',
              padding: 14,
              borderRadius: 14,
              border: '1.5px solid #EBDED2',
              fontSize: 14,
              color: '#0B2545',
              outline: 'none',
              background: '#FAF4EE',
              resize: 'vertical',
              lineHeight: 1.5,
              boxSizing: 'border-box',
            }}
            onFocus={(e) => e.target.style.borderColor = '#F06543'}
            onBlur={(e) => e.target.style.borderColor = '#EBDED2'}
          />
        </div>

        {/* ── 9. SUBMIT BUTTON & TRUST BADGE ── */}
        <div style={{ marginTop: 4 }}>
          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: '16px 24px',
              borderRadius: 16,
              border: 'none',
              background: 'linear-gradient(135deg, #FF6B4A 0%, #F06543 100%)',
              color: '#ffffff',
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 16,
              fontWeight: 900,
              cursor: loading ? 'wait' : 'pointer',
              boxShadow: '0 8px 24px rgba(240, 101, 67, 0.35)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 10,
              letterSpacing: '0.04em',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseOver={(e) => { if (!loading) e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            {loading ? (
              <>
                <Loader2 size={20} className="animate-spin" /> Sending Your Holiday Plan...
              </>
            ) : (
              <>
                Send Enquiry ✈
              </>
            )}
          </button>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 6,
            marginTop: 14,
            fontSize: 12,
            color: '#5C6F84',
            textAlign: 'center',
          }}>
            <ShieldCheck size={14} color="#F06543" />
            <span>Your information is 100% secure and never shared with third parties. We only use it to plan your trip.</span>
          </div>
        </div>
      </form>
    </div>
  );
}
