import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

export const Inquiry = sequelize.define('Inquiry', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  type: {
    type: DataTypes.ENUM('GENERAL', 'FERRY', 'CRUISE', 'STAY', 'TRIP_PLANNING'),
    defaultValue: 'TRIP_PLANNING',
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  preferredDate: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  status: {
    type: DataTypes.ENUM('PENDING', 'IN_PROGRESS', 'CLOSED'),
    defaultValue: 'PENDING',
  },
});
