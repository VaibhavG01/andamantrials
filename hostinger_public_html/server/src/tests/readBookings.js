import { connectDatabase } from '../config/database.js';
import { Booking } from '../models/Booking.js';
import { logger } from '../utils/logger.js';

const readBookings = async () => {
  try {
    await connectDatabase();
    
    logger.info('Reading latest Bookings from database...');
    const bookings = await Booking.findAll({
      order: [['createdAt', 'DESC']],
      limit: 10,
    });
    
    if (bookings.length === 0) {
      logger.info('No bookings found in the database.');
    } else {
      logger.info(`Found ${bookings.length} bookings:`);
      bookings.forEach(b => {
        logger.info(`- ID: ${b.id}, Number: ${b.bookingNumber}, Type: ${b.bookingType}, Amount: ${b.totalAmount}, Payment: ${b.paymentStatus}, Status: ${b.bookingStatus}, UserID: ${b.userId}, RazorpayPayID: ${b.razorpayPaymentId}, RazorpayOrderID: ${b.razorpayOrderId}`);
      });
    }
    
    process.exit(0);
  } catch (error) {
    logger.error(`❌ Failed to read Bookings: ${error.message}`);
    process.exit(1);
  }
};

readBookings();
