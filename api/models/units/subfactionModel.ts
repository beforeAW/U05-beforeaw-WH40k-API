import mongoose, { Schema, Types } from "mongoose";
import { Subfaction } from "../../schemas/units/subfactionSchema";

const SubfactionSchema: Schema = new Schema({
    name: { type: String, required: true },
    faction: { type: Types.ObjectId, ref: "Faction", required: true },
}, { timestamps: true });

export const SubfactionModel = mongoose.model<Subfaction>("Subfaction", SubfactionSchema);