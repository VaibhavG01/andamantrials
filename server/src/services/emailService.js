import { transporter } from '../config/mail.js';
import { logger } from '../utils/logger.js';

// ── Common Luxury Email Styling Tokens
const BRAND_COLOR_CYAN = '#00c9d4';
const BRAND_COLOR_EMERALD = '#00e5a0';
const DARK_BG = '#05162a';

export const sendUserWelcomeEmail = async (user) => {
  const mailFrom = process.env.MAIL_FROM || `"Andaman Trails" <${process.env.SMTP_USER || 'softbyvaibhav01@gmail.com'}>`;
  
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Welcome to Andaman Trails</title>
    </head>
    <body style="margin:0; padding:0; background-color:#f1f5f9; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#f1f5f9; padding:40px 10px;">
        <tr>
          <td align="center">
            <table role="presentation" width="100%" style="max-width:600px; background:#ffffff; border-radius:16px; overflow:hidden; box-shadow:0 10px 25px rgba(0,0,0,0.08); border:1px solid #cbd5e1;">
              
              <!-- Header Banner -->
              <tr>
                <td style="background: linear-gradient(135deg, ${DARK_BG} 0%, #030c17 100%); padding:36px 30px; text-align:center; position:relative;">
                  <div style="display:inline-block; width:54px; height:54px; border-radius:50%; background:rgba(0, 201, 212, 0.15); border:1px solid ${BRAND_COLOR_CYAN}; line-height:54px; font-size:28px; margin-bottom:12px;">
                    🏝️
                  </div>
                  <h1 style="color:#ffffff; font-size:26px; margin:0; font-weight:700; letter-spacing:0.02em;">ANDAMAN TRAILS</h1>
                  <p style="color:${BRAND_COLOR_EMERALD}; font-size:12px; margin:6px 0 0 0; text-transform:uppercase; font-weight:800; letter-spacing:0.18em;">
                    LUXURY ISLAND HOPPING & TRAVEL CONCIERGE
                  </p>
                </td>
              </tr>

              <!-- Body Content -->
              <tr>
                <td style="padding:32px 30px;">
                  <h2 style="color:#0f172a; font-size:20px; margin-top:0; margin-bottom:12px;">Welcome Aboard, ${user.name}! ⛵</h2>
                  <p style="color:#475569; font-size:14px; line-height:1.6; margin-bottom:20px;">
                    Your account has been officially activated. You are now part of India's premier luxury island concierge network, granting you instant access to high-speed catamaran ferries, private ocean charter cruises, beachfront villas, and certified scuba diving expeditions across Port Blair, Havelock, and Neil Island.
                  </p>

                  <!-- Account Details Box -->
                  <table role="presentation" width="100%" style="background:#f8fafc; border-left:4px solid ${BRAND_COLOR_CYAN}; border-radius:8px; padding:18px; margin-bottom:24px;">
                    <tr>
                      <td>
                        <p style="margin:4px 0; font-size:13px; color:#1e293b;"><strong>Registered Email:</strong> ${user.email}</p>
                        <p style="margin:4px 0; font-size:13px; color:#1e293b;"><strong>Account Tier:</strong> VIP Platinum Traveler</p>
                        <p style="margin:4px 0; font-size:13px; color:#1e293b;"><strong>Status:</strong> Active & Verified</p>
                      </td>
                    </tr>
                  </table>

                  <!-- CTA Button -->
                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-bottom:24px;">
                    <tr>
                      <td align="center">
                        <a href="${process.env.FRONTEND_URL || 'http://localhost:5173'}/dashboard" style="background:linear-gradient(135deg, ${BRAND_COLOR_CYAN}, ${BRAND_COLOR_EMERALD}); color:#030c17; text-decoration:none; padding:14px 32px; border-radius:30px; font-weight:800; font-size:13px; display:inline-block; text-transform:uppercase; letter-spacing:0.06em; box-shadow:0 6px 20px rgba(0, 201, 212, 0.3);">
                          EXPLORE TRAVELER DASHBOARD ✨
                        </a>
                      </td>
                    </tr>
                  </table>

                  <p style="color:#64748b; font-size:13px; line-height:1.5;">
                    If you have any questions or require custom honeymoon planning, our 24/7 Port Blair Concierge Desk is always at your service.
                  </p>
                </td>
              </tr>

              <!-- Footer Banner -->
              <tr>
                <td style="background:#0f172a; padding:24px 30px; text-align:center; color:#94a3b8; font-size:12px;">
                  <p style="margin:0 0 8px 0; font-weight:600; color:#e2e8f0;">Andaman Trails Luxury Travel Platform</p>
                  <p style="margin:0 0 12px 0;">Phoenix Bay Jetty, Port Blair, Andaman & Nicobar Islands, India</p>
                  <p style="margin:0; font-size:11px; color:#64748b;">© 2026 Andaman Trails. All rights reserved.</p>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;

  try {
    if (process.env.SMTP_USER) {
      await transporter.sendMail({
        from: mailFrom,
        to: user.email,
        subject: `Welcome to Andaman Trails, ${user.name}! 🏝️`,
        html,
      });
      logger.info(`Welcome email sent to ${user.email}`);
    } else {
      logger.info(`[MOCK EMAIL SENT TO USER] To: ${user.email} | Subject: Welcome to Andaman Trails`);
    }
  } catch (error) {
    logger.error(`Failed to send Welcome email to user ${user.email}: ${error.message}`);
  }
};

export const sendAdminNewUserNotificationEmail = async (user) => {
  const mailFrom = process.env.MAIL_FROM || 'Andaman Trails System <noreply@andamantrails.com>';
  const adminEmail = process.env.ADMIN_EMAIL || 'admin@andaman-trails.com';

  const html = `
    <!DOCTYPE html>
    <html>
    <body style="font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background:#f8fafc; padding:20px;">
      <div style="max-width:560px; margin:0 auto; background:#ffffff; border-radius:12px; border:1px solid #cbd5e1; padding:24px;">
        <div style="display:flex; align-items:center; gap:10px; margin-bottom:16px;">
          <div style="background:#00c9d4; color:#030c17; border-radius:50%; width:36px; height:36px; text-align:center; line-height:36px; font-weight:bold;">🔔</div>
          <h2 style="margin:0; font-size:18px; color:#0f172a;">New Registration Notification</h2>
        </div>
        <p style="color:#475569; font-size:14px; margin-bottom:16px;">A new traveler account has registered on the platform:</p>

        <table style="width:100%; border-collapse:collapse; background:#f1f5f9; border-radius:8px; font-size:13px;">
          <tr><td style="padding:10px; border-bottom:1px solid #e2e8f0; font-weight:bold; width:120px;">User ID:</td><td style="padding:10px; border-bottom:1px solid #e2e8f0;">#${user.id}</td></tr>
          <tr><td style="padding:10px; border-bottom:1px solid #e2e8f0; font-weight:bold;">Full Name:</td><td style="padding:10px; border-bottom:1px solid #e2e8f0;">${user.name}</td></tr>
          <tr><td style="padding:10px; border-bottom:1px solid #e2e8f0; font-weight:bold;">Email:</td><td style="padding:10px; border-bottom:1px solid #e2e8f0;">${user.email}</td></tr>
          <tr><td style="padding:10px; border-bottom:1px solid #e2e8f0; font-weight:bold;">Phone:</td><td style="padding:10px; border-bottom:1px solid #e2e8f0;">${user.phone || 'N/A'}</td></tr>
          <tr><td style="padding:10px; font-weight:bold;">Role:</td><td style="padding:10px;">${user.role}</td></tr>
        </table>

        <div style="margin-top:20px; text-align:center;">
          <a href="${process.env.FRONTEND_URL || 'http://localhost:5173'}/admin/dashboard" style="background:#0f172a; color:#ffffff; padding:10px 20px; border-radius:20px; text-decoration:none; font-size:12px; font-weight:bold;">
            OPEN ADMIN CONTROL CENTER →
          </a>
        </div>
      </div>
    </body>
    </html>
  `;

  try {
    if (process.env.SMTP_USER) {
      await transporter.sendMail({
        from: mailFrom,
        to: adminEmail,
        subject: `[ADMIN ALERT] New User Registration: ${user.name} (${user.email})`,
        html,
      });
      logger.info(`Admin notification email sent to ${adminEmail}`);
    } else {
      logger.info(`[MOCK EMAIL SENT TO ADMIN] To: ${adminEmail} | New User: ${user.email}`);
    }
  } catch (error) {
    logger.error(`Failed to send Admin notification email: ${error.message}`);
  }
};

