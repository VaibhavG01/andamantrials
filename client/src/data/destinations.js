// src/data/destinations.js
// ─────────────────────────────────────────────────────────────────────────────
// Master Data — Vertical Andaman Chain matching illustrated reference map.
// Positions follow the reference's north-to-south vertical orientation.

export const DESTINATIONS = [
  {
    id: 'diglipur',
    slug: '/destinations/diglipur',
    name: 'Diglipur',
    subtitle: 'North Andaman',
    category: 'NORTH ANDAMAN',
    region: 'North Andaman',
    featured: false,
    description:
      'The northernmost frontier. Base for Saddle Peak — the highest point in Andaman — and the legendary Ross & Smith twin island sandbar.',
    shortDescription: 'Wild landscapes, Saddle Peak trek & Ross & Smith Sandbar.',
    // Vertical chain: top of map
    position: [0.6, 0, -7.0],
    cameraPosition: [2.5, 4.5, -5.0],
    cameraTarget: [0.6, 0, -7.0],
    color: '#20b490',
    badge: 'FRONTIER',
    distance: '325km from Port Blair',
    bestSeason: 'December – February',
    famousFor: 'Ross & Smith Sandbar',
    idealStay: '3 Days',
    image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=85',
    attractions: ['Saddle Peak', 'Ross & Smith Islands', 'Kalipur Beach', 'Alfred Caves'],
    activities: ['Saddle Peak Trek', 'Sandbar Walk', 'Turtle Hatching Tours'],
    scale: 1.1,
    hasAirport: true,
    // Island shape control points (normalized -1 to 1)
    shapePoints: [
      [-0.3, -0.8], [0.2, -0.9], [0.6, -0.6], [0.8, -0.1],
      [0.7, 0.4], [0.3, 0.7], [-0.1, 0.8], [-0.5, 0.5],
      [-0.7, 0.1], [-0.6, -0.4],
    ],
    terrainColors: ['#D7E6E8', '#6BE7E0', '#19CFC2', '#12BFAF', '#35D66F'],
    // Surrounding minor islands
    smallIslands: [
      { offset: [0.8, -1.0], scale: 0.15 },
      { offset: [1.2, -0.5], scale: 0.12 },
      { offset: [-0.6, -1.2], scale: 0.1 },
    ],
  },
  {
    id: 'mayabunder',
    slug: '/destinations/mayabunder',
    name: 'Mayabunder',
    subtitle: 'North-Middle Andaman',
    category: 'NORTH ANDAMAN',
    region: 'North Andaman',
    featured: false,
    description:
      'Scenic mangrove creeks, Karen tribal settlements, and pristine uncrowded beaches like Avis Island.',
    shortDescription: 'Karen tribal heritage, Avis Island & untouched mangroves.',
    position: [0.3, 0, -5.0],
    cameraPosition: [2.2, 4.5, -3.0],
    cameraTarget: [0.3, 0, -5.0],
    color: '#F06543',
    badge: 'HERITAGE',
    distance: '242km from Port Blair',
    bestSeason: 'October – March',
    famousFor: 'Avis Island Beach',
    idealStay: '2 Days',
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=85',
    attractions: ['Avis Island', 'Karmatang Beach', 'Rampur Beach', 'German Jetty'],
    activities: ['Creek Boat Safari', 'Beach Camping', 'Culture Tours'],
    scale: 0.85,
    shapePoints: [
      [-0.4, -0.7], [0.1, -0.8], [0.5, -0.5], [0.6, 0.0],
      [0.4, 0.5], [0.0, 0.7], [-0.4, 0.4], [-0.6, -0.1],
    ],
    terrainColors: ['#D7E6E8', '#6BE7E0', '#19CFC2', '#1EAE5B'],
    smallIslands: [
      { offset: [1.0, 0.2], scale: 0.1 },
      { offset: [0.9, -0.3], scale: 0.08 },
    ],
  },
  {
    id: 'rangat',
    slug: '/destinations/rangat',
    name: 'Rangat',
    subtitle: 'Middle Andaman',
    category: 'MIDDLE ANDAMAN',
    region: 'Middle Andaman',
    featured: false,
    description:
      'Quiet mangrove forests, Cuthbert Bay turtle nesting beach, and a genuine off-the-beaten-path eco-tourism island escape.',
    shortDescription: 'Nature & eco experiences, Cuthbert Bay turtle nesting.',
    position: [0.5, 0, -3.2],
    cameraPosition: [2.4, 4.5, -1.2],
    cameraTarget: [0.5, 0, -3.2],
    color: '#40c4a0',
    badge: 'ECO TOURISM',
    distance: '216km from Port Blair',
    bestSeason: 'October – April',
    famousFor: 'Turtle Nesting Beach',
    idealStay: '2 Days',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85',
    attractions: ['Cuthbert Bay', 'Amkunj Beach', 'Panchavati Waterfall', 'Moricedera'],
    activities: ['Turtle Nesting', 'Mangrove Boardwalk Trek', 'Waterfall Hikes'],
    scale: 0.8,
    shapePoints: [
      [-0.3, -0.6], [0.2, -0.7], [0.5, -0.3], [0.6, 0.2],
      [0.3, 0.6], [-0.1, 0.7], [-0.5, 0.3], [-0.5, -0.2],
    ],
    terrainColors: ['#D7E6E8', '#6BE7E0', '#19CFC2', '#35D66F'],
    smallIslands: [
      { offset: [1.2, 0.0], scale: 0.12 },
    ],
  },
  {
    id: 'long-island',
    slug: '/destinations/long-island',
    name: 'Long Island',
    subtitle: 'Middle Andaman',
    category: 'MIDDLE ANDAMAN',
    region: 'Middle Andaman',
    featured: false,
    description:
      'A hidden gem with pristine Lalaji Bay beach, lush tropical forests and peaceful solitude away from tourist crowds.',
    shortDescription: 'Lalaji Bay beach, jungle trails & untouched serenity.',
    position: [1.6, 0, -2.2],
    cameraPosition: [3.5, 4.5, -0.2],
    cameraTarget: [1.6, 0, -2.2],
    color: '#19CFC2',
    badge: 'HIDDEN GEM',
    distance: '180km from Port Blair',
    bestSeason: 'October – April',
    famousFor: 'Lalaji Bay',
    idealStay: '1 – 2 Days',
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=85',
    attractions: ['Lalaji Bay', 'Guitar Island', 'Merk Bay', 'North Passage Island'],
    activities: ['Beach Camping', 'Snorkeling', 'Jungle Trekking'],
    scale: 0.7,
    shapePoints: [
      [-0.3, -0.5], [0.2, -0.6], [0.4, -0.2], [0.5, 0.3],
      [0.2, 0.5], [-0.2, 0.4], [-0.4, 0.0],
    ],
    terrainColors: ['#D7E6E8', '#6BE7E0', '#19CFC2'],
    smallIslands: [],
  },
  {
    id: 'baratang',
    slug: '/destinations/baratang',
    name: 'Baratang',
    subtitle: 'Middle Andaman',
    category: 'MIDDLE ANDAMAN',
    region: 'Middle Andaman',
    featured: false,
    description:
      'A hidden wonder of rare ancient limestone caves, active mud volcanoes, and dense mangrove channels navigable only by speedboats.',
    shortDescription: 'Caves, mud volcanoes & dense mangrove creek safaris.',
    position: [-0.5, 0, -1.5],
    cameraPosition: [1.4, 4.5, 0.5],
    cameraTarget: [-0.5, 0, -1.5],
    color: '#60d4a0',
    badge: 'ADVENTURE',
    distance: '100km from Port Blair',
    bestSeason: 'November – March',
    famousFor: 'Limestone Caves',
    idealStay: '1 – 2 Days',
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=85',
    attractions: ['Limestone Caves', 'Mud Volcano', 'Parrot Island', 'Mangrove Creek'],
    activities: ['Cave Exploration', 'Mangrove Boat Safari', 'Bird Watching'],
    scale: 0.9,
    shapePoints: [
      [-0.4, -0.7], [0.1, -0.8], [0.5, -0.4], [0.6, 0.1],
      [0.5, 0.5], [0.1, 0.8], [-0.3, 0.6], [-0.6, 0.2],
      [-0.6, -0.3],
    ],
    terrainColors: ['#D7E6E8', '#6BE7E0', '#19CFC2', '#12BFAF'],
    smallIslands: [
      { offset: [1.0, 0.5], scale: 0.08 },
      { offset: [-0.8, 0.6], scale: 0.1 },
    ],
  },
  {
    id: 'port-blair',
    slug: '/destinations/port-blair',
    name: 'Port Blair',
    subtitle: 'South Andaman',
    category: 'SOUTH ANDAMAN',
    region: 'South Andaman',
    featured: false,
    description:
      'The vibrant capital of the Andaman Islands, blending rich colonial history with natural coastal beauty. Gateway to the entire island archipelago.',
    shortDescription: 'Gateway to the islands, historical Cellular Jail & Ross Island.',
    position: [-0.3, 0, 0.8],
    cameraPosition: [1.6, 4.5, 2.8],
    cameraTarget: [-0.3, 0, 0.8],
    color: '#F06543',
    badge: 'CAPITAL',
    distance: 'Gateway City',
    bestSeason: 'October – May',
    famousFor: 'Cellular Jail Heritage',
    idealStay: '2 – 3 Days',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=85',
    attractions: ['Cellular Jail', 'Ross Island', 'Corbyn\'s Cove', 'Lighthouse Reef'],
    activities: ['Historical Tour', 'Museums', 'Light & Sound Show', 'Boat Safaris'],
    scale: 1.4,
    hasLighthouse: true,
    hasAirport: true,
    shapePoints: [
      [-0.5, -0.8], [0.0, -0.9], [0.5, -0.7], [0.7, -0.2],
      [0.8, 0.3], [0.5, 0.7], [0.1, 0.9], [-0.3, 0.7],
      [-0.6, 0.3], [-0.7, -0.2], [-0.6, -0.5],
    ],
    terrainColors: ['#D7E6E8', '#6BE7E0', '#19CFC2', '#12BFAF', '#35D66F', '#1EAE5B'],
    smallIslands: [
      { offset: [1.2, 0.8], scale: 0.12 },
      { offset: [1.5, 0.3], scale: 0.08 },
      { offset: [-1.0, 0.5], scale: 0.1 },
      { offset: [-0.8, 1.2], scale: 0.15 },
      { offset: [0.5, 1.5], scale: 0.06 },
    ],
  },
  {
    id: 'havelock',
    slug: '/destinations/havelock',
    name: 'Havelock Island',
    subtitle: 'Swaraj Dweep',
    category: 'ISLAND ESCAPES',
    region: 'South Andaman',
    featured: true,
    description:
      'A tropical paradise known for pristine beaches, crystal-clear turquoise waters and unforgettable underwater adventures. Home to the world-famous Radhanagar Beach.',
    shortDescription: 'World-class beaches, bioluminescent kayaking & PADI scuba diving.',
    position: [2.8, 0, -0.8],
    cameraPosition: [4.7, 4.5, 1.2],
    cameraTarget: [2.8, 0, -0.8],
    color: '#00b4d8',
    badge: 'MOST POPULAR',
    distance: '54km from Port Blair',
    bestSeason: 'October – May',
    famousFor: 'Radhanagar Beach',
    idealStay: '3 – 4 Days',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85',
    attractions: ['Radhanagar Beach', 'Elephant Beach', 'Kalapathar Beach', 'Havelock Reef'],
    activities: ['Scuba Diving', 'Snorkeling', 'Beach Escapes', 'Honeymoon', 'Nature'],
    scale: 1.15,
    shapePoints: [
      [-0.6, -0.6], [-0.1, -0.8], [0.4, -0.7], [0.7, -0.3],
      [0.8, 0.2], [0.5, 0.6], [0.1, 0.8], [-0.4, 0.5],
      [-0.7, 0.1], [-0.7, -0.3],
    ],
    terrainColors: ['#D7E6E8', '#6BE7E0', '#19CFC2', '#12BFAF', '#35D66F'],
    smallIslands: [
      { offset: [-0.8, -0.4], scale: 0.1 },
      { offset: [0.9, 0.5], scale: 0.08 },
    ],
  },
  {
    id: 'neil',
    slug: '/destinations/neil-island',
    name: 'Neil Island',
    subtitle: 'Shaheed Dweep',
    category: 'ISLAND ESCAPES',
    region: 'South Andaman',
    featured: false,
    description:
      'The tranquil vegetable bowl of the Andamans. Crystal shallow waters, the iconic Natural Rock Bridge, and a slow, soulful pace of island life.',
    shortDescription: 'Peaceful island escape, Natural Rock Bridge & serene sunsets.',
    position: [2.2, 0, 0.6],
    cameraPosition: [4.1, 4.5, 2.6],
    cameraTarget: [2.2, 0, 0.6],
    color: '#80d4a0',
    badge: 'SERENE',
    distance: '37km from Port Blair',
    bestSeason: 'October – April',
    famousFor: 'Natural Rock Bridge',
    idealStay: '2 Days',
    image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=85',
    attractions: ['Natural Bridge', 'Bharatpur Beach', 'Laxmanpur Beach', 'Sitapur Beach'],
    activities: ['Snorkeling', 'Cycling', 'Sunset Walks', 'Glass Bottom Boat'],
    scale: 0.75,
    shapePoints: [
      [-0.5, -0.5], [0.1, -0.6], [0.5, -0.3], [0.5, 0.2],
      [0.2, 0.5], [-0.3, 0.4], [-0.5, 0.0],
    ],
    terrainColors: ['#D7E6E8', '#6BE7E0', '#19CFC2'],
    smallIslands: [
      { offset: [0.6, -0.5], scale: 0.06 },
    ],
  },
  {
    id: 'barren-island',
    slug: '/destinations/barren-island',
    name: 'Barren Island',
    subtitle: 'Volcanic Island',
    category: 'ISLAND ESCAPES',
    region: 'East Andaman',
    featured: false,
    description:
      'India\'s only active volcano, rising dramatically from the Andaman Sea. A spectacular geological wonder visible from afar.',
    shortDescription: 'India\'s only active volcano — a geological marvel.',
    position: [6.0, 0, -1.5],
    cameraPosition: [7.8, 4.5, 0.5],
    cameraTarget: [6.0, 0, -1.5],
    color: '#35D66F',
    badge: 'VOLCANIC',
    distance: '138km from Port Blair',
    bestSeason: 'January – March',
    famousFor: 'Active Volcano',
    idealStay: 'Day Trip',
    image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=85',
    attractions: ['Active Volcano Crater', 'Volcanic Beach', 'Marine Life'],
    activities: ['Volcanic Sightseeing', 'Deep Sea Diving', 'Photography'],
    scale: 0.6,
    isVolcanic: true,
    shapePoints: [
      [-0.4, -0.5], [0.2, -0.6], [0.5, -0.2], [0.4, 0.3],
      [0.0, 0.5], [-0.4, 0.3], [-0.5, -0.1],
    ],
    terrainColors: ['#D7E6E8', '#6BE7E0', '#35D66F'],
    smallIslands: [],
  },
];

