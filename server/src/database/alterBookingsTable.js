import { sequelize } from '../models/index.js';
import { connectDatabase } from '../config/database.js';
import { logger } from '../utils/logger.js';

const run = async () => {
  try {
    await connectDatabase();
    logger.info('Starting bookings table column alteration...');

    const dialect = sequelize.getDialect();
    const queryInterface = sequelize.getQueryInterface();
    const tableInfo = await queryInterface.describeTable('Bookings');
    
    if (!tableInfo.activityId) {
      try {
        await queryInterface.addColumn('Bookings', 'activityId', {
          type: sequelize.Sequelize.INTEGER,
          allowNull: true,
        });
        logger.info('✅ Added activityId column to Bookings table');
      } catch (err) {
        logger.warn(`Could not add activityId: ${err.message}`);
      }
    } else {
      logger.info('activityId column already exists.');
    }

    if (!tableInfo.packageId) {
      try {
        await queryInterface.addColumn('Bookings', 'packageId', {
          type: sequelize.Sequelize.INTEGER,
          allowNull: true,
        });
        logger.info('✅ Added packageId column to Bookings table');
      } catch (err) {
        logger.warn(`Could not add packageId: ${err.message}`);
      }
    } else {
      logger.info('packageId column already exists.');
    }

    if (dialect === 'mysql') {
      try {
        await sequelize.query("ALTER TABLE bookings MODIFY COLUMN bookingType ENUM('FERRY', 'CRUISE', 'STAY', 'ACTIVITY', 'PACKAGE') NOT NULL");
        logger.info('✅ Expanded bookingType ENUM to FERRY, CRUISE, STAY, ACTIVITY, PACKAGE');
      } catch (err) {
        logger.warn(`Could not modify bookingType ENUM: ${err.message}`);
      }
    }

    process.exit(0);
  } catch (err) {
    logger.error('Failed to run bookings alteration script:', err);
    process.exit(1);
  }
};

run();
