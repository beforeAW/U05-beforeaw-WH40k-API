import express from "express";
import { createUnit, getUnits, getUnitById, updateUnit, deleteUnit } from "@controllers/unitController";

const router = express.Router();

router.get("/", getUnits);
router.get("/:id", getUnitById);
router.post("/", createUnit);
router.put("/:id", updateUnit);
router.delete("/:id", deleteUnit);

export default router;