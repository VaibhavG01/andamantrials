import React, { useState, useEffect } from 'react';
import adminService from '../services/adminService';
import DataTable from '../components/DataTable';
import StatusBadge from '../components/StatusBadge';
import ConfirmDialog from '../components/ConfirmDialog';
import MediaUploadField from '../components/MediaUploadField';
import MultiMediaUploadField from '../components/MultiMediaUploadField';
import {
  Plus,
  Edit3,
  Trash2,
  Calendar,
  Clock,
  MapPin,
  Building2,
  Utensils,
  Ship,
  Sparkles,
  Star,
  CheckCircle2,
  X,
  PlusCircle,
  ArrowUp,
  ArrowDown,
  Eye,
  Coffee,
  Bed,
  Car,
  Image as ImageIcon,
  HelpCircle,
  FileText,
  Layers,
  ChevronRight,
  Zap,
  Info
} from 'lucide-react';

const ITINERARY_PRESETS = {
  '5D4N': [
    {
      day: 1,
      title: 'Arrival in Port Blair • Cellular Jail Light & Sound Show',
      location: 'Port Blair',
      description: 'Arrive at Veer Savarkar International Airport, Port Blair. Meet our private island concierge and transfer to your sea-view hotel. In the evening, visit the historic Cellular Jail followed by the stirring Sound & Light Show.',
      morning: 'Airport pick-up, private AC transfer & resort check-in',
      afternoon: 'Corbyn’s Cove Beach visit & local coastal cuisine lunch',
      evening: 'Cellular Jail national memorial tour & Freedom Light & Sound Show',
      meals: { breakfast: false, lunch: true, dinner: true },
      stay: 'Symphony Samudra / Sea Shell Port Blair (4-Star Beachside)',
      transfers: 'Private AC Cab with Airport Escort',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80',
    },
    {
      day: 2,
      title: 'High-Speed Makruzz to Havelock • Radhanagar Beach Sunset',
      location: 'Havelock Island (Swaraj Dweep)',
      description: 'Board the morning luxury Makruzz Catamaran to Havelock Island. Check-in to your beachfront resort. In the late afternoon, experience the world-famous golden sunset at Radhanagar Beach (Asia’s #1 Beach).',
      morning: 'Private AC catamaran crossing to Havelock Island (90 mins)',
      afternoon: 'Resort check-in, tropical welcome drink & relaxation by the pool',
      evening: 'Romantic sunset stroll & photography at Radhanagar Beach (Beach No. 7)',
      meals: { breakfast: true, lunch: false, dinner: true },
      stay: 'Barefoot at Havelock / Symphony Palms Beach Resort',
      transfers: 'Luxury Catamaran Ferry + Havelock Private AC Cab',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
    },
    {
      day: 3,
      title: 'Elephant Beach Snorkeling Expedition & Water Adventures',
      location: 'Havelock Island (Swaraj Dweep)',
      description: 'Speedboat cruise to Elephant Beach known for crystal-clear turquoise waters and vibrant living coral reefs. Enjoy complimentary guided snorkeling session, jet skiing, or glass-bottom boat safari.',
      morning: 'Speedboat cruise to Elephant Beach & guided coral snorkeling',
      afternoon: 'Optional Sea Walk, Scuba diving, or Parasailing over azure waters',
      evening: 'Visit Kalapathar Beach for turquoise ocean views & coconut groves',
      meals: { breakfast: true, lunch: true, dinner: true },
      stay: 'Barefoot at Havelock / Symphony Palms Beach Resort',
      transfers: 'Speedboat to Elephant Beach + Local AC Cab',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80',
    },
    {
      day: 4,
      title: 'Ferry to Neil Island • Natural Bridge & Laxmanpur Sunset',
      location: 'Neil Island (Shaheed Dweep)',
      description: 'Cruise to Neil Island, the vegetable bowl and tranquil coral haven of Andaman. Explore the magnificent geological Wonder Natural Rock Formation (Howrah Bridge) and Bharatpur Beach.',
      morning: 'Morning ferry to Neil Island, check-in to luxury resort',
      afternoon: 'Explore Bharatpur Beach shallow reef lagoon & glass bottom boat',
      evening: 'Witness the iconic sunset at Laxmanpur Beach & Natural Rock Bridge',
      meals: { breakfast: true, lunch: false, dinner: true },
      stay: 'Sea Shell Neil / Summer Sands Beach Resort',
      transfers: 'Private Catamaran + Neil Island AC Cab',
      image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=600&q=80',
    },
    {
      day: 5,
      title: 'Return Ferry to Port Blair & Departure with Memories',
      location: 'Port Blair',
      description: 'Catch the morning cruise back to Port Blair. Depending on your flight timings, souvenir shopping at Sagarika Govt. Emporium before private airport drop with unforgettable island memories.',
      morning: 'Morning high-speed catamaran cruise back to Port Blair Jetty',
      afternoon: 'Handicraft & seashell souvenir shopping at Sagarika Emporium',
      evening: 'Private transfer to Veer Savarkar Airport for onward flight home',
      meals: { breakfast: true, lunch: false, dinner: false },
      stay: 'N/A (Departure Day)',
      transfers: 'Private AC Cab to Airport Drop',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80',
    },
  ],
  '6D5N': [
    {
      day: 1,
      title: 'Arrival in Port Blair • Cellular Jail Light & Sound Show',
      location: 'Port Blair',
      description: 'Welcome to the tropical paradise of Andaman! Airport meet-and-greet with garland and private transfer to your sea-facing luxury resort. Evening historic Cellular Jail Light & Sound show.',
      morning: 'VIP airport pick-up & check-in to sea-view resort',
      afternoon: 'Leisurely lunch & visit to Fisheries / Anthropological Museum',
      evening: 'Cellular Jail Light & Sound Show narrating freedom saga',
      meals: { breakfast: false, lunch: true, dinner: true },
      stay: 'Symphony Samudra Luxury Resort (Port Blair)',
      transfers: 'Private AC Luxury Cab',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80',
    },
    {
      day: 2,
      title: 'Catamaran Cruise to Havelock • Radhanagar Beach Sunset',
      location: 'Havelock Island',
      description: 'Embark on the premium Makruzz Catamaran to Havelock Island. Check-in to private beachfront villa with private beach access. Evening sunset at Radhanagar Beach.',
      morning: 'Makruzz high-speed catamaran to Havelock Island',
      afternoon: 'Villa check-in, beach walk & tropical welcome mocktails',
      evening: 'Golden sunset photography at Radhanagar Beach (Beach No. 7)',
      meals: { breakfast: true, lunch: false, dinner: true },
      stay: 'Havelock Island Beach Resort / Barefoot Villa',
      transfers: 'Makruzz Catamaran + Havelock AC Cab',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
    },
    {
      day: 3,
      title: 'Elephant Beach Snorkeling & Certified Scuba Diving',
      location: 'Havelock Island',
      description: 'An action-packed day exploring living coral reefs. Speedboat to Elephant Beach for complimentary guided snorkeling followed by private certified scuba diving with underwater video.',
      morning: 'Speedboat to Elephant Beach with complimentary coral snorkeling',
      afternoon: 'PADI Certified Discover Scuba Diving with master dive instructor',
      evening: 'Romantic Candlelight Dinner on the beach with wine/mocktails',
      meals: { breakfast: true, lunch: true, dinner: true },
      stay: 'Havelock Island Beach Resort / Barefoot Villa',
      transfers: 'Private Speedboat + AC Cab',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80',
    },
    {
      day: 4,
      title: 'Kalapathar Beach Exploration & Cruise to Neil Island',
      location: 'Neil Island (Shaheed Dweep)',
      description: 'Morning scenic photoshoot at Kalapathar Beach with turquoise waters and black boulders. Afternoon catamaran to tranquil Neil Island and sunset at Laxmanpur Beach.',
      morning: 'Morning sunrise drive to picturesque Kalapathar Beach',
      afternoon: 'Ferry to Neil Island & check-in to eco luxury resort',
      evening: 'Sunset viewing at Laxmanpur Beach & Natural Rock Formation',
      meals: { breakfast: true, lunch: false, dinner: true },
      stay: 'Sea Shell Neil / Summer Sands Resort',
      transfers: 'Inter-Island Catamaran + Neil Island AC Cab',
      image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=600&q=80',
    },
    {
      day: 5,
      title: 'Bharatpur Beach Lagoon & Return to Port Blair Sunset',
      location: 'Port Blair',
      description: 'Explore the shallow, crystal lagoon of Bharatpur Beach. Glass-bottom coral safari. Afternoon catamaran cruise back to Port Blair. Evening sunset drive to Chidiya Tapu (Bird Island).',
      morning: 'Bharatpur Beach water activities & glass-bottom coral ride',
      afternoon: 'Catamaran cruise back to Port Blair Jetty & resort check-in',
      evening: 'Chidiya Tapu sunset point & romantic panoramic ocean vista',
      meals: { breakfast: true, lunch: false, dinner: true },
      stay: 'Symphony Samudra Luxury Resort (Port Blair)',
      transfers: 'Catamaran + Private AC Cab',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80',
    },
    {
      day: 6,
      title: 'Souvenir Shopping & Airport Drop with Island Memories',
      location: 'Port Blair',
      description: 'Enjoy a leisurely buffet breakfast with ocean views. Quick shopping visit to Sagarika Govt. Handicrafts Emporium for pearl jewelry and local wooden artifacts before airport drop.',
      morning: 'Buffet breakfast & resort check-out',
      afternoon: 'Sagarika handicraft emporium & Port Blair city drive',
      evening: 'Private drop at Veer Savarkar Airport for return journey',
      meals: { breakfast: true, lunch: false, dinner: false },
      stay: 'N/A (Departure Day)',
      transfers: 'Private AC Cab to Airport',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80',
    },
  ],
};

const DEFAULT_INCLUSIONS = [
  'Luxury Hotel / Beach Resort Accommodation on Double Sharing',
  'Daily Delicious Buffet Breakfast & Select Gourmet Dinners',
  'Confirmed High-Speed Catamaran Tickets (Makruzz / Nautika / Green Ocean)',
  'Exclusive AC Vehicle for all Airport, Jetty, and Sightseeing Transfers',
  'Complimentary Guided Snorkeling Session with Professional Equipment',
  'All Entry Tickets, Monument Passes & National Park Environmental Fees',
  'Airport Meet & Greet with 24/7 Dedicated Andaman Island Concierge',
  'All Toll Taxes, Fuel Charges, Parking & Driver Allowances Included'
];

const DEFAULT_EXCLUSIONS = [
  'Airfare to and from Port Blair (Can be booked on special request)',
  'Personal expenses, laundry, telephone calls, and room service orders',
  'Optional Scuba Diving, Sea Kart, Parasailing & Jet Ski upgrades',
  'Meals and beverages not explicitly mentioned in the itinerary',
  'Camera & video fees at historical monuments where applicable',
  'Travel and medical insurance (Highly recommended)'
];

