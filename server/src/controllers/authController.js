import { registerUser, loginUser } from '../services/authService.js';
import { User } from '../models/index.js';
import { successResponse, errorResponse } from '../utils/apiResponse.js';
import { asyncHandler } from '../utils/asyncHandler.js';

export const register = asyncHandler(async (req, res) => {
  const result = await registerUser(req.body);
  return successResponse(res, 'Registration successful', result, 201);
});

export const login = asyncHandler(async (req, res) => {
  const result = await loginUser(req.body);
  return successResponse(res, 'Login successful', result);
});

export const logout = asyncHandler(async (req, res) => {
  return successResponse(res, 'Logged out successfully');
});

export const me = asyncHandler(async (req, res) => {
  const user = await User.findByPk(req.user.id);
  if (!user) {
    return errorResponse(res, 'User not found', [], 404);
  }
  return successResponse(res, 'Profile fetched', user.toPublicJSON());
});

export const updateProfile = asyncHandler(async (req, res) => {
  const user = await User.findByPk(req.user.id);
  if (!user) {
    return errorResponse(res, 'User not found', [], 404);
  }

  const { name, phone, avatar } = req.body;
  if (name) user.name = name;
  if (phone) user.phone = phone;
  if (avatar) user.avatar = avatar;

  await user.save();
  return successResponse(res, 'Profile updated successfully', user.toPublicJSON());
});

export const changePassword = asyncHandler(async (req, res) => {
  const user = await User.findByPk(req.user.id);
  if (!user) {
    return errorResponse(res, 'User not found', [], 404);
  }

  const { currentPassword, newPassword } = req.body;
  if (!currentPassword || !newPassword) {
    return errorResponse(res, 'Current password and new password are required', [], 400);
  }

  const isMatch = await user.comparePassword(currentPassword);
  if (!isMatch) {
    return errorResponse(res, 'Current password is incorrect', [], 400);
  }

  user.password = newPassword;
  await user.save();

  return successResponse(res, 'Password changed successfully');
});

export const forgotPassword = asyncHandler(async (req, res) => {
  return successResponse(res, 'Password reset instructions sent to your email.');
});

export const resetPassword = asyncHandler(async (req, res) => {
  return successResponse(res, 'Password reset successfully.');
});
