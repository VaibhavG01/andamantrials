import { ROLES } from '../constants/roles.js';
import { errorResponse } from '../utils/apiResponse.js';

export const receptionistOrAdmin = (req, res, next) => {
  if (
    req.user &&
    (req.user.role === ROLES.SUPER_ADMIN ||
      req.user.role === ROLES.ADMIN ||
      req.user.role === ROLES.RECEPTIONIST)
  ) {
    return next();
  }
  return errorResponse(res, 'Access denied. Receptionist or Administrator privileges required.', [], 403);
};

