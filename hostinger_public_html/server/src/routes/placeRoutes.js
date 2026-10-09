import express from 'express';
import { getPlaces, getPlaceById, createPlace, updatePlace, deletePlace } from '../controllers/placeController.js';
import { protect } from '../middlewares/authMiddleware.js';
import { editorOrAdmin } from '../middlewares/editorMiddleware.js';

const router = express.Router();

router.get('/', getPlaces);
router.get('/:id', getPlaceById);

// Admin / Editor Protected Routes
router.post('/', protect, editorOrAdmin, createPlace);
router.put('/:id', protect, editorOrAdmin, updatePlace);
router.delete('/:id', protect, editorOrAdmin, deletePlace);

export default router;
