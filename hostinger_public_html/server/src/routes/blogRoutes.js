import express from 'express';
import {
  getBlogs,
  getBlogBySlug,
  createBlog,
  updateBlog,
  deleteBlog,
  getBlogCategories,
  createBlogCategory,
  updateBlogCategory,
  deleteBlogCategory,
} from '../controllers/blogController.js';
import { protect } from '../middlewares/authMiddleware.js';
import { editorOrAdmin } from '../middlewares/editorMiddleware.js';
import { blogValidation } from '../validators/blogValidator.js';
import { validateRequest } from '../middlewares/validationMiddleware.js';

const router = express.Router();

// Categories routes (before /:slug)
router.get('/categories/all', getBlogCategories);
router.post('/categories', protect, editorOrAdmin, createBlogCategory);
router.put('/categories/:id', protect, editorOrAdmin, updateBlogCategory);
router.delete('/categories/:id', protect, editorOrAdmin, deleteBlogCategory);

// Blog Posts routes
router.get('/', getBlogs);
router.get('/:slug', getBlogBySlug);

// Editor / Admin Routes
router.post('/', protect, editorOrAdmin, blogValidation, validateRequest, createBlog);
router.put('/:id', protect, editorOrAdmin, updateBlog);
router.delete('/:id', protect, editorOrAdmin, deleteBlog);

export default router;
