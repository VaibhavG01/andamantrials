import { connectDatabase } from '../config/database.js';
import { Ferry } from '../models/Ferry.js';
import { logger } from '../utils/logger.js';

const inspectFerries = async () => {
  try {
    await connectDatabase();
    const ferries = await Ferry.findAll();
    logger.info(`Ferries in DB: ${ferries.length}`);
    ferries.forEach(f => {
      logger.info(`- ID: ${f.id}, Name: ${f.name}, Slug: ${f.slug}`);
    });
    process.exit(0);
  } catch (error) {
    logger.error(error.message);
    process.exit(1);
  }
};

inspectFerries();
