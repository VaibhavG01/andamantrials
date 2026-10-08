import { createRazorpayOrder } from '../services/paymentService.js';
import { logger } from '../utils/logger.js';
import dotenv from 'dotenv';
dotenv.config();

const runTest = async () => {
  try {
    const order = await createRazorpayOrder('1', 500);
    console.log('Success:', order);
  } catch (err) {
    console.log('Error thrown:', err);
    console.log('Error message:', err.message);
    if (err.error) {
      console.log('Razorpay Raw Error:', err.error);
    }
  }
};
runTest();
