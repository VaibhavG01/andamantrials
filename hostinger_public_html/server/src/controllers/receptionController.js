import { Op } from 'sequelize';
import { 
  sequelize, Booking, BookingGuest, Ferry, FerrySchedule, Cruise, CruiseSchedule, 
  Stay, Room, Inquiry, ContactMessage, User, AuditLog, ShiftLog 
} from '../models/index.js';
import { successResponse, errorResponse } from '../utils/apiResponse.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { generateBookingId } from '../utils/generateBookingId.js';

// Helper to log receptionist activities
const logAction = async (userId, role, action, entityType, entityId, metadata = {}) => {
  try {
    await AuditLog.create({
      userId,
      role,
      action,
      entityType,
      entityId: String(entityId),
      metadata,
    });
  } catch (err) {
    console.error('Audit logging failed:', err);
  }
};

// ── 1. DASHBOARD OVERVIEW ────────────────────────────────────────────────────
export const getReceptionDashboard = asyncHandler(async (req, res) => {
  const todayStr = new Date().toISOString().split('T')[0];

  // 1. Today's Arrivals (Stay bookings checkInDate = today, and Confirmed)
  const arrivalsCount = await Booking.count({
    where: {
      bookingType: 'STAY',
      checkInDate: todayStr,
      bookingStatus: 'CONFIRMED'
    }
  });

  const todayArrivals = await Booking.findAll({
    where: {
      bookingType: 'STAY',
      checkInDate: todayStr,
      bookingStatus: 'CONFIRMED'
    },
    include: [{ model: Stay, as: 'stay' }],
    limit: 10
  });

  // 2. Today's Departures (Stay bookings checkOutDate = today, and Checked In)
  const departuresCount = await Booking.count({
    where: {
      bookingType: 'STAY',
      checkOutDate: todayStr,
      bookingStatus: 'CHECKED_IN'
    }
  });

  const todayDepartures = await Booking.findAll({
    where: {
      bookingType: 'STAY',
      checkOutDate: todayStr,
      bookingStatus: 'CHECKED_IN'
    },
    include: [{ model: Stay, as: 'stay' }],
    limit: 10
  });

  // 3. Upcoming Bookings (all types, bookingDate or checkInDate > today)
  const upcomingCount = await Booking.count({
    where: {
      bookingStatus: 'CONFIRMED',
      [Op.or]: [
        { checkInDate: { [Op.gt]: todayStr } },
        { bookingDate: { [Op.gt]: todayStr } }
      ]
    }
  });

  // 4. Pending Payments
  const pendingPaymentsCount = await Booking.count({
    where: { paymentStatus: 'PENDING' }
  });

  // 5. Room Inventory Summary
  const roomsSummary = await Room.findAll({
    attributes: [
      [sequelize.fn('SUM', sequelize.col('availableRooms')), 'available'],
      [sequelize.fn('COUNT', sequelize.col('id')), 'typesCount']
    ]
  });
  const availableRoomsCount = parseInt(roomsSummary[0]?.getDataValue('available') || 0, 10);

  // 6. Ferry / Cruise Schedules count for today
  const ferrySchedulesCount = await FerrySchedule.count({
    where: { travelDate: todayStr }
  });
  const cruiseSchedulesCount = await CruiseSchedule.count({
    where: { date: todayStr }
  });

  // 7. Open Inquiries
  const openInquiriesCount = await Inquiry.count({
    where: { status: { [Op.in]: ['NEW', 'CONTACTED', 'FOLLOW-UP', 'IN_PROGRESS'] } }
  });

  // 8. Recent Bookings (all types)
  const recentBookings = await Booking.findAll({
    order: [['createdAt', 'DESC']],
    limit: 5
  });

  // 9. Notifications (Mock alerts based on daily triggers)
  const notifications = [
    { id: 1, type: 'ARRIVAL', message: 'Guest Rohan Sharma is arriving at Taj Exotica today.', time: '10 mins ago', read: false },
    { id: 2, type: 'PAYMENT', message: 'Booking AT-STY-2026-000102 recorded full cash payment.', time: '1 hour ago', read: true },
    { id: 3, type: 'INQUIRY', message: 'New custom ferry booking request received.', time: '3 hours ago', read: false }
  ];

  // 10. Operations timeline for today
  const timelineSchedules = [];
  const todayFerries = await FerrySchedule.findAll({
    where: { travelDate: todayStr },
    include: [{ model: Ferry, as: 'ferry' }],
    limit: 5
  });
  todayFerries.forEach(f => {
    timelineSchedules.push({
      time: f.departureTime || '08:00 AM',
      title: `${f.ferry?.name || 'Ferry'} Departure`,
      description: `From Port Blair to Havelock - Seats left: ${f.availableSeats}`,
      type: 'FERRY'
    });
  });

  const todayCruises = await CruiseSchedule.findAll({
    where: { date: todayStr },
    include: [{ model: Cruise, as: 'cruise' }],
    limit: 5
  });
  todayCruises.forEach(c => {
    timelineSchedules.push({
      time: c.departureTime || '11:00 AM',
      title: `${c.cruise?.name || 'Cruise'} Tour Departure`,
      description: `Departure at Phoenix Bay Jetty - Seats left: ${c.availableSeats}`,
      type: 'CRUISE'
    });
  });

  // Default timeline entries if empty
  if (timelineSchedules.length === 0) {
    timelineSchedules.push(
      { time: '08:00 AM', title: 'Morning Ferry Departure', description: 'Nautika Ferry leaving for Havelock Island', type: 'FERRY' },
      { time: '11:00 AM', title: 'Sunset Cruise Briefing', description: 'Candlelight dinner charter tour coordination', type: 'CRUISE' },
      { time: '02:00 PM', title: 'Hotel Guest Check-ins', description: 'Check-in window open at Havelock Stay Resorts', type: 'STAY' }
    );
  }

  // Sort timeline by time string safely
  timelineSchedules.sort((a, b) => a.time.localeCompare(b.time));

  return successResponse(res, 'Reception dashboard data fetched', {
    todayArrivals,
    todayArrivalsCount: arrivalsCount,
    todayDepartures,
    todayDeparturesCount: departuresCount,
    upcomingBookingsCount: upcomingCount,
    pendingPaymentsCount,
    availableRoomsCount,
    ferryDeparturesCount: ferrySchedulesCount,
    cruiseDeparturesCount: cruiseSchedulesCount,
    openInquiriesCount,
    recentBookings,
    notifications,
    timeline: timelineSchedules
  });
});