// Little Andaman (decorative, non-interactive)
export const DECORATIVE_ISLANDS = [
  {
    id: 'little-andaman',
    name: 'Little Andaman',
    position: [-2.5, 0, 4.5],
    scale: 0.9,
    shapePoints: [
      [-0.4, -0.6], [0.1, -0.7], [0.5, -0.4], [0.6, 0.1],
      [0.4, 0.5], [0.0, 0.7], [-0.4, 0.4], [-0.6, -0.1],
    ],
    terrainColors: ['#D7E6E8', '#6BE7E0', '#19CFC2', '#35D66F'],
    smallIslands: [
      { offset: [0.8, -0.5], scale: 0.08 },
      { offset: [-0.5, -0.8], scale: 0.06 },
      { offset: [0.3, 0.8], scale: 0.1 },
    ],
  },
];

// Scattered extra tiny islands (for atmosphere, matching reference)
export const SCATTER_ISLANDS = [
  // Near Port Blair cluster
  { position: [-1.8, 0, 1.8], scale: 0.12 },
  { position: [-1.2, 0, 2.2], scale: 0.08 },
  { position: [0.5, 0, 2.0], scale: 0.06 },
  { position: [-0.8, 0, 2.5], scale: 0.1 },
  // Between Baratang and main chain
  { position: [0.8, 0, -0.8], scale: 0.07 },
  { position: [1.2, 0, -1.2], scale: 0.05 },
  // Near Rangat
  { position: [1.4, 0, -3.5], scale: 0.06 },
  // Near Mayabunder
  { position: [1.1, 0, -4.8], scale: 0.08 },
  { position: [1.4, 0, -5.3], scale: 0.05 },
  // Near Diglipur
  { position: [1.5, 0, -7.5], scale: 0.07 },
  { position: [-0.4, 0, -7.8], scale: 0.06 },
  // Between Havelock and Neil
  { position: [3.2, 0, 0.0], scale: 0.05 },
  { position: [1.8, 0, -0.2], scale: 0.04 },
  // Far southwest
  { position: [-2.0, 0, 3.2], scale: 0.08 },
  { position: [-1.5, 0, 3.8], scale: 0.06 },
  // Between Port Blair and Barren Island
  { position: [3.8, 0, -0.5], scale: 0.04 },
  { position: [4.5, 0, -1.0], scale: 0.05 },
];

