import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

export const ItineraryActivity = sequelize.define('ItineraryActivity', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  itineraryDayId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'itinerary_day_id',
  },
  activity: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  time: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  duration: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  underscored: true,
  tableName: 'itinerary_activities'
});
