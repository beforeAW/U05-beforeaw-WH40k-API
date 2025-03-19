import mongoose, { Schema } from "mongoose";
import { Faction } from "@schemas/factionSchema";

const FactionSchema: Schema = new mongoose.Schema<Faction>({
    name: { type: String, required: true, minlength: 2 },
}, { timestamps: true });

export const FactionModel = mongoose.model<Faction>("Faction", FactionSchema);