// ── 2. GLOBAL SEARCH ─────────────────────────────────────────────────────────
export const globalSearch = asyncHandler(async (req, res) => {
  const { query } = req.query;
  if (!query) {
    return successResponse(res, 'Empty search results', { bookings: [], customers: [], stays: [], ferries: [], cruises: [] });
  }

  const queryLike = `%${query}%`;

  const bookings = await Booking.findAll({
    where: {
      [Op.or]: [
        { bookingNumber: { [Op.like]: queryLike } },
        { customerName: { [Op.like]: queryLike } },
        { customerPhone: { [Op.like]: queryLike } },
        { customerEmail: { [Op.like]: queryLike } }
      ]
    },
    limit: 10
  });

  const customers = await User.findAll({
    where: {
      role: 'USER',
      [Op.or]: [
        { name: { [Op.like]: queryLike } },
        { phone: { [Op.like]: queryLike } },
        { email: { [Op.like]: queryLike } }
      ]
    },
    limit: 10
  });

  const stays = await Stay.findAll({
    where: { name: { [Op.like]: queryLike } },
    limit: 5
  });

  const ferries = await Ferry.findAll({
    where: { name: { [Op.like]: queryLike } },
    limit: 5
  });

  const cruises = await Cruise.findAll({
    where: { name: { [Op.like]: queryLike } },
    limit: 5
  });

  return successResponse(res, 'Global search results', { bookings, customers, stays, ferries, cruises });
});

