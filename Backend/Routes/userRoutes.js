import express from "express";

import * as userController from "../controllers/userController.js";

import { ensureAuthenticated } from "../middleware/auth.js";

const router = express.Router();

// Current User
router.get("/", ensureAuthenticated, userController.getCurrentUser);

export default router;