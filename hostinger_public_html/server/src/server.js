import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../.env') });
dotenv.config({ path: path.resolve(__dirname, '../../.env') });
dotenv.config();

import app from './app.js';
import { connectDatabase } from './config/database.js';
import { verifyMailConnection } from './config/mail.js';
import { seedDatabase } from './database/seed.js';
import { initScheduler } from './services/schedulerService.js';
import { logger } from './utils/logger.js';

const PORT = process.env.PORT || 5000;

const startServer = () => {
  try {
    // 1. Start HTTP Server immediately so website frontend and assets serve without delay
    const server = app.listen(PORT, () => {
      logger.info(`==================================================`);
      logger.info(`🚀 ANDAMAN TRAILS BACKEND SERVER IS RUNNING`);
      logger.info(`🌐 PORT: ${PORT}`);
      logger.info(`🔗 HEALTH: http://localhost:${PORT}/api/v1/health`);
      logger.info(`📚 DOCS: http://localhost:${PORT}/api-docs`);
      logger.info(`==================================================`);

      // Initialize background task scheduler
      initScheduler();
    });

    // 2. Connect Database asynchronously
    connectDatabase()
      .then(() => seedDatabase())
      .catch((err) => logger.warn(`Database connection notice: ${err.message}`));

    // 3. Verify Mail Transporter asynchronously
    verifyMailConnection().catch((err) => logger.warn(`Mail verification notice: ${err.message}`));

    // Unhandled Rejections
    process.on('unhandledRejection', (err) => {
      logger.error(`Unhandled Rejection: ${err.message}`);
    });
  } catch (error) {
    logger.error(`Fatal Server Startup Error: ${error.message}`);
  }
};

startServer();
