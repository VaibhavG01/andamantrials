import { Package } from '../models/index.js';
import { sequelize, connectDatabase } from '../config/database.js';

const RICH_5D4N_ITINERARY = [
  {
    day: 1,
    title: 'Arrival in Port Blair • Cellular Jail Light & Sound Show',
    location: 'Port Blair',
    description: 'Arrive at Veer Savarkar International Airport, Port Blair. Meet our private island concierge and transfer to your sea-view hotel. In the evening, visit the historic Cellular Jail followed by the stirring Sound & Light Show.',
    morning: 'Airport pick-up, private AC transfer & resort check-in',
    afternoon: 'Corbyn’s Cove Beach visit & local coastal cuisine lunch',
    evening: 'Cellular Jail national memorial tour & Freedom Light & Sound Show',
    meals: { breakfast: false, lunch: true, dinner: true },
    stay: 'Symphony Samudra / Sea Shell Port Blair (4-Star Beachside)',
    transfers: 'Private AC Cab with Airport Escort',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80',
  },
  {
    day: 2,
    title: 'High-Speed Makruzz to Havelock • Radhanagar Beach Sunset',
    location: 'Havelock Island (Swaraj Dweep)',
    description: 'Board the morning luxury Makruzz Catamaran to Havelock Island. Check-in to your beachfront resort. In the late afternoon, experience the world-famous golden sunset at Radhanagar Beach (Asia’s #1 Beach).',
    morning: 'Private AC catamaran crossing to Havelock Island (90 mins)',
    afternoon: 'Resort check-in, tropical welcome drink & relaxation by the pool',
    evening: 'Romantic sunset stroll & photography at Radhanagar Beach (Beach No. 7)',
    meals: { breakfast: true, lunch: false, dinner: true },
    stay: 'Barefoot at Havelock / Symphony Palms Beach Resort',
    transfers: 'Luxury Catamaran Ferry + Havelock Private AC Cab',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
  },
  {
    day: 3,
    title: 'Elephant Beach Snorkeling Expedition & Water Adventures',
    location: 'Havelock Island (Swaraj Dweep)',
    description: 'Speedboat cruise to Elephant Beach known for crystal-clear turquoise waters and vibrant living coral reefs. Enjoy complimentary guided snorkeling session, jet skiing, or glass-bottom boat safari.',
    morning: 'Speedboat cruise to Elephant Beach & guided coral snorkeling',
    afternoon: 'Optional Sea Walk, Scuba diving, or Parasailing over azure waters',
    evening: 'Visit Kalapathar Beach for turquoise ocean views & coconut groves',
    meals: { breakfast: true, lunch: true, dinner: true },
    stay: 'Barefoot at Havelock / Symphony Palms Beach Resort',
    transfers: 'Speedboat to Elephant Beach + Local AC Cab',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80',
  },
  {
    day: 4,
    title: 'Ferry to Neil Island • Natural Bridge & Laxmanpur Sunset',
    location: 'Neil Island (Shaheed Dweep)',
    description: 'Cruise to Neil Island, the vegetable bowl and tranquil coral haven of Andaman. Explore the magnificent geological Wonder Natural Rock Formation (Howrah Bridge) and Bharatpur Beach.',
    morning: 'Morning ferry to Neil Island, check-in to luxury resort',
    afternoon: 'Explore Bharatpur Beach shallow reef lagoon & glass bottom boat',
    evening: 'Witness the iconic sunset at Laxmanpur Beach & Natural Rock Bridge',
    meals: { breakfast: true, lunch: false, dinner: true },
    stay: 'Sea Shell Neil / Summer Sands Beach Resort',
    transfers: 'Private Catamaran + Neil Island AC Cab',
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=600&q=80',
  },
  {
    day: 5,
    title: 'Return Ferry to Port Blair & Departure with Memories',
    location: 'Port Blair',
    description: 'Catch the morning cruise back to Port Blair. Depending on your flight timings, souvenir shopping at Sagarika Govt. Emporium before private airport drop with unforgettable island memories.',
    morning: 'Morning high-speed catamaran cruise back to Port Blair Jetty',
    afternoon: 'Handicraft & seashell souvenir shopping at Sagarika Emporium',
    evening: 'Private transfer to Veer Savarkar Airport for onward flight home',
    meals: { breakfast: true, lunch: false, dinner: false },
    stay: 'N/A (Departure Day)',
    transfers: 'Private AC Cab to Airport Drop',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80',
  },
];

