// src/components/stays/StayGrid.jsx
import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Compass, Sparkles, AlertCircle } from 'lucide-react';
import StayCard from './StayCard';
import StayFilters from './StayFilters';
import StaySort from './StaySort';
import StayMap from './StayMap';
import { stayService } from '../../api/stayService';

gsap.registerPlugin(ScrollTrigger);

// 11 Complete Default Stays across all Andaman & Nicobar Islands
const DEFAULT_11_STAYS = [
  {
    id: 'stay-taj-exotica',
    slug: 'taj-exotica-resort-spa',
    name: 'Taj Exotica Resort & Spa',
    destination: 'Havelock Island (Swaraj Dweep)',
    type: 'LUXURY_VILLA',
    category: 'LUXURY_VILLA',
    rating: 4.9,
    reviewCount: 128,
    pricePerNight: 32000,
    originalPrice: 38000,
    heroImage: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=85',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=85',
    tagline: '5-Star Rainforest & Private Beach Plunge Pool Villas',
    shortDescription: 'Occupying 46 acres of lush rainforest along Radhanagar Beach, Taj Exotica offers eco-luxury villas with private pools and world-class spa.',
    amenities: ['Private Pool', 'Beachfront', 'Spa & Wellness', 'In-house Restaurant', 'Free High-Speed Wi-Fi'],
  },
  {
    id: 'stay-barefoot',
    slug: 'barefoot-at-havelock',
    name: 'Barefoot at Havelock',
    destination: 'Havelock Island (Swaraj Dweep)',
    type: 'BOUTIQUE_RESORT',
    category: 'BOUTIQUE_RESORT',
    rating: 4.8,
    reviewCount: 94,
    pricePerNight: 18500,
    originalPrice: 22000,
    heroImage: 'https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&w=1200&q=85',
    image: 'https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&w=1200&q=85',
    tagline: 'Eco-chic Luxury Wooden Cottages at Radhanagar Beach',
    shortDescription: 'Eco-chic luxury wooden cottages nestled beside Radhanagar Beach with pristine jungle paths and private beach walkway.',
    amenities: ['Beachfront', 'Spa & Wellness', 'In-house Restaurant', 'Free High-Speed Wi-Fi', 'Full Air Conditioning'],
  },
  {
    id: 'stay-munjoh',
    slug: 'munjoh-ocean-resort',
    name: 'Munjoh Ocean Resort',
    destination: 'Havelock Island (Swaraj Dweep)',
    type: 'LUXURY_VILLA',
    category: 'LUXURY_VILLA',
    rating: 4.8,
    reviewCount: 88,
    pricePerNight: 16500,
    originalPrice: 19500,
    heroImage: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=85',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=85',
    tagline: 'Bespoke Ocean Suites & Coconut Grove Pool Villas',
    shortDescription: 'Bespoke luxury ocean suites and coconut grove pool villas at Beach No. 5 with PADI dive school and curated beach dining.',
    amenities: ['Swimming Pool', 'Beachfront', 'PADI Scuba Desk', 'Cocktail Bar', 'Free High-Speed Wi-Fi'],
  },
  {
    id: 'stay-welcomhotel',
    slug: 'welcomhotel-bay-island-port-blair',
    name: 'Welcomhotel by ITC Hotels, Bay Island',
    destination: 'Port Blair',
    type: 'HERITAGE_HOTEL',
    category: 'HERITAGE_HOTEL',
    rating: 4.8,
    reviewCount: 112,
    pricePerNight: 14500,
    originalPrice: 17000,
    heroImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85',
    tagline: 'Padauk Wood Architecture Overlooking the Bay',
    shortDescription: 'Overlooking the tranquil waters of Bay of Bengal, built with native Padauk wood architecture and cliffside sea views.',
    amenities: ['Swimming Pool', 'In-house Restaurant', 'Spa & Wellness', 'Cocktail Bar', 'Free High-Speed Wi-Fi'],
  },
  {
    id: 'stay-symphony-samudra',
    slug: 'symphony-samudra-beachside-jungle-resort',
    name: 'Symphony Samudra Beachside Jungle Resort',
    destination: 'Port Blair',
    type: 'LUXURY_VILLA',
    category: 'LUXURY_VILLA',
    rating: 4.9,
    reviewCount: 106,
    pricePerNight: 12800,
    originalPrice: 15500,
    heroImage: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=85',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=85',
    tagline: 'Eco-Luxury Haven next to Chidiya Tapu Sunset Point',
    shortDescription: 'A luxurious eco-resort nestled next to Chidiya Tapu Biological Park and Sunset Point with an infinity pool and wellness spa.',
    amenities: ['Swimming Pool', 'Spa & Wellness', 'In-house Restaurant', 'Cocktail Bar', 'Full Air Conditioning'],
  },
  {
    id: 'stay-seashell',
    slug: 'seashell-havelock',
    name: 'SeaShell Havelock',
    destination: 'Havelock Island (Swaraj Dweep)',
    type: 'BEACH_RESORT',
    category: 'BEACH_RESORT',
    rating: 4.8,
    reviewCount: 145,
    pricePerNight: 11200,
    originalPrice: 13500,
    heroImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85',
    tagline: 'Beachside Timber Cottages with Direct Beach Access',
    shortDescription: 'Timber beach cottages amidst towering coconut trees with direct access to Govind Nagar beach and the popular Fluidz bar.',
    amenities: ['Beachfront', 'Swimming Pool', 'PADI Scuba Desk', 'Cocktail Bar', 'Free High-Speed Wi-Fi'],
  },
  {
    id: 'stay-summer-sands',
    slug: 'summer-sands-beach-resort',
    name: 'Summer Sands Beach Resort',
    destination: 'Neil Island (Shaheed Dweep)',
    type: 'BOUTIQUE_RESORT',
    category: 'BOUTIQUE_RESORT',
    rating: 4.7,
    reviewCount: 76,
    pricePerNight: 9500,
    originalPrice: 11500,
    heroImage: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=85',
    image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=85',
    tagline: 'Lagoon Pool Luxury Resort in Ramnagar',
    shortDescription: 'Modern luxury resort with lagoon pool, private plunge rooms, and courtyard gardens at Ramnagar Beach.',
    amenities: ['Swimming Pool', 'Spa & Wellness', 'In-house Restaurant', 'Cocktail Bar', 'Free High-Speed Wi-Fi'],
  },
  {
    id: 'stay-symphony-palms',
    slug: 'symphony-palms-beach-resort',
    name: 'Symphony Palms Beach Resort',
    destination: 'Havelock Island (Swaraj Dweep)',
    type: 'ECO_LODGE',
    category: 'ECO_LODGE',
    rating: 4.6,
    reviewCount: 98,
    pricePerNight: 8900,
    originalPrice: 10500,
    heroImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85',
    tagline: 'Lagoon Cottages & Beach Dining on Beach No. 5',
    shortDescription: 'Charming lagoon cottages and seaside suites on Beach No. 5 with soothing ocean breezes and beach dining.',
    amenities: ['Beachfront', 'In-house Restaurant', 'Spa & Wellness', 'Free High-Speed Wi-Fi', 'Full Air Conditioning'],
  },
  {
    id: 'stay-great-nicobar',
    slug: 'great-nicobar-eco-wilderness-lodge',
    name: 'Great Nicobar Eco Wilderness Lodge',
    destination: 'Great Nicobar',
    type: 'ECO_LODGE',
    category: 'ECO_LODGE',
    rating: 4.7,
    reviewCount: 42,
    pricePerNight: 5500,
    originalPrice: 7000,
    heroImage: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&q=85',
    image: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&q=85',
    tagline: 'Wilderness Sanctuary along Campbell Bay',
    shortDescription: 'Authentic wilderness sanctuary overlooking pristine Campbell Bay and Galathea biosphere with guided nature safaris.',
    amenities: ['In-house Restaurant', 'Free High-Speed Wi-Fi', 'Full Air Conditioning'],
  },
  {
    id: 'stay-dew-dale',
    slug: 'dew-dale-eco-resort',
    name: 'Dew Dale Eco Resort',
    destination: 'Baratang Island',
    type: 'ECO_LODGE',
    category: 'ECO_LODGE',
    rating: 4.5,
    reviewCount: 53,
    pricePerNight: 4500,
    originalPrice: 5500,
    heroImage: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1200&q=85',
    image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1200&q=85',
    tagline: 'Rural Eco Retreat near Baratang Limestone Caves',
    shortDescription: 'Serene rural retreat surrounded by lush tropical greenery, perfectly located for visiting limestone caves & mud volcano.',
    amenities: ['In-house Restaurant', 'Full Air Conditioning', 'Free High-Speed Wi-Fi'],
  },
  {
    id: 'stay-pristine',
    slug: 'pristine-beach-resort',
    name: 'Pristine Beach Resort',
    destination: 'Diglipur',
    type: 'ECO_LODGE',
    category: 'ECO_LODGE',
    rating: 4.6,
    reviewCount: 61,
    pricePerNight: 3800,
    originalPrice: 4800,
    heroImage: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1200&q=85',
    image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1200&q=85',
    tagline: 'Beachfront Eco Cottages near Kalipur Turtle Nesting',
    shortDescription: 'Rustic beachfront timber huts in Kalipur Beach with turtle nesting sights, views of Saddle Peak, and coral reef tours.',
    amenities: ['Beachfront', 'In-house Restaurant', 'Free High-Speed Wi-Fi'],
  },
];

