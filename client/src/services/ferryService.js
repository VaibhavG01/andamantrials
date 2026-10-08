// src/services/ferryService.js
// ─────────────────────────────────────────────────────────────────────────────
// Live Ferry API Service Layer — Real Backend /api/v1/ferries Data Flow

import { ferryService as apiFerryService } from '../api/ferryService';
import { apiClient } from '../api/apiClient';

export async function getAllFerries(params = {}) {
  try {
    const res = await apiFerryService.getFerries(params);
    return { data: res?.data || [], success: true };
  } catch (error) {
    console.error('Error fetching ferries from DB:', error);
    return { data: [], success: false, error: error.message };
  }
}

export async function getFerryBySlug(slug) {
  try {
    const res = await apiFerryService.getFerryBySlug(slug);
    return { data: res?.data || null, success: true };
  } catch (error) {
    console.error(`Error fetching ferry [${slug}] from DB:`, error);
    return { data: null, success: false, error: error.message };
  }
}

export async function checkFerryAvailability(params = {}) {
  try {
    const res = await apiFerryService.searchFerries(params);
    return {
      data: res?.data || [],
      success: true,
    };
  } catch (error) {
    console.error('Error checking ferry availability:', error);
    return { data: [], success: false, error: error.message };
  }
}

export async function bookFerry(bookingPayload) {
  try {
    const res = await apiClient('/bookings', {
      method: 'POST',
      body: JSON.stringify({
        ...bookingPayload,
        bookingType: 'FERRY',
      }),
    });
    return { data: res?.data || res, success: true };
  } catch (error) {
    console.error('Error booking ferry ticket:', error);
    throw error;
  }
}

export const searchFerries = checkFerryAvailability;
export const bookFerryTicket = bookFerry;
export const ferryService = apiFerryService;
export default apiFerryService;