export const sendAdminNewBookingNotificationEmail = async (booking, guests = []) => {
  const mailFrom = process.env.MAIL_FROM || 'Andaman Trails System <noreply@andamantrails.com>';
  const adminEmail = process.env.ADMIN_EMAIL || 'admin@andaman-trails.com';

  const html = `
    <!DOCTYPE html>
    <html>
    <body style="font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background:#f8fafc; padding:20px;">
      <div style="max-width:580px; margin:0 auto; background:#ffffff; border-radius:12px; border:1px solid #00c9d4; padding:24px;">
        <div style="display:flex; align-items:center; gap:10px; margin-bottom:16px;">
          <div style="background:#00e5a0; color:#030c17; border-radius:50%; width:36px; height:36px; text-align:center; line-height:36px; font-weight:bold;">💰</div>
          <h2 style="margin:0; font-size:18px; color:#0f172a;">New Booking Received Alert</h2>
        </div>
        <p style="color:#475569; font-size:14px; margin-bottom:16px;">A new booking has been confirmed and paid:</p>

        <table style="width:100%; border-collapse:collapse; background:#f0fdfa; border-radius:8px; font-size:13px; margin-bottom:16px;">
          <tr><td style="padding:10px; border-bottom:1px solid #ccfbf1; font-weight:bold; width:140px;">Booking Ref:</td><td style="padding:10px; border-bottom:1px solid #ccfbf1; font-weight:bold; color:#0f766e;">${booking.bookingNumber}</td></tr>
          <tr><td style="padding:10px; border-bottom:1px solid #ccfbf1; font-weight:bold;">Customer Name:</td><td style="padding:10px; border-bottom:1px solid #ccfbf1;">${booking.customerName}</td></tr>
          <tr><td style="padding:10px; border-bottom:1px solid #ccfbf1; font-weight:bold;">Email / Phone:</td><td style="padding:10px; border-bottom:1px solid #ccfbf1;">${booking.customerEmail} (${booking.customerPhone})</td></tr>
          <tr><td style="padding:10px; border-bottom:1px solid #ccfbf1; font-weight:bold;">Booking Category:</td><td style="padding:10px; border-bottom:1px solid #ccfbf1;">${booking.bookingType}</td></tr>
          <tr><td style="padding:10px; border-bottom:1px solid #ccfbf1; font-weight:bold;">Travel Date:</td><td style="padding:10px; border-bottom:1px solid #ccfbf1;">${booking.bookingDate}</td></tr>
          <tr><td style="padding:10px; font-weight:bold;">Total Amount:</td><td style="padding:10px; font-weight:bold; color:#059669;">₹${parseFloat(booking.totalAmount).toLocaleString('en-IN')}</td></tr>
        </table>

        <div style="margin-top:20px; text-align:center;">
          <a href="${process.env.FRONTEND_URL || 'http://localhost:5173'}/admin/dashboard" style="background:#00c9d4; color:#030c17; padding:10px 22px; border-radius:20px; text-decoration:none; font-size:12px; font-weight:bold;">
            MANAGE BOOKING IN ADMIN CONSOLE →
          </a>
        </div>
      </div>
    </body>
    </html>
  `;

  try {
    if (process.env.SMTP_USER) {
      await transporter.sendMail({
        from: mailFrom,
        to: adminEmail,
        subject: `[ADMIN NEW BOOKING] ${booking.bookingNumber} - ₹${parseFloat(booking.totalAmount).toLocaleString('en-IN')}`,
        html,
      });
      logger.info(`Admin booking notification email sent to ${adminEmail} for ${booking.bookingNumber}`);
    } else {
      logger.info(`[MOCK EMAIL SENT TO ADMIN] New Booking Alert: ${booking.bookingNumber}`);
    }
  } catch (error) {
    logger.error(`Failed to send Admin booking alert email: ${error.message}`);
  }
};

export const sendBookingConfirmationEmail = async (booking, guests = []) => {
  const mailFrom = process.env.MAIL_FROM || `"Andaman Trails" <${process.env.SMTP_USER || 'softbyvaibhav01@gmail.com'}>`;
  
  const guestRows = guests
    .map(g => `<tr><td style="padding:8px;border-bottom:1px solid #e2e8f0;font-weight:bold;">${g.fullName}</td><td style="padding:8px;border-bottom:1px solid #e2e8f0;color:#64748b;">${g.guestType}</td></tr>`)
    .join('');

  const html = `
    <!DOCTYPE html>
    <html>
    <body style="margin:0; padding:0; background:#f1f5f9; font-family:'Segoe UI', Arial, sans-serif;">
      <table role="presentation" width="100%" style="padding:40px 10px;">
        <tr>
          <td align="center">
            <table role="presentation" width="100%" style="max-width:600px; background:#ffffff; border-radius:16px; border:1px solid #cbd5e1; overflow:hidden;">
              
              <!-- Header -->
              <tr>
                <td style="background:linear-gradient(135deg, #05162a, #030c17); padding:30px; text-align:center; color:#ffffff;">
                  <h1 style="margin:0; font-size:22px; color:#00c9d4;">⛵ BOOKING CONFIRMED</h1>
                  <p style="margin:6px 0 0 0; font-size:12px; color:#00e5a0; font-weight:bold; letter-spacing:0.15em;">ANDAMAN TRAILS E-TICKET VOUCHER</p>
                </td>
              </tr>

              <!-- Content -->
              <tr>
                <td style="padding:28px;">
                  <p style="font-size:15px; color:#1e293b; margin-top:0;">Dear <strong>${booking.customerName}</strong>,</p>
                  <p style="font-size:13px; color:#475569;">Your booking has been successfully confirmed and processed by our system. Here are your booking details:</p>

                  <div style="background:#f0fdfa; border:1px solid #ccfbf1; border-radius:10px; padding:18px; margin:20px 0;">
                    <p style="margin:4px 0; font-size:13px; color:#0f766e;"><strong>Booking Number:</strong> ${booking.bookingNumber}</p>
                    <p style="margin:4px 0; font-size:13px; color:#0f766e;"><strong>Service Category:</strong> ${booking.bookingType}</p>
                    <p style="margin:4px 0; font-size:13px; color:#0f766e;"><strong>Travel Date:</strong> ${booking.bookingDate}</p>
                    <p style="margin:4px 0; font-size:13px; color:#0f766e;"><strong>Total Guests:</strong> ${booking.totalGuests}</p>
                    <p style="margin:4px 0; font-size:14px; color:#0f766e;"><strong>Total Amount Paid:</strong> ₹${parseFloat(booking.totalAmount).toLocaleString('en-IN')}</p>
                  </div>

                  ${guests.length > 0 ? `
                    <h3 style="font-size:14px; color:#0f172a; margin-bottom:10px;">Passenger Manifest</h3>
                    <table style="width:100%; border-collapse:collapse; font-size:13px; margin-bottom:20px;">
                      <thead>
                        <tr style="background:#f8fafc; text-align:left; color:#64748b;">
                          <th style="padding:8px; border-bottom:1px solid #cbd5e1;">Passenger Name</th>
                          <th style="padding:8px; border-bottom:1px solid #cbd5e1;">Type</th>
                        </tr>
                      </thead>
                      <tbody>${guestRows}</tbody>
                    </table>
                  ` : ''}

                  <div style="text-align:center; margin-top:24px;">
                    <a href="${process.env.FRONTEND_URL || 'http://localhost:5173'}/dashboard" style="background:#00c9d4; color:#030c17; text-decoration:none; padding:12px 26px; border-radius:20px; font-weight:bold; font-size:13px;">
                      VIEW BOARDING PASS IN DASHBOARD
                    </a>
                  </div>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;

  try {
    if (process.env.SMTP_USER) {
      await transporter.sendMail({
        from: mailFrom,
        to: booking.customerEmail,
        subject: `Booking Confirmation Voucher - ${booking.bookingNumber}`,
        html,
      });
      logger.info(`Confirmation email sent to ${booking.customerEmail}`);
    } else {
      logger.info(`[MOCK EMAIL SENT] To: ${booking.customerEmail} | Booking: ${booking.bookingNumber}`);
    }
  } catch (error) {
    logger.error(`Failed to send booking email to ${booking.customerEmail}: ${error.message}`);
  }
};

export const sendContactNotificationEmail = async (contact) => {
  const mailFrom = process.env.MAIL_FROM || `"Andaman Trails" <${process.env.SMTP_USER || 'softbyvaibhav01@gmail.com'}>`;
  const adminEmail = process.env.ADMIN_EMAIL || 'admin@andaman-trails.com';

  const userHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8" />
      <title>Thank You for Contacting Andaman Trails</title>
    </head>
    <body style="margin:0; padding:0; background-color:#f1f5f9; font-family:'Segoe UI', Arial, sans-serif;">
      <table role="presentation" width="100%" style="background-color:#f1f5f9; padding:40px 10px;">
        <tr>
          <td align="center">
            <table role="presentation" width="100%" style="max-width:600px; background:#ffffff; border-radius:16px; overflow:hidden; box-shadow:0 10px 25px rgba(0,0,0,0.08); border:1px solid #cbd5e1;">
              <tr>
                <td style="background: linear-gradient(135deg, ${DARK_BG} 0%, #030c17 100%); padding:30px; text-align:center; color:#ffffff;">
                  <h1 style="color:#00c9d4; font-size:24px; margin:0;">Message Received</h1>
                  <p style="color:${BRAND_COLOR_EMERALD}; font-size:12px; margin:6px 0 0 0; text-transform:uppercase; font-weight:800; letter-spacing:0.15em;">We'll Get Back to You Shortly</p>
                </td>
              </tr>
              <tr>
                <td style="padding:32px 30px;">
                  <p style="font-size:15px; color:#1e293b; margin-top:0;">Dear <strong>${contact.name}</strong>,</p>
                  <p style="font-size:14px; color:#475569; line-height:1.6;">
                    Thank you for reaching out to Andaman Trails! We have received your query and our travel desk will get in touch with you shortly.
                  </p>
                  <div style="background:#f8fafc; border-left:4px solid #00c9d4; border-radius:8px; padding:18px; margin:20px 0;">
                    <p style="margin:4px 0; font-size:13px; color:#1e293b;"><strong>Subject:</strong> ${contact.subject || 'General Inquiry'}</p>
                    <p style="margin:4px 0; font-size:13px; color:#1e293b;"><strong>Message:</strong></p>
                    <p style="margin:4px 0; font-size:13px; color:#475569; font-style:italic;">"${contact.message}"</p>
                  </div>
                  <p style="color:#64748b; font-size:13px; line-height:1.5; margin-top:20px;">
                    Best Regards,<br/>
                    <strong>Andaman Trails Concierge Team</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td style="background:#0f172a; padding:24px 30px; text-align:center; color:#94a3b8; font-size:12px;">
                  <p style="margin:0 0 8px 0; font-weight:600; color:#e2e8f0;">Andaman Trails Luxury Travel Platform</p>
                  <p style="margin:0; font-size:11px; color:#64748b;">© 2026 Andaman Trails. All rights reserved.</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;

  const adminHtml = `
    <!DOCTYPE html>
    <html>
    <body style="font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background:#f8fafc; padding:20px;">
      <div style="max-width:580px; margin:0 auto; background:#ffffff; border-radius:12px; border:1px solid #00c9d4; padding:24px;">
        <div style="display:flex; align-items:center; gap:10px; margin-bottom:16px;">
          <h2 style="margin:0; font-size:18px; color:#0f172a;">📩 New Contact Form Submission</h2>
        </div>
        <table style="width:100%; border-collapse:collapse; background:#f1f5f9; border-radius:8px; font-size:13px; margin-bottom:16px;">
          <tr><td style="padding:10px; border-bottom:1px solid #e2e8f0; font-weight:bold; width:120px;">Name:</td><td style="padding:10px; border-bottom:1px solid #e2e8f0;">${contact.name}</td></tr>
          <tr><td style="padding:10px; border-bottom:1px solid #e2e8f0; font-weight:bold;">Email:</td><td style="padding:10px; border-bottom:1px solid #e2e8f0;">${contact.email}</td></tr>
          <tr><td style="padding:10px; border-bottom:1px solid #e2e8f0; font-weight:bold;">Phone:</td><td style="padding:10px; border-bottom:1px solid #e2e8f0;">${contact.phone || 'N/A'}</td></tr>
          <tr><td style="padding:10px; border-bottom:1px solid #e2e8f0; font-weight:bold;">Subject:</td><td style="padding:10px; border-bottom:1px solid #e2e8f0;">${contact.subject || 'General Inquiry'}</td></tr>
          <tr><td style="padding:10px; font-weight:bold; vertical-align:top;">Message:</td><td style="padding:10px; color:#475569; line-height:1.5;">${contact.message}</td></tr>
        </table>
        <div style="text-align:center;">
          <a href="${process.env.FRONTEND_URL || 'http://localhost:5173'}/admin/dashboard" style="background:#0f172a; color:#ffffff; padding:10px 22px; border-radius:20px; text-decoration:none; font-size:12px; font-weight:bold; display:inline-block;">
            VIEW IN ADMIN CONTROL CENTER
          </a>
        </div>
      </div>
    </body>
    </html>
  `;

  try {
    if (process.env.SMTP_USER) {
      await transporter.sendMail({
        from: mailFrom,
        to: contact.email,
        subject: `We've received your query - Andaman Trails`,
        html: userHtml,
      });
      await transporter.sendMail({
        from: mailFrom,
        to: adminEmail,
        subject: `[New Contact Query] Subject: ${contact.subject || 'General Inquiry'} from ${contact.name}`,
        html: adminHtml,
      });
      logger.info(`Contact notification emails sent to user ${contact.email} and admin ${adminEmail}`);
    } else {
      logger.info(`[MOCK EMAIL SENT] Contact form submission from ${contact.email}`);
    }
  } catch (error) {
    logger.error(`Failed to send Contact form email notifications: ${error.message}`);
  }
};

