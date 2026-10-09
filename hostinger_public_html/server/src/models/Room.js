import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

export const Room = sequelize.define('Room', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  stayId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  capacity: {
    type: DataTypes.INTEGER,
    defaultValue: 2,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    defaultValue: 6500.00,
  },
  availableRooms: {
    type: DataTypes.INTEGER,
    defaultValue: 10,
  },
  amenities: {
    type: DataTypes.JSON,
    allowNull: true,
    defaultValue: [],
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});
