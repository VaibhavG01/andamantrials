import express from 'express';
import {
  getItineraries, getItineraryById, createItinerary, updateItinerary, deleteItinerary,
  addItineraryDay, updateItineraryDay, deleteItineraryDay, reorderItineraryDays
} from '../controllers/itineraryController.js';
import { protect } from '../middlewares/authMiddleware.js';
import { editorOrAdmin } from '../middlewares/editorMiddleware.js';

const router = express.Router();

router.get('/', getItineraries);
router.get('/:id', getItineraryById);

// Admin / Editor Protected Routes
router.post('/', protect, editorOrAdmin, createItinerary);
router.put('/:id', protect, editorOrAdmin, updateItinerary);
router.delete('/:id', protect, editorOrAdmin, deleteItinerary);

router.post('/:itineraryId/days', protect, editorOrAdmin, addItineraryDay);
router.put('/:itineraryId/days/:dayId', protect, editorOrAdmin, updateItineraryDay);
router.delete('/:itineraryId/days/:dayId', protect, editorOrAdmin, deleteItineraryDay);
router.put('/:itineraryId/reorder', protect, editorOrAdmin, reorderItineraryDays);

export default router;