export const sendInquiryNotificationEmail = async (inquiry) => {
  const mailFrom = process.env.MAIL_FROM || `"Andaman Trails" <${process.env.SMTP_USER || 'softbyvaibhav01@gmail.com'}>`;
  const adminEmail = process.env.ADMIN_EMAIL || process.env.SMTP_USER || 'admin@andaman-trails.com';

  const cleanPhone = inquiry.phone ? String(inquiry.phone).replace(/[^0-9]/g, '') : '';
  const waLink = cleanPhone ? `https://wa.me/${cleanPhone.startsWith('91') ? cleanPhone : '91' + cleanPhone}` : null;

  const userHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8" />
      <title>Your Holiday Enquiry Received — Andaman Trails</title>
    </head>
    <body style="margin:0; padding:0; background-color:#FAF4EE; font-family:'Segoe UI', Arial, sans-serif;">
      <table role="presentation" width="100%" style="background-color:#FAF4EE; padding:40px 10px;">
        <tr>
          <td align="center">
            <table role="presentation" width="100%" style="max-width:620px; background:#ffffff; border-radius:18px; overflow:hidden; box-shadow:0 12px 30px rgba(11,37,69,0.08); border:1px solid #EBDED2;">
              
              <!-- Header -->
              <tr>
                <td style="background: linear-gradient(135deg, #0B2545 0%, #153B68 100%); padding:36px 30px; text-align:center; color:#ffffff;">
                  <div style="display:inline-block; width:52px; height:52px; border-radius:50%; background:rgba(240, 101, 67, 0.2); border:1.5px solid #F06543; line-height:52px; font-size:26px; margin-bottom:12px;">
                    ✈️
                  </div>
                  <h1 style="color:#ffffff; font-size:24px; margin:0; font-weight:700; letter-spacing:0.02em;">ANDAMAN TRAILS</h1>
                  <p style="color:#F06543; font-size:12px; margin:6px 0 0 0; text-transform:uppercase; font-weight:800; letter-spacing:0.16em;">
                    LUXURY ISLAND HOLIDAY PLANNER
                  </p>
                </td>
              </tr>

              <!-- Content -->
              <tr>
                <td style="padding:32px 30px;">
                  <h2 style="color:#0B2545; font-size:20px; margin-top:0; margin-bottom:12px;">We've Received Your Holiday Enquiry, ${inquiry.name}! ✨</h2>
                  <p style="color:#475569; font-size:14.5px; line-height:1.6; margin-bottom:20px;">
                    Thank you for planning your dream holiday with <strong>Andaman Trails</strong>. Our dedicated island trip architects are already reviewing your preferences to craft a personalized quotation and custom day-by-day itinerary.
                  </p>

                  <div style="background:#FFF9F5; border:1.5px solid #F06543; border-radius:14px; padding:20px; margin-bottom:24px;">
                    <div style="font-size:12px; font-weight:800; color:#F06543; letter-spacing:0.1em; text-transform:uppercase; margin-bottom:12px;">
                      📋 YOUR HOLIDAY SPECIFICATIONS
                    </div>
                    <table style="width:100%; font-size:13.5px; color:#1E293B; border-collapse:collapse;">
                      <tr>
                        <td style="padding:6px 0; color:#64748B; width:150px;"><strong>Full Name:</strong></td>
                        <td style="padding:6px 0; font-weight:700; color:#0B2545;">${inquiry.name}</td>
                      </tr>
                      <tr>
                        <td style="padding:6px 0; color:#64748B;"><strong>Phone Number:</strong></td>
                        <td style="padding:6px 0; font-weight:700; color:#0B2545;">${inquiry.phone || 'N/A'}</td>
                      </tr>
                      <tr>
                        <td style="padding:6px 0; color:#64748B;"><strong>Email Address:</strong></td>
                        <td style="padding:6px 0; font-weight:700; color:#0B2545;">${inquiry.email}</td>
                      </tr>
                      ${inquiry.destination ? `
                      <tr>
                        <td style="padding:6px 0; color:#64748B;"><strong>Destination:</strong></td>
                        <td style="padding:6px 0; font-weight:700; color:#0B2545;">${inquiry.destination}</td>
                      </tr>
                      ` : ''}
                      ${inquiry.packageName ? `
                      <tr>
                        <td style="padding:6px 0; color:#64748B;"><strong>Package:</strong></td>
                        <td style="padding:6px 0; font-weight:700; color:#0B2545;">${inquiry.packageName}</td>
                      </tr>
                      ` : ''}
                      <tr>
                        <td style="padding:6px 0; color:#64748B;"><strong>Travel Month / Date:</strong></td>
                        <td style="padding:6px 0; font-weight:700; color:#0B2545;">${inquiry.travelMonth || inquiry.preferredDate || 'Upcoming Season'}</td>
                      </tr>
                      <tr>
                        <td style="padding:6px 0; color:#64748B;"><strong>Duration:</strong></td>
                        <td style="padding:6px 0; font-weight:700; color:#0B2545;">${inquiry.duration || '5 Days / 4 Nights'}</td>
                      </tr>
                      <tr>
                        <td style="padding:6px 0; color:#64748B;"><strong>Guests & Rooms:</strong></td>
                        <td style="padding:6px 0; font-weight:700; color:#0B2545;">${inquiry.guestSummary || `${inquiry.adults || 2} Adults, ${inquiry.rooms || 1} Room`}</td>
                      </tr>
                      ${inquiry.hotelCategory ? `
                      <tr>
                        <td style="padding:6px 0; color:#64748B;"><strong>Hotel Category:</strong></td>
                        <td style="padding:6px 0; font-weight:700; color:#0B2545;">${inquiry.hotelCategory}</td>
                      </tr>
                      ` : ''}
                      ${inquiry.mealPlan ? `
                      <tr>
                        <td style="padding:6px 0; color:#64748B;"><strong>Meal Plan:</strong></td>
                        <td style="padding:6px 0; font-weight:700; color:#0B2545;">${inquiry.mealPlan}</td>
                      </tr>
                      ` : ''}
                      <tr>
                        <td style="padding:6px 0; color:#64748B;"><strong>Travel Type:</strong></td>
                        <td style="padding:6px 0; font-weight:700; color:#F06543;">${inquiry.travelType || inquiry.tripType || 'Couple'}</td>
                      </tr>
                      ${inquiry.message && inquiry.message !== 'None specified' ? `
                      <tr>
                        <td style="padding:6px 0; color:#64748B; vertical-align:top;"><strong>Special Requirements:</strong></td>
                        <td style="padding:6px 0; color:#475569; font-style:italic; line-height:1.5;">${inquiry.message}</td>
                      </tr>
                      ` : ''}
                    </table>
                  </div>

                  <div style="background:#F8FAFC; border-left:4px solid #10B981; border-radius:8px; padding:16px; margin-bottom:24px;">
                    <p style="margin:0; font-size:13.5px; color:#1E293B; line-height:1.5;">
                      ⏱️ <strong>Guaranteed Quick Turnaround:</strong> Our destination expert will connect with you via WhatsApp or phone within <strong>2 hours</strong> with your customized itinerary and best rates.
                    </p>
                  </div>

                  <p style="color:#64748B; font-size:13px; line-height:1.6; margin:0;">
                    Need urgent assistance or custom flight planning? Reach our 24/7 Island Concierge directly on WhatsApp: <a href="https://wa.me/919999999999" style="color:#F06543; font-weight:700; text-decoration:none;">+91 99999 99999</a>
                  </p>
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="background:#0B2545; padding:22px 30px; text-align:center; color:#94A3B8; font-size:12px;">
                  <p style="margin:0 0 6px 0; font-weight:700; color:#E2E8F0;">Andaman Trails — India's Premier Island Travel Specialist</p>
                  <p style="margin:0; font-size:11px; color:#64748B;">© 2026 Andaman Trails. All rights reserved.</p>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;

  const adminHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8" />
      <title>New Holiday Planning Enquiry</title>
    </head>
    <body style="margin:0; padding:0; background-color:#F1F5F9; font-family:'Segoe UI', Arial, sans-serif;">
      <table role="presentation" width="100%" style="background-color:#F1F5F9; padding:30px 10px;">
        <tr>
          <td align="center">
            <table role="presentation" width="100%" style="max-width:640px; background:#ffffff; border-radius:16px; overflow:hidden; box-shadow:0 10px 28px rgba(0,0,0,0.08); border:2px solid #F06543;">
              
              <!-- Admin Header Banner -->
              <tr>
                <td style="background:#0B2545; padding:24px 28px; color:#ffffff;">
                  <div>
                    <span style="background:#F06543; color:#ffffff; font-size:11px; font-weight:800; padding:4px 10px; border-radius:6px; text-transform:uppercase; letter-spacing:0.08em;">
                      NEW HOLIDAY LEAD ALERT ✈️
                    </span>
                    <h2 style="margin:10px 0 0 0; font-size:20px; color:#ffffff;">New Trip Enquiry: ${inquiry.name}</h2>
                  </div>
                </td>
              </tr>

              <!-- Lead Info -->
              <tr>
                <td style="padding:28px;">
                  <p style="color:#475569; font-size:14px; margin-top:0; margin-bottom:18px;">
                    A prospective traveler has just submitted a complete holiday enquiry. Please contact them within 2 hours:
                  </p>

                  <table style="width:100%; border-collapse:collapse; background:#F8FAFC; border-radius:12px; font-size:13.5px; border:1px solid #E2E8F0; margin-bottom:22px;">
                    <tr>
                      <td style="padding:10px 16px; border-bottom:1px solid #E2E8F0; font-weight:700; color:#64748B; width:150px;">Full Name:</td>
                      <td style="padding:10px 16px; border-bottom:1px solid #E2E8F0; font-weight:800; color:#0B2545; font-size:15px;">${inquiry.name}</td>
                    </tr>
                    <tr>
                      <td style="padding:10px 16px; border-bottom:1px solid #E2E8F0; font-weight:700; color:#64748B;">Phone Number:</td>
                      <td style="padding:10px 16px; border-bottom:1px solid #E2E8F0; font-weight:700; color:#0B2545;">
                        <a href="tel:${inquiry.phone}" style="color:#0B2545; text-decoration:none;">${inquiry.phone || 'N/A'}</a>
                        ${waLink ? ` &nbsp; <a href="${waLink}" target="_blank" style="background:#25D366; color:#ffffff; font-size:11px; font-weight:700; padding:3px 8px; border-radius:6px; text-decoration:none;">Chat on WhatsApp 💬</a>` : ''}
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:10px 16px; border-bottom:1px solid #E2E8F0; font-weight:700; color:#64748B;">Email Address:</td>
                      <td style="padding:10px 16px; border-bottom:1px solid #E2E8F0; font-weight:700; color:#0B2545;">
                        <a href="mailto:${inquiry.email}" style="color:#F06543; text-decoration:none;">${inquiry.email}</a>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:10px 16px; border-bottom:1px solid #E2E8F0; font-weight:700; color:#64748B;">Destination:</td>
                      <td style="padding:10px 16px; border-bottom:1px solid #E2E8F0; font-weight:700; color:#0B2545;">${inquiry.destination || 'All Islands'}</td>
                    </tr>
                    <tr>
                      <td style="padding:10px 16px; border-bottom:1px solid #E2E8F0; font-weight:700; color:#64748B;">Package:</td>
                      <td style="padding:10px 16px; border-bottom:1px solid #E2E8F0; font-weight:700; color:#0B2545;">${inquiry.packageName || 'Custom Itinerary'}</td>
                    </tr>
                    <tr>
                      <td style="padding:10px 16px; border-bottom:1px solid #E2E8F0; font-weight:700; color:#64748B;">Travel Month / Date:</td>
                      <td style="padding:10px 16px; border-bottom:1px solid #E2E8F0; font-weight:700; color:#0B2545;">${inquiry.travelMonth || inquiry.preferredDate || 'Flexible'}</td>
                    </tr>
                    <tr>
                      <td style="padding:10px 16px; border-bottom:1px solid #E2E8F0; font-weight:700; color:#64748B;">Duration:</td>
                      <td style="padding:10px 16px; border-bottom:1px solid #E2E8F0; font-weight:700; color:#0B2545;">${inquiry.duration || '5 Days / 4 Nights'}</td>
                    </tr>
                    <tr>
                      <td style="padding:10px 16px; border-bottom:1px solid #E2E8F0; font-weight:700; color:#64748B;">Guests & Rooms:</td>
                      <td style="padding:10px 16px; border-bottom:1px solid #E2E8F0; font-weight:800; color:#0B2545;">${inquiry.guestSummary || `${inquiry.adults || 2} Adults, ${inquiry.rooms || 1} Room`}</td>
                    </tr>
                    <tr>
                      <td style="padding:10px 16px; border-bottom:1px solid #E2E8F0; font-weight:700; color:#64748B;">Hotel Category:</td>
                      <td style="padding:10px 16px; border-bottom:1px solid #E2E8F0; font-weight:700; color:#0B2545;">${inquiry.hotelCategory || 'Not specified'}</td>
                    </tr>
                    <tr>
                      <td style="padding:10px 16px; border-bottom:1px solid #E2E8F0; font-weight:700; color:#64748B;">Meal Plan:</td>
                      <td style="padding:10px 16px; border-bottom:1px solid #E2E8F0; font-weight:700; color:#0B2545;">${inquiry.mealPlan || 'Not specified'}</td>
                    </tr>
                    <tr>
                      <td style="padding:10px 16px; border-bottom:1px solid #E2E8F0; font-weight:700; color:#64748B;">Travel Type:</td>
                      <td style="padding:10px 16px; border-bottom:1px solid #E2E8F0; font-weight:800; color:#F06543;">${inquiry.travelType || inquiry.tripType || 'Couple'}</td>
                    </tr>
                    <tr>
                      <td style="padding:10px 16px; font-weight:700; color:#64748B; vertical-align:top;">Message / Requests:</td>
                      <td style="padding:10px 16px; color:#334155; line-height:1.5; white-space:pre-wrap;">${inquiry.message || 'No additional notes'}</td>
                    </tr>
                  </table>

                  <!-- Action Buttons -->
                  <div style="text-align:center; padding-top:6px;">
                    <a href="${process.env.FRONTEND_URL || 'http://localhost:5173'}/admin/inquiries" style="background:#0B2545; color:#ffffff; padding:12px 24px; border-radius:12px; text-decoration:none; font-size:13px; font-weight:800; display:inline-block; margin-right:8px;">
                      VIEW IN ADMIN PORTAL →
                    </a>
                  </div>
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="background:#F8FAFC; padding:16px 28px; text-align:center; color:#94A3B8; font-size:11px; border-top:1px solid #E2E8F0;">
                  Lead ID #${inquiry.id || 'NEW'} • Andaman Trails Lead Dispatch Service
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;

  try {
    if (process.env.SMTP_USER) {
      // 1. Send confirmation to customer
      await transporter.sendMail({
        from: mailFrom,
        to: inquiry.email,
        subject: `Your Holiday Enquiry Received | Andaman Trails ✈️`,
        html: userHtml,
      });

      // 2. Send alert to admin
      await transporter.sendMail({
        from: mailFrom,
        to: adminEmail,
        subject: `✈️ [NEW HOLIDAY ENQUIRY] ${inquiry.name} - ${inquiry.destination || 'Andaman'} (${inquiry.guestSummary || `${inquiry.adults || 2} Pax`})`,
        html: adminHtml,
      });
      logger.info(`✅ Holiday enquiry emails sent successfully to user (${inquiry.email}) and admin (${adminEmail})`);
    } else {
      logger.info(`[MOCK EMAIL SENT] Holiday enquiry for ${inquiry.name} (${inquiry.email})`);
    }
  } catch (error) {
    logger.error(`❌ Failed to send Holiday Enquiry emails: ${error.message}`);
  }
};

