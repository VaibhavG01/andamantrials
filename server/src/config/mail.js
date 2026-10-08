import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { logger } from '../utils/logger.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env from both server folder and workspace root
dotenv.config({ path: path.resolve(__dirname, '../../.env') });
dotenv.config({ path: path.resolve(__dirname, '../../../.env') });

const getSmtpConfig = () => {
  const smtpUser = (process.env.SMTP_USER || '').trim();
  const smtpPass = (process.env.SMTP_PASSWORD || '').replace(/\s+/g, '');
  const isGmail = smtpUser.includes('@gmail.com') || process.env.SMTP_HOST === 'smtp.gmail.com';
  return { smtpUser, smtpPass, isGmail };
};

export const createMailTransporter = () => {
  const { smtpUser, smtpPass, isGmail } = getSmtpConfig();
  if (isGmail) {
    return nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });
  }
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT, 10) || 587,
    secure: parseInt(process.env.SMTP_PORT, 10) === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });
};

export const transporter = createMailTransporter();

export const verifyMailConnection = async () => {
  try {
    const { smtpUser, smtpPass } = getSmtpConfig();
    if (smtpUser && smtpPass) {
      await transporter.verify();
      logger.info(`✅ SMTP Mail Service initialized and verified for ${smtpUser}`);
    } else {
      logger.info('SMTP Credentials not configured. Mail service will log emails locally.');
    }
  } catch (error) {
    logger.warn(`SMTP Mail verification warning: ${error.message}`);
  }
};

