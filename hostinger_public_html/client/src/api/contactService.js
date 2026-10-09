import { apiClient } from './apiClient';

export const contactService = {
  sendContactMessage: (payload) => apiClient('/contact', { method: 'POST', body: JSON.stringify(payload) }),
  sendInquiry: (payload) => apiClient('/inquiries', { method: 'POST', body: JSON.stringify(payload) }),
};
