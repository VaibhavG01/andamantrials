// client/src/api/inquiryService.js
import { apiClient } from './apiClient';

export const inquiryService = {
  createInquiry: (payload) =>
    apiClient('/inquiries', {
      method: 'POST',
      body: JSON.stringify(payload),
    }),
  getInquiries: (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return apiClient(`/inquiries?${query}`);
  },
  updateInquiryStatus: (id, status) =>
    apiClient(`/inquiries/admin/${id}/status`, {
      method: 'PUT',
      body: JSON.stringify({ status }),
    }),
};

export default inquiryService;
