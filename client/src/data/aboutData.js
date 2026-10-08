// src/data/aboutData.js
// ─────────────────────────────────────────────────────────────────────────────
// Configurable Brand Story, Timeline, Values, and Mission Data

export const ABOUT_DATA = {
  hero: {
    breadcrumb: 'HOME / ABOUT US',
    headline: "MORE THAN A JOURNEY.\nIT'S AN EXPERIENCE.",
    subtitle: 'We help travelers discover the Andaman Islands through meaningful experiences, thoughtfully planned journeys and unforgettable moments.',
    primaryCta: 'DISCOVER OUR STORY →',
    secondaryCta: 'EXPLORE ANDAMAN →',
  },
  intro: {
    headline: "WE DON'T JUST PLAN TRIPS.\nWE CREATE MEMORIES.",
    body: 'Andaman Trails was created with a simple idea — exploring the Andaman Islands should feel as extraordinary as the destination itself.\n\nFrom the first idea of a trip to the final moment of your journey, we bring destinations, experiences and travel planning together in one seamless experience.',
  },
  timeline: [
    {
      id: 'idea',
      phase: 'THE IDEA',
      title: 'A Vision for Immersive Travel',
      desc: 'A vision to make discovering the Andaman archipelago simpler, more personal and more immersive for travelers around the world.',
      icon: 'Compass',
    },
    {
      id: 'beginning',
      phase: 'THE BEGINNING',
      title: 'Connecting Travelers to Islands',
      desc: 'Andaman Trails begins connecting travelers with handpicked island experiences, private catamarans, and local marine specialists.',
      icon: 'Sparkles',
    },
    {
      id: 'growth',
      phase: 'THE JOURNEY',
      title: 'Expanding Island Coverage',
      desc: 'The platform evolves around personalized day-wise planning, hidden reef discoveries, and luxury beachfront resort partnerships.',
      icon: 'Map',
    },
    {
      id: 'experience',
      phase: 'THE EXPERIENCE',
      title: 'Tech & Travel Fusion',
      desc: 'Technology and local island expertise come together into one seamless real-time booking and interactive 3D route planning experience.',
      icon: 'Globe',
    },
    {
      id: 'future',
      phase: 'THE FUTURE',
      title: 'Smarter Island Exploration',
      desc: 'Building a smarter, eco-responsible, and deeply personal way to explore every corner of the Andaman and Nicobar Islands.',
      icon: 'Target',
    },
  ],
  mission: {
    title: 'OUR MISSION',
    headline: 'MAKE EVERY ANDAMAN JOURNEY FEEL PERSONAL.',
    subtitle: 'We believe travel should not be about following a template. It should be about discovering the places, experiences and moments that matter to you.',
  },
  vision: {
    title: 'OUR VISION',
    headline: 'TO BUILD THE MOST IMMERSIVE WAY TO EXPERIENCE ANDAMAN.',
    subtitle: 'Bringing together travel expertise, technology, personalization, local experiences, and interactive discovery into one seamless platform.',
    cards: [
      { id: 'explore', label: 'EXPLORE', desc: 'Interactive 3D maps and deep island guides', icon: 'Compass' },
      { id: 'plan', label: 'PLAN', desc: 'Custom day-by-day itineraries tailored to your pace', icon: 'Calendar' },
      { id: 'discover', label: 'DISCOVER', desc: 'Uncover secret reefs, quiet beaches, and local food', icon: 'Sparkles' },
      { id: 'experience', label: 'EXPERIENCE', desc: 'PADI dive sessions, private ferries, and beachfront stays', icon: 'Waves' },
      { id: 'remember', label: 'REMEMBER', desc: 'Moments that stay with you long after returning home', icon: 'Heart' },
    ],
  },
  whyUs: [
    {
      id: 'local-knowledge',
      title: 'LOCAL KNOWLEDGE',
      desc: 'Thoughtfully selected destinations and experiences curated by specialists who live in Andaman.',
      icon: 'MapPin',
    },
    {
      id: 'personalized-journeys',
      title: 'PERSONALIZED JOURNEYS',
      desc: 'Trips designed around your unique pace, interests, budget, and travel style.',
      icon: 'Sparkles',
    },
    {
      id: 'seamless-planning',
      title: 'SEAMLESS PLANNING',
      desc: 'Everything from island discovery to catamaran e-tickets and resort bookings in one place.',
      icon: 'CheckCircle2',
    },
    {
      id: 'authentic-experiences',
      title: 'AUTHENTIC EXPERIENCES',
      desc: 'Go beyond the usual tourist checklist to uncover real island culture and pristine reefs.',
      icon: 'Compass',
    },
    {
      id: 'travel-support',
      title: 'TRAVEL SUPPORT',
      desc: 'Dedicated on-ground assistance and WhatsApp dispatch team whenever you need help.',
      icon: 'ShieldCheck',
    },
    {
      id: 'tech-experience',
      title: 'TECHNOLOGY-DRIVEN',
      desc: 'Interactive 3D tools, real-time ferry status, and digital e-vouchers for effortless travel.',
      icon: 'Zap',
    },
  ],
  sustainable: [
    {
      id: 'respect-nature',
      title: 'RESPECT NATURE',
      desc: 'Promoting leave-no-trace beach excursions and protecting fragile island ecosystems.',
      icon: 'Trees',
    },
    {
      id: 'support-local',
      title: 'SUPPORT LOCAL',
      desc: 'Partnering with local island boat captains, homestays, and regional dive instructors.',
      icon: 'Users',
    },
    {
      id: 'reduce-waste',
      title: 'REDUCE WASTE',
      desc: 'Encouraging single-use plastic reduction and eco-friendly travel gear options.',
      icon: 'Recycle',
    },
    {
      id: 'protect-marine',
      title: 'PROTECT MARINE LIFE',
      desc: 'Reef-safe snorkeling and scuba diving guidelines to safeguard Andaman coral reefs.',
      icon: 'Waves',
    },
  ],
  mapHighlights: {
    havelock: {
      name: 'HAVELOCK ISLAND (SWARAJ DWEEP)',
      desc: 'World-famous for Radhanagar Beach sunsets, vibrant Nemo Reef scuba diving, and private beachfront luxury resorts.',
    },
    neil: {
      name: 'NEIL ISLAND (SHAHEED DWEEP)',
      desc: 'A tranquil tropical haven celebrated for the Natural Coral Rock Bridge and shallow crystal-clear snorkeling at Bharatpur.',
    },
    'port-blair': {
      name: 'PORT BLAIR (CAPITAL CITY)',
      desc: 'The heritage entry hub featuring the historical Cellular Jail, Corbyn’s Cove, Chidiya Tapu sunsets, and central ferries.',
    },
    baratang: {
      name: 'BARATANG ISLAND',
      desc: 'An adventurous jungle excursion featuring speedboats through dense mangrove creeks to ancient limestone caves.',
    },
  },
};
