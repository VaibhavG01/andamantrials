// src/data/dashboard/dashboardData.js
// ─────────────────────────────────────────────────────────────────────────────
// Master Dashboard Data for Andaman Trails Traveler Command Center

export const USER_PROFILE = {
  id: 'usr_88291',
  name: 'Vaibhav',
  fullName: 'Vaibhav Sharma',
  email: 'vaibhav@example.com',
  phone: '+91 98765 43210',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
  memberSince: 'Jan 2025',
  membershipTier: 'Platinum Explorer',
  tripsCompleted: 3,
  upcomingTrips: 1,
  rewardPoints: 1250,
  wishlistCount: 8,
};

export const QUICK_STATS = [
  { id: 'trips', label: 'MY TRIPS', value: '03', icon: 'Compass', trend: '+1 this year', color: '#F06543' },
  { id: 'upcoming', label: 'UPCOMING', value: '01', icon: 'Calendar', trend: 'Starts in 7 days', color: '#FF6B4A' },
  { id: 'rewards', label: 'REWARDS', value: '1,250', icon: 'Award', trend: 'Tier: Platinum', color: '#D97706' },
];

export const TRIP_PREPARATION_ITEMS = [
  { id: 'c1', label: 'Confirm hotel booking vouchers', completed: true, category: 'Stays' },
  { id: 'c2', label: 'Download ferry tickets (Makruzz / Nautika)', completed: true, category: 'Ferry' },
  { id: 'c3', label: 'Complete traveler details & ID proof upload', completed: true, category: 'Profile' },
  { id: 'c4', label: 'Check travel insurance documents', completed: true, category: 'Safety' },
  { id: 'c5', label: 'Pack essentials (Coral-safe sunscreen, beachwear)', completed: false, category: 'Packing' },
  { id: 'c6', label: 'Check weather & water visibility forecast', completed: false, category: 'Weather' },
  { id: 'c7', label: 'Review Day-wise itinerary & activity slots', completed: false, category: 'Itinerary' },
];
