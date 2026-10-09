import dotenv from 'dotenv';
dotenv.config();
import { sequelize, connectDatabase } from '../config/database.js';
import { Activity, Booking } from '../models/index.js';

async function inspect() {
  await connectDatabase();
  const dialect = sequelize.getDialect();
  console.log('Dialect:', dialect);

  let tables;
  if (dialect === 'mysql') {
    const [res] = await sequelize.query('SHOW TABLES');
    tables = res.map(r => Object.values(r)[0]);
  } else {
    const [res] = await sequelize.query("SELECT name FROM sqlite_master WHERE type='table';");
    tables = res.map(r => r.name);
  }
  console.log('Tables:', tables);

  const activities = await Activity.findAll({ limit: 5 });
  console.log(`Found ${activities.length} sample activities:`);
  activities.forEach(a => console.log(`- ${a.id}: ${a.name} (${a.slug}) | Price: ₹${a.price} | Category: ${a.category} | Location: ${a.location}`));

  process.exit(0);
}

inspect().catch(err => {
  console.error(err);
  process.exit(1);
});
