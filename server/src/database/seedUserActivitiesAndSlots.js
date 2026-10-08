// server/src/database/seedUserActivitiesAndSlots.js
// ─────────────────────────────────────────────────────────────────────────────
// Real Andaman Travel Activities with exact rates, locations, photos/videos, and 30-day live slots

import dotenv from 'dotenv';
dotenv.config();
import { connectDatabase } from '../config/database.js';
import { Activity, ActivityLocation, ActivitySlot, SlotReservation, Setting } from '../models/index.js';

const activitiesMasterData = [
  {
    slug: 'scuba-diving',
    name: 'Scuba Diving (Shore Dive)',
    title: 'Scuba Diving with Photo & Video',
    category: 'Scuba & Snorkeling',
    location: 'Port Blair & Havelock',
    duration: '2.5 Hours (35-45 mins dive)',
    rating: 4.95,
    reviewsCount: 240,
    price: 3500,
    childPrice: 2800,
    originalPrice: 4500,
    featured: true,
    difficulty: 'Easy / Beginner',
    tagline: 'Rs.3500/- per head with photo & video @ Port Blair & Havelock.',
    overview: 'Dive into turquoise waters with certified PADI dive masters. Experience colorful coral gardens and tropical marine life up close with 1-on-1 personal supervision.',
    videoUrl: 'https://www.youtube.com/watch?v=ScMzIvxBSi4',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1920&q=90',
    inclusions: [
      'Underwater Photos & Video Included Free',
      'PADI / SSI Certified 1-on-1 Divemaster',
      'Complete Scuba Gear, Mask, Fins & Oxygen Tank',
      'Pre-dive Safety Briefing & Breathing Practice',
      'Emergency Medical Oxygen & First Aid'
    ],
    exclusions: [
      'Hotel pickup and drop-off (available as add-on)',
      'Wet suit rental (optional ₹300)'
    ],
    requirements: [
      'Minimum Age: 10 Years.',
      'No prior swimming skills required for Discover Scuba Diving.',
      'Must complete basic medical fitness self-declaration.',
      'Do not board an airplane for 18 hours after deep diving.'
    ],
    locations: [
      { locationName: 'Havelock Island (Elephant Beach)', adultPrice: 3500, childPrice: 2800, meetingPoint: 'Elephant Beach Boat Jetty, Havelock', description: 'Crystal-clear turquoise lagoon with vibrant coral reefs.' },
      { locationName: 'Port Blair (North Bay)', adultPrice: 3500, childPrice: 2800, meetingPoint: 'Water Sports Complex, Port Blair', description: 'Famous lighthouse reef with diverse clownfish and sea anemones.' },
      { locationName: 'Neil Island (Bharatpur Beach)', adultPrice: 3500, childPrice: 2800, meetingPoint: 'Bharatpur Beach Diving Counter, Neil Island', description: 'Serene coral formations and sea turtle sightings.' }
    ]
  },
  {
    slug: 'boat-diving-vip',
    name: 'Boat Diving (Deep Sea Reef Dive)',
    title: 'Boat Diving with Photo & Video @ Port Blair & Havelock',
    category: 'Scuba & Snorkeling',
    location: 'Port Blair & Havelock',
    duration: '3.5 Hours (Boat Cruise + Deep Dive)',
    rating: 4.98,
    reviewsCount: 165,
    price: 5500,
    childPrice: 4500,
    originalPrice: 6500,
    featured: true,
    difficulty: 'Moderate',
    tagline: 'Rs.5500/- per head with photo & video @ Port Blair & Havelock.',
    overview: 'Take a speed boat into the deep open sea reef for crystal-clear 25-meter visibility. Spot barracudas, manta rays, moray eels, and vast coral drop-offs accompanied by personal instructors.',
    image: 'https://images.unsplash.com/photo-1682687982501-1e58ab814714?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1682687982501-1e58ab814714?auto=format&fit=crop&w=1920&q=90',
    inclusions: [
      'Speedboat Cruise to Deep Sea Outer Reefs',
      'HD Underwater Photos & 4K Video Clips Included',
      'Dedicated 1-on-1 Certified Divemaster',
      'Full Scuba Equipment, Wetsuit & Oxygen Tank',
      'Bottled Water & Light Refreshments on Boat'
    ],
    exclusions: [
      'Hotel transfer to embarkation jetty'
    ],
    requirements: [
      'Minimum Age: 12 Years.',
      'Medical declaration form required prior to boarding.',
      'No flying within 18 hours after deep ocean dives.'
    ],
    locations: [
      { locationName: 'Havelock Island (Elephant Beach Boat Pontoon)', adultPrice: 5500, childPrice: 4500, meetingPoint: 'Elephant Beach Pontoon Jetty', description: 'Deep sea coral wall and pelagic fish.' },
      { locationName: 'Port Blair (Snake Island / North Bay Deep Reef)', adultPrice: 5500, childPrice: 4500, meetingPoint: 'Marina Water Sports Pier, Port Blair', description: 'Outer shelf deep dive with high underwater visibility.' }
    ]
  },
  {
    slug: 'boat-diving',
    name: 'Boat Diving (Standard Open Sea)',
    title: 'Standard Boat Scuba Diving',
    category: 'Scuba & Snorkeling',
    location: 'Havelock, Port Blair & Neil',
    duration: '3.0 Hours (Open Sea Dive)',
    rating: 4.90,
    reviewsCount: 190,
    price: 5000,
    childPrice: 4000,
    originalPrice: 5800,
    featured: false,
    difficulty: 'Beginner / Moderate',
    tagline: 'Rs.5000/- per head with photo & video.',
    overview: 'Hop aboard the dive boat to explore mid-depth marine formations with master instructors. Perfect for both first-timers and certified divers seeking pristine reef channels.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1920&q=90',
    inclusions: [
      'Boat Ride to Offshore Dive Point',
      'Underwater Photos & Video Included',
      'Certified PADI / SSI Dive Guide',
      'Full Scuba Gear & Sanitized Regulator',
      'Safety Briefing & Lifejacket Support'
    ],
    exclusions: [
      'Personal hotel transfer'
    ],
    requirements: [
      'Minimum Age: 10 Years.',
      'Standard medical fitness form.'
    ],
    locations: [
      { locationName: 'Havelock Island (Nemo Reef / Turtle Beach)', adultPrice: 5000, childPrice: 4000, meetingPoint: 'Havelock Dive Boat Point', description: 'Gentle slope reef with abundant marine life.' },
      { locationName: 'Port Blair (North Bay Island)', adultPrice: 5000, childPrice: 4000, meetingPoint: 'Aberdeen Jetty, Port Blair', description: 'Historic bay reef with rich soft corals.' },
      { locationName: 'Neil Island (Bus Stop Reef)', adultPrice: 5000, childPrice: 4000, meetingPoint: 'Bharatpur Jetty, Neil Island', description: 'Shallow to mid-depth coral shelf.' }
    ]
  },
  {
    slug: 'sea-walk',
    name: 'Underwater Sea Walk',
    title: 'Underwater Sea Walk with Photos',
    category: 'Adventure',
    location: 'Port Blair & Havelock',
    duration: '1.5 Hours Experience (25 mins underwater)',
    rating: 4.92,
    reviewsCount: 215,
    price: 3500,
    childPrice: 2800,
    originalPrice: 4500,
    featured: true,
    difficulty: 'Easy',
    tagline: 'Rs.3500/- per head with photo @ Port Blair & Havelock.',
    overview: 'Walk directly on the ocean floor 7 meters deep with a specialized transparent helmet that supplies continuous fresh air. Walk without getting your hair wet — zero swimming skills required!',
    image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1920&q=90',
    inclusions: [
      'Underwater Photographs Packet Included',
      'Transparent Helmet with Surface Air Supply',
      'Ocean Floor Walk at 6-7 Meters Depth',
      'Experienced Sea Walk Guides Accompanying',
      'Non-swimmers & Beginners Welcome'
    ],
    exclusions: [
      'Wetsuit rental (optional)',
      'Private hotel transfer'
    ],
    requirements: [
      'Minimum Age: 7 Years; Maximum Age: 65 Years.',
      'Not suitable for pregnant women or severe asthma patients.'
    ],
    locations: [
      { locationName: 'Havelock (Elephant Beach Pontoon)', adultPrice: 3500, childPrice: 2800, meetingPoint: 'Elephant Beach Pontoon Station', description: 'Clear lagoon with exotic marine interaction.' },
      { locationName: 'Port Blair (North Bay Island Pontoon)', adultPrice: 3500, childPrice: 2800, meetingPoint: 'North Bay Sea Walk Station', description: 'Walk among schools of colorful damselfish.' }
    ]
  },
  {
    slug: 'snorkeling-shallow',
    name: 'Snorkeling (Shallow Water Reef)',
    title: 'Shallow Water Snorkeling with Photo & Video',
    category: 'Scuba & Snorkeling',
    location: 'Havelock, Port Blair & Neil',
    duration: '1.0 Hour Lagoon Session',
    rating: 4.86,
    reviewsCount: 260,
    price: 1500,
    childPrice: 1200,
    originalPrice: 2000,
    featured: false,
    difficulty: 'Easy',
    tagline: 'Rs.1500/- per head with photo & video (shallow water)',
    overview: 'Float comfortably over shallow coral lagoons with a certified guide holding your hand or life-ring. Spot clownfish, blue sea stars, and live brain corals.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=90',
    inclusions: [
      'Underwater Photos & Video Clips Included',
      'Sanitized Snorkeling Mask & Snorkel Pipe',
      'Lifejacket & Flotation Ring Support',
      'Certified Local Snorkel Guide Assistance',
      'Shallow Coral Reef Interaction'
    ],
    exclusions: [
      'Private lockers or towel rentals'
    ],
    requirements: [
      'Suitable for all age groups (5+ years).',
      'Non-swimmers fully welcome with lifejackets.'
    ],
    locations: [
      { locationName: 'Elephant Beach, Havelock', adultPrice: 1500, childPrice: 1200, meetingPoint: 'Elephant Beach Snorkel Desk', description: 'Warm crystal shallow lagoon.' },
      { locationName: 'North Bay Island, Port Blair', adultPrice: 1500, childPrice: 1200, meetingPoint: 'North Bay Watersports Counter', description: 'Gentle reef slope with parrotfish.' },
      { locationName: 'Bharatpur Beach, Neil Island', adultPrice: 1500, childPrice: 1200, meetingPoint: 'Bharatpur Snorkeling Center', description: 'Peaceful coral beds and starfishes.' }
    ]
  },
  {
    slug: 'snorkeling-deep',
    name: 'Snorkeling (Deep Water Coral Safari)',
    title: 'Deep Water Snorkeling with Photo & Video',
    category: 'Scuba & Snorkeling',
    location: 'Havelock & Port Blair',
    duration: '1.5 Hours Deep Reef Safari',
    rating: 4.92,
    reviewsCount: 140,
    price: 1800,
    childPrice: 1400,
    originalPrice: 2400,
    featured: false,
    difficulty: 'Easy / Moderate',
    tagline: 'Rs.1800/- per head with photo & video (deep water).',
    overview: 'Take a speedboat to deep outer reef channels where corals are untouched and large schools of tropical fish thrive in crystal-clear visibility.',
    image: 'https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=1920&q=90',
    inclusions: [
      'Speedboat Transfer to Deep Outer Reef',
      'HD Underwater Photos & Video Clips Included',
      'Professional Snorkel Mask & Dry-top Pipe',
      'High-buoyancy Safety Vest & Lifeguard Escort',
      'Deep Coral Garden Exploration'
    ],
    exclusions: [
      'Transport to jetty'
    ],
    requirements: [
      'Ages 7+ years.',
      'Must wear life jacket at all times in deep water.'
    ],
    locations: [
      { locationName: 'Elephant Beach Deep Reef, Havelock', adultPrice: 1800, childPrice: 1400, meetingPoint: 'Elephant Beach Boat Counter', description: 'Deep water reef wall.' },
      { locationName: 'North Bay Outer Reef, Port Blair', adultPrice: 1800, childPrice: 1400, meetingPoint: 'Water Sports Pier, Port Blair', description: 'Outer channel coral safari.' },
      { locationName: 'Jolly Buoy Island Marine Sanctuary', adultPrice: 1800, childPrice: 1400, meetingPoint: 'Jolly Buoy Jetty', description: 'Pristine national park marine corals.' }
    ]
  },
  {
    slug: 'andaman-dolphin',
    name: 'Andaman Dolphin (Glass Speed Boat)',
    title: 'Andaman Dolphin High-Speed Glass Bottom Boat',
    category: 'Marine Life',
    location: 'Havelock & Port Blair',
    duration: '45 Mins High Speed Cruise',
    rating: 4.88,
    reviewsCount: 175,
    price: 3200,
    childPrice: 2500,
    originalPrice: 4000,
    featured: true,
    difficulty: 'Easy',
    tagline: 'Rs.3500/- per head @ Havelock and Rs.3200/- @ Port Blair.',
    overview: 'Experience high-speed gliding on an ultra-modern glass-bottom vessel with an underwater observation cabin, witnessing marine life in comfort without getting wet.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1920&q=90',
    inclusions: [
      '45 Mins High Speed Glass Hull Observation Cruise',
      'Clear Glass Viewing Port for live corals and marine life',
      'Life Jackets for all passengers',
      'Certified Captain and Marine Guide',
      'Safe for infants, families, and senior citizens'
    ],
    exclusions: [
      'Hotel pickup'
    ],
    requirements: [
      'Open to all ages. Perfect for family groups.'
    ],
    locations: [
      { locationName: 'Havelock Island', adultPrice: 3500, childPrice: 2800, meetingPoint: 'Havelock Water Sports Jetty', description: 'Explore Elephant Beach coral channels.' },
      { locationName: 'Port Blair', adultPrice: 3200, childPrice: 2500, meetingPoint: 'Rajiv Gandhi Water Sports Complex, Port Blair', description: 'Cruise around Ross Island and North Bay.' }
    ]
  },
  {
    slug: 'semi-submarine',
    name: 'Semi Submarine Coral Safari',
    title: 'Coral Safari Semi Submarine',
    category: 'Marine Life',
    location: 'Havelock & Port Blair',
    duration: '1.0 Hour Submarine Cruise',
    rating: 4.89,
    reviewsCount: 210,
    price: 3200,
    childPrice: 2500,
    originalPrice: 4200,
    featured: true,
    difficulty: 'Easy',
    tagline: 'Rs.3500/- per head @ Havelock and Rs.3200/- @ Port Blair.',
    overview: 'Enter an air-conditioned 100-seater submarine cabin with 45-degree angled glass windows submerged deep in the ocean, giving an aquarium-like view of Andaman corals.',
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1920&q=90',
    inclusions: [
      'Air-Conditioned Semi Submarine Underwater Cabin Access',
      'Submerged 45-degree Large Glass Viewports',
      'Live Marine Biologist Commentary & Fish Feeding Show',
      'Lifejackets & Safety Briefing',
      'Safe and comfortable for all age groups'
    ],
    exclusions: [
      'Private transfers'
    ],
    requirements: [
      'All age groups welcome (Infants free under 2 years).'
    ],
    locations: [
      { locationName: 'Havelock Island', adultPrice: 3500, childPrice: 2800, meetingPoint: 'Havelock Submarine Station', description: 'Elephant Beach coral sanctuary.' },
      { locationName: 'Port Blair (Phoenix Bay / North Bay)', adultPrice: 3200, childPrice: 2500, meetingPoint: 'Phoenix Bay Jetty, Port Blair', description: 'Harbor coral safari with underwater show.' }
    ]
  },
  {
    slug: 'glass-bottom',
    name: 'Glass Bottom Ride',
    title: 'Glass Bottom Boat Reef Ride',
    category: 'Boat Activities',
    location: 'Port Blair, Havelock & Neil',
    duration: '30-45 Mins Reef Tour',
    rating: 4.82,
    reviewsCount: 280,
    price: 1000,
    childPrice: 800,
    originalPrice: 1500,
    featured: false,
    difficulty: 'Easy',
    tagline: 'Rs.1000/- per head',
    overview: 'Enjoy an easy boat ride with a clear glass floor displaying colorful live coral reefs and fish beneath your feet without touching water.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1920&q=90',
    inclusions: [
      '30-45 Mins Glass Bottom Boat Tour',
      'Live Coral Reef & Marine Viewing',
      'Certified Boat Driver & Guide',
      'Lifejacket for all passengers'
    ],
    exclusions: [
      'Personal hotel transfer'
    ],
    requirements: [
      'Open to all age groups.'
    ],
    locations: [
      { locationName: 'Port Blair (North Bay)', adultPrice: 1000, childPrice: 800, meetingPoint: 'Aberdeen Jetty, Port Blair', description: 'Scenic boat ride over coral beds.' },
      { locationName: 'Havelock (Elephant Beach)', adultPrice: 1000, childPrice: 800, meetingPoint: 'Elephant Beach Boat Counter', description: 'Clear shallow lagoon reef.' },
      { locationName: 'Neil Island (Bharatpur Beach)', adultPrice: 1000, childPrice: 800, meetingPoint: 'Bharatpur Glass Boat Counter', description: 'Serene coral reef viewing.' }
    ]
  },
  {
    slug: 'jet-ski',
    name: 'Jet Ski Wave Runner',
    title: 'High-Speed Jet Ski Wave Adventure',
    category: 'Water Sports',
    location: 'Port Blair, Havelock & Neil',
    duration: '10-15 Mins High Speed Ride',
    rating: 4.88,
    reviewsCount: 310,
    price: 1000,
    childPrice: 800,
    originalPrice: 1500,
    featured: false,
    difficulty: 'Easy / Moderate',
    tagline: 'Rs.1000/- per head',
    overview: 'Feel the adrenaline surge as you speed over turquoise waves on a powerful Jet Ski accompanied by a trained safety pilot.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1920&q=90',
    inclusions: [
      'High-Speed Jet Ski Ride across Open Waves',
      'Certified Safety Instructor on-board',
      'High-Grade Life Jacket & Emergency Stop Lanyard',
      'Safety Briefing & Operation Guidance'
    ],
    exclusions: [
      'GoPro Video recording (available on request ₹250)'
    ],
    requirements: [
      'Minimum Age: 10 Years.',
      'Lifejacket mandatory.'
    ],
    locations: [
      { locationName: 'Water Sports Complex, Port Blair', adultPrice: 1000, childPrice: 800, meetingPoint: 'Rajiv Gandhi Water Sports Complex', description: 'Wide calm bay water sports arena.' },
      { locationName: 'Elephant Beach, Havelock', adultPrice: 1000, childPrice: 800, meetingPoint: 'Elephant Beach Jet Ski Zone', description: 'Turquoise ocean spray experience.' },
      { locationName: 'Bharatpur Beach, Neil Island', adultPrice: 1000, childPrice: 800, meetingPoint: 'Bharatpur Watersports Counter', description: 'Smooth clear reef surface.' }
    ]
  },
  {
    slug: 'banana-ride',
    name: 'Banana / Sofa / Speed Boat / Disco Ride',
    title: 'Fun Water Rides (Banana, Sofa, Speed Boat & Disco)',
    category: 'Water Sports',
    location: 'Elephanta Beach, Havelock & Port Blair',
    duration: '15-20 Mins Group Splash',
    rating: 4.85,
    reviewsCount: 340,
    price: 1000,
    childPrice: 800,
    originalPrice: 1400,
    featured: false,
    difficulty: 'Easy',
    tagline: 'Rs.1000/- per head @ Elephanta Beach, Havelock.',
    overview: 'Hold on tight as a powerful speedboat pulls your inflatable banana, sofa, or disco tube across ocean swells for maximum fun with family and friends.',
    image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1920&q=90',
    inclusions: [
      'Inflatable Tube / Banana / Sofa / Disco Ride Experience',
      'High-Power Speedboat Towing',
      'Safety Lifejackets for all riders',
      'Safety Rescue Boat on standby'
    ],
    exclusions: [
      'Personal locker rental'
    ],
    requirements: [
      'Minimum Age: 6 Years.',
      'Must wear life jacket at all times.'
    ],
    locations: [
      { locationName: 'Elephant Beach, Havelock', adultPrice: 1000, childPrice: 800, meetingPoint: 'Elephant Beach Watersports Counter', description: 'Exciting group splash ride across Havelock surf.' },
      { locationName: 'Water Sports Complex, Port Blair', adultPrice: 1000, childPrice: 800, meetingPoint: 'Marina Watersports Pier, Port Blair', description: 'Fun coastal group ride.' },
      { locationName: 'Bharatpur Beach, Neil Island', adultPrice: 1000, childPrice: 800, meetingPoint: 'Bharatpur Watersports Point', description: 'Calm water group ride.' }
    ]
  },
  {
    slug: 'parasailing',
    name: 'Parasailing Ocean Flight',
    title: 'High Fly Ocean Parasailing',
    category: 'Adventure',
    location: 'Havelock & Port Blair',
    duration: '30 Mins (5-7 mins high air flight + boat ride)',
    rating: 4.96,
    reviewsCount: 290,
    price: 3000,
    childPrice: 2400,
    originalPrice: 3800,
    featured: true,
    difficulty: 'Moderate',
    tagline: 'Rs.3200/- per head @ Havelock and Rs.3000/- per head @ Port Blair.',
    overview: 'Soar 300 feet above the turquoise Andaman Sea with a parachute tethered to a high-speed winch boat. Enjoy panoramic views of the islands and an optional sea-dip!',
    image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1920&q=90',
    inclusions: [
      'Parasail Flight with Hydraulic Winch Launch & Retrieval',
      'Panoramic 360-degree Aerial Island View',
      'Optional Refreshing Ocean Sea-Dip',
      'Certified Winch Master & Riggers Guidance',
      'Full Safety Harness & Lifejacket'
    ],
    exclusions: [
      'GoPro video recording (optional ₹500)'
    ],
    requirements: [
      'Minimum Age: 8 Years.',
      'Weight limit: 30 kg to 105 kg.'
    ],
    locations: [
      { locationName: 'Havelock Island (Elephant Beach)', adultPrice: 3200, childPrice: 2500, meetingPoint: 'Elephant Beach Speedboat Point', description: 'Spectacular aerial view of the turquoise lagoon.' },
      { locationName: 'Port Blair (Corbyn\'s Cove Beach)', adultPrice: 3000, childPrice: 2400, meetingPoint: 'Corbyn Cove Water Sports Pier', description: 'High altitude coastal glide with speedboat takeoff.' }
    ]
  },
  {
    slug: 'seakart-adventure',
    name: 'Seakart Adventure',
    title: 'Seakart Self-Drive Ocean Adventure',
    category: 'Adventure',
    location: "Corbyn's Cove Beach, Port Blair",
    duration: '1.5 Hours (20 mins self-drive briefing & cruise)',
    rating: 4.97,
    reviewsCount: 130,
    price: 3500,
    childPrice: 2800,
    originalPrice: 4500,
    featured: true,
    difficulty: 'Moderate',
    tagline: "Rs.3500/- per head @ Corbyn's Cove Beach, Port Blair.",
    overview: 'Drive your own high-speed watercraft — an exclusive hybrid of a go-kart and a jet-boat! Steer with steering wheel and paddle accelerator in open sea under instructor supervision.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1920&q=90',
    inclusions: [
      'Self-Drive Seakart Experience with Steering Controls',
      'Escort Boat with Certified Instructor & Rescue Pilot',
      'Detailed Safety & Maneuver Briefing',
      'Safety Lifejackets & Communication Gear',
      'Coastal Speed Cruise along Corbyn\'s Cove'
    ],
    exclusions: [
      'Hotel transfer to Corbyn\'s Cove'
    ],
    requirements: [
      'Driver Age: 18+ Years (Passenger Age: 6+ Years).',
      'Must follow escort instructor guidelines.'
    ],
    locations: [
      { locationName: 'Corbyn\'s Cove Beach, Port Blair', adultPrice: 3500, childPrice: 2800, meetingPoint: 'Seakart Center, Corbyn\'s Cove Beach', description: 'Exclusive self-drive ocean adventure in India.' }
    ]
  },
  {
    slug: 'kayaking',
    name: 'Kayaking (Bioluminescent & Mangrove)',
    title: 'Kayaking (Night Bioluminescence & Mangrove Explorer)',
    category: 'Adventure',
    location: 'Port Blair & Havelock',
    duration: '2.0 Hours Guided Tour',
    rating: 4.96,
    reviewsCount: 195,
    price: 3500,
    childPrice: 2800,
    originalPrice: 4500,
    featured: true,
    difficulty: 'Easy',
    tagline: 'Rs.3500/- per head @ Port Blair & Havelock.',
    overview: 'Glide through mystical mangrove channels or experience glowing blue waters under starlit skies on a guided night bioluminescence kayak tour.',
    image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1920&q=90',
    inclusions: [
      'Premium Tandem / Single Sea Kayak & Lightweight Paddles',
      'Certified Naturalist & Kayak Instructor Guide',
      'Night Bioluminescence / Mangrove Exploration',
      'High-grade Lifejacket & Waterproof Dry Bag',
      'Safety Briefing & Technique Coaching'
    ],
    exclusions: [
      'Transport to creek launch point'
    ],
    requirements: [
      'Minimum Age: 8 Years.',
      'Operated during favorable tides and dark moon cycles for bioluminescence.'
    ],
    locations: [
      { locationName: 'Havelock Island (Mangrove Creek)', adultPrice: 3500, childPrice: 2800, meetingPoint: 'Havelock Mangrove Creek Jetty', description: 'Night bioluminescent kayaking under starlit skies.' },
      { locationName: 'Port Blair (Marina Park / Chidiyatapu)', adultPrice: 3500, childPrice: 2800, meetingPoint: 'Marina Park Water Sports Point', description: 'Scenic coastal sunset & mangrove paddle.' }
    ]
  }
];

