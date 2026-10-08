import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { logger } from '../utils/logger.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const sqliteStoragePath = path.resolve(__dirname, '../../andaman_trails.sqlite');

const dbHost = process.env.DB_HOST || '127.0.0.1';
const dbPort = parseInt(process.env.DB_PORT, 10) || 3306;
const dbName = process.env.DB_NAME || 'andaman_trails';
const dbUser = process.env.DB_USER || 'root';
const dbPassword = process.env.DB_PASSWORD || '';

const useSqlite = process.env.DB_DIALECT === 'sqlite' || process.env.USE_SQLITE === 'true';

export const sequelize = useSqlite
  ? new Sequelize({
      dialect: 'sqlite',
      storage: sqliteStoragePath,
      logging: false,
      define: { timestamps: true, underscored: false },
    })
  : new Sequelize(dbName, dbUser, dbPassword, {
      host: dbHost,
      port: dbPort,
      dialect: 'mysql',
      logging: false,
      pool: { max: 10, min: 0, acquire: 30000, idle: 10000 },
      define: { timestamps: true, underscored: false },
    });

export const connectDatabase = async () => {
  try {
    await sequelize.authenticate();
    logger.info(`✅ Database Connected Successfully [Dialect: ${sequelize.getDialect().toUpperCase()}]`);
  } catch (error) {
    logger.warn(`MySQL Server unavailable (${error.message}). Connecting via embedded database file (${sqliteStoragePath})...`);
    // Connect SQLite Fallback dynamically
    try {
      const sqliteSeq = new Sequelize({
        dialect: 'sqlite',
        storage: sqliteStoragePath,
        logging: false,
        define: { timestamps: true, underscored: false },
      });
      await sqliteSeq.authenticate();
      Object.assign(sequelize, sqliteSeq);
      logger.info(`✅ Local Database Connected Successfully [Dialect: SQLITE]`);
    } catch (sqliteErr) {
      logger.error(`Database Connection Failed: ${sqliteErr.message}`);
    }
  }
};

