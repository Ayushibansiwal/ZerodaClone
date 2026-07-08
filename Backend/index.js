// index.js
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import session from "express-session";
import bcrypt from "bcrypt";

import UserModel from "./models/UserModel.js";
import apiRoutes from "./routes/apiRoutes.js"; 

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;
const MONGODB_URL = process.env.MONGODB_URL;

async function main() {
    await mongoose.connect(MONGODB_URL);
    console.log("✅ Database connected successfully.");
}

// Global Middleware
const allowedOrigins = ["http://localhost:5173", "http://localhost:5174"];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24,
    httpOnly: true,
    secure: false, 
    sameSite: 'lax'
  }
}));

// Passport Core Setup
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(async (username, password, done) => {
  try {
    const user = await UserModel.findOne({ username });
    if (!user) return done(null, false, { message: 'Incorrect username.' });
    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return done(null, false, { message: 'Incorrect password.' });

    return done(null, user);
  } catch (err) {
    return done(err);
  }
}));

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser(async (id, done) => {
  try {
    const user = await UserModel.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

app.use("/api", apiRoutes); 

main()
.then(() => {
    app.listen(PORT, () => console.log(`🚀 Server listening on port ${PORT}`));
})
.catch((err) => console.log("❌ Database connection error:", err));