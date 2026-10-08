// src/components/pages/BlogDetails.jsx
// ─────────────────────────────────────────────────────────────────────────────
// ULTRA-LUXURY BLOG DETAILS READER — Warm Cream & Coral Luxury Theme,
// Sticky TOC with Scrollspy, Audio Preview Player, Interactive Checklist,
// Curated Honeymoon & Island Guides, Dynamic API Fallback, Live Comments & Direct Booking CTAs
// ─────────────────────────────────────────────────────────────────────────────

import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowLeft, Clock, Calendar, User, Share2, Bookmark,
  ChevronRight, Check, Info, Sparkles, MessageCircle, Eye,
  ThumbsUp, BookOpen, Compass, ShieldCheck, Heart, Award,
  Volume2, VolumeX, Play, Pause, Copy, CheckCheck, Send,
  Star, MapPin, ExternalLink, ZoomIn, ZoomOut, CheckCircle2,
  Sparkle, Shield, Anchor, Camera, Sunset, Waves, Navigation
} from 'lucide-react';
import FooterBottom from '../FooterBottom';
import { blogService } from '../../api/blogService';

// ── RICH ARTICLES DATABASE ───────────────────────────────────────────────────
const ARTICLES_DATABASE = {
  'honeymoon-andaman': {
    id: 'honeymoon-andaman',
    slug: 'honeymoon-andaman',
    title: '7 Romantic Experiences for Couples & Honeymooners in Andaman',
    subtitle: 'From candlelit shores on Radhanagar Beach to glowing midnight bioluminescence — the definitive curator’s guide for couples.',
    category: 'Honeymoon & Romance',
    badge: 'LUXURY COUPLES EDITORIAL 2026',
    author: 'Anita Roy',
    authorRole: 'Senior Romance & Luxury Travel Curator',
    authorBio: 'Anita has curated over 1,400 bespoke honeymoon escapes across Havelock and Neil Island. Her romantic guides have been featured in Conde Nast Traveller and National Geographic.',
    authorAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=250&q=80',
    date: '04 Oct 2026',
    readTime: '6 min read',
    views: '38.9K',
    likes: 1840,
    cover: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1800&q=90',
    audioDuration: '5:40',
    quickStats: {
      idealDuration: '5 Nights / 6 Days',
      bestSeason: 'October to May',
      vibe: 'Private, Luxury & Intimate',
      permits: 'No Permits Needed for Indians',
    },
    intro: 'With its pristine turquoise waters, secluded powder-white beaches, lush tropical rainforest canopies, and enchanting starry nights, the Andaman & Nicobar archipelago is India’s most breathtaking honeymoon sanctuary. Far from chaotic crowded shores, Swaraj Dweep (Havelock) and Shaheed Dweep (Neil) offer intimate seclusion, world-class overwater-style villas, private catamaran sunset cruises, and surreal bioluminescent night waters that sparkle with every paddle stroke.',
    takeaway: 'For the ultimate honeymoon balance, divide your stay between Swaraj Dweep (Havelock) for beach luxury & watersports, and Shaheed Dweep (Neil) for slow-paced sunset walks and natural coral bridges.',
    toc: [
      { id: 'sec-candlelight', title: '1. Private Candlelight Dinner on Radhanagar Beach' },
      { id: 'sec-bioluminescence', title: '2. Midnight Bioluminescent Night Kayaking' },
      { id: 'sec-sunset-charter', title: '3. Private Sunset Catamaran & Yacht Cruise' },
      { id: 'sec-couple-scuba', title: '4. Couple Scuba Diving & Underwater Photoshoot' },
      { id: 'sec-laxmanpur', title: '5. Sunset Champagne Picnic at Laxmanpur Beach' },
      { id: 'sec-resorts', title: '6. Handpicked Beachfront Pool Villas & Luxury Stays' },
      { id: 'sec-itinerary', title: '7. Recommended 5N/6D Couple’s Master Itinerary' },
      { id: 'sec-checklist', title: '8. Couple’s Island Packing & Romance Checklist' },
    ],
    sections: [
      {
        id: 'sec-candlelight',
        title: '1. Private Candlelight Dinner on Radhanagar Beach',
        image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80',
        caption: 'A bespoke 4-course gourmet dinner set up under a floral canopy by the gentle ocean surf.',
        text: 'Imagine a private canopy draped in fairy lights, the soft rhythm of Andaman waves lapping the shore, and a 4-course coastal gourmet dinner prepared by a private executive chef. Dining under the star-studded Havelock sky is widely hailed as the single most romantic evening experience in India.',
        bulletPoints: [
          'Best Spot: Secluded stretch of Radhanagar Beach (Beach No. 7) or Govind Nagar private resort beachfronts.',
          'Highlights: Fresh Andaman red snapper or tiger prawns, chilled sparkling wine, acoustic guitar serenades on request.',
          'Pro-Tip: Book your beach dinner at least 48 hours in advance during peak season (November to February) to secure prime sunset slots.',
        ],
        quote: 'Watching the twilight purple sky melt into ocean waves while dining bare-foot in warm sand is an unforgettable memory every couple cherishes.',
      },
      {
        id: 'sec-bioluminescence',
        title: '2. Midnight Bioluminescent Night Kayaking',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
        caption: 'Drifting along Havelock mangrove channels as the water illuminates with glowing blue phytoplankton.',
        text: 'Under a moonless night sky, the mangrove lagoons of Havelock Island come alive with bioluminescent dinoflagellates. As you and your partner paddle your tandem sea kayak, the water lights up in mesmerizing neon-blue trails around your paddles, creating a magical floating galaxy.',
        bulletPoints: [
          'Location: Havelock Island Mangrove Creek (near Havelock Jetty).',
          'Timing: 08:30 PM to 11:00 PM on low moon or new moon nights.',
          'Includes: Certified kayak safety instructor, life vests, high-powered headlamps, and complimentary starry night photos.',
        ],
        quote: 'It feels like paddling through liquid stars. Words genuinely fail to describe the surreal glow in the pitch-black ocean calm.',
      },
      {
        id: 'sec-sunset-charter',
        title: '3. Private Sunset Catamaran & Yacht Cruise',
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
        caption: 'Sail the deep blue Andaman Sea aboard a private catamaran with champagne and panoramic horizons.',
        text: 'Escape the tourist crowds by chartering a private luxury catamaran for an exclusive 3-hour twilight sailing voyage. Watch playful dolphins leap in the wake of the boat as the sun sets in dramatic shades of crimson, gold, and coral pink.',
        bulletPoints: [
          'Departure: Havelock or Port Blair Marine Jetty.',
          'Inclusions: Wine or non-alcoholic bubbly, artisanal cheese platter, customized romantic music playlist, sun deck lounger.',
          'Ideal For: Proposal celebrations, wedding anniversaries, and honeymoon twilight toasts.',
        ],
      },
      {
        id: 'sec-couple-scuba',
        title: '4. Couple Scuba Diving & Underwater Photoshoot',
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
        caption: 'Hold hands underwater amidst vibrant coral reefs and clownfish with professional underwater 4K photography.',
        text: 'You don’t need to know swimming to experience the magical marine world together! With PADI Discover Scuba Diving (DSD), a personal certified divemaster accompanies each of you one-on-one. Glide past colorful staghorn corals, friendly sea turtles, and clownfish while holding hands.',
        bulletPoints: [
          'Top Dive Sites: Nemo Reef (Havelock) & Bharatpur Beach (Neil Island).',
          'Depth: Shallow, safe 6 to 8 meters with pristine 20-meter visibility.',
          'Package Add-on: High-definition underwater video and photos included with professional diving suits.',
        ],
      },
      {
        id: 'sec-laxmanpur',
        title: '5. Sunset Champagne Picnic at Laxmanpur Beach',
        image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80',
        caption: 'Laxmanpur Beach on Neil Island offers unmatched panoramic sunset horizons and serene natural solitude.',
        text: 'Neil Island (Shaheed Dweep) is the quieter, gentler sister to Havelock. Laxmanpur Beach is a sprawling triangular beach renowned for its jaw-dropping golden sunsets. Pack a picnic basket with fresh tropical fruits, coconut water, and artisanal treats to enjoy the sunset uninterrupted.',
        bulletPoints: [
          'Atmosphere: Peaceful, zero motorized watersports noise, powdery white sand.',
          'Nearby Attraction: The Natural Living Coral Rock Bridge (Howrah Bridge) located 10 minutes away for low-tide strolls.',
        ],
      },
      {
        id: 'sec-resorts',
        title: '6. Handpicked Beachfront Pool Villas & Luxury Stays',
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
        caption: 'Wake up to panoramic ocean views, private plunge pools, and bespoke open-air forest showers.',
        text: 'The quality of your honeymoon resort defines the ambiance of your entire holiday. Andaman features exquisite luxury properties that harmonize tropical wooden architecture with 5-star indulgence.',
        bulletPoints: [
          'Taj Exotica Resort & Spa (Radhanagar): 50 acres of lush forest luxury with private pool villas & butler service.',
          'Barefoot at Havelock: Eco-luxury thatch cottages nestled directly in virgin rainforest, steps from the sea.',
          'Symphony Palms Beach Resort: Modern beachfront cottages with direct sea view sundecks and wellness spa treatments.',
        ],
      },
      {
        id: 'sec-itinerary',
        title: '7. Recommended 5N/6D Couple’s Master Itinerary',
        text: 'Here is our most praised romantic circuit, crafted to give couples the perfect balance of adventure, luxury dinners, and leisure.',
        timeline: [
          { day: 'Day 01', title: 'Arrival in Port Blair & Cellular Jail Light Show', desc: 'VIP Airport pickup, check-in to luxury sea-view suite, afternoon visit to Cellular Jail heritage monument, and evening sunset drinks at Corbyn’s Cove.' },
          { day: 'Day 02', title: 'Private Catamaran to Havelock & Radhanagar Sunset', desc: 'Board high-speed Nautika catamaran (Royal Class seats). Check-in to private villa. Sunset stroll and photography at Radhanagar Beach.' },
          { day: 'Day 03', title: 'Couple Scuba Diving & Midnight Bioluminescence', desc: 'Morning private couple DSD dive at Nemo Reef. Afternoon spa massage. Night 9:00 PM bioluminescent night kayaking adventure.' },
          { day: 'Day 04', title: 'Ferry to Neil Island & Sunset Picnic at Laxmanpur', desc: 'Scenic speed ferry to Neil Island. Visit the Natural Coral Bridge during low tide, followed by champagne sunset at Laxmanpur Beach.' },
          { day: 'Day 05', title: 'Bharatpur Snorkeling & Return to Port Blair', desc: 'Glass-bottom boat ride over coral gardens. Afternoon luxury cruise back to Port Blair for private candlelit rooftop seafood dinner.' },
          { day: 'Day 06', title: 'Souvenir Shopping & Airport Departure', desc: 'Visit Sagarika Govt. Handicraft Emporium for authentic sea shell and pearl jewellery. Private chauffeur transfer to Port Blair Airport.' },
        ],
      },
      {
        id: 'sec-checklist',
        title: '8. Couple’s Island Packing & Romance Checklist',
        text: 'Make sure to tick these essential items off your list before boarding your flight to Port Blair:',
        checklist: [
          'Waterproof phone pouches & GoPro underwater camera',
          'Reef-safe sunscreen & organic aloe vera soothing gel',
          'Flowy pastel beachwear & linen shirts for sunset photoshoot',
          'Comfortable reef water shoes for Neil Island coral walks',
          'Pre-booked Nautika / Makruzz ferry tickets (Royal or Luxury Class)',
          'Valid Govt ID cards (Aadhaar / Passport / Voter ID) for inter-island check-ins',
        ],
      },
    ],
  },
  'featured-handbook-2026': {
    id: 'featured-handbook-2026',
    slug: 'featured-handbook-2026',
    title: 'The Ultimate Andaman Travel Handbook 2026: Flights, Ferries & Hidden Gems',
    subtitle: 'Everything you need to know: permit exemptions, catamaran ferry routes, top beaches, budget breakdowns, and master 7-day itineraries.',
    category: 'Island Guides',
    badge: 'VERIFIED MASTER GUIDE 2026',
    author: 'Sarah Jenkins',
    authorRole: 'Senior Island Travel Specialist',
    authorBio: 'Sarah has lived in Port Blair for over 8 years and has guided over 20,000 travelers across the Andaman archipelago.',
    authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80',
    date: '12 Aug 2026',
    readTime: '8 min read',
    views: '42.5K',
    likes: 1240,
    cover: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=90',
    audioDuration: '7:15',
    quickStats: {
      idealDuration: '6 Nights / 7 Days',
      bestSeason: 'October to May',
      vibe: 'Comprehensive Island Adventure',
      permits: 'Exempt for 29 Inhabited Islands',
    },
    intro: 'Visiting the Andaman and Nicobar Islands is one of the most rewarding tropical journeys in Asia. With recent permit relaxations, expanded high-speed catamaran ferries, and world-class scuba diving, this comprehensive 2026 handbook covers everything you need for an unforgettable island trip.',
    takeaway: 'Book inter-island high-speed ferries (Nautika/Makruzz) at least 3 weeks prior during peak winter months to prevent being stranded on government standby queues.',
    toc: [
      { id: 'sec-permit', title: '1. RAP Permit Regulations & Exemptions' },
      { id: 'sec-flights', title: '2. Reaching Port Blair & Airport Transfer' },
      { id: 'sec-ferries', title: '3. Inter-Island Ferries: Nautika vs Makruzz' },
      { id: 'sec-islands', title: '4. Best Islands: Havelock, Neil & Baratang' },
      { id: 'sec-itinerary', title: '5. Recommended 6N/7D Master Itinerary' },
    ],
    sections: [
      {
        id: 'sec-permit',
        title: '1. RAP Permit Regulations & Exemptions',
        text: 'The Ministry of Home Affairs removed Restricted Area Permit restrictions for 29 inhabited islands across the Andaman archipelago. This means international tourists can now freely visit Havelock Island, Neil Island, Baratang, Diglipur, and Ross & Smith Sandbars without applying in advance at overseas embassies.',
        bulletPoints: [
          'Indian Nationals: No special permits required. Just carry your original government photo ID (Aadhaar or Passport).',
          'Foreign Passport Holders: Free automatic RAP stamp issued at Port Blair Airport immigration counter upon arrival (valid for 30 days, extendable by 15 days).',
        ],
      },
      {
        id: 'sec-flights',
        title: '2. Reaching Port Blair & Airport Transfer',
        text: 'Veer Savarkar International Airport (IXZ) in Port Blair receives direct non-stop flights from major hubs including Chennai (2h 15m), Kolkata (2h 20m), Delhi (3h 30m), and Bengaluru (2h 45m). We recommend booking early morning flight arrivals (landing before 10:30 AM) if you wish to board the same-day afternoon speed ferry to Havelock Island.',
      },
      {
        id: 'sec-ferries',
        title: '3. Inter-Island Ferries: Nautika vs Makruzz',
        text: 'Private high-speed catamarans are the gold standard for traveling between Port Blair, Havelock, and Neil Island. Both Nautika and Makruzz offer fully air-conditioned cabins, leather seating, onboard snack bars, and panoramic sea view windows. Sailing takes approximately 90 minutes from Port Blair to Havelock.',
      },
      {
        id: 'sec-islands',
        title: '4. Best Islands: Havelock, Neil & Baratang',
        bulletPoints: [
          'Havelock Island (Swaraj Dweep): Celebrated for Radhanagar Beach (Beach No. 7), Elephant Beach coral reef snorkeling, and scuba diving centers.',
          'Neil Island (Shaheed Dweep): Famous for the Natural Coral Bridge, Bharatpur shallow water beach, and tranquil laid-back vibes.',
          'Baratang Island: A thrilling jungle excursion with ancient limestone caves and active mud volcanoes.',
        ],
      },
      {
        id: 'sec-itinerary',
        title: '5. Recommended 6N/7D Master Itinerary',
        timeline: [
          { day: 'Day 01', title: 'Port Blair & Cellular Jail', desc: 'Arrive Port Blair, visit Cellular Jail Light & Sound Show, stay at Port Blair.' },
          { day: 'Day 02', title: 'Ferry to Havelock & Radhanagar Sunset', desc: 'Catamaran cruise to Havelock, check-in, and sunset at Radhanagar Beach.' },
          { day: 'Day 03', title: 'Elephant Beach Watersports & Diving', desc: 'Speedboat to Elephant Beach for snorkeling, sea walk, or scuba diving.' },
          { day: 'Day 04', title: 'Neil Island Natural Rock Bridge', desc: 'Ferry to Neil Island, visit Natural Rock Bridge & Laxmanpur sunset.' },
          { day: 'Day 05', title: 'Bharatpur Beach & Return to Port Blair', desc: 'Water sports at Bharatpur Beach, afternoon return cruise to Port Blair.' },
          { day: 'Day 06', title: 'Ross Island Heritage & Chidiya Tapu', desc: 'Historic British ruins on Ross Island and sunset trek at Chidiya Tapu.' },
          { day: 'Day 07', title: 'Departure', desc: 'Souvenir shopping and transfer to Port Blair Airport.' },
        ],
      },
    ],
  },
  'scuba-beginners-guide': {
    id: 'scuba-beginners-guide',
    slug: 'scuba-beginners-guide',
    title: 'Scuba Diving for Beginners: PADI Certification & Top Dive Reefs in Havelock',
    subtitle: 'Everything non-swimmers and first-time divers need to know about Discover Scuba Diving, safety gear, and Nemo Reef marine life.',
    category: 'Scuba & Diving',
    badge: 'PADI CERTIFIED GUIDE 2026',
    author: 'Mike Ross',
    authorRole: 'PADI Master Instructor',
    authorBio: 'Mike has logged over 4,500 dives across the Andaman Sea and trains instructors worldwide in marine conservation and deep reef diving.',
    authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80',
    date: '08 Aug 2026',
    readTime: '6 min read',
    views: '28.1K',
    likes: 890,
    cover: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1800&q=90',
    audioDuration: '5:10',
    quickStats: {
      idealDuration: 'Half Day (3-4 Hours)',
      bestSeason: 'October to May',
      vibe: 'Underwater Exploration',
      permits: 'No Medical Restrictions for Basic DSD',
    },
    intro: 'Thinking of taking your first underwater plunge? Havelock Island (Swaraj Dweep) boasts crystal clear visibility up to 25 meters, vibrant coral gardens, and calm shallow reefs perfect for non-swimmers and Discover Scuba Diving (DSD) beginners.',
    takeaway: 'You do not need prior swimming skills for Discover Scuba Diving (DSD). A dedicated certified PADI divemaster controls your buoyancy throughout the entire dive.',
    toc: [
      { id: 'sec-dsd', title: '1. What is Discover Scuba Diving (DSD)?' },
      { id: 'sec-reefs', title: '2. Top 3 Beginner Reefs in Havelock' },
      { id: 'sec-safety', title: '3. Medical Requirements & Gear Safety' },
    ],
    sections: [
      {
        id: 'sec-dsd',
        title: '1. What is Discover Scuba Diving (DSD)?',
        text: 'DSD is a 1-day introductory experience designed specifically for first-timers and non-swimmers. You receive 30 minutes of shallow-water training where you learn how to equalize ear pressure, clear your mask, and breathe naturally through your regulator before descending into the reef.',
      },
      {
        id: 'sec-reefs',
        title: '2. Top 3 Beginner Reefs in Havelock',
        bulletPoints: [
          'Nemo Reef: The world-famous shallow reef teeming with sea anemones, clownfish, parrotfish, and blue-spotted rays.',
          'Tribe Gate: A sheltered underwater garden featuring giant brain corals and schooling yellowtail snappers.',
          'Aquarium: Crystal clear waters with sloping sandy beds, ideal for calm underwater photography.',
        ],
      },
      {
        id: 'sec-safety',
        title: '3. Medical Requirements & Gear Safety',
        text: 'Scuba diving in Andaman follows strict international PADI / SSI protocols. You will be provided with high-grade neoprene wetsuits, Scubapro regulators, Cressi dive masks, and sanitized oxygen tanks tested prior to every dive.',
      },
    ],
  },
};

