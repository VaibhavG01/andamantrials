// src/components/pages/Destinations.jsx
// ─────────────────────────────────────────────────────────────────────────────
// MASTER ANDAMAN TRAILS DESTINATIONS PAGE — Complete Modular Luxury Architecture
// Mirrors the exact luxury structure, high-contrast thick UI & sections of Activities.jsx

import React, { useState, useEffect, useMemo, useRef } from 'react';
import DestinationHero from '../destinations/DestinationHero';
import DestinationSearch from '../destinations/DestinationSearch';
import FeaturedDestination from '../destinations/FeaturedDestination';
import DestinationCategories from '../destinations/DestinationCategories';
import DestinationIslandExplorer from '../destinations/DestinationIslandExplorer';
import DestinationGrid from '../destinations/DestinationGrid';
import WhyDestinations from '../destinations/WhyDestinations';
import HavelockExperience from '../destinations/HavelockExperience';
import NeilExperience from '../destinations/NeilExperience';
import BaratangExperience from '../destinations/BaratangExperience';
import DestinationInclusions from '../destinations/DestinationInclusions';
import DestinationBookingFlow from '../destinations/DestinationBookingFlow';
import DestinationAvailability from '../destinations/DestinationAvailability';
import DestinationTips from '../destinations/DestinationTips';
import DestinationFAQ from '../destinations/DestinationFAQ';
import DestinationReviews from '../destinations/DestinationReviews';
import DestinationCTA from '../destinations/DestinationCTA';
import FooterBottom from '../FooterBottom';
import { destinationService } from '../../api/destinationService';

const ISLAND_IMAGES = {
  havelock: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?auto=format&fit=crop&w=800&q=80',
  neil: 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&w=800&q=80',
  'port-blair': 'https://images.unsplash.com/photo-1584285406798-842245b0a394?auto=format&fit=crop&w=800&q=80',
  baratang: 'https://images.unsplash.com/photo-1582298538104-1b778263da24?auto=format&fit=crop&w=800&q=80',
  diglipur: 'https://images.unsplash.com/photo-1610014766858-69315bc32b4f?auto=format&fit=crop&w=800&q=80',
  'great-nicobar': 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800&q=80',
  'little-andaman': 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
  'long-island': 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80',
};

