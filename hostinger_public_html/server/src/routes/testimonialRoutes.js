import express from 'express';
import { getTestimonials, createTestimonial, updateTestimonial, deleteTestimonial } from '../controllers/testimonialController.js';
import { protect } from '../middlewares/authMiddleware.js';
import { editorOrAdmin } from '../middlewares/editorMiddleware.js';

const router = express.Router();

router.get('/', getTestimonials);

// Admin / Editor Protected Routes
router.post('/', protect, editorOrAdmin, createTestimonial);
router.put('/:id', protect, editorOrAdmin, updateTestimonial);
router.delete('/:id', protect, editorOrAdmin, deleteTestimonial);

export default router;
