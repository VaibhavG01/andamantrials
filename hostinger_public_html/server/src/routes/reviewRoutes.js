import express from 'express';
import { createReview, getEntityReviews, getAdminReviews, updateReviewStatusAdmin } from '../controllers/reviewController.js';
import { protect } from '../middlewares/authMiddleware.js';
import { adminOnly } from '../middlewares/adminMiddleware.js';

const router = express.Router();

router.get('/:entityType/:entityId', getEntityReviews);
router.post('/', protect, createReview);

// Admin Routes
router.get('/admin/all', protect, adminOnly, getAdminReviews);
router.put('/admin/:id/status', protect, adminOnly, updateReviewStatusAdmin);

export default router;
