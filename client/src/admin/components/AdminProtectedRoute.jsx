import React from 'react';

export default function AdminProtectedRoute({ children }) {
  const token = localStorage.getItem('andaman_token');
  const userRaw = localStorage.getItem('andaman_user');

  let currentUser = null;
  try {
    currentUser = userRaw ? JSON.parse(userRaw) : null;
  } catch {
    currentUser = null;
  }

  // Unauthenticated user -> redirect to admin login
  if (!token || !currentUser) {
    window.location.href = '/admin/login';
    return null;
  }

  // Check role: must be SUPER_ADMIN, ADMIN, or EDITOR
  const role = (currentUser.role || '').toUpperCase();
  if (role !== 'SUPER_ADMIN' && role !== 'ADMIN' && role !== 'EDITOR') {
    window.location.href = '/';
    return null;
  }

  return <>{children}</>;
}
