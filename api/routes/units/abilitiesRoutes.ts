import express from "express";
import { createAbility, createAbilitiesBulk, getAbilities, getAbilityById, updateAbility, deleteAbility } from "../../controllers/units/abilitiesController";
import { authenticateUser, authorizeRoles } from "../../middlewares/authMiddleware";

const router = express.Router();

router.get("/", getAbilities);
router.get("/:id", getAbilityById);
router.post("/", createAbility);
router.post("/bulk", createAbilitiesBulk);
router.put("/:id", updateAbility);
router.delete("/:id", deleteAbility);

export default router;