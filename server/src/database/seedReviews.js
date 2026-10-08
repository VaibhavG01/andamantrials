// server/src/database/seedReviews.js
// ─────────────────────────────────────────────────────────────────────────────
// Seeder for 5 Master Customer Reviews & Testimonials
// Verified Guests • 5-Star Ratings • High-Res Avatars • Destination & Stay & Cruise & Ferry Linkages

import { connectDatabase } from '../config/database.js';
import { Review, Testimonial, User, Destination, Stay, Cruise, Ferry } from '../models/index.js';
import { logger } from '../utils/logger.js';

const reviewsData = [
  {
    reviewerName: "Priya & Rohan Sharma",
    email: "priya.sharma91@gmail.com",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    entityType: "DESTINATION",
    entitySlug: "havelock-island",
    rating: 5,
    title: "Magical Honeymoon Experience — Flawless Logistics & Dreamy Sunset!",
    comment: "Our 6-day honeymoon in Andaman planned through Andaman Trails was pure paradise! The private catamaran ferry tickets were pre-booked seamlessly, and the candlelight beach dinner at Radhanagar Beach was straight out of a fairy tale. 10/10 recommend for couples!",
    // Testimonial matching fields
    tripType: "Honeymoon & Romantic Escape",
    duration: "6 Days / 5 Nights",
    destinations: "Port Blair • Havelock • Neil Island",
    tag: "HONEYMOON COUPLE",
    videoThumbnail: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
  },
  {
    reviewerName: "Dr. Vikram Sengupta",
    email: "dr.vikram.sengupta@kolkatahealth.org",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    entityType: "CRUISE",
    entityName: "Andaman Sunset Sail",
    rating: 5,
    title: "Unforgettable Sunset Cruise & Scuba Experience for the Entire Family",
    comment: "Traveled with our 8-year-old daughter and elderly parents. The sunset cruise in Port Blair harbor had mesmerizing live acoustic music, and the scuba instructors at Nemo Reef were exceptionally patient with first-timers. World-class hospitality!",
    // Testimonial matching fields
    tripType: "Family Leisure Vacation",
    duration: "5 Days / 4 Nights",
    destinations: "Port Blair & Havelock Island",
    tag: "FAMILY VACATION",
    videoThumbnail: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
  },
  {
    reviewerName: "Aditya Verma",
    email: "aditya.verma.tech@gmail.com",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    entityType: "DESTINATION",
    entitySlug: "neil-island",
    rating: 5,
    title: "Bioluminescence Night Kayaking was Absolutely Mindblowing!",
    comment: "Night kayaking through the Havelock mangroves under a canopy of stars with glowing blue bioluminescent plankton is something everyone must do once in their lifetime. Super smooth ferry transfers and scooter rental assistance!",
    // Testimonial matching fields
    tripType: "Adventure & Watersports Group",
    duration: "7 Days / 6 Nights",
    destinations: "Havelock • Neil • Baratang",
    tag: "ADVENTURE SQUAD",
    videoThumbnail: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800&q=80",
  },
  {
    reviewerName: "Meera & Rajesh Nair",
    email: "meera.nair.delhi@outlook.com",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    entityType: "STAY",
    entityName: "Taj Exotica Resort & Spa",
    rating: 5,
    title: "Luxury at its Peak in Radhanagar Beach with 24/7 Concierge",
    comment: "From airport concierge pickup at Port Blair to the private pool villa check-in, everything was ultra-luxurious and punctual. The 24/7 WhatsApp concierge support made us feel completely relaxed and cared for throughout our trip.",
    // Testimonial matching fields
    tripType: "Luxury Beachfront Retreat",
    duration: "5 Days / 4 Nights",
    destinations: "Havelock Island Luxury Villa",
    tag: "LUXURY GETAWAY",
    videoThumbnail: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
  },
  {
    reviewerName: "Karan Malhotra",
    email: "karan.malhotra.pune@gmail.com",
    avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=80",
    entityType: "FERRY",
    entityName: "Nautika Lite",
    rating: 5,
    title: "Fastest & Cleanest Ferry Rides Across the Andaman Sea",
    comment: "As a solo traveler, inter-island logistics can be stressful, but the instant digital ferry passes and punctual departures between Port Blair, Havelock, and Neil Island made my entire journey effortless and comfortable.",
    // Testimonial matching fields
    tripType: "Solo Explorer & Island Hopper",
    duration: "6 Days / 5 Nights",
    destinations: "All Andaman Islands Hopping",
    tag: "SOLO TRAVELER",
    videoThumbnail: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80",
  }
];

