import { FerrySchedule, CruiseSchedule, Room } from '../models/index.js';

export const checkFerryAvailability = async (scheduleId, requestedGuests = 1) => {
  const schedule = await FerrySchedule.findByPk(scheduleId);
  if (!schedule) {
    return { available: false, message: 'Ferry schedule not found' };
  }

  if (schedule.availableSeats < requestedGuests) {
    return { available: false, message: `Only ${schedule.availableSeats} seats remaining`, remainingSeats: schedule.availableSeats };
  }

  return { available: true, remainingSeats: schedule.availableSeats, price: schedule.price };
};

export const checkCruiseAvailability = async (scheduleId, requestedGuests = 1) => {
  const schedule = await CruiseSchedule.findByPk(scheduleId);
  if (!schedule) {
    return { available: false, message: 'Cruise schedule not found' };
  }

  if (schedule.availableSeats < requestedGuests) {
    return { available: false, message: `Only ${schedule.availableSeats} seats remaining`, remainingSeats: schedule.availableSeats };
  }

  return { available: true, remainingSeats: schedule.availableSeats, price: schedule.price };
};

export const checkStayAvailability = async (roomId, requestedRooms = 1) => {
  const room = await Room.findByPk(roomId);
  if (!room) {
    return { available: false, message: 'Room type not found' };
  }

  if (room.availableRooms < requestedRooms) {
    return { available: false, message: `Only ${room.availableRooms} rooms available`, remainingRooms: room.availableRooms };
  }

  return { available: true, remainingRooms: room.availableRooms, price: room.price };
};
