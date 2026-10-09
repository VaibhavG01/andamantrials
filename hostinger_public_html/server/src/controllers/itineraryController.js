import { Itinerary, ItineraryDay, ItineraryActivity, ItineraryMeal, sequelize } from '../models/index.js';
import { successResponse, errorResponse } from '../utils/apiResponse.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { createSlug } from '../utils/slugify.js';
import { Op } from 'sequelize';

// Public GET list (Only PUBLISHED itineraries unless user is admin/editor or ?all=true)
export const getItineraries = asyncHandler(async (req, res) => {
  const isAuthAdmin = req.user && (req.user.role === 'ADMIN' || req.user.role === 'EDITOR');
  const { all, search } = req.query;
  const whereClause = (isAuthAdmin || all === 'true') ? {} : { status: 'PUBLISHED' };

  if (search) {
    whereClause[Op.or] = [
      { title: { [Op.like]: `%${search}%` } },
      { description: { [Op.like]: `%${search}%` } },
      { destinations: { [Op.like]: `%${search}%` } },
      { theme: { [Op.like]: `%${search}%` } },
    ];
  }

  const itineraries = await Itinerary.findAll({
    where: whereClause,
    include: [{
      model: ItineraryDay,
      as: 'days',
      include: [
        { model: ItineraryActivity, as: 'activities' },
        { model: ItineraryMeal, as: 'meals' }
      ]
    }],
    order: [
      ['id', 'DESC'],
      [{ model: ItineraryDay, as: 'days' }, 'day_number', 'ASC']
    ]
  });

  const formatted = itineraries.map(itinerary => {
    let gallery = itinerary.gallery || [];
    if (typeof gallery === 'string') {
      try { gallery = JSON.parse(gallery); } catch { gallery = [gallery]; }
    }
    return {
      id: itinerary.id,
      title: itinerary.title,
      slug: itinerary.slug,
      description: itinerary.description,
      duration: `${itinerary.durationDays} Days / ${itinerary.durationNights} Nights`,
      durationDays: itinerary.durationDays,
      durationNights: itinerary.durationNights,
      coverImage: itinerary.coverImage || itinerary.heroImage,
      heroImage: itinerary.heroImage || itinerary.coverImage,
      gallery,
      price: itinerary.price,
      originalPrice: itinerary.originalPrice,
      destinations: itinerary.destinations,
      theme: itinerary.theme,
      highlights: itinerary.highlights || [],
      inclusions: itinerary.inclusions || [],
      exclusions: itinerary.exclusions || [],
      status: itinerary.status,
      days: (itinerary.days || []).map(d => ({
        id: d.id,
        day: d.dayNumber,
        dayNumber: d.dayNumber,
        date: d.date,
        location: d.location,
        title: d.title,
        description: d.description,
        accommodation: d.accommodation,
        transport: d.transport,
        image: d.image,
        activities: (d.activities || []).map(act => ({
          id: act.id,
          activity: act.activity,
          description: act.description,
          time: act.time,
          duration: act.duration
        })),
        meals: (d.meals || []).map(m => m.mealType)
      }))
    };
  });

  return successResponse(res, 'Itineraries fetched successfully', formatted, 200);
});

