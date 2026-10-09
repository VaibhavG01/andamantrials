import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

export const Gallery = sequelize.define('Gallery', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: 'Andaman Islands',
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'beaches',
  },
  src: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  thumb: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  span: {
    type: DataTypes.ENUM('normal', 'wide', 'tall'),
    defaultValue: 'normal',
  },
  isFeatured: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  sortOrder: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  likesCount: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: 'Andaman Trails',
  },
  status: {
    type: DataTypes.ENUM('ACTIVE', 'INACTIVE'),
    defaultValue: 'ACTIVE',
  },
});
