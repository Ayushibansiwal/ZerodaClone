import bcrypt from "bcrypt";
import passport from "passport";

import UserModel from "../models/UserModel.js";

import asyncHandler from "../utils/asyncHandler.js";
import AppError from "../utils/AppError.js";

// =========================
// Signup
// =========================

export const signup = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw new AppError("Username and Password are required.", 400);
  }

  const existingUser = await UserModel.findOne({
    username: username.trim(),
  });

  if (existingUser) {
    throw new AppError("Username already exists.", 409);
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await UserModel.create({
    username: username.trim(),
    password: hashedPassword,
  });

  res.status(201).json({
    success: true,
    message: "User registered successfully.",
    user: {
      id: user._id,
      username: user.username,
    },
  });
});

// =========================
// Login
// =========================

export const login = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) return next(err);

    if (!user) {
      return next(new AppError(info?.message || "Invalid credentials.", 401));
    }

    req.logIn(user, (err) => {
      if (err) return next(err);

      res.json({
        success: true,
        message: "Login successful.",
        user: {
          id: user._id,
          username: user.username,
        },
      });
    });
  })(req, res, next);
};

// =========================
// Logout
// =========================

export const logout = (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err);

    req.session.destroy(() => {
      res.clearCookie("connect.sid");

      res.json({
        success: true,
        message: "Logged out successfully.",
      });
    });
  });
};