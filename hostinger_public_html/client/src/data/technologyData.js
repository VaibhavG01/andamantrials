// src/data/technologyData.js
// ─────────────────────────────────────────────────────────────────────────────
// Master technology stack data for Section 10 — Technology We Use (Emoji Free).

export const TECH_CATEGORIES = [
  {
    id: 'frontend',
    title: 'FRONTEND',
    subtitle: 'Interactive UI & 3D Web Graphics',
    items: [
      {
        id: 'react',
        name: 'React.js',
        purpose: 'Interactive UI',
        iconType: 'react',
        accent: '#61dafb',
      },
      {
        id: 'three',
        name: 'Three.js',
        purpose: '3D Experiences',
        iconType: 'cube',
        accent: '#F06543',
      },
      {
        id: 'r3f',
        name: 'React Three Fiber',
        purpose: 'Declarative 3D',
        iconType: 'zap',
        accent: '#00b4d8',
      },
      {
        id: 'gsap',
        name: 'GSAP',
        purpose: 'Cinematic Animations',
        iconType: 'sparkles',
        accent: '#88ce02',
      },
      {
        id: 'tailwind',
        name: 'Tailwind CSS',
        purpose: 'Glassmorphic Styling',
        iconType: 'palette',
        accent: '#38bdf8',
      },
    ],
  },
  {
    id: 'backend',
    title: 'BACKEND',
    subtitle: 'Core Engine & Data Pipelines',
    items: [
      {
        id: 'node',
        name: 'Node.js',
        purpose: 'Backend Infrastructure',
        iconType: 'server',
        accent: '#68a063',
      },
      {
        id: 'express',
        name: 'Express.js',
        purpose: 'RESTful API Server',
        iconType: 'rocket',
        accent: '#e0e0e0',
      },
      {
        id: 'mysql',
        name: 'MySQL',
        purpose: 'Travel Data & Booking Store',
        iconType: 'database',
        accent: '#00758f',
      },
      {
        id: 'rest',
        name: 'REST API',
        purpose: 'Realtime Data Sync',
        iconType: 'refresh',
        accent: '#F06543',
      },
    ],
  },
  {
    id: 'services',
    title: 'SERVICES',
    subtitle: 'Cloud Infrastructure & High-Speed Cache',
    items: [
      {
        id: 'cloudinary',
        name: 'Cloudinary',
        purpose: 'Media & 4K Optimization',
        iconType: 'cloud',
        accent: '#3448c5',
      },
      {
        id: 'aws',
        name: 'AWS S3',
        purpose: 'High Availability Storage',
        iconType: 'archive',
        accent: '#ff9900',
      },
      {
        id: 'redis',
        name: 'Redis',
        purpose: 'High-Speed Ferry Cache',
        iconType: 'zap',
        accent: '#dc382d',
      },
      {
        id: 'jwt',
        name: 'JWT Auth',
        purpose: 'Secure Session Management',
        iconType: 'lock',
        accent: '#d63aff',
      },
    ],
  },
  {
    id: 'ai-experience',
    title: 'AI / EXPERIENCE',
    subtitle: 'Smart Travel Ecosystem Tools',
    items: [
      {
        id: 'ai-planner',
        name: 'AI Trip Planner',
        purpose: 'Personalized Itineraries',
        iconType: 'cpu',
        accent: '#00b4d8',
      },
      {
        id: 'gallery-360',
        name: '360° Gallery',
        purpose: 'Immersive Island Views',
        iconType: 'globe',
        accent: '#F06543',
      },
      {
        id: 'map-3d',
        name: 'Interactive 3D Map',
        purpose: 'Realtime Topography',
        iconType: 'compass',
        accent: '#20b490',
      },
      {
        id: 'ferry-api',
        name: 'Live Ferry API',
        purpose: 'Real-time Seat Engine',
        iconType: 'anchor',
        accent: '#38bdf8',
      },
    ],
  },
];

export const FLOW_STEPS = [
  { id: 'user', label: 'USER', iconType: 'user', desc: 'Traveler Request' },
  { id: 'react', label: 'REACT UI', iconType: 'react', desc: 'Interactive Interface' },
  { id: 'three', label: '3D EXPERIENCE', iconType: 'cube', desc: 'WebGL Island Scene' },
  { id: 'api', label: 'NODE.JS API', iconType: 'rocket', desc: 'Secure Middleware' },
  { id: 'db', label: 'MYSQL', iconType: 'database', desc: 'Travel Database' },
  { id: 'data', label: 'TRAVEL DATA', iconType: 'sparkles', desc: 'Realtime Itinerary' },
];

export const ECOSYSTEM_NODES = [
  { id: 'map', label: '3D MAP', angle: 0, distance: 1.6, iconType: 'compass' },
  { id: 'ai', label: 'AI TRIP PLANNER', angle: 60, distance: 1.6, iconType: 'cpu' },
  { id: 'booking', label: 'BOOKING SYSTEM', angle: 120, distance: 1.6, iconType: 'ticket' },
  { id: 'destinations', label: 'DESTINATIONS', angle: 180, distance: 1.6, iconType: 'pin' },
  { id: 'ferry', label: 'FERRY DATA', angle: 240, distance: 1.6, iconType: 'anchor' },
  { id: 'gallery', label: '360° EXPERIENCES', angle: 300, distance: 1.6, iconType: 'globe' },
];
