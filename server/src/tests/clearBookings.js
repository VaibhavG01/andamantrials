import { connectDatabase } from '../config/database.js';
import { Booking } from '../models/Booking.js';
import { logger } from '../utils/logger.js';

const clearBookings = async () => {
  try {
    await connectDatabase();
    await Booking.destroy({ where: {} });
    logger.info('✅ Successfully deleted all bookings from database.');
    process.exit(0);
  } catch (error) {
    logger.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

clearBookings();