// ── 3. BOOKINGS MANAGEMENT ───────────────────────────────────────────────────
export const getBookings = asyncHandler(async (req, res) => {
  const { search, type, payment, status, filter } = req.query;
  const where = {};
  const todayStr = new Date().toISOString().split('T')[0];

  if (search) {
    where[Op.or] = [
      { bookingNumber: { [Op.like]: `%${search}%` } },
      { customerName: { [Op.like]: `%${search}%` } },
      { customerPhone: { [Op.like]: `%${search}%` } }
    ];
  }

  if (type) where.bookingType = type;
  if (payment) where.paymentStatus = payment;
  if (status) where.bookingStatus = status;

  if (filter === 'today') {
    where[Op.or] = [
      { checkInDate: todayStr },
      { bookingDate: todayStr }
    ];
  } else if (filter === 'tomorrow') {
    const tomorrowDate = new Date();
    tomorrowDate.setDate(tomorrowDate.getDate() + 1);
    const tomorrowStr = tomorrowDate.toISOString().split('T')[0];
    where[Op.or] = [
      { checkInDate: tomorrowStr },
      { bookingDate: tomorrowStr }
    ];
  }

  const bookings = await Booking.findAll({
    where,
    order: [['createdAt', 'DESC']],
    include: [
      { model: Stay, as: 'stay' },
      { model: Ferry, as: 'ferry' },
      { model: Cruise, as: 'cruise' }
    ]
  });

  return successResponse(res, 'Bookings list fetched', bookings);
});

export const getBookingById = asyncHandler(async (req, res) => {
  const booking = await Booking.findByPk(req.params.id, {
    include: [
      { model: BookingGuest, as: 'guests' },
      { model: Stay, as: 'stay' },
      { model: Ferry, as: 'ferry' },
      { model: Cruise, as: 'cruise' },
      { model: User, as: 'user' }
    ]
  });

  if (!booking) {
    return errorResponse(res, 'Booking not found', [], 404);
  }

  let scheduleDetails = null;
  if (booking.bookingType === 'FERRY' && booking.scheduleId) {
    scheduleDetails = await FerrySchedule.findByPk(booking.scheduleId);
  } else if (booking.bookingType === 'CRUISE' && booking.scheduleId) {
    scheduleDetails = await CruiseSchedule.findByPk(booking.scheduleId);
  } else if (booking.bookingType === 'STAY' && booking.roomId) {
    scheduleDetails = await Room.findByPk(booking.roomId);
  }

  return successResponse(res, 'Booking details fetched', { booking, scheduleDetails });
});

