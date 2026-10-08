// client/src/api/dashboardService.js
// ─────────────────────────────────────────────────────────────────────────────
// User Dashboard & Bookings Data Service

import { apiClient } from './apiClient';

export const dashboardService = {
  getMyBookings: async () => {
    return apiClient('/bookings/my-bookings');
  },

  getBookingById: async (id) => {
    return apiClient(`/bookings/${id}`);
  },

  getBookingByNumber: async (bookingNumber) => {
    return apiClient(`/bookings/number/${bookingNumber}`);
  },

  cancelBooking: async (id, reason = '') => {
    return apiClient(`/bookings/${id}/cancel`, {
      method: 'PUT',
      body: JSON.stringify({ reason }),
    });
  },

  getUserProfile: async () => {
    return apiClient('/users/profile');
  },

  updateUserProfile: async (data) => {
    return apiClient('/users/profile', {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },
};