// Public GET detailed itinerary by ID or Slug
export const getItineraryById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const whereClause = isNaN(id) ? { slug: id } : { [Op.or]: [{ id: Number(id) }, { slug: id }] };

  const itinerary = await Itinerary.findOne({
    where: whereClause,
    include: [{
      model: ItineraryDay,
      as: 'days',
      include: [
        { model: ItineraryActivity, as: 'activities' },
        { model: ItineraryMeal, as: 'meals' }
      ]
    }],
    order: [
      [{ model: ItineraryDay, as: 'days' }, 'day_number', 'ASC']
    ]
  });

  if (!itinerary) {
    return errorResponse(res, 'Itinerary not found', [], 404);
  }

  let gallery = itinerary.gallery || [];
  if (typeof gallery === 'string') {
    try { gallery = JSON.parse(gallery); } catch { gallery = [gallery]; }
  }

  // Format response structure
  const formatted = {
    id: itinerary.id,
    title: itinerary.title,
    slug: itinerary.slug,
    description: itinerary.description,
    duration: `${itinerary.durationDays} Days / ${itinerary.durationNights} Nights`,
    durationDays: itinerary.durationDays,
    durationNights: itinerary.durationNights,
    coverImage: itinerary.coverImage || itinerary.heroImage,
    heroImage: itinerary.heroImage || itinerary.coverImage,
    gallery,
    price: itinerary.price,
    originalPrice: itinerary.originalPrice,
    destinations: itinerary.destinations,
    theme: itinerary.theme,
    highlights: itinerary.highlights || [],
    inclusions: itinerary.inclusions || [],
    exclusions: itinerary.exclusions || [],
    status: itinerary.status,
    days: (itinerary.days || []).map(d => ({
      id: d.id,
      day: d.dayNumber,
      dayNumber: d.dayNumber,
      date: d.date,
      location: d.location,
      title: d.title,
      description: d.description,
      accommodation: d.accommodation,
      transport: d.transport,
      image: d.image,
      activities: (d.activities || []).map(act => ({
        id: act.id,
        activity: act.activity,
        description: act.description,
        time: act.time,
        duration: act.duration
      })),
      meals: (d.meals || []).map(m => m.mealType)
    }))
  };

  return successResponse(res, 'Itinerary details fetched successfully', formatted, 200);
});

// Admin: Create Itinerary with optional nested days, activities, meals, and multi-image gallery
export const createItinerary = asyncHandler(async (req, res) => {
  const transaction = await sequelize.transaction();
  try {
    const {
      title, slug, description, durationDays, durationNights,
      coverImage, heroImage, gallery, price, originalPrice,
      destinations, theme, highlights, inclusions, exclusions,
      status, days
    } = req.body;

    if (!title) {
      await transaction.rollback();
      return errorResponse(res, 'Itinerary title is required', [], 400);
    }

    const finalSlug = slug || createSlug(title);
    const existing = await Itinerary.findOne({ where: { slug: finalSlug }, transaction });
    const uniqueSlug = existing ? `${finalSlug}-${Date.now()}` : finalSlug;

    // Normalize gallery & JSON fields
    let normGallery = gallery || [];
    if (typeof normGallery === 'string') {
      try { normGallery = JSON.parse(normGallery); } catch { normGallery = normGallery.split(',').map(s => s.trim()).filter(Boolean); }
    }

    const itinerary = await Itinerary.create({
      title,
      slug: uniqueSlug,
      description,
      durationDays: parseInt(durationDays, 10) || (days && days.length > 0 ? days.length : 5),
      durationNights: parseInt(durationNights, 10) || Math.max(0, (parseInt(durationDays, 10) || 5) - 1),
      coverImage: coverImage || heroImage,
      heroImage: heroImage || coverImage,
      gallery: normGallery,
      price: price ? parseFloat(price) : null,
      originalPrice: originalPrice ? parseFloat(originalPrice) : null,
      destinations,
      theme,
      highlights: highlights || [],
      inclusions: inclusions || [],
      exclusions: exclusions || [],
      status: status || 'PUBLISHED'
    }, { transaction });

    // If nested days provided, create them
    if (days && Array.isArray(days) && days.length > 0) {
      for (let i = 0; i < days.length; i++) {
        const d = days[i];
        const dayRecord = await ItineraryDay.create({
          itineraryId: itinerary.id,
          dayNumber: parseInt(d.dayNumber || d.day || (i + 1), 10),
          date: d.date || null,
          location: d.location || '',
          title: d.title || `Day ${i + 1}`,
          description: d.description || '',
          accommodation: d.accommodation || '',
          transport: d.transport || '',
          image: d.image || null,
        }, { transaction });

        if (d.activities && Array.isArray(d.activities)) {
          const actPayloads = d.activities.map(act => ({
            itineraryDayId: dayRecord.id,
            activity: typeof act === 'string' ? act : (act.activity || act.title || act.name),
            description: act.description || '',
            time: act.time || '',
            duration: act.duration || ''
          }));
          await ItineraryActivity.bulkCreate(actPayloads, { transaction });
        }

        if (d.meals && Array.isArray(d.meals)) {
          const mealPayloads = d.meals.map(meal => ({
            itineraryDayId: dayRecord.id,
            mealType: typeof meal === 'string' ? meal : (meal.mealType || meal.name)
          }));
          await ItineraryMeal.bulkCreate(mealPayloads, { transaction });
        }
      }
    }

    await transaction.commit();

    const created = await Itinerary.findByPk(itinerary.id, {
      include: [{
        model: ItineraryDay,
        as: 'days',
        include: [
          { model: ItineraryActivity, as: 'activities' },
          { model: ItineraryMeal, as: 'meals' }
        ]
      }]
    });

    return successResponse(res, 'Itinerary created successfully', created, 201);
  } catch (error) {
    await transaction.rollback();
    return errorResponse(res, 'Failed to create itinerary: ' + error.message, [], 500);
  }
});

