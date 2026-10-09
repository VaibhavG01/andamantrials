import { User } from '../models/index.js';
import { generateToken } from '../utils/generateToken.js';
import { ROLES } from '../constants/roles.js';
import { sendUserWelcomeEmail, sendAdminNewUserNotificationEmail } from './emailService.js';

export const registerUser = async ({ name, email, password, phone, role }) => {
  const existingUser = await User.findOne({ where: { email } });
  if (existingUser) {
    throw new Error('User already exists with this email address.');
  }

  const assignedRole = role && [ROLES.USER, ROLES.EDITOR].includes(role) ? role : ROLES.USER;

  const user = await User.create({
    name,
    email,
    password,
    phone,
    role: assignedRole,
  });

  const token = generateToken({ id: user.id, email: user.email, role: user.role });

  // 📧 Send Welcome Email to User & Registration Alert Email to Admin
  sendUserWelcomeEmail(user);
  sendAdminNewUserNotificationEmail(user);

  return {
    user: user.toPublicJSON(),
    token,
  };
};

export const loginUser = async ({ email, password }) => {
  const user = await User.findOne({ where: { email } });
  if (!user) {
    throw new Error('Invalid email or password.');
  }

  if (user.status === 'BLOCKED') {
    throw new Error('Your account has been suspended. Please contact support.');
  }

  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    throw new Error('Invalid email or password.');
  }

  const token = generateToken({ id: user.id, email: user.email, role: user.role });

  return {
    user: user.toPublicJSON(),
    token,
  };
};
