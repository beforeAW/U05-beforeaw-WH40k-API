import express from "express";
import { createFigure, getFigures, getFigureById, updateFigure, deleteFigure } from "@controllers/units/figureController";

const router = express.Router();

router.get("/", getFigures);
router.get("/:id", getFigureById);
router.post("/", createFigure);
router.put("/:id", updateFigure);
router.delete("/:id", deleteFigure);

export default router;