import express from "express";
import { createSubfaction, createSubfactionsBulk, getSubfactions, getSubfactionById, updateSubfaction, deleteSubfaction } from "../../controllers/units/subfactionController";
import { authenticateUser, authorizeRoles } from "../../middlewares/authMiddleware";

const router = express.Router();

router.get("/", getSubfactions);
router.get("/:id", getSubfactionById);
router.post("/", authenticateUser, authorizeRoles(["admin"]), createSubfaction);
router.post("/bulk", authenticateUser, authorizeRoles(["admin"]), createSubfactionsBulk);
router.put("/:id", authenticateUser, authorizeRoles(["admin"]), updateSubfaction);
router.delete("/:id", authenticateUser, authorizeRoles(["admin"]), deleteSubfaction);

export default router;