export const sendBookingReminderEmail = async (booking) => {
  const mailFrom = process.env.MAIL_FROM || `"Andaman Trails" <${process.env.SMTP_USER || 'softbyvaibhav01@gmail.com'}>`;
  
  const html = `
    <!DOCTYPE html>
    <html>
    <body style="margin:0; padding:0; background:#f1f5f9; font-family:'Segoe UI', Arial, sans-serif;">
      <table role="presentation" width="100%" style="padding:40px 10px;">
        <tr>
          <td align="center">
            <table role="presentation" width="100%" style="max-width:600px; background:#ffffff; border-radius:16px; border:1px solid #cbd5e1; overflow:hidden;">
              
              <!-- Header -->
              <tr>
                <td style="background:linear-gradient(135deg, #05162a, #030c17); padding:30px; text-align:center; color:#ffffff;">
                  <h1 style="margin:0; font-size:22px; color:#00c9d4;">⏳ 1-WEEK TRAVEL REMINDER</h1>
                  <p style="margin:6px 0 0 0; font-size:12px; color:#00e5a0; font-weight:bold; letter-spacing:0.15em;">YOUR ANDAMAN ADVENTURE STARTS SOON</p>
                </td>
              </tr>

              <!-- Content -->
              <tr>
                <td style="padding:28px;">
                  <p style="font-size:15px; color:#1e293b; margin-top:0;">Dear <strong>${booking.customerName}</strong>,</p>
                  <p style="font-size:13px; color:#475569;">This is a friendly reminder that your upcoming trip/reservation is scheduled in exactly <strong>1 week</strong>! Get ready for the pristine beaches and tropical waters of Andaman.</p>

                  <div style="background:#f0fdfa; border:1px solid #ccfbf1; border-radius:10px; padding:18px; margin:20px 0;">
                    <p style="margin:4px 0; font-size:13px; color:#0f766e;"><strong>Booking Number:</strong> ${booking.bookingNumber}</p>
                    <p style="margin:4px 0; font-size:13px; color:#0f766e;"><strong>Service Category:</strong> ${booking.bookingType}</p>
                    <p style="margin:4px 0; font-size:13px; color:#0f766e;"><strong>Scheduled Date:</strong> ${booking.bookingDate}</p>
                    <p style="margin:4px 0; font-size:13px; color:#0f766e;"><strong>Total Guests:</strong> ${booking.totalGuests}</p>
                  </div>

                  <p style="font-size:13px; color:#475569;">Please make sure to carry a valid Government-issued Photo ID for all travelers. For ferries and stays, check-in starts early.</p>

                  <div style="text-align:center; margin-top:24px;">
                    <a href="${process.env.FRONTEND_URL || 'http://localhost:5173'}/dashboard" style="background:#00c9d4; color:#030c17; text-decoration:none; padding:12px 26px; border-radius:20px; font-weight:bold; font-size:13px; display:inline-block;">
                      VIEW DETAILS IN DASHBOARD
                    </a>
                  </div>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;

  try {
    if (process.env.SMTP_USER) {
      await transporter.sendMail({
        from: mailFrom,
        to: booking.customerEmail,
        subject: `Reminder: Your Andaman Trip ${booking.bookingNumber} starts in 1 week! 🏝️`,
        html,
      });
      logger.info(`Reminder email sent to ${booking.customerEmail} for Booking ${booking.bookingNumber}`);
    } else {
      logger.info(`[MOCK REMINDER EMAIL SENT] To: ${booking.customerEmail} | Booking: ${booking.bookingNumber}`);
    }
  } catch (error) {
    logger.error(`Failed to send reminder email to ${booking.customerEmail}: ${error.message}`);
  }
};

export const sendBookingStatusUpdateEmail = async (booking) => {
  const mailFrom = process.env.MAIL_FROM || `"Andaman Trails" <${process.env.SMTP_USER || 'softbyvaibhav01@gmail.com'}>`;
  
  const statusLabels = {
    CONFIRMED: { text: 'APPROVED & CONFIRMED', color: '#00e5a0', icon: '✅' },
    CANCELLED: { text: 'CANCELLED / REJECTED', color: '#ff5252', icon: '❌' },
    COMPLETED: { text: 'COMPLETED', color: '#00c9d4', icon: '🏝️' },
  };

  const statusInfo = statusLabels[booking.bookingStatus] || { text: booking.bookingStatus, color: '#00c9d4', icon: '🔔' };

  const html = `
    <!DOCTYPE html>
    <html>
    <body style="margin:0; padding:0; background:#f1f5f9; font-family:'Segoe UI', Arial, sans-serif;">
      <table role="presentation" width="100%" style="padding:40px 10px;">
        <tr>
          <td align="center">
            <table role="presentation" width="100%" style="max-width:600px; background:#ffffff; border-radius:16px; border:1px solid #cbd5e1; overflow:hidden;">
              
              <!-- Header -->
              <tr>
                <td style="background:linear-gradient(135deg, #05162a, #030c17); padding:30px; text-align:center; color:#ffffff;">
                  <h1 style="margin:0; font-size:22px; color:${statusInfo.color};">${statusInfo.icon} BOOKING STATUS UPDATE</h1>
                  <p style="margin:6px 0 0 0; font-size:12px; color:#ffffff; font-weight:bold; letter-spacing:0.15em;">STATUS: ${statusInfo.text}</p>
                </td>
              </tr>

              <!-- Content -->
              <tr>
                <td style="padding:28px;">
                  <p style="font-size:15px; color:#1e293b; margin-top:0;">Dear <strong>${booking.customerName}</strong>,</p>
                  <p style="font-size:13px; color:#475569;">The status of your booking <strong>${booking.bookingNumber}</strong> has been updated by the Andaman Trails Concierge Desk.</p>

                  <div style="background:#f8fafc; border-left:4px solid ${statusInfo.color}; border-radius:8px; padding:18px; margin:20px 0;">
                    <p style="margin:4px 0; font-size:13px; color:#1e293b;"><strong>Booking Number:</strong> ${booking.bookingNumber}</p>
                    <p style="margin:4px 0; font-size:13px; color:#1e293b;"><strong>Service Category:</strong> ${booking.bookingType}</p>
                    <p style="margin:4px 0; font-size:13px; color:#1e293b;"><strong>Booking Status:</strong> <span style="color:${statusInfo.color}; font-weight:bold;">${statusInfo.text}</span></p>
                    <p style="margin:4px 0; font-size:13px; color:#1e293b;"><strong>Payment Status:</strong> ${booking.paymentStatus}</p>
                    <p style="margin:4px 0; font-size:13px; color:#1e293b;"><strong>Travel Date:</strong> ${booking.bookingDate}</p>
                  </div>

                  ${booking.bookingStatus === 'CANCELLED' ? `
                    <p style="font-size:13px; color:#e11d48; font-weight:bold;">Your booking has been rejected or cancelled. If this is a refund case, the amount will be processed back to your original payment method within 5-7 working days.</p>
                  ` : `
                    <p style="font-size:13px; color:#475569;">Everything is ready for your departure! You can view and download your verified boarding passes and vouchers inside your dashboard.</p>
                  `}

                  <div style="text-align:center; margin-top:24px;">
                    <a href="${process.env.FRONTEND_URL || 'http://localhost:5173'}/dashboard" style="background:${statusInfo.color}; color:#030c17; text-decoration:none; padding:12px 26px; border-radius:20px; font-weight:bold; font-size:13px; display:inline-block; box-shadow:0 4px 12px rgba(0, 201, 212, 0.2);">
                      ACCESS MY DASHBOARD
                    </a>
                  </div>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;

  try {
    if (process.env.SMTP_USER) {
      await transporter.sendMail({
        from: mailFrom,
        to: booking.customerEmail,
        subject: `Booking ${booking.bookingNumber} Status Updated: ${statusInfo.text} 🏝️`,
        html,
      });
      logger.info(`Status update email sent to ${booking.customerEmail} for Booking ${booking.bookingNumber}`);
    } else {
      logger.info(`[MOCK STATUS EMAIL SENT] To: ${booking.customerEmail} | Booking: ${booking.bookingNumber} | Status: ${booking.bookingStatus}`);
    }
  } catch (error) {
    logger.error(`Failed to send status update email to ${booking.customerEmail}: ${error.message}`);
  }
};

