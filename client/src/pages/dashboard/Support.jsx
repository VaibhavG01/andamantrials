// src/pages/dashboard/Support.jsx
import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, Phone, Mail, MessageCircle, HelpCircle, 
  Clock, ShieldCheck, MapPin, Headphones, ExternalLink, CheckCircle2, Sparkles, Send
} from 'lucide-react';
import { settingService, DEFAULT_SITE_SETTINGS } from '../../api/settingService';

export default function SupportPage({ onBack }) {
  const [settings, setSettings] = useState(DEFAULT_SITE_SETTINGS);
  const [contactSubject, setContactSubject] = useState('');
  const [contactMsg, setContactMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    settingService.getSettings()
      .then(res => {
        if (res) setSettings(res);
      })
      .catch(() => {});
  }, []);

  const phoneDisplay = settings.sitePhone || '+91 91378 35433';
  const phoneRaw = (settings.sitePhone || '+91 91378 35433').replace(/[^0-9]/g, '');
  const emailDisplay = settings.siteEmail || 'info@andamantrails.com';
  const waRaw = settings.whatsappRaw || phoneRaw || '919137835433';

  const handleQuickInquiry = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setContactSubject('');
      setContactMsg('');
      setSubmitted(false);
    }, 4000);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      {/* Top Navigation */}
      <div>
        <button
          onClick={onBack}
          style={{
            fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 800,
            color: '#F06543', background: '#FFF0EB',
            border: '1px solid #FFD3C4', padding: '6px 14px',
            borderRadius: 20, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 6,
            marginBottom: 14,
            transition: 'all 0.2s ease'
          }}
        >
          <ArrowLeft size={12} /> Back to Dashboard
        </button>
      </div>

      {/* Main Support Container */}
      <div style={{ background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: 28, padding: '36px 32px', boxShadow: '0 10px 30px -5px rgba(11, 37, 69, 0.05)' }}>
        {/* Header */}
        <div style={{ marginBottom: 28 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 900, color: '#F06543', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 6 }}>
            <Headphones size={13} />
            24/7 DEDICATED TRAVEL CONCIERGE
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(28px, 3.5vw, 36px)', fontWeight: 700, color: '#0B2545', margin: '0 0 6px', lineHeight: 1.15 }}>
            Traveler Support Desk
          </h1>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#64748b', margin: 0, maxWidth: 640, lineHeight: 1.5 }}>
            Our Andaman-based support team is active 24/7 to assist you during your trip with ferries, resort concierges, permits, and activities.
          </p>
        </div>

        {/* 3 Primary Channel Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20, marginBottom: 32 }}>
          {/* 1. Phone Call */}
          <div style={{ background: '#f8fafc', border: '1.5px solid #e2e8f0', borderRadius: 22, padding: '24px 20px', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', transition: 'all 0.25s ease' }}>
            <div>
              <div style={{ width: 48, height: 48, borderRadius: 14, background: 'rgba(240, 101, 67, 0.1)', color: '#F06543', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 14px', border: '1px solid rgba(240, 101, 67, 0.2)' }}>
                <Phone size={22} />
              </div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 900, color: '#0B2545', marginBottom: 4 }}>
                Call Support
              </div>
              <a href={`tel:${phoneRaw}`} style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 15, color: '#F06543', fontWeight: 800, textDecoration: 'none', display: 'block', margin: '4px 0' }}>
                {phoneDisplay}
              </a>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: '#64748b', marginTop: 2 }}>
                24/7 Toll-Free
              </div>
            </div>

            <a
              href={`tel:${phoneRaw}`}
              style={{
                marginTop: 18,
                background: '#ffffff',
                border: '1.5px solid #F06543',
                color: '#F06543',
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 12,
                fontWeight: 800,
                padding: '9px 16px',
                borderRadius: 12,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 6,
                transition: 'all 0.2s ease'
              }}
            >
              <Phone size={13} />
              <span>Call Helpline</span>
            </a>
          </div>

          {/* 2. WhatsApp Desk */}
          <div style={{ background: 'linear-gradient(180deg, #f0fdf4 0%, #ffffff 100%)', border: '1.5px solid #bbf7d0', borderRadius: 22, padding: '24px 20px', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', transition: 'all 0.25s ease' }}>
            <div>
              <div style={{ width: 48, height: 48, borderRadius: 14, background: 'rgba(37, 211, 102, 0.15)', color: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 14px', border: '1px solid rgba(37, 211, 102, 0.3)' }}>
                <MessageCircle size={22} />
              </div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 900, color: '#0B2545', marginBottom: 4 }}>
                WhatsApp Desk
              </div>
              <a href={`https://wa.me/${waRaw}`} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 15, color: '#16a34a', fontWeight: 800, textDecoration: 'none', display: 'block', margin: '4px 0' }}>
                {phoneDisplay}
              </a>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: '#64748b', marginTop: 2 }}>
                Instant reply (avg 5 mins)
              </div>
            </div>

            <a
              href={`https://wa.me/${waRaw}?text=${encodeURIComponent('Hello Andaman Trails Concierge! I have a question regarding my trip.')}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                marginTop: 18,
                background: '#16a34a',
                border: 'none',
                color: '#ffffff',
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 12,
                fontWeight: 800,
                padding: '9px 16px',
                borderRadius: 12,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 6,
                boxShadow: '0 4px 12px rgba(22, 163, 74, 0.25)',
                transition: 'all 0.2s ease'
              }}
            >
              <MessageCircle size={13} />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* 3. Email Desk */}
          <div style={{ background: '#f8fafc', border: '1.5px solid #e2e8f0', borderRadius: 22, padding: '24px 20px', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', transition: 'all 0.25s ease' }}>
            <div>
              <div style={{ width: 48, height: 48, borderRadius: 14, background: 'rgba(240, 101, 67, 0.1)', color: '#F06543', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 14px', border: '1px solid rgba(240, 101, 67, 0.2)' }}>
                <Mail size={22} />
              </div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 900, color: '#0B2545', marginBottom: 4 }}>
                Email Desk
              </div>
              <a href={`mailto:${emailDisplay}`} style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, color: '#F06543', fontWeight: 800, textDecoration: 'none', display: 'block', margin: '4px 0', wordBreak: 'break-all' }}>
                {emailDisplay}
              </a>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: '#64748b', marginTop: 2 }}>
                Reply within 2 hours
              </div>
            </div>

            <a
              href={`mailto:${emailDisplay}?subject=${encodeURIComponent('Traveler Support Request - Andaman Trails')}`}
              style={{
                marginTop: 18,
                background: '#ffffff',
                border: '1.5px solid #F06543',
                color: '#F06543',
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 12,
                fontWeight: 800,
                padding: '9px 16px',
                borderRadius: 12,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 6,
                transition: 'all 0.2s ease'
              }}
            >
              <Mail size={13} />
              <span>Send Official Email</span>
            </a>
          </div>
        </div>

        {/* Additional Ground Assistance & Office Info */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 18 }}>
          {/* Ground Coordinator Desk */}
          <div style={{ padding: '20px 22px', background: '#f8fafc', borderRadius: 18, border: '1px solid #e2e8f0', display: 'flex', gap: 14 }}>
            <div style={{ width: 40, height: 40, borderRadius: 12, background: '#fee2e2', color: '#dc2626', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <MapPin size={20} />
            </div>
            <div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, fontWeight: 800, color: '#0B2545' }}>
                Island Jetty Coordinators
              </div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12.5, color: '#64748b', margin: '4px 0 0', lineHeight: 1.5 }}>
                Our on-ground coordinators are stationed at Phoenix Bay Jetty (Port Blair), Havelock Jetty No. 2, and Neil Jetty to assist with luggage tagging and boarding gates.
              </p>
            </div>
          </div>

          {/* Port Blair Office Address */}
          <div style={{ padding: '20px 22px', background: '#f8fafc', borderRadius: 18, border: '1px solid #e2e8f0', display: 'flex', gap: 14 }}>
            <div style={{ width: 40, height: 40, borderRadius: 12, background: '#dcfce7', color: '#15803d', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <ShieldCheck size={20} />
            </div>
            <div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, fontWeight: 800, color: '#0B2545' }}>
                Port Blair HQ & Office
              </div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12.5, color: '#64748b', margin: '4px 0 0', lineHeight: 1.5 }}>
                {settings.headOfficeAddress || 'Aberdeen Bazaar, Opposite Jetty Gate, Port Blair - 744101'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

