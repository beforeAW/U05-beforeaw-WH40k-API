import { Document, Types } from "mongoose";
import { Weaponsprofile } from "@schemas/weaponsprofileSchema";

export enum WeaponType {
    Melee = "Melee",
    Ranged = "Ranged",
}

export interface Weapon extends Document {
    name: string;
    type: WeaponType;
    range: string;
    attacks: number;
    skill: number;
    strength: number;
    armorPenetration: number;
    damage: string;
    weaponsprofile: Types.ObjectId | Weaponsprofile;
}