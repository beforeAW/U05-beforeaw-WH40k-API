import express from "express";
import abilitiesRoutes  from "./units/abilitiesRoutes";
import figureRoutes from "./units/figureRoutes";
import unitRoutes from "./units/unitRoutes";
import keywordRoutes  from "./units/keywordRoutes";
import factionRoutes  from "./units/factionRoutes";
import subfactionRoutes  from "./units/subfactionRoutes";
import weaponRoutes from "./units/weaponRoutes";
import weaponsprofileRoutes from "./units/weaponsprofileRoutes";

const router = express.Router();

router.use("/abilities", abilitiesRoutes);
router.use("/figures", figureRoutes);
router.use("/units", unitRoutes);
router.use("/keywords", keywordRoutes);
router.use("/factions", factionRoutes);
router.use("/subfactions", subfactionRoutes);
router.use("/weapons", weaponRoutes);
router.use("/weaponsprofiles", weaponsprofileRoutes);

export default router;