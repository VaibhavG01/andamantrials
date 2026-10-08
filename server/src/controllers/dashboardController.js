import { User, Booking, Ferry, Cruise, Stay, Destination, Blog, Inquiry, ContactMessage } from '../models/index.js';
import { successResponse } from '../utils/apiResponse.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { sequelize } from '../config/database.js';

export const getAdminDashboardStats = asyncHandler(async (req, res) => {
  const [
    totalUsers,
    totalBookings,
    totalFerries,
    totalCruises,
    totalStays,
    totalDestinations,
    totalBlogs,
    totalInquiries,
    pendingBookings,
    revenueResult,
    recentBookings,
    recentUsers,
    recentInquiries,
  ] = await Promise.all([
    User.count(),
    Booking.count(),
    Ferry.count(),
    Cruise.count(),
    Stay.count(),
    Destination.count(),
    Blog.count(),
    Inquiry.count(),
    Booking.count({ where: { bookingStatus: 'PENDING' } }),
    Booking.sum('totalAmount', { where: { paymentStatus: 'PAID' } }),
    Booking.findAll({ limit: 5, order: [['createdAt', 'DESC']], include: [{ model: User, as: 'user', attributes: ['name', 'email'] }] }),
    User.findAll({ limit: 5, order: [['createdAt', 'DESC']], attributes: { exclude: ['password'] } }),
    Inquiry.findAll({ limit: 5, order: [['createdAt', 'DESC']] }),
  ]);

  const bookingStatistics = {
    FERRY: await Booking.count({ where: { bookingType: 'FERRY' } }),
    CRUISE: await Booking.count({ where: { bookingType: 'CRUISE' } }),
    STAY: await Booking.count({ where: { bookingType: 'STAY' } }),
  };

  const range = req.query.range || req.query.period || '30d';
  const { Op } = sequelize.Sequelize || sequelize;

  let daysLimit = 30;

  if (range === 'Today' || range === '1d') {
    daysLimit = 1;
  } else if (range === '7 Days' || range === '7d') {
    daysLimit = 7;
  } else if (range === '30 Days' || range === '30d') {
    daysLimit = 30;
  } else if (range === '3m') {
    daysLimit = 90;
  } else if (range === '6m') {
    daysLimit = 180;
  } else if (range === 'This Year' || range === '1y') {
    daysLimit = 365;
  }

  const startDate = new Date();
  startDate.setDate(startDate.getDate() - daysLimit);

  // Fetch paid bookings within the date range
  const paidBookingsInRange = await Booking.findAll({
    attributes: ['totalAmount', 'createdAt'],
    where: {
      paymentStatus: 'PAID',
      createdAt: {
        [Op.gte]: startDate,
      },
    },
    order: [['createdAt', 'ASC']],
  });

  // Aggregate cleanly in JavaScript to avoid SQL engine GROUP BY discrepancies
  const revenueMap = new Map();

  paidBookingsInRange.forEach((b) => {
    const d = new Date(b.createdAt);
    let key;
    if (daysLimit === 1) {
      key = `${String(d.getHours()).padStart(2, '0')}:00`;
    } else if (daysLimit > 30) {
      key = d.toLocaleDateString('en-IN', { month: 'short', year: '2-digit' });
    } else {
      key = d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short' });
    }
    const current = revenueMap.get(key) || 0;
    revenueMap.set(key, current + parseFloat(b.totalAmount || 0));
  });

  let revenueHistoryMapped = [];

  if (daysLimit === 1) {
    for (let i = 24; i >= 0; i -= 4) {
      const d = new Date();
      d.setHours(d.getHours() - i);
      const formatted = `${String(d.getHours()).padStart(2, '0')}:00`;
      revenueHistoryMapped.push({
        date: formatted,
        revenue: revenueMap.get(formatted) || 0,
      });
    }
  } else if (daysLimit <= 30) {
    for (let i = daysLimit - 1; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const formatted = d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short' });
      revenueHistoryMapped.push({
        date: formatted,
        revenue: revenueMap.get(formatted) || 0,
      });
    }
  } else {
    const monthsCount = Math.ceil(daysLimit / 30);
    for (let i = monthsCount - 1; i >= 0; i--) {
      const d = new Date();
      d.setMonth(d.getMonth() - i);
      const formatted = d.toLocaleDateString('en-IN', { month: 'short', year: '2-digit' });
      revenueHistoryMapped.push({
        date: formatted,
        revenue: revenueMap.get(formatted) || 0,
      });
    }
  }

  const dashboardData = {
    totalUsers,
    totalBookings,
    totalFerries,
    totalCruises,
    totalStays,
    totalDestinations,
    totalBlogs,
    totalInquiries,
    revenue: revenueResult || 0,
    pendingBookings,
    recentBookings,
    recentUsers,
    recentInquiries,
    bookingStatistics,
    revenueHistory: revenueHistoryMapped,
    revenueStatistics: {
      total: revenueResult || 0,
      currency: 'INR',
    },
  };

  return successResponse(res, 'Admin dashboard statistics fetched', dashboardData);
});
