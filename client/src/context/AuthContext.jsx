// src/context/AuthContext.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Master Auth Context & Guard Layer for Andaman Trails
// Enforces "Login First" for all booking actions across Ferries, Cruises, Packages, Stays, Activities, and Plan Trip.

import React, { createContext, useContext, useState, useRef } from 'react';
import AuthModal from '../components/auth/AuthModal';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const saved = localStorage.getItem('andaman_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authNotice, setAuthNotice] = useState('');
  const pendingActionRef = useRef(null);

  const login = (userData, token = null) => {
    try {
      localStorage.removeItem('andaman_bookings_map');
      localStorage.removeItem('andaman_last_booking');
      localStorage.setItem('andaman_user', JSON.stringify(userData));
      if (token) localStorage.setItem('andaman_token', token);
      window.dispatchEvent(new CustomEvent('auth-change'));
    } catch (e) {
      console.error('Failed to save user in localStorage', e);
    }
    setCurrentUser(userData);
  };

  const logout = () => {
    try {
      localStorage.removeItem('andaman_user');
      localStorage.removeItem('andaman_token');
      localStorage.removeItem('andaman_role');
      localStorage.removeItem('andaman_admin_token');
      localStorage.removeItem('andaman_bookings_map');
      localStorage.removeItem('andaman_last_booking');
      sessionStorage.clear();
      window.dispatchEvent(new CustomEvent('auth-change'));
      window.dispatchEvent(new Event('storage'));
    } catch (e) {
      console.error('Failed to remove user from localStorage', e);
    }
    setCurrentUser(null);
  };

  /**
   * Guards any action with authentication.
   * If logged in -> runs action immediately.
   * If not logged in -> prompts AuthModal with a notice message, then runs action after login.
   */
  const requireAuth = (actionCallback, noticeMessage = 'Please sign in or create an account to proceed with booking.') => {
    if (currentUser) {
      if (typeof actionCallback === 'function') {
        actionCallback(currentUser);
      }
      return true;
    }

    // User is not logged in — queue the action and open AuthModal
    pendingActionRef.current = actionCallback;
    setAuthNotice(noticeMessage);
    setAuthModalOpen(true);
    return false;
  };

  const openAuthModal = (noticeMessage = '') => {
    setAuthNotice(noticeMessage);
    setAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setAuthModalOpen(false);
    setAuthNotice('');
  };

  const handleLoginSuccess = (userData) => {
    login(userData);
    setAuthModalOpen(false);
    setAuthNotice('');

    // Role-based redirection: Super Admin, Admin & Editors go to admin panel
    if (userData && (userData.role === 'SUPER_ADMIN' || userData.role === 'ADMIN' || userData.role === 'EDITOR')) {
      window.history.pushState({}, '', '/admin/dashboard');
      window.dispatchEvent(new PopStateEvent('popstate'));
      return;
    }

    if (userData && userData.role === 'RECEPTIONIST') {
      window.history.pushState({}, '', '/reception/dashboard');
      window.dispatchEvent(new PopStateEvent('popstate'));
      return;
    }

    // If there was a queued action (e.g. booking flow), execute it now
    if (pendingActionRef.current && typeof pendingActionRef.current === 'function') {
      const callback = pendingActionRef.current;
      pendingActionRef.current = null;
      setTimeout(() => callback(userData), 100);
    } else {
      // General login takes traveler to dashboard
      window.history.pushState({}, '', '/dashboard');
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  const isSuperAdmin = currentUser?.role === 'SUPER_ADMIN';
  const isAdmin = currentUser?.role === 'ADMIN' || currentUser?.role === 'SUPER_ADMIN';
  const isEditor = currentUser?.role === 'EDITOR';
  const isReceptionist = currentUser?.role === 'RECEPTIONIST';
  const isStaff = ['SUPER_ADMIN', 'ADMIN', 'EDITOR', 'RECEPTIONIST'].includes(currentUser?.role);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        isLoggedIn: !!currentUser,
        isSuperAdmin,
        isAdmin,
        isEditor,
        isReceptionist,
        isStaff,
        login,
        logout,
        requireAuth,
        openAuthModal,
        closeAuthModal,
      }}
    >
      {children}

      {/* Global Auth Modal rendering */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={closeAuthModal}
        onLoginSuccess={handleLoginSuccess}
        noticeMessage={authNotice}
      />
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
