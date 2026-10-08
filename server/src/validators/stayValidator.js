import { body } from 'express-validator';

export const stayValidation = [
  body('name').notEmpty().withMessage('Stay name is required'),
  body('pricePerNight').isFloat({ min: 0 }).withMessage('Price per night must be valid positive number'),
];
