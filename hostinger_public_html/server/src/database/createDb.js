import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import { sequelize } from '../config/database.js';
import { seedDatabase } from './seed.js';
import { logger } from '../utils/logger.js';

dotenv.config();

export const initializeAndSeedDatabase = async () => {
  const dbHost = process.env.DB_HOST || 'localhost';
  const dbPort = parseInt(process.env.DB_PORT, 10) || 3306;
  const dbName = process.env.DB_NAME || 'andaman_trails';
  const dbUser = process.env.DB_USER || 'root';
  const dbPassword = process.env.DB_PASSWORD || '';

  try {
    logger.info(`Checking MySQL Server at ${dbHost}:${dbPort}...`);

    // 1. Connect to MySQL without specifying database to create it
    const connection = await mysql.createConnection({
      host: dbHost,
      port: dbPort,
      user: dbUser,
      password: dbPassword,
    });

    logger.info(`Creating database '${dbName}' if not exists...`);
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${dbName}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;`);
    await connection.end();

    logger.info(`Database '${dbName}' created/verified successfully.`);

    // 2. Synchronize all Sequelize Models to create all 20 MySQL Tables
    logger.info('Synchronizing Sequelize models and building database schema...');
    await sequelize.sync({ force: true });
    logger.info('All database tables created successfully.');

    // 3. Seed Development Data
    logger.info('Seeding initial data into database...');
    await seedDatabase();

    logger.info(`🎉 DATABASE '${dbName}' IS LIVE AND FULLY POPULATED!`);
    return true;
  } catch (error) {
    logger.error(`Database Creation Failed: ${error.message}`);
    if (error.code === 'ECONNREFUSED') {
      logger.warn(`Could not connect to MySQL server at ${dbHost}:${dbPort}. Make sure MySQL is running on your machine or start Docker MySQL with 'docker-compose up -d'.`);
    }
    return false;
  }
};

// Run if called directly
if (process.argv[1].endsWith('createDb.js')) {
  initializeAndSeedDatabase().then(() => process.exit(0));
}
