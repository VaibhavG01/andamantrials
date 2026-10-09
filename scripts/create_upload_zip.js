import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const rootDir = process.cwd();
const targetDir = path.join(rootDir, 'hostinger_public_html');

console.log('🚀 Preparing Hostinger File Manager upload package...');

// 1. Clean previous target directory
if (fs.existsSync(targetDir)) {
  fs.rmSync(targetDir, { recursive: true, force: true });
}
fs.mkdirSync(targetDir, { recursive: true });

// 2. Ensure dist is fresh
if (!fs.existsSync(path.join(rootDir, 'dist', 'index.html'))) {
  console.log('Building dist...');
  execSync('npm run build', { stdio: 'inherit' });
}

// 3. Copy dist contents (index.html, assets, .htaccess, etc.) to targetDir
fs.cpSync(path.join(rootDir, 'dist'), targetDir, { recursive: true });

// 4. Copy server.js wrapper
fs.cpSync(path.join(rootDir, 'server.js'), path.join(targetDir, 'server.js'));

// 5. Copy root package.json
fs.cpSync(path.join(rootDir, 'package.json'), path.join(targetDir, 'package.json'));

// 6. Copy server and client source directories excluding node_modules
const copyDirFiltered = (src, dest) => {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name === 'node_modules' || entry.name === '.git' || entry.name === 'uploads' || entry.name === 'dist') continue;
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirFiltered(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
};

copyDirFiltered(path.join(rootDir, 'server'), path.join(targetDir, 'server'));
copyDirFiltered(path.join(rootDir, 'client'), path.join(targetDir, 'client'));

// Ensure uploads folder exists
fs.mkdirSync(path.join(targetDir, 'server', 'uploads'), { recursive: true });
fs.mkdirSync(path.join(targetDir, 'uploads'), { recursive: true });

// 7. Write production .env file
const prodEnvContent = `PORT=5000
NODE_ENV=production
API_PREFIX=/api/v1
FRONTEND_URL=https://deepskyblue-moose-480555.hostingersite.com
ALLOWED_ORIGINS=https://deepskyblue-moose-480555.hostingersite.com
DB_DIALECT=mysql
USE_SQLITE=false
DB_HOST=127.0.0.1
DB_PORT=3306
DB_NAME=u500235979_andaman
DB_USER=u500235979_vgtechstudio
DB_PASSWORD="1H^l7H1#"
JWT_SECRET=super_secret_andaman_trails_jwt_token_key_2026
JWT_EXPIRES_IN=7d
ADMIN_EMAIL=softbyvaibhav01@gmail.com
RAZORPAY_KEY_ID=rzp_test_RmOX6fSIDBulsx
RAZORPAY_KEY_SECRET=7ZUpNWBUa0SHY16dC9GnaoPr
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=softbyvaibhav01@gmail.com
SMTP_PASSWORD=xxccrlswifgmdamt
MAIL_FROM="Andaman Trails" <softbyvaibhav01@gmail.com>
`;

fs.writeFileSync(path.join(targetDir, '.env'), prodEnvContent);
fs.writeFileSync(path.join(targetDir, 'server', '.env'), prodEnvContent);

console.log('✅ Hostinger package directory created successfully at:', targetDir);
