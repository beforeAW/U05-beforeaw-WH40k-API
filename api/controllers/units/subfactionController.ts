import { Request, Response } from "express";
import { SubfactionModel } from "../../models/units/subfactionModel";

export const createSubfaction = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, faction }: { name: string; faction: string } = req.body;
        const newSubfaction = new SubfactionModel({ name, faction });
        await newSubfaction.save();
        res.status(201).json(newSubfaction);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }
};

export const getSubfactions = async (req: Request, res: Response): Promise<void> => {
    try {
        const subfactions = await SubfactionModel.find().populate("faction");
        res.json(subfactions);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const getSubfactionById = async (req: Request, res: Response): Promise<void> => {
    try {
        const subfaction = await SubfactionModel.findById(req.params.id).populate("faction");
        if (!subfaction) {
            res.status(404).json({ message: "Subfaction not found" });
            return;
        }
        res.json(subfaction);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const updateSubfaction = async (req: Request, res: Response): Promise<void> => {
    try {
        const subfaction = await SubfactionModel.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate("faction");
        if (!subfaction) {
            res.status(404).json({ message: "Subfaction not found" });
            return;
        }
        res.json(subfaction);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const deleteSubfaction = async (req: Request, res: Response): Promise<void> => {
    try {
        const subfaction = await SubfactionModel.findByIdAndDelete(req.params.id);
        if (!subfaction) {
            res.status(404).json({ message: "Subfaction not found" });
            return;
        }
        res.json({ message: "Subfaction deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};