const INITIAL_DESTINATIONS = [
  {
    id: 'havelock',
    name: 'HAVELOCK ISLAND',
    alias: 'Swaraj Dweep',
    region: 'South Andaman',
    vibe: 'Beaches & Scuba',
    category: 'TOP PICK',
    image: ISLAND_IMAGES.havelock,
    tags: ['Radhanagar Beach No. 7', 'Elephant Reef Scuba', 'Bioluminescence Kayak'],
    description: 'Home to world-famous Radhanagar Beach (Asia’s Top Beach No. 7), turquoise coral lagoons & Dixon’s Pinnacle deep scuba diving.',
    rating: 4.9,
    reviews: 420,
    ferryTime: '90 min Catamaran',
    startingPrice: '1,499',
    badge: 'MOST POPULAR',
    scubaScore: '98%',
    waterTemp: '28°C',
    clarity: 'Crystal (25m+)',
  },
  {
    id: 'neil',
    name: 'NEIL ISLAND',
    alias: 'Shaheed Dweep',
    region: 'South Andaman',
    vibe: 'Beaches & Scuba',
    category: 'RELAXATION',
    image: ISLAND_IMAGES.neil,
    tags: ['Natural Rock Bridge', 'Organic Reefs', 'Sunsets'],
    description: 'A serene island of organic farmlands, biological Howrah Natural Rock Bridge coral arches & Laxmanpur sunsets.',
    rating: 4.8,
    reviews: 310,
    ferryTime: '60 min from Havelock',
    startingPrice: '1,299',
    badge: 'TRANQUIL HAVEN',
    scubaScore: '92%',
    waterTemp: '29°C',
    clarity: 'Clear (18m+)',
  },
  {
    id: 'port-blair',
    name: 'PORT BLAIR',
    alias: 'Capital Gateway',
    region: 'South Andaman',
    vibe: 'Heritage & Capital',
    category: 'HERITAGE',
    image: ISLAND_IMAGES['port-blair'],
    tags: ['Cellular Jail', 'Ross Island', 'Museums'],
    description: 'Historical capital gateway hosting Cellular Jail National Memorial, Netaji Subhash Bose Island ruins & harbor promenades.',
    rating: 4.7,
    reviews: 540,
    ferryTime: 'Airport Hub (0 min)',
    startingPrice: '899',
    badge: 'CAPITAL HUB',
    scubaScore: '85%',
    waterTemp: '30°C',
    clarity: 'Good (15m+)',
  },
  {
    id: 'baratang',
    name: 'BARATANG ISLAND',
    alias: 'Middle Andaman',
    region: 'Middle Andaman',
    vibe: 'Eco Mangrove Safari',
    category: 'ADVENTURE',
    image: ISLAND_IMAGES.baratang,
    tags: ['Limestone Caves', 'Mangrove Safari', 'Mud Volcano'],
    description: 'Offbeat nature sanctuary featuring high-speed mangrove boat safaris, stalactite caves & mud volcano trails.',
    rating: 4.6,
    reviews: 180,
    ferryTime: '3 hrs Road & Boat',
    startingPrice: '1,850',
    badge: 'ECO EXPLORER',
    scubaScore: 'N/A',
    waterTemp: '27°C',
    clarity: 'Estuary Creeks',
  },
  {
    id: 'diglipur',
    name: 'DIGLIPUR',
    alias: 'North Andaman Peak',
    region: 'North Andaman',
    vibe: 'Peaks & Sandbars',
    category: 'ECO SANCTUARY',
    image: ISLAND_IMAGES.diglipur,
    tags: ['Ross & Smith Sandbar', 'Saddle Peak', 'Turtles'],
    description: 'The peak of North Andaman boasting the natural white sandbar of Ross & Smith twin islands and Saddle Peak summit trails.',
    rating: 4.9,
    reviews: 145,
    ferryTime: 'Overnight Ship / Road',
    startingPrice: '2,499',
    badge: 'HIGHEST PEAK',
    scubaScore: '90%',
    waterTemp: '26°C',
    clarity: 'Pristine (22m+)',
  },
  {
    id: 'great-nicobar',
    name: 'GREAT NICOBAR',
    alias: 'Indira Point Frontier',
    region: 'Nicobar',
    vibe: 'Biosphere',
    category: 'BIOSPHERE',
    image: ISLAND_IMAGES['great-nicobar'],
    tags: ['Southernmost Tip', 'UNESCO Reserve', 'Endemic Fauna'],
    description: 'India’s southernmost frontier harboring the UNESCO Great Nicobar Biosphere Reserve and giant sea turtle nesting grounds.',
    rating: 4.9,
    reviews: 85,
    ferryTime: 'Inter-Island Passenger Ship',
    startingPrice: '3,200',
    badge: 'FRONTIER ISLE',
    scubaScore: '95%',
    waterTemp: '28°C',
    clarity: 'Unexplored Ocean',
  },
  {
    id: 'long-island',
    name: 'LONG ISLAND',
    alias: 'Middle Andaman Jewel',
    region: 'Middle Andaman',
    vibe: 'Eco Mangrove Safari',
    category: 'HIDDEN GEM',
    image: ISLAND_IMAGES['long-island'],
    tags: ['Lalaji Bay', 'Guitar Island', 'Snorkeling'],
    description: 'A secluded sanctuary with white Lalaji Bay sands, dense forest canopies and pristine uninhabited atolls.',
    rating: 4.7,
    reviews: 95,
    ferryTime: 'Boat from Rangat',
    startingPrice: '1,650',
    badge: 'SECRET ISLE',
    scubaScore: '90%',
    waterTemp: '28°C',
    clarity: 'Crystal (20m+)',
  },
  {
    id: 'little-andaman',
    name: 'LITTLE ANDAMAN',
    alias: 'Hut Bay Surfing Haven',
    region: 'South Andaman',
    vibe: 'Adventure',
    category: 'SURFING',
    image: ISLAND_IMAGES['little-andaman'],
    tags: ['White Surf Waves', 'Whisper Wave Waterfall', 'Lighthouse'],
    description: 'India’s surfing hotspot featuring Butler Bay waves, pristine waterfalls and endless coconut plantations.',
    rating: 4.8,
    reviews: 110,
    ferryTime: '6 hrs Passenger Ship',
    startingPrice: '1,999',
    badge: 'SURF PARADISE',
    scubaScore: '88%',
    waterTemp: '29°C',
    clarity: 'Open Ocean (18m+)',
  },
];

