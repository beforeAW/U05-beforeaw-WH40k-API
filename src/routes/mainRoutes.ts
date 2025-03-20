import express from "express";
import abilitiesRoutes  from "./abilitiesRoutes";
import figureRoutes from "./figureRoutes";
import unitRoutes from "./unitRoutes";
import keywordRoutes  from "./keywordRoutes";
import factionRoutes  from "./factionRoutes";
import subfactionRoutes  from "./subfactionRoutes";
import weaponRoutes from "./weaponRoutes";
import weaponsprofileRoutes from "./weaponsprofileRoutes";

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