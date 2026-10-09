// server/src/routes/settingRoutes.js
import express from 'express';
import { getSettings, updateSettings } from '../controllers/settingController.js';
import { protect } from '../middlewares/authMiddleware.js';
import { superAdminOnly } from '../middlewares/adminMiddleware.js';

const router = express.Router();

// Publicly readable site settings
router.get('/', getSettings);
router.get('/public', getSettings);

// Super Admin only update
router.put('/', protect, superAdminOnly, updateSettings);

export default router;
