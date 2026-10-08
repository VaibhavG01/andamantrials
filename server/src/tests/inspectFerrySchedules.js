import { connectDatabase } from '../config/database.js';
import { FerrySchedule } from '../models/FerrySchedule.js';
import { logger } from '../utils/logger.js';

const inspectFerrySchedules = async () => {
  try {
    await connectDatabase();
    const count = await FerrySchedule.count();
    logger.info(`Number of FerrySchedules in database: ${count}`);
    const schedules = await FerrySchedule.findAll();
    schedules.forEach(s => {
      logger.info(`- ID: ${s.id}, FerryID: ${s.ferryId}, Price: ${s.price}`);
    });
    process.exit(0);
  } catch (error) {
    logger.error(error.message);
    process.exit(1);
  }
};

inspectFerrySchedules();
