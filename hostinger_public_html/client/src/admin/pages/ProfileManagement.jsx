import React, { useState } from 'react';
import { User, ShieldCheck, Key, Check } from 'lucide-react';
import { authService } from '../../api/authService';

export default function ProfileManagement() {
  const currentUser = (() => {
    try {
      const u = localStorage.getItem('andaman_user');
      return u ? JSON.parse(u) : null;
    } catch {
      return null;
    }
  })();

  const [profile, setProfile] = useState({
    name: currentUser?.name || 'Platform Administrator',
    email: currentUser?.email || 'admin@andaman-trails.com',
    phone: currentUser?.phone || '+91 98765 43210',
    role: currentUser?.role || 'ADMIN',
    oldPassword: '',
    newPassword: '',
  });

  const [saved, setSaved] = useState(false);
  const [msg, setMsg] = useState({ text: '', type: '' });
  const [loading, setLoading] = useState(false);

  const handleSave = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg({ text: '', type: '' });

    try {
      // 1. Update Profile Info
      const res = await authService.updateProfile({
        name: profile.name,
        phone: profile.phone,
      });

      // 2. Change Password if entered
      if (profile.oldPassword && profile.newPassword) {
        await authService.changePassword({
          currentPassword: profile.oldPassword,
          newPassword: profile.newPassword,
        });
      }

      const updatedUser = { ...currentUser, name: profile.name, phone: profile.phone };
      localStorage.setItem('andaman_user', JSON.stringify(updatedUser));
      window.dispatchEvent(new CustomEvent('auth-change'));

      setMsg({ text: 'Admin profile updated successfully in database!', type: 'success' });
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch (err) {
      setMsg({ text: err.message || 'Failed to update admin profile', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 640, margin: '0 auto' }}>
      <div>
        <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 800, color: '#F06543', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
          ADMINISTRATOR DOSSIER
        </div>
        <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 26, fontWeight: 900, color: '#0B2545', margin: '4px 0 0' }}>
          Admin Profile Settings
        </h1>
      </div>

      {saved && (
        <div style={{ background: 'rgba(33, 230, 193, 0.15)', border: '1px solid #F06543', color: '#F06543', padding: 12, borderRadius: 16, fontSize: 12.5, fontWeight: 700, textAlign: 'center' }}>
          Profile updated successfully!
        </div>
      )}

      <form onSubmit={handleSave} style={{ background: '#ffffff', backdropFilter: 'blur(20px)', border: '1.5px solid #e2e8f0', borderRadius: 24, padding: 32, display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, borderBottom: '1px solid #e2e8f0', paddingBottom: 20 }}>
          <div style={{
            width: 60, height: 60, borderRadius: '50%', background: 'linear-gradient(135deg, #FF6B4A, #F06543)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, fontWeight: 900, color: '#0B2545',
            fontFamily: "'Space Grotesk', sans-serif"
          }}>
            {profile.name.charAt(0)}
          </div>
          <div>
            <div style={{ fontSize: 18, fontWeight: 900, color: '#0B2545', fontFamily: "'Space Grotesk', sans-serif" }}>{profile.name}</div>
            <div style={{ fontSize: 11, color: '#F06543', fontWeight: 800, fontFamily: "'Space Grotesk', sans-serif", marginTop: 2 }}>{profile.role} ACCOUNT</div>
          </div>
        </div>

        <div>
          <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748b', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 6 }}>FULL NAME</label>
          <input type="text" value={profile.name} onChange={(e) => setProfile({ ...profile, name: e.target.value })} style={{ width: '100%', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 12, padding: 10, color: '#0f172a', fontSize: 13, outline: 'none', boxSizing: 'border-box' }} />
        </div>

        <div>
          <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748b', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 6 }}>EMAIL ADDRESS</label>
          <input type="email" value={profile.email} onChange={(e) => setProfile({ ...profile, email: e.target.value })} style={{ width: '100%', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 12, padding: 10, color: '#0f172a', fontSize: 13, outline: 'none', boxSizing: 'border-box' }} />
        </div>

        <div>
          <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748b', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 6 }}>PHONE NUMBER</label>
          <input type="text" value={profile.phone} onChange={(e) => setProfile({ ...profile, phone: e.target.value })} style={{ width: '100%', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 12, padding: 10, color: '#0f172a', fontSize: 13, outline: 'none', boxSizing: 'border-box' }} />
        </div>

        <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: 16 }}>
          <div style={{ fontSize: 12, fontWeight: 800, color: '#F06543', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 12 }}>CHANGE PASSWORD</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            <div>
              <label style={{ display: 'block', fontSize: 12.5, color: '#627d8a', marginBottom: 4 }}>CURRENT PASSWORD</label>
              <input type="password" value={profile.oldPassword} onChange={(e) => setProfile({ ...profile, oldPassword: e.target.value })} placeholder="••••••••" style={{ width: '100%', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 12, padding: 10, color: '#334155', fontSize: 13, outline: 'none', boxSizing: 'border-box' }} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: 12.5, color: '#627d8a', marginBottom: 4 }}>NEW PASSWORD</label>
              <input type="password" value={profile.newPassword} onChange={(e) => setProfile({ ...profile, newPassword: e.target.value })} placeholder="••••••••" style={{ width: '100%', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 12, padding: 10, color: '#334155', fontSize: 13, outline: 'none', boxSizing: 'border-box' }} />
            </div>
          </div>
        </div>

        <button
          type="submit"
          style={{
            background: 'linear-gradient(135deg, #FF6B4A, #F06543)',
            border: 'none',
            color: '#ffffff',
            padding: '12px',
            borderRadius: 16,
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 11,
            fontWeight: 900,
            cursor: 'pointer',
            marginTop: 8,
            boxShadow: '0 6px 20px rgba(22, 217, 255, 0.3)',
          }}
        >
          UPDATE PROFILE & SECURITY →
        </button>
      </form>
    </div>
  );
}
