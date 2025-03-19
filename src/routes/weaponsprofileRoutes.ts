import express from "express";
import { createWeaponsprofile, getWeaponsprofile, getWeaponsprofileById, updateWeaponsprofile, deleteWeaponsprofile } from "@controllers/weaponsprofileController";


const router = express.Router();

router.get("/", getWeaponsprofile);
router.get("/:id", getWeaponsprofileById);
router.post("/", createWeaponsprofile);
router.put("/:id", updateWeaponsprofile);
router.delete("/:id", deleteWeaponsprofile);

export default router;