export const createBooking = asyncHandler(async (req, res) => {
  const {
    bookingType,
    stayId,
    ferryId,
    cruiseId,
    scheduleId,
    roomId,
    bookingDate,
    checkInDate,
    checkOutDate,
    totalGuests = 1,
    customerName,
    customerEmail,
    customerPhone,
    totalAmount,
    paymentMethod = 'CASH',
    paymentStatus = 'PENDING',
    notes,
    guests = []
  } = req.body;

  if (!bookingType || !customerName || !customerPhone || !customerEmail || !bookingDate) {
    return errorResponse(res, 'Missing required booking details', [], 400);
  }

  const bookingNumber = generateBookingId(bookingType);

  // Securely verify stay/room availability and record changes
  if (bookingType === 'STAY') {
    if (roomId) {
      const room = await Room.findByPk(roomId);
      if (room && room.availableRooms > 0) {
        room.availableRooms -= 1;
        await room.save();
      }
    }
  } else if (bookingType === 'FERRY' && scheduleId) {
    const fs = await FerrySchedule.findByPk(scheduleId);
    if (fs && fs.availableSeats >= totalGuests) {
      fs.availableSeats -= totalGuests;
      await fs.save();
    }
  } else if (bookingType === 'CRUISE' && scheduleId) {
    const cs = await CruiseSchedule.findByPk(scheduleId);
    if (cs && cs.availableSeats >= totalGuests) {
      cs.availableSeats -= totalGuests;
      await cs.save();
    }
  }

  // Create primary booking record
  const booking = await Booking.create({
    bookingNumber,
    bookingType,
    stayId: stayId || null,
    ferryId: ferryId || null,
    cruiseId: cruiseId || null,
    scheduleId: scheduleId || null,
    roomId: roomId || null,
    bookingDate,
    checkInDate: checkInDate || bookingDate,
    checkOutDate: checkOutDate || null,
    totalGuests,
    totalAmount,
    paymentStatus,
    bookingStatus: 'CONFIRMED',
    customerName,
    customerEmail,
    customerPhone,
    notes
  });

  // Create Guest List manifest
  if (guests && Array.isArray(guests) && guests.length > 0) {
    const guestPayloads = guests.map(g => ({
      bookingId: booking.id,
      fullName: g.fullName,
      guestType: g.guestType || 'ADULT',
      gender: g.gender || 'MALE',
      idType: g.idType || 'AADHAAR',
      idNumber: g.idNumber || ''
    }));
    await BookingGuest.bulkCreate(guestPayloads);
  }

  await logAction(
    req.user.id,
    req.user.role,
    'BOOKING_CREATED',
    'Booking',
    booking.id,
    { bookingNumber, customerName, totalAmount, paymentMethod }
  );

  return successResponse(res, 'Booking created successfully', booking, 201);
});

export const updateBooking = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const booking = await Booking.findByPk(id);
  if (!booking) {
    return errorResponse(res, 'Booking not found', [], 404);
  }

  await booking.update(req.body);

  await logAction(
    req.user.id,
    req.user.role,
    'BOOKING_UPDATED',
    'Booking',
    booking.id,
    req.body
  );

  return successResponse(res, 'Booking updated successfully', booking);
});

export const checkInGuest = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const booking = await Booking.findByPk(id);
  if (!booking) {
    return errorResponse(res, 'Booking not found', [], 404);
  }

  booking.bookingStatus = 'CHECKED_IN';
  await booking.save();

  await logAction(
    req.user.id,
    req.user.role,
    'CHECK_IN',
    'Booking',
    booking.id,
    { bookingNumber: booking.bookingNumber, guestName: booking.customerName }
  );

  return successResponse(res, 'Guest checked in successfully', booking);
});

export const checkOutGuest = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const booking = await Booking.findByPk(id);
  if (!booking) {
    return errorResponse(res, 'Booking not found', [], 404);
  }

  booking.bookingStatus = 'COMPLETED';
  booking.paymentStatus = 'PAID'; // Release room and complete payment collection
  await booking.save();

  // Release hotel room back to pool
  if (booking.bookingType === 'STAY' && booking.roomId) {
    const room = await Room.findByPk(booking.roomId);
    if (room) {
      room.availableRooms += 1;
      await room.save();
    }
  }

  await logAction(
    req.user.id,
    req.user.role,
    'CHECK_OUT',
    'Booking',
    booking.id,
    { bookingNumber: booking.bookingNumber, guestName: booking.customerName }
  );

  return successResponse(res, 'Guest checked out successfully and room released', booking);
});

export const recordBookingPayment = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { amount, method } = req.body;
  const booking = await Booking.findByPk(id);
  if (!booking) {
    return errorResponse(res, 'Booking not found', [], 404);
  }

  booking.paymentStatus = 'PAID';
  await booking.save();

  await logAction(
    req.user.id,
    req.user.role,
    'PAYMENT_RECORDED',
    'Booking',
    booking.id,
    { amount, method, bookingNumber: booking.bookingNumber }
  );

  return successResponse(res, 'Payment recorded successfully', booking);
});

