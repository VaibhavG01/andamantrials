// src/data/dashboard/itineraryData.js
// ─────────────────────────────────────────────────────────────────────────────
// Day-wise Itinerary Timeline Data

export const ITINERARY_DAYS = [
  {
    day: 'DAY 01',
    date: '13 Aug 2026',
    title: 'ARRIVE AT PORT BLAIR & CELLULAR JAIL',
    location: 'Port Blair',
    status: 'UPCOMING',
    events: [
      { time: '10:30 AM', title: 'Arrival at Veer Savarkar Airport', desc: 'Private AC Cab transfer to Hotel Sea Shell.', type: 'Transfer', icon: 'Plane' },
      { time: '02:00 PM', title: 'Cellular Jail & Freedom Memorial Tour', desc: 'Guided tour of historical colonial prison.', type: 'Sightseeing', icon: 'Compass' },
      { time: '06:30 PM', title: 'Cellular Jail Light & Sound Show', desc: 'Son-et-Lumière show narrated in Hindi & English.', type: 'Show', icon: 'Sparkles' },
    ],
    hotel: 'Sea Shell Port Blair',
  },
  {
    day: 'DAY 02',
    date: '14 Aug 2026',
    title: 'HIGH-SPEED FERRY TO HAVELOCK ISLAND',
    location: 'Havelock Island',
    status: 'UPCOMING',
    events: [
      { time: '08:30 AM', title: 'Ferry — Port Blair → Havelock', desc: 'Board Nautika Cruise at Phoenix Bay Jetty (Seats 14A/B).', type: 'Ferry', icon: 'Ship' },
      { time: '11:00 AM', title: 'Hotel Check-in at Taj Exotica', desc: 'Welcome drink & room orientation.', type: 'Hotel', icon: 'Home' },
      { time: '03:30 PM', title: 'Radhanagar Beach Sunset Experience', desc: 'Relax at Asia’s top beach & watch crimson sunset.', type: 'Beach', icon: 'Sun' },
    ],
    hotel: 'Taj Exotica Resort & Spa',
  },
  {
    day: 'DAY 03',
    date: '15 Aug 2026',
    title: 'ELEPHANT BEACH WATER SPORTS & DIVING',
    location: 'Havelock Island',
    status: 'UPCOMING',
    events: [
      { time: '07:30 AM', title: 'Speedboat Transfer to Elephant Beach', desc: 'Shallow coral reef zone.', type: 'Transfer', icon: 'Ship' },
      { time: '09:00 AM', title: 'Discover Scuba Diving Session', desc: 'PADI Instructor guided dive with underwater photos.', type: 'Activity', icon: 'Waves' },
      { time: '04:00 PM', title: 'Kalapathar Beach Drive & Evening Snacks', desc: 'Black rock coastline exploration.', type: 'Sightseeing', icon: 'Camera' },
    ],
    hotel: 'Taj Exotica Resort & Spa',
  },
  {
    day: 'DAY 04',
    date: '16 Aug 2026',
    title: 'FERRY TO NEIL ISLAND & NATURAL ROCK BRIDGE',
    location: 'Neil Island',
    status: 'UPCOMING',
    events: [
      { time: '10:00 AM', title: 'Ferry — Havelock → Neil Island', desc: 'Green Ocean 1.5-hour sailing.', type: 'Ferry', icon: 'Ship' },
      { time: '01:30 PM', title: 'Natural Rock Bridge Walk', desc: 'Geological coral formation at low tide.', type: 'Sightseeing', icon: 'Compass' },
      { time: '05:00 PM', title: 'Laxmanpur Beach Sunset', desc: 'Famous for sunset views & seashell shores.', type: 'Beach', icon: 'Sun' },
    ],
    hotel: 'Symphony Summer Sands Resort',
  },
  {
    day: 'DAY 05',
    date: '17 Aug 2026',
    title: 'NEIL SNORKELING & RETURN TO PORT BLAIR',
    location: 'Neil / Port Blair',
    status: 'UPCOMING',
    events: [
      { time: '08:00 AM', title: 'Bharatpur Beach Glass Bottom Boat', desc: 'Observe living coral reefs & marine life.', type: 'Activity', icon: 'Waves' },
      { time: '03:00 PM', title: 'Return Ferry — Neil → Port Blair', desc: 'Makruzz Speed Cruise to Phoenix Bay.', type: 'Ferry', icon: 'Ship' },
    ],
    hotel: 'Fortune Resort Bay Island',
  },
  {
    day: 'DAY 06',
    date: '18 Aug 2026',
    title: 'ROSS ISLAND & CHIDIYA TAPU TREK',
    location: 'Port Blair',
    status: 'UPCOMING',
    events: [
      { time: '09:30 AM', title: 'Speedboat to Ross Island (Netaji Subhash)', desc: 'Deer roaming colonial ruins.', type: 'Sightseeing', icon: 'Camera' },
      { time: '03:30 PM', title: 'Chidiya Tapu Bird Watching & Sunset Point', desc: 'Munda Pahar beach trek.', type: 'Trek', icon: 'Compass' },
    ],
    hotel: 'Fortune Resort Bay Island',
  },
  {
    day: 'DAY 07',
    date: '19 Aug 2026',
    title: 'DEPARTURE WITH UNFORGETTABLE MEMORIES',
    location: 'Port Blair Airport',
    status: 'UPCOMING',
    events: [
      { time: '08:30 AM', title: 'Souvenir Shopping at Aberdeen Bazaar', desc: 'Pick up pearls & shell handicrafts.', type: 'Shopping', icon: 'ShoppingBag' },
      { time: '11:30 AM', title: 'Airport Departure Transfer', desc: 'Cab drop at Veer Savarkar International Airport.', type: 'Transfer', icon: 'Plane' },
    ],
    hotel: 'Checkout',
  },
];

export const FERRY_LIVE_STATUS = {
  route: 'PORT BLAIR → HAVELOCK',
  operator: 'Nautika Cruise (N-301)',
  date: '13 Aug 2026',
  departure: '09:00 AM',
  arrival: '10:30 AM',
  status: 'ON TIME',
  gate: 'Jetty Gate 2',
  vessel: 'Air-Conditioned Catamaran',
  seatsAvailable: 32,
  seatAssigned: 'Royal Class 14A, 14B',
  weatherOnRoute: 'Calm Seas • Clear Sky',
};
