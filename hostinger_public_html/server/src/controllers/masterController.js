import { MasterCategory, MasterLocation } from '../models/index.js';
import { successResponse, errorResponse } from '../utils/apiResponse.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { Op } from 'sequelize';

// ── CATEGORIES CONTROLLER ──

export const getCategories = asyncHandler(async (req, res) => {
  const { type, status, search, all } = req.query;
  const where = {};

  if (type && type !== 'ALL') {
    where.type = type.toUpperCase();
  }

  if (status && status !== 'ALL') {
    where.status = status.toUpperCase();
  } else if (!all) {
    where.status = 'ACTIVE';
  }

  if (search) {
    where.name = { [Op.like]: `%${search}%` };
  }

  const categories = await MasterCategory.findAll({
    where,
    order: [['sortOrder', 'ASC'], ['name', 'ASC']],
  });

  return successResponse(res, 'Categories retrieved successfully', categories);
});

export const createCategory = asyncHandler(async (req, res) => {
  const { name, slug, type, icon, description, status, sortOrder } = req.body;

  if (!name) {
    return errorResponse(res, 'Category name is required', [], 400);
  }

  const cleanSlug = slug || name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
  const categoryType = type ? type.toUpperCase() : 'ACTIVITY';

  const existing = await MasterCategory.findOne({
    where: { slug: cleanSlug, type: categoryType },
  });

  if (existing) {
    return errorResponse(res, 'A category with this name already exists in this section', [], 409);
  }

  const category = await MasterCategory.create({
    name,
    slug: cleanSlug,
    type: categoryType,
    icon: icon || null,
    description: description || null,
    status: status || 'ACTIVE',
    sortOrder: sortOrder || 0,
  });

  return successResponse(res, 'Category created successfully', category, 201);
});

export const updateCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name, slug, type, icon, description, status, sortOrder } = req.body;

  const category = await MasterCategory.findByPk(id);
  if (!category) {
    return errorResponse(res, 'Category not found', [], 404);
  }

  if (name) category.name = name;
  if (slug) category.slug = slug;
  if (type) category.type = type.toUpperCase();
  if (icon !== undefined) category.icon = icon;
  if (description !== undefined) category.description = description;
  if (status) category.status = status;
  if (sortOrder !== undefined) category.sortOrder = sortOrder;

  await category.save();
  return successResponse(res, 'Category updated successfully', category);
});

export const deleteCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const category = await MasterCategory.findByPk(id);
  if (!category) {
    return errorResponse(res, 'Category not found', [], 404);
  }

  await category.destroy();
  return successResponse(res, 'Category deleted successfully');
});


// ── LOCATIONS CONTROLLER ──

export const getLocations = asyncHandler(async (req, res) => {
  const { island, status, search, all } = req.query;
  const where = {};

  if (island && island !== 'ALL') {
    where.island = island;
  }

  if (status && status !== 'ALL') {
    where.status = status.toUpperCase();
  } else if (!all) {
    where.status = 'ACTIVE';
  }

  if (search) {
    where[Op.or] = [
      { name: { [Op.like]: `%${search}%` } },
      { island: { [Op.like]: `%${search}%` } },
      { meetingPoint: { [Op.like]: `%${search}%` } },
    ];
  }

  const locations = await MasterLocation.findAll({
    where,
    order: [['island', 'ASC'], ['sortOrder', 'ASC'], ['name', 'ASC']],
  });

  return successResponse(res, 'Locations retrieved successfully', locations);
});

export const createLocation = asyncHandler(async (req, res) => {
  const { name, island, meetingPoint, description, latitude, longitude, status, sortOrder } = req.body;

  if (!name || !island) {
    return errorResponse(res, 'Location name and island are required', [], 400);
  }

  const location = await MasterLocation.create({
    name,
    island,
    meetingPoint: meetingPoint || null,
    description: description || null,
    latitude: latitude ? parseFloat(latitude) : null,
    longitude: longitude ? parseFloat(longitude) : null,
    status: status || 'ACTIVE',
    sortOrder: sortOrder || 0,
  });

  return successResponse(res, 'Location created successfully', location, 201);
});

export const updateLocation = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name, island, meetingPoint, description, latitude, longitude, status, sortOrder } = req.body;

  const location = await MasterLocation.findByPk(id);
  if (!location) {
    return errorResponse(res, 'Location not found', [], 404);
  }

  if (name) location.name = name;
  if (island) location.island = island;
  if (meetingPoint !== undefined) location.meetingPoint = meetingPoint;
  if (description !== undefined) location.description = description;
  if (latitude !== undefined) location.latitude = latitude ? parseFloat(latitude) : null;
  if (longitude !== undefined) location.longitude = longitude ? parseFloat(longitude) : null;
  if (status) location.status = status;
  if (sortOrder !== undefined) location.sortOrder = sortOrder;

  await location.save();
  return successResponse(res, 'Location updated successfully', location);
});

export const deleteLocation = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const location = await MasterLocation.findByPk(id);
  if (!location) {
    return errorResponse(res, 'Location not found', [], 404);
  }

  await location.destroy();
  return successResponse(res, 'Location deleted successfully');
});
