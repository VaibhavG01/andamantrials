// src/data/dashboard/notificationData.js
// ─────────────────────────────────────────────────────────────────────────────
// Notifications Data for Traveler Command Center

export const NOTIFICATIONS = [
  {
    id: 'n1',
    title: 'Ferry Booking Confirmed',
    message: 'Your Nautika Ferry seats (14A, 14B) Port Blair → Havelock for 13 Aug are confirmed.',
    time: '10 mins ago',
    read: false,
    type: 'ferry',
    icon: 'Ship',
  },
  {
    id: 'n2',
    title: 'Hotel Voucher Ready',
    message: 'Taj Exotica Resort Havelock confirmation voucher is now available for download.',
    time: '2 hours ago',
    read: false,
    type: 'document',
    icon: 'FileText',
  },
  {
    id: 'n3',
    title: 'Trip Countdown Alert',
    message: 'Your Andaman Escape trip starts in exactly 7 days! Review your packing checklist.',
    time: 'Yesterday',
    read: true,
    type: 'trip',
    icon: 'Calendar',
  },
  {
    id: 'n4',
    title: 'New Experience Recommended',
    message: 'Bioluminescent Kayaking slots opened for your dates at Havelock Creek.',
    time: '2 days ago',
    read: true,
    type: 'experience',
    icon: 'Sparkles',
  },
];
