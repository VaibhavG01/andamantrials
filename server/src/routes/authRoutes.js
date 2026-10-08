import express from 'express';
import { register, login, logout, me, updateProfile, changePassword, forgotPassword, resetPassword } from '../controllers/authController.js';
import { protect } from '../middlewares/authMiddleware.js';
import { authLimiter } from '../middlewares/rateLimitMiddleware.js';
import { registerValidation, loginValidation, forgotPasswordValidation, resetPasswordValidation } from '../validators/authValidator.js';
import { validateRequest } from '../middlewares/validationMiddleware.js';

const router = express.Router();

router.post('/register', authLimiter, registerValidation, validateRequest, register);
router.post('/login', authLimiter, loginValidation, validateRequest, login);
router.post('/logout', protect, logout);
router.get('/me', protect, me);
router.put('/profile', protect, updateProfile);
router.put('/change-password', protect, changePassword);
router.post('/forgot-password', authLimiter, forgotPasswordValidation, validateRequest, forgotPassword);
router.post('/reset-password', authLimiter, resetPasswordValidation, validateRequest, resetPassword);

export default router;
