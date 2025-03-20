import { Request, Response } from "express";
import { WeaponModel } from "@models/units/weaponModel";

export const createWeapon = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, type, range, attacks, skill, strength, armorPenetration, damage, weaponsprofile } = req.body;
        const newWeapon = new WeaponModel({ name, type, range, attacks, skill, strength, armorPenetration, damage, weaponsprofile });
        await newWeapon.save();
        res.status(201).json(newWeapon);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }
};

export const getWeapons = async (req: Request, res: Response): Promise<void> => {
    try {
        const weapons = await WeaponModel.find().populate("weaponsprofile");
        res.json(weapons);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const getWeaponById = async (req: Request, res: Response): Promise<void> => {
    try {
        const weapon = await WeaponModel.findById(req.params.id).populate("weaponsprofile");
        if (!weapon) {
            res.status(404).json({ message: "Weapon not found" });
            return;
        }
        res.json(weapon);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const updateWeapon = async (req: Request, res: Response): Promise<void> => {
    try {
        const weapon = await WeaponModel.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate("weaponsprofile");
        if (!weapon) {
            res.status(404).json({ message: "Weapon not found" });
            return;
        }
        res.json(weapon);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const deleteWeapon = async (req: Request, res: Response): Promise<void> => {
    try {
        const weapon = await WeaponModel.findByIdAndDelete(req.params.id);
        if (!weapon) {
            res.status(404).json({ message: "Weapon not found" });
            return;
        }
        res.json({ message: "Weapon deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};