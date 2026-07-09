import bcrypt from "bcrypt";

import UserModel from "../models/UserModel.js";
import AppError from "../utils/AppError.js";

// ==========================
// Register New User
// ==========================

export const registerUser = async ({ username, password }) => {
  // Validation
  if (!username || !password) {
    throw new AppError("Username and password are required.", 400);
  }

  username = username.trim();

  // Check existing user
  const existingUser = await UserModel.findOne({ username });

  if (existingUser) {
    throw new AppError("Username already exists.", 409);
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create user
  const newUser = await UserModel.create({
    username,
    password: hashedPassword,
  });

  return {
    id: newUser._id,
    username: newUser.username,
  };
};