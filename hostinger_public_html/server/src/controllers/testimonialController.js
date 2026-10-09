import { Testimonial } from '../models/index.js';
import { successResponse, errorResponse } from '../utils/apiResponse.js';
import { asyncHandler } from '../utils/asyncHandler.js';

export const getTestimonials = asyncHandler(async (req, res) => {
  const testimonials = await Testimonial.findAll({
    where: { status: 'ACTIVE' },
    order: [['id', 'ASC']],
  });
  return successResponse(res, 'Testimonials fetched successfully', testimonials, 200);
});

export const createTestimonial = asyncHandler(async (req, res) => {
  const testimonial = await Testimonial.create(req.body);
  return successResponse(res, 'Testimonial created successfully', testimonial, 201);
});

export const updateTestimonial = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const testimonial = await Testimonial.findByPk(id);

  if (!testimonial) {
    return errorResponse(res, 'Testimonial not found', [], 404);
  }

  await testimonial.update(req.body);
  return successResponse(res, 'Testimonial updated successfully', testimonial, 200);
});

export const deleteTestimonial = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const testimonial = await Testimonial.findByPk(id);

  if (!testimonial) {
    return errorResponse(res, 'Testimonial not found', [], 404);
  }

  await testimonial.destroy();
  return successResponse(res, 'Testimonial deleted successfully', null, 200);
});
