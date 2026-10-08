import express from 'express';
import { protect } from '../middlewares/authMiddleware.js';
import { receptionistOrAdmin } from '../middlewares/receptionMiddleware.js';
import {
  getReceptionDashboard,
  globalSearch,
  getBookings,
  getBookingById,
  createBooking,
  updateBooking,
  checkInGuest,
  checkOutGuest,
  recordBookingPayment,
  cancelBooking,
  getCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  getStaysAvailability,
  getFerriesAvailability,
  getCruisesAvailability,
  getInquiries,
  updateInquiryStatus,
  getContactMessages,
  updateContactMessageStatus,
  getShiftStatus,
  toggleShift
} from '../controllers/receptionController.js';

const router = express.Router();

// Apply auth and role protection to all routes
router.use(protect);
router.use(receptionistOrAdmin);

// Dashboard & Search
router.get('/dashboard', getReceptionDashboard);
router.get('/search', globalSearch);

// Bookings
router.get('/bookings', getBookings);
router.get('/bookings/:id', getBookingById);
router.post('/bookings', createBooking);
router.put('/bookings/:id', updateBooking);
router.post('/bookings/:id/check-in', checkInGuest);
router.post('/bookings/:id/check-out', checkOutGuest);
router.post('/bookings/:id/payment', recordBookingPayment);
router.post('/bookings/:id/cancel', cancelBooking);

// Customers
router.get('/customers', getCustomers);
router.get('/customers/:id', getCustomerById);
router.post('/customers', createCustomer);
router.put('/customers/:id', updateCustomer);

// Availability
router.get('/stays/availability', getStaysAvailability);
router.get('/ferries/availability', getFerriesAvailability);
router.get('/cruises/availability', getCruisesAvailability);

// Inquiries & Support requests
router.get('/inquiries', getInquiries);
router.put('/inquiries/:id', updateInquiryStatus);
router.get('/contact', getContactMessages);
router.put('/contact/:id', updateContactMessageStatus);

// Shift Status
router.get('/shift/status', getShiftStatus);
router.post('/shift/toggle', toggleShift);

export default router;
