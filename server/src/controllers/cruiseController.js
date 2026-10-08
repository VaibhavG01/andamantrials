import { Cruise, CruiseRoute, CruiseSchedule } from '../models/index.js';
import { successResponse, errorResponse } from '../utils/apiResponse.js';
import { getPagination, formatPaginationResponse } from '../utils/pagination.js';
import { createSlug } from '../utils/slugify.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { checkCruiseAvailability } from '../services/availabilityService.js';
import { Op } from 'sequelize';

export const getCruises = asyncHandler(async (req, res) => {
  const { page, limit, offset, sort, order, all, search, type } = getPagination(req.query);
  const whereClause = all === 'true' ? {} : { status: 'ACTIVE' };

  if (type) whereClause.type = type;

  if (search) {
    whereClause[Op.or] = [
      { name: { [Op.like]: `%${search}%` } },
      { shortDescription: { [Op.like]: `%${search}%` } },
      { description: { [Op.like]: `%${search}%` } },
      { departurePoint: { [Op.like]: `%${search}%` } },
    ];
  }

  const { count, rows } = await Cruise.findAndCountAll({
    where: whereClause,
    limit,
    offset,
    order: [[sort || 'price', order || 'ASC']],
    include: [{ model: CruiseRoute, as: 'routes' }, { model: CruiseSchedule, as: 'schedules' }],
  });

  const formatted = rows.map(c => {
    let gallery = c.gallery || [];
    if (typeof gallery === 'string') {
      try { gallery = JSON.parse(gallery); } catch { gallery = [gallery]; }
    }
    return {
      ...c.toJSON(),
      gallery,
    };
  });

  return successResponse(res, 'Cruises fetched', formatted, 200, formatPaginationResponse(count, page, limit));
});

export const getCruiseBySlug = asyncHandler(async (req, res) => {
  const param = req.params.slug;
  const where = isNaN(param)
    ? {
        [Op.or]: [
          { slug: param },
          { name: { [Op.like]: `%${String(param).replace(/-/g, ' ')}%` } }
        ]
      }
    : {
        [Op.or]: [
          { id: Number(param) },
          { slug: String(param) }
        ]
      };

  const cruise = await Cruise.findOne({
    where,
    include: [{ model: CruiseRoute, as: 'routes' }, { model: CruiseSchedule, as: 'schedules' }],
  });

  if (!cruise) {
    return errorResponse(res, 'Cruise not found', [], 404);
  }

  let gallery = cruise.gallery || [];
  if (typeof gallery === 'string') {
    try { gallery = JSON.parse(gallery); } catch { gallery = [gallery]; }
  }

  return successResponse(res, 'Cruise details fetched', { ...cruise.toJSON(), gallery });
});

export const getCruiseCategories = asyncHandler(async (req, res) => {
  const categories = ['SUNSET_SAIL', 'PRIVATE_OCEAN_CHARTER', 'SIGHTSEEING', 'ISLAND_HOPPING', 'COUPLE_ESCAPE'];
  return successResponse(res, 'Cruise categories fetched', categories);
});

export const searchCruises = asyncHandler(async (req, res) => {
  const { type, guests = 1, date } = req.query;
  const where = { status: 'ACTIVE' };
  if (type) where.type = type;

  const cruises = await Cruise.findAll({
    where,
    include: [{ model: CruiseSchedule, as: 'schedules' }],
  });
  return successResponse(res, 'Cruise search results', cruises);
});

export const getCruiseAvailability = asyncHandler(async (req, res) => {
  const scheduleId = req.params.id;
  const guests = parseInt(req.query.guests, 10) || 1;
  const result = await checkCruiseAvailability(scheduleId, guests);
  return successResponse(res, 'Cruise availability status', result);
});

export const createCruise = asyncHandler(async (req, res) => {
  const data = { ...req.body };

  if (!data.name) {
    return errorResponse(res, 'Cruise name is required', [], 400);
  }

  if (!data.slug) {
    data.slug = createSlug(data.name);
  }

  ['gallery', 'features', 'inclusions', 'exclusions'].forEach(field => {
    if (typeof data[field] === 'string') {
      try { data[field] = JSON.parse(data[field]); } catch { data[field] = data[field].split(',').map(s => s.trim()).filter(Boolean); }
    }
  });

  const cruise = await Cruise.create(data);
  return successResponse(res, 'Cruise created successfully', cruise, 201);
});

export const updateCruise = asyncHandler(async (req, res) => {
  const cruise = await Cruise.findByPk(req.params.id);
  if (!cruise) return errorResponse(res, 'Cruise not found', [], 404);

  const data = { ...req.body };
  if (data.name && !data.slug) {
    data.slug = createSlug(data.name);
  }

  ['gallery', 'features', 'inclusions', 'exclusions'].forEach(field => {
    if (typeof data[field] === 'string') {
      try { data[field] = JSON.parse(data[field]); } catch { data[field] = data[field].split(',').map(s => s.trim()).filter(Boolean); }
    }
  });

  await cruise.update(data);
  return successResponse(res, 'Cruise updated successfully', cruise);
});

export const deleteCruise = asyncHandler(async (req, res) => {
  const cruise = await Cruise.findByPk(req.params.id);
  if (!cruise) return errorResponse(res, 'Cruise not found', [], 404);
  await cruise.destroy();
  return successResponse(res, 'Cruise deleted successfully');
});

export const addCruiseSchedule = asyncHandler(async (req, res) => {
  const schedule = await CruiseSchedule.create({
    cruiseId: req.params.id,
    date: req.body.date,
    departureTime: req.body.departureTime || '16:30',
    availableSeats: req.body.availableSeats || 50,
    price: req.body.price || 3500,
  });
  return successResponse(res, 'Cruise schedule added', schedule, 201);
});

export const updateCruiseSchedule = asyncHandler(async (req, res) => {
  const schedule = await CruiseSchedule.findByPk(req.params.scheduleId);
  if (!schedule) return errorResponse(res, 'Cruise schedule not found', [], 404);
  await schedule.update(req.body);
  return successResponse(res, 'Cruise schedule updated successfully', schedule);
});

export const deleteCruiseSchedule = asyncHandler(async (req, res) => {
  const schedule = await CruiseSchedule.findByPk(req.params.scheduleId);
  if (!schedule) return errorResponse(res, 'Cruise schedule not found', [], 404);
  await schedule.destroy();
  return successResponse(res, 'Cruise schedule deleted successfully');
});

