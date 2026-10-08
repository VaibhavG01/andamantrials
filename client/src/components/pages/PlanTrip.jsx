import React, { useState, useEffect, useMemo } from 'react';
import {
  MapPin, Calendar, Users, Sparkles, Check, ChevronRight, ChevronLeft,
  Ship, Home, Compass, CreditCard, ShieldCheck, Phone, Download,
  CheckCircle2, AlertCircle, ArrowRight, Star, Clock, Utensils,
  Award, Eye, Waves, Trees, Landmark, MessageSquare, ChevronDown,
  Building, Crown, Filter, Tag, CheckSquare, Printer, Coffee, Car
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import RazorpayModal from '../ui/RazorpayModal';
import FooterBottom from '../FooterBottom';
import PlanYourHolidayForm from '../forms/PlanYourHolidayForm';

// ── ROOM CATEGORIES FILTER LIST ──
const STAY_CATEGORIES = [
  { id: 'ALL', label: 'All Room Tiers', icon: '✨' },
  { id: '5-Star Luxury', label: '👑 5★ Luxury & Villas', icon: '👑' },
  { id: '4-Star Premium', label: '⭐ 4★ Premium Beachside', icon: '⭐' },
  { id: '3-Star Deluxe', label: '🏨 3★ Deluxe & Comfort', icon: '🏨' },
  { id: 'Eco Retreat', label: '🌿 Eco Nature Cottages', icon: '🌿' },
];

// ── AVAILABLE ISLANDS DATA WITH COMPREHENSIVE CATEGORIZED ROOMS & ACTIVITIES ──
const ISLANDS_DATA = [
  {
    id: 'portblair',
    name: 'Port Blair (Sri Vijaya Puram)',
    tag: 'Capital Gateway & Heritage',
    subtitle: 'Cellular Memorial, Corbyn’s Cove & Sunset Points',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
    minNights: 1,
    defaultNights: 2,
    basePricePerNight: 5500,
    highlights: ['Cellular Jail National Memorial', 'Light & Sound Show', 'Corbyn’s Cove Beach', 'Chidiyatapu Sunset Point', 'Ross Island British Ruins'],
    resorts: [
      {
        id: 'pb-lux-symphony',
        name: 'Symphony Samudra Beachside Resort & Spa',
        category: '5-Star Luxury',
        tier: '5-Star Luxury Villa',
        roomType: 'Luxury Ocean Lagoon Villa with Private Balcony',
        price: 9500,
        originalPrice: 11800,
        rating: 4.9,
        reviews: 320,
        image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80',
        amenities: ['Ocean Lagoon View', 'Gourmet Buffet Breakfast', 'Infinity Pool Access', 'Private Balcony', 'Spa & Wellness'],
      },
      {
        id: 'pb-lux-welcom',
        name: 'Welcomhotel by ITC Bay Island',
        category: '5-Star Luxury',
        tier: '5-Star Heritage Luxury',
        roomType: 'Sea Facing Executive Heritage Padauk Villa',
        price: 11200,
        originalPrice: 14000,
        rating: 4.9,
        reviews: 410,
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
        amenities: ['Panoramic Bay View', 'Breakfast Included', 'Padauk Wood Architecture', 'Swimming Pool', 'Fine Dining'],
      },
      {
        id: 'pb-prem-fortune',
        name: 'Fortune Resort Bay Island',
        category: '4-Star Premium',
        tier: 'Premium 4-Star Resort',
        roomType: 'Deluxe Bay View AC Chalet',
        price: 6800,
        originalPrice: 8500,
        rating: 4.7,
        reviews: 280,
        image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=600&q=80',
        amenities: ['Bay View', 'Complimentary Breakfast', 'Swimming Pool', 'Central AC', 'Free WiFi'],
      },
      {
        id: 'pb-prem-seashell',
        name: 'SeaShell Port Blair Heritage',
        category: '4-Star Premium',
        tier: 'Premium 4-Star Hotel',
        roomType: 'Coral Executive Sea View Room',
        price: 5900,
        originalPrice: 7200,
        rating: 4.6,
        reviews: 215,
        image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80',
        amenities: ['Sea View', 'Rooftop Lounge Access', 'Breakfast Included', 'AC', 'Jetty Transfer Help'],
      },
      {
        id: 'pb-std-tsg',
        name: 'Hotel TSG Grand / Emerald',
        category: '3-Star Deluxe',
        tier: '3-Star Deluxe Comfort',
        roomType: 'Deluxe Comfort AC Room',
        price: 4200,
        originalPrice: 5200,
        rating: 4.5,
        reviews: 190,
        image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80',
        amenities: ['City Center', 'Breakfast Included', 'King Bed', 'AC & High Speed Wi-Fi'],
      },
      {
        id: 'pb-eco-megapode',
        name: 'Megapode Rainforest Nature Retreat',
        category: 'Eco Retreat',
        tier: 'Eco Nature Retreat',
        roomType: 'Eco Bamboo Hillside Cottage',
        price: 4800,
        originalPrice: 6000,
        rating: 4.6,
        reviews: 140,
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80',
        amenities: ['Harbour View', 'Forest Canopy', 'Organic Breakfast', 'Nature Trail Walking Path'],
      },
    ],
    activities: [
      { id: 'act-pb-jail', name: 'Cellular Jail Memorial & Light/Sound Show', price: 650, duration: '2.5 hrs', icon: Landmark, desc: 'Entry pass, museum guide & evening sound & light laser tribute.' },
      { id: 'act-pb-ross', name: 'Ross Island & North Bay Coral Safari Boat', price: 1850, duration: '4 hrs', icon: Compass, desc: 'Historic British ruins on Ross Island & coral reef watching at North Bay.' },
      { id: 'act-pb-sunset', name: 'Chidiyatapu Sunset & Birdwatching Drive', price: 1200, duration: '3 hrs', icon: Trees, desc: 'Scenic coastal drive, lush Munda Pahad biological forest & golden sunset.' },
      { id: 'act-pb-jolly', name: 'Jolly Buoy Coral Snorkeling Marine Safari', price: 2400, duration: '5 hrs', icon: Waves, desc: 'Mahatma Gandhi Marine National Park pristine corals & glass boat.' },
      { id: 'act-pb-parasail', name: 'Corbyn’s Cove Parasailing & Speedboat Ride', price: 2800, duration: '1 hr', icon: Sparkles, desc: 'High-altitude ocean parasailing with dip & thrilling speed tow.' },
    ],
  },
  {
    id: 'havelock',
    name: 'Havelock (Swaraj Dweep)',
    tag: 'Asia’s #1 Radhanagar & Scuba Capital',
    subtitle: 'World-Class Scuba, Bioluminescence & White Sands',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    minNights: 1,
    defaultNights: 2,
    basePricePerNight: 8500,
    highlights: ['Radhanagar Beach No. 7 Sunset', 'Elephant Beach Coral Reef', 'PADI Certified Boat Scuba', 'Night Bioluminescence Kayaking'],
    resorts: [
      {
        id: 'hvl-lux-taj',
        name: 'Taj Exotica Resort & Spa (Radhanagar)',
        category: '5-Star Luxury',
        tier: 'Ultra Luxury 5-Star Villa',
        roomType: 'Luxury Andaman Villa with Private Plunge Pool',
        price: 18500,
        originalPrice: 22000,
        rating: 5.0,
        reviews: 480,
        image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80',
        amenities: ['Private Pool', 'Direct Radhanagar Beach', 'Gourmet Breakfast', 'Butler Service', 'Spa'],
      },
      {
        id: 'hvl-lux-symphony',
        name: 'Symphony Palms Beach Resort & Spa',
        category: '5-Star Luxury',
        tier: '5-Star Luxury Beach Suite',
        roomType: 'Oceanfront Haveli Beachfront Suite',
        price: 13500,
        originalPrice: 16500,
        rating: 4.9,
        reviews: 350,
        image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80',
        amenities: ['Oceanfront', 'Jacuzzi', 'Breakfast Included', 'Private Beach Access', 'Candlelight Dinner Setup'],
      },
      {
        id: 'hvl-prem-barefoot',
        name: 'Barefoot at Havelock Jungle Eco-Resort',
        category: 'Eco Retreat',
        tier: 'Luxury Eco Villa',
        roomType: 'Nicobari Wooden Forest Villa (Beach No. 7)',
        price: 11200,
        originalPrice: 13800,
        rating: 4.9,
        reviews: 310,
        image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=600&q=80',
        amenities: ['Rainforest Setting', 'Radhanagar Pathway', 'Farm-to-table Breakfast', 'Spa & Yoga'],
      },
      {
        id: 'hvl-prem-seashell',
        name: 'SeaShell Havelock Beach Resort',
        category: '4-Star Premium',
        tier: 'Premium 4-Star Chalet',
        roomType: 'Premium Lagoon Chalet with Balcony',
        price: 8900,
        originalPrice: 10800,
        rating: 4.8,
        reviews: 290,
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
        amenities: ['Lagoon Pool', 'Beachfront Dining', 'Breakfast Included', 'AC', 'PADI Dive Desk'],
      },
      {
        id: 'hvl-prem-silversand',
        name: 'Silver Sand Beach Resort Havelock',
        category: '4-Star Premium',
        tier: 'Premium 4-Star Wooden Villa',
        roomType: 'Andaman Lagoon Wooden Beach Villa',
        price: 8200,
        originalPrice: 9800,
        rating: 4.7,
        reviews: 260,
        image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80',
        amenities: ['Vijaynagar Beach', 'Swimming Pool', 'Buffet Breakfast', 'Plush Wooden Interiors'],
      },
      {
        id: 'hvl-std-beachresort',
        name: 'Havelock Island Beach Resort (Govind Nagar)',
        category: '3-Star Deluxe',
        tier: 'Beachfront Comfort',
        roomType: 'Deluxe Beachside AC Cabana',
        price: 6500,
        originalPrice: 8000,
        rating: 4.6,
        reviews: 240,
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80',
        amenities: ['Beachside', 'Swimming Pool', 'Breakfast Included', 'Scuba Desk'],
      },
      {
        id: 'hvl-eco-elephant',
        name: 'Flying Elephant Eco Wooden Cabins',
        category: 'Eco Retreat',
        tier: 'Eco Nature Retreat',
        roomType: 'Bamboo Thatched Treehouse Villa',
        price: 4500,
        originalPrice: 5600,
        rating: 4.5,
        reviews: 130,
        image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80',
        amenities: ['Tropical Forest Garden', 'Yoga Deck', 'Organic Breakfast', 'Quiet Beach Walk'],
      },
    ],
    activities: [
      { id: 'act-hvl-scuba', name: 'PADI Certified Boat Scuba Diving (Elephant Beach)', price: 3800, duration: '2 hrs', icon: Waves, desc: 'Includes speed boat transfer, dive master guide, HD GoPro underwater video & photos.' },
      { id: 'act-hvl-kayak', name: 'Night Bioluminescence Mangrove Kayaking', price: 2800, duration: '2 hrs', icon: Sparkles, desc: 'Magical night paddle through glowing bioluminescent waters and starry skies.' },
      { id: 'act-hvl-seawalk', name: 'Undersea Helmet Walk with Live Corals', price: 3200, duration: '1.5 hrs', icon: Compass, desc: 'Walk directly on the seabed at 6-meter depth surrounded by colorful reef fish.' },
      { id: 'act-hvl-elephant', name: 'Elephant Beach Snorkeling & Speedboat Trek', price: 1950, duration: '3 hrs', icon: Waves, desc: 'Guided snorkeling session over shallow coral gardens with lifejackets & gear.' },
      { id: 'act-hvl-sunset', name: 'Radhanagar Beach Golden Sunset & Chilled Lounge', price: 750, duration: '2 hrs', icon: Trees, desc: 'Curated transport and beachside refreshments at Asia’s most celebrated sunset spot.' },
    ],
  },
  {
    id: 'neil',
    name: 'Neil Island (Shaheed Dweep)',
    tag: 'Peaceful Turquoise Bays',
    subtitle: 'Natural Rock Bridge, Bharatpur Reefs & Laxmanpur Sunset',
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80',
    minNights: 1,
    defaultNights: 1,
    basePricePerNight: 6000,
    highlights: ['Natural Rock Bridge (Howrah Bridge)', 'Bharatpur Coral Beach', 'Laxmanpur Sunset Point', 'Sitapur Sunrise Point'],
    resorts: [
      {
        id: 'nl-lux-samssara',
        name: 'SeaShell Samssara Luxury Beach Resort',
        category: '5-Star Luxury',
        tier: '5-Star Luxury Oceanfront Villa',
        roomType: 'Presidential Oceanfront Villa with Verandah',
        price: 10500,
        originalPrice: 13200,
        rating: 4.9,
        reviews: 260,
        image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80',
        amenities: ['Oceanfront', 'Private Cabana', 'Gourmet Breakfast', 'Infinity Pool', 'Spa Access'],
      },
      {
        id: 'nl-prem-summersands',
        name: 'Summer Sands Beach Resort Neil',
        category: '4-Star Premium',
        tier: 'Premium 4-Star Resort',
        roomType: 'Aqua Pool Access Luxury Room',
        price: 7200,
        originalPrice: 9000,
        rating: 4.7,
        reviews: 210,
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
        amenities: ['Direct Pool Access', 'Beachside Dining', 'Breakfast Included', 'AC', 'Garden Lawns'],
      },
      {
        id: 'nl-prem-silversand',
        name: 'Silver Sand Beach Resort Neil',
        category: '4-Star Premium',
        tier: 'Premium 4-Star Beach Villa',
        roomType: 'Neil Panorama Wooden Beach Villa',
        price: 6800,
        originalPrice: 8400,
        rating: 4.7,
        reviews: 185,
        image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=600&q=80',
        amenities: ['Private Beach Path', 'Wooden Architecture', 'Breakfast Included', 'AC'],
      },
      {
        id: 'nl-std-tango',
        name: 'Tango Beach Resort',
        category: '3-Star Deluxe',
        tier: 'Standard Deluxe Beachfront',
        roomType: 'Deluxe AC Lagoon View Room',
        price: 4500,
        originalPrice: 5600,
        rating: 4.5,
        reviews: 160,
        image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80',
        amenities: ['Lagoon View', 'Direct Laxmanpur Beach Path', 'Breakfast Included', 'AC'],
      },
      {
        id: 'nl-eco-cottage',
        name: 'Neil Eco Heritage Cottages',
        category: 'Eco Retreat',
        tier: 'Eco Nature Cottage',
        roomType: 'Tropical Thatched Eco Wooden Cottage',
        price: 3800,
        originalPrice: 4800,
        rating: 4.4,
        reviews: 95,
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80',
        amenities: ['Organic Garden', 'Coconut Palm Grove', 'Breakfast Included', 'Eco Friendly'],
      },
    ],
    activities: [
      { id: 'act-nl-bridge', name: 'Natural Rock Bridge Guided Geological Walk', price: 800, duration: '1.5 hrs', icon: Landmark, desc: 'Guided low-tide walk to the natural rock formation with live starfish & corals.' },
      { id: 'act-nl-glassboat', name: 'Glass Bottom Coral Safari at Bharatpur Beach', price: 1200, duration: '1 hr', icon: Waves, desc: 'See vibrant brain corals, clownfish and giant clams through underwater glass hull.' },
      { id: 'act-nl-scuba', name: 'Nemo Reef Shallow Scuba Dive for Beginners', price: 3400, duration: '1.5 hrs', icon: Compass, desc: 'Gentle, clear-water dive ideal for first-timers with video recording.' },
      { id: 'act-nl-sunset', name: 'Laxmanpur Beach Sunset & Live Coral Shell Trail', price: 600, duration: '2 hrs', icon: Trees, desc: 'Expansive golden sunset sands and peaceful coastal photography walk.' },
    ],
  },
  {
    id: 'baratang',
    name: 'Baratang Island',
    tag: 'Mangroves & Limestone Caves',
    subtitle: 'Speedboat Creek Safari, Mud Volcano & Rainforest Roads',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80',
    minNights: 1,
    defaultNights: 1,
    basePricePerNight: 4500,
    highlights: ['Mangrove Speedboat Safari', 'Limestone Caves Trek', 'Mud Volcano Phenomenon', 'Tribal Reserve Highway Pass'],
    resorts: [
      {
        id: 'brt-eco-dewdale',
        name: 'Dew Dale Wilderness Eco-Resort',
        category: 'Eco Retreat',
        tier: 'Eco Wilderness Resort',
        roomType: 'Premium Rainforest Heritage Suite',
        price: 5800,
        originalPrice: 7200,
        rating: 4.6,
        reviews: 120,
        image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=600&q=80',
        amenities: ['Forest View', 'Full Board Meal Options', 'Guided Trekking', 'AC', 'Organic Gardens'],
      },
      {
        id: 'brt-std-coralcreek',
        name: 'Coral Creek Eco Lodge',
        category: '3-Star Deluxe',
        tier: 'Standard Deluxe Lodge',
        roomType: 'Deluxe Creek View AC Room',
        price: 3500,
        originalPrice: 4400,
        rating: 4.3,
        reviews: 80,
        image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80',
        amenities: ['Creek View', 'Island Cuisine', 'Breakfast Included', 'AC'],
      },
    ],
    activities: [
      { id: 'act-brt-caves', name: 'Mangrove Speedboat & Limestone Caves Expedition', price: 1900, duration: '3.5 hrs', icon: Trees, desc: 'Thrilling speedboat ride through dense mangrove canopies and stalactite caves.' },
      { id: 'act-brt-mud', name: 'Mud Volcano & Rainforest Jeep Trail', price: 1100, duration: '2 hrs', icon: Compass, desc: 'Visit India’s rare active mud volcano vents surrounded by tropical jungle.' },
      { id: 'act-brt-parrot', name: 'Parrot Island Sunset Boat Excursion', price: 1600, duration: '2.5 hrs', icon: Sparkles, desc: 'Watch thousands of parrots and parakeets return to their island roosts at sunset.' },
    ],
  },
  {
    id: 'diglipur',
    name: 'Diglipur & North Andaman',
    tag: 'Twin Islands & Saddle Peak',
    subtitle: 'Ross & Smith Sandbar, Turtle Nesting & Rainforest Wilderness',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    minNights: 2,
    defaultNights: 2,
    basePricePerNight: 5000,
    highlights: ['Ross & Smith Twin Island Sandbar', 'Saddle Peak National Park', 'Kalipur Sea Turtle Nesting Beach', 'Alfred Spelunking Caves'],
    resorts: [
      {
        id: 'dgl-prem-pristine',
        name: 'Pristine Beach Resort (Kalipur Beach)',
        category: '4-Star Premium',
        tier: 'Premium Nature Beach Resort',
        roomType: 'Deluxe Wooden Beach Villa with Verandah',
        price: 6200,
        originalPrice: 7800,
        rating: 4.7,
        reviews: 110,
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
        amenities: ['Direct Kalipur Beach', 'Turtle Walk Desk', 'Multi-Cuisine Restaurant', 'AC'],
      },
      {
        id: 'dgl-std-turtle',
        name: 'Turtle Resort Kalipur (Govt. Tourism)',
        category: '3-Star Deluxe',
        tier: 'Standard Deluxe Resort',
        roomType: 'Ocean Breeze Deluxe AC Room',
        price: 3600,
        originalPrice: 4500,
        rating: 4.4,
        reviews: 95,
        image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80',
        amenities: ['Hilltop Ocean View', 'Breakfast Included', 'Spacious AC Rooms'],
      },
      {
        id: 'dgl-eco-saddle',
        name: 'Saddle Peak Nature Eco Lodge',
        category: 'Eco Retreat',
        tier: 'Eco Wilderness Lodge',
        roomType: 'Rainforest Eco Wooden Cottage',
        price: 3200,
        originalPrice: 4000,
        rating: 4.5,
        reviews: 70,
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80',
        amenities: ['Saddle Peak Foothills', 'Birdwatching Garden', 'Organic Local Meals'],
      },
    ],
    activities: [
      { id: 'act-dgl-twins', name: 'Ross & Smith Twin Island Sandbar Speedboat Safari', price: 2400, duration: '4.5 hrs', icon: Compass, desc: 'Walk across the white sandbar connecting two emerald islands surrounded by turquoise sea.' },
      { id: 'act-dgl-saddle', name: 'Saddle Peak National Park Guided Trek', price: 1800, duration: '5 hrs', icon: Trees, desc: 'Climb to the highest peak in the Andaman archipelago (732m) with panoramic ocean views.' },
      { id: 'act-dgl-turtle', name: 'Kalipur Beach Night Sea Turtle Nesting Walk', price: 1200, duration: '2.5 hrs', icon: Sparkles, desc: 'Witness endangered Olive Ridley and Leatherback sea turtles lay eggs under expert guide.' },
    ],
  },
  {
    id: 'rangat',
    name: 'Rangat & Middle Andaman',
    tag: 'Longest Mangrove Boardwalk',
    subtitle: 'Dhaninallah Mangrove Walkway, Morice Dera & Turtle Coast',
    image: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=800&q=80',
    minNights: 1,
    defaultNights: 1,
    basePricePerNight: 4000,
    highlights: ['Dhaninallah 713m Wooden Boardwalk', 'Morice Dera Volcanic Beach', 'Yeratta Mangrove Park', 'Amkunj Beach Eco-Park'],
    resorts: [
      {
        id: 'rgt-std-hawksbill',
        name: 'Hotel Hawksbill Nest (Govt. Managed)',
        category: '3-Star Deluxe',
        tier: 'Standard Deluxe Resort',
        roomType: 'Deluxe AC Garden Room',
        price: 3400,
        originalPrice: 4200,
        rating: 4.3,
        reviews: 65,
        image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80',
        amenities: ['Peaceful Garden', 'Island Kitchen', 'AC & Hot Water', 'Dhaninallah Proximity'],
      },
      {
        id: 'rgt-eco-dhaninallah',
        name: 'Dhaninallah Eco Walkway Retreat',
        category: 'Eco Retreat',
        tier: 'Eco Nature Cabins',
        roomType: 'Mangrove View Eco Wooden Hut',
        price: 2900,
        originalPrice: 3600,
        rating: 4.4,
        reviews: 50,
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80',
        amenities: ['Boardwalk Proximity', 'Rainforest Canopy', 'Fresh Seafood'],
      },
    ],
    activities: [
      { id: 'act-rgt-dhaninallah', name: 'Dhaninallah 713m Mangrove Wooden Boardwalk Tour', price: 700, duration: '2 hrs', icon: Trees, desc: 'Stroll India’s longest wooden mangrove canopy walkway opening onto a golden beach.' },
      { id: 'act-rgt-yeratta', name: 'Yeratta Mangrove Creek Interpretation Safari', price: 1100, duration: '2.5 hrs', icon: Compass, desc: 'Boat cruise through rare mangrove species and scenic observation watchtower.' },
    ],
  },
  {
    id: 'great-nicobar',
    name: 'Great Nicobar & Indira Point',
    tag: 'UNESCO Biosphere & Southernmost Tip',
    subtitle: 'Indira Point Lighthouse, Galathea River & Virgin Rainforests',
    image: 'https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=800&q=80',
    minNights: 2,
    defaultNights: 2,
    basePricePerNight: 8000,
    highlights: ['Indira Point Lighthouse (India’s Southernmost Landmark)', 'Galathea River Crocodile Safari', 'Campbell Bay Frontier Port', 'Leatherback Sanctuary'],
    resorts: [
      {
        id: 'gn-eco-campbell',
        name: 'Campbell Bay Eco-Frontier Lodge',
        category: 'Eco Retreat',
        tier: 'Protected Eco Resort',
        roomType: 'Biosphere Reserve Frontier Villa',
        price: 8500,
        originalPrice: 10500,
        rating: 4.8,
        reviews: 90,
        image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80',
        amenities: ['Biosphere View', 'Expedition Guide', 'All Meals Included', 'Solar Eco Power'],
      },
    ],
    activities: [
      { id: 'act-gn-indira', name: 'Indira Point Southernmost Landmark Safari', price: 4200, duration: '5 hrs', icon: Landmark, desc: 'Exclusive guided safari to India’s southernmost geographical tip and historic lighthouse.' },
      { id: 'act-gn-galathea', name: 'Galathea River Rainforest & Crocodile Safari', price: 3100, duration: '3 hrs', icon: Trees, desc: 'Boat cruise through ancient rainforests witnessing giant saltwater crocodiles and birdlife.' },
    ],
  },
];

// ── FERRY OPTIONS ──
const FERRY_TIERS = [
  { id: 'makruzz-premium', name: 'Makruzz Catamaran (Premium Class)', classTier: 'Premium AC Tier', pricePerLeg: 1850, perks: 'Comfortable pushback AC seats, large panoramic sea windows, snack bar & TV screens' },
  { id: 'nautika-deluxe', name: 'Nautika Luxury Catamaran (Deluxe Deck)', classTier: 'Deluxe Upper Deck', pricePerLeg: 2450, perks: 'Upper deck elevated ocean views, plush wide recliners, priority boarding & baggage handling' },
  { id: 'makruzz-royal', name: 'Makruzz Royal Class VIP Lounge', classTier: 'Royal VIP Cabin', pricePerLeg: 3600, perks: 'Private VIP 8-seater luxury cabin, dedicated concierge butler, complimentary gourmet meal box' },
  { id: 'green-ocean', name: 'Green Ocean 1 (Open Sun Deck Class)', classTier: 'Open Air Upper Deck', pricePerLeg: 1650, perks: 'Unique open-air sunset promenade deck, live music system, sea breeze viewing' },
  { id: 'nautika-royal', name: 'Nautika Royal Suite (VIP Lounge)', classTier: 'Royal Suite Deck', pricePerLeg: 3850, perks: 'Ultra-exclusive luxury suite, bridge view windows, personalized onboard service' },
];

export default function PlanTrip() {
  const { requireAuth, currentUser } = useAuth();
  const [plannerMode, setPlannerMode] = useState('quick-enquiry'); // 'quick-enquiry' | 'interactive-builder'
  const [currentStep, setCurrentStep] = useState(1);

  // Read URL params
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const dest = params.get('destination') || params.get('id');
    if (dest) {
      const match = ISLANDS_DATA.find(i => i.id === dest.toLowerCase() || i.name.toLowerCase().includes(dest.toLowerCase()));
      if (match && !selectedIslands.includes(match.id)) {
        setSelectedIslands(['portblair', match.id]);
      }
    }
  }, []);

  // Form States
  const [selectedIslands, setSelectedIslands] = useState(['portblair', 'havelock']);
  const [islandNights, setIslandNights] = useState({
    portblair: 2,
    havelock: 2,
    neil: 1,
    baratang: 1,
    diglipur: 2,
    rangat: 1,
    'great-nicobar': 2,
  });
  const [travelMonth, setTravelMonth] = useState('Oct-Dec');
  const [startDate, setStartDate] = useState('');
  const [adults, setAdults] = useState(2);
  const [childrenCount, setChildrenCount] = useState(0);

  // Step 2: Resort selections (islandId -> resortId)
  const [selectedResorts, setSelectedResorts] = useState({
    portblair: 'pb-lux-symphony',
    havelock: 'hvl-prem-barefoot',
    neil: 'nl-prem-summersands',
    baratang: 'brt-eco-dewdale',
    diglipur: 'dgl-prem-pristine',
    rangat: 'rgt-std-hawksbill',
    'great-nicobar': 'gn-eco-campbell',
  });

  // Step 2: Room Category Filter per Island
  const [islandCategoryFilter, setIslandCategoryFilter] = useState({
    portblair: 'ALL',
    havelock: 'ALL',
    neil: 'ALL',
    baratang: 'ALL',
    diglipur: 'ALL',
    rangat: 'ALL',
    'great-nicobar': 'ALL',
  });

  // Step 3: Activities selections (array of activity IDs) - Defaults to empty [] (₹0 unless user explicitly selects)
  const [selectedActivityIds, setSelectedActivityIds] = useState([]);

  // Step 4: Ferry Tier & Vehicle selection
  const [selectedFerryTier, setSelectedFerryTier] = useState('makruzz-premium');
  const [includePrivateCabs, setIncludePrivateCabs] = useState(true);
  const [includeMealPlan, setIncludeMealPlan] = useState('CP'); // 'CP' (Breakfast) | 'MAP' (Breakfast + Dinner) | 'AP' (All Meals)

  // Razorpay Checkout State
  const [showRazorpay, setShowRazorpay] = useState(false);
  const [razorpayData, setRazorpayData] = useState(null);

  // Guest & Contact Information
  const [travelerInfo, setTravelerInfo] = useState({
    fullName: currentUser?.name || '',
    email: currentUser?.email || '',
    phone: currentUser?.phone || '',
    specialRequests: '',
  });

  useEffect(() => {
    if (currentUser) {
      setTravelerInfo(prev => ({
        ...prev,
        fullName: prev.fullName || currentUser.name || '',
        email: prev.email || currentUser.email || '',
        phone: prev.phone || currentUser.phone || '',
      }));
    }
  }, [currentUser]);

  // Toggle Island Selection
  const handleToggleIsland = (islandId) => {
    setSelectedIslands(prev => {
      if (prev.includes(islandId)) {
        if (prev.length <= 1) return prev; // Keep at least one
        return prev.filter(id => id !== islandId);
      } else {
        return [...prev, islandId];
      }
    });
  };

  const handleNightChange = (islandId, delta) => {
    setIslandNights(prev => ({
      ...prev,
      [islandId]: Math.max(1, Math.min(10, (prev[islandId] || 1) + delta)),
    }));
  };

  const handleToggleActivity = (actId) => {
    setSelectedActivityIds(prev =>
      prev.includes(actId) ? prev.filter(id => id !== actId) : [...prev, actId]
    );
  };

  // Total Nights
  const totalNights = useMemo(() => {
    return selectedIslands.reduce((acc, id) => acc + (islandNights[id] || 1), 0);
  }, [selectedIslands, islandNights]);

  const totalDays = totalNights + 1;

  // Selected Ferry Data
  const ferryData = useMemo(() => {
    return FERRY_TIERS.find(f => f.id === selectedFerryTier) || FERRY_TIERS[0];
  }, [selectedFerryTier]);

  // ── DYNAMIC PRICING CALCULATION ──
  const pricingBreakdown = useMemo(() => {
    // 1. Stays cost
    let staysTotal = 0;
    selectedIslands.forEach(islandId => {
      const island = ISLANDS_DATA.find(i => i.id === islandId);
      if (!island) return;
      const resortId = selectedResorts[islandId];
      const resort = island.resorts.find(r => r.id === resortId) || island.resorts[0];
      const nights = islandNights[islandId] || 1;
      const roomCost = (resort ? resort.price : island.basePricePerNight) * nights;
      staysTotal += roomCost;
    });

    // 2. Activities cost
    let activitiesTotal = 0;
    const allActivities = ISLANDS_DATA.flatMap(i => i.activities);
    selectedActivityIds.forEach(actId => {
      const act = allActivities.find(a => a.id === actId);
      if (act) {
        activitiesTotal += act.price * adults;
      }
    });

    // 3. Ferries cost (number of inter-island legs = islands.length)
    const ferryLegs = Math.max(1, selectedIslands.length);
    const ferriesTotal = ferryLegs * ferryData.pricePerLeg * adults;

    // 4. Private AC Cabs & Jetty Transfers
    const cabRatePerDay = 2400;
    const cabsTotal = includePrivateCabs ? totalDays * cabRatePerDay : 0;

    // 5. Meal Plan supplement (if upgraded)
    let mealTotal = 0;
    if (includeMealPlan === 'MAP') {
      mealTotal = totalNights * 900 * adults; // Breakfast + Dinner
    } else if (includeMealPlan === 'AP') {
      mealTotal = totalNights * 1600 * adults; // All meals
    }

    // Total Cost
    const subtotal = staysTotal + activitiesTotal + ferriesTotal + cabsTotal + mealTotal;
    const taxAndGst = Math.round(subtotal * 0.05);
    const grandTotal = subtotal + taxAndGst;
    const perPersonPrice = Math.round(grandTotal / (adults || 1));

    return {
      staysTotal,
      activitiesTotal,
      ferriesTotal,
      cabsTotal,
      mealTotal,
      subtotal,
      taxAndGst,
      grandTotal,
      perPersonPrice,
    };
  }, [selectedIslands, islandNights, selectedResorts, selectedActivityIds, selectedFerryTier, includePrivateCabs, includeMealPlan, adults, totalNights, totalDays, ferryData]);

  // ── GENERATE DAY-WISE CUSTOM ITINERARY ──
  const generatedItinerary = useMemo(() => {
    const schedule = [];
    let currentDayNumber = 1;

    selectedIslands.forEach((islandId, idx) => {
      const island = ISLANDS_DATA.find(i => i.id === islandId);
      if (!island) return;
      const nights = islandNights[islandId] || 1;
      const resortId = selectedResorts[islandId];
      const resort = island.resorts.find(r => r.id === resortId) || island.resorts[0];
      const islandActivities = island.activities.filter(a => selectedActivityIds.includes(a.id));

      for (let n = 1; n <= nights; n++) {
        let title = '';
        let morning = '';
        let afternoon = '';
        let evening = '';

        if (currentDayNumber === 1) {
          title = `Day 1: Arrival in Port Blair & Island Welcome`;
          morning = `Airport pickup from Veer Savarkar International Airport in private AC car. Check-in to ${resort?.name || 'resort'} (${resort?.roomType || 'Selected Category Room'}) and refresh with welcome drink.`;
          afternoon = islandActivities.length > 0 ? `Participate in ${islandActivities[0]?.name}.` : `Visit historic Aberdeen Heritage precinct and local Andaman handicraft market.`;
          evening = `Attend the iconic Cellular Jail Light & Sound memorial show followed by fresh seafood dinner.`;
        } else if (n === 1 && idx > 0) {
          title = `Day ${currentDayNumber}: High-Speed Cruise Transfer to ${island.name}`;
          morning = `Morning transfer to jetty in private AC car. Board ${ferryData.name} (${ferryData.classTier}) for smooth catamaran voyage to ${island.name}.`;
          afternoon = `Resort check-in at ${resort?.name || island.name} (${resort?.roomType || 'Selected Room Category'}). Unpack and relax along the turquoise beach.`;
          evening = islandActivities.length > 0 ? `Experience ${islandActivities[0]?.name}.` : `Enjoy golden tropical sunset on the serene shores with coastal drinks.`;
        } else {
          title = `Day ${currentDayNumber}: Exploring Natural Wonders of ${island.name}`;
          const currentAct = islandActivities[n % islandActivities.length] || islandActivities[0];
          morning = currentAct ? `Embark on ${currentAct.name} with certified local island instructors and safety gear.` : `Morning beach walk, coastal photography and coral reef observation.`;
          afternoon = `Leisure lunch featuring Andaman sea delicacies. Visit ${island.highlights[n % island.highlights.length] || 'scenic viewpoint'}.`;
          evening = `Sunset photography session and candlelit dinner by the gentle ocean waves.`;
        }

        schedule.push({
          dayNumber: currentDayNumber,
          islandName: island.name,
          title,
          resortName: resort ? `${resort.name} • ${resort.roomType}` : 'Luxury Resort',
          resortCategory: resort?.category || resort?.tier || 'Luxury 5-Star',
          morning,
          afternoon,
          evening,
        });

        currentDayNumber++;
      }
    });

    // Final Departure Day
    schedule.push({
      dayNumber: currentDayNumber,
      islandName: 'Port Blair',
      title: `Day ${currentDayNumber}: Souvenir Shopping & Departure with Cherished Memories`,
      resortName: 'Private AC Airport Transfer',
      resortCategory: 'Chauffeured Transfer',
      morning: `Buffet breakfast at resort. Check out and private AC drive to Port Blair airport (Sagarika Emporium stop for pearls & sea shells).`,
      afternoon: `Board flight back home carrying unforgettable memories and HD media from your Andaman holiday.`,
      evening: `Safe landing at home. Our 24/7 concierge remains at your service for future journeys.`,
    });

    return schedule;
  }, [selectedIslands, islandNights, selectedResorts, selectedActivityIds, ferryData]);

  // Proceed to Step / Validation
  const handleNextStep = () => {
    if (currentStep === 4) {
      requireAuth(
        () => {
          setCurrentStep(5);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        },
        'Please sign in to generate and review your customized Andaman itinerary.'
      );
    } else {
      setCurrentStep(s => Math.min(s + 1, 5));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevStep = () => {
    setCurrentStep(s => Math.max(s - 1, 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Launch Razorpay Booking for Custom Package
  const handleProceedBooking = () => {
    requireAuth(
      () => {
        const payload = {
          bookingType: 'PACKAGE',
          bookingDate: startDate || new Date().toISOString().substring(0, 10),
          totalGuests: adults + childrenCount,
          adultCount: adults,
          childCount: childrenCount,
          customerName: travelerInfo.fullName || currentUser?.name || 'Valued Traveler',
          customerEmail: travelerInfo.email || currentUser?.email || 'traveler@andaman-trails.com',
          customerPhone: travelerInfo.phone || currentUser?.phone || '9876543210',
          specialRequests: `Custom Package: ${selectedIslands.map(id => ISLANDS_DATA.find(i => i.id === id)?.name || id).join(' → ')} (${totalNights}N/${totalDays}D) • Ferry: ${ferryData.name} • Meal Plan: ${includeMealPlan} • ${travelerInfo.specialRequests || 'Standard Luxury Setup'}`,
          totalAmount: pricingBreakdown.grandTotal,
        };

        setRazorpayData({
          title: `Customized Andaman Holiday (${totalNights}N/${totalDays}D)`,
          type: 'Package',
          amount: pricingBreakdown.grandTotal,
          customerName: travelerInfo.fullName || currentUser?.name || 'Valued Traveler',
          customerEmail: travelerInfo.email || currentUser?.email || 'traveler@andaman-trails.com',
          customerPhone: travelerInfo.phone || currentUser?.phone || '9876543210',
          payload,
        });

        setShowRazorpay(true);
      },
      'Please sign in to confirm and book your custom package.'
    );
  };

  // WhatsApp Concierge Share
  const handleWhatsAppShare = () => {
    const islandsText = selectedIslands.map(id => ISLANDS_DATA.find(i => i.id === id)?.name || id).join(', ');
    const message = `Hello Andaman Trails Concierge! I have designed my custom Andaman holiday:\n\n🌴 Islands: ${islandsText} (${totalNights}N/${totalDays}D)\n👥 Travelers: ${adults} Adults, ${childrenCount} Kids\n🚢 Ferry: ${ferryData.name}\n💰 Estimated Budget: ₹${pricingBreakdown.grandTotal.toLocaleString()}\n\nPlease review and connect with me.`;
    window.open(`https://wa.me/919474200000?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div style={{ minHeight: '100vh', background: '#FAF4EE', color: '#0B2545', fontFamily: "'Inter', sans-serif", paddingTop: 90 }}>
      {/* 1. HERO HEADER */}
      <div style={{
        background: 'linear-gradient(135deg, #0B2545 0%, #153B68 100%)',
        color: '#ffffff',
        padding: '50px 24px 60px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: -100,
          right: -100,
          width: 350,
          height: 350,
          background: 'radial-gradient(circle, rgba(240, 101, 67, 0.25) 0%, transparent 70%)',
          borderRadius: '50%',
        }} />

        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: 'rgba(240, 101, 67, 0.2)',
            border: '1px solid rgba(240, 101, 67, 0.4)',
            color: '#FF8A5B',
            padding: '6px 16px',
            borderRadius: 30,
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 11.5,
            fontWeight: 900,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: 16,
          }}>
            <Sparkles size={14} />
            AI & Concierge Custom Package Designer
          </div>

          <h1 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(32px, 4.5vw, 52px)',
            fontWeight: 700,
            margin: '0 0 14px',
            lineHeight: 1.15,
            color: '#ffffff',
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.25)',
          }}>
            Design Your Tailored Andaman Experience
          </h1>

          <p style={{
            fontSize: 'clamp(14px, 2vw, 17px)',
            color: '#cbd5e1',
            maxWidth: 680,
            margin: '0 auto 28px',
            lineHeight: 1.6,
          }}>
            Customize every moment: choose islands, room categories & luxury beachfront villas, water adventures, and high-speed cruise transfers with instant transparent pricing.
          </p>

          {/* Mode Switcher Tabs */}
          <div style={{
            display: 'inline-flex',
            background: 'rgba(255, 255, 255, 0.1)',
            padding: '5px',
            borderRadius: 30,
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            marginBottom: 20,
          }}>
            <button
              onClick={() => setPlannerMode('quick-enquiry')}
              style={{
                padding: '10px 24px',
                borderRadius: 24,
                border: 'none',
                background: plannerMode === 'quick-enquiry' ? '#F06543' : 'transparent',
                color: '#ffffff',
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 13,
                fontWeight: 800,
                cursor: 'pointer',
                transition: 'all 0.2s',
                boxShadow: plannerMode === 'quick-enquiry' ? '0 4px 14px rgba(240, 101, 67, 0.4)' : 'none',
              }}
            >
              📋 Quick Holiday Enquiry Form
            </button>
            <button
              onClick={() => setPlannerMode('interactive-builder')}
              style={{
                padding: '10px 24px',
                borderRadius: 24,
                border: 'none',
                background: plannerMode === 'interactive-builder' ? '#F06543' : 'transparent',
                color: '#ffffff',
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 13,
                fontWeight: 800,
                cursor: 'pointer',
                transition: 'all 0.2s',
                boxShadow: plannerMode === 'interactive-builder' ? '0 4px 14px rgba(240, 101, 67, 0.4)' : 'none',
              }}
            >
              🛠️ 5-Step Custom Package Builder
            </button>
          </div>

          {/* 5-Step Indicator */}
          {plannerMode === 'interactive-builder' && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              marginTop: 16,
              flexWrap: 'wrap',
            }}>
              {[
                { step: 1, label: '1. Destinations & Nights' },
                { step: 2, label: '2. Stays & Room Tiers' },
                { step: 3, label: '3. Activities & Safari' },
                { step: 4, label: '4. Ferries & Cabs' },
                { step: 5, label: '5. Custom Itinerary & Book' },
              ].map((item, idx) => (
                <React.Fragment key={item.step}>
                  <button
                    onClick={() => item.step < currentStep && setCurrentStep(item.step)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      background: currentStep === item.step ? '#F06543' : (currentStep > item.step ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.06)'),
                      border: '1px solid',
                      borderColor: currentStep === item.step ? '#F06543' : (currentStep > item.step ? '#38bdf8' : 'rgba(255,255,255,0.1)'),
                      color: '#ffffff',
                      padding: '8px 16px',
                      borderRadius: 20,
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: 12,
                      fontWeight: 800,
                      cursor: item.step < currentStep ? 'pointer' : 'default',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <span style={{
                      width: 20,
                      height: 20,
                      borderRadius: '50%',
                      background: currentStep > item.step ? '#38bdf8' : 'rgba(0,0,0,0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 11,
                      fontWeight: 900,
                    }}>
                      {currentStep > item.step ? <Check size={12} /> : item.step}
                    </span>
                    <span>{item.label}</span>
                  </button>
                  {idx < 4 && <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: 12 }}>→</span>}
                </React.Fragment>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* 2. MAIN CONTAINER */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '36px 20px 80px' }}>
        {plannerMode === 'quick-enquiry' ? (
          <PlanYourHolidayForm />
        ) : (
          <>
            {/* STEP 1: DESTINATIONS & NIGHTS */}
            {currentStep === 1 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                <div style={{ background: '#ffffff', borderRadius: 24, padding: 32, border: '1.5px solid #EBDED2', boxShadow: '0 8px 30px rgba(11, 37, 69, 0.04)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, marginBottom: 8 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <MapPin size={22} color="#F06543" />
                      <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 22, fontWeight: 900, color: '#0B2545', margin: 0 }}>
                        Select Tropical Islands & Duration
                      </h2>
                    </div>

                    <div style={{ background: '#FFF0EB', border: '1px solid #FFE4D6', color: '#F06543', padding: '6px 14px', borderRadius: 20, fontSize: 12, fontWeight: 800 }}>
                      Total Selected: {totalNights} Nights / {totalDays} Days
                    </div>
                  </div>

                  <p style={{ color: '#64748b', fontSize: 14, margin: '0 0 24px' }}>
                    Choose the tropical Andaman destinations you wish to visit and specify the number of nights per island. Add or remove any island to tailor your journey.
                  </p>

                  {/* Islands Grid */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 22 }}>
                    {ISLANDS_DATA.map((island) => {
                      const isSelected = selectedIslands.includes(island.id);
                      const nights = islandNights[island.id] || island.defaultNights;

                      return (
                        <div
                          key={island.id}
                          style={{
                            border: '2px solid',
                            borderColor: isSelected ? '#F06543' : '#EBDED2',
                            background: isSelected ? '#FFFDFB' : '#ffffff',
                            borderRadius: 20,
                            overflow: 'hidden',
                            boxShadow: isSelected ? '0 10px 25px rgba(240, 101, 67, 0.12)' : 'none',
                            transition: 'all 0.25s ease',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                          }}
                        >
                          <div>
                            <div style={{ position: 'relative', height: 170, overflow: 'hidden' }}>
                              <img src={island.image} alt={island.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                              <div style={{ position: 'absolute', top: 12, left: 12 }}>
                                <span style={{
                                  background: 'rgba(11, 37, 69, 0.85)',
                                  backdropFilter: 'blur(4px)',
                                  color: '#38bdf8',
                                  fontSize: 10.5,
                                  fontWeight: 900,
                                  padding: '4px 10px',
                                  borderRadius: 8,
                                  textTransform: 'uppercase',
                                  letterSpacing: '0.04em',
                                }}>
                                  {island.tag}
                                </span>
                              </div>

                              <div style={{ position: 'absolute', top: 12, right: 12 }}>
                                <button
                                  onClick={() => handleToggleIsland(island.id)}
                                  style={{
                                    background: isSelected ? '#F06543' : 'rgba(11, 37, 69, 0.85)',
                                    border: 'none',
                                    color: '#ffffff',
                                    padding: '6px 14px',
                                    borderRadius: 20,
                                    fontFamily: "'Space Grotesk', sans-serif",
                                    fontSize: 11,
                                    fontWeight: 900,
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 6,
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                                  }}
                                >
                                  {isSelected ? <Check size={13} /> : null}
                                  {isSelected ? 'INCLUDED' : '+ ADD ISLAND'}
                                </button>
                              </div>
                            </div>

                            <div style={{ padding: 20 }}>
                              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 18, fontWeight: 900, color: '#0B2545', margin: '0 0 4px' }}>
                                {island.name}
                              </h3>
                              <div style={{ fontSize: 12, color: '#F06543', fontWeight: 800, marginBottom: 10 }}>
                                {island.subtitle}
                              </div>

                              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
                                {island.highlights.slice(0, 3).map((h, i) => (
                                  <span key={i} style={{ background: '#FAF4EE', color: '#475569', fontSize: 11, padding: '3px 8px', borderRadius: 8, fontWeight: 700 }}>
                                    • {h}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Nights Selector */}
                          {isSelected && (
                            <div style={{ padding: '12px 20px 18px', background: '#FFF5F0', borderTop: '1px solid #FFE4D6', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                              <div style={{ fontSize: 12.5, fontWeight: 800, color: '#0B2545' }}>
                                Duration of Stay:
                              </div>

                              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                <button
                                  onClick={() => handleNightChange(island.id, -1)}
                                  disabled={nights <= 1}
                                  style={{ width: 32, height: 32, borderRadius: 8, background: '#ffffff', border: '1px solid #EBDED2', fontWeight: 900, fontSize: 16, cursor: nights <= 1 ? 'not-allowed' : 'pointer' }}
                                >
                                  -
                                </button>
                                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 900, color: '#F06543', minWidth: 28, textAlign: 'center' }}>
                                  {nights}N
                                </span>
                                <button
                                  onClick={() => handleNightChange(island.id, 1)}
                                  style={{ width: 32, height: 32, borderRadius: 8, background: '#ffffff', border: '1px solid #EBDED2', fontWeight: 900, fontSize: 16, cursor: 'pointer' }}
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Travel Group & Month */}
                <div style={{ background: '#ffffff', borderRadius: 24, padding: 32, border: '1.5px solid #EBDED2', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
                  <div>
                    <label style={{ display: 'block', fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, fontWeight: 900, color: '#0B2545', marginBottom: 8 }}>
                      PREFERRED TRAVEL MONTH
                    </label>
                    <select
                      value={travelMonth}
                      onChange={(e) => setTravelMonth(e.target.value)}
                      style={{ width: '100%', padding: '12px 16px', borderRadius: 12, border: '1.5px solid #EBDED2', background: '#FAF4EE', fontSize: 14, fontWeight: 700, color: '#0B2545', outline: 'none' }}
                    >
                      <option value="Oct-Dec">October – December (Peak Tropical Season)</option>
                      <option value="Jan-Mar">January – March (Best Scuba & Ultra-Clear Waters)</option>
                      <option value="Apr-May">April – May (Summer Island Breezes & Warm Sun)</option>
                      <option value="Jun-Sep">June – September (Monsoon Rainforest Lush)</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, fontWeight: 900, color: '#0B2545', marginBottom: 8 }}>
                      TENTATIVE START DATE (OPTIONAL)
                    </label>
                    <input
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      style={{ width: '100%', padding: '11px 16px', borderRadius: 12, border: '1.5px solid #EBDED2', background: '#FAF4EE', fontSize: 14, fontWeight: 700, color: '#0B2545', outline: 'none' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, fontWeight: 900, color: '#0B2545', marginBottom: 8 }}>
                      ADULT TRAVELERS (12+ YRS)
                    </label>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <button onClick={() => setAdults(Math.max(1, adults - 1))} style={{ width: 44, height: 44, borderRadius: 12, background: '#FAF4EE', border: '1px solid #EBDED2', fontSize: 18, fontWeight: 900, cursor: 'pointer' }}>-</button>
                      <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 20, fontWeight: 900, color: '#0B2545', minWidth: 40, textAlign: 'center' }}>{adults}</span>
                      <button onClick={() => setAdults(adults + 1)} style={{ width: 44, height: 44, borderRadius: 12, background: '#FAF4EE', border: '1px solid #EBDED2', fontSize: 18, fontWeight: 900, cursor: 'pointer' }}>+</button>
                      <span style={{ fontSize: 12, color: '#64748b' }}>Adults</span>
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, fontWeight: 900, color: '#0B2545', marginBottom: 8 }}>
                      CHILDREN (2–11 YRS)
                    </label>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <button onClick={() => setChildrenCount(Math.max(0, childrenCount - 1))} style={{ width: 44, height: 44, borderRadius: 12, background: '#FAF4EE', border: '1px solid #EBDED2', fontSize: 18, fontWeight: 900, cursor: 'pointer' }}>-</button>
                      <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 20, fontWeight: 900, color: '#0B2545', minWidth: 40, textAlign: 'center' }}>{childrenCount}</span>
                      <button onClick={() => setChildrenCount(childrenCount + 1)} style={{ width: 44, height: 44, borderRadius: 12, background: '#FAF4EE', border: '1px solid #EBDED2', fontSize: 18, fontWeight: 900, cursor: 'pointer' }}>+</button>
                      <span style={{ fontSize: 12, color: '#64748b' }}>Kids</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2: RESORTS & STAYS (ORGANIZED BY ROOM CATEGORIES) */}
            {currentStep === 2 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                <div style={{ background: '#ffffff', borderRadius: 24, padding: 32, border: '1.5px solid #EBDED2', boxShadow: '0 8px 30px rgba(11, 37, 69, 0.04)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                    <Home size={22} color="#F06543" />
                    <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 22, fontWeight: 900, color: '#0B2545', margin: 0 }}>
                      Choose Island Stays & Room Tiers
                    </h2>
                  </div>
                  <p style={{ color: '#64748b', fontSize: 14, margin: '0 0 24px' }}>
                    Select your preferred accommodation & room category for each island. Filter easily by 5★ Luxury Villas, 4★ Premium Beachside, 3★ Deluxe, or Eco Nature Stays.
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
                    {selectedIslands.map((islandId) => {
                      const island = ISLANDS_DATA.find(i => i.id === islandId);
                      if (!island) return null;
                      const currentResortId = selectedResorts[islandId];
                      const activeFilter = islandCategoryFilter[islandId] || 'ALL';

                      // Filter resorts by selected category
                      const filteredResorts = activeFilter === 'ALL'
                        ? island.resorts
                        : island.resorts.filter(r => r.category === activeFilter);

                      const nights = islandNights[islandId] || 1;
                      const selectedResortObj = island.resorts.find(r => r.id === currentResortId) || island.resorts[0];

                      return (
                        <div key={islandId} style={{ background: '#FAF4EE', borderRadius: 22, padding: 24, border: '1.5px solid #EBDED2' }}>
                          {/* Island Header & Active Selection Summary */}
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, marginBottom: 18 }}>
                            <div>
                              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 19, fontWeight: 900, color: '#0B2545', margin: 0 }}>
                                  {island.name}
                                </h3>
                                <span style={{ background: '#0B2545', color: '#ffffff', fontSize: 11, fontWeight: 800, padding: '2px 10px', borderRadius: 20 }}>
                                  {nights} {nights === 1 ? 'Night' : 'Nights'}
                                </span>
                              </div>
                              <span style={{ fontSize: 12.5, color: '#64748b' }}>
                                Choose room category and resort accommodation
                              </span>
                            </div>

                            {/* Current Selection summary pill */}
                            {selectedResortObj && (
                              <div style={{
                                background: '#ffffff',
                                border: '1.5px solid #F06543',
                                borderRadius: 14,
                                padding: '8px 16px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 10,
                                boxShadow: '0 4px 12px rgba(240, 101, 67, 0.08)'
                              }}>
                                <CheckCircle2 size={16} color="#F06543" />
                                <div>
                                  <div style={{ fontSize: 10.5, color: '#64748b', fontWeight: 800, textTransform: 'uppercase' }}>CHOSEN STAY:</div>
                                  <div style={{ fontSize: 13, fontWeight: 900, color: '#0B2545' }}>
                                    {selectedResortObj.name} • <span style={{ color: '#F06543' }}>{selectedResortObj.roomType}</span>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>

                          {/* Room Category Tabs / Filter Pills */}
                          <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 8,
                            flexWrap: 'wrap',
                            marginBottom: 20,
                            background: '#ffffff',
                            padding: '8px 12px',
                            borderRadius: 16,
                            border: '1px solid #EBDED2',
                          }}>
                            <span style={{ fontSize: 11, fontWeight: 900, color: '#64748b', textTransform: 'uppercase', marginRight: 4, display: 'flex', alignItems: 'center', gap: 4 }}>
                              <Filter size={13} color="#F06543" /> Room Category:
                            </span>
                            {STAY_CATEGORIES.map((cat) => {
                              const isActive = activeFilter === cat.id;
                              const count = cat.id === 'ALL'
                                ? island.resorts.length
                                : island.resorts.filter(r => r.category === cat.id).length;

                              if (count === 0 && cat.id !== 'ALL') return null;

                              return (
                                <button
                                  key={cat.id}
                                  onClick={() => setIslandCategoryFilter(prev => ({ ...prev, [islandId]: cat.id }))}
                                  style={{
                                    background: isActive ? '#0B2545' : 'transparent',
                                    color: isActive ? '#ffffff' : '#0B2545',
                                    border: 'none',
                                    borderRadius: 12,
                                    padding: '6px 14px',
                                    fontFamily: "'Space Grotesk', sans-serif",
                                    fontSize: 12,
                                    fontWeight: isActive ? 900 : 700,
                                    cursor: 'pointer',
                                    transition: 'all 0.2s ease',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 6,
                                  }}
                                >
                                  <span>{cat.label}</span>
                                  <span style={{
                                    background: isActive ? '#F06543' : '#FAF4EE',
                                    color: isActive ? '#ffffff' : '#64748b',
                                    fontSize: 10,
                                    fontWeight: 900,
                                    padding: '1px 6px',
                                    borderRadius: 10,
                                  }}>
                                    {count}
                                  </span>
                                </button>
                              );
                            })}
                          </div>

                          {/* Resorts / Room Cards Grid */}
                          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: 18 }}>
                            {filteredResorts.map((resort) => {
                              const isChosen = currentResortId === resort.id;
                              const categoryBadgeColor =
                                resort.category === '5-Star Luxury' ? '#7C3AED' :
                                resort.category === '4-Star Premium' ? '#0284C7' :
                                resort.category === 'Eco Retreat' ? '#059669' : '#D97706';

                              return (
                                <div
                                  key={resort.id}
                                  onClick={() => setSelectedResorts(prev => ({ ...prev, [islandId]: resort.id }))}
                                  style={{
                                    background: '#ffffff',
                                    border: '2px solid',
                                    borderColor: isChosen ? '#F06543' : '#EBDED2',
                                    borderRadius: 18,
                                    overflow: 'hidden',
                                    cursor: 'pointer',
                                    transition: 'all 0.25s ease',
                                    boxShadow: isChosen ? '0 10px 24px rgba(240, 101, 67, 0.18)' : '0 2px 8px rgba(0,0,0,0.03)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                  }}
                                >
                                  <div>
                                    {/* Image + Category Pill */}
                                    <div style={{ position: 'relative', height: 160, overflow: 'hidden' }}>
                                      <img
                                        src={resort.image}
                                        alt={resort.name}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                                      />
                                      <div style={{ position: 'absolute', top: 10, left: 10, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                                        <span style={{
                                          background: categoryBadgeColor,
                                          color: '#ffffff',
                                          fontSize: 10.5,
                                          fontWeight: 900,
                                          padding: '4px 10px',
                                          borderRadius: 8,
                                          boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
                                          letterSpacing: '0.02em',
                                        }}>
                                          {resort.tier || resort.category}
                                        </span>
                                      </div>

                                      {isChosen && (
                                        <div style={{
                                          position: 'absolute',
                                          top: 10,
                                          right: 10,
                                          background: '#F06543',
                                          color: '#ffffff',
                                          fontSize: 11,
                                          fontWeight: 900,
                                          padding: '4px 10px',
                                          borderRadius: 20,
                                          display: 'flex',
                                          alignItems: 'center',
                                          gap: 4,
                                          boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                                        }}>
                                          <Check size={13} />
                                          SELECTED
                                        </div>
                                      )}
                                    </div>

                                    {/* Details */}
                                    <div style={{ padding: 18 }}>
                                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                                          <Star size={13} className="fill-[#ffd700] text-[#ffd700]" />
                                          <span style={{ fontSize: 12, fontWeight: 900, color: '#0B2545' }}>{resort.rating}</span>
                                          <span style={{ fontSize: 11, color: '#94a3b8' }}>({resort.reviews || 150}+ reviews)</span>
                                        </div>
                                        <span style={{ fontSize: 10.5, fontWeight: 800, color: categoryBadgeColor, textTransform: 'uppercase' }}>
                                          {resort.category}
                                        </span>
                                      </div>

                                      <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 15, fontWeight: 900, color: '#0B2545', margin: '0 0 8px', lineHeight: 1.3 }}>
                                        {resort.name}
                                      </h4>

                                      {/* Specific Room Category / Room Type Box */}
                                      <div style={{
                                        background: '#FAF4EE',
                                        borderRadius: 10,
                                        padding: '8px 12px',
                                        marginBottom: 12,
                                        border: '1px solid #F5ECE5',
                                      }}>
                                        <div style={{ fontSize: 10, fontWeight: 800, color: '#F06543', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                          ROOM CATEGORY:
                                        </div>
                                        <div style={{ fontSize: 12.5, fontWeight: 800, color: '#0B2545' }}>
                                          {resort.roomType}
                                        </div>
                                      </div>

                                      {/* Amenity tags */}
                                      {resort.amenities && (
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginBottom: 14 }}>
                                          {resort.amenities.slice(0, 3).map((amenity, amIdx) => (
                                            <span key={amIdx} style={{
                                              background: '#F1F5F9',
                                              color: '#475569',
                                              fontSize: 10.5,
                                              fontWeight: 700,
                                              padding: '2px 8px',
                                              borderRadius: 6,
                                            }}>
                                              ✓ {amenity}
                                            </span>
                                          ))}
                                        </div>
                                      )}
                                    </div>
                                  </div>

                                  {/* Card Footer: Pricing & Action */}
                                  <div style={{
                                    padding: '14px 18px',
                                    background: isChosen ? '#FFF5F0' : '#FAF4EE',
                                    borderTop: '1px solid #EBDED2',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                  }}>
                                    <div>
                                      <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                                        <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 900, color: '#F06543' }}>
                                          ₹{resort.price.toLocaleString()}
                                        </span>
                                        <span style={{ fontSize: 11, color: '#64748b', fontWeight: 600 }}>/night</span>
                                        {resort.originalPrice && (
                                          <span style={{ fontSize: 11, color: '#94a3b8', textDecoration: 'line-through' }}>
                                            ₹{resort.originalPrice.toLocaleString()}
                                          </span>
                                        )}
                                      </div>
                                      <div style={{ fontSize: 11, color: '#64748b', fontWeight: 700 }}>
                                        Total for {nights}N: <strong style={{ color: '#0B2545' }}>₹{(resort.price * nights).toLocaleString()}</strong>
                                      </div>
                                    </div>

                                    <button
                                      type="button"
                                      style={{
                                        background: isChosen ? '#F06543' : '#ffffff',
                                        color: isChosen ? '#ffffff' : '#0B2545',
                                        border: '1.5px solid',
                                        borderColor: isChosen ? '#F06543' : '#0B2545',
                                        padding: '6px 14px',
                                        borderRadius: 10,
                                        fontFamily: "'Space Grotesk', sans-serif",
                                        fontSize: 11.5,
                                        fontWeight: 900,
                                        cursor: 'pointer',
                                        transition: 'all 0.2s ease',
                                      }}
                                    >
                                      {isChosen ? '✓ SELECTED' : 'SELECT ROOM'}
                                    </button>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3: ACTIVITIES & SAFARI */}
            {currentStep === 3 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                <div style={{ background: '#ffffff', borderRadius: 24, padding: 32, border: '1.5px solid #EBDED2' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, marginBottom: 8 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <Compass size={22} color="#F06543" />
                      <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 22, fontWeight: 900, color: '#0B2545', margin: 0 }}>
                        Select Activities, Scuba & Water Adventures
                      </h2>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <button
                        type="button"
                        onClick={() => setSelectedActivityIds([])}
                        style={{
                          background: '#FAF4EE',
                          border: '1.5px solid #EBDED2',
                          color: '#64748b',
                          padding: '6px 14px',
                          borderRadius: 12,
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: 12,
                          fontWeight: 800,
                          cursor: 'pointer',
                        }}
                      >
                        ✕ Clear All (₹0)
                      </button>
                      <button
                        type="button"
                        onClick={() => setSelectedActivityIds(['act-pb-jail', 'act-hvl-scuba', 'act-nl-glassboat'])}
                        style={{
                          background: '#0B2545',
                          border: 'none',
                          color: '#ffffff',
                          padding: '6px 14px',
                          borderRadius: 12,
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: 12,
                          fontWeight: 800,
                          cursor: 'pointer',
                        }}
                      >
                        ✨ Select Popular
                      </button>
                    </div>
                  </div>

                  <p style={{ color: '#64748b', fontSize: 14, margin: '0 0 18px' }}>
                    Pick only the excursions you wish to experience. If you do not wish to add any activities right now, leave them unselected (₹0).
                  </p>

                  {/* Summary Bar */}
                  <div style={{
                    background: '#FAF4EE',
                    borderRadius: 16,
                    padding: '12px 20px',
                    border: '1.5px solid #EBDED2',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: 12,
                    marginBottom: 24,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 900, color: '#0B2545' }}>
                        ACTIVITIES CHOSEN:
                      </span>
                      <span style={{
                        background: selectedActivityIds.length > 0 ? '#F06543' : '#64748b',
                        color: '#ffffff',
                        fontSize: 11,
                        fontWeight: 900,
                        padding: '2px 10px',
                        borderRadius: 12,
                      }}>
                        {selectedActivityIds.length} Selected
                      </span>
                    </div>

                    <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, fontWeight: 900, color: '#0B2545' }}>
                      Activities Subtotal ({adults} Adults):{' '}
                      <span style={{ color: '#F06543', fontSize: 16 }}>₹{pricingBreakdown.activitiesTotal.toLocaleString()}</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                    {selectedIslands.map((islandId) => {
                      const island = ISLANDS_DATA.find(i => i.id === islandId);
                      if (!island || island.activities.length === 0) return null;

                      return (
                        <div key={islandId} style={{ background: '#FAF4EE', borderRadius: 20, padding: 24, border: '1.5px solid #EBDED2' }}>
                          <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 17, fontWeight: 900, color: '#0B2545', margin: '0 0 16px' }}>
                            Adventures in {island.name}
                          </h3>

                          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 14 }}>
                            {island.activities.map((act) => {
                              const isPicked = selectedActivityIds.includes(act.id);
                              const IconComp = act.icon || Compass;

                              return (
                                <div
                                  key={act.id}
                                  onClick={() => handleToggleActivity(act.id)}
                                  style={{
                                    background: '#ffffff',
                                    border: '2px solid',
                                    borderColor: isPicked ? '#F06543' : '#EBDED2',
                                    borderRadius: 16,
                                    padding: 18,
                                    cursor: 'pointer',
                                    transition: 'all 0.2s ease',
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: 14,
                                    boxShadow: isPicked ? '0 6px 16px rgba(240, 101, 67, 0.12)' : 'none',
                                  }}
                                >
                                  <div style={{
                                    width: 38,
                                    height: 38,
                                    borderRadius: 10,
                                    background: isPicked ? '#F06543' : '#FAF4EE',
                                    color: isPicked ? '#ffffff' : '#0B2545',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0,
                                  }}>
                                    <IconComp size={20} style={{ margin: 'auto' }} />
                                  </div>

                                  <div style={{ flex: 1 }}>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                      <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, fontWeight: 800, color: '#0B2545', margin: 0 }}>
                                        {act.name}
                                      </h4>
                                      <div style={{
                                        width: 20,
                                        height: 20,
                                        borderRadius: 6,
                                        border: '1.5px solid',
                                        borderColor: isPicked ? '#F06543' : '#cbd5e1',
                                        background: isPicked ? '#F06543' : 'transparent',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#ffffff',
                                      }}>
                                        {isPicked && <Check size={13} />}
                                      </div>
                                    </div>

                                    {act.desc && (
                                      <p style={{ fontSize: 12, color: '#64748b', margin: '4px 0 8px', lineHeight: 1.4 }}>
                                        {act.desc}
                                      </p>
                                    )}

                                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 6, fontSize: 12, color: '#64748b' }}>
                                      <span style={{ display: 'flex', alignItems: 'center', gap: 3 }}><Clock size={12} color="#F06543" /> {act.duration}</span>
                                      <span>•</span>
                                      <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 900, color: '#F06543' }}>₹{act.price.toLocaleString()}</span>
                                      <span style={{ fontSize: 11, color: '#94a3b8' }}>/person</span>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* STEP 4: FERRIES, VEHICLES & MEALS */}
            {currentStep === 4 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                <div style={{ background: '#ffffff', borderRadius: 24, padding: 32, border: '1.5px solid #EBDED2' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                    <Ship size={22} color="#F06543" />
                    <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 22, fontWeight: 900, color: '#0B2545', margin: 0 }}>
                      Inter-Island Ferry Catamaran & Vehicle Logistics
                    </h2>
                  </div>
                  <p style={{ color: '#64748b', fontSize: 14, margin: '0 0 24px' }}>
                    Select your high-speed ferry catamaran seating class, private chauffeured ground transport, and meal plan.
                  </p>

                  {/* Ferry Tiers */}
                  <div style={{ marginBottom: 28 }}>
                    <label style={{ display: 'block', fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 900, color: '#0B2545', marginBottom: 12 }}>
                      CHOOSE HIGH-SPEED FERRY CATAMARAN CLASS:
                    </label>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 18 }}>
                      {FERRY_TIERS.map((tier) => {
                        const isFerrySelected = selectedFerryTier === tier.id;
                        return (
                          <div
                            key={tier.id}
                            onClick={() => setSelectedFerryTier(tier.id)}
                            style={{
                              background: isFerrySelected ? '#FFFDFB' : '#ffffff',
                              border: '2px solid',
                              borderColor: isFerrySelected ? '#F06543' : '#EBDED2',
                              borderRadius: 18,
                              padding: 22,
                              cursor: 'pointer',
                              transition: 'all 0.2s ease',
                              boxShadow: isFerrySelected ? '0 8px 24px rgba(240, 101, 67, 0.15)' : 'none',
                              display: 'flex',
                              flexDirection: 'column',
                              justifyContent: 'space-between',
                            }}
                          >
                            <div>
                              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                                <span style={{ background: '#0B2545', color: '#ffffff', fontSize: 11, fontWeight: 900, padding: '3px 10px', borderRadius: 10 }}>
                                  {tier.classTier}
                                </span>
                                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 900, color: '#F06543' }}>
                                  ₹{tier.pricePerLeg.toLocaleString()}<span style={{ fontSize: 11, color: '#64748b' }}>/person/leg</span>
                                </div>
                              </div>

                              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 800, color: '#0B2545', margin: '0 0 8px' }}>
                                {tier.name}
                              </h3>
                              <p style={{ fontSize: 12.5, color: '#64748b', margin: 0, lineHeight: 1.5 }}>
                                {tier.perks}
                              </p>
                            </div>

                            <div style={{ marginTop: 14, paddingTop: 10, borderTop: '1px solid #FAF4EE', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                              <span style={{ fontSize: 11, color: '#94a3b8' }}>{selectedIslands.length} Legs for {adults} Guests</span>
                              <span style={{ fontSize: 12, fontWeight: 800, color: isFerrySelected ? '#F06543' : '#64748b' }}>
                                {isFerrySelected ? '✓ SELECTED CLASS' : 'SELECT'}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Private AC Cab Addon */}
                  <div style={{ background: '#FAF4EE', borderRadius: 18, padding: 22, border: '1.5px solid #EBDED2', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, marginBottom: 20 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                      <div style={{ width: 44, height: 44, borderRadius: 12, background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#F06543', boxShadow: '0 2px 6px rgba(0,0,0,0.06)' }}>
                        <Car size={22} />
                      </div>
                      <div>
                        <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 900, color: '#0B2545' }}>
                          Dedicated Private AC Vehicle & Chauffeur
                        </div>
                        <div style={{ fontSize: 13, color: '#64748b', marginTop: 2 }}>
                          Includes airport pickups, all jetty transfers, sightseeing drives & 24/7 on-call island driver.
                        </div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                      <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 900, color: '#0B2545' }}>
                        ₹2,400 / day
                      </span>
                      <input
                        type="checkbox"
                        checked={includePrivateCabs}
                        onChange={(e) => setIncludePrivateCabs(e.target.checked)}
                        style={{ width: 22, height: 22, accentColor: '#F06543', cursor: 'pointer' }}
                      />
                    </div>
                  </div>

                  {/* Meal Plan Options */}
                  <div style={{ background: '#FAF4EE', borderRadius: 18, padding: 22, border: '1.5px solid #EBDED2' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                      <Utensils size={18} color="#F06543" />
                      <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 15, fontWeight: 900, color: '#0B2545' }}>
                        SELECT MEAL PLAN:
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12 }}>
                      {[
                        { id: 'CP', name: 'CP — Breakfast Included', desc: 'Daily gourmet morning buffet at all resorts', extra: 'Included in Base' },
                        { id: 'MAP', name: 'MAP — Half Board (B + D)', desc: 'Daily Breakfast + Gourmet Chef Dinner', extra: '+ ₹900 / person / night' },
                        { id: 'AP', name: 'AP — Full Board (All Meals)', desc: 'Daily Breakfast + Lunch + Dinner', extra: '+ ₹1,600 / person / night' },
                      ].map((plan) => (
                        <div
                          key={plan.id}
                          onClick={() => setIncludeMealPlan(plan.id)}
                          style={{
                            background: includeMealPlan === plan.id ? '#FFF5F0' : '#ffffff',
                            border: '1.5px solid',
                            borderColor: includeMealPlan === plan.id ? '#F06543' : '#EBDED2',
                            borderRadius: 14,
                            padding: 14,
                            cursor: 'pointer',
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
                            <strong style={{ fontSize: 13, color: '#0B2545' }}>{plan.name}</strong>
                            <input type="radio" checked={includeMealPlan === plan.id} onChange={() => setIncludeMealPlan(plan.id)} style={{ accentColor: '#F06543' }} />
                          </div>
                          <div style={{ fontSize: 11.5, color: '#64748b' }}>{plan.desc}</div>
                          <div style={{ fontSize: 11, fontWeight: 800, color: '#F06543', marginTop: 6 }}>{plan.extra}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 5: GENERATED ITINERARY & INSTANT SUMMARY */}
            {currentStep === 5 && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 28 }}>
                
                {/* Left Column: Day-by-Day Dynamic Itinerary */}
                <div style={{ gridColumn: 'span 8', display: 'flex', flexDirection: 'column', gap: 24 }}>
                  <div style={{ background: '#ffffff', borderRadius: 24, padding: 32, border: '1.5px solid #EBDED2', boxShadow: '0 8px 30px rgba(11, 37, 69, 0.04)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, marginBottom: 24 }}>
                      <div>
                        <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11.5, fontWeight: 900, color: '#F06543', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                          CUSTOM GENERATED SCHEDULE
                        </span>
                        <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 32, fontWeight: 700, color: '#0B2545', margin: '4px 0 0' }}>
                          Your {totalNights} Nights / {totalDays} Days Custom Andaman Plan
                        </h2>
                      </div>

                      <span style={{ background: '#FFF0EB', border: '1.5px solid #F06543', color: '#F06543', padding: '6px 14px', borderRadius: 20, fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, fontWeight: 900 }}>
                        {selectedIslands.length} Tropical Islands
                      </span>
                    </div>

                    {/* Day-by-day Itinerary Cards */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                      {generatedItinerary.map((day) => (
                        <div key={day.dayNumber} style={{ border: '1.5px solid #EBDED2', borderRadius: 18, overflow: 'hidden', background: '#FAF4EE' }}>
                          <div style={{ padding: '16px 20px', background: '#0B2545', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                              <span style={{ background: '#F06543', padding: '4px 10px', borderRadius: 8, fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 900 }}>
                                DAY {day.dayNumber}
                              </span>
                              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 14.5, fontWeight: 800 }}>
                                {day.islandName}
                              </span>
                            </div>

                            <span style={{ fontSize: 12, color: '#38bdf8', background: 'rgba(255,255,255,0.1)', padding: '3px 10px', borderRadius: 12 }}>
                              Stay: {day.resortName}
                            </span>
                          </div>

                          <div style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
                            <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 15, fontWeight: 800, color: '#0B2545', margin: 0 }}>
                              {day.title}
                            </h4>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 8, fontSize: 13, color: '#475569', lineHeight: 1.6 }}>
                              <div><strong style={{ color: '#0B2545' }}>🌅 Morning:</strong> {day.morning}</div>
                              <div><strong style={{ color: '#0B2545' }}>☀️ Afternoon:</strong> {day.afternoon}</div>
                              <div><strong style={{ color: '#0B2545' }}>🌙 Evening:</strong> {day.evening}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Traveler Details Form */}
                  <div style={{ background: '#ffffff', borderRadius: 24, padding: 32, border: '1.5px solid #EBDED2' }}>
                    <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 18, fontWeight: 900, color: '#0B2545', margin: '0 0 16px' }}>
                      Lead Traveler & Contact Details
                    </h3>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
                      <div>
                        <label style={{ display: 'block', fontSize: 12, fontWeight: 800, color: '#0B2545', marginBottom: 6 }}>FULL NAME</label>
                        <input
                          type="text"
                          value={travelerInfo.fullName}
                          onChange={(e) => setTravelerInfo(prev => ({ ...prev, fullName: e.target.value }))}
                          placeholder="e.g. Vikram Roy"
                          style={{ width: '100%', padding: '10px 14px', borderRadius: 10, border: '1.5px solid #EBDED2', fontSize: 13, outline: 'none' }}
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: 12, fontWeight: 800, color: '#0B2545', marginBottom: 6 }}>PHONE / WHATSAPP</label>
                        <input
                          type="tel"
                          value={travelerInfo.phone}
                          onChange={(e) => setTravelerInfo(prev => ({ ...prev, phone: e.target.value }))}
                          placeholder="e.g. +91 9876543210"
                          style={{ width: '100%', padding: '10px 14px', borderRadius: 10, border: '1.5px solid #EBDED2', fontSize: 13, outline: 'none' }}
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: 12, fontWeight: 800, color: '#0B2545', marginBottom: 6 }}>EMAIL ADDRESS</label>
                        <input
                          type="email"
                          value={travelerInfo.email}
                          onChange={(e) => setTravelerInfo(prev => ({ ...prev, email: e.target.value }))}
                          placeholder="e.g. vikram@gmail.com"
                          style={{ width: '100%', padding: '10px 14px', borderRadius: 10, border: '1.5px solid #EBDED2', fontSize: 13, outline: 'none' }}
                        />
                      </div>
                    </div>

                    <div style={{ marginTop: 14 }}>
                      <label style={{ display: 'block', fontSize: 12, fontWeight: 800, color: '#0B2545', marginBottom: 6 }}>SPECIAL CELEBRATIONS / FLIGHT TIMINGS (OPTIONAL)</label>
                      <input
                        type="text"
                        value={travelerInfo.specialRequests}
                        onChange={(e) => setTravelerInfo(prev => ({ ...prev, specialRequests: e.target.value }))}
                        placeholder="e.g. Honeymoon flower bed decoration, candlelit beach dinner setup, vegetarian meals"
                        style={{ width: '100%', padding: '10px 14px', borderRadius: 10, border: '1.5px solid #EBDED2', fontSize: 13, outline: 'none' }}
                      />
                    </div>
                  </div>
                </div>

                {/* Right Column: Price Manifest & Booking Panel */}
                <div style={{ gridColumn: 'span 4', display: 'flex', flexDirection: 'column', gap: 20 }}>
                  <div style={{ background: '#ffffff', borderRadius: 24, padding: 28, border: '2px solid #0B2545', boxShadow: '0 12px 36px rgba(11, 37, 69, 0.08)', position: 'sticky', top: 100 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                      <Award size={20} color="#F06543" />
                      <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 18, fontWeight: 900, color: '#0B2545', margin: 0 }}>
                        Custom Package Summary
                      </h3>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, borderBottom: '1.5px solid #F5ECE5', paddingBottom: 16, marginBottom: 16, fontSize: 13 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', color: '#64748b' }}>
                        <span>Destinations:</span>
                        <strong style={{ color: '#0B2545' }}>{selectedIslands.map(id => ISLANDS_DATA.find(i => i.id === id)?.name?.split(' ')[0] || id).join(', ')}</strong>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', color: '#64748b' }}>
                        <span>Duration:</span>
                        <strong style={{ color: '#0B2545' }}>{totalNights}N / {totalDays}D</strong>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', color: '#64748b' }}>
                        <span>Travelers:</span>
                        <strong style={{ color: '#0B2545' }}>{adults} Adults {childrenCount > 0 ? `+ ${childrenCount} Kids` : ''}</strong>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', color: '#64748b' }}>
                        <span>Ferry Class:</span>
                        <strong style={{ color: '#0B2545' }}>{ferryData.classTier}</strong>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', color: '#64748b' }}>
                        <span>Meal Plan:</span>
                        <strong style={{ color: '#0B2545' }}>{includeMealPlan}</strong>
                      </div>
                    </div>

                    {/* Pricing List */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, borderBottom: '1.5px solid #F5ECE5', paddingBottom: 16, marginBottom: 16, fontSize: 13 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ color: '#64748b' }}>Resorts & Room Tiers:</span>
                        <span style={{ fontWeight: 800, color: '#0B2545' }}>₹{pricingBreakdown.staysTotal.toLocaleString()}</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ color: '#64748b' }}>Ocean Activities ({selectedActivityIds.length}):</span>
                        <span style={{ fontWeight: 800, color: '#0B2545' }}>₹{pricingBreakdown.activitiesTotal.toLocaleString()}</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ color: '#64748b' }}>Catamaran Ferries ({selectedIslands.length} Legs):</span>
                        <span style={{ fontWeight: 800, color: '#0B2545' }}>₹{pricingBreakdown.ferriesTotal.toLocaleString()}</span>
                      </div>
                      {includePrivateCabs && (
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span style={{ color: '#64748b' }}>Private AC Cabs ({totalDays} Days):</span>
                          <span style={{ fontWeight: 800, color: '#0B2545' }}>₹{pricingBreakdown.cabsTotal.toLocaleString()}</span>
                        </div>
                      )}
                      {pricingBreakdown.mealTotal > 0 && (
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span style={{ color: '#64748b' }}>Meal Plan Upgrade:</span>
                          <span style={{ fontWeight: 800, color: '#0B2545' }}>₹{pricingBreakdown.mealTotal.toLocaleString()}</span>
                        </div>
                      )}
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ color: '#64748b' }}>GST & Port Permits (5%):</span>
                        <span style={{ fontWeight: 800, color: '#0B2545' }}>₹{pricingBreakdown.taxAndGst.toLocaleString()}</span>
                      </div>
                    </div>

                    {/* Total */}
                    <div style={{ marginBottom: 20 }}>
                      <div style={{ fontSize: 11, color: '#94a3b8', textTransform: 'uppercase', fontWeight: 800 }}>
                        TOTAL PACKAGE PRICE
                      </div>
                      <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 26, fontWeight: 900, color: '#F06543' }}>
                        ₹{pricingBreakdown.grandTotal.toLocaleString()}
                      </div>
                      <div style={{ fontSize: 12, color: '#64748b', fontWeight: 600 }}>
                        ₹{pricingBreakdown.perPersonPrice.toLocaleString()} / person (all taxes included)
                      </div>
                    </div>

                    {/* Direct Action Buttons */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                      <button
                        onClick={handleProceedBooking}
                        style={{
                          width: '100%',
                          background: 'linear-gradient(135deg, #FF6B4A, #F06543)',
                          border: 'none',
                          color: '#ffffff',
                          padding: '14px 20px',
                          borderRadius: 16,
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: 14,
                          fontWeight: 900,
                          cursor: 'pointer',
                          boxShadow: '0 8px 24px rgba(240, 101, 67, 0.35)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: 8,
                        }}
                      >
                        <span>CONFIRM & BOOK PACKAGE</span>
                        <ArrowRight size={16} />
                      </button>

                      <button
                        onClick={handleWhatsAppShare}
                        style={{
                          width: '100%',
                          background: '#25D366',
                          border: 'none',
                          color: '#ffffff',
                          padding: '12px 18px',
                          borderRadius: 14,
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: 12.5,
                          fontWeight: 800,
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: 6,
                        }}
                      >
                        <MessageSquare size={15} />
                        <span>CHAT ON WHATSAPP</span>
                      </button>

                      <button
                        onClick={() => window.print()}
                        style={{
                          width: '100%',
                          background: '#FAF4EE',
                          border: '1.5px solid #EBDED2',
                          color: '#0B2545',
                          padding: '12px 18px',
                          borderRadius: 14,
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: 12.5,
                          fontWeight: 800,
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: 6,
                        }}
                      >
                        <Printer size={14} />
                        <span>PRINT / SAVE ITINERARY</span>
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            )}

            {/* BOTTOM NAVIGATION CONTROLS */}
            <div style={{
              marginTop: 40,
              paddingTop: 24,
              borderTop: '1.5px solid #EBDED2',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
              {currentStep > 1 ? (
                <button
                  onClick={handlePrevStep}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    background: '#ffffff',
                    border: '1.5px solid #EBDED2',
                    color: '#0B2545',
                    padding: '10px 20px',
                    borderRadius: 14,
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 13,
                    fontWeight: 800,
                    cursor: 'pointer',
                  }}
                >
                  <ChevronLeft size={16} />
                  <span>PREVIOUS STEP</span>
                </button>
              ) : <div />}

              {currentStep < 5 && (
                <button
                  onClick={handleNextStep}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    background: 'linear-gradient(135deg, #FF6B4A, #F06543)',
                    border: 'none',
                    color: '#ffffff',
                    padding: '12px 28px',
                    borderRadius: 16,
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 13.5,
                    fontWeight: 900,
                    cursor: 'pointer',
                    boxShadow: '0 6px 20px rgba(240, 101, 67, 0.35)',
                  }}
                >
                  <span>{currentStep === 4 ? 'GENERATE CUSTOM ITINERARY' : 'NEXT STEP'}</span>
                  <ChevronRight size={16} />
                </button>
              )}
            </div>
          </>
        )}

      </div>

      {/* RAZORPAY PAYMENT MODAL */}
      <RazorpayModal
        isOpen={showRazorpay}
        onClose={() => setShowRazorpay(false)}
        bookingData={razorpayData}
        onPaymentSuccess={(confirmed) => {
          setShowRazorpay(false);
          window.location.href = `/booking-confirmation?id=${confirmed?.bookingId || 'CONFIRMED'}`;
        }}
      />

      <FooterBottom />
    </div>
  );
}
