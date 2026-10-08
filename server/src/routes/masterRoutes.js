import express from 'express';
import {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
  getLocations,
  createLocation,
  updateLocation,
  deleteLocation,
} from '../controllers/masterController.js';
import { protect } from '../middlewares/authMiddleware.js';
import { editorOrAdmin } from '../middlewares/editorMiddleware.js';

const router = express.Router();

// ── Categories Endpoints ──
router.get('/categories', getCategories);
router.post('/categories', protect, editorOrAdmin, createCategory);
router.put('/categories/:id', protect, editorOrAdmin, updateCategory);
router.delete('/categories/:id', protect, editorOrAdmin, deleteCategory);

// ── Locations Endpoints ──
router.get('/locations', getLocations);
router.post('/locations', protect, editorOrAdmin, createLocation);
router.put('/locations/:id', protect, editorOrAdmin, updateLocation);
router.delete('/locations/:id', protect, editorOrAdmin, deleteLocation);

export default router;
