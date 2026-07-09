import express from "express";

import * as positionController from "../controllers/positionController.js";

import { ensureAuthenticated } from "../middleware/auth.js";

const router = express.Router();

// Positions
router.get("/", ensureAuthenticated, positionController.getAllPositions);

router.get("/:name", ensureAuthenticated, positionController.getPositionByName);

router.post("/", ensureAuthenticated, positionController.createPosition);

router.put("/:name", ensureAuthenticated, positionController.updatePosition);

router.delete("/:name", ensureAuthenticated, positionController.deletePosition);

export default router;