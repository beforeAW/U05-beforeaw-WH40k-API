import { Document } from "mongoose";

export enum UserType {
  Member = "Member",
  Admin = "Admin",
}

export interface User extends Document {
    email: string;
    password: string;
    username: string;
    roles: UserType;
}
