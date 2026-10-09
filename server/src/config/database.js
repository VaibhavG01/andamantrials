import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { logger } from '../utils/logger.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../../.env') });
dotenv.config({ path: path.resolve(__dirname, '../../../.env') });
dotenv.config();

const dbHost = process.env.DB_HOST || '127.0.0.1';
const dbPort = parseInt(process.env.DB_PORT, 10) || 3306;
const dbName = process.env.DB_NAME || 'u500235979_andaman_trials';
const dbUser = process.env.DB_USER || 'u500235979_vgtechstudio';
const dbPassword = (process.env.DB_PASSWORD || 'SjAEKgS4;aN').replace(/^["']|["']$/g, '');

export const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  port: dbPort,
  dialect: 'mysql',
  logging: false,
  pool: { max: 10, min: 0, acquire: 30000, idle: 10000 },
  dialectOptions: {
    connectTimeout: 10000,
  },
  define: { timestamps: true, underscored: false },
});

export const connectDatabase = async () => {
  try {
    await sequelize.authenticate();
    logger.info(`✅ MySQL Database Connected Successfully [Host: ${sequelize.config.host} | DB: ${dbName}]`);
  } catch (error) {
    logger.warn(`Primary MySQL connection failed [Host: ${sequelize.config.host}]: ${error.message}`);
    
    // Automatic retry with alternate host (127.0.0.1 <-> localhost)
    const currentHost = sequelize.config.host;
    const altHost = (currentHost === '127.0.0.1' || currentHost === '::1') ? 'localhost' : '127.0.0.1';
    logger.info(`Retrying MySQL connection via alternate host [${altHost}]...`);
    try {
      const altSequelize = new Sequelize(dbName, dbUser, dbPassword, {
        host: altHost,
        port: dbPort,
        dialect: 'mysql',
        logging: false,
        pool: { max: 10, min: 0, acquire: 30000, idle: 10000 },
        dialectOptions: { connectTimeout: 10000 },
        define: { timestamps: true, underscored: false },
      });
      await altSequelize.authenticate();
      Object.assign(sequelize, altSequelize);
      logger.info(`✅ MySQL Database Connected Successfully via alternate host [${altHost} | DB: ${dbName}]`);
    } catch (altErr) {
      logger.error(`❌ MySQL Database Connection Failed on both hosts: ${altErr.message}`);
    }
  }
};