const RICH_6D5N_ITINERARY = [
  {
    day: 1,
    title: 'Arrival in Port Blair • Cellular Jail Light & Sound Show',
    location: 'Port Blair',
    description: 'Welcome to the tropical paradise of Andaman! Airport meet-and-greet with garland and private transfer to your sea-facing luxury resort. Evening historic Cellular Jail Light & Sound show.',
    morning: 'VIP airport pick-up & check-in to sea-view resort',
    afternoon: 'Leisurely lunch & visit to Fisheries / Anthropological Museum',
    evening: 'Cellular Jail Light & Sound Show narrating freedom saga',
    meals: { breakfast: false, lunch: true, dinner: true },
    stay: 'Symphony Samudra Luxury Resort (Port Blair)',
    transfers: 'Private AC Luxury Cab',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80',
  },
  {
    day: 2,
    title: 'Catamaran Cruise to Havelock • Radhanagar Beach Sunset',
    location: 'Havelock Island',
    description: 'Embark on the premium Makruzz Catamaran to Havelock Island. Check-in to private beachfront villa with private beach access. Evening sunset at Radhanagar Beach.',
    morning: 'Makruzz high-speed catamaran to Havelock Island',
    afternoon: 'Villa check-in, beach walk & tropical welcome mocktails',
    evening: 'Golden sunset photography at Radhanagar Beach (Beach No. 7)',
    meals: { breakfast: true, lunch: false, dinner: true },
    stay: 'Havelock Island Beach Resort / Barefoot Villa',
    transfers: 'Makruzz Catamaran + Havelock AC Cab',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
  },
  {
    day: 3,
    title: 'Elephant Beach Snorkeling & Certified Scuba Diving',
    location: 'Havelock Island',
    description: 'An action-packed day exploring living coral reefs. Speedboat to Elephant Beach for complimentary guided snorkeling followed by private certified scuba diving with underwater video.',
    morning: 'Speedboat to Elephant Beach with complimentary coral snorkeling',
    afternoon: 'PADI Certified Discover Scuba Diving with master dive instructor',
    evening: 'Romantic Candlelight Dinner on the beach with wine/mocktails',
    meals: { breakfast: true, lunch: true, dinner: true },
    stay: 'Havelock Island Beach Resort / Barefoot Villa',
    transfers: 'Private Speedboat + AC Cab',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80',
  },
  {
    day: 4,
    title: 'Kalapathar Beach Exploration & Cruise to Neil Island',
    location: 'Neil Island (Shaheed Dweep)',
    description: 'Morning scenic photoshoot at Kalapathar Beach with turquoise waters and black boulders. Afternoon catamaran to tranquil Neil Island and sunset at Laxmanpur Beach.',
    morning: 'Morning sunrise drive to picturesque Kalapathar Beach',
    afternoon: 'Ferry to Neil Island & check-in to eco luxury resort',
    evening: 'Sunset viewing at Laxmanpur Beach & Natural Rock Formation',
    meals: { breakfast: true, lunch: false, dinner: true },
    stay: 'Sea Shell Neil / Summer Sands Resort',
    transfers: 'Inter-Island Catamaran + Neil Island AC Cab',
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=600&q=80',
  },
  {
    day: 5,
    title: 'Bharatpur Beach Lagoon & Return to Port Blair Sunset',
    location: 'Port Blair',
    description: 'Explore the shallow, crystal lagoon of Bharatpur Beach. Glass-bottom coral safari. Afternoon catamaran cruise back to Port Blair. Evening sunset drive to Chidiya Tapu (Bird Island).',
    morning: 'Bharatpur Beach water activities & glass-bottom coral ride',
    afternoon: 'Catamaran cruise back to Port Blair Jetty & resort check-in',
    evening: 'Chidiya Tapu sunset point & romantic panoramic ocean vista',
    meals: { breakfast: true, lunch: false, dinner: true },
    stay: 'Symphony Samudra Luxury Resort (Port Blair)',
    transfers: 'Catamaran + Private AC Cab',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80',
  },
  {
    day: 6,
    title: 'Souvenir Shopping & Airport Drop with Island Memories',
    location: 'Port Blair',
    description: 'Enjoy a leisurely buffet breakfast with ocean views. Quick shopping visit to Sagarika Govt. Handicrafts Emporium for pearl jewelry and local wooden artifacts before airport drop.',
    morning: 'Buffet breakfast & resort check-out',
    afternoon: 'Sagarika handicraft emporium & Port Blair city drive',
    evening: 'Private drop at Veer Savarkar Airport for return journey',
    meals: { breakfast: true, lunch: false, dinner: false },
    stay: 'N/A (Departure Day)',
    transfers: 'Private AC Cab to Airport',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80',
  },
];

