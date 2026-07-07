import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

// Models
import HoldingsModel from "./models/HoldingsModel.js";
import PositionModel from "./models/PositionModel.js";
import OrderModel from "./models/OrderModel.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8000;
const MONGODB_URL = process.env.MONGODB_URL;

async function main() {
    await mongoose.connect(MONGODB_URL);
    console.log("✅ Database connected successfully.");
}

app.use(cors());
app.use(bodyParser.json());

// Fetching Data from DB
app.get("/allHoldings", async (req, res) => {
    const allHoldings = await HoldingsModel.find();
    res.send(allHoldings);
});

app.get("/holding/:name", async (req, res) => {
  try {
    const holding = await HoldingsModel.findOne({
      name: req.params.name,
    });

    if (!holding) {
      return res.status(404).json({
        message: "Holding not found",
      });
    }

    res.json(holding);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

app.get("/allPositions", async (req, res) => {
    const allPositions = await PositionModel.find();
    res.send(allPositions);
});

// BUY ORDER ROUTE
app.post("/newOrder", async (req, res) => {
  try {
    const { name, mode } = req.body;
    
    // Explicitly parse inputs as clean numbers to avoid MongoDB string pollution
    const qty = Number(req.body.qty);
    const price = Number(req.body.price);

    const newOrder = new OrderModel({
        name,
        qty,
        price,
        mode
    });
    await newOrder.save();

    const existingHolding = await HoldingsModel.findOne({ name });

    if (existingHolding) {
      const currentQty = Number(existingHolding.qty);
      const currentAvg = Number(existingHolding.avg);

      const totalCost = (currentAvg * currentQty) + (price * qty);
      existingHolding.qty = currentQty + qty;
      existingHolding.avg = totalCost / (currentQty + qty); // Update average cost price
      await existingHolding.save();
    } else {
      const newHolding = new HoldingsModel({
        name,
        qty: qty,
        avg: price,
        price: price, 
        net: "+0.00%",
        day: "+0.00%",
        isLoss: false
      });
      await newHolding.save();
    }

    res.status(201).json({ message: "Order placed and portfolio updated successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// SELL ORDER ROUTE (FIXED)
app.post("/sellOrder", async (req, res) => {
  try {
    const { name, mode } = req.body;
    const qty = Number(req.body.qty);
    const price = Number(req.body.price);

    const holding = await HoldingsModel.findOne({ name });

    if (!holding) {
      return res.status(404).json({
        message: "Stock not found in your portfolio",
      });
    }

    const currentHoldingQty = Number(holding.qty);

    if (currentHoldingQty < qty) {
      return res.status(400).json({
        message: "Not enough shares to sell",
      });
    }

    // Calculate new total quantity balance
    const updatedQty = currentHoldingQty - qty;

    if (updatedQty <= 0) {
      // 🚀 CRITICAL FIX: Explicitly drop row completely if balance drops to or below 0
      await HoldingsModel.deleteOne({ name });
    } else {
      holding.qty = updatedQty;
      await holding.save();
    }

    // Save order history log
    const sellOrder = new OrderModel({
      name,
      qty,
      price,
      mode,
    });
    await sellOrder.save();

    res.json({
      message: "Sell order executed successfully",
    });

  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

main()
.then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server listening on port ${PORT}`);
    });
})
.catch((err) => {
    console.log("❌ Database connection error:", err);
});