import asyncHandler from "../utils/asyncHandler.js";

import {
  buyStock,
  sellStock,
} from "../services/orderService.js";

// ==========================================
// BUY STOCK
// ==========================================

export const createBuyOrder = asyncHandler(async (req, res) => {
  const order = await buyStock(req.body);

  res.status(201).json({
    success: true,
    message: "Stock purchased successfully.",
    order,
  });
});

// ==========================================
// SELL STOCK
// ==========================================

export const createSellOrder = asyncHandler(async (req, res) => {
  const order = await sellStock(req.body);

  res.status(200).json({
    success: true,
    message: "Stock sold successfully.",
    order,
  });
});