import express from "express";
import { createFaction, createFactionsBulk, getFactions, getFactionById, updateFaction, deleteFaction } from "../../controllers/units/factionController";
import { authenticateUser, authorizeRoles } from "../../middlewares/authMiddleware";

const router = express.Router();

router.get("/", getFactions);
router.get("/:id", getFactionById);
router.post("/", authenticateUser, authorizeRoles(["admin"]), createFaction);
router.post("/bulk", authenticateUser, authorizeRoles(["admin"]), createFactionsBulk);
router.put("/:id", authenticateUser, authorizeRoles(["admin"]), updateFaction);
router.delete("/:id", authenticateUser, authorizeRoles(["admin"]), deleteFaction);

export default router;