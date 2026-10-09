import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

export const ActivityLocation = sequelize.define('ActivityLocation', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  activityId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  locationName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  adultPrice: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  childPrice: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,
    defaultValue: null,
  },
  infantPrice: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,
    defaultValue: 0,
  },
  meetingPoint: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  status: {
    type: DataTypes.ENUM('ACTIVE', 'INACTIVE'),
    defaultValue: 'ACTIVE',
  },
});
