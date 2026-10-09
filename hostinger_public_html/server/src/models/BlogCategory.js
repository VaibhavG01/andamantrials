import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

export const BlogCategory = sequelize.define('BlogCategory', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  slug: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});
