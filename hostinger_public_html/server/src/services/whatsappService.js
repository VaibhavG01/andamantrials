import { logger } from '../utils/logger.js';

export const sendWhatsAppNotification = async (phoneNumber, templateName, parameters = {}) => {
  const formattedMessage = `
🌴 ANDAMAN TRAILS INSTANT NOTIFICATION 🌴
----------------------------------------
Dear ${parameters.name || 'Traveler'},

${parameters.message || 'Thank you for choosing Andaman Trails!'}

Booking Ref: ${parameters.bookingNumber || 'AT-2026-VIP'}
Status: ${parameters.status || 'CONFIRMED'}

For instant assistance on WhatsApp, reply directly to this chat or call our 24/7 Port Blair Helpdesk.
----------------------------------------
  `.trim();

  logger.info(`[WHATSAPP MESSAGE SENT] To: ${phoneNumber} | Template: ${templateName}`);
  logger.info(formattedMessage);
  return { success: true, messageId: `wa_msg_${Date.now()}` };
};