// ── ACTIVITY BOOKING EMAIL SYSTEM ──────────────────────────────────────────

export const getAdminEmail = async () => {
  try {
    const { Setting } = await import('../models/Setting.js');
    const setting = await Setting.findOne({ where: { key: 'email_settings' } });
    if (setting && setting.value && setting.value.adminNotificationEmail) {
      return setting.value.adminNotificationEmail;
    }
  } catch (err) {
    logger.warn(`Could not read admin email from settings: ${err.message}`);
  }
  return process.env.ADMIN_EMAIL || process.env.SMTP_USER || 'admin@andamantrails.com';
};

/**
 * 1. Customer Activity Booking Confirmation Email (Sent after successful Razorpay payment verification)
 */
export const sendActivityBookingConfirmationEmail = async (booking, activity, location = null, slot = null) => {
  const mailFrom = process.env.MAIL_FROM || `"Andaman Trails" <${process.env.SMTP_USER || 'softbyvaibhav01@gmail.com'}>`;
  const activityName = activity?.name || 'Andaman Adventure Activity';
  const locName = location?.locationName || activity?.location || 'Andaman Islands';
  const slotTime = slot ? `${slot.startTime}${slot.endTime ? ' – ' + slot.endTime : ''}` : (booking.slotStartTime || 'Morning Slot');
  const activityDate = booking.activityDate || booking.bookingDate;

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Booking Confirmed – ${activityName}</title>
    </head>
    <body style="margin:0; padding:0; background:#f8fafc; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#f8fafc; padding:30px 10px;">
        <tr>
          <td align="center">
            <table role="presentation" width="100%" style="max-width:600px; background:#ffffff; border-radius:18px; overflow:hidden; box-shadow:0 12px 32px rgba(0, 45, 98, 0.08); border:1px solid #e2e8f0;">
              
              <!-- Header Brand Banner -->
              <tr>
                <td style="background: linear-gradient(135deg, #002D62 0%, #0D9488 100%); padding:36px 30px; text-align:center;">
                  <div style="display:inline-block; width:52px; height:52px; border-radius:14px; background:rgba(255,255,255,0.15); line-height:52px; font-size:26px; margin-bottom:10px;">
                    🤿
                  </div>
                  <h1 style="color:#ffffff; font-size:24px; margin:0; font-weight:800; letter-spacing:0.02em;">ANDAMAN TRAILS</h1>
                  <p style="color:#99f6e4; font-size:11px; margin:6px 0 0 0; text-transform:uppercase; font-weight:800; letter-spacing:0.18em;">
                    ACTIVITY BOOKING CONFIRMED 🎉
                  </p>
                </td>
              </tr>

              <!-- Main Content -->
              <tr>
                <td style="padding:32px 28px;">
                  <p style="font-size:15px; color:#0f172a; margin-top:0;">Dear <strong>${booking.customerName}</strong>,</p>
                  <p style="font-size:13.5px; color:#475569; line-height:1.6; margin-bottom:24px;">
                    Your activity booking for <strong>${activityName}</strong> has been successfully confirmed and your slot has been reserved. Please find your itemized booking voucher details below:
                  </p>

                  <!-- Booking Reference Card -->
                  <table role="presentation" width="100%" style="background:#f0fdfa; border:1.5px solid #ccfbf1; border-radius:14px; padding:20px; margin-bottom:24px;">
                    <tr>
                      <td>
                        <div style="font-size:11px; font-weight:800; color:#0d9488; text-transform:uppercase; letter-spacing:0.12em; margin-bottom:4px;">OFFICIAL BOOKING NUMBER</div>
                        <div style="font-size:20px; font-weight:900; color:#002D62; letter-spacing:0.05em; margin-bottom:12px;">${booking.bookingNumber}</div>
                        
                        <table width="100%" style="border-top:1px solid #e2e8f0; padding-top:12px;">
                          <tr>
                            <td style="padding:4px 0; font-size:13px; color:#334155;"><strong>Activity:</strong></td>
                            <td style="padding:4px 0; font-size:13px; color:#002D62; font-weight:700; text-align:right;">${activityName}</td>
                          </tr>
                          <tr>
                            <td style="padding:4px 0; font-size:13px; color:#334155;"><strong>Location:</strong></td>
                            <td style="padding:4px 0; font-size:13px; color:#002D62; text-align:right;">📍 ${locName}</td>
                          </tr>
                          <tr>
                            <td style="padding:4px 0; font-size:13px; color:#334155;"><strong>Date:</strong></td>
                            <td style="padding:4px 0; font-size:13px; color:#002D62; text-align:right;">📅 ${activityDate}</td>
                          </tr>
                          <tr>
                            <td style="padding:4px 0; font-size:13px; color:#334155;"><strong>Time Slot:</strong></td>
                            <td style="padding:4px 0; font-size:13px; color:#0d9488; font-weight:800; text-align:right;">⏰ ${slotTime}</td>
                          </tr>
                          <tr>
                            <td style="padding:4px 0; font-size:13px; color:#334155;"><strong>Guests:</strong></td>
                            <td style="padding:4px 0; font-size:13px; color:#002D62; text-align:right;">${booking.adultCount || 1} Adult(s)${booking.childCount ? `, ${booking.childCount} Child(ren)` : ''}</td>
                          </tr>
                          <tr>
                            <td style="padding:4px 0; font-size:13px; color:#334155;"><strong>Total Paid:</strong></td>
                            <td style="padding:4px 0; font-size:15px; color:#0d9488; font-weight:900; text-align:right;">₹${Number(booking.totalAmount).toLocaleString()}</td>
                          </tr>
                          <tr>
                            <td style="padding:4px 0; font-size:13px; color:#334155;"><strong>Payment Status:</strong></td>
                            <td style="padding:4px 0; font-size:12px; color:#0d9488; font-weight:800; text-align:right;">PAID (Razorpay: ${booking.razorpayPaymentId || 'VERIFIED'})</td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>

                  <!-- Important Instructions -->
                  <div style="background:#f8fafc; border-left:4px solid #002D62; border-radius:8px; padding:16px; margin-bottom:24px;">
                    <h4 style="margin:0 0 8px; font-size:13px; color:#002D62; text-transform:uppercase; letter-spacing:0.06em;">Important Instructions:</h4>
                    <ul style="margin:0; padding-left:18px; font-size:12.5px; color:#475569; line-height:1.6;">
                      <li>Please report to the activity desk at <strong>${location?.meetingPoint || 'the designated jetty'}</strong> at least <strong>15 minutes</strong> prior to your slot.</li>
                      <li>Carry a valid Government-issued Photo ID (Aadhaar / Passport / Voter ID).</li>
                      <li>Bring comfortable swimwear, a towel, and dry clothes.</li>
                      <li>Avoid heavy meals 1 hour before water activities.</li>
                    </ul>
                  </div>

                  <!-- CTA Button -->
                  <div style="text-align:center; margin:28px 0;">
                    <a href="${process.env.FRONTEND_URL || 'http://localhost:5173'}/booking-confirmation/${booking.bookingNumber}" style="background:linear-gradient(135deg, #002D62 0%, #0D9488 100%); color:#ffffff; text-decoration:none; padding:14px 30px; border-radius:14px; font-weight:800; font-size:13px; display:inline-block; text-transform:uppercase; letter-spacing:0.06em; box-shadow:0 6px 18px rgba(0, 45, 98, 0.25);">
                      VIEW BOOKING VOUCHER 📄
                    </a>
                  </div>

                  <p style="font-size:12.5px; color:#64748b; line-height:1.5;">
                    Need assistance or wish to add private transfers? Reach our 24/7 Concierge Support at <a href="mailto:support@andamantrails.com" style="color:#0d9488; font-weight:700;">support@andamantrails.com</a> or Call/WhatsApp <strong style="color:#002D62;">+91 99332 00000</strong>.
                  </p>
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="background:#002D62; padding:22px; text-align:center; color:#cbd5e1; font-size:11.5px;">
                  <p style="margin:0 0 6px 0; font-weight:700; color:#ffffff;">Andaman Trails Luxury Island Platform</p>
                  <p style="margin:0; color:#94a3b8;">© 2026 Andaman Trails. All rights reserved.</p>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;

  try {
    if (process.env.SMTP_USER) {
      await transporter.sendMail({
        from: mailFrom,
        to: booking.customerEmail,
        subject: `Booking Confirmed – ${activityName} | ${booking.bookingNumber} 🏝️`,
        html,
      });
      logger.info(`Activity booking confirmation email sent to ${booking.customerEmail} for ${booking.bookingNumber}`);
    } else {
      logger.info(`[MOCK EMAIL] Customer Confirmation: ${booking.customerEmail} | Booking: ${booking.bookingNumber}`);
    }
  } catch (error) {
    logger.error(`Failed to send activity confirmation email to ${booking.customerEmail}: ${error.message}`);
  }
};

