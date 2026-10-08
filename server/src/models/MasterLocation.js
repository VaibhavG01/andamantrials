import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

export const MasterLocation = sequelize.define('MasterLocation', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(150),
    allowNull: false,
  },
  island: {
    type: DataTypes.STRING(100),
    allowNull: false,
    defaultValue: 'Havelock Island',
  },
  meetingPoint: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  latitude: {
    type: DataTypes.DECIMAL(10, 8),
    allowNull: true,
  },
  longitude: {
    type: DataTypes.DECIMAL(11, 8),
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
  tableName: 'MasterLocations',
  timestamps: true,
  indexes: [
    { fields: ['island'] },
    { fields: ['status'] },
  ],
});

export default MasterLocation;
