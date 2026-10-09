import React, { useState, useEffect } from 'react';
import { ArrowLeft, Save, User, ShieldCheck, Loader2 } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { authService } from '../../api/authService';

export default function ProfilePage({ onBack }) {
  let authContext = null;
  try {
    authContext = useAuth();
  } catch (err) {
    console.warn('[ProfilePage] useAuth not inside AuthProvider, falling back to localStorage/events.');
  }

  const getLocalStorageUser = () => {
    try {
      const saved = localStorage.getItem('andaman_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  };

  const currentUser = authContext?.currentUser || getLocalStorageUser();

  const [profile, setProfile] = useState({
    fullName: currentUser?.name || 'Valued Traveler',
    email: currentUser?.email || 'traveler@andaman-trails.com',
    phone: currentUser?.phone || '+91 98765 43210',
    membershipTier: 'Platinum Explorer',
  });

  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (currentUser) {
      setProfile({
        fullName: currentUser.name || 'Valued Traveler',
        email: currentUser.email || 'traveler@andaman-trails.com',
        phone: currentUser.phone || '+91 98765 43210',
        membershipTier: currentUser.role === 'ADMIN' ? 'Executive Admin' : 'Platinum Explorer',
      });
    }
  }, [currentUser]);

  const handleSave = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      const res = await authService.updateProfile({
        name: profile.fullName,
        phone: profile.phone,
      });

      if (res.error || res.status === 'fail' || res.status === 'error') {
        setErrorMsg(res.message || 'Failed to update profile details.');
      } else {
        const updatedUser = {
          ...currentUser,
          name: profile.fullName,
          phone: profile.phone,
        };
        localStorage.setItem('andaman_user', JSON.stringify(updatedUser));
        if (authContext && typeof authContext.login === 'function') {
          authContext.login(updatedUser);
        }
        window.dispatchEvent(new CustomEvent('auth-change'));
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
      }
    } catch (err) {
      setErrorMsg(err.message || 'Error updating profile in database.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ background: '#ffffff', border: '1.5px solid #EBDED2', borderRadius: 24, padding: 32, boxShadow: '0 4px 20px rgba(11, 37, 69, 0.04)' }}>
      <button
        onClick={onBack}
        style={{
          fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 800,
          color: '#F06543', background: '#FFF0EB',
          border: '1px solid #FFD3C4', padding: '6px 14px',
          borderRadius: 20, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 6,
          marginBottom: 16,
        }}
      >
        <ArrowLeft size={12} /> Back to Dashboard
      </button>

      <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 32, fontWeight: 600, color: '#0B2545', marginBottom: 6 }}>
        Traveler Profile
      </h1>
      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#5C6F84', marginBottom: 24 }}>
        Update your personal details, contact number, and travel preferences.
      </p>

      {saved && (
        <div style={{ padding: '12px 18px', borderRadius: 14, background: '#FFF0EB', border: '1px solid #FFD3C4', color: '#F06543', fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, fontWeight: 800, marginBottom: 20 }}>
          PROFILE UPDATED SUCCESSFULLY IN DATABASE!
        </div>
      )}

      {errorMsg && (
        <div style={{ padding: '12px 18px', borderRadius: 14, background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)', color: '#ef4444', fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, fontWeight: 800, marginBottom: 20 }}>
          {errorMsg}
        </div>
      )}

      <form onSubmit={handleSave} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <div>
          <label style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12.5, fontWeight: 800, color: '#5C6F84', textTransform: 'uppercase' }}>Full Name</label>
          <input
            type="text"
            value={profile.fullName}
            onChange={(e) => setProfile({ ...profile, fullName: e.target.value })}
            required
            style={{ width: '100%', boxSizing: 'border-box', background: '#FAF4EE', border: '1px solid #EBDED2', padding: '12px 14px', borderRadius: 12, color: '#0B2545', outline: 'none', marginTop: 4 }}
          />
        </div>

        <div>
          <label style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12.5, fontWeight: 800, color: '#5C6F84', textTransform: 'uppercase' }}>Email Address (Read-Only)</label>
          <input
            type="email"
            value={profile.email}
            disabled
            style={{ width: '100%', boxSizing: 'border-box', background: '#f1f5f9', border: '1px solid #e2e8f0', padding: '12px 14px', borderRadius: 12, color: '#64748b', cursor: 'not-allowed', outline: 'none', marginTop: 4 }}
          />
        </div>

        <div>
          <label style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12.5, fontWeight: 800, color: '#5C6F84', textTransform: 'uppercase' }}>Phone Number</label>
          <input
            type="tel"
            value={profile.phone}
            onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
            placeholder="+91 98765 43210"
            style={{ width: '100%', boxSizing: 'border-box', background: '#FAF4EE', border: '1px solid #EBDED2', padding: '12px 14px', borderRadius: 12, color: '#0B2545', outline: 'none', marginTop: 4 }}
          />
        </div>

        <div>
          <label style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12.5, fontWeight: 800, color: '#5C6F84', textTransform: 'uppercase' }}>Membership Tier</label>
          <input
            type="text"
            disabled
            value={profile.membershipTier}
            style={{ width: '100%', boxSizing: 'border-box', background: '#FAF4EE', border: '1px solid #EBDED2', padding: '12px 14px', borderRadius: 12, color: '#F06543', outline: 'none', marginTop: 4, fontWeight: 700 }}
          />
        </div>

        <div style={{ gridColumn: '1 / -1', marginTop: 10 }}>
          <button type="submit" disabled={loading} style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, fontWeight: 800, color: '#ffffff', background: 'linear-gradient(135deg, #FF6B4A, #F06543)', border: 'none', padding: '12px 24px', borderRadius: 12, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 6, boxShadow: '0 4px 14px rgba(240, 101, 67, 0.35)' }}>
            {loading ? <Loader2 size={14} className="animate-spin" /> : <Save size={14} />} {loading ? 'SAVING...' : 'SAVE CHANGES'}
          </button>
        </div>
      </form>
    </div>
  );
}
