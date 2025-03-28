import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

interface AuthRequest extends Request {
    user?: { id: string; roles: string };
}

export const authenticateUser = (req: AuthRequest, res: Response, next: NextFunction): void => {
    try {
        const authHeader = req.header("Authorization");
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            res.status(401).json({ message: "Access denied. No token provided." });
            return;
        }

        const token = authHeader.split(" ")[1];
        if (!token) {
            res.status(401).json({ message: "Access denied. No token provided." });
            return;
        }

        const decoded = jwt.verify(token, JWT_SECRET) as { id: string; roles: string };
        req.user = decoded; 
        next();
    } catch (error) {
        console.error("Authentication error:", error); 
        res.status(403).json({ message: "Invalid or expired token." });
    }
};

export const authorizeRoles = (roles: string[]) => {
    return (req: AuthRequest, res: Response, next: NextFunction): void => {
        try {
            if (!req.user) {
                res.status(401).json({ message: "Access denied. User not authenticated." })
                return;
            }

            if (!roles.includes(req.user.roles)) {
                res.status(403).json({ message: "Access denied. Insufficient permissions." })
                return;
            }

            next();
        } catch (error) {
            console.error("Authorization error:", error);
            res.status(500).json({ message: "Server error during authorization." });
        }
    };
};
