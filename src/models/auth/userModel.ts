import mongoose, { Schema } from "mongoose";
import { User, UserType } from "@schemas/auth/userSchema";

const UserSchema: Schema = new mongoose.Schema<User>({
    username: { type: String, required: true, minlength: 8 },
    email: { type: String, required: true, minlength: 2, unique: true },
    password: { type: String, required: true, minlength: 8 },
    roles: { type: String, enum: Object.values(UserType), default: UserType.User },
}, { timestamps: true });

export const UserModel = mongoose.model<User>("User", UserSchema);