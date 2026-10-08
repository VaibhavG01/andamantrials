import express from 'express';
import {
  getFerries,
  getFerryBySlug,
  getFerryRoutes,
  searchFerries,
  getFerrySchedules,
  getFerryAvailability,
  createFerry,
  updateFerry,
  deleteFerry,
  addFerrySchedule,
  updateFerrySchedule,
  deleteFerrySchedule
} from '../controllers/ferryController.js';
import { protect } from '../middlewares/authMiddleware.js';
import { adminOnly } from '../middlewares/adminMiddleware.js';
import { ferryValidation, ferryScheduleValidation } from '../validators/ferryValidator.js';
import { validateRequest } from '../middlewares/validationMiddleware.js';

const router = express.Router();

// Public Routes
router.get('/', getFerries);
router.get('/routes', getFerryRoutes);
router.get('/search', searchFerries);
router.get('/:slug', getFerryBySlug);
router.get('/:id/schedules', getFerrySchedules);
router.get('/:id/availability', getFerryAvailability);

// Admin Routes
router.post('/', protect, adminOnly, ferryValidation, validateRequest, createFerry);
router.put('/:id', protect, adminOnly, updateFerry);
router.delete('/:id', protect, adminOnly, deleteFerry);
router.post('/:id/schedule', protect, adminOnly, ferryScheduleValidation, validateRequest, addFerrySchedule);
router.put('/schedule/:id', protect, adminOnly, updateFerrySchedule);
router.delete('/schedule/:id', protect, adminOnly, deleteFerrySchedule);

export default router;
