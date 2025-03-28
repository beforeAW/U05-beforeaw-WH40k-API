import { Request, Response } from "express";
import { UserModel } from "../../models/auth/userModel";

export const getUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const users = await UserModel.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const getUserById = async (req: Request, res: Response): Promise<void> => {
    try {
        const user = await UserModel.findById(req.params.id);
        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const getUsersPaginate = async (req: Request, res: Response): Promise<void> => {
    try {
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 10;
        const skip = (page - 1) * limit;

        const users = await UserModel.find().limit(limit).skip(skip);
        const totalCount = await UserModel.countDocuments();

        res.json({
            totalCount,
            totalPages: Math.ceil(totalCount / limit),
            currentPage: page,
            users,
        });
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const updateUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const user = await UserModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const deleteUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const user = await UserModel.findByIdAndDelete(req.params.id);
        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }
        res.json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};