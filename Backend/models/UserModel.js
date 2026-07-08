import mongoose from "mongoose";
import UserSchema from "../schema/UserSchema.js";
const UserModel = new mongoose.model("user",UserSchema);
export default UserModel;