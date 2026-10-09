import { sequelize, MasterCategory, MasterLocation } from '../models/index.js';
import { logger } from '../utils/logger.js';

const INITIAL_CATEGORIES = [
  // Activity Categories
  { name: 'Underwater Adventure', slug: 'underwater-adventure', type: 'ACTIVITY', icon: 'Compass', description: 'Scuba diving, Sea walk, Snorkeling, Submarine tours' },
  { name: 'Water Sports', slug: 'water-sports', type: 'ACTIVITY', icon: 'Waves', description: 'Jet ski, Parasailing, Banana ride, Speed boats' },
  { name: 'Island Sightseeing', slug: 'island-sightseeing', type: 'ACTIVITY', icon: 'MapPin', description: 'Island tours, Sunset points, Landmarks, Historical sites' },
  { name: 'Trekking & Forest', slug: 'trekking-forest', type: 'ACTIVITY', icon: 'Compass', description: 'Jungle treks, Volcano tours, Bird watching' },
  { name: 'Kayaking & Mangroves', slug: 'kayaking-mangroves', type: 'ACTIVITY', icon: 'Waves', description: 'Mangrove night kayaking, Bioluminescence tours' },
  { name: 'Cruises & Sailing', slug: 'cruises-sailing', type: 'ACTIVITY', icon: 'Anchor', description: 'Sunset dinner cruise, Private yacht charters' },
  { name: 'Cultural & Heritage', slug: 'cultural-heritage', type: 'ACTIVITY', icon: 'Camera', description: 'Cellular Jail light & sound, museums, anthropological sites' },
  { name: 'Game Fishing & Angling', slug: 'game-fishing', type: 'ACTIVITY', icon: 'Sparkles', description: 'Deep sea fishing expeditions' },

  // Package Categories
  { name: 'Honeymoon Special', slug: 'honeymoon-special', type: 'PACKAGE', icon: 'Heart', description: 'Romantic island escapes, candle-light dinners & beach resorts' },
  { name: 'Family Vacation', slug: 'family-vacation', type: 'PACKAGE', icon: 'Users', description: 'Relaxed itineraries, luxury catamarans, child-friendly activities' },
  { name: 'Adventure Expedition', slug: 'adventure-expedition', type: 'PACKAGE', icon: 'Compass', description: 'Deep sea scuba, mangrove kayaking, jungle treks' },
  { name: 'Luxury Island Getaway', slug: 'luxury-island-getaway', type: 'PACKAGE', icon: 'Sparkles', description: '5-star private villas, yacht transfers, VIP concierge' },
  { name: 'Budget Explorer', slug: 'budget-explorer', type: 'PACKAGE', icon: 'Zap', description: 'Affordable hostels, government ferries, scenic beach trails' },
  { name: 'Short Weekend Escapes', slug: 'short-weekend-escapes', type: 'PACKAGE', icon: 'Clock', description: '3-4 day fast-track tours for quick getaways' },

  // Blog Categories
  { name: 'Travel Guides', slug: 'travel-guides', type: 'BLOG', icon: 'BookOpen', description: 'Comprehensive island guides and packing tips' },
  { name: 'Island Insights', slug: 'island-insights', type: 'BLOG', icon: 'Sparkles', description: 'Culture, history, food, and local life' },
  { name: 'Marine Life', slug: 'marine-life', type: 'BLOG', icon: 'Waves', description: 'Coral reefs, turtle nesting, and marine biodiversity' },
];

