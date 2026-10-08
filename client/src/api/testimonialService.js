// client/src/api/testimonialService.js
// ─────────────────────────────────────────────────────────────────────────────
// Testimonials & Reviews API Service Layer

import { apiClient } from './apiClient';

export const testimonialService = {
  getTestimonials: async (params = {}) => {
    const query = new URLSearchParams(params).toString();
    const endpoint = query ? `/testimonials?${query}` : '/testimonials';
    return apiClient(endpoint);
  },

  createTestimonial: async (data) => {
    return apiClient('/testimonials', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  getReviews: async (params = {}) => {
    const query = new URLSearchParams(params).toString();
    const endpoint = query ? `/reviews?${query}` : '/reviews';
    return apiClient(endpoint);
  },

  createReview: async (data) => {
    return apiClient('/reviews', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },
};
