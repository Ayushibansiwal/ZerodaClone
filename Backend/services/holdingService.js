import HoldingsModel from "../models/HoldingsModel.js";
import AppError from "../utils/AppError.js";

// ==========================
// Get All Holdings
// ==========================

export const getAllHoldings = async () => {
  return await HoldingsModel.find();
};

// ==========================
// Get Holding By Name
// ==========================

export const getHoldingByName = async (name) => {
  const holding = await HoldingsModel.findOne({ name });

  if (!holding) {
    throw new AppError("Holding not found.", 404);
  }

  return holding;
};

// ==========================
// Create Holding
// ==========================

export const createHolding = async (holdingData) => {
  const holding = await HoldingsModel.create(holdingData);

  return holding;
};

// ==========================
// Update Holding
// ==========================

export const updateHolding = async (name, updateData) => {
  const holding = await HoldingsModel.findOneAndUpdate(
    { name },
    updateData,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!holding) {
    throw new AppError("Holding not found.", 404);
  }

  return holding;
};

// ==========================
// Delete Holding
// ==========================

export const deleteHolding = async (name) => {
  const holding = await HoldingsModel.findOneAndDelete({ name });

  if (!holding) {
    throw new AppError("Holding not found.", 404);
  }

  return holding;
};