import { apiClient } from './apiClient';

export const ferryService = {
  getFerries: () => apiClient('/ferries'),
  getRoutes: () => apiClient('/ferries/routes'),
  searchFerries: (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return apiClient(`/ferries/search?${query}`);
  },
  getFerryBySlug: (slug) => apiClient(`/ferries/${slug}`),
  checkAvailability: (scheduleId, passengers = 1) => apiClient(`/ferries/${scheduleId}/availability?passengers=${passengers}`),
};
