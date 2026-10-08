import {
  Activity,
  ActivityLocation,
  ActivitySlot,
  Booking,
  Setting
} from '../models/index.js';
import {
  getPublicActivitiesService,
  getActivityDetailsService,
  getActivityAvailableDatesService,
  getActivitySlotsService,
  createActivityBookingOrderService,
  verifyActivityPaymentService,
  handlePaymentFailureService,
  generateRecurringSlotsService
} from '../services/activityService.js';
import { successResponse, errorResponse } from '../utils/apiResponse.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { Op } from 'sequelize';

// ── PUBLIC ENDPOINTS ────────────────────────────────────────────────────────

export const getActivities = asyncHandler(async (req, res) => {
  const activities = await getPublicActivitiesService(req.query);
  return successResponse(res, 'Activities fetched successfully', activities, 200);
});

export const getActivityById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const activity = await getActivityDetailsService(id);
  return successResponse(res, 'Activity details fetched successfully', activity, 200);
});

export const getActivityLocations = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const activity = await getActivityDetailsService(id);
  const locations = await ActivityLocation.findAll({
    where: { activityId: activity.id, status: 'ACTIVE' },
    order: [['adultPrice', 'ASC']],
  });
  return successResponse(res, 'Activity locations fetched successfully', locations, 200);
});

export const getActivityDates = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { locationId } = req.query;
  const activity = await getActivityDetailsService(id);
  const dates = await getActivityAvailableDatesService(activity.id, locationId ? Number(locationId) : null);
  return successResponse(res, 'Available dates fetched successfully', dates, 200);
});

export const getActivitySlots = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { locationId, date } = req.query;

  if (!date) {
    return errorResponse(res, 'Date query parameter is required (YYYY-MM-DD)', [], 400);
  }

  const activity = await getActivityDetailsService(id);
  const slots = await getActivitySlotsService(activity.id, locationId ? Number(locationId) : null, date);
  return successResponse(res, 'Activity slots fetched successfully', slots, 200);
});

export const createActivityBooking = asyncHandler(async (req, res) => {
  const bookingData = await createActivityBookingOrderService(req.body, req.user || null);
  return successResponse(res, 'Slot reserved and payment order created successfully', bookingData, 201);
});

export const verifyActivityPayment = asyncHandler(async (req, res) => {
  const confirmedBooking = await verifyActivityPaymentService(req.body);
  return successResponse(res, 'Payment verified and booking confirmed successfully', confirmedBooking, 200);
});

export const failActivityPayment = asyncHandler(async (req, res) => {
  const failedBooking = await handlePaymentFailureService(req.body);
  return successResponse(res, 'Payment failure handled and reserved seats released', failedBooking, 200);
});

export const getActivityCategories = asyncHandler(async (req, res) => {
  const activities = await Activity.findAll({
    attributes: ['category'],
    where: { status: 'ACTIVE' },
    group: ['category'],
  });
  const categories = activities.map(a => a.category).filter(Boolean);
  return successResponse(res, 'Activity categories fetched successfully', categories, 200);
});

export const getActivityLocationList = asyncHandler(async (req, res) => {
  const locations = await ActivityLocation.findAll({
    attributes: ['locationName'],
    where: { status: 'ACTIVE' },
    group: ['locationName'],
  });
  const locationNames = locations.map(l => l.locationName).filter(Boolean);
  return successResponse(res, 'Activity locations list fetched successfully', locationNames, 200);
});

// ── ADMIN ENDPOINTS ────────────────────────────────────────────────────────

export const adminGetActivities = asyncHandler(async (req, res) => {
  const activities = await Activity.findAll({
    order: [['sortOrder', 'ASC'], ['id', 'DESC']],
    include: [
      {
        model: ActivityLocation,
        as: 'locations',
      },
    ],
  });
  return successResponse(res, 'Admin activities fetched successfully', activities, 200);
});

