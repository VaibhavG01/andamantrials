import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

export const ActivitySlot = sequelize.define('ActivitySlot', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  activityId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  locationId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  startTime: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  endTime: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  capacity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 20,
  },
  reservedCount: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  bookedCount: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  priceOverride: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,
  },
  childPriceOverride: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,
  },
  status: {
    type: DataTypes.ENUM('ACTIVE', 'DISABLED', 'SOLD_OUT'),
    defaultValue: 'ACTIVE',
  },
  notes: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});
