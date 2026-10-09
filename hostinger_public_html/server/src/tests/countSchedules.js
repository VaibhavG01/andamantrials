import { connectDatabase } from '../config/database.js';
import { CruiseSchedule } from '../models/CruiseSchedule.js';
import { logger } from '../utils/logger.js';

const countSchedules = async () => {
  try {
    await connectDatabase();
    const count = await CruiseSchedule.count();
    logger.info(`Number of CruiseSchedules in database: ${count}`);
    const schedules = await CruiseSchedule.findAll();
    schedules.forEach(s => {
      logger.info(`- ID: ${s.id}, CruiseID: ${s.cruiseId}, Status: ${s.status}`);
    });
    process.exit(0);
  } catch (error) {
    logger.error(error.message);
    process.exit(1);
  }
};

countSchedules();
