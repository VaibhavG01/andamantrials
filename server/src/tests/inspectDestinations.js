import { connectDatabase } from '../config/database.js';
import { Destination } from '../models/Destination.js';
import { logger } from '../utils/logger.js';

const inspectDestinations = async () => {
  try {
    await connectDatabase();
    const dests = await Destination.findAll();
    logger.info(`Destinations in DB: ${dests.length}`);
    dests.forEach(d => {
      logger.info(`- ID: ${d.id}, Name: ${d.name}, Slug: ${d.slug}`);
    });
    process.exit(0);
  } catch (error) {
    logger.error(error.message);
    process.exit(1);
  }
};

inspectDestinations();
