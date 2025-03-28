import mongoose, { Schema } from "mongoose";
import { Ability } from "../../schemas/units/abilitiesSchema";

const AbiltiesSchema: Schema = new mongoose.Schema<Ability>({
    name: { type: String, required: true, minlength: 2 },
    description: { type: String, required: true, minlength: 2 },
}, { timestamps: true });

export const AbilitiesModel = mongoose.model<Ability>("Ability", AbiltiesSchema);