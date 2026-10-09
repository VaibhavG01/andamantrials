import { Op } from 'sequelize';
import { Blog, BlogCategory, User } from '../models/index.js';
import { successResponse, errorResponse } from '../utils/apiResponse.js';
import { getPagination, formatPaginationResponse } from '../utils/pagination.js';
import { createSlug } from '../utils/slugify.js';
import { asyncHandler } from '../utils/asyncHandler.js';

export const getBlogs = asyncHandler(async (req, res) => {
  const { page, limit, offset, sort, order, all, search, category } = getPagination(req.query);

  const whereClause = {};
  if (all !== 'true') {
    whereClause.status = 'PUBLISHED';
  }

  if (category) {
    whereClause.categoryId = category;
  }

  if (search) {
    whereClause[Op.or] = [
      { title: { [Op.like]: `%${search}%` } },
      { excerpt: { [Op.like]: `%${search}%` } },
      { content: { [Op.like]: `%${search}%` } },
    ];
  }

  const { count, rows } = await Blog.findAndCountAll({
    where: whereClause,
    limit,
    offset,
    order: [[sort || 'publishedAt', order || 'DESC']],
    include: [
      { model: BlogCategory, as: 'category' },
      { model: User, as: 'author', attributes: ['id', 'name', 'avatar'] },
    ],
  });

  const formatted = rows.map(b => {
    let gallery = b.gallery || [];
    if (typeof gallery === 'string') {
      try { gallery = JSON.parse(gallery); } catch { gallery = [gallery]; }
    }
    return {
      ...b.toJSON(),
      gallery,
    };
  });

  return successResponse(res, 'Blogs fetched', formatted, 200, formatPaginationResponse(count, page, limit));
});

export const getBlogBySlug = asyncHandler(async (req, res) => {
  const { slug } = req.params;
  const isNumeric = !isNaN(slug) && !isNaN(parseInt(slug, 10));

  let blog = await Blog.findOne({
    where: isNumeric ? { [Op.or]: [{ slug }, { id: parseInt(slug, 10) }] } : { slug },
    include: [
      { model: BlogCategory, as: 'category' },
      { model: User, as: 'author', attributes: ['id', 'name', 'avatar'] },
    ],
  });

  if (!blog) {
    blog = await Blog.findOne({
      where: {
        [Op.or]: [
          { slug: { [Op.like]: `%${slug}%` } },
          { title: { [Op.like]: `%${slug}%` } },
        ],
      },
      include: [
        { model: BlogCategory, as: 'category' },
        { model: User, as: 'author', attributes: ['id', 'name', 'avatar'] },
      ],
    });
  }

  if (!blog) {
    return errorResponse(res, 'Blog article not found', [], 404);
  }

  let gallery = blog.gallery || [];
  if (typeof gallery === 'string') {
    try { gallery = JSON.parse(gallery); } catch { gallery = [gallery]; }
  }

  return successResponse(res, 'Blog details fetched', { ...blog.toJSON(), gallery });
});

export const createBlog = asyncHandler(async (req, res) => {
  const data = { ...req.body };

  if (!data.title) {
    return errorResponse(res, 'Blog title is required', [], 400);
  }

  if (!data.slug) {
    data.slug = createSlug(data.title);
  }

  const existing = await Blog.findOne({ where: { slug: data.slug } });
  if (existing) {
    data.slug = `${data.slug}-${Date.now()}`;
  }

  // Normalize gallery & tags
  ['gallery', 'tags'].forEach(field => {
    if (typeof data[field] === 'string') {
      try { data[field] = JSON.parse(data[field]); } catch { data[field] = data[field].split(',').map(s => s.trim()).filter(Boolean); }
    }
  });

  data.authorId = req.user ? req.user.id : (data.authorId || null);

  const blog = await Blog.create(data);
  return successResponse(res, 'Blog article created successfully', blog, 201);
});

export const updateBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findByPk(req.params.id);
  if (!blog) {
    return errorResponse(res, 'Blog article not found', [], 404);
  }

  const data = { ...req.body };
  if (data.title && !data.slug) {
    data.slug = createSlug(data.title);
  }

  ['gallery', 'tags'].forEach(field => {
    if (typeof data[field] === 'string') {
      try { data[field] = JSON.parse(data[field]); } catch { data[field] = data[field].split(',').map(s => s.trim()).filter(Boolean); }
    }
  });

  await blog.update(data);
  return successResponse(res, 'Blog article updated successfully', blog, 200);
});

export const deleteBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findByPk(req.params.id);
  if (!blog) {
    return errorResponse(res, 'Blog article not found', [], 404);
  }
  await blog.destroy();
  return successResponse(res, 'Blog article deleted successfully', null, 200);
});

export const getBlogCategories = asyncHandler(async (req, res) => {
  const categories = await BlogCategory.findAll({ order: [['name', 'ASC']] });
  return successResponse(res, 'Categories fetched', categories, 200);
});

export const createBlogCategory = asyncHandler(async (req, res) => {
  const { name, description } = req.body;
  const slug = createSlug(name);
  const category = await BlogCategory.create({ name, slug, description });
  return successResponse(res, 'Category created', category, 201);
});

export const updateBlogCategory = asyncHandler(async (req, res) => {
  const category = await BlogCategory.findByPk(req.params.id);
  if (!category) return errorResponse(res, 'Category not found', [], 404);
  const { name, description } = req.body;
  if (name) category.name = name;
  if (description !== undefined) category.description = description;
  await category.save();
  return successResponse(res, 'Category updated', category, 200);
});

export const deleteBlogCategory = asyncHandler(async (req, res) => {
  const category = await BlogCategory.findByPk(req.params.id);
  if (!category) return errorResponse(res, 'Category not found', [], 404);
  await category.destroy();
  return successResponse(res, 'Category deleted successfully', null, 200);
});

