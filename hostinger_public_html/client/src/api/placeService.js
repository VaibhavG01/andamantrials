// client/src/api/placeService.js
// ─────────────────────────────────────────────────────────────────────────────
// Tourist Places & Attractions API Service Layer

import { apiClient } from './apiClient';

export const placeService = {
  getPlaces: async (params = {}) => {
    const query = new URLSearchParams(params).toString();
    const endpoint = query ? `/places?${query}` : '/places';
    return apiClient(endpoint);
  },

  getPlaceBySlug: async (slug) => {
    return apiClient(`/places/${slug}`);
  },

  getPlaceById: async (id) => {
    return apiClient(`/places/${id}`);
  },
};
