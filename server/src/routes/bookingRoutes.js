import express from 'express';
import {
  createBooking,
  getBookingByNumber,
  getMyBookings,
  getBookingById,
  cancelBooking,
  getAllBookingsAdmin,
  updateBookingStatusAdmin
} from '../controllers/bookingController.js';
import { protect, optionalProtect } from '../middlewares/authMiddleware.js';
import { adminOnly, staffOrAdmin } from '../middlewares/adminMiddleware.js';
import { createBookingValidation } from '../validators/bookingValidator.js';
import { validateRequest } from '../middlewares/validationMiddleware.js';

const router = express.Router();

// Protected Booking Creation (Requires User Authentication)
router.post('/', protect, createBookingValidation, validateRequest, createBooking);

// User & Guest Booking Lookup Routes
router.get('/my-bookings', optionalProtect, getMyBookings);
router.get('/number/:bookingNumber', optionalProtect, getBookingByNumber);
router.get('/:id', optionalProtect, getBookingById);
router.put('/:id/cancel', optionalProtect, cancelBooking);

// Admin Routes
router.get('/admin/all', protect, staffOrAdmin, getAllBookingsAdmin);
router.put('/admin/:id/status', protect, staffOrAdmin, updateBookingStatusAdmin);
router.put('/:id/status', protect, staffOrAdmin, updateBookingStatusAdmin);

export default router;
