import { Request, Response } from "express";
import { FigureModel } from "@models/units/figureModel";

export const createFigure = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, movement, toughness, saves, wounds, leadership, oc, invurnerableSave, weapon } = req.body;
        const newFigure = new FigureModel({ name, movement, toughness, saves, wounds, leadership, oc, invurnerableSave, weapon });
        await newFigure.save();
        res.status(201).json(newFigure);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }
};

export const getFigures = async (req: Request, res: Response): Promise<void> => {
    try {
        const figures = await FigureModel.find().populate("weapon");
        res.json(figures);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const getFigureById = async (req: Request, res: Response): Promise<void> => {
    try {
        const figure = await FigureModel.findById(req.params.id).populate("weapon");
        if (!figure) {
            res.status(404).json({ message: "Figure not found" });
            return;
        }
        res.json(figure);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const updateFigure = async (req: Request, res: Response): Promise<void> => {
    try {
        const figure = await FigureModel.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate("weapon");
        if (!figure) {
            res.status(404).json({ message: "Figure not found" });
            return;
        }
        res.json(figure);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const deleteFigure = async (req: Request, res: Response): Promise<void> => {
    try {
        const figure = await FigureModel.findByIdAndDelete(req.params.id);
        if (!figure) {
            res.status(404).json({ message: "Figure not found" });
            return;
        }
        res.json({ message: "Figure deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};