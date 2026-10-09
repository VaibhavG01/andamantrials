// src/data/mapConfig.js
// ─────────────────────────────────────────────────────────────────────────────
// Real map configuration — Maplibre GL styles, Andaman geo-coordinates,
// route GeoJSON, destination markers with real lat/lng.

export const ANDAMAN_CENTER = [92.9, 11.7]; // [lng, lat]
export const ANDAMAN_BOUNDS = [
  [92.0, 6.5],   // SW [lng, lat]
  [94.0, 14.0],  // NE
];

// ── Maplibre style definitions
export const MAP_STYLES = {
  satellite: {
    id: 'satellite',
    label: 'Satellite',
    icon: '🛰',
    style: {
      version: 8,
      sources: {
        esri_sat: {
          type: 'raster',
          tiles: [
            'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
          ],
          tileSize: 256,
          attribution: '© Esri, Maxar, Earthstar Geographics',
          maxzoom: 19,
        },
        osm_labels: {
          type: 'raster',
          tiles: [
            'https://stamen-tiles-a.a.ssl.fastly.net/toner-labels/{z}/{x}/{y}.png',
          ],
          tileSize: 256,
          attribution: 'Map tiles by Stamen Design',
          maxzoom: 18,
        },
      },
      layers: [
        {
          id: 'satellite-layer',
          type: 'raster',
          source: 'esri_sat',
          minzoom: 0,
          maxzoom: 22,
          paint: { 'raster-saturation': 0.1, 'raster-brightness-min': 0.06 },
        },
      ],
    },
  },

  dark: {
    id: 'dark',
    label: 'Dark Ocean',
    icon: '🌊',
    style: 'https://tiles.openfreemap.org/styles/dark',
  },

  terrain: {
    id: 'terrain',
    label: 'Terrain',
    icon: '🏔',
    style: {
      version: 8,
      sources: {
        osm: {
          type: 'raster',
          tiles: ['https://a.tile.openstreetmap.org/{z}/{x}/{y}.png'],
          tileSize: 256,
          attribution: '© OpenStreetMap contributors',
        },
      },
      layers: [
        {
          id: 'osm',
          type: 'raster',
          source: 'osm',
          paint: {
            'raster-saturation': -0.5,
            'raster-brightness-min': 0.04,
            'raster-brightness-max': 0.7,
          },
        },
      ],
    },
  },
};

// ── Real Andaman destinations with actual lat/lng
export const MAP_DESTINATIONS = [
  {
    id: 'port-blair',
    name: 'Port Blair',
    subtitle: 'The Capital Gateway',
    lngLat: [92.7265, 11.6234],
    zoom: 11,
    badge: 'CAPITAL',
    color: '#F06543',
    description: 'The capital and main entry point to the Andaman Islands, home to the historic Cellular Jail.',
    activities: ['Historical Tour', 'Scuba Diving', 'Boat Tours', 'Museums'],
    distance: '1,255 km from Chennai',
  },
  {
    id: 'havelock',
    name: 'Havelock Island',
    subtitle: 'Radhanagar Beach Paradise',
    lngLat: [93.0167, 12.0297],
    zoom: 12,
    badge: 'MOST POPULAR',
    color: '#00b4d8',
    description: 'Home to Asia\'s best beach — Radhanagar. Crystal-clear water and world-class diving.',
    activities: ['Scuba Diving', 'Snorkelling', 'Beach Walks', 'Kayaking'],
    distance: '57 km from Port Blair',
  },
  {
    id: 'neil',
    name: 'Neil Island',
    subtitle: 'Vegetable Bowl of Andamans',
    lngLat: [93.0487, 11.8297],
    zoom: 12.5,
    badge: 'SERENE',
    color: '#80d4a0',
    description: 'A quiet paradise with lush farms, natural rock formations, and pristine beaches.',
    activities: ['Snorkelling', 'Beach Walks', 'Cycling', 'Photography'],
    distance: '37 km from Port Blair',
  },
  {
    id: 'baratang',
    name: 'Baratang Island',
    subtitle: 'Limestone Caves & Mangroves',
    lngLat: [92.7581, 12.2128],
    zoom: 11.5,
    badge: 'ADVENTURE',
    color: '#f0c060',
    description: 'Famous for limestone caves, mud volcanoes, and dense mangrove forests.',
    activities: ['Cave Exploration', 'Mangrove Safari', 'Boat Tours'],
    distance: '100 km from Port Blair',
  },
  {
    id: 'diglipur',
    name: 'Diglipur',
    subtitle: 'North Andaman Adventure Hub',
    lngLat: [92.9731, 13.2706],
    zoom: 11,
    badge: 'REMOTE',
    color: '#c060f0',
    description: 'Andaman\'s northernmost hub with the famous Saddle Peak and Ross & Smith Islands.',
    activities: ['Trekking', 'Turtle Watching', 'Beach Camping', 'Fishing'],
    distance: '320 km from Port Blair',
  },
  {
    id: 'little-andaman',
    name: 'Little Andaman',
    subtitle: 'Surfer\'s Paradise',
    lngLat: [92.5781, 10.7297],
    zoom: 11.5,
    badge: 'SURF',
    color: '#60c0f0',
    description: 'Renowned for its surf breaks, waterfalls, and the pristine Butler Bay beach.',
    activities: ['Surfing', 'Waterfall Trek', 'Fishing', 'Eco Tourism'],
    distance: '120 km from Port Blair',
  },
  {
    id: 'rangat',
    name: 'Rangat',
    subtitle: 'Turtle Nesting Sanctuary',
    lngLat: [92.8831, 12.5228],
    zoom: 11,
    badge: 'WILDLIFE',
    color: '#60f0a0',
    description: 'A haven for olive ridley turtles with pristine forests and secluded beaches.',
    activities: ['Turtle Watching', 'Nature Walks', 'Bird Watching', 'Creek Boating'],
    distance: '160 km from Port Blair',
  },
  {
    id: 'ross-island',
    name: 'Ross Island',
    subtitle: 'Colonial-Era Ruins',
    lngLat: [92.7481, 11.6714],
    zoom: 13,
    badge: 'HERITAGE',
    color: '#f09060',
    description: 'The former British HQ — now a nature reserve with deer, peacocks, and haunting ruins.',
    activities: ['Historical Tour', 'Wildlife Safari', 'Photography', 'Beach Walks'],
    distance: '3 km from Port Blair',
  },
];

// ── Ferry routes between destinations (real routes)
export const MAP_ROUTES = [
  { from: 'port-blair', to: 'havelock', type: 'ferry', label: 'Govt Ferry 2.5h' },
  { from: 'port-blair', to: 'neil', type: 'ferry', label: 'Ferry 1.5h' },
  { from: 'havelock', to: 'neil', type: 'ferry', label: 'Makruzz 30min' },
  { from: 'port-blair', to: 'baratang', type: 'road', label: 'Road+Boat 2.5h' },
  { from: 'port-blair', to: 'ross-island', type: 'ferry', label: 'Speedboat 15min' },
  { from: 'port-blair', to: 'rangat', type: 'ferry', label: 'Ferry 5h' },
  { from: 'rangat', to: 'diglipur', type: 'road', label: 'Road 3h' },
  { from: 'port-blair', to: 'little-andaman', type: 'ferry', label: 'Ferry 6h' },
];
