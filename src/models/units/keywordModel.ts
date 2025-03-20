import mongoose, { Schema } from "mongoose";
import { Keyword } from "@schemas/units/keywordSchema";

const KeywordSchema: Schema = new mongoose.Schema<Keyword>({
    name: { type: String, required: true, minlength: 2 },
}, { timestamps: true });

export const KeywordModel = mongoose.model<Keyword>("Keyword", KeywordSchema);