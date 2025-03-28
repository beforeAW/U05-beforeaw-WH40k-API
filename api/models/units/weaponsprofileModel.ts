import mongoose, { Schema } from "mongoose";
import { Weaponsprofile } from "../../schemas/units/weaponsprofileSchema";

const WeaponsprofileSchema: Schema = new mongoose.Schema<Weaponsprofile>({
    name: { type: String, required: true, minlength: 2 },
}, { timestamps: true });

export const WeaponsprofileModel = mongoose.model<Weaponsprofile>("Weaponsprofile", WeaponsprofileSchema);