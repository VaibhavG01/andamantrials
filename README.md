# 🏝️ ANDAMAN TRAILS — Full-Stack Travel Platform

Production-ready full-stack travel platform for Andaman Trails built with **React.js**, **Redux Toolkit**, **Three.js**, **GSAP**, **Node.js**, **Express.js**, **MySQL**, and **Sequelize ORM**.

---

## 📁 Clean Folder Structure

```text
andaman-app/
├── client/                     # React 19 + Redux Toolkit + Three.js + GSAP Frontend
│   ├── public/                 # Static assets & favicon
│   ├── src/
│   │   ├── api/                # Frontend API client & service integration
│   │   ├── components/         # UI Components (Navbar, 3D Hero, Booking, Glass Cards)
│   │   ├── pages/              # Page views (Home, Destinations, Ferries, Stays, Cruises)
│   │   ├── store/              # Redux Toolkit Slices (auth, ferry, stay, cruise, booking)
│   │   ├── App.jsx             # React Router v7 routes
│   │   └── main.jsx            # Redux Provider entry
│   ├── package.json            # Frontend dependencies
│   └── vite.config.js          # Vite build configuration
│
├── server/                     # Node.js + Express.js + MySQL + Sequelize Backend
│   ├── src/
│   │   ├── config/             # Database connection, Cloudinary, Mailer, Swagger
│   │   ├── constants/          # Roles, booking status & payment status enums
│   │   ├── controllers/        # 13 REST API controllers
│   │   ├── database/           # DB Creation script & development seeders
│   │   ├── middlewares/        # JWT auth, Admin guard, Upload filter, Error handler
│   │   ├── models/             # 20 Sequelize models with complete associations
│   │   ├── routes/             # REST API routes (/api/v1/)
│   │   ├── services/           # Business logic, transactions & emails
│   │   ├── utils/              # Winston logger, JWT helpers, Paginator, Booking ID gen
│   │   ├── validators/         # express-validator request schemas
│   │   ├── app.js              # Express app setup
│   │   └── server.js           # Server listener entry point
│   ├── uploads/                # Local media upload storage
│   ├── .env                    # Backend environment variables
│   ├── Dockerfile              # Docker container setup
│   ├── docker-compose.yml      # Multi-container orchestration (Node + MySQL)
│   └── package.json            # Backend dependencies
│
└── package.json                # Fullstack monorepo runner scripts
```

---

## ⚡ Quick Start Instructions

### 1. Set Up Database (`andaman_trails`)
```bash
# Create MySQL Database & seed initial data
npm run db:setup
```

### 2. Start Backend Server
```bash
npm run dev:server
```
- 🌐 API Health Check: `http://localhost:5000/api/v1/health`
- 📚 Swagger Documentation: `http://localhost:5000/api-docs`

### 3. Start Frontend Client
```bash
npm run dev:client
```
- 🎨 Web Application: `http://localhost:5173`

---

## 🔐 Default Seed User Credentials
- **Admin**: `admin@andaman-trails.com` | `admin123Password!`
- **Editor**: `editor@andaman-trails.com` | `editor123Password!`
- **Traveler**: `traveler@andaman-trails.com` | `traveler123Password!`

