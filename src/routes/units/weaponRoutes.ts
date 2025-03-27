import express from "express";
import { createWeapon, getWeapons, getWeaponById, updateWeapon, deleteWeapon } from "@controllers/units/weaponController";
import { authenticateUser, authorizeRoles } from "@middlewares/authMiddleware";

const router = express.Router();

router.get("/", getWeapons);
router.get("/:id", getWeaponById);
router.post("/", authenticateUser, authorizeRoles(["admin"]), createWeapon);
router.put("/:id", authenticateUser, authorizeRoles(["admin"]), updateWeapon);
router.delete("/:id", authenticateUser, authorizeRoles(["admin"]), deleteWeapon);

export default router;