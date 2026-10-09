import { body } from 'express-validator';

export const ferryValidation = [
  body('name').notEmpty().withMessage('Ferry name is required'),
  body('operator').notEmpty().withMessage('Ferry operator is required'),
  body('capacity').optional().isInt({ min: 1 }).withMessage('Capacity must be positive integer'),
];

export const ferryScheduleValidation = [
  body('ferryId').optional().isInt().withMessage('Ferry ID must be an integer'),
  body('routeId').isInt().withMessage('Route ID is required'),
  body('travelDate').isISO8601().withMessage('Travel date must be YYYY-MM-DD'),
  body('departureTime').notEmpty().withMessage('Departure time is required'),
  body('arrivalTime').notEmpty().withMessage('Arrival time is required'),
  body('price').isFloat({ min: 0 }).withMessage('Price must be a valid non-negative number'),
];
