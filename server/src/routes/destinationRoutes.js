import express from 'express';
import { getDestinations, getDestinationBySlug, createDestination, updateDestination, deleteDestination } from '../controllers/destinationController.js';
import { protect } from '../middlewares/authMiddleware.js';
import { editorOrAdmin } from '../middlewares/editorMiddleware.js';

const router = express.Router();

router.get('/', getDestinations);
router.get('/:slug', getDestinationBySlug);

// Admin / Editor Protected Routes
router.post('/', protect, editorOrAdmin, createDestination);
router.put('/:id', protect, editorOrAdmin, updateDestination);
router.delete('/:id', protect, editorOrAdmin, deleteDestination);

export default router;
