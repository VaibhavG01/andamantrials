// src/data/terminalData.js
// ─────────────────────────────────────────────────────────────────────────────
// Ferry Terminal Destinations Data

export const FERRY_TERMINALS = [
  {
    id: 'phoenix-bay',
    name: 'PHOENIX BAY JETTY',
    location: 'Port Blair, South Andaman',
    routes: ['Havelock Island', 'Neil Island', 'Rangat'],
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80',
    desc: 'Main passenger ferry hub in Port Blair connecting private speed catamarans and government vessels.',
  },
  {
    id: 'havelock-jetty',
    name: 'HAVELOCK HARBOR JETTY',
    location: 'Swaraj Dweep (Havelock Island)',
    routes: ['Port Blair', 'Neil Island'],
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
    desc: 'The gateway to Havelock beaches, dive resorts, and inter-island passenger lines.',
  },
  {
    id: 'neil-jetty',
    name: 'NEIL ISLAND JETTY',
    location: 'Shaheed Dweep (Neil Island)',
    routes: ['Port Blair', 'Havelock Island'],
    image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80',
    desc: 'Quiet island jetty serving daily catamaran arrivals from Swaraj Dweep and Port Blair.',
  },
  {
    id: 'nilambur-jetty',
    name: 'NILAMBUR JETTY',
    location: 'Baratang Island, Middle Andaman',
    routes: ['Port Blair', 'Rangat'],
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=600&q=80',
    desc: 'Ferry transfer hub across the Baratang creek connecting to mangrove boat safaris and limestone caves.',
  },
];
