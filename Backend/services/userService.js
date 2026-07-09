import UserModel from "../models/UserModel.js";
import AppError from "../utils/AppError.js";

// ==========================================
// GET USER BY ID
// ==========================================

export const getUserById = async (userId) => {
  const user = await UserModel.findById(userId).select("-password");

  if (!user) {
    throw new AppError("User not found.", 404);
  }

  return user;
};