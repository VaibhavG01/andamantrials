import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

export const FerryRoute = sequelize.define('FerryRoute', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  ferryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  fromDestinationId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  toDestinationId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  duration: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: '90 min',
  },
});
