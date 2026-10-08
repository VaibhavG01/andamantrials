import { FilmChapter } from '../models/index.js';
import { successResponse, errorResponse } from '../utils/apiResponse.js';
import { asyncHandler } from '../utils/asyncHandler.js';

export const getFilmChapters = asyncHandler(async (req, res) => {
  const chapters = await FilmChapter.findAll({
    order: [['id', 'ASC']],
  });
  return successResponse(res, 'Film chapters fetched successfully', chapters, 200);
});

export const createFilmChapter = asyncHandler(async (req, res) => {
  const { thumb, videoUrl, title, type, description } = req.body;
  if (!thumb || !videoUrl || !title) {
    return errorResponse(res, 'Missing required fields: thumb, videoUrl, and title', 400);
  }

  const chapter = await FilmChapter.create({
    thumb,
    videoUrl,
    title,
    type,
    description,
  });

  return successResponse(res, 'Chapter created successfully', chapter, 201);
});

export const updateFilmChapter = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { thumb, videoUrl, title, type, description } = req.body;

  const chapter = await FilmChapter.findByPk(id);
  if (!chapter) {
    return errorResponse(res, 'Chapter not found', 404);
  }

  await chapter.update({
    thumb: thumb ?? chapter.thumb,
    videoUrl: videoUrl ?? chapter.videoUrl,
    title: title ?? chapter.title,
    type: type ?? chapter.type,
    description: description ?? chapter.description,
  });

  return successResponse(res, 'Chapter updated successfully', chapter, 200);
});

export const deleteFilmChapter = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const chapter = await FilmChapter.findByPk(id);
  if (!chapter) {
    return errorResponse(res, 'Chapter not found', 404);
  }

  await chapter.destroy();
  return successResponse(res, 'Chapter deleted successfully', null, 200);
});
