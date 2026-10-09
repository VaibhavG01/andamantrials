import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

export const CruiseSchedule = sequelize.define('CruiseSchedule', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  cruiseId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  departureTime: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '16:30',
  },
  availableSeats: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 50,
  },
  status: {
    type: DataTypes.ENUM('SCHEDULED', 'BOARDING', 'CANCELLED', 'COMPLETED'),
    defaultValue: 'SCHEDULED',
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    defaultValue: 3500.00,
  },
});