export const cancelBooking = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const booking = await Booking.findByPk(id);
  if (!booking) {
    return errorResponse(res, 'Booking not found', [], 404);
  }

  booking.bookingStatus = 'CANCELLED';
  await booking.save();

  // Release capacity/seats back
  if (booking.bookingType === 'STAY' && booking.roomId) {
    const room = await Room.findByPk(booking.roomId);
    if (room) {
      room.availableRooms += 1;
      await room.save();
    }
  } else if (booking.bookingType === 'FERRY' && booking.scheduleId) {
    const fs = await FerrySchedule.findByPk(booking.scheduleId);
    if (fs) {
      fs.availableSeats += booking.totalGuests;
      await fs.save();
    }
  } else if (booking.bookingType === 'CRUISE' && booking.scheduleId) {
    const cs = await CruiseSchedule.findByPk(booking.scheduleId);
    if (cs) {
      cs.availableSeats += booking.totalGuests;
      await cs.save();
    }
  }

  await logAction(
    req.user.id,
    req.user.role,
    'BOOKING_CANCELLED',
    'Booking',
    booking.id,
    { bookingNumber: booking.bookingNumber }
  );

  return successResponse(res, 'Booking cancelled successfully and capacity released', booking);
});

// ── 4. CUSTOMERS MANAGEMENT ───────────────────────────────────────────────────
export const getCustomers = asyncHandler(async (req, res) => {
  const { search } = req.query;
  const where = { role: 'USER' };

  if (search) {
    where[Op.or] = [
      { name: { [Op.like]: `%${search}%` } },
      { email: { [Op.like]: `%${search}%` } },
      { phone: { [Op.like]: `%${search}%` } }
    ];
  }

  const customers = await User.findAll({
    where,
    order: [['name', 'ASC']]
  });

  // Calculate booking counts dynamically
  const customerList = [];
  for (const c of customers) {
    const count = await Booking.count({ where: { userId: c.id } });
    const lastBooking = await Booking.findOne({
      where: { userId: c.id },
      order: [['createdAt', 'DESC']]
    });
    customerList.push({
      id: c.id,
      name: c.name,
      phone: c.phone || 'N/A',
      email: c.email,
      bookingsCount: count,
      lastBookingDate: lastBooking ? lastBooking.createdAt : null,
      status: c.status
    });
  }

  return successResponse(res, 'Customers list fetched', customerList);
});

export const getCustomerById = asyncHandler(async (req, res) => {
  const customer = await User.findByPk(req.params.id);
  if (!customer) {
    return errorResponse(res, 'Customer not found', [], 404);
  }

  const bookings = await Booking.findAll({
    where: {
      [Op.or]: [
        { userId: customer.id },
        { customerPhone: customer.phone },
        { customerEmail: customer.email }
      ]
    },
    order: [['createdAt', 'DESC']]
  });

  return successResponse(res, 'Customer profile details fetched', { customer, bookings });
});

export const createCustomer = asyncHandler(async (req, res) => {
  const { name, phone, email } = req.body;
  if (!name || !email) {
    return errorResponse(res, 'Name and email are required fields', [], 400);
  }

  // Check if customer exists
  let customer = await User.findOne({ where: { email } });
  if (customer) {
    return successResponse(res, 'Customer already exists', customer, 200);
  }

  customer = await User.create({
    name,
    email,
    phone,
    role: 'USER',
    password: 'walkinCustomerDummyPassword123!' // Dummy random pass
  });

  await logAction(
    req.user.id,
    req.user.role,
    'CUSTOMER_CREATED',
    'User',
    customer.id,
    { name, email, phone }
  );

  return successResponse(res, 'Customer created successfully', customer, 201);
});

export const updateCustomer = asyncHandler(async (req, res) => {
  const customer = await User.findByPk(req.params.id);
  if (!customer) {
    return errorResponse(res, 'Customer not found', [], 404);
  }

  await customer.update(req.body);

  await logAction(
    req.user.id,
    req.user.role,
    'CUSTOMER_UPDATED',
    'User',
    customer.id,
    req.body
  );

  return successResponse(res, 'Customer details updated successfully', customer);
});

