import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import {
  sequelize, User, Destination, Ferry, FerryRoute, FerrySchedule,
  Cruise, CruiseRoute, CruiseSchedule, Stay, Room, StayAmenity,
  Booking, BookingGuest, BlogCategory, Blog, ContactMessage,
  Inquiry, Review, Media, Place, Activity, ActivityLocation,
  ActivitySlot, SlotReservation, Package, AuditLog, ShiftLog,
  FilmChapter, Testimonial, Itinerary, ItineraryDay,
  ItineraryActivity, ItineraryMeal, Setting, MasterCategory,
  MasterLocation, Gallery
} from '../models/index.js';
import { connectDatabase } from '../config/database.js';
import { seedDatabase } from './seed.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const exportToMySQL = async () => {
  try {
    console.log('🔄 Initializing database for export...');
    await connectDatabase();
    await seedDatabase();

    const models = [
      { name: 'Users', model: User },
      { name: 'Settings', model: Setting },
      { name: 'MasterCategories', model: MasterCategory },
      { name: 'MasterLocations', model: MasterLocation },
      { name: 'Destinations', model: Destination },
      { name: 'Places', model: Place },
      { name: 'Ferries', model: Ferry },
      { name: 'FerryRoutes', model: FerryRoute },
      { name: 'FerrySchedules', model: FerrySchedule },
      { name: 'Cruises', model: Cruise },
      { name: 'CruiseRoutes', model: CruiseRoute },
      { name: 'CruiseSchedules', model: CruiseSchedule },
      { name: 'Stays', model: Stay },
      { name: 'Rooms', model: Room },
      { name: 'StayAmenities', model: StayAmenity },
      { name: 'Activities', model: Activity },
      { name: 'ActivityLocations', model: ActivityLocation },
      { name: 'ActivitySlots', model: ActivitySlot },
      { name: 'SlotReservations', model: SlotReservation },
      { name: 'Packages', model: Package },
      { name: 'Itineraries', model: Itinerary },
      { name: 'ItineraryDays', model: ItineraryDay },
      { name: 'ItineraryActivities', model: ItineraryActivity },
      { name: 'ItineraryMeals', model: ItineraryMeal },
      { name: 'BlogCategories', model: BlogCategory },
      { name: 'Blogs', model: Blog },
      { name: 'Bookings', model: Booking },
      { name: 'BookingGuests', model: BookingGuest },
      { name: 'Inquiries', model: Inquiry },
      { name: 'ContactMessages', model: ContactMessage },
      { name: 'Reviews', model: Review },
      { name: 'FilmChapters', model: FilmChapter },
      { name: 'Testimonials', model: Testimonial },
      { name: 'Galleries', model: Gallery },
      { name: 'Media', model: Media },
      { name: 'AuditLogs', model: AuditLog },
      { name: 'ShiftLogs', model: ShiftLog },
    ];

    let sqlDump = `-- ─────────────────────────────────────────────────────────────────────────────
-- ANDAMAN TRAILS TRAVEL PLATFORM — MYSQL PRODUCTION DATABASE DUMP
-- Compatible with: MySQL 5.7+, MySQL 8.0+, MariaDB 10.3+, Hostinger phpMyAdmin
-- Generated at: ${new Date().toISOString()}
-- ─────────────────────────────────────────────────────────────────────────────

SET FOREIGN_KEY_CHECKS = 0;
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";
SET NAMES utf8mb4;

`;

    for (const { name, model } of models) {
      const tableName = model.getTableName();
      const attributes = model.rawAttributes;

      sqlDump += `\n-- --------------------------------------------------------\n`;
      sqlDump += `-- Table structure for table \`${tableName}\`\n`;
      sqlDump += `-- --------------------------------------------------------\n\n`;
      sqlDump += `DROP TABLE IF EXISTS \`${tableName}\`;\n`;
      sqlDump += `CREATE TABLE \`${tableName}\` (\n`;

      const colDefs = [];
      const primaryKeys = [];

      for (const [colName, attr] of Object.entries(attributes)) {
        let typeStr = 'VARCHAR(255)';
        const typeKey = attr.type.key || '';

        if (typeKey === 'INTEGER') {
          typeStr = 'INT';
        } else if (typeKey === 'BIGINT') {
          typeStr = 'BIGINT';
        } else if (typeKey === 'FLOAT' || typeKey === 'DOUBLE') {
          typeStr = 'DOUBLE';
        } else if (typeKey === 'DECIMAL') {
          typeStr = 'DECIMAL(10,2)';
        } else if (typeKey === 'BOOLEAN') {
          typeStr = 'TINYINT(1)';
        } else if (typeKey === 'TEXT') {
          typeStr = 'TEXT';
        } else if (typeKey === 'DATE') {
          typeStr = 'DATETIME';
        } else if (typeKey === 'DATEONLY') {
          typeStr = 'DATE';
        } else if (typeKey === 'JSON') {
          typeStr = 'JSON';
        } else if (typeKey === 'ENUM') {
          const values = attr.values ? attr.values.map(v => `'${v.replace(/'/g, "''")}'`).join(', ') : "'ACTIVE'";
          typeStr = `ENUM(${values})`;
        } else if (typeKey === 'STRING') {
          const len = attr.type.options?.length || 255;
          typeStr = `VARCHAR(${len})`;
        }

        let def = `  \`${colName}\` ${typeStr}`;

        if (attr.autoIncrement) {
          def += ' AUTO_INCREMENT';
        }

        if (attr.allowNull === false) {
          def += ' NOT NULL';
        } else {
          def += ' NULL';
        }

        if (attr.defaultValue !== undefined && typeof attr.defaultValue !== 'function') {
          if (typeof attr.defaultValue === 'boolean') {
            def += ` DEFAULT ${attr.defaultValue ? 1 : 0}`;
          } else if (typeof attr.defaultValue === 'number') {
            def += ` DEFAULT ${attr.defaultValue}`;
          } else if (typeof attr.defaultValue === 'string') {
            def += ` DEFAULT '${attr.defaultValue.replace(/'/g, "''")}'`;
          }
        }

        if (attr.primaryKey) {
          primaryKeys.push(`\`${colName}\``);
        }

        colDefs.push(def);
      }

      if (primaryKeys.length > 0) {
        colDefs.push(`  PRIMARY KEY (${primaryKeys.join(', ')})`);
      }

      sqlDump += colDefs.join(',\n');
      sqlDump += `\n) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;\n\n`;

      // Fetch existing data
      try {
        const records = await model.findAll({ raw: true });
        if (records.length > 0) {
          sqlDump += `-- Dumping data for table \`${tableName}\` (${records.length} records)\n`;
          const cols = Object.keys(attributes);
          const colListStr = cols.map(c => `\`${c}\``).join(', ');

          const valueRows = [];
          for (const row of records) {
            const rowValues = cols.map(col => {
              const val = row[col];
              if (val === null || val === undefined) return 'NULL';
              if (typeof val === 'boolean') return val ? '1' : '0';
              if (typeof val === 'number') return String(val);
              if (typeof val === 'object') {
                return `'${JSON.stringify(val).replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;
              }
              return `'${String(val).replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;
            });
            valueRows.push(`(${rowValues.join(', ')})`);
          }

          // Chunk inserts by 50 to avoid max_allowed_packet limits
          const chunkSize = 50;
          for (let i = 0; i < valueRows.length; i += chunkSize) {
            const chunk = valueRows.slice(i, i + chunkSize);
            sqlDump += `INSERT INTO \`${tableName}\` (${colListStr}) VALUES\n${chunk.join(',\n')};\n`;
          }
          sqlDump += `\n`;
        }
      } catch (err) {
        console.warn(`Could not dump records for ${tableName}:`, err.message);
      }
    }

    sqlDump += `SET FOREIGN_KEY_CHECKS = 1;\nCOMMIT;\n`;

    const outPath1 = path.resolve(__dirname, '../../andaman_trails_database.sql');
    const outPath2 = path.resolve(__dirname, '../../../../andaman_trails_database.sql');

    fs.writeFileSync(outPath1, sqlDump, 'utf8');
    fs.writeFileSync(outPath2, sqlDump, 'utf8');

    console.log(`✅ MySQL Database Dump successfully created!`);
    console.log(`📁 Server Path: ${outPath1}`);
    console.log(`📁 Root Path: ${outPath2}`);
  } catch (error) {
    console.error('Export Error:', error);
  } finally {
    process.exit(0);
  }
};

exportToMySQL();
