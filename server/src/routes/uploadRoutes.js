import express from 'express';
import {
  uploadSingleImage,
  uploadMultipleImages,
  uploadDocumentImage,
  getMediaLibrary,
  deleteMediaById,
} from '../controllers/uploadController.js';
import { upload, uploadAnyImages } from '../middlewares/uploadMiddleware.js';
import { protect } from '../middlewares/authMiddleware.js';
import { editorOrAdmin } from '../middlewares/editorMiddleware.js';

const router = express.Router();

// Single image upload endpoint (flexible field names)
router.post('/single', protect, editorOrAdmin, uploadAnyImages, uploadSingleImage);

// Multi-image upload endpoint (accepts multiple images across any field name: images, gallery, photos, etc.)
router.post('/multiple', protect, editorOrAdmin, uploadAnyImages, uploadMultipleImages);

// Document / PDF upload endpoint
router.post('/document', protect, uploadAnyImages, uploadDocumentImage);

// Media Library Query & Delete
router.get('/library', protect, editorOrAdmin, getMediaLibrary);
router.delete('/:id', protect, editorOrAdmin, deleteMediaById);

export default router;
