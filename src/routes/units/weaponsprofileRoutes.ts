import express from "express";
import { createWeaponsprofile, getWeaponsprofile, getWeaponsprofileById, updateWeaponsprofile, deleteWeaponsprofile } from "@controllers/units/weaponsprofileController";
import { authenticateUser, authorizeRoles } from "@middlewares/authMiddleware";

const router = express.Router();

router.get("/", getWeaponsprofile);
router.get("/:id", getWeaponsprofileById);
router.post("/", authenticateUser, authorizeRoles(["admin"]), createWeaponsprofile);
router.put("/:id", authenticateUser, authorizeRoles(["admin"]), updateWeaponsprofile);
router.delete("/:id", authenticateUser, authorizeRoles(["admin"]), deleteWeaponsprofile);

export default router;