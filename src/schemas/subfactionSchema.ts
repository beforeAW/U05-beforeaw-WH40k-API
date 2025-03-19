import { Document, Types } from "mongoose";
import { Faction } from "@schemas/factionSchema";

export interface Subfaction extends Document {
    name: string;
    faction: Types.ObjectId | Faction;
}