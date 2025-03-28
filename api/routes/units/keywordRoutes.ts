import express from "express";
import { createKeyword, createKeywordsBulk, getKeywords, getKeywordById, updateKeyword, deleteKeyword } from "../../controllers/units/keywordController";
import { authenticateUser, authorizeRoles } from "../../middlewares/authMiddleware";

const router = express.Router();

router.get("/", getKeywords);
router.get("/:id", getKeywordById);
router.post("/", authenticateUser, authorizeRoles(["admin"]), createKeyword);
router.post("/bulk", authenticateUser, authorizeRoles(["admin"]), createKeywordsBulk);
router.put("/:id", authenticateUser, authorizeRoles(["admin"]), updateKeyword);
router.delete("/:id", authenticateUser, authorizeRoles(["admin"]), deleteKeyword);

export default router;