import HoldingsModel from "../models/HoldingsModel.js";
import OrderModel from "../models/OrderModel.js";

import AppError from "../utils/AppError.js";

// ======================================================
// BUY STOCK
// ======================================================

export const buyStock = async ({ name, qty, price, mode }) => {
  // ---------------- Validation ----------------

  if (!name || !qty || !price) {
    throw new AppError("Missing required fields.", 400);
  }

  qty = Number(qty);
  price = Number(price);

  if (Number.isNaN(qty) || qty <= 0) {
    throw new AppError("Invalid quantity.", 400);
  }

  if (Number.isNaN(price) || price <= 0) {
    throw new AppError("Invalid price.", 400);
  }

  // ---------------- Create Order ----------------

  const order = await OrderModel.create({
    name,
    qty,
    price,
    mode: mode || "BUY",
  });

  // ---------------- Find Holding ----------------

  const holding = await HoldingsModel.findOne({ name });

  if (!holding) {
    await HoldingsModel.create({
      name,
      qty,
      avg: price,
      price,
      net: "+0.00%",
      day: "+0.00%",
      isLoss: false,
    });

    return order;
  }

  // ---------------- Update Holding ----------------

  const currentQty = Number(holding.qty);
  const currentAvg = Number(holding.avg);

  const totalCost = currentQty * currentAvg + qty * price;

  holding.qty = currentQty + qty;
  holding.avg = totalCost / holding.qty;

  // Update latest traded price
  holding.price = price;

  await holding.save();

  return order;
};

// ======================================================
// SELL STOCK
// ======================================================

export const sellStock = async ({ name, qty, price, mode }) => {
  if (!name || !qty || !price) {
    throw new AppError("Missing required fields.", 400);
  }

  qty = Number(qty);
  price = Number(price);

  if (Number.isNaN(qty) || qty <= 0) {
    throw new AppError("Invalid quantity.", 400);
  }

  if (Number.isNaN(price) || price <= 0) {
    throw new AppError("Invalid price.", 400);
  }

  const holding = await HoldingsModel.findOne({ name });

  if (!holding) {
    throw new AppError("Stock not found.", 404);
  }

  if (holding.qty < qty) {
    throw new AppError(
      "You cannot sell more shares than you own.",
      400
    );
  }

  // Create sell order

  const order = await OrderModel.create({
    name,
    qty,
    price,
    mode: mode || "SELL",
  });

  holding.qty -= qty;

  if (holding.qty === 0) {
    await HoldingsModel.deleteOne({
      _id: holding._id,
    });
  } else {
    holding.price = price;
    await holding.save();
  }

  return order;
};