// client/src/api/masterService.js
// ─────────────────────────────────────────────────────────────────────────────
// Service for Categories, Locations, and Media File Uploads

import { apiClient } from './apiClient';
import axiosClient from '../admin/api/axiosClient';

export const masterService = {
  // ── Categories ──
  async getCategories(type = '') {
    const qs = type ? `?type=${type}` : '';
    const res = await apiClient(`/master/categories${qs}`);
    return res.data || [];
  },

  async createCategory(data) {
    return axiosClient.post('/master/categories', data);
  },

  async updateCategory(id, data) {
    return axiosClient.put(`/master/categories/${id}`, data);
  },

  async deleteCategory(id) {
    return axiosClient.delete(`/master/categories/${id}`);
  },

  // ── Locations ──
  async getLocations(island = '') {
    const qs = island ? `?island=${encodeURIComponent(island)}` : '';
    const res = await apiClient(`/master/locations${qs}`);
    return res.data || [];
  },

  async createLocation(data) {
    return axiosClient.post('/master/locations', data);
  },

  async updateLocation(id, data) {
    return axiosClient.put(`/master/locations/${id}`, data);
  },

  async deleteLocation(id) {
    return axiosClient.delete(`/master/locations/${id}`);
  },

  // ── File Uploads ──
  async uploadSingleImage(file) {
    const formData = new FormData();
    formData.append('image', file);
    const res = await axiosClient.post('/upload/single', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    // res is unwrapped data by axiosClient: { success: true, data: { url: '...' } }
    return res?.data?.url || res?.url || '';
  },

  async uploadMultipleImages(files) {
    const formData = new FormData();
    Array.from(files).forEach((file) => {
      formData.append('images', file);
    });
    const res = await axiosClient.post('/upload/multiple', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    const items = res?.data || res || [];
    return Array.isArray(items) ? items.map((i) => i.url) : [];
  },
};

export default masterService;
