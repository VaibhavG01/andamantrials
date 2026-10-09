import express from 'express';
import { getPackages, getPackageById, createPackage, updatePackage, deletePackage } from '../controllers/packageController.js';
import { protect } from '../middlewares/authMiddleware.js';
import { editorOrAdmin } from '../middlewares/editorMiddleware.js';

const router = express.Router();

router.get('/', getPackages);
router.get('/:id', getPackageById);

// Admin / Editor Protected Routes
router.post('/', protect, editorOrAdmin, createPackage);
router.put('/:id', protect, editorOrAdmin, updatePackage);
router.delete('/:id', protect, editorOrAdmin, deletePackage);

export default router;
