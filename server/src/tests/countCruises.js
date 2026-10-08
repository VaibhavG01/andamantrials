import { connectDatabase } from '../config/database.js';
import { Cruise } from '../models/Cruise.js';
import { logger } from '../utils/logger.js';

const countCruises = async () => {
  try {
    await connectDatabase();
    const count = await Cruise.count();
    logger.info(`Number of Cruises in database: ${count}`);
    const cruises = await Cruise.findAll();
    cruises.forEach(c => {
      logger.info(`- ID: ${c.id}, Name: ${c.name}, Slug: ${c.slug}`);
    });
    process.exit(0);
  } catch (error) {
    logger.error(error.message);
    process.exit(1);
  }
};

countCruises();
