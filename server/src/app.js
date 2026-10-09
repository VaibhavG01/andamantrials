import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import swaggerUi from 'swagger-ui-express';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import apiRoutes from './routes/index.js';
import { swaggerSpec } from './config/swagger.js';
import { notFoundHandler, errorHandler } from './middlewares/errorMiddleware.js';
import { apiLimiter } from './middlewares/rateLimitMiddleware.js';
import { sequelize, connectDatabase } from './config/database.js';

dotenv.config();

const app = express();

// ── 0. High-Performance Gzip/Brotli Compression
app.use(compression({
  level: 6,
  threshold: 1024,
}));

// ── 1. Security Middlewares
app.use(helmet({
  crossOriginResourcePolicy: { policy: 'cross-origin' },
}));

const configuredOrigins = [
  process.env.FRONTEND_URL,
  ...(process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(',').map(s => s.trim()) : []),
  'http://localhost:5173',
  'http://localhost:3000',
  'http://127.0.0.1:5173',
].filter(Boolean);

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || process.env.NODE_ENV === 'development' || configuredOrigins.includes(origin) || configuredOrigins.some(o => origin.startsWith(o))) {
      callback(null, true);
    } else {
      callback(new Error(`Origin ${origin} not allowed by CORS policy`));
    }
  },
  credentials: true,
  exposedHeaders: ['x-rtb-fingerprint-id', 'request-id']
}));

// ── 2. Request Parsing Middlewares
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// ── 3. Static Media File Serving
const uploadPath = path.join(process.cwd(), 'uploads');
app.use('/uploads', express.static(uploadPath));

// ── 4. API Rate Limiting
app.use('/api/', apiLimiter);

// ── 5. Swagger API Documentation Endpoint
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// ── 6. Health Check Endpoint (/api/v1/health)
app.get('/api/v1/health', async (req, res) => {
  let dbStatus = 'disconnected';
  try {
    await sequelize.authenticate();
    dbStatus = 'connected';
  } catch (err) {
    try {
      await connectDatabase();
      await sequelize.authenticate();
      dbStatus = 'connected';
    } catch (retryErr) {
      dbStatus = 'error: ' + retryErr.message;
    }
  }

  res.status(200).json({
    success: true,
    status: 'OK',
    environment: process.env.NODE_ENV || 'development',
    database: dbStatus,
    dbHost: sequelize.config ? sequelize.config.host : 'unknown',
    dbName: sequelize.config ? sequelize.config.database : 'unknown',
    timestamp: new Date().toISOString(),
  });
});

// ── 7. Primary REST API v1 Routes
app.use(process.env.API_PREFIX || '/api/v1', apiRoutes);

// ── 7.5. Serve Static Frontend Built Assets & SPA Fallback (Production)
const getDistFolder = () => {
  const possiblePaths = [
    path.join(process.cwd(), 'dist'),
    path.join(process.cwd(), 'client', 'dist'),
    path.join(process.cwd(), 'server', 'dist'),
    path.join(__dirname, '../../dist'),
    path.join(__dirname, '../../client/dist'),
    path.join(__dirname, '../dist'),
    path.join(__dirname, '../client/dist'),
  ];
  for (const p of possiblePaths) {
    if (fs.existsSync(path.join(p, 'index.html'))) {
      return p;
    }
  }
  return null;
};

const distDir = getDistFolder();

if (distDir) {
  // 1. Mount assets static middleware first for maximum speed & exact MIME types
  app.use('/assets', express.static(path.join(distDir, 'assets')));

  // 2. Mount root static middleware (favicon, logo, icons, manifest)
  app.use(express.static(distDir, { index: false }));

  // 3. Catch non-existent assets and 404 them cleanly as plain text
  app.use('/assets', (req, res) => {
    res.status(404).type('text/plain').send('Asset Not Found');
  });

  // 4. SPA Fallback for page navigation routes
  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api') || req.path.startsWith('/uploads') || req.path.startsWith('/api-docs')) {
      return next();
    }
    const indexPath = path.join(distDir, 'index.html');
    if (fs.existsSync(indexPath)) {
      return res.sendFile(indexPath);
    }
    next();
  });
}

// ── 8. Error Handling Middlewares
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