export const adminCreateActivity = asyncHandler(async (req, res) => {
  const {
    name,
    slug,
    title,
    category,
    location,
    duration,
    difficulty,
    price,
    childPrice,
    originalPrice,
    badge,
    image,
    heroImage,
    gallery,
    videoUrl,
    inclusions,
    exclusions,
    requirements,
    safetyGuidelines,
    ageRestrictions,
    importantNotes,
    featured,
    sortOrder,
    bookingAvailability,
    status,
    locations,
  } = req.body;

  if (!name || !price) {
    return errorResponse(res, 'Activity name and base price are required', [], 400);
  }

  const generatedSlug = slug || name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  const activity = await Activity.create({
    name,
    slug: generatedSlug,
    title: title || name,
    category: category || 'Adventure',
    location: location || 'Port Blair',
    duration: duration || '2 Hours',
    difficulty: difficulty || 'Easy',
    price: Number(price),
    childPrice: childPrice ? Number(childPrice) : null,
    originalPrice: originalPrice ? Number(originalPrice) : null,
    badge: badge || null,
    image: image || null,
    heroImage: heroImage || image || null,
    gallery: Array.isArray(gallery) ? gallery : (typeof gallery === 'string' ? JSON.parse(gallery || '[]') : []),
    videoUrl: videoUrl || null,
    inclusions: Array.isArray(inclusions) ? inclusions : (typeof inclusions === 'string' ? JSON.parse(inclusions || '[]') : []),
    exclusions: Array.isArray(exclusions) ? exclusions : (typeof exclusions === 'string' ? JSON.parse(exclusions || '[]') : []),
    requirements: Array.isArray(requirements) ? requirements : (typeof requirements === 'string' ? JSON.parse(requirements || '[]') : []),
    safetyGuidelines: Array.isArray(safetyGuidelines) ? safetyGuidelines : (typeof safetyGuidelines === 'string' ? JSON.parse(safetyGuidelines || '[]') : []),
    ageRestrictions: ageRestrictions || null,
    importantNotes: Array.isArray(importantNotes) ? importantNotes : (typeof importantNotes === 'string' ? JSON.parse(importantNotes || '[]') : []),
    featured: Boolean(featured),
    sortOrder: sortOrder ? Number(sortOrder) : 0,
    bookingAvailability: bookingAvailability !== undefined ? Boolean(bookingAvailability) : true,
    status: status || 'ACTIVE',
  });

  if (Array.isArray(locations) && locations.length > 0) {
    for (const loc of locations) {
      if (loc.locationName && loc.adultPrice) {
        await ActivityLocation.create({
          activityId: activity.id,
          locationName: loc.locationName,
          adultPrice: Number(loc.adultPrice),
          childPrice: loc.childPrice ? Number(loc.childPrice) : null,
          meetingPoint: loc.meetingPoint || null,
          description: loc.description || null,
          status: loc.status || 'ACTIVE',
        });
      }
    }
  }

  const fullActivity = await Activity.findByPk(activity.id, {
    include: [{ model: ActivityLocation, as: 'locations' }],
  });

  return successResponse(res, 'Activity created successfully', fullActivity, 201);
});

export const adminUpdateActivity = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const activity = await Activity.findByPk(id);
  if (!activity) {
    return errorResponse(res, 'Activity not found', [], 404);
  }

  const updatePayload = { ...req.body };
  ['gallery', 'inclusions', 'exclusions', 'requirements', 'safetyGuidelines', 'importantNotes'].forEach(field => {
    if (typeof updatePayload[field] === 'string') {
      try { updatePayload[field] = JSON.parse(updatePayload[field]); } catch { updatePayload[field] = updatePayload[field].split(',').map(s => s.trim()).filter(Boolean); }
    }
  });

  await activity.update(updatePayload);

  if (Array.isArray(req.body.locations)) {
    // Sync locations
    for (const loc of req.body.locations) {
      if (loc.id) {
        await ActivityLocation.update(loc, { where: { id: loc.id, activityId: activity.id } });
      } else if (loc.locationName && loc.adultPrice) {
        await ActivityLocation.create({ ...loc, activityId: activity.id });
      }
    }
  }

  const updated = await Activity.findByPk(activity.id, {
    include: [{ model: ActivityLocation, as: 'locations' }],
  });

  return successResponse(res, 'Activity updated successfully', updated, 200);
});

export const adminDeleteActivity = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const activity = await Activity.findByPk(id);
  if (!activity) {
    return errorResponse(res, 'Activity not found', [], 404);
  }

  await activity.destroy();
  return successResponse(res, 'Activity deleted successfully', null, 200);
});

export const adminToggleActivityStatus = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const activity = await Activity.findByPk(id);
  if (!activity) {
    return errorResponse(res, 'Activity not found', [], 404);
  }

  activity.status = activity.status === 'ACTIVE' ? 'INACTIVE' : 'ACTIVE';
  await activity.save();

  return successResponse(res, `Activity marked ${activity.status}`, activity, 200);
});

// ── ADMIN SLOTS MANAGEMENT ──────────────────────────────────────────────────

