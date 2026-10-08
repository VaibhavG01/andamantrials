// client/src/api/packageService.js
// ─────────────────────────────────────────────────────────────────────────────
// Tour Packages API Service Layer — Communicates with /api/v1/packages backend

import { apiClient } from './apiClient';

export const packageService = {
  getPackages: async (params = {}) => {
    const query = new URLSearchParams(params).toString();
    const endpoint = query ? `/packages?${query}` : '/packages';
    const res = await apiClient(endpoint);
    return res;
  },

  getPackageBySlug: async (slug) => {
    const res = await apiClient(`/packages/${slug}`);
    return res;
  },

  getPackageById: async (id) => {
    const res = await apiClient(`/packages/${id}`);
    return res;
  },

  createPackage: async (data) => {
    return apiClient('/packages', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  updatePackage: async (id, data) => {
    return apiClient(`/packages/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },

  deletePackage: async (id) => {
    return apiClient(`/packages/${id}`, {
      method: 'DELETE',
    });
  },
};
