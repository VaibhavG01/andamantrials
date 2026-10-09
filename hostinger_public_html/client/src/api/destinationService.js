// client/src/api/destinationService.js
import { apiClient } from './apiClient';

export const destinationService = {
  getDestinations: async (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return apiClient(query ? `/destinations?${query}` : '/destinations');
  },

  getDestinationBySlug: async (slug) => {
    return apiClient(`/destinations/${slug}`);
  },

  getDestinationById: async (id) => {
    return apiClient(`/destinations/${id}`);
  },

  createDestination: async (data) => {
    return apiClient('/destinations', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  updateDestination: async (id, data) => {
    return apiClient(`/destinations/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },

  deleteDestination: async (id) => {
    return apiClient(`/destinations/${id}`, {
      method: 'DELETE',
    });
  },
};
