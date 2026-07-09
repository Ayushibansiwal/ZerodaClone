import PositionModel from "../models/PositionModel.js";
import AppError from "../utils/AppError.js";

// ==========================================
// GET ALL POSITIONS
// ==========================================

export const getAllPositions = async () => {
  return await PositionModel.find();
};

// ==========================================
// GET POSITION BY STOCK NAME
// ==========================================

export const getPositionByName = async (name) => {
  const position = await PositionModel.findOne({ name });

  if (!position) {
    throw new AppError("Position not found.", 404);
  }

  return position;
};

// ==========================================
// CREATE POSITION
// ==========================================

export const createPosition = async (positionData) => {
  return await PositionModel.create(positionData);
};

// ==========================================
// UPDATE POSITION
// ==========================================

export const updatePosition = async (name, updateData) => {
  const position = await PositionModel.findOneAndUpdate(
    { name },
    updateData,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!position) {
    throw new AppError("Position not found.", 404);
  }

  return position;
};

// ==========================================
// DELETE POSITION
// ==========================================

export const deletePosition = async (name) => {
  const position = await PositionModel.findOneAndDelete({
    name,
  });

  if (!position) {
    throw new AppError("Position not found.", 404);
  }

  return position;
};