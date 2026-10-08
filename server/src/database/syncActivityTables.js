import dotenv from 'dotenv';
dotenv.config();
import { sequelize, connectDatabase } from '../config/database.js';
import {
  Activity,
  ActivityLocation,
  ActivitySlot,
  SlotReservation,
  Setting,
  Booking
} from '../models/index.js';

async function syncActivityTables() {
  await connectDatabase();
  console.log('Syncing Activity tables...');

  // Sync new models with { alter: true }
  await ActivityLocation.sync({ alter: true });
  console.log('✅ ActivityLocation table synced');

  await ActivitySlot.sync({ alter: true });
  console.log('✅ ActivitySlot table synced');

  await SlotReservation.sync({ alter: true });
  console.log('✅ SlotReservation table synced');

  await Setting.sync({ alter: true });
  console.log('✅ Setting table synced');

  await Activity.sync({ alter: true });
  console.log('✅ Activity table synced');

  await Booking.sync({ alter: true });
  console.log('✅ Booking table synced');

  console.log('All Activity models and tables synced successfully!');
  process.exit(0);
}

syncActivityTables().catch(err => {
  console.error('Migration error:', err);
  process.exit(1);
});
