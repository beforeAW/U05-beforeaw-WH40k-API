import express from "express";
import { createWeapon, createWeaponsBulk, getWeapons, getWeaponById, updateWeapon, deleteWeapon } from "../../controllers/units/weaponController";
// import { authenticateUser, authorizeRoles } from "../../middlewares/authMiddleware";

const router = express.Router();

router.get("/", getWeapons);
router.get("/:id", getWeaponById);
router.post("/", createWeapon);
router.post("/bulk", createWeaponsBulk);
router.put("/:id", updateWeapon);
router.delete("/:id", deleteWeapon);

export default router;