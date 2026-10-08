import express from 'express';
import {
  getActivities,
  getActivityById,
  getActivityLocations,
  getActivityDates,
  getActivitySlots,
  createActivityBooking,
  verifyActivityPayment,
  failActivityPayment,
  getActivityCategories,
  getActivityLocationList,
  adminGetActivities,
  adminCreateActivity,
  adminUpdateActivity,
  adminDeleteActivity,
  adminToggleActivityStatus,
  adminGetActivitySlots,
  adminCreateSlot,
  adminUpdateSlot,
  adminDeleteSlot,
  adminToggleSlotStatus,
  adminGenerateRecurringSlots,
  adminGetSlotBookings,
  adminGetEmailSettings,
  adminUpdateEmailSettings,
} from '../controllers/activityController.js';
import { protect, optionalProtect } from '../middlewares/authMiddleware.js';
import { editorOrAdmin } from '../middlewares/editorMiddleware.js';

const router = express.Router();

// ── Public Activity Discovery & Booking Routes ──
router.get('/', getActivities);
router.get('/categories', getActivityCategories);
router.get('/locations-list', getActivityLocationList);
router.get('/:id', getActivityById);
router.get('/:id/locations', getActivityLocations);
router.get('/:id/dates', getActivityDates);
router.get('/:id/slots', getActivitySlots);

// ── Activity Booking & Razorpay Verification ──
router.post('/book', optionalProtect, createActivityBooking);
router.post('/verify-payment', optionalProtect, verifyActivityPayment);
router.post('/fail-payment', optionalProtect, failActivityPayment);

// ── Admin Management Routes ──
router.get('/admin/all', protect, editorOrAdmin, adminGetActivities);
router.post('/admin/create', protect, editorOrAdmin, adminCreateActivity);
router.put('/admin/:id', protect, editorOrAdmin, adminUpdateActivity);
router.delete('/admin/:id', protect, editorOrAdmin, adminDeleteActivity);
router.patch('/admin/:id/toggle-status', protect, editorOrAdmin, adminToggleActivityStatus);

// ── Admin Slot Management ──
router.get('/admin/slots/all', protect, editorOrAdmin, adminGetActivitySlots);
router.post('/admin/slots/create', protect, editorOrAdmin, adminCreateSlot);
router.put('/admin/slots/:id', protect, editorOrAdmin, adminUpdateSlot);
router.delete('/admin/slots/:id', protect, editorOrAdmin, adminDeleteSlot);
router.patch('/admin/slots/:id/toggle-status', protect, editorOrAdmin, adminToggleSlotStatus);
router.post('/admin/slots/generate-recurring', protect, editorOrAdmin, adminGenerateRecurringSlots);
router.get('/admin/slots/:id/bookings', protect, editorOrAdmin, adminGetSlotBookings);

// ── Admin Settings ──
router.get('/admin/settings/email', protect, editorOrAdmin, adminGetEmailSettings);
router.put('/admin/settings/email', protect, editorOrAdmin, adminUpdateEmailSettings);

export default router;