// Admin: Update Itinerary (Supports atomic full update including nested days)
export const updateItinerary = asyncHandler(async (req, res) => {
  const transaction = await sequelize.transaction();
  try {
    const { id } = req.params;
    const itinerary = await Itinerary.findByPk(id, { transaction });

    if (!itinerary) {
      await transaction.rollback();
      return errorResponse(res, 'Itinerary not found', [], 404);
    }

    const {
      title, slug, description, durationDays, durationNights,
      coverImage, heroImage, gallery, price, originalPrice,
      destinations, theme, highlights, inclusions, exclusions,
      status, days
    } = req.body;

    let normGallery = gallery !== undefined ? gallery : itinerary.gallery;
    if (typeof normGallery === 'string') {
      try { normGallery = JSON.parse(normGallery); } catch { normGallery = normGallery.split(',').map(s => s.trim()).filter(Boolean); }
    }

    await itinerary.update({
      title: title || itinerary.title,
      slug: slug || (title ? createSlug(title) : itinerary.slug),
      description: description !== undefined ? description : itinerary.description,
      durationDays: durationDays !== undefined ? parseInt(durationDays, 10) : itinerary.durationDays,
      durationNights: durationNights !== undefined ? parseInt(durationNights, 10) : itinerary.durationNights,
      coverImage: coverImage || heroImage || itinerary.coverImage,
      heroImage: heroImage || coverImage || itinerary.heroImage,
      gallery: normGallery,
      price: price !== undefined ? (price ? parseFloat(price) : null) : itinerary.price,
      originalPrice: originalPrice !== undefined ? (originalPrice ? parseFloat(originalPrice) : null) : itinerary.originalPrice,
      destinations: destinations !== undefined ? destinations : itinerary.destinations,
      theme: theme !== undefined ? theme : itinerary.theme,
      highlights: highlights !== undefined ? highlights : itinerary.highlights,
      inclusions: inclusions !== undefined ? inclusions : itinerary.inclusions,
      exclusions: exclusions !== undefined ? exclusions : itinerary.exclusions,
      status: status || itinerary.status
    }, { transaction });

    // If days are passed in the update payload, sync nested days
    if (days && Array.isArray(days)) {
      // Delete existing days and their children for this itinerary
      const existingDays = await ItineraryDay.findAll({ where: { itineraryId: itinerary.id }, transaction });
      for (const d of existingDays) {
        await ItineraryActivity.destroy({ where: { itineraryDayId: d.id }, transaction });
        await ItineraryMeal.destroy({ where: { itineraryDayId: d.id }, transaction });
      }
      await ItineraryDay.destroy({ where: { itineraryId: itinerary.id }, transaction });

      // Re-create days
      for (let i = 0; i < days.length; i++) {
        const d = days[i];
        const dayRecord = await ItineraryDay.create({
          itineraryId: itinerary.id,
          dayNumber: parseInt(d.dayNumber || d.day || (i + 1), 10),
          date: d.date || null,
          location: d.location || '',
          title: d.title || `Day ${i + 1}`,
          description: d.description || '',
          accommodation: d.accommodation || '',
          transport: d.transport || '',
          image: d.image || null,
        }, { transaction });

        if (d.activities && Array.isArray(d.activities)) {
          const actPayloads = d.activities.map(act => ({
            itineraryDayId: dayRecord.id,
            activity: typeof act === 'string' ? act : (act.activity || act.title || act.name),
            description: act.description || '',
            time: act.time || '',
            duration: act.duration || ''
          }));
          await ItineraryActivity.bulkCreate(actPayloads, { transaction });
        }

        if (d.meals && Array.isArray(d.meals)) {
          const mealPayloads = d.meals.map(meal => ({
            itineraryDayId: dayRecord.id,
            mealType: typeof meal === 'string' ? meal : (meal.mealType || meal.name)
          }));
          await ItineraryMeal.bulkCreate(mealPayloads, { transaction });
        }
      }
    }

    await transaction.commit();

    const updated = await Itinerary.findByPk(itinerary.id, {
      include: [{
        model: ItineraryDay,
        as: 'days',
        include: [
          { model: ItineraryActivity, as: 'activities' },
          { model: ItineraryMeal, as: 'meals' }
        ]
      }]
    });

    return successResponse(res, 'Itinerary updated successfully', updated, 200);
  } catch (error) {
    await transaction.rollback();
    return errorResponse(res, 'Failed to update itinerary: ' + error.message, [], 500);
  }
});