export const FILTER_OPTIONS = [
  { id: 'ALL', label: 'ALL' },
  { id: 'SOUTH ANDAMAN', label: 'SOUTH ANDAMAN' },
  { id: 'MIDDLE ANDAMAN', label: 'MIDDLE ANDAMAN' },
  { id: 'NORTH ANDAMAN', label: 'NORTH ANDAMAN' },
  { id: 'ISLAND ESCAPES', label: 'ISLAND ESCAPES' },
];

export const ROUTES = [
  { from: 'port-blair', to: 'neil', label: 'Port Blair → Neil Island', type: 'ferry' },
  { from: 'neil', to: 'havelock', label: 'Neil → Havelock Island', type: 'ferry' },
  { from: 'port-blair', to: 'baratang', label: 'Port Blair → Baratang', type: 'ferry' },
  { from: 'baratang', to: 'rangat', label: 'Baratang → Rangat', type: 'ferry' },
  { from: 'rangat', to: 'mayabunder', label: 'Rangat → Mayabunder', type: 'ferry' },
  { from: 'mayabunder', to: 'diglipur', label: 'Mayabunder → Diglipur', type: 'ferry' },
  { from: 'port-blair', to: 'havelock', label: 'Port Blair → Havelock', type: 'ferry' },
];

// Outer dotted travel route loop (matching reference image)
export const OUTER_ROUTE_LOOP = [
  [2.0, 0.05, -8.5],   // North of Diglipur
  [3.5, 0.05, -7.0],   // NE
  [4.5, 0.05, -4.5],   // East of chain
  [4.8, 0.05, -2.0],   // East mid
  [5.0, 0.05, 0.0],    // East of Havelock
  [7.5, 0.05, -1.0],   // Toward Barren Island
  [7.5, 0.05, -2.0],   // Past Barren
  [5.5, 0.05, -3.0],   // Loop back
  [4.0, 0.05, 1.5],    // SE of Neil
  [2.5, 0.05, 2.8],    // South
  [0.0, 0.05, 3.5],    // SW
  [-2.0, 0.05, 4.0],   // Toward Little Andaman
  [-3.5, 0.05, 5.5],   // SW of Little Andaman
  [-3.5, 0.05, 3.5],   // West
  [-2.5, 0.05, 1.5],   // West of Port Blair
  [-2.0, 0.05, -0.5],  // West mid
  [-1.5, 0.05, -3.0],  // West of chain
  [-1.0, 0.05, -5.5],  // NW
  [-0.5, 0.05, -7.5],  // NW of Diglipur
  [0.5, 0.05, -8.5],   // Close loop toward start
];

export const NAV_ITEMS = ['Packages', 'Destinations', 'Activities', 'Cruise', 'Blogs', 'About Us', 'Contact Us'];

export const OVERVIEW_STATS = [
  { icon: '🏝️', value: '8 Major Islands' },
  { icon: '⭐', value: '572+ Attractions' },
  { icon: '🤿', value: '50+ Activities' },
  { icon: '💖', value: 'Endless Memories' },
];
