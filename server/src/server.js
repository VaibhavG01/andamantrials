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

const startServer = async () => {
  try {
    // Connect Database
    await connectDatabase();

    // Verify Mail Transporter
    await verifyMailConnection();

    // Run Development Seeder
    await seedDatabase();

    // Start HTTP Server
    const server = app.listen(PORT, () => {
      logger.info(`==================================================`);
      logger.info(`🚀 ANDAMAN TRAILS BACKEND SERVER IS RUNNING`);
      logger.info(`🌐 PORT: ${PORT}`);
      logger.info(`🔗 HEALTH: http://localhost:${PORT}/api/v1/health`);
      logger.info(`📚 DOCS: http://localhost:${PORT}/api-docs`);
      logger.info(`==================================================`);
      
      // Initialize Background Task Scheduler for status updates and reminders
      initScheduler();
    });

    // Unhandled Rejections
    process.on('unhandledRejection', (err) => {
      logger.error(`Unhandled Rejection: ${err.message}`);
      server.close(() => process.exit(1));
    });
  } catch (error) {
    logger.error(`Fatal Server Startup Error: ${error.message}`);
    process.exit(1);
  }
};

startServer();
