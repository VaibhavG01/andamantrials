// src/data/dashboard/tripData.js
// ─────────────────────────────────────────────────────────────────────────────
// Upcoming and Past Trips Data for Traveler Command Center

export const UPCOMING_TRIP = {
  id: 'trip_andaman_2026',
  title: 'ANDAMAN ESCAPE',
  subtitle: '6 Nights / 7 Days Tropical Package',
  status: 'CONFIRMED',
  dates: '13 Aug — 19 Aug 2026',
  startDate: '2026-08-13',
  endDate: '2026-08-19',
  route: ['Port Blair', 'Havelock Island', 'Neil Island', 'Port Blair'],
  progress: 75,
  coverImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85',
  bookingId: 'AT-2026-00482',
  amountPaid: '₹18,999',
  hotelName: 'Taj Exotica Resort & Symphony Palms',
  guests: '2 Travelers (Couple)',
  travelNotes: 'Special arrangement for candle-light dinner on Havelock Beach included.',
};

export const PAST_TRIPS = [
  {
    id: 'trip_past_01',
    title: 'HAVELOCK SCUBA SPECIAL',
    dates: '12 Nov — 16 Nov 2024',
    route: ['Port Blair', 'Havelock Island'],
    status: 'COMPLETED',
    coverImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
    amountPaid: '₹14,500',
    ratingGiven: 5,
  },
  {
    id: 'trip_past_02',
    title: 'NEIL & ROSS HERITAGE EXPLORER',
    dates: '05 Mar — 09 Mar 2024',
    route: ['Port Blair', 'Neil Island', 'Ross Island'],
    status: 'COMPLETED',
    coverImage: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800&q=80',
    amountPaid: '₹12,200',
    ratingGiven: 5,
  },
];
