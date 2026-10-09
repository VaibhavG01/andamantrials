// server/src/database/addPackages.js
import { connectDatabase } from '../config/database.js';
import { Package } from '../models/index.js';
import { logger } from '../utils/logger.js';

const packagesData = [
  {
    slug: 'andaman-escape',
    name: 'Andaman Escape',
    category: 'ALL',
    duration: '5 Nights / 6 Days',
    destinations: 'Port Blair • Havelock • Neil Island',
    bestFor: 'Couples & First-time Visitors',
    description: 'The quintessential Andaman experience. Discover Radhanagar Beach, romantic sunset cruises, glass bottom boats, and historic Cellular Jail.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85',
    price: 24999,
    originalPrice: 29999,
    rating: 4.9,
    reviewsCount: 142,
    tags: ['BESTSELLER', 'BEACHES', 'FERRY'],
    featured: true,
    hotelCategory: '4-Star Beach Resort',
    mealPlan: 'Breakfast & Dinner',
    transfers: 'Private AC Cab & Catamaran',
    activities: 'Snorkeling & Sunset Cruise',
    highlights: [
      'Airport & Jetty Transfers',
      'High-speed Makruzz Catamaran',
      'Radhanagar & Elephant Beach',
      'Daily Buffet Breakfast',
      'Cellular Jail Light & Sound',
      '24/7 Tour Concierge Support'
    ],
    itinerary: [
      { day: 1, title: 'Arrival Port Blair & Cellular Jail Light Show' },
      { day: 2, title: 'High-speed Catamaran to Havelock Island' },
      { day: 3, title: 'Elephant Beach Snorkeling & Radhanagar Sunset' },
      { day: 4, title: 'Cruise to Neil Island & Natural Rock Bridge' },
      { day: 5, title: 'Laxmanpur Beach & Return to Port Blair' },
      { day: 6, title: 'Souvenir Shopping & Airport Departure' }
    ]
  },
  {
    slug: 'island-romance',
    name: 'Island Romance',
    category: 'HONEYMOON',
    duration: '4 Nights / 5 Days',
    destinations: 'Port Blair • Havelock • Neil',
    bestFor: 'Couples / Honeymooners',
    description: 'A romantic island getaway crafted for couples. Private beachfront candlelit dinners, luxury pool villas, and romantic sunset cruises.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85',
    price: 29999,
    originalPrice: 34999,
    rating: 5.0,
    reviewsCount: 98,
    tags: ['HONEYMOON', 'ROMANCE', 'LUXURY'],
    featured: false,
    hotelCategory: '5-Star Luxury Resort',
    mealPlan: 'Breakfast & Candlelight Dinner',
    transfers: 'Private VIP Luxury Sedan',
    activities: 'Private Couples Scuba & Cruise',
    highlights: [
      'Candlelight Beach Dinner',
      'Bed Decoration & Honeymoon Cake',
      'Private Snorkeling & Scuba',
      'Premium Resort Plunge Pool'
    ],
    itinerary: [
      { day: 1, title: 'Port Blair Welcome & Chidiyatapu Sunset' },
      { day: 2, title: 'Private Ferry to Havelock & Beach Resort' },
      { day: 3, title: 'Couples Diving & Candlelight Dinner' },
      { day: 4, title: 'Neil Island Sunset Walk' },
      { day: 5, title: 'Flight Departure' }
    ]
  },
  {
    slug: 'andaman-family-escape',
    name: 'Andaman Family Escape',
    category: 'FAMILY',
    duration: '5 Nights / 6 Days',
    destinations: 'Port Blair • Havelock',
    bestFor: 'Families with Kids & Elders',
    description: 'Fun-filled family vacation with glass-bottom boat rides, comfortable child-friendly beach resorts, and historic heritage tours.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=85',
    price: 22499,
    originalPrice: 26999,
    rating: 4.8,
    reviewsCount: 115,
    tags: ['FAMILY', 'FUN', 'HERITAGE'],
    featured: false,
    hotelCategory: 'Family Deluxe Resort',
    mealPlan: 'Breakfast Included',
    transfers: 'Private AC Tempo / SUV',
    activities: 'Glass Bottom Boat & City Tour',
    highlights: [
      'Glass Bottom Coral Boat Ride',
      'Ross Island Deer & Bird Park',
      'Family Beach Picnic at Radhanagar',
      'Spacious Interconnected Rooms'
    ],
    itinerary: [
      { day: 1, title: 'Port Blair Arrival & Fisheries Museum' },
      { day: 2, title: 'Ross & North Bay Island Excursion' },
      { day: 3, title: 'Catamaran Ferry to Havelock' },
      { day: 4, title: 'Radhanagar Beach Family Fun' },
      { day: 5, title: 'Port Blair Return & Shopping' },
      { day: 6, title: 'Departure' }
    ]
  },
  {
    slug: 'andaman-adventure',
    name: 'Andaman Adventure',
    category: 'ADVENTURE',
    duration: '6 Nights / 7 Days',
    destinations: 'Port Blair • Havelock • Neil • Baratang',
    bestFor: 'Thrill Seekers & Nature Lovers',
    description: 'Deep sea scuba diving, bioluminescent mangrove kayaking, limestone cave explorations, and jet skiing adventures.',
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=85',
    price: 34999,
    originalPrice: 39999,
    rating: 4.9,
    reviewsCount: 87,
    tags: ['ADVENTURE', 'SCUBA', 'CAVES'],
    featured: false,
    hotelCategory: 'Eco Adventure Lodges',
    mealPlan: 'All Meals Included',
    transfers: '4x4 Jungle Safari & Boats',
    activities: 'PADI Scuba, Kayak & Caves',
    highlights: [
      'PADI Boat Scuba Dive',
      'Night Kayaking Plankton Tour',
      'Limestone Caves Boat Trek',
      'Water Sports Combo Package'
    ],
    itinerary: [
      { day: 1, title: 'Port Blair Arrival' },
      { day: 2, title: 'Baratang Limestone Caves Safari' },
      { day: 3, title: 'Ferry to Havelock & Scuba Dive' },
      { day: 4, title: 'Night Bioluminescent Kayaking' },
      { day: 5, title: 'Neil Island Sea Walk' },
      { day: 6, title: 'Port Blair Jet Skiing' },
      { day: 7, title: 'Departure' }
    ]
  },
  {
    slug: 'luxury-island-retreat',
    name: 'Luxury Island Retreat',
    category: 'LUXURY',
    duration: '5 Nights / 6 Days',
    destinations: 'Taj Exotica • Barefoot Resort',
    bestFor: 'Luxury & VIP Travelers',
    description: 'Ultra-exclusive 5-star oceanfront villas, private helicopter transfers, personal butler service, and fine dining under the stars.',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=85',
    price: 59999,
    originalPrice: 69999,
    rating: 5.0,
    reviewsCount: 64,
    tags: ['5-STAR', 'LUXURY', 'EXCLUSIVE'],
    featured: false,
    hotelCategory: 'Taj Exotica & Symphony Palms',
    mealPlan: 'Gourmet Full Board',
    transfers: 'Private VIP Yacht & SUV',
    activities: 'Private Yacht Charter & Spa',
    highlights: [
      '5-Star Taj Exotica Villa Stay',
      'Private Catamaran / Yacht Charter',
      '60-Min Luxury Spa Therapy',
      '24/7 Dedicated Butler Concierge'
    ],
    itinerary: [
      { day: 1, title: 'VIP Airport Welcome & Luxury SUV Transfer' },
      { day: 2, title: 'Private Yacht to Taj Exotica Havelock' },
      { day: 3, title: 'Private Beach Spa & Chef Dinner' },
      { day: 4, title: 'Helicopter Island Sightseeing' },
      { day: 5, title: 'Royal Suite Return Port Blair' },
      { day: 6, title: 'VIP Airport Escort' }
    ]
  }
];

const addPackages = async () => {
  try {
    await connectDatabase();
    
    for (const pkg of packagesData) {
      const existing = await Package.findOne({ where: { slug: pkg.slug } });
      if (!existing) {
        await Package.create(pkg);
        logger.info(`Seeded new package: ${pkg.name}`);
      } else {
        logger.info(`Package already exists: ${pkg.name}`);
      }
    }

    logger.info('Packages seeding completed successfully!');
    process.exit(0);
  } catch (error) {
    logger.error(`Error seeding packages: ${error.message}`);
    process.exit(1);
  }
};

addPackages();
