import express from "express";
import { createUnit, getUnits, getUnitById, updateUnit, deleteUnit } from "@controllers/units/unitController";
import { authenticateUser, authorizeRoles } from "@middlewares/authMiddleware";

const router = express.Router();

router.get("/", getUnits);
router.get("/:id", getUnitById);
router.post("/", authenticateUser, authorizeRoles(["admin"]), createUnit);
router.put("/:id", authenticateUser, authorizeRoles(["admin"]), updateUnit);
router.delete("/:id", authenticateUser, authorizeRoles(["admin"]), deleteUnit);

export default router;