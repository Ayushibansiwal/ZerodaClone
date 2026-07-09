import asyncHandler from "../utils/asyncHandler.js";
import * as holdingService from "../services/holdingService.js";

// ==========================================
// GET ALL HOLDINGS
// ==========================================

export const getAllHoldings = asyncHandler(async (req, res) => {
  const holdings = await holdingService.getAllHoldings();

  res.status(200).json({
    success: true,
    count: holdings.length,
    holdings,
  });
});

// ==========================================
// GET HOLDING BY NAME
// ==========================================

export const getHoldingByName = asyncHandler(async (req, res) => {
  const holding = await holdingService.getHoldingByName(req.params.name);

  res.status(200).json({
    success: true,
    holding,
  });
});

// ==========================================
// CREATE HOLDING
// ==========================================

export const createHolding = asyncHandler(async (req, res) => {
  const holding = await holdingService.createHolding(req.body);

  res.status(201).json({
    success: true,
    message: "Holding created successfully.",
    holding,
  });
});

// ==========================================
// UPDATE HOLDING
// ==========================================

export const updateHolding = asyncHandler(async (req, res) => {
  const holding = await holdingService.updateHolding(
    req.params.name,
    req.body
  );

  res.status(200).json({
    success: true,
    message: "Holding updated successfully.",
    holding,
  });
});

// ==========================================
// DELETE HOLDING
// ==========================================

export const deleteHolding = asyncHandler(async (req, res) => {
  await holdingService.deleteHolding(req.params.name);

  res.status(200).json({
    success: true,
    message: "Holding deleted successfully.",
  });
});