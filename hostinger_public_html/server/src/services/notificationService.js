import { logger } from '../utils/logger.js';

export const sendAdminNotification = async (subject, payload) => {
  logger.info(`[ADMIN NOTIFICATION] ${subject}: ${JSON.stringify(payload)}`);
};
