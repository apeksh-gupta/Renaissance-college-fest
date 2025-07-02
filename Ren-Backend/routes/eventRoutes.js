import express from "express";
import { getTokenCount,registerForEvent } from "../controllers/eventController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

// router.get("/", authMiddleware,getAllEvents);
router.get("/getToken", authMiddleware, getTokenCount);
router.post("/register",authMiddleware, registerForEvent);

export default router;
