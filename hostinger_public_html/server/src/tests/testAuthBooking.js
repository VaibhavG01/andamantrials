import { connectDatabase } from '../config/database.js';
import { Booking } from '../models/Booking.js';
import { User } from '../models/User.js';
import { createNewBooking } from '../services/bookingService.js';
import { logger } from '../utils/logger.js';

const testAuthBooking = async () => {
  try {
    await connectDatabase();
    logger.info('=== AUTHENTICATED USER BOOKING ID MAPPING TEST ===');

    // Fetch the standard user Rohan Sharma (usually ID 3 or 4)
    const user = await User.findOne({ where: { email: 'traveler@andaman-trails.com' } });
    if (!user) {
      throw new Error('Traveler user not found in database.');
    }
    
    logger.info(`Found traveler user: ${user.name} (ID: ${user.id})`);

    // Create a mock authenticated booking payload (e.g. Swaraj Dweep to Port Blair Ferry)
    const payload = {
      bookingType: 'FERRY',
      ferryId: 6, // ITT Majestic
      scheduleId: 6, // ITT Majestic schedule
      bookingDate: '2026-08-25',
      totalGuests: 2,
      totalAmount: 3000.00,
      customerName: user.name,
      customerEmail: user.email,
      customerPhone: user.phone || '+91 98765 43210',
    };

    // Simulate creating the booking under this user's identity
    const booking = await createNewBooking(payload, user.toPublicJSON());

    logger.info(`Booking created successfully!`);
    logger.info(`- Booking ID: ${booking.id}`);
    logger.info(`- Booking Number: ${booking.bookingNumber}`);
    logger.info(`- Mapped userId in DB: ${booking.userId} (Expected: ${user.id})`);

    if (booking.userId === user.id) {
      logger.info('✅ SUCCESS: Booking correctly linked to the authenticated user ID in MySQL!');
    } else {
      logger.error('❌ FAILURE: Booking user ID mapping failed.');
    }

    // Clean up
    await booking.destroy();
    logger.info('Test record cleaned up.');
    
    process.exit(0);
  } catch (error) {
    logger.error(`Auth Booking test crashed: ${error.message}`);
    process.exit(1);
  }
};

testAuthBooking();
