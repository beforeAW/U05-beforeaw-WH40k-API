import mongoose, { Schema, Types } from "mongoose";
import { Figure } from "@schemas/figureSchema";

const FigureSchema: Schema = new Schema({
    name: { type: String, required: true },
    movement: { type: Number, required: true },
    toughness: { type: Number, required: true },
    saves: { type: Number, required: true },
    wounds: { type: Number, required: true },
    leadership: { type: Number, required: true },
    oc: { type: Number, required: true },
    invurnerableSave: { type: Number, required: false },
    weapon: [{ type: Types.ObjectId, ref: "Weapon", required: false }],
}, { timestamps: true });

export const FigureModel = mongoose.model<Figure>("Figure", FigureSchema);

