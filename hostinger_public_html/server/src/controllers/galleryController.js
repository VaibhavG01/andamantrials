import { Gallery } from '../models/index.js';
import { successResponse, errorResponse } from '../utils/apiResponse.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { Op } from 'sequelize';

const DEFAULT_GALLERY_PHOTOS = [
  // BEACHES
  {
    title: 'Radhanagar Beach Sunset',
    location: 'Havelock Island (Swaraj Dweep)',
    category: 'beaches',
    src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=85',
    thumb: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=75',
    span: 'wide',
    isFeatured: true,
    likesCount: 142,
    author: 'Andaman Trails Team',
    status: 'ACTIVE',
  },
  {
    title: 'Neil Island Shoreline',
    location: 'Neil Island (Shaheed Dweep)',
    category: 'beaches',
    src: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=85',
    thumb: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=600&q=75',
    span: 'normal',
    isFeatured: false,
    likesCount: 98,
    author: 'Elena Rostova',
    status: 'ACTIVE',
  },
  {
    title: 'Elephant Beach Turquoise Lagoon',
    location: 'Havelock Island',
    category: 'beaches',
    src: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=85',
    thumb: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=75',
    span: 'normal',
    isFeatured: true,
    likesCount: 124,
    author: 'Karan Mehra',
    status: 'ACTIVE',
  },
  {
    title: 'Kalapathar Beach Sunrise',
    location: 'Havelock Island',
    category: 'beaches',
    src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85',
    thumb: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=75',
    span: 'tall',
    isFeatured: false,
    likesCount: 76,
    author: 'Vikram Sengupta',
    status: 'ACTIVE',
  },

  // UNDERWATER
  {
    title: 'PADI Nemo Reef Coral Dive',
    location: 'Havelock Island',
    category: 'underwater',
    src: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1400&q=85',
    thumb: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=75',
    span: 'tall',
    isFeatured: true,
    likesCount: 289,
    author: 'Chief Divemaster Ryan',
    status: 'ACTIVE',
  },
  {
    title: 'Sea Turtle & Marine Life Exploration',
    location: 'North Bay Island Reef',
    category: 'underwater',
    src: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&w=1200&q=85',
    thumb: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&w=600&q=75',
    span: 'normal',
    isFeatured: true,
    likesCount: 195,
    author: 'Maya Lin',
    status: 'ACTIVE',
  },
  {
    title: 'Jolly Buoy Pristine Reef Snorkeling',
    location: 'Jolly Buoy Island, Wandoor',
    category: 'underwater',
    src: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=1400&q=85',
    thumb: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=600&q=75',
    span: 'wide',
    isFeatured: false,
    likesCount: 162,
    author: 'Samir Pathak',
    status: 'ACTIVE',
  },

  // SUNSETS
  {
    title: 'Golden Hour at Chidiya Tapu Sunset Point',
    location: 'South Andaman, Port Blair',
    category: 'sunsets',
    src: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1400&q=85',
    thumb: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=600&q=75',
    span: 'wide',
    isFeatured: true,
    likesCount: 310,
    author: 'Rohit Verma',
    status: 'ACTIVE',
  },
  {
    title: 'Sunset Catamaran Cruise on Andaman Sea',
    location: 'Port Blair Harbor',
    category: 'sunsets',
    src: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=85',
    thumb: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=75',
    span: 'normal',
    isFeatured: false,
    likesCount: 147,
    author: 'Cruise Captain Anand',
    status: 'ACTIVE',
  },
  {
    title: 'Twilight Reflections over Neil Pier',
    location: 'Neil Island Jetty',
    category: 'sunsets',
    src: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&q=85',
    thumb: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=600&q=75',
    span: 'normal',
    isFeatured: false,
    likesCount: 88,
    author: 'Aarti Desai',
    status: 'ACTIVE',
  },

  // ADVENTURES
  {
    title: 'Night Kayaking through Bioluminescent Mangroves',
    location: 'Havelock Mangrove Creek',
    category: 'adventures',
    src: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=85',
    thumb: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=600&q=75',
    span: 'normal',
    isFeatured: true,
    likesCount: 220,
    author: 'Guide Deven',
    status: 'ACTIVE',
  },
  {
    title: 'Deep Sea Game Fishing & Trolling Safari',
    location: 'Cinque Island Oceanic Waters',
    category: 'adventures',
    src: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=85',
    thumb: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=75',
    span: 'tall',
    isFeatured: false,
    likesCount: 115,
    author: 'Captain Jerry',
    status: 'ACTIVE',
  },
  {
    title: 'Limestone Caves Canopy Trek',
    location: 'Baratang Island',
    category: 'adventures',
    src: 'https://images.unsplash.com/photo-1540202404-d0c7fe46a087?auto=format&fit=crop&w=1400&q=85',
    thumb: 'https://images.unsplash.com/photo-1540202404-d0c7fe46a087?auto=format&fit=crop&w=600&q=75',
    span: 'wide',
    isFeatured: true,
    likesCount: 180,
    author: 'Baratang Forest Guide',
    status: 'ACTIVE',
  },

  // NATURE
  {
    title: 'Natural Coral Bridge Formation',
    location: 'Laxmanpur Beach, Neil Island',
    category: 'nature',
    src: 'https://images.unsplash.com/photo-1559494007-9f5847c49d94?auto=format&fit=crop&w=1200&q=85',
    thumb: 'https://images.unsplash.com/photo-1559494007-9f5847c49d94?auto=format&fit=crop&w=600&q=75',
    span: 'normal',
    isFeatured: false,
    likesCount: 168,
    author: 'Tanvi Shah',
    status: 'ACTIVE',
  },
  {
    title: 'Dense Tropical Mangrove Creek Safari',
    location: 'Middle & North Andaman',
    category: 'nature',
    src: 'https://images.unsplash.com/photo-1474440692490-2e83ae13ba29?auto=format&fit=crop&w=1400&q=85',
    thumb: 'https://images.unsplash.com/photo-1474440692490-2e83ae13ba29?auto=format&fit=crop&w=600&q=75',
    span: 'wide',
    isFeatured: true,
    likesCount: 205,
    author: 'Forest Ranger Ashok',
    status: 'ACTIVE',
  },
  {
    title: 'Mount Harriet Panorama over Ross Island',
    location: 'Mount Manipur National Park',
    category: 'nature',
    src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85',
    thumb: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=75',
    span: 'tall',
    isFeatured: false,
    likesCount: 92,
    author: 'Ananya Roy',
    status: 'ACTIVE',
  },
];

