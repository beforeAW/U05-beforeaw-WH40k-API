import { Request, Response } from "express";
import { FactionModel } from "@models/factionModel";
import { Faction } from "@schemas/factionSchema";

export const createFaction = async (req: Request, res: Response) => {
    try {
        const { name}: Omit<Faction, "id"> = req.body;
        if (!name) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const newFaction = new FactionModel({ name });
        await newFaction.save();
        
        res.status(201).json({ message: "Faction created successfully", faction: newFaction });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const getFactions = async (_req: Request, res: Response) => {
    try {
        const factions = await FactionModel.find();
        res.status(200).json(factions);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const getFactionById = async (req: Request, res: Response) => {
    try {
        const faction = await FactionModel.findById(req.params.id);
        if (!faction) {
            return res.status(404).json({ message: "Faction not found" });
        }
        res.status(200).json(faction);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const updateFaction = async (req: Request, res: Response) => {
    try {
        const { name }: Omit<Faction, "id"> = req.body;
        if (!name) {
            return res.status(400).json({ message: "All fields are required" });
        }
        
        const updatedFaction = await FactionModel.findByIdAndUpdate(req.params.id, { name}, { new: true });
        if (!updatedFaction) {
            return res.status(404).json({ message: "Faction not found" });
        }
        res.status(200).json(updatedFaction);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const deleteFaction = async (req: Request, res: Response) => {
    try {
        const deletedFaction = await FactionModel.findByIdAndDelete(req.params.id);
        if (!deletedFaction) {
            return res.status(404).json({ message: "Faction not found" });
        }
        res.status(200).json({ message: "Faction deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};