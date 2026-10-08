import fs from 'fs';
import path from 'path';

function walk(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) {
      if (file !== 'node_modules' && file !== 'dist' && file !== '.git') {
        walk(full, fileList);
      }
    } else if (/\.(jsx?|tsx?)$/.test(file)) {
      fileList.push(full);
    }
  }
  return fileList;
}

const files = walk('client/src');
const results = {};

for (const f of files) {
  const content = fs.readFileSync(f, 'utf-8');
  const matches = content.match(/from\s+['"][^'"]*data\/[^'"]+['"]/g);
  if (matches) {
    results[f] = matches;
  }
}

console.log(`Found ${Object.keys(results).length} files importing from data/`);
for (const [k, v] of Object.entries(results)) {
  console.log(`${k} -> ${JSON.stringify(v)}`);
}