/**
 * 2. Customer Payment Failed Email
 */
export const sendActivityPaymentFailedEmail = async (booking, activity, reason = '') => {
  const mailFrom = process.env.MAIL_FROM || `"Andaman Trails" <${process.env.SMTP_USER || 'softbyvaibhav01@gmail.com'}>`;
  const activityName = activity?.name || 'Andaman Activity';

  const html = `
    <!DOCTYPE html>
    <html>
    <body style="margin:0; padding:0; background:#f8fafc; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
      <table role="presentation" width="100%" style="padding:30px 10px;">
        <tr>
          <td align="center">
            <table role="presentation" width="100%" style="max-width:600px; background:#ffffff; border-radius:18px; border:1px solid #fee2e2; overflow:hidden;">
              <tr>
                <td style="background:#ef4444; padding:30px; text-align:center; color:#ffffff;">
                  <h1 style="margin:0; font-size:22px;">❌ PAYMENT NOT COMPLETED</h1>
                  <p style="margin:6px 0 0 0; font-size:12px; font-weight:800; letter-spacing:0.15em;">BOOKING ATTEMPT: ${booking.bookingNumber}</p>
                </td>
              </tr>
              <tr>
                <td style="padding:28px;">
                  <p style="font-size:15px; color:#0f172a; margin-top:0;">Dear <strong>${booking.customerName}</strong>,</p>
                  <p style="font-size:13.5px; color:#475569; line-height:1.6;">
                    We noticed that your payment for <strong>${activityName}</strong> could not be processed successfully.
                  </p>
                  <div style="background:#fef2f2; border-left:4px solid #ef4444; padding:14px; border-radius:8px; margin:20px 0; font-size:13px; color:#991b1b;">
                    <strong>Reason / Note:</strong> ${reason || 'Transaction was cancelled or declined by your bank/UPI gateway.'}
                  </div>
                  <p style="font-size:13px; color:#475569;">
                    No amount has been permanently deducted. You can retry your reservation at any time.
                  </p>
                  <div style="text-align:center; margin-top:24px;">
                    <a href="${process.env.FRONTEND_URL || 'http://localhost:5173'}/activities/${activity?.slug || ''}" style="background:#002D62; color:#ffffff; text-decoration:none; padding:12px 26px; border-radius:12px; font-weight:800; font-size:13px; display:inline-block;">
                      RETRY BOOKING NOW 🔄
                    </a>
                  </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;

  try {
    if (process.env.SMTP_USER) {
      await transporter.sendMail({
        from: mailFrom,
        to: booking.customerEmail,
        subject: `Payment Unsuccessful for Booking ${booking.bookingNumber} – ${activityName}`,
        html,
      });
    }
  } catch (err) {
    logger.error(`Failed to send payment failed email: ${err.message}`);
  }
};

/**
 * 3. Customer Booking Cancellation Email
 */
export const sendActivityBookingCancelledEmail = async (booking, activity, reason = '', refundInfo = '') => {
  const mailFrom = process.env.MAIL_FROM || `"Andaman Trails" <${process.env.SMTP_USER || 'softbyvaibhav01@gmail.com'}>`;
  const activityName = activity?.name || 'Andaman Activity';

  const html = `
    <!DOCTYPE html>
    <html>
    <body style="margin:0; padding:0; background:#f8fafc; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
      <table role="presentation" width="100%" style="padding:30px 10px;">
        <tr>
          <td align="center">
            <table role="presentation" width="100%" style="max-width:600px; background:#ffffff; border-radius:18px; border:1px solid #e2e8f0; overflow:hidden;">
              <tr>
                <td style="background:#002D62; padding:30px; text-align:center; color:#ffffff;">
                  <h1 style="margin:0; font-size:22px; color:#f87171;">BOOKING CANCELLED</h1>
                  <p style="margin:6px 0 0 0; font-size:12px; color:#cbd5e1; font-weight:800; letter-spacing:0.12em;">REF: ${booking.bookingNumber}</p>
                </td>
              </tr>
              <tr>
                <td style="padding:28px;">
                  <p style="font-size:15px; color:#0f172a; margin-top:0;">Dear <strong>${booking.customerName}</strong>,</p>
                  <p style="font-size:13.5px; color:#475569; line-height:1.6;">
                    Your booking for <strong>${activityName}</strong> on <strong>${booking.activityDate || booking.bookingDate}</strong> has been cancelled.
                  </p>
                  <div style="background:#f8fafc; border-left:4px solid #64748b; padding:14px; border-radius:8px; margin:20px 0; font-size:13px; color:#334155;">
                    <p style="margin:4px 0;"><strong>Cancellation Reason:</strong> ${reason || 'Requested by customer / weather advisory'}</p>
                    <p style="margin:4px 0;"><strong>Refund Status:</strong> ${refundInfo || 'Processed as per policy (5-7 business days if applicable)'}</p>
                  </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;

  try {
    if (process.env.SMTP_USER) {
      await transporter.sendMail({
        from: mailFrom,
        to: booking.customerEmail,
        subject: `Booking Cancelled – ${activityName} | ${booking.bookingNumber}`,
        html,
      });
    }
  } catch (err) {
    logger.error(`Failed to send cancellation email: ${err.message}`);
  }
};

