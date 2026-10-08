import { Op } from 'sequelize';
import { Destination, Stay, Room, Activity, Package, FerryRoute, Ferry, Place, Testimonial } from '../models/index.js';
import { successResponse, errorResponse } from '../utils/apiResponse.js';
import { getPagination, formatPaginationResponse } from '../utils/pagination.js';
import { createSlug } from '../utils/slugify.js';
import { asyncHandler } from '../utils/asyncHandler.js';

export const getDestinations = asyncHandler(async (req, res) => {
  const { all, search } = req.query;
  const { page, limit, offset, sort, order } = getPagination(req.query);

  const whereClause = {};
  if (all !== 'true') {
    whereClause.status = 'ACTIVE';
  }

  if (search) {
    whereClause[Op.or] = [
      { name: { [Op.like]: `%${search}%` } },
      { subtitle: { [Op.like]: `%${search}%` } },
      { region: { [Op.like]: `%${search}%` } },
      { shortDescription: { [Op.like]: `%${search}%` } },
    ];
  }

  const { count, rows } = await Destination.findAndCountAll({
    where: whereClause,
    limit,
    offset,
    order: [[sort || 'id', order || 'ASC']],
  });

  return successResponse(res, 'Destinations fetched successfully', rows, 200, formatPaginationResponse(count, page, limit));
});

