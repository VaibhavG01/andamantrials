import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

export const MasterCategory = sequelize.define('MasterCategory', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  slug: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  type: {
    type: DataTypes.ENUM('ACTIVITY', 'PACKAGE', 'DESTINATION', 'BLOG', 'STAY', 'GENERAL'),
    defaultValue: 'ACTIVITY',
    allowNull: false,
  },
  icon: {
    type: DataTypes.STRING(100),
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
  sortOrder: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
}, {
  tableName: 'MasterCategories',
  timestamps: true,
  indexes: [
    { fields: ['type'] },
    { fields: ['status'] },
    { fields: ['slug', 'type'], unique: true },
  ],
});

export default MasterCategory;
