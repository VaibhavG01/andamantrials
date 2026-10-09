import { apiClient } from './apiClient';

export const blogService = {
  getBlogs: () => apiClient('/blogs'),
  getBlogBySlug: (slug) => apiClient(`/blogs/${slug}`),
  getCategories: () => apiClient('/blogs/categories/all'),
};
