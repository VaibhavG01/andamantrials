import { Package } from '../models/index.js';
import { successResponse, errorResponse } from '../utils/apiResponse.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { getPagination, formatPaginationResponse } from '../utils/pagination.js';
import { createSlug } from '../utils/slugify.js';
import { Op } from 'sequelize';

export const getPackages = asyncHandler(async (req, res) => {
  const { all, search, category, destination, featured, minPrice, maxPrice } = req.query;
  const { page, limit, offset, sort, order } = getPagination(req.query);

  const whereClause = {};
  if (all !== 'true') {
    whereClause.status = 'ACTIVE';
  }

  if (category && category !== 'ALL') {
    whereClause.category = category;
  }

  if (featured === 'true') {
    whereClause.featured = true;
  }

  if (destination) {
    whereClause.destinations = { [Op.like]: `%${destination}%` };
  }

  if (minPrice || maxPrice) {
    whereClause.price = {};
    if (minPrice) whereClause.price[Op.gte] = parseFloat(minPrice);
    if (maxPrice) whereClause.price[Op.lte] = parseFloat(maxPrice);
  }

  if (search) {
    whereClause[Op.or] = [
      { name: { [Op.like]: `%${search}%` } },
      { description: { [Op.like]: `%${search}%` } },
      { destinations: { [Op.like]: `%${search}%` } },
      { category: { [Op.like]: `%${search}%` } },
      { bestFor: { [Op.like]: `%${search}%` } },
    ];
  }

  const { count, rows } = await Package.findAndCountAll({
    where: whereClause,
    limit,
    offset,
    order: [[sort || 'rating', order || 'DESC']],
  });

  const formattedRows = rows.map(pkg => {
    let gallery = pkg.gallery || [];
    if (typeof gallery === 'string') {
      try { gallery = JSON.parse(gallery); } catch { gallery = [gallery]; }
    }
    return {
      ...pkg.toJSON(),
      gallery,
    };
  });

  return successResponse(res, 'Packages fetched successfully', formattedRows, 200, formatPaginationResponse(count, page, limit));
});

export const getPackageById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  let pkg = null;

  if (!isNaN(id)) {
    pkg = await Package.findByPk(Number(id));
  }

  if (!pkg) {
    pkg = await Package.findOne({
      where: {
        [Op.or]: [
          { slug: id },
          { name: { [Op.like]: `%${String(id).replace(/-/g, ' ')}%` } },
        ],
      },
    });
  }

  if (!pkg) {
    pkg = await Package.findOne({ where: { status: 'ACTIVE' }, order: [['id', 'ASC']] });
  }

  if (!pkg) {
    return errorResponse(res, 'Package not found', [], 404);
  }

  let gallery = pkg.gallery || [];
  if (typeof gallery === 'string') {
    try { gallery = JSON.parse(gallery); } catch { gallery = [gallery]; }
  }

  const formatted = {
    ...pkg.toJSON(),
    gallery,
    heroImage: pkg.heroImage || pkg.image,
  };

  return successResponse(res, 'Package details fetched successfully', formatted, 200);
});

export const createPackage = asyncHandler(async (req, res) => {
  const data = { ...req.body };

  if (!data.name) {
    return errorResponse(res, 'Package name is required', [], 400);
  }

  if (!data.slug) {
    data.slug = createSlug(data.name);
  }

  const existing = await Package.findOne({ where: { slug: data.slug } });
  if (existing) {
    data.slug = `${data.slug}-${Date.now()}`;
  }

  // Normalize JSON fields
  ['gallery', 'tags', 'highlights', 'itinerary', 'inclusions', 'exclusions', 'faq'].forEach(field => {
    if (typeof data[field] === 'string') {
      try {
        data[field] = JSON.parse(data[field]);
      } catch {
        data[field] = data[field].split(',').map(s => s.trim()).filter(Boolean);
      }
    }
  });

  if (!data.image && data.heroImage) data.image = data.heroImage;
  if (!data.heroImage && data.image) data.heroImage = data.image;

  const pkg = await Package.create(data);
  return successResponse(res, 'Package created successfully', pkg, 201);
});

export const updatePackage = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const pkg = await Package.findByPk(id);

  if (!pkg) {
    return errorResponse(res, 'Package not found', [], 404);
  }

  const data = { ...req.body };

  if (data.name && !data.slug) {
    data.slug = createSlug(data.name);
  }

  // Normalize JSON fields
  ['gallery', 'tags', 'highlights', 'itinerary', 'inclusions', 'exclusions', 'faq'].forEach(field => {
    if (typeof data[field] === 'string') {
      try {
        data[field] = JSON.parse(data[field]);
      } catch {
        data[field] = data[field].split(',').map(s => s.trim()).filter(Boolean);
      }
    }
  });

  if (data.heroImage && !data.image) data.image = data.heroImage;
  if (data.image && !data.heroImage) data.heroImage = data.image;

  await pkg.update(data);
  return successResponse(res, 'Package updated successfully', pkg, 200);
});

export const deletePackage = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const pkg = await Package.findByPk(id);

  if (!pkg) {
    return errorResponse(res, 'Package not found', [], 404);
  }

  await pkg.destroy();
  return successResponse(res, 'Package deleted successfully', null, 200);
});
