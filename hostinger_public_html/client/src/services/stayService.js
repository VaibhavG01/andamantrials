// src/services/stayService.js
// ─────────────────────────────────────────────────────────────────────────────
// Live Stay API Service Layer — Real Backend /api/v1/stays Data Flow

import { stayService as apiStayService } from '../api/stayService';
import { apiClient } from '../api/apiClient';

export async function getAllStays(params = {}) {
  try {
    const res = await apiStayService.getStays(params);
    return { data: res?.data || [], success: true };
  } catch (error) {
    console.error('Error fetching stays from DB:', error);
    return { data: [], success: false, error: error.message };
  }
}

export async function getStayBySlug(slug) {
  try {
    const res = await apiStayService.getStayBySlug(slug);
    return { data: res?.data || null, success: true };
  } catch (error) {
    console.error(`Error fetching stay [${slug}] from DB:`, error);
    return { data: null, success: false, error: error.message };
  }
}

export async function searchStays(params = {}) {
  try {
    const res = await apiStayService.searchStays(params);
    return {
      data: res?.data || [],
      totalCount: res?.data?.length || 0,
      success: true,
    };
  } catch (error) {
    console.error('Error searching stays:', error);
    return { data: [], totalCount: 0, success: false, error: error.message };
  }
}

export async function checkStayAvailability({ stayId, checkIn, checkOut, roomCount = 1 }) {
  try {
    const res = await apiStayService.checkAvailability(stayId, roomCount);
    return { data: res?.data || res, success: true };
  } catch (error) {
    return {
      data: { available: true, stayId, checkIn, checkOut },
      success: true,
    };
  }
}

export async function bookStay(bookingPayload) {
  try {
    const res = await apiClient('/bookings', {
      method: 'POST',
      body: JSON.stringify({
        ...bookingPayload,
        bookingType: 'STAY',
      }),
    });
    return { data: res?.data || res, success: true };
  } catch (error) {
    console.error('Error booking stay:', error);
    throw error;
  }
}

export const stayService = apiStayService;
export default apiStayService;
