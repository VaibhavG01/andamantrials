import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

export const Cruise = sequelize.define('Cruise', {
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
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: 'SUNSET_SAIL',
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
  duration: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: '3 Hours',
  },
  departurePoint: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: 'Port Blair Harbor',
  },
  capacity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 80,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    defaultValue: 3500.00,
  },
  features: {
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
    type: DataTypes.ENUM('ACTIVE', 'MAINTENANCE', 'INACTIVE'),
    defaultValue: 'ACTIVE',
  },
});
