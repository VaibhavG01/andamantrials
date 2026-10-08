import { sequelize } from '../models/index.js';
import { connectDatabase } from '../config/database.js';
import { logger } from '../utils/logger.js';

const run = async () => {
  try {
    await connectDatabase();
    logger.info('Checking database dialect for constraint drop...');

    const dialect = sequelize.getDialect();
    if (dialect === 'mysql') {
      logger.info('MySQL detected. Attempting to drop bookings_ibfk_5 foreign key constraint...');
      try {
        await sequelize.query('ALTER TABLE bookings DROP FOREIGN KEY bookings_ibfk_5');
        logger.info('✅ Successfully dropped bookings_ibfk_5 constraint!');
      } catch (err) {
        if (err.message.includes('check that it exists') || err.message.includes('Error 1091') || err.message.includes('does not exist')) {
          logger.info('bookings_ibfk_5 constraint already dropped or does not exist.');
        } else {
          logger.warn(`Could not drop bookings_ibfk_5: ${err.message}`);
        }
      }
    } else {
      logger.info(`Dialect is ${dialect.toUpperCase()}. No need to drop MySQL foreign key constraint.`);
    }

    process.exit(0);
  } catch (err) {
    logger.error('Failed to run constraint drop script:', err);
    process.exit(1);
  }
};

run();
