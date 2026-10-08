import { body } from 'express-validator';

export const inquiryValidation = [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('phone').optional().isString(),
  body('message').optional().isString(),
];
