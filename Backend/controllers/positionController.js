import asyncHandler from "../utils/asyncHandler.js";
import * as positionService from "../services/positionService.js";

// ==========================================
// GET ALL POSITIONS
// ==========================================

export const getAllPositions = asyncHandler(async (req, res) => {
  const positions = await positionService.getAllPositions();

  res.status(200).json({
    success: true,
    count: positions.length,
    positions,
  });
});

// ==========================================
// GET POSITION BY NAME
// ==========================================

export const getPositionByName = asyncHandler(async (req, res) => {
  const position = await positionService.getPositionByName(
    req.params.name
  );

  res.status(200).json({
    success: true,
    position,
  });
});

// ==========================================
// CREATE POSITION
// ==========================================

export const createPosition = asyncHandler(async (req, res) => {
  const position = await positionService.createPosition(req.body);

  res.status(201).json({
    success: true,
    message: "Position created successfully.",
    position,
  });
});

// ==========================================
// UPDATE POSITION
// ==========================================

export const updatePosition = asyncHandler(async (req, res) => {
  const position = await positionService.updatePosition(
    req.params.name,
    req.body
  );

  res.status(200).json({
    success: true,
    message: "Position updated successfully.",
    position,
  });
});

// ==========================================
// DELETE POSITION
// ==========================================

export const deletePosition = asyncHandler(async (req, res) => {
  await positionService.deletePosition(req.params.name);

  res.status(200).json({
    success: true,
    message: "Position deleted successfully.",
  });
});