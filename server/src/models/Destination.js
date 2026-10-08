import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

export const Destination = sequelize.define('Destination', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  slug: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  subtitle: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  region: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  tagline: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  shortDescription: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  description: {
    type: DataTypes.TEXT,
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
  latitude: {
    type: DataTypes.DECIMAL(10, 7),
    allowNull: true,
  },
  longitude: {
    type: DataTypes.DECIMAL(10, 7),
    allowNull: true,
  },
  bestTimeToVisit: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  howToReach: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  idealDuration: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  weatherInfo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  temp: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  humidity: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  scubaScore: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  waterTemp: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  clarity: {
    type: DataTypes.STRING,
    allowNull: true,
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
  startingPrice: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  highlights: {
    type: DataTypes.JSON,
    allowNull: true,
    defaultValue: [],
  },
  stays: {
    type: DataTypes.JSON,
    allowNull: true,
    defaultValue: [],
  },
  packages: {
    type: DataTypes.JSON,
    allowNull: true,
    defaultValue: [],
  },
  faq: {
    type: DataTypes.JSON,
    allowNull: true,
    defaultValue: [],
  },
  thingsToDo: {
    type: DataTypes.JSON,
    allowNull: true,
    defaultValue: [],
  },
  isFeatured: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  status: {
    type: DataTypes.ENUM('ACTIVE', 'INACTIVE'),
    defaultValue: 'ACTIVE',
  },
});
