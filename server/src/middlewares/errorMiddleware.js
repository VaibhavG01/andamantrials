import { logger } from '../utils/logger.js';
import fs from 'fs';

export const notFoundHandler = (req, res, next) => {
  const error = new Error(`Resource Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

export const errorHandler = (err, req, res, next) => {
  // If res.statusCode was not specifically modified by route controller, default to 400 for business logic errors instead of 500
  let statusCode = err.statusCode || (res.statusCode !== 200 ? res.statusCode : 400);

  // If it's a known auth message, force 401
  if (err.message && (err.message.includes('Invalid email or password') || err.message.includes('suspended') || err.message.includes('Not authorized'))) {
    statusCode = 401;
  }
  
  logger.error(`${statusCode} - ${err.message} - ${req.originalUrl} - ${req.method}`);
  if (err.stack && process.env.NODE_ENV !== 'production') {
    logger.error(err.stack);
  }

  // Log error to a file for remote debugger access
  try {
    fs.writeFileSync('src/tests/last_error.log', `[${new Date().toISOString()}] Error ${statusCode}: ${err.message}\nStack: ${err.stack}\nBody: ${JSON.stringify(req.body)}\nHeaders: ${JSON.stringify(req.headers)}\n\n`);
  } catch (fsErr) {
    // Ignore fs errors
  }

  res.status(statusCode).json({
    success: false,
    message: err.message || 'Invalid request or credentials provided.',
    errors: err.errors ? err.errors.map(e => e.message || e) : [err.message || 'Invalid request'],
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
};
