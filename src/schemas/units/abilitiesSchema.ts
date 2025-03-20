import { Document } from "mongoose";

export interface Ability extends Document {
    name: string;
    description: string;
}