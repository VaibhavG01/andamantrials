import { body } from 'express-validator';

export const cruiseValidation = [
  body('name').notEmpty().withMessage('Cruise name is required'),
  body('price').isFloat({ min: 0 }).withMessage('Price must be a valid number'),
  body('capacity').optional().isInt({ min: 1 }).withMessage('Capacity must be positive'),
];
