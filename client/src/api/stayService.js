import { apiClient } from './apiClient';

export const stayService = {
  getStays: () => apiClient('/stays'),
  searchStays: (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return apiClient(`/stays/search?${query}`);
  },
  getStayBySlug: (slug) => apiClient(`/stays/${slug}`),
  getStayRooms: (id) => apiClient(`/stays/${id}/rooms`),
  checkAvailability: (roomId, rooms = 1) => apiClient(`/stays/${roomId}/availability?rooms=${rooms}`),
};
