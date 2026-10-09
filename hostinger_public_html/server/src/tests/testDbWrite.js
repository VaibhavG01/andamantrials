import { connectDatabase, sequelize } from '../config/database.js';
import { Booking } from '../models/Booking.js';
import { logger } from '../utils/logger.js';

const testWrite = async () => {
  try {
    await connectDatabase();
    
    logger.info('Testing database write for Bookings...');
    
    // Create a mock booking
    const booking = await Booking.create({
      bookingNumber: `TEST-${Date.now().toString().slice(-6)}`,
      bookingType: 'FERRY',
      ferryId: 1,
      scheduleId: 1,
      bookingDate: '2026-08-20',
      totalGuests: 2,
      totalAmount: 1500.00,
      customerName: 'Test Traveler',
      customerEmail: 'test@traveler.com',
      customerPhone: '+91 99999 99999',
      paymentStatus: 'PENDING',
      bookingStatus: 'PENDING',
      razorpayOrderId: 'order_test_123',
      razorpayPaymentId: 'pay_test_123',
      razorpaySignature: 'sig_test_123',
    });
    
    logger.info(`✅ Booking created successfully in DB! ID: ${booking.id}, Number: ${booking.bookingNumber}`);
    
    // Clean up
    await booking.destroy();
    logger.info('✅ Mock booking cleaned up successfully.');
    
    process.exit(0);
  } catch (error) {
    logger.error(`❌ DB Write Test Failed: ${error.message}`);
    if (error.parent) {
      logger.error(`Parent error details: ${error.parent.message}`);
    }
    process.exit(1);
  }
};

testWrite();
