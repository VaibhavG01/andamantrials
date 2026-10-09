// src/data/navigation.js
// ─────────────────────────────────────────────────────────────────────────────
// Master Navigation Data for Andaman Trails Travel-Tech Navbar & Mega Menus (Clean URLs).

export const DASHBOARD_NAV_ITEMS = [
  { id: 'destinations', label: 'Destinations', href: '/destinations' },
  { id: 'packages', label: 'Packages', href: '/packages' },
  { id: 'activities', label: 'Activities', href: '/activities' },
  { id: 'ferries', label: 'Ferries & Cruises', href: '/ferries' },
  { id: 'stays', label: 'Stays', href: '/stays' },
  { id: 'gallery', label: 'Gallery', href: '/gallery' },
  { id: 'blog', label: 'Blog', href: '/blog' },
  { id: 'about', label: 'About Us', href: '/about' },
  { id: 'contact', label: 'Contact', href: '/contact' },
];

export const NAV_CATEGORIES = [
  {
    id: 'packages',
    label: 'Packages',
    href: '/packages',
    featured: {
      title: 'Havelock & Neil Romantic Honeymoon',
      subtitle: '6 Days / 5 Nights All-Inclusive',
      description: 'Port Blair, Havelock & Neil Island inter-island ferry passes and beach resort stays.',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
      badge: 'POPULAR',
      linkText: 'View all packages →',
      linkHref: '/packages',
    },
    items: [
      { name: 'Honeymoon Special', subtitle: '6N / 5D • Havelock & Neil', badge: 'BEST VALUE', desc: '₹45,000 / Couple', href: '/package-details?id=honeymoon-special' },
      { name: 'Family Discovery', subtitle: '5N / 4D • Port Blair & Havelock', badge: 'POPULAR', desc: '₹32,000 / Person', href: '/package-details?id=family-expedition' },
      { name: 'Scuba & Reef Explorer', subtitle: '7N / 6D • Complete Trail', badge: 'GRAND', desc: '₹58,000 / Person', href: '/package-details?id=scuba-adventure' },
    ],
  },
  {
    id: 'destinations',
    label: 'Destinations',
    href: '/destinations',
    featured: {
      title: 'Swaraj Dweep (Havelock Island)',
      subtitle: 'Asia\'s Best Beach Paradise',
      description: 'Radhanagar Beach, crystal turquoise lagoons, and bioluminescent night kayaking.',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      badge: 'TOP RATED',
      linkText: 'Explore all destinations →',
      linkHref: '/destinations',
    },
    items: [
      { name: 'Swaraj Dweep (Havelock)', subtitle: 'South Andaman • Diving Capital', badge: 'POPULAR', desc: 'Radhanagar & Scuba', href: '/destination-details?id=havelock' },
      { name: 'Shaheed Dweep (Neil)', subtitle: 'South Andaman • Serene Paradise', badge: 'SERENE', desc: 'Natural Rock Bridge', href: '/destination-details?id=neil' },
      { name: 'Port Blair', subtitle: 'South Andaman • Capital Gateway', badge: 'CAPITAL', desc: 'Cellular Jail & Heritage', href: '/destination-details?id=port-blair' },
      { name: 'Baratang Island', subtitle: 'Middle Andaman • Caves & Mangroves', badge: 'ADVENTURE', desc: 'Mud Volcano & Caves', href: '/destination-details?id=baratang' },
    ],
  },
  {
    id: 'activities',
    label: 'Activities',
    href: '/activities',
    featured: {
      title: 'Scuba Diving at Havelock',
      subtitle: 'PADI Certified Dive Centers',
      description: 'Explore coral gardens surrounding Havelock Island.',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
      badge: 'MUST TRY',
      linkText: 'Explore activities →',
      linkHref: '/activities',
    },
    items: [
      { name: 'PADI Scuba Diving', subtitle: 'Havelock Reef Dives', badge: 'POPULAR', desc: 'From ₹3,500', href: '/activity-details?id=scuba-diving' },
      { name: 'Underwater Sea Walk', subtitle: 'Ocean Bed Walk', badge: 'EASY', desc: 'From ₹4,200', href: '/activity-details?id=sea-walk' },
      { name: 'Lagoon Snorkeling', subtitle: 'Coral Reef Snorkel', badge: 'FAMILY', desc: 'From ₹1,200', href: '/activity-details?id=snorkeling' },
      { name: 'Night Kayaking', subtitle: 'Bioluminescent Mangrove', badge: 'MAGICAL', desc: 'From ₹2,500', href: '/activity-details?id=kayaking' },
    ],
  },
  {
    id: 'ferries',
    label: 'Ferries & Cruises',
    href: '/ferries',
    featured: {
      title: 'High-Speed Catamarans & Sunset Cruises',
      subtitle: 'Makruzz • Nautika • Green Ocean • Sunset Sails',
      description: 'Book confirmed seats on inter-island catamarans and luxury harbor sunset sails with instant PNR confirmation.',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
      badge: 'INSTANT SLOTS',
      linkText: 'Book Ferries & Cruises →',
      linkHref: '/ferries',
    },
    items: [
      { name: 'Port Blair ➔ Havelock', subtitle: '90 Min • High-Speed Catamaran', badge: 'POPULAR', desc: 'From ₹1,650', href: '/ferries' },
      { name: 'Havelock ➔ Neil Island', subtitle: '45 Min • Island Hopping', badge: 'SCENIC', desc: 'From ₹1,450', href: '/ferries' },
      { name: 'Andaman Sunset Sail', subtitle: '2 Hours • Golden Hour Cruise', badge: 'SUNSET', desc: 'From ₹2,500', href: '/cruises/andaman-sunset-sail' },
      { name: 'Private Yacht Charter', subtitle: 'Custom Island Excursion', badge: 'EXCLUSIVE', desc: 'From ₹15,000', href: '/cruises/private-ocean-charter' },
    ],
  },
];

export const SUGGESTED_SEARCHES = [
  'Havelock Island',
  'Neil Island',
  'Scuba Diving',
  'Honeymoon Packages',
  'Nautika Ferry',
  'Makruzz Gold',
  'Sunset Cruise',
  'Radhanagar Beach',
];

export const CONTACT_INFO = {
  phone: '+91 91378 35433',
  whatsapp: '+91 91378 35433',
  email: 'concierge@andamantrails.com',
};
