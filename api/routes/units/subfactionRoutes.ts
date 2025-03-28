import express from "express";
import { createSubfaction, createSubfactionsBulk, getSubfactions, getSubfactionById, updateSubfaction, deleteSubfaction } from "../../controllers/units/subfactionController";
// import { authenticateUser, authorizeRoles } from "../../middlewares/authMiddleware";

const router = express.Router();

router.get("/", getSubfactions);
router.get("/:id", getSubfactionById);
router.post("/", createSubfaction);
router.post("/bulk", createSubfactionsBulk);
router.put("/:id", updateSubfaction);
router.delete("/:id", deleteSubfaction);

export default router;