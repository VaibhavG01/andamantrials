import { Ferry, FerryRoute, FerrySchedule, Destination } from '../models/index.js';
import { successResponse, errorResponse } from '../utils/apiResponse.js';
import { getPagination, formatPaginationResponse } from '../utils/pagination.js';
import { createSlug } from '../utils/slugify.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { checkFerryAvailability } from '../services/availabilityService.js';
import { Op } from 'sequelize';

export const getFerries = asyncHandler(async (req, res) => {
  const { page, limit, offset, all } = getPagination(req.query);
  const whereClause = all === 'true' ? {} : { status: 'ACTIVE' };
  const { count, rows } = await Ferry.findAndCountAll({
    where: whereClause,
    limit,
    offset,
    include: [{ model: FerryRoute, as: 'routes' }],
  });
  return successResponse(res, 'Ferries fetched', rows, 200, formatPaginationResponse(count, page, limit));
});

export const getFerryBySlug = asyncHandler(async (req, res) => {
  const ferry = await Ferry.findOne({
    where: { slug: req.params.slug },
    include: [{ model: FerryRoute, as: 'routes' }, { model: FerrySchedule, as: 'schedules' }],
  });
  if (!ferry) {
    return errorResponse(res, 'Ferry not found', [], 404);
  }
  return successResponse(res, 'Ferry details fetched', ferry);
});

export const getFerryRoutes = asyncHandler(async (req, res) => {
  const routes = await FerryRoute.findAll({
    include: [
      { model: Destination, as: 'fromDestination' },
      { model: Destination, as: 'toDestination' },
      { model: Ferry, as: 'ferry' },
    ],
  });
  return successResponse(res, 'Ferry routes fetched', routes);
});

export const searchFerries = asyncHandler(async (req, res) => {
  const { from, to, date, passengers = 1 } = req.query;

  const whereCondition = {};
  if (date) {
    whereCondition.travelDate = date;
  }
  whereCondition.availableSeats = { [Op.gte]: parseInt(passengers, 10) || 1 };

  const schedules = await FerrySchedule.findAll({
    where: whereCondition,
    include: [
      { model: Ferry, as: 'ferry' },
      {
        model: FerryRoute,
        as: 'route',
        include: [
          { model: Destination, as: 'fromDestination' },
          { model: Destination, as: 'toDestination' },
        ],
      },
    ],
  });

  let filtered = schedules;
  if (from) {
    filtered = filtered.filter(s => s.route?.fromDestination?.slug === from || s.route?.fromDestination?.name.toLowerCase().includes(from.toLowerCase()));
  }
  if (to) {
    filtered = filtered.filter(s => s.route?.toDestination?.slug === to || s.route?.toDestination?.name.toLowerCase().includes(to.toLowerCase()));
  }

  return successResponse(res, 'Ferry search results', filtered);
});

export const getFerrySchedules = asyncHandler(async (req, res) => {
  const schedules = await FerrySchedule.findAll({
    where: { ferryId: req.params.id },
    include: [{ model: FerryRoute, as: 'route' }],
  });
  return successResponse(res, 'Ferry schedules fetched', schedules);
});

export const getFerryAvailability = asyncHandler(async (req, res) => {
  const scheduleId = req.params.id;
  const passengers = parseInt(req.query.passengers, 10) || 1;
  const result = await checkFerryAvailability(scheduleId, passengers);
  return successResponse(res, 'Ferry availability status', result);
});

export const createFerry = asyncHandler(async (req, res) => {
  const { name, operator, type, description, image, capacity, features } = req.body;
  const slug = createSlug(`${name}-${operator}`);
  const ferry = await Ferry.create({
    name,
    operator,
    slug,
    type,
    description,
    image,
    capacity: capacity || 250,
    features: features || [],
  });
  return successResponse(res, 'Ferry created successfully', ferry, 201);
});

export const updateFerry = asyncHandler(async (req, res) => {
  const ferry = await Ferry.findByPk(req.params.id);
  if (!ferry) return errorResponse(res, 'Ferry not found', [], 404);
  await ferry.update(req.body);
  return successResponse(res, 'Ferry updated successfully', ferry);
});

export const deleteFerry = asyncHandler(async (req, res) => {
  const ferry = await Ferry.findByPk(req.params.id);
  if (!ferry) return errorResponse(res, 'Ferry not found', [], 404);
  await ferry.destroy();
  return successResponse(res, 'Ferry deleted successfully');
});

export const addFerrySchedule = asyncHandler(async (req, res) => {
  const { routeId, travelDate, departureTime, arrivalTime, availableSeats, price, status, ferryId } = req.body;
  const targetFerryId = req.params.id ? parseInt(req.params.id, 10) : parseInt(ferryId, 10);
  const schedule = await FerrySchedule.create({
    ferryId: targetFerryId,
    routeId: parseInt(routeId, 10),
    travelDate,
    departureTime,
    arrivalTime,
    availableSeats: availableSeats !== undefined ? parseInt(availableSeats, 10) : 200,
    price: price !== undefined ? parseFloat(price) : 1500,
    status: status || 'SCHEDULED',
  });
  return successResponse(res, 'Ferry schedule added successfully', schedule, 201);
});

export const updateFerrySchedule = asyncHandler(async (req, res) => {
  const schedule = await FerrySchedule.findByPk(req.params.id);
  if (!schedule) return errorResponse(res, 'Schedule not found', [], 404);
  await schedule.update(req.body);
  return successResponse(res, 'Ferry schedule updated successfully', schedule);
});

export const deleteFerrySchedule = asyncHandler(async (req, res) => {
  const schedule = await FerrySchedule.findByPk(req.params.id);
  if (!schedule) return errorResponse(res, 'Schedule not found', [], 404);
  await schedule.destroy();
  return successResponse(res, 'Ferry schedule deleted successfully');
});
