import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

export const SlotReservation = sequelize.define('SlotReservation', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  slotId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  bookingId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  bookingNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  adultCount: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
  childCount: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  infantCount: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  totalGuests: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
  expiresAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('RESERVED', 'CONFIRMED', 'EXPIRED', 'RELEASED'),
    defaultValue: 'RESERVED',
  },
});
