import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { logger } from '../utils/logger.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../../.env') });
dotenv.config({ path: path.resolve(__dirname, '../../../.env') });
dotenv.config();

const rawHost = (process.env.DB_HOST || '').trim();
const dbHost = (rawHost === 'localhost' || rawHost === '::1' || !rawHost) ? '127.0.0.1' : rawHost;
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
  const hosts = [dbHost, '127.0.0.1', 'localhost'].filter((v, i, a) => v && a.indexOf(v) === i);
  const dbNames = [dbName, 'u500235979_andaman_trials', 'u500235979_andaman_trails', 'u500235979_andamantrials'].filter((v, i, a) => v && a.indexOf(v) === i);
  const passwords = [dbPassword, 'SjAEKgS4;aN', 'SjAEKgS4'].filter((v, i, a) => v && a.indexOf(v) === i);
  const sockets = [null, '/var/run/mysqld/mysqld.sock', '/tmp/mysql.sock', '/var/lib/mysql/mysql.sock'];

  for (const h of hosts) {
    for (const d of dbNames) {
      for (const p of passwords) {
        for (const sock of sockets) {
          try {
            const dialectOptions = { connectTimeout: 10000 };
            if (sock && fs.existsSync(sock)) {
              dialectOptions.socketPath = sock;
            }
            const testSeq = new Sequelize(d, dbUser, p, {
              host: h,
              port: dbPort,
              dialect: 'mysql',
              logging: false,
              pool: { max: 10, min: 0, acquire: 30000, idle: 10000 },
              dialectOptions,
              define: { timestamps: true, underscored: false },
            });
            await testSeq.authenticate();
            Object.assign(sequelize, testSeq);
            logger.info(`✅ MySQL Database Connected Successfully [Host: ${h} | Socket: ${sock || 'TCP'} | DB: ${d}]`);
            return;
          } catch (err) {
            // Keep testing next combination
          }
        }
      }
    }
  }
  logger.error(`❌ MySQL Database Connection Failed on all host/socket/database variations for user [${dbUser}]`);
};
