import { processMediaUpload } from '../services/mediaService.js';
import { successResponse, errorResponse } from '../utils/apiResponse.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { Media } from '../models/index.js';
import fs from 'fs';

export const uploadSingleImage = asyncHandler(async (req, res) => {
  // Support both req.file and req.files (if single file sent in files array)
  let file = req.file;
  if (!file && req.files && req.files.length > 0) {
    file = req.files[0];
  }

  if (!file) {
    return errorResponse(res, 'No image file uploaded', [], 400);
  }

  const media = await processMediaUpload(file, req.user ? req.user.id : null);
  return res.status(201).json({
    success: true,
    message: 'Image uploaded successfully',
    url: media.url,
    filename: media.filename,
    data: media,
  });
});

export const uploadMultipleImages = asyncHandler(async (req, res) => {
  let files = req.files;
  if (!files && req.file) {
    files = [req.file];
  }

  if (!files || files.length === 0) {
    return errorResponse(res, 'No image files uploaded', [], 400);
  }

  const uploads = [];
  for (const file of files) {
    const media = await processMediaUpload(file, req.user ? req.user.id : null);
    uploads.push(media);
  }

  const urls = uploads.map(u => u.url);

  return res.status(201).json({
    success: true,
    message: `${uploads.length} image(s) uploaded successfully`,
    count: uploads.length,
    urls,
    url: urls[0] || null,
    data: uploads,
  });
});

export const uploadDocumentImage = asyncHandler(async (req, res) => {
  const file = req.file || (req.files && req.files[0]);
  if (!file) {
    return errorResponse(res, 'No document file uploaded', [], 400);
  }

  const url = `/uploads/${file.filename}`;
  return successResponse(res, 'Document uploaded successfully', { url, filename: file.filename }, 201);
});

export const getMediaLibrary = asyncHandler(async (req, res) => {
  const { page = 1, limit = 50 } = req.query;
  const offset = (page - 1) * limit;

  const { count, rows } = await Media.findAndCountAll({
    limit: parseInt(limit, 10),
    offset: parseInt(offset, 10),
    order: [['createdAt', 'DESC']],
  });

  return successResponse(res, 'Media library fetched successfully', {
    total: count,
    media: rows,
    page: parseInt(page, 10),
    limit: parseInt(limit, 10),
  }, 200);
});

export const deleteMediaById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const media = await Media.findByPk(id);

  if (!media) {
    return errorResponse(res, 'Media not found', [], 404);
  }

  if (media.path && fs.existsSync(media.path)) {
    try {
      fs.unlinkSync(media.path);
    } catch (e) {
      console.warn('Could not remove file from disk:', e.message);
    }
  }

  await media.destroy();
  return successResponse(res, 'Media deleted successfully', null, 200);
});
