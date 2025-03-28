import { Document } from "mongoose";

export enum UserType {
  User = "user",
  Admin = "admin",
}

export interface User extends Document {
    email: string;
    password: string;
    username: string;
    roles: UserType;
}
