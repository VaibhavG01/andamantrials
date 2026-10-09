import axiosClient from '../api/axiosClient';

export const adminService = {
  // Dashboard Analytics APIs
  getDashboardStats: (params = {}) => axiosClient.get('/admin/dashboard/stats', { params }),
  getRevenueAnalytics: (period = '30d') => axiosClient.get(`/admin/dashboard/revenue?period=${period}`),
  getBookingAnalytics: () => axiosClient.get('/admin/dashboard/bookings'),
  getUserAnalytics: () => axiosClient.get('/admin/dashboard/users'),

  // Bookings Management
  getAllBookings: (params = {}) => axiosClient.get('/bookings/admin/all', { params }),
  getBookingDetails: (id) => axiosClient.get(`/bookings/${id}`),
  updateBookingStatus: (id, status) => axiosClient.put(`/bookings/${id}/status`, { status }),

  // Users Management
  getAllUsers: (params = {}) => axiosClient.get('/users', { params }),
  getUserDetails: (id) => axiosClient.get(`/users/${id}`),
  updateUserRole: (id, role) => axiosClient.put(`/users/${id}/role`, { role }),
  updateUserStatus: (id, status) => axiosClient.put(`/users/${id}/status`, { status }),

  // Destinations Management
  getDestinations: () => axiosClient.get('/destinations'),
  createDestination: (data) => axiosClient.post('/destinations', data),
  updateDestination: (id, data) => axiosClient.put(`/destinations/${id}`, data),
  deleteDestination: (id) => axiosClient.delete(`/destinations/${id}`),

  // Ferries & Schedules Management
  getFerries: () => axiosClient.get('/ferries?all=true'),
  createFerry: (data) => axiosClient.post('/ferries', data),
  updateFerry: (id, data) => axiosClient.put(`/ferries/${id}`, data),
  deleteFerry: (id) => axiosClient.delete(`/ferries/${id}`),
  getFerryRoutes: () => axiosClient.get('/ferries/routes'),
  getFerrySchedules: () => axiosClient.get('/ferries/schedules/all'),
  getFerrySchedulesByFerry: (ferryId) => axiosClient.get(`/ferries/${ferryId}/schedules`),
  createFerrySchedule: (ferryId, data) => axiosClient.post(`/ferries/${ferryId}/schedule`, data),
  addFerrySchedule: (ferryId, data) => axiosClient.post(`/ferries/${ferryId}/schedule`, data),
  updateFerrySchedule: (scheduleId, data) => axiosClient.put(`/ferries/schedule/${scheduleId}`, data),
  deleteFerrySchedule: (scheduleId) => axiosClient.delete(`/ferries/schedule/${scheduleId}`),

  // Cruises & Schedules Management
  getCruises: () => axiosClient.get('/cruises?all=true'),
  createCruise: (data) => axiosClient.post('/cruises', data),
  updateCruise: (id, data) => axiosClient.put(`/cruises/${id}`, data),
  deleteCruise: (id) => axiosClient.delete(`/cruises/${id}`),
  createCruiseSchedule: (cruiseId, data) => axiosClient.post(`/cruises/${cruiseId}/schedule`, data),
  addCruiseSchedule: (cruiseId, data) => axiosClient.post(`/cruises/${cruiseId}/schedule`, data),
  updateCruiseSchedule: (scheduleId, data) => axiosClient.put(`/cruises/schedule/${scheduleId}`, data),
  deleteCruiseSchedule: (scheduleId) => axiosClient.delete(`/cruises/schedule/${scheduleId}`),

  // Stays & Rooms Management
  getStays: () => axiosClient.get('/stays?all=true'),
  createStay: (data) => axiosClient.post('/stays', data),
  updateStay: (id, data) => axiosClient.put(`/stays/${id}`, data),
  deleteStay: (id) => axiosClient.delete(`/stays/${id}`),
  getRooms: (stayId) => axiosClient.get(`/stays/${stayId}/rooms`),
  addRoom: (stayId, data) => axiosClient.post(`/stays/${stayId}/rooms`, data),
  updateRoom: (roomId, data) => axiosClient.put(`/stays/rooms/${roomId}`, data),
  deleteRoom: (roomId) => axiosClient.delete(`/stays/rooms/${roomId}`),

  // Blogs & Categories Management
  getBlogs: () => axiosClient.get('/blogs'),
  createBlog: (data) => axiosClient.post('/blogs', data),
  updateBlog: (id, data) => axiosClient.put(`/blogs/${id}`, data),
  deleteBlog: (id) => axiosClient.delete(`/blogs/${id}`),
  getBlogCategories: () => axiosClient.get('/blogs/categories/all'),
  createBlogCategory: (data) => axiosClient.post('/blogs/categories', data),
  updateBlogCategory: (id, data) => axiosClient.put(`/blogs/categories/${id}`, data),
  deleteBlogCategory: (id) => axiosClient.delete(`/blogs/categories/${id}`),

  // Inquiries & Contact Messages
  getInquiries: () => axiosClient.get('/inquiries/admin'),
  updateInquiryStatus: (id, status) => axiosClient.put(`/inquiries/admin/${id}/status`, { status }),
  getContactMessages: () => axiosClient.get('/contact/admin'),

  // Reviews Management
  getReviews: () => axiosClient.get('/reviews/admin/all'),
  updateReviewStatus: (id, status) => axiosClient.put(`/reviews/admin/${id}/status`, { status }),

  // Settings & Profile
  getSettings: () => axiosClient.get('/admin/settings'),
  updateSettings: (data) => axiosClient.put('/admin/settings', data),

  // Film Chapters Management
  getFilmChapters: () => axiosClient.get('/film-chapters'),
  createFilmChapter: (data) => axiosClient.post('/film-chapters', data),
  updateFilmChapter: (id, data) => axiosClient.put(`/film-chapters/${id}`, data),
  deleteFilmChapter: (id) => axiosClient.delete(`/film-chapters/${id}`),

  // Activities Management
  getActivities: () => axiosClient.get('/activities?all=true'),
  createActivity: (data) => axiosClient.post('/activities', data),
  updateActivity: (id, data) => axiosClient.put(`/activities/${id}`, data),
  deleteActivity: (id) => axiosClient.delete(`/activities/${id}`),

  // Testimonials Management
  getTestimonials: () => axiosClient.get('/testimonials'),
  createTestimonial: (data) => axiosClient.post('/testimonials', data),
  updateTestimonial: (id, data) => axiosClient.put(`/testimonials/${id}`, data),
  deleteTestimonial: (id) => axiosClient.delete(`/testimonials/${id}`),

  // Itinerary Management
  getItineraries: () => axiosClient.get('/itineraries'),
  getItinerary: (id) => axiosClient.get(`/itineraries/${id}`),
  createItinerary: (data) => axiosClient.post('/itineraries', data),
  updateItinerary: (id, data) => axiosClient.put(`/itineraries/${id}`, data),
  deleteItinerary: (id) => axiosClient.delete(`/itineraries/${id}`),
  addItineraryDay: (itineraryId, data) => axiosClient.post(`/itineraries/${itineraryId}/days`, data),
  updateItineraryDay: (itineraryId, dayId, data) => axiosClient.put(`/itineraries/${itineraryId}/days/${dayId}`, data),
  deleteItineraryDay: (itineraryId, dayId) => axiosClient.delete(`/itineraries/${itineraryId}/days/${dayId}`),
  reorderItineraryDays: (itineraryId, daysOrder) => axiosClient.put(`/itineraries/${itineraryId}/reorder`, { daysOrder }),

  // Packages Management
  getPackages: () => axiosClient.get('/packages?all=true'),
  createPackage: (data) => axiosClient.post('/packages', data),
  updatePackage: (id, data) => axiosClient.put(`/packages/${id}`, data),
  deletePackage: (id) => axiosClient.delete(`/packages/${id}`),

  // Master Categories & Locations
  getMasterCategories: (type = '') => axiosClient.get(`/master/categories${type ? `?type=${type}` : ''}`),
  createMasterCategory: (data) => axiosClient.post('/master/categories', data),
  updateMasterCategory: (id, data) => axiosClient.put(`/master/categories/${id}`, data),
  deleteMasterCategory: (id) => axiosClient.delete(`/master/categories/${id}`),

  getMasterLocations: (island = '') => axiosClient.get(`/master/locations${island ? `?island=${encodeURIComponent(island)}` : ''}`),
  createMasterLocation: (data) => axiosClient.post('/master/locations', data),
  updateMasterLocation: (id, data) => axiosClient.put(`/master/locations/${id}`, data),
  deleteMasterLocation: (id) => axiosClient.delete(`/master/locations/${id}`),

  // Gallery Photos Management
  getGalleryPhotos: (params = {}) => axiosClient.get('/gallery', { params }),
  createGalleryPhoto: (data) => axiosClient.post('/gallery', data),
  updateGalleryPhoto: (id, data) => axiosClient.put(`/gallery/${id}`, data),
  deleteGalleryPhoto: (id) => axiosClient.delete(`/gallery/${id}`),

  // File Uploads
  uploadSingleImage: (file) => {
    const formData = new FormData();
    formData.append('image', file);
    return axiosClient.post('/upload/single', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },
  uploadMultipleImages: (files) => {
    const formData = new FormData();
    Array.from(files).forEach((file) => formData.append('images', file));
    return axiosClient.post('/upload/multiple', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },
};

export default adminService;
