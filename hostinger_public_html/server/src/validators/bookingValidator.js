import { body } from 'express-validator';
import { BOOKING_TYPES } from '../constants/bookingStatus.js';

export const createBookingValidation = [
  body('bookingType').isIn(Object.values(BOOKING_TYPES)).withMessage('Invalid booking type'),
  body('bookingDate').isISO8601().withMessage('Valid booking date is required (YYYY-MM-DD)'),
  body('totalGuests').isInt({ min: 1 }).withMessage('Guest count must be at least 1'),
  body('customerName').notEmpty().withMessage('Customer name is required'),
  body('customerEmail').isEmail().withMessage('Valid customer email is required'),
  body('customerPhone').notEmpty().withMessage('Customer phone is required'),
];
