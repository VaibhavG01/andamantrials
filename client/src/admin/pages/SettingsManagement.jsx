import React, { useState, useEffect } from 'react';
import {
  Save, Check, Building, Phone, Mail, Clock, Globe,
  Share2, ShieldCheck, Sparkles, MessageCircle, AlertCircle, Award, Users, MapPin, Compass
} from 'lucide-react';
import adminService from '../services/adminService';

const DEFAULT_SETTINGS = {
  siteName: 'ANDAMAN TRAILS',
  siteTagline: 'MEMORIES THAT LAST A LIFETIME',
  siteDescription: 'The premier digital travel platform for the Andaman & Nicobar Archipelago. Crafting unforgettable tropical holidays, ferry bookings, water sports, and luxury resort stays.',
  headOfficeLabel: 'Port Blair HQ',
  headOfficeAddress: 'Aberdeen Bazaar, Opposite Jetty Gate, Port Blair - 744101',
  sitePhone: '+91 91378 35433',
  helplineLabel: '24/7 Helpline & WhatsApp',
  siteEmail: 'info@andamantrails.com',
  inquiryEmailLabel: 'Official Inquiries',
  supportHours: 'SUPPORT DESK ONLINE (9 AM - 9 PM)',
  whatsapp: '+91 91378 35433',
  instagram: 'https://instagram.com/andamantrails',
  facebook: 'https://facebook.com/andamantrails',
  youtube: 'https://youtube.com/andamantrails',
  metaTitle: 'Andaman Trails — Ocean Ferries, Luxury Resorts & Cruises',
  metaDesc: 'Book high-speed catamaran ferries, beachfront resorts, scuba diving, and luxury island charters in Andaman.',
  maintenanceMode: false,

  // Impact & Trust Statistics
  statTravelersValue: '50,000+',
  statTravelersLabel: 'HAPPY TRAVELERS',
  statTravelersSub: 'Hosted across 40+ countries',

  statDestinationsValue: '6+',
  statDestinationsLabel: 'ISLAND DESTINATIONS',
  statDestinationsSub: 'Port Blair to Diglipur',

  statTrailsValue: '7+',
  statTrailsLabel: 'CURATED TRAILS',
  statTrailsSub: 'Scuba, ferries & resorts',

  statYearsValue: '12+',
  statYearsLabel: 'YEARS OF EXCELLENCE',
  statYearsSub: 'Native island leadership',
};

