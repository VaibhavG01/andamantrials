// server/src/controllers/settingController.js
import { Setting } from '../models/index.js';
import { successResponse, errorResponse } from '../utils/apiResponse.js';
import { asyncHandler } from '../utils/asyncHandler.js';

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
  maintenanceMode: false,

  // Impact & Trust Statistics
  statTravelersValue: '50,000+',
  statTravelersLabel: 'HAPPY TRAVELERS',
  statTravelersSub: 'Hosted across 40+ countries',

  statDestinationsValue: '6+',
  statDestinationsLabel: 'ISLAND DESTINATIONS',
  statDestinationsSub: 'Port Blair to Diglipur',

  statTrailsValue: '7+',
  statTrailsLabel: 'CURATED TRAILS',
  statTrailsSub: 'Scuba, ferries & resorts',

  statYearsValue: '12+',
  statYearsLabel: 'YEARS OF EXCELLENCE',
  statYearsSub: 'Native island leadership',
};

// GET /api/v1/settings or /api/v1/admin/settings
export const getSettings = asyncHandler(async (req, res) => {
  const [setting] = await Setting.findOrCreate({
    where: { key: 'site_settings' },
    defaults: {
      key: 'site_settings',
      description: 'Global site identity, contact, social, footer and statistics settings',
      value: DEFAULT_SITE_SETTINGS,
    },
  });

  const merged = {
    ...DEFAULT_SITE_SETTINGS,
    ...(setting.value || {}),
  };

  return successResponse(res, 'Settings fetched successfully', merged, 200);
});

// PUT /api/v1/settings or /api/v1/admin/settings
export const updateSettings = asyncHandler(async (req, res) => {
  const [setting] = await Setting.findOrCreate({
    where: { key: 'site_settings' },
    defaults: {
      key: 'site_settings',
      description: 'Global site identity, contact, social, footer and statistics settings',
      value: DEFAULT_SITE_SETTINGS,
    },
  });

  const currentVal = setting.value || DEFAULT_SITE_SETTINGS;
  const newVal = {
    ...currentVal,
    ...req.body,
  };

  // Ensure clean whatsappRaw numbers if whatsapp updated
  if (newVal.whatsapp) {
    newVal.whatsappRaw = newVal.whatsapp.replace(/\D/g, '');
  }

  setting.value = newVal;
  await setting.save();

  return successResponse(res, 'Settings updated successfully', setting.value, 200);
});
