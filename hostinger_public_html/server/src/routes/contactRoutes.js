import express from 'express';
import { createContactMessage, getContactMessagesAdmin, updateContactStatusAdmin } from '../controllers/contactController.js';
import { protect } from '../middlewares/authMiddleware.js';
import { adminOnly } from '../middlewares/adminMiddleware.js';
import { contactValidation } from '../validators/contactValidator.js';
import { validateRequest } from '../middlewares/validationMiddleware.js';

const router = express.Router();

router.post('/', contactValidation, validateRequest, createContactMessage);

// Admin Routes
router.get('/admin', protect, adminOnly, getContactMessagesAdmin);
router.put('/admin/:id/status', protect, adminOnly, updateContactStatusAdmin);

export default router;
