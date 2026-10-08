import express from 'express';
import { 
  getFilmChapters, createFilmChapter, updateFilmChapter, deleteFilmChapter 
} from '../controllers/filmController.js';
import { protect } from '../middlewares/authMiddleware.js';
import { editorOrAdmin } from '../middlewares/editorMiddleware.js';

const router = express.Router();

router.get('/', getFilmChapters);

// Admin/Editor Protected Routes
router.post('/', protect, editorOrAdmin, createFilmChapter);
router.put('/:id', protect, editorOrAdmin, updateFilmChapter);
router.delete('/:id', protect, editorOrAdmin, deleteFilmChapter);

export default router;
