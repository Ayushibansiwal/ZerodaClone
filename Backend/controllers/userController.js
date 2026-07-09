import asyncHandler from "../utils/asyncHandler.js";
import * as userService from "../services/userService.js";

// ==========================================
// GET CURRENT USER
// ==========================================

export const getCurrentUser = asyncHandler(async (req, res) => {
  const user = await userService.getUserById(req.user._id);

  res.status(200).json({
    success: true,
    user,
  });
});