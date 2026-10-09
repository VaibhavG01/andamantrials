import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

export const Stay = sequelize.define('Stay', {
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
  type: {
    type: DataTypes.ENUM('BEACH_RESORT', 'LUXURY_VILLA', 'ECO_LODGE', 'HERITAGE_HOTEL', 'BOUTIQUE_RESORT'),
    defaultValue: 'BEACH_RESORT',
  },
  destinationId: {
    type: DataTypes.INTEGER,
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
  rating: {
    type: DataTypes.DECIMAL(3, 2),
    defaultValue: 4.8,
  },
  reviewCount: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  pricePerNight: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    defaultValue: 6500.00,
  },
  currency: {
    type: DataTypes.STRING,
    defaultValue: 'INR',
  },
  guestCapacity: {
    type: DataTypes.INTEGER,
    defaultValue: 4,
  },
  latitude: {
    type: DataTypes.DECIMAL(10, 7),
    allowNull: true,
  },
  longitude: {
    type: DataTypes.DECIMAL(10, 7),
    allowNull: true,
  },
  checkIn: {
    type: DataTypes.STRING,
    defaultValue: '12:00 PM',
  },
  checkOut: {
    type: DataTypes.STRING,
    defaultValue: '10:00 AM',
  },
  cancellationPolicy: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  status: {
    type: DataTypes.ENUM('ACTIVE', 'INACTIVE'),
    defaultValue: 'ACTIVE',
  },
  featured: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});
