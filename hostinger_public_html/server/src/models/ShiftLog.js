import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

export const ShiftLog = sequelize.define('ShiftLog', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  receptionistId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  shiftStart: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  shiftEnd: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  status: {
    type: DataTypes.ENUM('ON DUTY', 'OFF DUTY'),
    defaultValue: 'ON DUTY',
  },
});
