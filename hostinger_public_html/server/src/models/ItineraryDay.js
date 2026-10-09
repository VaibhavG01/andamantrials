import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

export const ItineraryDay = sequelize.define('ItineraryDay', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  itineraryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'itinerary_id',
  },
  dayNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'day_number',
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  accommodation: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  transport: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  underscored: true,
  tableName: 'itinerary_days'
});
