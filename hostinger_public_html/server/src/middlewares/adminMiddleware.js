import { ROLES } from '../constants/roles.js';
import { errorResponse } from '../utils/apiResponse.js';

export const superAdminOnly = (req, res, next) => {
  if (req.user && req.user.role === ROLES.SUPER_ADMIN) {
    return next();
  }
  return errorResponse(res, 'Access denied. Super Administrator privileges required.', [], 403);
};

export const adminOnly = (req, res, next) => {
  if (req.user && (req.user.role === ROLES.SUPER_ADMIN || req.user.role === ROLES.ADMIN)) {
    return next();
  }
  return errorResponse(res, 'Access denied. Administrator privileges required.', [], 403);
};

export const staffOrAdmin = (req, res, next) => {
  if (
    req.user &&
    (req.user.role === ROLES.SUPER_ADMIN ||
      req.user.role === ROLES.ADMIN ||
      req.user.role === ROLES.EDITOR ||
      req.user.role === ROLES.RECEPTIONIST)
  ) {
    return next();
  }
  return errorResponse(res, 'Access denied. Staff privileges required.', [], 403);
};

