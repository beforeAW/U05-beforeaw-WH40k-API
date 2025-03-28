import { Request, Response } from "express";
import { AbilitiesModel } from "../../models/units/abilitiesModel";

export const createAbility = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, description }: { name: string; description: string } = req.body;
        const newAbilities = new AbilitiesModel({ name, description });
        await newAbilities.save();
        res.status(201).json(newAbilities);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }
};

export const createAbilitiesBulk = async (req: Request, res: Response): Promise<void> => {
    try {
        const newAbilities = await AbilitiesModel.insertMany(req.body);
        res.status(201).json(newAbilities);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }
};

export const getAbilities = async (req: Request, res: Response): Promise<void> => {
    try {
        const abilities = await AbilitiesModel.find();
        res.json(abilities);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const getAbilityById = async (req: Request, res: Response): Promise<void> => {
    try {
        const ability = await AbilitiesModel.findById(req.params.id);
        if (!ability) {
            res.status(404).json({ message: "Ability not found" });
            return;
        }
        res.json(ability);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const updateAbility = async (req: Request, res: Response): Promise<void> => {
    try {
        const ability = await AbilitiesModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!ability) {
            res.status(404).json({ message: "Ability not found" });
            return;
        }
        res.json(ability);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const deleteAbility = async (req: Request, res: Response): Promise<void> => {
    try {
        const ability = await AbilitiesModel.findByIdAndDelete(req.params.id);
        if (!ability) {
            res.status(404).json({ message: "Ability not found" });
            return;
        }
        res.json({ message: "Ability deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};