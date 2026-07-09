import express from "express";

import * as orderController from "../controllers/orderController.js";

import { ensureAuthenticated } from "../middleware/auth.js";

const router = express.Router();

// Orders
router.post("/buy", ensureAuthenticated, orderController.createBuyOrder);

router.post("/sell", ensureAuthenticated, orderController.createSellOrder);

export default router;