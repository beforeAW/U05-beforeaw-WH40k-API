import express from "express";
import { createKeyword, createKeywordsBulk, getKeywords, getKeywordById, updateKeyword, deleteKeyword } from "../../controllers/units/keywordController";
// import { authenticateUser, authorizeRoles } from "../../middlewares/authMiddleware";

const router = express.Router();

router.get("/", getKeywords);
router.get("/:id", getKeywordById);
router.post("/", createKeyword);
router.post("/bulk", createKeywordsBulk);
router.put("/:id", updateKeyword);
router.delete("/:id", deleteKeyword);

export default router;