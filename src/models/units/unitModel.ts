import mongoose, { Schema, Types } from "mongoose";
import { Unit } from "@schemas/units/unitsSchema";

const UnitSchema: Schema = new Schema({
    name: { type: String, required: true },
    figure: [{ type: Types.ObjectId, ref: "Figure", required: true }],
    faction: { type: Types.ObjectId, ref: "Faction", required: true },
    subfaction: { type: Types.ObjectId, ref: "Subfaction", required: true },
    abilities: [{ type: Types.ObjectId, ref: "Ability", required: false }],
    keywords: [{ type: Types.ObjectId, ref: "Keyword", required: false }],
}, { timestamps: true });

export const UnitModel = mongoose.model<Unit>("Unit", UnitSchema);
