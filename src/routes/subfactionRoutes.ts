import express from "express";
import { createSubfaction, getSubfactions, getSubfactionById, updateSubfaction, deleteSubfaction } from "@controllers/subfactionController";


const router = express.Router();

router.get("/", getSubfactions);
router.get("/:id", getSubfactionById);
router.post("/", createSubfaction);
router.put("/:id", updateSubfaction);
router.delete("/:id", deleteSubfaction);

export default router;