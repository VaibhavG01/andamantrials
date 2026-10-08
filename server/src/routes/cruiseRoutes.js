import express from 'express';
import {
  getCruises,
  getCruiseBySlug,
  getCruiseCategories,
  searchCruises,
  getCruiseAvailability,
  createCruise,
  updateCruise,
  deleteCruise,
  addCruiseSchedule,
  updateCruiseSchedule,
  deleteCruiseSchedule
} from '../controllers/cruiseController.js';
import { protect } from '../middlewares/authMiddleware.js';
import { adminOnly } from '../middlewares/adminMiddleware.js';
import { cruiseValidation } from '../validators/cruiseValidator.js';
import { validateRequest } from '../middlewares/validationMiddleware.js';

const router = express.Router();

// Public Routes
router.get('/', getCruises);
router.get('/categories', getCruiseCategories);
router.get('/search', searchCruises);
router.get('/:slug', getCruiseBySlug);
router.get('/:id/availability', getCruiseAvailability);

// Admin Routes
router.post('/', protect, adminOnly, cruiseValidation, validateRequest, createCruise);
router.put('/:id', protect, adminOnly, updateCruise);
router.delete('/:id', protect, adminOnly, deleteCruise);
router.post('/:id/schedule', protect, adminOnly, addCruiseSchedule);
router.put('/schedule/:scheduleId', protect, adminOnly, updateCruiseSchedule);
router.delete('/schedule/:scheduleId', protect, adminOnly, deleteCruiseSchedule);

export default router;
