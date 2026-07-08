// routes/apiRoutes.js
import express from "express";
import passport from "passport";
import bcrypt from "bcrypt";
import { ensureAuthenticated } from "../middleware/auth.js";

// Models
import HoldingsModel from "../models/HoldingsModel.js";
import PositionModel from "../models/PositionModel.js";
import OrderModel from "../models/OrderModel.js";
import UserModel from "../models/UserModel.js";

const router = express.Router();

// ==========================================
// 1. AUTHENTICATION ROUTES
// ==========================================

router.post("/signup", async (req, res) => {
  try {
    const { username, password} = req.body;
    const existingUser = await UserModel.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "Username already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({ username, password: hashedPassword});
    await newUser.save();
    
    res.status(201).json({ message: "User registered successfully!" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    if (!user) {
      return res.status(401).json({ message: info?.message || "Invalid username or password" });
    }
    
    req.logIn(user, (err) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }
      return res.json({ message: "Successfully logged in!", user: req.user });
    });
  })(req, res, next);
});

router.get('/dashboard', ensureAuthenticated, (req, res) => {
  res.send(`Welcome to your dashboard, ${req.user.username}!`);
});

router.get('/logout', (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err);
    res.json({ message: "Logged out successfully" });
  });
});

// ==========================================
// 2. PORTFOLIO & ORDER ROUTES
// ==========================================

router.get("/allHoldings", ensureAuthenticated, async (req, res) => {
    const allHoldings = await HoldingsModel.find();
    res.send(allHoldings);
});

router.get("/holding/:name", ensureAuthenticated, async (req, res) => {
  try {
    const holding = await HoldingsModel.findOne({ name: req.params.name });
    if (!holding) return res.status(404).json({ message: "Holding not found" });
    res.json(holding);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/allPositions", ensureAuthenticated, async (req, res) => {
    const allPositions = await PositionModel.find();
    res.send(allPositions);
});

router.post("/newOrder", ensureAuthenticated, async (req, res) => {
  try {
    const { name, mode } = req.body;
    const qty = Number(req.body.qty);
    const price = Number(req.body.price);

    const newOrder = new OrderModel({ name, qty, price, mode });
    await newOrder.save();

    const existingHolding = await HoldingsModel.findOne({ name });
    if (existingHolding) {
      const currentQty = Number(existingHolding.qty);
      const currentAvg = Number(existingHolding.avg);
      const totalCost = (currentAvg * currentQty) + (price * qty);
      existingHolding.qty = currentQty + qty;
      existingHolding.avg = totalCost / (currentQty + qty);
      await existingHolding.save();
    } else {
      const newHolding = new HoldingsModel({
        name, qty, avg: price, price, net: "+0.00%", day: "+0.00%", isLoss: false
      });
      await newHolding.save();
    }
    res.status(201).json({ message: "Order placed successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/sellOrder", ensureAuthenticated, async (req, res) => {
  try {
    const { name, mode } = req.body;
    const qty = Number(req.body.qty);
    const price = Number(req.body.price);
    const holding = await HoldingsModel.findOne({ name });

    if (!holding) return res.status(404).json({ message: "Stock not found" });

    const currentHoldingQty = Number(holding.qty);
    if (currentHoldingQty < qty) return res.status(400).json({ message: "Not enough shares" });

    const updatedQty = currentHoldingQty - qty;
    if (updatedQty <= 0) {
      await HoldingsModel.deleteOne({ name });
    } else {
      holding.qty = updatedQty;
      await holding.save();
    }

    const sellOrder = new OrderModel({ name, qty, price, mode });
    await sellOrder.save();
    res.json({ message: "Sell order executed successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/user", ensureAuthenticated, (req, res) => {
  res.json({username: req.user.username });
});

export default router;