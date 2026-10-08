import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

export const Media = sequelize.define('Media', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  filename: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  path: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  publicId: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  mimetype: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  size: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  uploadedBy: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});
