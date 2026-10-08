import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
dotenv.config({ path: 'server/.env' });

console.log('Testing SMTP User:', process.env.SMTP_USER);
const cleanPass = (process.env.SMTP_PASSWORD || '').replace(/\s+/g, '');
console.log('Clean password length:', cleanPass.length);

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_USER,
    pass: cleanPass,
  },
});

async function run() {
  try {
    await transporter.verify();
    console.log('✅ Transporter Verified with Gmail!');

    const info = await transporter.sendMail({
      from: `Andaman Trails <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      subject: 'Test Email from Andaman Trails',
      text: 'Hello, this is a test email from Andaman Trails system.',
    });

    console.log('✅ Email sent successfully! Message ID:', info.messageId);
  } catch (err) {
    console.error('❌ Email Error:', err);
  }
}

run();
