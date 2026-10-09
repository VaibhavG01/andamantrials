import Razorpay from 'razorpay';
import dotenv from 'dotenv';
import { logger } from '../utils/logger.js';

dotenv.config();

const rawKeyId = process.env.RAZORPAY_KEY_ID || 'rzp_test_RmOX6fSIDBulsx';
const rawKeySecret = process.env.RAZORPAY_KEY_SECRET || '7ZUpNWBUa0SHY16dC9GnaoPr';

const keyId = rawKeyId.replace(/^["']|["']$/g, '').trim();
const keySecret = rawKeySecret.replace(/^["']|["']$/g, '').trim();

export const razorpayInstance = new Razorpay({
  key_id: keyId,
  key_secret: keySecret,
});

logger.info(`Razorpay Payment Gateway configured with Key ID: ${keyId}`);

