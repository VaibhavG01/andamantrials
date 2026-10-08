import { Stay, Room, StayAmenity, Destination } from '../models/index.js';
import { successResponse, errorResponse } from '../utils/apiResponse.js';
import { getPagination, formatPaginationResponse } from '../utils/pagination.js';
import { createSlug } from '../utils/slugify.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { checkStayAvailability } from '../services/availabilityService.js';
import { Op } from 'sequelize';

export const getStays = asyncHandler(async (req, res) => {
  const { page, limit, offset, sort, order, all, search, destination } = getPagination(req.query);
  const whereClause = all === 'true' ? {} : { status: 'ACTIVE' };

  if (search) {
    whereClause[Op.or] = [
      { name: { [Op.like]: `%${search}%` } },
      { shortDescription: { [Op.like]: `%${search}%` } },
      { description: { [Op.like]: `%${search}%` } },
      { type: { [Op.like]: `%${search}%` } },
    ];
  }

  const { count, rows } = await Stay.findAndCountAll({
    where: whereClause,
    limit,
    offset,
    order: [[sort || 'rating', order || 'DESC']],
    include: [
      { model: Destination, as: 'destination' },
      { model: Room, as: 'rooms' },
    ],
  });

  const formatted = rows.map(s => {
    let gallery = s.gallery || [];
    if (typeof gallery === 'string') {
      try { gallery = JSON.parse(gallery); } catch { gallery = [gallery]; }
    }
    return {
      ...s.toJSON(),
      gallery,
    };
  });

  return successResponse(res, 'Stays fetched', formatted, 200, formatPaginationResponse(count, page, limit));
});

export const getStayBySlug = asyncHandler(async (req, res) => {
  const param = req.params.slug;
  const whereCondition = isNaN(param)
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

  let stay = await Stay.findOne({
    where: whereCondition,
    include: [
      { model: Destination, as: 'destination' },
      { model: Room, as: 'rooms' },
      { model: StayAmenity, as: 'amenitiesList' },
    ],
  });

  if (!stay) {
    stay = await Stay.findOne({
      where: { status: 'ACTIVE' },
      include: [
        { model: Destination, as: 'destination' },
        { model: Room, as: 'rooms' },
        { model: StayAmenity, as: 'amenitiesList' },
      ],
      order: [['rating', 'DESC']]
    });
  }

  if (!stay) {
    return errorResponse(res, 'Stay not found', [], 404);
  }

  let gallery = stay.gallery || [];
  if (typeof gallery === 'string') {
    try { gallery = JSON.parse(gallery); } catch { gallery = [gallery]; }
  }

  return successResponse(res, 'Stay details fetched', { ...stay.toJSON(), gallery });
});

export const searchStays = asyncHandler(async (req, res) => {
  const { destination, guests = 1, priceMin = 0, priceMax = 100000, type, rating } = req.query;

  const whereCondition = {
    status: 'ACTIVE',
    pricePerNight: {
      [Op.gte]: parseFloat(priceMin) || 0,
      [Op.lte]: parseFloat(priceMax) || 100000,
    },
  };

  if (type) whereCondition.type = type;
  if (rating) whereCondition.rating = { [Op.gte]: parseFloat(rating) };

  const stays = await Stay.findAll({
    where: whereCondition,
    include: [
      { model: Destination, as: 'destination' },
      { model: Room, as: 'rooms' },
    ],
  });

  let filtered = stays;
  if (destination) {
    filtered = filtered.filter(s => s.destination?.slug === destination || s.destination?.name.toLowerCase().includes(destination.toLowerCase()));
  }

  return successResponse(res, 'Stay search results', filtered);
});

export const getStayRooms = asyncHandler(async (req, res) => {
  const rooms = await Room.findAll({ where: { stayId: req.params.id } });
  return successResponse(res, 'Rooms fetched', rooms);
});

export const getStayAvailability = asyncHandler(async (req, res) => {
  const roomId = req.params.id;
  const requestedRooms = parseInt(req.query.rooms, 10) || 1;
  const result = await checkStayAvailability(roomId, requestedRooms);
  return successResponse(res, 'Stay room availability status', result);
});

export const createStay = asyncHandler(async (req, res) => {
  const data = { ...req.body };

  if (!data.name) {
    return errorResponse(res, 'Stay name is required', [], 400);
  }

  if (!data.slug) {
    data.slug = createSlug(data.name);
  }

  // Normalize gallery
  if (typeof data.gallery === 'string') {
    try { data.gallery = JSON.parse(data.gallery); } catch { data.gallery = data.gallery.split(',').map(s => s.trim()).filter(Boolean); }
  }

  const stay = await Stay.create(data);
  return successResponse(res, 'Stay created successfully', stay, 201);
});

export const updateStay = asyncHandler(async (req, res) => {
  const stay = await Stay.findByPk(req.params.id);
  if (!stay) return errorResponse(res, 'Stay not found', [], 404);

  const data = { ...req.body };
  if (data.name && !data.slug) {
    data.slug = createSlug(data.name);
  }

  if (typeof data.gallery === 'string') {
    try { data.gallery = JSON.parse(data.gallery); } catch { data.gallery = data.gallery.split(',').map(s => s.trim()).filter(Boolean); }
  }

  await stay.update(data);
  return successResponse(res, 'Stay updated successfully', stay);
});

export const deleteStay = asyncHandler(async (req, res) => {
  const stay = await Stay.findByPk(req.params.id);
  if (!stay) return errorResponse(res, 'Stay not found', [], 404);
  await stay.destroy();
  return successResponse(res, 'Stay deleted successfully');
});

export const addRoom = asyncHandler(async (req, res) => {
  const { name, description, capacity, price, availableRooms, amenities, image } = req.body;
  const room = await Room.create({
    stayId: req.params.id,
    name,
    description,
    capacity: capacity || 2,
    price: price || 6500,
    availableRooms: availableRooms || 10,
    amenities: amenities || [],
    image,
  });
  return successResponse(res, 'Room created successfully', room, 201);
});

export const updateRoom = asyncHandler(async (req, res) => {
  const room = await Room.findByPk(req.params.roomId);
  if (!room) return errorResponse(res, 'Room not found', [], 404);
  await room.update(req.body);
  return successResponse(res, 'Room updated successfully', room);
});

export const deleteRoom = asyncHandler(async (req, res) => {
  const room = await Room.findByPk(req.params.roomId);
  if (!room) return errorResponse(res, 'Room not found', [], 404);
  await room.destroy();
  return successResponse(res, 'Room deleted successfully');
});
