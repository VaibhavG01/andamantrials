import { apiClient } from './apiClient';

export const cruiseService = {
  getCruises: (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return apiClient(`/cruises${query ? `?${query}` : ''}`);
  },
  getAllCruises: (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return apiClient(`/cruises${query ? `?${query}` : ''}`);
  },
  searchCruises: (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return apiClient(`/cruises/search?${query}`);
  },
  getCruiseBySlug: (slug) => apiClient(`/cruises/${slug}`),
  checkAvailability: (scheduleId, guests = 1) => apiClient(`/cruises/${scheduleId}/availability?guests=${guests}`),
};
