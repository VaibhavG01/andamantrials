import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

export const Ferry = sequelize.define('Ferry', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  operator: {
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
    defaultValue: 'CATAMARAN',
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  status: {
    type: DataTypes.ENUM('ACTIVE', 'MAINTENANCE', 'INACTIVE'),
    defaultValue: 'ACTIVE',
  },
  capacity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 250,
  },
  features: {
    type: DataTypes.JSON,
    allowNull: true,
    defaultValue: [],
  },
});
