import express from "express";
import { createAbility, getAbilities, getAbilityById, updateAbility, deleteAbility } from "@controllers/abilitiesController";


const router = express.Router();

router.get("/", getAbilities);
router.get("/:id", getAbilityById);
router.post("/", createAbility);
router.put("/:id", updateAbility);
router.delete("/:id", deleteAbility);

export default router;