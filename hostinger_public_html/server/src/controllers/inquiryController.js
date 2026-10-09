import { Inquiry } from '../models/index.js';
import { successResponse, errorResponse } from '../utils/apiResponse.js';
import { getPagination, formatPaginationResponse } from '../utils/pagination.js';
import { sendInquiryNotificationEmail } from '../services/emailService.js';
import { asyncHandler } from '../utils/asyncHandler.js';

export const createInquiry = asyncHandler(async (req, res) => {
  const {
    name,
    fullName,
    email,
    phone,
    type,
    tripType,
    travelType,
    message,
    specialRequests,
    travelDate,
    preferredDate,
    travelMonth,
    duration,
    travelers,
    destination,
    package: selectedPackage,
    packageName,
    adults = 2,
    children = 0,
    infants = 0,
    rooms = 1,
    hotelCategory,
    mealPlan,
  } = req.body;

  const finalName = (name || fullName || '').trim();
  const finalEmail = (email || '').trim();
  const finalPhone = (phone || '').trim();
  const finalTravelType = travelType || tripType || type || 'Couple';
  const finalMonthOrDate = travelMonth || travelDate || preferredDate || 'Upcoming Season';
  const finalDuration = duration || '5 Days / 4 Nights';
  const finalDestination = destination || 'All Andaman Islands';
  const finalPackage = packageName || selectedPackage || 'Custom Personalized Package';
  const finalHotelCategory = hotelCategory || '4★ Deluxe (Deluxe / Premium)';
  const finalMealPlan = mealPlan || 'CP (Breakfast Included)';
  const finalMessage = message || specialRequests || '';

  const totalGuests = (Number(adults) || 2) + (Number(children) || 0) + (Number(infants) || 0);
  const guestSummary = `${adults || 2} Adults • ${children || 0} Children • ${infants || 0} Infants • ${rooms || 1} Room(s) (Total: ${totalGuests} Pax)`;

  // Build clean comprehensive inquiry text for database record
  const messageParts = [
    `📌 Destination: ${finalDestination}`,
    `📦 Package: ${finalPackage}`,
    `🗓️ Travel Month/Date: ${finalMonthOrDate}`,
    `⏳ Duration: ${finalDuration}`,
    `👥 Guests & Rooms: ${guestSummary}`,
    `🏨 Hotel Category: ${finalHotelCategory}`,
    `🍽️ Meal Plan: ${finalMealPlan}`,
    `⛵ Travel Type: ${finalTravelType}`,
  ];

  if (finalMessage) {
    messageParts.push(`\n💬 Special Requests / Notes:\n${finalMessage}`);
  }

  const combinedMessage = messageParts.join('\n');

  let parsedDate = null;
  if (travelDate || preferredDate) {
    const d = new Date(travelDate || preferredDate);
    if (!isNaN(d.getTime())) {
      parsedDate = d;
    }
  }

  const inquiry = await Inquiry.create({
    name: finalName || 'Valued Traveler',
    email: finalEmail || 'traveler@andaman-trails.com',
    phone: finalPhone,
    type: 'TRIP_PLANNING',
    message: combinedMessage,
    preferredDate: parsedDate,
  });

  const emailPayload = {
    id: inquiry.id,
    name: finalName || 'Valued Traveler',
    email: finalEmail,
    phone: finalPhone,
    destination: finalDestination,
    packageName: finalPackage,
    travelMonth: finalMonthOrDate,
    duration: finalDuration,
    adults: Number(adults) || 2,
    children: Number(children) || 0,
    infants: Number(infants) || 0,
    rooms: Number(rooms) || 1,
    totalGuests,
    guestSummary,
    hotelCategory: finalHotelCategory,
    mealPlan: finalMealPlan,
    travelType: finalTravelType,
    tripType: finalTravelType,
    preferredDate: finalMonthOrDate,
    message: finalMessage || 'None specified',
    combinedMessage,
    createdAt: inquiry.createdAt || new Date(),
  };

  sendInquiryNotificationEmail(emailPayload).catch((err) => {
    console.error('Non-blocking error sending holiday enquiry email:', err);
  });

  return successResponse(
    res,
    'Your holiday enquiry has been sent successfully. Our island experts will craft your personalized quote within 2 hours.',
    inquiry,
    201
  );
});

export const getInquiriesAdmin = asyncHandler(async (req, res) => {
  const { page, limit, offset, sort, order } = getPagination(req.query);

  const { count, rows } = await Inquiry.findAndCountAll({
    limit,
    offset,
    order: [[sort, order]],
  });

  return successResponse(res, 'Inquiries list fetched', rows, 200, formatPaginationResponse(count, page, limit));
});

export const updateInquiryAdmin = asyncHandler(async (req, res) => {
  const inquiry = await Inquiry.findByPk(req.params.id);
  if (!inquiry) {
    return errorResponse(res, 'Inquiry not found', [], 404);
  }

  if (req.body.status) inquiry.status = req.body.status;
  await inquiry.save();
  return successResponse(res, 'Inquiry updated', inquiry);
});
