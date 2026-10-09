import express from 'express';
import {
  getGalleryPhotos,
  getGalleryCategories,
  getGalleryPhotoById,
  likeGalleryPhoto,
  createGalleryPhoto,
  updateGalleryPhoto,
  deleteGalleryPhoto,
} from '../controllers/galleryController.js';
import { protect } from '../middlewares/authMiddleware.js';
import { editorOrAdmin } from '../middlewares/editorMiddleware.js';

const router = express.Router();

// Public Routes
router.get('/', getGalleryPhotos);
router.get('/categories', getGalleryCategories);
router.get('/:id', getGalleryPhotoById);
router.post('/:id/like', likeGalleryPhoto);

// Admin / Editor Protected Routes
router.post('/', protect, editorOrAdmin, createGalleryPhoto);
router.put('/:id', protect, editorOrAdmin, updateGalleryPhoto);
router.delete('/:id', protect, editorOrAdmin, deleteGalleryPhoto);

export default router;
