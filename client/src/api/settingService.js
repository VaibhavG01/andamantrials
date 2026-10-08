// client/src/api/settingService.js
import { apiClient } from './apiClient';

export const DEFAULT_SITE_SETTINGS = {
  siteName: 'ANDAMAN TRAILS',
  siteTagline: 'MEMORIES THAT LAST A LIFETIME',
  siteDescription: 'The premier digital travel platform for the Andaman & Nicobar Archipelago. Crafting unforgettable tropical holidays, ferry bookings, water sports, and luxury resort stays.',
  headOfficeLabel: 'Port Blair HQ',
  headOfficeAddress: 'Aberdeen Bazaar, Opposite Jetty Gate, Port Blair - 744101',
  sitePhone: '+91 91378 35433',
  helplineLabel: '24/7 Helpline & WhatsApp',
  siteEmail: 'info@andamantrails.com',
  inquiryEmailLabel: 'Official Inquiries',
  supportHours: 'SUPPORT DESK ONLINE (9 AM - 9 PM)',
  whatsapp: '+91 91378 35433',
  whatsappRaw: '919137835433',
  instagram: 'https://instagram.com/andamantrails',
  facebook: 'https://facebook.com/andamantrails',
  youtube: 'https://youtube.com/andamantrails',
  metaTitle: 'Andaman Trails — Ocean Ferries, Luxury Resorts & Cruises',
  metaDesc: 'Book high-speed catamaran ferries, beachfront resorts, scuba diving, and luxury island charters in Andaman.',
};

export const settingService = {
  getSettings: async () => {
    try {
      const res = await apiClient('/settings');
      if (res && res.data) {
        return {
          ...DEFAULT_SITE_SETTINGS,
          ...res.data,
        };
      }
      return DEFAULT_SITE_SETTINGS;
    } catch {
      return DEFAULT_SITE_SETTINGS;
    }
  },
};
