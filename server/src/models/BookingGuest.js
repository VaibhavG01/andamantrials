import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

export const BookingGuest = sequelize.define('BookingGuest', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  bookingId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  fullName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  relation: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: 'Self',
  },
  dateOfBirth: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  idType: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  idNumber: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  documentImage: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  guestType: {
    type: DataTypes.ENUM('ADULT', 'CHILD', 'INFANT'),
    defaultValue: 'ADULT',
  },
});
