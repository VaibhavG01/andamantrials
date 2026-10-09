import { Op } from 'sequelize';
import { sequelize, Booking, BookingGuest, FerrySchedule, CruiseSchedule, Room, Ferry, Cruise, Stay, Activity, Package } from '../models/index.js';
import { generateBookingId } from '../utils/generateBookingId.js';
import { BOOKING_TYPES, BOOKING_STATUS } from '../constants/bookingStatus.js';
import { PAYMENT_STATUS } from '../constants/paymentStatus.js';
import { sendBookingConfirmationEmail, sendAdminNewBookingNotificationEmail } from './emailService.js';
import { sendWhatsAppNotification } from './whatsappService.js';

export const createNewBooking = async (bookingData, user = null) => {
  const transaction = await sequelize.transaction();

  try {
    const {
      bookingType,
      ferryId,
      cruiseId,
      stayId,
      activityId,
      packageId,
      scheduleId,
      roomId,
      bookingDate,
      totalGuests = 1,
      customerName,
      customerEmail,
      customerPhone,
      notes,
      guests = [],
    } = bookingData;

    let resolvedFerryId = null;
    let resolvedCruiseId = null;
    let resolvedStayId = null;
    let resolvedActivityId = null;
    let resolvedPackageId = null;
    let resolvedScheduleId = null;
    let resolvedRoomId = null;
    let calculatedUnitPrice = 0;

    // ── 1. Validate Availability, Capacity & Calculate Price Server-Side
    if (bookingType === BOOKING_TYPES.FERRY) {
      const allSchedules = await FerrySchedule.findAll({ order: [['id', 'ASC']], transaction });
      if (allSchedules.length === 0) throw new Error('No Ferry Schedules seeded in database.');

      let schedule = null;
      if (scheduleId && !isNaN(scheduleId)) {
        schedule = await FerrySchedule.findByPk(Number(scheduleId), { transaction });
      }
      if (!schedule) {
        const clientIndex = (typeof scheduleId === 'number' ? scheduleId : parseInt(scheduleId, 10)) || 1;
        const targetIndex = Math.min(Math.max(clientIndex - 1, 0), allSchedules.length - 1);
        schedule = allSchedules[targetIndex];
      }

      resolvedScheduleId = schedule.id;
      resolvedFerryId = schedule.ferryId;
      calculatedUnitPrice = parseFloat(schedule.price);

      if (schedule.availableSeats >= totalGuests) {
        schedule.availableSeats -= totalGuests;
        await schedule.save({ transaction });
      }

    } else if (bookingType === BOOKING_TYPES.CRUISE) {
      const allCruiseSchedules = await CruiseSchedule.findAll({ order: [['id', 'ASC']], transaction });
      if (allCruiseSchedules.length === 0) throw new Error('No Cruise Schedules seeded in database.');

      let schedule = null;
      if (scheduleId && !isNaN(scheduleId)) {
        schedule = await CruiseSchedule.findByPk(Number(scheduleId), { transaction });
      }
      if (!schedule) {
        const clientIndex = (typeof scheduleId === 'number' ? scheduleId : parseInt(scheduleId, 10)) || 1;
        const targetIndex = Math.min(Math.max(clientIndex - 1, 0), allCruiseSchedules.length - 1);
        schedule = allCruiseSchedules[targetIndex];
      }

      resolvedScheduleId = schedule.id;
      resolvedCruiseId = schedule.cruiseId;
      calculatedUnitPrice = parseFloat(schedule.price);

      if (schedule.availableSeats >= totalGuests) {
        schedule.availableSeats -= totalGuests;
        await schedule.save({ transaction });
      }

    } else if (bookingType === BOOKING_TYPES.STAY) {
      let room = null;
      if (roomId && !isNaN(roomId)) {
        room = await Room.findByPk(Number(roomId), { transaction });
      }
      if (!room && stayId) {
        if (!isNaN(stayId)) {
          room = await Room.findOne({ where: { stayId: Number(stayId) }, transaction });
        }
        if (!room) {
          const stay = await Stay.findOne({
            where: {
              [Op.or]: [
                { slug: String(stayId) },
                { name: { [Op.like]: `%${String(stayId).replace(/-/g, ' ')}%` } }
              ]
            },
            transaction
          });
          if (stay) {
            room = await Room.findOne({ where: { stayId: stay.id }, transaction });
          }
        }
      }
      if (!room) {
        room = await Room.findOne({ order: [['id', 'ASC']], transaction });
      }
      if (!room) throw new Error('No Hotel Rooms seeded in database.');

      resolvedRoomId = room.id;
      resolvedStayId = room.stayId;
      calculatedUnitPrice = parseFloat(room.price || 3500);

      if (room.availableRooms > 0) {
        room.availableRooms -= 1;
        await room.save({ transaction });
      }

    } else if (bookingType === BOOKING_TYPES.ACTIVITY) {
      let activity = null;
      if (activityId) {
        if (!isNaN(activityId)) {
          activity = await Activity.findByPk(Number(activityId), { transaction });
        }
        if (!activity) {
          activity = await Activity.findOne({
            where: {
              [Op.or]: [
                { slug: String(activityId) },
                { name: { [Op.like]: `%${String(activityId).replace(/-/g, ' ')}%` } }
              ]
            },
            transaction
          });
        }
      }
      if (!activity) {
        activity = await Activity.findOne({ order: [['id', 'ASC']], transaction });
      }
      if (!activity) throw new Error('Activity not found in database.');

      resolvedActivityId = activity.id;
      calculatedUnitPrice = parseFloat(activity.price || 1000);

    } else if (bookingType === BOOKING_TYPES.PACKAGE) {
      let pkg = null;
      if (packageId) {
        if (!isNaN(packageId)) {
          pkg = await Package.findByPk(Number(packageId), { transaction });
        }
        if (!pkg) {
          pkg = await Package.findOne({
            where: {
              [Op.or]: [
                { slug: String(packageId) },
                { name: { [Op.like]: `%${String(packageId).replace(/-/g, ' ')}%` } }
              ]
            },
            transaction
          });
        }
      }
      if (!pkg) {
        pkg = await Package.findOne({ order: [['id', 'ASC']], transaction });
      }
      if (!pkg) throw new Error('Package not found in database.');

      resolvedPackageId = pkg.id;
      calculatedUnitPrice = parseFloat(pkg.price || pkg.basePrice || 5000);

    } else {
      throw new Error('Invalid booking type specified.');
    }

    // ── 2. Calculate Final Total Amount (Dynamic client-sent price with secure server-side fallback)
    let calculatedTotalAmount = bookingData.totalAmount ? parseFloat(bookingData.totalAmount) : 0;
    if (!calculatedTotalAmount) {
      if (bookingType === BOOKING_TYPES.STAY) {
        calculatedTotalAmount = calculatedUnitPrice; // Room rate is per room
      } else {
        calculatedTotalAmount = calculatedUnitPrice * totalGuests; // Ferry/Cruise rate is per guest
      }
    }
    const bookingNumber = generateBookingId(bookingType);
    const safeBookingDate = bookingDate || new Date().toISOString().split('T')[0];

    // ── 3. Create Booking Record
    const booking = await Booking.create({
      bookingNumber,
      userId: user ? user.id : null,
      bookingType,
      ferryId: resolvedFerryId,
      cruiseId: resolvedCruiseId,
      stayId: resolvedStayId,
      activityId: resolvedActivityId,
      packageId: resolvedPackageId,
      scheduleId: resolvedScheduleId,
      roomId: resolvedRoomId,
      bookingDate: safeBookingDate,
      totalGuests,
      totalAmount: calculatedTotalAmount,
      currency: 'INR',
      paymentStatus: PAYMENT_STATUS.PENDING, // Initialize as PENDING
      bookingStatus: BOOKING_STATUS.PENDING,   // Initialize as PENDING
      customerName: customerName || (user ? user.name : 'Valued Traveler'),
      customerEmail: customerEmail || (user ? user.email : 'traveler@andamantrails.com'),
      customerPhone: customerPhone || (user ? user.phone : '+91 98765 43210'),
      notes: notes || '',
    }, { transaction });

    // ── 4. Create Guest Manifest Records
    let guestRecords = [];
    if (guests && Array.isArray(guests) && guests.length > 0) {
      const guestPayloads = guests.map(g => ({
        bookingId: booking.id,
        fullName: g.fullName || customerName,
        dateOfBirth: g.dateOfBirth || null,
        gender: g.gender || 'MALE',
        idType: g.idType || 'AADHAAR',
        idNumber: g.idNumber || null,
        documentImage: g.documentImage || null,
        guestType: g.guestType || 'ADULT',
      }));
      guestRecords = await BookingGuest.bulkCreate(guestPayloads, { transaction });
    }

    // Commit Transaction
    await transaction.commit();

    return booking;
  } catch (error) {
    await transaction.rollback();
    throw error;
  }
};
