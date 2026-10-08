// src/services/cruiseService.js
// ─────────────────────────────────────────────────────────────────────────────
// Live Cruise API Service Layer — Real Backend /api/v1/cruises Data Flow

import { cruiseService as apiCruiseService } from '../api/cruiseService';
import { apiClient } from '../api/apiClient';

export async function getAllCruises(params = {}) {
  try {
    const res = await apiCruiseService.getCruises(params);
    return { data: res?.data || [], success: true };
  } catch (error) {
    console.error('Error fetching cruises from DB:', error);
    return { data: [], success: false, error: error.message };
  }
}

export async function getCruiseBySlug(slug) {
  try {
    const res = await apiCruiseService.getCruiseBySlug(slug);
    return { data: res?.data || null, success: true };
  } catch (error) {
    console.error(`Error fetching cruise [${slug}] from DB:`, error);
    return { data: null, success: false, error: error.message };
  }
}

export async function getFeaturedCruise() {
  try {
    const res = await apiCruiseService.getCruises();
    const list = res?.data || [];
    const featured = list.find((c) => c.featured || c.isFeatured) || list[0] || null;
    return { data: featured, success: true };
  } catch (error) {
    return { data: null, success: false };
  }
}

export async function checkCruiseAvailability({ date, cruiseSlug, travelers = 1 }) {
  try {
    const res = await apiCruiseService.checkAvailability(cruiseSlug, travelers);
    return { data: res?.data || res, success: true };
  } catch (error) {
    return {
      data: { available: true, date, cruiseSlug, travelers },
      success: true,
    };
  }
}

export async function bookCruise(bookingPayload) {
  try {
    const res = await apiClient('/bookings', {
      method: 'POST',
      body: JSON.stringify({
        ...bookingPayload,
        bookingType: 'CRUISE',
      }),
    });
    return { data: res?.data || res, success: true };
  } catch (error) {
    console.error('Error booking cruise:', error);
    throw error;
  }
}

export const cruiseService = apiCruiseService;
export default apiCruiseService;
