import { Document, Types } from "mongoose";
import { Weapon } from "./weaponSchema";


export interface Figure extends Document {
    name: string;
    movement: number;
    toughness: number;
    saves: number;
    wounds: number;
    leadership: number;
    oc: number;
    invurnerableSave: number;
    weapon: Types.ObjectId[] | Weapon[];
}