import { logger } from '../utils/logger.js';
import fs from 'fs';

export const notFoundHandler = (req, res, next) => {
  if (req.originalUrl && req.originalUrl.startsWith('/assets/')) {
    const ext = req.originalUrl.split('?')[0].split('.').pop()?.toLowerCase();
    if (ext === 'css') {
      return res.status(404).setHeader('Content-Type', 'text/css; charset=utf-8').send('/* Asset Not Found */');
    }
    if (ext === 'js') {
      return res.status(404).setHeader('Content-Type', 'application/javascript; charset=utf-8').send('/* Asset Not Found */');
    }
    return res.status(404).type('text/plain').send('Asset Not Found');
  }
  const error = new Error(`Resource Not Found - ${req.originalUrl}`);
  error.statusCode = 404;
  res.status(404);
  next(error);
};

export const errorHandler = (err, req, res, next) => {
  if (req.originalUrl && req.originalUrl.startsWith('/assets/')) {
    const ext = req.originalUrl.split('?')[0].split('.').pop()?.toLowerCase();
    if (ext === 'css') {
      return res.status(404).setHeader('Content-Type', 'text/css; charset=utf-8').send('/* Asset Error */');
    }
    if (ext === 'js') {
      return res.status(404).setHeader('Content-Type', 'application/javascript; charset=utf-8').send('/* Asset Error */');
    }
    return res.status(404).type('text/plain').send('Asset Not Found');
  }

  let statusCode = err.statusCode || (res.statusCode && res.statusCode !== 200 ? res.statusCode : 500);

  if (err.message && (err.message.includes('Invalid email or password') || err.message.includes('suspended') || err.message.includes('Not authorized'))) {
    statusCode = 401;
  }

  logger.error(`${statusCode} - ${err.message} - ${req.originalUrl} - ${req.method}`);
  if (err.stack && process.env.NODE_ENV !== 'production') {
    logger.error(err.stack);
  }

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
