// src/data/blogData.js
// ─────────────────────────────────────────────────────────────────────────────
// Master Andaman Travel Blog Articles & Content Data

export const BLOG_CATEGORIES = [
  'ALL',
  'TRAVEL GUIDES',
  'DESTINATIONS',
  'ACTIVITIES',
  'FOOD',
  'TRAVEL TIPS',
  'ISLAND STORIES',
  'ADVENTURE',
];

export const BLOG_ARTICLES = [
  {
    id: 'b-1',
    slug: 'ultimate-guide-exploring-andaman',
    title: 'THE ULTIMATE GUIDE TO EXPLORING THE ANDAMAN ISLANDS',
    category: 'TRAVEL GUIDES',
    excerpt: 'Discover the best islands, experiences, pristine beaches, and essential local tips for planning your dream Andaman archipelago adventure.',
    featuredImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85',
    author: {
      name: 'Andaman Trails Editorial',
      role: 'Island Travel Concierge',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      bio: 'Native travel curators & PADI dive specialists dedicated to sharing authentic island journeys across the Bay of Bengal.',
    },
    date: 'AUG 16, 2026',
    readingTime: '10 MIN READ',
    featured: true,
    tags: ['Andaman Guide', 'Havelock', 'Port Blair', 'Travel Tips'],
    destination: 'ALL ISLANDS',
    relatedSlugs: ['10-best-things-to-do-in-havelock', 'best-time-to-visit-andaman', 'ferry-booking-guide-andaman'],
    content: [
      {
        type: 'heading2',
        id: 'intro',
        text: '01 Introduction to the Emerald Islands',
      },
      {
        type: 'paragraph',
        text: 'Floating in isolation across the Bay of Bengal, the Andaman and Nicobar Islands represent one of India’s most pristine tropical frontiers. With over 570 islands fringed by coconut palms, white powder beaches, and electric turquoise reefs, planning an itinerary here is an invitation to unwind into true island rhythm.',
      },
      {
        type: 'callout',
        title: 'PRO TRAVEL TIP',
        text: 'Book your high-speed catamaran ferries between Port Blair, Havelock, and Neil Island at least 3 to 4 weeks in advance during peak season (October to April) to guarantee prime seating.',
      },
      {
        type: 'heading2',
        id: 'best-time',
        text: '02 Best Time To Visit',
      },
      {
        type: 'paragraph',
        text: 'The optimal window for visiting the Andaman Islands extends from October to May, when sea conditions remain calm, skies are clear, and ocean clarity for scuba diving and snorkeling exceeds 20 meters.',
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
        caption: 'Crystal-clear waters at Nemo Reef near Havelock Island.',
      },
      {
        type: 'heading2',
        id: 'best-islands',
        text: '03 Top Islands You Must Visit',
      },
      {
        type: 'paragraph',
        text: 'While the archipelago spans hundreds of islands, three core islands form the classic travel circuit:',
      },
      {
        type: 'list',
        items: [
          'Port Blair (South Andaman): Historical capital featuring Cellular Jail, Corbyn’s Cove, and central catamaran jetties.',
          'Havelock Island (Swaraj Dweep): Renowned worldwide for Radhanagar Beach, Elephant Beach sea walking, and scuba diving.',
          'Neil Island (Shaheed Dweep): Peaceful, slow-paced paradise famous for its Natural Coral Rock Bridge and shallow reefs.',
        ],
      },
      {
        type: 'quote',
        text: '"THE BEST ANDAMAN MEMORIES ARE OFTEN FOUND BEYOND THE ITINERARY."',
        author: 'Andaman Trails',
      },
      {
        type: 'heading2',
        id: 'things-to-do',
        text: '04 Must-Try Experiences',
      },
      {
        type: 'paragraph',
        text: 'Whether you are seeking underwater adrenaline or quiet sunset walks, the islands offer experiences tailored to every travel style. Highlights include scuba diving with PADI certified instructors, kayaking through night bioluminescence in Havelock, and taking a speedboat through dense Baratang mangrove creeks.',
      },
      {
        type: 'heading2',
        id: 'travel-tips',
        text: '05 Essential Travel & Logistics Tips',
      },
      {
        type: 'paragraph',
        text: 'Remember that mobile network coverage varies across islands (BSNL and Airtel perform best). Always carry physical copies of your government photo ID and printed ferry vouchers.',
      },
    ],
  },
  {
    id: 'b-2',
    slug: '10-best-things-to-do-in-havelock',
    title: '10 BEST THINGS TO DO IN HAVELOCK ISLAND (SWARAJ DWEEP)',
    category: 'DESTINATIONS',
    excerpt: 'From watching Radhanagar sunsets to scuba diving at Nemo Reef, here are the absolute top experiences on Swaraj Dweep.',
    featuredImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    author: {
      name: 'Elena Rostova',
      role: 'Experience Specialist',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      bio: 'Specializes in luxury beach resorts and custom island itineraries.',
    },
    date: 'AUG 12, 2026',
    readingTime: '8 MIN READ',
    featured: false,
    tags: ['Havelock', 'Radhanagar', 'Scuba', 'Beaches'],
    destination: 'HAVELOCK',
    relatedSlugs: ['ultimate-guide-exploring-andaman', 'best-time-to-visit-andaman'],
    content: [
      { type: 'heading2', id: 'radhanagar', text: '1. Sunset at Radhanagar Beach (Beach No. 7)' },
      { type: 'paragraph', text: 'Crown Asia’s best beach, Radhanagar captivates with its crescent of white powder sand and glowing crimson sunsets.' },
      { type: 'heading2', id: 'scuba', text: '2. Scuba Diving at Nemo Reef' },
      { type: 'paragraph', text: 'Explore vibrant coral gardens populated by clownfish, sea turtles, and majestic ray species.' },
    ],
  },
  {
    id: 'b-3',
    slug: 'best-time-to-visit-andaman',
    title: 'THE BEST TIME TO VISIT ANDAMAN: MONTH BY MONTH GUIDE',
    category: 'TRAVEL TIPS',
    excerpt: 'Plan your journey according to ocean tides, weather patterns, and peak festival seasons across the archipelago.',
    featuredImage: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80',
    author: {
      name: 'Rajesh Varma',
      role: 'Managing Director',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      bio: 'Port Blair local with 12+ years of marine experience.',
    },
    date: 'AUG 08, 2026',
    readingTime: '6 MIN READ',
    featured: false,
    tags: ['Weather', 'Seasons', 'Travel Tips'],
    destination: 'ALL ISLANDS',
    relatedSlugs: ['ultimate-guide-exploring-andaman', 'ferry-booking-guide-andaman'],
    content: [
      { type: 'heading2', id: 'overview', text: 'Seasonal Weather Patterns' },
      { type: 'paragraph', text: 'October through April offers calm seas, sunshine, and perfect scuba clarity.' },
    ],
  },
  {
    id: 'b-4',
    slug: 'ferry-booking-guide-andaman',
    title: 'COMPLETE FERRY BOOKING GUIDE: NAUTIKA, MAKRUZZ & GOVT FERRIES',
    category: 'TRAVEL TIPS',
    excerpt: 'Everything you need to know about inter-island ferry schedules, baggage limits, timing, and ticket classes.',
    featuredImage: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80',
    author: {
      name: 'Andaman Trails Editorial',
      role: 'Concierge Team',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      bio: 'Ferry logistics dispatch team in Port Blair.',
    },
    date: 'AUG 02, 2026',
    readingTime: '7 MIN READ',
    featured: false,
    tags: ['Ferries', 'Nautika', 'Makruzz', 'Port Blair'],
    destination: 'PORT BLAIR',
    relatedSlugs: ['ultimate-guide-exploring-andaman'],
    content: [
      { type: 'heading2', id: 'ferry-types', text: 'Private Speed Catamarans vs Government Ships' },
      { type: 'paragraph', text: 'Private catamarans offer plush AC seating and fast 90-minute transits between Port Blair and Havelock.' },
    ],
  },
];

