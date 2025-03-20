import express from "express";
import { createWeapon, getWeapons, getWeaponById, updateWeapon, deleteWeapon } from "@controllers/units/weaponController";

const router = express.Router();

router.get("/", getWeapons);
router.get("/:id", getWeaponById);
router.post("/", createWeapon);
router.put("/:id", updateWeapon);
router.delete("/:id", deleteWeapon);

export default router;