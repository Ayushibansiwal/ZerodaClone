import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import session from "express-session";
import MongoStore from "connect-mongo";

import passport from "./config/passport.js";
import connectDB from "./config/database.js";

import errorHandler from "./middleware/errorHandler.js";

// Routes
import authRoutes from "./routes/authRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import holdingRoutes from "./routes/holdingRoutes.js";
import positionRoutes from "./routes/positionRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();

// ======================================
// Environment Variables
// ======================================

const PORT = process.env.PORT || 3000;
const MONGODB_URL = process.env.MONGODB_URL;
const SESSION_SECRET = process.env.SESSION_SECRET;

// ======================================
// Database & Server Initialization
// ======================================

// Connect to Database first, then spin up server
await connectDB();

// ======================================
// Middleware & CORS
// ======================================

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Dynamic CORS configuration to handle both local development and Render deployments
const allowedOrigins = [
  "https://zerodaclone-frontend.onrender.com", 
  "https://zerodaclone-dashboard.onrender.com", 
  "http://localhost:5173",
  "http://localhost:5174"
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      return callback(new Error('CORS error'), false);
    }
    return callback(null, true);
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept']
}));

app.options(/.*/, cors());

// ======================================
// Session Management
// ======================================

app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: MONGODB_URL,
    }),
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
      httpOnly: true,
      // dynamically set secure cookies based on environment
      secure: process.env.NODE_ENV === "production",  
      sameSite: process.env.NODE_ENV === "production" ? 'none' : 'lax'
    }
  })
);

// ======================================
// Passport
// ======================================

app.use(passport.initialize());
app.use(passport.session());

// ======================================
// Routes
// ======================================

app.use("/api/auth", authRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/holdings", holdingRoutes);
app.use("/api/positions", positionRoutes);
app.use("/api/user", userRoutes);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

app.use(errorHandler);

// ======================================
// Start Server
// ======================================

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});