export const DESTINATION_STORIES_DATA = [
  { id: 'pb', name: 'PORT BLAIR', count: '12 Stories', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80' },
  { id: 'havelock', name: 'HAVELOCK ISLAND', count: '18 Stories', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80' },
  { id: 'neil', name: 'NEIL ISLAND', count: '9 Stories', image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80' },
  { id: 'baratang', name: 'BARATANG', count: '6 Stories', image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=600&q=80' },
  { id: 'rangat', name: 'RANGAT', count: '4 Stories', image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=600&q=80' },
  { id: 'diglipur', name: 'DIGLIPUR', count: '5 Stories', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80' },
];

export const INSPIRATION_ARTICLES_DATA = [
  {
    id: 'insp-1',
    title: 'THE BEST TIME TO VISIT THE ANDAMAN ARCHIPELAGO',
    desc: 'Seasonal ocean clarity, weather forecasts, and festival timings.',
    readTime: '5 MIN READ',
    slug: 'best-time-to-visit-andaman',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'insp-2',
    title: 'WHAT TO PACK FOR YOUR TROPICAL ISLAND ADVENTURE',
    desc: 'Reef-safe sunscreen, lightweight linen, waterproof pouches, and sea meds.',
    readTime: '4 MIN READ',
    slug: 'ultimate-guide-exploring-andaman',
    image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'insp-3',
    title: 'EXPLORING ANDAMAN ON A SMART TRAVEL BUDGET',
    desc: 'How to combine government ferries, local homestays, and street seafood.',
    readTime: '6 MIN READ',
    slug: '10-best-things-to-do-in-havelock',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80',
  },
];