/**
 * 4. Customer Booking Rescheduled Email
 */
export const sendActivityBookingRescheduledEmail = async (booking, activity, oldSchedule, newSchedule) => {
  const mailFrom = process.env.MAIL_FROM || `"Andaman Trails" <${process.env.SMTP_USER || 'softbyvaibhav01@gmail.com'}>`;
  const activityName = activity?.name || 'Andaman Activity';

  const html = `
    <!DOCTYPE html>
    <html>
    <body style="margin:0; padding:0; background:#f8fafc; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
      <table role="presentation" width="100%" style="padding:30px 10px;">
        <tr>
          <td align="center">
            <table role="presentation" width="100%" style="max-width:600px; background:#ffffff; border-radius:18px; border:1px solid #ccfbf1; overflow:hidden;">
              <tr>
                <td style="background:linear-gradient(135deg, #002D62, #0D9488); padding:30px; text-align:center; color:#ffffff;">
                  <h1 style="margin:0; font-size:22px;">BOOKING RESCHEDULED 🗓️</h1>
                  <p style="margin:6px 0 0 0; font-size:12px; color:#99f6e4; font-weight:800; letter-spacing:0.12em;">REF: ${booking.bookingNumber}</p>
                </td>
              </tr>
              <tr>
                <td style="padding:28px;">
                  <p style="font-size:15px; color:#0f172a; margin-top:0;">Dear <strong>${booking.customerName}</strong>,</p>
                  <p style="font-size:13.5px; color:#475569; line-height:1.6;">
                    Your activity booking for <strong>${activityName}</strong> has been successfully rescheduled.
                  </p>
                  <table width="100%" style="margin:20px 0; font-size:13px;">
                    <tr>
                      <td style="background:#fee2e2; padding:12px; border-radius:8px; width:48%; color:#991b1b;">
                        <strong>Previous Slot:</strong><br/>
                        ${oldSchedule.date} (${oldSchedule.slot})
                      </td>
                      <td style="width:4%;"></td>
                      <td style="background:#ccfbf1; padding:12px; border-radius:8px; width:48%; color:#0f766e;">
                        <strong>Updated Slot:</strong><br/>
                        ${newSchedule.date} (${newSchedule.slot})
                      </td>
                    </tr>
                  </table>
                  <div style="text-align:center; margin-top:24px;">
                    <a href="${process.env.FRONTEND_URL || 'http://localhost:5173'}/booking-confirmation/${booking.bookingNumber}" style="background:#002D62; color:#ffffff; text-decoration:none; padding:12px 26px; border-radius:12px; font-weight:800; font-size:13px; display:inline-block;">
                      VIEW UPDATED VOUCHER 📄
                    </a>
                  </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;

  try {
    if (process.env.SMTP_USER) {
      await transporter.sendMail({
        from: mailFrom,
        to: booking.customerEmail,
        subject: `Booking Rescheduled – ${activityName} | ${booking.bookingNumber}`,
        html,
      });
    }
  } catch (err) {
    logger.error(`Failed to send reschedule email: ${err.message}`);
  }
};

/**
 * 5. Customer 24-Hour Activity Reminder Email
 */
export const sendActivity24HourReminderEmail = async (booking, activity, location = null, slot = null) => {
  const mailFrom = process.env.MAIL_FROM || `"Andaman Trails" <${process.env.SMTP_USER || 'softbyvaibhav01@gmail.com'}>`;
  const activityName = activity?.name || 'Andaman Activity';
  const locName = location?.locationName || activity?.location || 'Andaman Islands';
  const slotTime = slot ? slot.startTime : (booking.slotStartTime || 'Morning');

  const html = `
    <!DOCTYPE html>
    <html>
    <body style="margin:0; padding:0; background:#f8fafc; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
      <table role="presentation" width="100%" style="padding:30px 10px;">
        <tr>
          <td align="center">
            <table role="presentation" width="100%" style="max-width:600px; background:#ffffff; border-radius:18px; border:1px solid #e2e8f0; overflow:hidden;">
              <tr>
                <td style="background:linear-gradient(135deg, #002D62, #0D9488); padding:30px; text-align:center; color:#ffffff;">
                  <h1 style="margin:0; font-size:22px;">REMINDER: YOUR ACTIVITY IS TOMORROW! 🏝️</h1>
                  <p style="margin:6px 0 0 0; font-size:12px; color:#99f6e4; font-weight:800;">BOOKING: ${booking.bookingNumber}</p>
                </td>
              </tr>
              <tr>
                <td style="padding:28px;">
                  <p style="font-size:15px; color:#0f172a; margin-top:0;">Dear <strong>${booking.customerName}</strong>,</p>
                  <p style="font-size:13.5px; color:#475569; line-height:1.6;">
                    Get ready for an extraordinary adventure! Your <strong>${activityName}</strong> session is scheduled for tomorrow at <strong>${slotTime}</strong> at <strong>${locName}</strong>.
                  </p>
                  <div style="background:#f0fdfa; border:1px solid #ccfbf1; padding:16px; border-radius:12px; margin:20px 0; font-size:13px;">
                    <p style="margin:4px 0;"><strong>Meeting Point:</strong> ${location?.meetingPoint || 'Activity Desk'}</p>
                    <p style="margin:4px 0;"><strong>Reporting Time:</strong> 15 minutes before ${slotTime}</p>
                    <p style="margin:4px 0;"><strong>Carry:</strong> Govt Photo ID & Swimwear</p>
                  </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;

  try {
    if (process.env.SMTP_USER) {
      await transporter.sendMail({
        from: mailFrom,
        to: booking.customerEmail,
        subject: `Reminder: ${activityName} is tomorrow at ${slotTime}! 🌊`,
        html,
      });
    }
  } catch (err) {
    logger.error(`Failed to send 24h reminder email: ${err.message}`);
  }
};

