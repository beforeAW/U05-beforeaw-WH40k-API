import express from "express";
import { createKeyword, getKeywords, getKeywordById, updateKeyword, deleteKeyword } from "@controllers/keywordController";


const router = express.Router();

router.get("/", getKeywords);
router.get("/:id", getKeywordById);
router.post("/", createKeyword);
router.put("/:id", updateKeyword);
router.delete("/:id", deleteKeyword);

export default router;