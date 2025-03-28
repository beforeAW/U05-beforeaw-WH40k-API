import express from "express";
import { createUnit, getUnits, getUnitById, updateUnit, deleteUnit, searchUnits } from "../../controllers/units/unitController";
// import { authenticateUser, authorizeRoles } from "../../middlewares/authMiddleware";

const router = express.Router();

router.get("/", getUnits);
router.get("/:id", getUnitById);
router.get('/units/search', searchUnits);
router.post("/", createUnit);
router.put("/:id", updateUnit);
router.delete("/:id", deleteUnit);

export default router;