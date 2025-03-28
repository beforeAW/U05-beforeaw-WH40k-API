import express from "express";
import { createFigure,createFiguresBulk, getFigures, getFigureById, updateFigure, deleteFigure, searchFigures} from "../../controllers/units/figureController";
import { authenticateUser, authorizeRoles } from "../../middlewares/authMiddleware";

const router = express.Router();

router.get("/", getFigures);
router.get("/:id", getFigureById);
router.get('/figures/search', authenticateUser, authorizeRoles(["admin"]), searchFigures);
router.post("/", authenticateUser, authorizeRoles(["admin"]), createFigure);
router.post("/bulk", authenticateUser, authorizeRoles(["admin"]), createFiguresBulk);
router.put("/:id", authenticateUser, authorizeRoles(["admin"]), updateFigure);
router.delete("/:id", authenticateUser, authorizeRoles(["admin"]), deleteFigure);

export default router;