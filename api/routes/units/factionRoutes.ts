import express from "express";
import { createFaction, createFactionsBulk, getFactions, getFactionById, updateFaction, deleteFaction } from "../../controllers/units/factionController";
import { authenticateUser, authorizeRoles } from "../../middlewares/authMiddleware";

const router = express.Router();

router.get("/", getFactions);
router.get("/:id", getFactionById);
router.post("/", createFaction);
router.post("/bulk", createFactionsBulk);
router.put("/:id", updateFaction);
router.delete("/:id", deleteFaction);

export default router;