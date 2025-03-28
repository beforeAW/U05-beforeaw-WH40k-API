import express from "express";
import { createFigure, getFigures, getFigureById, updateFigure, deleteFigure } from "../../controllers/units/figureController";
import { authenticateUser, authorizeRoles } from "../../middlewares/authMiddleware";

const router = express.Router();

router.get("/", getFigures);
router.get("/:id", getFigureById);
router.post("/", authenticateUser, authorizeRoles(["admin"]), createFigure);
router.put("/:id", authenticateUser, authorizeRoles(["admin"]), updateFigure);
router.delete("/:id", authenticateUser, authorizeRoles(["admin"]), deleteFigure);

export default router;