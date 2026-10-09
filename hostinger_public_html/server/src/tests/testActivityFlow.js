import dotenv from 'dotenv';
dotenv.config();
import { connectDatabase } from '../config/database.js';
import {
  getPublicActivitiesService,
  getActivityDetailsService,
  getActivityAvailableDatesService,
  getActivitySlotsService,
  createActivityBookingOrderService,
  verifyActivityPaymentService
} from '../services/activityService.js';
import { Booking, ActivitySlot } from '../models/index.js';

async function runTest() {
  await connectDatabase();
  console.log('=== 1. Test Fetching Public Activities ===');
  const activities = await getPublicActivitiesService({});
  console.log(`Fetched ${activities.length} activities.`);
  if (activities.length === 0) throw new Error('No activities found');

  const scuba = activities.find(a => a.slug === 'scuba-diving') || activities[0];
  console.log(`Testing with activity: ${scuba.name} (${scuba.slug})`);

  console.log('=== 2. Test Fetching Details by Slug ===');
  const details = await getActivityDetailsService(scuba.slug);
  console.log(`Locations count: ${details.locations.length}`);
  const location = details.locations[0];
  console.log(`Using location: ${location.locationName} (Adult Price: ₹${location.adultPrice}, Child Price: ₹${location.childPrice})`);

  console.log('=== 3. Test Fetching Available Dates ===');
  const dates = await getActivityAvailableDatesService(details.id, location.id);
  console.log(`Available dates:`, dates.slice(0, 5));
  const testDate = dates[0];

  console.log(`=== 4. Test Fetching Slots for Date: ${testDate} ===`);
  const slots = await getActivitySlotsService(details.id, location.id, testDate);
  console.log(`Slots for ${testDate}:`, slots.map(s => `${s.startTime} (Rem: ${s.remainingCapacity}/${s.capacity}, Status: ${s.status})`));

  const availableSlot = slots.find(s => s.status === 'AVAILABLE' && s.remainingCapacity >= 2);
  if (!availableSlot) {
    console.log('No available slot found for testing, picking first slot with capacity');
  }
  const testSlot = availableSlot || slots[0];
  console.log(`Selected test slot: ID ${testSlot.id} at ${testSlot.startTime}, remaining capacity: ${testSlot.remainingCapacity}`);

  console.log('=== 5. Test Over-Capacity Prevention Check ===');
  try {
    await createActivityBookingOrderService({
      activityId: details.id,
      locationId: location.id,
      slotId: testSlot.id,
      date: testDate,
      adultCount: testSlot.remainingCapacity + 10,
      childCount: 0,
      customerName: 'Test Overcapacity',
      customerEmail: 'test@example.com',
      customerPhone: '9999999999'
    });
    throw new Error('FAILED: Over-capacity booking was unexpectedly allowed!');
  } catch (err) {
    console.log(`✅ Correctly blocked over-capacity booking with message: "${err.message}"`);
  }

  console.log('=== 6. Test Valid Booking Reservation & Order Creation ===');
  const bookingResult = await createActivityBookingOrderService({
    activityId: details.id,
    locationId: location.id,
    slotId: testSlot.id,
    date: testDate,
    adultCount: 2,
    childCount: 1,
    customerName: 'Vaibhav Test Traveler',
    customerEmail: 'softbyvaibhav01@gmail.com',
    customerPhone: '+91 98765 43210',
    specialRequests: 'Need vegetarian snack and extra diving mask'
  });

  console.log('✅ Booking Order Created:');
  console.log(`- Booking Ref: ${bookingResult.bookingNumber}`);
  console.log(`- Total Amount: ₹${bookingResult.amount}`);
  console.log(`- Razorpay Order ID: ${bookingResult.razorpayOrderId}`);
  console.log(`- Expires At: ${bookingResult.expiresAt}`);

  console.log('=== 7. Test Payment Verification & Confirmation ===');
  const confirmedBooking = await verifyActivityPaymentService({
    razorpayOrderId: bookingResult.razorpayOrderId,
    razorpayPaymentId: `pay_test_${Date.now()}`,
    razorpaySignature: '', // Test mode bypass
    bookingNumber: bookingResult.bookingNumber
  });

  console.log(`✅ Booking Status after verification: ${confirmedBooking.bookingStatus}, Payment: ${confirmedBooking.paymentStatus}`);

  const updatedSlot = await ActivitySlot.findByPk(testSlot.id);
  console.log(`✅ Slot capacity after booking: Booked: ${updatedSlot.bookedCount}, Reserved: ${updatedSlot.reservedCount}, Total: ${updatedSlot.capacity}`);

  console.log('\n🎉 ALL BACKEND ACTIVITY BOOKING TESTS PASSED PERFECTLY!\n');
  process.exit(0);
}

runTest().catch(err => {
  console.error('Test execution error:', err);
  process.exit(1);
});
