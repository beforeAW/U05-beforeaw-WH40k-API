import { Request, Response } from "express";
import { KeywordModel } from "../../models/units/keywordModel";

export const createKeyword = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name }: { name: string } = req.body;
        const newKeyword = new KeywordModel({ name });
        await newKeyword.save();
        res.status(201).json(newKeyword);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }
};

export const createKeywordsBulk = async (req: Request, res: Response): Promise<void> => {
    try {
        const newKeywords = await KeywordModel.insertMany(req.body);
        res.status(201).json(newKeywords);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }
};


export const getKeywords = async (req: Request, res: Response): Promise<void> => {
    try {
        const keywords = await KeywordModel.find();
        res.json(keywords);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const getKeywordById = async (req: Request, res: Response): Promise<void> => {
    try {
        const keyword = await KeywordModel.findById(req.params.id);
        if (!keyword) {
            res.status(404).json({ message: "Keyword not found" });
            return;
        }
        res.json(keyword);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const updateKeyword = async (req: Request, res: Response): Promise<void> => {
    try {
        const keyword = await KeywordModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!keyword) {
            res.status(404).json({ message: "Keyword not found" });
            return;
        }
        res.json(keyword);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const deleteKeyword = async (req: Request, res: Response): Promise<void> => {
    try {
        const keyword = await KeywordModel.findByIdAndDelete(req.params.id);
        if (!keyword) {
            res.status(404).json({ message: "Keyword not found" });
            return;
        }
        res.json({ message: "Keyword deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};