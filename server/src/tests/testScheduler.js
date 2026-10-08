import { connectDatabase } from '../config/database.js';
import { Booking } from '../models/Booking.js';
import { processDailyBookingUpdates } from '../services/schedulerService.js';
import { logger } from '../utils/logger.js';
import { BOOKING_STATUS } from '../constants/bookingStatus.js';

const testScheduler = async () => {
  try {
    await connectDatabase();
    logger.info('=== SCHEDULER SYSTEM INTEGRATION & VERIFICATION TEST ===');

    const today = new Date();
    
    // 1. Create a past booking (yesterday)
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().split('T')[0];
    
    const pastBooking = await Booking.create({
      bookingNumber: `PST-${Date.now().toString().slice(-6)}`,
      bookingType: 'FERRY',
      bookingDate: yesterdayStr,
      totalGuests: 1,
      totalAmount: 1500.00,
      customerName: 'Past Traveler',
      customerEmail: 'past@traveler.com',
      customerPhone: '+91 99999 99999',
      bookingStatus: BOOKING_STATUS.CONFIRMED,
      paymentStatus: 'PAID',
    });
    logger.info(`Created past booking ID: ${pastBooking.id} with Date: ${pastBooking.bookingDate}, Status: ${pastBooking.bookingStatus}`);

    // 2. Create a future booking (in 7 days)
    const futureDate = new Date();
    futureDate.setDate(today.getDate() + 7);
    const futureDateStr = futureDate.toISOString().split('T')[0];
    
    const reminderBooking = await Booking.create({
      bookingNumber: `RMD-${Date.now().toString().slice(-6)}`,
      bookingType: 'FERRY',
      bookingDate: futureDateStr,
      totalGuests: 2,
      totalAmount: 3000.00,
      customerName: 'Reminder Recipient',
      customerEmail: 'recipient@traveler.com',
      customerPhone: '+91 88888 88888',
      bookingStatus: BOOKING_STATUS.CONFIRMED,
      paymentStatus: 'PAID',
    });
    logger.info(`Created reminder booking ID: ${reminderBooking.id} with Date: ${reminderBooking.bookingDate}, Status: ${reminderBooking.bookingStatus}`);

    // 3. Trigger scheduler update process
    logger.info('Triggering processDailyBookingUpdates()...');
    await processDailyBookingUpdates();

    // 4. Verify results
    const updatedPast = await Booking.findByPk(pastBooking.id);
    logger.info(`Updated Past Booking Status: ${updatedPast.bookingStatus} (Expected: COMPLETED)`);
    if (updatedPast.bookingStatus === BOOKING_STATUS.COMPLETED) {
      logger.info('✅ SUCCESS: Past trip auto-completed successfully.');
    } else {
      logger.error('❌ FAILURE: Past trip status not updated.');
    }

    // 5. Cleanup
    await pastBooking.destroy();
    await reminderBooking.destroy();
    logger.info('Cleaned up test booking records from database.');
    
    process.exit(0);
  } catch (error) {
    logger.error(`Scheduler test crash: ${error.message}`);
    process.exit(1);
  }
};

testScheduler();
