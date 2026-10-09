import { body } from 'express-validator';

export const blogValidation = [
  body('title').notEmpty().withMessage('Blog title is required'),
  body('content').notEmpty().withMessage('Blog content is required'),
];
