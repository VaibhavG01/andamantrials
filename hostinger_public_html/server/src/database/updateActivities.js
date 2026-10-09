// server/src/database/updateActivities.js
import { connectDatabase } from '../config/database.js';
import { Activity } from '../models/index.js';
import { logger } from '../utils/logger.js';

const activitiesData = [
  {
    slug: 'kayaking',
    name: 'Bioluminescent Kayaking',
    title: 'Bioluminescent Kayaking',
    category: 'Night Sea Adventure',
    location: 'Havelock Mangroves',
    duration: '2.0 Hours Night Safari',
    rating: 4.98,
    reviewsCount: 95,
    tagline: 'Magical glowing plankton night tour through mangroves',
    overview: 'Paddle through silent mangrove canopies in the dead of night, witnessing the sea light up in neon blue sparkles with every stroke of your paddle, triggered by bioluminescent single-celled phytoplankton!',
    price: 2500,
    originalPrice: 3200,
    badge: 'NIGHT TOUR',
    badgeBg: 'linear-gradient(135deg, #8b5cf6, #6366f1)',
    image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1920&q=90',
    equipment: 'Premium double sea kayak, paddle, life vest',
    media: 'Low-light photos captured by instructor',
    safetyNotice: 'Operated only on new moon nights or dark cycles.',
    inclusions: [
      'Guided night kayaking trip with certified instructor',
      'Top-tier sit-on-top sea kayaks & safety vests',
      'Paddles & waterproof dry bags for electronics',
      'Pre-tour safety and paddling technique brief'
    ],
    exclusions: [
      'Transportation to mangrove embarkation point',
      'Personal snacks and mineral water'
    ],
    safetyGuidelines: [
      'Avoid standing up or rocking the kayak during the night tour.',
      'Keep your lifejacket securely buckled at all times.',
      'Stay close to the lead instructor’s kayak.'
    ],
    slots: ['06:00 PM', '08:00 PM', '10:00 PM']
  },
  {
    slug: 'scuba-diving',
    name: 'Scuba Diving Expedition',
    title: 'Scuba Diving Expedition',
    category: 'Underwater Adventure',
    location: 'Elephant Beach, Havelock Island',
    duration: '2.5 Hours (35-45 mins dive)',
    rating: 4.95,
    reviewsCount: 180,
    tagline: 'Coral gardens & exotic marine life with PADI dive masters',
    overview: 'Experience the magic of the underwater ocean world with our PADI certified scuba diving program. Perfect for beginners and non-swimmers, this experience takes you deep into the vibrant coral reefs of Elephant Beach accompanied by your dedicated personal Divemaster.',
    price: 3500,
    originalPrice: 4500,
    badge: 'MUST TRY',
    badgeBg: 'linear-gradient(135deg, #16d9ff, #008cff)',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1920&q=90',
    equipment: 'Full wetsuit, fins, mask, regulator & tank',
    media: 'HD Underwater Photos & 1 Min GoPro Video included',
    safetyNotice: '12 Hours No Flying after dive. Non-swimmers welcome.',
    inclusions: [
      '30-45 mins underwater dive with 1-on-1 Divemaster',
      'Shallow water briefing & breathing practice',
      'Full diving suit, mask, fins & oxygen tank',
      'Underwater GoPro HD Photos & 4K Video Packet',
      'Boat transfer to diving site & sea permit'
    ],
    exclusions: [
      'Personal hotel transfer to jetty',
      'Underwater camera memory card purchase'
    ],
    safetyGuidelines: [
      'Must complete basic medical fitness self-declaration.',
      'Do not board a flight for at least 12 to 18 hours after completing your dive.',
      'Minimum age limit is 10 years.',
      'Non-swimmers will be accompanied continuously by a certified dive master.'
    ],
    slots: ['08:00 AM', '10:00 AM', '12:00 PM', '02:00 PM']
  },
  {
    slug: 'game-fishing',
    name: 'Deep Sea Game Fishing',
    title: 'Deep Sea Game Fishing',
    category: 'Extreme Sport Fishing',
    location: 'Port Blair Waters',
    duration: '4.0 Hours Charter',
    rating: 4.92,
    reviewsCount: 65,
    tagline: 'Big game sport fishing for Marlin, Tuna & GT in open ocean',
    overview: 'Board our fully equipped, twin-engine professional fishing boat and head into the deep trenches near Port Blair or Havelock. Battle heavy fighters like Giant Trevally, Yellowfin Tuna, Barracuda, and Billfish!',
    price: 9500,
    originalPrice: 12000,
    badge: 'VIP CHARTER',
    badgeBg: 'linear-gradient(135deg, #ff4f7b, #dc2743)',
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1920&q=90',
    equipment: 'Professional rods, reels, trolling lures, harness',
    media: 'Catch and release photos captured by crew',
    safetyNotice: 'Strict catch-and-release policy for billfish and turtles.',
    inclusions: [
      '4-Hour exclusive boat charter with expert skipper',
      'State-of-the-art Shimano/Penn heavy game tackle',
      'Trolling, jigging & popping gear selection',
      'Refreshments, mineral water & fresh fruit box'
    ],
    exclusions: [
      'Transport to Port Blair water sports jetty',
      'Heavy sea-sickness medication'
    ],
    safetyGuidelines: [
      'Always follow skipper instructions when a large fish strikes.',
      'Maintain firm footing on the deck during trolling runs.',
      'Wear safety belts when fighting heavy fish from the chair.'
    ],
    slots: ['06:00 AM', '01:00 PM']
  }
];

const updateActivities = async () => {
  try {
    await connectDatabase();
    
    // Clear only matching activities to rebuild cleanly
    for (const act of activitiesData) {
      await Activity.destroy({ where: { slug: act.slug } });
      await Activity.create(act);
      logger.info(`Updated/Seeded activity: ${act.name}`);
    }

    logger.info('Activities update completed successfully!');
    process.exit(0);
  } catch (error) {
    logger.error(`Error updating activities: ${error.message}`);
    process.exit(1);
  }
};

updateActivities();