// Ensure table has default seeds
const ensureDefaultSeeds = async () => {
  try {
    const count = await Gallery.count();
    if (count === 0) {
      await Gallery.bulkCreate(DEFAULT_GALLERY_PHOTOS);
    }
  } catch (err) {
    console.warn('Gallery auto-seed warning:', err.message);
  }
};

/**
 * @desc    Get all active gallery photos (with category filter, pagination, etc.)
 * @route   GET /api/v1/gallery
 * @access  Public
 */
export const getGalleryPhotos = asyncHandler(async (req, res) => {
  await ensureDefaultSeeds();

  const { category, featured, limit, status } = req.query;
  const whereClause = {};

  if (status) {
    whereClause.status = status;
  } else {
    whereClause.status = 'ACTIVE';
  }

  if (category && category !== 'all') {
    whereClause.category = category.toLowerCase();
  }

  if (featured === 'true' || featured === true) {
    whereClause.isFeatured = true;
  }

  const queryOptions = {
    where: whereClause,
    order: [
      ['isFeatured', 'DESC'],
      ['sortOrder', 'ASC'],
      ['createdAt', 'DESC'],
    ],
  };

  if (limit) {
    queryOptions.limit = parseInt(limit, 10);
  }

  const photos = await Gallery.findAll(queryOptions);

  return successResponse(res, 'Gallery photos fetched successfully', photos, 200);
});

/**
 * @desc    Get dynamic gallery categories with count
 * @route   GET /api/v1/gallery/categories
 * @access  Public
 */
export const getGalleryCategories = asyncHandler(async (req, res) => {
  await ensureDefaultSeeds();

  const photos = await Gallery.findAll({
    where: { status: 'ACTIVE' },
    attributes: ['category'],
  });

  const categoryCounts = { all: photos.length };
  photos.forEach((p) => {
    const cat = p.category ? p.category.toLowerCase() : 'other';
    categoryCounts[cat] = (categoryCounts[cat] || 0) + 1;
  });

  const categories = Object.keys(categoryCounts).map((cat) => ({
    id: cat,
    label: cat === 'all' ? 'All Photos' : cat.charAt(0).toUpperCase() + cat.slice(1),
    count: categoryCounts[cat],
  }));

  return successResponse(res, 'Gallery categories fetched successfully', categories, 200);
});

/**
 * @desc    Get single photo by ID
 * @route   GET /api/v1/gallery/:id
 * @access  Public
 */
export const getGalleryPhotoById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const photo = await Gallery.findByPk(id);

  if (!photo) {
    return errorResponse(res, 'Photo not found', [], 404);
  }

  return successResponse(res, 'Photo fetched successfully', photo, 200);
});

/**
 * @desc    Like a photo
 * @route   POST /api/v1/gallery/:id/like
 * @access  Public
 */
export const likeGalleryPhoto = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const photo = await Gallery.findByPk(id);

  if (!photo) {
    return errorResponse(res, 'Photo not found', [], 404);
  }

  await photo.increment('likesCount', { by: 1 });
  await photo.reload();

  return successResponse(res, 'Photo liked successfully', { likesCount: photo.likesCount }, 200);
});

/**
 * @desc    Create new gallery photo
 * @route   POST /api/v1/gallery
 * @access  Private / Admin
 */
export const createGalleryPhoto = asyncHandler(async (req, res) => {
  const { title, location, category, src, thumb, span, isFeatured, sortOrder, author, status } = req.body;

  if (!title || !src) {
    return errorResponse(res, 'Title and Image URL (src) are required', [], 400);
  }

  const photo = await Gallery.create({
    title,
    location: location || 'Andaman Islands',
    category: (category || 'beaches').toLowerCase(),
    src,
    thumb: thumb || src,
    span: span || 'normal',
    isFeatured: isFeatured || false,
    sortOrder: sortOrder || 0,
    author: author || (req.user ? `${req.user.firstName || ''} ${req.user.lastName || ''}`.trim() : 'Andaman Trails'),
    status: status || 'ACTIVE',
  });

  return successResponse(res, 'Gallery photo added successfully', photo, 201);
});

/**
 * @desc    Update gallery photo
 * @route   PUT /api/v1/gallery/:id
 * @access  Private / Admin
 */
export const updateGalleryPhoto = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const photo = await Gallery.findByPk(id);

  if (!photo) {
    return errorResponse(res, 'Photo not found', [], 404);
  }

  await photo.update(req.body);
  return successResponse(res, 'Gallery photo updated successfully', photo, 200);
});

/**
 * @desc    Delete gallery photo
 * @route   DELETE /api/v1/gallery/:id
 * @access  Private / Admin
 */
export const deleteGalleryPhoto = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const photo = await Gallery.findByPk(id);

  if (!photo) {
    return errorResponse(res, 'Photo not found', [], 404);
  }

  await photo.destroy();
  return successResponse(res, 'Gallery photo deleted successfully', null, 200);
});
