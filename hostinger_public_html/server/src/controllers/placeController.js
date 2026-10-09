import { Place } from '../models/index.js';
import { successResponse, errorResponse } from '../utils/apiResponse.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { getPagination, formatPaginationResponse } from '../utils/pagination.js';
import { createSlug } from '../utils/slugify.js';
import { Op } from 'sequelize';

export const getPlaces = asyncHandler(async (req, res) => {
  const { all, search, island, category } = req.query;
  const { page, limit, offset, sort, order } = getPagination(req.query);

  const whereClause = {};
  if (all !== 'true') {
    whereClause.status = 'ACTIVE';
  }

  if (island) {
    whereClause.island = { [Op.like]: `%${island}%` };
  }

  if (category) {
    whereClause.category = category;
  }

  if (search) {
    whereClause[Op.or] = [
      { name: { [Op.like]: `%${search}%` } },
      { description: { [Op.like]: `%${search}%` } },
      { island: { [Op.like]: `%${search}%` } },
      { category: { [Op.like]: `%${search}%` } },
    ];
  }

  const { count, rows } = await Place.findAndCountAll({
    where: whereClause,
    limit,
    offset,
    order: [[sort || 'rating', order || 'DESC']],
  });

  const formatted = rows.map(p => {
    let gallery = p.gallery || [];
    if (typeof gallery === 'string') {
      try { gallery = JSON.parse(gallery); } catch { gallery = [gallery]; }
    }
    return {
      ...p.toJSON(),
      gallery,
    };
  });

  return successResponse(res, 'Places fetched successfully', formatted, 200, formatPaginationResponse(count, page, limit));
});

export const getPlaceById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  let place = null;

  if (!isNaN(id)) {
    place = await Place.findByPk(Number(id));
  }

  if (!place) {
    place = await Place.findOne({
      where: {
        [Op.or]: [
          { slug: id },
          { name: { [Op.like]: `%${String(id).replace(/-/g, ' ')}%` } },
        ],
      },
    });
  }

  if (!place) {
    return errorResponse(res, 'Place not found', [], 404);
  }

  let gallery = place.gallery || [];
  if (typeof gallery === 'string') {
    try { gallery = JSON.parse(gallery); } catch { gallery = [gallery]; }
  }

  return successResponse(res, 'Place details fetched successfully', { ...place.toJSON(), gallery }, 200);
});

export const createPlace = asyncHandler(async (req, res) => {
  const data = { ...req.body };

  if (!data.name) {
    return errorResponse(res, 'Place name is required', [], 400);
  }

  if (!data.slug) {
    data.slug = createSlug(data.name);
  }

  // Normalize gallery & tags & highlights
  ['gallery', 'tags', 'highlights'].forEach(field => {
    if (typeof data[field] === 'string') {
      try { data[field] = JSON.parse(data[field]); } catch { data[field] = data[field].split(',').map(s => s.trim()).filter(Boolean); }
    }
  });

  if (!data.image && data.heroImage) data.image = data.heroImage;
  if (!data.heroImage && data.image) data.heroImage = data.image;

  const place = await Place.create(data);
  return successResponse(res, 'Place created successfully', place, 201);
});

export const updatePlace = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const place = await Place.findByPk(id);

  if (!place) {
    return errorResponse(res, 'Place not found', [], 404);
  }

  const data = { ...req.body };
  if (data.name && !data.slug) {
    data.slug = createSlug(data.name);
  }

  ['gallery', 'tags', 'highlights'].forEach(field => {
    if (typeof data[field] === 'string') {
      try { data[field] = JSON.parse(data[field]); } catch { data[field] = data[field].split(',').map(s => s.trim()).filter(Boolean); }
    }
  });

  await place.update(data);
  return successResponse(res, 'Place updated successfully', place, 200);
});

export const deletePlace = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const place = await Place.findByPk(id);

  if (!place) {
    return errorResponse(res, 'Place not found', [], 404);
  }

  await place.destroy();
  return successResponse(res, 'Place deleted successfully', null, 200);
});
