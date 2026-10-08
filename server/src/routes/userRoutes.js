import express from 'express';
import { getUsers, getUserById, updateUser, deleteUser } from '../controllers/userController.js';
import { protect } from '../middlewares/authMiddleware.js';
import { adminOnly } from '../middlewares/adminMiddleware.js';

const router = express.Router();

router.use(protect);

router.get('/', adminOnly, getUsers);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.put('/:id/role', adminOnly, updateUser);
router.put('/:id/status', adminOnly, updateUser);
router.delete('/:id', adminOnly, deleteUser);

export default router;
