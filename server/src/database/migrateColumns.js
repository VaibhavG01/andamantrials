import dotenv from 'dotenv';
dotenv.config();
import { sequelize, connectDatabase } from '../config/database.js';

async function migrateColumns() {
  await connectDatabase();
  console.log('Migrating columns safely...');

  const addColumnSafe = async (table, column, typeDef) => {
    try {
      const [cols] = await sequelize.query(`SHOW COLUMNS FROM \`${table}\` LIKE '${column}';`);
      if (cols.length === 0) {
        await sequelize.query(`ALTER TABLE \`${table}\` ADD COLUMN \`${column}\` ${typeDef};`);
        console.log(`✅ Added ${table}.${column}`);
      } else {
        console.log(`ℹ️ ${table}.${column} already exists`);
      }
    } catch (err) {
      console.warn(`⚠️ Error adding ${table}.${column}:`, err.message);
    }
  };

  // Activity columns
  await addColumnSafe('Activities', 'childPrice', 'DECIMAL(10, 2) NULL');
  await addColumnSafe('Activities', 'gallery', 'JSON NULL');
  await addColumnSafe('Activities', 'videoUrl', 'VARCHAR(255) NULL');
  await addColumnSafe('Activities', 'difficulty', 'VARCHAR(50) DEFAULT "Easy"');
  await addColumnSafe('Activities', 'requirements', 'JSON NULL');
  await addColumnSafe('Activities', 'safetyGuidelines', 'JSON NULL');
  await addColumnSafe('Activities', 'safetyInformation', 'TEXT NULL');
  await addColumnSafe('Activities', 'ageRestrictions', 'VARCHAR(100) NULL');
  await addColumnSafe('Activities', 'importantNotes', 'JSON NULL');
  await addColumnSafe('Activities', 'featured', 'TINYINT(1) DEFAULT 0');
  await addColumnSafe('Activities', 'sortOrder', 'INT DEFAULT 0');
  await addColumnSafe('Activities', 'bookingAvailability', 'TINYINT(1) DEFAULT 1');

  // Booking columns
  await addColumnSafe('Bookings', 'activityLocationId', 'INT NULL');
  await addColumnSafe('Bookings', 'slotId', 'INT NULL');
  await addColumnSafe('Bookings', 'activityDate', 'DATE NULL');
  await addColumnSafe('Bookings', 'slotStartTime', 'VARCHAR(50) NULL');
  await addColumnSafe('Bookings', 'slotEndTime', 'VARCHAR(50) NULL');
  await addColumnSafe('Bookings', 'adultCount', 'INT DEFAULT 1');
  await addColumnSafe('Bookings', 'childCount', 'INT DEFAULT 0');
  await addColumnSafe('Bookings', 'infantCount', 'INT DEFAULT 0');
  await addColumnSafe('Bookings', 'adultPrice', 'DECIMAL(10, 2) NULL');
  await addColumnSafe('Bookings', 'childPrice', 'DECIMAL(10, 2) NULL');
  await addColumnSafe('Bookings', 'specialRequests', 'TEXT NULL');
  await addColumnSafe('Bookings', 'internalNotes', 'TEXT NULL');
  await addColumnSafe('Bookings', 'cancelledAt', 'DATETIME NULL');
  await addColumnSafe('Bookings', 'cancellationReason', 'VARCHAR(255) NULL');
  await addColumnSafe('Bookings', 'rescheduledFromBookingId', 'INT NULL');

  console.log('✅ Column migrations finished cleanly.');
  process.exit(0);
}

migrateColumns().catch(err => {
  console.error('Migration failed:', err);
  process.exit(1);
});
