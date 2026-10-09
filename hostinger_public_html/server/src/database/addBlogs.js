// server/src/database/addBlogs.js
// ─────────────────────────────────────────────────────────────────────────────
// Comprehensive 5 Master Andaman Travel Blogs Seeder
// Rich Content • HTML Layouts • PADI Scuba, Honeymoon, 7D Itinerary, Budget & Season Guides

import { connectDatabase } from '../config/database.js';
import { Blog, BlogCategory, User } from '../models/index.js';
import { logger } from '../utils/logger.js';

const blogCategories = [
  { name: 'Adventure & Water Sports', slug: 'adventure-water-sports' },
  { name: 'Travel Guides & Itineraries', slug: 'travel-guides-itineraries' },
  { name: 'Honeymoon & Romance', slug: 'honeymoon-romance' },
  { name: 'Budget & Travel Tips', slug: 'budget-travel-tips' },
  { name: 'Planning & Weather', slug: 'planning-weather' },
];

const masterBlogs = [
  {
    title: "Scuba Diving in Andaman: A Complete Beginner's & PADI Guide (2026)",
    slug: 'scuba-diving-havelock-island-guide',
    categorySlug: 'adventure-water-sports',
    excerpt: "Never dived before? Explore the world under the Andaman Sea. Learn about the top dive sites in Havelock, equipment essentials, breathing drills, and PADI certification steps.",
    readTime: '6 min read',
    coverImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800&q=80'
    ],
    tags: ['Scuba Diving', 'Havelock', 'Water Sports', 'PADI', 'Adventure'],
    metaTitle: "Scuba Diving in Andaman: Beginner to Pro Guide (2026)",
    metaDescription: "Everything you need to know about Scuba Diving in Havelock & Neil Island. Top reef spots, cost breakdown, safety tips, and underwater photography.",
    content: `
      <h2>Why Andaman is India’s Scuba Diving Capital</h2>
      <p>The Andaman & Nicobar archipelago is home to over 1,200 species of marine life, thriving barrier reefs, and pristine 30-meter water clarity. Whether you are a first-time diver seeking an introductory Discover Scuba Diving (DSD) experience or an experienced diver looking for deep pinnacles, Havelock Island (Swaraj Dweep) is the premier hub.</p>

      <h3>Top Diving Spots You Must Experience</h3>
      <ul>
        <li><strong>Nemo Reef (Havelock):</strong> Ideal for non-swimmers and first-timers. Gradual sand slope teeming with clownfish, sea anemones, and blue spotted stingrays.</li>
        <li><strong>Dixon’s Pinnacle:</strong> A towering submerged pinnacles structure surrounded by barracudas, giant trevallies, and Napoleon wrasses.</li>
        <li><strong>Tribe Gate:</strong> Massive underwater coral garden with soft corals, moray eels, and vibrant nudibranchs.</li>
        <li><strong>Johnny’s Gorge:</strong> Famous for reef sharks, manta rays, and dolphins gliding in the currents.</li>
      </ul>

      <h3>Discover Scuba (DSD) vs. PADI Open Water Certification</h3>
      <p>If you have never dived before, a <strong>Discover Scuba Diving (DSD)</strong> session takes just half a day, requires no prior swimming experience, and includes 45 minutes of underwater exploration accompanied 1-on-1 by a certified divemaster. If you wish to dive anywhere in the world up to 18 meters, the <strong>PADI Open Water Course</strong> takes 4 days of pool sessions and 4 open ocean dives.</p>

      <h3>Safety Tips & Best Practices</h3>
      <ol>
        <li>Never hold your breath while ascending or descending.</li>
        <li>Equalize your ears frequently every 1–2 meters.</li>
        <li>Maintain a minimum 18-hour "no-fly" window between your last dive and your departure flight.</li>
        <li>Use reef-safe mineral sunscreen to protect coral ecosystems.</li>
      </ol>
    `.trim(),
    status: 'PUBLISHED'
  },
  {
    title: 'The Ultimate 7-Day Andaman Itinerary: Port Blair to Havelock & Neil',
    slug: 'ultimate-7-day-andaman-itinerary',
    categorySlug: 'travel-guides-itineraries',
    excerpt: "Plan the perfect week in paradise. Our comprehensive day-by-day roadmap covers historical Port Blair, Radhanagar Beach sunsets, Elephant Beach coral treks, and Laxmanpur natural bridges.",
    readTime: '8 min read',
    coverImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80'
    ],
    tags: ['Itinerary', '7 Days', 'Port Blair', 'Havelock', 'Neil Island'],
    metaTitle: "7 Days Andaman Trip Plan: Complete Itinerary & Cost (2026)",
    metaDescription: "Step-by-step 7-day Andaman holiday itinerary covering high-speed ferry transfers, hotel check-ins, water sports, and hidden beaches.",
    content: `
      <h2>The Ideal Week in the Andaman Islands</h2>
      <p>With crystal turquoise waters, dense rainforests, and historic colonial heritage, the Andaman Islands offer a world-class island getaway. This 7-day, 6-night itinerary is optimized to minimize transit friction while showcasing the very best of Port Blair, Swaraj Dweep (Havelock), and Shaheed Dweep (Neil Island).</p>

      <h3>Day-by-Day Journey Breakdown</h3>
      <ul>
        <li><strong>Day 1: Arrival in Port Blair & Cellular Jail Light Show:</strong> Land at Veer Savarkar International Airport, check into your sea-facing hotel, visit the historic Cellular Jail National Memorial, and witness the moving Sound & Light Show.</li>
        <li><strong>Day 2: High-Speed Catamaran to Havelock & Radhanagar Sunset:</strong> Board Nautika or Makruzz ferry to Havelock. Spend your evening at Radhanagar Beach (Asia’s 7th best beach) watching the sun melt into the horizon.</li>
        <li><strong>Day 3: Scuba Diving & Elephant Beach Watersports:</strong> Morning shore/boat scuba diving at Nemo Reef followed by speed boat transfer to Elephant Beach for jet skiing, parasailing, and sea karting.</li>
        <li><strong>Day 4: Kalapathar Beach Sunrise & Transfer to Neil Island:</strong> Early morning drive through jungle roads to Kalapathar beach. Afternoon ferry to serene Neil Island and evening sunset at Laxmanpur Beach.</li>
        <li><strong>Day 5: Natural Rock Formation & Bharatpur Coral Reefs:</strong> Low tide walk to the Natural Bridge (Howrah Bridge). Glass-bottom boat rides and snorkeling at Bharatpur Beach. Return ferry to Port Blair.</li>
        <li><strong>Day 6: Ross Island (Netaji Subhash Chandra Dweep) & Chidiya Tapu:</strong> Explore colonial ruins and wild deer at Ross Island. Drive to Chidiya Tapu in the evening for sunset panoramas and birdwatching.</li>
        <li><strong>Day 7: Local Handicraft Souvenirs & Flight Departure:</strong> Visit Sagarika Government Emporium for pearl jewelry and shell crafts before heading to the airport with lifetime memories.</li>
      </ul>
    `.trim(),
    status: 'PUBLISHED'
  },
  {
    title: 'Top 10 Romantic Experiences in Andaman for Couples & Honeymooners',
    slug: 'romantic-experiences-andaman-honeymoon',
    categorySlug: 'honeymoon-romance',
    excerpt: "Private beachfront candlelight dinners, glowing bioluminescent night kayaking, secluded island catamarans, and luxury villa plunge pools — crafted for unforgettable couples' moments.",
    readTime: '5 min read',
    coverImage: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80'
    ],
    tags: ['Honeymoon', 'Couples', 'Candlelight Dinner', 'Luxury Resorts', 'Bioluminescence'],
    metaTitle: "10 Most Romantic Things to Do in Andaman for Honeymooners",
    metaDescription: "Plan the dream honeymoon in Andaman. Explore private beach dinners, night kayaking in bioluminescence, sunset yacht sails, and luxury beachfront villas.",
    content: `
      <h2>Why Andaman is India’s Premier Honeymoon Island</h2>
      <p>Far away from crowded tourist hotspots, the Andaman archipelago provides secluded powder-white beaches, turquoise lagoons, and intimate luxury. Here are 10 handpicked experiences every couple must enjoy on their romantic getaway.</p>

      <h3>10 Curated Romantic Highlights</h3>
      <ol>
        <li><strong>Bioluminescence Night Kayaking in Havelock:</strong> Paddle quietly through calm mangrove creeks under star-filled skies as blue bioluminescent plankton glows with every stroke.</li>
        <li><strong>Private Beach Candlelight Dinner:</strong> Enjoy a customized 4-course seafood dinner table setup on the sand with tiki torches, fresh flowers, and the soothing sound of gentle waves.</li>
        <li><strong>Sunset Sail on a Private Catamaran:</strong> Sip sparkling mocktails while sailing into the golden hour horizon off Port Blair Harbour.</li>
        <li><strong>Couples Scuba Dive with Underwater Photography:</strong> Hold hands 10 meters deep beneath the sea while certified dive photographers capture high-definition memories.</li>
        <li><strong>Secluded Beach Walks at Kalapathar:</strong> Wake up early to catch the sunrise with turquoise waters framed by dramatic black limestone rocks.</li>
        <li><strong>Luxury Private Pool Villa Stays:</strong> Unwind in private cabanas and plunge pools surrounded by tropical palms.</li>
        <li><strong>Tandem Parasailing Over Coral Reefs:</strong> Soar high together above turquoise waters with a panoramic bird’s-eye view of the coastline.</li>
        <li><strong>Scenic Coastal Drive to Chidiya Tapu:</strong> Rent a private vintage convertible or scooter and ride through lush jungle canopies.</li>
        <li><strong>Sunset Cocktails at Laxmanpur Beach (Neil Island):</strong> Watch multi-colored purple and orange sunsets along expansive white sands.</li>
        <li><strong>Island Spa Therapies:</strong> Indulge in rejuvenating couples' sea-salt and coconut oil Ayurvedic massages.</li>
      </ol>
    `.trim(),
    status: 'PUBLISHED'
  },
  {
    title: 'How to Visit Andaman on a Budget: Full Cost Breakdown & Saving Tips',
    slug: 'andaman-budget-travel-guide-cost-breakdown',
    categorySlug: 'budget-travel-tips',
    excerpt: "Think Andaman is only for luxury budgets? Discover how to explore Port Blair, Havelock, and Neil Island for under ₹18,000 per person with smart ferry choices, local homestays, and scooter rentals.",
    readTime: '7 min read',
    coverImage: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80'
    ],
    tags: ['Budget Travel', 'Backpacking', 'Cost Breakdown', 'Homestays', 'Ferry Tips'],
    metaTitle: "Andaman Budget Trip Guide: ₹18,000 Total Cost Breakdown (2026)",
    metaDescription: "Save money on your Andaman vacation. Complete pricing guide for government ferries, budget beach huts, local food joints, and free attractions.",
    content: `
      <h2>Explore Paradise Without Breaking the Bank</h2>
      <p>While Andaman boasts ultra-luxury 5-star ocean villas, it is also surprisingly accessible for backpackers, solo travelers, and budget families. By making strategic choices with inter-island transit and local stays, you can experience all the major islands affordably.</p>

      <h3>Realistic Budget Breakdown (5 Days / 4 Nights)</h3>
      <table border="1" cellpadding="8" style="border-collapse: collapse; width: 100%; margin: 16px 0; border: 1px solid #cbd5e1;">
        <thead>
          <tr style="background: #f1f5f9; text-align: left;">
            <th>Category</th>
            <th>Budget Option</th>
            <th>Approx Cost (Per Person)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Accommodation</strong></td>
            <td>Eco beach huts & local homestays (₹1,200/night shared)</td>
            <td>₹2,400 (4 nights)</td>
          </tr>
          <tr>
            <td><strong>Inter-Island Transit</strong></td>
            <td>Government DSS ferries or advance promo catamarans</td>
            <td>₹2,200</td>
          </tr>
          <tr>
            <td><strong>Local Commute</strong></td>
            <td>Scooter rental (₹500/day + petrol shared)</td>
            <td>₹1,250</td>
          </tr>
          <tr>
            <td><strong>Food & Dining</strong></td>
            <td>Local thali restaurants & beach seafood shacks</td>
            <td>₹3,500</td>
          </tr>
          <tr>
            <td><strong>Sightseeing & Entry</strong></td>
            <td>Cellular Jail, Radhanagar & Laxmanpur (Free)</td>
            <td>₹600</td>
          </tr>
          <tr>
            <td><strong>Water Activity</strong></td>
            <td>Shore Scuba or Snorkeling at Elephant Beach</td>
            <td>₹3,500</td>
          </tr>
          <tr style="font-weight: bold; background: #f8fafc;">
            <td>Total Estimated Cost</td>
            <td>Complete 5-Day Island Tour</td>
            <td style="color: #F06543;">~₹13,450 to ₹16,000</td>
          </tr>
        </tbody>
      </table>

      <h3>Top Money-Saving Tips</h3>
      <ul>
        <li><strong>Book Flights 60–90 Days Early:</strong> Direct flights from Chennai, Kolkata, and Bengaluru often offer super-saver fares under ₹4,500.</li>
        <li><strong>Rent Scooters in Havelock & Neil:</strong> Cabs charge ₹1,200–₹1,800 per drop, whereas a scooter costs just ₹500 for a full 24 hours of freedom.</li>
        <li><strong>Eat at Local Dhabas:</strong> Try Ananda Restaurant in Port Blair or local Bengali shacks at Neil Island market for fresh, delicious crab, fish curry, and vegetarian thalis at ₹150–₹250.</li>
      </ul>
    `.trim(),
    status: 'PUBLISHED'
  },
  {
    title: 'Best Time to Visit the Andaman Islands: Month-by-Month Weather & Season Guide',
    slug: 'best-time-to-visit-andaman-islands-weather-guide',
    categorySlug: 'planning-weather',
    excerpt: "Monsoon or winter? October or March? Learn all about sea conditions, underwater visibility, festival vibes, flight prices, and cyclone seasons so you pick the perfect month.",
    readTime: '5 min read',
    coverImage: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800&q=80'
    ],
    tags: ['Best Time to Visit', 'Weather', 'Season Guide', 'Water Clarity', 'Travel Tips'],
    metaTitle: "Best Time to Visit Andaman: Month-by-Month Breakdown (2026)",
    metaDescription: "Detailed guide to Andaman weather, water sports seasons, scuba diving clarity, and peak vs off-peak travel months.",
    content: `
      <h2>Understanding the Andaman Tropical Climate</h2>
      <p>Located in the Bay of Bengal, the Andaman & Nicobar Islands experience a warm tropical climate year-round with temperatures hovering pleasantly between 22°C and 31°C. However, ocean currents, rainfall, and underwater clarity vary significantly throughout the year.</p>

      <h3>Season Breakdown</h3>
      <ul>
        <li><strong>Peak Season (October to March):</strong> The absolute best time for all travelers. Calmist seas, 25-30m underwater visibility for scuba diving, gentle sea breeze, and sunny skies. Ideal for water sports, cruise sailing, and beach picnics.</li>
        <li><strong>Shoulder Season (April to May):</strong> Warmer temperatures (up to 32°C) with low humidity and very calm waters. Excellent for coral diving, underwater photography, and travelers seeking great hotel discounts before monsoon.</li>
        <li><strong>Monsoon Season (June to September):</strong> Heavy tropical downpours and choppy seas. While ferries can experience occasional weather delays, the islands turn into an emerald rainforest paradise with dramatic waterfalls, zero crowds, and 40-50% discounted resort rates.</li>
      </ul>

      <h3>Monthly Quick Reference Guide</h3>
      <ul>
        <li><strong>Oct – Nov:</strong> Island Tourism Festival kicks off; fresh greenery with clear skies.</li>
        <li><strong>Dec – Jan:</strong> Peak holiday season, vibrant New Year beach parties, cool evenings (22°C).</li>
        <li><strong>Feb – Mar:</strong> Calmest ocean surface; world-class conditions for game fishing and night kayaking.</li>
        <li><strong>Apr – May:</strong> Warm and sunny; best budget luxury deals.</li>
      </ul>
    `.trim(),
    status: 'PUBLISHED'
  }
];

