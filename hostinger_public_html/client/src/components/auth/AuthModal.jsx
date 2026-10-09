// src/components/auth/AuthModal.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Luxury Glassmorphic User Registration & Login Modal for Andaman Trails.

import React, { useState } from 'react';
import { User, Mail, Phone, Lock, Key, Compass, Sparkles, X, ArrowRight, ShieldCheck, Eye, EyeOff } from 'lucide-react';
import { authService } from '../../api/authService';

export default function AuthModal({ isOpen, onClose, onLoginSuccess, noticeMessage }) {
  const [mode, setMode] = useState('register'); // 'register' | 'login'
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!formData.email || !formData.password) {
      setError('Please fill in all required fields.');
      return;
    }

    if (mode === 'register' && !formData.fullName) {
      setError('Please enter your full name.');
      return;
    }

    setLoading(true);

    try {
      if (mode === 'register') {
        const res = await authService.register({
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          password: formData.password,
        });
        
        if (res.data && res.data.user) {
          if (onLoginSuccess) onLoginSuccess(res.data.user);
        } else {
          // Attempt login fallback
          const loginRes = await authService.login({
            email: formData.email,
            password: formData.password,
          });
          if (onLoginSuccess) onLoginSuccess(loginRes.data.user);
        }
      } else {
        const res = await authService.login({
          email: formData.email,
          password: formData.password,
        });
        if (onLoginSuccess) onLoginSuccess(res.data.user);
      }
      window.dispatchEvent(new CustomEvent('auth-change'));
      onClose();
    } catch (err) {
      console.error('Authentication Error:', err);
      // Clean error presentation - No mock/fake user generation
      setError(err.message || 'Authentication failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(2, 11, 20, 0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        padding: '20px',
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: 460,
          background: '#ffffff',
          border: '1px solid rgba(22, 217, 255, 0.35)',
          borderRadius: 24,
          padding: '30px 28px',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8), 0 0 30px rgba(22, 217, 255, 0.2)',
          position: 'relative',
          color: '#f5fafc',
          maxHeight: '90vh',
          overflowY: 'auto',
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: 20,
            right: 20,
            width: 32,
            height: 32,
            borderRadius: '50%',
            background: '#e2e8f0',
            border: '1px solid #e2e8f0',
            color: '#64748b',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#fff';
            e.currentTarget.style.borderColor = '#F06543';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#9cb3bd';
            e.currentTarget.style.borderColor = '#e2e8f0';
          }}
        >
          <X size={16} />
        </button>

        {/* Modal Header */}
        <div style={{ textAlign: 'center', marginBottom: 20 }}>
          <div style={{ width: 48, height: 48, borderRadius: 14, background: '#ffffff', padding: 4, margin: '0 auto 12px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 14px rgba(0, 45, 98, 0.15)', border: '1.5px solid rgba(0, 194, 184, 0.4)' }}>
            <img src="/logo.png" alt="Andaman Trails Logo" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: 8 }} />
          </div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#FFF0EB', border: '1px solid #99f6e4', padding: '4px 14px', borderRadius: 20, marginBottom: 10 }}>
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11.5, fontWeight: 800, color: '#F06543', letterSpacing: '0.15em' }}>
              ANDAMAN TRAILS ACCOUNT
            </span>
          </div>

          <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 24, fontWeight: 900, color: '#0B2545', margin: '0 0 6px' }}>
            {mode === 'register' ? 'Create Your Account' : 'Welcome Back'}
          </h3>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#475569', margin: 0, fontWeight: 500 }}>
            {mode === 'register' ? 'Join 50,000+ travelers to unlock custom 3D trip planning.' : 'Access your booked itineraries, ferry passes & VIP rewards.'}
          </p>
        </div>

        {/* Notice Banner when Login is required before booking */}
        {noticeMessage && (
          <div style={{
            background: '#FFF0EB',
            border: '1.5px solid #F06543',
            borderRadius: 14,
            padding: '12px 16px',
            marginBottom: 20,
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            fontFamily: "'Inter', sans-serif",
            fontSize: 13,
            color: '#F06543',
            fontWeight: 600,
            boxShadow: '0 4px 16px rgba(13, 148, 136, 0.12)',
          }}>
            <Key size={16} color="#F06543" style={{ flexShrink: 0 }} />
            <span>{noticeMessage}</span>
          </div>
        )}

        {/* Auth Mode Toggle Tabs */}
        <div style={{ display: 'flex', background: '#f1f5f9', borderRadius: 14, padding: 4, marginBottom: 24, border: '1px solid #cbd5e1' }}>
          <button
            type="button"
            onClick={() => { setMode('register'); setError(''); }}
            style={{
              flex: 1,
              padding: '10px 0',
              borderRadius: 10,
              border: 'none',
              background: mode === 'register' ? '#0B2545' : 'transparent',
              color: mode === 'register' ? '#ffffff' : '#475569',
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 12,
              fontWeight: 800,
              cursor: 'pointer',
              transition: 'all 0.2s',
              boxShadow: mode === 'register' ? '0 2px 8px rgba(0, 45, 98, 0.25)' : 'none',
            }}
          >
            REGISTER
          </button>
          <button
            type="button"
            onClick={() => { setMode('login'); setError(''); }}
            style={{
              flex: 1,
              padding: '10px 0',
              borderRadius: 10,
              border: 'none',
              background: mode === 'login' ? '#0B2545' : 'transparent',
              color: mode === 'login' ? '#ffffff' : '#475569',
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 12,
              fontWeight: 800,
              cursor: 'pointer',
              transition: 'all 0.2s',
              boxShadow: mode === 'login' ? '0 2px 8px rgba(0, 45, 98, 0.25)' : 'none',
            }}
          >
            SIGN IN
          </button>
        </div>

        {/* Error Notification */}
        {error && (
          <div style={{ background: '#fef2f2', border: '1.5px solid #f87171', color: '#b91c1c', borderRadius: 12, padding: '12px 14px', fontSize: 13, fontFamily: "'Inter', sans-serif", fontWeight: 600, marginBottom: 16 }}>
            {error}
          </div>
        )}

        {/* Form Body */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {mode === 'register' && (
            <div>
              <label style={{ display: 'block', fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, fontWeight: 800, color: '#0B2545', marginBottom: 6 }}>
                FULL NAME
              </label>
              <div style={{ position: 'relative' }}>
                <User size={18} color="#F06543" style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)' }} />
                <input
                  type="text"
                  name="fullName"
                  placeholder="Rahul Sharma"
                  value={formData.fullName}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '12px 14px 12px 42px',
                    borderRadius: 12,
                    background: '#f8fafc',
                    border: '1.5px solid #cbd5e1',
                    color: '#0f172a',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 14,
                    fontWeight: 500,
                    outline: 'none',
                    boxSizing: 'border-box',
                  }}
                />
              </div>
            </div>
          )}

          <div>
            <label style={{ display: 'block', fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, fontWeight: 800, color: '#0B2545', marginBottom: 6 }}>
              EMAIL ADDRESS
            </label>
            <div style={{ position: 'relative' }}>
              <Mail size={18} color="#F06543" style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="email"
                name="email"
                placeholder="rahul@example.com"
                value={formData.email}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '12px 14px 12px 42px',
                  borderRadius: 12,
                  background: '#f8fafc',
                  border: '1.5px solid #cbd5e1',
                  color: '#0f172a',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 14,
                  fontWeight: 500,
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
              />
            </div>
          </div>

          {mode === 'register' && (
            <div>
              <label style={{ display: 'block', fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, fontWeight: 800, color: '#0B2545', marginBottom: 6 }}>
                PHONE NUMBER
              </label>
              <div style={{ position: 'relative' }}>
                <Phone size={18} color="#F06543" style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)' }} />
                <input
                  type="tel"
                  name="phone"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '12px 14px 12px 42px',
                    borderRadius: 12,
                    background: '#f8fafc',
                    border: '1.5px solid #cbd5e1',
                    color: '#0f172a',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 14,
                    fontWeight: 500,
                    outline: 'none',
                    boxSizing: 'border-box',
                  }}
                />
              </div>
            </div>
          )}

          <div>
            <label style={{ display: 'block', fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, fontWeight: 800, color: '#0B2545', marginBottom: 6 }}>
              PASSWORD
            </label>
            <div style={{ position: 'relative' }}>
              <Lock size={18} color="#F06543" style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '12px 42px 12px 42px',
                  borderRadius: 12,
                  background: '#f8fafc',
                  border: '1.5px solid #cbd5e1',
                  color: '#0f172a',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 14,
                  fontWeight: 500,
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  right: 14,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  color: '#64748b',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  padding: 0,
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#0B2545'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#64748b'}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            style={{
              marginTop: 10,
              width: '100%',
              background: '#0B2545',
              border: 'none',
              color: '#ffffff',
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 13,
              fontWeight: 900,
              padding: '15px',
              borderRadius: 14,
              cursor: 'pointer',
              letterSpacing: '0.08em',
              boxShadow: '0 8px 24px rgba(0, 45, 98, 0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              transition: 'all 0.25s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#F06543'}
            onMouseLeave={(e) => e.currentTarget.style.background = '#0B2545'}
          >
            {loading ? (
              <span>AUTHENTICATING...</span>
            ) : (
              <>
                <span>{mode === 'register' ? 'CREATE ACCOUNT & EXPLORE' : 'SIGN IN TO DASHBOARD'}</span>
                <ArrowRight size={16} />
              </>
            )}
          </button>
        </form>

        <div style={{ marginTop: 20, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, color: '#64748b', fontSize: 12, fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
          <ShieldCheck size={16} color="#F06543" />
          <span>256-Bit SSL Encrypted & Ministry of Tourism Compliant</span>
        </div>
      </div>
    </div>
  );
}
