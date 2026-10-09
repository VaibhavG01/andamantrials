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
    ],
    status: 'ACTIVE'
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
    ],
    status: 'ACTIVE'
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
    ],
    status: 'ACTIVE'
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
    ],
    status: 'ACTIVE'
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
    ],
    status: 'ACTIVE'
  },
  {
    slug: 'andaman-quick-escape',
    name: 'Andaman Quick Escape',
    category: 'BUDGET',
    duration: '3 Nights / 4 Days',
    destinations: 'Port Blair • Havelock',
    bestFor: 'Weekend & Short Vacations',
    description: 'Perfect short getaway covering Havelock’s Radhanagar Beach and Port Blair’s major historical landmarks.',
    image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=85',
    price: 16999,
    originalPrice: 19999,
    rating: 4.7,
    reviewsCount: 156,
    tags: ['SHORT TRIP', 'BUDGET', 'QUICK'],
    featured: false,
    hotelCategory: '3-Star Cozy Hotel',
    mealPlan: 'Breakfast Included',
    transfers: 'Shared / Private AC Cab',
    activities: 'Beach Walk & Sightseeing',
    highlights: [
      'Cover Top 2 Major Islands',
      'Fast-track Ferry Passes',
      'Radhanagar Sunset Visit',
      'Cellular Jail Tour'
    ],
    itinerary: [
      { day: 1, title: 'Port Blair Arrival & City Tour' },
      { day: 2, title: 'Day Trip to Havelock Radhanagar' },
      { day: 3, title: 'Cellular Jail & Chidiyatapu' },
      { day: 4, title: 'Departure' }
    ],
    status: 'ACTIVE'
  },
  {
    slug: 'complete-andaman',
    name: 'Complete Andaman Expedition',
    category: 'CUSTOM TRIPS',
    duration: '7 Nights / 8 Days',
    destinations: 'North + Middle + South Andaman',
    bestFor: 'Complete Island Exploration',
    description: 'Comprehensive 8-day expedition spanning South, Middle, and North Andaman including Saddle Peak and Ross & Smith sandbar.',
    image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=85',
    price: 42999,
    originalPrice: 49999,
    rating: 4.9,
    reviewsCount: 73,
    tags: ['GRAND TOUR', 'ALL ISLANDS', 'EXPLORE'],
    featured: false,
    hotelCategory: 'Handpicked Boutique Resorts',
    mealPlan: 'Breakfast & Dinner',
    transfers: 'Private AC SUV Driver',
    activities: 'Sandbar Walk & Turtle Nesting',
    highlights: [
      'Ross & Smith Twin Sandbar',
      'Saddle Peak Rainforest Hike',
      'Middle Andaman Turtle Sanctuary',
      'Cover 6 Major Islands'
    ],
    itinerary: [
      { day: 1, title: 'Port Blair Arrival' },
      { day: 2, title: 'Havelock Island Exploration' },
      { day: 3, title: 'Neil Island Natural Bridge' },
      { day: 4, title: 'Baratang Caves Drive' },
      { day: 5, title: 'Rangat Turtle Nesting Sanctuary' },
      { day: 6, title: 'Diglipur Ross & Smith Sandbar' },
      { day: 7, title: 'Return Port Blair via Convoy' },
      { day: 8, title: 'Departure' }
    ],
    status: 'ACTIVE'
  }
];

const seedAllPackages = async () => {
  try {
    await connectDatabase();
    logger.info('Starting full packages seeding & status activation sync...');
    
    for (const pkg of packagesData) {
      const [record, created] = await Package.findOrCreate({
        where: { slug: pkg.slug },
        defaults: pkg
      });
      
      if (!created) {
        // Update price, status and details to make sure it matches the latest master schema
        record.price = pkg.price;
        record.originalPrice = pkg.originalPrice;
        record.status = 'ACTIVE';
        record.tags = pkg.tags;
        record.highlights = pkg.highlights;
        record.itinerary = pkg.itinerary;
        await record.save();
        logger.info(`Updated & Activated existing package: ${pkg.name}`);
      } else {
        logger.info(`Seeded new package: ${pkg.name}`);
      }
    }

    logger.info('All 7 packages successfully seeded and set to ACTIVE!');
    process.exit(0);
  } catch (error) {
    logger.error(`Error seeding packages: ${error.message}`);
    process.exit(1);
  }
};

seedAllPackages();