// Destination Metadata for enriched facts fallback
const DESTINATION_METADATA = {
  'havelock-island': {
    subtitle: 'Havelock Island (Swaraj Dweep)',
    region: 'South Andaman Archipelago',
    tagline: 'World-Famous White Sand Beaches & Diving Capital',
    rating: 4.9,
    reviewsCount: 420,
    temp: '28°C',
    weather: 'Sunny & Tropical',
    humidity: '74%',
    bestTime: 'October – May',
    ferryTime: '90 min Catamaran from Port Blair',
    startingPrice: '1,499',
    scubaScore: '98%',
    waterTemp: '28°C',
    clarity: 'Crystal (25m+)',
    highlights: [
      {
        title: 'Radhanagar Beach (Beach No. 7)',
        category: 'Beach & Sunset',
        desc: 'World-famous crescent of powdery white sand, turquoise waters, and sensational sunset vistas.',
        image: 'https://images.unsplash.com/photo-1590523741831-ab7e8caa01d5?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Elephant Beach',
        category: 'Water Sports & Coral Reef',
        desc: 'Prime destination for scuba diving, sea walking, and snorkeling over vibrant shallow reefs.',
        image: 'https://images.unsplash.com/photo-1622384742618-b223c6d17df9?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Kalapathar Beach',
        category: 'Scenic Coastal Trail',
        desc: 'Dramatic contrast of black volcanic rocks framing turquoise tides and green forest borders.',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Vijaynagar Beach & Govind Nagar',
        category: 'Sunrise & Solitude',
        desc: 'Gentle morning waves fringed by Mahua trees, ideal for quiet swims and beachfront resort walks.',
        image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },
  'neil-island': {
    subtitle: 'Neil Island (Shaheed Dweep)',
    region: 'South Andaman Archipelago',
    tagline: 'Tranquil Coral Reefs, Organic Farms & Natural Bridges',
    rating: 4.8,
    reviewsCount: 310,
    temp: '29°C',
    weather: 'Tropical Ocean Breeze',
    humidity: '70%',
    bestTime: 'October – May',
    ferryTime: '60 min from Havelock / 2 Hours from Port Blair',
    startingPrice: '1,299',
    scubaScore: '92%',
    waterTemp: '29°C',
    clarity: 'Clear (18m+)',
    highlights: [
      {
        title: 'Bharatpur Beach',
        category: 'Snorkeling & Coral Watching',
        desc: 'Shallow crystal-clear waters perfect for non-swimmers, glass-bottom boat rides, and snorkeling.',
        image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Natural Rock Bridge (Howrah Bridge)',
        category: 'Geological Wonder',
        desc: 'Naturally formed living coral archway accessible during low tide along the rugged coastline.',
        image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Laxmanpur Beach',
        category: 'Sunset Panorama',
        desc: 'Wide shell-strewn beach facing west with spectacular horizon sunsets and triangular spit formations.',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Sitapur Beach',
        category: 'Sunrise & Tide Pools',
        desc: 'Quiet eastern shore with dramatic limestone cliffs, golden sunrises, and exposed tide pools at low tide.',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },
  'port-blair': {
    subtitle: 'Port Blair (Sri Vijaya Puram)',
    region: 'South Andaman Archipelago',
    tagline: 'Capital Gateway, Historic Monuments & Coastal Splendour',
    rating: 4.8,
    reviewsCount: 580,
    temp: '29°C',
    weather: 'Maritime Sunshine',
    humidity: '76%',
    bestTime: 'October – May',
    ferryTime: 'Central Hub — Harbors connect to all islands',
    startingPrice: '999',
    scubaScore: '85%',
    waterTemp: '28°C',
    clarity: 'Good (15m+)',
    highlights: [
      {
        title: 'Cellular Jail National Memorial',
        category: 'Heritage & History',
        desc: 'Colonial prison monument commemorating India freedom struggle, with captivating evening light shows.',
        image: 'https://images.unsplash.com/photo-1578895101408-1a36b834405b?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Ross Island (Netaji Subhash Chandra Bose Dweep)',
        category: 'Heritage Island & Wildlife',
        desc: 'Historic ruins entwined with ancient Banyan roots, friendly spotted deer, and scenic peacocks.',
        image: 'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: "Corbyn's Cove Beach",
        category: 'Coastal Water Sports',
        desc: 'Coconut-palm fringed crescent bay offering jet skiing, parasailing, speed boats, and seaside cafes.',
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Chidiya Tapu & Sunset Point',
        category: 'Birdwatching & Sunset Trek',
        desc: 'Lush evergreen forests renowned for endemic tropical birds and panoramic orange-hued sunsets.',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },
  'baratang-island': {
    subtitle: 'Baratang Island',
    region: 'Middle Andaman',
    tagline: 'Limestone Caves, Mangrove Creeks & Mud Volcanoes',
    rating: 4.7,
    reviewsCount: 190,
    temp: '30°C',
    weather: 'Tropical Rainforest',
    humidity: '78%',
    bestTime: 'October – April',
    ferryTime: '3 Hours Scenic Road & Ferry from Port Blair',
    startingPrice: '2,499',
    scubaScore: 'N/A',
    waterTemp: '28°C',
    clarity: 'Rainforest River Creeks',
    highlights: [
      {
        title: 'Limestone Caves',
        category: 'Geological Wonder',
        desc: 'Magnificent stalactites and stalagmites formed over millions of years inside dense mangrove forests.',
        image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Mangrove Safari Boats',
        category: 'Nature & River Safari',
        desc: 'Speedboat cruise navigating through narrow natural mangrove tunnels with unique biodiversity.',
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },
  'great-nicobar': {
    subtitle: 'Great Nicobar Island',
    region: 'Nicobar Archipelago',
    tagline: 'Indira Point, Galathea National Park & UNESCO Biosphere',
    rating: 4.9,
    reviewsCount: 88,
    temp: '29°C',
    weather: 'Equatorial Rainforest Breeze',
    humidity: '82%',
    bestTime: 'November – April',
    ferryTime: 'Direct Passenger Ships & Helicopter Sorties from Port Blair',
    startingPrice: '5,500',
    scubaScore: '99%',
    waterTemp: '29°C',
    clarity: 'Pristine Untouched (30m+)',
    highlights: [
      {
        title: "Indira Point (India's Southernmost Tip)",
        category: 'Geographical Milestone',
        desc: 'Historic lighthouse marking the southernmost point of the Indian republic overlooking the Great Channel & Malacca Strait.',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Galathea National Park & River Safari',
        category: 'UNESCO Biosphere Reserve',
        desc: 'Untouched virgin rainforest home to Nicobar Megapode birds, giant robber crabs, and saltwater crocodiles.',
        image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Campbell Bay & Coral Lagoon',
        category: 'Coastal Gateway & Port',
        desc: 'The principal administrative and harbor settlement surrounded by untouched beaches and lush evergreen hills.',
        image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Giant Leatherback Turtle Sanctuary',
        category: 'Wildlife & Marine Ecology',
        desc: 'World-renowned nesting shorelines for the world’s largest marine turtles under protected starlit coasts.',
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },
};

export const getDestinationBySlug = asyncHandler(async (req, res) => {
  const { slug } = req.params;

  let destination = null;
  if (!isNaN(slug)) {
    destination = await Destination.findByPk(Number(slug));
  }

  if (!destination) {
    destination = await Destination.findOne({
      where: {
        [Op.or]: [
          { slug },
          { name: { [Op.like]: `%${slug.replace(/-/g, ' ')}%` } },
        ],
      },
    });
  }

  if (!destination) {
    return errorResponse(res, 'Destination not found', [], 404);
  }

  const slugKey = destination.slug.toLowerCase();
  const keyword = destination.name.split(' ')[0];

  let stays = [];
  let activities = [];
  let packages = [];
  let places = [];
  let ferryRoutes = [];
  let reviews = [];

  try {
    const results = await Promise.allSettled([
      // Stays
      Stay.findAll({
        where: {
          [Op.or]: [
            { destinationId: destination.id },
            { name: { [Op.like]: `%${keyword}%` } },
            { shortDescription: { [Op.like]: `%${keyword}%` } },
          ],
          status: 'ACTIVE',
        },
        include: [{ model: Room, as: 'rooms' }],
        limit: 8,
      }),

      // Activities
      Activity.findAll({
        where: {
          [Op.or]: [
            { location: { [Op.like]: `%${keyword}%` } },
            { name: { [Op.like]: `%${keyword}%` } },
            { title: { [Op.like]: `%${keyword}%` } },
          ],
        },
        limit: 8,
      }),

      // Packages
      Package.findAll({
        where: {
          [Op.or]: [
            { destinations: { [Op.like]: `%${keyword}%` } },
            { name: { [Op.like]: `%${keyword}%` } },
            { description: { [Op.like]: `%${keyword}%` } },
          ],
          status: 'ACTIVE',
        },
        limit: 8,
      }),

      // Places
      Place.findAll({
        where: {
          [Op.or]: [
            { island: { [Op.like]: `%${keyword}%` } },
            { name: { [Op.like]: `%${keyword}%` } },
            { description: { [Op.like]: `%${keyword}%` } },
          ],
          status: 'ACTIVE',
        },
        limit: 8,
      }),

      // Ferry Routes
      FerryRoute.findAll({
        where: {
          [Op.or]: [
            { fromDestinationId: destination.id },
            { toDestinationId: destination.id },
          ],
          status: 'ACTIVE',
        },
        include: [
          { model: Ferry, as: 'ferry' },
          { model: Destination, as: 'fromDestination' },
          { model: Destination, as: 'toDestination' },
        ],
        limit: 6,
      }),

      // Testimonials / Reviews
      Testimonial.findAll({
        where: {
          [Op.or]: [
            { destinations: { [Op.like]: `%${keyword}%` } },
            { tripType: { [Op.like]: `%${keyword}%` } },
            { quote: { [Op.like]: `%${keyword}%` } },
          ],
          status: 'ACTIVE',
        },
        limit: 4,
      }),
    ]);

    if (results[0].status === 'fulfilled' && results[0].value) stays = results[0].value;
    if (results[1].status === 'fulfilled' && results[1].value) activities = results[1].value;
    if (results[2].status === 'fulfilled' && results[2].value) packages = results[2].value;
    if (results[3].status === 'fulfilled' && results[3].value) places = results[3].value;
    if (results[4].status === 'fulfilled' && results[4].value) ferryRoutes = results[4].value;
    if (results[5].status === 'fulfilled' && results[5].value) reviews = results[5].value;
  } catch (err) {
    console.error('Non-blocking error fetching related destination data:', err);
  }

  // Enriched metadata facts
  const meta = DESTINATION_METADATA[slugKey] ||
    DESTINATION_METADATA[`${slugKey}-island`] ||
    DESTINATION_METADATA[slugKey.replace('-island', '')] ||
    DESTINATION_METADATA['havelock-island'];

  const rawGallery = destination.gallery;
  let gallery = [];
  if (Array.isArray(rawGallery)) {
    gallery = rawGallery;
  } else if (typeof rawGallery === 'string') {
    try {
      gallery = JSON.parse(rawGallery);
    } catch {
      gallery = rawGallery.split(',').map(s => s.trim()).filter(Boolean);
    }
  }

  const rawHighlights = (destination.highlights && destination.highlights.length > 0)
    ? destination.highlights
    : (meta.highlights || []);

  const rawStays = Array.isArray(destination.stays) 
    ? destination.stays 
    : (typeof destination.stays === 'string' ? JSON.parse(destination.stays || '[]') : []);
  
  const rawPackages = Array.isArray(destination.packages)
    ? destination.packages
    : (typeof destination.packages === 'string' ? JSON.parse(destination.packages || '[]') : []);

  // Merge custom handpicked stays with database queried stays
  const finalStays = rawStays.length > 0 
    ? [...rawStays, ...stays.filter(s => !rawStays.some(rs => (rs.id && rs.id === s.id) || rs.name === s.name))]
    : stays;

  // Merge custom handpicked packages with database queried packages
  const finalPackages = rawPackages.length > 0
    ? [...rawPackages, ...packages.filter(p => !rawPackages.some(rp => (rp.id && rp.id === p.id) || rp.name === p.name))]
    : packages;

  const enrichedData = {
    ...destination.toJSON(),
    gallery,
    subtitle: destination.subtitle || meta.subtitle || destination.name,
    region: destination.region || meta.region || 'Andaman Archipelago',
    tagline: destination.tagline || meta.tagline || destination.shortDescription || 'Pristine Island Paradise',
    rating: Number(destination.rating) || meta.rating || 4.8,
    reviewsCount: Number(destination.reviewsCount) || meta.reviewsCount || 250,
    temp: destination.temp || meta.temp || '28°C',
    weather: destination.weatherInfo || meta.weather || 'Sunny & Tropical',
    humidity: destination.humidity || meta.humidity || '74%',
    bestTime: destination.bestTimeToVisit || meta.bestTime || 'October – May',
    ferryTime: destination.howToReach || meta.ferryTime || 'Fast Ferry from Port Blair',
    startingPrice: destination.startingPrice || meta.startingPrice || '1,499',
    scubaScore: destination.scubaScore || meta.scubaScore || '95%',
    waterTemp: destination.waterTemp || meta.waterTemp || '28°C',
    clarity: destination.clarity || meta.clarity || 'Crystal Clear (20m+)',
    highlights: rawHighlights,
    stays: finalStays || [],
    activities: activities || [],
    packages: finalPackages || [],
    places: places || [],
    ferryRoutes: ferryRoutes || [],
    reviews: reviews || [],
    stayCount: finalStays.length > 0 ? finalStays.length : 12,
    activityCount: activities.length > 0 ? activities.length : 8,
    packagesCount: finalPackages.length > 0 ? finalPackages.length : 5,
  };

  return successResponse(res, 'Destination details fetched successfully', enrichedData);
});

export const createDestination = asyncHandler(async (req, res) => {
  const data = { ...req.body };

  if (!data.name) {
    return errorResponse(res, 'Destination name is required', [], 400);
  }

  if (!data.slug) {
    data.slug = createSlug(data.name);
  }

  const existing = await Destination.findOne({ where: { slug: data.slug } });
  if (existing) {
    data.slug = `${data.slug}-${Date.now()}`;
  }

  // Normalize gallery if sent as comma-delimited string
  if (typeof data.gallery === 'string') {
    try {
      data.gallery = JSON.parse(data.gallery);
    } catch {
      data.gallery = data.gallery.split(',').map(s => s.trim()).filter(Boolean);
    }
  }

  // Normalize stays if string
  if (typeof data.stays === 'string') {
    try {
      data.stays = JSON.parse(data.stays);
    } catch {
      data.stays = [];
    }
  }

  // Normalize packages if string
  if (typeof data.packages === 'string') {
    try {
      data.packages = JSON.parse(data.packages);
    } catch {
      data.packages = [];
    }
  }

  const destination = await Destination.create(data);
  return successResponse(res, 'Destination created successfully', destination, 201);
});

export const updateDestination = asyncHandler(async (req, res) => {
  const destination = await Destination.findByPk(req.params.id);
  if (!destination) {
    return errorResponse(res, 'Destination not found', [], 404);
  }

  const data = { ...req.body };

  if (data.name && !data.slug) {
    data.slug = createSlug(data.name);
  }

  // Normalize gallery
  if (typeof data.gallery === 'string') {
    try {
      data.gallery = JSON.parse(data.gallery);
    } catch {
      data.gallery = data.gallery.split(',').map(s => s.trim()).filter(Boolean);
    }
  }

  // Normalize stays if string
  if (typeof data.stays === 'string') {
    try {
      data.stays = JSON.parse(data.stays);
    } catch {
      data.stays = [];
    }
  }

  // Normalize packages if string
  if (typeof data.packages === 'string') {
    try {
      data.packages = JSON.parse(data.packages);
    } catch {
      data.packages = [];
    }
  }

  await destination.update(data);
  return successResponse(res, 'Destination updated successfully', destination, 200);
});

export const deleteDestination = asyncHandler(async (req, res) => {
  const destination = await Destination.findByPk(req.params.id);
  if (!destination) {
    return errorResponse(res, 'Destination not found', [], 404);
  }
  await destination.destroy();
  return successResponse(res, 'Destination deleted successfully', null, 200);
});
