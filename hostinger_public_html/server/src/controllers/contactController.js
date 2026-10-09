import { ContactMessage } from '../models/index.js';
import { successResponse, errorResponse } from '../utils/apiResponse.js';
import { getPagination, formatPaginationResponse } from '../utils/pagination.js';
import { sendContactNotificationEmail } from '../services/emailService.js';
import { asyncHandler } from '../utils/asyncHandler.js';

export const createContactMessage = asyncHandler(async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  const contact = await ContactMessage.create({
    name,
    email,
    phone,
    subject,
    message,
  });

  sendContactNotificationEmail(contact);
  return successResponse(res, 'Thank you for contacting Andaman Trails. We will get back to you shortly.', contact, 201);
});

export const getContactMessagesAdmin = asyncHandler(async (req, res) => {
  const { page, limit, offset, sort, order } = getPagination(req.query);

  const { count, rows } = await ContactMessage.findAndCountAll({
    limit,
    offset,
    order: [[sort, order]],
  });

  return successResponse(res, 'Contact messages list', rows, 200, formatPaginationResponse(count, page, limit));
});

export const updateContactStatusAdmin = asyncHandler(async (req, res) => {
  const contact = await ContactMessage.findByPk(req.params.id);
  if (!contact) {
    return errorResponse(res, 'Contact message not found', [], 404);
  }

  contact.status = req.body.status || 'READ';
  await contact.save();
  return successResponse(res, 'Contact message status updated', contact);
});