const seedMasterBlogs = async () => {
  try {
    logger.info('Connecting to database for Master Blogs seeding...');
    await connectDatabase();

    // 1. Seed or find Categories
    const categoryMap = {};
    for (const cat of blogCategories) {
      let [dbCategory] = await BlogCategory.findOrCreate({
        where: { slug: cat.slug },
        defaults: cat
      });
      categoryMap[cat.slug] = dbCategory.id;
    }

    // 2. Resolve Author User
    let adminUser = await User.findOne({ where: { role: 'ADMIN' } });
    if (!adminUser) {
      adminUser = await User.findOne();
    }
    const authorId = adminUser ? adminUser.id : 1;

    // 3. Upsert Blogs
    let insertedCount = 0;
    let updatedCount = 0;

    for (const blogData of masterBlogs) {
      const categoryId = categoryMap[blogData.categorySlug] || Object.values(categoryMap)[0];
      const { categorySlug, ...cleanBlog } = blogData;

      const [blogRecord, created] = await Blog.findOrCreate({
        where: { slug: cleanBlog.slug },
        defaults: {
          ...cleanBlog,
          categoryId,
          authorId,
          publishedAt: new Date(),
        }
      });

      if (created) {
        insertedCount++;
        logger.info(`✓ Inserted new blog: "${cleanBlog.title}"`);
      } else {
        // Update to make sure rich HTML content and images are updated
        await blogRecord.update({
          ...cleanBlog,
          categoryId,
          authorId,
        });
        updatedCount++;
        logger.info(`↻ Updated existing blog: "${cleanBlog.title}"`);
      }
    }

    logger.info(`=======================================================`);
    logger.info(`SUCCESS: Seeded ${insertedCount} new blogs, Updated ${updatedCount} blogs.`);
    logger.info(`Total active blogs in DB: ${await Blog.count()}`);
    logger.info(`=======================================================`);

    process.exit(0);
  } catch (error) {
    logger.error(`Error inserting master blogs: ${error.message}`);
    console.error(error);
    process.exit(1);
  }
};

seedMasterBlogs();
