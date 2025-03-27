import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

interface AuthRequest extends Request {
    user?: { id: string; roles: string };
}

export const authenticateUser = (req: AuthRequest, res: Response, next: NextFunction): void => {
    const token = req.header("Authorization")?.split(" ")[1];

    if (!token) {
      res.status(401).json({ message: "Access denied. No token provided." });
      return; 
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET) as { id: string; roles: string };
        req.user = decoded;
        next();
    } catch (error) {
        res.status(403).json({ message: "Invalid or expired token." });
    }
};

export const authorizeRoles = (roles: string[]) => {
    return (req: AuthRequest, res: Response, next: NextFunction): void => {
        if (!req.user || !roles.includes(req.user.roles)) {
          res.status(403).json({ message: "Access denied. Insufficient permissions." });
          return; // Ensure the function ends here
        }
        next();
    };
};
