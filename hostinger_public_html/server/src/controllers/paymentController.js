import { createRazorpayOrder, processPaymentVerification } from '../services/paymentService.js';
import { successResponse, errorResponse } from '../utils/apiResponse.js';
import { asyncHandler } from '../utils/asyncHandler.js';

import { Booking } from '../models/index.js';

export const createPaymentOrder = asyncHandler(async (req, res) => {
  const { bookingId, amount, currency } = req.body;
  if (!bookingId) {
    return errorResponse(res, 'Booking ID is required for payment order', [], 400);
  }

  let finalAmount = amount;

  // Security Check: Look up price from database booking record if available
  try {
    const booking = await Booking.findByPk(bookingId) || await Booking.findOne({ where: { bookingNumber: bookingId } });
    if (booking && booking.totalAmount) {
      finalAmount = parseFloat(booking.totalAmount);
    }
  } catch {
    // Fall back to parameter amount
  }

  if (!finalAmount || finalAmount <= 0) {
    finalAmount = amount || 1000;
  }

  const order = await createRazorpayOrder(bookingId, finalAmount, currency || 'INR');
  return successResponse(res, 'Razorpay Payment Order generated', order, 201);
});

export const verifyPayment = asyncHandler(async (req, res) => {
  const { bookingId, razorpayOrderId, razorpayPaymentId, razorpaySignature } = req.body;

  if (!bookingId || !razorpayOrderId || !razorpayPaymentId) {
    return errorResponse(res, 'Missing payment verification details', [], 400);
  }

  const updatedBooking = await processPaymentVerification(
    bookingId,
    razorpayOrderId,
    razorpayPaymentId,
    razorpaySignature || 'mock_sig'
  );

  return successResponse(res, 'Payment verified successfully and booking confirmed', updatedBooking);
});