export default function SettingsManagement() {
  const [settings, setSettings] = useState(DEFAULT_SETTINGS);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Fetch settings from server on mount
  useEffect(() => {
    adminService.getSettings()
      .then((res) => {
        if (res && res.data) {
          setSettings({
            ...DEFAULT_SETTINGS,
            ...(res.data.data || res.data),
          });
        }
      })
      .catch((err) => {
        console.warn('Could not load server settings, using defaults:', err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleChange = (field, val) => {
    setSettings(prev => ({
      ...prev,
      [field]: val,
    }));
  };

  const handleSave = () => {
    setSaving(true);
    setErrorMessage('');
    adminService.updateSettings(settings)
      .then(() => {
        setSaved(true);
        setTimeout(() => setSaved(false), 2500);
      })
      .catch((err) => {
        setErrorMessage(err?.response?.data?.message || 'Failed to save settings. Please try again.');
      })
      .finally(() => {
        setSaving(false);
      });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 28, maxWidth: 1040, margin: '0 auto', paddingBottom: 60 }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
        <div>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 900, color: '#F06543', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            PLATFORM CONFIGURATION & FOOTER
          </div>
          <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 26, fontWeight: 900, color: '#0B2545', margin: '4px 0 0' }}>
            Site Identity, Statistics & Office Settings
          </h1>
        </div>

        <button
          onClick={handleSave}
          disabled={saving || loading}
          style={{
            background: saved ? '#059669' : 'linear-gradient(135deg, #FF6B4A, #F06543)',
            border: 'none',
            color: '#ffffff',
            padding: '12px 28px',
            borderRadius: 16,
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 12.5,
            fontWeight: 900,
            letterSpacing: '0.06em',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            boxShadow: '0 6px 20px rgba(240, 101, 67, 0.35)',
            transition: 'all 0.2s ease',
            opacity: saving ? 0.7 : 1,
          }}
        >
          {saved ? <Check size={16} /> : <Save size={16} />}
          <span>{saving ? 'SAVING CHANGES...' : saved ? 'CHANGES SAVED!' : 'SAVE ALL SETTINGS'}</span>
        </button>
      </div>

      {/* Error / Success Feedback */}
      {errorMessage && (
        <div style={{ background: '#FEF2F2', border: '1.5px solid #F87171', color: '#B91C1C', padding: '14px 20px', borderRadius: 16, fontSize: 13, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 10 }}>
          <AlertCircle size={18} />
          <span>{errorMessage}</span>
        </div>
      )}

      {saved && (
        <div style={{ background: '#ECFDF5', border: '1.5px solid #34D399', color: '#065F46', padding: '14px 20px', borderRadius: 16, fontSize: 13, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 10 }}>
          <Check size={18} color="#059669" />
          <span>Site settings updated live across Footer, Contact Map & About Pages!</span>
        </div>
      )}

      {/* 1. BRAND & IDENTITY */}
      <div style={{ background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: 22, padding: 28, boxShadow: '0 4px 18px rgba(0,0,0,0.03)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
          <Building size={18} color="#F06543" />
          <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 900, color: '#0B2545', margin: 0 }}>
            1. Brand Identity & Footer Brand Column
          </h3>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 18 }}>
          <div>
            <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748b', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 6 }}>
              BRAND NAME
            </label>
            <input
              type="text"
              value={settings.siteName}
              onChange={(e) => handleChange('siteName', e.target.value)}
              placeholder="ANDAMAN TRAILS"
              style={{ width: '100%', background: '#FAF4EE', border: '1.5px solid #EBDED2', borderRadius: 12, padding: '11px 14px', color: '#0B2545', fontSize: 13.5, fontWeight: 700, outline: 'none', boxSizing: 'border-box' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748b', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 6 }}>
              BRAND TAGLINE
            </label>
            <input
              type="text"
              value={settings.siteTagline}
              onChange={(e) => handleChange('siteTagline', e.target.value)}
              placeholder="MEMORIES THAT LAST A LIFETIME"
              style={{ width: '100%', background: '#FAF4EE', border: '1.5px solid #EBDED2', borderRadius: 12, padding: '11px 14px', color: '#0B2545', fontSize: 13.5, fontWeight: 700, outline: 'none', boxSizing: 'border-box' }}
            />
          </div>

          <div style={{ gridColumn: '1 / -1' }}>
            <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748b', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 6 }}>
              BRAND ABOUT DESCRIPTION (FOOTER & SITE INTRO)
            </label>
            <textarea
              rows={3}
              value={settings.siteDescription}
              onChange={(e) => handleChange('siteDescription', e.target.value)}
              placeholder="The premier digital travel platform for the Andaman & Nicobar Archipelago..."
              style={{ width: '100%', background: '#FAF4EE', border: '1.5px solid #EBDED2', borderRadius: 12, padding: '11px 14px', color: '#0B2545', fontSize: 13.5, fontWeight: 500, outline: 'none', boxSizing: 'border-box', lineHeight: 1.6 }}
            />
          </div>
        </div>
      </div>

      {/* 2. PLATFORM IMPACT & TRUST STATISTICS */}
      <div style={{ background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: 22, padding: 28, boxShadow: '0 4px 18px rgba(0,0,0,0.03)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
          <Award size={18} color="#F06543" />
          <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 900, color: '#0B2545', margin: 0 }}>
            2. Impact & Trust Statistics (About Us & Counter Metrics)
          </h3>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: 20 }}>
          {/* Stat 1 */}
          <div style={{ background: '#FAF4EE', padding: 18, borderRadius: 16, border: '1.5px solid #EBDED2' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10, color: '#F06543', fontWeight: 800, fontSize: 12, fontFamily: "'Space Grotesk', sans-serif" }}>
              <Users size={14} />
              <span>STATISTIC #1 (TRAVELERS)</span>
            </div>
            <div style={{ marginBottom: 10 }}>
              <label style={{ display: 'block', fontSize: 10.5, fontWeight: 800, color: '#64748b', marginBottom: 4 }}>VALUE / NUMBER</label>
              <input
                type="text"
                value={settings.statTravelersValue}
                onChange={(e) => handleChange('statTravelersValue', e.target.value)}
                placeholder="50,000+"
                style={{ width: '100%', background: '#ffffff', border: '1px solid #CBD5E1', borderRadius: 8, padding: '8px 10px', color: '#0B2545', fontSize: 13, fontWeight: 800, outline: 'none', boxSizing: 'border-box' }}
              />
            </div>
            <div style={{ marginBottom: 10 }}>
              <label style={{ display: 'block', fontSize: 10.5, fontWeight: 800, color: '#64748b', marginBottom: 4 }}>LABEL</label>
              <input
                type="text"
                value={settings.statTravelersLabel}
                onChange={(e) => handleChange('statTravelersLabel', e.target.value)}
                placeholder="HAPPY TRAVELERS"
                style={{ width: '100%', background: '#ffffff', border: '1px solid #CBD5E1', borderRadius: 8, padding: '8px 10px', color: '#0B2545', fontSize: 12, fontWeight: 700, outline: 'none', boxSizing: 'border-box' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: 10.5, fontWeight: 800, color: '#64748b', marginBottom: 4 }}>SUBTITLE</label>
              <input
                type="text"
                value={settings.statTravelersSub}
                onChange={(e) => handleChange('statTravelersSub', e.target.value)}
                placeholder="Hosted across 40+ countries"
                style={{ width: '100%', background: '#ffffff', border: '1px solid #CBD5E1', borderRadius: 8, padding: '8px 10px', color: '#64748B', fontSize: 11.5, outline: 'none', boxSizing: 'border-box' }}
              />
            </div>
          </div>

          {/* Stat 2 */}
          <div style={{ background: '#FAF4EE', padding: 18, borderRadius: 16, border: '1.5px solid #EBDED2' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10, color: '#F06543', fontWeight: 800, fontSize: 12, fontFamily: "'Space Grotesk', sans-serif" }}>
              <MapPin size={14} />
              <span>STATISTIC #2 (DESTINATIONS)</span>
            </div>
            <div style={{ marginBottom: 10 }}>
              <label style={{ display: 'block', fontSize: 10.5, fontWeight: 800, color: '#64748b', marginBottom: 4 }}>VALUE / NUMBER</label>
              <input
                type="text"
                value={settings.statDestinationsValue}
                onChange={(e) => handleChange('statDestinationsValue', e.target.value)}
                placeholder="6+"
                style={{ width: '100%', background: '#ffffff', border: '1px solid #CBD5E1', borderRadius: 8, padding: '8px 10px', color: '#0B2545', fontSize: 13, fontWeight: 800, outline: 'none', boxSizing: 'border-box' }}
              />
            </div>
            <div style={{ marginBottom: 10 }}>
              <label style={{ display: 'block', fontSize: 10.5, fontWeight: 800, color: '#64748b', marginBottom: 4 }}>LABEL</label>
              <input
                type="text"
                value={settings.statDestinationsLabel}
                onChange={(e) => handleChange('statDestinationsLabel', e.target.value)}
                placeholder="ISLAND DESTINATIONS"
                style={{ width: '100%', background: '#ffffff', border: '1px solid #CBD5E1', borderRadius: 8, padding: '8px 10px', color: '#0B2545', fontSize: 12, fontWeight: 700, outline: 'none', boxSizing: 'border-box' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: 10.5, fontWeight: 800, color: '#64748b', marginBottom: 4 }}>SUBTITLE</label>
              <input
                type="text"
                value={settings.statDestinationsSub}
                onChange={(e) => handleChange('statDestinationsSub', e.target.value)}
                placeholder="Port Blair to Diglipur"
                style={{ width: '100%', background: '#ffffff', border: '1px solid #CBD5E1', borderRadius: 8, padding: '8px 10px', color: '#64748B', fontSize: 11.5, outline: 'none', boxSizing: 'border-box' }}
              />
            </div>
          </div>

          {/* Stat 3 */}
          <div style={{ background: '#FAF4EE', padding: 18, borderRadius: 16, border: '1.5px solid #EBDED2' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10, color: '#F06543', fontWeight: 800, fontSize: 12, fontFamily: "'Space Grotesk', sans-serif" }}>
              <Compass size={14} />
              <span>STATISTIC #3 (TRAILS)</span>
            </div>
            <div style={{ marginBottom: 10 }}>
              <label style={{ display: 'block', fontSize: 10.5, fontWeight: 800, color: '#64748b', marginBottom: 4 }}>VALUE / NUMBER</label>
              <input
                type="text"
                value={settings.statTrailsValue}
                onChange={(e) => handleChange('statTrailsValue', e.target.value)}
                placeholder="7+"
                style={{ width: '100%', background: '#ffffff', border: '1px solid #CBD5E1', borderRadius: 8, padding: '8px 10px', color: '#0B2545', fontSize: 13, fontWeight: 800, outline: 'none', boxSizing: 'border-box' }}
              />
            </div>
            <div style={{ marginBottom: 10 }}>
              <label style={{ display: 'block', fontSize: 10.5, fontWeight: 800, color: '#64748b', marginBottom: 4 }}>LABEL</label>
              <input
                type="text"
                value={settings.statTrailsLabel}
                onChange={(e) => handleChange('statTrailsLabel', e.target.value)}
                placeholder="CURATED TRAILS"
                style={{ width: '100%', background: '#ffffff', border: '1px solid #CBD5E1', borderRadius: 8, padding: '8px 10px', color: '#0B2545', fontSize: 12, fontWeight: 700, outline: 'none', boxSizing: 'border-box' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: 10.5, fontWeight: 800, color: '#64748b', marginBottom: 4 }}>SUBTITLE</label>
              <input
                type="text"
                value={settings.statTrailsSub}
                onChange={(e) => handleChange('statTrailsSub', e.target.value)}
                placeholder="Scuba, ferries & resorts"
                style={{ width: '100%', background: '#ffffff', border: '1px solid #CBD5E1', borderRadius: 8, padding: '8px 10px', color: '#64748B', fontSize: 11.5, outline: 'none', boxSizing: 'border-box' }}
              />
            </div>
          </div>

          {/* Stat 4 */}
          <div style={{ background: '#FAF4EE', padding: 18, borderRadius: 16, border: '1.5px solid #EBDED2' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10, color: '#F06543', fontWeight: 800, fontSize: 12, fontFamily: "'Space Grotesk', sans-serif" }}>
              <Sparkles size={14} />
              <span>STATISTIC #4 (YEARS)</span>
            </div>
            <div style={{ marginBottom: 10 }}>
              <label style={{ display: 'block', fontSize: 10.5, fontWeight: 800, color: '#64748b', marginBottom: 4 }}>VALUE / NUMBER</label>
              <input
                type="text"
                value={settings.statYearsValue}
                onChange={(e) => handleChange('statYearsValue', e.target.value)}
                placeholder="12+"
                style={{ width: '100%', background: '#ffffff', border: '1px solid #CBD5E1', borderRadius: 8, padding: '8px 10px', color: '#0B2545', fontSize: 13, fontWeight: 800, outline: 'none', boxSizing: 'border-box' }}
              />
            </div>
            <div style={{ marginBottom: 10 }}>
              <label style={{ display: 'block', fontSize: 10.5, fontWeight: 800, color: '#64748b', marginBottom: 4 }}>LABEL</label>
              <input
                type="text"
                value={settings.statYearsLabel}
                onChange={(e) => handleChange('statYearsLabel', e.target.value)}
                placeholder="YEARS OF EXCELLENCE"
                style={{ width: '100%', background: '#ffffff', border: '1px solid #CBD5E1', borderRadius: 8, padding: '8px 10px', color: '#0B2545', fontSize: 12, fontWeight: 700, outline: 'none', boxSizing: 'border-box' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: 10.5, fontWeight: 800, color: '#64748b', marginBottom: 4 }}>SUBTITLE</label>
              <input
                type="text"
                value={settings.statYearsSub}
                onChange={(e) => handleChange('statYearsSub', e.target.value)}
                placeholder="Native island leadership"
                style={{ width: '100%', background: '#ffffff', border: '1px solid #CBD5E1', borderRadius: 8, padding: '8px 10px', color: '#64748B', fontSize: 11.5, outline: 'none', boxSizing: 'border-box' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* 3. HEAD OFFICE & SUPPORT HELPLINES */}
      <div style={{ background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: 22, padding: 28, boxShadow: '0 4px 18px rgba(0,0,0,0.03)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
          <Phone size={18} color="#F06543" />
          <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 900, color: '#0B2545', margin: 0 }}>
            3. Head Office & Contact Helplines
          </h3>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 18 }}>
          <div>
            <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748b', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 6 }}>
              HEAD OFFICE LABEL
            </label>
            <input
              type="text"
              value={settings.headOfficeLabel}
              onChange={(e) => handleChange('headOfficeLabel', e.target.value)}
              placeholder="Port Blair HQ"
              style={{ width: '100%', background: '#FAF4EE', border: '1.5px solid #EBDED2', borderRadius: 12, padding: '11px 14px', color: '#0B2545', fontSize: 13.5, fontWeight: 700, outline: 'none', boxSizing: 'border-box' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748b', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 6 }}>
              HEAD OFFICE POSTAL ADDRESS
            </label>
            <input
              type="text"
              value={settings.headOfficeAddress}
              onChange={(e) => handleChange('headOfficeAddress', e.target.value)}
              placeholder="Aberdeen Bazaar, Opposite Jetty Gate, Port Blair - 744101"
              style={{ width: '100%', background: '#FAF4EE', border: '1.5px solid #EBDED2', borderRadius: 12, padding: '11px 14px', color: '#0B2545', fontSize: 13.5, fontWeight: 700, outline: 'none', boxSizing: 'border-box' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748b', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 6 }}>
              24/7 HELPLINE NUMBER
            </label>
            <input
              type="text"
              value={settings.sitePhone}
              onChange={(e) => handleChange('sitePhone', e.target.value)}
              placeholder="+91 91378 35433"
              style={{ width: '100%', background: '#FAF4EE', border: '1.5px solid #EBDED2', borderRadius: 12, padding: '11px 14px', color: '#0B2545', fontSize: 13.5, fontWeight: 700, outline: 'none', boxSizing: 'border-box' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748b', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 6 }}>
              OFFICIAL INQUIRIES EMAIL ADDRESS
            </label>
            <input
              type="email"
              value={settings.siteEmail}
              onChange={(e) => handleChange('siteEmail', e.target.value)}
              placeholder="info@andamantrails.com"
              style={{ width: '100%', background: '#FAF4EE', border: '1.5px solid #EBDED2', borderRadius: 12, padding: '11px 14px', color: '#0B2545', fontSize: 13.5, fontWeight: 700, outline: 'none', boxSizing: 'border-box' }}
            />
          </div>

          <div style={{ gridColumn: '1 / -1' }}>
            <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748b', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 6 }}>
              SUPPORT DESK STATUS BADGE TEXT & TIMINGS
            </label>
            <input
              type="text"
              value={settings.supportHours}
              onChange={(e) => handleChange('supportHours', e.target.value)}
              placeholder="SUPPORT DESK ONLINE (9 AM - 9 PM)"
              style={{ width: '100%', background: '#FAF4EE', border: '1.5px solid #EBDED2', borderRadius: 12, padding: '11px 14px', color: '#0B2545', fontSize: 13.5, fontWeight: 700, outline: 'none', boxSizing: 'border-box' }}
            />
          </div>
        </div>
      </div>

      {/* 4. SOCIAL MEDIA CHANNELS */}
      <div style={{ background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: 22, padding: 28, boxShadow: '0 4px 18px rgba(0,0,0,0.03)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
          <Share2 size={18} color="#F06543" />
          <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 900, color: '#0B2545', margin: 0 }}>
            4. Social Media & Messaging Links
          </h3>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 18 }}>
          <div>
            <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748b', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 6 }}>
              INSTAGRAM PROFILE URL
            </label>
            <input
              type="text"
              value={settings.instagram}
              onChange={(e) => handleChange('instagram', e.target.value)}
              placeholder="https://instagram.com/andamantrails"
              style={{ width: '100%', background: '#FAF4EE', border: '1.5px solid #EBDED2', borderRadius: 12, padding: '11px 14px', color: '#0B2545', fontSize: 13, outline: 'none', boxSizing: 'border-box' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748b', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 6 }}>
              FACEBOOK PAGE URL
            </label>
            <input
              type="text"
              value={settings.facebook}
              onChange={(e) => handleChange('facebook', e.target.value)}
              placeholder="https://facebook.com/andamantrails"
              style={{ width: '100%', background: '#FAF4EE', border: '1.5px solid #EBDED2', borderRadius: 12, padding: '11px 14px', color: '#0B2545', fontSize: 13, outline: 'none', boxSizing: 'border-box' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748b', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 6 }}>
              YOUTUBE CHANNEL URL
            </label>
            <input
              type="text"
              value={settings.youtube}
              onChange={(e) => handleChange('youtube', e.target.value)}
              placeholder="https://youtube.com/andamantrails"
              style={{ width: '100%', background: '#FAF4EE', border: '1.5px solid #EBDED2', borderRadius: 12, padding: '11px 14px', color: '#0B2545', fontSize: 13, outline: 'none', boxSizing: 'border-box' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748b', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 6 }}>
              WHATSAPP NUMBER OR LINK
            </label>
            <input
              type="text"
              value={settings.whatsapp}
              onChange={(e) => handleChange('whatsapp', e.target.value)}
              placeholder="+91 91378 35433"
              style={{ width: '100%', background: '#FAF4EE', border: '1.5px solid #EBDED2', borderRadius: 12, padding: '11px 14px', color: '#0B2545', fontSize: 13, outline: 'none', boxSizing: 'border-box' }}
            />
          </div>
        </div>
      </div>

      {/* 5. SEO & PLATFORM CONTROLS */}
      <div style={{ background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: 22, padding: 28, boxShadow: '0 4px 18px rgba(0,0,0,0.03)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
          <Globe size={18} color="#F06543" />
          <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 900, color: '#0B2545', margin: 0 }}>
            5. SEO Meta Tags & System Controls
          </h3>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 18 }}>
          <div>
            <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748b', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 6 }}>
              DEFAULT META TITLE
            </label>
            <input
              type="text"
              value={settings.metaTitle}
              onChange={(e) => handleChange('metaTitle', e.target.value)}
              style={{ width: '100%', background: '#FAF4EE', border: '1.5px solid #EBDED2', borderRadius: 12, padding: '11px 14px', color: '#0B2545', fontSize: 13, outline: 'none', boxSizing: 'border-box' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748b', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 6 }}>
              DEFAULT META DESCRIPTION
            </label>
            <input
              type="text"
              value={settings.metaDesc}
              onChange={(e) => handleChange('metaDesc', e.target.value)}
              style={{ width: '100%', background: '#FAF4EE', border: '1.5px solid #EBDED2', borderRadius: 12, padding: '11px 14px', color: '#0B2545', fontSize: 13, outline: 'none', boxSizing: 'border-box' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
