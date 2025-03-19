import { Document } from "mongoose";

export interface Faction extends Document {
    name: string;
}