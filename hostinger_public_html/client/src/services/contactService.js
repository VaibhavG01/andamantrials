import { apiClient } from '../api/apiClient';

export async function submitContactInquiry(inquiryData) {
  const isGeneral = inquiryData.inquiryType === 'General Inquiry' || !inquiryData.travelDate;

  if (isGeneral) {
    // Send to general contact messages endpoint
    const payload = {
      name: inquiryData.fullName,
      email: inquiryData.email,
      phone: inquiryData.phone,
      subject: inquiryData.inquiryType || 'General Inquiry',
      message: inquiryData.message,
    };
    const response = await apiClient('/contact', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
    return response;
  } else {
    // Send to trip planning inquiries endpoint
    const detailedMessage = `
Travelers: ${inquiryData.travelers || 'N/A'}
Duration: ${inquiryData.duration || 'N/A'}
Interests: ${Array.isArray(inquiryData.interests) ? inquiryData.interests.join(', ') : 'None'}
Custom Trip Options Requested: ${inquiryData.customTrip ? 'Yes' : 'No'}

User Message:
${inquiryData.message || 'No additional message provided.'}
    `.trim();

    const payload = {
      name: inquiryData.fullName,
      email: inquiryData.email,
      phone: inquiryData.phone,
      type: (inquiryData.inquiryType || 'PLAN_A_TRIP').toUpperCase().replace(/\s+/g, '_'),
      message: detailedMessage,
      preferredDate: inquiryData.travelDate,
    };

    const response = await apiClient('/inquiries', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
    return response;
  }
}
