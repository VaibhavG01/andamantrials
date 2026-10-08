import express from 'express';
import {
  getStays,
  getStayBySlug,
  searchStays,
  getStayRooms,
  getStayAvailability,
  createStay,
  updateStay,
  deleteStay,
  addRoom,
  updateRoom,
  deleteRoom
} from '../controllers/stayController.js';
import { protect } from '../middlewares/authMiddleware.js';
import { adminOnly } from '../middlewares/adminMiddleware.js';
import { stayValidation } from '../validators/stayValidator.js';
import { validateRequest } from '../middlewares/validationMiddleware.js';

const router = express.Router();

// Public Routes
router.get('/', getStays);
router.get('/search', searchStays);
router.get('/:slug', getStayBySlug);
router.get('/:id/rooms', getStayRooms);
router.get('/:id/availability', getStayAvailability);

// Admin Routes
router.post('/', protect, adminOnly, stayValidation, validateRequest, createStay);
router.put('/:id', protect, adminOnly, updateStay);
router.delete('/:id', protect, adminOnly, deleteStay);
router.post('/:id/rooms', protect, adminOnly, addRoom);
router.put('/rooms/:roomId', protect, adminOnly, updateRoom);
router.delete('/rooms/:roomId', protect, adminOnly, deleteRoom);

export default router;