const CURATED_STAY_OPTIONS = [
  {
    group: '🏝️ Havelock Island (Swaraj Dweep)',
    options: [
      'Barefoot at Havelock (Radhanagar Beach)',
      'Symphony Palms Beach Resort (Govind Nagar Beach)',
      'Havelock Island Beach Resort (Beach No. 2)',
      'Sea Shell Havelock Luxury Resort',
      'Silver Sand Beach Resort Havelock',
      'Taj Exotica Resort & Spa Radhanagar',
      'Jalakara Luxury Boutique Villa Havelock',
      'Aquays Sun Heaven Resort Havelock',
      'Wild Orchid Beach Resort Havelock',
      'Coral Reef Resort Havelock',
    ]
  },
  {
    group: '🏢 Port Blair (South Andaman)',
    options: [
      'Symphony Samudra Beachside Resort & Spa (Chidiya Tapu)',
      'Sea Shell Coral Cove Port Blair',
      'Welcomhotel by ITC Bay Island Port Blair',
      'Sinclairs Bayview Port Blair',
      'Peerless Sarovar Portico Port Blair',
      'Lemon Tree Hotel Port Blair',
      'Megapode Resort Port Blair',
      'Fortune Resort Bay Island Port Blair',
      'Hotel Sentinel Port Blair',
    ]
  },
  {
    group: '🌴 Neil Island (Shaheed Dweep)',
    options: [
      'Sea Shell Samssara Neil Island',
      'Summer Sands Beach Resort Neil Island',
      'Symphony Summer Sands Neil Island',
      'Pearl Park Beach Resort Neil (Sunset Point)',
      'Tango Beach Resort Neil Island',
      'TSG Aura Resort Neil Island',
      'Aquays Beach Resort Neil Island',
    ]
  },
  {
    group: '🌿 Middle & North Andaman',
    options: [
      'Coral Reef Resort Baratang Island',
      'Pristine Beach Resort Diglipur',
      'Turtle Resort Kalipur Beach Diglipur',
      'Hawksbill Nest Rangat',
    ]
  },
  {
    group: '⭐ Standard / Category Tiers',
    options: [
      '5-Star Luxury Beach Villa / Private Pool Suite',
      '4-Star Deluxe Beachside Resort (Double Sharing)',
      '3-Star Comfortable AC Island Hotel',
      'Eco Bamboo Cottage near Beach',
      'N/A (Departure Day / No Stay Required)',
    ]
  }
];

const DEFAULT_PACKAGE_FORM = {
  name: '',
  slug: '',
  category: 'ALL',
  duration: '5 Nights / 6 Days',
  destinations: 'Port Blair • Havelock • Neil',
  bestFor: 'Couples, Families & Island Lovers',
  description: 'Embark on a signature Andaman luxury holiday featuring private beach resorts, crystal catamaran crossings, coral snorkeling, and scenic sunsets.',
  image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
  gallery: [],
  price: 24999,
  originalPrice: 29999,
  rating: 4.9,
  reviewsCount: 128,
  tagsRaw: 'BESTSELLER, LUXURY, CATAMARAN, SCUBA',
  highlights: DEFAULT_INCLUSIONS.slice(0, 4),
  inclusions: DEFAULT_INCLUSIONS,
  exclusions: DEFAULT_EXCLUSIONS,
  hotelCategory: '4-Star Beach Resort',
  mealPlan: 'Daily Buffet Breakfast & Dinner (MAP)',
  transfers: 'Private AC Cab & Makruzz Catamaran',
  activities: 'Guided Snorkeling, Coral Reef Cruise & Sunset Safari',
  pickupDrop: 'Port Blair Airport (IXZ) Pick-up & Drop Included',
  cancellationPolicy: '100% refund on cancellation 15+ days before departure. 50% refund between 7-14 days. Non-refundable within 7 days.',
  itinerary: ITINERARY_PRESETS['5D4N'],
  faq: [
    { question: 'Is scuba diving included in this package?', answer: 'Guided snorkeling is complimentary. Certified scuba diving can be pre-booked at an exclusive 20% traveler discount.' },
    { question: 'What type of ferries are used for island transfers?', answer: 'We exclusively book premium air-conditioned high-speed catamarans (Makruzz, Nautika, or Green Ocean).' }
  ],
  featured: true,
  status: 'ACTIVE'
};

