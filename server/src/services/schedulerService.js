import { Booking, Activity, ActivityLocation, ActivitySlot } from '../models/index.js';
import { sendBookingReminderEmail, sendActivity24HourReminderEmail } from './emailService.js';
import { expireAbandonedReservationsService } from './activityService.js';
import { logger } from '../utils/logger.js';
import { BOOKING_STATUS, BOOKING_TYPES } from '../constants/bookingStatus.js';
import { Op } from 'sequelize';

// Track daily reminders sent per booking/recipient to enforce max 4 per day limit
const dailyReminderTracker = new Map();
let lastTrackerResetDate = new Date().toISOString().split('T')[0];

export const MAX_REMINDERS_PER_DAY = 4;

const resetTrackerIfNewDay = () => {
  const currentDate = new Date().toISOString().split('T')[0];
  if (currentDate !== lastTrackerResetDate) {
    dailyReminderTracker.clear();
    lastTrackerResetDate = currentDate;
    logger.info(`[SCHEDULER] Daily reminder tracker reset for new day: ${currentDate}`);
  }
};

export const canSendDailyReminder = (bookingIdOrEmail) => {
  resetTrackerIfNewDay();
  const count = dailyReminderTracker.get(String(bookingIdOrEmail)) || 0;
  return count < MAX_REMINDERS_PER_DAY;
};

export const recordDailyReminder = (bookingIdOrEmail) => {
  resetTrackerIfNewDay();
  const count = dailyReminderTracker.get(String(bookingIdOrEmail)) || 0;
  dailyReminderTracker.set(String(bookingIdOrEmail), count + 1);
  return count + 1;
};

export const initScheduler = () => {
  logger.info('⏰ Background Scheduler Initialized (4 scheduled reminder runs per day).');

  // Run initial checks on startup
  processDailyBookingUpdates();
  expireAbandonedReservationsService().catch(() => {});

  // Run reservation expiration cleanup every 2 minutes
  const TWO_MINUTES = 2 * 60 * 1000;
  setInterval(async () => {
    try {
      await expireAbandonedReservationsService();
    } catch (err) {
      logger.error(`[SCHEDULER] Reservation cleanup error: ${err.message}`);
    }
  }, TWO_MINUTES);

  // Run reminder checks exactly 4 times per day (every 6 hours = 21,600,000 ms)
  const SIX_HOURS = 6 * 60 * 60 * 1000; // 4 times per 24-hour day
  setInterval(async () => {
    logger.info('⏰ [SCHEDULER] Running scheduled reminder check (4 runs per day schedule)...');
    await processDailyBookingUpdates();
  }, SIX_HOURS);
};

export const processDailyBookingUpdates = async () => {
  try {
    resetTrackerIfNewDay();
    const todayStr = new Date().toISOString().split('T')[0];
    
    // 1. Auto-complete past bookings
    const completedCount = await Booking.update(
      { bookingStatus: BOOKING_STATUS.COMPLETED },
      {
        where: {
          bookingStatus: BOOKING_STATUS.CONFIRMED,
          bookingDate: {
            [Op.lt]: todayStr,
          },
        },
      }
    );
    if (completedCount[0] > 0) {
      logger.info(`[SCHEDULER] Auto-completed ${completedCount[0]} past bookings.`);
    }

    // 2. Fetch general travel bookings starting in 7 days
    const in7Days = new Date();
    in7Days.setDate(in7Days.getDate() + 7);
    const in7DaysStr = in7Days.toISOString().split('T')[0];

    const upcomingBookings = await Booking.findAll({
      where: {
        bookingStatus: BOOKING_STATUS.CONFIRMED,
        bookingDate: in7DaysStr,
        bookingType: { [Op.ne]: BOOKING_TYPES.ACTIVITY },
      },
    });

    let sent7DayCount = 0;
    for (const booking of upcomingBookings) {
      if (canSendDailyReminder(booking.id)) {
        await sendBookingReminderEmail(booking);
        const count = recordDailyReminder(booking.id);
        sent7DayCount++;
        logger.info(`[SCHEDULER] 7-day reminder sent for booking #${booking.bookingNumber} (${count}/${MAX_REMINDERS_PER_DAY} today).`);
      } else {
        logger.info(`[SCHEDULER] Daily reminder limit (${MAX_REMINDERS_PER_DAY}/day) reached for booking #${booking.bookingNumber}. Skipping.`);
      }
    }
    
    if (sent7DayCount > 0) {
      logger.info(`[SCHEDULER] Sent 7-day travel reminders to ${sent7DayCount} booking(s).`);
    }

    // 3. Fetch Activity bookings for tomorrow (24 hours before)
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowStr = tomorrow.toISOString().split('T')[0];

    const upcomingActivities = await Booking.findAll({
      where: {
        bookingStatus: BOOKING_STATUS.CONFIRMED,
        bookingType: BOOKING_TYPES.ACTIVITY,
        activityDate: tomorrowStr,
      },
      include: [
        { model: Activity, as: 'activity' },
        { model: ActivityLocation, as: 'activityLocation' },
        { model: ActivitySlot, as: 'activitySlot' },
      ],
    });

    let sentActivityCount = 0;
    for (const actBooking of upcomingActivities) {
      if (canSendDailyReminder(actBooking.id)) {
        await sendActivity24HourReminderEmail(
          actBooking,
          actBooking.activity,
          actBooking.activityLocation,
          actBooking.activitySlot
        );
        const count = recordDailyReminder(actBooking.id);
        sentActivityCount++;
        logger.info(`[SCHEDULER] 24-hour activity reminder sent for booking #${actBooking.bookingNumber} (${count}/${MAX_REMINDERS_PER_DAY} today).`);
      } else {
        logger.info(`[SCHEDULER] Daily reminder limit (${MAX_REMINDERS_PER_DAY}/day) reached for activity booking #${actBooking.bookingNumber}. Skipping.`);
      }
    }

    if (sentActivityCount > 0) {
      logger.info(`[SCHEDULER] Sent 24-hour activity reminders to ${sentActivityCount} booking(s).`);
    }
  } catch (error) {
    logger.error(`[SCHEDULER ERROR] Daily Booking Check failed: ${error.message}`);
  }
};
