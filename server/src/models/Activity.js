import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

export const Activity = sequelize.define('Activity', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  slug: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  duration: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  difficulty: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: 'Easy',
  },
  rating: {
    type: DataTypes.DECIMAL(3, 2),
    allowNull: true,
    defaultValue: 4.8,
  },
  reviewsCount: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
  tagline: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  overview: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  childPrice: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,
    defaultValue: null,
  },
  originalPrice: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,
  },
  badge: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  badgeBg: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
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
  videoUrl: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  equipment: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  media: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  safetyNotice: {
    type: DataTypes.STRING,
    allowNull: true,
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
  requirements: {
    type: DataTypes.JSON,
    allowNull: true,
    defaultValue: [],
  },
  safetyGuidelines: {
    type: DataTypes.JSON,
    allowNull: true,
    defaultValue: [],
  },
  safetyInformation: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  ageRestrictions: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  importantNotes: {
    type: DataTypes.JSON,
    allowNull: true,
    defaultValue: [],
  },
  slots: {
    type: DataTypes.JSON,
    allowNull: true,
    defaultValue: [],
  },
  featured: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  sortOrder: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  bookingAvailability: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  status: {
    type: DataTypes.ENUM('ACTIVE', 'INACTIVE'),
    defaultValue: 'ACTIVE',
  },
});
