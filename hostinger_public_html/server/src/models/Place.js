import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

export const Place = sequelize.define('Place', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  slug: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tagline: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  island: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  travelTime: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  rating: {
    type: DataTypes.DECIMAL(3, 2),
    allowNull: true,
    defaultValue: 4.8,
  },
  reviews: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  mustSee: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
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
  badge: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  badgeBg: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  bestTimeToVisit: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  timings: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  entryFee: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  highlights: {
    type: DataTypes.JSON,
    allowNull: true,
    defaultValue: [],
  },
  latitude: {
    type: DataTypes.DECIMAL(10, 7),
    allowNull: true,
  },
  longitude: {
    type: DataTypes.DECIMAL(10, 7),
    allowNull: true,
  },
  tags: {
    type: DataTypes.JSON,
    allowNull: true,
    defaultValue: [],
  },
  status: {
    type: DataTypes.ENUM('ACTIVE', 'INACTIVE'),
    defaultValue: 'ACTIVE',
  },
});
