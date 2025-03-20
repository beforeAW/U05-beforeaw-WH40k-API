import { Request, Response } from "express";
import { FactionModel } from "@models/units/factionModel";

export const createFaction = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name }: { name: string } = req.body;
        const newFaction = new FactionModel({ name });
        await newFaction.save();
        res.status(201).json(newFaction);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }
};

export const getFactions = async (req: Request, res: Response): Promise<void> => {
    try {
        const factions = await FactionModel.find();
        res.json(factions);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const getFactionById = async (req: Request, res: Response): Promise<void> => {
    try {
        const faction = await FactionModel.findById(req.params.id);
        if (!faction) {
            res.status(404).json({ message: "Faction not found" });
            return;
        }
        res.json(faction);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const updateFaction = async (req: Request, res: Response): Promise<void> => {
    try {
        const faction = await FactionModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!faction) {
            res.status(404).json({ message: "Faction not found" });
            return;
        }
        res.json(faction);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const deleteFaction = async (req: Request, res: Response): Promise<void> => {
    try {
        const faction = await FactionModel.findByIdAndDelete(req.params.id);
        if (!faction) {
            res.status(404).json({ message: "Faction not found" });
            return;
        }
        res.json({ message: "Faction deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};