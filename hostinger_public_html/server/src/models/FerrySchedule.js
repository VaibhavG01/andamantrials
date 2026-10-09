import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';
import { SCHEDULE_STATUS } from '../constants/bookingStatus.js';

export const FerrySchedule = sequelize.define('FerrySchedule', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  ferryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  routeId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  travelDate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  departureTime: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  arrivalTime: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  availableSeats: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 200,
  },
  status: {
    type: DataTypes.ENUM(
      SCHEDULE_STATUS.SCHEDULED,
      SCHEDULE_STATUS.ON_TIME,
      SCHEDULE_STATUS.BOARDING,
      SCHEDULE_STATUS.DELAYED,
      SCHEDULE_STATUS.CANCELLED,
      SCHEDULE_STATUS.COMPLETED
    ),
    defaultValue: SCHEDULE_STATUS.SCHEDULED,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    defaultValue: 1500.00,
  },
});