/**
 * 6. Admin New Booking Notification Email
 */
export const sendAdminActivityNewBookingEmail = async (booking, activity, location = null, slot = null) => {
  const mailFrom = process.env.MAIL_FROM || `"Andaman Trails" <${process.env.SMTP_USER || 'softbyvaibhav01@gmail.com'}>`;
  const adminEmail = await getAdminEmail();
  const activityName = activity?.name || 'Andaman Activity';

  const html = `
    <!DOCTYPE html>
    <html>
    <body style="margin:0; padding:0; background:#f8fafc; font-family:'Segoe UI', Arial, sans-serif;">
      <table role="presentation" width="100%" style="padding:30px 10px;">
        <tr>
          <td align="center">
            <table role="presentation" width="100%" style="max-width:600px; background:#ffffff; border-radius:14px; border:1px solid #cbd5e1; overflow:hidden;">
              <tr>
                <td style="background:#002D62; padding:24px; text-align:center; color:#ffffff;">
                  <h2 style="margin:0; font-size:20px; color:#2dd4bf;">🔔 NEW ACTIVITY BOOKING RECEIVED</h2>
                  <p style="margin:4px 0 0; font-size:12px; color:#cbd5e1;">Booking Ref: <strong>${booking.bookingNumber}</strong></p>
                </td>
              </tr>
              <tr>
                <td style="padding:24px;">
                  <table width="100%" style="font-size:13px; color:#334155;">
                    <tr><td style="padding:4px 0;"><strong>Customer Name:</strong></td><td>${booking.customerName}</td></tr>
                    <tr><td style="padding:4px 0;"><strong>Customer Email:</strong></td><td><a href="mailto:${booking.customerEmail}">${booking.customerEmail}</a></td></tr>
                    <tr><td style="padding:4px 0;"><strong>Customer Phone:</strong></td><td>${booking.customerPhone}</td></tr>
                    <tr><td style="padding:4px 0;"><strong>Activity:</strong></td><td style="font-weight:bold; color:#002D62;">${activityName}</td></tr>
                    <tr><td style="padding:4px 0;"><strong>Location:</strong></td><td>${location?.locationName || 'Standard'}</td></tr>
                    <tr><td style="padding:4px 0;"><strong>Date & Time:</strong></td><td>${booking.activityDate || booking.bookingDate} (${slot?.startTime || booking.slotStartTime})</td></tr>
                    <tr><td style="padding:4px 0;"><strong>Guests:</strong></td><td>${booking.adultCount} Adult(s), ${booking.childCount} Child(ren)</td></tr>
                    <tr><td style="padding:4px 0;"><strong>Total Revenue:</strong></td><td style="font-weight:bold; color:#0d9488; font-size:15px;">₹${Number(booking.totalAmount).toLocaleString()}</td></tr>
                    <tr><td style="padding:4px 0;"><strong>Payment Status:</strong></td><td style="color:#0d9488; font-weight:bold;">${booking.paymentStatus} (${booking.razorpayPaymentId || 'Razorpay'})</td></tr>
                  </table>
                  <div style="text-align:center; margin-top:24px;">
                    <a href="${process.env.FRONTEND_URL || 'http://localhost:5173'}/admin/bookings" style="background:#002D62; color:#ffffff; padding:10px 22px; text-decoration:none; border-radius:10px; font-weight:bold; font-size:12px; display:inline-block;">
                      VIEW IN ADMIN PANEL
                    </a>
                  </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;

  try {
    if (process.env.SMTP_USER) {
      await transporter.sendMail({
        from: mailFrom,
        to: adminEmail,
        subject: `New Activity Booking: ${activityName} – ₹${Number(booking.totalAmount).toLocaleString()} (${booking.bookingNumber})`,
        html,
      });
      logger.info(`Admin booking alert sent to ${adminEmail} for ${booking.bookingNumber}`);
    }
  } catch (err) {
    logger.error(`Failed to send admin booking alert: ${err.message}`);
  }
};

/**
 * 7. Admin Low Slot Availability Alert
 */
export const sendAdminLowSlotAvailabilityEmail = async (slot, activity, location = null, remaining = 0) => {
  const mailFrom = process.env.MAIL_FROM || `"Andaman Trails" <${process.env.SMTP_USER || 'softbyvaibhav01@gmail.com'}>`;
  const adminEmail = await getAdminEmail();
  const activityName = activity?.name || 'Activity';

  const html = `
    <!DOCTYPE html>
    <html>
    <body style="margin:0; padding:0; background:#f8fafc; font-family:'Segoe UI', Arial, sans-serif;">
      <table role="presentation" width="100%" style="padding:30px 10px;">
        <tr>
          <td align="center">
            <table role="presentation" width="100%" style="max-width:550px; background:#ffffff; border-radius:14px; border:1px solid #fef08a; overflow:hidden;">
              <tr>
                <td style="background:#ca8a04; padding:20px; text-align:center; color:#ffffff;">
                  <h3 style="margin:0; font-size:18px;">⚠️ LOW SLOT CAPACITY ALERT</h3>
                </td>
              </tr>
              <tr>
                <td style="padding:22px; font-size:13px; color:#334155;">
                  <p style="margin-top:0;">The following activity slot has reached low availability:</p>
                  <p><strong>Activity:</strong> ${activityName}</p>
                  <p><strong>Location:</strong> ${location?.locationName || 'General'}</p>
                  <p><strong>Date:</strong> ${slot.date}</p>
                  <p><strong>Time Slot:</strong> ${slot.startTime}</p>
                  <p style="font-size:15px; color:#ca8a04; font-weight:bold;">Remaining Seats: ${remaining} / ${slot.capacity}</p>
                  <div style="margin-top:16px;">
                    <a href="${process.env.FRONTEND_URL || 'http://localhost:5173'}/admin/activity-slots" style="background:#002D62; color:#ffffff; padding:8px 18px; text-decoration:none; border-radius:8px; font-size:12px; font-weight:bold; display:inline-block;">
                      MANAGE SLOTS
                    </a>
                  </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;

  try {
    if (process.env.SMTP_USER) {
      await transporter.sendMail({
        from: mailFrom,
        to: adminEmail,
        subject: `Low Availability Alert: ${activityName} on ${slot.date} (${remaining} seats left)`,
        html,
      });
    }
  } catch (err) {
    logger.error(`Failed to send low availability alert: ${err.message}`);
  }
};

