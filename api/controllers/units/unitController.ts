import { Request, Response } from "express";
import { UnitModel } from "../../models/units/unitModel";

export const createUnit = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, figure, faction, subfaction, abilities, keywords } = req.body;
        const newUnit = new UnitModel({ name, figure, faction, subfaction, abilities, keywords });
        await newUnit.save();
        res.status(201).json(newUnit);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }
};

export const getUnits = async (req: Request, res: Response): Promise<void> => {
    try {
        const units = await UnitModel.find().populate("figure faction subfaction abilities keywords", "name");
        res.json(units);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const getUnitById = async (req: Request, res: Response): Promise<void> => {
    try {
        const unit = await UnitModel.findById(req.params.id).populate("figure faction subfaction abilities keywords");
        if (!unit) {
            res.status(404).json({ message: "Unit not found" });
            return;
        }
        res.json(unit);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const updateUnit = async (req: Request, res: Response): Promise<void> => {
    try {
        const unit = await UnitModel.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate("figure faction subfaction abilities keywords");
        if (!unit) {
            res.status(404).json({ message: "Unit not found" });
            return;
        }
        res.json(unit);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const deleteUnit = async (req: Request, res: Response): Promise<void> => {
    try {
        const unit = await UnitModel.findByIdAndDelete(req.params.id);
        if (!unit) {
            res.status(404).json({ message: "Unit not found" });
            return;
        }
        res.json({ message: "Unit deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const searchUnits = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name } = req.query;

        if (!name) {
            res.status(400).json({ message: "Name is required" });
            return;
        }

        const units = await UnitModel.find({ name: { $regex: name as string, $options: "i" } }).populate(
            "figure faction subfaction abilities keywords"
        );
        res.json(units);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};