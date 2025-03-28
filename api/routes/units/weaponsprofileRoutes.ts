import express from "express";
import { createWeaponsprofile, createWeaponsprofilesBulk, getWeaponsprofile, getWeaponsprofileById, updateWeaponsprofile, deleteWeaponsprofile } from "../../controllers/units/weaponsprofileController";
// import { authenticateUser, authorizeRoles } from "../../middlewares/authMiddleware";

const router = express.Router();

router.get("/", getWeaponsprofile);
router.get("/:id", getWeaponsprofileById);
router.post("/", createWeaponsprofile);
router.post("/bulk", createWeaponsprofilesBulk);
router.put("/:id", updateWeaponsprofile);
router.delete("/:id", deleteWeaponsprofile);

export default router;