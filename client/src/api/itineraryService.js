// client/src/api/itineraryService.js
import { apiClient } from './apiClient';

export const itineraryService = {
  getItineraries: async (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return apiClient(query ? `/itineraries?${query}` : '/itineraries');
  },

  getItineraryById: async (id) => {
    return apiClient(`/itineraries/${id}`);
  },

  createItinerary: async (data) => {
    return apiClient('/itineraries', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  updateItinerary: async (id, data) => {
    return apiClient(`/itineraries/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },

  deleteItinerary: async (id) => {
    return apiClient(`/itineraries/${id}`, {
      method: 'DELETE',
    });
  },

  addDay: async (itineraryId, dayData) => {
    return apiClient(`/itineraries/${itineraryId}/days`, {
      method: 'POST',
      body: JSON.stringify(dayData),
    });
  },

  updateDay: async (itineraryId, dayId, dayData) => {
    return apiClient(`/itineraries/${itineraryId}/days/${dayId}`, {
      method: 'PUT',
      body: JSON.stringify(dayData),
    });
  },

  deleteDay: async (itineraryId, dayId) => {
    return apiClient(`/itineraries/${itineraryId}/days/${dayId}`, {
      method: 'DELETE',
    });
  },

  reorderDays: async (itineraryId, daysArray) => {
    return apiClient(`/itineraries/${itineraryId}/reorder`, {
      method: 'PUT',
      body: JSON.stringify({ days: daysArray }),
    });
  },
};
