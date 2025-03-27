import { Document } from "mongoose";

export enum UserType {
  Member = "member",
  Admin = "admin",
}

export interface User extends Document {
    email: string;
    password: string;
    username: string;
    roles: UserType;
}
