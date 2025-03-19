import mongoose, { Schema } from "mongoose";
import { Abilities } from "@schemas/abilitiesSchema";

const AbiltiesSchema: Schema = new mongoose.Schema<Abilities>({
    name: { type: String, required: true, minlength: 2 },
    description: { type: String, required: true, minlength: 2 },
}, { timestamps: true });

export const AbilitiesModel = mongoose.model<Abilities>("Abilities", AbiltiesSchema);