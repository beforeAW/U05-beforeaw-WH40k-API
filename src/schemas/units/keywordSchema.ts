import { Document } from "mongoose";

export interface Keyword extends Document {
    name: string;
}