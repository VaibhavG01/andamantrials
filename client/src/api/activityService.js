// client/src/api/activityService.js
// ─────────────────────────────────────────────────────────────────────────────
// Production API Client for Activities, Live Slots, Pricing, and Razorpay Booking

import { apiClient } from './apiClient';

export const activityService = {
  // ── Public Endpoints ──
  async getActivities(params = {}) {
    const query = new URLSearchParams();
    if (params.category && params.category !== 'All') query.append('category', params.category);
    if (params.location && params.location !== 'All Locations') query.append('location', params.location);
    if (params.minPrice) query.append('minPrice', params.minPrice);
    if (params.maxPrice) query.append('maxPrice', params.maxPrice);
    if (params.date) query.append('date', params.date);
    if (params.featured) query.append('featured', 'true');
    if (params.search) query.append('search', params.search);
    if (params.sort) query.append('sort', params.sort);
    if (params.all) query.append('all', 'true');

    const qs = query.toString() ? `?${query.toString()}` : '';
    const res = await apiClient(`/activities${qs}`);
    return res.data || [];
  },

  async getActivityBySlug(slug) {
    const res = await apiClient(`/activities/${slug}`);
    return res.data;
  },

  async getActivityLocations(slugOrId) {
    const res = await apiClient(`/activities/${slugOrId}/locations`);
    return res.data || [];
  },

  async getActivityAvailableDates(slugOrId, locationId = null) {
    const qs = locationId ? `?locationId=${locationId}` : '';
    const res = await apiClient(`/activities/${slugOrId}/dates${qs}`);
    return res.data || [];
  },

  async getActivitySlots(slugOrId, locationId, date) {
    const query = new URLSearchParams();
    if (locationId) query.append('locationId', locationId);
    if (date) query.append('date', date);

    const qs = query.toString() ? `?${query.toString()}` : '';
    const res = await apiClient(`/activities/${slugOrId}/slots${qs}`);
    return res.data || [];
  },

  async getCategories() {
    const res = await apiClient('/activities/categories');
    return res.data || [];
  },

  async getLocationsList() {
    const res = await apiClient('/activities/locations-list');
    return res.data || [];
  },

  // ── Booking & Razorpay Verification ──
  async createBookingOrder(bookingPayload) {
    const res = await apiClient('/activities/book', {
      method: 'POST',
      body: JSON.stringify(bookingPayload),
    });
    return res.data;
  },

  async verifyPayment(paymentPayload) {
    const res = await apiClient('/activities/verify-payment', {
      method: 'POST',
      body: JSON.stringify(paymentPayload),
    });
    return res.data;
  },

  async failPayment(failurePayload) {
    const res = await apiClient('/activities/fail-payment', {
      method: 'POST',
      body: JSON.stringify(failurePayload),
    });
    return res.data;
  },

  // ── Admin Endpoints ──
  async adminGetActivities() {
    const res = await apiClient('/activities/admin/all');
    return res.data || [];
  },

  async adminCreateActivity(data) {
    const res = await apiClient('/activities/admin/create', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    return res.data;
  },

  async adminUpdateActivity(id, data) {
    const res = await apiClient(`/activities/admin/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
    return res.data;
  },

  async adminDeleteActivity(id) {
    const res = await apiClient(`/activities/admin/${id}`, {
      method: 'DELETE',
    });
    return res.data;
  },

  async adminToggleActivityStatus(id) {
    const res = await apiClient(`/activities/admin/${id}/toggle-status`, {
      method: 'PATCH',
    });
    return res.data;
  },

  // ── Admin Slots ──
  async adminGetSlots(params = {}) {
    const query = new URLSearchParams(params);
    const res = await apiClient(`/activities/admin/slots/all?${query.toString()}`);
    return res.data || { total: 0, slots: [] };
  },

  async adminCreateSlot(data) {
    const res = await apiClient('/activities/admin/slots/create', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    return res.data;
  },

  async adminUpdateSlot(id, data) {
    const res = await apiClient(`/activities/admin/slots/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
    return res.data;
  },

  async adminDeleteSlot(id) {
    const res = await apiClient(`/activities/admin/slots/${id}`, {
      method: 'DELETE',
    });
    return res.data;
  },

  async adminToggleSlotStatus(id) {
    const res = await apiClient(`/activities/admin/slots/${id}/toggle-status`, {
      method: 'PATCH',
    });
    return res.data;
  },

  async adminGenerateRecurringSlots(data) {
    const res = await apiClient('/activities/admin/slots/generate-recurring', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    return res.data;
  },

  async adminGetSlotBookings(slotId) {
    const res = await apiClient(`/activities/admin/slots/${slotId}/bookings`);
    return res.data || [];
  },

  // ── Admin Settings ──
  async adminGetEmailSettings() {
    const res = await apiClient('/activities/admin/settings/email');
    return res.data || {};
  },

  async adminUpdateEmailSettings(data) {
    const res = await apiClient('/activities/admin/settings/email', {
      method: 'PUT',
      body: JSON.stringify(data),
    });
    return res.data;
  },
};