export const adminGetActivitySlots = asyncHandler(async (req, res) => {
  const { activityId, locationId, date, status, page = 1, limit = 50 } = req.query;
  const where = {};

  if (activityId) where.activityId = activityId;
  if (locationId) where.locationId = locationId;
  if (date) where.date = date;
  if (status) where.status = status;

  const offset = (Number(page) - 1) * Number(limit);

  const { count, rows } = await ActivitySlot.findAndCountAll({
    where,
    order: [['date', 'DESC'], ['startTime', 'ASC']],
    limit: Number(limit),
    offset,
    include: [
      { model: Activity, as: 'activity', attributes: ['id', 'name', 'slug'] },
      { model: ActivityLocation, as: 'location', attributes: ['id', 'locationName'] },
    ],
  });

  return successResponse(res, 'Slots fetched successfully', {
    total: count,
    page: Number(page),
    limit: Number(limit),
    slots: rows,
  }, 200);
});

export const adminCreateSlot = asyncHandler(async (req, res) => {
  const {
    activityId,
    locationId,
    activityLocationId,
    date,
    startTime,
    endTime,
    capacity = 20,
    priceOverride,
    childPriceOverride,
    status = 'ACTIVE',
    notes,
  } = req.body;

  if (!activityId || !date || !startTime) {
    return errorResponse(res, 'Activity ID, date, and start time are required', [], 400);
  }

  const slot = await ActivitySlot.create({
    activityId,
    locationId: locationId || activityLocationId || null,
    date,
    startTime,
    endTime: endTime || null,
    capacity: Number(capacity),
    reservedCount: 0,
    bookedCount: 0,
    priceOverride: priceOverride ? Number(priceOverride) : null,
    childPriceOverride: childPriceOverride ? Number(childPriceOverride) : null,
    status,
    notes: notes || null,
  });

  return successResponse(res, 'Slot created successfully', slot, 201);
});

export const adminUpdateSlot = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const slot = await ActivitySlot.findByPk(id);
  if (!slot) {
    return errorResponse(res, 'Slot not found', [], 404);
  }

  const updateData = { ...req.body };
  if (updateData.activityLocationId && !updateData.locationId) {
    updateData.locationId = updateData.activityLocationId;
  }

  await slot.update(updateData);
  return successResponse(res, 'Slot updated successfully', slot, 200);
});

export const adminDeleteSlot = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const slot = await ActivitySlot.findByPk(id);
  if (!slot) {
    return errorResponse(res, 'Slot not found', [], 404);
  }

  await slot.destroy();
  return successResponse(res, 'Slot deleted successfully', null, 200);
});

export const adminToggleSlotStatus = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const slot = await ActivitySlot.findByPk(id);
  if (!slot) {
    return errorResponse(res, 'Slot not found', [], 404);
  }

  slot.status = slot.status === 'ACTIVE' ? 'DISABLED' : 'ACTIVE';
  await slot.save();

  return successResponse(res, `Slot marked as ${slot.status}`, slot, 200);
});

export const adminGenerateRecurringSlots = asyncHandler(async (req, res) => {
  const result = await generateRecurringSlotsService(req.body);
  return successResponse(res, `Successfully generated ${result.createdCount} recurring slot(s)`, result, 201);
});

export const adminGetSlotBookings = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const bookings = await Booking.findAll({
    where: { slotId: id },
    order: [['createdAt', 'DESC']],
  });
  return successResponse(res, 'Slot bookings fetched successfully', bookings, 200);
});

// ── ADMIN SETTINGS ──────────────────────────────────────────────────────────

export const adminGetEmailSettings = asyncHandler(async (req, res) => {
  const [setting] = await Setting.findOrCreate({
    where: { key: 'email_settings' },
    defaults: {
      key: 'email_settings',
      description: 'System Email Notification Configuration',
      value: {
        adminNotificationEmail: process.env.ADMIN_EMAIL || process.env.SMTP_USER || 'admin@andamantrails.com',
        bookingConfirmationEnabled: true,
        paymentFailureNotification: true,
        cancellationNotification: true,
        bookingReminderEnabled: true,
        bookingReminderHoursBefore: 24,
        lowAvailabilityAlertEnabled: true,
        lowAvailabilityThreshold: 3,
        autoExpirePendingMinutes: 10,
      },
    },
  });

  return successResponse(res, 'Email settings fetched successfully', setting.value, 200);
});

export const adminUpdateEmailSettings = asyncHandler(async (req, res) => {
  const [setting] = await Setting.findOrCreate({
    where: { key: 'email_settings' },
  });

  setting.value = {
    ...setting.value,
    ...req.body,
  };
  await setting.save();

  return successResponse(res, 'Email settings updated successfully', setting.value, 200);
});
