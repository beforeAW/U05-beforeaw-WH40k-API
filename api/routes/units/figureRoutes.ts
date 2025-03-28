import express from "express";
import { createFigure,createFiguresBulk, getFigures, getFigureById, updateFigure, deleteFigure, searchFigures} from "../../controllers/units/figureController";
// import { authenticateUser, authorizeRoles } from "../../middlewares/authMiddleware";

const router = express.Router();

router.get("/", getFigures);
router.get("/:id", getFigureById);
router.get('/figures/search', searchFigures);
router.post("/", createFigure);
router.post("/bulk", createFiguresBulk);
router.put("/:id", updateFigure);
router.delete("/:id", deleteFigure);

export default router;