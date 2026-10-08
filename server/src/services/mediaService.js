import cloudinary from '../config/cloudinary.js';
import { Media } from '../models/index.js';
import fs from 'fs';

export const processMediaUpload = async (file, userId = null) => {
  let url = `/uploads/${file.filename}`;
  let publicId = null;

  if (process.env.CLOUDINARY_CLOUD_NAME && process.env.CLOUDINARY_API_KEY) {
    try {
      const result = await cloudinary.uploader.upload(file.path, {
        folder: 'andaman_trails',
      });
      url = result.secure_url;
      publicId = result.public_id;
      // Delete temporary disk file
      fs.unlinkSync(file.path);
    } catch (err) {
      console.warn('Cloudinary upload failed, falling back to local storage:', err.message);
    }
  }

  const mediaRecord = await Media.create({
    filename: file.filename,
    path: file.path,
    url,
    publicId,
    mimetype: file.mimetype,
    size: file.size,
    uploadedBy: userId,
  });

  return mediaRecord;
};
