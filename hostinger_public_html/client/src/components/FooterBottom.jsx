import React, { useState, useEffect } from 'react';
import {
  Compass, MapPin, Phone, Mail, ArrowRight,
  ShieldCheck, Sparkles, Camera, Share2, Video,
  Globe, Award, CheckCircle2, Send, Clock,
  Lock, CreditCard, Star, ChevronRight, MessageCircle,
} from 'lucide-react';
import { settingService, DEFAULT_SITE_SETTINGS } from '../api/settingService';

// Custom inline SVG icons for social media to avoid import mismatches
const InstagramIcon = ({ size = 15, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);
const FacebookIcon = ({ size = 15, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
const YoutubeIcon = ({ size = 15, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#020b14"/>
  </svg>
);
const WhatsappIcon = ({ size = 15, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.557 4.118 1.529 5.845L.057 24l6.349-1.444A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.003-1.371l-.359-.214-3.721.847.876-3.607-.234-.37A9.818 9.818 0 0112 2.182c5.424 0 9.818 4.394 9.818 9.818 0 5.424-4.394 9.818-9.818 9.818z"/>
  </svg>
);

const TRUST_BADGES = [
  { title: 'Govt. Recognized DMC', sub: 'Ministry of Tourism India' },
  { title: 'IATO & ADTOI Member', sub: 'Verified Tour Operator' },
  { title: '4.9★ Google Reviews', sub: '1,200+ Verified Ratings' },
  { title: 'Safe Travel Guarantee', sub: '100% Insured Trips' },
];

export default function FooterBottom() {
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [settings, setSettings] = useState(DEFAULT_SITE_SETTINGS);

  useEffect(() => {
    settingService.getSettings()
      .then((data) => {
        if (data) setSettings(data);
      })
      .catch(() => {});
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setEmailInput('');
    }
  };

  const handleFooterLink = (e, path) => {
    if (path.startsWith('http') || path.startsWith('tel:') || path.startsWith('mailto:')) {
      return;
    }
    e.preventDefault();
    if (path.startsWith('#')) {
      const el = document.getElementById(path.substring(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.history.pushState({}, '', '/home' + path);
        window.dispatchEvent(new Event('popstate'));
      }
    } else {
      window.history.pushState({}, '', path);
      window.dispatchEvent(new Event('popstate'));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="master-footer">
      <style>{`
        .master-footer {
          width: 100%;
          background: #06182E;
          color: #cbd5e1;
          padding: 72px 0 32px;
          border-top: 2px solid rgba(240, 101, 67, 0.35);
          position: relative;
          overflow: hidden;
        }

        .footer-glow {
          position: absolute;
          top: 5%;
          left: 50%;
          transform: translateX(-50%);
          width: 950px;
          height: 380px;
          background: radial-gradient(ellipse at center, rgba(240, 101, 67, 0.15) 0%, rgba(11, 37, 69, 0.08) 50%, transparent 70%);
          pointer-events: none;
        }

        .footer-container {
          max-width: 1380px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
          z-index: 2;
        }

        /* ── TOP BANNER: NEWSLETTER & INSTANT CALL ── */
        .footer-top-card {
          background: rgba(11, 37, 69, 0.95);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1.5px solid rgba(240, 101, 67, 0.4);
          border-radius: 24px;
          padding: 36px 40px;
          margin-bottom: 56px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 28px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(240, 101, 67, 0.12);
        }
        @media (max-width: 768px) {
          .footer-top-card { padding: 24px; }
        }

        .footer-top-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(24px, 3vw, 34px);
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 6px;
          line-height: 1.15;
        }
        .footer-top-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: #94a3b8;
          font-weight: 500;
        }

        .footer-news-form {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }
        .footer-news-input {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: #ffffff;
          background: rgba(255, 255, 255, 0.08);
          border: 1.5px solid rgba(255, 255, 255, 0.2);
          padding: 12px 18px;
          border-radius: 14px;
          outline: none;
          min-width: 260px;
          transition: all 0.25s ease;
        }
        .footer-news-input::placeholder { color: #64748b; }
        .footer-news-input:focus {
          border-color: #F06543;
          background: rgba(255, 255, 255, 0.12);
          box-shadow: 0 0 0 3px rgba(240, 101, 67, 0.2);
        }

        .footer-news-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 0.05em;
          color: #ffffff;
          background: linear-gradient(135deg, #FF6B4A, #F06543);
          border: 1.5px solid rgba(255, 107, 74, 0.4);
          padding: 12px 24px;
          border-radius: 14px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 7px;
          transition: all 0.3s ease;
          box-shadow: 0 6px 20px rgba(240, 101, 67, 0.35);
        }
        .footer-news-btn:hover {
          transform: translateY(-2px);
          border-color: #FF6B4A;
          box-shadow: 0 10px 30px rgba(240, 101, 67, 0.55);
        }

        /* ── GOVT & TRUST BADGES BAR ── */
        .footer-badges-bar {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-bottom: 56px;
          padding-bottom: 40px;
          border-bottom: 1.5px solid rgba(255, 255, 255, 0.08);
        }
        @media (max-width: 900px) {
          .footer-badges-bar { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 520px) {
          .footer-badges-bar { grid-template-columns: 1fr; }
        }

        .footer-badge-box {
          display: flex;
          align-items: center;
          gap: 14px;
          background: rgba(255, 255, 255, 0.03);
          border: 1.5px solid rgba(255, 255, 255, 0.1);
          padding: 16px 20px;
          border-radius: 18px;
          transition: all 0.3s ease;
        }
        .footer-badge-box:hover {
          border-color: #F06543;
          background: rgba(240, 101, 67, 0.08);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
          transform: translateY(-3px);
        }
        .footer-badge-icon {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background: rgba(240, 101, 67, 0.15);
          border: 1.5px solid rgba(240, 101, 67, 0.4);
          color: #FF6B4A;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .footer-badge-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13.5px;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.25;
        }
        .footer-badge-sub {
          font-family: 'Inter', sans-serif;
          font-size: 12.5px;
          color: #94a3b8;
          margin-top: 2px;
          font-weight: 500;
        }

        /* ── MAIN 4-COLUMN GRID ── */
        .footer-main-grid {
          display: grid;
          grid-template-columns: 1.3fr 1fr 1fr 1.2fr;
          gap: 40px;
          margin-bottom: 56px;
        }
        @media (max-width: 1100px) {
          .footer-main-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .footer-main-grid { grid-template-columns: 1fr; }
        }

        /* Brand Column */
        .footer-brand-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 18px;
        }
        .footer-brand-name {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 19px;
          font-weight: 900;
          color: #ffffff;
          letter-spacing: 0.08em;
        }
        .footer-brand-tagline {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 12.5px;
          font-style: italic;
          color: #FF6B4A;
        }
        .footer-brand-desc {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: #94a3b8;
          line-height: 1.65;
          margin-bottom: 24px;
          font-weight: 400;
        }

        .footer-social-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .footer-social-pill {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 800;
          color: #cbd5e1;
          background: rgba(255, 255, 255, 0.05);
          border: 1.5px solid rgba(255, 255, 255, 0.12);
          padding: 7px 14px;
          border-radius: 20px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: all 0.25s ease;
        }
        .footer-social-pill:hover {
          color: #FF6B4A;
          border-color: #F06543;
          background: rgba(240, 101, 67, 0.15);
          transform: translateY(-2px);
        }

        /* Column Links */
        .footer-col-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 0.15em;
          color: #FF6B4A;
          text-transform: uppercase;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .footer-col-title.green { color: #FF6B4A; }
        .footer-col-title.gold { color: #FF8F6B; }

        .footer-links-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .footer-link-item a {
          font-family: 'Inter', sans-serif;
          font-size: 13.5px; color: #94a3b8; text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.25s ease;
          font-weight: 500;
        }
        .footer-link-item a:hover {
          color: #ffffff;
          transform: translateX(4px);
        }
        .footer-link-item a:hover svg {
          color: #F06543;
        }

        /* Contact Details List */
        .footer-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 16px;
        }
        .footer-contact-icon {
          width: 34px;
          height: 34px;
          border-radius: 10px;
          background: rgba(240, 101, 67, 0.15);
          border: 1px solid rgba(240, 101, 67, 0.3);
          color: #FF6B4A;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .footer-contact-label {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 800;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 2px;
        }
        .footer-contact-val {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: #e2e8f0;
          line-height: 1.4;
          font-weight: 500;
        }
        .footer-contact-val a {
          color: #FF6B4A;
          text-decoration: none;
        }

        .footer-status-pill {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11.5px;
          font-weight: 800;
          color: #FF6B4A;
          background: rgba(240, 101, 67, 0.12);
          border: 1px solid rgba(240, 101, 67, 0.3);
          padding: 6px 14px;
          border-radius: 20px;
          margin-top: 8px;
        }
        .footer-status-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #F06543;
          box-shadow: 0 0 8px #F06543;
        }

        /* ── BOTTOM COPYRIGHT & LEGAL BAR ── */
        .footer-bottom-bar {
          padding-top: 32px;
          border-top: 1.5px solid rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: #64748b;
        }
        .footer-legal-links {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
        }
        .footer-legal-links a {
          color: #94a3b8;
          text-decoration: none;
          transition: color 0.2s ease;
          font-weight: 500;
        }
        .footer-legal-links a:hover {
          color: #FF6B4A;
        }

        .footer-payment-icons {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .footer-pay-tag {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 11.5px; font-weight: 800; color: #cbd5e1;
          background: rgba(255, 255, 255, 0.05);
          border: 1.5px solid rgba(255, 255, 255, 0.12);
          padding: 5px 12px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          gap: 5px;
        }
      `}</style>

      {/* Background Glow */}
      <div className="footer-glow" />

      <div className="footer-container">

        {/* ── TOP BANNER: NEWSLETTER & VIP SUPPORT ── */}
        <div className="footer-top-card">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 7, fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 800, color: '#FF6B4A', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 4 }}>
              <Sparkles size={13} color="#FF6B4A" />
              STAY INSPIRED
            </div>
            <h3 className="footer-top-title">Receive Secret Andaman Deals & Guides</h3>
            <p className="footer-top-subtitle">Join 120,000+ travelers getting weekly island insights and early access packages.</p>
          </div>

          <div>
            {subscribed ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 800, color: '#FF6B4A', background: 'rgba(240, 101, 67, 0.15)', border: '1px solid rgba(240, 101, 67, 0.35)', padding: '12px 24px', borderRadius: 14 }}>
                <CheckCircle2 size={18} color="#FF6B4A" />
                <span>YOU'RE SUBSCRIBED! WELCOME ABOARD.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="footer-news-form">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="footer-news-input"
                />
                <button type="submit" className="footer-news-btn">
                  <Send size={14} />
                  <span>SUBSCRIBE</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* ── GOVT RECOGNITION & TRUST BADGES ── */}
        <div className="footer-badges-bar">
          {TRUST_BADGES.map((b, i) => (
            <div key={i} className="footer-badge-box">
              <div className="footer-badge-icon">
                <Award size={20} />
              </div>
              <div>
                <div className="footer-badge-title">{b.title}</div>
                <div className="footer-badge-sub">{b.sub}</div>
              </div>
            </div>
          ))}
        </div>

        {/* ── MAIN 4-COLUMN GRID ── */}
        <div className="footer-main-grid">

          {/* COLUMN 1: BRAND & SOCIALS */}
          <div>
            <div className="footer-brand-logo">
              <div style={{ width: 44, height: 44, borderRadius: 12, background: '#ffffff', padding: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 14px rgba(0, 45, 98, 0.3), 0 0 16px rgba(240, 101, 67, 0.4)', border: '1.5px solid rgba(240, 101, 67, 0.4)' }}>
                <img src="/logo.png" alt="Andaman Trails Logo" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: 8 }} />
              </div>
              <div>
                <div className="footer-brand-name">
                  <span>{settings.siteName?.split(' ')[0] || 'ANDAMAN'} </span>
                  <span style={{ color: '#F06543' }}>{settings.siteName?.split(' ').slice(1).join(' ') || 'TRAILS'}</span>
                </div>
                <div className="footer-brand-tagline" style={{ letterSpacing: '0.14em', textTransform: 'uppercase', fontSize: '12px', fontWeight: 800, color: '#FF6B4A' }}>
                  {settings.siteTagline || 'MEMORIES THAT LAST A LIFETIME'}
                </div>
              </div>
            </div>

            <p className="footer-brand-desc">
              {settings.siteDescription || 'The premier digital travel platform for the Andaman & Nicobar Archipelago. Crafting unforgettable tropical holidays, ferry bookings, water sports, and luxury resort stays.'}
            </p>

            <div className="footer-social-pills">
              <a href={settings.instagram || 'https://instagram.com/andamantrails'} target="_blank" rel="noopener noreferrer" className="footer-social-pill">
                <InstagramIcon size={14} color="#e1306c" />
                <span>Instagram</span>
              </a>
              <a href={settings.facebook || 'https://facebook.com/andamantrails'} target="_blank" rel="noopener noreferrer" className="footer-social-pill">
                <FacebookIcon size={14} color="#1877f2" />
                <span>Facebook</span>
              </a>
              <a href={settings.youtube || 'https://youtube.com/andamantrails'} target="_blank" rel="noopener noreferrer" className="footer-social-pill">
                <YoutubeIcon size={14} color="#ff0000" />
                <span>YouTube</span>
              </a>
              <a href={`https://wa.me/${(settings.whatsappRaw || (settings.whatsapp ? settings.whatsapp.replace(/\D/g, '') : '919137835433'))}`} target="_blank" rel="noopener noreferrer" className="footer-social-pill">
                <WhatsappIcon size={14} color="#25d366" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* COLUMN 2: QUICK EXPLORE */}
          <div>
            <h4 className="footer-col-title">
              <Compass size={14} color="#FF6B4A" />
              EXPLORE PLATFORM
            </h4>
            <ul className="footer-links-list">
              {[
                { label: '3D Interactive Map', href: '/' },
                { label: 'Popular Packages', href: '/packages' },
                { label: 'Island Destinations', href: '/destinations' },
                { label: 'Places To Visit', href: '#places-section' },
                { label: 'Activities & Scuba', href: '/activities' },
                { label: 'Ferries & Cruises', href: '/ferries' },
                { label: 'Photo Gallery', href: '/gallery' },
              ].map((link, i) => (
                <li key={i} className="footer-link-item">
                  <a href={link.href} onClick={(e) => handleFooterLink(e, link.href)}>
                    <ChevronRight size={12} color="#FF6B4A" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: POPULAR DESTINATIONS */}
          <div>
            <h4 className="footer-col-title green">
              <MapPin size={14} color="#FF6B4A" />
              ISLAND GATEWAYS
            </h4>
            <ul className="footer-links-list">
              {[
                { label: 'Havelock Island (Swaraj Dweep)', href: '/destination-details?id=havelock' },
                { label: 'Neil Island (Shaheed Dweep)', href: '/destination-details?id=neil' },
                { label: 'Port Blair Capital Gateway', href: '/destination-details?id=port-blair' },
                { label: 'Baratang Limestone Caves', href: '/destination-details?id=baratang' },
                { label: 'Radhanagar Beach Sunset', href: '#places-section' },
                { label: 'Jolly Buoy Marine Reserve', href: '/destination-details?id=jolly-buoy' },
                { label: 'Elephant Beach Snorkeling', href: '/activities' },
              ].map((dest, i) => (
                <li key={i} className="footer-link-item">
                  <a href={dest.href} onClick={(e) => handleFooterLink(e, dest.href)}>
                    <ChevronRight size={12} color="#FF6B4A" />
                    <span>{dest.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: PORT BLAIR HQ & HELPLINE */}
          <div>
            <h4 className="footer-col-title gold">
              <Phone size={14} color="#FF8F6B" />
              HEAD OFFICE & SUPPORT
            </h4>

            <div className="footer-contact-item">
              <div className="footer-contact-icon">
                <MapPin size={16} color="#FF6B4A" />
              </div>
              <div>
                <div className="footer-contact-label">{settings.headOfficeLabel || 'Port Blair HQ'}</div>
                <div className="footer-contact-val">{settings.headOfficeAddress || 'Aberdeen Bazaar, Opposite Jetty Gate, Port Blair - 744101'}</div>
              </div>
            </div>

            <div className="footer-contact-item">
              <div className="footer-contact-icon" style={{ background: 'rgba(240, 101, 67, 0.15)', color: '#FF6B4A' }}>
                <Phone size={16} color="#FF6B4A" />
              </div>
              <div>
                <div className="footer-contact-label">{settings.helplineLabel || '24/7 Helpline & WhatsApp'}</div>
                <div className="footer-contact-val">
                  <a href={`tel:${(settings.sitePhone || '+91 91378 35433').replace(/\s+/g, '')}`}>{settings.sitePhone || '+91 91378 35433'}</a>
                </div>
              </div>
            </div>

            <div className="footer-contact-item">
              <div className="footer-contact-icon" style={{ background: 'rgba(240, 101, 67, 0.15)', color: '#FF6B4A' }}>
                <Mail size={16} color="#FF6B4A" />
              </div>
              <div>
                <div className="footer-contact-label">{settings.inquiryEmailLabel || 'Official Inquiries'}</div>
                <div className="footer-contact-val">
                  <a href={`mailto:${settings.siteEmail || 'info@andamantrails.com'}`}>{settings.siteEmail || 'info@andamantrails.com'}</a>
                </div>
              </div>
            </div>

            <div className="footer-status-pill">
              <span className="footer-status-dot" />
              <span>{settings.supportHours || 'SUPPORT DESK ONLINE (9 AM - 9 PM)'}</span>
            </div>
          </div>

        </div>

        {/* ── BOTTOM COPYRIGHT & LEGAL BAR ── */}
        <div className="footer-bottom-bar">
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <ShieldCheck size={14} color="#FF6B4A" />
            <span>© {new Date().getFullYear()} <strong style={{ color: '#FAF4EE' }}>Andaman Trails</strong>. All Rights Reserved. Govt. Recognized DMC.</span>
          </div>

          <div className="footer-legal-links">
            <a href="/privacy" onClick={(e) => handleFooterLink(e, '/privacy')}>Privacy Policy</a>
            <a href="/terms" onClick={(e) => handleFooterLink(e, '/terms')}>Terms of Service</a>
            <a href="/refund" onClick={(e) => handleFooterLink(e, '/refund')}>Refund Policy</a>
            <a href="/faq" onClick={(e) => handleFooterLink(e, '/faq')}>FAQ</a>
            <a href="/contact" onClick={(e) => handleFooterLink(e, '/contact')}>Contact Us</a>
          </div>

          <div className="footer-payment-icons">
            <span className="footer-pay-tag">
              <Lock size={10} color="#FF6B4A" /> 256-BIT SSL
            </span>
            <span className="footer-pay-tag">
              <CreditCard size={10} color="#FF6B4A" /> UPI / CARDS
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