// Admin: Delete Itinerary (using transactions)
export const deleteItinerary = asyncHandler(async (req, res) => {
  const transaction = await sequelize.transaction();
  try {
    const { id } = req.params;
    const itinerary = await Itinerary.findByPk(id, { transaction });

    if (!itinerary) {
      await transaction.rollback();
      return errorResponse(res, 'Itinerary not found', [], 404);
    }

    const days = await ItineraryDay.findAll({ where: { itineraryId: itinerary.id }, transaction });
    for (const d of days) {
      await ItineraryActivity.destroy({ where: { itineraryDayId: d.id }, transaction });
      await ItineraryMeal.destroy({ where: { itineraryDayId: d.id }, transaction });
    }
    await ItineraryDay.destroy({ where: { itineraryId: itinerary.id }, transaction });

    await itinerary.destroy({ transaction });
    await transaction.commit();
    return successResponse(res, 'Itinerary deleted successfully', null, 200);
  } catch (error) {
    await transaction.rollback();
    return errorResponse(res, 'Failed to delete itinerary: ' + error.message, [], 500);
  }
});

// Admin: Add Itinerary Day
export const addItineraryDay = asyncHandler(async (req, res) => {
  const transaction = await sequelize.transaction();
  try {
    const { itineraryId } = req.params;
    const { dayNumber, date, location, title, description, accommodation, transport, image, activities, meals } = req.body;

    const itinerary = await Itinerary.findByPk(itineraryId, { transaction });
    if (!itinerary) {
      await transaction.rollback();
      return errorResponse(res, 'Itinerary not found', [], 404);
    }

    // Create day
    const day = await ItineraryDay.create({
      itineraryId: parseInt(itineraryId, 10),
      dayNumber: parseInt(dayNumber, 10),
      date,
      location,
      title,
      description,
      accommodation,
      transport,
      image
    }, { transaction });

    // Add activities if provided
    if (activities && Array.isArray(activities)) {
      const actPayloads = activities.map(act => ({
        itineraryDayId: day.id,
        activity: typeof act === 'string' ? act : (act.activity || act.title || act.name),
        description: act.description || '',
        time: act.time || '',
        duration: act.duration || ''
      }));
      await ItineraryActivity.bulkCreate(actPayloads, { transaction });
    }

    // Add meals if provided
    if (meals && Array.isArray(meals)) {
      const mealPayloads = meals.map(meal => ({
        itineraryDayId: day.id,
        mealType: typeof meal === 'string' ? meal : (meal.mealType || meal.name)
      }));
      await ItineraryMeal.bulkCreate(mealPayloads, { transaction });
    }

    await transaction.commit();
    return successResponse(res, 'Itinerary day added successfully', day, 201);
  } catch (error) {
    await transaction.rollback();
    return errorResponse(res, 'Failed to add itinerary day: ' + error.message, [], 500);
  }
});

