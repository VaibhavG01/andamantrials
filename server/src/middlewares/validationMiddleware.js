import { validationResult } from 'express-validator';
import { errorResponse } from '../utils/apiResponse.js';

export const validateRequest = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const formattedErrors = errors.array().map(err => `${err.path || err.param}: ${err.msg}`);
    return errorResponse(res, 'Validation failed', formattedErrors, 400);
  }
  next();
};
