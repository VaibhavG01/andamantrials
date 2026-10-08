import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

export const Package = sequelize.define('Package', {
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
  category: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'ALL',
  },
  duration: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  destinations: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  bestFor: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  description: {
    type: DataTypes.TEXT,
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
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  originalPrice: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,
  },
  rating: {
    type: DataTypes.DECIMAL(3, 2),
    allowNull: true,
    defaultValue: 4.8,
  },
  reviewsCount: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  tags: {
    type: DataTypes.JSON,
    allowNull: true,
    defaultValue: [],
  },
  featured: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  hotelCategory: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  mealPlan: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  transfers: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  activities: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  highlights: {
    type: DataTypes.JSON,
    allowNull: true,
    defaultValue: [],
  },
  itinerary: {
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
  cancellationPolicy: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  pickupDrop: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  faq: {
    type: DataTypes.JSON,
    allowNull: true,
    defaultValue: [],
  },
  pdfBrochure: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  status: {
    type: DataTypes.ENUM('ACTIVE', 'INACTIVE'),
    defaultValue: 'ACTIVE',
  },
});
