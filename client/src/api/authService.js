import { apiClient } from './apiClient';

export const authService = {
  register: async (payload) => {
    // Clear any previous session leftovers
    try {
      localStorage.removeItem('andaman_bookings_map');
      localStorage.removeItem('andaman_last_booking');
    } catch {}

    const res = await apiClient('/auth/register', { method: 'POST', body: JSON.stringify(payload) });
    if (res.data?.token) {
      localStorage.setItem('andaman_token', res.data.token);
      localStorage.setItem('andaman_user', JSON.stringify(res.data.user));
    }
    return res;
  },
  login: async (payload) => {
    // Clear any previous session leftovers
    try {
      localStorage.removeItem('andaman_bookings_map');
      localStorage.removeItem('andaman_last_booking');
    } catch {}

    const res = await apiClient('/auth/login', { method: 'POST', body: JSON.stringify(payload) });
    if (res.data?.token) {
      localStorage.setItem('andaman_token', res.data.token);
      localStorage.setItem('andaman_user', JSON.stringify(res.data.user));
    }
    return res;
  },
  logout: () => {
    try {
      localStorage.removeItem('andaman_token');
      localStorage.removeItem('andaman_user');
      localStorage.removeItem('andaman_role');
      localStorage.removeItem('andaman_admin_token');
      localStorage.removeItem('andaman_bookings_map');
      localStorage.removeItem('andaman_last_booking');
      sessionStorage.clear();
      window.dispatchEvent(new CustomEvent('auth-change'));
      window.dispatchEvent(new Event('storage'));
    } catch (e) {
      console.error('Logout storage clear error:', e);
    }
    return apiClient('/auth/logout', { method: 'POST' }).catch(() => {});
  },
  getCurrentUser: () => apiClient('/auth/me'),
  updateProfile: async (payload) => {
    const res = await apiClient('/auth/profile', { method: 'PUT', body: JSON.stringify(payload) });
    if (res.data) {
      localStorage.setItem('andaman_user', JSON.stringify(res.data));
      window.dispatchEvent(new CustomEvent('auth-change'));
    }
    return res;
  },
  changePassword: (payload) => apiClient('/auth/change-password', { method: 'PUT', body: JSON.stringify(payload) }),
};
