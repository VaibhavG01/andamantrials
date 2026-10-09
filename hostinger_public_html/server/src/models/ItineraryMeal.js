import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

export const ItineraryMeal = sequelize.define('ItineraryMeal', {
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
  mealType: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'meal_type',
  },
}, {
  underscored: true,
  tableName: 'itinerary_meals'
});
