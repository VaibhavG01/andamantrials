// server/src/database/addPlaces.js
import { connectDatabase } from '../config/database.js';
import { Place } from '../models/index.js';
import { logger } from '../utils/logger.js';

const placesData = [
  {
    name: 'Radhanagar Beach',
    tagline: "Asia's Finest Sunset Beach",
    category: 'beaches',
    island: 'Havelock Island',
    travelTime: '2.5 hrs from Port Blair',
    rating: 4.97,
    reviews: '8.4K',
    mustSee: true,
    description: "Ranked Asia's best beach by Time Magazine. Pristine white sand stretching 2km, turquoise waters, and legendary crimson sunsets.",
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=85',
    badge: '#7 ASIA',
    badgeBg: 'linear-gradient(135deg, #f5af02, #e41d24)',
    tags: ['Beach', 'Sunset', 'Swimming']
  },
  {
    name: 'Cellular Jail',
    tagline: 'The Colonial Dark History',
    category: 'historical',
    island: 'Port Blair',
    travelTime: 'In Port Blair',
    rating: 4.90,
    reviews: '12.1K',
    mustSee: true,
    description: "A haunting colonial prison turned national monument. The Light & Sound show every evening brings India's struggle for independence alive.",
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1000&q=85',
    badge: 'MUST VISIT',
    badgeBg: 'linear-gradient(135deg, #16d9ff, #0070f3)',
    tags: ['Heritage', 'History', 'Light Show']
  },
  {
    name: 'Elephant Beach',
    tagline: 'Vibrant Coral Reef Paradise',
    category: 'beaches',
    island: 'Havelock Island',
    travelTime: '3 hrs from Port Blair',
    rating: 4.88,
    reviews: '5.6K',
    mustSee: false,
    description: 'A boat-only accessible beach famous for shallow coral reefs. Perfect for first-time snorkelers with calm, crystal-clear waters.',
    image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1000&q=85',
    badge: 'SNORKEL HUB',
    badgeBg: 'linear-gradient(135deg, #21e6c1, #059669)',
    tags: ['Snorkeling', 'Coral', 'Boat Access']
  },
  {
    name: 'Ross Island',
    tagline: 'Ruins of the Colonial Capital',
    category: 'historical',
    island: 'Near Port Blair',
    travelTime: '20 mins boat ride',
    rating: 4.85,
    reviews: '4.2K',
    mustSee: true,
    description: 'Once the British administrative headquarters, now overgrown by jungle roots. Deer roam freely through crumbling colonial structures.',
    image: 'https://images.unsplash.com/photo-1559494007-9f5847c49d94?auto=format&fit=crop&w=1000&q=85',
    badge: 'HERITAGE ISLE',
    badgeBg: 'linear-gradient(135deg, #8b5cf6, #6366f1)',
    tags: ['Ruins', 'History', 'Deer']
  },
  {
    name: 'Neil Island',
    tagline: 'The Peaceful Green Gem',
    category: 'islands',
    island: 'Neil Island',
    travelTime: '2 hrs from Port Blair',
    rating: 4.91,
    reviews: '3.8K',
    mustSee: true,
    description: 'Smaller and quieter than Havelock, Neil Island offers lush paddy fields, natural bridge formations, and uncrowded pristine beaches.',
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1000&q=85',
    badge: 'HIDDEN GEM',
    badgeBg: 'linear-gradient(135deg, #21e6c1, #16d9ff)',
    tags: ['Quiet', 'Nature', 'Beaches']
  },
  {
    name: 'Baratang Island',
    tagline: 'Limestone Caves & Mudvolcanoes',
    category: 'nature',
    island: 'Baratang Island',
    travelTime: '3.5 hrs from Port Blair',
    rating: 4.82,
    reviews: '2.9K',
    mustSee: false,
    description: 'A dramatic landscape of limestone sea caves, active mud volcanoes, and dense mangrove creeks. Reached via a thrilling jungle convoy.',
    image: 'https://images.unsplash.com/photo-1474440692490-2e83ae13ba29?auto=format&fit=crop&w=1000&q=85',
    badge: 'ADVENTURE',
    badgeBg: 'linear-gradient(135deg, #ff4f7b, #dc2743)',
    tags: ['Caves', 'Mud Volcano', 'Jungle']
  },
  {
    name: 'North Bay Island',
    tagline: 'The Water Sports Capital',
    category: 'water-sports',
    island: 'Near Port Blair',
    travelTime: '30 mins from Port Blair',
    rating: 4.87,
    reviews: '6.1K',
    mustSee: false,
    description: 'The go-to island for sea walking, glass bottom boat rides, and scuba diving. Crystal clear lagoons with the richest coral in South Andaman.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=85',
    badge: 'WATER SPORTS',
    badgeBg: 'linear-gradient(135deg, #16d9ff, #21e6c1)',
    tags: ['Sea Walk', 'Scuba', 'Coral']
  },
  {
    name: 'Jolly Buoy Island',
    tagline: 'Pristine National Park Beach',
    category: 'islands',
    island: 'Mahatma Gandhi Marine Park',
    travelTime: '1.5 hrs from Port Blair',
    rating: 4.93,
    reviews: '4.7K',
    mustSee: true,
    description: 'Part of a protected national marine park, accessible only in season. Untouched beaches, vibrant coral gardens, and sea turtles nesting.',
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1000&q=85',
    badge: 'PROTECTED ISLE',
    badgeBg: 'linear-gradient(135deg, #21e6c1, #059669)',
    tags: ['National Park', 'Turtles', 'Coral']
  }
];

const addPlaces = async () => {
  try {
    await connectDatabase();
    
    for (const p of placesData) {
      const existing = await Place.findOne({ where: { name: p.name } });
      if (!existing) {
        await Place.create(p);
        logger.info(`Seeded new place: ${p.name}`);
      } else {
        logger.info(`Place already exists: ${p.name}`);
      }
    }

    logger.info('Places seeding completed successfully!');
    process.exit(0);
  } catch (error) {
    logger.error(`Error seeding places: ${error.message}`);
    process.exit(1);
  }
};

addPlaces();
