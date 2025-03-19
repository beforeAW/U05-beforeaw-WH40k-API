import express from "express";
import { createFaction, getFactions, getFactionById, updateFaction, deleteFaction } from "@controllers/factionController";


const router = express.Router();

router.get("/", getFactions);
router.get("/:id", getFactionById);
router.post("/", createFaction);
router.put("/:id", updateFaction);
router.delete("/:id", deleteFaction);

export default router;