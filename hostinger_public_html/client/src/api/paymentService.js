// client/src/api/paymentService.js
import { apiClient } from './apiClient';

export const paymentService = {
  // 1. Create Razorpay Payment Order
  createOrder: async ({ bookingId, amount, currency = 'INR' }) => {
    return await apiClient('/payments/create-order', {
      method: 'POST',
      body: JSON.stringify({ bookingId, amount, currency }),
    });
  },

  // 2. Verify Razorpay Payment Signature
  verifyPayment: async ({ bookingId, razorpayOrderId, razorpayPaymentId, razorpaySignature }) => {
    return await apiClient('/payments/verify', {
      method: 'POST',
      body: JSON.stringify({
        bookingId,
        razorpayOrderId,
        razorpayPaymentId,
        razorpaySignature,
      }),
    });
  },
};
