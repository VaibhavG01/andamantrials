import { Booking, User, Ferry, Cruise, Stay } from '../models/index.js';
import { connectDatabase } from '../config/database.js';
import { logger } from '../utils/logger.js';

const run = async () => {
  try {
    await connectDatabase();
    logger.info('Adding Ferry, Cruise, and Stay operational test bookings...');

    // Fetch existing entities
    const standardUser = await User.findOne({ where: { email: 'traveler@andaman-trails.com' } });
    const user2 = await User.findOne({ where: { email: 'receptionist@andaman-trails.com' } });

    const ferry = await Ferry.findOne();
    const cruise = await Cruise.findOne();
    const stay = await Stay.findOne();

    if (!standardUser || !ferry || !cruise || !stay) {
      logger.error('Failed to locate reference entities for bookings creation! Run seedDatabase first.');
      process.exit(1);
    }

    const todayStr = new Date().toISOString().split('T')[0];

    // Seed Ferry Booking
    await Booking.create({
      bookingNumber: 'AT-FRY-2026-000501',
      userId: standardUser.id,
      bookingType: 'FERRY',
      ferryId: ferry.id,
      bookingDate: todayStr,
      checkInDate: todayStr,
      totalGuests: 2,
      totalAmount: 3300.00,
      paymentStatus: 'PAID',
      bookingStatus: 'CONFIRMED',
      customerName: 'Rahul Kumar',
      customerEmail: 'rahul.kumar@example.com',
      customerPhone: '+919988001122',
      notes: 'Window seats requested'
    });

    // Seed Cruise Booking
    await Booking.create({
      bookingNumber: 'AT-CRS-2026-000502',
      userId: standardUser.id,
      bookingType: 'CRUISE',
      cruiseId: cruise.id,
      bookingDate: todayStr,
      checkInDate: todayStr,
      totalGuests: 4,
      totalAmount: 10000.00,
      paymentStatus: 'PAID',
      bookingStatus: 'CONFIRMED',
      customerName: 'Sanjay Dutt',
      customerEmail: 'sanjay.dutt@example.com',
      customerPhone: '+919876123456',
      notes: 'Golden Hour Cruise Deck'
    });

    // Seed Stay Booking
    await Booking.create({
      bookingNumber: 'AT-STY-2026-000503',
      userId: user2.id,
      bookingType: 'STAY',
      stayId: stay.id,
      bookingDate: todayStr,
      checkInDate: todayStr,
      totalGuests: 2,
      totalAmount: 15500.00,
      paymentStatus: 'PAID',
      bookingStatus: 'CONFIRMED',
      customerName: 'Pooja Bhatt',
      customerEmail: 'pooja.bhatt@example.com',
      customerPhone: '+919876543210',
      notes: 'Extra bedding requested'
    });

    logger.info('✅ Successfully seeded all types of operational bookings!');
    process.exit(0);
  } catch (err) {
    logger.error('Failed seeding bookings:', err);
    process.exit(1);
  }
};

run();