const seedReviewsAndTestimonials = async () => {
  try {
    logger.info('Connecting to database for Reviews & Testimonials seeding...');
    await connectDatabase();

    // Fetch Reference Entities
    const destinations = await Destination.findAll();
    const stays = await Stay.findAll();
    const cruises = await Cruise.findAll();
    const ferries = await Ferry.findAll();

    let insertedReviews = 0;
    let insertedTestimonials = 0;

    for (const item of reviewsData) {
      // 1. Ensure User exists
      let [user] = await User.findOrCreate({
        where: { email: item.email },
        defaults: {
          name: item.reviewerName,
          email: item.email,
          avatar: item.avatar,
          role: 'USER',
          password: 'Password123!',
          phone: '+91 98' + Math.floor(10000000 + Math.random() * 90000000),
          status: 'ACTIVE'
        }
      });

      // Update avatar if missing
      if (!user.avatar) {
        await user.update({ avatar: item.avatar, name: item.reviewerName });
      }

      // 2. Resolve Entity ID
      let entityId = 1;
      if (item.entityType === 'DESTINATION') {
        const dest = destinations.find(d => d.slug === item.entitySlug) || destinations[0];
        if (dest) entityId = dest.id;
      } else if (item.entityType === 'STAY') {
        const stay = stays.find(s => s.name.toLowerCase().includes('taj') || s.name.includes(item.entityName)) || stays[0];
        if (stay) entityId = stay.id;
      } else if (item.entityType === 'CRUISE') {
        const cruise = cruises.find(c => c.name.toLowerCase().includes('sunset') || c.name.includes(item.entityName)) || cruises[0];
        if (cruise) entityId = cruise.id;
      } else if (item.entityType === 'FERRY') {
        const ferry = ferries.find(f => f.name.toLowerCase().includes('nautika') || f.name.includes(item.entityName)) || ferries[0];
        if (ferry) entityId = ferry.id;
      }

      // 3. Insert or update Review
      const [review, reviewCreated] = await Review.findOrCreate({
        where: {
          userId: user.id,
          entityType: item.entityType,
          entityId: entityId
        },
        defaults: {
          userId: user.id,
          entityType: item.entityType,
          entityId: entityId,
          rating: item.rating,
          title: item.title,
          comment: item.comment,
          status: 'APPROVED'
        }
      });

      if (reviewCreated) {
        insertedReviews++;
        logger.info(`✓ Seeded Review: [${item.entityType}] "${item.title}" by ${item.reviewerName}`);
      } else {
        await review.update({
          rating: item.rating,
          title: item.title,
          comment: item.comment,
          status: 'APPROVED'
        });
        logger.info(`↻ Updated Review: [${item.entityType}] "${item.title}" by ${item.reviewerName}`);
      }

      // 4. Insert or update Testimonial
      const [testimonial, testCreated] = await Testimonial.findOrCreate({
        where: { name: item.reviewerName },
        defaults: {
          name: item.reviewerName,
          tripType: item.tripType,
          duration: item.duration,
          destinations: item.destinations,
          rating: item.rating,
          quote: item.comment,
          avatar: item.avatar,
          tag: item.tag,
          videoThumbnail: item.videoThumbnail,
          status: 'ACTIVE'
        }
      });

      if (testCreated) {
        insertedTestimonials++;
        logger.info(`✓ Seeded Testimonial for: ${item.reviewerName}`);
      } else {
        await testimonial.update({
          tripType: item.tripType,
          duration: item.duration,
          destinations: item.destinations,
          rating: item.rating,
          quote: item.comment,
          avatar: item.avatar,
          tag: item.tag,
          videoThumbnail: item.videoThumbnail,
          status: 'ACTIVE'
        });
        logger.info(`↻ Updated Testimonial for: ${item.reviewerName}`);
      }
    }

    logger.info(`=======================================================`);
    logger.info(`SUCCESS: Seeded ${insertedReviews} Reviews and ${insertedTestimonials} Testimonials.`);
    logger.info(`Total Reviews in DB: ${await Review.count()}`);
    logger.info(`Total Testimonials in DB: ${await Testimonial.count()}`);
    logger.info(`=======================================================`);

    process.exit(0);
  } catch (error) {
    logger.error(`Error inserting reviews: ${error.message}`);
    console.error(error);
    process.exit(1);
  }
};

seedReviewsAndTestimonials();
