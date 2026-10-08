import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

export const Itinerary = sequelize.define('Itinerary', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  slug: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  durationDays: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'duration_days',
    defaultValue: 5,
  },
  durationNights: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'duration_nights',
    defaultValue: 4,
  },
  coverImage: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'cover_image',
  },
  heroImage: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  gallery: {
    type: DataTypes.JSON,
    allowNull: true,
    defaultValue: [],
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,
  },
  originalPrice: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,
  },
  destinations: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  theme: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  highlights: {
    type: DataTypes.JSON,
    allowNull: true,
    defaultValue: [],
  },
  inclusions: {
    type: DataTypes.JSON,
    allowNull: true,
    defaultValue: [],
  },
  exclusions: {
    type: DataTypes.JSON,
    allowNull: true,
    defaultValue: [],
  },
  status: {
    type: DataTypes.ENUM('DRAFT', 'PUBLISHED', 'ARCHIVED'),
    defaultValue: 'PUBLISHED',
  },
}, {
  underscored: true,
  tableName: 'itineraries',
});
