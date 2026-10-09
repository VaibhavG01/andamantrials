// client/src/api/uploadService.js
import { apiClient, BASE_API_URL } from './apiClient';

export const uploadService = {
  // Upload a single image file
  uploadSingle: async (file) => {
    const formData = new FormData();
    formData.append('image', file);

    const token = localStorage.getItem('andaman_token') || sessionStorage.getItem('andaman_token');
    const headers = {};
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const res = await fetch(`${BASE_API_URL}/upload/single`, {
      method: 'POST',
      headers,
      body: formData,
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.message || 'Image upload failed');
    }

    return res.json();
  },

  // Upload multiple images at once (multi-image upload)
  uploadMultiple: async (files) => {
    const formData = new FormData();
    const fileList = Array.isArray(files) ? files : Array.from(files);
    
    fileList.forEach(file => {
      formData.append('images', file);
    });

    const token = localStorage.getItem('andaman_token') || sessionStorage.getItem('andaman_token');
    const headers = {};
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const res = await fetch(`${BASE_API_URL}/upload/multiple`, {
      method: 'POST',
      headers,
      body: formData,
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.message || 'Multiple images upload failed');
    }

    return res.json();
  },

  // Fetch Media Library
  getMediaLibrary: async (page = 1, limit = 50) => {
    return apiClient(`/upload/library?page=${page}&limit=${limit}`);
  },

  // Delete Media
  deleteMedia: async (id) => {
    return apiClient(`/upload/${id}`, {
      method: 'DELETE',
    });
  },
};
