import { connectDatabase } from '../config/database.js';
import { Booking } from '../models/Booking.js';
import { createNewBooking } from '../services/bookingService.js';
import { sendBookingStatusUpdateEmail } from '../services/emailService.js';
import { logger } from '../utils/logger.js';
import { BOOKING_STATUS } from '../constants/bookingStatus.js';

const testAdminBookingMail = async () => {
  try {
    await connectDatabase();
    logger.info('=== ADMIN STATUS UPDATE EMAIL NOTIFICATION TEST ===');

    // 1. Create a confirmed booking to simulate the initial booking notification emails
    logger.info('Creating a new booking to verify creation notifications...');
    const booking = await createNewBooking({
      bookingType: 'FERRY',
      ferryId: 7, // ITT Majestic
      scheduleId: 6, // ITT Majestic schedule
      bookingDate: '2026-08-30',
      totalGuests: 1,
      totalAmount: 1500.00,
      customerName: 'Mail Tester User',
      customerEmail: 'tester@andamantrails.com',
      customerPhone: '+91 99999 00000',
    });

    logger.info(`Booking created successfully. Number: ${booking.bookingNumber}`);

    // 2. Simulate Admin confirming the booking (and changing status to CONFIRMED)
    logger.info('Simulating Admin status update: CONFIRMED...');
    booking.bookingStatus = BOOKING_STATUS.CONFIRMED;
    await booking.save();
    await sendBookingStatusUpdateEmail(booking);

    // 3. Simulate Admin rejecting/cancelling the booking (and changing status to CANCELLED)
    logger.info('Simulating Admin status update: CANCELLED (Reject)...');
    booking.bookingStatus = BOOKING_STATUS.CANCELLED;
    await booking.save();
    await sendBookingStatusUpdateEmail(booking);

    // Clean up
    await booking.destroy();
    logger.info('Test record cleaned up from database.');

    logger.info('✅ SUCCESS: Admin confirmation & rejection email flows verified successfully!');
    process.exit(0);
  } catch (error) {
    logger.error(`Mail integration test crashed: ${error.message}`);
    process.exit(1);
  }
};

testAdminBookingMail();
