import express from "express";
import { createAbility, getAbilities, getAbilityById, updateAbility, deleteAbility } from "../../controllers/units/abilitiesController";
import { authenticateUser, authorizeRoles } from "@middlewares/authMiddleware";

const router = express.Router();

router.get("/", getAbilities);
router.get("/:id", getAbilityById);
router.post("/", authenticateUser, authorizeRoles(["admin"]), createAbility);
router.put("/:id", authenticateUser, authorizeRoles(["admin"]), updateAbility);
router.delete("/:id", authenticateUser, authorizeRoles(["admin"]), deleteAbility);

export default router;