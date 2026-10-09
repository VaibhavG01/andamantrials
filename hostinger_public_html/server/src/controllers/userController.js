import { Op } from 'sequelize';
import { User } from '../models/index.js';
import { successResponse, errorResponse } from '../utils/apiResponse.js';
import { getPagination, formatPaginationResponse } from '../utils/pagination.js';
import { asyncHandler } from '../utils/asyncHandler.js';

export const getUsers = asyncHandler(async (req, res) => {
  const { page, limit, offset, sort, order } = getPagination(req.query);
  const isSuperAdmin = req.user?.role === 'SUPER_ADMIN';

  const whereClause = {};
  if (!isSuperAdmin) {
    whereClause.role = { [Op.ne]: 'SUPER_ADMIN' };
  }

  const { count, rows } = await User.findAndCountAll({
    where: whereClause,
    attributes: { exclude: ['password'] },
    limit,
    offset,
    order: [[sort, order]],
  });

  return successResponse(res, 'Users fetched', rows, 200, formatPaginationResponse(count, page, limit));
});

export const getUserById = asyncHandler(async (req, res) => {
  const isSuperAdmin = req.user?.role === 'SUPER_ADMIN';
  const user = await User.findByPk(req.params.id, { attributes: { exclude: ['password'] } });
  if (!user) {
    return errorResponse(res, 'User not found', [], 404);
  }
  if (!isSuperAdmin && user.role === 'SUPER_ADMIN') {
    return errorResponse(res, 'User not found', [], 404);
  }
  return successResponse(res, 'User fetched', user);
});

export const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (!user) {
    return errorResponse(res, 'User not found', [], 404);
  }

  const currentUserRole = req.user?.role;
  const { name, phone, role, status, avatar } = req.body;

  // Protect Super Admin accounts from being altered by non-Super Admins
  if (user.role === 'SUPER_ADMIN' && currentUserRole !== 'SUPER_ADMIN') {
    return errorResponse(res, 'Only Super Administrators can modify Super Admin accounts.', [], 403);
  }

  // Prevent non-Super Admins from elevating any account to SUPER_ADMIN
  if (role === 'SUPER_ADMIN' && currentUserRole !== 'SUPER_ADMIN') {
    return errorResponse(res, 'Only Super Administrators can assign the Super Admin role.', [], 403);
  }

  // Prevent locking out the system: cannot block/demote self if sole Super Admin
  if (req.user?.id === user.id && (status === 'BLOCKED' || (role && role !== user.role))) {
    if (user.role === 'SUPER_ADMIN') {
      const superAdminCount = await User.count({ where: { role: 'SUPER_ADMIN', status: 'ACTIVE' } });
      if (superAdminCount <= 1) {
        return errorResponse(res, 'Cannot demote or block the sole Super Administrator account.', [], 400);
      }
    }
  }

  if (name) user.name = name;
  if (phone) user.phone = phone;
  if (role) user.role = role;
  if (status) user.status = status;
  if (avatar) user.avatar = avatar;

  await user.save();
  return successResponse(res, 'User updated successfully', user.toPublicJSON());
});

export const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (!user) {
    return errorResponse(res, 'User not found', [], 404);
  }

  const currentUserRole = req.user?.role;

  // Protect Super Admin accounts from deletion
  if (user.role === 'SUPER_ADMIN') {
    return errorResponse(res, 'Super Administrator accounts cannot be deleted.', [], 403);
  }

  // Non-Super Admins cannot delete other Admins
  if (currentUserRole !== 'SUPER_ADMIN' && user.role === 'ADMIN') {
    return errorResponse(res, 'Only Super Administrators can delete Administrator accounts.', [], 403);
  }

  await user.destroy();
  return successResponse(res, 'User deleted successfully');
});

