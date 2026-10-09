import { connectDatabase } from '../config/database.js';
import { Room } from '../models/Room.js';
import { Stay } from '../models/Stay.js';
import { logger } from '../utils/logger.js';

const inspectRooms = async () => {
  try {
    await connectDatabase();
    const stays = await Stay.findAll();
    logger.info(`Stays in DB: ${stays.length}`);
    stays.forEach(s => {
      logger.info(`- Stay ID: ${s.id}, Name: ${s.name}`);
    });

    const rooms = await Room.findAll();
    logger.info(`Rooms in DB: ${rooms.length}`);
    rooms.forEach(r => {
      logger.info(`- Room ID: ${r.id}, StayID: ${r.stayId}, Name: ${r.name}, Price: ${r.price}`);
    });
    process.exit(0);
  } catch (error) {
    logger.error(error.message);
    process.exit(1);
  }
};

inspectRooms();