// ── 5. AVAILABILITY SERVICES ──────────────────────────────────────────────────
export const getStaysAvailability = asyncHandler(async (req, res) => {
  const stays = await Stay.findAll({
    include: [{ model: Room, as: 'rooms' }]
  });
  return successResponse(res, 'Stays availability status fetched', stays);
});

export const getFerriesAvailability = asyncHandler(async (req, res) => {
  const todayStr = new Date().toISOString().split('T')[0];
  const schedules = await FerrySchedule.findAll({
    where: { travelDate: { [Op.gte]: todayStr } },
    include: [{ model: Ferry, as: 'ferry' }],
    order: [['travelDate', 'ASC'], ['departureTime', 'ASC']]
  });
  return successResponse(res, 'Ferries schedules availability fetched', schedules);
});

export const getCruisesAvailability = asyncHandler(async (req, res) => {
  const todayStr = new Date().toISOString().split('T')[0];
  const schedules = await CruiseSchedule.findAll({
    where: { date: { [Op.gte]: todayStr } },
    include: [{ model: Cruise, as: 'cruise' }],
    order: [['date', 'ASC'], ['departureTime', 'ASC']]
  });
  return successResponse(res, 'Cruises schedules availability fetched', schedules);
});

// ── 6. INQUIRIES & CONTACT MESSAGES ───────────────────────────────────────────
export const getInquiries = asyncHandler(async (req, res) => {
  const inquiries = await Inquiry.findAll({
    order: [['createdAt', 'DESC']]
  });
  return successResponse(res, 'Inquiries fetched successfully', inquiries);
});

export const updateInquiryStatus = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const inquiry = await Inquiry.findByPk(id);
  if (!inquiry) {
    return errorResponse(res, 'Inquiry not found', [], 404);
  }

  inquiry.status = status;
  await inquiry.save();

  await logAction(
    req.user.id,
    req.user.role,
    'INQUIRY_STATUS_CHANGED',
    'Inquiry',
    inquiry.id,
    { status }
  );

  return successResponse(res, 'Inquiry status updated successfully', inquiry);
});

export const getContactMessages = asyncHandler(async (req, res) => {
  const messages = await ContactMessage.findAll({
    order: [['createdAt', 'DESC']]
  });
  return successResponse(res, 'Contact messages fetched successfully', messages);
});

export const updateContactMessageStatus = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const message = await ContactMessage.findByPk(id);
  if (!message) {
    return errorResponse(res, 'Contact message not found', [], 404);
  }

  message.status = 'RESOLVED';
  await message.save();

  await logAction(
    req.user.id,
    req.user.role,
    'CONTACT_MESSAGE_RESOLVED',
    'ContactMessage',
    message.id
  );

  return successResponse(res, 'Contact request marked resolved successfully', message);
});

// ── 7. SHIFT MANAGEMENT ───────────────────────────────────────────────────────
export const getShiftStatus = asyncHandler(async (req, res) => {
  const activeShift = await ShiftLog.findOne({
    where: {
      receptionistId: req.user.id,
      status: 'ON DUTY'
    },
    order: [['shiftStart', 'DESC']]
  });

  return successResponse(res, 'Shift status fetched', {
    onDuty: !!activeShift,
    activeShift
  });
});

export const toggleShift = asyncHandler(async (req, res) => {
  const activeShift = await ShiftLog.findOne({
    where: {
      receptionistId: req.user.id,
      status: 'ON DUTY'
    },
    order: [['shiftStart', 'DESC']]
  });

  if (activeShift) {
    // End shift
    activeShift.shiftEnd = new Date();
    activeShift.status = 'OFF DUTY';
    await activeShift.save();
    return successResponse(res, 'Shift ended successfully', { onDuty: false, shift: activeShift });
  } else {
    // Start shift
    const newShift = await ShiftLog.create({
      receptionistId: req.user.id,
      shiftStart: new Date(),
      status: 'ON DUTY'
    });
    return successResponse(res, 'Shift started successfully', { onDuty: true, shift: newShift });
  }
});