const DEFAULT_INCLUSIONS = [
  'Luxury Hotel / Beach Resort Accommodation on Double Sharing',
  'Daily Delicious Buffet Breakfast & Select Gourmet Dinners',
  'Confirmed High-Speed Catamaran Tickets (Makruzz / Nautika / Green Ocean)',
  'Exclusive AC Vehicle for all Airport, Jetty, and Sightseeing Transfers',
  'Complimentary Guided Snorkeling Session with Professional Equipment',
  'All Entry Tickets, Monument Passes & National Park Environmental Fees',
  'Airport Meet & Greet with 24/7 Dedicated Andaman Island Concierge',
  'All Toll Taxes, Fuel Charges, Parking & Driver Allowances Included'
];

const DEFAULT_EXCLUSIONS = [
  'Airfare to and from Port Blair (Can be booked on special request)',
  'Personal expenses, laundry, telephone calls, and room service orders',
  'Optional Scuba Diving, Sea Kart, Parasailing & Jet Ski upgrades',
  'Meals and beverages not explicitly mentioned in the itinerary',
  'Camera & video fees at historical monuments where applicable',
  'Travel and medical insurance (Highly recommended)'
];

const DEFAULT_FAQS = [
  { question: 'Is scuba diving included in this package?', answer: 'Guided coral snorkeling is included complimentary. Certified scuba diving with an instructor can be pre-booked at an exclusive 20% discount.' },
  { question: 'What type of ferries are used for island transfers?', answer: 'We exclusively book premium air-conditioned high-speed catamarans (Makruzz, Nautika, or Green Ocean) with reserved seating.' },
  { question: 'Can we customize the hotel stay or add extra nights?', answer: 'Yes! Our 24/7 Port Blair island travel concierge can customize any hotel, ferry timings, or add private candlelight beach dinners on request.' }
];

async function updateAllPackages() {
  try {
    await connectDatabase();
    const pkgs = await Package.findAll();
    console.log(`Found ${pkgs.length} packages in database. Updating with rich day-by-day itineraries...`);

    for (const p of pkgs) {
      const isShort = p.duration && (p.duration.includes('4') || p.duration.includes('5D'));
      const chosenItinerary = isShort ? RICH_5D4N_ITINERARY : RICH_6D5N_ITINERARY;

      p.itinerary = chosenItinerary;
      p.inclusions = DEFAULT_INCLUSIONS;
      p.exclusions = DEFAULT_EXCLUSIONS;
      p.faq = DEFAULT_FAQS;
      p.cancellationPolicy = '100% refund on cancellation 15+ days before departure. 50% refund between 7-14 days. Non-refundable within 7 days.';
      p.pickupDrop = 'Port Blair Airport (IXZ) Pick-up & Drop Included';
      if (!p.hotelCategory) p.hotelCategory = '4-Star Beach Resort';
      if (!p.mealPlan) p.mealPlan = 'Daily Buffet Breakfast & Dinner (MAP)';
      if (!p.transfers) p.transfers = 'Private AC Cab & Makruzz Catamaran';
      if (!p.activities) p.activities = 'Guided Snorkeling & Island Sunset Safari';

      await p.save();
      console.log(`✅ Updated package: ${p.name} (${p.slug}) with ${chosenItinerary.length} days`);
    }

    console.log('All packages updated successfully with rich itinerary data!');
    process.exit(0);
  } catch (err) {
    console.error('Error updating packages:', err);
    process.exit(1);
  }
}

updateAllPackages();
