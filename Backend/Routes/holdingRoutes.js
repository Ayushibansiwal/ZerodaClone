import express from "express";

import * as holdingController from "../controllers/holdingController.js";

import { ensureAuthenticated } from "../middleware/auth.js";

const router = express.Router();

// Holdings
router.get("/", ensureAuthenticated, holdingController.getAllHoldings);

router.get("/:name", ensureAuthenticated, holdingController.getHoldingByName);

router.post("/", ensureAuthenticated, holdingController.createHolding);

router.put("/:name", ensureAuthenticated, holdingController.updateHolding);

router.delete("/:name", ensureAuthenticated, holdingController.deleteHolding);

export default router;