const timeSlotTemplates = [
  { startTime: '08:00 AM', endTime: '10:00 AM', capacity: 20 },
  { startTime: '10:00 AM', endTime: '12:00 PM', capacity: 20 },
  { startTime: '12:00 PM', endTime: '02:00 PM', capacity: 15 },
  { startTime: '02:00 PM', endTime: '04:00 PM', capacity: 20 },
  { startTime: '04:00 PM', endTime: '05:30 PM', capacity: 15 },
];

async function seedUserActivities() {
  await connectDatabase();
  console.log('🔄 Seeding official Andaman activities, exact pricing, locations, and slots...');

  // Ensure default Admin Email Settings
  await Setting.findOrCreate({
    where: { key: 'email_settings' },
    defaults: {
      key: 'email_settings',
      description: 'System and Admin Email Notification Settings',
      value: {
        adminNotificationEmail: 'softbyvaibhav01@gmail.com',
        bookingConfirmationEnabled: true,
        paymentFailureNotification: true,
        cancellationNotification: true,
        bookingReminderEnabled: true,
        bookingReminderHoursBefore: 24,
        lowAvailabilityAlertEnabled: true,
        lowAvailabilityThreshold: 3,
        autoExpirePendingMinutes: 10,
      }
    }
  });

  const now = new Date();
  const dates = [];
  for (let i = 0; i < 30; i++) {
    const d = new Date(now.getTime() + i * 24 * 60 * 60 * 1000);
    dates.push(d.toISOString().split('T')[0]);
  }

  for (const actData of activitiesMasterData) {
    const { locations, ...actFields } = actData;

    let [activity, created] = await Activity.findOrCreate({
      where: { slug: actFields.slug },
      defaults: actFields
    });

    if (!created) {
      await activity.update(actFields);
    }
    console.log(`✅ Activity ready: ${activity.name} (₹${activity.price})`);

    // Sync Locations
    for (const loc of locations) {
      let [actLoc, locCreated] = await ActivityLocation.findOrCreate({
        where: { activityId: activity.id, locationName: loc.locationName },
        defaults: {
          activityId: activity.id,
          locationName: loc.locationName,
          adultPrice: loc.adultPrice,
          childPrice: loc.childPrice,
          meetingPoint: loc.meetingPoint,
          description: loc.description,
          status: 'ACTIVE'
        }
      });

      if (!locCreated) {
        await actLoc.update({
          adultPrice: loc.adultPrice,
          childPrice: loc.childPrice,
          meetingPoint: loc.meetingPoint,
          description: loc.description,
          status: 'ACTIVE'
        });
      }

      // Generate 30 days of slots for this location efficiently
      const slotsToInsert = [];
      for (const dStr of dates) {
        for (const slotTpl of timeSlotTemplates) {
          slotsToInsert.push({
            activityId: activity.id,
            locationId: actLoc.id,
            date: dStr,
            startTime: slotTpl.startTime,
            endTime: slotTpl.endTime,
            capacity: slotTpl.capacity,
            bookedCount: 0,
            reservedCount: 0,
            status: 'ACTIVE'
          });
        }
      }

      if (slotsToInsert.length > 0) {
        await ActivitySlot.bulkCreate(slotsToInsert, {
          ignoreDuplicates: true,
          validate: false
        }).catch(() => {});
      }
    }
  }

  console.log('🎉 Successfully seeded all 14 official activities with real rates, locations, and slots!');
}

export { seedUserActivities };

// Execute if run directly
if (process.argv[1] && (process.argv[1].endsWith('seedUserActivitiesAndSlots.js') || process.argv[1].endsWith('seedUserActivitiesAndSlots'))) {
  seedUserActivities().then(() => process.exit(0)).catch(err => {
    console.error('❌ Error seeding user activities:', err);
    process.exit(1);
  });
}