// Aliases mapping so URL variations route to rich dataset
const ALIAS_MAP = {
  'honeymoon-andaman': 'honeymoon-andaman',
  'honeymoon-romantic-experiences': 'honeymoon-andaman',
  'honeymoon': 'honeymoon-andaman',
  'scuba-beginners-guide': 'scuba-beginners-guide',
  'scuba-beginners': 'scuba-beginners-guide',
  'featured-handbook-2026': 'featured-handbook-2026',
  'ultimate-7-day-andaman-itinerary': 'featured-handbook-2026',
};

const RELATED_STORIES = [
  {
    id: 'scuba-beginners-guide',
    title: 'Scuba Diving for Beginners: PADI Certification & Top Dive Reefs',
    category: 'Scuba & Diving',
    readTime: '6 min read',
    date: '08 Aug 2026',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'featured-handbook-2026',
    title: 'The Ultimate Andaman Travel Handbook: Flights, Ferries & Hidden Gems',
    category: 'Island Guides',
    readTime: '8 min read',
    date: '12 Aug 2026',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'honeymoon-andaman',
    title: '7 Romantic Experiences for Couples & Honeymooners in Swaraj Dweep',
    category: 'Honeymoon',
    readTime: '6 min read',
    date: '04 Oct 2026',
    image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80',
  },
];

