import { Stay, Room, Destination, Booking } from '../models/index.js';
import { connectDatabase } from '../config/database.js';
import { logger } from '../utils/logger.js';

const run = async () => {
  try {
    await connectDatabase();
    logger.info('Starting manual synchronization and seeding of all 6 Stays & Room categories...');

    // Clear old test stays & rooms to avoid duplicates
    // But wait, there might be foreign key bookings! So we destroy booking entries referencing stays first.
    await Booking.destroy({ where: { bookingType: 'STAY' } });
    await Room.destroy({ where: {} });
    await Stay.destroy({ where: {} });

    // Fetch Swaraj Dweep (Havelock) and Shaheed Dweep (Neil) destinations
    const destHavelock = await Destination.findOne({ where: { slug: 'havelock-island' } });
    const destNeil = await Destination.findOne({ where: { slug: 'neil-island' } });

    if (!destHavelock || !destNeil) {
      logger.error('Failed to locate Havelock or Neil Island destination IDs!');
      process.exit(1);
    }

    // 1. Taj Exotica Resort & Spa
    const stayTaj = await Stay.create({
      name: 'Taj Exotica Resort & Spa',
      slug: 'taj-exotica-resort-spa',
      type: 'LUXURY_VILLA',
      destinationId: destHavelock.id,
      shortDescription: 'Occupying 46 acres of lush rainforest along Radhanagar Beach, Taj Exotica offers eco-luxury villas with private pools.',
      description: 'Set amidst 46 acres of coconut groves and rainforest on Radhanagar Beach, Taj Exotica Resort & Spa is the pinnacle of luxury hospitality in the Andaman Islands.',
      heroImage: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=85',
      gallery: [
        'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&w=800&q=80',
      ],
      rating: 4.9,
      reviewCount: 128,
      pricePerNight: 32000.00,
      guestCapacity: 4,
      latitude: 11.9833,
      longitude: 92.9500,
      featured: true,
      status: 'ACTIVE',
    });

    await Room.create({
      stayId: stayTaj.id,
      name: 'Grand Deluxe Ocean Villa',
      description: '1580 sq ft luxury villa with private timber deck and garden view.',
      capacity: 4,
      price: 32000.00,
      availableRooms: 5,
      amenities: ['Private Pool', 'Air Conditioning', 'Free Wi-Fi', 'Butler Service'],
      image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80'
    });

    await Room.create({
      stayId: stayTaj.id,
      name: 'Premium Beach Villa',
      description: 'Luxury villa with direct private access to Radhanagar beach deck and high capacity pool.',
      capacity: 4,
      price: 45000.00,
      availableRooms: 3,
      amenities: ['Private Beach Access', 'Private Pool', 'Air Conditioning', 'Free Wi-Fi'],
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80'
    });


    // 2. Barefoot at Havelock
    const stayBarefoot = await Stay.create({
      name: 'Barefoot at Havelock',
      slug: 'barefoot-at-havelock',
      type: 'BOUTIQUE_RESORT',
      destinationId: destHavelock.id,
      shortDescription: 'Eco-chic luxury wooden cottages nestled beside Radhanagar Beach.',
      description: 'Set amidst tropical rainforest and steps away from turquoise waters, Barefoot offers unpretentious luxury and a rustic eco-friendly environment.',
      heroImage: 'https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&w=1200&q=85',
      rating: 4.8,
      reviewCount: 94,
      pricePerNight: 18500.00,
      guestCapacity: 3,
      latitude: 11.9700,
      longitude: 92.9800,
      featured: true,
      status: 'ACTIVE',
    });

    await Room.create({
      stayId: stayBarefoot.id,
      name: 'Nicobari Villa Cottage',
      description: 'Handcrafted wooden villa featuring king bed, open-air bathroom, and forest veranda.',
      capacity: 2,
      price: 18500.00,
      availableRooms: 8,
      amenities: ['Air Conditioning', 'Free Wi-Fi', 'Breakfast Included'],
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80'
    });

    await Room.create({
      stayId: stayBarefoot.id,
      name: 'Andaman Villa Wood Cabin',
      description: 'Spacious cottage built in local style with premium teak wood and private backyard terrace.',
      capacity: 3,
      price: 24000.00,
      availableRooms: 4,
      amenities: ['Air Conditioning', 'Free Wi-Fi', 'Hot Tub', 'Breakfast Included'],
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=600&q=80'
    });


    // 3. SeaShell Havelock
    const staySeaShell = await Stay.create({
      name: 'SeaShell Havelock',
      slug: 'seashell-havelock',
      type: 'BEACH_RESORT',
      destinationId: destHavelock.id,
      shortDescription: 'Modern luxury resort overlooking Govind Nagar beach.',
      description: 'Combining premium amenities, seaside dine-out bars and luxury spa treatment on Havelock island.',
      heroImage: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80',
      rating: 4.8,
      reviewCount: 75,
      pricePerNight: 11200.00,
      guestCapacity: 2,
      latitude: 11.9610,
      longitude: 92.9910,
      featured: false,
      status: 'ACTIVE'
    });

    await Room.create({
      stayId: staySeaShell.id,
      name: 'Chalet Lagoon View',
      description: 'Wooden resort chalet with balcony views overlooking the blue ocean lagoon.',
      capacity: 2,
      price: 11200.00,
      availableRooms: 10,
      amenities: ['Ocean View', 'Air Conditioning', 'Free Wi-Fi', 'Mini Bar'],
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80'
    });


    // 4. Symphony Palms Beach Resort
    const staySymphony = await Stay.create({
      name: 'Symphony Palms Beach Resort',
      slug: 'symphony-palms-resort',
      type: 'ECO_LODGE',
      destinationId: destHavelock.id,
      shortDescription: 'Unwind amidst palm-fringed private shores and nature walks.',
      description: 'Quiet beachfront cottages located right next to clear waters, perfect for families and couples.',
      heroImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
      rating: 4.6,
      reviewCount: 62,
      pricePerNight: 8900.00,
      guestCapacity: 2,
      latitude: 11.9600,
      longitude: 92.9900,
      featured: false,
      status: 'ACTIVE'
    });

    await Room.create({
      stayId: staySymphony.id,
      name: 'Casa Tropical Cottage',
      description: 'Rustic eco-cottage with tropical garden layout and warm beach vibes.',
      capacity: 2,
      price: 8900.00,
      availableRooms: 12,
      amenities: ['Garden View', 'Air Conditioning', 'Free Wi-Fi'],
      image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80'
    });


    // 5. Summer Sands Beach Resort
    const staySummerSands = await Stay.create({
      name: 'Summer Sands Beach Resort',
      slug: 'summer-sands-resort',
      type: 'BOUTIQUE_RESORT',
      destinationId: destNeil.id,
      shortDescription: 'Elegant oasis featuring expansive swimming pools and chic styling.',
      description: 'Unwind at our stylish boutique beach resort with premium room suites, outdoor pools, and dining options.',
      heroImage: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80',
      rating: 4.7,
      reviewCount: 48,
      pricePerNight: 9500.00,
      guestCapacity: 3,
      latitude: 11.8340,
      longitude: 93.0550,
      featured: false,
      status: 'ACTIVE'
    });

    await Room.create({
      stayId: staySummerSands.id,
      name: 'Casa Del Sol Room',
      description: 'Elegant pool-facing boutique room with deluxe bathroom amenities.',
      capacity: 3,
      price: 9500.00,
      availableRooms: 8,
      amenities: ['Pool Facing', 'Air Conditioning', 'Free Wi-Fi', 'Hot Tub'],
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80'
    });


    // 6. Munjoh Ocean Resort
    const stayMunjoh = await Stay.create({
      name: 'Munjoh Ocean Resort',
      slug: 'munjoh-ocean-resort',
      type: 'LUXURY_VILLA',
      destinationId: destHavelock.id,
      shortDescription: 'Premium ocean-facing villas offering unparalleled solitude.',
      description: 'Tucked away in coco groves and pristine shores, Munjoh offers luxury seaside villas with curated personalized service.',
      heroImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
      rating: 4.8,
      reviewCount: 52,
      pricePerNight: 16500.00,
      guestCapacity: 4,
      latitude: 11.9650,
      longitude: 92.9850,
      featured: true,
      status: 'ACTIVE'
    });

    await Room.create({
      stayId: stayMunjoh.id,
      name: 'Ocean View Villa',
      description: 'Luxury multi-room villa overlooking beach no. 5 with glass walls.',
      capacity: 4,
      price: 16500.00,
      availableRooms: 6,
      amenities: ['Ocean View', 'Air Conditioning', 'Free Wi-Fi', 'Kitchenette'],
      image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80'
    });

    // Fetch all destination records
    const destPortBlair = await Destination.findOne({ where: { slug: 'port-blair' } });
    const destBaratang = await Destination.findOne({ where: { slug: 'baratang-island' } });
    const destDiglipur = await Destination.findOne({ where: { slug: 'diglipur' } });
    const destNicobar = await Destination.findOne({ where: { slug: 'great-nicobar' } });

    // 7. Welcomhotel by ITC Hotels Bay Island, Port Blair
    if (destPortBlair) {
      const stayITC = await Stay.create({
        name: 'Welcomhotel by ITC Hotels, Bay Island',
        slug: 'welcomhotel-bay-island-port-blair',
        type: 'HERITAGE_HOTEL',
        destinationId: destPortBlair.id,
        shortDescription: 'Perched on a cliff overlooking the azure Bay of Bengal, built with native Padauk wood.',
        description: 'Designed by visionary architect Charles Correa using indigenous timber, Welcomhotel Bay Island overlooks the Andaman Sea with luxury dining, swimming pool, and harbor views.',
        heroImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85',
        gallery: [
          'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80'
        ],
        rating: 4.8,
        reviewCount: 215,
        pricePerNight: 14500.00,
        guestCapacity: 4,
        latitude: 11.6667,
        longitude: 92.7431,
        featured: true,
        status: 'ACTIVE'
      });

      await Room.create({
        stayId: stayITC.id,
        name: 'Sea Facing Deluxe Room',
        description: 'Deluxe Padauk timber room with panoramic views of the harbor and Ross Island.',
        capacity: 3,
        price: 14500.00,
        availableRooms: 10,
        amenities: ['Sea View', 'Air Conditioning', 'Free Wi-Fi', 'Breakfast Included'],
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80'
      });
    }

    // 8. Symphony Samudra Beachside Jungle Resort, Port Blair
    if (destPortBlair) {
      const staySamudra = await Stay.create({
        name: 'Symphony Samudra Beachside Jungle Resort',
        slug: 'symphony-samudra-port-blair',
        type: 'LUXURY_VILLA',
        destinationId: destPortBlair.id,
        shortDescription: 'Nestled between Chidiyatapu rainforest and ocean shores with infinity sunset pool.',
        description: 'Symphony Samudra offers an unforgettable blend of lush tropical jungle retreats and oceanfront serenity near Chidiyatapu.',
        heroImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85',
        rating: 4.9,
        reviewCount: 180,
        pricePerNight: 12800.00,
        guestCapacity: 4,
        latitude: 11.5050,
        longitude: 92.7050,
        featured: true,
        status: 'ACTIVE'
      });

      await Room.create({
        stayId: staySamudra.id,
        name: 'Sky Villa with Plunge Pool',
        description: 'Elevated luxury villa with private plunge pool and forest canopy view.',
        capacity: 4,
        price: 19500.00,
        availableRooms: 6,
        amenities: ['Private Pool', 'Air Conditioning', 'Free Wi-Fi', 'Spa Access'],
        image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80'
      });
    }

    // 9. Dew Dale Eco Resort, Baratang Island
    if (destBaratang) {
      const stayDewDale = await Stay.create({
        name: 'Dew Dale Eco Resort',
        slug: 'dew-dale-resort-baratang',
        type: 'ECO_LODGE',
        destinationId: destBaratang.id,
        shortDescription: 'Peaceful rural eco-resort surrounded by mangrove waterways and tribal forests.',
        description: 'The premier stay option on Baratang Island, offering rustic cottages, organic farm dining, and easy access to limestone caves.',
        heroImage: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=85',
        rating: 4.5,
        reviewCount: 65,
        pricePerNight: 4500.00,
        guestCapacity: 3,
        latitude: 12.1200,
        longitude: 92.7800,
        featured: false,
        status: 'ACTIVE'
      });

      await Room.create({
        stayId: stayDewDale.id,
        name: 'Rural Eco Cottage',
        description: 'Eco-friendly wooden cottage with comfortable beds and farm fresh meals.',
        capacity: 3,
        price: 4500.00,
        availableRooms: 8,
        amenities: ['Eco Friendly', 'Air Conditioning', 'Free Wi-Fi', 'Guided Cave Tour'],
        image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80'
      });
    }

    // 10. Pristine Beach Resort, Diglipur
    if (destDiglipur) {
      const stayPristine = await Stay.create({
        name: 'Pristine Beach Resort',
        slug: 'pristine-beach-resort-diglipur',
        type: 'ECO_LODGE',
        destinationId: destDiglipur.id,
        shortDescription: 'Eco-cottages on Kalipur Beach, famous for sea turtle nesting and Ross & Smith trips.',
        description: 'Situated right along Kalipur beach in North Andaman, ideal for climbing Saddle Peak, seeing turtle hatchlings, and sandbar walks.',
        heroImage: 'https://images.unsplash.com/photo-1610014766858-69315bc32b4f?auto=format&fit=crop&w=1200&q=85',
        rating: 4.6,
        reviewCount: 88,
        pricePerNight: 3800.00,
        guestCapacity: 3,
        latitude: 13.2300,
        longitude: 93.0400,
        featured: true,
        status: 'ACTIVE'
      });

      await Room.create({
        stayId: stayPristine.id,
        name: 'Beachfront Wooden Chalet',
        description: 'Rustic wooden chalet steps from the turtle nesting shoreline.',
        capacity: 3,
        price: 3800.00,
        availableRooms: 12,
        amenities: ['Beach Access', 'Fan / AC', 'Free Wi-Fi', 'Turtle Tours'],
        image: 'https://images.unsplash.com/photo-1610014766858-69315bc32b4f?auto=format&fit=crop&w=600&q=80'
      });
    }

    // 11. Great Nicobar Eco Wilderness Lodge, Great Nicobar
    if (destNicobar) {
      const stayNicobar = await Stay.create({
        name: 'Great Nicobar Eco Wilderness Lodge',
        slug: 'great-nicobar-eco-lodge',
        type: 'ECO_LODGE',
        destinationId: destNicobar.id,
        shortDescription: 'Exclusive biosphere reserve eco-lodge near Campbell Bay and Galathea National Park.',
        description: 'Experience untouched biodiversity, rare endemic wildlife, and southernmost frontier hospitality at our eco lodge.',
        heroImage: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=85',
        rating: 4.7,
        reviewCount: 42,
        pricePerNight: 5500.00,
        guestCapacity: 2,
        latitude: 7.0000,
        longitude: 93.8000,
        featured: false,
        status: 'ACTIVE'
      });

      await Room.create({
        stayId: stayNicobar.id,
        name: 'Biosphere Jungle Suite',
        description: 'Eco-suite with views of Galathea rainforest and ocean coast.',
        capacity: 2,
        price: 5500.00,
        availableRooms: 5,
        amenities: ['Forest View', 'Permit Assistance', 'All Meals Included'],
        image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=600&q=80'
      });
    }

    logger.info('✅ Seeded all Stays & Room categories across all destinations successfully!');
    process.exit(0);
  } catch (err) {
    logger.error('Failed seeding Stays and Rooms data:', err);
    process.exit(1);
  }
};

run();
