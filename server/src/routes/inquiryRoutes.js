import express from 'express';
import { createInquiry, getInquiriesAdmin, updateInquiryAdmin } from '../controllers/inquiryController.js';
import { protect } from '../middlewares/authMiddleware.js';
import { adminOnly } from '../middlewares/adminMiddleware.js';
import { inquiryValidation } from '../validators/inquiryValidator.js';
import { validateRequest } from '../middlewares/validationMiddleware.js';

const router = express.Router();

router.post('/', inquiryValidation, validateRequest, createInquiry);

// Admin Routes
router.get('/', protect, adminOnly, getInquiriesAdmin);
router.get('/admin', protect, adminOnly, getInquiriesAdmin);
router.put('/admin/:id', protect, adminOnly, updateInquiryAdmin);
router.put('/admin/:id/status', protect, adminOnly, updateInquiryAdmin);
router.put('/:id/status', protect, adminOnly, updateInquiryAdmin);
router.put('/:id', protect, adminOnly, updateInquiryAdmin);

export default router;
