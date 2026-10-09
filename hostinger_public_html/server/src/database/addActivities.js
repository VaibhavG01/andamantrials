// server/src/database/addActivities.js
import { connectDatabase } from '../config/database.js';
import { Activity } from '../models/index.js';
import { logger } from '../utils/logger.js';

const activitiesData = [
  {
    slug: 'scuba-diving',
    name: 'Scuba Diving Expedition',
    title: 'PADI Certified Scuba Diving',
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
    slug: 'sea-walk',
    name: 'Underwater Sea Walk',
    title: 'Underwater Sea Walk',
    category: 'Coral Reef Walking',
    location: 'North Bay Island / Havelock',
    duration: '1.5 Hours Experience (25 mins underwater)',
    rating: 4.90,
    reviewsCount: 145,
    tagline: 'Walk directly on ocean floor with full oxygen helmet',
    overview: 'Walk on the sea bed 7 meters deep with a specialized transparent helmet providing continuous surface oxygen! Non-swimmers and children above 7 years can safely observe marine life up close without getting their hair wet.',
    price: 4200,
    originalPrice: 5000,
    badge: 'POPULAR',
    badgeBg: 'linear-gradient(135deg, #21e6c1, #059669)',
    image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1682687981974-c5ef2111640c?auto=format&fit=crop&w=1920&q=90',
    equipment: 'Sea walk helmet & underwater booties',
    media: 'Underwater digital photo packet included',
    safetyNotice: 'Zero swimming skills required. Suitable for ages 7 to 70.',
    inclusions: [
      '20-25 mins underwater ocean floor walking',
      'Helmets with continuous surface oxygen line',
      'Full safety briefing and safety divers guidance',
      'Free underwater digital photographs packet',
      'Island transfer and entry clearance charges'
    ],
    exclusions: [
      'Wetsuit rental (if desired, optional)',
      'Guide tips and personal expenses'
    ],
    safetyGuidelines: [
      'Asthma, heart condition or pregnant women are not permitted to sea walk.',
      'Must follow hand signals explained during brief training session.',
      'Children must be at least 7 years of age.'
    ],
    slots: ['09:00 AM', '11:00 AM', '01:00 PM', '03:00 PM']
  },
  {
    slug: 'snorkeling',
    name: 'Reef Snorkeling Safari',
    title: 'Reef Snorkeling Safari',
    category: 'Shallow Water Snorkeling',
    location: 'Elephant Beach, Havelock Island',
    duration: '1.0 Hour Experience',
    rating: 4.85,
    reviewsCount: 220,
    tagline: 'Shallow lagoon coral reefs with certified guide',
    overview: 'Explore the amazing reef biodiversity of Havelock Island. Certified local guides hold your hand floating over shallow coral beds, pointing out colorful parrotfish, clownfish (Nemo), and giant clams.',
    price: 1200,
    originalPrice: 1800,
    badge: 'BESTSELLER',
    badgeBg: 'linear-gradient(135deg, #f5af02, #e41d24)',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=90',
    equipment: 'Snorkeling mask, snorkel pipe, lifejacket',
    media: 'GoPro action photos available on request',
    safetyNotice: 'Lifejackets mandatory. Perfect for non-swimmers and kids.',
    inclusions: [
      '30 mins guided snorkeling float in shallow reef',
      'High-grade sanitized mask and dry snorkel tube',
      'Certified life-guard accompanying throughout',
      'Safety life-buoys and flotation jacket protection'
    ],
    exclusions: [
      'Jet ski rides or additional water activities',
      'Underwater photo file copy (INR 250 add-on)'
    ],
    safetyGuidelines: [
      'Do not touch or step on living coral reefs.',
      'Wearing lifejackets is compulsory regardless of swimming skills.',
      'Follow instructions of snorkeling guide at all times.'
    ],
    slots: ['08:30 AM', '10:30 AM', '01:30 PM', '03:30 PM']
  },
  {
    slug: 'kayaking',
    name: 'Bioluminescent Kayaking',
    title: 'Bioluminescent Mangrove Kayaking',
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
    slug: 'glass-bottom',
    name: 'Glass Bottom Reef Boat',
    title: 'Glass Bottom Reef Boat',
    category: 'Marine Park Cruise',
    location: 'Jolly Buoy Island',
    duration: '45 Mins Cruise',
    rating: 4.88,
    reviewsCount: 160,
    tagline: 'Panoramic underwater coral view without getting wet',
    overview: 'Sit comfortably inside a premium glass-cabin speedboat and observe stunning brain corals, sea anemones, and schools of blue damselfish, as you glide smoothly over the protected marine reserve lagoon.',
    price: 1800,
    originalPrice: 2400,
    badge: 'FAMILY FAVORITE',
    badgeBg: 'linear-gradient(135deg, #16d9ff, #21e6c1)',
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1920&q=90',
    equipment: 'Life jacket, glass viewing deck access',
    media: 'Smartphone friendly viewing ports',
    safetyNotice: 'Perfect for elders, infants, and non-swimmers.',
    inclusions: [
      '45 mins cruise inside glass bottom speed-boat',
      'National Marine Park entry permit ticket charges',
      'Certified boat skipper and reef commentator',
      'Life-jackets for all onboard passengers'
    ],
    exclusions: [
      'Jetty pickup and dropping services',
      'Snorkeling gear (boat cruise only)'
    ],
    safetyGuidelines: [
      'Do not lean too far out of the boat windows.',
      'Infants must be held securely by parents.',
      'No throwing of trash or food into the marine park.'
    ],
    slots: ['09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM']
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

const addActivities = async () => {
  try {
    await connectDatabase();
    
    for (const act of activitiesData) {
      const existing = await Activity.findOne({ where: { slug: act.slug } });
      if (!existing) {
        await Activity.create(act);
        logger.info(`Seeded new activity: ${act.name}`);
      } else {
        logger.info(`Activity already exists: ${act.name}`);
      }
    }

    logger.info('Activities seeding completed successfully!');
    process.exit(0);
  } catch (error) {
    logger.error(`Error seeding activities: ${error.message}`);
    process.exit(1);
  }
};

addActivities();
