import { Review, User } from '../models/index.js';
import { successResponse, errorResponse } from '../utils/apiResponse.js';
import { getPagination, formatPaginationResponse } from '../utils/pagination.js';
import { asyncHandler } from '../utils/asyncHandler.js';

export const createReview = asyncHandler(async (req, res) => {
  const { entityType, entityId, rating, title, comment, bookingId } = req.body;

  const review = await Review.create({
    userId: req.user.id,
    bookingId: bookingId || null,
    entityType,
    entityId,
    rating,
    title,
    comment,
    status: 'APPROVED', // Default approved for user convenience
  });

  return successResponse(res, 'Review submitted successfully', review, 201);
});

export const getEntityReviews = asyncHandler(async (req, res) => {
  const { entityType, entityId } = req.params;
  const { page, limit, offset } = getPagination(req.query);

  const { count, rows } = await Review.findAndCountAll({
    where: { entityType: entityType.toUpperCase(), entityId, status: 'APPROVED' },
    limit,
    offset,
    order: [['createdAt', 'DESC']],
    include: [{ model: User, as: 'user', attributes: ['id', 'name', 'avatar'] }],
  });

  return successResponse(res, 'Reviews fetched', rows, 200, formatPaginationResponse(count, page, limit));
});

export const getAdminReviews = asyncHandler(async (req, res) => {
  const { page, limit, offset } = getPagination(req.query);

  const { count, rows } = await Review.findAndCountAll({
    limit,
    offset,
    order: [['createdAt', 'DESC']],
    include: [{ model: User, as: 'user', attributes: ['id', 'name', 'email'] }],
  });

  return successResponse(res, 'Admin reviews list', rows, 200, formatPaginationResponse(count, page, limit));
});

export const updateReviewStatusAdmin = asyncHandler(async (req, res) => {
  const review = await Review.findByPk(req.params.id);
  if (!review) {
    return errorResponse(res, 'Review not found', [], 404);
  }

  review.status = req.body.status || 'APPROVED';
  await review.save();
  return successResponse(res, 'Review status updated', review);
});
