import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

export const CruiseRoute = sequelize.define('CruiseRoute', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  cruiseId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  routeData: {
    type: DataTypes.JSON,
    allowNull: true,
    defaultValue: [],
  },
  distance: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: '25 Nautical Miles',
  },
});