export default function Destinations() {
  const [destinations, setDestinations] = useState(INITIAL_DESTINATIONS);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Wishlist state
  const [savedWishlist, setSavedWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('andaman_destination_wishlist');
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      return {};
    }
  });

  const toggleWishlist = (destId, e) => {
    if (e) e.stopPropagation();
    setSavedWishlist((prev) => {
      const next = { ...prev, [destId]: !prev[destId] };
      try {
        localStorage.setItem('andaman_destination_wishlist', JSON.stringify(next));
      } catch (err) {}
      return next;
    });
  };

  // Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('ALL');
  const [selectedVibe, setSelectedVibe] = useState('All Island Vibes');
  const [selectedDate, setSelectedDate] = useState('');
  const [sortBy, setSortBy] = useState('popular');

  const gridSectionRef = useRef(null);
  const availabilitySectionRef = useRef(null);

  // 1. Fetch live destinations from backend API or fallback
  const fetchDestinationsData = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await destinationService.getDestinations();
      if (res.data && Array.isArray(res.data) && res.data.length > 0) {
        const mapped = res.data.map((d, index) => {
          const lowerSlug = (d.slug || d.name || '').toLowerCase();
          let key = 'havelock';
          if (lowerSlug.includes('neil') || lowerSlug.includes('shaheed')) key = 'neil';
          else if (lowerSlug.includes('baratang')) key = 'baratang';
          else if (lowerSlug.includes('diglipur')) key = 'diglipur';
          else if (lowerSlug.includes('nicobar')) key = 'great-nicobar';
          else if (lowerSlug.includes('port-blair') || lowerSlug.includes('blair')) key = 'port-blair';
          else if (lowerSlug.includes('long')) key = 'long-island';
          else if (lowerSlug.includes('little')) key = 'little-andaman';
          else if (lowerSlug.includes('havelock') || lowerSlug.includes('swaraj')) key = 'havelock';
          else key = d.slug || `dest-${d.id || index}`;

          let matched = INITIAL_DESTINATIONS.find(init => init.id === key) || INITIAL_DESTINATIONS[0];

          const rawName = d.name || matched.name;
          const cleanName = rawName.split(' (')[0].trim().toUpperCase();

          return {
            ...matched,
            id: d.slug || (d.id ? `dest-${d.id}` : `${key}-${index}`),
            destKey: key,
            name: cleanName,
            alias: matched.alias || d.alias,
            description: d.shortDescription || d.description || matched.description,
            image: d.heroImage || d.image || ISLAND_IMAGES[key] || matched.image,
            rating: Number(d.rating || matched.rating),
            reviews: d.reviewsCount || matched.reviews,
          };
        });
        setDestinations(mapped);
      } else {
        setDestinations(INITIAL_DESTINATIONS);
      }
    } catch (err) {
      console.error('Failed to load destinations:', err);
      setDestinations(INITIAL_DESTINATIONS);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDestinationsData();
  }, []);

  // Filtered & Sorted Destinations
  const filteredDestinations = useMemo(() => {
    let result = (destinations || []).filter((dest) => {
      const matchesRegion =
        selectedRegion === 'ALL' ||
        dest.region.toUpperCase().includes(selectedRegion.toUpperCase().replace('ISLANDS', '').trim());

      const matchesVibe =
        selectedVibe === 'All Island Vibes' ||
        (dest.vibe && dest.vibe.toLowerCase().includes(selectedVibe.toLowerCase())) ||
        (dest.category && dest.category.toLowerCase().includes(selectedVibe.toLowerCase()));

      const matchesSearch =
        !searchQuery ||
        dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (dest.alias && dest.alias.toLowerCase().includes(searchQuery.toLowerCase())) ||
        dest.region.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesRegion && matchesVibe && matchesSearch;
    });

    // Sorting
    if (sortBy === 'rating') {
      result.sort((a, b) => Number(b.rating || 0) - Number(a.rating || 0));
    } else if (sortBy === 'reviews') {
      result.sort((a, b) => Number(b.reviews || 0) - Number(a.reviews || 0));
    } else if (sortBy === 'priceAsc') {
      result.sort((a, b) => Number(a.startingPrice?.replace(/,/g, '') || 0) - Number(b.startingPrice?.replace(/,/g, '') || 0));
    }

    return result;
  }, [destinations, selectedRegion, selectedVibe, searchQuery, sortBy]);

  // Featured Destination Spotlight (Havelock or Top Rated)
  const topFeaturedDestination = useMemo(() => {
    if (!destinations || destinations.length === 0) return INITIAL_DESTINATIONS[0];
    return destinations.find((d) => d.id === 'havelock' || d.id === 'havelock-island' || d.destKey === 'havelock') || destinations[0];
  }, [destinations]);

  const handleViewDetails = (destId) => {
    window.history.pushState({}, '', `/destination-details?id=${destId}`);
    window.dispatchEvent(new Event('popstate'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const clearAllFilters = () => {
    setSearchQuery('');
    setSelectedRegion('ALL');
    setSelectedVibe('All Island Vibes');
    setSelectedDate('');
    setSortBy('popular');
  };

  const scrollToGrid = () => {
    const el = document.getElementById('destination-grid-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAvailability = () => {
    const el = document.getElementById('destination-availability-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Search filter handler from floating DestinationSearch bar
  const handleSearchSubmit = ({ searchQuery: q, region: r, vibe: v, date: d }) => {
    if (q !== undefined) setSearchQuery(q);
    if (r && r !== 'All Regions') {
      if (r.includes('South')) setSelectedRegion('SOUTH ANDAMAN');
      else if (r.includes('Middle')) setSelectedRegion('MIDDLE ANDAMAN');
      else if (r.includes('North')) setSelectedRegion('NORTH ANDAMAN');
      else if (r.includes('Nicobar')) setSelectedRegion('NICOBAR');
      else setSelectedRegion('ALL');
    } else if (r === 'All Regions') {
      setSelectedRegion('ALL');
    }
    if (v) setSelectedVibe(v);
    if (d) setSelectedDate(d);
    scrollToGrid();
  };

  // Category card filter trigger
  const handleSelectCategory = (vibeKey) => {
    setSelectedVibe(vibeKey);
    scrollToGrid();
  };

  // Island hub filter trigger
  const handleSelectIslandHub = (regionKey) => {
    setSelectedRegion(regionKey.toUpperCase());
    scrollToGrid();
  };

  return (
    <div className="destinations-page-root">
      <style>{`
        .destinations-page-root {
          width: 100%;
          min-height: 100vh;
          background: #f8fafc;
          color: #334155;
          overflow-x: hidden;
          font-family: 'Inter', sans-serif;
        }
      `}</style>

      {/* 1. DESTINATION HERO */}
      <DestinationHero
        onExploreDestinations={scrollToGrid}
        onPlanTrip={() => {
          window.history.pushState({}, '', '/plan-trip');
          window.dispatchEvent(new Event('popstate'));
        }}
      />

      {/* 2. FLOATING SEARCH / ISLAND PANEL */}
      <DestinationSearch onSearch={handleSearchSubmit} />

      {/* 3. FEATURED DESTINATION SPOTLIGHT (HAVELOCK / TOP RATED) */}
      <FeaturedDestination
        destination={topFeaturedDestination}
        onViewDetails={(destId) => handleViewDetails(destId || 'havelock')}
        onPlanTrip={() => {
          window.history.pushState({}, '', '/plan-trip');
          window.dispatchEvent(new Event('popstate'));
        }}
      />

      {/* 4. DESTINATION CATEGORIES & VIBES */}
      <DestinationCategories onSelectCategory={handleSelectCategory} />

      {/* 5. ISLAND ADVENTURE & TRANSIT HUBS EXPLORER */}
      <DestinationIslandExplorer onSelectIsland={handleSelectIslandHub} />

      {/* 6. MAIN LIVE DESTINATION LISTING GRID */}
      <div id="destination-grid-section">
        <DestinationGrid
          destinations={filteredDestinations}
          loading={loading}
          error={error}
          selectedRegion={selectedRegion}
          onSelectRegion={setSelectedRegion}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          sortBy={sortBy}
          onChangeSortBy={setSortBy}
          onResetFilters={clearAllFilters}
          savedWishlist={savedWishlist}
          onToggleWishlist={toggleWishlist}
          onViewDetails={handleViewDetails}
          onRetry={fetchDestinationsData}
        />
      </div>

      {/* 7. WHY ISLAND HOP WITH US */}
      <WhyDestinations />

      {/* 8. SPOTLIGHT 1: SWARAJ DWEEP (HAVELOCK) */}
      <HavelockExperience onDiscoverHavelock={() => handleViewDetails('havelock')} />

      {/* 9. SPOTLIGHT 2: SHAHEED DWEEP (NEIL) */}
      <NeilExperience onDiscoverNeil={() => handleViewDetails('neil')} />

      {/* 10. SPOTLIGHT 3: BARATANG ISLAND MANGROVE SAFARI */}
      <BaratangExperience onDiscoverBaratang={() => handleViewDetails('baratang')} />

      {/* 11. WHAT'S INCLUDED & ISLAND LOGISTICS */}
      <DestinationInclusions />

      {/* 12. EASY 4-STEP ISLAND EXPLORATION FLOW */}
      <DestinationBookingFlow onStartPlanning={() => {
        window.history.pushState({}, '', '/plan-trip');
        window.dispatchEvent(new Event('popstate'));
      }} />

      {/* 13. REAL-TIME INTER-ISLAND FERRY CONNECTIVITY CHECKER */}
      <div id="destination-availability-section">
        <DestinationAvailability onBookFerry={() => {
          window.history.pushState({}, '', '/ferries');
          window.dispatchEvent(new Event('popstate'));
        }} />
      </div>

      {/* 14. LOCAL ISLAND TRAVEL TIPS */}
      <DestinationTips />

      {/* 15. DESTINATIONS FAQ */}
      <DestinationFAQ />

      {/* 16. TRAVELER STORIES & REVIEWS (Commented out per user request) */}
      {/* <DestinationReviews /> */}

      {/* 17. FINAL CONVERSION CTA */}
      <DestinationCTA
        onPlanTrip={() => {
          window.history.pushState({}, '', '/plan-trip');
          window.dispatchEvent(new Event('popstate'));
        }}
        onExploreFerries={() => {
          window.history.pushState({}, '', '/ferries');
          window.dispatchEvent(new Event('popstate'));
        }}
      />

      {/* 18. FOOTER */}
      <FooterBottom />
    </div>
  );
}
