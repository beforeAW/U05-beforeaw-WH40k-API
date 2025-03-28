import { Request, Response } from "express";
import { WeaponsprofileModel } from "../../models/units/weaponsprofileModel";

export const createWeaponsprofile = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name }: { name: string } = req.body;
        const newWeaponsprofile = new WeaponsprofileModel({ name });
        await newWeaponsprofile.save();
        res.status(201).json(newWeaponsprofile);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }
};

export const createWeaponsprofilesBulk = async (req: Request, res: Response): Promise<void> => {
    try {
        const newWeaponsprofiles = await WeaponsprofileModel.insertMany(req.body);
        res.status(201).json(newWeaponsprofiles);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }
};

export const getWeaponsprofile = async (req: Request, res: Response): Promise<void> => {
    try {
        const weaponsprofiles = await WeaponsprofileModel.find();
        res.json(weaponsprofiles);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const getWeaponsprofileById = async (req: Request, res: Response): Promise<void> => {
    try {
        const weaponsprofile = await WeaponsprofileModel.findById(req.params.id);
        if (!weaponsprofile) {
            res.status(404).json({ message: "Weaponsprofile not found" });
            return;
        }
        res.json(weaponsprofile);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const updateWeaponsprofile = async (req: Request, res: Response): Promise<void> => {
    try {
        const weaponsprofile = await WeaponsprofileModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!weaponsprofile) {
            res.status(404).json({ message: "Weaponsprofile not found" });
            return;
        }
        res.json(weaponsprofile);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const deleteWeaponsprofile = async (req: Request, res: Response): Promise<void> => {
    try {
        const weaponsprofile = await WeaponsprofileModel.findByIdAndDelete(req.params.id);
        if (!weaponsprofile) {
            res.status(404).json({ message: "Weaponsprofile not found" });
            return;
        }
        res.json({ message: "Weaponsprofile deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};