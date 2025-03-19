import { Document } from "mongoose";

export interface Abilities extends Document {
    name: string;
    description: string;
}