export default function StayGrid({ onViewStay, searchFilter }) {
  const [destination, setDestination] = useState('All');
  const [category, setCategory] = useState('All');
  const [maxPrice, setMaxPrice] = useState(40000);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [sortBy, setSortBy] = useState('RECOMMENDED');
  const [isMapView, setIsMapView] = useState(false);
  const [staysList, setStaysList] = useState(DEFAULT_11_STAYS);

  const gridRef = useRef(null);

  useEffect(() => {
    if (searchFilter?.destination) {
      setDestination(searchFilter.destination);
    }
  }, [searchFilter]);

  useEffect(() => {
    stayService.getStays()
      .then((res) => {
        if (res.data && Array.isArray(res.data) && res.data.length > 0) {
          const dbMapped = res.data.map((s) => {
            const destName = typeof s.destination === 'object' && s.destination !== null
              ? (s.destination.name || 'Havelock Island (Swaraj Dweep)')
              : (typeof s.destination === 'string' ? s.destination : (s.location || 'Havelock Island (Swaraj Dweep)'));

            const fallbackMatch = DEFAULT_11_STAYS.find(
              d => d.slug === s.slug || d.name.toLowerCase() === s.name.toLowerCase()
            );

            return {
              id: `db-stay-${s.id}`,
              name: s.name,
              slug: s.slug || `stay-${s.id}`,
              tagline: s.tagline || fallbackMatch?.tagline || 'Experience pristine island luxury and beachfront serenity.',
              destination: destName,
              type: s.type || fallbackMatch?.type || 'LUXURY_VILLA',
              category: s.type || fallbackMatch?.category || 'LUXURY_VILLA',
              rating: parseFloat(s.rating || fallbackMatch?.rating || 4.8),
              reviewCount: s.reviewCount || fallbackMatch?.reviewCount || 95,
              reviewsCount: s.reviewCount || fallbackMatch?.reviewCount || 95,
              heroImage: s.heroImage || fallbackMatch?.heroImage || 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
              image: s.heroImage || fallbackMatch?.image || 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
              gallery: s.gallery || fallbackMatch?.gallery || [s.heroImage || 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80'],
              pricePerNight: parseFloat(s.pricePerNight || fallbackMatch?.pricePerNight || 12000),
              originalPrice: parseFloat(s.pricePerNight || fallbackMatch?.pricePerNight || 12000) * 1.2,
              shortDescription: s.shortDescription || fallbackMatch?.shortDescription || s.description,
              description: s.description || fallbackMatch?.description,
              amenities: Array.isArray(s.amenities) && s.amenities.length > 0 ? s.amenities : (fallbackMatch?.amenities || ['Beachfront', 'In-house Restaurant', 'Free High-Speed Wi-Fi']),
            };
          });

          // If db has 11 stays or more, use dbMapped; otherwise blend default 11 stays
          if (dbMapped.length >= 8) {
            setStaysList(dbMapped);
          } else {
            // Merge db updates into DEFAULT_11_STAYS
            const merged = DEFAULT_11_STAYS.map(def => {
              const matched = dbMapped.find(m => m.slug === def.slug || m.name.toLowerCase() === def.name.toLowerCase());
              return matched ? { ...def, ...matched } : def;
            });
            setStaysList(merged);
          }
        }
      })
      .catch(() => {
        // Fallback to default 11 stays on offline
        setStaysList(DEFAULT_11_STAYS);
      });
  }, []);

  const handleReset = () => {
    setDestination('All');
    setCategory('All');
    setMaxPrice(40000);
    setSelectedAmenities([]);
    setSortBy('RECOMMENDED');
  };

  // Filter & Sort Logic
  const filteredStays = staysList
    .filter((stay) => {
      // Destination filter
      if (destination !== 'All') {
        const dQuery = destination.toLowerCase();
        const stayDest = (stay.destination || '').toLowerCase();
        if (!stayDest.includes(dQuery)) return false;
      }

      // Category filter
      if (category !== 'All') {
        const catQuery = category.toUpperCase().replace(/\s+/g, '_');
        const stayType = (stay.type || stay.category || '').toUpperCase();
        if (stayType !== catQuery && !stayType.includes(catQuery)) return false;
      }

      // Price filter
      if (stay.pricePerNight > maxPrice) return false;

      // Amenities filter
      if (selectedAmenities.length > 0) {
        const stayAmens = (stay.amenities || []).map(a => a.toLowerCase());
        const hasAll = selectedAmenities.every(reqAmenity => 
          stayAmens.some(sa => sa.includes(reqAmenity.toLowerCase()))
        );
        if (!hasAll) return false;
      }

      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'LOW_TO_HIGH') return a.pricePerNight - b.pricePerNight;
      if (sortBy === 'HIGH_TO_LOW') return b.pricePerNight - a.pricePerNight;
      if (sortBy === 'RATING') return (b.rating || 0) - (a.rating || 0);
      return 0;
    });

  useEffect(() => {
    if (!gridRef.current || isMapView) return;
    const cards = gridRef.current.querySelectorAll('.stay-card-root');
    if (cards.length > 0) {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.45, stagger: 0.05, ease: 'power2.out',
        }
      );
    }
  }, [destination, category, maxPrice, selectedAmenities, sortBy, isMapView]);

  return (
    <section className="stay-grid-root" id="stays-listing-section">
      <style>{`
        .stay-grid-root {
          max-width: 1380px;
          margin: 0 auto;
          padding: 60px 24px 100px;
        }

        .grid-header {
          text-align: center;
          margin-bottom: 44px;
        }

        .grid-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 800;
          color: #F06543;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          background: #FFF0EB;
          border: 1px solid #FFE0D6;
          padding: 6px 16px;
          border-radius: 30px;
          margin-bottom: 12px;
        }

        .grid-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(34px, 4.5vw, 54px);
          font-weight: 700;
          color: #0B2545;
          margin: 0 0 10px;
          line-height: 1.15;
          letter-spacing: -0.02em;
        }

        .grid-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          color: #64748B;
          max-width: 650px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .main-layout {
          display: grid;
          grid-template-columns: 290px 1fr;
          gap: 32px;
          align-items: start;
        }
        @media (max-width: 1024px) {
          .main-layout {
            grid-template-columns: 1fr;
          }
        }

        .cards-sub-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
          gap: 26px;
        }
        @media (max-width: 680px) {
          .cards-sub-grid {
            grid-template-columns: 1fr;
          }
        }

        .no-results-box {
          background: #ffffff;
          border: 2px dashed #CBD5E1;
          border-radius: 24px;
          padding: 60px 24px;
          text-align: center;
          color: #64748B;
        }
      `}</style>

      {/* Header */}
      <div className="grid-header">
        <div className="grid-eyebrow">
          <Compass size={15} color="#F06543" />
          <span>HANDPICKED LUXURY STAYS</span>
        </div>
        <h2 className="grid-title">EXPLORE ALL ISLAND RETREATS</h2>
        <p className="grid-subtitle">
          Discover handpicked luxury villas, beachfront resorts, eco-wilderness retreats, and boutique hotels across Andaman & Nicobar.
        </p>
      </div>

      <div className="main-layout">
        {/* LEFT SIDEBAR FILTERS */}
        <StayFilters
          destination={destination}
          setDestination={setDestination}
          category={category}
          setCategory={setCategory}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
          selectedAmenities={selectedAmenities}
          setSelectedAmenities={setSelectedAmenities}
          onReset={handleReset}
        />

        {/* RIGHT MAIN LISTING OR MAP */}
        <div style={{ minWidth: 0 }}>
          <StaySort
            sortBy={sortBy}
            setSortBy={setSortBy}
            resultCount={filteredStays.length}
            isMapView={isMapView}
            setIsMapView={setIsMapView}
          />

          {isMapView ? (
            <StayMap stays={filteredStays} onViewStay={onViewStay} />
          ) : (
            <div>
              {filteredStays.length === 0 ? (
                <div className="no-results-box">
                  <AlertCircle size={40} color="#F06543" style={{ margin: '0 auto 16px' }} />
                  <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 22, fontWeight: 800, color: '#0B2545', margin: '0 0 8px' }}>
                    NO STAYS FOUND MATCHING YOUR FILTERS
                  </h3>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: '#64748b', marginBottom: 24, maxWidth: 460, margin: '0 auto 24px' }}>
                    We couldn't find any properties for the selected island or price range. Try expanding your filters.
                  </p>
                  <button 
                    onClick={handleReset} 
                    style={{ 
                      fontFamily: "'Space Grotesk', sans-serif", 
                      fontSize: 13, 
                      fontWeight: 800, 
                      color: '#ffffff', 
                      background: '#0B2545', 
                      border: 'none', 
                      padding: '12px 28px', 
                      borderRadius: 12, 
                      cursor: 'pointer',
                      boxShadow: '0 4px 14px rgba(11, 37, 69, 0.2)'
                    }}
                  >
                    RESET ALL FILTERS
                  </button>
                </div>
              ) : (
                <div ref={gridRef} className="cards-sub-grid">
                  {filteredStays.map((stay, idx) => (
                    <StayCard 
                      key={`${stay.id || 'stay'}-${stay.slug || idx}`} 
                      stay={stay} 
                      onViewStay={onViewStay} 
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
