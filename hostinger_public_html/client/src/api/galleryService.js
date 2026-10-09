// client/src/api/galleryService.js
// ─────────────────────────────────────────────────────────────────────────────
// Photo Gallery API Service Layer

import { apiClient } from './apiClient';

export const galleryService = {
  getPhotos: async (params = {}) => {
    const query = new URLSearchParams(params).toString();
    const endpoint = query ? `/gallery?${query}` : '/gallery';
    return apiClient(endpoint);
  },

  getCategories: async () => {
    return apiClient('/gallery/categories');
  },

  getPhotoById: async (id) => {
    return apiClient(`/gallery/${id}`);
  },

  likePhoto: async (id) => {
    return apiClient(`/gallery/${id}/like`, {
      method: 'POST',
    });
  },

  createPhoto: async (data) => {
    return apiClient('/gallery', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  updatePhoto: async (id, data) => {
    return apiClient(`/gallery/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },

  deletePhoto: async (id) => {
    return apiClient(`/gallery/${id}`, {
      method: 'DELETE',
    });
  },
};
