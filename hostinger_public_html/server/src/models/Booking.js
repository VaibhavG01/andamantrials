import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';
import { BOOKING_TYPES, BOOKING_STATUS } from '../constants/bookingStatus.js';
import { PAYMENT_STATUS } from '../constants/paymentStatus.js';

export const Booking = sequelize.define('Booking', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  bookingNumber: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  bookingType: {
    type: DataTypes.ENUM(
      BOOKING_TYPES.FERRY,
      BOOKING_TYPES.CRUISE,
      BOOKING_TYPES.STAY,
      BOOKING_TYPES.ACTIVITY,
      BOOKING_TYPES.PACKAGE
    ),
    allowNull: false,
  },
  ferryId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  cruiseId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  stayId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  activityId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  activityLocationId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  slotId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  packageId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  scheduleId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  bookingDate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  activityDate: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  slotStartTime: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  slotEndTime: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  checkInDate: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  checkOutDate: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  adultCount: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 1,
  },
  childCount: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
  infantCount: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
  adultPrice: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,
  },
  childPrice: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,
  },
  totalGuests: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
  totalAmount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  currency: {
    type: DataTypes.STRING,
    defaultValue: 'INR',
  },
  paymentStatus: {
    type: DataTypes.ENUM(
      PAYMENT_STATUS.PENDING,
      PAYMENT_STATUS.PAID,
      PAYMENT_STATUS.FAILED,
      PAYMENT_STATUS.REFUNDED
    ),
    defaultValue: PAYMENT_STATUS.PENDING,
  },
  bookingStatus: {
    type: DataTypes.ENUM(
      BOOKING_STATUS.CONFIRMED,
      BOOKING_STATUS.CANCELLED,
      BOOKING_STATUS.COMPLETED,
      BOOKING_STATUS.PENDING,
      BOOKING_STATUS.PAYMENT_PENDING,
      BOOKING_STATUS.PAYMENT_FAILED,
      BOOKING_STATUS.EXPIRED,
      BOOKING_STATUS.REFUNDED,
      BOOKING_STATUS.CHECKED_IN
    ),
    defaultValue: BOOKING_STATUS.PENDING,
  },
  customerName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  customerEmail: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  customerPhone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  specialRequests: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  notes: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  internalNotes: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  cancelledAt: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  cancellationReason: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  rescheduledFromBookingId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  razorpayOrderId: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  razorpayPaymentId: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  razorpaySignature: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});
