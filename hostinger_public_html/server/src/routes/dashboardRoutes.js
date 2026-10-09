import express from 'express';
import { getAdminDashboardStats } from '../controllers/dashboardController.js';
import { protect } from '../middlewares/authMiddleware.js';
import { adminOnly } from '../middlewares/adminMiddleware.js';

const router = express.Router();

router.get('/stats', protect, adminOnly, getAdminDashboardStats);

export default router;
