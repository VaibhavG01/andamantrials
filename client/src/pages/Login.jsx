// client/src/pages/Login.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Master Andaman Trails Authentication Portal (Login & Register)
// Real Database Authentication with JWT, Dynamic Redirects, and Zero Fake Data.

import React, { useState, useEffect } from 'react';
import {
  User, Mail, Phone, Lock, Eye, EyeOff, ArrowRight,
  ShieldCheck, Sparkles, Compass, CheckCircle2, AlertCircle, Key
} from 'lucide-react';
import { authService } from '../api/authService';

export default function Login() {
  const [mode, setMode] = useState('login'); // 'login' | 'register'
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
  });

  // Extract redirect query parameter from URL
  const getRedirectUrl = () => {
    try {
      const params = new URLSearchParams(window.location.search);
      return params.get('redirect') || '/dashboard';
    } catch {
      return '/dashboard';
    }
  };

  useEffect(() => {
    // Check mode from query param ?mode=register
    const params = new URLSearchParams(window.location.search);
    if (params.get('mode') === 'register' || window.location.pathname.includes('register') || window.location.pathname.includes('signup')) {
      setMode('register');
    } else {
      setMode('login');
    }

    // If user already logged in with valid token, redirect to dashboard or redirect param
    const token = localStorage.getItem('andaman_token');
    const userStr = localStorage.getItem('andaman_user');
    if (token && userStr) {
      try {
        const user = JSON.parse(userStr);
        if (user) {
          const target = (user.role === 'SUPER_ADMIN' || user.role === 'ADMIN' || user.role === 'EDITOR')
            ? '/admin/dashboard'
            : (user.role === 'RECEPTIONIST' ? '/reception/dashboard' : getRedirectUrl());
          window.history.pushState({}, '', target);
          window.dispatchEvent(new PopStateEvent('popstate'));
        }
      } catch {}
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
    setSuccessMsg('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMsg('');

    if (!formData.email || !formData.password) {
      setError('Please provide both email and password.');
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

        if (res.data?.user) {
          setSuccessMsg('Account created successfully! Redirecting...');
          const target = getRedirectUrl();
          setTimeout(() => {
            window.history.pushState({}, '', target);
            window.dispatchEvent(new PopStateEvent('popstate'));
          }, 800);
        } else {
          // Fallback verify with login
          const loginRes = await authService.login({
            email: formData.email,
            password: formData.password,
          });
          const target = getRedirectUrl();
          window.history.pushState({}, '', target);
          window.dispatchEvent(new PopStateEvent('popstate'));
        }
      } else {
        const res = await authService.login({
          email: formData.email,
          password: formData.password,
        });

        if (res.data?.user) {
          const user = res.data.user;
          const target = (user.role === 'SUPER_ADMIN' || user.role === 'ADMIN' || user.role === 'EDITOR')
            ? '/admin/dashboard'
            : (user.role === 'RECEPTIONIST' ? '/reception/dashboard' : getRedirectUrl());

          window.history.pushState({}, '', target);
          window.dispatchEvent(new PopStateEvent('popstate'));
        }
      }
    } catch (err) {
      console.error('Authentication error:', err);
      // Clean error presentation - NO FAKE FALLBACK DATA
      setError(err.message || 'Authentication failed. Please check your credentials and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      width: '100%',
      background: 'linear-gradient(145deg, #07192C 0%, #0B2545 50%, #061527 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 20px',
      boxSizing: 'border-box',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background Decorative Rings */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-5%',
        width: 500,
        height: 500,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(240, 101, 67, 0.15) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-10%',
        left: '-5%',
        width: 600,
        height: 600,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0, 194, 184, 0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Main Container */}
      <div style={{
        width: '100%',
        maxWidth: 480,
        background: '#ffffff',
        borderRadius: 28,
        padding: '36px 32px',
        boxShadow: '0 25px 60px rgba(0, 0, 0, 0.4), 0 0 30px rgba(240, 101, 67, 0.1)',
        position: 'relative',
        zIndex: 2,
        boxSizing: 'border-box',
      }}>
        {/* Brand Header */}
        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              window.history.pushState({}, '', '/');
              window.dispatchEvent(new PopStateEvent('popstate'));
            }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 52,
              height: 52,
              borderRadius: 16,
              background: '#ffffff',
              padding: 4,
              marginBottom: 12,
              boxShadow: '0 4px 16px rgba(0, 45, 98, 0.15)',
              border: '1.5px solid rgba(240, 101, 67, 0.3)',
              textDecoration: 'none',
            }}
          >
            <img src="/logo.png" alt="Andaman Trails Logo" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: 10 }} />
          </a>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#FFF0EB', border: '1px solid #FFD3C4', padding: '4px 14px', borderRadius: 20, marginBottom: 10 }}>
            <Sparkles size={13} color="#F06543" />
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 800, color: '#F06543', letterSpacing: '0.15em' }}>
              ANDAMAN TRAILS PORTAL
            </span>
          </div>

          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 32, fontWeight: 600, color: '#0B2545', margin: '0 0 6px' }}>
            {mode === 'login' ? 'Sign In to Your Account' : 'Create Traveler Account'}
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#64748b', margin: 0, fontWeight: 500 }}>
            {mode === 'login'
              ? 'Access confirmed bookings, ferry vouchers & custom itineraries.'
              : 'Join thousands of island explorers with real-time reservation tracking.'}
          </p>
        </div>

        {/* Tab Switcher */}
        <div style={{
          display: 'flex',
          background: '#f1f5f9',
          borderRadius: 14,
          padding: 4,
          marginBottom: 24,
          border: '1px solid #cbd5e1'
        }}>
          <button
            type="button"
            onClick={() => { setMode('login'); setError(''); setSuccessMsg(''); }}
            style={{
              flex: 1,
              padding: '10px 0',
              borderRadius: 10,
              border: 'none',
              background: mode === 'login' ? '#0B2545' : 'transparent',
              color: mode === 'login' ? '#ffffff' : '#64748b',
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 12,
              fontWeight: 800,
              cursor: 'pointer',
              transition: 'all 0.2s',
              boxShadow: mode === 'login' ? '0 2px 8px rgba(11, 37, 69, 0.25)' : 'none',
            }}
          >
            SIGN IN
          </button>
          <button
            type="button"
            onClick={() => { setMode('register'); setError(''); setSuccessMsg(''); }}
            style={{
              flex: 1,
              padding: '10px 0',
              borderRadius: 10,
              border: 'none',
              background: mode === 'register' ? '#0B2545' : 'transparent',
              color: mode === 'register' ? '#ffffff' : '#64748b',
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 12,
              fontWeight: 800,
              cursor: 'pointer',
              transition: 'all 0.2s',
              boxShadow: mode === 'register' ? '0 2px 8px rgba(11, 37, 69, 0.25)' : 'none',
            }}
          >
            REGISTER
          </button>
        </div>

        {/* Alert Messages */}
        {error && (
          <div style={{
            background: '#fef2f2',
            border: '1.5px solid #f87171',
            borderRadius: 12,
            padding: '12px 16px',
            marginBottom: 20,
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            color: '#b91c1c',
            fontSize: 13,
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
          }}>
            <AlertCircle size={16} color="#b91c1c" style={{ flexShrink: 0 }} />
            <span>{error}</span>
          </div>
        )}

        {successMsg && (
          <div style={{
            background: '#f0fdf4',
            border: '1.5px solid #86efac',
            borderRadius: 12,
            padding: '12px 16px',
            marginBottom: 20,
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            color: '#15803d',
            fontSize: 13,
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
          }}>
            <CheckCircle2 size={16} color="#15803d" style={{ flexShrink: 0 }} />
            <span>{successMsg}</span>
          </div>
        )}

        {/* Form Elements */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {mode === 'register' && (
            <div>
              <label style={{ display: 'block', fontFamily: "'Space Grotesk', sans-serif", fontSize: 11.5, fontWeight: 800, color: '#0B2545', marginBottom: 6, textTransform: 'uppercase' }}>
                Full Name *
              </label>
              <div style={{ position: 'relative' }}>
                <User size={18} color="#F06543" style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)' }} />
                <input
                  type="text"
                  name="fullName"
                  placeholder="e.g. Rahul Sharma"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 14px 12px 42px',
                    borderRadius: 12,
                    background: '#f8fafc',
                    border: '1.5px solid #cbd5e1',
                    color: '#0f172a',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 14,
                    outline: 'none',
                    boxSizing: 'border-box',
                  }}
                />
              </div>
            </div>
          )}

          <div>
            <label style={{ display: 'block', fontFamily: "'Space Grotesk', sans-serif", fontSize: 11.5, fontWeight: 800, color: '#0B2545', marginBottom: 6, textTransform: 'uppercase' }}>
              Email Address *
            </label>
            <div style={{ position: 'relative' }}>
              <Mail size={18} color="#F06543" style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="email"
                name="email"
                placeholder="e.g. rahul@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '12px 14px 12px 42px',
                  borderRadius: 12,
                  background: '#f8fafc',
                  border: '1.5px solid #cbd5e1',
                  color: '#0f172a',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 14,
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
              />
            </div>
          </div>

          {mode === 'register' && (
            <div>
              <label style={{ display: 'block', fontFamily: "'Space Grotesk', sans-serif", fontSize: 11.5, fontWeight: 800, color: '#0B2545', marginBottom: 6, textTransform: 'uppercase' }}>
                Phone Number
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
                    outline: 'none',
                    boxSizing: 'border-box',
                  }}
                />
              </div>
            </div>
          )}

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
              <label style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11.5, fontWeight: 800, color: '#0B2545', textTransform: 'uppercase' }}>
                Password *
              </label>
            </div>
            <div style={{ position: 'relative' }}>
              <Lock size={18} color="#F06543" style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="••••••••••••"
                value={formData.password}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '12px 42px 12px 42px',
                  borderRadius: 12,
                  background: '#f8fafc',
                  border: '1.5px solid #cbd5e1',
                  color: '#0f172a',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 14,
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
                }}
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
              marginTop: 8,
              width: '100%',
              background: 'linear-gradient(135deg, #FF6B4A 0%, #F06543 100%)',
              border: 'none',
              color: '#ffffff',
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 13,
              fontWeight: 900,
              padding: '15px',
              borderRadius: 14,
              cursor: 'pointer',
              letterSpacing: '0.08em',
              boxShadow: '0 8px 24px rgba(240, 101, 67, 0.35)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              transition: 'all 0.25s',
              opacity: loading ? 0.7 : 1,
            }}
          >
            {loading ? (
              <span>AUTHENTICATING WITH DATABASE...</span>
            ) : (
              <>
                <span>{mode === 'login' ? 'SIGN IN TO DASHBOARD' : 'CREATE ACCOUNT & EXPLORE'}</span>
                <ArrowRight size={16} />
              </>
            )}
          </button>
        </form>

        {/* Security / Ministry Compliance Badge */}
        <div style={{
          marginTop: 24,
          paddingTop: 18,
          borderTop: '1px solid #e2e8f0',
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 6,
          color: '#64748b',
          fontSize: 11.5,
          fontFamily: "'Inter', sans-serif",
          fontWeight: 500,
        }}>
          <ShieldCheck size={16} color="#F06543" />
          <span>256-Bit SSL Encrypted & Verified Database Security</span>
        </div>
      </div>
    </div>
  );
}