// Admin: Update Itinerary Day
export const updateItineraryDay = asyncHandler(async (req, res) => {
  const transaction = await sequelize.transaction();
  try {
    const { itineraryId, dayId } = req.params;
    const day = await ItineraryDay.findOne({
      where: { id: dayId, itineraryId },
      transaction
    });

    if (!day) {
      await transaction.rollback();
      return errorResponse(res, 'Itinerary day not found', [], 404);
    }

    const { dayNumber, date, location, title, description, accommodation, transport, image, activities, meals } = req.body;

    await day.update({
      dayNumber: dayNumber ? parseInt(dayNumber, 10) : day.dayNumber,
      date: date !== undefined ? date : day.date,
      location: location !== undefined ? location : day.location,
      title: title !== undefined ? title : day.title,
      description: description !== undefined ? description : day.description,
      accommodation: accommodation !== undefined ? accommodation : day.accommodation,
      transport: transport !== undefined ? transport : day.transport,
      image: image !== undefined ? image : day.image
    }, { transaction });

    // Clear old activities and meals
    await ItineraryActivity.destroy({ where: { itineraryDayId: day.id }, transaction });
    await ItineraryMeal.destroy({ where: { itineraryDayId: day.id }, transaction });

    // Add updated activities
    if (activities && Array.isArray(activities)) {
      const actPayloads = activities.map(act => ({
        itineraryDayId: day.id,
        activity: typeof act === 'string' ? act : (act.activity || act.title || act.name),
        description: act.description || '',
        time: act.time || '',
        duration: act.duration || ''
      }));
      await ItineraryActivity.bulkCreate(actPayloads, { transaction });
    }

    // Add updated meals
    if (meals && Array.isArray(meals)) {
      const mealPayloads = meals.map(meal => ({
        itineraryDayId: day.id,
        mealType: typeof meal === 'string' ? meal : (meal.mealType || meal.name)
      }));
      await ItineraryMeal.bulkCreate(mealPayloads, { transaction });
    }

    await transaction.commit();
    return successResponse(res, 'Itinerary day updated successfully', day, 200);
  } catch (error) {
    await transaction.rollback();
    return errorResponse(res, 'Failed to update itinerary day: ' + error.message, [], 500);
  }
});

// Admin: Delete Itinerary Day
export const deleteItineraryDay = asyncHandler(async (req, res) => {
  const transaction = await sequelize.transaction();
  try {
    const { itineraryId, dayId } = req.params;
    const day = await ItineraryDay.findOne({
      where: { id: dayId, itineraryId },
      transaction
    });

    if (!day) {
      await transaction.rollback();
      return errorResponse(res, 'Itinerary day not found', [], 404);
    }

    await ItineraryActivity.destroy({ where: { itineraryDayId: day.id }, transaction });
    await ItineraryMeal.destroy({ where: { itineraryDayId: day.id }, transaction });
    await day.destroy({ transaction });

    await transaction.commit();
    return successResponse(res, 'Itinerary day deleted successfully', null, 200);
  } catch (error) {
    await transaction.rollback();
    return errorResponse(res, 'Failed to delete itinerary day: ' + error.message, [], 500);
  }
});

// Admin: Reorder Itinerary Days
export const reorderItineraryDays = asyncHandler(async (req, res) => {
  const transaction = await sequelize.transaction();
  try {
    const { itineraryId } = req.params;
    const { days } = req.body; // Array of { id, dayNumber }

    if (!Array.isArray(days)) {
      await transaction.rollback();
      return errorResponse(res, 'Days array is required for reordering', [], 400);
    }

    for (const item of days) {
      if (item.id && item.dayNumber !== undefined) {
        await ItineraryDay.update(
          { dayNumber: parseInt(item.dayNumber, 10) },
          { where: { id: item.id, itineraryId }, transaction }
        );
      }
    }

    await transaction.commit();
    return successResponse(res, 'Itinerary days reordered successfully', null, 200);
  } catch (error) {
    await transaction.rollback();
    return errorResponse(res, 'Failed to reorder itinerary days: ' + error.message, [], 500);
  }
});

