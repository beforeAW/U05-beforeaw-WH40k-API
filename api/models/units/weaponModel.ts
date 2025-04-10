import mongoose, { Schema, Types } from "mongoose";
import { Weapon, WeaponType } from "../../schemas/units/weaponSchema";

const WeaponSchema: Schema = new Schema({
    name: { type: String, required: true },
    type: { type: String, enum: Object.values(WeaponType), required: true },
    range: { type: String, required: true },
    attacks: { type: Number, required: true },
    skill: { type: Number, required: true },
    strength: { type: Number, required: true },
    armorPenetration: { type: Number, required: false },
    damage: { type: String, required: true },
    weaponsprofile: { type: Types.ObjectId, ref: "Weaponsprofile", required: false },
}, { timestamps: true });

export const WeaponModel = mongoose.model<Weapon>("Weapon", WeaponSchema);