export default function PackagesManagement() {
  const [packages, setPackages] = useState([]);
  const [masterCategories, setMasterCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  // Main Modal State
  const [modalOpen, setModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [activeTab, setActiveTab] = useState('basic'); // 'basic' | 'itinerary' | 'inclusions' | 'stays' | 'gallery' | 'faqs'
  const [formData, setFormData] = useState(DEFAULT_PACKAGE_FORM);

  // Day Sub-Modal State
  const [dayModalOpen, setDayModalOpen] = useState(false);
  const [editingDayIndex, setEditingDayIndex] = useState(null);
  const [dayFormData, setDayFormData] = useState({
    day: 1,
    title: '',
    location: 'Port Blair',
    description: '',
    morning: '',
    afternoon: '',
    evening: '',
    meals: { breakfast: true, lunch: false, dinner: true },
    stay: '',
    transfers: '',
    image: '',
  });

  const [availableDestinations, setAvailableDestinations] = useState([]);
  const [availableStays, setAvailableStays] = useState([]);

  const DEFAULT_ISLANDS = [
    'Port Blair',
    'Havelock Island (Swaraj Dweep)',
    'Neil Island (Shaheed Dweep)',
    'Baratang Island',
    'Diglipur',
    'Ross Island (Netaji Dweep)',
    'Jolly Buoy Island',
    'North Bay Island',
    'Elephant Beach',
    'Radhanagar Beach'
  ];

  // Dynamic Inclusions & FAQ temp inputs
  const [newInclusion, setNewInclusion] = useState('');
  const [newExclusion, setNewExclusion] = useState('');
  const [newFaqQ, setNewFaqQ] = useState('');
  const [newFaqA, setNewFaqA] = useState('');

  const loadPackages = async () => {
    setLoading(true);
    try {
      const [res, catRes, destRes, staysRes] = await Promise.all([
        adminService.getPackages(),
        adminService.getMasterCategories('PACKAGE'),
        adminService.getDestinations().catch(() => ({ data: [] })),
        adminService.getStays().catch(() => ({ data: [] })),
      ]);
      const raw = Array.isArray(res?.data) ? res.data : (Array.isArray(res) ? res : []);
      setPackages(raw.map((pkg) => ({
        ...pkg,
        id: String(pkg.id),
      })));
      setMasterCategories(catRes?.data || catRes || []);
      const rawDest = Array.isArray(destRes?.data) ? destRes.data : (Array.isArray(destRes) ? destRes : []);
      setAvailableDestinations(rawDest);
      const rawStays = Array.isArray(staysRes?.data) ? staysRes.data : (Array.isArray(staysRes) ? staysRes : []);
      setAvailableStays(rawStays);
    } catch (e) {
      console.error('Failed to load packages:', e);
    } finally {
      setLoading(false);
    }
  };

  const toggleDestination = (islandName) => {
    const cleanName = islandName.split('(')[0].trim();
    const current = (formData.destinations || '')
      .split(/[•,\/→]+/)
      .map((s) => s.trim())
      .filter(Boolean);

    let updated;
    if (current.some((c) => c.toLowerCase() === cleanName.toLowerCase() || c.toLowerCase() === islandName.toLowerCase())) {
      updated = current.filter((c) => c.toLowerCase() !== cleanName.toLowerCase() && c.toLowerCase() !== islandName.toLowerCase());
    } else {
      updated = [...current, cleanName];
    }
    setFormData({
      ...formData,
      destinations: updated.join(' • '),
    });
  };

  const setPresetDestinations = (presetString) => {
    setFormData({
      ...formData,
      destinations: presetString,
    });
  };

  useEffect(() => {
    loadPackages();
  }, []);

  const generateSlug = (text) => {
    return (text || '')
      .toString()
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setFormData((prev) => {
      const prevAutoSlug = generateSlug(prev.name);
      const isAutoSlug = !prev.slug || prev.slug === prevAutoSlug;
      return {
        ...prev,
        name: newName,
        slug: isAutoSlug ? generateSlug(newName) : prev.slug,
      };
    });
  };

  const handleOpenCreate = () => {
    setEditingItem(null);
    setActiveTab('basic');
    setFormData(DEFAULT_PACKAGE_FORM);
    setModalOpen(true);
  };

  const handleOpenEdit = (item) => {
    setEditingItem(item);
    setActiveTab('basic');

    const itemTags = Array.isArray(item.tags)
      ? item.tags.join(', ')
      : (typeof item.tags === 'string' ? JSON.parse(item.tags || '[]').join(', ') : '');

    const itemHighlights = Array.isArray(item.highlights)
      ? item.highlights
      : (typeof item.highlights === 'string' ? JSON.parse(item.highlights || '[]') : DEFAULT_INCLUSIONS.slice(0, 4));

    const itemInclusions = Array.isArray(item.inclusions) && item.inclusions.length > 0
      ? item.inclusions
      : (typeof item.inclusions === 'string' ? JSON.parse(item.inclusions || '[]') : DEFAULT_INCLUSIONS);

    const itemExclusions = Array.isArray(item.exclusions) && item.exclusions.length > 0
      ? item.exclusions
      : (typeof item.exclusions === 'string' ? JSON.parse(item.exclusions || '[]') : DEFAULT_EXCLUSIONS);

    const itemGallery = Array.isArray(item.gallery)
      ? item.gallery
      : (typeof item.gallery === 'string' ? JSON.parse(item.gallery || '[]') : []);

    const itemItinerary = Array.isArray(item.itinerary) && item.itinerary.length > 0
      ? item.itinerary
      : (typeof item.itinerary === 'string' ? JSON.parse(item.itinerary || '[]') : ITINERARY_PRESETS['5D4N']);

    const itemFaq = Array.isArray(item.faq) && item.faq.length > 0
      ? item.faq
      : (typeof item.faq === 'string' ? JSON.parse(item.faq || '[]') : DEFAULT_PACKAGE_FORM.faq);

    setFormData({
      name: item.name || '',
      slug: item.slug || '',
      category: item.category || 'ALL',
      duration: item.duration || '5 Nights / 6 Days',
      destinations: item.destinations || 'Port Blair • Havelock • Neil',
      bestFor: item.bestFor || 'Couples & Families',
      description: item.description || '',
      image: item.image || item.heroImage || DEFAULT_PACKAGE_FORM.image,
      gallery: itemGallery,
      price: item.price || 24999,
      originalPrice: item.originalPrice || 29999,
      rating: item.rating || 4.9,
      reviewsCount: item.reviewsCount || 100,
      tagsRaw: itemTags,
      highlights: itemHighlights,
      inclusions: itemInclusions,
      exclusions: itemExclusions,
      hotelCategory: item.hotelCategory || '4-Star Beach Resort',
      mealPlan: item.mealPlan || 'Daily Buffet Breakfast & Dinner (MAP)',
      transfers: item.transfers || 'Private AC Cab & Makruzz Catamaran',
      activities: item.activities || 'Guided Snorkeling & Island Safari',
      pickupDrop: item.pickupDrop || 'Port Blair Airport Pick-up & Drop Included',
      cancellationPolicy: item.cancellationPolicy || DEFAULT_PACKAGE_FORM.cancellationPolicy,
      itinerary: itemItinerary,
      faq: itemFaq,
      featured: Boolean(item.featured),
      status: item.status || 'ACTIVE',
    });

    setModalOpen(true);
  };

  // ── Day CRUD Handlers
  const handleOpenAddDay = () => {
    const nextDayNum = (formData.itinerary?.length || 0) + 1;
    setEditingDayIndex(null);
    setDayFormData({
      day: nextDayNum,
      title: '',
      location: 'Havelock Island',
      description: '',
      morning: '',
      afternoon: '',
      evening: '',
      meals: { breakfast: true, lunch: false, dinner: true },
      stay: 'Luxury Beach Resort',
      transfers: 'Private AC Cab',
      image: formData.image || '',
    });
    setDayModalOpen(true);
  };

  const handleOpenEditDay = (dayIndex) => {
    const dayItem = formData.itinerary[dayIndex];
    setEditingDayIndex(dayIndex);
    setDayFormData({
      day: dayItem.day || dayIndex + 1,
      title: dayItem.title || '',
      location: dayItem.location || 'Port Blair',
      description: dayItem.description || dayItem.desc || '',
      morning: dayItem.morning || '',
      afternoon: dayItem.afternoon || '',
      evening: dayItem.evening || '',
      meals: dayItem.meals || { breakfast: true, lunch: false, dinner: true },
      stay: dayItem.stay || '',
      transfers: dayItem.transfers || '',
      image: dayItem.image || '',
    });
    setDayModalOpen(true);
  };

  const handleSaveDay = (e) => {
    e.preventDefault();
    if (!dayFormData.title.trim()) {
      alert('Day title is required');
      return;
    }

    const updatedItinerary = [...(formData.itinerary || [])];
    if (editingDayIndex !== null) {
      updatedItinerary[editingDayIndex] = { ...dayFormData };
    } else {
      updatedItinerary.push({ ...dayFormData, day: updatedItinerary.length + 1 });
    }

    // Re-index days sequentially
    const normalized = updatedItinerary.map((d, i) => ({ ...d, day: i + 1 }));
    setFormData((prev) => ({ ...prev, itinerary: normalized }));
    setDayModalOpen(false);
  };

  const handleDeleteDay = (index) => {
    if (!window.confirm(`Delete Day ${index + 1}?`)) return;
    const updated = formData.itinerary.filter((_, i) => i !== index);
    const normalized = updated.map((d, i) => ({ ...d, day: i + 1 }));
    setFormData((prev) => ({ ...prev, itinerary: normalized }));
  };

  const handleMoveDay = (index, direction) => {
    const target = index + direction;
    if (target < 0 || target >= formData.itinerary.length) return;
    const updated = [...formData.itinerary];
    const [moved] = updated.splice(index, 1);
    updated.splice(target, 0, moved);
    const normalized = updated.map((d, i) => ({ ...d, day: i + 1 }));
    setFormData((prev) => ({ ...prev, itinerary: normalized }));
  };

  const handleApplyItineraryPreset = (key) => {
    const preset = ITINERARY_PRESETS[key];
    if (!preset) return;
    if (formData.itinerary?.length > 0 && !window.confirm(`Replace existing days with ${key} itinerary template?`)) {
      return;
    }
    setFormData((prev) => ({
      ...prev,
      duration: key === '5D4N' ? '4 Nights / 5 Days' : '5 Nights / 6 Days',
      itinerary: preset,
    }));
  };

  // ── Inclusions / Exclusions Handlers
  const handleAddInclusion = () => {
    if (!newInclusion.trim()) return;
    setFormData((prev) => ({
      ...prev,
      inclusions: [...(prev.inclusions || []), newInclusion.trim()],
    }));
    setNewInclusion('');
  };

  const handleRemoveInclusion = (idx) => {
    setFormData((prev) => ({
      ...prev,
      inclusions: prev.inclusions.filter((_, i) => i !== idx),
    }));
  };

  const handleAddExclusion = () => {
    if (!newExclusion.trim()) return;
    setFormData((prev) => ({
      ...prev,
      exclusions: [...(prev.exclusions || []), newExclusion.trim()],
    }));
    setNewExclusion('');
  };

  const handleRemoveExclusion = (idx) => {
    setFormData((prev) => ({
      ...prev,
      exclusions: prev.exclusions.filter((_, i) => i !== idx),
    }));
  };

  const handleAddFaq = () => {
    if (!newFaqQ.trim() || !newFaqA.trim()) return;
    setFormData((prev) => ({
      ...prev,
      faq: [...(prev.faq || []), { question: newFaqQ.trim(), answer: newFaqA.trim() }],
    }));
    setNewFaqQ('');
    setNewFaqA('');
  };

  const handleRemoveFaq = (idx) => {
    setFormData((prev) => ({
      ...prev,
      faq: prev.faq.filter((_, i) => i !== idx),
    }));
  };

  // ── Main Package Save Handler
  const handleSave = async (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      alert('Package title is required.');
      return;
    }

    const tags = formData.tagsRaw
      ? formData.tagsRaw.split(',').map((s) => s.trim()).filter(Boolean)
      : [];

    const payload = {
      name: formData.name.trim(),
      slug: (formData.slug || generateSlug(formData.name)).trim(),
      category: formData.category || 'ALL',
      duration: formData.duration || '5 Nights / 6 Days',
      destinations: formData.destinations || 'Port Blair • Havelock • Neil',
      bestFor: formData.bestFor || 'Couples & Families',
      description: formData.description || '',
      image: formData.image || DEFAULT_PACKAGE_FORM.image,
      heroImage: formData.image || DEFAULT_PACKAGE_FORM.image,
      gallery: Array.isArray(formData.gallery) ? formData.gallery : [],
      price: Number(formData.price) || 24999,
      originalPrice: formData.originalPrice ? Number(formData.originalPrice) : null,
      rating: Number(formData.rating) || 4.9,
      reviewsCount: Number(formData.reviewsCount) || 100,
      tags,
      highlights: formData.highlights || formData.inclusions.slice(0, 4),
      inclusions: formData.inclusions || DEFAULT_INCLUSIONS,
      exclusions: formData.exclusions || DEFAULT_EXCLUSIONS,
      hotelCategory: formData.hotelCategory || '4-Star Beach Resort',
      mealPlan: formData.mealPlan || 'Daily Buffet Breakfast & Dinner',
      transfers: formData.transfers || 'Private AC Cab & Catamaran',
      activities: formData.activities || 'Snorkeling & Sunset Cruise',
      pickupDrop: formData.pickupDrop || 'Port Blair Airport Pick-up & Drop',
      cancellationPolicy: formData.cancellationPolicy || DEFAULT_PACKAGE_FORM.cancellationPolicy,
      itinerary: formData.itinerary || [],
      faq: formData.faq || [],
      featured: Boolean(formData.featured),
      status: formData.status || 'ACTIVE',
    };

    setIsSaving(true);
    try {
      if (editingItem) {
        await adminService.updatePackage(editingItem.id, payload);
      } else {
        await adminService.createPackage(payload);
      }
      setModalOpen(false);
      loadPackages();
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to save package details');
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!deleteId) return;
    try {
      await adminService.deletePackage(deleteId);
      setDeleteId(null);
      loadPackages();
    } catch (err) {
      alert('Failed to delete package');
    }
  };

  const columns = [
    {
      header: 'Tour Package',
      accessor: 'name',
      render: (row) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ position: 'relative' }}>
            <img
              src={row.image || 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=400&q=80'}
              alt={row.name}
              style={{ width: 54, height: 42, borderRadius: 10, objectFit: 'cover', border: '1px solid #e2e8f0' }}
            />
            {row.featured && (
              <span style={{ position: 'absolute', top: -4, right: -4, background: '#F06543', color: '#fff', borderRadius: '50%', width: 16, height: 16, fontSize: 9, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900 }}>
                ★
              </span>
            )}
          </div>
          <div>
            <div style={{ color: '#0B2545', fontWeight: 800, fontSize: 13.5, fontFamily: "'Space Grotesk', sans-serif" }}>
              {row.name}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 2 }}>
              <span style={{ color: '#F06543', fontSize: 11, fontWeight: 700 }}>{row.duration || '5N / 6D'}</span>
              <span style={{ color: '#cbd5e1' }}>•</span>
              <span style={{ color: '#64748b', fontSize: 11 }}>{row.destinations || 'Port Blair • Havelock'}</span>
              {row.itinerary?.length > 0 && (
                <span style={{ color: '#0B2545', fontSize: 10, background: '#E0F2FE', padding: '1px 6px', borderRadius: 6, fontWeight: 800 }}>
                  🗓️ {row.itinerary.length} Days Itinerary
                </span>
              )}
            </div>
          </div>
        </div>
      ),
    },
    {
      header: 'Category',
      accessor: 'category',
      render: (row) => (
        <span style={{ background: '#F1F5F9', color: '#0B2545', padding: '3px 8px', borderRadius: 8, fontSize: 11, fontWeight: 800, fontFamily: "'Space Grotesk', sans-serif" }}>
          {row.category || 'ALL'}
        </span>
      ),
    },
    {
      header: 'Pricing (INR)',
      accessor: 'price',
      render: (row) => (
        <div>
          <span style={{ color: '#0B2545', fontWeight: 900, fontSize: 13.5, fontFamily: "'Space Grotesk', sans-serif" }}>
            ₹{Number(row.price || 0).toLocaleString()}
          </span>
          {row.originalPrice && (
            <span style={{ color: '#94a3b8', fontSize: 11, textDecoration: 'line-through', marginLeft: 6 }}>
              ₹{Number(row.originalPrice).toLocaleString()}
            </span>
          )}
        </div>
      ),
    },
    {
      header: 'Rating',
      accessor: 'rating',
      render: (row) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <Star size={13} fill="#F59E0B" color="#F59E0B" />
          <span style={{ fontWeight: 800, fontSize: 12.5, color: '#1E293B' }}>{row.rating || 4.9}</span>
        </div>
      ),
    },
    {
      header: 'Status',
      accessor: 'status',
      render: (row) => <StatusBadge status={row.status} />,
    },
    {
      header: 'Actions',
      render: (row) => (
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <a
            href={`/packages/${row.slug}`}
            target="_blank"
            rel="noreferrer"
            title="Preview Live Tour Page"
            style={{
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              color: '#64748b',
              padding: '6px 8px',
              borderRadius: 8,
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            <Eye size={13} />
          </a>
          <button
            onClick={() => handleOpenEdit(row)}
            style={{
              background: 'rgba(240, 101, 67, 0.08)',
              border: '1px solid rgba(240, 101, 67, 0.25)',
              color: '#F06543',
              padding: '6px 12px',
              borderRadius: 10,
              fontSize: 11,
              fontWeight: 800,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 4,
            }}
          >
            <Edit3 size={12} /> EDIT
          </button>
          <button
            onClick={() => setDeleteId(row.id)}
            style={{
              background: 'rgba(239, 68, 68, 0.08)',
              border: '1px solid rgba(239, 68, 68, 0.25)',
              color: '#ef4444',
              padding: '6px 10px',
              borderRadius: 10,
              fontSize: 11,
              fontWeight: 800,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 4,
            }}
          >
            <Trash2 size={12} />
          </button>
        </div>
      ),
    },
  ];

  if (modalOpen) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {/* Sticky Top Action Bar */}
        <div
          style={{
            position: 'sticky',
            top: 10,
            zIndex: 100,
            background: '#ffffff',
            borderRadius: 20,
            padding: '16px 24px',
            border: '1.5px solid #E2E8F0',
            boxShadow: '0 8px 30px rgba(11,37,69,0.08)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 16,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              style={{
                background: '#F8FAFC',
                border: '1.5px solid #E2E8F0',
                color: '#0B2545',
                padding: '9px 16px',
                borderRadius: 12,
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 12,
                fontWeight: 800,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 6,
              }}
            >
              ← Back to Packages List
            </button>
            <div>
              <div style={{ fontSize: 11, fontWeight: 800, color: '#64748B', fontFamily: "'Space Grotesk', sans-serif", textTransform: 'uppercase' }}>
                ADMIN / TOUR PACKAGES STUDIO
              </div>
              <h2 style={{ margin: 0, fontSize: 19, fontWeight: 900, color: '#0B2545', fontFamily: "'Space Grotesk', sans-serif" }}>
                {editingItem ? `Editing: ${editingItem.name}` : 'Create New Holiday Package'}
              </h2>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            {formData.slug && (
              <a
                href={`/packages/${formData.slug}`}
                target="_blank"
                rel="noreferrer"
                style={{
                  background: '#F8FAFC',
                  border: '1.5px solid #E2E8F0',
                  color: '#64748B',
                  padding: '9px 16px',
                  borderRadius: 12,
                  fontSize: 12,
                  fontWeight: 800,
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                }}
              >
                <Eye size={14} /> Preview Live Page
              </a>
            )}
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              style={{
                background: '#FFFFFF',
                border: '1.5px solid #CBD5E1',
                color: '#475569',
                padding: '9px 18px',
                borderRadius: 12,
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 12,
                fontWeight: 800,
                cursor: 'pointer',
              }}
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={() => {
                const formEl = document.getElementById('package-form-submit-btn');
                if (formEl) formEl.click();
              }}
              disabled={isSaving}
              style={{
                background: 'linear-gradient(135deg, #FF6B4A, #F06543)',
                border: 'none',
                color: '#ffffff',
                padding: '10px 24px',
                borderRadius: 12,
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 12.5,
                fontWeight: 900,
                cursor: isSaving ? 'not-allowed' : 'pointer',
                boxShadow: '0 4px 14px rgba(240, 101, 67, 0.35)',
                display: 'flex',
                alignItems: 'center',
                gap: 6,
              }}
            >
              {isSaving ? 'SAVING PACKAGE...' : (editingItem ? 'UPDATE PACKAGE →' : 'PUBLISH PACKAGE →')}
            </button>
          </div>
        </div>

        {/* Full Page Studio Card */}
        <div
          style={{
            width: '100%',
            background: '#ffffff',
            borderRadius: 24,
            boxShadow: '0 4px 25px rgba(0,0,0,0.04)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            border: '1.5px solid #e2e8f0',
          }}
        >
          {/* Modal Tabs Navigation */}
          <div
            style={{
              display: 'flex',
              background: '#F8FAFC',
              borderBottom: '1.5px solid #E2E8F0',
              padding: '6px 24px 0',
              gap: 6,
              overflowX: 'auto',
            }}
          >
              {[
                { id: 'basic', label: '1. Overview & Pricing', icon: Info },
                { id: 'itinerary', label: '2. Day-by-Day Itinerary', icon: Calendar, badge: formData.itinerary?.length || 0 },
                { id: 'inclusions', label: '3. Inclusions & Exclusions', icon: CheckCircle2, badge: formData.inclusions?.length || 0 },
                { id: 'stays', label: '4. Hotels & Transfers', icon: Building2 },
                { id: 'gallery', label: '5. Multi-Image Gallery', icon: ImageIcon, badge: formData.gallery?.length || 0 },
                { id: 'faqs', label: '6. Guidelines & FAQs', icon: HelpCircle, badge: formData.faq?.length || 0 },
              ].map((tab) => {
                const IconComponent = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 6,
                      padding: '10px 14px',
                      background: 'none',
                      border: 'none',
                      borderBottom: isActive ? '2.5px solid #F06543' : '2.5px solid transparent',
                      color: isActive ? '#F06543' : '#64748B',
                      fontSize: 12.5,
                      fontWeight: isActive ? 800 : 600,
                      cursor: 'pointer',
                      fontFamily: "'Space Grotesk', sans-serif",
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <IconComponent size={14} color={isActive ? '#F06543' : '#64748B'} />
                    {tab.label}
                    {tab.badge > 0 && (
                      <span
                        style={{
                          background: isActive ? '#F06543' : '#E2E8F0',
                          color: isActive ? '#ffffff' : '#64748B',
                          borderRadius: 10,
                          padding: '1px 6px',
                          fontSize: 10,
                          fontWeight: 900,
                        }}
                      >
                        {tab.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Modal Body - Scrollable Form */}
            <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden' }}>
              <div style={{ padding: '24px 28px', overflowY: 'auto', flex: 1, display: 'flex', flexDirection: 'column', gap: 20 }}>
                
                {/* ── TAB 1: BASIC INFORMATION ── */}
                {activeTab === 'basic' && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 14 }}>
                      <div>
                        <label style={{ display: 'block', fontSize: 11.5, fontWeight: 800, color: '#0B2545', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 6 }}>
                          PACKAGE TOUR TITLE <span style={{ color: '#ef4444' }}>*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleNameChange}
                          placeholder="e.g. Andaman Island Paradise Extravaganza"
                          style={{ width: '100%', background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 12, padding: '10px 14px', color: '#1E293B', fontSize: 13.5, fontWeight: 600, outline: 'none', boxSizing: 'border-box' }}
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: 11.5, fontWeight: 800, color: '#64748B', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 6 }}>
                          URL SLUG (AUTO-GENERATED) <span style={{ color: '#ef4444' }}>*</span>
                        </label>
                        <div style={{ position: 'relative' }}>
                          <span style={{ position: 'absolute', left: 12, top: 10, color: '#94A3B8', fontSize: 12 }}>/</span>
                          <input
                            type="text"
                            required
                            value={formData.slug}
                            onChange={(e) => setFormData({ ...formData, slug: e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '') })}
                            placeholder="andaman-island-paradise"
                            style={{ width: '100%', background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 12, padding: '10px 14px 10px 24px', color: '#0B2545', fontSize: 13.5, fontWeight: 700, outline: 'none', boxSizing: 'border-box' }}
                          />
                        </div>
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1.2fr', gap: 14 }}>
                      <div>
                        <label style={{ display: 'block', fontSize: 11.5, fontWeight: 800, color: '#64748B', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 6 }}>
                          TOUR CATEGORY
                        </label>
                        <select
                          value={formData.category}
                          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                          style={{ width: '100%', background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 12, padding: '10px 14px', color: '#1E293B', fontSize: 13, outline: 'none', boxSizing: 'border-box', height: 42 }}
                        >
                          <option value="ALL">ALL CATEGORIES</option>
                          <option value="HONEYMOON">HONEYMOON & COUPLES</option>
                          <option value="FAMILY">FAMILY & GROUP</option>
                          <option value="ADVENTURE">ADVENTURE & SCUBA</option>
                          <option value="LUXURY">ULTRA LUXURY</option>
                          <option value="BUDGET">BUDGET EXPLORER</option>
                          {masterCategories.map((c) => (
                            <option key={c.id} value={c.name.toUpperCase()}>{c.name}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: 11.5, fontWeight: 800, color: '#64748B', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 6 }}>
                          DURATION
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.duration}
                          onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                          placeholder="e.g. 5 Nights / 6 Days"
                          style={{ width: '100%', background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 12, padding: '10px 14px', color: '#1E293B', fontSize: 13, outline: 'none', boxSizing: 'border-box' }}
                        />
                      </div>

                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
                          <label style={{ display: 'block', fontSize: 11.5, fontWeight: 800, color: '#64748B', fontFamily: "'Space Grotesk', sans-serif" }}>
                            DESTINATIONS COVERED <span style={{ color: '#ef4444' }}>*</span>
                          </label>
                          <span style={{ fontSize: 11, color: '#F06543', fontWeight: 700 }}>
                            Click islands to select
                          </span>
                        </div>
                        <input
                          type="text"
                          required
                          value={formData.destinations}
                          onChange={(e) => setFormData({ ...formData, destinations: e.target.value })}
                          placeholder="e.g. Port Blair • Havelock • Neil"
                          style={{ width: '100%', background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 12, padding: '10px 14px', color: '#0B2545', fontSize: 13, fontWeight: 700, outline: 'none', boxSizing: 'border-box', marginBottom: 8 }}
                        />

                        {/* Quick Select Islands Chips */}
                        <div style={{ background: '#F1F5F9', borderRadius: 12, padding: '10px 12px', border: '1px solid #E2E8F0', marginBottom: 8 }}>
                          <div style={{ fontSize: 10.5, fontWeight: 800, color: '#475569', marginBottom: 6, display: 'flex', alignItems: 'center', gap: 5 }}>
                            <MapPin size={12} color="#F06543" />
                            <span>SELECT ISLANDS (CLICK TO TOGGLE):</span>
                          </div>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                            {(availableDestinations.length > 0
                              ? availableDestinations.map((d) => d.name.split('(')[0].trim())
                              : DEFAULT_ISLANDS.slice(0, 7)
                            ).map((island, idx) => {
                              const isSelected = (formData.destinations || '')
                                .toLowerCase()
                                .includes(island.toLowerCase());
                              return (
                                <button
                                  type="button"
                                  key={idx}
                                  onClick={() => toggleDestination(island)}
                                  style={{
                                    border: isSelected ? '1.5px solid #F06543' : '1px solid #CBD5E1',
                                    background: isSelected ? 'rgba(240, 101, 67, 0.12)' : '#FFFFFF',
                                    color: isSelected ? '#F06543' : '#475569',
                                    fontSize: 11,
                                    fontWeight: isSelected ? 800 : 600,
                                    padding: '4px 10px',
                                    borderRadius: 8,
                                    cursor: 'pointer',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: 4,
                                    transition: 'all 0.2s ease',
                                  }}
                                >
                                  {isSelected ? '✓ ' : '+ '}
                                  {island}
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        {/* Popular Route Presets */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
                          <span style={{ fontSize: 10.5, fontWeight: 800, color: '#64748B' }}>POPULAR PRESETS:</span>
                          <button
                            type="button"
                            onClick={() => setPresetDestinations('Port Blair • Havelock • Neil')}
                            style={{ background: '#FFFFFF', border: '1px dashed #CBD5E1', borderRadius: 6, padding: '3px 8px', fontSize: 10.5, color: '#0B2545', fontWeight: 700, cursor: 'pointer' }}
                          >
                            🌴 Port Blair • Havelock • Neil
                          </button>
                          <button
                            type="button"
                            onClick={() => setPresetDestinations('Havelock Island • Neil Island')}
                            style={{ background: '#FFFFFF', border: '1px dashed #CBD5E1', borderRadius: 6, padding: '3px 8px', fontSize: 10.5, color: '#0B2545', fontWeight: 700, cursor: 'pointer' }}
                          >
                            💎 Havelock • Neil
                          </button>
                          <button
                            type="button"
                            onClick={() => setPresetDestinations('Port Blair • Havelock • Neil • Baratang • Diglipur')}
                            style={{ background: '#FFFFFF', border: '1px dashed #CBD5E1', borderRadius: 6, padding: '3px 8px', fontSize: 10.5, color: '#0B2545', fontWeight: 700, cursor: 'pointer' }}
                          >
                            🧭 Grand Island Circuit
                          </button>
                        </div>
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 14 }}>
                      <div>
                        <label style={{ display: 'block', fontSize: 11.5, fontWeight: 800, color: '#F06543', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 6 }}>
                          OFFER PRICE (INR) <span style={{ color: '#ef4444' }}>*</span>
                        </label>
                        <input
                          type="number"
                          required
                          value={formData.price}
                          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                          placeholder="24999"
                          style={{ width: '100%', background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 12, padding: '10px 14px', color: '#0B2545', fontSize: 13.5, fontWeight: 800, outline: 'none', boxSizing: 'border-box' }}
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: 11.5, fontWeight: 800, color: '#64748B', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 6 }}>
                          ORIGINAL STRIKE PRICE
                        </label>
                        <input
                          type="number"
                          value={formData.originalPrice}
                          onChange={(e) => setFormData({ ...formData, originalPrice: e.target.value })}
                          placeholder="29999"
                          style={{ width: '100%', background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 12, padding: '10px 14px', color: '#64748B', fontSize: 13, outline: 'none', boxSizing: 'border-box' }}
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: 11.5, fontWeight: 800, color: '#64748B', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 6 }}>
                          STAR RATING
                        </label>
                        <input
                          type="number"
                          step="0.1"
                          min="1"
                          max="5"
                          value={formData.rating}
                          onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
                          style={{ width: '100%', background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 12, padding: '10px 14px', color: '#1E293B', fontSize: 13, fontWeight: 700, outline: 'none', boxSizing: 'border-box' }}
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: 11.5, fontWeight: 800, color: '#64748B', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 6 }}>
                          REVIEWS COUNT
                        </label>
                        <input
                          type="number"
                          value={formData.reviewsCount}
                          onChange={(e) => setFormData({ ...formData, reviewsCount: e.target.value })}
                          style={{ width: '100%', background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 12, padding: '10px 14px', color: '#1E293B', fontSize: 13, outline: 'none', boxSizing: 'border-box' }}
                        />
                      </div>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: 11.5, fontWeight: 800, color: '#0B2545', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 6 }}>
                        PACKAGE OVERVIEW & HIGHLIGHT DESCRIPTION
                      </label>
                      <textarea
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        placeholder="Write an enticing summary about the vacation experience, private resorts, scuba diving, and boat cruises..."
                        rows={3}
                        style={{ width: '100%', background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 12, padding: '12px 14px', color: '#1E293B', fontSize: 13, outline: 'none', boxSizing: 'border-box', lineHeight: 1.5 }}
                      />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, background: '#F8FAFC', padding: 16, borderRadius: 14, border: '1px solid #E2E8F0' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: 11.5, fontWeight: 800, color: '#0B2545', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 6 }}>
                          CMS PUBLISHING STATUS
                        </label>
                        <select
                          value={formData.status}
                          onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                          style={{ width: '100%', background: '#ffffff', border: '1.5px solid #CBD5E1', borderRadius: 10, padding: '8px 12px', color: '#1E293B', fontSize: 13, fontWeight: 700, outline: 'none' }}
                        >
                          <option value="ACTIVE">🟢 ACTIVE (Bookings Open)</option>
                          <option value="INACTIVE">🔴 INACTIVE (Draft / Hidden)</option>
                        </select>
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <label style={{ fontSize: 13, fontWeight: 800, color: '#0B2545', display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }}>
                          <input
                            type="checkbox"
                            checked={formData.featured}
                            onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                            style={{ width: 18, height: 18, accentColor: '#F06543' }}
                          />
                          <span>⭐ Feature on Homepage & Top Recommendations</span>
                        </label>
                      </div>
                    </div>
                  </div>
                )}

                {/* ── TAB 2: DAY-BY-DAY ITINERARY BUILDER ── */}
                {activeTab === 'itinerary' && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                    {/* Top Action Bar & 1-Click Templates */}
                    <div style={{ background: '#F0F9FF', border: '1.5px solid #BAE6FD', borderRadius: 16, padding: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
                      <div>
                        <div style={{ fontSize: 13, fontWeight: 800, color: '#0369A1', fontFamily: "'Space Grotesk', sans-serif" }}>
                          ⚡ 1-CLICK ITINERARY TEMPLATE PRESETS
                        </div>
                        <p style={{ margin: '2px 0 0 0', fontSize: 11.5, color: '#0284C7' }}>
                          Quickly pre-fill day-by-day plans with verified Andaman sightseeing & catamaran routes
                        </p>
                      </div>

                      <div style={{ display: 'flex', gap: 8 }}>
                        <button
                          type="button"
                          onClick={() => handleApplyItineraryPreset('5D4N')}
                          style={{ background: '#ffffff', border: '1px solid #7DD3FC', color: '#0284C7', padding: '6px 14px', borderRadius: 10, fontSize: 11.5, fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4 }}
                        >
                          <Zap size={12} /> Load 5D / 4N Classic
                        </button>
                        <button
                          type="button"
                          onClick={() => handleApplyItineraryPreset('6D5N')}
                          style={{ background: '#ffffff', border: '1px solid #7DD3FC', color: '#0284C7', padding: '6px 14px', borderRadius: 10, fontSize: 11.5, fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4 }}
                        >
                          <Zap size={12} /> Load 6D / 5N Honeymoon
                        </button>
                        <button
                          type="button"
                          onClick={handleOpenAddDay}
                          style={{ background: '#0B2545', border: 'none', color: '#ffffff', padding: '6px 16px', borderRadius: 10, fontSize: 11.5, fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4 }}
                        >
                          <Plus size={13} /> + ADD NEW DAY
                        </button>
                      </div>
                    </div>

                    {/* Interactive Days List */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                      {(formData.itinerary || []).map((dayItem, index) => (
                        <div
                          key={index}
                          style={{
                            background: '#F8FAFC',
                            border: '1.5px solid #E2E8F0',
                            borderRadius: 16,
                            padding: 16,
                            display: 'flex',
                            gap: 16,
                            alignItems: 'flex-start',
                            boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
                          }}
                        >
                          {/* Day Image */}
                          <img
                            src={dayItem.image || 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=400&q=80'}
                            alt={dayItem.title}
                            style={{ width: 80, height: 68, borderRadius: 10, objectFit: 'cover', border: '1px solid #CBD5E1', flexShrink: 0 }}
                          />

                          {/* Day Info */}
                          <div style={{ flex: 1 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                              <span style={{ background: 'linear-gradient(135deg, #FF6B4A, #F06543)', color: '#ffffff', padding: '2px 8px', borderRadius: 6, fontSize: 11, fontWeight: 900, fontFamily: "'Space Grotesk', sans-serif" }}>
                                DAY {dayItem.day || index + 1}
                              </span>
                              <span style={{ color: '#0B2545', fontSize: 11, background: '#E2E8F0', padding: '2px 8px', borderRadius: 6, fontWeight: 700 }}>
                                📍 {dayItem.location || 'Andaman'}
                              </span>
                              {dayItem.meals && (
                                <span style={{ color: '#64748B', fontSize: 10.5, fontWeight: 700 }}>
                                  {dayItem.meals.breakfast && '🍳 B’fast '}
                                  {dayItem.meals.lunch && '🥗 Lunch '}
                                  {dayItem.meals.dinner && '🍽️ Dinner'}
                                </span>
                              )}
                            </div>

                            <h4 style={{ margin: '0 0 6px 0', color: '#0B2545', fontSize: 14, fontWeight: 800, fontFamily: "'Space Grotesk', sans-serif" }}>
                              {dayItem.title || `Day ${index + 1} Itinerary`}
                            </h4>

                            <p style={{ margin: 0, color: '#475569', fontSize: 12.5, lineHeight: 1.45, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                              {dayItem.description || dayItem.morning || 'Detailed scheduled itinerary sightseeing and transits.'}
                            </p>

                            {(dayItem.stay || dayItem.transfers) && (
                              <div style={{ display: 'flex', gap: 12, marginTop: 6, fontSize: 11, color: '#64748B' }}>
                                {dayItem.stay && <span>🏨 <strong>Stay:</strong> {dayItem.stay}</span>}
                                {dayItem.transfers && <span>🚗 <strong>Transfer:</strong> {dayItem.transfers}</span>}
                              </div>
                            )}
                          </div>

                          {/* Day Actions */}
                          <div style={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'flex-end' }}>
                            <div style={{ display: 'flex', gap: 4 }}>
                              <button
                                type="button"
                                title="Move Up"
                                disabled={index === 0}
                                onClick={() => handleMoveDay(index, -1)}
                                style={{ background: '#ffffff', border: '1px solid #CBD5E1', color: '#64748B', padding: '4px 6px', borderRadius: 6, cursor: index === 0 ? 'not-allowed' : 'pointer' }}
                              >
                                <ArrowUp size={12} />
                              </button>
                              <button
                                type="button"
                                title="Move Down"
                                disabled={index === formData.itinerary.length - 1}
                                onClick={() => handleMoveDay(index, 1)}
                                style={{ background: '#ffffff', border: '1px solid #CBD5E1', color: '#64748B', padding: '4px 6px', borderRadius: 6, cursor: index === formData.itinerary.length - 1 ? 'not-allowed' : 'pointer' }}
                              >
                                <ArrowDown size={12} />
                              </button>
                            </div>

                            <div style={{ display: 'flex', gap: 4, marginTop: 4 }}>
                              <button
                                type="button"
                                onClick={() => handleOpenEditDay(index)}
                                style={{ background: 'rgba(240, 101, 67, 0.1)', border: '1px solid rgba(240, 101, 67, 0.3)', color: '#F06543', padding: '4px 10px', borderRadius: 8, fontSize: 11, fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4 }}
                              >
                                <Edit3 size={11} /> Edit
                              </button>
                              <button
                                type="button"
                                onClick={() => handleDeleteDay(index)}
                                style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)', color: '#ef4444', padding: '4px 8px', borderRadius: 8, fontSize: 11, cursor: 'pointer' }}
                              >
                                <Trash2 size={11} />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}

                      {(!formData.itinerary || formData.itinerary.length === 0) && (
                        <div style={{ textAlign: 'center', padding: 36, color: '#94A3B8', fontSize: 13, background: '#F8FAFC', borderRadius: 16, border: '1.5px dashed #CBD5E1' }}>
                          No itinerary days configured yet. Click <strong>"Load 5D / 4N Classic"</strong> or <strong>"+ ADD NEW DAY"</strong> to get started!
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* ── TAB 3: INCLUSIONS & EXCLUSIONS ── */}
                {activeTab === 'inclusions' && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                    {/* Quick Inclusions Preset Button */}
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                      <button
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, inclusions: DEFAULT_INCLUSIONS, exclusions: DEFAULT_EXCLUSIONS }))}
                        style={{ background: '#F0F9FF', border: '1px solid #7DD3FC', color: '#0284C7', padding: '6px 14px', borderRadius: 10, fontSize: 11.5, fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4 }}
                      >
                        <Zap size={12} /> Reset to Industry Standard Inclusions & Exclusions
                      </button>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                      {/* What is Included */}
                      <div style={{ background: '#F0FDF4', border: '1.5px solid #BBF7D0', borderRadius: 16, padding: 18, display: 'flex', flexDirection: 'column', gap: 12 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#15803D', fontWeight: 900, fontSize: 13, fontFamily: "'Space Grotesk', sans-serif" }}>
                          <CheckCircle2 size={16} /> PACKAGE INCLUSIONS ({formData.inclusions?.length || 0})
                        </div>

                        <div style={{ display: 'flex', gap: 8 }}>
                          <input
                            type="text"
                            value={newInclusion}
                            onChange={(e) => setNewInclusion(e.target.value)}
                            onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleAddInclusion(); } }}
                            placeholder="e.g. Scuba Diving session with video..."
                            style={{ flex: 1, background: '#ffffff', border: '1px solid #86EFAC', borderRadius: 10, padding: '8px 12px', fontSize: 12.5, outline: 'none' }}
                          />
                          <button
                            type="button"
                            onClick={handleAddInclusion}
                            style={{ background: '#15803D', border: 'none', color: '#ffffff', padding: '8px 14px', borderRadius: 10, fontSize: 11.5, fontWeight: 800, cursor: 'pointer' }}
                          >
                            + ADD
                          </button>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, maxHeight: 300, overflowY: 'auto' }}>
                          {(formData.inclusions || []).map((inc, idx) => (
                            <div
                              key={idx}
                              style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                background: '#ffffff',
                                border: '1px solid #DCFCE7',
                                borderRadius: 8,
                                padding: '8px 12px',
                                fontSize: 12.5,
                                color: '#166534',
                                fontWeight: 600,
                              }}
                            >
                              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                <span style={{ color: '#22C55E' }}>✓</span>
                                <span>{inc}</span>
                              </div>
                              <button
                                type="button"
                                onClick={() => handleRemoveInclusion(idx)}
                                style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', fontSize: 14 }}
                              >
                                ✕
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* What is NOT Included */}
                      <div style={{ background: '#FEF2F2', border: '1.5px solid #FECACA', borderRadius: 16, padding: 18, display: 'flex', flexDirection: 'column', gap: 12 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#B91C1C', fontWeight: 900, fontSize: 13, fontFamily: "'Space Grotesk', sans-serif" }}>
                          <X size={16} /> NOT INCLUDED (EXCLUSIONS) ({formData.exclusions?.length || 0})
                        </div>

                        <div style={{ display: 'flex', gap: 8 }}>
                          <input
                            type="text"
                            value={newExclusion}
                            onChange={(e) => setNewExclusion(e.target.value)}
                            onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleAddExclusion(); } }}
                            placeholder="e.g. Airfare to Port Blair..."
                            style={{ flex: 1, background: '#ffffff', border: '1px solid #FCA5A5', borderRadius: 10, padding: '8px 12px', fontSize: 12.5, outline: 'none' }}
                          />
                          <button
                            type="button"
                            onClick={handleAddExclusion}
                            style={{ background: '#B91C1C', border: 'none', color: '#ffffff', padding: '8px 14px', borderRadius: 10, fontSize: 11.5, fontWeight: 800, cursor: 'pointer' }}
                          >
                            + ADD
                          </button>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, maxHeight: 300, overflowY: 'auto' }}>
                          {(formData.exclusions || []).map((exc, idx) => (
                            <div
                              key={idx}
                              style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                background: '#ffffff',
                                border: '1px solid #FEE2E2',
                                borderRadius: 8,
                                padding: '8px 12px',
                                fontSize: 12.5,
                                color: '#991B1B',
                                fontWeight: 600,
                              }}
                            >
                              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                <span style={{ color: '#EF4444' }}>✕</span>
                                <span>{exc}</span>
                              </div>
                              <button
                                type="button"
                                onClick={() => handleRemoveExclusion(idx)}
                                style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', fontSize: 14 }}
                              >
                                ✕
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* ── TAB 4: HOTELS & TRANSFERS ── */}
                {activeTab === 'stays' && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                      <div>
                        <label style={{ display: 'block', fontSize: 11.5, fontWeight: 800, color: '#0B2545', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 6 }}>
                          HOTEL CATEGORY / TIER
                        </label>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                          <select
                            value={
                              ['4-Star Beach Resort (Barefoot / Symphony)', '5-Star Luxury Resort (Taj / Welcomhotel)', '3-Star Deluxe Beachside Hotel', 'Eco Boutique Bamboo Villas', 'Budget AC Island Homestay / Rooms'].includes(formData.hotelCategory)
                                ? formData.hotelCategory
                                : formData.hotelCategory ? '__CUSTOM__' : ''
                            }
                            onChange={(e) => {
                              const val = e.target.value;
                              if (val && val !== '__CUSTOM__') {
                                setFormData({ ...formData, hotelCategory: val });
                              }
                            }}
                            style={{ width: '100%', background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 10, padding: '9px 12px', color: '#0B2545', fontSize: 12.5, fontWeight: 600, outline: 'none', boxSizing: 'border-box' }}
                          >
                            <option value="">-- Select Preset Hotel Category --</option>
                            <option value="4-Star Beach Resort (Barefoot / Symphony)">4-Star Beach Resort (Barefoot / Symphony)</option>
                            <option value="5-Star Luxury Resort (Taj / Welcomhotel)">5-Star Luxury Resort (Taj / Welcomhotel)</option>
                            <option value="3-Star Deluxe Beachside Hotel">3-Star Deluxe Beachside Hotel</option>
                            <option value="Eco Boutique Bamboo Villas">Eco Boutique Bamboo Villas</option>
                            <option value="Budget AC Island Homestay / Rooms">Budget AC Island Homestay / Rooms</option>
                            <option value="__CUSTOM__">✏️ Custom Category (Type Below)</option>
                          </select>
                          <input
                            type="text"
                            value={formData.hotelCategory}
                            onChange={(e) => setFormData({ ...formData, hotelCategory: e.target.value })}
                            placeholder="e.g. 4-Star Beach Resort (Barefoot / Symphony)"
                            style={{ width: '100%', background: '#ffffff', border: '1px solid #CBD5E1', borderRadius: 10, padding: '9px 12px', color: '#1E293B', fontSize: 13, outline: 'none', boxSizing: 'border-box' }}
                          />
                        </div>
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: 11.5, fontWeight: 800, color: '#0B2545', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 6 }}>
                          MEAL PLAN (EP / CP / MAP / AP)
                        </label>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                          <select
                            value={
                              ['Daily Buffet Breakfast & Dinner (MAP)', 'Daily Buffet Breakfast (CP)', 'All Meals Included - Breakfast, Lunch & Dinner (AP)', 'Room Only - No Meals (EP)'].includes(formData.mealPlan)
                                ? formData.mealPlan
                                : formData.mealPlan ? '__CUSTOM__' : ''
                            }
                            onChange={(e) => {
                              const val = e.target.value;
                              if (val && val !== '__CUSTOM__') {
                                setFormData({ ...formData, mealPlan: val });
                              }
                            }}
                            style={{ width: '100%', background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 10, padding: '9px 12px', color: '#0B2545', fontSize: 12.5, fontWeight: 600, outline: 'none', boxSizing: 'border-box' }}
                          >
                            <option value="">-- Select Meal Plan --</option>
                            <option value="Daily Buffet Breakfast & Dinner (MAP)">Daily Buffet Breakfast & Dinner (MAP)</option>
                            <option value="Daily Buffet Breakfast (CP)">Daily Buffet Breakfast (CP)</option>
                            <option value="All Meals Included - Breakfast, Lunch & Dinner (AP)">All Meals Included - Breakfast, Lunch & Dinner (AP)</option>
                            <option value="Room Only - No Meals (EP)">Room Only - No Meals (EP)</option>
                            <option value="__CUSTOM__">✏️ Custom Meal Plan (Type Below)</option>
                          </select>
                          <input
                            type="text"
                            value={formData.mealPlan}
                            onChange={(e) => setFormData({ ...formData, mealPlan: e.target.value })}
                            placeholder="e.g. Daily Buffet Breakfast & Dinner (MAP Plan)"
                            style={{ width: '100%', background: '#ffffff', border: '1px solid #CBD5E1', borderRadius: 10, padding: '9px 12px', color: '#1E293B', fontSize: 13, outline: 'none', boxSizing: 'border-box' }}
                          />
                        </div>
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                      <div>
                        <label style={{ display: 'block', fontSize: 11.5, fontWeight: 800, color: '#0B2545', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 6 }}>
                          ISLAND TRANSFERS & VEHICLE
                        </label>
                        <input
                          type="text"
                          value={formData.transfers}
                          onChange={(e) => setFormData({ ...formData, transfers: e.target.value })}
                          placeholder="e.g. Private AC Sedan + Makruzz Catamaran Tickets"
                          style={{ width: '100%', background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 12, padding: '10px 14px', color: '#1E293B', fontSize: 13, outline: 'none', boxSizing: 'border-box' }}
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: 11.5, fontWeight: 800, color: '#0B2545', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 6 }}>
                          KEY INCLUDED ACTIVITIES
                        </label>
                        <input
                          type="text"
                          value={formData.activities}
                          onChange={(e) => setFormData({ ...formData, activities: e.target.value })}
                          placeholder="e.g. Elephant Beach Snorkeling, Sunset Cruise & Light Show"
                          style={{ width: '100%', background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 12, padding: '10px 14px', color: '#1E293B', fontSize: 13, outline: 'none', boxSizing: 'border-box' }}
                        />
                      </div>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: 11.5, fontWeight: 800, color: '#0B2545', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 6 }}>
                        AIRPORT & JETTY PICK-UP/DROP SPECIFICATIONS
                      </label>
                      <input
                        type="text"
                        value={formData.pickupDrop}
                        onChange={(e) => setFormData({ ...formData, pickupDrop: e.target.value })}
                        placeholder="e.g. Port Blair Airport (IXZ) Pick-up & Drop Included"
                        style={{ width: '100%', background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 12, padding: '10px 14px', color: '#1E293B', fontSize: 13, outline: 'none', boxSizing: 'border-box' }}
                      />
                    </div>
                  </div>
                )}

                {/* ── TAB 5: COVER & MULTI-IMAGE GALLERY ── */}
                {activeTab === 'gallery' && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                    {/* Main Banner Photo */}
                    <div style={{ background: '#F8FAFC', padding: 18, borderRadius: 16, border: '1.5px solid #E2E8F0' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                        <span style={{ fontSize: 16 }}>🌟</span>
                        <h4 style={{ margin: 0, fontSize: 13, fontWeight: 800, color: '#0B2545', fontFamily: "'Space Grotesk', sans-serif" }}>
                          PRIMARY PACKAGE BANNER IMAGE
                        </h4>
                      </div>
                      <MediaUploadField
                        label="HERO COVER PHOTO"
                        value={formData.image}
                        onChange={(url) => setFormData({ ...formData, image: url })}
                        helpText="Displayed prominently on the package header card and search listings."
                      />
                    </div>

                    {/* Multi-Image Gallery */}
                    <div style={{ background: '#F8FAFC', padding: 18, borderRadius: 16, border: '1.5px solid #E2E8F0' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                        <span style={{ fontSize: 16 }}>📸</span>
                        <h4 style={{ margin: 0, fontSize: 13, fontWeight: 800, color: '#0B2545', fontFamily: "'Space Grotesk', sans-serif" }}>
                          TOUR PHOTO GALLERY ({formData.gallery?.length || 0} Photos)
                        </h4>
                      </div>
                      <MultiMediaUploadField
                        label="PACKAGE PHOTO GALLERY (MULTI-IMAGE)"
                        value={formData.gallery}
                        returnString={false}
                        onChange={(newGallery) => setFormData({ ...formData, gallery: Array.isArray(newGallery) ? newGallery : (newGallery ? newGallery.split('\n') : []) })}
                        helpText="Upload multiple high-res photos for this package tour (drag & drop multiple files or paste direct URLs)."
                      />
                    </div>
                  </div>
                )}

                {/* ── TAB 6: GUIDELINES & FAQS ── */}
                {activeTab === 'faqs' && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                    <div>
                      <label style={{ display: 'block', fontSize: 11.5, fontWeight: 800, color: '#0B2545', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 6 }}>
                        CANCELLATION & REFUND POLICY
                      </label>
                      <textarea
                        value={formData.cancellationPolicy}
                        onChange={(e) => setFormData({ ...formData, cancellationPolicy: e.target.value })}
                        placeholder="State refund rules (e.g. 100% refund 15+ days before departure...)"
                        rows={3}
                        style={{ width: '100%', background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 12, padding: '10px 14px', color: '#1E293B', fontSize: 13, outline: 'none', boxSizing: 'border-box', lineHeight: 1.5 }}
                      />
                    </div>

                    <div style={{ background: '#F8FAFC', padding: 16, borderRadius: 16, border: '1.5px solid #E2E8F0', display: 'flex', flexDirection: 'column', gap: 10 }}>
                      <div style={{ fontSize: 12, fontWeight: 800, color: '#0B2545', fontFamily: "'Space Grotesk', sans-serif" }}>
                        ADD NEW PACKAGE QUESTION & ANSWER PAIR:
                      </div>
                      <input
                        type="text"
                        value={newFaqQ}
                        onChange={(e) => setNewFaqQ(e.target.value)}
                        placeholder="Question: e.g. Can we customize the ferry timings or hotel tier?"
                        style={{ width: '100%', background: '#ffffff', border: '1px solid #CBD5E1', borderRadius: 10, padding: '8px 12px', fontSize: 13, outline: 'none', boxSizing: 'border-box' }}
                      />
                      <textarea
                        value={newFaqA}
                        onChange={(e) => setNewFaqA(e.target.value)}
                        placeholder="Answer: e.g. Yes! Our 24/7 Island Concierge can adjust hotel upgrades, private yacht add-ons, or extra nights upon request."
                        rows={2}
                        style={{ width: '100%', background: '#ffffff', border: '1px solid #CBD5E1', borderRadius: 10, padding: '8px 12px', fontSize: 13, outline: 'none', boxSizing: 'border-box' }}
                      />
                      <div style={{ textAlign: 'right' }}>
                        <button
                          type="button"
                          onClick={handleAddFaq}
                          style={{ background: '#0B2545', border: 'none', color: '#ffffff', padding: '8px 18px', borderRadius: 10, fontSize: 12, fontWeight: 800, cursor: 'pointer' }}
                        >
                          + ADD FAQ ITEM
                        </button>
                      </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                      {(formData.faq || []).map((item, idx) => (
                        <div
                          key={idx}
                          style={{
                            background: '#F8FAFC',
                            border: '1px solid #E2E8F0',
                            borderRadius: 12,
                            padding: '12px 16px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 4,
                          }}
                        >
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ fontWeight: 800, color: '#0B2545', fontSize: 13.5 }}>
                              Q{idx + 1}: {item.question}
                            </div>
                            <button
                              type="button"
                              onClick={() => handleRemoveFaq(idx)}
                              style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', fontSize: 14 }}
                            >
                              ✕
                            </button>
                          </div>
                          <div style={{ color: '#475569', fontSize: 13, lineHeight: 1.4 }}>
                            {item.answer}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>

              {/* Modal Footer */}
              <div
                style={{
                  padding: '16px 28px',
                  background: '#F8FAFC',
                  borderTop: '1px solid #E2E8F0',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div style={{ fontSize: 12, color: '#64748B' }}>
                  {editingItem ? `Editing Package ID: #${editingItem.id}` : 'Drafting new curated holiday package'}
                </div>

                <div style={{ display: 'flex', gap: 12 }}>
                  <button
                    type="button"
                    onClick={() => setModalOpen(false)}
                    style={{
                      background: '#ffffff',
                      border: '1px solid #CBD5E1',
                      color: '#475569',
                      padding: '10px 20px',
                      borderRadius: 12,
                      fontSize: 12,
                      fontWeight: 800,
                      cursor: 'pointer',
                    }}
                  >
                    CANCEL
                  </button>

                  <button
                    type="submit"
                    disabled={isSaving}
                    style={{
                      background: 'linear-gradient(135deg, #FF6B4A, #F06543)',
                      border: 'none',
                      color: '#ffffff',
                      padding: '10px 26px',
                      borderRadius: 12,
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: 12,
                      fontWeight: 900,
                      cursor: isSaving ? 'not-allowed' : 'pointer',
                      boxShadow: '0 4px 14px rgba(240, 101, 67, 0.35)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 6,
                    }}
                  >
                    {isSaving ? 'SAVING...' : editingItem ? 'UPDATE PACKAGE →' : 'PUBLISH PACKAGE →'}
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* ── SUB-MODAL: DAY ITINERARY DETAIL EDITOR ── */}
          {dayModalOpen && (
            <div
              style={{
                position: 'fixed',
                inset: 0,
                zIndex: 1600,
                background: 'rgba(11, 37, 69, 0.88)',
                backdropFilter: 'blur(12px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 16,
              }}
            >
              <form
                onSubmit={handleSaveDay}
                style={{
                  width: '100%',
                  maxWidth: 680,
                  maxHeight: '90vh',
                  background: '#ffffff',
                  borderRadius: 22,
                  boxShadow: '0 25px 60px rgba(0,0,0,0.5)',
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  border: '1.5px solid #E2E8F0',
                }}
              >
                {/* Day Header */}
                <div style={{ padding: '16px 24px', background: '#0B2545', color: '#ffffff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ background: '#F06543', color: '#ffffff', padding: '4px 10px', borderRadius: 8, fontSize: 11, fontWeight: 900, fontFamily: "'Space Grotesk', sans-serif" }}>
                      DAY {dayFormData.day}
                    </span>
                    <h4 style={{ margin: 0, fontSize: 16, fontWeight: 800, fontFamily: "'Space Grotesk', sans-serif" }}>
                      {editingDayIndex !== null ? `Edit Day ${dayFormData.day} Plan` : `Add Day ${dayFormData.day} Plan`}
                    </h4>
                  </div>
                  <button type="button" onClick={() => setDayModalOpen(false)} style={{ background: 'none', border: 'none', color: '#ffffff', fontSize: 16, cursor: 'pointer' }}>
                    ✕
                  </button>
                </div>

                {/* Day Fields */}
                <div style={{ padding: '20px 24px', overflowY: 'auto', flex: 1, display: 'flex', flexDirection: 'column', gap: 14 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 12 }}>
                    <div>
                      <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#0B2545', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 4 }}>
                        DAY TITLE / SIGHTSEEING HEADLINE <span style={{ color: '#ef4444' }}>*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={dayFormData.title}
                        onChange={(e) => setDayFormData({ ...dayFormData, title: e.target.value })}
                        placeholder="e.g. Makruzz Cruise to Havelock & Radhanagar Sunset"
                        style={{ width: '100%', background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 10, padding: '9px 12px', fontSize: 13, fontWeight: 600, outline: 'none', boxSizing: 'border-box' }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748B', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 4 }}>
                        ISLAND / LOCATION <span style={{ color: '#ef4444' }}>*</span>
                      </label>
                      <div style={{ display: 'flex', gap: 6, marginBottom: 6 }}>
                        <select
                          value={(availableDestinations.some(d => d.name.toLowerCase().includes(dayFormData.location.toLowerCase())) || DEFAULT_ISLANDS.some(i => i.toLowerCase().includes(dayFormData.location.toLowerCase()))) ? dayFormData.location : 'CUSTOM'}
                          onChange={(e) => {
                            if (e.target.value !== 'CUSTOM') {
                              setDayFormData({ ...dayFormData, location: e.target.value });
                            }
                          }}
                          style={{ flex: 1, background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 10, padding: '7px 10px', fontSize: 12, fontWeight: 600, outline: 'none', color: '#0B2545' }}
                        >
                          <option value="Port Blair">Port Blair</option>
                          <option value="Havelock Island (Swaraj Dweep)">Havelock Island (Swaraj Dweep)</option>
                          <option value="Neil Island (Shaheed Dweep)">Neil Island (Shaheed Dweep)</option>
                          <option value="Baratang Island">Baratang Island</option>
                          <option value="Diglipur">Diglipur</option>
                          <option value="Ross Island (Netaji Dweep)">Ross Island (Netaji Dweep)</option>
                          <option value="Jolly Buoy Island">Jolly Buoy Island</option>
                          <option value="CUSTOM">Custom / Specific Beach...</option>
                        </select>
                      </div>
                      <input
                        type="text"
                        value={dayFormData.location}
                        onChange={(e) => setDayFormData({ ...dayFormData, location: e.target.value })}
                        placeholder="e.g. Havelock Island / Radhanagar Beach"
                        style={{ width: '100%', background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 10, padding: '8px 12px', fontSize: 12.5, outline: 'none', boxSizing: 'border-box' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748B', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 4 }}>
                      DAY DETAILED OVERVIEW / STORY
                    </label>
                    <textarea
                      value={dayFormData.description}
                      onChange={(e) => setDayFormData({ ...dayFormData, description: e.target.value })}
                      placeholder="Describe the day's experiences, sights, and highlights in detail..."
                      rows={3}
                      style={{ width: '100%', background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 10, padding: '10px 12px', fontSize: 12.5, outline: 'none', boxSizing: 'border-box', resize: 'vertical', lineHeight: 1.45 }}
                    />
                  </div>

                  {/* Time Slots */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10 }}>
                    <div>
                      <label style={{ display: 'block', fontSize: 10.5, fontWeight: 800, color: '#F06543', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 3 }}>
                        🌅 MORNING PLAN
                      </label>
                      <input
                        type="text"
                        value={dayFormData.morning}
                        onChange={(e) => setDayFormData({ ...dayFormData, morning: e.target.value })}
                        placeholder="e.g. Makruzz Catamaran crossing"
                        style={{ width: '100%', background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 8, padding: '8px 10px', fontSize: 12, outline: 'none', boxSizing: 'border-box' }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: 10.5, fontWeight: 800, color: '#0369A1', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 3 }}>
                        ☀️ AFTERNOON PLAN
                      </label>
                      <input
                        type="text"
                        value={dayFormData.afternoon}
                        onChange={(e) => setDayFormData({ ...dayFormData, afternoon: e.target.value })}
                        placeholder="e.g. Resort check-in & pool relaxation"
                        style={{ width: '100%', background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 8, padding: '8px 10px', fontSize: 12, outline: 'none', boxSizing: 'border-box' }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: 10.5, fontWeight: 800, color: '#7C3AED', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 3 }}>
                        🌆 EVENING PLAN
                      </label>
                      <input
                        type="text"
                        value={dayFormData.evening}
                        onChange={(e) => setDayFormData({ ...dayFormData, evening: e.target.value })}
                        placeholder="e.g. Radhanagar Beach sunset"
                        style={{ width: '100%', background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 8, padding: '8px 10px', fontSize: 12, outline: 'none', boxSizing: 'border-box' }}
                      />
                    </div>
                  </div>

                  {/* Meals Included Toggles */}
                  <div style={{ background: '#F8FAFC', padding: 12, borderRadius: 10, border: '1px solid #E2E8F0' }}>
                    <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#0B2545', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 6 }}>
                      MEALS INCLUDED FOR DAY {dayFormData.day}:
                    </label>
                    <div style={{ display: 'flex', gap: 18 }}>
                      {['breakfast', 'lunch', 'dinner'].map((mealKey) => (
                        <label key={mealKey} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 700, color: '#334155', cursor: 'pointer' }}>
                          <input
                            type="checkbox"
                            checked={Boolean(dayFormData.meals?.[mealKey])}
                            onChange={(e) =>
                              setDayFormData({
                                ...dayFormData,
                                meals: { ...dayFormData.meals, [mealKey]: e.target.checked },
                              })
                            }
                            style={{ accentColor: '#F06543' }}
                          />
                          <span>{mealKey === 'breakfast' ? '🍳 Breakfast' : mealKey === 'lunch' ? '🥗 Lunch' : '🍽️ Dinner'}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 14 }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
                        <label style={{ fontSize: 11, fontWeight: 800, color: '#64748B', fontFamily: "'Space Grotesk', sans-serif" }}>
                          OVERNIGHT STAY / RESORT
                        </label>
                        {dayFormData.stay && (
                          <button
                            type="button"
                            onClick={() => setDayFormData({ ...dayFormData, stay: '' })}
                            style={{ background: 'none', border: 'none', color: '#EF4444', fontSize: 10.5, fontWeight: 700, cursor: 'pointer', padding: 0 }}
                          >
                            ✕ Clear
                          </button>
                        )}
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                        <select
                          value={
                            availableStays.some(s => s.name === dayFormData.stay || `${s.name}${s.destination?.name ? ` (${s.destination.name})` : (s.location ? ` (${s.location})` : '')}` === dayFormData.stay)
                              ? dayFormData.stay
                              : CURATED_STAY_OPTIONS.some(g => g.options.includes(dayFormData.stay))
                                ? dayFormData.stay
                                : dayFormData.stay ? '__CUSTOM__' : ''
                          }
                          onChange={(e) => {
                            const val = e.target.value;
                            if (val && val !== '__CUSTOM__') {
                              setDayFormData({ ...dayFormData, stay: val });
                            }
                          }}
                          style={{
                            width: '100%',
                            background: '#F8FAFC',
                            border: '1.5px solid #E2E8F0',
                            borderRadius: 8,
                            padding: '8px 10px',
                            fontSize: 12,
                            fontWeight: 600,
                            color: '#0B2545',
                            outline: 'none',
                            boxSizing: 'border-box'
                          }}
                        >
                          <option value="">-- Select Overnight Stay / Resort --</option>
                          
                          {/* Live DB Stays */}
                          {availableStays.length > 0 && (
                            <optgroup label="🏨 Stays from Database">
                              {availableStays.map((s) => {
                                const stayLabel = `${s.name}${s.destination?.name ? ` (${s.destination.name})` : (s.location ? ` (${s.location})` : '')}`;
                                return (
                                  <option key={`db-${s.id}`} value={stayLabel}>
                                    🌟 {stayLabel}
                                  </option>
                                );
                              })}
                            </optgroup>
                          )}

                          {/* Curated Island Groups */}
                          {CURATED_STAY_OPTIONS.map((grp) => (
                            <optgroup key={grp.group} label={grp.group}>
                              {grp.options.map((opt) => (
                                <option key={opt} value={opt}>
                                  {opt}
                                </option>
                              ))}
                            </optgroup>
                          ))}

                          <option value="__CUSTOM__">✏️ Custom Resort (Type below)</option>
                        </select>

                        <input
                          type="text"
                          value={dayFormData.stay}
                          onChange={(e) => setDayFormData({ ...dayFormData, stay: e.target.value })}
                          placeholder="Or type/edit custom resort name directly..."
                          style={{
                            width: '100%',
                            background: '#ffffff',
                            border: '1px solid #CBD5E1',
                            borderRadius: 8,
                            padding: '7px 10px',
                            fontSize: 12,
                            color: '#1E293B',
                            outline: 'none',
                            boxSizing: 'border-box'
                          }}
                        />
                      </div>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: 11, fontWeight: 800, color: '#64748B', fontFamily: "'Space Grotesk', sans-serif", marginBottom: 4 }}>
                        TRANSFERS / VEHICLE
                      </label>
                      <input
                        type="text"
                        value={dayFormData.transfers}
                        onChange={(e) => setDayFormData({ ...dayFormData, transfers: e.target.value })}
                        placeholder="e.g. Private AC Sedan + Makruzz Ferry"
                        style={{ width: '100%', background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 8, padding: '8px 10px', fontSize: 12, outline: 'none', boxSizing: 'border-box' }}
                      />
                    </div>
                  </div>

                  <MediaUploadField
                    label="DAY PHOTO (HIGHLIGHT IMAGE)"
                    value={dayFormData.image}
                    onChange={(url) => setDayFormData({ ...dayFormData, image: url })}
                    helpText="Upload a photo representing this day's attractions or enter a URL."
                  />
                </div>

                {/* Day Modal Footer */}
                <div style={{ padding: '14px 24px', background: '#F8FAFC', borderTop: '1px solid #E2E8F0', display: 'flex', justifyContent: 'flex-end', gap: 10 }}>
                  <button
                    type="button"
                    onClick={() => setDayModalOpen(false)}
                    style={{ background: '#ffffff', border: '1px solid #CBD5E1', color: '#475569', padding: '8px 16px', borderRadius: 10, fontSize: 12, fontWeight: 700, cursor: 'pointer' }}
                  >
                    CANCEL
                  </button>
                  <button
                    type="submit"
                    style={{ background: '#0B2545', border: 'none', color: '#ffffff', padding: '8px 20px', borderRadius: 10, fontSize: 12, fontWeight: 900, cursor: 'pointer', fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    SAVE DAY {dayFormData.day} PLAN →
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      );
    }

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <DataTable
          title="Tour Packages"
          subtitle="Manage custom Andaman tour itineraries, multi-day routes, dynamic pricing & activities."
          data={packages}
          columns={columns}
          loading={loading}
          isLoading={loading}
          onAdd={handleOpenCreate}
          addLabel="CREATE NEW PACKAGE"
          actions={
            <button
              type="button"
              onClick={handleOpenCreate}
              style={{
                background: 'linear-gradient(135deg, #FF6B4A, #F06543)',
                border: 'none',
                color: '#ffffff',
                padding: '10px 20px',
                borderRadius: 14,
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 12.5,
                fontWeight: 900,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                boxShadow: '0 4px 16px rgba(240, 101, 67, 0.3)',
                letterSpacing: '0.04em'
              }}
            >
              <Plus size={16} />
              <span>+ CREATE NEW PACKAGE</span>
            </button>
          }
          searchPlaceholder="Search packages by name, theme, duration, tag..."
          filters={[
            {
              label: 'All Statuses',
              options: [
                { label: 'Active', value: 'active' },
                { label: 'Draft', value: 'draft' },
                { label: 'Archived', value: 'archived' },
              ],
            },
          ]}
        />

        <ConfirmDialog
          isOpen={Boolean(deleteId)}
          title="Delete Holiday Package?"
          message="Are you sure you want to delete this holiday package? Linked customer inquiries and booking quotes will remain in database history."
          onConfirm={handleDelete}
          onCancel={() => setDeleteId(null)}
        />
      </div>
    );
  }
