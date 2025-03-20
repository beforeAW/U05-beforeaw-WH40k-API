import { Document, Types } from "mongoose";
import { Figure } from "@schemas/figureSchema";
import { Faction } from "@schemas/factionSchema";
import { Subfaction } from "@schemas/subfactionSchema";
import { Ability } from "./abilitiesSchema";
import { Keyword } from "./keywordSchema";



export interface Unit extends Document {
    name: string;
    figure: Types.ObjectId[] | Figure[];
    faction: Types.ObjectId | Faction;
    subfaction: Types.ObjectId | Subfaction;
    abilities: Types.ObjectId[] | Ability[];
    keywords: Types.ObjectId[] | Keyword[];
}