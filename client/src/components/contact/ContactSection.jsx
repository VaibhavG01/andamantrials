// src/components/contact/ContactSection.jsx
// ─────────────────────────────────────────────────────────────────────────────
// CONTACT US SECTION — Premium form + info cards + office hours

import React, { useState } from 'react';
import {
  Sparkles, Phone, Mail, MapPin, Clock, Send,
  MessageCircle, CheckCircle2, User, Calendar, Users,
  Shield, Headphones, Star, AlertCircle,
} from 'lucide-react';

// ── Inline SVG social icons (lucide-react doesn't export these) ──
const InstagramIcon = ({ size = 18, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);
const FacebookIcon = ({ size = 18, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
const YoutubeIcon = ({ size = 18, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#ffffff"/>
  </svg>
);

const TRIP_TYPES = [
  'Honeymoon Package', 'Family Holiday', 'Adventure Trip',
  'Solo Travel', 'Corporate Group', 'Budget Backpacking', 'Custom Itinerary',
];

const CONTACT_CARDS = [
  {
    icon: Phone,
    color: '#0284c7',
    bg: 'rgba(2,132,199,0.08)',
    border: 'rgba(2,132,199,0.22)',
    title: 'Call Us',
    primary: '+91 91378 35433',
    secondary: '+91 94742 01234',
    sub: 'Mon–Sun, 9am–9pm IST',
    href: 'tel:+919137835433',
  },
  {
    icon: MessageCircle,
    color: '#16a34a',
    bg: 'rgba(22,163,74,0.08)',
    border: 'rgba(22,163,74,0.22)',
    title: 'WhatsApp',
    primary: '+91 91378 35433',
    secondary: 'Chat Instantly',
    sub: 'Usually replies in 5 mins',
    href: 'https://wa.me/919137835433?text=Hello%20Andaman%20Trails!%20I%20would%20like%20to%20plan%20a%20trip.',
  },
  {
    icon: Mail,
    color: '#F06543',
    bg: 'rgba(240,101,67,0.08)',
    border: 'rgba(240,101,67,0.22)',
    title: 'Email Us',
    primary: 'info@andamantrails.com',
    secondary: 'bookings@andamantrails.com',
    sub: 'Response within 2 hours',
    href: 'mailto:info@andamantrails.com',
  },
  {
    icon: MapPin,
    color: '#d97706',
    bg: 'rgba(217,119,6,0.08)',
    border: 'rgba(217,119,6,0.22)',
    title: 'Our Office',
    primary: 'Aberdeen Bazaar, Port Blair',
    secondary: 'Andaman & Nicobar — 744101',
    sub: 'Walk-in: 9am–7pm, Mon–Sat',
    href: 'https://maps.google.com/?q=Aberdeen+Bazaar+Port+Blair+Andaman+744101',
  },
];

const TRUST_POINTS = [
  { icon: Shield, text: '100% Secure Enquiry' },
  { icon: Clock, text: 'Reply within 2 Hours' },
  { icon: Headphones, text: 'Dedicated Trip Expert' },
  { icon: Star, text: '4.9★ Rated Support' },
];

import { apiClient } from '../../api/apiClient';

export default function ContactSection() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', tripType: '', travelDate: '', travelers: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [focused, setFocused] = useState('');

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMessage('');

    try {
      const payload = {
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        tripType: form.tripType || 'Trip Planning',
        travelDate: form.travelDate || null,
        travelers: form.travelers || '2 (Couple)',
        message: form.message.trim(),
      };

      const res = await apiClient('/inquiries', {
        method: 'POST',
        body: JSON.stringify(payload),
      });

      if (res && (res.success || res.data || res.message)) {
        setSubmitted(true);
      } else {
        throw new Error(res?.message || 'Failed to submit enquiry');
      }
    } catch (err) {
      console.error('Inquiry submission error:', err);
      // Even if network error occurs, if it was stored or if offline fallback, handle gracefully
      setErrorMessage(err.message || 'Something went wrong. Please check your connection or WhatsApp us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact-section" className="contact-section">
      <style>{`
        .contact-section {
          position: relative;
          width: 100%;
          background: #ffffff;
          color: #334155;
          padding: 72px 0 88px;
          border-bottom: 1px solid #e2e8f0;
          overflow: hidden;
        }
        .contact-glow-tl {
          position: absolute; top: -5%; left: -5%;
          width: 600px; height: 600px;
          background: radial-gradient(circle, rgba(22,217,255,0.06) 0%, transparent 65%);
          pointer-events: none;
        }
        .contact-glow-br {
          position: absolute; bottom: -5%; right: -5%;
          width: 600px; height: 600px;
          background: radial-gradient(circle, rgba(33,230,193,0.06) 0%, transparent 65%);
          pointer-events: none;
        }
        .contact-container {
          max-width: 1380px; margin: 0 auto; padding: 0 24px;
          position: relative; z-index: 2;
        }

        /* Header */
        .contact-header-sub {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 800; letter-spacing: 0.22em;
          color: #F06543; text-transform: uppercase;
          display: flex; align-items: center; gap: 7px;
          margin-bottom: 7px;
        }
        .contact-header-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(28px, 3.5vw, 46px); font-weight: 600;
          color: #0B2545; line-height: 1.1; margin: 0 0 6px;
        }
        .contact-header-desc {
          font-family: 'Inter', sans-serif;
          font-size: 13px; color: #64748b;
          line-height: 1.6; max-width: 500px; margin: 0 0 36px;
        }

        /* Contact cards */
        .contact-cards-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
          margin-bottom: 44px;
        }
        @media (max-width: 1024px) {
          .contact-cards-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 540px) {
          .contact-cards-grid { grid-template-columns: 1fr; }
        }
        .contact-card {
          background: #ffffff;
          backdrop-filter: blur(16px);
          border-radius: 18px;
          padding: 20px;
          display: flex; flex-direction: column; gap: 10px;
          transition: all 0.35s ease;
          text-decoration: none;
        }
        .contact-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 36px rgba(0,0,0,0.5);
        }
        .contact-card-icon {
          width: 44px; height: 44px; border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .contact-card-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 800; letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        .contact-card-primary {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 15px; font-weight: 800; color: #0B2545;
          line-height: 1.3;
        }
        .contact-card-secondary {
          font-family: 'Inter', sans-serif;
          font-size: 13px; color: #64748b;
        }
        .contact-card-sub {
          font-family: 'Inter', sans-serif;
          font-size: 12.5px; color: #627d8a;
          margin-top: 2px;
          display: flex; align-items: center; gap: 5px;
        }

        /* Master two-column grid */
        .contact-body-grid {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 28px;
          align-items: start;
        }
        @media (max-width: 900px) {
          .contact-body-grid { grid-template-columns: 1fr; }
        }

        /* Left: Info Panel */
        .contact-info-panel {
          background: #ffffff;
          backdrop-filter: blur(20px);
          border: 1.5px solid #e2e8f0;
          border-radius: 24px;
          padding: 36px;
          height: 100%;
          display: flex; flex-direction: column; gap: 28px;
        }
        @media (max-width: 540px) { .contact-info-panel { padding: 24px; } }

        .contact-office-hours-row {
          display: flex; flex-direction: column; gap: 8px;
        }
        .contact-hours-item {
          display: flex; align-items: center; justify-content: space-between;
          padding: 10px 14px; border-radius: 12px;
          background: #f8fafc; border: 1px solid #e2e8f0;
        }
        .contact-hours-day {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 700; color: #64748b;
        }
        .contact-hours-time {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 15px; font-weight: 800; color: #0B2545;
          display: flex; align-items: center; gap: 5px;
        }
        .contact-hours-dot {
          width: 6px; height: 6px; border-radius: 50%; background: #F06543;
        }

        /* Social row */
        .contact-social-row {
          display: flex; gap: 10px;
        }
        .contact-social-btn {
          width: 42px; height: 42px; border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          text-decoration: none;
          transition: all 0.3s ease;
          border: 1px solid #e2e8f0;
          background: #e2e8f0;
        }
        .contact-social-btn:hover {
          transform: translateY(-3px) scale(1.08);
          box-shadow: 0 8px 20px rgba(0,0,0,0.4);
        }

        /* Trust points */
        .contact-trust-row {
          display: grid; grid-template-columns: 1fr 1fr; gap: 10px;
        }
        .contact-trust-item {
          display: flex; align-items: center; gap: 8px;
          background: #f8fafc; border: 1px solid #e2e8f0;
          border-radius: 12px; padding: 10px 14px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12.5px; font-weight: 700; color: #64748b;
        }

        /* Right: Form */
        .contact-form-panel {
          background: #ffffff;
          backdrop-filter: blur(20px);
          border: 1.5px solid #e2e8f0;
          border-radius: 24px;
          padding: 36px;
        }
        @media (max-width: 540px) { .contact-form-panel { padding: 24px; } }

        .contact-form-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 18px; font-weight: 800; color: #0B2545;
          margin-bottom: 4px;
        }
        .contact-form-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: 12px; color: #64748b;
          margin-bottom: 24px; line-height: 1.5;
        }

        .contact-form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin-bottom: 14px;
        }
        @media (max-width: 540px) {
          .contact-form-row { grid-template-columns: 1fr; }
        }
        .contact-form-group {
          display: flex; flex-direction: column; gap: 6px;
        }
        .contact-form-group.full { grid-column: 1 / -1; }

        .contact-label {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px; font-weight: 800; letter-spacing: 0.08em;
          color: #1e293b; text-transform: uppercase;
        }
        .contact-input,
        .contact-select,
        .contact-textarea {
          font-family: 'Inter', sans-serif;
          font-size: 13.5px; color: #0f172a; font-weight: 500;
          background: #ffffff; border: 1.5px solid #cbd5e1;
          border-radius: 12px;
          padding: 12px 14px;
          outline: none; width: 100%; box-sizing: border-box;
          transition: all 0.25s ease;
          appearance: none; -webkit-appearance: none;
        }
        .contact-input::placeholder,
        .contact-textarea::placeholder { color: #64748b; }
        .contact-input:focus,
        .contact-select:focus,
        .contact-textarea:focus {
          border-color: #F06543;
          background: #ffffff;
          box-shadow: 0 0 0 3px rgba(13, 148, 136, 0.2);
        }
        .contact-select {
          cursor: pointer;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%230f172a' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 14px center;
          padding-right: 36px;
        }
        .contact-select option { background: #ffffff; color: #0f172a; }
        .contact-textarea { resize: vertical; min-height: 100px; }

        .contact-submit-btn {
          width: 100%; margin-top: 6px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px; font-weight: 900; letter-spacing: 0.06em;
          color: #ffffff;
          background: linear-gradient(135deg, #002d62 0%, #F06543 100%);
          border: none; padding: 14px 28px; border-radius: 14px;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center; gap: 9px;
          transition: all 0.3s ease;
          box-shadow: 0 6px 24px rgba(13, 148, 136, 0.35);
        }
        .contact-submit-btn:hover {
          box-shadow: 0 10px 32px rgba(13, 148, 136, 0.55);
          transform: translateY(-2px);
        }

        /* Success state */
        .contact-success {
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          gap: 16px; padding: 48px 24px; text-align: center;
        }
        .contact-success-icon {
          width: 72px; height: 72px; border-radius: 50%;
          background: linear-gradient(135deg, rgba(33,230,193,0.2), rgba(22,217,255,0.15));
          border: 2px solid #F06543;
          display: flex; align-items: center; justify-content: center;
          animation: successPop 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        @keyframes successPop {
          0% { transform: scale(0.5); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .contact-success-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 20px; font-weight: 800; color: #0B2545;
        }
        .contact-success-text {
          font-family: 'Inter', sans-serif;
          font-size: 13px; color: '#64748b'; color: #64748b;
          line-height: 1.6; max-width: 320px;
        }
      `}</style>

      {/* Ambient glows */}
      <div className="contact-glow-tl" />
      <div className="contact-glow-br" />

      <div className="contact-container">

        {/* ── HEADER ── */}
        <div className="contact-header-sub">
          <Sparkles size={13} color="#F06543" />
          <span>CONTACT US</span>
        </div>
        <h2 className="contact-header-title">
          Plan Your Dream Andaman Trip
        </h2>
        <p className="contact-header-desc">
          Talk to our island travel experts. We'll craft a personalised itinerary just for you — completely free, with no obligations.
        </p>

        {/* ── 4-CARD CONTACT STRIP ── */}
        <div className="contact-cards-grid">
          {CONTACT_CARDS.map((card, i) => {
            const Icon = card.icon;
            const El = card.href ? 'a' : 'div';
            return (
              <El
                key={i}
                href={card.href || undefined}
                target={card.href ? '_blank' : undefined}
                rel={card.href ? 'noopener noreferrer' : undefined}
                className="contact-card"
                style={{ border: `1px solid ${card.border}` }}
              >
                <div className="contact-card-icon" style={{ background: card.bg }}>
                  <Icon size={22} color={card.color} />
                </div>
                <div>
                  <div className="contact-card-title" style={{ color: card.color }}>{card.title}</div>
                  <div className="contact-card-primary">{card.primary}</div>
                  <div className="contact-card-secondary">{card.secondary}</div>
                  <div className="contact-card-sub">
                    <Clock size={10} color={card.color} />
                    {card.sub}
                  </div>
                </div>
              </El>
            );
          })}
        </div>

        {/* ── BODY: LEFT INFO + RIGHT FORM ── */}
        <div className="contact-body-grid">

          {/* ── LEFT: Info Panel ── */}
          <div className="contact-info-panel">
            {/* Section label */}
            <div>
              <div style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 16, fontWeight: 800, color: '#334155', marginBottom: 4,
              }}>
                Andaman Trails HQ
              </div>
              <div style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 12, color: '#64748b', lineHeight: 1.6,
              }}>
                Our travel desk is staffed by Andaman-born experts who have personally explored every corner of these islands. We live here, we know it best.
              </div>
            </div>

            {/* Office Hours */}
            <div>
              <div style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 12.5, fontWeight: 800, letterSpacing: '0.12em',
                color: '#F06543', textTransform: 'uppercase',
                marginBottom: 12,
                display: 'flex', alignItems: 'center', gap: 6,
              }}>
                <Clock size={12} color="#F06543" /> OFFICE HOURS
              </div>
              <div className="contact-office-hours-row">
                {[
                  { day: 'Monday – Friday', time: '9:00 AM – 9:00 PM', active: true },
                  { day: 'Saturday', time: '9:00 AM – 7:00 PM', active: true },
                  { day: 'Sunday', time: '10:00 AM – 6:00 PM', active: true },
                  { day: 'Public Holidays', time: '11:00 AM – 4:00 PM', active: false },
                ].map((h, i) => (
                  <div key={i} className="contact-hours-item">
                    <span className="contact-hours-day">{h.day}</span>
                    <span className="contact-hours-time">
                      {h.active && <span className="contact-hours-dot" />}
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust points */}
            <div>
              <div style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 12.5, fontWeight: 800, letterSpacing: '0.12em',
                color: '#F06543', textTransform: 'uppercase',
                marginBottom: 12,
                display: 'flex', alignItems: 'center', gap: 6,
              }}>
                <Shield size={12} color="#F06543" /> WHY CONTACT US
              </div>
              <div className="contact-trust-row">
                {TRUST_POINTS.map(({ icon: Icon, text }, i) => (
                  <div key={i} className="contact-trust-item">
                    <Icon size={14} color="#F06543" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <div style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 12.5, fontWeight: 800, letterSpacing: '0.12em',
                color: '#64748b', textTransform: 'uppercase',
                marginBottom: 12,
              }}>
                FOLLOW US
              </div>
              <div className="contact-social-row">
                {[
                  { href: 'https://instagram.com/andamantrails', Icon: InstagramIcon, color: '#e1306c', bg: 'rgba(225,48,108,0.15)', border: 'rgba(225,48,108,0.3)' },
                  { href: 'https://facebook.com/andamantrails', Icon: FacebookIcon, color: '#1877f2', bg: 'rgba(24,119,242,0.15)', border: 'rgba(24,119,242,0.3)' },
                  { href: 'https://youtube.com/andamantrails', Icon: YoutubeIcon, color: '#ff0000', bg: 'rgba(255,0,0,0.12)', border: 'rgba(255,0,0,0.25)' },
                  { href: 'https://wa.me/919137835433',
                    Icon: () => (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="#25d366">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.557 4.118 1.529 5.845L.057 24l6.349-1.444A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.003-1.371l-.359-.214-3.721.847.876-3.607-.234-.37A9.818 9.818 0 0112 2.182c5.424 0 9.818 4.394 9.818 9.818 0 5.424-4.394 9.818-9.818 9.818z"/>
                      </svg>
                    ),
                    color: '#25d366', bg: 'rgba(37,211,102,0.15)', border: 'rgba(37,211,102,0.3)',
                  },
                ].map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-btn"
                    style={{ background: s.bg, borderColor: s.border }}
                    onMouseEnter={e => { e.currentTarget.style.background = s.bg.replace('0.15', '0.3').replace('0.12', '0.25'); }}
                    onMouseLeave={e => { e.currentTarget.style.background = s.bg; }}
                  >
                    <s.Icon size={18} color={s.color} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT: FORM PANEL ── */}
          <div className="contact-form-panel">
            {submitted ? (
              <div className="contact-success">
                <div className="contact-success-icon">
                  <CheckCircle2 size={36} color="#F06543" />
                </div>
                <div className="contact-success-title">Enquiry Received!</div>
                <p className="contact-success-text">
                  Thank you, <strong style={{ color: '#f5fafc' }}>{form.name || 'Traveler'}</strong>! Our island expert will call you within 2 hours with a personalised itinerary.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', tripType: '', travelDate: '', travelers: '', message: '' }); }}
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 11, fontWeight: 800, color: '#F06543',
                    background: 'rgba(33,230,193,0.1)',
                    border: '1px solid rgba(33,230,193,0.3)',
                    padding: '10px 22px', borderRadius: 12,
                    cursor: 'pointer', marginTop: 8,
                  }}
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <>
                <div className="contact-form-title">Send Your Trip Enquiry</div>
                <div className="contact-form-subtitle">
                  Fill in the details below — our experts will craft a personalised quote within 2 hours.
                </div>

                <form onSubmit={handleSubmit}>
                  {/* Row 1: Name + Phone */}
                  <div className="contact-form-row">
                    <div className="contact-form-group">
                      <label className="contact-label">Full Name *</label>
                      <input
                        type="text" name="name" required
                        value={form.name} onChange={handleChange}
                        placeholder="Your full name"
                        className="contact-input"
                      />
                    </div>
                    <div className="contact-form-group">
                      <label className="contact-label">Phone Number *</label>
                      <input
                        type="tel" name="phone" required
                        value={form.phone} onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="contact-input"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email + Trip Type */}
                  <div className="contact-form-row">
                    <div className="contact-form-group">
                      <label className="contact-label">Email Address *</label>
                      <input
                        type="email" name="email" required
                        value={form.email} onChange={handleChange}
                        placeholder="you@example.com"
                        className="contact-input"
                      />
                    </div>
                    <div className="contact-form-group">
                      <label className="contact-label">Trip Type</label>
                      <select
                        name="tripType"
                        value={form.tripType} onChange={handleChange}
                        className="contact-select"
                      >
                        <option value="">Select trip type</option>
                        {TRIP_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Date + Travelers */}
                  <div className="contact-form-row">
                    <div className="contact-form-group">
                      <label className="contact-label">Travel Date</label>
                      <input
                        type="date" name="travelDate"
                        value={form.travelDate} onChange={handleChange}
                        className="contact-input"
                        style={{ colorScheme: 'dark' }}
                      />
                    </div>
                    <div className="contact-form-group">
                      <label className="contact-label">No. of Travelers</label>
                      <select
                        name="travelers"
                        value={form.travelers} onChange={handleChange}
                        className="contact-select"
                      >
                        <option value="">Select count</option>
                        {['1 (Solo)', '2 (Couple)', '3–5 (Small Group)', '6–10 (Group)', '10+ (Large Group)'].map(t => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="contact-form-row" style={{ gridTemplateColumns: '1fr', marginBottom: 20 }}>
                    <div className="contact-form-group full">
                      <label className="contact-label">Your Message / Special Requests</label>
                      <textarea
                        name="message"
                        value={form.message} onChange={handleChange}
                        placeholder="Tell us about your dream trip — budget, interests, must-dos, dietary needs..."
                        className="contact-textarea"
                      />
                    </div>
                  </div>

                  {/* Privacy note */}
                  <div style={{
                    display: 'flex', alignItems: 'flex-start', gap: 8,
                    marginBottom: 18,
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 11, color: '#627d8a', lineHeight: 1.5,
                  }}>
                    <Shield size={13} color="#F06543" style={{ flexShrink: 0, marginTop: 1 }} />
                    Your information is 100% secure and never shared with third parties. We only use it to plan your trip.
                  </div>

                  {errorMessage && (
                    <div style={{
                      padding: '10px 14px',
                      background: '#FEE2E2',
                      border: '1px solid #FCA5A5',
                      borderRadius: 10,
                      color: '#DC2626',
                      fontSize: 12.5,
                      fontWeight: 600,
                      marginBottom: 14,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8
                    }}>
                      <AlertCircle size={16} />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <button type="submit" className="contact-submit-btn" disabled={submitting} style={{ opacity: submitting ? 0.7 : 1, cursor: submitting ? 'not-allowed' : 'pointer' }}>
                    {submitting ? (
                      <>
                        <div style={{ width: 16, height: 16, border: '2px solid #ffffff', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 0.6s linear infinite' }} />
                        <span>SENDING ENQUIRY...</span>
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        <span>SEND MY ENQUIRY</span>
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
