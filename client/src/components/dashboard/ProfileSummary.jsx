// src/components/dashboard/ProfileSummary.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Compact Traveler Profile Card

import React from 'react';
import { User, Mail, Phone, Calendar, Award, Edit3, ShieldCheck } from 'lucide-react';

export default function ProfileSummary({ onEditProfile }) {
  const currentUser = (() => {
    try {
      const saved = localStorage.getItem('andaman_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  })();

  const rawUser = currentUser?.user || currentUser;
  const name = rawUser?.name || `${rawUser?.firstName || ''} ${rawUser?.lastName || ''}`.trim() || rawUser?.email?.split('@')[0] || 'Traveler';
  const email = rawUser?.email || 'traveler@andamantrails.com';
  const phone = rawUser?.phone || '+91 98765 43210';
  const role = rawUser?.role || 'Traveler VIP';

  const getInitials = (fullName) => {
    if (!fullName) return 'TR';
    const parts = fullName.trim().split(/\s+/);
    if (parts.length >= 2) {
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }
    return fullName.substring(0, 2).toUpperCase();
  };

  return (
    <div className="dash-profile-card">
      <style>{`
        .dash-profile-card {
          background: #ffffff;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1.5px solid #ebded2;
          border-radius: 24px;
          padding: 24px 28px;
          margin-bottom: 28px;
          box-shadow: 0 16px 40px rgba(11, 37, 69, 0.08);
        }

        .dash-prof-hdr {
          display: flex; align-items: center; justify-content: space-between;
          margin-bottom: 20px; flex-wrap: wrap; gap: 12px;
        }

        .dash-prof-avatar-row {
          display: flex; align-items: center; gap: 16px;
        }

        .dash-prof-info-grid {
          display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px;
          margin-top: 16px; padding-top: 16px;
          border-top: 1px solid #ebded2;
        }
        @media (max-width: 540px) {
          .dash-prof-info-grid { grid-template-columns: 1fr; }
        }

        .dash-prof-info-item {
          background: #FAF4EE;
          border: 1px solid #ebded2;
          border-radius: 14px; padding: 10px 14px;
        }
        .dash-prof-lbl {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 9.5px; font-weight: 800; color: #627d8a;
          text-transform: uppercase; margin-bottom: 2px;
        }
        .dash-prof-val {
          font-family: 'Inter', sans-serif;
          font-size: 12px; font-weight: 600; color: #0B2545;
        }
      `}</style>

      {/* HEADER */}
      <div className="dash-prof-hdr">
        <div className="dash-prof-avatar-row">
          <div style={{
            width: 64, height: 64, borderRadius: '50%',
            background: 'linear-gradient(135deg, #FF6B4A, #F06543)',
            color: '#ffffff',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 22, fontWeight: 950,
            boxShadow: '0 4px 18px rgba(240, 101, 67, 0.35)',
            border: '2.5px solid #FFD3C4',
            flexShrink: 0
          }}>
            {getInitials(name)}
          </div>
          <div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 18, fontWeight: 900, color: '#0B2545' }}>
              {name}
            </div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 800, color: '#F06543', marginTop: 2, display: 'flex', alignItems: 'center', gap: 5 }}>
              <Award size={12} color="#F06543" />
              <span>{role === 'ADMIN' ? 'Executive Admin' : 'Platinum Explorer'}</span>
            </div>
          </div>
        </div>

        <button
          onClick={onEditProfile}
          style={{
            fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 800, color: '#F06543',
            background: '#FFF0EB', border: '1px solid #FFD3C4',
            padding: '8px 16px', borderRadius: 14, cursor: 'pointer',
            display: 'inline-flex', alignItems: 'center', gap: 6, transition: 'all 0.25s ease',
          }}
        >
          <Edit3 size={13} />
          <span>EDIT PROFILE</span>
        </button>
      </div>

      {/* INFO GRID */}
      <div className="dash-prof-info-grid">
        <div className="dash-prof-info-item">
          <div className="dash-prof-lbl">Email Address</div>
          <div className="dash-prof-val">{email}</div>
        </div>

        <div className="dash-prof-info-item">
          <div className="dash-prof-lbl">Phone Number</div>
          <div className="dash-prof-val">{phone}</div>
        </div>

        <div className="dash-prof-info-item">
          <div className="dash-prof-lbl">Account Tier</div>
          <div className="dash-prof-val" style={{ color: '#F06543' }}>VIP Platinum</div>
        </div>

        <div className="dash-prof-info-item">
          <div className="dash-prof-lbl">Member Status</div>
          <div className="dash-prof-val">Active & Verified</div>
        </div>
      </div>
    </div>
  );
}