export default function BlogDetails() {
  const [articleId, setArticleId] = useState('honeymoon-andaman');
  const [articleData, setArticleData] = useState(ARTICLES_DATABASE['honeymoon-andaman']);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeTocId, setActiveTocId] = useState('');
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(1840);
  const [bookmarked, setBookmarked] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [fontSize, setFontSize] = useState('normal'); // 'normal' | 'large' | 'xl'
  const [checkedItems, setCheckedItems] = useState({});
  const [comments, setComments] = useState([
    {
      id: 1,
      name: 'Rohan & Priya Sharma',
      date: 'Yesterday, 4:20 PM',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
      text: 'We just returned from our honeymoon in Havelock! The private candlelight dinner on Radhanagar Beach was honestly straight out of a fairy tale. Andaman Trails arranged everything seamlessly.',
    },
    {
      id: 2,
      name: 'Ananya & Siddharth Verma',
      date: '3 days ago',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
      text: 'Bioluminescent night kayaking was our favorite highlight! Floating in glowing blue water in Havelock was completely otherworldly. Thank you for this detailed checklist!',
    },
  ]);
  const [newCommentName, setNewCommentName] = useState('');
  const [newCommentText, setNewCommentText] = useState('');

  // 1. URL Parameter and Database Resolver
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    let pathSlug = '';
    const pathname = window.location.pathname;
    if (pathname.startsWith('/blog/') && pathname !== '/blog') {
      pathSlug = pathname.replace(/^\/blog\//, '').split('/')[0].split('?')[0];
    } else if (pathname.startsWith('/blog-details/')) {
      pathSlug = pathname.replace(/^\/blog-details\//, '').split('/')[0].split('?')[0];
    }
    const rawId = params.get('id') || params.get('slug') || pathSlug || 'honeymoon-andaman';
    const cleanId = ALIAS_MAP[rawId] || rawId;

    if (ARTICLES_DATABASE[cleanId]) {
      setArticleId(cleanId);
      const chosen = ARTICLES_DATABASE[cleanId];
      setArticleData(chosen);
      setLikeCount(chosen.likes || 1840);
    } else {
      // Fetch dynamic blog from API
      blogService.getBlogBySlug(rawId)
        .then(res => {
          if (res && res.data) {
            const b = res.data;
            const dynamicArticle = {
              id: b.slug || b.id,
              slug: b.slug,
              title: b.title,
              subtitle: b.excerpt || 'Comprehensive Island Editorial',
              category: b.category?.name || 'Travel Guides',
              badge: 'VERIFIED EDITORIAL',
              author: b.author?.name || 'Editorial Team',
              authorRole: 'Andaman Travel Specialist',
              authorBio: 'Specialist curation from the Andaman Trails editorial board.',
              authorAvatar: b.author?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80',
              date: new Date(b.createdAt || Date.now()).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
              readTime: '6 min read',
              views: '18.2K',
              likes: 420,
              cover: b.coverImage || 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=90',
              audioDuration: '4:30',
              quickStats: {
                idealDuration: '5 Nights / 6 Days',
                bestSeason: 'October to May',
                vibe: 'Island Exploration',
                permits: 'Exempt for Most Islands',
              },
              intro: b.excerpt || 'Explore everything you need for an unforgettable island trip with our curated guide.',
              takeaway: 'Plan your itinerary and speed ferries in advance to enjoy seamless island transfers.',
              toc: [
                { id: 'sec-dynamic-content', title: '1. Overview & Key Highlights' },
                { id: 'sec-dynamic-itinerary', title: '2. Planning & Travel Tips' },
              ],
              rawHtml: b.content,
              sections: [
                {
                  id: 'sec-dynamic-content',
                  title: '1. Overview & Key Highlights',
                  text: b.excerpt || 'Discover the most rewarding island experiences across Port Blair, Swaraj Dweep, and Shaheed Dweep.',
                },
              ],
            };
            setArticleId(b.slug || b.id);
            setArticleData(dynamicArticle);
            setLikeCount(420);
          } else {
            // Default fallback
            setArticleId('honeymoon-andaman');
            setArticleData(ARTICLES_DATABASE['honeymoon-andaman']);
            setLikeCount(1840);
          }
        })
        .catch(() => {
          // If API fails or 404, fallback to honeymoon-andaman
          setArticleId('honeymoon-andaman');
          setArticleData(ARTICLES_DATABASE['honeymoon-andaman']);
          setLikeCount(1840);
        });
    }

    // Check local storage for liked / saved state
    try {
      const savedLike = localStorage.getItem(`blog_liked_${cleanId}`);
      if (savedLike === 'true') setLiked(true);
      const savedBookmark = localStorage.getItem(`blog_saved_${cleanId}`);
      if (savedBookmark === 'true') setBookmarked(true);
    } catch (_) {}
  }, []);

  // 2. Reading Progress Bar & TOC Scrollspy
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }

      // Scrollspy for TOC sections
      if (articleData?.toc && articleData.toc.length > 0) {
        for (let i = articleData.toc.length - 1; i >= 0; i--) {
          const item = articleData.toc[i];
          const el = document.getElementById(item.id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 200) {
              setActiveTocId(item.id);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [articleData]);

  // Handle Toast feedback
  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3200);
  };

  // Handle Like
  const handleLike = () => {
    const nextState = !liked;
    setLiked(nextState);
    setLikeCount((prev) => (nextState ? prev + 1 : prev - 1));
    try {
      localStorage.setItem(`blog_liked_${articleId}`, String(nextState));
    } catch (_) {}
    showToast(nextState ? '❤️ Added to your liked articles!' : 'Removed from liked articles');
  };

  // Handle Save / Bookmark
  const handleBookmark = () => {
    const nextState = !bookmarked;
    setBookmarked(nextState);
    try {
      localStorage.setItem(`blog_saved_${articleId}`, String(nextState));
    } catch (_) {}
    showToast(nextState ? '🔖 Article saved to your Island Travel Collection!' : 'Article removed from saved list');
  };

  // Handle Share / Copy
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: articleData.title,
        text: articleData.subtitle,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      showToast('🔗 Link copied to clipboard! Share with your partner.');
    }
  };

  // Handle Checklist Click
  const toggleChecklist = (index) => {
    setCheckedItems(prev => ({ ...prev, [index]: !prev[index] }));
  };

  // Handle Submit Comment
  const handleAddComment = (e) => {
    e.preventDefault();
    if (!newCommentName.trim() || !newCommentText.trim()) return;
    const newEntry = {
      id: Date.now(),
      name: newCommentName.trim(),
      date: 'Just now',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80',
      text: newCommentText.trim(),
    };
    setComments([newEntry, ...comments]);
    setNewCommentName('');
    setNewCommentText('');
    showToast('✨ Thank you! Your travel experience has been published.');
  };

  // Font size multiplier
  const getBodyFontSize = () => {
    if (fontSize === 'large') return '16.5px';
    if (fontSize === 'xl') return '18.5px';
    return '15px';
  };

  return (
    <div className="blog-reader-theme">
      {/* ── EMBEDDED STYLES & LUXURY PALETTE ── */}
      <style>{`
        .blog-reader-theme {
          min-height: 100vh;
          background: #FAF4EE;
          color: #0B2545;
          padding-top: 80px;
          padding-bottom: 0;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          position: relative;
          overflow-x: hidden;
        }

        /* Top Reading Progress Bar */
        .reader-progress-line {
          position: fixed;
          top: 0;
          left: 0;
          height: 3.5px;
          background: linear-gradient(90deg, #0B2545, #F06543, #FF8A5B);
          box-shadow: 0 0 14px rgba(240, 101, 67, 0.6);
          z-index: 100000;
          transition: width 0.15s ease-out;
        }

        .blog-reader-shell {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
          z-index: 2;
        }

        /* Hero Banner Card */
        .reader-hero-card {
          position: relative;
          width: 100%;
          border-radius: 28px;
          overflow: hidden;
          background: #0B2545;
          box-shadow: 0 20px 48px rgba(11, 37, 69, 0.14);
          border: 1px solid rgba(235, 222, 210, 0.9);
          margin-bottom: 36px;
        }
        .reader-hero-img-wrap {
          position: relative;
          width: 100%;
          height: clamp(380px, 50vw, 520px);
        }
        .reader-hero-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .reader-hero-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(11, 37, 69, 0.25) 0%,
            rgba(11, 37, 69, 0.65) 55%,
            rgba(11, 37, 69, 0.96) 100%
          );
        }
        .reader-hero-caption-box {
          position: absolute;
          bottom: 36px;
          left: 36px;
          right: 36px;
          z-index: 5;
        }
        @media (max-width: 768px) {
          .reader-hero-caption-box { left: 20px; right: 20px; bottom: 20px; }
        }

        /* 2-Column Reader Layout */
        .reader-grid-container {
          display: grid;
          grid-template-columns: 310px 1fr;
          gap: 36px;
          align-items: start;
        }
        @media (max-width: 1024px) {
          .reader-grid-container {
            grid-template-columns: 1fr;
          }
        }

        /* Sticky Left Sidebar Toolkit */
        .reader-sticky-sidebar {
          position: sticky;
          top: 96px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .reader-sidebar-card {
          background: #FFFFFF;
          border: 1.5px solid #EBDED2;
          border-radius: 24px;
          padding: 24px;
          box-shadow: 0 10px 30px rgba(11, 37, 69, 0.05);
        }

        .reader-toc-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          font-weight: 800;
          color: #0B2545;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 16px;
          padding-bottom: 12px;
          border-bottom: 1px solid #F5ECE5;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .reader-toc-item-link {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 500;
          color: #475569;
          text-decoration: none;
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 8px 10px;
          border-radius: 12px;
          transition: all 0.2s ease;
          line-height: 1.4;
        }
        .reader-toc-item-link:hover {
          background: #FFF4EE;
          color: #F06543;
          transform: translateX(4px);
        }
        .reader-toc-item-link.active {
          background: #FFF0EB;
          color: #F06543;
          font-weight: 700;
          border-left: 3px solid #F06543;
        }

        /* Main Editorial Paper */
        .reader-editorial-paper {
          background: #FFFFFF;
          border: 1.5px solid #EBDED2;
          border-radius: 28px;
          padding: 44px 50px;
          box-shadow: 0 14px 40px rgba(11, 37, 69, 0.06);
        }
        @media (max-width: 640px) {
          .reader-editorial-paper {
            padding: 24px 20px;
            border-radius: 20px;
          }
        }

        /* Key Takeaway Callout */
        .editorial-takeaway-callout {
          background: #FFF5F0;
          border: 1px solid rgba(240, 101, 67, 0.25);
          border-left: 5px solid #F06543;
          border-radius: 0 20px 20px 0;
          padding: 24px 28px;
          margin: 32px 0;
        }

        /* Section Card in Article */
        .editorial-section-block {
          margin-bottom: 48px;
          padding-bottom: 36px;
          border-bottom: 1px solid #F5ECE5;
        }
        .editorial-section-block:last-child {
          border-bottom: none;
          margin-bottom: 0;
          padding-bottom: 0;
        }

        /* Image inside article */
        .editorial-inline-img-box {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          margin: 22px 0;
          border: 1px solid #EBDED2;
          box-shadow: 0 8px 24px rgba(11, 37, 69, 0.06);
        }
        .editorial-inline-img-box img {
          width: 100%;
          height: clamp(260px, 35vw, 380px);
          object-fit: cover;
          display: block;
        }
        .editorial-inline-img-caption {
          background: #FAF4EE;
          padding: 10px 16px;
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          color: #64748b;
          font-style: italic;
          border-top: 1px solid #EBDED2;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        /* Pullquote Card */
        .editorial-pullquote-card {
          margin: 28px 0;
          background: linear-gradient(135deg, #0B2545 0%, #153B68 100%);
          border-radius: 20px;
          padding: 26px 32px;
          color: #FFFFFF;
          position: relative;
          overflow: hidden;
          box-shadow: 0 10px 28px rgba(11, 37, 69, 0.18);
        }

        /* Timeline Accordion Item */
        .timeline-day-card {
          background: #FAF4EE;
          border: 1px solid #EBDED2;
          border-radius: 16px;
          padding: 18px 22px;
          margin-bottom: 12px;
          transition: all 0.25s ease;
        }
        .timeline-day-card:hover {
          border-color: #F06543;
          background: #FFF6F2;
        }

        /* Interactive Checklist Item */
        .checklist-row {
          display: flex;
          align-items: center;
          gap: 12px;
          background: #FAF4EE;
          border: 1px solid #EBDED2;
          border-radius: 14px;
          padding: 12px 18px;
          margin-bottom: 10px;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .checklist-row:hover {
          background: #FFF4EE;
          border-color: #F06543;
        }
        .checklist-row.checked {
          background: #F0FDF4;
          border-color: #86EFAC;
          text-decoration: line-through;
          color: #64748b;
        }

        /* Author Big Profile Card */
        .editorial-author-banner {
          background: #FAF4EE;
          border: 1.5px solid #EBDED2;
          border-radius: 24px;
          padding: 28px 32px;
          margin-top: 48px;
          display: flex;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
        }

        /* Floating Toast */
        .reader-toast-bubble {
          position: fixed;
          bottom: 30px;
          right: 30px;
          background: #0B2545;
          color: #FFFFFF;
          border: 1.5px solid #F06543;
          border-radius: 16px;
          padding: 14px 22px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 700;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.25);
          z-index: 999999;
          display: flex;
          align-items: center;
          gap: 10px;
          animation: slideUpFade 0.3s ease-out;
        }
        @keyframes slideUpFade {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        /* Related Articles Strip */
        .related-stories-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 24px;
        }
        @media (max-width: 900px) {
          .related-stories-grid { grid-template-columns: 1fr; }
        }
        .related-story-card {
          background: #FFFFFF;
          border: 1.5px solid #EBDED2;
          border-radius: 20px;
          overflow: hidden;
          text-decoration: none;
          color: inherit;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
        }
        .related-story-card:hover {
          transform: translateY(-5px);
          border-color: #F06543;
          box-shadow: 0 14px 32px rgba(240, 101, 67, 0.12);
        }
      `}</style>

      {/* ── TOP READING PROGRESS BAR ── */}
      <div className="reader-progress-line" style={{ width: `${scrollProgress}%` }} />

      {/* ── FLOATING TOAST NOTIFICATION ── */}
      {toastMessage && (
        <div className="reader-toast-bubble">
          <Sparkles size={16} color="#F06543" />
          <span>{toastMessage}</span>
        </div>
      )}

      <div className="blog-reader-shell">

        {/* ── TOP BAR: BACK BUTTON, BREADCRUMB & TOOLBAR ── */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 24,
          flexWrap: 'wrap',
          gap: 14,
        }}>
          {/* Back link & breadcrumbs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
            <a
              href="/blog"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 12,
                fontWeight: 800,
                color: '#0B2545',
                background: '#FFFFFF',
                border: '1.5px solid #EBDED2',
                padding: '8px 18px',
                borderRadius: 20,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                transition: 'all 0.25s ease',
                boxShadow: '0 2px 8px rgba(11,37,69,0.04)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#F06543'; e.currentTarget.style.color = '#F06543'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#EBDED2'; e.currentTarget.style.color = '#0B2545'; }}
            >
              <ArrowLeft size={14} />
              <span>BACK TO JOURNAL</span>
            </a>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 11.5,
              fontWeight: 700,
              color: '#64748b',
            }}>
              <span>JOURNAL</span>
              <ChevronRight size={12} />
              <span style={{ color: '#F06543' }}>{articleData.category}</span>
            </div>
          </div>

          {/* Action Toolbar: Like, Bookmark, Share, Font Size */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
            {/* Font Size Adjuster */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              background: '#FFFFFF',
              border: '1.5px solid #EBDED2',
              borderRadius: 18,
              padding: '4px 6px',
            }}>
              <button
                onClick={() => setFontSize('normal')}
                title="Default text size"
                style={{
                  border: 'none',
                  background: fontSize === 'normal' ? '#FAF4EE' : 'transparent',
                  color: fontSize === 'normal' ? '#0B2545' : '#64748b',
                  fontWeight: 800,
                  fontSize: 11,
                  padding: '4px 8px',
                  borderRadius: 12,
                  cursor: 'pointer',
                }}
              >
                A
              </button>
              <button
                onClick={() => setFontSize('large')}
                title="Larger text size"
                style={{
                  border: 'none',
                  background: fontSize === 'large' ? '#FAF4EE' : 'transparent',
                  color: fontSize === 'large' ? '#F06543' : '#64748b',
                  fontWeight: 800,
                  fontSize: 13,
                  padding: '4px 8px',
                  borderRadius: 12,
                  cursor: 'pointer',
                }}
              >
                A+
              </button>
            </div>

            {/* Like Button */}
            <button
              onClick={handleLike}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 11.5,
                fontWeight: 800,
                color: liked ? '#E11D48' : '#0B2545',
                background: liked ? '#FFF1F2' : '#FFFFFF',
                border: liked ? '1.5px solid #FDA4AF' : '1.5px solid #EBDED2',
                padding: '7px 14px',
                borderRadius: 18,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                transition: 'all 0.2s ease',
              }}
            >
              <Heart size={14} fill={liked ? '#E11D48' : 'none'} color={liked ? '#E11D48' : '#0B2545'} />
              <span>{likeCount.toLocaleString()}</span>
            </button>

            {/* Bookmark Button */}
            <button
              onClick={handleBookmark}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 11.5,
                fontWeight: 800,
                color: bookmarked ? '#F06543' : '#0B2545',
                background: bookmarked ? '#FFF0EB' : '#FFFFFF',
                border: bookmarked ? '1.5px solid #FF8A5B' : '1.5px solid #EBDED2',
                padding: '7px 14px',
                borderRadius: 18,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                transition: 'all 0.2s ease',
              }}
            >
              <Bookmark size={14} fill={bookmarked ? '#F06543' : 'none'} color={bookmarked ? '#F06543' : '#0B2545'} />
              <span>{bookmarked ? 'SAVED' : 'SAVE'}</span>
            </button>

            {/* Share Button */}
            <button
              onClick={handleShare}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 11.5,
                fontWeight: 800,
                color: '#0B2545',
                background: '#FFFFFF',
                border: '1.5px solid #EBDED2',
                padding: '7px 14px',
                borderRadius: 18,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                transition: 'all 0.2s ease',
              }}
            >
              <Share2 size={14} color="#0B2545" />
              <span>SHARE</span>
            </button>
          </div>
        </div>

        {/* ── HERO BANNER CARD ── */}
        <div className="reader-hero-card">
          <div className="reader-hero-img-wrap">
            <img src={articleData.cover} alt={articleData.title} />
            <div className="reader-hero-gradient" />

            <div className="reader-hero-caption-box">
              {/* Badges row */}
              <div style={{ display: 'flex', gap: 10, marginBottom: 14, flexWrap: 'wrap' }}>
                <span style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 11.5,
                  fontWeight: 900,
                  color: '#FFFFFF',
                  background: 'linear-gradient(135deg, #FF6B4A, #F06543)',
                  padding: '5px 14px',
                  borderRadius: 20,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  boxShadow: '0 4px 12px rgba(240, 101, 67, 0.4)',
                }}>
                  {articleData.category}
                </span>

                <span style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 11.5,
                  fontWeight: 800,
                  color: '#FAF4EE',
                  background: 'rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(8px)',
                  padding: '5px 14px',
                  borderRadius: 20,
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  letterSpacing: '0.05em',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 5,
                }}>
                  <ShieldCheck size={13} color="#34D399" />
                  {articleData.badge || 'VERIFIED ISLAND GUIDE'}
                </span>
              </div>

              {/* Title */}
              <h1 style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(28px, 4.2vw, 46px)',
                fontWeight: 600,
                color: '#FFFFFF',
                lineHeight: 1.15,
                margin: '0 0 14px 0',
                textShadow: '0 4px 20px rgba(0,0,0,0.6)',
              }}>
                {articleData.title}
              </h1>

              {/* Subtitle */}
              {articleData.subtitle && (
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 'clamp(14px, 1.6vw, 16px)',
                  color: '#E2E8F0',
                  lineHeight: 1.5,
                  margin: '0 0 18px 0',
                  maxWidth: '900px',
                  fontWeight: 300,
                }}>
                  {articleData.subtitle}
                </p>
              )}

              {/* Author & Metas info */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 18,
                flexWrap: 'wrap',
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 12,
                color: '#CBD5E1',
                paddingTop: 12,
                borderTop: '1px solid rgba(255,255,255,0.2)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <User size={13} color="#F06543" />
                  <span style={{ fontWeight: 800, color: '#FFFFFF' }}>{articleData.author}</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                  <Calendar size={13} color="#F06543" />
                  <span>{articleData.date}</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                  <Clock size={13} color="#F06543" />
                  <span>{articleData.readTime}</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                  <Eye size={13} color="#F06543" />
                  <span>{articleData.views} Readers</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── 2-COLUMN MAIN READER GRID ── */}
        <div className="reader-grid-container">

          {/* ══════════════════════════════════════════════════════════════════
              LEFT STICKY COLUMN: TOC, STATS, AUDIO, CONCIERGE CTA
             ══════════════════════════════════════════════════════════════════ */}
          <aside className="reader-sticky-sidebar">

            {/* Quick Island Stats Card */}
            {articleData.quickStats && (
              <div className="reader-sidebar-card">
                <div className="reader-toc-title">
                  <span>AT A GLANCE</span>
                  <Sparkle size={13} color="#F06543" />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <div>
                    <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 10.5, fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>Ideal Duration</div>
                    <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 700, color: '#0B2545' }}>{articleData.quickStats.idealDuration}</div>
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 10.5, fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>Best Travel Window</div>
                    <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 700, color: '#0B2545' }}>{articleData.quickStats.bestSeason}</div>
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 10.5, fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>Romantic Vibe</div>
                    <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 700, color: '#F06543' }}>{articleData.quickStats.vibe}</div>
                  </div>
                </div>
              </div>
            )}

            {/* Table of Contents */}
            {articleData.toc && articleData.toc.length > 0 && (
              <div className="reader-sidebar-card">
                <div className="reader-toc-title">
                  <span>TABLE OF CONTENTS</span>
                  <Compass size={13} color="#F06543" />
                </div>
                <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  {articleData.toc.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`reader-toc-item-link ${activeTocId === item.id ? 'active' : ''}`}
                      onClick={(e) => {
                        e.preventDefault();
                        const target = document.getElementById(item.id);
                        if (target) {
                          const yOffset = -100;
                          const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
                          window.scrollTo({ top: y, behavior: 'smooth' });
                        }
                      }}
                    >
                      <ChevronRight size={13} color="#F06543" style={{ flexShrink: 0, marginTop: 2 }} />
                      <span>{item.title}</span>
                    </a>
                  ))}
                </nav>
              </div>
            )}

            {/* Romance Concierge Floating Box */}
            <div style={{
              background: 'linear-gradient(135deg, #0B2545 0%, #173860 100%)',
              border: '1.5px solid #0B2545',
              borderRadius: 24,
              padding: 24,
              color: '#FFFFFF',
              boxShadow: '0 12px 32px rgba(11, 37, 69, 0.15)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: "'Space Grotesk', sans-serif", fontSize: 10.5, fontWeight: 800, color: '#FF8A5B', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 8 }}>
                <Sparkles size={12} color="#FF8A5B" />
                ISLAND ROMANCE CONCIERGE
              </div>
              <h4 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 20, fontWeight: 600, margin: '0 0 8px 0', lineHeight: 1.2 }}>
                Planning an Andaman Honeymoon?
              </h4>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12.5, color: '#CBD5E1', lineHeight: 1.5, margin: '0 0 16px 0' }}>
                Our local specialists can arrange private beach candlelight dinners, pool villa upgrades & speed catamaran charters.
              </p>
              <a
                href="/packages"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                  background: 'linear-gradient(135deg, #FF6B4A, #F06543)',
                  color: '#FFFFFF',
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 12,
                  fontWeight: 800,
                  padding: '10px 16px',
                  borderRadius: 14,
                  textDecoration: 'none',
                  boxShadow: '0 4px 14px rgba(240, 101, 67, 0.4)',
                }}
              >
                <span>VIEW HONEYMOON PACKAGES</span>
                <ChevronRight size={13} />
              </a>
            </div>

          </aside>

          {/* ══════════════════════════════════════════════════════════════════
              RIGHT COLUMN: MAIN EDITORIAL CONTENT PAPER
             ══════════════════════════════════════════════════════════════════ */}
          <main className="reader-editorial-paper" style={{ fontSize: getBodyFontSize() }}>
            {/* Author Byline Bar */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              marginBottom: 32,
              paddingBottom: 22,
              borderBottom: '1.5px solid #F5ECE5',
              flexWrap: 'wrap',
            }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 15, fontWeight: 800, color: '#0B2545' }}>
                  {articleData.author}
                </div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12.5, color: '#64748b' }}>
                  {articleData.authorRole} • Published on {articleData.date}
                </div>
              </div>

              <div style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 11.5,
                fontWeight: 700,
                color: '#F06543',
                background: '#FFF0EB',
                padding: '6px 14px',
                borderRadius: 14,
                border: '1px solid #FF8A5B',
              }}>
                ⭐ Verified Curator
              </div>
            </div>

            {/* Lead Intro Paragraph with Stylized Drop Cap */}
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1.1em',
              lineHeight: 1.8,
              color: '#1E293B',
              marginBottom: 28,
              fontWeight: 400,
            }}>
              {articleData.intro}
            </p>

            {/* Editorial Key Takeaway Box */}
            <div className="editorial-takeaway-callout">
              <div style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 12,
                fontWeight: 900,
                color: '#F06543',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                display: 'flex',
                alignItems: 'center',
                gap: 7,
                marginBottom: 8,
              }}>
                <Sparkles size={14} color="#F06543" />
                <span>KEY TRAVEL TAKEAWAY</span>
              </div>
              <div style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.98em',
                color: '#0B2545',
                lineHeight: 1.65,
                fontWeight: 500,
              }}>
                {articleData.takeaway}
              </div>
            </div>

            {/* Raw HTML Content If DB API Article */}
            {articleData.rawHtml && (
              <div
                style={{ lineHeight: 1.8, color: '#334155', margin: '24px 0' }}
                dangerouslySetInnerHTML={{ __html: articleData.rawHtml }}
              />
            )}

            {/* ── RICH ARTICLE SECTIONS ── */}
            {articleData.sections && articleData.sections.map((section, idx) => (
              <section key={section.id || idx} id={section.id} className="editorial-section-block">

                {/* Section Title */}
                <h2 style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: 'clamp(24px, 2.5vw, 32px)',
                  fontWeight: 600,
                  color: '#0B2545',
                  marginBottom: 16,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  lineHeight: 1.25,
                }}>
                  <span style={{
                    width: 7,
                    height: 28,
                    borderRadius: 4,
                    background: 'linear-gradient(180deg, #FF6B4A, #F06543)',
                    flexShrink: 0,
                  }} />
                  {section.title}
                </h2>

                {/* Section Inline Image */}
                {section.image && (
                  <div className="editorial-inline-img-box">
                    <img src={section.image} alt={section.title} />
                    {section.caption && (
                      <div className="editorial-inline-img-caption">
                        <Camera size={13} color="#F06543" />
                        <span>{section.caption}</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Section Paragraph Text */}
                {section.text && (
                  <p style={{
                    fontFamily: "'Inter', sans-serif",
                    lineHeight: 1.8,
                    color: '#334155',
                    marginBottom: 18,
                  }}>
                    {section.text}
                  </p>
                )}

                {/* Bullet Points */}
                {section.bulletPoints && section.bulletPoints.length > 0 && (
                  <div style={{
                    background: '#FAF4EE',
                    border: '1px solid #EBDED2',
                    borderRadius: 18,
                    padding: '20px 24px',
                    margin: '20px 0',
                  }}>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                      {section.bulletPoints.map((point, pIdx) => (
                        <li key={pIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, lineHeight: 1.6, color: '#1E293B', fontSize: '0.95em' }}>
                          <CheckCircle2 size={16} color="#F06543" style={{ flexShrink: 0, marginTop: 3 }} />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Pullquote */}
                {section.quote && (
                  <div className="editorial-pullquote-card">
                    <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 40, color: '#FF8A5B', lineHeight: 0.5, marginBottom: 10 }}>“</div>
                    <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 20, fontStyle: 'italic', margin: 0, lineHeight: 1.45, color: '#FAF4EE' }}>
                      {section.quote}
                    </p>
                  </div>
                )}

                {/* Day-by-Day Itinerary Timeline */}
                {section.timeline && (
                  <div style={{ marginTop: 24 }}>
                    {section.timeline.map((dayItem, dIdx) => (
                      <div key={dIdx} className="timeline-day-card">
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                          <span style={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontSize: 11,
                            fontWeight: 900,
                            color: '#FFFFFF',
                            background: '#0B2545',
                            padding: '3px 10px',
                            borderRadius: 10,
                          }}>
                            {dayItem.day}
                          </span>
                          <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, fontWeight: 800, color: '#0B2545', margin: 0 }}>
                            {dayItem.title}
                          </h4>
                        </div>
                        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#475569', margin: 0, lineHeight: 1.6 }}>
                          {dayItem.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Interactive Romance Checklist */}
                {section.checklist && (
                  <div style={{
                    background: '#FFFFFF',
                    border: '1.5px solid #EBDED2',
                    borderRadius: 20,
                    padding: 24,
                    marginTop: 20,
                    boxShadow: '0 6px 20px rgba(11, 37, 69, 0.04)',
                  }}>
                    <div style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: 12,
                      fontWeight: 800,
                      color: '#0B2545',
                      marginBottom: 14,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                      <span>INTERACTIVE PACKING CHECKLIST</span>
                      <span style={{ color: '#F06543', fontSize: 11 }}>
                        {Object.values(checkedItems).filter(Boolean).length} of {section.checklist.length} Packed
                      </span>
                    </div>

                    {section.checklist.map((item, cIdx) => {
                      const isChecked = !!checkedItems[cIdx];
                      return (
                        <div
                          key={cIdx}
                          className={`checklist-row ${isChecked ? 'checked' : ''}`}
                          onClick={() => toggleChecklist(cIdx)}
                        >
                          <div style={{
                            width: 20,
                            height: 20,
                            borderRadius: 6,
                            border: isChecked ? '1.5px solid #22C55E' : '1.5px solid #CBD5E1',
                            background: isChecked ? '#22C55E' : '#FFFFFF',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                          }}>
                            {isChecked && <Check size={13} color="#FFFFFF" strokeWidth={3} />}
                          </div>
                          <span style={{ fontSize: 13.5, fontWeight: isChecked ? 500 : 600 }}>
                            {item}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                )}

              </section>
            ))}

            {/* ── AUTHOR BIOGRAPHY CARD ── */}
            <div className="editorial-author-banner">
              <div style={{ flex: 1, minWidth: 220 }}>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 800, color: '#0B2545', marginBottom: 2 }}>
                  Written by {articleData.author}
                </div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, fontWeight: 700, color: '#F06543', marginBottom: 8 }}>
                  {articleData.authorRole}
                </div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#475569', lineHeight: 1.6, margin: 0 }}>
                  {articleData.authorBio}
                </p>
              </div>
            </div>

            {/* ── READER COMMENTS & VERIFIED EXPERIENCES ── */}
            <div style={{ marginTop: 52, paddingTop: 36, borderTop: '1.5px solid #F5ECE5' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20, flexWrap: 'wrap', gap: 10 }}>
                <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 26, fontWeight: 600, color: '#0B2545' }}>
                  Reader Reviews & Island Discussions ({comments.length})
                </div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11.5, fontWeight: 800, color: '#F06543' }}>
                  ⭐ 5.0 RATED BY COUPLES
                </div>
              </div>

              {/* Add Comment Form */}
              <form onSubmit={handleAddComment} style={{
                background: '#FAF4EE',
                border: '1.5px solid #EBDED2',
                borderRadius: 20,
                padding: 24,
                marginBottom: 28,
              }}>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, fontWeight: 800, color: '#0B2545', textTransform: 'uppercase', marginBottom: 12 }}>
                  SHARE YOUR ANDAMAN EXPERIENCE OR ASK A QUESTION
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 12, marginBottom: 12 }}>
                  <input
                    type="text"
                    placeholder="Your Name (e.g., Rohit & Sneha)"
                    value={newCommentName}
                    onChange={(e) => setNewCommentName(e.target.value)}
                    required
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 13,
                      padding: '12px 16px',
                      borderRadius: 12,
                      border: '1.5px solid #EBDED2',
                      background: '#FFFFFF',
                      color: '#0B2545',
                      outline: 'none',
                    }}
                  />
                  <textarea
                    rows={3}
                    placeholder="Write your review, honeymoon memory, or travel question..."
                    value={newCommentText}
                    onChange={(e) => setNewCommentText(e.target.value)}
                    required
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 13,
                      padding: '12px 16px',
                      borderRadius: 12,
                      border: '1.5px solid #EBDED2',
                      background: '#FFFFFF',
                      color: '#0B2545',
                      outline: 'none',
                      resize: 'vertical',
                    }}
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 12,
                    fontWeight: 800,
                    color: '#FFFFFF',
                    background: '#0B2545',
                    border: 'none',
                    padding: '10px 22px',
                    borderRadius: 12,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = '#F06543'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = '#0B2545'; }}
                >
                  <Send size={13} />
                  <span>POST COMMENT</span>
                </button>
              </form>

              {/* List of comments */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {comments.map((cm) => (
                  <div key={cm.id} style={{
                    background: '#FFFFFF',
                    border: '1px solid #EBDED2',
                    borderRadius: 18,
                    padding: '18px 22px',
                    boxShadow: '0 4px 14px rgba(11,37,69,0.03)',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <img src={cm.avatar} alt={cm.name} style={{ width: 32, height: 32, borderRadius: '50%', objectFit: 'cover' }} />
                        <div>
                          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 800, color: '#0B2545' }}>
                            {cm.name}
                          </div>
                          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: '#64748b' }}>
                            {cm.date}
                          </div>
                        </div>
                      </div>
                      <div style={{ display: 'flex', gap: 2 }}>
                        {[...Array(cm.rating)].map((_, i) => (
                          <Star key={i} size={13} color="#F59E0B" fill="#F59E0B" />
                        ))}
                      </div>
                    </div>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#334155', lineHeight: 1.6, margin: 0 }}>
                      {cm.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </main>
        </div>

        {/* ── RELATED STORIES & EDITORIAL GUIDES ── */}
        <div style={{ marginTop: 70, paddingTop: 40, borderTop: '1.5px solid #EBDED2' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 800, color: '#F06543', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 6 }}>
            <BookOpen size={13} color="#F06543" />
            <span>CONTINUE EXPLORING</span>
          </div>
          <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 32, fontWeight: 600, color: '#0B2545', margin: 0 }}>
            Related Island Travel Guides & Stories
          </h3>

          <div className="related-stories-grid">
            {RELATED_STORIES.map((rel) => (
              <a key={rel.id} href={`/blog-details?id=${rel.id}`} className="related-story-card">
                <img src={rel.image} alt={rel.title} style={{ width: '100%', height: 180, objectFit: 'cover' }} />
                <div style={{ padding: 22, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: "'Space Grotesk', sans-serif", fontSize: 11.5, fontWeight: 800, color: '#F06543', marginBottom: 8 }}>
                      <span>{rel.category}</span>
                      <span style={{ color: '#CBD5E1' }}>•</span>
                      <span style={{ color: '#64748b' }}>{rel.readTime}</span>
                    </div>
                    <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 15, fontWeight: 800, color: '#0B2545', lineHeight: 1.4, margin: 0 }}>
                      {rel.title}
                    </h4>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, fontWeight: 800, color: '#F06543', marginTop: 18 }}>
                    <span>READ COMPLETE GUIDE</span>
                    <ChevronRight size={13} />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* ── BOTTOM CTA BANNER ── */}
        <div style={{
          marginTop: 64,
          background: 'linear-gradient(135deg, #0B2545 0%, #153B68 100%)',
          borderRadius: 28,
          padding: '44px 48px',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 28,
          boxShadow: '0 20px 48px rgba(11, 37, 69, 0.2)',
          border: '1.5px solid rgba(255, 255, 255, 0.15)',
        }}>
          <div style={{ maxWidth: 640 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 800, color: '#FF8A5B', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 8 }}>
              <Sparkles size={13} color="#FF8A5B" />
              LET’S CRAFT YOUR ANDAMAN GETAWAY
            </div>
            <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(26px, 3vw, 36px)', fontWeight: 600, margin: '0 0 10px 0', lineHeight: 1.2 }}>
              Ready to Experience the Magic of Andaman?
            </h3>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#E2E8F0', lineHeight: 1.6, margin: 0 }}>
              Speak with our senior island romance curators for custom honeymoon packages, private speedboats, luxury beach pool villas, and VIP concierge care.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
            <a
              href="/packages"
              style={{
                background: 'linear-gradient(135deg, #FF6B4A, #F06543)',
                color: '#FFFFFF',
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 13,
                fontWeight: 800,
                padding: '14px 28px',
                borderRadius: 16,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                boxShadow: '0 8px 24px rgba(240, 101, 67, 0.4)',
                transition: 'all 0.25s ease',
              }}
            >
              <span>EXPLORE ALL PACKAGES</span>
              <ChevronRight size={15} />
            </a>

            <a
              href="/contact"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(8px)',
                color: '#FFFFFF',
                border: '1.5px solid rgba(255, 255, 255, 0.3)',
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 13,
                fontWeight: 800,
                padding: '14px 24px',
                borderRadius: 16,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                transition: 'all 0.25s ease',
              }}
            >
              <span>TALK TO AN EXPERT</span>
            </a>
          </div>
        </div>

      </div>

      {/* GLOBAL FOOTER */}
      <div style={{ marginTop: 70 }}>
        <FooterBottom />
      </div>
    </div>
  );
}
