import {
  sequelize, User, Destination, Ferry, FerryRoute, FerrySchedule,
  Cruise, CruiseSchedule, Stay, Room, StayAmenity, BlogCategory, Blog,
  Booking, BookingGuest, Inquiry, ContactMessage, Review, FilmChapter, Testimonial,
  Package, Activity, ActivityLocation, ActivitySlot, SlotReservation, Setting,
  MasterCategory, MasterLocation, Itinerary, ItineraryDay, ItineraryActivity, ItineraryMeal, Gallery
} from '../models/index.js';
import { logger } from '../utils/logger.js';
import { connectDatabase } from '../config/database.js';
import { seedUserActivities } from './seedUserActivitiesAndSlots.js';
import { seedMasters } from './seedMasters.js';
import { seedItineraries } from './seedItinerary.js';

const seedPackages = async () => {
  try {
    const packageCount = await Package.count();
    if (packageCount === 0) {
      logger.info('Seeding default tour packages...');
      await Package.bulkCreate([
        {
          slug: 'andaman-escape',
          name: 'Andaman Escape',
          category: 'ALL',
          duration: '5 Nights / 6 Days',
          destinations: 'Port Blair • Havelock • Neil Island',
          bestFor: 'Couples & First-time Visitors',
          description: 'The quintessential Andaman experience. Discover Radhanagar Beach, romantic sunset cruises, glass bottom boats, and historic Cellular Jail.',
          image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85',
          price: 24999.00,
          originalPrice: 29999.00,
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
            '24/7 Tour Concierge Support',
          ],
          itinerary: [
            { day: 1, title: 'Arrival Port Blair & Cellular Jail Light Show' },
            { day: 2, title: 'High-speed Catamaran to Havelock Island' },
            { day: 3, title: 'Elephant Beach Snorkeling & Radhanagar Sunset' },
            { day: 4, title: 'Cruise to Neil Island & Natural Rock Bridge' },
            { day: 5, title: 'Laxmanpur Beach & Return to Port Blair' },
            { day: 6, title: 'Souvenir Shopping & Airport Departure' },
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
          price: 29999.00,
          originalPrice: 34999.00,
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
            'Premium Resort Plunge Pool',
          ],
          itinerary: [
            { day: 1, title: 'Port Blair Welcome & Chidiyatapu Sunset' },
            { day: 2, title: 'Private Ferry to Havelock & Beach Resort' },
            { day: 3, title: 'Couples Diving & Candlelight Dinner' },
            { day: 4, title: 'Neil Island Sunset Walk' },
            { day: 5, title: 'Flight Departure' },
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
          price: 22499.00,
          originalPrice: 26999.00,
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
            'Spacious Interconnected Rooms',
          ],
          itinerary: [
            { day: 1, title: 'Port Blair Arrival & Fisheries Museum' },
            { day: 2, title: 'Ross & North Bay Island Excursion' },
            { day: 3, title: 'Catamaran Ferry to Havelock' },
            { day: 4, title: 'Radhanagar Beach Family Fun' },
            { day: 5, title: 'Port Blair Return & Shopping' },
            { day: 6, title: 'Departure' },
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
          price: 34999.00,
          originalPrice: 39999.00,
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
            'Water Sports Combo Package',
          ],
          itinerary: [
            { day: 1, title: 'Port Blair Arrival' },
            { day: 2, title: 'Baratang Limestone Caves Safari' },
            { day: 3, title: 'Ferry to Havelock & Scuba Dive' },
            { day: 4, title: 'Night Bioluminescent Kayaking' },
            { day: 5, title: 'Neil Island Sea Walk' },
            { day: 6, title: 'Port Blair Jet Skiing' },
            { day: 7, title: 'Departure' },
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
          price: 59999.00,
          originalPrice: 69999.00,
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
            '24/7 Dedicated Butler Concierge',
          ],
          itinerary: [
            { day: 1, title: 'VIP Airport Welcome & Luxury SUV Transfer' },
            { day: 2, title: 'Private Yacht to Taj Exotica Havelock' },
            { day: 3, title: 'Private Beach Spa & Chef Dinner' },
            { day: 4, title: 'Helicopter Island Sightseeing' },
            { day: 5, title: 'Royal Suite Return Port Blair' },
            { day: 6, title: 'VIP Airport Escort' },
          ]
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
          price: 16999.00,
          originalPrice: 19999.00,
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
            'Cellular Jail Tour',
          ],
          itinerary: [
            { day: 1, title: 'Port Blair Arrival & City Tour' },
            { day: 2, title: 'Day Trip to Havelock Radhanagar' },
            { day: 3, title: 'Cellular Jail & Chidiyatapu' },
            { day: 4, title: 'Departure' },
          ]
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
          price: 42999.00,
          originalPrice: 49999.00,
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
            'Cover 6 Major Islands',
          ],
          itinerary: [
            { day: 1, title: 'Port Blair Arrival' },
            { day: 2, title: 'Havelock Island Exploration' },
            { day: 3, title: 'Neil Island Natural Bridge' },
            { day: 4, title: 'Baratang Caves Drive' },
            { day: 5, title: 'Rangat Turtle Nesting Sanctuary' },
            { day: 6, title: 'Diglipur Ross & Smith Sandbar' },
            { day: 7, title: 'Return Port Blair via Convoy' },
            { day: 8, title: 'Departure' },
          ]
        }
      ]);
      logger.info('✅ Successfully seeded 7 packages in DB');
    } else {
      logger.info(`Packages already exist in database (${packageCount} count).`);
    }
  } catch (error) {
    logger.warn(`Failed to seed packages: ${error.message}`);
  }
};