const INITIAL_LOCATIONS = [
  // Havelock Island (Swaraj Dweep)
  { name: 'Elephant Beach', island: 'Havelock Island', meetingPoint: 'Elephant Beach Speedboat Jetty, Havelock', description: 'Premier water sports and coral reef spot' },
  { name: 'Radhanagar Beach (Beach No. 7)', island: 'Havelock Island', meetingPoint: 'Radhanagar Beach Main Gate, Havelock', description: "Asia's 7th best beach with pristine white sand and sunsets" },
  { name: 'Kalapathar Beach', island: 'Havelock Island', meetingPoint: 'Kalapathar Black Rock Viewpoint, Havelock', description: 'Serene sunrise spot with turquoise waters' },
  { name: 'Govind Nagar Beach (Nemo Reef)', island: 'Havelock Island', meetingPoint: 'Nemo Reef Dive Center, Govind Nagar, Havelock', description: 'Top shore dive site for beginners' },
  { name: 'Havelock Jetty (Swaraj Dweep Harbor)', island: 'Havelock Island', meetingPoint: 'Main Ferry Jetty Arrival Gate, Havelock', description: 'Main maritime terminal for private ferries and catamarans' },

  // Neil Island (Shaheed Dweep)
  { name: 'Bharatpur Beach', island: 'Neil Island', meetingPoint: 'Bharatpur Beach Water Sports Center, Neil Island', description: 'Lagoon waters perfect for glass-bottom boat & jet ski' },
  { name: 'Laxmanpur Beach (Natural Bridge)', island: 'Neil Island', meetingPoint: 'Laxmanpur Sunset Point Parking, Neil Island', description: 'Natural coral rock formation and dramatic sunsets' },
  { name: 'Sitapur Beach (Sunrise Point)', island: 'Neil Island', meetingPoint: 'Sitapur Beach Viewpoint, Neil Island', description: 'Scenic golden sunrise beach on eastern coast' },
  { name: 'Neil Island Jetty', island: 'Neil Island', meetingPoint: 'Shaheed Dweep Jetty Gate, Neil Island', description: 'Inter-island ferry dock' },

  // Port Blair (South Andaman)
  { name: "Corbyn's Cove Beach", island: 'Port Blair', meetingPoint: "Corbyn's Cove Water Sports Pavilion, Port Blair", description: 'Crescent coconut palm beach in Port Blair' },
  { name: 'Cellular Jail & Marina Park', island: 'Port Blair', meetingPoint: 'Cellular Jail Main Ticket Counter, Port Blair', description: 'Historic landmark and Light & Sound show venue' },
  { name: 'North Bay Island (Coral Island)', island: 'Port Blair', meetingPoint: 'Water Sports Complex Jetty, Aberdeen Bazaar, Port Blair', description: 'Lighthouse island featured on the 20 rupee note' },
  { name: 'Ross Island (Netaji Subhash Chandra Bose Dweep)', island: 'Port Blair', meetingPoint: 'Aberdeen Jetty Boarding Point, Port Blair', description: 'British colonial ruins and deer sanctuary' },
  { name: 'Chidiya Tapu (Sunset Point)', island: 'Port Blair', meetingPoint: 'Chidiya Tapu Forest Gate, South Andaman', description: 'Bird paradise and panoramic sunset cliff' },
  { name: 'Jolly Buoy Island (Marine National Park)', island: 'Port Blair', meetingPoint: 'Wandoor Forest Jetty, Port Blair', description: 'Pristine coral sanctuary with zero plastic tolerance' },

  // Baratang & North Andaman
  { name: 'Baratang Island (Mangrove Creeks & Limestone Caves)', island: 'Baratang Island', meetingPoint: 'Nilambur Jetty, Baratang', description: 'Limestone caves and mud volcanoes' },
  { name: 'Diglipur & Ross-Smith Twin Islands', island: 'Diglipur', meetingPoint: 'Aerial Bay Jetty, Diglipur', description: 'Natural sandbar connecting two pristine islands' },
];

export const seedMasters = async () => {
  try {
    logger.info('Syncing MasterCategory & MasterLocation tables...');
    await MasterCategory.sync();
    await MasterLocation.sync();

    // Seed Categories
    for (const cat of INITIAL_CATEGORIES) {
      const exists = await MasterCategory.findOne({ where: { slug: cat.slug, type: cat.type } });
      if (!exists) {
        await MasterCategory.create(cat);
        logger.info(`+ Created Category Master: [${cat.type}] ${cat.name}`);
      }
    }

    // Seed Locations
    for (const loc of INITIAL_LOCATIONS) {
      const exists = await MasterLocation.findOne({ where: { name: loc.name, island: loc.island } });
      if (!exists) {
        await MasterLocation.create(loc);
        logger.info(`+ Created Location Master: [${loc.island}] ${loc.name}`);
      }
    }

    logger.info('✅ Master Categories & Locations Seeded Successfully!');
  } catch (err) {
    logger.error(`Error seeding masters: ${err.message}`);
  }
};

// Run if called directly
if (process.argv[1] && process.argv[1].endsWith('seedMasters.js')) {
  seedMasters().then(() => process.exit(0)).catch(() => process.exit(1));
}
