import { Cruise, CruiseSchedule } from '../models/index.js';
import { connectDatabase } from '../config/database.js';
import { logger } from '../utils/logger.js';

const run = async () => {
  try {
    await connectDatabase();
    logger.info('Starting manual sync and seeding for the 6 request Cruise Charters...');

    // Drop existing schedules and cruises
    await CruiseSchedule.destroy({ where: {} });
    await Cruise.destroy({ where: {} });

    // 1. ANDAMAN SUNSET SAIL
    const cruiseSunset = await Cruise.create({
      name: 'Andaman Sunset Sail',
      slug: 'andaman-sunset-sail',
      type: 'SUNSET_SAIL',
      shortDescription: 'Golden hour luxury sailing with live acoustic music and mocktails.',
      description: 'Watch the Andaman horizon transform as the sun disappears into the sea. A timeless experience.',
      heroImage: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
      duration: '2 Hours',
      departurePoint: 'Port Blair Harbour',
      capacity: 40,
      price: 2500.00,
      features: ['Scenic Ocean Views', 'Golden Hour Experience'],
      inclusions: ['Welcome drink', 'Snacks', 'Safety vest'],
      exclusions: ['Personal expenses']
    });

    // 2. PRIVATE OCEAN CHARTER
    const cruisePrivate = await Cruise.create({
      name: 'Private Ocean Charter',
      slug: 'private-ocean-charter',
      type: 'PRIVATE',
      shortDescription: 'Exclusive private yacht charter for groups and events.',
      description: 'Make the ocean your own with a private charter designed entirely around your group.',
      heroImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
      duration: 'Half Day / Full Day',
      departurePoint: 'Port Blair / Havelock',
      capacity: 12,
      price: 15000.00,
      features: ['Exclusive Private Booking', 'Custom Route Options'],
      inclusions: ['Yacht rental', 'Safety gear'],
      exclusions: ['Food & Beverages']
    });

    // 3. HAVELOCK ISLAND SIGHTSEEING
    const cruiseSightseeing = await Cruise.create({
      name: 'Havelock Island Sightseeing',
      slug: 'havelock-island-sightseeing',
      type: 'SIGHTSEEING',
      shortDescription: 'Coastal sightseeing cruise around Havelock Island.',
      description: 'Explore the stunning coastline of Havelock Island from the water — reefs, beaches and more.',
      heroImage: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80',
      duration: '2–4 Hours',
      departurePoint: 'Havelock Island (Swaraj Dweep)',
      capacity: 30,
      price: 1800.00,
      features: ['Coastal Views', 'Coral Reef Spotting'],
      inclusions: ['Cruise ticket', 'Safety vest'],
      exclusions: ['Guides fee']
    });

    // 4. COUPLE ESCAPE CRUISE
    const cruiseCouple = await Cruise.create({
      name: 'Couple Escape Cruise',
      slug: 'couple-escape-cruise',
      type: 'COUPLE',
      shortDescription: 'Romantic private ocean getaway for couples.',
      description: 'A private ocean experience crafted for couples — sunsets, calm seas and unforgettable moments.',
      heroImage: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80',
      duration: '2–3 Hours',
      departurePoint: 'Port Blair / Havelock',
      capacity: 10,
      price: 4500.00,
      features: ['Couple-Focused Romance', 'Golden Hour Sunset Deck'],
      inclusions: ['Mocktails & treats', 'Safety gear'],
      exclusions: ['Candlelight setup fee']
    });

    // 5. FAMILY OCEAN ADVENTURE
    const cruiseFamily = await Cruise.create({
      name: 'Family Ocean Adventure',
      slug: 'family-ocean-adventure',
      type: 'FAMILY',
      shortDescription: 'Family adventure cruise with scenic coastline views.',
      description: 'Take the whole family on a memorable ocean journey around the beautiful Andaman coastline.',
      heroImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
      duration: '2–4 Hours',
      departurePoint: 'Port Blair',
      capacity: 50,
      price: 1600.00,
      features: ['Family-Friendly Deck', 'Child Safety Vests'],
      inclusions: ['Cruise ticket', 'Safety vests', 'Light snacks'],
      exclusions: ['Pick up / Drop off']
    });

    // 6. LUXURY SEA EXPERIENCE
    const cruiseLuxury = await Cruise.create({
      name: 'Luxury Sea Experience',
      slug: 'luxury-sea-experience',
      type: 'LUXURY',
      shortDescription: 'Ultra comfortable luxury cruise expedition.',
      description: 'A premium full-day ocean journey with elevated comfort, exclusive routes and curated service.',
      heroImage: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=1200&q=80',
      duration: 'Full Day',
      departurePoint: 'Port Blair / Havelock',
      capacity: 25,
      price: 8500.00,
      features: ['Luxury AC Lounge', 'Gourmet Dining'],
      inclusions: ['Premium Lounge Access', 'Gourmet Buffet Lunch', 'Snorkeling'],
      exclusions: ['Alcoholic drinks']
    });

    const date = new Date().toISOString().split('T')[0];
    await CruiseSchedule.create({ cruiseId: cruiseSunset.id, date, departureTime: '17:00', availableSeats: 40, price: 2500.00, status: 'SCHEDULED' });
    await CruiseSchedule.create({ cruiseId: cruisePrivate.id, date, departureTime: '09:00 AM', availableSeats: 12, price: 15000.00, status: 'SCHEDULED' });
    await CruiseSchedule.create({ cruiseId: cruiseSightseeing.id, date, departureTime: '09:00 AM', availableSeats: 30, price: 1800.00, status: 'SCHEDULED' });
    await CruiseSchedule.create({ cruiseId: cruiseCouple.id, date, departureTime: '16:30', availableSeats: 10, price: 4500.00, status: 'SCHEDULED' });
    await CruiseSchedule.create({ cruiseId: cruiseFamily.id, date, departureTime: '10:00 AM', availableSeats: 50, price: 1600.00, status: 'SCHEDULED' });
    await CruiseSchedule.create({ cruiseId: cruiseLuxury.id, date, departureTime: '08:00 AM', availableSeats: 25, price: 8500.00, status: 'SCHEDULED' });

    logger.info('✅ Successfully seeded all 6 request Cruise Charters and schedules!');
    process.exit(0);
  } catch (err) {
    logger.error('Failed seeding Cruise Charters:', err);
    process.exit(1);
  }
};

run();