export const seedDatabase = async () => {
  try {
    await connectDatabase();
    logger.info('Starting Andaman Trails database synchronization and master seeding...');
    await sequelize.sync({ force: false });

    // Explicitly ensure critical tables exist
    try {
      await Activity.sync();
      await ActivityLocation.sync();
      await ActivitySlot.sync();
      await SlotReservation.sync();
      await Setting.sync();
      await MasterCategory.sync();
      await MasterLocation.sync();
      await Itinerary.sync();
      await ItineraryDay.sync();
      await ItineraryActivity.sync();
      await ItineraryMeal.sync();
      await Booking.sync();
      await BookingGuest.sync();
      await Gallery.sync();
    } catch (syncTableErr) {
      logger.warn(`Notice during explicit table sync: ${syncTableErr.message}`);
    }

    // Drop conflicting polymorphic bookings_ibfk_5 foreign key constraint in MySQL
    if (sequelize.getDialect() === 'mysql') {
      try {
        await sequelize.query('ALTER TABLE bookings DROP FOREIGN KEY bookings_ibfk_5');
        logger.info('Dropped bookings_ibfk_5 foreign key constraint to support polymorphic scheduleId');
      } catch (err) {
        // Ignore if constraint does not exist
      }
      try {
        await sequelize.query("ALTER TABLE bookings MODIFY COLUMN bookingType ENUM('FERRY', 'CRUISE', 'STAY', 'ACTIVITY', 'PACKAGE') NOT NULL");
        logger.info('Ensured bookingType ENUM supports ACTIVITY and PACKAGE');
      } catch (err) {
        // Ignore
      }
      try {
        await sequelize.query("ALTER TABLE Users MODIFY COLUMN role ENUM('SUPER_ADMIN', 'ADMIN', 'EDITOR', 'RECEPTIONIST', 'USER') NOT NULL DEFAULT 'USER'");
        logger.info('Ensured Users role ENUM supports SUPER_ADMIN, ADMIN, EDITOR, RECEPTIONIST, USER');
      } catch (err) {
        // Ignore
      }
    }

    // Dynamic schema validation & column insertions for bookings, destinations, packages, itineraries, and all models
    try {
      const queryInterface = sequelize.getQueryInterface();
      
      const syncColumns = async (tableName, columns) => {
        try {
          const tableInfo = await queryInterface.describeTable(tableName);
          for (const col of columns) {
            if (!tableInfo[col.name]) {
              try {
                await queryInterface.addColumn(tableName, col.name, {
                  type: col.type,
                  allowNull: true,
                  defaultValue: col.defaultValue !== undefined ? col.defaultValue : null,
                });
                logger.info(`Added missing ${col.name} column to ${tableName} table`);
              } catch (colErr) {
                // column may already exist
              }
            }
          }
        } catch (tableErr) {
          // table might not exist yet
        }
      };

      // Bookings table
      await syncColumns('Bookings', [
        { name: 'activityId', type: sequelize.Sequelize.INTEGER },
        { name: 'activityLocationId', type: sequelize.Sequelize.INTEGER },
        { name: 'slotId', type: sequelize.Sequelize.INTEGER },
        { name: 'packageId', type: sequelize.Sequelize.INTEGER },
        { name: 'scheduleId', type: sequelize.Sequelize.INTEGER },
        { name: 'activityDate', type: sequelize.Sequelize.DATEONLY },
        { name: 'slotStartTime', type: sequelize.Sequelize.STRING },
        { name: 'slotEndTime', type: sequelize.Sequelize.STRING },
        { name: 'adultPrice', type: sequelize.Sequelize.DECIMAL(10, 2) },
        { name: 'childPrice', type: sequelize.Sequelize.DECIMAL(10, 2) },
        { name: 'adultCount', type: sequelize.Sequelize.INTEGER, defaultValue: 1 },
        { name: 'childCount', type: sequelize.Sequelize.INTEGER, defaultValue: 0 },
        { name: 'infantCount', type: sequelize.Sequelize.INTEGER, defaultValue: 0 },
        { name: 'checkInDate', type: sequelize.Sequelize.DATEONLY },
        { name: 'checkOutDate', type: sequelize.Sequelize.DATEONLY },
        { name: 'razorpayOrderId', type: sequelize.Sequelize.STRING },
        { name: 'razorpayPaymentId', type: sequelize.Sequelize.STRING },
        { name: 'razorpaySignature', type: sequelize.Sequelize.STRING },
        { name: 'rescheduledFromBookingId', type: sequelize.Sequelize.INTEGER },
        { name: 'cancelledAt', type: sequelize.Sequelize.DATE },
        { name: 'cancellationReason', type: sequelize.Sequelize.STRING },
        { name: 'specialRequests', type: sequelize.Sequelize.TEXT },
        { name: 'notes', type: sequelize.Sequelize.TEXT },
        { name: 'internalNotes', type: sequelize.Sequelize.TEXT },
      ]);

      // BookingGuests table
      await syncColumns('BookingGuests', [
        { name: 'documentImage', type: sequelize.Sequelize.STRING(255) },
      ]);

      // Destinations table
      await syncColumns('Destinations', [
        { name: 'subtitle', type: sequelize.Sequelize.STRING },
        { name: 'region', type: sequelize.Sequelize.STRING },
        { name: 'tagline', type: sequelize.Sequelize.STRING },
        { name: 'gallery', type: sequelize.Sequelize.JSON },
        { name: 'bestTimeToVisit', type: sequelize.Sequelize.STRING },
        { name: 'howToReach', type: sequelize.Sequelize.TEXT },
        { name: 'idealDuration', type: sequelize.Sequelize.STRING },
        { name: 'weatherInfo', type: sequelize.Sequelize.STRING },
        { name: 'temp', type: sequelize.Sequelize.STRING },
        { name: 'humidity', type: sequelize.Sequelize.STRING },
        { name: 'scubaScore', type: sequelize.Sequelize.STRING },
        { name: 'waterTemp', type: sequelize.Sequelize.STRING },
        { name: 'clarity', type: sequelize.Sequelize.STRING },
        { name: 'rating', type: sequelize.Sequelize.DECIMAL(3, 2), defaultValue: 4.8 },
        { name: 'reviewsCount', type: sequelize.Sequelize.INTEGER, defaultValue: 0 },
        { name: 'startingPrice', type: sequelize.Sequelize.STRING },
        { name: 'highlights', type: sequelize.Sequelize.JSON },
        { name: 'faq', type: sequelize.Sequelize.JSON },
        { name: 'thingsToDo', type: sequelize.Sequelize.JSON },
      ]);

      // Packages table
      await syncColumns('Packages', [
        { name: 'heroImage', type: sequelize.Sequelize.STRING },
        { name: 'gallery', type: sequelize.Sequelize.JSON },
        { name: 'inclusions', type: sequelize.Sequelize.JSON },
        { name: 'exclusions', type: sequelize.Sequelize.JSON },
        { name: 'cancellationPolicy', type: sequelize.Sequelize.TEXT },
        { name: 'pickupDrop', type: sequelize.Sequelize.STRING },
        { name: 'faq', type: sequelize.Sequelize.JSON },
        { name: 'pdfBrochure', type: sequelize.Sequelize.STRING },
      ]);

      // Itineraries table
      await syncColumns('itineraries', [
        { name: 'hero_image', type: sequelize.Sequelize.STRING },
        { name: 'gallery', type: sequelize.Sequelize.JSON },
        { name: 'price', type: sequelize.Sequelize.DECIMAL(10, 2) },
        { name: 'original_price', type: sequelize.Sequelize.DECIMAL(10, 2) },
        { name: 'destinations', type: sequelize.Sequelize.STRING },
        { name: 'theme', type: sequelize.Sequelize.STRING },
        { name: 'highlights', type: sequelize.Sequelize.JSON },
        { name: 'inclusions', type: sequelize.Sequelize.JSON },
        { name: 'exclusions', type: sequelize.Sequelize.JSON },
      ]);

      // Places table
      await syncColumns('Places', [
        { name: 'slug', type: sequelize.Sequelize.STRING },
        { name: 'location', type: sequelize.Sequelize.STRING },
        { name: 'heroImage', type: sequelize.Sequelize.STRING },
        { name: 'gallery', type: sequelize.Sequelize.JSON },
        { name: 'bestTimeToVisit', type: sequelize.Sequelize.STRING },
        { name: 'timings', type: sequelize.Sequelize.STRING },
        { name: 'entryFee', type: sequelize.Sequelize.STRING },
        { name: 'highlights', type: sequelize.Sequelize.JSON },
        { name: 'latitude', type: sequelize.Sequelize.DECIMAL(10, 7) },
        { name: 'longitude', type: sequelize.Sequelize.DECIMAL(10, 7) },
      ]);

      // Blogs table
      await syncColumns('Blogs', [
        { name: 'gallery', type: sequelize.Sequelize.JSON },
        { name: 'readTime', type: sequelize.Sequelize.STRING, defaultValue: '5 min read' },
      ]);

      // Stays table
      await syncColumns('Stays', [
        { name: 'gallery', type: sequelize.Sequelize.JSON },
        { name: 'cancellationPolicy', type: sequelize.Sequelize.TEXT },
      ]);

      // Cruises table
      await syncColumns('Cruises', [
        { name: 'gallery', type: sequelize.Sequelize.JSON },
        { name: 'features', type: sequelize.Sequelize.JSON },
        { name: 'inclusions', type: sequelize.Sequelize.JSON },
        { name: 'exclusions', type: sequelize.Sequelize.JSON },
      ]);

      // Destinations table
      await syncColumns('Destinations', [
        { name: 'stays', type: sequelize.Sequelize.JSON },
        { name: 'packages', type: sequelize.Sequelize.JSON },
      ]);
    } catch (schemaErr) {
      logger.warn(`Failed to inspect/alter table schema: ${schemaErr.message}`);
    }

    // Check if user seed data exists
    const userCount = await User.count();
    if (userCount > 0) {
      // Ensure superadmin user exists
      try {
        await User.findOrCreate({
          where: { email: 'superadmin@andaman-trails.com' },
          defaults: {
            name: 'Super Admin (Owner)',
            email: 'superadmin@andaman-trails.com',
            password: 'superadmin123Password!',
            role: 'SUPER_ADMIN',
            phone: '+919988770000',
          }
        });
        logger.info('Checked/Seeded Super Admin user in existing DB');
      } catch (e) {
        logger.warn(`Failed to seed superadmin: ${e.message}`);
      }

      // Ensure client admin user exists
      try {
        await User.findOrCreate({
          where: { email: 'admin@andaman-trails.com' },
          defaults: {
            name: 'Client Admin',
            email: 'admin@andaman-trails.com',
            password: 'admin123Password!',
            role: 'ADMIN',
            phone: '+919988776655',
          }
        });
        logger.info('Checked/Seeded Client Admin user in existing DB');
      } catch (e) {
        logger.warn(`Failed to seed admin: ${e.message}`);
      }

      // Ensure receptionist user exists
      try {
        await User.findOrCreate({
          where: { email: 'receptionist@andaman-trails.com' },
          defaults: {
            name: 'Frontdesk Receptionist',
            email: 'receptionist@andaman-trails.com',
            password: 'receptionist123Password!',
            role: 'RECEPTIONIST',
            phone: '+919988776633',
          }
        });
        logger.info('Checked/Seeded receptionist user in existing DB');
      } catch (e) {
        logger.warn(`Failed to seed receptionist: ${e.message}`);
      }

      // Ensure rooms and schedules always have high availability for testing
      try {
        await Room.update({ availableRooms: 999 }, { where: {} });
        await CruiseSchedule.update({ availableSeats: 100 }, { where: {} });
        await FerrySchedule.update({ availableSeats: 200 }, { where: {} });
        logger.info('🔄 Auto-replenished test rooms and seats availability to high capacity.');
      } catch (e) {
        logger.warn(`Failed to auto-replenish seats/rooms: ${e.message}`);
      }

      // Ensure all 6 destinations are synced in existing database
      try {
        await Destination.findOrCreate({
          where: { slug: 'port-blair' },
          defaults: {
            name: 'Port Blair',
            slug: 'port-blair',
            shortDescription: 'The historic capital of Andaman with Cellular Jail and serene harbors.',
            description: 'Port Blair serves as the gateway to the Andaman & Nicobar Islands. Rich in history, marine life, and coastal vistas.',
            heroImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
            isFeatured: true,
            latitude: 11.6234,
            longitude: 92.7265,
          }
        });

        await Destination.findOrCreate({
          where: { slug: 'havelock-island' },
          defaults: {
            name: 'Havelock Island (Swaraj Dweep)',
            slug: 'havelock-island',
            shortDescription: 'Home to world-famous Radhanagar Beach and turquoise coral reefs.',
            description: 'Havelock (Swaraj Dweep) is tropical paradise personified. Azure waters, scuba diving, and white sand beaches await.',
            heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
            isFeatured: true,
            latitude: 11.9667,
            longitude: 92.9833,
          }
        });

        await Destination.findOrCreate({
          where: { slug: 'neil-island' },
          defaults: {
            name: 'Neil Island (Shaheed Dweep)',
            slug: 'neil-island',
            shortDescription: 'The vegetable bowl of Andaman with natural rock bridges and quiet shores.',
            description: 'Neil Island (Shaheed Dweep) offers peaceful village life, coral bridge formations at Laxmanpur Beach, and relaxed vibes.',
            heroImage: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80',
            isFeatured: true,
            latitude: 11.8333,
            longitude: 93.0500,
          }
        });

        await Destination.findOrCreate({
          where: { slug: 'baratang-island' },
          defaults: {
            name: 'Baratang Island',
            slug: 'baratang-island',
            shortDescription: 'Famous for limestone caves, mangrove creeks, and mud volcanoes.',
            description: 'Baratang Island offers dense tropical jungle treks, boat rides through mangrove tunnels, and limestone cave exploration.',
            heroImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
            isFeatured: false,
            latitude: 12.1167,
            longitude: 92.7833,
          }
        });

        await Destination.findOrCreate({
          where: { slug: 'diglipur' },
          defaults: {
            name: 'Diglipur',
            slug: 'diglipur',
            shortDescription: 'Pristine eco-tourism hotspot with Saddle Peak and turtle nesting.',
            description: 'Diglipur offers a unique offbeat experience in North Andaman. Climb Saddle Peak, witness turtle nesting at Kalipur, or cross Ross & Smith sandbar.',
            heroImage: 'https://images.unsplash.com/photo-1610014766858-69315bc32b4f?auto=format&fit=crop&w=1200&q=80',
            isFeatured: true,
            latitude: 13.2667,
            longitude: 93.0167,
          }
        });

        await Destination.findOrCreate({
          where: { slug: 'great-nicobar' },
          defaults: {
            name: 'Great Nicobar',
            slug: 'great-nicobar',
            shortDescription: 'Remote biosphere reserve with rare wildlife and Indira Point.',
            description: 'Great Nicobar is the southernmost island of the archipelago, home to Galathea National Park, pristine rain forests, and Indira Point.',
            heroImage: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80',
            isFeatured: false,
            latitude: 7.0000,
            longitude: 93.8000,
          }
        });
        logger.info('🔄 Synced all 6 island destinations in initialized DB.');
      } catch (destErr) {
        logger.warn(`Failed to sync destinations: ${destErr.message}`);
      }

      // Ensure cruises are synced even if already initialized
      const cruiseCount = await Cruise.count();
      if (cruiseCount < 6) {
        logger.info('Cruises data out of sync. Clearing and re-seeding Cruises in initialized DB...');
        await CruiseSchedule.destroy({ where: {} });
        await Cruise.destroy({ where: {} });

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

        const scheduleDate = new Date().toISOString().split('T')[0];
        await CruiseSchedule.create({ cruiseId: cruiseSunset.id, date: scheduleDate, departureTime: '17:00', availableSeats: 40, price: 2500.00, status: 'SCHEDULED' });
        await CruiseSchedule.create({ cruiseId: cruisePrivate.id, date: scheduleDate, departureTime: '09:00 AM', availableSeats: 12, price: 15000.00, status: 'SCHEDULED' });
        await CruiseSchedule.create({ cruiseId: cruiseSightseeing.id, date: scheduleDate, departureTime: '09:00 AM', availableSeats: 30, price: 1800.00, status: 'SCHEDULED' });
        await CruiseSchedule.create({ cruiseId: cruiseCouple.id, date: scheduleDate, departureTime: '16:30', availableSeats: 10, price: 4500.00, status: 'SCHEDULED' });
        await CruiseSchedule.create({ cruiseId: cruiseFamily.id, date: scheduleDate, departureTime: '10:00 AM', availableSeats: 50, price: 1600.00, status: 'SCHEDULED' });
        await CruiseSchedule.create({ cruiseId: cruiseLuxury.id, date: scheduleDate, departureTime: '08:00 AM', availableSeats: 25, price: 8500.00, status: 'SCHEDULED' });

        logger.info('✅ Seeded all 6 Luxury Cruise Charters and Schedules in initialized DB');
      }

      // Ensure ferries are synced even if already initialized
      const ferryCount = await Ferry.count();
      const ferryScheduleCount = await FerrySchedule.count();
      if (ferryCount < 6 || ferryScheduleCount < 6) {
        logger.info('Ferries data out of sync. Clearing and re-seeding Ferries in initialized DB...');
        await FerrySchedule.destroy({ where: {} });
        await FerryRoute.destroy({ where: {} });
        await Ferry.destroy({ where: {} });

        // Retrieve seeded destinations (with support for both 'havelock' and 'havelock-island' slugs)
        const dPB = await Destination.findOne({ where: { slug: 'port-blair' } });
        const dHav = await Destination.findOne({ where: { slug: 'havelock' } }) || await Destination.findOne({ where: { slug: 'havelock-island' } });
        const dNeil = await Destination.findOne({ where: { slug: 'neil-island' } }) || await Destination.findOne({ where: { slug: 'neil' } });

        const f1 = await Ferry.create({ name: 'Nautika Lite', operator: 'Nautika', slug: 'nautika-lite', type: 'CATAMARAN', description: 'Nautika Lite catamaran transit.', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80', capacity: 210, features: ['AC', 'Premium Seats'] });
        const f2 = await Ferry.create({ name: 'Makruzz Gold', operator: 'Makruzz', slug: 'makruzz-gold', type: 'CATAMARAN', description: 'Makruzz Gold premium catamaran.', image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&q=80', capacity: 280, features: ['AC Cabins', 'Snack Bar'] });
        const f3 = await Ferry.create({ name: 'Green Ocean 1', operator: 'Green Ocean', slug: 'green-ocean-1', type: 'STANDARD', description: 'Green Ocean 1 with open deck.', image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800&q=80', capacity: 200, features: ['Open Sun Deck', 'Music'] });
        const f4 = await Ferry.create({ name: 'Nautika Peak', operator: 'Nautika', slug: 'nautika-peak', type: 'HIGH_SPEED', description: 'Nautika Peak high-speed catamaran.', image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=800&q=80', capacity: 210, features: ['AC', 'Reclining Seats'] });
        const f5 = await Ferry.create({ name: 'Makruzz Ocean', operator: 'Makruzz', slug: 'makruzz-ocean', type: 'CATAMARAN', description: 'Makruzz Ocean catamaran.', image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80', capacity: 250, features: ['AC', 'Royal Class Lounge'] });
        const f6 = await Ferry.create({ name: 'ITT Majestic', operator: 'ITT Majestic', slug: 'itt-majestic', type: 'HIGH_SPEED', description: 'ITT Majestic cruise transit.', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80', capacity: 200, features: ['AC', 'Plush Seating'] });

        const r1 = await FerryRoute.create({ ferryId: f1.id, fromDestinationId: dPB.id, toDestinationId: dHav.id, duration: '90 mins' });
        const r2 = await FerryRoute.create({ ferryId: f2.id, fromDestinationId: dPB.id, toDestinationId: dHav.id, duration: '135 mins' });
        const r3 = await FerryRoute.create({ ferryId: f3.id, fromDestinationId: dPB.id, toDestinationId: dNeil.id, duration: '90 mins' });
        const r4 = await FerryRoute.create({ ferryId: f4.id, fromDestinationId: dHav.id, toDestinationId: dNeil.id, duration: '60 mins' });
        const r5 = await FerryRoute.create({ ferryId: f5.id, fromDestinationId: dHav.id, toDestinationId: dPB.id, duration: '90 mins' });
        const r6 = await FerryRoute.create({ ferryId: f6.id, fromDestinationId: dNeil.id, toDestinationId: dPB.id, duration: '90 mins' });

        const travelDateStr = new Date().toISOString().split('T')[0];
        await FerrySchedule.create({ ferryId: f1.id, routeId: r1.id, travelDate: travelDateStr, departureTime: '06:00 AM', arrivalTime: '07:30 AM', availableSeats: 210, price: 1650.00, status: 'SCHEDULED' });
        await FerrySchedule.create({ ferryId: f2.id, routeId: r2.id, travelDate: travelDateStr, departureTime: '08:30 AM', arrivalTime: '10:45 AM', availableSeats: 280, price: 1850.00, status: 'SCHEDULED' });
        await FerrySchedule.create({ ferryId: f3.id, routeId: r3.id, travelDate: travelDateStr, departureTime: '09:00 AM', arrivalTime: '10:30 AM', availableSeats: 200, price: 1400.00, status: 'SCHEDULED' });
        await FerrySchedule.create({ ferryId: f4.id, routeId: r4.id, travelDate: travelDateStr, departureTime: '10:00 AM', arrivalTime: '11:00 AM', availableSeats: 210, price: 1550.00, status: 'SCHEDULED' });
        await FerrySchedule.create({ ferryId: f5.id, routeId: r5.id, travelDate: travelDateStr, departureTime: '02:00 PM', arrivalTime: '03:30 PM', availableSeats: 250, price: 1750.00, status: 'SCHEDULED' });
        await FerrySchedule.create({ ferryId: f6.id, routeId: r6.id, travelDate: travelDateStr, departureTime: '04:00 PM', arrivalTime: '05:30 PM', availableSeats: 200, price: 1500.00, status: 'SCHEDULED' });

        logger.info('✅ Seeded all 6 Ferries, Routes and Schedules in initialized DB');
      }

      // Ensure Film Chapters are seeded
      try {
        const chapterCount = await FilmChapter.count();
        if (chapterCount === 0) {
          await FilmChapter.bulkCreate([
            {
              thumb: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=75',
              videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
              title: 'Aerial Over Havelock',
              type: '4K ULTRA HD',
              description: 'Stunning bird-eye view of Radhanagar Beach coral lagoon.',
            },
            {
              thumb: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=500&q=75',
              videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
              title: 'Coral Reef Scuba Dive',
              type: 'OFFICIAL FILM',
              description: 'Explore Elephant Beach reefs with certified PADI divers.',
            },
            {
              thumb: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=500&q=75',
              videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
              title: 'Bioluminescent Kayaking',
              type: 'NIGHT TOUR',
              description: 'Magical glowing plankton evening kayak through mangroves.',
            },
            {
              thumb: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=500&q=75',
              videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
              title: 'Sunset Cruise Horizons',
              type: 'VIP CHARTER',
              description: 'Sail across Port Blair Bay on a luxury sunset catamaran cruise.',
            },
          ]);
        }
      } catch (err) {
        logger.warn(`Failed to seed film chapters: ${err.message}`);
      }

      // Seed Packages
      await seedPackages();

      // Ensure Activities and Slots exist in initialized DB
      try {
        const activityCount = await Activity.count();
        if (activityCount === 0) {
          logger.info('No activities found in DB. Seeding activities and slots...');
          await seedUserActivities();
        }
      } catch (actErr) {
        logger.warn(`Notice while checking/seeding activities: ${actErr.message}`);
      }

      // Ensure Master Categories exist in initialized DB
      try {
        const masterCatCount = await MasterCategory.count();
        if (masterCatCount === 0) {
          logger.info('No master categories found. Seeding master categories & locations...');
          await seedMasters();
        }
      } catch (mErr) {
        logger.warn(`Notice while checking/seeding masters: ${mErr.message}`);
      }

      // Ensure Itineraries exist in initialized DB
      try {
        const itineraryCount = await Itinerary.count();
        if (itineraryCount === 0) {
          logger.info('No itineraries found. Seeding master itineraries...');
          await seedItineraries();
        }
      } catch (itErr) {
        logger.warn(`Notice while checking/seeding itineraries: ${itErr.message}`);
      }

      logger.info('Database already initialized. Master synchronization completed.');
      return;
    }

    logger.info('=== POPULATING MASTER REAL PRODUCTION DATABASE ===');

    // 1. Seed Users
    const superAdminUser = await User.create({
      name: 'Super Admin (Owner)',
      email: 'superadmin@andaman-trails.com',
      password: 'superadmin123Password!',
      role: 'SUPER_ADMIN',
      phone: '+919988770000',
    });

    const adminUser = await User.create({
      name: 'Client Admin',
      email: 'admin@andaman-trails.com',
      password: 'admin123Password!',
      role: 'ADMIN',
      phone: '+919988776655',
    });

    const editorUser = await User.create({
      name: 'Content Editor',
      email: 'editor@andaman-trails.com',
      password: 'editor123Password!',
      role: 'EDITOR',
      phone: '+919988776644',
    });

    const standardUser = await User.create({
      name: 'Rohan Sharma',
      email: 'traveler@andaman-trails.com',
      password: 'traveler123Password!',
      role: 'USER',
      phone: '+919876543210',
    });

    const receptionistUser = await User.create({
      name: 'Frontdesk Receptionist',
      email: 'receptionist@andaman-trails.com',
      password: 'receptionist123Password!',
      role: 'RECEPTIONIST',
      phone: '+919988776633',
    });

    const user2 = await User.create({
      name: 'Priya Mukherjee',
      email: 'priya@example.com',
      password: 'traveler123Password!',
      role: 'USER',
      phone: '+919811223344',
    });

    logger.info(`Seeded 5 real system users`);

    // 2. Seed Destinations
    const destPortBlair = await Destination.create({
      name: 'Port Blair',
      slug: 'port-blair',
      shortDescription: 'The historic capital of Andaman with Cellular Jail and serene harbors.',
      description: 'Port Blair serves as the gateway to the Andaman & Nicobar Islands. Rich in history, marine life, and coastal vistas.',
      heroImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
      isFeatured: true,
      latitude: 11.6234,
      longitude: 92.7265,
    });

    const destHavelock = await Destination.create({
      name: 'Havelock Island (Swaraj Dweep)',
      slug: 'havelock-island',
      shortDescription: 'Home to world-famous Radhanagar Beach and turquoise coral reefs.',
      description: 'Havelock (Swaraj Dweep) is tropical paradise personified. Azure waters, scuba diving, and white sand beaches await.',
      heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      isFeatured: true,
      latitude: 11.9667,
      longitude: 92.9833,
    });

    const destNeil = await Destination.create({
      name: 'Neil Island (Shaheed Dweep)',
      slug: 'neil-island',
      shortDescription: 'The vegetable bowl of Andaman with natural rock bridges and quiet shores.',
      description: 'Neil Island (Shaheed Dweep) offers peaceful village life, coral bridge formations at Laxmanpur Beach, and relaxed vibes.',
      heroImage: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80',
      isFeatured: true,
      latitude: 11.8333,
      longitude: 93.0500,
    });

    const destBaratang = await Destination.create({
      name: 'Baratang Island',
      slug: 'baratang-island',
      shortDescription: 'Famous for limestone caves, mangrove creeks, and mud volcanoes.',
      description: 'Baratang Island offers dense tropical jungle treks, boat rides through mangrove tunnels, and limestone cave exploration.',
      heroImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
      isFeatured: false,
      latitude: 12.1167,
      longitude: 92.7833,
    });

    const destDiglipur = await Destination.create({
      name: 'Diglipur',
      slug: 'diglipur',
      shortDescription: 'Pristine eco-tourism hotspot with Saddle Peak and turtle nesting.',
      description: 'Diglipur offers a unique offbeat experience in North Andaman. Climb Saddle Peak, witness turtle nesting at Kalipur, or cross Ross & Smith sandbar.',
      heroImage: 'https://images.unsplash.com/photo-1610014766858-69315bc32b4f?auto=format&fit=crop&w=1200&q=80',
      isFeatured: true,
      latitude: 13.2667,
      longitude: 93.0167,
    });

    const destGreatNicobar = await Destination.create({
      name: 'Great Nicobar',
      slug: 'great-nicobar',
      shortDescription: 'Remote biosphere reserve with rare wildlife and Indira Point.',
      description: 'Great Nicobar is the southernmost island of the archipelago, home to Galathea National Park, pristine rain forests, and Indira Point.',
      heroImage: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80',
      isFeatured: false,
      latitude: 7.0000,
      longitude: 93.8000,
    });

    logger.info(`Seeded 6 real island destinations`);

    // 3. Seed Ferries & Schedules
    const ferryMakruzz = await Ferry.create({
      name: 'Makruzz Gold',
      operator: 'Makruzz Lines',
      slug: 'makruzz-gold',
      type: 'CATAMARAN',
      description: 'High-speed premium catamaran featuring luxury reclining seats, ocean view windows, and onboard cafe.',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&q=80',
      capacity: 280,
      features: ['AC Cabins', 'Onboard Snack Bar', 'Reclining Seats', 'Panoramic Windows'],
    });

    const ferryNautika = await Ferry.create({
      name: 'Nautika Lite',
      operator: 'Nautika Sea Trans',
      slug: 'nautika-lite',
      type: 'HIGH_SPEED',
      description: 'Ultra-modern high speed vessel equipped with luxury twin deck seating and smooth stabilization.',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
      capacity: 210,
      features: ['High Speed', 'Royal Class Lounge', 'Ocean View Bar'],
    });

    const routePBtoHavelock = await FerryRoute.create({
      ferryId: ferryMakruzz.id,
      fromDestinationId: destPortBlair.id,
      toDestinationId: destHavelock.id,
      duration: '90 minutes',
    });

    await FerrySchedule.create({
      ferryId: ferryMakruzz.id,
      routeId: routePBtoHavelock.id,
      travelDate: new Date().toISOString().split('T')[0],
      departureTime: '08:00 AM',
      arrivalTime: '09:30 AM',
      availableSeats: 210,
      price: 1650.00,
      status: 'SCHEDULED',
    });

    logger.info(`Seeded Ferries and Schedules`);

    // 4. Seed Cruises (Ensure all 6 mock cruises are seeded)
    const cruiseCount = await Cruise.count();
    if (cruiseCount < 6) {
      logger.info('Cruises data out of sync. Clearing and re-seeding Cruises...');
      await CruiseSchedule.destroy({ where: {} });
      await Cruise.destroy({ where: {} });

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

      const scheduleDate = new Date().toISOString().split('T')[0];
      await CruiseSchedule.create({ cruiseId: cruiseSunset.id, date: scheduleDate, departureTime: '17:00', availableSeats: 40, price: 2500.00, status: 'SCHEDULED' });
      await CruiseSchedule.create({ cruiseId: cruisePrivate.id, date: scheduleDate, departureTime: '09:00 AM', availableSeats: 12, price: 15000.00, status: 'SCHEDULED' });
      await CruiseSchedule.create({ cruiseId: cruiseSightseeing.id, date: scheduleDate, departureTime: '09:00 AM', availableSeats: 30, price: 1800.00, status: 'SCHEDULED' });
      await CruiseSchedule.create({ cruiseId: cruiseCouple.id, date: scheduleDate, departureTime: '16:30', availableSeats: 10, price: 4500.00, status: 'SCHEDULED' });
      await CruiseSchedule.create({ cruiseId: cruiseFamily.id, date: scheduleDate, departureTime: '10:00 AM', availableSeats: 50, price: 1600.00, status: 'SCHEDULED' });
      await CruiseSchedule.create({ cruiseId: cruiseLuxury.id, date: scheduleDate, departureTime: '08:00 AM', availableSeats: 25, price: 8500.00, status: 'SCHEDULED' });

      logger.info(`Seeded all 6 Luxury Cruise Charters and Schedules`);
    }

    // 5. Seed Stays
    const stayTaj = await Stay.create({
      name: 'Taj Exotica Resort & Spa',
      slug: 'taj-exotica-resort-spa',
      type: 'LUXURY_VILLA',
      destinationId: destHavelock.id,
      shortDescription: 'Occupying 46 acres of lush rainforest along Radhanagar Beach, Taj Exotica offers eco-luxury villas with private pools.',
      description: 'Set amidst 46 acres of coconut groves and rainforest on Radhanagar Beach, Taj Exotica Resort & Spa is the pinnacle of luxury hospitality in the Andaman Islands.',
      heroImage: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=85',
      gallery: [
        'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&w=800&q=80',
      ],
      rating: 4.9,
      reviewCount: 128,
      pricePerNight: 32000.00,
      guestCapacity: 4,
      latitude: 11.9833,
      longitude: 92.9500,
      featured: true,
      status: 'ACTIVE',
    });

    await Room.create({
      stayId: stayTaj.id,
      name: 'Grand Deluxe Ocean Villa',
      description: '1580 sq ft luxury villa with private timber deck and garden view.',
      capacity: 4,
      price: 32000.00,
      availableRooms: 5,
      amenities: ['Private Pool', 'Air Conditioning', 'Free Wi-Fi', 'Butler Service'],
      image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80'
    });

    await Room.create({
      stayId: stayTaj.id,
      name: 'Premium Beach Villa',
      description: 'Luxury villa with direct private access to Radhanagar beach deck and high capacity pool.',
      capacity: 4,
      price: 45000.00,
      availableRooms: 3,
      amenities: ['Private Beach Access', 'Private Pool', 'Air Conditioning', 'Free Wi-Fi'],
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80'
    });

    const stayBarefoot = await Stay.create({
      name: 'Barefoot at Havelock',
      slug: 'barefoot-at-havelock',
      type: 'BOUTIQUE_RESORT',
      destinationId: destHavelock.id,
      shortDescription: 'Eco-chic luxury wooden cottages nestled beside Radhanagar Beach.',
      description: 'Set amidst tropical rainforest and steps away from turquoise waters, Barefoot offers unpretentious luxury and a rustic eco-friendly environment.',
      heroImage: 'https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&w=1200&q=85',
      rating: 4.8,
      reviewCount: 94,
      pricePerNight: 18500.00,
      guestCapacity: 3,
      latitude: 11.9700,
      longitude: 92.9800,
      featured: true,
      status: 'ACTIVE',
    });

    await Room.create({
      stayId: stayBarefoot.id,
      name: 'Nicobari Villa Cottage',
      description: 'Handcrafted wooden villa featuring king bed, open-air bathroom, and forest veranda.',
      capacity: 2,
      price: 18500.00,
      availableRooms: 8,
      amenities: ['Air Conditioning', 'Free Wi-Fi', 'Breakfast Included'],
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80'
    });

    await Room.create({
      stayId: stayBarefoot.id,
      name: 'Andaman Villa Wood Cabin',
      description: 'Spacious cottage built in local style with premium teak wood and private backyard terrace.',
      capacity: 3,
      price: 24000.00,
      availableRooms: 4,
      amenities: ['Air Conditioning', 'Free Wi-Fi', 'Hot Tub', 'Breakfast Included'],
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=600&q=80'
    });

    const staySeaShell = await Stay.create({
      name: 'SeaShell Havelock',
      slug: 'seashell-havelock',
      type: 'BEACH_RESORT',
      destinationId: destHavelock.id,
      shortDescription: 'Modern luxury resort overlooking Govind Nagar beach.',
      description: 'Combining premium amenities, seaside dine-out bars and luxury spa treatment on Havelock island.',
      heroImage: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80',
      rating: 4.8,
      reviewCount: 75,
      pricePerNight: 11200.00,
      guestCapacity: 2,
      latitude: 11.9610,
      longitude: 92.9910,
      featured: false,
      status: 'ACTIVE'
    });

    await Room.create({
      stayId: staySeaShell.id,
      name: 'Chalet Lagoon View',
      description: 'Wooden resort chalet with balcony views overlooking the blue ocean lagoon.',
      capacity: 2,
      price: 11200.00,
      availableRooms: 10,
      amenities: ['Ocean View', 'Air Conditioning', 'Free Wi-Fi', 'Mini Bar'],
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80'
    });

    const staySymphony = await Stay.create({
      name: 'Symphony Palms Beach Resort',
      slug: 'symphony-palms-resort',
      type: 'ECO_LODGE',
      destinationId: destHavelock.id,
      shortDescription: 'Unwind amidst palm-fringed private shores and nature walks.',
      description: 'Quiet beachfront cottages located right next to clear waters, perfect for families and couples.',
      heroImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
      rating: 4.6,
      reviewCount: 62,
      pricePerNight: 8900.00,
      guestCapacity: 2,
      latitude: 11.9600,
      longitude: 92.9900,
      featured: false,
      status: 'ACTIVE'
    });

    await Room.create({
      stayId: staySymphony.id,
      name: 'Casa Tropical Cottage',
      description: 'Rustic eco-cottage with tropical garden layout and warm beach vibes.',
      capacity: 2,
      price: 8900.00,
      availableRooms: 12,
      amenities: ['Garden View', 'Air Conditioning', 'Free Wi-Fi'],
      image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80'
    });

    const staySummerSands = await Stay.create({
      name: 'Summer Sands Beach Resort',
      slug: 'summer-sands-resort',
      type: 'BOUTIQUE_RESORT',
      destinationId: destNeil.id,
      shortDescription: 'Elegant oasis featuring expansive swimming pools and chic styling.',
      description: 'Unwind at our stylish boutique beach resort with premium room suites, outdoor pools, and dining options.',
      heroImage: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80',
      rating: 4.7,
      reviewCount: 48,
      pricePerNight: 9500.00,
      guestCapacity: 3,
      latitude: 11.8340,
      longitude: 93.0550,
      featured: false,
      status: 'ACTIVE'
    });

    await Room.create({
      stayId: staySummerSands.id,
      name: 'Casa Del Sol Room',
      description: 'Elegant pool-facing boutique room with deluxe bathroom amenities.',
      capacity: 3,
      price: 9500.00,
      availableRooms: 8,
      amenities: ['Pool Facing', 'Air Conditioning', 'Free Wi-Fi', 'Hot Tub'],
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80'
    });

    const stayMunjoh = await Stay.create({
      name: 'Munjoh Ocean Resort',
      slug: 'munjoh-ocean-resort',
      type: 'LUXURY_VILLA',
      destinationId: destHavelock.id,
      shortDescription: 'Premium ocean-facing villas offering unparalleled solitude.',
      description: 'Tucked away in coco groves and pristine shores, Munjoh offers luxury seaside villas with curated personalized service.',
      heroImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
      rating: 4.8,
      reviewCount: 52,
      pricePerNight: 16500.00,
      guestCapacity: 4,
      latitude: 11.9650,
      longitude: 92.9850,
      featured: true,
      status: 'ACTIVE'
    });

    await Room.create({
      stayId: stayMunjoh.id,
      name: 'Ocean View Villa',
      description: 'Luxury multi-room villa overlooking beach no. 5 with glass walls.',
      capacity: 4,
      price: 16500.00,
      availableRooms: 6,
      amenities: ['Ocean View', 'Air Conditioning', 'Free Wi-Fi', 'Kitchenette'],
      image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80'
    });

    logger.info(`Seeded Stays & Rooms`);

    // 6. Seed Real Bookings
    const todayStr = new Date().toISOString().split('T')[0];
    const yesterdayDate = new Date();
    yesterdayDate.setDate(yesterdayDate.getDate() - 1);
    const yesterdayStr = yesterdayDate.toISOString().split('T')[0];
    
    const tomorrowDate = new Date();
    tomorrowDate.setDate(tomorrowDate.getDate() + 1);
    const tomorrowStr = tomorrowDate.toISOString().split('T')[0];
    
    const dayAfterDate = new Date();
    dayAfterDate.setDate(dayAfterDate.getDate() + 2);
    const dayAfterStr = dayAfterDate.toISOString().split('T')[0];

    const bookingCount = await Booking.count();
    if (bookingCount === 0) {
      await Booking.create({
        bookingNumber: 'AT-STY-2026-000101',
        userId: standardUser.id,
        bookingType: 'STAY',
        stayId: stayTaj.id,
        bookingDate: todayStr,
        checkInDate: todayStr,
        checkOutDate: tomorrowStr,
        totalGuests: 2,
        totalAmount: 32000.00,
        paymentStatus: 'PAID',
        bookingStatus: 'CONFIRMED',
        customerName: 'Rohan Sharma',
        customerEmail: 'traveler@andaman-trails.com',
        customerPhone: '+919876543210',
        notes: 'Ocean view villa requested.',
      });

      await Booking.create({
        bookingNumber: 'AT-STY-2026-000102',
        userId: user2.id,
        bookingType: 'STAY',
        stayId: stayBarefoot.id,
        bookingDate: yesterdayStr,
        checkInDate: yesterdayStr,
        checkOutDate: todayStr,
        totalGuests: 2,
        totalAmount: 18500.00,
        paymentStatus: 'PAID',
        bookingStatus: 'CHECKED_IN',
        customerName: 'Priya Mukherjee',
        customerEmail: 'priya@example.com',
        customerPhone: '+919811223344',
      });

      await Booking.create({
        bookingNumber: 'AT-STY-2026-000103',
        userId: standardUser.id,
        bookingType: 'STAY',
        stayId: stayTaj.id,
        bookingDate: dayAfterStr,
        checkInDate: dayAfterStr,
        checkOutDate: tomorrowStr,
        totalGuests: 3,
        totalAmount: 64000.00,
        paymentStatus: 'PENDING',
        bookingStatus: 'CONFIRMED',
        customerName: 'Amit Verma',
        customerEmail: 'amit.verma@example.com',
        customerPhone: '+919988776611',
      });

      // Seed Ferry Booking
      const ferry = await Ferry.findOne();
      if (ferry) {
        await Booking.create({
          bookingNumber: 'AT-FRY-2026-000104',
          userId: standardUser.id,
          bookingType: 'FERRY',
          ferryId: ferry.id,
          bookingDate: todayStr,
          checkInDate: todayStr,
          totalGuests: 2,
          totalAmount: 3300.00,
          paymentStatus: 'PAID',
          bookingStatus: 'CONFIRMED',
          customerName: 'Rahul Kumar',
          customerEmail: 'rahul.kumar@example.com',
          customerPhone: '+919988001122',
        });
      }

      // Seed Cruise Booking
      const cruise = await Cruise.findOne();
      if (cruise) {
        await Booking.create({
          bookingNumber: 'AT-CRS-2026-000105',
          userId: standardUser.id,
          bookingType: 'CRUISE',
          cruiseId: cruise.id,
          bookingDate: todayStr,
          checkInDate: todayStr,
          totalGuests: 4,
          totalAmount: 10000.00,
          paymentStatus: 'PAID',
          bookingStatus: 'CONFIRMED',
          customerName: 'Sanjay Dutt',
          customerEmail: 'sanjay.dutt@example.com',
          customerPhone: '+919876123456',
        });
      }

      logger.info('Seeded test operational bookings for reception portal');
    }

    // 7. Seed Inquiries & Contacts
    await Inquiry.create({
      name: 'Rohan Sharma',
      email: 'traveler@andaman-trails.com',
      phone: '+91 98765 43210',
      type: 'TRIP_PLANNING',
      message: 'Interested in 5-day island hopping package with Makruzz ferry and scuba diving in Havelock.',
      preferredDate: '2026-09-10',
      status: 'IN_PROGRESS',
    });

    await ContactMessage.create({
      name: 'Priya Mukherjee',
      email: 'priya@example.com',
      subject: 'Honeymoon Scuba Package Customization',
      message: 'Can you customize a 6-day package for October including private candle light dinner on Havelock beach?',
      status: 'UNREAD',
    });

    // 8. Seed Reviews
    await Review.create({
      userId: standardUser.id,
      entityType: 'STAY',
      entityId: stayTaj.id,
      rating: 5,
      title: 'Unmatched Eco Luxury on Radhanagar Beach',
      comment: 'Taj Exotica was breathtaking! Staff was attentive, private villa pool was pristine, and Radhanagar beach sunset was unforgettable.',
      status: 'APPROVED',
    });

    // 9. Seed Blogs
    const blogCat = await BlogCategory.create({
      name: 'Travel Guides',
      slug: 'travel-guides',
    });

    await Blog.create({
      title: 'Ultimate 7-Day Andaman Itinerary: From Port Blair to Havelock',
      slug: 'ultimate-7-day-andaman-itinerary',
      excerpt: 'Discover the perfect week-long island hopping plan featuring coral reefs, sunset sails, and bioluminescence.',
      content: '<p>Planning your first trip to Andaman? Here is the definitive guide to exploring Port Blair, Havelock, and Neil Island seamlessly.</p>',
      coverImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      authorId: adminUser.id,
      categoryId: blogCat.id,
      tags: ['Itinerary', 'Havelock', 'Scuba'],
      status: 'PUBLISHED',
    });

    await Blog.create({
      title: "Scuba Diving in Andaman: A Complete Beginner's Guide",
      slug: 'scuba-beginners',
      excerpt: "Never dived before? No problem. Our PADI-certified instructors walk you through everything — from breathing techniques to the most stunning dive spots.",
      content: '<p>Never dived before? No problem. Andaman Islands offer some of the most crystal-clear coral reefs in the world, perfect for absolute beginners.</p><h3>Best Diving Spots in Havelock</h3><ul><li><strong>Nemo Reef:</strong> Ideal for beginners with shallow waters and rich marine life.</li><li><strong>Tribe Gate:</strong> Features beautiful coral structures and anemone fish.</li><li><strong>Dixon\'s Pinnacle:</strong> A deep dive spot for advanced certificate holders.</li></ul><p>Be sure to listen to your PADI instructor and master equalizing your ears before heading deep!</p>',
      coverImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=900&q=85',
      authorId: adminUser.id,
      categoryId: blogCat.id,
      tags: ['Scuba', 'Adventure', 'Havelock'],
      status: 'PUBLISHED',
    });

    await Blog.create({
      title: '7 Romantic Things to Do in Andaman for Honeymooners',
      slug: 'honeymoon-andaman',
      excerpt: "Sunset cruises, private beach dinners, bioluminescent kayaking at midnight — Andaman is the perfect honeymoon destination you haven't considered yet.",
      content: '<p>Crafting a dream honeymoon? Andaman is India\'s most stunning tropical honeymoon escape.</p><h3>Top Highlights for Couples:</h3><ol><li><strong>Candlelight Beach Dinner:</strong> Under the stars at Swaraj Dweep.</li><li><strong>Bioluminescent Night Kayaking:</strong> Floating amidst glowing blue plankton.</li><li><strong>Private Yacht Charter:</strong> Sailing across the open blue ocean.</li></ol><p>Reserve your premium beach resort stay with Andaman Trails for complementary honeymoon suite decor.</p>',
      coverImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=85',
      authorId: adminUser.id,
      categoryId: blogCat.id,
      tags: ['Honeymoon', 'Romance', 'Luxury'],
      status: 'PUBLISHED',
    });

    await Blog.create({
      title: 'How to Visit Andaman on a Budget: ₹15,000 for 5 Days',
      slug: 'budget-andaman',
      excerpt: "Yes, it is possible. We break down the exact costs for budget ferries, guesthouses, and free beaches so you can explore Andaman without breaking the bank.",
      content: '<p>Think Andaman is only for luxury budgets? Think again. With smart planning, you can explore the islands for under ₹15,000.</p><h3>Budget Travel Tips:</h3><ul><li><strong>Government Ferries:</strong> Choose government DSS boats instead of private luxury catamarans to save up to 60%.</li><li><strong>Local Buses:</strong> Travel in Havelock and Port Blair using public buses and shared auto rickshaws.</li><li><strong>Guesthouses:</strong> Stay in cozy beach huts in Neil Island rather than five-star resorts.</li></ul>',
      coverImage: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=900&q=85',
      authorId: adminUser.id,
      categoryId: blogCat.id,
      tags: ['Budget', 'Backpacking', 'Tips'],
      status: 'PUBLISHED',
    });

    await Blog.create({
      title: 'Best Time to Visit Andaman: Month-by-Month Breakdown',
      slug: 'best-time-visit',
      excerpt: "Monsoon or winter? October or March? We analyse weather, water clarity, crowd levels, and festival seasons so you can pick your perfect travel window.",
      content: '<p>Planning your flight tickets? Choosing the right season is crucial for ocean activities and scuba visibility.</p><h3>Seasons at a Glance:</h3><p><strong>October to May (Peak Season):</strong> Clear skies, gentle breeze, and maximum underwater visibility. Perfect for water sports.</p><p><strong>June to September (Monsoon Season):</strong> High rains and ferry cancellations. Best for nature lovers seeking crowd-free green landscapes.</p>',
      coverImage: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=900&q=85',
      authorId: adminUser.id,
      categoryId: blogCat.id,
      tags: ['Season', 'Weather', 'Guide'],
      status: 'PUBLISHED',
    });

    // Seed Film Chapters
    try {
      const chapterCount = await FilmChapter.count();
      if (chapterCount === 0) {
        await FilmChapter.bulkCreate([
          {
            thumb: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=75',
            videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            title: 'Aerial Over Havelock',
            type: '4K ULTRA HD',
            description: 'Stunning bird-eye view of Radhanagar Beach coral lagoon.',
          },
          {
            thumb: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=500&q=75',
            videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            title: 'Coral Reef Scuba Dive',
            type: 'OFFICIAL FILM',
            description: 'Explore Elephant Beach reefs with certified PADI divers.',
          },
          {
            thumb: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=500&q=75',
            videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            title: 'Bioluminescent Kayaking',
            type: 'NIGHT TOUR',
            description: 'Magical glowing plankton evening kayak through mangroves.',
          },
          {
            thumb: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=500&q=75',
            videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            title: 'Sunset Cruise Horizons',
            type: 'VIP CHARTER',
            description: 'Sail across Port Blair Bay on a luxury sunset catamaran cruise.',
          },
        ]);
        logger.info('Seeded default cinematic film chapters in master DB');
      }
    } catch (err) {
      logger.warn(`Failed to seed film chapters: ${err.message}`);
    }

    // Seed Testimonials (Traveler Stories)
    try {
      const testimonialCount = await Testimonial.count();
      if (testimonialCount === 0) {
        await Testimonial.bulkCreate([
          {
            name: 'Neha & Rohit',
            tripType: 'Honeymoon Special',
            duration: '6 Nights / 7 Days',
            destinations: 'Port Blair • Havelock • Neil Island',
            rating: 5.0,
            quote: 'The trip was beyond amazing! Everything was perfectly planned from catheter transfers to sunset dinners. Havelock Island was an absolute paradise.',
            avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
            videoThumbnail: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1000&q=80',
            videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            videoDuration: '01:24',
            tag: 'HONEYMOON STORY',
            status: 'ACTIVE',
          },
          {
            name: 'Rahul & Priya',
            tripType: 'Family Island Holiday',
            duration: '5 Nights / 6 Days',
            destinations: 'Port Blair • Havelock Island',
            rating: 5.0,
            quote: 'Scuba diving at Elephant Beach was a dream come true for our kids. The 3D interactive map helped us plan every single day seamlessly!',
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
            videoThumbnail: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=80',
            videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            videoDuration: '02:05',
            tag: 'FAMILY EXPEDITION',
            status: 'ACTIVE',
          },
          {
            name: 'Aman Sharma',
            tripType: 'Adventure & Diving',
            duration: '7 Nights / 8 Days',
            destinations: 'Port Blair • Havelock • Baratang',
            rating: 5.0,
            quote: 'Bioluminescent night kayaking and Baratang limestone caves were unreal. Best price guarantee and 24/7 team support throughout!',
            avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
            videoThumbnail: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1000&q=80',
            videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            videoDuration: '01:48',
            tag: 'ADVENTURE STORY',
            status: 'ACTIVE',
          },
        ]);
        logger.info('Seeded default traveler story testimonials in master DB');
      }
    } catch (err) {
      logger.warn(`Failed to seed testimonials: ${err.message}`);
    }

    // Seed Packages, Activities, Masters, and Itineraries
    await seedPackages();
    await seedUserActivities();
    await seedMasters();
    await seedItineraries();

    logger.info('=== MASTER DATABASE SEEDING COMPLETED SUCCESSFULLY ===');
  } catch (error) {
    console.error('DATABASE SEED ERROR:', error);
    logger.error(`Error during database seeding: ${error.message}`);
  }
};

// Execute if run directly
if (process.argv[1].endsWith('seed.js')) {
  seedDatabase().then(() => process.exit(0));
}
